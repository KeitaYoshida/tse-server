<template>
  <v-app>
    <v-container grid-list-xs>
      <transition name="fade">
        <Loading v-if="loading"></Loading>
        <div v-else>
          <h1>製造データ</h1>
          <v-btn small outline color="primary" @click="orderedPdct">発注済み</v-btn>
          <v-btn small outline color="primary" @click="workedPdct">起工済み</v-btn>
          <v-btn small outline color="primary" @click="allPdct">全件データ</v-btn>
          <v-btn small outline color="success" @click="addProductView=!addProductView">空製造データ作成</v-btn>
          <v-text-field
            label="検索"
            :value="search_x"
            prepend-inner-icon="fas fa-search"
            autofocus
            @input="SEARCH_MODELCONST($event)"
          ></v-text-field>
          <v-data-table
            :headers="headers"
            :items="pdct"
            item-key="pdct_id"
            :search="search_x"
            :rows-per-page-items="[25,50,{'text':'All','value':-1}]"
            :pagination.sync="pagination"
          >
            <template v-slot:items="props">
              <td class="text-xs-center">
                <p class="pt-1 pb-1">
                  <v-chip
                    outline
                    :class="addClassClass(props.item.pdct_class)"
                  >{{ props.item.pdct_class }}</v-chip>
                  <v-chip
                    outline
                    :class="addClassClass(props.item.status.st_val)"
                  >{{ props.item.status.st_val }}</v-chip>
                </p>
              </td>
              <td class="text-xs-center">{{ props.item.model_id }}</td>
              <td class="text-xs-center">{{ props.item.const_code }}</td>
              <td class="text-xs-center" width="330px">
                <v-layout row wrap class="buttons">
                  <v-flex xs4>
                    <v-btn color="warning" outline small @click="view_list('zyutyu',props)">
                      <template v-if="props.item.child.lengt !==0">
                        <v-badge right color="orange darken-1">
                          <template v-slot:badge>
                            <span>{{ props.item.child.length }}</span>
                          </template>
                          <strong>受注</strong>
                        </v-badge>
                      </template>
                      <template v-else>
                        <strong>受注</strong>
                      </template>
                    </v-btn>
                  </v-flex>
                  <v-flex xs4>
                    <v-btn
                      color="success"
                      outline
                      small
                      @click="view_list('tyumon',props)"
                      class="mb-0"
                    >
                      <v-badge right color="green darken-1" class="outline">
                        <template v-slot:badge v-if="props.item.orders.length > 0">
                          <span>{{ props.item.orders.length }}</span>
                        </template>
                        <strong>注文</strong>
                      </v-badge>
                    </v-btn>
                    <div class="px-2 py-0 my-1" v-if="tyumonView(props.item)">
                      <v-progress-linear
                        color="green darken-1"
                        :value="rtComContext(props.item.orders)"
                        height="3"
                      ></v-progress-linear>
                    </div>
                  </v-flex>
                  <v-flex xs4>
                    <v-btn
                      color="primary"
                      outline
                      small
                      @click="view_list('workdata',props)"
                      class="mb-0"
                    >
                      <v-badge right color="indigo lighten-1">
                        <template v-slot:badge v-if="props.item.workdata.length > 0">
                          <span>{{ props.item.workdata.length }}</span>
                        </template>
                        <strong>製造</strong>
                      </v-badge>
                    </v-btn>
                    <div class="px-2 py-0 my-1" v-if="makeView(props.item)">
                      <v-progress-linear
                        color="green darken-1"
                        :value="rtComContext(props.item.workdata)"
                        height="3"
                      ></v-progress-linear>
                    </div>
                  </v-flex>
                </v-layout>
              </td>
            </template>

            <template v-slot:expand="props">
              <template v-if="exMode === 'zyutyu'">
                <Zyutyu :target="target"></Zyutyu>
              </template>
              <template v-if="exMode === 'tyumon'">
                <Tyumon :target="target" :model_data="model_data"></Tyumon>
              </template>
              <template v-if="exMode === 'workdata'">
                <Workdata></Workdata>
              </template>
            </template>
          </v-data-table>
        </div>
      </transition>
      <v-dialog
        v-model="addProductView"
        max-width="500px"
        transition="dialog-transition"
        persistent
      >
        <v-card v-if="addProductView">
          <v-btn small icon @click="closeProductView()">
            <v-icon small>fas fa-times</v-icon>
          </v-btn>
          <v-card-text>
            <v-text-field
              name="model-select"
              label="形式検索"
              v-bind:value="modelSelect"
              autofocus
              @input="changeModelSelectValue($event)"
            ></v-text-field>
            <template v-if="selectModels!==null">
              <div>
                <v-select :items="selectModels" v-model="selectModelData" label="形式"></v-select>
                <v-text-field name="pdct-name" label="製造コード" v-model="makePdctName"></v-text-field>
                <v-btn block outline @click="makePdct()">作成</v-btn>
              </div>
            </template>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="make_order"
        scrollable
        hide-overlay
        transition="dialog-bottom-transition"
        width="550px"
      >
        <MakeOrder :target="target" v-if="make_order" @crOrder="crOrder" @init="init"></MakeOrder>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
import Loading from "./../com/Loading";
import Zyutyu from "./Zyutyu";
import Tyumon from "./Tyumon";
import Workdata from "./Workdata";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {
    Loading,
    Zyutyu,
    Tyumon,
    Workdata
  },
  data: function() {
    return {
      makePdctName: "",
      selectModels: null,
      selectModelData: "",
      modelSelect: "",
      addProductView: false,
      loading: true,
      pdct: null,
      items: null,
      headers: [
        { text: "区分", value: "pdct_class", align: "center" },
        { text: "形式", value: "model_id", align: "center" },
        { text: "製造コード", value: "const_code", align: "center" },
        { text: "処理", value: "none", align: "center" }
      ],
      exMode: "zyutyu",
      pagination: {
        sortBy: "model_id",
        descending: false
      },
      target: null,
      make_order: false,
      model_data: null
    };
  },
  created: function() {
    this.init();
  },
  computed: {
    ...mapState({
      tar: "target",
      search_x: state => state.search.modelconst
    })
  },
  methods: {
    ...mapActions(["PDCT_ABOUT_SET", "SEARCH_MODELCONST"]),
    init() {
      axios.get("/db/pdct/list/live").then(res => {
        let d = (this.pdct = this.items = res.data);

        this.loading = false;
        d.forEach((ar, index) => {
          if (ar.pdct_status !== 9) {
            let another_del = false;
            let all_num = 0;
            let all_price = 0;
            ar.child.forEach((a, ind) => {
              another_del = a.rcpt_status !== 9 ? true : another_del;
              all_num = all_num + a.order_num;
              all_price = all_price + a.order_num * a.order_price_one;
            });
            if (another_del === false) {
              ar.status.pdct_status = 9;
              ar.status.st_val = "リンク切れ";
              console.log("リンク切れ" + ar.const_code);
              axios.get("/db/pdct/nolink/" + ar.pdct_id);
            }
            ar.all_num = all_num;
            ar.all_price = all_price;
          }
        });
        axios.get("/db/model_mst/list").then(res => {
          this.model_data = res.data;
        });
      });
    },
    rtOrderPrice(orders) {
      let price = 0;
      orders.forEach((ar, n) => {
        price = price + ar.order_price;
      });
      return price.toLocaleString();
    },
    addClassClass(val) {
      let addClass = "";
      switch (val) {
        case "部品":
          addClass = "buhin";
          break;
        case "修理":
          addClass = "shuri";
          break;
        case "製品":
          addClass = "seihin";
          break;
        case "他":
          addClass = "etc";
          break;
        case "新規":
          addClass = "shinki";
          break;
      }
      return addClass;
    },
    view_list(type, props) {
      this.target = props.item;
      this.exMode = type;
      let d = {
        id: props.item.pdct_id,
        code: props.item.const_code,
        model: props.item.model_id,
        workdata: props.item.workdata
      };
      this.PDCT_ABOUT_SET(d);
      props.expanded = true;
    },
    tyumonView(item) {
      return item.orders.length === 0 ? false : true;
    },
    makeView(item) {
      return item.workdata.length === 0 ? false : true;
    },
    rtComContext(arr) {
      let count = arr.length;
      let sum = 0;
      arr.forEach(ar => {
        sum = sum + ar.context;
      });
      return sum / count;
    },
    orderedPdct() {
      this.pdct = this.items.filter(ar => ar.orders.length > 0);
    },
    workedPdct() {
      this.pdct = this.items.filter(ar => ar.workdata.length > 0);
    },
    allPdct() {
      this.pdct = this.items;
    },
    changeModelSelectValue(e) {
      let target = this.model_data.filter(ar => {
        let ml = ar.model_code.toLowerCase();
        let el = e.toLowerCase();
        return ml.indexOf(el) >= 0;
      });
      if (target.length < 10 && target.length !== 0) {
        this.selectModels = target.map(ar => ar.model_code);
        this.selectModelData = target[0].model_code;
      } else {
        this.selectModels = null;
        this.selectModelData = "";
      }
    },
    closeProductView() {
      this.addProductView = false;
      this.selectModels = null;
      this.selectModelData = "";
    },
    async makePdct() {
      const Pdct_class = "TSE";
      let mName = this.selectModelData;
      let pName = this.makePdctName;
      if (pName == false) return;
      await axios.get(
        "/db/pdct/create/" + mName + "/" + pName + "/" + Pdct_class
      );
      this.SEARCH_MODELCONST(pName);
      this.addProductView = false;
      this.init();
    }
  },
  beforeDestroy: function() {
    let d = {
      id: null,
      code: null,
      model: null,
      workdata: []
    };
    // this.PDCT_ABOUT_SET(d);
  }
};
</script>

<style lang="scss" scoped>
.view_lists {
  font-size: 1rem;
}
td {
  padding: 0 !important;
  p {
    text-align: center;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}
.v-chip {
  font-size: 0.9rem;
  margin: 0;
  border-radius: 5px;
}
.v-chip.v-chip.v-chip--outline {
  height: 24px;
}
.v-chip.buhin {
  border-color: #4e342e;
  color: #4e342e;
}
.v-chip.shuri {
  border-color: #ef6c00;
  color: #ef6c00;
}
.v-chip.seihin {
  border-color: #283593;
  color: #283593;
}
.v-chip.etc {
  border-color: #2e7d32;
  color: #2e7d32;
}
.v-chip.shinki {
  border-color: #4caf50;
  color: #4caf50;
}
.mini {
  font-size: 0.6rem;
}
.buttons {
  max-width: 330px;
}
.v-progress-linear {
  margin: 0;
}
h1 {
  display: inline-block;
}
</style>

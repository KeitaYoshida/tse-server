<template>
  <v-app>
    <v-container grid-list-xs>
      <transition name="fade">
        <Loading v-if="loading"></Loading>
        <div v-else>
          <h1>製造データ</h1>
          <v-text-field
            name="search"
            label="検索"
            id="search"
            v-model="search"
            prepend-inner-icon="fas fa-search"
          ></v-text-field>
          <v-data-table
            :headers="headers"
            :items="pdct"
            item-key="pdct_id"
            :search="search"
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
                </p>
                <p class="pb-1">
                  <v-chip
                    outline
                    :class="addClassClass(props.item.status.st_val)"
                  >{{ props.item.status.st_val }}</v-chip>
                </p>
              </td>
              <td class="text-xs-center">{{ props.item.model_id }}</td>
              <td class="text-xs-center">{{ props.item.const_code }}</td>
              <td class="text-xs-center">{{ props.item.all_num }}</td>
              <td class="text-xs-center">
                <p>{{ Number(props.item.all_price).toLocaleString() }}</p>
                <p v-if="props.item.orders" class="mini">{{ rtOrderPrice(props.item.orders) }}</p>
              </td>
              <td class="text-xs-center">
                <v-btn color="warning" outline small @click="view_list('zyutyu',props)">
                  <template v-if="props.item.child.lengt !==0">
                    <v-badge right color="orange darken-1">
                      <template v-slot:badge outline>
                        <span>{{ props.item.child.length }}</span>
                      </template>
                      <strong>受注</strong>
                    </v-badge>
                  </template>
                  <template v-else>
                    <strong>受注</strong>
                  </template>
                </v-btn>
                <v-btn color="success" outline small @click="view_list('tyumon',props)">
                  <v-badge right color="green darken-1" class="outline">
                    <template v-slot:badge v-if="props.item.orders.length > 0">
                      <span>{{ props.item.orders.length }}</span>
                    </template>
                    <strong>注文</strong>
                  </v-badge>
                </v-btn>
                <v-btn color="primary" outline small @click="view_list('seizo',props)">
                  <v-badge right color="indigo darken-1">
                    <template v-slot:badge outline>
                      <span>{{ props.item.child.length }}</span>
                    </template>
                    <strong>製造</strong>
                  </v-badge>
                </v-btn>
              </td>
            </template>

            <template v-slot:expand="props">
              <template v-if="exMode === 'zyutyu'">
                <Zyutyu :target="target"></Zyutyu>
              </template>
              <template v-if="exMode === 'tyumon'">
                <Tyumon :target="target" :model_data="model_data"></Tyumon>
              </template>
              <template v-if="exMode === 'seizo'">s</template>
            </template>
          </v-data-table>
        </div>
      </transition>
      <v-dialog
        v-model="make_order"
        scrollable
        hide-overlay
        transition="dialog-bottom-transition"
        width="550px"
      >
        <MakeOrder :target="target" v-if="make_order" @crOrder="crOrder"></MakeOrder>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
import Loading from "./../com/Loading";
import Zyutyu from "./Zyutyu";
import Tyumon from "./Tyumon";

export default {
  components: {
    Loading,
    Zyutyu,
    Tyumon
  },
  data: function() {
    return {
      loading: true,
      pdct: null,
      search: "",
      headers: [
        { text: "区分", value: "pdct_class", align: "center" },
        { text: "形式", value: "model_id", align: "center" },
        { text: "製造コード", value: "pdct_code", align: "center" },
        { text: "総受注数", value: "all_num", align: "center" },
        { text: "受注・手配金額", value: "all_price", align: "center" },
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
  methods: {
    init() {
      axios.get("/db/pdct/list/live").then(res => {
        let d = (this.pdct = res.data);
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
      props.expanded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.view_lists {
  font-size: 1rem;
}
td {
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
</style>

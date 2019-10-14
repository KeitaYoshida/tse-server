<template>
  <v-app>
    <v-container>
      <h1>形式マスタ</h1>
      <v-text-field
        :value="search_x"
        append-icon="search"
        label="Search"
        @input="filterList($event)"
        autofocus
        clearable
      ></v-text-field>
      <br />
      <v-data-table
        :headers="headers"
        :items="lists"
        :search="search"
        :rows-per-page-items="view_row_setting"
        :loading="loading"
        item-key="model_id"
        class="model"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">
            <p class="model-code">{{ props.item.model_code }}</p>
            <span class="ne blue-grey--text">{{ props.item.model_code_ne }}</span>
            <span class="rev blue-grey--text">{{ props.item.model_rev.numToRev() }}</span>
          </td>
          <td class="text-xs-center">{{ props.item.model_name }}</td>
          <td class="align-center justify-center layout px-0">
            <v-btn
              color="deep-orange lighten-2"
              outline
              small
              :loading="loading"
              @click.stop="viewCmptSetting(props.item)"
            >
              <v-icon small left class="icon-edit">far fa-list-alt</v-icon>部材構成
            </v-btn>
            <v-btn color="success" outline small :loading="loading" @click="showCmpt(props)">
              <v-icon small left class="icon-edit">fas fa-edit</v-icon>工程登録
              <v-icon small right class="icon-edit">fas fa-angle-double-down</v-icon>
            </v-btn>
            <v-btn
              color="red lighten-1"
              outline
              small
              :loading="loading"
              @click="delete_model=!delete_model;delete_target=props.item.model_id"
            >
              <v-icon small left class="icon-edit">fas fa-trash-alt</v-icon>削除
            </v-btn>
          </td>
        </template>
        <template v-slot:expand="props">
          <v-layout wrap>
            <v-flex
              xs6
              md4
              lg3
              v-for="(item, index) in props.item.cmpt"
              :key="index"
              class="pa-3 cmpt"
            >
              <v-card flat class="cmpt_card" color="indigo--text text--lighten-2">
                <v-card-text class="cmpt_text">
                  <p>{{ item.cmpt_code }}</p>
                  <p class="cmpt_rev">{{ item.cmpt_rev.numToRev() }}</p>
                  <p class="cmpt_name">{{ item.cmpt_name }}</p>
                </v-card-text>
                <v-layout wrap class="text-xs-center">
                  <v-flex xs3>
                    <v-btn icon @click="upAction(item, props.item)">
                      <v-icon small class="indigo--text text--lighten-2">fas fa-chevron-left</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn flat disabled>
                      <span class="indigo--text text--lighten-2">SN表示順: {{ item.pivot.row }}</span>
                    </v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn icon @click="downAction(item, props.item)">
                      <v-icon small class="indigo--text text--lighten-2">fas fa-chevron-right</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-card-actions>
                  <v-layout wrap>
                    <v-flex xs6>
                      <v-btn color="indigo lighten-2" outline @click="addWorkData(item)">工程登録</v-btn>
                    </v-flex>
                    <v-flex xs6>
                      <v-btn color="warning" outline @click="delCmpt(item, props.item)">削除</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog v-model="delete_model" max-width="500px" transition="dialog-transition">
      <DeleteCheck :data="delete_data" v-if="delete_model" @rt="deleteAction"></DeleteCheck>
    </v-dialog>
  </v-app>
</template>

<script>
import CmptData from "./../ReadFile/Model/ComponentEntry";
import { mapState, mapMutations, mapActions } from "vuex";
import DeleteCheck from "@/components/com/ComCheckDialog";
// import { SET_MODEL_COM } from "@/store/mutations";

export default {
  components: {
    CmptData,
    DeleteCheck
  },
  computed: {
    ...mapState({
      target: "target",
      search_x: state => state.search.modelconst
    })
  },
  data: function() {
    return {
      items: [],
      lists: [],
      headers: [
        { text: "形式", value: "model_code", align: "center" },
        { text: "形式名", value: "model_name", align: "center" },
        { text: "処理", value: "", align: "center" }
      ],
      search: "",
      view_row_setting: [
        20,
        50,
        100,
        {
          text: "$vuetify.dataIterator.rowsPerPageAll",
          value: -1
        }
      ],
      loading: true,
      delete_model: false,
      delete_data: {
        title: "形式データを削除します",
        message: "",
        data_v2: null
      },
      delete_target: null
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapMutations(["SET_MODEL_COM", "RESET_COMPONENT_COM"]),
    ...mapActions(["SET_COMPONENT_COM", "SEARCH_MODELCONST"]),
    init() {
      axios.get("/db/model_mst/list").then(res => {
        this.items = res.data;
        this.loading = false;
        this.filterAct(this.search_x);
      });
    },
    viewCmptSetting(i) {
      this.loading = true;
      let fm = {
        model: i.model_code,
        rev: i.model_rev
      };
      axios.get("/db/model_mst/data/" + i.model_id).then(res => {
        this.$router.push({
          name: "order",
          params: {
            tar_model: res.data[0],
            fm: fm,
            mode: "cmpt",
            rtname: "product_list"
          }
        });
      });
    },
    showCmpt(props) {
      props.expanded = !props.expanded;
      let model = {
        id: props.item.model_id,
        code: props.item.model_code,
        rev: props.item.model_rev
      };
      this.SET_MODEL_COM(model);
      this.RESET_COMPONENT_COM();
    },
    async addWorkData(item) {
      let res = await axios.get(
        "/db/model_mst/data/" + this.target.model.id + "/fromItem"
      );
      let cmpt_data = res.data[0].cmpt.filter(ar => {
        return ar.cmpt_id === item.cmpt_id;
      });
      let cmpt = {
        id: item.cmpt_id,
        code: item.cmpt_code,
        rev: item.cmpt_rev,
        data: cmpt_data
      };
      await this.SET_COMPONENT_COM(cmpt);
      this.$router.push("/model_mst/work_set/cmpt");
    },
    upAction(item, parent) {
      if (item.pivot.row - 1 < 0) return;
      item.pivot.row = item.pivot.row - 1;
      parent.cmpt = parent.cmpt.sort(function(a, b) {
        if (a.pivot.row > b.pivot.row) return 1;
        else return -1;
      });
      let model_id = item.pivot.model_id;
      let cmpt_id = item.pivot.cmpt_id;
      let row = item.pivot.row;
      axios
        .get(
          "/db/model_mst/cmpt/row/set/" + model_id + "/" + cmpt_id + "/" + row
        )
        .then(res => {
          // console.log(res);
        });
    },
    downAction(item, parent) {
      if (item.pivot.row + 1 > parent.cmpt.length - 1) return;
      item.pivot.row = item.pivot.row + 1;
      parent.cmpt = parent.cmpt.sort(function(a, b) {
        if (a.pivot.row > b.pivot.row) return 1;
        else return -1;
      });
      let model_id = item.pivot.model_id;
      let cmpt_id = item.pivot.cmpt_id;
      let row = item.pivot.row;
      axios
        .get(
          "/db/model_mst/cmpt/row/set/" + model_id + "/" + cmpt_id + "/" + row
        )
        .then(res => {
          // console.log(res);
        });
    },
    deleteAction() {
      this.items = this.items.filter(ar => ar.model_id !== this.delete_target);
      this.delete_model = !this.delete_model;
      axios
        .get("/db/model_mst/delete/model/" + this.delete_target)
        .then(res => {
          // console.log(res.data);
        });
    },
    filterList(e) {
      this.SEARCH_MODELCONST(e);
    },
    filterAct(val) {
      if (val === null) {
        this.lists = this.items;
        return;
      }
      val = val === null ? "" : val;
      let tar = val.toLowerCase();
      this.lists = this.items.filter(ar => {
        return ~ar.model_code.toLowerCase().indexOf(tar);
      });
    },
    delCmpt(item, model) {
      let model_id = model.model_id;
      let cmpt_id = item.cmpt_id;
      let itemIndex = 0;
      let cmptIndex = 0;
      this.items.forEach((ar, n) => {
        if (ar.model_id === model_id) {
          itemIndex = n;
          ar.cmpt.forEach((cmAr, cmN) => {
            if (cmAr.cmpt_id === cmpt_id) cmptIndex = cmN;
          });
        }
      });
      this.items[itemIndex].cmpt.splice(cmptIndex, 1);
    }
  },
  watch: {
    search_x: function(val) {
      this.filterAct(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.model-code {
  font-size: 1.5rem;
  margin: 0;
  padding-top: 0.5rem;
}
.ne {
  padding-left: 3rem;
  font-size: 1rem;
  padding-bottom: 0.5rem;
}
.rev {
  font-size: 1rem;
  padding: 0 0.5rem;
}
.cmpt_card {
  border: 1px solid #7986cb;
  p {
    margin-bottom: 0.2rem;
  }
}
.cmpt {
  text-align: center;
}
.cmpt_text {
  font-size: 1rem;
}
.cmpt_rev {
  font-size: 0.5rem;
  text-align: right;
  margin-right: 10%;
}
</style>

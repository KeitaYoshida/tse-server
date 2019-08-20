<template>
  <v-app>
    <v-container>
      <h1>形式マスタ</h1>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <br />
      <v-data-table
        :headers="headers"
        :items="items"
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
            <v-btn color="success" outline small :loading="loading">
              <v-icon small left class="icon-edit">fas fa-edit</v-icon>工程登録
            </v-btn>
            <v-btn color="success" outline small icon @click="showCmpt(props)">
              <v-icon small class="icon-edit">fas fa-angle-double-down</v-icon>
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
                <v-card-actions>
                  <v-layout wrap>
                    <v-flex xs6>
                      <v-btn color="indigo lighten-2" outline @click="addWorkData(item)">工程登録</v-btn>
                    </v-flex>
                    <v-flex xs6>
                      <v-btn color="warning" outline>削除</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import CmptData from "./../ReadFile/Model/ComponentEntry";
import { mapState, mapMutations, mapActions } from "vuex";
// import { SET_MODEL_COM } from "@/store/mutations";

export default {
  components: {
    CmptData
  },
  computed: {
    ...mapState({
      target: "target"
    })
  },
  data: function() {
    return {
      items: [],
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
      loading: true
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapMutations(["SET_MODEL_COM", "RESET_COMPONENT_COM"]),
    ...mapActions(["SET_COMPONENT_COM"]),
    init() {
      axios.get("/db/model_mst/list").then(res => {
        this.items = res.data;
        this.loading = false;
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

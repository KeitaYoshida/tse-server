<template>
  <v-card>
    <v-card-text>
      <v-chip outline color="warning">区分：{{ p_class }}</v-chip>
      <v-chip outline color="primary">製造形式：{{ target.model_id }}</v-chip>
      <v-chip outline color="primary">製造コード：{{ target.const_code }}</v-chip>
      <v-layout wrap align-space-around justify-center fill-height>
        <v-flex xs10 class="pt-3 pb-3">
          <v-layout wrap>
            <v-flex xs6 class="pr-5 mt-2">
              <v-text-field
                label="手配形式"
                v-model="fm.model"
                prepend-icon="fas fa-sitemap"
                readonly
                clearable
                @click="model_select"
              ></v-text-field>
            </v-flex>
            <v-flex xs6 class="mt-2">
              <CalendarText label="指定納期（基準納期）" @select="date_select"></CalendarText>
            </v-flex>
            <v-flex xs6 class="pr-5 mt-4">
              <v-text-field
                label="手配コード（手配名）"
                v-model="ccode"
                readonly
                prepend-icon="fas fa-city"
                hint="自動 ｾｯﾄ:S+no, 部材:B+no"
              ></v-text-field>
            </v-flex>
            <v-flex xs6 class="mt-4">
              <v-text-field
                label="台数(セット数)"
                v-model="fm.num"
                type="number"
                suffix="EA"
                prepend-icon="fas fa-calculator"
              ></v-text-field>
            </v-flex>
            <v-flex xs6 class="pr-5 mt-4">
              <v-select
                v-model="fm.order_class"
                :items="order_class"
                item-value="cnt_order_list_status"
                item-text="val"
                label="手配区分"
                prepend-icon="fas fa-calculator"
              ></v-select>
            </v-flex>
            <v-flex xs6 class="mt-4">
              <v-text-field
                label="手配申請者"
                v-model="fm.user"
                prepend-icon="fas fa-calculator"
                disabled
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-card-actions class="text-xs-center">
        <v-btn color="primary" flat class="action" @click="setOrder()" disabled>セット手配</v-btn>
        <v-btn color="primary" flat class="action" @click="cmptOrder()">部材指定手配</v-btn>
      </v-card-actions>
    </v-card-text>
    <v-dialog
      v-model="selecter"
      scrollable
      :overlay="false"
      width="600px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs10 offset-xs1>
              <v-text-field name="model_list_search" label="形式検索" v-model="search" clearable></v-text-field>
            </v-flex>
            <v-flex xs12 class="rightView text-xs-center">
              <v-data-table
                :headers="headers"
                :items="model_data"
                pagination.sync="pagination"
                hide-actions
                dark
                item-key="model_id"
                :search="search === null ? '' : search.slice(0, search.length -3)"
              >
                <template v-slot:items="props">
                  <tr @click="select_model(props.item)">
                    <td class="text-xs-center">
                      <p class="model_name">{{ props.searchLength }} {{ props.item.model_code }}</p>
                      <p
                        class="mini"
                      >{{ props.item.model_code_ne }} {{ props.item.model_rev.numToRev() }}</p>
                    </td>
                    <td class="text-xs-center">{{ props.item.model_name}}</td>
                    <td class="text-xs-center">{{ props.item.cmpt.length }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="cmpt_order"
      scrollable
      fullscreen
      persistent
      hide-overlay
      :overlay="false"
      transition="dialog-bottom-transition"
    >
      <CmptOrderList :tar_model="tar_model" :fm="fm" @close="close_cmpt" v-if="tar_model"></CmptOrderList>
    </v-dialog>
    <v-dialog v-model="warning" max-width="500px" transition="dialog-transition">
      <v-card class="pa-2">
        <v-alert type="warning" :value="true" outline class>形式を選択してください</v-alert>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import CmptOrderList from "./CmptOrderList";
import CalendarText from "./../../com/CalendarText";

export default {
  props: ["target", "model_data", "ccode"],
  components: {
    CmptOrderList,
    CalendarText
  },
  data: function() {
    return {
      fm: {
        code: "",
        model: "",
        rev: 0,
        num: 0,
        order_day: new Date().toISOString().substr(0, 10),
        pdct_id: 0,
        user: "GUEST",
        order_class: 0
      },
      order_class: null,
      selecter: false,
      warning: false,
      tar_model: null,
      search: "",
      p_class: "",
      headers: [
        { text: "形式", value: "model_code", align: "center" },
        { text: "型式名", value: "model_name", align: "center" },
        { text: "構成数", value: "cmpt.length", align: "center" }
      ],
      cmpt_order: false,
      pagination: {
        totalItems: 0
      }
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    async init() {
      await axios.get("/userinfo").then(res => {
        if (res.data !== "GUEST") {
          this.fm.user = res.data.name;
        }
      });
      await axios.get("/db/order/class").then(res => {
        this.order_class = res.data;
      });
      this.fm.code = this.ccode;
      this.search = this.target.model_id;
      this.fm.num = this.target.all_num;
      this.p_class = this.target.pdct_class;
      this.fm.pdct_id = this.target.pdct_id;
    },
    async select_model(item) {
      this.selecter = !this.selecter;
      await axios.get("/db/model_mst/data/" + item.model_id).then(res => {
        this.fm.model = this.search = item.model_code;
        this.fm.rev = item.model_rev;
        this.tar_model = res.data[0];
      });
    },
    close_cmpt() {
      this.tar_model = null;
      this.fm.model = "";
      this.cmpt_order = !this.cmpt_order;
    },
    date_select(day) {
      this.fm.order_day = day;
    },
    setOrder() {
      if (this.modelCheck()) return;
    },
    cmptOrder() {
      if (this.modelCheck()) return;
      this.cmpt_order = true;
    },
    modelCheck() {
      if (this.fm.model === "") {
        this.warning = true;
        return true;
      } else {
        return false;
      }
    },
    model_select() {
      this.selecter = !this.selecter;
      this.tar_model = null;
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.model_name {
  font-size: 1.2rem;
}
.mini {
  font-size: 0.6rem;
}
.action {
  margin: 0 auto;
}
.data_list {
  font-size: 1rem;
  margin: 0 auto;
  td {
    padding: 0 1rem;
    border-bottom: 1px solid gray;
  }
}
</style>


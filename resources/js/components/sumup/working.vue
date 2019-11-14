<template>
  <v-app>
    <v-container fluid id="list">
      <h1 class="mb-3">
        <span class="shukei_link" @click="$router.push('/sumup')">集計</span> >> 仕掛り工事
      </h1>
      <v-text-field
        v-model="search"
        class="mb-3"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table
        :headers="headers"
        :items="list"
        hide-actions
        class="elevation-1"
        :pagination.sync="pagination"
        item-key="worklist_code"
        :loading="list.length===0"
        :search="search"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">
            <v-btn color="primary" small outline @click="check(props.item)">確認</v-btn>
          </td>
          <td class="text-xs-center">{{props.item.model.model_code }}</td>
          <td class="text-xs-center">{{props.item.worklist_code }}</td>
          <td class="text-xs-center">{{props.item.num + ' / ' + props.item.all_num }}</td>
          <td class="text-xs-center">
            <v-btn
              color="primary"
              outline
              small
              @click="$router.push('/workingUseItem/' + props.item.worklist_id)"
            >{{Math.round(props.item.use_item_price).toLocaleString() }}</v-btn>
          </td>
          <td class="text-xs-center">{{Number(props.item.context)}} %</td>
          <td class="text-xs-center">
            <span v-if="props.item.user[0]">{{props.item.user[0].name}}</span>
          </td>
          <td class="text-xs-center">{{props.item.inv_day}}</td>
        </template>
      </v-data-table>
    </v-container>
    <v-bottom-nav fixed :active.sync="main_action" v-model="main_action">
      <v-btn flat value="list" color="primary">
        <span>仕掛り工事リスト</span>
        <v-icon>far fa-list-alt</v-icon>
      </v-btn>
      <v-btn flat value="csv" color="primary" @click="getCsv()">
        <span>ＣＳＶ出力</span>
        <v-icon>fas fa-file-csv</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
var iconv = require("iconv-lite");

export default {
  props: [],
  components: {},
  data: function() {
    return {
      list: [],
      headers: [
        { text: "確認", value: "", align: "center" },
        { text: "形式", value: "model.model_code", align: "center" },
        { text: "工事番号", value: "worklist_code", align: "center" },
        { text: "台数", value: "num", align: "center" },
        { text: "使用部材金額", value: "use_item_price", align: "center" },
        { text: "進捗", value: "context", align: "center" },
        { text: "確認者", value: "", align: "center" },
        { text: "確認時刻", value: "inv_day", align: "center" }
      ],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 1000,
        sortBy: "model.model_code"
      },
      search: "",
      main_action: "list"
    };
  },
  computed: {
    ...mapState({
      user: "user_info"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let list = await axios.get("/db/inventory/working/const/list");
      this.list = list.data;
    },
    check(item) {
      let checkDay = dayjs(Date.now()).format("YYYY-MM-DD HH:mm");
      let wid = item.worklist_id;
      item.user = [{ name: this.user.name }];
      let user = this.user.name;
      let loginid = this.user.loginid;
      axios.get(
        "/db/inventory/worklist/check/" + wid + "/" + checkDay + "/" + loginid
      );
      item.inv_day = checkDay;
      item.user.name = user;
    },
    getCsv() {
      let list = "";
      var csv = "";
      csv = csv + "形式,工事番号,台数(分割),台数(全体),金額";
      list = csv + "\n";
      // console.log(this.list);
      // return;

      this.list.forEach((ar, n) => {
        list = list + ar.model.model_code + ",";
        list = list + ar.worklist_code + ",";
        list = list + ar.num + ",";
        list = list + ar.all_num + ",";
        list = list + ar.use_item_price + ",";
        list = list + "\n";
      });
      list = iconv.encode(list, "Shift_JIS");
      let blob = new Blob([list], { type: "text/csv" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      let day = dayjs().format("YYYYMMDDHHmmss");
      let daynum = Number(day);
      let day16 = daynum.toString(16);
      let csv_name = "TSE_INVENTORY_LIST_" + day16 + ".csv";
      link.download = csv_name;
      link.click();
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0 !important;
}
#list {
  margin-bottom: 64px;
}
.shukei_link {
  color: #5c6bc0;
  &:hover {
    color: #1a237e;
    cursor: pointer;
  }
}
</style>

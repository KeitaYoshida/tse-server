<template>
  <v-app>
    <v-container grid-list-xs id="old_inv_working">
      <v-layout row wrap>
        <v-flex xs6 px-5>
          <v-btn
            color="primary"
            outline
            large
            block
          >仕掛り工事部材金額： {{ Math.round(total_price).toLocaleString() }}</v-btn>
        </v-flex>
        <v-flex xs6 px-5>
          <v-btn
            color="primary"
            outline
            large
            block
          >仕掛り工数金額： {{ Math.round(total_process_price).toLocaleString() }}</v-btn>
        </v-flex>
      </v-layout>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        class="pb-3 px-3"
      ></v-text-field>
      <v-data-table
        :headers="headers"
        hide-actions
        :items="items"
        class="elevation-1"
        item-key="inv_worklist_id"
        :search="search"
        :loading="items.length===0"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.model_code }}</td>
          <td class="text-xs-center">
            <span
              class="success--text worklist"
              @click="$router.push('/inv/his/working/item/'+ $route.params.date + '/'+ props.item.worklist_code)"
            >{{ props.item.worklist_code }}</span>
          </td>
          <td class="text-xs-center">{{ props.item.const_num }}</td>
          <td class="text-xs-center">{{ props.item.all_num }}</td>
          <td class="text-xs-center">{{ Math.round(props.item.use_item_price).toLocaleString() }}</td>
          <td class="text-xs-center">
            <span
              class="success--text working"
              @click="setProcessPrice(props.item)"
            >{{ Math.round(props.item.work_context_price).toLocaleString() }}</span>
          </td>
          <td class="text-xs-center">{{ props.item.check_user }}</td>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog v-model="insProcessPrice" max-width="500px" transition="dialog-transition">
      <InsProcessPrice :data="insPPData" @rt="setInsPPData" v-if="insProcessPrice" />
    </v-dialog>
    <v-bottom-nav fixed :active.sync="main_action" v-model="main_action">
      <v-btn flat value="csv" color="primary" @click="getCsv()">
        <span>ＣＳＶ出力</span>
        <v-icon>fas fa-file-csv</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InsProcessPrice from "@/components/com/ComFormDialog";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
var iconv = require("iconv-lite");

export default {
  props: [],
  components: {
    InsProcessPrice
  },
  data: function() {
    return {
      insProcessPrice: false,
      insPPData: {
        title: "仕掛り工数",
        data: [
          {
            label: "仕掛り工数金額",
            hint: "（-数値）にて減算できます",
            type: "number",
            value: null
          }
        ]
      },
      main_action: null,
      search: "",
      headers: [
        { text: "形式", value: "model_code", align: "center" },
        { text: "工事番号", value: "worklist_code", align: "center" },
        { text: "台数（工事）", value: "const_num", align: "center" },
        { text: "台数（全）", value: "all_num", align: "center" },
        { text: "使用部材金額", value: "", align: "center" },
        { text: "仕掛り工数金額", value: "", align: "center" },
        { text: "確認者", value: "check_user", align: "center" }
      ],
      items: [],
      total_price: 0,
      total_process_price: 0
    };
  },
  computed: {
    ...mapState({
      target: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let inv_date = this.$route.params.date;
      let res = await axios.get("/db/inv/fix/worklist/" + inv_date);
      let workList = res.data;
      this.items = workList;
      for (let item of workList) {
        this.total_price = this.total_price + Number(item.use_item_price);
        this.total_process_price =
          this.total_process_price + Number(item.work_context_price);
      }
    },
    getCsv() {
      let list = "";
      var csv = "";
      csv =
        csv +
        "形式,工事番号,工事台数,工事全数,使用部材金額,仕掛り工数金額,確認者";
      list = csv + "\n";
      // console.log(this.list);
      // return;

      this.items.forEach((ar, n) => {
        list = list + ar.model_code + ",";
        list = list + ar.worklist_code + ",";
        list = list + ar.const_num + ",";
        list = list + ar.all_num + ",";
        list = list + ar.use_item_price + ",";
        list = list + ar.work_context_price + ",";
        list = list + ar.check_user;
        list = list + "\n";
      });
      list = iconv.encode(list, "Shift_JIS");
      let blob = new Blob([list], { type: "text/csv" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      let day = dayjs().format("YYYYMMDDHHmmss");
      let daynum = Number(day);
      let day16 = daynum.toString(16);
      let csv_name = "仕掛り工事リスト_" + day16 + ".csv";
      link.download = csv_name;
      link.click();
    },
    async setInsPPData(data) {
      let setVal = Number(data.data[0].value);
      this.insProcessPrice = false;
      if (setVal === 0) return;
      this.insPPData.target.work_context_price =
        Number(this.insPPData.target.work_context_price) + setVal;
      let inv_date = this.insPPData.target.inv_date;
      let inv_worklist_id = this.insPPData.target.inv_worklist_id;
      let res = await axios.get(
        "/db/inv/fix/worklist/workprice/" +
          inv_date +
          "/" +
          inv_worklist_id +
          "/" +
          setVal
      );
      // console.log(res.data);
      this.total_process_price = 0;
      for (let item of this.items) {
        this.total_process_price =
          Number(this.total_process_price) + Number(item.work_context_price);
      }
    },
    setProcessPrice(data) {
      this.insProcessPrice = true;
      this.insPPData.target = data;
      this.insPPData.data[0].value = null;
      this.insPPData.message =
        data.work_context_price + " へ加算する（減算）値を入力して下さい";
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  font-size: 1.3rem !important;
}
.working,
.worklist {
  font-size: 1.3rem;
  cursor: pointer;
}
#old_inv_working {
  margin-bottom: 64px;
}
</style>

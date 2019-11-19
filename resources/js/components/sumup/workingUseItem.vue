<template>
  <v-app>
    <v-container grid-list-xs id="work-list">
      <template v-if="totalPrice!==0">
        <v-btn icon color="primary" flat @click="$router.go(-1)">
          <v-icon>fas fa-angle-double-left</v-icon>
        </v-btn>
        <v-btn color="primary" outline>{{workdata.model.model_code}}</v-btn>
        <v-btn
          color="primary"
          outline
          :to="'/process/' + $route.params.work_id"
        >{{workdata.worklist_code}}</v-btn>
        <v-btn color="primary" outline @click="setPrice()">金額：{{ totalPrice.toLocaleString() }}</v-btn>
      </template>
      <v-data-table
        v-if="items"
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1 mt-3"
        :pagination.sync="pagination"
        item-key="index"
        :loading="items.length===0"
      >
        <template v-slot:items="props" :class="rt(props)">
          <td class="text-xs-center">{{all_cmpt[props.item.cmpt_id].cmpt_code }}</td>
          <td class="text-xs-center">{{props.item.item_ren }}</td>
          <td class="text-xs-center">{{props.item.item_code }}</td>
          <td class="text-xs-center">{{props.item.item_model }}</td>
          <td class="text-xs-center">{{props.item.item_name }}</td>
          <td class="text-xs-center">{{props.item.count }}</td>
          <td class="text-xs-center">{{props.item.total_price.toLocaleString() }}</td>
        </template>
      </v-data-table>
    </v-container>
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
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
var iconv = require("iconv-lite");

export default {
  props: [],
  components: {},
  data: function() {
    return {
      items: [],
      workdata: {},
      headers: [
        { text: "子形式", value: "cmpt_id", align: "center" },
        { text: "連", value: "item_code", align: "center" },
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "形式", value: "item_model", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "数量", value: "count", align: "center" },
        { text: "金額", value: "total_price", align: "center" }
      ],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 1000,
        sortBy: "cmpt_id"
      },
      totalPrice: 0,
      all_cmpt: {},
      main_action: null
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
      const Fin = 2;
      let list = await axios.get(
        "/db/workdata/process/" + this.$route.params.work_id
      );
      this.workdata = list.data[0];
      let process = {};
      // console.log(list.data[0]);
      // worklist -> serial[] -> process[]
      for (let serial of list.data[0].serials) {
        for (let p of serial.process) {
          if (p.process_status === Fin) {
            process[p.work_id] =
              process[p.work_id] === undefined ? 1 : process[p.work_id] + 1;
          }
        }
      }
      // console.log(process);
      let items = [];
      let cmpt = [];
      for (let pid of Object.keys(process)) {
        await axios.get("/db/workdata/cmpt/items/" + pid).then(res => {
          for (let item of res.data) {
            let cmpt_check = cmpt.indexOf(item.cmpt_id);
            if (cmpt_check < 0) cmpt.push(item.cmpt_id);
            let price = Number(item.items.item_price);
            let num = Number(item.item_use) * process[pid];
            let totalPrice = num * price;
            items.push({
              cmpt_id: item.cmpt_id,
              item_id: item.items.item_id,
              item_code: item.items.item_code,
              item_model: item.items.item_model,
              item_name: item.items.item_name,
              item_ren: item.item_ren,
              item_price: price,
              count: num,
              total_price: totalPrice
            });
            this.totalPrice = this.totalPrice + totalPrice;
          }
        });
      }
      let allc = await axios.post("/db/comt/get/data/arr/with/whereIn", cmpt);
      for (let cm of allc.data) {
        this.all_cmpt[cm.cmpt_id] = cm;
      }
      this.items = items;
      // console.log(this.items);
      // console.log(items);
      // this.items = Object.keys(items).map(key => {
      //   console.log(key);
      //   return items[key];
      // });
      // console.log(this.items);
    },
    rt(i) {
      console.log(i);
    },
    setPrice() {
      axios.get(
        "/db/workdata/set/useitemprice/" +
          this.$route.params.work_id +
          "/" +
          Math.round(this.totalPrice * 100) / 100
      );
      // .then(res => {});
    },
    getCsv() {
      let list = "";
      var csv = "";
      csv = csv + "子形式,連,品目コード,形式,品名,数量,金額";
      list = csv + "\n";
      // console.log(this.list);
      // return;

      this.items.forEach((ar, n) => {
        list = list + this.all_cmpt[ar.cmpt_id].cmpt_code + ",";
        list = list + ar.item_ren + ",";
        list = list + ar.item_code + ",";
        list = list + ar.item_model + ",";
        list = list + ar.item_name + ",";
        list = list + ar.count + ",";
        list = list + ar.total_price;
        list = list + "\n";
      });
      list = iconv.encode(list, "Shift_JIS");
      let blob = new Blob([list], { type: "text/csv" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      let day = dayjs().format("YYYYMMDDHHmmss");
      let daynum = Number(day);
      let day16 = daynum.toString(16);
      let csv_name = this.workdata.worklist_code + "_" + day16 + ".csv";
      link.download = csv_name;
      link.click();
    }
  }
};
</script>

<style lang="scss" scoped>
#work-list {
  margin-bottom: 64px;
}
</style>
<template>
  <v-app>
    <v-container grid-list-xs id="work-list">
      <v-btn icon color="primary" flat @click="$router.go(-1)">
        <v-icon>fas fa-angle-double-left</v-icon>
      </v-btn>
      <v-btn color="primary" outline>{{$route.params.worklist_code}}</v-btn>
      <v-btn color="primary" outline>総部材金額： {{ Math.round(worklistPrice).toLocaleString() }}</v-btn>
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1 mt-3"
        :pagination.sync="pagination"
        item-key="index"
        :loading="items.length===0"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">{{props.item.cmpt.cmpt_code }}</td>
          <td class="text-xs-center">{{props.item.item_code }}</td>
          <td class="text-xs-center">{{props.item.item_model }}</td>
          <td class="text-xs-center">{{props.item.item_name }}</td>
          <td class="text-xs-center">{{props.item.item_num }}</td>
          <td class="text-xs-center">
            <span
              class="success--text price"
              @click="editPrice(props.item)"
            >{{props.item.item_price }}</span>
          </td>
          <td class="text-xs-center">{{props.item.total_price.toLocaleString() }}</td>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog v-model="insItemPrice" max-width="500px" transition="dialog-transition">
      <InsProcessPrice :data="itemPriceData" @rt="setItemPrice" v-if="insItemPrice" />
    </v-dialog>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InsProcessPrice from "@/components/com/ComFormDialog";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { restProperty } from "babel-types";
dayjs.locale("ja");
var iconv = require("iconv-lite");

export default {
  props: [],
  components: { InsProcessPrice },
  data: function() {
    return {
      insItemPrice: false,
      itemPriceData: {
        title: "金額訂正",
        message: "修正する金額を入力して下さい",
        data: [
          {
            label: "訂正金額",
            type: "number"
          }
        ]
      },
      items: [],
      headers: [
        { text: "子形式", value: "cmpt_id", align: "center" },
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "形式", value: "item_model", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "数量", value: "count", align: "center" },
        { text: "単価", value: "count", align: "center" },
        { text: "金額", value: "total_price", align: "center" }
      ],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 1000,
        sortBy: "cmpt_id"
      },
      worklistPrice: 0,
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
      let inv_date = this.$route.params.date;
      let worklist_code = this.$route.params.worklist_code;
      let res = await axios.get(
        "/db/inv/fix/worklist/item/" + inv_date + "/" + worklist_code
      );
      this.items = res.data;
      this.worklistPrice = 0;
      for (let item of this.items) {
        this.worklistPrice = this.worklistPrice + Number(item.total_price);
      }
      let resParent = await axios.get(
        "/db/inv/fix/worklist/set/iprice/" +
          this.worklistPrice +
          "/" +
          inv_date +
          "/" +
          worklist_code
      );
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
    },
    editPrice(data) {
      this.itemPriceData.data[0].value = Number(data.item_price);
      this.itemPriceData.target = data;
      this.insItemPrice = !this.insItemPrice;
    },
    async setItemPrice(data) {
      this.insItemPrice = !this.insItemPrice;
      let setVal = Number(data.data[0].value);
      let id = data.target.inv_worklist_item_id;
      let num = data.target.item_num;
      let res = await axios.get(
        "/db/inv/fix/worklistitem/set/iprice/" + id + "/" + setVal + "/" + num
      );
      await this.init();
    }
  }
};
</script>

<style lang="scss" scoped>
#work-list {
  margin-bottom: 64px;
}
.price {
  cursor: pointer;
}
</style>
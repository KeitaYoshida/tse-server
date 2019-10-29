<template>
  <v-layout row wrap v-if="inited">
    <v-flex xs5 offset-xs1>
      <LineChart :d="mData" :height="300"></LineChart>
    </v-flex>
    <v-flex xs5></v-flex>
    <v-flex xs10 offset-xs1>
      <LineChart :d="dData" :height="300"></LineChart>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-progress-linear :value="timer/15*100"></v-progress-linear>
      <v-data-table
        v-if="im"
        :headers="headers"
        :items="im"
        class="elevation-1"
        :pagination.sync="pagination"
        item-key="id"
        loading="true"
        :search="search"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">
            <v-btn color="success" small outline @click="viewNumChange(props.item)">数量変更</v-btn>
          </td>
          <td class="text-xs-center" v-html="rtOrderCode(props.item)"></td>
          <td class="text-xs-center">{{ rtBeforeAfter(props.item.last_num, props.item.last_num_b) }}</td>
          <td class="text-xs-center">{{ rtBeforeAfter(props.item.appo_num, props.item.appo_num_b) }}</td>
          <td
            class="text-xs-center"
          >{{ rtBeforeAfter(props.item.order_num, props.item.order_num_b) }}</td>
          <td class="text-xs-center">{{ props.item.updated_at }}</td>
        </template>
      </v-data-table>
    </v-flex>
    <v-dialog v-model="dialog" :overlay="false" max-width="500px">
      <NumChange v-if="dialog" :data="numData" @rt="returnNum" />
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LineChart from "@/components/com/LineChart";
import NumChange from "@/components/com/ComFormDialog";

export default {
  props: ["im", "timer"],
  components: {
    LineChart,
    NumChange
  },
  data: function() {
    return {
      dData: null,
      mData: null,
      inited: false,
      headers: [
        { text: "処理", value: "order_code", align: "center" },
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "在庫数", value: "", align: "center" },
        { text: "予約数", value: "", align: "center" },
        { text: "発注数", value: "", align: "center" },
        { text: "更新日時", value: "updated_at", align: "center" }
      ],
      pagination: {
        page: 1,
        rowsPerPage: 20,
        sortBy: "updated_at",
        descending: true
      },
      search: "",
      numData: {
        title: "数量変更",
        message: null,
        data: [
          {
            name: null,
            label: null,
            id: null,
            hint: null,
            type: null,
            value: null
          }
        ]
      },
      dialog: false
    };
  },
  computed: {},
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      await this.init_day();
      await this.init_month();
      this.inited = true;
    },
    async init_day() {
      let dDay = await axios.get("/db/monitor/init_day");
      this.dData = this.init_com(dDay.data, "day");
    },
    async init_month() {
      let dMonth = await axios.get("/db/monitor/init_month");
      this.mData = this.init_com(dMonth.data, "month");
    },
    init_com(base, type) {
      let labels = [];
      let datasets = [
        {
          label: "在庫金額",
          data: [],
          fill: false,
          backgroundColor: "#90CAF9", //線の下部の色と凡例の枠内の色
          borderColor: "#90CAF9", //線の色
          pointBackgroundColor: "#90CAF9" //点の色
        },
        {
          label: "使用予約金額",
          data: [],
          fill: false,
          backgroundColor: "#80CBC4", //線の下部の色と凡例の枠内の色
          borderColor: "#80CBC4", //線の色
          pointBackgroundColor: "#80CBC4" //点の色
        },
        {
          label: "発注金額",
          data: [],
          fill: false,
          backgroundColor: "#C5E1A5", //線の下部の色と凡例の枠内の色
          borderColor: "#C5E1A5", //線の色
          pointBackgroundColor: "#C5E1A5" //点の色
        }
      ];
      base.forEach(ar => {
        if (type === "day") labels.push(ar.created_at.slice(5, 10));
        else labels.push(ar.created_at.slice(2, 7));
        datasets[0].data.push(ar.last_price);
        datasets[1].data.push(ar.appo_price);
        datasets[2].data.push(ar.order_price);
      });
      return {
        labels: labels,
        datasets: datasets
      };
    },
    rtBeforeAfter(after, before) {
      if (before === undefined || before === null) return after;
      return before + " --> " + after;
    },
    viewNumChange(item) {
      this.dialog = !this.dialog;
      this.numData = {
        title: "数量変更",
        message: "加算数を入力",
        item_id: item.item_id,
        data: [
          {
            name: "last_num",
            label: "在庫数",
            value: null
          },
          {
            name: "appo_num",
            label: "予約数",
            value: null
          },
          {
            name: "order_num",
            label: "発注数",
            value: null
          }
        ]
      };
    },
    returnNum(d) {
      this.dialog = !this.dialog;
      let changeObj = {
        item_id: d.item_id,
        last_num: Number(d.data[0].value),
        appo_num: Number(d.data[1].value),
        order_num: Number(d.data[2].value)
      };
      this.$emit("changeNum", changeObj);
    },
    rtOrderCode(item) {
      let item_code = item.item_code;
      let order_code = item.order_code;
      const rev =
        "<br /><p class='mini'>[ " + item.item_rev.numToRev() + " ]</p>";
      console.log(rev);
      if (
        order_code == null ||
        order_code == "" ||
        order_code.trim() == item_code.trim()
      )
        return item_code + rev;
      return order_code + "<br />" + "( " + item_code + " )" + rev;
    }
  }
};
</script>

<style lang="scss" scoped>
.mini {
}
</style>

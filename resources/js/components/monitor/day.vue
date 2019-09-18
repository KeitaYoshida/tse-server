<template>
  <v-layout row wrap v-if="inited">
    <v-flex xs6>
      <LineChart :d="mData" :height="300"></LineChart>
    </v-flex>
    <v-flex xs6></v-flex>
    <v-flex xs12>
      <LineChart :d="dData" :height="300"></LineChart>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LineChart from "@/components/com/LineChart";

export default {
  props: [],
  components: {
    LineChart
  },
  data: function() {
    return {
      dData: null,
      mData: null,
      inited: false
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

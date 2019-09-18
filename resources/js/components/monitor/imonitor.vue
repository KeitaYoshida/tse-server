<template>
  <v-layout row wrap>
    <template v-for="(clItem, index) in Items.iData">
      <v-flex
        :key="index"
        v-if="Items.iDetail[index].last_num!==0"
        xs6
        lg4
        ref="infoBox"
        id="info-box"
      >
        <v-card class="pa-2 ma-2 top-info" flat>
          <v-card-title class="py-0">{{ Items.iClass[index].value }}</v-card-title>
          <v-card-text class="text-xs-center pa-0">
            <Chart
              :d="rtChartdata(Items.iDetail[index])"
              style="width:100%; height:180px; margin: 0 auto;"
            ></Chart>
          </v-card-text>
        </v-card>
      </v-flex>
    </template>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Chart from "@/components/com/PieChart";

export default {
  props: [],
  components: {
    Chart
  },
  data: function() {
    return {};
  },
  computed: {
    ...mapState({
      Items: "items"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    init() {},
    rtChartdata(detail) {
      return {
        labels: ["在庫数", "予約数", "発注数"],
        datasets: [
          {
            backgroundColor: ["#90CAF9", "#80CBC4", "#C5E1A5"],
            data: [detail.last_num, detail.appo_num, detail.order_num]
          }
        ]
      };
    },
    rtStyle() {
      // if (this.$refs.infoBox === undefined) return;
      return "width: 100px;height: 100px;";
      // return (
      //   "width: " +
      //   this.$refs.infoBox[0].clientWidth / 2 +
      //   "px;height: " +
      //   this.$refs.infoBox[0].clientWidth / 2 +
      //   "px;"
      // );
    }
  }
};
</script>

<style lang="scss" scoped>
$info-color: #5c6bc0;
$zaiko-color: #00838f;
$yoyaku-color: #00695c;
$order-color: #2e7d32;
.top-info {
  border-radius: 10px;
  border: 1px solid $info-color;
  color: $info-color;
}
.mini {
  font-size: 0.9rem;
  &.zaiko {
    color: $zaiko-color;
  }
  &.yoyaku {
    color: $yoyaku-color;
  }
  &.order {
    color: $order-color;
  }
}
.text-md {
  font-size: 1.4rem;
}
</style>
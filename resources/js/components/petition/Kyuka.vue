<template>
  <v-app>
    <v-container grid-list-xs>
      <p id="title">
        <v-icon id="icon" left>fas fa-sticky-note</v-icon>休 暇 届
      </p>
      <v-tabs fixed-tabs v-model="select_tub">
        <v-tab light v-for="n in items" :key="n">{{ n }}</v-tab>
      </v-tabs>
      <template v-if="select_tub===0">
        <OneDay></OneDay>
      </template>
      <template v-if="select_tub===1">
        <HalfDay></HalfDay>
      </template>
      <template v-if="select_tub===2">
        <TimeDay></TimeDay>
      </template>
    </v-container>
    <v-bottom-nav fixed value="value" active.sync="value">
      <v-btn flat color="primary" to="/petition">
        <span>戻る</span>
        <v-icon>fas fa-chevron-circle-left</v-icon>
      </v-btn>
      <v-btn flat color="primary" @click="make()">
        <span>申請</span>
        <v-icon>fas fa-check-circle</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import OneDay from "./Kyuka/one_day";
import HalfDay from "./Kyuka/half_day";
import TimeDay from "./Kyuka/time_day";

export default {
  components: {
    OneDay,
    HalfDay,
    TimeDay
  },
  data: function() {
    return {
      bottomNav: "",
      items: ["1日", "半日", "2H"],
      dates: ["2018-09-15", "2018-09-20"],
      menu: false,
      select_tub: 0
    };
  }
};
</script>

<style lang="scss" scoped>
#title {
  font-size: 25px;
  border-bottom: dotted 3px black;
}
</style>
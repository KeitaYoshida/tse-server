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
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="transparent">
      <v-btn color="teal" flat value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="nearby">
        <span>Nearby</span>
        <v-icon>place</v-icon>
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
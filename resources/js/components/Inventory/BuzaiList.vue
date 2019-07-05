<template>
  <div>
    <transition name="fade" mode="out-in">
      <ConstView v-if="activeBtn === 0"></ConstView>
      <EtcView v-if="activeBtn === 1"></EtcView>
    </transition>
    <v-bottom-nav :active.sync="activeBtn" :value="showNav" fixed>
      <v-btn flat color="primary" dark>
        <span>発注品</span>
        <v-icon>far fa-hand-paper</v-icon>
      </v-btn>
      <v-btn flat color="primary" dark>
        <span>残物品</span>
        <v-icon>fas fa-ellipsis-h</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import ConstView from "./BuzaiList/const";
import EtcView from "./BuzaiList/etc";

export default {
  components: {
    ConstView,
    EtcView
  },
  data: function() {
    return {
      activeBtn: 0,
      showNav: true,
      tab: null
    };
  }
};
</script>
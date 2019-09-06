<template>
  <v-app>
    <div id="main">
      <transition name="fade" mode="out-in">
        <template v-if="$route.params.pid === 'const_select'">
          <ConstSelect />
        </template>
        <template v-if="$route.params.pid === 'ukeire'">
          <UkeireSelect />
        </template>
        <template v-if="$route.params.pid === 'all'">
          <AllOrders />
        </template>
      </transition>
      <v-bottom-nav fixed :active.sync="chk_act" :value="true">
        <v-btn flat value="cnt" @click="constViewAction()" color="primary">
          <span>工事単位</span>
          <v-icon>fas fa-industry</v-icon>
        </v-btn>
        <v-btn flat value="all" color="primary" @click="allViewAction()">
          <span>全部材</span>
          <v-icon>fas fa-shapes</v-icon>
        </v-btn>
      </v-bottom-nav>
    </div>
  </v-app>
</template>

<script>
import ConstSelect from "./ConstSelect";
import UkeireSelect from "./UkeireSelect";
import AllOrders from "./AllOrders";

export default {
  components: {
    ConstSelect,
    UkeireSelect,
    AllOrders
  },
  data: function() {
    return {
      mode: null,
      chk_act: "cnt",
      ukdata: null,
      cinfo: null
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      // this.$router.push("/ukeire/const_select");
    },
    constViewAction() {
      let to = "/ukeire/const_select";
      let now = this.$route.path;
      if (to === now) return;
      this.chk_act = "cnt";
      this.$router.push(to);
    },
    allViewAction() {
      let to = "/ukeire/all";
      let now = this.$route.path;
      if (to === now) return;
      this.chk_act = "all";
      this.$router.push(to);
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  margin-bottom: 64px;
}
</style>

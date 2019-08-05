<template>
  <v-app>
    <transition name="fade" mode="out-in">
      <template v-if="mode === 'const_select'">
        <ConstSelect @act="rtConstSelect" />
      </template>
      <template v-if="mode === 'ukeire'">
        <UkeireSelect :ukdata.sync="ukdata" :cinfo="cinfo" @act="rtUkeireSelect" />
      </template>
      <template v-if="mode === 'all'"></template>
    </transition>
    <v-bottom-nav fixed :active.sync="chk_act" :value="true">
      <v-btn flat value="cnt" @click="init()">
        <span>工事単位</span>
        <v-icon>fas fa-industry</v-icon>
      </v-btn>
      <v-btn flat value="all">
        <span>全部材</span>
        <v-icon>fas fa-shapes</v-icon>
      </v-btn>
    </v-bottom-nav>
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
      mode: "const_select",
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
      this.mode = "const_select";
      this.chk_act = "cnt";
    },
    rtConstSelect(model_id, order_code) {
      axios.get("/db/order/list/one/" + order_code).then(res => {
        this.ukdata = res.data;
        this.cinfo = {
          model_id: model_id,
          order_code: order_code
        };
        this.mode = "ukeire";
      });
    },
    rtUkeireSelect(val) {}
  }
};
</script>

<style lang="scss" scoped>
</style>

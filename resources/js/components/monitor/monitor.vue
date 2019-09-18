<template>
  <v-app>
    <v-container grid-list-xs id="monitor">
      <transition name="fade" mode="out-in">
        <Loading v-if="loading"></Loading>
        <IMonitor v-else-if="mode==='imonitor'" @reload="init()"></IMonitor>
        <InvMonitor v-else-if="mode==='invMonitor'" @reload="init()"></InvMonitor>
        <DayMonitor v-else-if="mode==='day'"></DayMonitor>
      </transition>
    </v-container>
    <v-bottom-nav fixed :value="true">
      <v-btn flat value="Day" v-if="mode!=='day'" @click="mode='day'">
        <span>Day</span>
        <v-icon>looks_one</v-icon>
      </v-btn>
      <v-btn flat value="imonitor" v-if="mode!=='imonitor'" @click="mode='imonitor'">
        <span>Item</span>
        <v-icon>view_list</v-icon>
      </v-btn>
      <v-btn flat value="invMonitor" v-if="mode!=='invMonitor'" @click="mode='invMonitor'">
        <span>Inventory</span>
        <v-icon>get_app</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from "@/components/com/Loading";
import IMonitor from "@/components/monitor/imonitor";
import InvMonitor from "@/components/monitor/imonitor";
import DayMonitor from "@/components/monitor/day";

export default {
  props: [],
  components: {
    Loading,
    IMonitor,
    InvMonitor,
    DayMonitor
  },
  data: function() {
    return {
      loading: true,
      mode: "day",
      msync: false
    };
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
    ...mapActions(["ITEMS_SET"]),
    async init() {
      this.loading = true;
      let items = await axios.get("/items/itemlist");
      items = items.data;
      let iClass = await axios.get("/items/itemClass");
      iClass = iClass.data;
      let iSplit = [];
      let iDetail = [];
      let iPrice = [];
      iClass.forEach((c, n) => {
        iSplit[n] = [];
        iDetail[n] = {
          last_num: 0,
          appo_num: 0,
          order_num: 0,
          inv_num: 0
        };
        iPrice[n] = {
          last: 0,
          appo: 0,
          order: 0,
          inv: 0
        };
      });
      items.forEach(item => {
        let ic = item.item_class;
        iSplit[ic].push(item);

        iDetail[ic].last_num = iDetail[ic].last_num + item.last_num;
        iDetail[ic].appo_num = iDetail[ic].appo_num + item.appo_num;
        iDetail[ic].order_num = iDetail[ic].order_num + item.order_num;
        iDetail[ic].inv_num = iDetail[ic].inv_num + item.inv_num;

        let vd = item.vendor;
        let price = vd.length === 0 ? 0 : this.rtPrice(vd);
        iPrice[ic].last = iPrice[ic].last + price * item.last_num;
        iPrice[ic].appo = iPrice[ic].appo + price * item.appo_num;
        iPrice[ic].order = iPrice[ic].order + price * item.order_num;
        iPrice[ic].inv = iPrice[ic].inv + price * item.inv_num;
      });
      await this.ITEMS_SET({
        iData: iSplit,
        iClass: iClass,
        iDetail: iDetail,
        iPrice: iPrice
      });
      this.loading = false;
    },
    rtPrice(vendor) {
      let p = 0;
      vendor.forEach(ar => (p = p + Number(ar.vendor_item_price)));
      return p;
    }
  },
  beforeDestroy() {
    this.ITEMS_SET(null);
  }
};
</script>

<style lang="scss" scoped>
#monitor {
  margin-bottom: 64px;
}
</style>
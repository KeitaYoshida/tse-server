<template>
  <v-app>
    <v-container fluid id="monitor">
      <transition name="fade" mode="out-in">
        <Loading v-if="loading"></Loading>
        <IMonitor v-else-if="mode==='imonitor'" @reload="init()"></IMonitor>
        <InvMonitor v-else-if="mode==='invMonitor'" @reload="init()"></InvMonitor>
        <DayMonitor v-else-if="mode==='day'" :timer="timerCnt" :im="im" @changeNum="changeNum"></DayMonitor>
      </transition>
    </v-container>
    <v-container fluid></v-container>
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
      msync: false,
      interval: undefined,
      im: null,
      timer: undefined,
      timerCnt: 0
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
  mounted: function() {
    this.interval = setInterval(() => {
      this.setImonitor();
    }, 15000);
    this.timer = setInterval(() => {
      this.timerCnt = this.timerCnt + 1;
    }, 1000);
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
      await this.setImonitor(items);
      this.loading = false;
    },
    async setImonitor(items = null) {
      if (items === null) {
        items = await axios.get("/items/itemlist");
        items = items.data;
      }
      let iMonitor = this.Items.iMonitor;
      if (iMonitor === undefined) iMonitor = {};
      items.forEach(item => {
        if (!(item.item_id in iMonitor)) {
          iMonitor[item.item_id] = {
            item_id: item.item_id,
            item_code: item.item_code,
            item_rev: item.item_rev,
            order_code: item.order_code,
            last_num: item.last_num,
            appo_num: item.appo_num,
            order_num: item.order_num,
            updated_at: item.updated_at
          };
        } else {
          if (iMonitor[item.item_id].updated_at !== item.updated_at) {
            let i = iMonitor[item.item_id];
            iMonitor[item.item_id] = {
              item_id: item.item_id,
              item_code: item.item_code,
              item_rev: item.item_rev,
              order_code: item.order_code,
              last_num_b: i.last_num !== item.last_num ? i.last_num : null,
              appo_num_b: i.appo_num !== item.appo_num ? i.appo_num : null,
              order_num_b: i.order_num !== item.order_num ? i.order_num : null,
              last_num: item.last_num,
              appo_num: item.appo_num,
              order_num: item.order_num,
              updated_at: item.updated_at
            };
          }
        }
      });
      await this.ITEMS_SET({
        iMonitor: iMonitor
      });

      this.im = Object.keys(this.Items.iMonitor).map(
        key => this.Items.iMonitor[key]
      );
      this.timerCnt = 0;
    },
    rtPrice(vendor) {
      let p = 0;
      vendor.forEach(ar => (p = p + Number(ar.vendor_item_price)));
      return p;
    },
    async changeNum(d) {
      let tar = this.im.filter(row => row.item_id === d.item_id)[0];
      let index = this.im.indexOf(tar);
      let row = this.im[index];
      console.log(d);
      row.last_num_b = row.last_num;
      row.appo_num_b = row.appo_num;
      row.order_num_b = row.order_num;
      row.last_num = Number(row.last_num) + Number(d.last_num);
      row.appo_num = Number(row.appo_num) + Number(d.appo_num);
      row.order_num = Number(row.order_num) + Number(d.order_num);
      await axios.post("/db/items/numSet/", d).then(res => {
        // console.log(res.data);
      });
    }
  },
  beforeDestroy() {
    this.ITEMS_SET(null);
    clearInterval(this.interval);
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
#monitor {
  margin-bottom: 64px;
}
</style>
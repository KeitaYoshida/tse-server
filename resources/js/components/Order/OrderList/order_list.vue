<template>
  <v-app>
    <v-container fluid class="mb-5">
      <template v-if="mode==='view'">
        <ViewList
          v-if="mode==='view'"
          :order_list="order_list"
          :view_list="view_list"
          :cstm_list="cstm_list"
          :cmpt_list="cmpt_list"
          @review="review"
          @order="order"
        ></ViewList>
      </template>
      <template v-if="mode==='order'"></template>
    </v-container>
  </v-app>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

import ViewList from "./viewList";

export default {
  components: {
    ViewList
  },
  data: function() {
    return {
      mode: "",
      user_name: "",
      order_list: [],
      view_list: [],
      cstm_list: [],
      cmpt_list: [],
      param: ""
    };
  },
  created: async function() {
    await this.init();
  },
  methods: {
    async init() {
      let link = "";
      this.param = this.$route.params.cnt_order_code;
      axios.get("/userinfo").then(response => {
        if (response.data === "GUEST") {
          this.user_name = "GUEST";
        } else {
          this.user_name = response.data.name;
        }
      });
      switch (this.param) {
        case "all":
          break;
        case "yoyaku":
          link = "/db/order/list/yoyaku";
          await this.getOrderData(link, "view");
          break;
        default:
          link = "/db/order/list/one/" + this.param;
          await this.getOrderData(link, "view");
          break;
      }
    },
    review(slist, clist) {
      this.view_list = this.order_list;
      if (this.cmpt_list.length != slist.length) {
        this.view_list = this.view_list.filter(ar => {
          return slist.indexOf(ar.cmpt.cmpt_code) != -1;
        });
      }
      if (this.cstm_list.length != clist.length) {
        this.view_list = this.view_list.filter(ar => {
          return ar.price.find(vendor => {
            return clist.indexOf(vendor.vname.com_name) != -1;
          });
        });
      }
    },
    async getOrderData(link, mode) {
      axios.get(link).then(res => {
        let cmpt_list = [];
        let cstm_list = [];
        let ol = (this.view_list = this.order_list = res.data);
        console.log(this.order_list);
        ol.forEach((ar, n) => {
          if (cmpt_list.indexOf(ar.cmpt.cmpt_code) === -1) {
            cmpt_list.push(ar.cmpt.cmpt_code);
          }
          let tmp = ar.price;
          tmp.forEach(vendor => {
            if (cstm_list.indexOf(vendor.vname.com_name) === -1) {
              cstm_list.push(vendor.vname.com_name);
            }
          });
        });
        this.cmpt_list = cmpt_list;
        this.cstm_list = cstm_list;
        this.mode = mode;
      });
    },
    order() {
      let list = {};
      let ccode = [];
      this.order_list.forEach((od, n) => {
        if (ccode.indexOf(od.cnt_order_code) === -1) {
          ccode.push(od.cnt_order_code);
        }
        od.price.forEach((cm, nn) => {
          let com_id = cm.vendor_code;
          if (com_id in list === false) {
            list[com_id] = [];
          }
          let order_cd =
            od.item.item_code !== od.item.order_code &&
            od.item.order_code !== ""
              ? od.item.order_code
              : od.item.item_code;

          list[com_id].push({
            com_id: com_id,
            com_name: cm.vname.com_name,
            order_model: od.listdata.cnt_model,
            shinsei_sha: od.listdata.user_yoyaku,
            shonin_sha: this.user_name,
            order_code: od.cnt_order_code,
            order_id: od.cnt_order_id,
            order_key: od.order_key,
            day_sitei: cm.order_day,
            item_code: order_cd,
            order_cmpt: od.cmpt.cmpt_code,
            item_model: od.item.item_model,
            item_name: od.item.item_name,
            item_rev: od.item.item_rev,
            item_rev_flg: od.item.item_rev_flg,
            order_num: od.num_order,
            tanka: cm.price,
            order_price: od.num_order * cm.price,
            answer_day: "",
            send_flg: "",
            send_day: ""
          });
        });
      });
      var csv =
        "com_id,com_name,order_model,shinsei_sha,shonin_sha,order_code,";
      csv = csv + "order_id,order_key,day_sitei,item_code,order_cmpt,";
      csv = csv + "item_model,item_name,item_rev,item_rev_flg,";
      csv = csv + "order_num,tanka,order_price,answer_day,send_flg,send_day\n";
      for (let key of Object.keys(list)) {
        list[key].forEach(ar => {
          let line = "";
          for (let k of Object.keys(ar)) {
            line = line + '"' + ar[k] + '",';
          }
          csv = csv + line.slice(0, line.length - 1) + "\n";
        });
      }
      let blob = new Blob([csv], { type: "text/csv" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      let day = dayjs().format("YYYYMMDDHHmmss");
      let daynum = Number(day);
      let day16 = daynum.toString(16);
      let rndm = String(Math.floor(Math.random() * 1000)).padStart(4, 0);
      let csv_name = "TSE_ORDER_" + day16 + rndm + ".csv";
      // this.order_code = this.ocode;
      link.download = csv_name;
      link.click();
      axios.post("/db/order/list/orderd/", ccode).then(res => {
        // console.log(res.data);
      });
      window.open("https://tse-order.firebaseapp.com/admin", "_blank");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

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
var iconv = require("iconv-lite");
iconv.skipDecodeWarning = true;
var jschardet = require("jschardet");

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
          return ar.price.find(Vnd => {
            return clist.indexOf(Vnd.vname.com_name) != -1;
          });
        });
      }
    },
    async getOrderData(link, mode) {
      axios.get(link).then(res => {
        let cmpt_list = [];
        let cstm_list = [];
        // console.log(res.data);
        let ol = (this.view_list = this.order_list = res.data.filter(
          row => row.num_order !== 0
        ));
        // console.log(this.order_list);
        if (ol[0].cmpt !== null) {
          ol.forEach((ar, n) => {
            if (cmpt_list.indexOf(ar.cmpt.cmpt_code) === -1) {
              cmpt_list.push(ar.cmpt.cmpt_code);
            }
            let tmp = ar.price;
            tmp.forEach(Vnd => {
              if (cstm_list.indexOf(Vnd.vname.com_name) === -1) {
                cstm_list.push(Vnd.vname.com_name);
              }
            });
          });
        }
        this.cmpt_list = cmpt_list;
        this.cstm_list = cstm_list;
        this.mode = mode;
      });
    },
    elseOrder() {
      let list = {};
      let ccode = [];
      this.order_list.forEach((od, n) => {
        if (ccode.indexOf(od.cnt_order_code) === -1) {
          ccode.push(od.cnt_order_code);
        }
        od.price.forEach((cm, nn) => {
          // console.log(cm);
          let com_id = cm.Vnd_code;
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
            order_cmpt: od.cmpt !== null ? od.cmpt.cmpt_code : "",
            item_model: od.item.item_model,
            item_name: od.item.item_name,
            item_rev: od.item.item_rev,
            item_rev_flg: od.item.item_rev_flg,
            order_num: od.num_order,
            tanka: cm.price,
            kako: cm.kako,
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
      csv = csv + "item_model,item_name,item_rev,item_rev_flg,order_num,";
      csv = csv + "tanka,kako,order_price,answer_day,send_flg,send_day\n";
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
      // window.open("https://tse-order.firebaseapp.com/admin", "_blank");
      this.$router.push("/");
    },
    dainiOrder() {
      const Dai2BuVnd = "k0080";
      const Dai2SoVnd = "k0079";
      const Dai1BuVnd = "k0076";
      const Dai3BuVnd = "k0078";
      const Hukuchi1Vnd = "k0097";
      let pass = [Dai2BuVnd, Dai2SoVnd, Dai1BuVnd, Dai3BuVnd, Hukuchi1Vnd];
      let orders = this.order_list.filter(row => {
        return (
          row.price.length > 0 && pass.indexOf(row.price[0].vendor_code) >= 0
        );
      });

      const Dai2BuCode = "LZS0080";
      const Dai2SoCode = "LZS0090";
      const Dai1BuCode = "LZS0060";
      const Dai3BuCode = "LZS0100";
      const Hukuchi1Code = "LZS0130";
      let code = {
        [Dai2BuVnd]: Dai2BuCode,
        [Dai2SoVnd]: Dai2SoCode,
        [Dai1BuVnd]: Dai1BuCode,
        [Dai3BuVnd]: Dai3BuCode,
        [Hukuchi1Vnd]: Hukuchi1Code
      };
      let csv = "";
      let file = orders.forEach(row => {
        let vnd = row.price[0].vendor_code;
        let oday = row.price[0].order_day.replace(/\-+/g, "");
        let order_cd =
          row.item.item_code !== row.item.order_code &&
          row.item.order_code !== ""
            ? row.item.order_code
            : row.item.item_code;
        let tekiyo =
          row.order_key +
          "#" +
          String(row.cnt_order_code).slice(4) +
          "#" +
          String(row.cmpt.cmpt_code).slice(0, 11);
        csv = csv + 1451 + ",";
        csv = csv + code[vnd] + ",";
        csv = csv + order_cd + ",";
        csv = csv + row.num_order + ",";
        csv = csv + "EA" + ",";
        csv = csv + oday + ",";
        csv = csv + "" + ",";
        csv = csv + tekiyo + "\n";
      });
      iconv.decode(csv, "shift_jis");
      let blob = new Blob([csv], { type: "text/csv" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      let day = dayjs().format("YYYYMMDDHHmmss");
      let daynum = Number(day);
      let day16 = daynum.toString(16);
      let csv_name = "WEB_EDI_" + day16 + ".csv";
      link.download = csv_name;
      link.click();
    },
    order() {
      this.dainiOrder();
      this.elseOrder();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <v-card>
    <v-card-text>
      <v-chip outline color="warning">区分：{{ p_class }}</v-chip>
      <v-chip outline color="primary">製造形式：{{ target.model_id }}</v-chip>
      <v-chip outline color="primary">製造コード：{{ target.const_code }}</v-chip>
      <v-layout wrap align-space-around justify-center fill-height>
        <v-flex xs10 class="pt-3 pb-3">
          <v-layout wrap class="align-center justify-center">
            <v-flex xs6 class="pr-5 mt-2">
              <v-text-field
                label="手配形式"
                v-model="fm.model"
                prepend-icon="fas fa-sitemap"
                readonly
                clearable
                @click="model_select()"
              ></v-text-field>
            </v-flex>
            <v-flex xs6 class="mt-2">
              <CalendarText label="指定納期（基準納期）" @select="date_select"></CalendarText>
            </v-flex>
            <v-flex xs6 class="pr-5 mt-4">
              <v-text-field
                label="手配コード（手配名）"
                v-model="ccode"
                readonly
                prepend-icon="fas fa-city"
                hint="自動 ｾｯﾄ:S+no, 部材:B+no"
              ></v-text-field>
            </v-flex>
            <v-flex xs6 class="mt-4">
              <v-text-field
                label="台数(セット数)"
                v-model="fm.num"
                type="number"
                suffix="EA"
                prepend-icon="fas fa-calculator"
              ></v-text-field>
            </v-flex>
            <v-flex xs5 class="mt-4">
              <v-select
                v-model="fm.order_class"
                :items="order_class"
                item-value="cnt_order_list_status"
                item-text="val"
                label="手配区分"
                prepend-icon="fas fa-calculator"
              ></v-select>
            </v-flex>
            <v-flex xs1>
              <OrderClassHint :message="orderClassHint" />
            </v-flex>
            <v-flex xs6 class="mt-4">
              <v-text-field
                label="手配申請者"
                v-model="fm.user"
                prepend-icon="fas fa-calculator"
                disabled
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-card-actions class="text-xs-center">
        <v-btn color="primary" flat class="action" @click="setOrder()" disabled>セット手配</v-btn>
        <v-btn color="primary" flat class="action" v-if="fm.model===''" disabled>形式を選択</v-btn>
        <v-btn
          color="primary"
          flat
          class="action"
          v-else-if="p_class!=='部品'"
          @click="mvCmptOrer()"
        >形式部材手配</v-btn>
        <v-btn color="primary" flat class="action" v-else @click="itemOrder()">部材手配</v-btn>
      </v-card-actions>
    </v-card-text>
    <template v-if="p_class==='部品'">
      <v-dialog v-model="select" width="600px">
        <SelectItem @select="rtItem" :defval="fm.code"></SelectItem>
      </v-dialog>
    </template>
    <template v-else>
      <v-dialog v-model="select" width="600px">
        <SelectModel @select="rtModel" :defval="target.model_id"></SelectModel>
      </v-dialog>
    </template>
    <v-dialog v-model="warning" max-width="500px" transition="dialog-transition">
      <v-card class="pa-2">
        <v-alert type="warning" :value="true" outline class>形式を選択してください</v-alert>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

import CmptOrderList from "./CmptOrderList";
import CalendarText from "./../../com/CalendarText";
import SelectModel from "./../../com/SelectModel";
import SelectItem from "./../../com/SelectItem";
import OrderClassHint from "@/components/com/Hint";

export default {
  props: ["target", "ccode"],
  components: {
    CmptOrderList,
    CalendarText,
    SelectModel,
    SelectItem,
    OrderClassHint
  },
  data: function() {
    return {
      fm: {
        code: "",
        model: "",
        rev: 0,
        num: 0,
        order_day: new Date().toISOString().substr(0, 10),
        pdct_id: 0,
        user: "GUEST",
        order_class: 0
      },
      order_class: null,
      select: false,
      warning: false,
      tar_model: null,
      search: "",
      p_class: "",
      item_dtail: null,
      cmpt_order: false,
      pagination: {
        totalItems: 0
      },
      orderClassHint: `
        <p>工事手配時：全ての部材(※)の使用予約数を加算します</p>
        <p>その他：選択部材の使用予約数のみを加算します</p>
        <p>※：部材区分「１：図面、３：セット品、６：CHIP品を除く」</p>
      `
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    async init() {
      await axios.get("/userinfo").then(res => {
        if (res.data !== "GUEST") {
          this.fm.user = res.data.name;
        }
      });
      await axios.get("/db/order/class").then(res => {
        this.order_class = res.data;
      });
      this.fm.code = this.ccode;
      this.search = this.target.model_id;
      this.fm.num = this.target.all_num;
      this.p_class = this.target.pdct_class;
      this.fm.pdct_id = this.target.pdct_id;
    },
    close_cmpt() {
      this.tar_model = null;
      this.fm.model = "";
      this.cmpt_order = !this.cmpt_order;
    },
    date_select(day) {
      this.fm.order_day = day;
    },
    setOrder() {
      if (this.modelCheck()) return;
    },
    mvCmptOrer() {
      this.$router.push({
        name: "order",
        params: {
          tar_model: this.tar_model,
          fm: this.fm,
          rtname: "model_mst"
        }
      });
    },
    itemOrder() {
      if (this.modelCheck()) return;
      let i = this.item_dtail[0];
      let fm = this.fm;
      let od = {
        ol: {
          cnt_model: fm.model,
          cnt_model_rev: fm.rev,
          cnt_order_code: fm.code,
          cnt_status: 0,
          cnt_order_list_status: fm.order_class,
          pdct_id: fm.pdct_id,
          order_price: 0,
          user_yoyaku: fm.user
        },
        o: [
          [
            {
              cnt_order_code: fm.code,
              order_key: 999,
              item_id: i.item_id,
              num_order: fm.num,
              appo_num: fm.num
            }
          ]
        ],
        op: [[[]]]
      };
      let price = 0;
      i.vendor.forEach((ar, n) => {
        od.op[0][0][n] = {
          vendor_code: ar.vendor_code,
          price: Number(ar.vendor_item_price),
          kako: ar.kako,
          order_day: dayjs(fm.order_day)
            .add(ar.order_add_date, "days")
            .format("YYYY-MM-DD")
        };
        price = price + Number(ar.vendor_item_price) * Number(fm.num);
      });
      od.ol.order_price = price;
      axios.post("/db/order/yoyaku/set", od).then(res => {
        this.reload("/product_list");
      });
    },
    modelCheck() {
      if (this.fm.model === "") {
        this.warning = true;
        return true;
      } else {
        return false;
      }
    },
    model_select() {
      this.select = !this.select;
      this.tar_model = null;
    },
    rtModel(select) {
      this.select = !this.select;
      if (select.model_code === "TSE_RP") {
        this.fm.order_class = 3;
      }
      axios.get("/db/model_mst/data/" + select.model_id).then(res => {
        this.fm.model = this.search = select.model_code;
        this.fm.rev = select.model_rev;
        this.tar_model = res.data[0];
      });
    },
    rtItem(item) {
      this.select = !this.select;
      this.fm.model = item.item_code;
      axios
        .get("items/iteminfo/" + item.item_code + "/" + item.item_rev)
        .then(res => {
          this.item_dtail = res.data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.model_name {
  font-size: 1.2rem;
}
.mini {
  font-size: 0.6rem;
}
.action {
  margin: 0 auto;
}
.data_list {
  font-size: 1rem;
  margin: 0 auto;
  td {
    padding: 0 1rem;
    border-bottom: 1px solid gray;
  }
}
</style>

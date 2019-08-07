<template>
  <v-card>
    <v-card-text>
      <v-chip outline color="warning">区分：{{ p_class }}</v-chip>
      <v-chip outline color="primary">製造形式：{{ target.model_id }}</v-chip>
      <v-chip outline color="primary">製造コード：{{ target.const_code }}</v-chip>
      <v-layout wrap align-space-around justify-center fill-height>
        <v-flex xs10 class="pt-3 pb-3">
          <v-layout wrap>
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
            <v-flex xs6 class="pr-5 mt-4">
              <v-select
                v-model="fm.order_class"
                :items="order_class"
                item-value="cnt_order_list_status"
                item-text="val"
                label="手配区分"
                prepend-icon="fas fa-calculator"
              ></v-select>
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
    <v-dialog
      v-model="selecter_item"
      scrollable
      :overlay="false"
      width="600px"
      transition="dialog-transition"
      v-if="item_data"
    >
      <v-card>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs10 offset-xs1>
              <v-text-field name="item_list_search" label="部材検索" v-model="search" clearable></v-text-field>
            </v-flex>
            <v-flex xs12 class="rightView text-xs-center">
              <v-data-table
                :headers="headers_item"
                :items="item_data"
                pagination.sync="pagination"
                dark
                item-key="item_id"
                :search="search"
              >
                <template v-slot:items="props">
                  <tr @click="select_item(props.item)">
                    <td class="text-xs-center">
                      <p class="model_name">{{ props.item.item_code }}</p>
                      <p class="mini">
                        <nobr>{{ props.item.order_code }} {{ props.item.item_rev.numToRev() }}</nobr>
                      </p>
                    </td>
                    <td class="text-xs-center">
                      <p>{{ props.item.item_name }}</p>
                      <p>{{ props.item.item_model }}</p>
                    </td>
                    <td class="text-xs-center">
                      <p class="mini">残数:{{ props.item.last_num }}</p>
                      <p class="mini">予約数:{{ props.item.appo_num }}</p>
                      <p class="mini">発注数:{{ props.item.order_num }}</p>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="selecter"
      scrollable
      :overlay="false"
      width="600px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs10 offset-xs1>
              <v-text-field name="model_list_search" label="形式検索" v-model="search" clearable></v-text-field>
            </v-flex>
            <v-flex xs12 class="rightView text-xs-center">
              <v-data-table
                :headers="headers"
                :items="model_data"
                pagination.sync="pagination"
                hide-actions
                dark
                item-key="model_id"
                :search="search === null ? '' : search.slice(0, search.length -3)"
              >
                <template v-slot:items="props">
                  <tr @click="select_model(props.item)">
                    <td class="text-xs-center">
                      <p class="model_name">{{ props.searchLength }} {{ props.item.model_code }}</p>
                      <p
                        class="mini"
                      >{{ props.item.model_code_ne }} {{ props.item.model_rev.numToRev() }}</p>
                    </td>
                    <td class="text-xs-center">{{ props.item.model_name}}</td>
                    <td class="text-xs-center">{{ props.item.cmpt.length }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
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

export default {
  props: ["target", "model_data", "ccode"],
  components: {
    CmptOrderList,
    CalendarText
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
      selecter: false,
      selecter_item: false,
      warning: false,
      tar_model: null,
      search: "",
      p_class: "",
      item_data: null,
      item_dtail: null,
      headers_item: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品目形式", value: "item_model", align: "center" },
        { text: "数量情報", value: "last_num", align: "center" }
      ],
      headers: [
        { text: "形式", value: "model_code", align: "center" },
        { text: "型式名", value: "model_name", align: "center" },
        { text: "構成数", value: "cmpt.length", align: "center" }
      ],
      cmpt_order: false,
      pagination: {
        totalItems: 0
      }
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
      await axios.get("/items/itemlist").then(res => {
        this.item_data = res.data;
      });
    },
    async select_item(item) {
      this.selecter_item = !this.selecter_item;
      this.fm.model = item.item_code;
      await axios
        .get("items/iteminfo/" + item.item_code + "/" + item.item_rev)
        .then(res => {
          this.item_dtail = res.data;
        });
    },
    async select_model(item) {
      this.selecter = !this.selecter;
      await axios.get("/db/model_mst/data/" + item.model_id).then(res => {
        this.fm.model = this.search = item.model_code;
        this.fm.rev = item.model_rev;
        this.tar_model = res.data[0];
      });
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
          fm: this.fm
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
              num_order: fm.num
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
        console.log(res.data);
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
      if (this.p_class === "部品") {
        this.selecter_item = !this.selecter_item;
        return;
      }
      this.selecter = !this.selecter;
      this.tar_model = null;
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

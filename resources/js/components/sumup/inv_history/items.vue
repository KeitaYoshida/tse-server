<template>
  <v-app>
    <v-container fluid id="old_inv_item">
      <v-layout row wrap>
        <v-flex xs4 class="text-xs-center">
          <span class="primary--text">総部材金額：</span>
          <v-chip
            large
            color="primary top-chip"
            dark
            outline
          >{{total_price !== 0 ? Math.round(total_price).toLocaleString() : 'Loading'}}</v-chip>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
          <span class="primary--text">区分表示切替：</span>
          <ComMenu :prop="item_class_menu" @rtVal="reMenuClass" />
        </v-flex>
        <v-flex xs4 class="text-xs-center">
          <span class="primary--text">集計差表示切替：</span>
          <ComMenu :prop="value_menu" @rtVal="reMenuValue" />
        </v-flex>
      </v-layout>
      <hr />
      <v-layout row wrap>
        <v-flex xs2 class="px-3">
          <v-btn
            color="primary"
            block
            large
            outline
            @click="checkAddItem()"
            :disabled="search===''"
          >追加</v-btn>
        </v-flex>
        <v-flex xs10>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
            class="pb-3 px-3"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-data-table
        :headers="headers"
        :items="lists"
        class="elevation-1"
        :pagination.sync="pagination"
        item-key="item_id"
        :search="search"
        :loading="lists.length===0"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">
            <v-chip
              :class="props.item.item_info.item_class_val.custom + ' chip ren'"
              large
              outline
              @click="change_item_class(props)"
            >{{ props.item.item_info.item_class_val.value === "ネジ・スペーサ" ? "ネジ他" : props.item.item_info.item_class_val.value}}</v-chip>
          </td>
          <td class="text-xs-center">
            <p>
              <span class="item_code">{{ props.item.item_code }}</span>
              <span
                class="rev"
                v-if="props.item.item_rev !== 0"
              >({{ props.item.item_rev.numToRev() }})</span>
            </p>
            <template
              v-if="props.item.order_code != '' && props.item.order_code !== null && props.item.order_code.trim() != props.item.item_code.trim() "
            >
              <p class="order_code">代: {{props.item.order_code }}</p>
            </template>
          </td>
          <td class="text-xs-center">
            <p>
              <span v-if="props.item.item_info.lot_num > 0">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-chip small outline color="primary" class="box" v-on="on">lot</v-chip>
                  </template>
                  <span
                    v-html="returnLotValue(props.item.item_info.lot_num, props.item.item_info.minimum_set)"
                  ></span>
                </v-tooltip>
              </span>
              {{ props.item.item_model }}
            </p>
            <p>{{ props.item.item_name }}</p>
          </td>
          <td class="text-xs-center success--text fix">
            <span
              @click="fixViewAction(props.item, 'inv_num')"
            >{{ props.item.inv_num.toLocaleString() }}</span>
          </td>
          <td class="text-xs-center">
            <p>{{ props.item.last_num.toLocaleString() }}</p>
            <p
              :class="pulsCheck(props.item.last_num, props.item.inv_num)"
            >{{ (props.item.inv_num - props.item.last_num ).toLocaleString() }}</p>
          </td>
          <td class="text-xs-center">
            <p class="success--text fix">
              <span @click="fixViewAction(props.item, 'item_price')">{{ props.item.item_price }}</span>
            </p>
            <p
              class="shukei"
            >{{ Math.round(Number(props.item.item_price * props.item.inv_num)).toLocaleString() }}</p>
          </td>
          <td class="text-xs-center">
            <p
              :class="pulsCheck(props.item.last_num, props.item.inv_num) + ' sagaku'"
            >{{ Math.round(Number(props.item.item_price * props.item.inv_num) - Number(props.item.item_price * props.item.last_num)).toLocaleString() }}</p>
          </td>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog v-model="class_selecter" max-width="200px" transition="dialog-transition">
      <v-list class="text-xs-center class_list" v-if="class_list">
        <v-list-tile avatar v-for="(item, index) in class_list" :key="index">
          <v-list-tile-content>
            <v-btn flat @click="select_item_class(item)">{{ item.value }}</v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-dialog>
    <v-dialog v-model="fixView" max-width="500px">
      <FixNum :data="fixData" v-if="fixView" @rt="returnNum"></FixNum>
    </v-dialog>
    <v-dialog v-model="addItem" max-width="500px" v-if="addItem">
      <AddItem :data="addItemMessage" @rt="addItemAction"></AddItem>
    </v-dialog>
    <v-bottom-nav fixed :active.sync="main_action" v-model="main_action">
      <v-btn flat value="csv" color="primary" @click="getCsv()">
        <span>ＣＳＶ出力</span>
        <v-icon>fas fa-file-csv</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FixNum from "@/components/com/ComFormDialog";
import ComMenu from "@/components/com/ComMenu";
import AddItem from "@/components/com/ComCheckDialog";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
var iconv = require("iconv-lite");

export default {
  props: [],
  components: {
    FixNum,
    ComMenu,
    AddItem
  },
  data: function() {
    return {
      main_action: null,
      fixView: false,
      fixData: {
        title: "訂正数",
        message: "入力値にて登録します",
        data: [
          {
            name: "teisei",
            label: "訂正数",
            type: "number",
            value: null
          }
        ]
      },
      beforeFix: {},
      search: "",
      headers: [
        {
          text: "区分",
          value: "item_info.item_class_val.value",
          align: "center"
        },
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名／形式", value: "item_model", align: "center" },
        { text: "集計数", value: "item_name", align: "center" },
        { text: "理論数／差数", value: "", align: "center" },
        { text: "単価／集計額", value: "", align: "center" },
        { text: "集計差額", value: "inv_num * item_price", align: "center" }
      ],
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 8,
        sortBy: "inv_num",
        totalItems: 0,
        rowsPerPageItems: [1, 2, 4, 8, 16]
      },
      items: [],
      lists: [],
      total_price: 0,
      class_selecter: false,
      class_list: null,
      target: null,
      view_item_class: null,
      view_lot: false,
      view_value: null,
      item_class_menu: {
        value: ["全件表示"],
        small: true,
        text: "全件表示"
      },
      value_menu: {
        value: ["全件表示", "未集計表示", "完了表示", "超過集計表示"],
        small: true,
        text: "全件表示"
      },
      addItem: false,
      addItemMessage: ""
    };
  },
  computed: {
    ...mapState({
      user: "user_info"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let date = this.$route.params.date;
      let items = await axios.get("/db/inv/his/items/" + date);
      this.lists = this.items = items = items.data;
      for (let item of items) {
        this.total_price =
          this.total_price + item.inv_num * Number(item.item_price);
      }
      let item_class = await axios.get("/db/items/class/list");
      this.class_list = this.item_class = item_class = item_class.data;
      for (let cl of item_class) {
        this.item_class_menu.value.push(cl.value);
      }
    },
    pulsCheck(last, inv) {
      if (last < inv) return "primary--text";
      else if (last > inv) return "warning--text";
    },
    returnLotValue(lot, min) {
      return `
        <h5>Lot 手配数: ${lot}</h5>
        <h5>最小手配数: ${min}</h5>
      `;
    },
    change_item_class(item) {
      this.class_selecter = !this.class_selecter;
      this.target = item;
    },
    select_item_class(d) {
      let tar = this.target.item;
      tar.item_info.item_class = d.item_class_id;
      tar.item_info.item_class_val = d;
      axios.get(
        "/db/items/class/set/" + d.item_class_id + "/" + tar.item_info.item_id
      );
      this.class_selecter = !this.class_selecter;
      this.target.selected = false;
      this.target = null;
    },
    fixViewAction(target, text) {
      this.beforeFix = target;
      target.text = text;
      this.fixView = !this.fixView;
      this.fixData.data[0].value = target[text];
    },
    async returnNum(val) {
      let his = {
        loginid: this.user.loginid,
        inv_date: this.beforeFix.inv_date,
        inv_item_id: this.beforeFix.inv_item_id,
        tar_column: this.beforeFix.text,
        fix_val: Number(val.data[0].value),
        before_val: this.beforeFix[this.beforeFix.text]
      };
      let tar = await this.items.filter(
        ar => ar.inv_item_id === his.inv_item_id
      );
      tar[0][his.tar_column] = his.fix_val;
      this.total_price = 0;
      for (let item of this.items) {
        this.total_price =
          this.total_price + item.inv_num * Number(item.item_price);
      }
      let res = await axios.post("/db/inv/fix/item/", {
        history: his,
        total_price: this.total_price
      });
      this.fixView = !this.fixView;
    },
    async reMenuClass(val) {
      this.item_class_menu.text = val;
      let pair_text = this.value_menu.text;
      if (val === "全件表示") {
        this.lists = this.items;
      } else {
        this.lists = await this.items.filter(
          ar => ar.item_info.item_class_val.value === val
        );
      }
      if (pair_text === "全件表示") return;
      else if (pair_text === "未集計表示") {
        this.lists = this.lists.filter(ar => ar.inv_num < ar.last_num);
      } else if (pair_text === "完了表示") {
        this.lists = this.lists.filter(ar => ar.inv_num == ar.last_num);
      } else {
        this.lists = this.lists.filter(ar => ar.inv_num > ar.last_num);
      }
    },
    async reMenuValue(val) {
      this.value_menu.text = val;
      let pair_text = this.item_class_menu.text;
      if (val === "全件表示") {
        this.lists = this.items;
      } else {
        if (val === "未集計表示") {
          this.lists = await this.items.filter(ar => ar.inv_num < ar.last_num);
        } else if (val === "完了表示") {
          this.lists = await this.items.filter(ar => ar.inv_num == ar.last_num);
        } else {
          this.lists = await this.items.filter(ar => ar.inv_num > ar.last_num);
        }
      }
      if (pair_text === "全件表示") return;
      this.lists = await this.lists.filter(
        ar => ar.item_info.item_class_val.value === pair_text
      );
    },
    async checkAddItem() {
      let item_code = this.search;
      let res = await axios.get("/db/items/search/get/new/rev/" + item_code);
      let inv_date = this.items[0].inv_date;
      if (res.data.length === 0) {
        this.addItemMessage = {
          title: "部材がありません",
          message: `検索欄に正しい品目コードを入力後実行して下さい`
        };
      } else {
        if (
          this.items.filter(ar => ar.item_id === res.data[0].item_id).length !==
          0
        ) {
          this.addItemMessage = {
            title: "すでに登録済みです"
          };
        } else {
          this.addItemMessage = {
            title: "部材追加",
            message: `下記部材をついかします`,
            data_v2: [
              ["品目コード", res.data[0].item_code],
              ["rev", res.data[0].item_rev],
              ["品名", res.data[0].item_name],
              ["形式", res.data[0].item_model]
            ],
            send_data: {
              inv_date: inv_date,
              inv_num: 0,
              item_code: res.data[0].item_code,
              item_id: res.data[0].item_id,
              item_model: res.data[0].item_model,
              item_name: res.data[0].item_name,
              item_price: res.data[0].item_price,
              item_rev: res.data[0].item_rev,
              last_num: res.data[0].last_num,
              order_code: res.data[0].order_code
            }
          };
        }
      }
      this.addItem = !this.addItem;
    },
    async addItemAction(data) {
      if (data.send_data === undefined) {
        return;
      }
      let addInvAction = await axios.post(
        "/db/inv/add/inv/item",
        data.send_data
      );
      this.items.push(addInvAction.data[0]);
      this.lists = this.items;
      this.addItem = !this.addItem;
    },
    getCsv() {
      let list = "";
      var csv = "";
      csv = csv + "品目コード,品目形式,集計数,総定数";
      list = csv + "\n";
      // console.log(this.list);
      // return;

      this.items.forEach((ar, n) => {
        list = list + ar.item_code + ",";
        list = list + (ar.item_model != null ? ar.item_model + "," : ",");
        list = list + ar.inv_num + ",";
        list = list + ar.last_num;
        list = list + "\n";
      });
      list = iconv.encode(list, "Shift_JIS");
      let blob = new Blob([list], { type: "text/csv" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      let day = dayjs().format("YYYYMMDDHHmmss");
      let daynum = Number(day);
      let day16 = daynum.toString(16);
      let csv_name = "部材集計リスト_" + day16 + ".csv";
      link.download = csv_name;
      link.click();
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.item_code {
  font-size: 1.2rem;
}
.order_code {
  font-size: 0.9rem;
  color: grey;
}
.rev {
  font-size: 0.7rem;
}
.fix {
  font-size: 1.3rem;
  cursor: pointer;
}
.shukei {
  font-size: 1.5rem;
}
.sagaku {
  font-size: 1.4rem;
}
.class_list {
  button {
    margin: 0 auto;
  }
}
.top-chip {
  border-radius: 3px;
}
#old_inv_item {
  margin-bottom: 64px;
}
</style>

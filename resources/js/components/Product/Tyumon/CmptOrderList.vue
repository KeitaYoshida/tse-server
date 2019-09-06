<template>
  <v-app>
    <v-card v-if="tar_model && fm" flat>
      <v-toolbar color="transparent" flat>
        <v-btn icon flat @click="mv_back()">
          <v-icon color="primary">fas fa-angle-double-left</v-icon>
        </v-btn>
        <v-chip color="primary" outline>{{ fm.model }}</v-chip>
        <template v-if="selecter">
          <v-chip color="primary" outline>
            {{ fm.num }}
            <span class="mini">EA</span>
          </v-chip>
          <v-chip color="primary" outline>{{ fm.rev.numToRev() }}</v-chip>
          <v-chip color="primary" outline>{{ fm.code }}</v-chip>
          <v-chip color="primary" outline>{{ fm.order_day }}</v-chip>
        </template>
      </v-toolbar>
      <v-card-text>
        <v-container fluid v-if="view">
          <v-tabs fixed-tabs show-arrows v-model="tabs">
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="(cmpt, index) in tarModel.cmpt"
              :key="index"
            >{{ cmpt.cmpt_code.slice(0, -3) }}</v-tab>
            <v-tab-item v-for="(cmpt, index) in tarModel.cmpt" :key="index" class="mt-5">
              <v-data-table
                v-model="selected[index]"
                :headers="headers"
                :items="cmpt.item_use"
                pagination.sync="pagination"
                hide-actions
                :select-all="selecter"
                item-key="item_id"
              >
                <template v-slot:items="props">
                  <tr v-if="view_data_checker(props.item.items.item_class)">
                    <td v-if="selecter">
                      <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
                    </td>
                    <td class="text-xs-center">
                      <p>
                        <v-chip
                          :class="props.item.items.item_class_val.custom + ' chip ren'"
                          large
                          outline
                          @click="change_item_class(props)"
                        >
                          {{ props.item.items.item_class_val.value === "ネジ・スペーサ" ? "ネジ他" : props.item.items.item_class_val.value}}
                          <br />
                          {{ props.item.item_ren }}
                        </v-chip>
                      </p>
                    </td>
                    <td class="text-xs-center">
                      <p class="item_code_area">
                        <nobr>
                          <v-btn flat icon small color="primary" @click="henshu(props.item)">
                            <v-icon small>far fa-edit</v-icon>
                          </v-btn>
                          <span class="item_code">{{ props.item.items.item_code }}</span>
                          <v-btn
                            flat
                            icon
                            small
                            color="deep-orange darken-3"
                            @click="delAct(props.item, props.index)"
                          >
                            <v-icon small>far fa-trash-alt</v-icon>
                          </v-btn>
                        </nobr>
                      </p>
                      <p
                        v-if="props.item.items.order_code !== '' && props.item.items.order_code !== props.item.items.item_code"
                      >( {{ props.item.items.order_code }} )</p>
                    </td>
                    <td class="text-xs-center">
                      <p>{{ props.item.items.item_model }}</p>
                      <p>{{ props.item.items.item_name }}</p>
                    </td>
                    <td class="text-xs-center" v-if="selecter">
                      <p>
                        <v-btn
                          flat
                          small
                          class="lg indigo--text text--darken-3"
                          @click="num_change(props.item.items)"
                        >
                          {{ props.item.items.num }}
                          <span class="mini pl-2">EA</span>
                        </v-btn>
                      </p>
                      <p>
                        {{ props.item.items.price }}
                        <span class="mini pl-2">¥</span>
                      </p>
                    </td>
                    <td class="text-xs-center price">
                      <v-layout row wrap>
                        <template v-for="(item, index) in props.item.items.vendor">
                          <v-flex xs6 :key="'n' + index">{{ item.vendname.com_name }}</v-flex>
                          <v-flex
                            xs6
                            :key="'p' + index"
                            v-if="selecter"
                          >{{ Math.round(item.vendor_item_price * props.item.items.num).toLocaleString() }}</v-flex>
                          <v-flex xs6 :key="'p' + index" v-else>{{ item.vendor_item_price }}</v-flex>
                        </template>
                      </v-layout>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-tab-item>
          </v-tabs>
        </v-container>
      </v-card-text>
      <v-bottom-nav fixed value="value" active.sync="value">
        <v-btn flat color="primary" @click="close_cmpt()">
          <span>戻る</span>
          <v-icon>fas fa-chevron-circle-left</v-icon>
        </v-btn>
        <v-btn flat color="primary" @click="make()" v-if="selecter">
          <span>決定</span>
          <v-icon>fas fa-check-circle</v-icon>
        </v-btn>
        <v-btn flat color="primary" @click="flg_chip_view=!flg_chip_view">
          <span>CHIP品</span>
          <v-icon v-if="!flg_chip_view">far fa-meh</v-icon>
          <v-icon v-else>far fa-laugh</v-icon>
        </v-btn>
        <v-btn flat color="primary" @click="flg_set_view=!flg_set_view">
          <span>セット品</span>
          <v-icon v-if="!flg_set_view">far fa-meh</v-icon>
          <v-icon v-else>far fa-laugh</v-icon>
        </v-btn>
        <v-btn flat color="primary" @click="add()">
          <span>構成追加</span>
          <v-icon>fas fa-sitemap</v-icon>
        </v-btn>
        <v-btn flat color="primary" @click="deleteCmpt()">
          <span>親形式削除</span>
          <v-icon>fas fa-trash-alt</v-icon>
        </v-btn>
      </v-bottom-nav>
      <v-dialog v-model="additem" transition="dialog-transition" width="500px">
        <AddCmptItem :data="dialog_data" @rt="rtAdd" v-if="additem"></AddCmptItem>
      </v-dialog>
      <v-dialog v-model="delcmpt" max-width="500px" transition="dialog-transition">
        <DelChecker :data="delchk_cmpt" @rt="delAct_Cmpt" v-if="delcmpt"></DelChecker>
      </v-dialog>
      <v-dialog v-model="delchk" max-width="500px" transition="dialog-transition">
        <DelChecker :data="delchk_val" @rt="delAct_Do" v-if="delchk"></DelChecker>
      </v-dialog>
      <v-dialog v-model="henshu_view" max-width="700px" transition="dialog-transition">
        <HenshuView
          v-if="henshu_view"
          :item_code="target.items.item_code"
          :item_rev="target.items.item_rev"
          :del="false"
          @pass="up_items"
        ></HenshuView>
      </v-dialog>
      <v-dialog v-model="num_selecter" max-width="500px" transition="dialog-transition">
        <NumChanger :data="num_select_obj" @rt="change_num"></NumChanger>
      </v-dialog>
      <v-dialog v-model="class_selecter" max-width="200px" transition="dialog-transition">
        <v-list class="text-xs-center class_list">
          <v-list-tile avatar v-for="(item, index) in class_list" :key="index">
            <v-list-tile-content>
              <v-btn flat @click="select_item_class(item)">{{ item.value }}</v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-dialog>
    </v-card>
  </v-app>
</template>

<script>
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

import DelChecker from "./../../com/ComCheckDialog";
import NumChanger from "./../../com/ComFormDialog";
import HenshuView from "./../../ItemData/Henshu";
import AddCmptItem from "./../../com/ComFormDialog";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    DelChecker,
    AddCmptItem,
    NumChanger,
    HenshuView
  },
  computed: {
    ...mapState({
      user_info: "user_info"
    })
  },
  props: ["tar_model", "fm", "mode", "rtname"],
  data: function() {
    return {
      tabs: 0,
      target: null,
      target_index: 0,
      num_change_target: null,
      num_selecter: false,
      num_select_obj: {
        title: "手配数量変更",
        message: "手配数を変更できます。",
        data: [
          {
            name: "num",
            label: "手配数",
            id: "",
            hint: "",
            type: "number",
            value: 0
          }
        ]
      },
      headers: [
        { text: "連／種別", value: "item_ren", align: "center" },
        { text: "手配品目コード", value: "items.item_code", align: "center" },
        { text: "品名", value: "items.item_model", align: "center" },
        { text: "手配数", value: "items.item_model", align: "center" },
        { text: "手配先", value: "items.item_model", align: "center" }
      ],
      selected: [],
      selecter: true,
      pagination: {
        sortBy: "item_ren"
      },
      class_selecter: false,
      class_list: null,
      henshu_view: false,
      flg_chip_view: false,
      flg_set_view: false,
      view: true,
      additem: false,
      dialog_data: null,
      delchk: false,
      delchk_val: {
        title: "構成部材削除",
        message: "親形式から部材を削除します。"
      },
      delcmpt: false,
      delchk_cmpt: {
        title: "構成削除",
        message: "親形式そのものを削除します"
      },
      tarModel: null
    };
  },
  created: function() {
    this.init();
    // console.log(this.user_info);
  },
  methods: {
    init() {
      if (this.tarModel === null) this.tarModel = this.tar_model;
      if (this.mode === "cmpt") {
        this.selecter = false;
        this.headers = [
          { text: "連／種別", value: "item_ren", align: "center" },
          { text: "手配品目コード", value: "items.item_code", align: "center" },
          { text: "品名", value: "items.item_model", align: "center" },
          { text: "手配先", value: "items.item_model", align: "center" }
        ];
      }
      if (this.tarModel === undefined) {
        this.$router.push({ name: "home" });
        return;
      }
      this.tarModel.cmpt.forEach(c => {
        c.item_use.forEach(i => {
          this.setNumPrice(i);
        });
      });
      axios.get("/db/items/class/list").then(res => {
        this.class_list = res.data;
      });
    },
    async review() {
      let tmp = await axios.get("/db/model_mst/data/" + this.tarModel.model_id);
      this.tarModel = tmp.data[0];
      this.init();
    },
    make() {
      let fm = this.fm;
      if (this.selected.length === 0) {
        alert("部材を選択してください");
        return;
      }
      let dCntOrderList = {
        cnt_model: fm.model,
        cnt_model_rev: fm.rev,
        cnt_order_code: fm.code,
        cnt_status: 0,
        cnt_order_list_status: fm.order_class,
        pdct_id: fm.pdct_id,
        order_price: 0,
        cnt_order_num: fm.num,
        user_yoyaku: fm.user
      };
      let price = 0;
      let dCntOrders = [];
      let dCntPrice = [];
      let keynum = 1000;
      // console.log(this.selected);
      this.selected.forEach((a, x) => {
        a.forEach((ar, n) => {
          keynum = keynum - 1;
          let i = ar.items;
          if (i.item_class === 1) return;
          if (!this.flg_chip_view) {
            if (i.item_class === 6) return;
          }
          if (!this.flg_set_view) {
            if (i.item_class === 3) return;
          }
          if (dCntOrders[x] === undefined) dCntOrders[x] = [];
          dCntOrders[x][n] = {
            cnt_order_code: fm.code,
            order_key: keynum,
            cmpt_id: ar.cmpt_id,
            assy_num: ar.item_ren,
            item_id: i.item_id,
            num_order: ar.items.num,
            appo_num: fm.num * ar.item_use
          };
          if (i.vendor !== undefined) {
            i.vendor.forEach((arr, nn) => {
              if (dCntPrice[x] === undefined) {
                dCntPrice[x] = [];
              }
              if (dCntPrice[x][n] === undefined) {
                dCntPrice[x][n] = [];
              }
              dCntPrice[x][n][nn] = {
                vendor_code: arr.vendor_code,
                price: arr.vendor_item_price,
                kako: arr.kako,
                order_day: dayjs(fm.order_day)
                  .add(arr.order_add_date, "days")
                  .format("YYYY-MM-DD")
              };
              price = price + arr.vendor_item_price * i.num;
            });
          }
        });
      });
      dCntOrderList.order_price = price;
      let d = {
        ol: dCntOrderList,
        o: dCntOrders,
        op: dCntPrice
      };
      // console.log(d);
      // return;
      axios.post("/db/order/yoyaku/set", d).then(res => {
        this.$router.push("/product_list");
      });
    },
    close_cmpt() {
      this.$emit("close");
    },
    toggleAll(i) {
      if (this.selected.length) this.selected = [];
      else this.selected = i.slice();
    },
    setNumPrice(i) {
      let zan = i.items.last_num;
      let yoyaku = i.items.appo_num;
      let tehai = i.items.order_num;
      let hituyou = i.item_use * this.fm.num;
      let order = hituyou - zan - tehai + yoyaku;
      if (i.items.lot_num <= 0) {
        if (order < 0) {
          i.items.num = 0;
        } else {
          i.items.num = order;
        }
      } else {
        let lot = i.items.lot_num;
        let min = i.items.minimum_set;
        if (order < min) {
          i.items.num = 0;
        }
        let setNum = Math.ceil(order / lot);
        i.items.num = lot * setNum;
      }

      let price = 0;
      i.items.vendor.forEach(ar => {
        price = Number(price) + Number(ar.vendor_item_price);
      });
      i.items.price = Math.round(i.items.num * price).toLocaleString();
    },
    num_change(is) {
      this.num_select_obj.data[0].value = is.num;
      this.num_change_target = is;
      this.num_selecter = !this.num_selecter;
    },
    itemClass(c) {
      switch (c) {
        case "部材":
          return "green--text text--darken-3";
          break;
        case "板金":
          return "blue-grey--text text--darken-4";
          break;
        case "ネジ・スペーサ":
          return "orange--text text--darken-3";
          break;
      }
    },
    change_item_class(item) {
      this.class_selecter = !this.class_selecter;
      this.target = item;
    },
    select_item_class(d) {
      let tar = this.target.item;
      tar.items.item_class = d.item_class_id;
      tar.items.item_class_val = d;
      axios.get(
        "/db/items/class/set/" + d.item_class_id + "/" + tar.items.item_id
      );
      this.class_selecter = !this.class_selecter;
      this.target.selected = false;
      this.target = null;
    },
    change_num(d) {
      this.num_change_target.num = d.data[0].value;
      this.num_selecter = !this.num_selecter;
    },
    henshu(i) {
      this.henshu_view = true;
      this.target = i;
    },
    henshu_rt() {
      this.henshu_view = false;
      this.target = null;
    },
    async up_items(d) {
      await this.review();
      this.henshu_view = false;
    },
    view_data_checker(n) {
      if (this.flg_chip_view === false) {
        if (n === 6) return false;
      }
      if (this.flg_set_view === false) {
        if (n === 3) return false;
      }
      if (n === 1) return false;
      return true;
    },
    add() {
      let m = this.tarModel;
      let model_id = m.model_id;
      let cmpt = m.cmpt[this.tabs];
      this.dialog_data = {
        title: "構成部材登録",
        message:
          "親形式 " +
          cmpt.cmpt_code +
          '<span style="padding:0 0.5rem; font-size:0.5rem;">' +
          cmpt.cmpt_rev.numToRev() +
          "</span> に部材を登録します<br>※連番は０番固定",
        data: [
          {
            name: "item_code",
            label: "品目コード",
            id: "item_code",
            hint: "",
            value: "",
            type: ""
          },
          {
            name: "item_rev",
            label: "品目ＲＥＶ",
            id: "item_rev",
            hint: "ハイフン(-)を除いた整数値を入力してください　例 01-03 → 103",
            value: "",
            type: "number"
          },
          {
            name: "item_use",
            label: "員数",
            id: "item_use",
            hint: "手配時発注単位数",
            value: "",
            type: "number"
          }
        ],
        tar: {
          rci: cmpt.cmpt_id
        }
      };
      this.additem = true;
    },
    async rtAdd(d, flg) {
      if (
        d.data[0].value === "" ||
        d.data[1].value === "" ||
        d.data[2].value === ""
      ) {
        return;
      }
      let data = {
        item: {
          item_code: d.data[0].value,
          item_rev: d.data[1].value
        },
        cmpt: {
          cmpt_id: d.tar.rci,
          item_use: d.data[2].value
        }
      };
      await axios.post("/db/r_cmpt_item/add/item/", data).then(res => {
        if (res.data.length === 0) {
          alert("登録済みデータです");
        } else {
          this.setNumPrice(res.data[0]);
          this.tarModel.cmpt[this.tabs].item_use.unshift(res.data[0]);
        }
      });
      this.review();
      this.additem = !this.additem;
    },
    delAct(i, index) {
      this.target = i;
      this.target_index = index;
      this.delchk = true;
    },
    async delAct_Do() {
      let cmpt_id = this.tarModel.cmpt[this.tabs].cmpt_id;
      let item_id = this.target.items.item_id;
      await axios.get("/db/r_cmpt_item/delete/item/" + cmpt_id + "/" + item_id);
      let index = this.tarModel.cmpt[this.tabs].item_use.forEach((ar, ind) => {
        if (ar.items.item_id === item_id) {
          this.tarModel.cmpt[this.tabs].item_use.splice(ind, 1);
          this.delchk = false;
          this.target = null;
          this.target_index = 0;
          return;
        }
      });
      this.review();
    },
    mv_back() {
      this.$router.go(-1);
      // let name = this.rtname ? this.rtname : "product_list";
      // this.$router.push({
      //   name: name
      // });
    },
    deleteCmpt() {
      this.delcmpt = true;
    },
    async delAct_Cmpt() {
      let cmpt = this.tarModel.cmpt[this.tabs];
      let cmpt_id = cmpt.cmpt_id;
      await axios.get("/db/cmpt/delete/cmpt/" + cmpt_id);
      await this.review();
      this.delcmpt = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.item_code_area {
  .v-btn {
    margin: 0;
  }
}
.class_list {
  button {
    margin: 0 auto;
  }
}
.item_code {
  font-size: 1.2rem;
}
.v-card__text {
  margin-bottom: 5rem;
}
.v-chip.ren {
  height: 44px;
}
.t + .t {
  margin-left: 1rem;
}
td.price {
  font-size: 0.8rem;
}
.t {
  font-size: 1.2rem;
  border: 0.5px solid white;
  border-radius: 5px;
  padding: 0.5rem;
  // &.model {
  // }
  // &.rev {
  // }
  // &.num {
  // }
  // &.code {
  // }
  // &.day {
  // }
}
.mini {
  font-size: 0.5rem;
}
.v-btn.lg {
  font-size: 1.4rem;
  height: 28px;
  padding: 4px;
}
p {
  margin-bottom: 0;
}
// tr,
// td {
//   background-color: transparent;
// }
</style>

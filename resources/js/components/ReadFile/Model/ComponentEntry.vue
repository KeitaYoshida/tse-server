<template>
  <main>
    <v-tabs v-model="tabs" fixed-tabs color="transparent" class="mb-4">
      <v-tab
        v-for="(cmpt, index) in modelData[0].cmpt"
        :key="index"
        slider-color="primary"
      >{{ cmpt.cmpt_code.slice(0, 11) }}</v-tab>
    </v-tabs>
    <v-layout row wrap class="pl-5 pr-5">
      <v-flex xs6 class="pl-5 pr-5 pb-3 pt-3">
        <v-btn class="act-btn" color="green lighten-1" outline @click="add()">部材追加</v-btn>
      </v-flex>
      <v-flex xs6 class="pl-5 pr-5 pb-3 pt-3">
        <template v-if="delflg">
          <v-btn class="act-btn" color="primary lighten-1" outline @click="delflg=!delflg">更新モード</v-btn>
        </template>
        <template v-else>
          <v-btn class="act-btn" color="deep-orange lighten-1" outline @click="delflg=!delflg">削除モード</v-btn>
        </template>
      </v-flex>
    </v-layout>
    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="(cmpt, index) in modelData[0].cmpt" :key="'cmpt' + index">
        <table>
          <tr>
            <td>手配</td>
            <td>連</td>
            <td>品目コード</td>
            <td>手配形式</td>
            <td>部材名／形式</td>
            <td>Lot(最小数)／RT</td>
            <td class="price">手配先情報</td>
            <td>編集</td>
          </tr>
          <template v-for="(items, index) in cmpt.item_use">
            <tr v-if="checkout(items.items.item_class)" :key="'items_' + index">
              <td @click="check(cmpt, items)">
                <v-checkbox v-model="items.item_order" color="primary"></v-checkbox>
              </td>
              <td>{{ items.item_ren}}</td>
              <td>
                {{ items.items.item_code.rtrim() }}
                <br />
                <span class="mini">{{ items.items.item_rev.numToRev() }}</span>
              </td>
              <td>{{ put_order_code(items.items.item_code.rtrim(), items.items.order_code.rtrim())}}</td>
              <td>
                {{ items.items.item_name !== null ? items.items.item_name.slice(0,16): '' }}
                <br />
                {{ items.items.item_model !== null ? items.items.item_model.slice(0, 20): '' }}
              </td>
              <td>
                {{ items.items.lot_num.lotToText() }}
                <template
                  v-if="items.items.lot_num >= 0"
                >({{ items.items.minimum_set.comHyphen() }})</template>
                <br />
                {{ Number(items.items.read_time).comHyphen() }}
              </td>
              <td>
                <v-layout row wrap v-for="(vendor, index) in items.items.vendor" :key="index">
                  <v-flex xs6 class="mini">{{ vendor.vendname.com_name }}</v-flex>
                  <v-flex xs6 class="mini">{{ Number(vendor.vendor_item_price).toLocaleString() }}</v-flex>
                </v-layout>
              </td>
              <td>
                <template v-if="!delflg">
                  <v-btn outline color="primary" small dark @click="edit(items.items)">
                    <v-icon small left>edit</v-icon>edit
                  </v-btn>
                </template>
                <template v-else>
                  <v-btn outline color="deep-orange" small dark @click="del(index)">
                    <v-icon small left>delete</v-icon>del
                  </v-btn>
                </template>
              </td>
            </tr>
          </template>
        </table>
      </v-tab-item>
    </v-tabs-items>
    <v-dialog v-model="henshu" width="80%" @input="close" overflow>
      <Henshu v-if="henshu" :item_code="item_code" :item_rev="item_rev" @pass="pass" :del="false"></Henshu>
    </v-dialog>
    <v-dialog v-model="additem" transition="dialog-transition" width="36%">
      <AddCmptItem :data="dialog_data" @rt="rtAdd" v-if="additem"></AddCmptItem>
    </v-dialog>
    <v-dialog v-model="delitem" transition="dialog-transition" width="36%">
      <DelCmptItem :data="dialog_data" @rt="rtDel" v-if="delitem"></DelCmptItem>
    </v-dialog>
    <template v-if="upmode!==true">
      <v-bottom-nav fixed value="value">
        <v-btn flat @click="back">
          <span>戻る</span>
          <v-icon>fas fa-backward</v-icon>
        </v-btn>
        <v-btn flat @click="next">
          <span>次へ</span>
          <v-icon>fas fa-forward</v-icon>
        </v-btn>
      </v-bottom-nav>
    </template>
  </main>
</template>

<script>
import Henshu from "./../../ItemData/Henshu";
import AddCmptItem from "./../../com/ComFormDialog";
import DelCmptItem from "./../../com/ComCheckDialog";

export default {
  props: ["modelData", "upmode"],
  components: {
    Henshu,
    AddCmptItem,
    DelCmptItem
  },
  data: function() {
    return {
      tabs: 0,
      henshu: false,
      item_code: "",
      item_rev: "",
      i: null,
      delflg: false,
      additem: false,
      delitem: false,
      dialog_data: null
    };
  },
  created: function() {},
  methods: {
    put_order_code(i, o) {
      if (o === "" || i === o) {
        return "-";
      } else {
        return o;
      }
    },
    checkout(cl) {
      if (cl !== "CHIP品" && cl !== "図面") {
        return true;
      } else {
        return false;
      }
    },
    check(c, i) {
      if (i.item_order) {
        i.item_order = 1;
      } else {
        i.item_order = 0;
      }
      axios.get(
        "/db/r_cmpt_item/swich/order/flg/" +
          c.cmpt_id +
          "/" +
          i.item_id +
          "/" +
          i.item_order
      );
      // .then(res => {
      // console.log(res.data)
      // });
    },
    close() {
      this.henshu = false;
      this.item_code = "";
      this.item_rev = "";
    },
    edit(i) {
      this.item_code = i.item_code;
      this.item_rev = i.item_rev;
      this.i = i;
      this.henshu = true;
    },
    pass(d) {
      switch (d.type) {
        case "base_data":
          this.i.item_name = d.data.item_name;
          this.i.item_model = d.data.item_model;
          this.i.order_code = d.data.order_code;
          this.i.read_time = d.data.read_time;
          break;
        case "order_way":
          this.i.lot_num = Number(d.data.lot_num);
          this.i.minimum_set = Number(d.data.minimum_set);
          break;
        case "order_price":
          this.i.vendor = d.data;
          break;
        default:
          break;
      }
    },
    del(index) {
      let cmpt = this.modelData[0].cmpt[this.tabs];
      let item = cmpt.item_use[index].items;
      this.dialog_data = {
        title: "構成部材削除",
        message:
          "親形式 " +
          cmpt.cmpt_code +
          '<span style="padding:0 0.5rem; font-size:0.5rem;">' +
          cmpt.cmpt_rev.numToRev() +
          "</span> より 下記部材を削除します",
        data_v2: [
          ["品目コード", item.item_code],
          ["ＲＥＶ", item.item_rev],
          ["品名", item.item_name],
          ["品目形式", item.item_model]
        ],
        tar: {
          cmpt: cmpt,
          index: index
        }
      };
      this.delitem = true;
    },
    rtDel(d, flg) {
      let cmpt_id = d.tar.cmpt.cmpt_id;
      let item_id = d.tar.cmpt.item_use[d.tar.index].item_id;
      axios.get("/db/r_cmpt_item/delete/item/" + cmpt_id + "/" + item_id);
      this.modelData[0].cmpt[this.tabs].item_use.splice(d.tar.index, 1);
      this.delitem = false;
    },
    add() {
      let m = this.modelData[0];
      let model_id = m.model_id;
      let cmpt = this.modelData[0].cmpt[this.tabs];
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
    rtAdd(d, flg) {
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
      axios.post("/db/r_cmpt_item/add/item/", data).then(res => {
        if (res.data.length === 0) {
          alert("登録済みデータです");
        } else {
          this.modelData[0].cmpt[this.tabs].item_use.unshift(res.data[0]);
        }
      });
      this.additem = !this.additem;
    },
    next() {
      this.$emit("up");
    },
    back() {
      this.$emit("down");
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 1rem 0;
}
table {
  font-size: 1rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  tr {
    padding: 0.5rem;
  }
  td {
    &.price {
      // min-width: 250px;
    }
    border-bottom: 1px dashed #aaa;
    padding: 0.9rem 0.5rem;
    text-align: center;
    .mini {
      display: block;
      font-size: 0.8rem;
      text-align: right;
    }
  }
}
.act-btn {
  width: 100%;
  height: 3rem;
}
</style>

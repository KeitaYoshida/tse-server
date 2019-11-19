<template>
  <div>
    <v-chip outline color="green darken-3">部材リスト</v-chip>
    <v-btn color="primary" outline small>未集計</v-btn>
    <v-data-table
      v-if="inited"
      :headers="headers"
      :items="items"
      item-key="index"
      loading="true"
      :rows-per-page-items="[5,10,25,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
      rows-per-page-text="page"
      :pagination.sync="pagination"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">
          <v-icon
            color="green darken-3"
            @click="returnHis(props.item.item_id)"
          >fas fa-clipboard-list</v-icon>
        </td>
        <td class="text-xs-center">
          <v-btn
            color="success"
            flat
            class="link"
            small
            @click="shukeiAct(props.item)"
          >{{ props.item.item_code }}</v-btn>
          <template
            v-if="props.item.order_code.trim() != props.item.item_code.trim() && props.item.order_code != '' && props.item.order_code !== null"
          >
            <br />
            <span class="daigae">代: {{props.item.order_code }}</span>
          </template>
        </td>
        <td class="text-xs-center">
          {{ props.item.item_name }}
          <br />
          {{ props.item.item_model }}
        </td>
        <td :class="'text-xs-center ' + rtNumClass(props.item.last_num, props.item.inv_num)">
          <span class="num">{{ props.item.last_num }}</span>
          <br />
          <span class="num">{{ props.item.inv_num }}</span>
        </td>
        <td class="text-xs-center">
          <span
            color="primary"
            class="toItemEdit"
            @click="toItemEdit(props.item.item_code, props.item.item_rev)"
          >{{ props.item.item_price }}</span>
          <br />
          <span class="rev">{{ props.item.item_rev.numToRev()}}</span>
        </td>
      </template>
    </v-data-table>
    <v-dialog v-model="inoutHis" max-width="650px">
      <v-card v-html="hisHtml" class="hisHtmlCover"></v-card>
    </v-dialog>
    <v-dialog v-model="shukeiView" max-width="500px">
      <ShukeiNum :data="shukeiData" v-if="shukeiView" @rt="returnNum"></ShukeiNum>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ShukeiNum from "@/components/com/ComFormDialog";

export default {
  props: ["massage", "set_num"],
  components: { ShukeiNum },
  data: function() {
    return {
      headers: [
        { text: "in/out", value: "last_num", align: "center" },
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名/形式", value: "order_code", align: "center" },
        { text: "在庫数/集計数", value: "item_model", align: "center" },
        { text: "単価/Rev", value: "item_name", align: "center" }
      ],
      pagination: {
        descending: true,
        sortBy: "last_num"
      },
      inited: false,
      items: null,
      shukeiView: false,
      item_id: null,
      shukeiData: {
        title: "受入数",
        message: "※ー(マイナス)値で取消可能",
        data: [
          {
            name: "shukei",
            label: "受入数",
            type: "number",
            value: null
          },
          {
            name: "massage",
            label: "コメント",
            value: null
          }
        ]
      },
      hisHtml: "",
      inoutHis: false
    };
  },
  computed: {
    ...mapState({
      search: state => state.search.inventory,
      user: state => state.user_info
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions(["INVENTORY_SET"]),
    async init() {
      await this.INVENTORY_SET({});
      let data = await axios.get("/items/mini");
      let items = (this.items = data.data);
      let ss = {
        allNum: 0,
        finNum: 0,
        allPrice: 0,
        finPrice: 0
      };
      items.forEach(item => {
        if (item.inv_num !== 0) {
          ss.finNum = ss.finNum + 1;
          ss.finPrice = ss.finPrice + item.inv_num * item.item_price;
        }
        if (item.last_num > 0) {
          ss.allNum = ss.allNum + 1;
          ss.allPrice = ss.allPrice + item.last_num * item.item_price;
        }
      });
      ss.allPrice = Math.round(ss.allPrice);
      ss.finPrice = Math.round(ss.finPrice);
      // console.log(this.items);
      await this.INVENTORY_SET({ status: ss });
      this.inited = true;
    },
    shukeiAct(item) {
      this.shukeiData.title = item.item_code;
      this.shukeiData.data[0].value = this.set_num;
      this.shukeiData.data[1].value = this.massage;
      this.item_id = item.item_id;
      this.shukeiView = !this.shukeiView;
    },
    async returnNum(d) {
      if (d.data[0].value === null || d.data[0].value === "") {
        alert("数値は入力必須項目です");
        this.shukeiView = !this.shukeiView;
        return;
      }
      if (d.data[1].value === null || d.data[1].value === "") {
        alert("コメントは入力必須項目です");
        this.shukeiView = !this.shukeiView;
        return;
      }
      let pdata = {
        item_id: this.item_id,
        item_code: d.title,
        shuke_num: d.data[0].value,
        comments: d.data[1].value,
        loginid: this.user.loginid
      };
      await axios.post("/db/shukei/set/item", pdata);
      await this.init();
      this.shukeiView = !this.shukeiView;
    },
    rtNumClass(last_num, inv_num) {
      if (last_num > inv_num) {
        return "overLast";
      } else if (last_num < inv_num) {
        return "overInv";
      } else {
        return "even";
      }
    },
    returnHis(item_id) {
      this.hisHtml = "";
      axios.get("/db/inventory/get/outin/his/" + item_id).then(res => {
        let his = res.data;
        let ukeireHis = "";
        for (let uHis of his.cntOrder) {
          ukeireHis =
            ukeireHis +
            "<tr>" +
            "<td style='padding:0.3rem 1rem;'>" +
            uHis.cmpt.cmpt_code +
            "</td>" +
            "<td style='padding:0.3rem 1rem;'>" +
            uHis.cnt_order_code +
            "</td>" +
            "<td style='padding:0.3rem 1rem;'>" +
            uHis.num_recept +
            "</td>" +
            "</tr>";
        }
        let pdctUseHis = "";
        for (let pHis of his.pdctUseItem) {
          pdctUseHis =
            pdctUseHis +
            "<tr>" +
            "<td style='padding:0.3rem 1rem;'>" +
            pHis.cmpt.cmpt_code +
            "</td>" +
            "<td style='padding:0.3rem 1rem;'>" +
            pHis.workdata.worklist_code +
            "</td>" +
            "<td style='padding:0.3rem 1rem;'>" +
            pHis.use_num +
            "</td>" +
            "</tr>";
        }
        let html = `
        <h3 style="border:1px solid white;display:inline-block;padding: 0.3rem 1rem;">受入履歴</h3>
        <table style="margin:0 auto">
          <tr>
          <th style="text-align:center">子形式</th>
          <th style="text-align:center">注文番号</th>
          <th style="text-align:center">受入数</th>
          </tr>
          ${ukeireHis}
        </table>
        <hr>
        <h3 style="border:1px solid white;display:inline-block;padding: 0.3rem 1rem;">投入履歴</h3>
        <table style="margin:0 auto">
          <tr>
          <th style="text-align:center">子形式</th>
          <th style="text-align:center">工事番号</th>
          <th style="text-align:center">投入数</th>
          </tr>
          ${pdctUseHis}
        </table>
        `;
        this.hisHtml = html;
        this.inoutHis = true;
        console.log(res.data);
      });
    },
    toItemEdit(code, rev) {
      window.open("/item/" + code + "/" + rev, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.rev {
  font-size: 0.8rem;
  color: #424242;
}
.toItemEdit {
  cursor: pointer;
}
.hisHtmlCover {
  color: white;
  background: #263238;
  opacity: 0.9;
  padding: 2rem;
  text-align: center;
}
.hisHtml {
  font-size: 1.2rem;
}
td {
  padding: 0 !important;
}
table.v-table tbody td {
  font-size: 1.3rem;
}
button.link {
  font-size: 1.4rem;
  font-weight: 600;
}
.num {
  font-size: 1.5rem;
}
.daigae {
  font-size: 0.9rem;
  display: block;
}
</style>
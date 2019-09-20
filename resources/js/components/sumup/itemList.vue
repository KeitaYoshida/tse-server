<template>
  <div>
    <v-data-table
      v-if="inited"
      :headers="headers"
      :items="items"
      item-key="index"
      loading="true"
      :rows-per-page-items="[3,10,25,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">
          <v-btn
            color="success"
            flat
            class="link"
            @click="shukeiAct(props.item)"
          >{{ props.item.item_code }}</v-btn>
        </td>
        <td class="text-xs-center">
          {{ props.item.item_name }}
          <br />
          {{ props.item.last_num }}
        </td>
        <td class="text-xs-center">
          {{ props.item.item_model }}
          <br />
          {{ props.item.inv_num }}
        </td>
      </template>
    </v-data-table>
    <v-dialog v-model="shukeiView" max-width="500px">
      <ShukeiNum :data="shukeiData" v-if="shukeiView" @rt="returnNum"></ShukeiNum>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ShukeiNum from "@/components/com/ComFormDialog";

export default {
  props: ["massage"],
  components: { ShukeiNum },
  data: function() {
    return {
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名/在庫数", value: "item_name", align: "center" },
        { text: "形式/集計数", value: "item_model", align: "center" }
      ],
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
      }
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
        ss.allNum = ss.allNum + 1;
        ss.allPrice = ss.allPrice + item.last_num * item.item_price;
      });
      ss.allPrice = Math.round(ss.allPrice);
      ss.finPrice = Math.round(ss.finPrice);
      await this.INVENTORY_SET({ status: ss });
      this.inited = true;
    },
    shukeiAct(item) {
      this.shukeiData.title = item.item_code;
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
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0 !important;
}
button.link {
  font-size: 1.2rem;
}
</style>
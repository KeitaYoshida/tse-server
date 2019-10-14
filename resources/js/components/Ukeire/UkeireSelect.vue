<template>
  <v-container fluid v-if="order.data">
    <h1 class="mb-3">受け入れ</h1>
    <h2 class="mb-3">
      <template v-if="order.id">
        <v-chip outline color="primary">{{ order.id }}</v-chip>
        <v-chip outline color="primary">{{ order.code }}</v-chip>
      </template>
      <v-chip color="primary" dark @click="numModeView=!numModeView" v-if="numMode===false">数量指定</v-chip>
      <v-chip
        color="success"
        dark
        @click="numModeView=!numModeView"
        v-if="numMode===true"
      >数量指定: {{ set_num }}</v-chip>
    </h2>
    <v-text-field
      class="mb-3"
      v-model="search"
      append-icon="search"
      label="Search"
      id="searchText"
      single-line
      hide-details
      autofocus
      clearable
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="order.data"
      class="elevation-1"
      :pagination.sync="pagination"
      item-key="cnt_orderlist_id"
      loading="true"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">
          <v-btn
            outline
            :color="rtNyukaClass(props.item)"
            @click="ukchip(props.item)"
            v-if="numMode===false"
            large
            class="ninsho"
          >
            {{ props.item.order_key}}
            <br />
            {{ rtNyukaStatus(props.item) }}
          </v-btn>
          <v-btn
            color="primary"
            @click="ukchip(props.item, set_num)"
            v-if="numMode===true"
            dark
            large
            class="ninsho"
          >
            {{ props.item.order_key}}
            <br />数量セット
          </v-btn>
        </td>
        <td class="text-xs-center">{{ rtCmpt(props.item.cmpt) }}</td>
        <td class="text-xs-center">
          <p>{{ props.item.item.item_code }}</p>
          <p>{{ rtOrderCode(props.item) }}</p>
        </td>
        <td class="text-xs-center">
          <p>{{ props.item.item.item_name }}</p>
          <p>{{ props.item.item.item_model }}</p>
        </td>
        <td class="text-xs-center num">
          <p>{{ props.item.num_order }}</p>
          <p>{{ props.item.num_recept }}</p>
        </td>
      </template>
    </v-data-table>
    <v-dialog
      v-if="numModeView"
      v-model="numModeView"
      max-width="500px"
      transition="dialog-transition"
    >
      <NumSetter :data="ninfo" @rt="setNum" />
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NumSetter from "./../com/ComFormDialog";

export default {
  components: { NumSetter },
  data: function() {
    return {
      headers: [
        { text: "認証No・状態", value: "order_key", align: "center" },
        { text: "親形式", value: "", align: "center" },
        { text: "部材品番", value: "item.item_code", align: "center" },
        { text: "部材品名／型式", value: "", align: "center" },
        { text: "発注／入庫数", value: "", align: "center" }
      ],
      pagination: {
        sortBy: "cnt_model"
      },
      search: "",
      ninfo: {
        title: "受入数量",
        message: "",
        data: [
          {
            name: "num",
            label: "受入数量",
            type: "number",
            value: ""
          }
        ]
      },
      numModeView: false,
      numMode: false,
      set_num: ""
    };
  },
  computed: {
    ...mapState({
      order: state => state.orders.one
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      if (this.order.data === null) this.$router.push("/ukeire/const_select");
    },
    rtNyukaStatus(item) {
      let onum = item.num_order;
      let unum = item.num_recept;
      if (onum <= unum) {
        return "受入済";
      } else {
        return unum > 0 ? "受入中" : "未入荷";
      }
    },
    rtCmpt(cmpt) {
      return cmpt === null ? "親形式なし" : cmpt.cmpt_code.slice(0, 11);
    },
    rtOrderCode(item) {},
    rtNyukaClass(item) {
      let onum = item.num_order;
      let unum = item.num_recept;
      if (onum <= unum) {
        return "primary";
      } else {
        return unum > 0 ? "success" : "warning";
      }
    },
    ukchip(item, inputNum = 0) {
      let num_order = item.num_order;
      let num_recept = item.num_recept;
      let setNum = num_order === num_recept ? 0 : num_order;
      if (inputNum !== 0) setNum = inputNum;

      let iAddNumLast = setNum - num_recept;
      let iAddNumOrder = -iAddNumLast;
      if (num_recept > num_order && setNum <= num_order) {
        iAddNumOrder = num_order - num_recept - iAddNumLast;
      } else if (num_recept <= num_order && setNum > num_order) {
        iAddNumOrder = Number(-num_order) + Number(num_recept);
      } else if (num_recept > num_order && setNum > num_order) {
        iAddNumOrder = 0;
      }
      // document.getElementById("searchText").focus();

      axios.post("/db/ukeire/action", {
        orders: {
          cnt_order_id: item.cnt_order_id,
          cnt_order_code: item.cnt_order_code,
          num_recept: setNum
        },
        items: {
          item_id: item.item_id,
          last_num: iAddNumLast,
          order_num: iAddNumOrder
        }
      });

      item.num_recept = setNum;
      this.numMode = false;
      this.set_num = "";
    },
    setNum(d) {
      this.set_num = d.data[0].value;
      if (this.set_num === "") return;
      this.numMode = true;
      this.numModeView = false;
      this.ninfo = {
        title: "受入数量",
        message: "",
        data: [
          {
            name: "num",
            label: "受入数量",
            type: "number",
            value: ""
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
td,
th {
  padding: 0 !important;
}
.v-chip.ninsho .v-chip__content {
  height: 42px;
}
td.num {
  font-size: 1.4rem;
}
</style>
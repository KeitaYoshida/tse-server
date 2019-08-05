<template>
  <v-container fluid>
    <h1 class="mb-3">受け入れ</h1>
    <h2 class="mb-3">
      <v-chip outline color="primary">{{ cinfo.model_id }}</v-chip>
      <v-chip outline color="primary">{{ cinfo.order_code }}</v-chip>
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
      single-line
      hide-details
      autofocus
      clearable
      type="number"
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="ukdata"
      class="elevation-1"
      :pagination.sync="pagination"
      item-key="cnt_orderlist_id"
      loading="true"
      :search="search"
      v-if="ukdata"
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
      v-model="numModeView"
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <NumSetter :data="ninfo" @rt="setNum" />
    </v-dialog>
  </v-container>
</template>

<script>
import NumSetter from "./../com/ComFormDialog";

export default {
  props: ["ukdata", "cinfo"],
  components: { NumSetter },
  data: function() {
    return {
      headers: [
        { text: "認証No・状態", value: "order_key", align: "center" },
        { text: "親形式", value: "cnt_model", align: "center" },
        { text: "部材品番", value: "cnt_order_code", align: "center" },
        { text: "部材品名／型式", value: "cnt_order_code", align: "center" },
        { text: "受注／入庫数", value: "cnt_order_code", align: "center" }
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
  created: function() {
    this.init(console.log(this.ukdata));
  },
  methods: {
    init() {},
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
    ukchip(item, num = 0) {
      let onum = item.num_order;
      let unum = item.num_recept;
      if (num !== 0) {
        unum = num;
        this.numMode = false;
        this.set_num = 0;
        item.num_recept = unum;
        return;
      }

      if (onum <= unum) {
        item.num_recept = 0;
      } else {
        item.num_recept = unum > 0 ? unum : item.num_order;
      }
    },
    setNum(d) {
      this.set_num = d.data[0].value;
      if (this.set_num === "") return;
      this.numMode = true;
      this.numModeView = false;
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
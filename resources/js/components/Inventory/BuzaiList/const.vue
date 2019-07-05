<template>
  <v-layout row wrap mt-3 v-if="items">
    <v-flex xs6 pa-2 lg5 offset-lg1>
      <v-card dark pa-2>
        <v-card-title>
          <v-icon left>fas fa-chart-line</v-icon>
          <span>ＩＮＦＯＲＭＡＴＩＯＮ</span>
        </v-card-title>
        <table id="info">
          <tr>
            <td>対象部材点数</td>
            <td>{{ count.item }}</td>
          </tr>
          <tr>
            <td>完了部材点数</td>
            <td>{{ count.fin }}</td>
          </tr>
          <tr>
            <td>集計中部材点数</td>
            <td>{{ count.chk }}</td>
          </tr>
          <tr>
            <td>発注総在庫金額</td>
            <td>{{ count.chk_price }}</td>
          </tr>
          <tr>
            <td>発注総集計金額</td>
            <td>{{ count.inv_price }}</td>
          </tr>
        </table>
      </v-card>
    </v-flex>
    <v-flex xs6 pa-2 lg5>
      <v-card dark pa-2>
        <v-card-title>
          <v-icon left>fas fa-chart-pie</v-icon>
          <span>ＣＨＡＲＴ</span>
        </v-card-title>
        <test :d="d" style="width:300px; height:300px; margin: 0 auto;" v-if="d.datasets[0].data"></test>
      </v-card>
    </v-flex>
    <v-flex xs12 mt-4 lg10 offset-lg1>
      <v-text-field name="search" label="ＳＥＡＲＣＨ" id="search" v-model="search"></v-text-field>
    </v-flex>
    <v-flex xs12 mt-2 lg10 offset-lg1>
      <v-card dark>
        <v-card-title primary-title>
          <v-icon left>fas fa-table</v-icon>
          <span>ＤＡＴＡ ＬＩＳＴ</span>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          class="data-list"
          pagination.sync="pagination"
          item-key="item_id"
          loading="true"
          :search="search"
          :rows-per-page-items="[20, 50,100,{'text':'All','value':-1}]"
          :expand="false"
        >
          <template v-slot:items="props">
            <tr @click="props.expanded = !props.expanded">
              <td>
                <v-btn
                  color="success"
                  :to="'/item/' + props.item.item_code + '/' + props.item.item_rev"
                  flat
                  icon
                >
                  <v-progress-circular
                    :rotate="360"
                    :size="20"
                    :width="15"
                    :value="props.item.per"
                    color="teal"
                  ></v-progress-circular>
                </v-btn>
              </td>
              <td>{{ props.item.item_code }}</td>
              <td>{{ props.item.item_name !== null ? props.item.item_name.slice(0, 8) : '' }}</td>
              <td>{{ props.item.item_model !== null ? props.item.item_model.slice(0, 14) : '' }}</td>
              <td>{{ props.item.need_num }}</td>
              <td>{{ props.item.sum_inv }}</td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat>
              <item-info :item_code="props.item.item_code" :item_rev="props.item.item_rev"></item-info>
            </v-card>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import test from "./../test";
import itemInfo from "../../ItemData/ItemInfo";

export default {
  components: {
    test,
    itemInfo
  },
  data: function() {
    return {
      headers: [
        { text: "率", value: "per", align: "center" },
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "品目形式", value: "item_model", align: "center" },
        { text: "在庫数", value: "need_num", align: "center" },
        { text: "集計数", value: "sum_inv", align: "center" }
      ],
      items: [],
      search: null,
      count: {
        item: 0,
        last: 0,
        inv: 0,
        fin: 0,
        chk: 0,
        not: 0,
        chk_price: 0,
        inv_price: 0
      },
      d: {
        labels: ["完了", "集計中", "未集計"],
        datasets: [
          {
            label: "ＳＴＡＴＵＳ",
            backgroundColor: ["#1976D2", "#42A5F5", "#90CAF9"]
          }
        ]
      },
      dataLoading: undefined
    };
  },
  created: async function() {
    await this.init();
    this.dataLoading = setInterval(() => {
      this.init();
    }, 10000);
  },
  methods: {
    async init() {
      await axios.get("/inventory/buzai-order-list").then(res => {
        this.items = res.data;
        let cnt = this.count;
        cnt.item = cnt.fin = cnt.last = cnt.inv = cnt.chk = cnt.not = cnt.chk_price = cnt.inv_price = 0;
        res.data.forEach(ar => {
          cnt.item = cnt.item + 1;
          cnt.last = Number(cnt.last) + Number(ar.need_num);
          cnt.inv = Number(cnt.inv) + Number(ar.sum_inv);
          cnt.chk_price = Number(cnt.chk_price) + Number(ar.need_price);
          cnt.inv_price = Number(cnt.inv_price) + Number(ar.inv_price);
          if (ar.need_num === ar.sum_inv) {
            cnt.fin = cnt.fin + 1;
          } else if (Number(ar.sum_inv) !== 0) {
            cnt.chk = cnt.chk + 1;
          } else {
            cnt.not = cnt.not + 1;
          }
          this.d.datasets[0].data = [cnt.fin, cnt.chk, cnt.not];
        });
      });
    }
  },
  beforeDestroy: function() {
    clearInterval(this.dataLoading);
  }
};
</script>


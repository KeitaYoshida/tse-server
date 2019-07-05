<template>
  <v-layout row wrap mt-3>
    <v-flex xs6 pa-2 lg5 offset-lg1>
      <v-card pa-2>
        <v-card-title>
          <v-icon left>fas fa-chart-line</v-icon>
          <span>ＩＮＦＯＲＭＡＴＩＯＮ</span>
        </v-card-title>
        <table id="info">
          <tr>
            <td>総発注リスト数</td>
            <td>{{ cnt.item }}</td>
          </tr>
          <tr>
            <td>完了リスト数</td>
            <td>{{ cnt.fin }}</td>
          </tr>
          <tr>
            <td>発注総在庫金額</td>
            <td>{{ cnt.last_price }}</td>
          </tr>
          <tr>
            <td>発注総集計金額</td>
            <td>{{ cnt.inv_price }}</td>
          </tr>
          <tr>
            <td>その他集計金額</td>
            <td>{{ cnt.etc_price }}</td>
          </tr>
        </table>
      </v-card>
    </v-flex>
    <v-flex xs6 pa-2 lg5>
      <v-card pa-2>
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
      <v-card>
        <v-card-title primary-title>
          <v-icon left>fas fa-table</v-icon>
          <span>ＤＡＴＡ ＬＩＳＴ</span>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          class="data-list"
          pagination.sync="pagination"
          item-key="id"
          loading="true"
          :search="search"
          :rows-per-page-items="[20, 50,100,{'text':'All','value':-1}]"
        >
          <template v-slot:items="props">
            <tr @click="openDialog(props.item)">
              <td>
                <v-progress-circular
                  :rotate="360"
                  :size="20"
                  :width="15"
                  :value="props.item.per"
                  color="teal"
                ></v-progress-circular>
              </td>
              <td>{{ props.item.keishiki }}</td>
              <td>{{ props.item.cnt_order_code }}</td>
              <td>{{ props.item.last_price }}</td>
              <td>{{ props.item.inv_price }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
    <v-dialog
      v-model="a4"
      v-if="a4"
      scrollable
      persistent
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="a4 = !a4">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="print__pdf('makepdf')">ＰＲＩＮＴ</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="a4-back">
          <OrderListOne :cnt_order_code="item.cnt_order_code"></OrderListOne>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import test from "./test";
import OrderListOne from "./OrderListOne";

export default {
  components: {
    test,
    OrderListOne
  },
  data: function() {
    return {
      headers: [
        { text: "率", value: "per", align: "center" },
        { text: "形式", value: "item_code", align: "center" },
        { text: "注文コード", value: "item_name", align: "center" },
        { text: "在庫金額", value: "item_model", align: "center" },
        { text: "集計金額", value: "need_num", align: "center" }
      ],
      items: [],
      item: null,
      search: null,
      a4: false,
      cnt: {
        item: 0,
        fin: 0,
        last_price: 0,
        inv_price: 0,
        etc_price: 0
      },
      d: {
        labels: ["集計金額率", "残金額率"],
        datasets: [
          {
            label: "ＳＴＡＴＵＳ",
            backgroundColor: ["#1976D2", "#90CAF9"]
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
    }, 1000);
  },
  methods: {
    async init() {
      await axios.get("/inventory/buzai-cnt-list").then(res => {
        this.items = res.data;
        let cnt = this.cnt;
        cnt.item = cnt.fin = cnt.last_price = cnt.inv_price = cnt.etc_price = 0;
        res.data.forEach(ar => {
          cnt.item = cnt.item + 1;
          cnt.last_price = Number(cnt.last_price) + Number(ar.last_price);
          if (ar.cnt_order_code !== "etc") {
            cnt.inv_price = Number(cnt.inv_price) + Number(ar.inv_price);
          } else {
            cnt.etc_price = Number(cnt.etc_price) + Number(ar.inv_price);
          }
          if (ar.last_price === ar.inv_price) {
            cnt.fin = cnt.fin + 1;
          }
        });
        let per = (Number(cnt.inv_price) / Number(cnt.last_price)).toFixed(2);
        this.d.datasets[0].data = [per, 1 - per];
      });
    },
    openDialog(item) {
      window.scrollTo(0, 0);
      this.a4 = !this.a4;
      this.item = item;
    }
  },
  beforeDestroy: function() {
    clearInterval(this.dataLoading);
  }
};
</script>
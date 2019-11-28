<template>
  <v-app>
    <div class="a4-back all-display">
      <transition name="fade">
        <template v-if="!setting&&csv.data!==null">
          <v-container grid-list-xs id="price-area">
            <v-chip outline>ファイル列情報</v-chip>
            <v-chip v-for="(row, index) in csv.data[0]" :key="index">{{index + ': ' + row}}</v-chip>
            <v-text-field label="品目コード列番号" v-model="Row_item_code" type="number"></v-text-field>
            <v-text-field label="新金額列番号" v-model="Row_new_price" type="number"></v-text-field>
            <v-text-field label="旧金額列番号" v-model="Row_old_price" type="number"></v-text-field>
            <v-select :items="tehaisaki" v-model="val_tehaisaki" label="手配先選択"></v-select>
            <v-btn block outline large @click="getItemData()">決定</v-btn>
          </v-container>
        </template>
        <template v-else-if="items===undefined">
          <Loading />
        </template>
        <template v-else-if="items.length!==0">
          <v-container grid-list-xs id="price-area">
            <v-layout row wrap class="header-info">
              <v-flex xs2 class="text-xs-center">
                <p>fix file</p>
                <p>品目コード</p>
              </v-flex>
              <v-flex xs8 class="text-xs-center tse-data">
                <p>TSE Master Data</p>
                <v-layout wrap>
                  <v-flex xs3 class="text-xs-center">品目コード</v-flex>
                  <v-flex xs5 class="text-xs-center">形式</v-flex>
                  <v-flex xs4 class="text-xs-center">金額</v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs2 class="text-xs-center">
                <p>fix file</p>
                <p>更新後単価</p>
              </v-flex>
            </v-layout>
            <v-layout row wrap v-for="(item, index) in items" :key="index" class="rows">
              <v-flex xs2 class="text-xs-center base py-1">{{ item.target_id }}</v-flex>
              <v-flex xs8>
                <v-layout wrap v-for="(tar, index) in item.target" :key="index" class="tse-data">
                  <v-flex xs3 class="text-xs-center py-1">
                    <p>
                      {{ tar.item_code }}
                      <span
                        v-if="tar.item_rev != 0"
                      >({{ tar.item_rev.numToRev() }})</span>
                    </p>
                    <template
                      v-if="tar.item_code.trim() != tar.order_code.trim() && tar.order_code != false"
                    >
                      <p class="order_code">代: {{ tar.order_code }}</p>
                    </template>
                  </v-flex>
                  <v-flex xs5 class="text-xs-center py-1">{{ tar.item_model }}</v-flex>
                  <template v-if="tar.vendor.length>0">
                    <v-flex xs2 class="text-xs-center py-1">{{ tar.vendor[0].vendor_code }}</v-flex>
                    <v-flex xs2 class="text-xs-center py-1">{{ tar.vendor[0].vendor_item_price }}</v-flex>
                  </template>
                  <template v-else>
                    <v-flex xs4 class="text-xs-center py-1">
                      <span class="no-price">金額データ未登録</span>
                    </v-flex>
                  </template>
                </v-layout>
              </v-flex>
              <v-flex xs2 class="text-xs-center base py-1">
                <span>DU資材倉庫: {{ item.change_price }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </template>
        <template v-else>
          <v-container grid-list-xs id="price-area">
            <div class="text-xs-center">金額更新対象データがありません</div>
          </v-container>
        </template>
      </transition>
    </div>
    <v-bottom-nav fixed :active.sync="main_action" v-model="main_action" dark>
      <v-btn flat value="fix" @click="fixAction()">
        <span>金額調整</span>
        <v-icon>far fa-list-alt</v-icon>
      </v-btn>
      <!-- <v-btn flat value="csv">
          <span>CSV</span>
          <v-icon>far fa-list-alt</v-icon>
      </v-btn>-->
    </v-bottom-nav>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from "@/components/com/Loading";
var iconv = require("iconv-lite");
iconv.skipDecodeWarning = true;
var jschardet = require("jschardet");

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

export default {
  props: [],
  components: {
    Loading
  },
  data: function() {
    return {
      items: undefined,
      setting: false,
      ItemIdRow: 1,
      ChangePrice: 7,
      DU_SOUKO: "k0112",
      main_action: null,
      tehaisaki: ["第２事業所", "第３事業所"],
      Row_item_code: null,
      Row_old_price: null,
      Row_new_price: null,
      val_tehaisaki: null
    };
  },
  computed: {
    ...mapState({
      csv: "csv"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    init() {
      if (this.csv.data === null) {
        this.$router.push("/readfile");
        return;
      }
    },
    async getItemData() {
      if (this.Row_item_code === null) return;
      if (this.Row_old_price === null) return;
      if (this.Row_new_price === null) return;
      if (this.val_tahaisaki === null) return;
      this.setting = true;
      let csv = this.csv.data.filter(
        ar => ar[this.Row_old_price] != ar[this.Row_new_price]
      );
      let res = await axios.get("/items/itemlist");
      let items = res.data;
      let tarData = [];
      for (let tar of csv) {
        let fil = items.filter(
          item =>
            item.item_code.trim() == tar[this.Row_item_code].trim() ||
            item.order_code.trim() == tar[this.Row_item_code].trim()
        );
        if (fil.length > 0) {
          tarData.push({
            target_id: tar[this.Row_item_code],
            change_price: Number(tar[this.Row_new_price].replace(/,/, "")),
            target: fil
          });
        }
      }
      this.items = tarData;
    },
    async fixAction() {
      let items = this.items.filter(ar => true);
      this.items = undefined;
      var csv =
        "対象品目コード,TSE品目ID,TSE品目コード,代替品目コード,修正前金額,修正後金額\n";
      // this.order_code = this.ocode;
      for (let tar of items) {
        for (let item of tar.target) {
          let id = item.item_id;
          let vend = this.val_tehaisaki === "第２事業所" ? "k0112" : "k0078";
          let beforePrice = Number(item.item_price);
          let item_code = item.item_code;
          let order_code = item.order_code;
          if (order_code == false || item_code.trim() == order_code) {
            order_code = "";
          }
          let price = Number(tar.change_price);
          await axios.get(
            "/db/items/fix/price/" + id + "/" + vend + "/" + price
          );
          let line =
            tar.target_id +
            "," +
            id +
            "," +
            item_code +
            "," +
            order_code +
            "," +
            beforePrice +
            "," +
            price +
            "\n";
          csv = csv + line;
        }
      }
      let blob = new Blob([csv], { type: "text/csv" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      let day = dayjs().format("YYYYMMDDHHmmss");
      let daynum = Number(day);
      let day16 = daynum.toString(16);
      let rndm = String(Math.floor(Math.random() * 1000)).padStart(4, 0);
      let csv_name = "PriceFIx_" + day16 + rndm + ".csv";
      link.download = csv_name;
      link.click();
      alert("処理が完了しました");
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.order_code {
  font-size: 0.8rem;
  color: darkgray;
  font-weight: bolder;
}
.rows {
  border-bottom: 1px dotted gray;
}
.tse-data {
  // background-color: aliceblue;
  border-left: 2px double grey;
  border-right: 2px double grey;
}
.tse-data + .tse-data {
  border-top: 1px dotted grey;
}
.no-price {
  font-size: 0.8rem;
}
.base {
  font-size: 1rem;
  font-weight: bolder;
}
#price-area {
  border-radius: 5px;
  background-color: white;
  margin: 1rem auto 64px auto;
}
.all-display {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.header-info {
  border-bottom: 1px double grey;
  font-size: 0.8rem;
  font-weight: bolder;
}
</style>

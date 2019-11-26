<template>
  <v-app>
    <v-container fluid class="a4-back">
      <div id="pdf" v-if="inv_data.list !== undefined">
        <v-card class="a4 page-breaks">
          <div class="text-xs-center pb-4">
            <h1 class="pt-3 bording_b">
              <v-chip outline class="mr-3">{{inv_data.list.inv_date.slice(0,7).replace('-', '年')}}月度</v-chip>ＴＳＥ 棚卸し帳票
            </h1>
          </div>
          <div class="contents1">
            <h2 class="bording_h">仕掛り工事</h2>
            <v-layout wrap px-3 class="col-head">
              <v-flex xs3 class="text-xs-center">中項目</v-flex>
              <v-flex xs3 class="text-xs-center">小項目</v-flex>
              <v-flex xs3 class="text-xs-center">金額</v-flex>
              <v-flex xs3 class="text-xs-center">備考</v-flex>
            </v-layout>
            <v-layout wrap px-3 class="list-data">
              <v-flex xs3 class="text-xs-center">工事使用部材</v-flex>
              <v-flex xs3 class="text-xs-center">-</v-flex>
              <v-flex xs3 class="text-xs-center">{{ rtPrice(inv_data.list.working_price) }}</v-flex>
              <v-flex xs3 class="text-xs-center">マーシャリング済 部材</v-flex>
            </v-layout>
            <v-layout wrap px-3 class="list-data">
              <v-flex xs3 class="text-xs-center">工事仕掛り工数</v-flex>
              <v-flex xs3 class="text-xs-center">-</v-flex>
              <v-flex xs3 class="text-xs-center">{{ rtPrice(inv_data.list.process_price) }}</v-flex>
              <v-flex xs3 class="text-xs-center">工数換算金額</v-flex>
            </v-layout>
            <hr class="middle-hr" />
            <v-layout wrap px-3 class="kei">
              <v-flex xs1 offset-xs7>計</v-flex>
              <v-flex
                xs4
                class="text-xs-right"
                pr-5
              >{{ rtPrice(sum([inv_data.list.working_price, inv_data.list.process_price])) }}</v-flex>
            </v-layout>
          </div>
          <div class="contents1">
            <h2 class="bording_h">部材集計</h2>
            <v-layout wrap px-3 class="col-head">
              <v-flex xs3 class="text-xs-center">中項目</v-flex>
              <v-flex xs3 class="text-xs-center">小項目</v-flex>
              <v-flex xs3 class="text-xs-center">金額</v-flex>
              <v-flex xs3 class="text-xs-center">備考</v-flex>
            </v-layout>
            <v-layout wrap>
              <v-flex xs6 v-if="item_data.length > 0">
                <v-layout wrap>
                  <template v-for="(item, index) in item_data">
                    <v-flex v-if="item != undefined" :key="index">
                      <div>{{ item.class_name === "未選択" ? '区分無し' : item.class_name }}:{{ item.price }}</div>
                    </v-flex>
                  </template>
                </v-layout>
              </v-flex>
            </v-layout>
          </div>
        </v-card>
        <v-card class="a4 page-breaks"></v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      inv_data: {},
      item_data: []
    };
  },
  computed: {
    ...mapState({
      // target: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let inv_id = this.$route.params.inv_id;
      let res = await axios.get("/db/inv/list/data/get/" + inv_id);
      this.inv_data = res.data;
      let items = await axios.get(
        "/db/inv/his/items/" + this.inv_data.list.inv_date
      );
      let classItem = [];
      console.log(items.data);
      for (let item of items.data) {
        let item_class = item.item_info.item_class;
        if (classItem[item_class] == undefined) {
          classItem[item_class] = {
            class_name: item.item_info.item_class_val.value,
            price: 0
          };
        }
        classItem[item_class].price =
          classItem[item_class].price +
          Number(item.item_price) * Number(item.inv_num);
      }
      this.item_data = classItem;
      console.log(classItem);
      console.log(this.inv_data);
    },
    rtPrice(price) {
      return Math.round(Number(price)).toLocaleString();
    },
    sum(array) {
      let price = 0;
      for (let ar of array) {
        price = price + Number(ar);
      }
      return price;
    }
  }
};
</script>

<style lang="scss" scoped>
@media print {
  html,
  body {
    width: 210mm;
    height: 297mm;
  }
  header {
    display: none;
  }
  /* ... the rest of the rules ... */
}
@page {
  size: A4;
  margin: 0;
}
#pdf {
  page-break-inside: auto;
}

.a4 {
  page-break-inside: avoid;
  page-break-after: auto;
}
.bording_b {
  display: inline-block;
  padding-right: 1.8rem;
  padding-left: 1.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid darkgray;
  margin: 0 auto;
}
.bording_h {
  text-align: center;
  font-size: 1.1rem;
  display: inline-block;
  padding: 0.5rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid darkgray;
  min-width: 8rem;
}
.list-data {
  font-size: 0.9rem;
}
.col-head {
  font-size: 0.8rem;
  font-weight: bold;
}
.middle-hr {
  margin: 0.2rem 2rem;
}
.kei {
  font-size: 1.1rem;
  font-weight: bolder;
}
.contents1 {
  margin-bottom: 1rem;
}
</style>

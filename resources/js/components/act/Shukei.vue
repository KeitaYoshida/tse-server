<template>
  <v-card>
    <v-card-title class="headline">
      <v-icon>fas fa-calculator</v-icon>
      <span>部材集計</span>
    </v-card-title>
    <v-container grid-list-xs>
      <div id="inv">
        <v-text-field
          slider-color="primary"
          label="集計数"
          v-model="main.cnt_num"
          type="number"
          autofocus
        ></v-text-field>
      </div>
      <template v-if="item_data">
        <div id="info_area">
          <span>
            在庫数(べき数):
            <strong>{{ item_data.last_num === 0 ? 0 : item_data.last_num }}</strong>
          </span>
          <span>
            総集計数:
            <strong>{{ item_data.inv_num ? item_data.inv_num : '0' }}</strong>
          </span>
        </div>
      </template>
      <v-tabs v-model="tab" slider-color="primary" fixed-tabs>
        <v-tab>集計割当</v-tab>
        <v-tab>集計履歴</v-tab>
        <v-tab-item>
          <Wariate
            :items="cnt_data"
            :item_data="item_data"
            :main="main"
            :his="inv_his"
            v-if="item_data && cnt_data"
          ></Wariate>
          <div id="etc-button" v-if="etcrow">
            <v-btn color="teal lighten-3" large dark @click="add_etc_row()">
              <v-icon>fas fa-plus-circle</v-icon>
              <span>その他・在庫 入力行を追加</span>
            </v-btn>
          </div>
        </v-tab-item>
        <v-tab-item>
          <ShukeiHis :his="inv_his"></ShukeiHis>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-card>
</template>

<script>
import Wariate from "./child/Wariate";
import ShukeiHis from "./child/ShukeiHis";

export default {
  props: ["item_code", "item_rev"],
  components: {
    Wariate,
    ShukeiHis
  },
  data: function() {
    return {
      main: {
        cnt_num: null
      },
      cnt_data: null,
      item_data: null,
      inv_his: null,
      tab: null,
      text_rule: "number",
      etcrow: true
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    async init() {
      let req = this.item_code + "/" + this.item_rev;
      await axios.get("/items/iteminfo/" + req).then(res => {
        this.item_data = res.data[0];
      });
      await axios.get("/items/constorder/" + req).then(res => {
        this.cnt_data = res.data;
        res.data.forEach(arr => {
          if (arr.cnt_order_code === "etc") {
            this.etcrow = false;
          }
        });
      });
      await axios.get("/items/item_inv_his/" + req).then(res => {
        this.inv_his = res.data;
      });
    },
    add_etc_row() {
      let price = 0;
      this.item_data.vendor.forEach(arr => {
        price = arr.vendor_item_price;
      });
      let req = this.item_code + "/" + this.item_rev + "/" + price;
      axios.get("/items/cnt_order_ins_etc/" + req).then(res => {
        this.init();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card__title {
  padding-left: 2.5rem;
  .v-icon {
    padding-right: 0.8rem;
  }
}
#etc-button {
  text-align: center;
  i {
    padding-right: 1rem;
  }
  button {
    width: 60%;
    margin-top: 2rem;
    font-size: 1.5rem;
  }
}
#inv {
  width: 80%;
  margin: 0 auto;
}
#info_area {
  text-align: center;
  span {
    display: inline-block;
    min-width: 30%;
    strong {
      font-size: 2rem;
    }
  }
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>

<template>
  <v-card id="henshu">
    <v-card-title class="headline">
      <v-icon>fas fa-edit</v-icon>
      <span>部材編集</span>
    </v-card-title>
    <v-container grid-list-xs>
      <div id="info_area">
        <span>
          品目コード:
          <strong>{{ item_code }}</strong>
        </span>
        <span>
          Ｒｅｖ:
          <strong>{{ item_rev }}</strong>
        </span>
      </div>
      <v-tabs v-model="tab" slider-color="primary" fixed-tabs class="menu">
        <v-tab>基本情報</v-tab>
        <v-tab>手配方法</v-tab>
        <v-tab>手配金額</v-tab>
        <v-tab>写真登録・削除</v-tab>
        <v-tab-item>
          <Base :item_data="item_data" :item_id="item_id" v-if="item_data" @up="up"/>
        </v-tab-item>
        <v-tab-item>
          <OrderWay :lot_data="lot_data" :item_id="item_id" v-if="lot_data" @up="up"/>
        </v-tab-item>
        <v-tab-item></v-tab-item>
        <v-tab-item>
          <ImageUpload :item_code="item_code" :item_rev="item_rev"/>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-card>
</template>

<script>
import ItemData from "./../../mixins/ItemData";
import Base from "./Henshu/Base";
import OrderWay from "./Henshu/OrderWay";
import { assertExpressionStatement } from "babel-types";
import ImageUpload from "./../act/ImageUpload";

export default {
  components: {
    Base,
    OrderWay,
    ImageUpload
  },
  mixins: [ItemData],
  props: ["item_code", "item_rev"],
  data: function() {
    return {
      item_id: "",
      tab: 0,
      lot_data: null
    };
  },
  created: async function() {
    await this.get_item_data();
    this.item_id = this.get_serial();
    const selecter = ["lot_num", "minimum_set"];
    this.lot_data = this.selecter(selecter);
    const out = [
      "item_id",
      "item_code",
      "item_rev",
      "last_num",
      "appo_num",
      "lot_num",
      "minimum_set",
      "order_way",
      "order_prices"
    ];
    this.out(out);
  },
  methods: {
    async up(ob, id) {
      let d = this.rt__up_data_items(ob, id);
      await axios.post("/items/update/post/" + id, d);
    }
  }
};
</script>

<style lang="scss" >
#henshu {
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
  .edit {
    .v-input {
      margin: 0 auto;
      width: 80%;
      .v-input__prepend-inner {
        width: auto;
      }
    }
    button {
      margin: 0 auto;
      width: 80%;
    }
  }
  .v-card__title {
    padding-left: 2.5rem;
    .v-icon {
      padding-right: 0.8rem;
    }
  }
  .menu {
    .v-tabs__bar {
      margin-bottom: 1.5rem;
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
  .submit {
    margin: 0 auto;
    width: 80%;
  }
}
</style>

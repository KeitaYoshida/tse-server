<template v-if="item_data">
  <v-card id="henshu">
    <v-card-title class="headline">
      <v-chip
        outline
        v-if="i"
        :class="'chip ' + i.item_class_val.custom"
      >{{ i.item_class_val.value }}</v-chip>
      <span id="item_code">{{ item_code }}</span>
      <span id="item_rev" class="mini">{{ Number(item_rev).numToRev() }}</span>
      <v-spacer></v-spacer>
      <template v-if="del">
        <v-btn color="error" outline @click="del_check_flg=!del_check_flg">
          <v-icon>delete</v-icon>削除
        </v-btn>
      </template>
      <template v-else>
        <v-btn color="error" outline @click="del_check_flg=!del_check_flg" disabled>
          <v-icon>delete</v-icon>削除
        </v-btn>
      </template>
    </v-card-title>
    <v-container fluid>
      <v-tabs v-model="tab" slider-color="primary" fixed-tabs class="menu">
        <v-tab>基本情報</v-tab>
        <v-tab>手配方法</v-tab>
        <v-tab>金額</v-tab>
        <v-tab>画像</v-tab>
        <v-tab-item>
          <Base :item_data="item_data" :item_id="item_id" v-if="item_data" @up="up" @pass="pass" />
        </v-tab-item>
        <v-tab-item>
          <OrderWay :lot_data="lot_data" :item_id="item_id" v-if="lot_data" @pass="pass" />
        </v-tab-item>
        <v-tab-item>
          <OrderPrice :item_id="item_id" :vendor="vendor" @pass="pass"></OrderPrice>
        </v-tab-item>
        <v-tab-item>
          <ImageUpload :item_code="item_code" :item_rev="item_rev" />
        </v-tab-item>
      </v-tabs>
    </v-container>
    <v-dialog v-model="del_check_flg" width="50%" transition="dialog-transition">
      <DelCheck :data="del_check" @rt="del_item()"></DelCheck>
    </v-dialog>
  </v-card>
</template>

<script>
import ItemData from "./../../mixins/ItemData";
import Base from "./Henshu/Base";
import OrderWay from "./Henshu/OrderWay";
import ImageUpload from "./../act/ImageUpload";
import OrderPrice from "./Henshu/OrderPrice";
import DelCheck from "./../com/ComCheckDialog";

export default {
  components: {
    Base,
    OrderWay,
    ImageUpload,
    OrderPrice,
    DelCheck
  },
  mixins: [ItemData],
  props: {
    item_code: {
      default: ""
    },
    item_rev: {
      default: 0
    },
    del: {
      default: true
    }
  },
  data: function() {
    return {
      item_id: "",
      tab: 0,
      lot_data: null,
      del_check_flg: false,
      del_check: {
        title: "部材削除",
        message:
          "部材データは、形式マスタ、残数管理データ含め、全て削除されます。<br>削除後の取消はできません。<br>本当に削除しますか？"
      }
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
      delete d.order_prices;
      await axios.post("/items/update/post/" + id, d).then(res => {
        this.$emit("pass", { type: "base_data", data: d });
      });
    },
    pass(d) {
      this.$emit("pass", d);
    },
    del_item() {
      axios.get(
        "/db/items/delete/item/" + this.item_code + "/" + this.item_rev
      );
      alert("部材データを削除しました。トップページへ戻ります。");
      this.$router.push({ path: "/" });
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
    button {
      margin: 0 auto;
      width: 80%;
    }
  }
  .edit.dowble {
    .v-input {
      margin: 0 auto;
      width: 95%;
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
.mini {
  padding: 0 1rem;
  font-size: 1rem;
}
</style>

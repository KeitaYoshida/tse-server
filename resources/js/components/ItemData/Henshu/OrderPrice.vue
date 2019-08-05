<template>
  <v-container grid-list-xs class="edit dowble" v-if="vend_list">
    <v-btn color="primary" flat large block outline @click="add">追加</v-btn>
    <v-layout row wrap v-for="(item, index) in vendor" :key="index" mt-5 mb-5>
      <v-flex xs3>
        <v-select
          :items="vend_list"
          item-text="com_name"
          item-value="vendor_code"
          v-model="item.vendor_code"
          label="取引先名"
          prepend-inner-icon="far fa-building"
        ></v-select>
      </v-flex>
      <v-flex xs3>
        <v-text-field v-model="item.kako" label="加工内容"></v-text-field>
      </v-flex>
      <v-flex xs3 class="pl-3">
        <v-text-field
          name="price"
          label="金額"
          :id="'price_' + index"
          v-model="item.vendor_item_price"
          prepend-inner-icon="fas fa-money-bill-wave"
        ></v-text-field>
      </v-flex>
      <v-flex xs2 class="pl-3">
        <v-text-field
          name="add_date"
          label="調整日数"
          hint="一括手配時に入力値の分の日数を加算します"
          type="number"
          :id="'add_date' + index"
          v-model="item.order_add_date"
          prepend-inner-icon="fas fa-money-bill-wave"
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn color="primary" flat icon large @click="vendor.splice(index, 1)">
          <v-icon>far fa-trash-alt</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-btn color="success" flat large block outline @click="submit">{{ submit_text }}</v-btn>
  </v-container>
</template>

<script>
import { filter } from "minimatch";
export default {
  props: ["item_id", "vendor"],
  data: function() {
    return { vend_list: null, submit_text: "決定" };
  },
  created: async function() {
    console.log(this.vendor);
    await axios.get("/vendor/list").then(res => {
      this.vend_list = res.data;
    });
  },
  methods: {
    add() {
      this.vendor.push({
        item_id: this.item_id,
        vendor_code: "",
        com_name: "",
        vendor_item_price: 0,
        order_add_date: 0
      });
    },
    submit() {
      const d = this.vendor.filter(ar => ar.vendor_code !== "");
      const f = d.map(ar => {
        return {
          item_id: ar.item_id,
          vendor_code: ar.vendor_code,
          vendor_item_price: ar.vendor_item_price,
          order_add_date: ar.order_add_date,
          kako: ar.kako
        };
      });
      axios.post("/vendor-item/up/" + this.item_id, f).then(res => {
        console.log(res.data);
        return;
        this.submit_text = "更新済み";
        this.$emit("pass", { type: "order_price", data: res.data });
      });
    }
  }
};
</script>
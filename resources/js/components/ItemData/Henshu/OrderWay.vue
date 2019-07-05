<template>
  <v-form v-if="lot_data" id="lot" class="edit" @submit.prevent="submit">
    <v-radio-group v-model="redio">
      <v-radio v-for="(d, n) in redioValue" :key="n" :label="d" :value="n" v-on:change="change"></v-radio>
    </v-radio-group>
    <v-expand-x-transition>
      <div v-if="redio===1">
        <v-text-field name="lot_num" label="ＬＯＴ手配数" id="lot_num" v-model="lot_num"></v-text-field>
        <v-text-field name="minimum_set" label="最小保持数" id="minimum_set" v-model="minimum_set"></v-text-field>
      </div>
    </v-expand-x-transition>
    <v-btn
      color="success"
      type="submit"
      form="lot"
      flat
      large
      block
      outline
      class="submit"
    >{{ submit_text }}</v-btn>
  </v-form>
</template>

<script>
export default {
  props: ["lot_data", "item_id"],
  data: function() {
    return {
      redioValue: ["通常手配", "ＬＯＴ手配", "支給品"],
      redio: 0,
      lot_num: 0,
      minimum_set: 0,
      submit_text: "データ更新"
    };
  },
  created: function() {
    this.lot_data.forEach(ar => {
      if (ar.name === "lot_num") {
        this.lot_num = ar.value;
      } else if (ar.name === "minimum_set") {
        this.minimum_set = ar.value;
      }
    });
    switch (this.lot_num) {
      case -1:
        this.redio = 0;
        break;
      case -2:
        this.redio = 2;
        break;
      default:
        this.redio = 1;
        break;
    }
  },
  methods: {
    change(e) {
      switch (e) {
        case 0:
          this.lot_num = -1;
          this.minimum_set = -1;
          break;
        case 1:
          if (this.lot_num === -1 || this.lot_num === -2) {
            this.lot_num = 0;
            this.minimum_set = 0;
          }
          break;
        case 2:
          this.lot_num = -2;
          this.minimum_set = -1;
          break;
      }
    },
    async submit() {
      const d = {
        lot_num: this.lot_num,
        minimum_set: this.minimum_set
      };
      this.$emit("pass", { type: "order_way", data: d });
      await axios.post("/items/update/post/" + this.item_id, d).then(res => {
        this.submit_text = "更新済み";
      });
    }
  }
};
</script>
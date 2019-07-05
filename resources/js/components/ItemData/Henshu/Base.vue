<template>
  <v-form v-if="item_data" class="edit" @submit.prevent="submit" id="item_data" ref="item_data">
    <span v-for="(item, index) in item_data" :key="index">
      <v-text-field
        :name="item.name"
        :prepend-inner-icon="item.icon"
        :label="item.title"
        :id="item.name"
        :disabled="item.edit"
        v-model="item.value"
      ></v-text-field>
    </span>
    <v-btn
      color="success"
      type="submit"
      form="item_data"
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
  props: ["item_data", "item_id"],
  data: function() {
    return {
      submit_text: "データ更新"
    };
  },
  methods: {
    submit() {
      this.$emit("up", this.item_data, this.item_id);
      this.submit_text = "更新済み";
    }
  }
};
</script>
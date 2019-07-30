<template>
  <v-form v-if="item_data" class="edit" id="item_data" ref="item_data">
    <v-layout wrap>
      <v-flex xs6 class="px-4" v-for="(item, index) in item_data" :key="index">
        <v-text-field
          :name="item.name"
          :prepend-inner-icon="item.icon"
          :label="item.title"
          :id="item.name"
          :disabled="item.edit"
          v-model="item.value"
          small
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn
      color="success"
      form="item_data"
      flat
      large
      block
      outline
      class="submit"
      @click="submit()"
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

<style lang="scss" scoped>
.edit {
  .v-icon {
    font-size: 12px;
  }
}
</style>

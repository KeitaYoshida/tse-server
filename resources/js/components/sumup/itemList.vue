<template>
  <v-data-table
    v-if="inited"
    :headers="headers"
    :items="items"
    class="elevation-1"
    item-key="index"
    loading="true"
    :search="search"
  >
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.item_code }}</td>
      <td class="text-xs-center">{{ props.item.item_name }}</td>
      <td class="text-xs-center">{{ props.item.item_model }}</td>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "形式", value: "item_model", align: "center" }
      ],
      inited: false,
      items: null
    };
  },
  computed: {
    ...mapState({
      search: state => state.search.inventory
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let data = await axios.get("/items/mini");
      this.items = data.data;
      this.inited = true;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div id="makepdf" class="a4-area" v-if="item_list">
    <v-card class="a4" v-for="(items, index) in item_list" :key="index">
      <v-card-title primary-title>
        <v-icon left>far fa-list-alt</v-icon>
        <span>その他・残物品 集計表</span>
        <v-spacer></v-spacer>
        <span class="page_index">{{ index + 1 }} / {{ item_list.length }} ページ</span>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        class="data-list"
        pagination.sync="pagination"
        loading="true"
        disable-initial-sort
        hide-actions
      >
        <template v-slot:items="props">
          <td>{{ props.item.item_code !== null ? props.item.item_code.slice(0, 14): '' }}</td>
          <td>{{ props.item.item_name !== null ? props.item.item_name.slice(0, 8) : '' }}</td>
          <td>{{ props.item.item_model !== null ? props.item.item_model.slice(0, 14) : '' }}</td>
          <td>{{ props.item.num_inv }}</td>
          <td>{{ props.item.inv_price }}</td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "品目形式", value: "item_model", align: "center" },
        { text: "集計数", value: "num_inv", align: "center" },
        { text: "合計金額", value: "inv_price", align: "center" }
      ],
      item_list: null
    };
  },
  created: function() {
    axios.get("/inventory/buzai-etc-list").then(res => {
      this.item_list = res.data.divide(35);
    });
  }
};
</script>

<style lang="scss" scoped>
td,
th {
  border: 1px solid #ddd;
  padding: 0 0.5rem !important;
  height: 7.4mm !important;
}
</style>

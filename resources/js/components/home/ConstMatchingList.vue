<template>
  <div>
    <div v-if="items_from_parents.length !== 0">
      <v-data-table
        :headers="headers"
        :items="items_from_parents"
        class="const-matching"
        hide-actions
        hide-footers
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.model }}</td>
          <td class="text-xs-center">{{ props.item.orderConstCode }}</td>
          <td class="text-xs-center">{{ props.item.num_Order }}</td>
          <td class="text-xs-center">{{ props.item.num_Recept }}</td>
          <td class="text-xs-center">{{ props.item.orderName }}</td>
        </template>
      </v-data-table>
    </div>
    <div v-else>
      <v-alert :value="true" outline color="warning" icon="priority_high">データがありません</v-alert>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items_from_parents: {
      type: Array,
      default: []
    }
  },
  data: function() {
    return {
      headers: [
        { text: "形式", align: "center", value: "model" },
        { text: "工事番号", align: "center", value: "orderConstCode" },
        { text: "手配数", align: "center", value: "num_Order" },
        { text: "受入数", align: "center", value: "num_Recept" },
        { text: "手配先", align: "center", value: "orderName" }
      ]
    };
  }
};
</script>

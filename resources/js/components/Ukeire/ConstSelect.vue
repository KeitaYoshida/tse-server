<template>
  <v-container grid-list-xs>
    <h1 class="mb-3">工事選択</h1>
    <v-text-field
      class="mb-3"
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
      autofocus
      type="number"
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="cnt"
      hide-actions
      class="elevation-1"
      :pagination.sync="pagination"
      item-key="cnt_orderlist_id"
      loading="true"
      :search="search"
      v-if="cnt"
    >
      <template v-slot:items="props">
        <tr @click="act(props.item.cnt_model, props.item.cnt_order_code)">
          <td class="text-xs-center">
            <v-chip outline color="primary">{{ props.item.status.val }}</v-chip>
          </td>
          <td class="text-xs-center">{{ props.item.cnt_model }}</td>
          <td class="text-xs-center">{{ props.item.cnt_order_code }}</td>
          <td class="text-xs-center">{{ props.item.order_price.toLocaleString() }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  props: [],
  components: {},
  data: function() {
    return {
      cnt: null,
      headers: [
        { text: "区分", value: "", align: "center" },
        { text: "形式", value: "cnt_model", align: "center" },
        { text: "発注コード", value: "cnt_order_code", align: "center" },
        { text: "発注金額", value: "order_price", align: "center" }
      ],
      pagination: {
        sortBy: "cnt_model"
      },
      search: ""
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/db/order/ukeire/cnt/list").then(res => {
        console.log(res.data);
        this.cnt = res.data;
      });
    },
    act(mid, ocd) {
      this.$emit("act", mid, ocd);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

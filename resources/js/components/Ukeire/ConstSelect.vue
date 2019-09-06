<template>
  <v-container grid-list-xs>
    <h1 class="mb-3">工事選択</h1>
    <v-text-field
      class="mb-3"
      append-icon="search"
      label="Search"
      single-line
      hide-details
      autofocus
      :value="search_x"
      @input="SEARCH_MODELCONST($event)"
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="cnt"
      hide-actions
      class="elevation-1"
      :pagination.sync="pagination"
      item-key="cnt_orderlist_id"
      loading="true"
      :search="search_x"
      v-if="cnt"
    >
      <template v-slot:items="props">
        <tr @click="act(props.item.cnt_model, props.item.cnt_order_code)">
          <td class="text-xs-center">
            <v-chip outline color="primary">{{ props.item.status.val }}</v-chip>
          </td>
          <td class="text-xs-center biger">{{ props.item.cnt_model }}</td>
          <td class="text-xs-center biger">{{ props.item.cnt_order_code }}</td>
          <td class="text-xs-center">{{ props.item.order_price.toLocaleString() }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

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
  computed: {
    ...mapState({
      search_x: state => state.search.modelconst
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions(["SEARCH_MODELCONST", "ORDERS_ONE_INIT_SET"]),
    init() {
      axios.get("/db/order/ukeire/cnt/list").then(res => {
        this.cnt = res.data;
      });
    },
    async act(model_id, order_code) {
      let order_data = await axios.get("/db/order/list/one/" + order_code);
      await this.ORDERS_ONE_INIT_SET({
        id: model_id,
        code: order_code,
        data: order_data.data
      });
      this.$router.push("/ukeire/ukeire");
    }
  }
};
</script>

<style lang="scss" scoped>
.biger {
  font-size: 1.3rem;
}
</style>

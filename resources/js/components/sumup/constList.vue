<template>
  <v-data-table
    v-if="inited"
    :headers="headers"
    :items="items"
    item-key="cnt_orderlist_id"
    loading="true"
    :rows-per-page-items="[6,10,25,{'text':'$vuetify.dataIterator.rowsPerPageAll','value':-1}]"
    :search="search"
    rows-per-page-text="page"
  >
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.cnt_model }}</td>
      <td class="text-xs-center">
        <v-btn
          color="success"
          class="link"
          flat
          @click="act(props.item.cnt_model, props.item.cnt_order_code)"
        >{{ props.item.cnt_order_code }}</v-btn>
      </td>
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
        { text: "形式", value: "cnt_model", align: "center" },
        { text: "注文コード", value: "cnt_order_code", align: "center" }
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
    ...mapActions(["ORDERS_ONE_INIT_SET"]),
    async init() {
      let data = await axios.get("/db/order/mini");
      this.items = data.data;
      // console.log(this.items);
      // return;
      this.inited = true;
    },
    async act(model_id, order_code) {
      let order_data = await axios.get("/db/order/list/one/" + order_code);
      order_data = order_data.data.filter(o => o.num_recept > 0);
      await this.ORDERS_ONE_INIT_SET({
        id: model_id,
        code: order_code,
        data: order_data
      });
      this.$emit("act");
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0 !important;
}
table.v-table tbody td {
  font-size: 1.3rem;
}
button.link {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
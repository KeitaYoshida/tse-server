<template>
  <v-app>
    <v-container fluid>
      <v-data-table
        v-if="hisList"
        :headers="headers"
        :items="hisList"
        hide-actions
        class="elevation-1"
        :pagination.sync="pagination"
        item-key="inv_id"
      >
        <template v-slot:items="props">
          <td>
            <v-btn color="success" outline>表紙</v-btn>
          </td>
          <td class="text-xs-center">{{ props.item.inv_date.slice(2,-3) }}</td>
          <td class="text-xs-center">{{ props.item.make_user }}</td>
          <td class="text-xs-center">{{ Math.round(props.item.items_price).toLocaleString() }}</td>
          <td class="text-xs-center">{{ Math.round(props.item.theoretical_price).toLocaleString()}}</td>
          <td class="text-xs-center">{{ Math.round(props.item.working_price).toLocaleString() }}</td>
          <td>
            <v-btn color="primary" outline>部材</v-btn>
          </td>
          <td>
            <v-btn color="primary" outline>工事</v-btn>
          </td>
          <td>
            <v-btn color="primary" outline>集計履歴</v-btn>
          </td>
          <td>
            <v-btn color="warning" outline>調整履歴</v-btn>
          </td>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      hisList: null,
      headers: [
        { text: "", value: "", align: "center", sortable: false },
        { text: "登録日", value: "inv_date", align: "center" },
        { text: "登録者", value: "make_user", align: "center" },
        { text: "部材集計額", value: "items_price", align: "center" },
        { text: "部材理論額", value: "theoretical_price", align: "center" },
        { text: "仕掛り工事部材金額", value: "working_price", align: "center" },
        { text: "", value: "", align: "center", sortable: false },
        { text: "", value: "", align: "center", sortable: false },
        { text: "", value: "", align: "center", sortable: false },
        { text: "", value: "", align: "center", sortable: false }
      ],
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsPerPageItems: [10, 20]
      }
    };
  },
  computed: {
    ...mapState({
      target: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let hisList = await axios.get("/db/inventory/sum/history/list");
      this.hisList = hisList.data;
    }
  }
};
</script>

<style lang="scss" scoped>
td,
th {
  padding: 0 !important;
}
</style>

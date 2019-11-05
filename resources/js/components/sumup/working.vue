<template>
  <v-app>
    <v-container grid-list-xs>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-data-table
        :headers="headers"
        :items="list"
        hide-actions
        class="elevation-1"
        :pagination.sync="pagination"
        item-key="worklist_code"
        :loading="list.length===0"
        :search="search"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">{{props.item.model.model_code }}</td>
          <td class="text-xs-center">{{props.item.worklist_code }}</td>
          <td class="text-xs-center">{{props.item.num + ' / ' + props.item.all_num }}</td>
          <td class="text-xs-center">
            <v-btn
              color="primary"
              outline
              small
              @click="$router.push('/workingUseItem/' + props.item.worklist_id)"
            >{{Math.round(props.item.use_item_price).toLocaleString() }}</v-btn>
          </td>
          <td class="text-xs-center">{{Number(props.item.context)}} %</td>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Axios from "axios";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      list: [],
      headers: [
        { text: "形式", value: "model.model_code", align: "center" },
        { text: "工事番号", value: "worklist_code", align: "center" },
        { text: "台数", value: "num", align: "center" },
        { text: "使用部材金額", value: "use_item_price", align: "center" },
        { text: "進捗", value: "context", align: "center" }
      ],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 1000,
        sortBy: "model.model_code"
      },
      search: ""
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
      let list = await axios.get("/db/inventory/working/const/list");
      this.list = list.data;
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0 !important;
}
</style>

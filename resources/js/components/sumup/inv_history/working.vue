<template>
  <v-app>
    <v-container grid-list-xs>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        class="pb-3 px-3"
      ></v-text-field>
      <v-data-table
        :headers="headers"
        hide-actions
        :items="items"
        class="elevation-1"
        item-key="inv_worklist_id"
        :search="search"
        :loading="items.length===0"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.model_code }}</td>
          <td class="text-xs-center">
            <span
              class="success--text worklist"
              @click="$router.push('/inv/his/working/item/'+ $route.params.date + '/'+ props.item.worklist_code)"
            >{{ props.item.worklist_code }}</span>
          </td>
          <td class="text-xs-center">{{ props.item.const_num }}</td>
          <td class="text-xs-center">{{ props.item.all_num }}</td>
          <td class="text-xs-center">{{ Math.round(props.item.use_item_price).toLocaleString() }}</td>
          <td class="text-xs-center">
            <span
              class="success--text working"
            >{{ Math.round(props.item.work_context_price).toLocaleString() }}</span>
          </td>
          <td class="text-xs-center">{{ props.item.check_user }}</td>
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
      search: "",
      headers: [
        { text: "形式", value: "model_code", align: "center" },
        { text: "工事番号", value: "worklist_code", align: "center" },
        { text: "台数（工事）", value: "const_num", align: "center" },
        { text: "台数（全）", value: "all_num", align: "center" },
        { text: "使用部材金額", value: "", align: "center" },
        { text: "仕掛り工数金額", value: "", align: "center" },
        { text: "確認者", value: "check_user", align: "center" }
      ],
      items: [],
      total_price: 0,
      total_process_price: 0
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
      let inv_date = this.$route.params.date;
      let res = await axios.get("/db/inv/fix/worklist/" + inv_date);
      let workList = res.data;
      this.items = workList;
      console.log(workList);
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  font-size: 1.3rem !important;
}
.working,
.worklist {
  font-size: 1.3rem;
  cursor: pointer;
}
</style>

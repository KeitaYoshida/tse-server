<template>
  <v-app>
    <v-container grid-list-xs>
      <v-data-table
        v-if="items"
        :headers="headers"
        :items="items"
        class="elevation-1"
        :pagination.sync="pagination"
        item-key="id"
        loading="true"
        :search="search"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.item_code }}</td>
          <td class="text-xs-center">
            {{ props.item.item_model }}
            <br />
            {{ props.item.item_name }}
          </td>
          <td class="text-xs-center text-bg primary--text">{{ props.item.last_num }}</td>
          <td class="text-xs-center text-bg success--text">{{ props.item.appo_num }}</td>
          <td class="text-xs-center text-bg warning--text">{{ props.item.order_num }}</td>
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
      pagination: {},
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名/形式", value: "item_model", align: "center" },
        { text: "残数", value: "item_model", align: "center" },
        { text: "使用予約数", value: "item_model", align: "center" },
        { text: "発注数", value: "item_model", align: "center" }
      ],
      search: null
    };
  },
  computed: {
    ...mapState({
      items: state => state.target.process.process_items
    })
  },
  created: function() {
    this.init();
    this.dataLoading = setInterval(() => {
      this.init();
    }, 3000);
  },
  methods: {
    ...mapActions(["PROCESS_ITEMS_SET"]),
    async init() {
      await axios
        .get("/db/workdata/cmpt/items/" + this.$route.params.work_id)
        .then(res => {
          // console.log(res.data);
          let d = [];
          console.log(res.data);
          res.data.forEach(cmpt => {
            // console.log("test");
            let item = cmpt.items;
            d.push({
              item_id: cmpt.item_id,
              item_code: item.item_code,
              item_rev: item.item_rev,
              item_use: cmpt.item_use,
              item_ren: cmpt.item_ren,
              item_name: item.item_name,
              order_code: item.order_code,
              item_model: item.item_model,
              item_class: item.item_class,
              last_num: item.last_num,
              appo_num: item.appo_num,
              order_num: item.order_num,
              inv_num: item.inv_num
            });
          });
          this.PROCESS_ITEMS_SET(d);
        });
    }
  },
  beforeDestroy: function() {
    clearInterval(this.dataLoading());
  }
};
</script>

<style lang="scss" scoped>
.text-bg {
  font-size: 1.8rem;
}
</style>

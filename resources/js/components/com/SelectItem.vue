<template>
  <v-card v-if="item_data">
    <v-card-text>
      <v-layout wrap>
        <v-flex xs10 offset-xs1>
          <v-text-field name="item_list_search" label="部材検索" v-model="search" clearable></v-text-field>
        </v-flex>
        <v-flex xs12 class="rightView text-xs-center">
          <v-data-table
            :headers="headers"
            :items="item_data"
            pagination.sync="pagination"
            dark
            item-key="item_id"
            :search="search"
          >
            <template v-slot:items="props">
              <tr @click="select(props.item)">
                <td class="text-xs-center">
                  <p class="model_name">{{ props.item.item_code }}</p>
                  <p class="mini">
                    <nobr>{{ props.item.order_code }} {{ props.item.item_rev.numToRev() }}</nobr>
                  </p>
                </td>
                <td class="text-xs-center">
                  <p>{{ props.item.item_name }}</p>
                  <p>{{ props.item.item_model }}</p>
                </td>
                <td class="text-xs-center">
                  <p class="mini">残数:{{ props.item.last_num }}</p>
                  <p class="mini">予約数:{{ props.item.appo_num }}</p>
                  <p class="mini">発注数:{{ props.item.order_num }}</p>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [],
  components: {},
  data: function() {
    return {
      item_data: null,
      search: "",
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品目形式", value: "item_model", align: "center" },
        { text: "数量情報", value: "last_num", align: "center" }
      ]
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/items/itemlist").then(res => {
        this.item_data = res.data;
      });
    },
    select(select) {
      console.log(select);
      this.$emit("select", select);
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.model_name {
  font-size: 1.2rem;
}
.mini {
  font-size: 0.6rem;
}
</style>

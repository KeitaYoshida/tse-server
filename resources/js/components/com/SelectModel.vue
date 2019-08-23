<template>
  <v-card v-if="model_data">
    <v-card-text>
      <v-layout wrap>
        <v-flex xs10 offset-xs1>
          <v-text-field name="model_list_search" label="形式検索" v-model="search" clearable></v-text-field>
        </v-flex>
        <v-flex xs12 class="rightView text-xs-center">
          <v-data-table
            :headers="headers"
            :items="model_data"
            pagination.sync="pagination"
            dark
            item-key="model_id"
            :search="search === null ? '' : search.slice(0, search.length -3)"
          >
            <template v-slot:items="props">
              <tr @click="select(props.item)">
                <td class="text-xs-center">
                  <p class="model_name">{{ props.searchLength }} {{ props.item.model_code }}</p>
                  <p
                    class="mini"
                  >{{ props.item.model_code_ne }} {{ props.item.model_rev.numToRev() }}</p>
                </td>
                <td class="text-xs-center">{{ props.item.model_name}}</td>
                <td class="text-xs-center">{{ props.item.cmpt.length }}</td>
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
  props: ["defval"],
  components: {},
  data: function() {
    return {
      model_data: null,
      search: "",
      headers: [
        { text: "形式", value: "model_code", align: "center" },
        { text: "型式名", value: "model_name", align: "center" },
        { text: "構成数", value: "cmpt.length", align: "center" }
      ]
    };
  },
  computed: {},
  created: function() {
    this.init();
  },
  methods: {
    init() {
      this.search = this.defval !== null ? this.defval : null;
      axios.get("/db/model_mst/list").then(res => {
        this.model_data = res.data;
      });
    },
    select(select) {
      this.search = select.model_code;
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

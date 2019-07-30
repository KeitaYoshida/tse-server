<template>
  <main>
    <v-container grid-list-xs>
      <h1 class="mb-4">部材注文リスト</h1>
      <template v-if="cmpt_list">
        <h3 class="mt-4">構成リスト</h3>
        <v-layout row wrap>
          <v-flex xs3 v-for="(item, index) in cmpt_list" :key="index">
            <v-checkbox
              v-model="cmpt_select"
              :label="item"
              :value="item"
              row
              class="mt-0"
              @change="review()"
            ></v-checkbox>
          </v-flex>
        </v-layout>
      </template>
      <template v-if="cstm_list">
        <h3>手配先</h3>
        <v-layout row wrap>
          <v-flex xs3 v-for="(item, index) in cstm_list" :key="index">
            <v-checkbox
              v-model="cstm_select"
              :label="item"
              :value="item"
              row
              color="primary"
              class="mt-0"
              @change="review()"
            ></v-checkbox>
          </v-flex>
        </v-layout>
      </template>
    </v-container>
    <v-data-table
      :headers="headers"
      :items="view_list"
      class="elevation-1 data_table"
      :pagination.sync="pagination"
      item-key="id"
      loading="true"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">
          <p>{{ props.item.listdata.cnt_model }}</p>
          <p>{{ props.item.listdata.cnt_order_code }}</p>
        </td>
        <td class="text-xs-center">
          <p>{{ props.item.cmpt.cmpt_code }}</p>
          <p>
            <span class="rev">{{ props.item.cmpt.cmpt_rev.numToRev() }}</span>
            <span class="ren">{{ props.item.assy_num }}</span>
          </p>
        </td>
        <td class="text-xs-center">
          <p>{{ props.item.item.item_code }}</p>
          <p
            v-if="props.item.item.item_code !== null && props.item.item.item_code !== props.item.item.order_code"
          >{{ props.item.item.order_code }}</p>
        </td>

        <td class="text-xs-center">
          <p>{{ props.item.item.item_model }}</p>
          <p>{{ props.item.item.item_name }}</p>
        </td>
        <td class="text-xs-center">{{ props.item.num_order }}</td>
        <td class="text-xs-center vendor pa-0">
          <v-layout row wrap>
            <template v-for="(item, index) in props.item.price">
              <v-flex xs4 :key="'t' + index">{{ item.vname.com_name }}</v-flex>
              <v-flex
                xs4
                :key="'v' + index"
              >{{ Math.round(item.price * props.item.num_order, 2).toLocaleString()}}</v-flex>
              <v-flex xs4 :key="'d' + index">{{ item.order_day }}</v-flex>
            </template>
          </v-layout>
        </td>
      </template>
    </v-data-table>
    <v-bottom-nav fixed value="value" active.sync="value">
      <v-btn flat light to="/product_list">
        <span>製造頁へ</span>
        <v-icon>far fa-arrow-alt-circle-left</v-icon>
      </v-btn>
      <v-btn flat light @click="order()">
        <span>手配</span>
        <v-icon>far fa-thumbs-up</v-icon>
      </v-btn>
      <v-btn flat light>
        <span>取消</span>
        <v-icon>fas fa-trash-alt</v-icon>
      </v-btn>
    </v-bottom-nav>
  </main>
</template>

<script>
export default {
  props: ["order_list", "view_list", "cstm_list", "cmpt_list"],
  data: function() {
    return {
      order_code: "",
      cstm_select: [],
      cmpt_select: [],
      headers: [
        {
          text: "形式/手配コード",
          value: "listdata.cnt_order_code",
          align: "center"
        },
        { text: "構成/rev/連", value: "cmpt.cmpt_code", align: "center" },
        { text: "品目/発注コード", value: "item.item_code", align: "center" },
        { text: "形式/品名", value: "item.item_model", align: "center" },
        { text: "手配数", value: "item.item_name", align: "center" },
        { text: "手配先", value: "price", align: "center" }
      ],
      pagination: {
        page: 1,
        rowsPerPage: 50
      }
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      this.cmpt_select = this.cmpt_list;
      this.cstm_select = this.cstm_list;
    },
    review() {
      this.$emit("review", this.cmpt_select, this.cstm_select);
    },
    order() {
      this.$emit("order");
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}
.vendor {
  font-size: 0.8rem;
}
</style>

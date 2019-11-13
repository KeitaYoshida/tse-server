<template>
  <v-app>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-flex>
        <v-flex xs6 px-3>
          <v-text-field v-model="addNum" label="加算数" type="number" @click="addNum = ''"></v-text-field>
        </v-flex>
        <v-flex xs6 px-3>
          <v-text-field v-model="area" label="保管場所"></v-text-field>
        </v-flex>
        <v-flex xs12 v-if="items">
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            :pagination.sync="pagination"
            item-key="item_id"
            :search="search"
          >
            <template v-slot:items="props">
              <tr>
                <td class="text-xs-center">
                  {{props.item.item_code}}
                  <template
                    v-if="props.item.order_code.trim() != props.item.item_code.trim() && props.item.order_code != '' && props.item.order_code !== null"
                  >
                    <br />
                    <span class="daigae">代: {{props.item.order_code }}</span>
                  </template>
                </td>
                <td class="text-xs-center">{{props.item.item_model}}</td>
                <td class="text-xs-center">{{props.item.item_name}}</td>
                <td class="text-xs-center">{{props.item.last_num}}</td>
                <td
                  class="text-xs-center"
                >{{props.item.last_num + props.item.order_num - props.item.appo_num}}</td>
                <td class="text-xs-center">
                  <v-btn
                    color="primary"
                    outline
                    @click="action(props.item.item_id, props.item)"
                    :loading="loading"
                  >残数処理</v-btn>
                </td>
                <td class="text-xs-center">
                  <v-btn color="success" outline>履歴</v-btn>
                </td>
              </tr>
              <tr v-if="props.item.location !== '-' && props.item.location !== ''" class="location">
                <td>保管場所</td>
                <td colspan="5">{{props.item.location}}</td>
                <td>
                  <v-btn color="warning" outline @click="area = props.item.location">COPY</v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
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
      addNum: 0,
      area: "",
      items: null,
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 6,
        sortBy: "item_name",
        totalItems: 0,
        rowsPerPageItems: [1, 2, 4, 8, 16]
      },
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "形式", value: "item_model", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "在庫数", value: "last_num", align: "center" },
        { text: "残物品数", value: "order_code", align: "center" },

        { text: "残数処理", value: "", align: "center" },
        { text: "履歴", value: "", align: "center" }
      ],
      loading: false
    };
  },
  computed: {
    ...mapState({
      user: "user_info"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let items = await axios.get("/items/all");
      this.items = items = items.data;
      console.log(items);
    },
    async action(id, item) {
      if (this.addNum == false || this.area == false) {
        alert("加算数・保管場所を入力して下さい");
        return;
      }
      this.loading = true;
      let send = {
        item_id: id,
        loginid: this.user.loginid,
        act_num: this.addNum,
        location: this.area
      };
      let post = await axios.post("/db/add/last/item", send);
      item.last_num = Number(item.last_num) + Number(this.addNum);
      item.location = this.area;
      this.loading = false;
      // console.log(post.data);
    }
  }
};
</script>

<style lang="scss" scoped>
.location {
  background-color: gainsboro;
}
</style>
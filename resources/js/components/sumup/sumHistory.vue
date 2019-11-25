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
          <tr class="main_info">
            <td>
              <v-btn color="success" outline>表紙</v-btn>
            </td>
            <td class="text-xs-center">
              <span>{{ props.item.inv_date.slice(2,-3) }}</span>
              <br />
              <span>{{ props.item.make_user }}</span>
            </td>
            <td class="text-xs-center">
              <span
                class="itemlist select success--text"
                @click="$router.push('/inv/his/items/' + props.item.inv_date)"
              >{{ Math.round(props.item.items_price).toLocaleString() }}</span>
              <br />
              <span class="riron">{{ Math.round(props.item.theoretical_price).toLocaleString()}}</span>
            </td>
            <td class="text-xs-center">
              <span
                class="worklist select success--text"
                @click="$router.push('/inv/his/working/' + props.item.inv_date)"
              >{{ Math.round(props.item.working_price).toLocaleString() }}</span>
              <br />
              <span>{{ Math.round(props.item.process_price).toLocaleString()}}</span>
            </td>
            <td class="text-xs-center">
              <span
                class="worklist select success--text"
                @click="$router.push('/inv/his/working/' + props.item.inv_date)"
              >{{ Math.round(props.item.working_price).toLocaleString() }}</span>
              <br />
              <span>{{ Math.round(props.item.process_price).toLocaleString()}}</span>
            </td>
            <td>
              <v-btn color="primary" outline>集計履歴</v-btn>
            </td>
            <td>
              <v-btn color="warning" outline @click="props.expanded=!props.expanded">
                <span>その他金額</span>
                <v-icon right small>fas fa-history</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
        <template v-slot:expand="props">
          <v-layout wrap>
            <v-flex xs2 class="text-xs-center detail-title">処理</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">大項目</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">中項目</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">小項目</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">金額</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">適用</v-flex>
          </v-layout>
          <v-layout wrap py-3>
            <v-flex xs2 class="text-xs-center detail-act">
              <v-btn small color="primary" outline icon>
                <v-icon small>fas fa-plus</v-icon>
              </v-btn>
              <v-btn small color="warning" outline icon>
                <v-icon small>fas fa-trash-alt</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs2 class="text-xs-center detail-val dai">その他 工事</v-flex>
            <v-flex xs2 class="text-xs-center detail-val tyu">スマートカム</v-flex>
            <v-flex xs2 class="text-xs-center detail-val sho">部材金額</v-flex>
            <v-flex xs2 class="text-xs-center detail-val val">5327902</v-flex>
            <v-flex xs2 class="text-xs-center detail-val teki">-</v-flex>
          </v-layout>
          <v-layout wrap pb-3>
            <v-flex xs2 class="text-xs-center detail-act">
              <v-btn small color="primary" outline icon>
                <v-icon small>fas fa-plus</v-icon>
              </v-btn>
              <v-btn small color="warning" outline icon>
                <v-icon small>fas fa-trash-alt</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs2 class="text-xs-center detail-val dai">その他 工事</v-flex>
            <v-flex xs2 class="text-xs-center detail-val tyu">コナミ</v-flex>
            <v-flex xs2 class="text-xs-center detail-val sho">部材金額</v-flex>
            <v-flex xs2 class="text-xs-center detail-val val">557901</v-flex>
            <v-flex xs2 class="text-xs-center detail-val teki">-</v-flex>
          </v-layout>
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
        { text: "登録日／登録者", value: "inv_date", align: "center" },
        { text: "部材集計／理論額", value: "items_price", align: "center" },
        {
          text: "仕掛部材／工数金額",
          value: "theoretical_price",
          align: "center"
        },
        {
          text: "手書き帳票／間接部材",
          value: "",
          align: "center",
          sortable: false
        },
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
.main_info {
  td {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
  }
}
.riron {
  font-size: 1.2rem;
  color: gray;
}
.select {
  cursor: pointer;
}
.detail-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: darkgray;
}
.detail-val {
  font-size: 1.4rem;
}
.detail-act {
  .v-btn {
    margin: 0 6px;
  }
}
</style>

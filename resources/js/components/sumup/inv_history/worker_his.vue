<template>
  <v-app>
    <v-container grid-list-xs>
      <div v-if="items">
        <h1 class="mb-3">
          <span class="primary--text before" @click="$router.push('/sumup/history')">過去データ</span> -->
          <span>実地棚卸集計履歴</span>
        </h1>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
          clearable
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1 mt-4"
          :pagination.sync="pagination"
          item-key="id"
          loading="true"
          :search="search"
        >
          <template v-slot:items="props">
            <td class="text-xs-center">
              <span
                class="link"
                @click="search=props.item.his_time.slice(5, 10)"
              >{{ props.item.his_time.slice(5, 10) }}</span>
              <span>{{ props.item.his_time.slice(10, -3) }}</span>
            </td>
            <td class="text-xs-center">
              <span
                class="text-l link"
                @click="search=props.item.user_name"
              >{{ props.item.user_name }}</span>
              <br />
            </td>
            <td class="text-xs-center">
              <span
                class="text-m link"
                @click="search=props.item.item_code"
              >{{ props.item.item_code }}</span>
            </td>
            <td class="text-xs-center">
              {{ props.item.item_name }}
              <br />
              <span
                class="text-m link"
                @click="search=props.item.item_model"
              >{{ props.item.item_model }}</span>
            </td>
            <td class="text-xs-center">
              <span
                :class="'text-l ' + (props.item.act_num < 0 ? 't-red' : '')"
              >{{ props.item.act_num }}</span>
            </td>
            <td class="text-xs-center">
              <span class="link" @click="search=props.item.memo">{{ props.item.memo }}</span>
            </td>
          </template>
        </v-data-table>
      </div>
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
      search: null,
      items: null,
      headers: [
        { text: "時間", value: "his_time", align: "center" },
        { text: "作業者", value: "user_name", align: "center" },
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名／形式", value: "item_model", align: "center" },
        { text: "集計数", value: "act_num", align: "center" },
        { text: "コメント", value: "memo", align: "center" }
      ],
      pagination: {
        rowsPerPage: 20,
        sortBy: "his_time",
        descending: true,
        totalItems: 0
      }
    };
  },
  computed: {
    ...mapState({
      users: state => state.user_info
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let inv_date = this.$route.params["inv_date"];
      let his = await axios.get("/db/inv/his/history/worker/" + inv_date);
      this.items = his.data;
      // this.search = this.users.name;
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0 !important;
}
.text-s {
  font-size: 0.8rem;
}
.text-m {
  font-size: 1.2rem;
}
.text-l {
  font-size: 1.5rem;
}
.t-red {
  color: #ef5350;
}
.link {
  color: #388e3c;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
}
.shukei_link {
  color: #5c6bc0;
  &:hover {
    color: #1a237e;
    cursor: pointer;
  }
}
</style>

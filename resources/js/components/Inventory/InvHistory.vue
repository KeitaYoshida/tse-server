<template>
  <v-card dark v-if="items">
    <v-card-title>
      <v-icon left>fas fa-chart-line</v-icon>
      <span>ＨＩＳＴＯＲＹ</span>
      <v-text-field name="search" label="ＳＥＡＲＣＨ" id="search" v-model="search"></v-text-field>
      <v-data-table
        :headers="headers"
        :items="items"
        class="history"
        item-key="his_id"
        :pagination.sync="pagination"
        loading="true"
        :search="search"
        :rows-per-page-items="[100, 200, {'text':'All','value':-1}]"
      >
        <template v-slot:items="props">
          <tr :class="props.item.flg">
            <td>{{ props.item.item_code }}</td>
            <td>{{ props.item.item_name }}</td>
            <td>{{ props.item.item_model }}</td>
            <td>{{ props.item.const_code }}</td>
            <td>{{ props.item.assy_code }}</td>
            <td>{{ props.item.user_name }}</td>
            <td>{{ props.item.add_time }}</td>
            <td>{{ props.item.count_num }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  data: function() {
    return {
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "品目形式", value: "item_model", align: "center" },
        { text: "工事番号", value: "const_code", align: "center" },
        { text: "親形式", value: "assy_code", align: "center" },
        { text: "作業者", value: "user_name", align: "center" },
        { text: "作業時刻", value: "add_time", align: "center" },
        { text: "集計数", value: "count_num", align: "center" }
      ],
      items: null,
      search: null,
      dataLoading: undefined,
      pagination: {
        sortBy: "add_time",
        descending: true,
        rowsPerPage: -1
      }
    };
  },
  created: async function() {
    await this.init();
    this.dataLoading = setInterval(() => {
      this.init();
    }, 1000);
  },
  methods: {
    async init() {
      await axios.get("/inventory/buzai-inv-his").then(res => {
        this.items = res.data;
      });
    }
  },
  beforeDestroy: function() {
    clearInterval(this.dataLoading);
  }
};
</script>

<style lang="scss" scoped>
.m {
  color: #eb9f87;
}
.v-card {
  margin-top: 1.5rem;
}
</style>

<template>
  <v-app light>
    <v-container>
      <h2>Welcom to Torks Web</h2>
      <hr>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <br>
      <v-expansion-panel expand>
        <v-expansion-panel-content class="teal lighten-3">
          <template v-slot:header>
            <div class="white--text title">部材リスト</div>
          </template>
          <v-card>
            <v-data-table
              :headers="headers"
              :items="item_list"
              :search="search"
              :rows-per-page-items="view_row_setting"
              :loading="loading"
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.itemCode }}</td>
                <td class="text-xs-center">{{ props.item.itemName }}</td>
                <td class="text-xs-center">{{ props.item.itemModelName }}</td>
                <td class="text-xs-center">{{ props.item.orderName }}</td>
                <td class="text-xs-center">{{ props.item.stockNum }}</td>
                <td class="text-xs-center">{{ props.item.reservationNum }}</td>
                <td class="text-xs-center">{{ props.item.price }}</td>
                <td class="justify-center layout px-0">
                  <v-icon class="mr-2" @click="editUser(props.item.index)">edit</v-icon>
                  <v-icon @click="openDeleteDialog(props.item.index)">delete</v-icon>
                </td>
              </template>
              <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning"
                outline
              >"{{ search }}" の検索結果なし</v-alert>
              <template slot="no-data">roading</template>
            </v-data-table>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    // logout: String
  },
  data: function() {
    return {
      info: null,
      item_list: null,
      headers: [
        { text: "品目コード", align: "center", value: "itemCode" },
        { text: "品名", align: "center", value: "itemName" },
        { text: "型式", align: "center", value: "itemModelName" },
        { text: "手配先", align: "center", value: "orderName" },
        { text: "在庫数", align: "center", value: "stockNum" },
        { text: "工事割当数", align: "center", value: "reservationNum" },
        { text: "金額", align: "center", value: "price", sortable: false }
      ],
      items: null,
      search: null,
      view_row_setting: [
        7,
        50,
        100,
        { text: "$vuetify.dataIterator.rowsPerPageAll", value: -1 }
      ],
      no_data_text: "loading ... ",
      loading: true
    };
  },
  created: function() {
    this.item_list = [];
    axios
      .get("http://192.168.179.2:8000/processMst")
      .then(response => {
        this.item_list = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.log("Error : " + response);
      });
  }
};
</script>

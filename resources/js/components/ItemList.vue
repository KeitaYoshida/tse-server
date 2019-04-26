<template>
  <v-app light>
    <v-container v-if="!nodata">
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <br>
      <v-toolbar color="teal lighten-3" dark>
        <v-toolbar-title>{{ setting.page_title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon v-on:click="sheet = !sheet">info</v-icon>
      </v-toolbar>
      <v-data-table
        :headers="setting.headers"
        :items="items"
        :search="search"
        :rows-per-page-items="setting.view_row_setting"
        :expand="expand"
        :loading="loading"
        :class="setting.page_class"
      >
        <template slot="items" slot-scope="props">
          <tr @click="expand_action(props)">
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
          </tr>
        </template>
        <template v-slot:expand="props">
          <const-matching-list :items_from_parents="children_machdata"></const-matching-list>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
          outline
        >"{{ search }}" の検索結果なし</v-alert>
      </v-data-table>
    </v-container>
    <v-container v-else>no-data</v-container>
    <v-bottom-sheet v-model="sheet">
      <v-list>
        <v-subheader>detail</v-subheader>
        <hr>
        <v-container grid-list-xs>
          手配工事を元に受入処理を行えます。対象の手配工事を選択すると手配一覧リストが表示されます。
          表示されたリストより受け入れる部材をチェックし、画面下部の受入ボタンを押下してください。受入数量の変更がある場合は、リスト右部の編集コマンドを押してください。
        </v-container>
      </v-list>
    </v-bottom-sheet>
  </v-app>
</template>

<script>
import ConstMatchingList from "./home/ConstMatchingList";
import mix_com from "../mixins/DataTableCommonSetting.js";

export default {
  mixins: [mix_com],
  components: {
    ConstMatchingList
  },
  data: function() {
    return {
      items: [],
      const_item_list: null,
      const_item_flg: false,
      children_machdata: null,
      search: null,
      sheet: false,
      loading: true,
      expand: false,
      expand_message: "",
      setting: null,
      nodata: false
    };
  },
  created: function() {
    if (this.dt_mix_com[this.$route.params.page_id] === undefined) {
      this.nodata = !this.nodata;
      return;
    }
    this.setting = Object.assign(
      this.dt_mix_com[this.$route.params.page_id],
      this.dt_mix_com.com
    );
    axios
      .get("http://192.168.179.2:8000/processMst")
      .then(response => {
        this.items = response.data;
        axios
          .get("http://192.168.179.2:8000/constOrderData")
          .then(response => {
            this.const_item_list = response.data;
            this.const_item_flg = true;
            this.loading = false;
          })
          .catch(error => {
            console.log("Error : " + response);
          });
      })
      .catch(error => {
        console.log("Error : " + response);
      });
  },
  methods: {
    expand_action(props) {
      if (this.const_item_flg === false) return;
      props.expanded = !props.expanded;
      this.children_machdata = this.const_item_list.filter(item => {
        return item.itemCode == props.item.itemCode;
      });

      this.expand_message = this.children_machdata;
      // this.expand_message = props.item.itemName;
    }
  }
};
</script>

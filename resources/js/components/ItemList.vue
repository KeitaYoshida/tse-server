<template>
  <v-app id="itemList">
    <v-container v-if="!nodata">
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <br>
      <v-toolbar color="teal lighten-3" dark>
        <v-toolbar-title>{{ setting.page_title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon v-on:click="sheet = !sheet">fas fa-question-circle</v-icon>
      </v-toolbar>
      <v-data-table
        :headers="setting.headers"
        :items="items"
        :search="search"
        :rows-per-page-items="setting.view_row_setting"
        :loading="loading"
        :class="setting.page_class"
      >
        <template slot="items" slot-scope="props">
          <tr>
            <td class="text-xs-center">{{ props.item.item_code }}</td>
            <td class="text-xs-center">{{ get__rev(props.item.item_rev) }}</td>
            <td class="text-xs-center">{{ props.item.item_name }}</td>
            <td class="text-xs-center">{{ props.item.item_model }}</td>
            <td class="text-xs-center">{{ props.item.last_num === -1 ? '未集計': props.item.last_num }}</td>
            <td class="align-center justify-center layout px-0">
              <v-btn icon flat>
                <v-icon
                  color="blue darken-1"
                  v-on:click.stop="addQrcode(props.item)"
                  class="icon-qr"
                >fas fa-qrcode</v-icon>
              </v-btn>
              <router-link :to="'/item/' + props.item.item_code + '/' + props.item.item_rev">
                <v-btn icon flat>
                  <v-icon color="orange darken-1" class="icon-edit">fas fa-edit</v-icon>
                </v-btn>
              </router-link>
            </td>
          </tr>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
          outline
        >"{{ search }}" の検索結果なし</v-alert>
      </v-data-table>
      <template v-if="config.length!==0">
        <div id="qr-code">
          <v-toolbar color="teal lighten-3" dark>
            <v-toolbar-title>QRコード発行</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon @click="download">fas fa-download</v-icon>
          </v-toolbar>
          <v-layout row wrap id="qrlist" ref="qrlist">
            <v-flex v-for="(qrlist, index) in config" v-bind:key="index" d-flex xs3>
              <item_qr :qrlist="qrlist"></item_qr>
            </v-flex>
          </v-layout>
        </div>
        <div id="qr-print" ref="print" class="printout">
          <v-layout row wrap id="qrlist_print">
            <v-flex v-for="(qrlist, index) in config" v-bind:key="index" d-flex xs3>
              <item_qr :qrlist="qrlist"></item_qr>
            </v-flex>
          </v-layout>
        </div>
      </template>
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
    </v-container>
  </v-app>
</template>

<script>
import mix_com from "../mixins/DataTableCommonSetting.js";
import item_qr from "./item/item_qr";
import { createPdfFromHtml } from "./bin/makepdf.js";

export default {
  mixins: [mix_com],
  components: {
    item_qr
  },
  data: function() {
    return {
      items: [],
      const_item_list: null,
      search: null,
      sheet: false,
      loading: true,
      setting: null,
      nodata: false,
      config: [],
      output: null
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
      .get("/items/itemlist")
      .then(response => {
        this.items = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.log("Error : " + error);
      });
  },
  methods: {
    addQrcode(d) {
      if (this.config.length < 16) {
        this.config.push({
          value: "http://192.168.13.103:8000/item/" + d.itemCode,
          id: d.itemCode,
          name: d.itemName,
          model: d.itemModelName
        });
      } else {
        this.download();
        this.config = [];
        this.config.push({
          value: "http://192.168.13.103:8000/item/" + d.itemCode,
          id: d.itemCode,
          name: d.itemName,
          model: d.itemModelName
        });
      }
    },
    download() {
      // console.log(this.$refs.print);
      // createPdfFromHtml(this.$refs.data);
      createPdfFromHtml(this.$refs.print);
    }
  }
};
</script>

<style lang="scss" scoped>
.printout {
  position: fixed;
  height: 200vh;
  padding: 10px;
}
</style>

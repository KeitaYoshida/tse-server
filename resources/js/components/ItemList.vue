<template>
  <v-app>
    <v-container v-if="!nodata">
      <h1>部材</h1>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        @change="searchChange()"
        single-line
        hide-details
      ></v-text-field>
      <br />
      <v-data-table
        :headers="setting.headers"
        :items="items"
        :search="search"
        :rows-per-page-items="setting.view_row_setting"
        :loading="loading"
        :class="setting.page_class"
      >
        <template v-slot:items="props">
          <tr>
            <td class="text-xs-center">{{ props.item.item_code }}</td>
            <td class="text-xs-center">{{ get__rev(props.item.item_rev) }}</td>
            <td class="text-xs-center">{{ props.item.item_name }}</td>
            <td class="text-xs-center">{{ props.item.item_model }}</td>
            <td class="text-xs-center">{{ props.item.last_num === -1 ? '未集計': props.item.last_num }}</td>
            <td class="align-center justify-center layout px-0">
              <QrButton @act="addQrcode" :rowdata="props"></QrButton>
              <router-link :to="'/item/' + props.item.item_code + '/' + props.item.item_rev">
                <v-icon color="orange darken-1" class="icon-edit">fas fa-edit</v-icon>
              </router-link>
            </td>
          </tr>
        </template>
      </v-data-table>
      <v-bottom-sheet v-model="sheet">
        <v-list>
          <v-subheader>detail</v-subheader>
          <hr />
          <v-container grid-list-xs>
            手配工事を元に受入処理を行えます。対象の手配工事を選択すると手配一覧リストが表示されます。
            表示されたリストより受け入れる部材をチェックし、画面下部の受入ボタンを押下してください。受入数量の変更がある場合は、リスト右部の編集コマンドを押してください。
          </v-container>
        </v-list>
      </v-bottom-sheet>
      <v-dialog v-model="additem" transition="dialog-transition" width="36%">
        <AddItem :data="dialog_data" @rt="rtAdd" v-if="additem"></AddItem>
      </v-dialog>
      <v-dialog
        v-model="a4"
        scrollable
        persistent
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="a4 = !a4">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click="print__pdf('makepdf')">ＰＲＩＮＴ</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text class="a4-back">
            <div id="makepdf" class="a4-area">
              <div class="a4" v-for="(row, rownum) in configs" :key="rownum">
                <v-layout row wrap align-start class="r2v5">
                  <v-flex v-for="(item, index) in row" v-bind:key="index" xs6 class="qr-item">
                    <item_qr :qrlist="item"></item_qr>
                  </v-flex>
                </v-layout>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
    <v-bottom-nav value="value" active.sync="value" fixed>
      <v-btn @click="additem=!additem">
        <span>New Item</span>
        <v-icon>fas fa-plus-square</v-icon>
      </v-btn>
      <v-btn @click="a4 = !a4">
        <span>QR FILE</span>
        <v-icon>far fa-sticky-note</v-icon>
      </v-btn>
      <v-btn @click="sheet = !sheet">
        <span>INFO</span>
        <v-icon>fas fa-question-circle</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import AddItem from "./com/ComFormDialog";
import mix_com from "../mixins/DataTableCommonSetting.js";
import item_qr from "./item/item_qr";
import QrButton from "./ItemList/QrButton";

export default {
  mixins: [mix_com],
  components: {
    item_qr,
    QrButton,
    AddItem
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
      configs: [],
      output: null,
      a4: false,
      additem: false,
      dialog_data: {
        title: "部材登録",
        message: "",
        data: [
          {
            name: "item_code",
            label: "品目コード",
            id: "item_code",
            hint: "",
            value: "",
            type: ""
          },
          {
            name: "item_rev",
            label: "品目ＲＥＶ",
            id: "item_rev",
            hint: "ハイフン(-)を除いた整数値を入力してください　例 01-03 → 103",
            value: "0",
            type: "number"
          }
        ]
      }
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
    addQrcode(p) {
      let d = p.item;
      this.config.push({
        value:
          "http://192.168.13.103:8000/item/" + d.item_code + "/" + d.item_rev,
        id: d.item_code,
        name: d.item_name,
        model: d.item_model
      });
      this.configs = this.config.divide(10);
    },
    rtAdd(d) {
      let iid = d.data[0].value;
      let irev = d.data[1].value;
      this.search = iid;
      this.additem = !this.additem;
      this.items.push({
        item_code: iid,
        item_rev: irev
      });
      axios.get("/db/items/add/item/" + iid + "/" + irev);
    },
    searchChange() {
      this.dialog_data.data[0].value = this.search;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

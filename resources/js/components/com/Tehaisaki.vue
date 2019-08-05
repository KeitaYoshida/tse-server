<template>
  <v-app>
    <v-container grid-list-xs class="mb-5">
      <h1 class="mb-3">取引先企業リスト</h1>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        class="mb-3"
      ></v-text-field>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        :pagination.sync="pagination"
        loading="true"
        :search="search"
        v-if="items"
      >
        <template v-slot:items="props">
          <tr class="indigo--text text--darken-3">
            <td class="text-xs-center">
              <template v-if="mode==='del'">
                <v-chip
                  color="error"
                  outline
                  @click="del(props.item.vendor_code)"
                >{{ props.item.vendor_code }}を削除</v-chip>
              </template>
              <template v-else-if="mode==='togo_select'">
                <v-chip color="success" dark @click="togo_select_act(props.item)">選択</v-chip>
              </template>
              <template v-else-if="mode==='togo_select_add'">
                <v-chip color="warning" outline @click="togo_chk(props.item)">
                  <template v-if="target.vendor_code === props.item.vendor_code">統合元</template>
                  <template v-else>{{ target.vendor_code }}に統合</template>
                </v-chip>
              </template>
              <template v-else>
                <v-chip outline color="primary">{{ props.item.vendor_code }}</v-chip>
              </template>
            </td>
            <td class="text-xs-center">
              <v-btn
                flat
                color="primary"
                @click="changeVal(props.item, 'com_name', '会社名')"
              >{{ props.item.com_name }}</v-btn>
            </td>
            <td class="text-xs-center">
              <v-btn
                flat
                color="primary"
                small
                @click="changeVal(props.item, 'com_post', '郵便番号')"
              >{{ rtMisettei(props.item.com_post) }}</v-btn>
              <p class="mini"></p>

              <v-btn
                flat
                color="primary"
                small
                @click="changeVal(props.item, 'com_add', '住所')"
              >{{ rtMisettei(props.item.com_add) }}</v-btn>
              <p></p>
            </td>
            <td class="text-xs-center">
              <v-btn
                flat
                color="primary"
                small
                @click="changeVal(props.item, 'com_tel', '電話番号')"
              >{{ rtMisettei(props.item.com_tel) }}</v-btn>
              <p class="mini"></p>
              <v-chip
                flat
                color="primary"
                outline
                small
                class="no-border"
                @click="changeVal(props.item, 'com_mail', 'メールアドレス')"
              >{{ rtMisettei(props.item.com_mail) }}</v-chip>
              <p></p>
            </td>
            <td class="text-xs-center">
              <v-btn
                flat
                color="primary"
                @click="changeVal(props.item, 'com_tanto', '担当者名')"
              >{{ rtMisettei(props.item.com_tanto) }}</v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog v-model="vfm" :overlay="false" max-width="500px" transition="dialog-transition">
      <ComForm :data="fm" v-if="fm" @rt="rtChangeVal"></ComForm>
    </v-dialog>
    <v-dialog v-model="vchk" :overlay="false" max-width="500px" transition="dialog-transition">
      <ComAlert :data="chk" v-if="chk" @rt="togo"></ComAlert>
    </v-dialog>
    <v-bottom-nav fixed :active.sync="btm_select" :value="true">
      <v-btn flat value="cnt" @click="mode='togo_select'" v-if="mode==='def'">
        <span>統合</span>
        <v-icon>fas fa-cubes</v-icon>
      </v-btn>
      <v-btn flat value="cnt" disabled v-else-if="mode==='togo_select'" color="success">
        <span>統合元を選択</span>
        <v-icon>fas fa-cubes</v-icon>
      </v-btn>
      <v-btn
        flat
        value="cnt"
        v-else-if="mode==='togo_select_add'"
        color="warning"
        @click="mode='def'"
      >
        <span>統合モード解除</span>
        <v-icon>fas fa-cubes</v-icon>
      </v-btn>
      <v-btn flat value="all" @click="mode='del'" v-if="mode!=='del'">
        <span>削除モード</span>
        <v-icon>far fa-trash-alt</v-icon>
      </v-btn>
      <v-btn flat value="all" @click="mode='def'" v-else>
        <span>削除モード解除</span>
        <v-icon>far fa-trash-alt</v-icon>
      </v-btn>
      <v-btn flat value="add">
        <span>新規追加</span>
        <v-icon>far fa-trash-alt</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import ComForm from "./../com/ComFormDialog";
import ComAlert from "./../com/ComCheckDialog";

export default {
  props: [],
  components: { ComForm, ComAlert },
  data: function() {
    return {
      items: null,
      headers: [
        { text: "企業コード", value: "vendor_code", align: "center" },
        { text: "会社名", value: "com_name", align: "center" },
        { text: "〒住所", value: "com_post", align: "center" },
        { text: "電話番号/メール", value: "com_tel", align: "center" },
        { text: "担当者名", value: "com_tanto", align: "center" }
      ],
      pagination: {
        rowsPerPage: 20,
        rowsPerPageItems: [20, 50]
      },
      search: "",
      fm: null,
      vfm: false,
      vchk: false,
      chk: null,
      btm_select: "",
      mode: "def"
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/db/vendor/list").then(res => {
        this.items = res.data;
      });
    },
    rtMisettei(val) {
      if (val === null || val === "") {
        return "-";
      }
      return val;
    },
    changeVal(i, key, title) {
      this.fm = {
        data: [
          {
            name: key,
            label: title,
            value: i[key]
          }
        ],
        title: title,
        message: ""
      };
      this.vfm = !this.vfm;
      this.target = i;
    },
    rtChangeVal(d) {
      let vId = this.target.vendor_code;
      let col = d.data[0].name;
      let val = d.data[0].value;
      axios.get("/db/vendor/update/one/col/" + vId + "/" + col + "/" + val);
      this.target[col] = val;
      this.vfm = !this.vfm;
      this.fm = null;
      this.target = null;
    },
    togo_select_act(i) {
      this.target = i;
      this.mode = "togo_select_add";
    },
    togo_chk(i) {
      let tarCd = this.target.vendor_code;
      let selCd = i.vendor_code;
      if (tarCd === selCd) return;
      let tarName = this.target.com_name;
      let selName = i.com_name;
      this.chk = {
        title: "取引先データを統合します。",
        message: "統合元のデータは完全に削除されます",
        data_v2: [["統合元", "統合先"], [selCd, tarCd], [selName, tarName]]
      };
      this.vchk = true;
    },
    async togo() {
      this.vchk = false;
      if (this.chk.data_v2 === null) return;
      let tarCd = this.chk.data_v2[1][1];
      let selCd = this.chk.data_v2[1][0];
      await axios.get("/db/vendor/togo/" + tarCd + "/" + selCd).then(res => {
        this.del(selCd);
      });
    },
    del(selCd) {
      axios.get("/db/vendor/del/" + selCd).then(res => {
        this.chk = {
          title: "処理が完了しました",
          message: "",
          data_v2: null
        };
        this.vchk = true;
      });
      this.items = this.items.filter(ar => {
        return ar.vendor_code !== selCd;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
.v-chip.no-border {
  border: none;
}
</style>

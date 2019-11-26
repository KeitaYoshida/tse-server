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
            <td class="text-xs-center">
              <v-btn
                color="success"
                outline
                @click="$router.push('/inv/his/heading/' + props.item.inv_id)"
              >表紙</v-btn>
            </td>
            <td class="text-xs-center">
              <span class="base_info">{{ props.item.inv_date.slice(2,-3) }}</span>
              <br />
              <span class="base_info">{{ props.item.make_user }}</span>
            </td>
            <td class="text-xs-center">
              <span>{{ returnTotalPrice(props)}}</span>
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
              <span>{{ Math.round(props.item.etc_price).toLocaleString() }}</span>
            </td>
            <td>
              <v-btn color="warning" outline @click="setEtcData(props)">
                <span>処理</span>
                <v-icon right small>fas fa-history</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
        <template v-slot:expand="props">
          <v-layout wrap>
            <v-flex xs3 pa-3>
              <v-btn color="success" outline block @click="addEtcData(props.item.inv_id)">その他集計項目追加</v-btn>
            </v-flex>
            <v-flex xs3 pa-3>
              <v-btn
                color="primary"
                outline
                block
                @click="$router.push('/inv/his/worker_history/' + props.item.inv_date)"
              >集計履歴</v-btn>
            </v-flex>
            <v-flex xs3 pa-3>
              <v-btn
                color="primary"
                outline
                block
                @click="$router.push('/inv/his/cheker_history/' + props.item.inv_date)"
              >調整履歴</v-btn>
            </v-flex>
            <v-flex xs3 pa-3>
              <v-btn color="primary" outline block>差分データマージ</v-btn>
            </v-flex>
          </v-layout>
          <v-layout wrap v-if="etcData.length > 0">
            <v-flex xs2 class="text-xs-center detail-title"></v-flex>
            <v-flex xs2 class="text-xs-center detail-title">大項目</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">中項目</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">小項目</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">金額</v-flex>
            <v-flex xs2 class="text-xs-center detail-title">適用</v-flex>
          </v-layout>
          <v-layout wrap py-3 v-for="(etc, index) in etcData" :key="index">
            <v-flex xs2 class="text-xs-center detail-act">
              <v-btn small color="primary" outline icon @click="editEtcSet(etc)">
                <v-icon small>fas fa-edit</v-icon>
              </v-btn>
              <v-btn
                small
                color="primary"
                outline
                icon
                @click="addEtcRow(etc.inv_id, etc.inv_etc_id, false)"
              >
                <v-icon small>fas fa-arrow-up</v-icon>
              </v-btn>
              <v-btn
                small
                color="primary"
                outline
                icon
                @click="addEtcRow(etc.inv_id, etc.inv_etc_id)"
              >
                <v-icon small>fas fa-arrow-down</v-icon>
              </v-btn>
              <v-btn small color="warning" outline icon>
                <v-icon small>fas fa-trash-alt</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs2 class="text-xs-center detail-val dai">{{ etc.main_title }}</v-flex>
            <v-flex xs2 class="text-xs-center detail-val tyu">{{ etc.title }}</v-flex>
            <v-flex xs2 class="text-xs-center detail-val sho">{{ etc.detail }}</v-flex>
            <v-flex xs2 class="text-xs-center detail-val val">
              <span>
                <v-chip small outline>行番: {{ etc.row + 1 }}</v-chip>
              </span>
              {{ etc.value }}
            </v-flex>
            <v-flex xs2 class="text-xs-center detail-val teki">{{ etc.memo }}</v-flex>
          </v-layout>
        </template>
      </v-data-table>
    </v-container>
    <v-dialog v-model="editEtc" max-width="500px" transition="dialog-transition">
      <ComEditEtc :data="editData" @rt="returnEditData" v-if="editEtc" />
    </v-dialog>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ComEditEtc from "@/components/com/ComFormDialog";

export default {
  props: [],
  components: {
    ComEditEtc
  },
  data: function() {
    return {
      editEtc: false,
      editData: {},
      hisList: null,
      headers: [
        { text: "", value: "", align: "center", sortable: false },
        { text: "登録日／登録者", value: "inv_date", align: "center" },
        { text: "棚卸し集計額", value: "inv_date", align: "center" },
        { text: "部材集計／理論額", value: "items_price", align: "center" },
        {
          text: "仕掛部材／工数金額",
          value: "theoretical_price",
          align: "center"
        },
        {
          text: "その他集計額",
          value: "",
          align: "center",
          sortable: false
        },
        { text: "", value: "", align: "center", sortable: false }
      ],
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsPerPageItems: [10, 20]
      },
      etcData: [],
      target: null
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
      let hisList = await axios.get("/db/inventory/sum/history/list");
      this.hisList = hisList.data;
    },
    async setEtcData(props) {
      if (props.expanded) {
        props.expanded = !props.expanded;
        return;
      }
      this.target = props.item;
      let inv_id = props.item.inv_id;
      await this.resetEtcView(inv_id);
      props.expanded = !props.expanded;
    },
    async addEtcData(inv_id, setPost = null) {
      let post =
        setPost !== null
          ? setPost
          : {
              inv_id: inv_id,
              main_title: "-",
              title: "-",
              detail: "-",
              value: "0",
              row: 0,
              user_name: this.user.name
            };
      let add = await axios.post("/db/inv/etc/add/" + inv_id, post);
      await this.resetEtcView(inv_id);
    },
    async addEtcRow(inv_id, inv_etc_id, add = true) {
      let num = add ? 1 : -1;
      await axios.get("/db/inv/etc/increment/" + inv_etc_id + "/" + num);
      await this.resetEtcView(inv_id);
    },
    async resetEtcView(inv_id) {
      let res = await axios.get("/db/inv/etc/get/list/" + inv_id);
      this.etcData = res.data;
      let price = 0;
      for (let etc of this.etcData) {
        price = price + Number(etc.value);
      }
      await axios.get("/db/inv/list/set/etc/price/" + inv_id + "/" + price);
      this.target.etc_price = price;
    },
    async editEtcSet(etc) {
      this.editData = {
        title: "その他集計データ編集",
        message: "",
        data: [
          {
            label: "大項目",
            value: etc.main_title
          },
          {
            label: "中項目",
            value: etc.title
          },
          {
            label: "小項目",
            value: etc.detail
          },
          {
            label: "金額",
            type: "number",
            value: etc.value
          },
          {
            label: "適用",
            value: etc.memo
          }
        ],
        inv_id: etc.inv_id,
        inv_etc_id: etc.inv_etc_id
      };
      this.editEtc = !this.editEtc;
    },
    async returnEditData(data) {
      let inv_id = data.inv_id;
      let inv_etc_id = data.inv_etc_id;
      let main_title = data.data[0].value;
      let title = data.data[1].value;
      let detail = data.data[2].value;
      let value = data.data[3].value;
      let memo = data.data[4].value;
      let setData = {
        main_title: main_title,
        title: title,
        detail: detail,
        value: value,
        memo: memo
      };
      await axios.post("/db/inv/etc/edit/" + inv_etc_id, setData);
      await this.resetEtcView(inv_id);
      this.editEtc = !this.editEtc;
    },
    returnTotalPrice(props) {
      let item_price = Number(props.item.items_price);
      let working_price = Number(props.item.working_price);
      let process_price = Number(props.item.process_price);
      let etc_price = Number(props.item.etc_price);
      return Math.round(
        item_price + working_price + process_price + etc_price
      ).toLocaleString();
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
span.base_info {
  font-size: 1rem;
}
</style>

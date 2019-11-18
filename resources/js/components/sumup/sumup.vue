<template>
  <v-app>
    <v-container fluid id="inventory">
      <v-layout wrap v-if="mode==='def'">
        <v-flex lg2 xs3 pt-3 px-4>
          <v-btn color="primary" @click="mode='history'" block outline>履歴</v-btn>
        </v-flex>
        <v-flex lg2 xs3 pt-3 px-4>
          <v-btn color="primary" to="/workinglist" block outline>仕掛り</v-btn>
        </v-flex>
        <v-flex lg3 xs6>
          <v-text-field
            :value="search"
            @input="SEARCH_INVENTORY($event)"
            append-icon="search"
            label="検索[発注番号・品目コード]"
            clearable
            autofocus
          ></v-text-field>
        </v-flex>
        <v-flex lg2 xs4 px-3>
          <v-text-field
            v-model="fixNum"
            label="数量"
            prepend-inner-icon="fas fa-sort-numeric-up"
            type="number"
            clearable
            hint="部材集計時のメッセージに入力値を登録します"
          ></v-text-field>
        </v-flex>
        <v-flex lg3 xs8 px-3>
          <v-text-field
            v-model="fixMassage"
            label="コメント"
            prepend-inner-icon="far fa-comment"
            clearable
            hint="部材集計時のメッセージに入力値を登録します"
          ></v-text-field>
        </v-flex>
        <v-flex xs5 pt-3 pr-3>
          <v-chip outline color="green darken-3">工事リスト</v-chip>
          <ConstList @act="selectConst()"></ConstList>
        </v-flex>
        <v-flex xs7 pt-3 pl-3>
          <ItemList :set_num="fixNum" :massage="fixMassage"></ItemList>
        </v-flex>
        <v-flex xs3 mt-3>
          <v-chip outline color="green darken-3">集計数</v-chip>
          <template v-if="inv.status">
            <PieChart :d="setNumChart()" :height="240"></PieChart>
          </template>
        </v-flex>
        <v-flex xs3 mt-3>
          <v-chip outline color="green darken-3">集計金額</v-chip>
          <template v-if="inv.status">
            <PieChart :d="setPriceChart()" :height="240"></PieChart>
          </template>
        </v-flex>
        <v-flex xs6 v-if="inv.status" mt-3>
          <v-chip outline color="green darken-3">集計差額</v-chip>
          <v-chip outline color="green darken-3">{{ Math.round( margePrice()).toLocaleString() }}</v-chip>
          <BarChart :d="setBarChart()" :height="240"></BarChart>
        </v-flex>
      </v-layout>
      <v-container grid-list-xs v-else-if="mode==='const'">
        <ConstUkeire @rt="mode='def'"></ConstUkeire>
      </v-container>
      <v-container grid-list-xs v-else-if="mode==='history'">
        <History @rt="mode='def'"></History>
      </v-container>
    </v-container>
    <v-dialog v-model="finCheck" max-width="500px">
      <FinCheckForm :data="finData" v-if="finCheck" @rt="rtFinCheckPass"></FinCheckForm>
    </v-dialog>
    <v-dialog v-model="oldCheck" max-width="500px">
      <FinCheckForm :data="oldData" v-if="oldCheck" @rt="rtOldCheckPass"></FinCheckForm>
    </v-dialog>
    <v-bottom-nav fixed :active.sync="main_action" v-model="main_action">
      <v-btn flat value="inv" color="primary">
        <span>棚卸し集計</span>
        <v-icon>far fa-list-alt</v-icon>
      </v-btn>
      <v-btn flat value="cnt" color="primary" @click="finCheck=true">
        <span>完了データ登録</span>
        <v-icon>fas fa-stamp</v-icon>
      </v-btn>
      <v-btn flat value="all" color="primary" @click="oldCheck=true">
        <span>過去データ</span>
        <v-icon>fas fa-history</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ItemList from "@/components/sumup/itemList";
import ConstList from "@/components/sumup/constList";
import ConstUkeire from "@/components/sumup/constUkeire";
import PieChart from "@/components/com/PieChart";
import BarChart from "@/components/com/BarChart";
import History from "@/components/sumup/history";
import FinCheckForm from "@/components/com/ComFormDialog";

export default {
  props: [],
  components: {
    ItemList,
    ConstList,
    ConstUkeire,
    PieChart,
    BarChart,
    History,
    FinCheckForm
  },
  data: function() {
    return {
      mode: "def",
      fixMassage: "",
      fixNum: "",
      main_action: null,
      finCheck: null,
      finData: {
        title: "棚卸し完了データ登録",
        message:
          "※完了データは保存され進行データはリセットされます<br />完了用パスフレーズを入力して下さい",
        data: [
          {
            name: "fin_pass",
            label: "パスフレーズ",
            id: "fin_pass",
            hint: null,
            type: null,
            value: null
          }
        ]
      },
      oldCheck: null,
      oldData: {
        title: "完了済みデータ閲覧",
        message: "閲覧・調整用パスフレーズを入力して下さい",
        data: [
          {
            name: "view_pass",
            label: "パスフレーズ",
            id: "view_pass",
            hint: null,
            type: null,
            value: null
          }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      search: state => state.search.inventory,
      inv: state => state.inventory
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions(["SEARCH_INVENTORY", "INVENTORY_SET"]),
    init() {},
    setNumChart() {
      let i = this.inv.status;
      return {
        labels: ["集計済", "未集計"],
        datasets: [
          {
            backgroundColor: ["#81C784", "#E8F5E9"],
            data: [i.finNum, i.allNum - i.finNum]
          }
        ]
      };
    },
    setPriceChart() {
      let i = this.inv.status;
      return {
        labels: ["集計済", "未集計"],
        datasets: [
          {
            backgroundColor: ["#81C784", "#E8F5E9"],
            data: [i.finPrice, i.allPrice - i.finPrice]
          }
        ]
      };
    },
    setBarChart() {
      let i = this.inv.status;
      return {
        labels: ["総額", "集計済", "差額"],
        datasets: [
          {
            label: "金額",
            backgroundColor: ["#81C784", "#81C784", "#81C784"],
            data: [i.allPrice, i.finPrice, i.allPrice - i.finPrice]
          }
        ]
      };
    },
    margePrice() {
      let i = this.inv.status;
      return i.finPrice - i.allPrice;
    },
    selectConst() {
      this.mode = "const";
      this.INVENTORY_SET({});
    },
    rtFinCheckPass(d) {
      this.finCheck = !this.finCheck;
      const FinPass = "fin pass";
      let inputPass = d.data[0].value;
      if (FinPass !== inputPass) {
        alert("パスフレーズが間違っています");
      } else {
        this.$router.push("/sumup/fin");
      }
    },
    rtOldCheckPass(d) {
      this.oldCheck = !this.oldCheck;
      const OldPass = "old pass";
      let inputPass = d.data[0].value;
      if (OldPass !== inputPass) {
        alert("パスフレーズが間違っています");
      } else {
        this.$router.push("/sumup/history");
      }
    }
  },
  beforeDestroy: function() {
    this.INVENTORY_SET({});
  }
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #fff;
}
#inventory {
  margin-bottom: 64px;
}
</style>
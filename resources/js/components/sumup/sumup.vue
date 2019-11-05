<template>
  <v-app>
    <v-container fluid>
      <v-layout wrap v-if="mode==='def'">
        <v-flex xs3>
          <v-text-field
            :value="search"
            @input="SEARCH_INVENTORY($event)"
            append-icon="search"
            label="検索"
            clearable
            autofocus
          ></v-text-field>
        </v-flex>
        <v-flex xs4 class="px-3">
          <v-text-field
            v-model="fixMassage"
            label="固定メッセージ"
            append-icon="search"
            clearable
            hint="部材集計時のメッセージに入力値を登録します"
          ></v-text-field>
        </v-flex>
        <v-flex xs5 pt-3 pl-2>
          <v-btn color="success" @click="mode='history'">履歴</v-btn>
          <v-btn color="success" to="/workingList">仕掛り</v-btn>
        </v-flex>
        <v-flex xs5 pt-3 pr-3>
          <v-chip outline small color="green darken-3">工事リスト</v-chip>
          <ConstList @act="selectConst()"></ConstList>
        </v-flex>
        <v-flex xs7 pt-3 pl-3>
          <v-chip outline small color="green darken-3">部材リスト</v-chip>
          <ItemList :massage="fixMassage"></ItemList>
        </v-flex>
        <v-flex xs3 mt-3>
          <v-chip outline small color="green darken-3">集計数</v-chip>
          <template v-if="inv.status">
            <PieChart :d="setNumChart()" :height="240"></PieChart>
          </template>
        </v-flex>
        <v-flex xs3 mt-3>
          <v-chip outline small color="green darken-3">集計金額</v-chip>
          <template v-if="inv.status">
            <PieChart :d="setPriceChart()" :height="240"></PieChart>
          </template>
        </v-flex>
        <v-flex xs6 v-if="inv.status" mt-3>
          <v-chip outline small color="green darken-3">集計差額</v-chip>
          <v-chip
            outline
            small
            color="green darken-3"
          >{{ Math.round( margePrice()).toLocaleString() }}</v-chip>
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

export default {
  props: [],
  components: {
    ItemList,
    ConstList,
    ConstUkeire,
    PieChart,
    BarChart,
    History
  },
  data: function() {
    return {
      mode: "def",
      fixMassage: ""
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
</style>
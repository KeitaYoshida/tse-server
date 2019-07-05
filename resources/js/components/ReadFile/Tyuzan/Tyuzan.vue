<template>
  <div id="main">
    <transition name="fade">
      <Loading v-if="loading"></Loading>
      <div v-else>
        <h1>受注残データ読込</h1>
        <p>受注残データの読込が完了しました。</p>
        <p>更新データ</p>
        <DataTable :items="items" :headers="headers" v-if="items"></DataTable>
      </div>
    </transition>
    <v-bottom-nav fixed :value="true">
      <v-btn flat color="primary" dark @click="clear()">
        <span>別ファイルを読み込む</span>
        <v-icon>fas fa-arrow-alt-circle-left</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import Loading from "./../../com/Loading";
import DataTable from "./../../com/DataTable";

export default {
  components: {
    Loading,
    DataTable
  },
  props: ["tyuzan", "type", "col"],
  data: function() {
    return {
      loading: true,
      items: null,
      headers: [
        { text: "工事番号", value: "const_code", align: "center" },
        { text: "取引先名", value: "customer", align: "center" },
        { text: "受注区分", value: "rcpt_class", align: "center" }
      ]
    };
  },
  created: function() {
    this.init();
  },
  mounted: function() {},
  methods: {
    async init() {
      let d = await this.make_data();
      this.items = d;
      this.up_data(d);
    },
    up_data(d) {
      axios.post("/db/recept/tyuzan/up/", d).then(res => {
        this.loading = false;
      });
    },
    async make_data() {
      let d = [];
      this.tyuzan.forEach((ar, index) => {
        let c = ar["受注番号"];
        let ct = c.slice(0, 3);
        let ce = ct + "1" + c.slice(3, -2);
        if (ce == 1) return;
        d.push({
          const_code: ce,
          customer: ar[this.col].rtrim(),
          rcpt_class: ar["受注区分"].rtrim()
        });
      });
      return d;
    },
    clear() {
      this.$emit("clear");
    }
  }
};
</script>

<style lang="scss" scoped>
#message {
  height: 100%;
  justify-content: center;
  align-items: center;
}
#main {
  height: 100%;
  margin-bottom: 3rem;
}
</style>

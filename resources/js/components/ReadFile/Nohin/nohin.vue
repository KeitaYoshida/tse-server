<template>
  <div id="main">
    <transition name="fade">
      <Loading v-if="loading"></Loading>
      <div v-else>
        <h1>納品データ読込</h1>
        <p>納品データの読込が完了しました。</p>
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
export default {
  props: ["csv"],
  components: {},
  data: function() {
    return {};
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      const CODE_ROW = 1;
      const SET_DAY_ROW = 2;
      const NUM_ROW = 3;
      let list = [];
      this.csv.forEach(ar => {
        list.push({
          detail_code: ar[CODE_ROW],
          last_nohin_day: ar[SET_DAY_ROW],
          nohin_num: ar[NUM_ROW]
        });
      });
      axios.post("/db/recept/nohin/list/", list).then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

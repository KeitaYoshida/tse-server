<template>
  <v-app>
    <v-container fluid id="merge">
      <v-layout row wrap>
        <v-flex xs12>
          <h2>
            <span class="primary--text before" @click="$router.push('/sumup/history')">過去データ</span> -->
            <span>棚卸し集計データ総合</span>
          </h2>
        </v-flex>
        <v-flex xs10 offset-xs1>
          <v-alert
            outline
            color="error"
            icon="fas fa-exclamation-triangle"
            large
            :value="true"
            class="mt-5"
          >
            <span class="display-1 font-weight-black pb-5">WORNING</span>
            <hr color="error" />
            <p class="headline">
              データは
              <strong>不可逆的</strong>に統合されます(訂正・戻り処理はできません)
            </p>
            <p class="headline">
              統合は実在庫と棚卸し在庫の
              <strong>集計差数</strong>を元に行われます
            </p>
            <p class="headline">
              例）[棚卸時実在庫数：１０個、集計数：９個]
              <strong>『現在の在庫数』</strong> → −１
            </p>
            <p class="headline">
              統合処理により不足が発生した部材は、次回手配時に
              <strong>自動的に加算され</strong>手配が行われます
            </p>
            <p class="headline">
              また、余剰分が発生した場合次回手配時に
              <strong>余剰分が差し引かれて</strong>手配されます
            </p>
            <p class="headline">
              <strong>統合作業は一度しか行なえません十分に精査の上、統合処理を行って下さい</strong>
            </p>
            <v-btn
              color="error"
              block
              large
              outline
              class="mt-4"
              :loading="loading"
              @click="action()"
            >統合</v-btn>
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      loading: true,
      items: []
    };
  },
  computed: {
    ...mapState({
      target: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    async init() {
      let date = this.$route.params.date;
      let res = await axios.get("/db/inv/his/items/" + date);
      this.items = res.data.filter(item => item.inv_num != item.last_num);
      this.loading = false;
    },
    async action() {
      let date = this.$route.params.date;
      let post = this.items.map(item => {
        return {
          item_id: item.item_id,
          increment: Number(item.inv_num - item.last_num)
        };
      });
      let res = await axios.post("/db/inv/merge/" + date, post);
      alert("処理が完了しました");
      this.$router.push("/sumup/history");
      console.log(post);
    }
  }
};
</script>

<style lang="scss" scoped>
#merge {
  margin-bottom: 64px;
}
</style>  
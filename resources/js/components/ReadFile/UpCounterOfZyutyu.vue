<template>
  <v-card class="counter">
    <v-card-text>
      <v-layout wrap>
        <v-flex xs6 class="col pr-3">ダウンロード日</v-flex>
        <v-flex xs6 class="val pr-3">{{ day }}</v-flex>
        <v-flex xs6 class="col pr-3">総件数</v-flex>
        <v-flex xs6 class="val pr-3">{{ count.all }}</v-flex>
        <v-flex xs6 class="col pr-3">新規件数</v-flex>
        <v-flex xs6 class="val pr-3">{{ count.new }}</v-flex>
        <v-flex xs6 class="col pr-3">更新件数</v-flex>
        <v-flex xs6 class="val pr-3">{{ count.cng }}</v-flex>
        <v-flex xs6 class="col pr-3">削除・不明件数</v-flex>
        <v-flex xs6 class="val pr-3">{{ count.del }}</v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["day", "count"]
};
</script>

<style lang="scss" scoped>
.col {
  text-align: right;
}
.v-card.counter {
  font-size: 1rem;
}
</style>

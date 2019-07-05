<template>
  <v-form class="tyuzan_view_selector">
    <h3>受注区分</h3>
    <v-layout row wrap class="ml-2">
      <v-flex xs2>
        <v-checkbox v-model="check.buhin" label="部品" color="indigo" @change="remakeView()"></v-checkbox>
      </v-flex>
      <v-flex xs2>
        <v-checkbox v-model="check.shuri" label="修理" color="indigo" @change="remakeView()"></v-checkbox>
      </v-flex>
      <v-flex xs2>
        <v-checkbox v-model="check.seihin" label="製品" color="indigo" @change="remakeView()"></v-checkbox>
      </v-flex>
      <v-flex xs2>
        <v-checkbox v-model="check.mi" label="未" color="indigo" @change="remakeView()"></v-checkbox>
      </v-flex>
      <v-flex xs2>
        <v-checkbox v-model="check.etc" label="その他" color="indigo" @change="remakeView()"></v-checkbox>
      </v-flex>
    </v-layout>
    <h3>製造データ</h3>
    <v-layout row wrap class="ml-2">
      <v-flex xs3>
        <v-checkbox v-model="check.pro" label="作成済" @change="remakeView()"></v-checkbox>
      </v-flex>
      <v-flex xs3>
        <v-checkbox v-model="check.nopro" label="未作成" @change="remakeView()"></v-checkbox>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  props: ["check"],
  methods: {
    remakeView() {
      this.$emit("remakeView", this.check);
    }
  }
};
</script>
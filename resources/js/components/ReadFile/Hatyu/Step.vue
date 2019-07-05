<template>
  <v-stepper v-model="step">
    <h1 class="mt-4 mb-4" v-if="type===1301">発注ファイル</h1>
    <h1 class="mt-4 mb-4" v-else>明細ファイル</h1>
    <v-stepper-header class="mb-4">
      <v-stepper-step :complete="step > 1" step="1">設定確認</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="step > 2" step="2">取込処理</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <Check :csv.sync="csv" :type="type" @up="up" @clear="clear"></Check>
      </v-stepper-content>
      <v-stepper-content step="2">
        <Entry :csv.sync="csv" :type="type" @up="up" @clear="clear"></Entry>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Entry from "./Entry";
import Check from "./Check";

export default {
  components: {
    Entry,
    Check
  },
  props: ["csv", "type"],
  data: function() {
    return {
      step: 0
    };
  },
  create: function() {
    this.init();
  },
  methods: {
    init() {},
    up() {
      this.step = Number(this.step) + Number(1);
    },
    down() {
      this.step = Number(this.step) - Number(1);
      if (this.step === 0) {
        this.$emit("clear");
      }
    },
    clear() {
      this.$emit("clear");
    }
  }
};
</script>

<style lang="scss" scoped>
.v-stepper {
  background: transparent;
  box-shadow: none;
  margin-bottom: 5rem;
}
</style>

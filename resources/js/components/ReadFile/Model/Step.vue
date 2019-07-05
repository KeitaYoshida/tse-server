<template>
  <v-stepper v-model="step">
    <h1 class="mt-4 mb-4">形式 - 構成情報</h1>
    <v-stepper-header class="mb-4">
      <v-stepper-step :complete="step > 1" step="1">構成情報登録</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="step > 2" step="2">手配情報登録</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">登録完了</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <ModelEntry :csv.sync="csv" @down="down" @getModelData="getModelData"></ModelEntry>
      </v-stepper-content>
      <v-stepper-content step="2" v-if="step===2">
        <ComponentEntry :modelData="modelData" @up="up" @down="down"></ComponentEntry>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-alert color="info" icon="info" outline :value="true" class="ma-5">
          <span class="pa-5 display-1">形式 構成データの登録が完了しました</span>
        </v-alert>
        <v-layout row wrap>
          <v-flex xs3 pa-4>
            <v-btn color="primary" outline @click="link('')" class="link_btn">トップページ</v-btn>
          </v-flex>
          <v-flex xs3 pa-4>
            <v-btn
              color="primary"
              outline
              @click="link('/data_table/item_list')"
              class="link_btn"
            >部材ページ</v-btn>
          </v-flex>
          <v-flex xs3 pa-4>
            <v-btn color="primary" outline @click="link('')" class="link_btn">形式ページ</v-btn>
          </v-flex>
          <v-flex xs3 pa-4>
            <v-btn color="primary" outline @click="re_entry('')" class="link_btn">続けて登録</v-btn>
          </v-flex>
        </v-layout>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import ModelEntry from "./ModelEntry";
import ComponentEntry from "./ComponentEntry";

export default {
  components: {
    ModelEntry,
    ComponentEntry
  },
  props: ["csv"],
  data: function() {
    return {
      step: 0,
      modelData: null
    };
  },
  methods: {
    up() {
      this.step = Number(this.step) + Number(1);
    },
    down() {
      this.step = Number(this.step) - Number(1);
      if (this.step === 0) {
        this.$emit("clear");
      }
    },
    getModelData(modelData) {
      this.modelData = modelData;
      this.up();
    },
    link(val) {
      this.$router.push({ path: "/" + val });
    },
    re_entry() {
      this.$emit("clear");
    }
  }
};
</script>

<style lang="scss" scoped>
.v-stepper {
  background: transparent;
  box-shadow: none;
}
.link_btn {
  width: 100%;
  height: 5rem;
}
</style>

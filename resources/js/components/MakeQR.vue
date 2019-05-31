<template>
  <qriously :value="config" :size="200"/>
</template>

<script>
import Vue from "vue";
import VueQriously from "vue-qriously";
Vue.use(VueQriously);

export default {
  components: {},
  props: ["config"],
  name: "qrGenarate"
};
</script>

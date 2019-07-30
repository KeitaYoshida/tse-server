<template>
  <qriously :value="config" />
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

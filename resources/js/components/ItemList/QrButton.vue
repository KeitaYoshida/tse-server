<template >
  <v-btn icon flat v-if="num===0" @click="pCnt()">
    <v-icon color="blue darken-1" class="icon-qr">fas fa-qrcode</v-icon>
  </v-btn>
  <v-btn icon flat v-else @click="pCnt()">
    <v-badge right color="primary">
      <span slot="badge">{{ num }}</span>
      <v-icon color="blue darken-1" class="icon-qr">fas fa-qrcode</v-icon>
    </v-badge>
  </v-btn>
</template>

<script>
export default {
  props: ["rowdata"],
  data: function() {
    return {
      num: 0
    };
  },
  created: function() {},
  methods: {
    pCnt() {
      this.num = this.num + 1;
      this.$emit("act", this.rowdata);
    }
  }
};
</script>
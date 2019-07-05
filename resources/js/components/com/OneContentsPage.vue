<template>
  <v-layout align-space-around justify-center fill-height>
    <v-flex xs12 class="loading">
      <div class="inner">
        <span :html="val"></span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["val"]
};
</script>

<style lang="scss" scoped>
.inner {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
</style>

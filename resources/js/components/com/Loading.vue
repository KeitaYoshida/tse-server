<template>
  <v-layout align-space-around justify-center fill-height class="cover">
    <v-flex xs12 class="loading">
      <div class="inner">
        <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        <v-progress-circular :width="3" color="red" indeterminate></v-progress-circular>
        <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
        <v-progress-circular :width="3" color="green" indeterminate></v-progress-circular>
        <v-progress-circular :size="50" color="amber" indeterminate></v-progress-circular>
        <p class="display-3 text">Loading Now</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cover {
  height: 90%;
}
@keyframes Flash1 {
  50% {
    opacity: 0;
  }
}
.v-progress-circular {
  margin: 1rem;
}
.loading {
  text-align: center;
  justify-content: center;
  align-items: center;
}
.inner {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
.text {
  color: #ff8c00;
  background: -webkit-linear-gradient(0deg, #40e0d0, #ff8c00, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // animation: Flash1 0.1s infinite;
}
</style>
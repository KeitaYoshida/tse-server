<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-icon small v-on="on">far fa-question-circle</v-icon>
    </template>
    <span v-html="message"></span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["message"],
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
<template></template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {};
  },
  computed: {
    ...mapState({
      target: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    init() {}
  }
};
</script>

<style lang="scss" scoped>
</style>

<template></template>

<script>
export default {
  props: [],
  components: {},
  data: function() {
    return {};
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("").then(res => {});
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

<template></template>

<script>
import { mapState, mapActions } from "vuex";

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
    async init() {
      const TarDay = 60;
      let his = await axios.get("/db/inventory/history/day" + TarDay);
      console.log(his);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

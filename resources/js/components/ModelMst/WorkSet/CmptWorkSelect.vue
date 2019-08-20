<template>
  <div>
    <v-chip
      v-for="(item, index) in list"
      :key="index"
      outline
      color="deep-purple darken-4"
      @click="rt(item.work_title)"
    >{{ item.work_title }}</v-chip>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      list: null
    };
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
      let res = await axios.get("/db/model_mst/cmpt/work/title/list");
      this.list = res.data;
    },
    rt(v) {
      this.$emit("rt", v);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <span>
    <v-text-field v-model="src" name="cmpt_search" label="検索値" @input="cmptSearch" hide-details></v-text-field>
  </span>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { CMPT_SEARCH_VAL } from "../../../store/mutation-types";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      src: null
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
    ...mapActions(["CMPT_SEARCH_VAL"]),
    init() {},
    cmptSearch() {
      this.CMPT_SEARCH_VAL(this.src);
    }
  },
  beforeDestroy: function() {
    this.CMPT_SEARCH_VAL("");
  }
};
</script>

<style lang="scss" scoped>
.v-text-field {
  padding-top: 0;
  margin-top: 0;
}
</style>

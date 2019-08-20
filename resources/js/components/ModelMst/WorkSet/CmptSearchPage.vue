<template>
  <span>
    <v-btn icon small flat>
      <v-icon color="teal darken-2" v-if="tar.sync.page===1" disabled>fas fa-chevron-circle-left</v-icon>
      <v-icon color="teal darken-2" v-else @click="belowPage">fas fa-chevron-circle-left</v-icon>
    </v-btn>
    <v-chip v-if="tar.length!==0" color="teal darken-2" small dark>
      <span>{{ tar.sync.page }}</span>
      <span>/</span>
      <span>{{ Math.ceil(tar.length / tar.sync.rowsPerPage) }}</span>
      <span>page</span>
    </v-chip>
    <v-chip v-else color="teal darken-2" small dark>nodata</v-chip>
    <v-btn icon small flat>
      <v-icon
        color="teal darken-2"
        v-if="tar.sync.page>=Math.ceil(tar.length / tar.sync.rowsPerPage)"
        disabled
      >fas fa-chevron-circle-right</v-icon>
      <v-icon color="teal darken-2" v-else @click="addPage">fas fa-chevron-circle-right</v-icon>
    </v-btn>
    <v-chip v-if="tar.length!==0" color="teal darken-2" small dark>
      <span>残: {{ returnLastItem() }}</span>
    </v-chip>
  </span>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      tar: null
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
    ...mapActions(["CMPT_SEARCH_PAGE_ADD", "CMPT_SEARCH_PAGE_BELOW"]),
    init() {
      this.tar = this.target.component.search;
    },
    addPage() {
      this.CMPT_SEARCH_PAGE_ADD();
    },
    belowPage() {
      this.CMPT_SEARCH_PAGE_BELOW();
    },
    returnLastItem() {
      let cm = this.target.component.data[0].item_use;
      let anum = cm.length;
      let sm = cm.filter(ar => ar.work_id !== null);
      let snum = sm.length;
      return snum + " / " + anum;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-chip {
  span + span {
    margin-left: 0.5rem;
  }
}
</style>

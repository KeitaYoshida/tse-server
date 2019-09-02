<template>
  <v-card v-if="tar.process" class="const_info" flat>
    <v-card-title primary-title class="pb-0 pt-1">
      <v-layout row wrap>
        <v-flex xs3 class="text-xs-center">
          <v-chip outline class="flg cInfo" small>{{ tar.process.base.class }}</v-chip>
        </v-flex>
        <v-flex xs9 class="pr-5">
          <v-progress-linear :value="rtStatus()" color="#1565c0" height="0.6rem" striped></v-progress-linear>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text v-if="tar.process.base" class="pt-2">
      <span class="text" v-if="tar.process.base.mne">
        <nobr>{{ tar.process.base.mne }}</nobr>
        <br />
        <div class="mini">{{ tar.process.base.mrev.numToRev() }}</div>
      </span>
      <span class="text" v-else>
        <nobr>{{ tar.process.base.mcode }}</nobr>
        <br />
        <div class="mini">{{ tar.process.base.mrev.numToRev() }}</div>
      </span>
      <span class="text">
        {{ tar.process.base.wcode }}
        <br />
        <div class="mini">( id: {{ tar.process.base.wid }} )</div>
      </span>
      <span class="text">{{ tar.process.base.num }} ea</span>
      <div v-if="tar.process.base.num !== tar.process.base.all_num">
        <span
          class="text"
        >分割：{{ tar.process.base.num * tar.process.base.wcode_num}} / {{ tar.process.base.all_num }} ea</span>
      </div>
    </v-card-text>
  </v-card>
</template>

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
      tar: "target"
    })
  },
  created: function() {},
  methods: {
    ...mapActions([]),
    init() {},
    rtStatus() {
      let s = this.tar.process.base.context;
      let f0 = s["0"] !== undefined ? s["0"] : 0;
      let f1 = s["1"] !== undefined ? s["1"] : 0;
      let f2 = s["2"] !== undefined ? s["2"] : 0;
      let f3 = s["3"] !== undefined ? s["3"] : 0;
      let fa = f0 + f1 + f2 + f3;
      return (f2 / fa) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
.flg {
  border-radius: 3px !important;
}
span.text {
  font-size: 1.5rem;
}
div.mini {
  font-size: 1rem;
  text-align: center;
}
td {
  padding: 0.2rem 0.4rem;
}
.const_info {
  height: 30%;
  overflow-y: scroll;
}
div.flex {
  height: 100%;
}
</style>

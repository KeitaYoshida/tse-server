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
      <BrotherList :prop="returnBrother()" v-if="tar.process.brother " @rtVal="selectBrother" />
      <span class="text">{{ tar.process.base.num }} ea</span>
      <span
        v-if="tar.process.base.num !== tar.process.base.all_num"
        class="mini"
      >(分割：{{ tar.process.base.num * tar.process.base.wcode_num}} / {{ tar.process.base.all_num }} ea)</span>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import BrotherList from "@/components/com/ComMenu";

export default {
  props: [],
  components: {
    BrotherList
  },
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
      let work_id = this.tar.process.base.wid;
      let model_status = 0;
      if (f2 / fa > 0) model_status = 1;
      if (f2 / fa === 1) model_status = 2;
      axios.get("/db/workdata/set/status/" + work_id + "/" + model_status);

      return (f2 / fa) * 100;
    },
    returnBrother() {
      let b = [];
      this.tar.process.brother.forEach(ar => {
        b.push(ar.worklist_code);
      });
      return {
        color: "#3949AB",
        text: this.tar.process.base.wcode,
        value: b,
        outline: true,
        dark: true,
        selected: null,
        rad: "5px",
        small: false
      };
    },
    selectBrother(item) {
      let select = this.tar.process.brother.filter(
        b => b.worklist_code === item
      )[0];
      this.$router.push({
        path: "/process/" + select.worklist_id
      });
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
span.mini {
  font-size: 0.8rem;
}
td {
  padding: 0.2rem 0.4rem;
}
.const_info {
  height: 30%;
  overflow: hidden;
}
div.flex {
  height: 100%;
}
</style>

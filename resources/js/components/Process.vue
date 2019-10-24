<template>
  <v-app>
    <transition name="fade">
      <template v-if="loading">
        <load></load>
      </template>
      <v-layout wrap class="process" v-else>
        <v-flex xs4 sm4 md4 lg3>
          <cInfo></cInfo>
          <pInfo></pInfo>
        </v-flex>
        <v-flex xs8 sm8 md8 lg9>
          <transition name="fade" mode="out-in">
            <div v-if="tar.process.process_info === null" class="warn">工程を選択してください</div>
            <div v-else-if="Array.isArray(tar.process.process_info) === false">
              <load></load>
            </div>
            <sInfo v-else @reload="init()"></sInfo>
          </transition>
        </v-flex>
      </v-layout>
    </transition>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import cInfo from "@/components/Process/cInfo";
import pInfo from "@/components/Process/pInfo";
import sInfo from "@/components/Process/sInfo";
import load from "@/components/com/Loading";

export default {
  props: [],
  components: {
    cInfo,
    pInfo,
    sInfo,
    load
  },
  data: function() {
    return {
      id: null,
      data: null,
      loading: true
    };
  },
  computed: {
    ...mapState({
      tar: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions(["PROCESS_INIT"]),
    async init() {
      this.id = this.$route.params.id;
      let d = await axios.get("/db/workdata/process/" + this.id);
      // console.log(d.data);
      let cmpt_row = await axios.get(
        "/db/workdata/process/cmpt_row/" + d.data[0].model.model_id
      );
      cmpt_row = cmpt_row.data;
      let sn = [],
        process = [],
        cmpt = [],
        status = [];
      let i = 0;
      // console.log(d.data[0]);
      d.data[0].serials.forEach(ar => {
        ar.process.forEach(pr =>
          this.init_pr(process, pr, d.data[0].serials.length, status, cmpt)
        );
        ar.cmpt_sn.forEach((cmsn, n) => this.init_sn(sn, cmsn, i, n, cmpt));
        // console.log(sn);
        sn[i] = sn[i].reverse();
        i = i + 1;
      });
      let tmp = await axios.post("/db/comt/get/data/arr", cmpt);
      cmpt = tmp.data;
      let pst = await axios.get("/db/workdata/get/process_status");
      this.PROCESS_INIT({
        serials: sn,
        process: process,
        components: cmpt,
        process_status: pst.data,
        base: this.init_base(d.data[0], status)
      });
      this.loading = false;
      this.update_const_status(status);
    },
    update_const_status(s) {
      let f0 = s["0"] !== undefined ? s["0"] : 0;
      let f1 = s["1"] !== undefined ? s["1"] : 0;
      let f2 = s["2"] !== undefined ? s["2"] : 0;
      let f3 = s["3"] !== undefined ? s["3"] : 0;
      let fa = f0 + f1 + f2 + f3;
      axios.get(
        "/db/workdata/set/const/status/" + this.id + "/" + (f2 / fa) * 100
      );
    },
    init_base(d, s) {
      return {
        all_num: d.all_num,
        num: d.num,
        class: d.class.val,
        context: s,
        status: d.status.val,
        mid: d.model.model_id,
        mcode: d.model.model_code,
        mrev: d.model.model_rev,
        mne: d.model.model_ne,
        pdct_id: d.pdct_id,
        st_day: d.st_day,
        ed_day: d.ed_day,
        user: d.user,
        wcode: d.worklist_code,
        wcode_num: Number(d.worklist_code.slice(-2)),
        wid: d.worklist_id
      };
    },
    init_sn(sn, cmsn, i, n, cmpt) {
      // console.log(sn);
      // console.log(cmsn);
      if (Array.isArray(sn[i]) === false) sn[i] = [];
      sn[i][n] = {};
      sn[i][n]["serial_id"] = cmsn.serial_id;
      sn[i][n]["cmpt_id"] = cmsn.cmpt_id;
      sn[i][n]["serial_no"] = cmsn.serial_no;
    },
    init_pr(process, pr, row, status, cmpt) {
      if (process[pr.row] === undefined) process[pr.row] = {};
      let p = process[pr.row];
      p.title = pr.process_title;
      p.all = row;
      p.cmpt_id = pr.cmpt_id;
      p.row = pr.row;
      p.work_id = pr.work_id;
      if (p[pr.process_status] === undefined) {
        p[pr.process_status] = 1;
      } else {
        p[pr.process_status] = p[pr.process_status] + 1;
      }
      if (status[pr.process_status] === undefined) {
        status[pr.process_status] = 1;
      } else {
        status[pr.process_status] = status[pr.process_status] + 1;
      }
      if (cmpt.indexOf(p.cmpt_id) === -1) {
        cmpt.push(p.cmpt_id);
      }
    }
  },
  beforeDestroy: function() {
    this.PROCESS_INIT({
      base: null,
      info: null,
      serials: null,
      process: null,
      process_status: null,
      process_info: null,
      process_items: null
    });
  }
};
</script>

<style lang="scss" scoped>
.process {
  height: 100%;
}
main {
  height: 100%;
}
div.flex {
  height: 100%;
}
.warn {
  padding-top: 5rem;
  padding-left: 5rem;
  font-size: 3rem;
}
</style>  
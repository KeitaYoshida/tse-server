<template>
  <span>
    <v-btn
      color="teal darken-2"
      @click="all()"
      small
      :disabled="tar.length===null"
      dark
    >{{ returnButtonName() }}</v-btn>
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
      <span>連: {{ returnLastItem() }}</span>
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
      tar: null,
      select_text: "全選択"
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
    ...mapActions([
      "CMPT_SEARCH_PAGE_ADD",
      "CMPT_SEARCH_PAGE_BELOW",
      "SET_COMPONENT_COM"
    ]),
    init() {
      this.tar = this.target.component.search;
    },
    addPage() {
      this.CMPT_SEARCH_PAGE_ADD();
    },
    belowPage() {
      this.CMPT_SEARCH_PAGE_BELOW();
    },
    returnCom() {
      let cm = this.target.component.data[0].item_use;
      cm = cm.filter(ar => [1, 3, 6].indexOf(ar.items.item_class) === -1);
      let anum = cm.length;
      let sm = cm.filter(ar => ar.work_id !== null);
      let snum = sm.length;
      return { anum: anum, snum: snum };
    },
    returnButtonName() {
      let n = this.returnCom();
      if (n.snum === n.anum) return "全解除";
      else return "全選択";
    },
    returnLastItem() {
      let n = this.returnCom();
      return n.snum + " / " + n.anum;
    },
    async all() {
      let n = this.returnCom();
      if (n.snum === n.anum) this.allDelete();
      else return this.allSelect();
    },
    async allDelete() {
      let wid = this.target.work.id;
      await axios
        .get("/db/model_mst/cmpt/work/item/all/delete/" + wid)
        .then(async res => {
          let m = await axios.get(
            "/db/model_mst/data/" + this.target.model.id + "/fromItem"
          );
          let cmpt_data = m.data[0].cmpt.filter(ar => {
            return ar.cmpt_id === this.target.component.id;
          });
          let cmpt = {
            id: this.target.component.id,
            code: this.target.component.code,
            rev: this.target.component.rev,
            data: cmpt_data
          };
          await this.SET_COMPONENT_COM(cmpt);
          this.$emit("rt");
        });
    },
    async allSelect() {
      let rcid = [];
      let wid = this.target.work.id;
      let cm = this.target.component.data[0].item_use;
      cm = cm.filter(ar => [1, 3, 6].indexOf(ar.items.item_class) === -1);
      cm.forEach(ar => {
        rcid.push(ar.r_ci_id);
      });
      await axios
        .post("/db/model_mst/cmpt/work/item/select/" + wid, rcid)
        .then(async res => {
          let m = await axios.get(
            "/db/model_mst/data/" + this.target.model.id + "/fromItem"
          );
          let cmpt_data = m.data[0].cmpt.filter(ar => {
            return ar.cmpt_id === this.target.component.id;
          });
          let cmpt = {
            id: this.target.component.id,
            code: this.target.component.code,
            rev: this.target.component.rev,
            data: cmpt_data
          };
          await this.SET_COMPONENT_COM(cmpt);
          this.$emit("rt");
        });
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

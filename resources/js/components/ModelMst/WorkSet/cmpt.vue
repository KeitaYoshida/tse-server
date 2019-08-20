<template>
  <v-app>
    <v-container fluid class="pa-0" v-if="loading">
      <Loading></Loading>
    </v-container>
    <v-container fluid class="pa-0" v-else>
      <v-layout row wrap class="h">
        <v-flex sm12 md5 class="h blue lighten-5 pa-0" dark>
          <v-container grid-list-xs class="h">
            <h2 class="hh indigo--text text--indigo-darken-4">工程登録</h2>
            <v-card flat class="hhh op8">
              <v-card-text>
                <CmptWorkList v-if="remake" @rt="trashAct"></CmptWorkList>
              </v-card-text>
            </v-card>
          </v-container>
        </v-flex>
        <v-flex wrap sm12 md7 class="h pa-0">
          <v-layout wrap class="h">
            <v-flex xs12 class="h40 deep-purple lighten-5 pa-0">
              <v-container grid-list-xs class="h">
                <h2 class="hh deep-purple--text text--darken-4">工程選択</h2>
                <v-card flat class="hhh op8">
                  <CmptWorkSelect @rt="workSelect"></CmptWorkSelect>
                </v-card>
              </v-container>
            </v-flex>
            <v-layout xs12 class="h60 teal lighten-5 pa-0">
              <v-container grid-list-xs class="h">
                <v-layout wrap>
                  <v-flex xs3>
                    <h2 class="hh teal--text text--darken-4">部材選択</h2>
                  </v-flex>
                  <v-flex xs2>
                    <CmptSearch></CmptSearch>
                  </v-flex>
                  <v-flex xs7 class="text-xs-right">
                    <CmptSearchPage></CmptSearchPage>
                  </v-flex>
                </v-layout>
                <template v-if="target.work.id===null">
                  <v-card flat class="hhh op8">
                    <span class="no-select-message">工程を選択してください</span>
                  </v-card>
                </template>
                <template v-else>
                  <v-card flat class="hhh op8">
                    <CmptItemList v-if="remakeItemFlg"></CmptItemList>
                  </v-card>
                </template>
              </v-container>
            </v-layout>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import CmptWorkList from "@/components/ModelMst/WorkSet/CmptWorkList";
import CmptItemList from "@/components/ModelMst/WorkSet/CmptItemList";
import CmptSearch from "@/components/ModelMst/WorkSet/CmptSearch";
import CmptSearchPage from "@/components/ModelMst/WorkSet/CmptSearchPage";
import CmptWorkSelect from "@/components/ModelMst/WorkSet/CmptWorkSelect";
import Loading from "@/components/com/Loading";

export default {
  props: [],
  components: {
    CmptWorkList,
    Loading,
    CmptItemList,
    CmptSearch,
    CmptSearchPage,
    CmptWorkSelect
  },
  data: function() {
    return {
      loading: true,
      remake: true,
      remakeItemFlg: true
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
    ...mapActions(["WORK_ABOUT_RESET", "CMPT_SEARCH_RESET"]),
    init() {
      if (this.target.component.id === null) {
        this.$router.push("/model_mst");
        return;
      }
      this.loading = false;
    },
    async workSelect(val) {
      this.remake = !this.remake;
      let d = {
        cmpt_id: this.target.component.id,
        val: val
      };
      await axios.post("/db/model_mst/work/add", d);
      this.remake = !this.remake;
    },
    async trashAct() {
      this.remakeItemFlg = false;
      let id = this.target.component.id;
      let d = await axios.get("/db/model_mst/cmpt/data/" + id);
      // console.log(this.target.component.data)
      // console.log()
      this.target.component.data = d.data;
      this.remakeItemFlg = true;
    }
  },
  beforeDestroy: function() {
    this.WORK_ABOUT_RESET();
    this.CMPT_SEARCH_RESET();
  }
};
</script>

<style lang="scss" scoped>
.h {
  height: 100%;
}
.h40 {
  height: 40%;
}
.h60 {
  height: 60%;
}
.op8 {
  opacity: 0.95;
}
.v-card {
  border-radius: 10px;
}
.hh {
  height: 32px;
}
.hhh {
  height: calc(100% - 32px);
  overflow: scroll;
}
.no-select-message {
  position: relative;
  top: 50%;
  left: 50%;
  border: 1px solid #004d40;
  width: 200px;
  margin-left: -100px;
  color: #004d40;
  padding: 1.5rem;
  font-size: 1.3rem;
  border-radius: 3px;
  height: 80px;
  margin-top: -80px;
}
</style>

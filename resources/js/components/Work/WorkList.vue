<template>
  <div v-if="process" @scroll="handleScroll" class="workList" id="workList">
    <div class="worklist_head">
      <v-chip outline>作業リスト</v-chip>
    </div>
    <div class="worklist">
      <div class="head-row" v-for="(work, index) in process" :key="index">
        <v-layout wrap>
          <v-flex xs6 class="fbox model">
            <span>
              <nobr>{{ rtWorkModel(work, index) }}</nobr>
            </span>
          </v-flex>
          <v-flex xs6 class="fbox cnt">
            <span @click="action(index)" class="select_action">
              <nobr>
                <v-icon v-if="select.indexOf(work) !== -1" small color="primary">far fa-check-square</v-icon>
                {{ work.worklist_code }}
              </nobr>
            </span>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <v-bottom-nav fixed :active.sync="chk_act" :value="true">
      <v-btn flat value="cnt" color="#1565c0" v-show="chk_act==='cnt'">
        <span>工事選択</span>
        <v-icon>fas fa-check</v-icon>
      </v-btn>
      <v-btn flat value="date" color="#1565c0" v-show="chk_act==='cnt'">
        <span>日付変更</span>
        <v-icon>far fa-calendar-alt</v-icon>
      </v-btn>
      <v-btn flat value="warn" color="#1565c0" v-show="chk_act==='cnt'">
        <span>遅延・初期値リスト</span>
        <v-icon>fas fa-shapes</v-icon>
      </v-btn>
      <v-btn flat value="all" color="#1565c0" v-show="chk_act==='cnt'">
        <span>一覧検索</span>
        <v-icon>fas fa-shapes</v-icon>
      </v-btn>
      <v-btn flat value="cnt" v-show="chk_act==='date'">
        <span>戻る</span>
        <v-icon>fas fa-long-arrow-alt-left</v-icon>
      </v-btn>
      <v-btn flat value="date" v-show="chk_act==='date'" @click="edit_date(-1)">
        <span>一日前</span>
        <v-icon>fas fa-angle-left</v-icon>
      </v-btn>
      <v-btn flat value="date" v-show="chk_act==='date'" @click="edit_date(-5)">
        <span>五日前</span>
        <v-icon>fas fa-angle-double-left</v-icon>
      </v-btn>
      <v-btn flat value="date" v-show="chk_act==='date'" @click="add_date()">
        <span>一日追加</span>
        <v-icon>fas fa-plus</v-icon>
      </v-btn>
      <v-btn flat value="date" v-show="chk_act==='date'" @click="del_date()">
        <span>一日削除</span>
        <v-icon>fas fa-minus</v-icon>
      </v-btn>
      <v-btn flat value="date" v-show="chk_act==='date'" @click="edit_date(5)">
        <span>五日後</span>
        <v-icon>fas fa-angle-double-right</v-icon>
      </v-btn>
      <v-btn flat value="date" v-show="chk_act==='date'" @click="edit_date(1)">
        <span>一日後</span>
        <v-icon>fas fa-angle-right</v-icon>
      </v-btn>
      <v-btn flat value="date" v-show="chk_act==='date'" @click="clear()">
        <span>クリア</span>
        <v-icon>fas fa-broom</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

export default {
  props: ["scrollTop"],
  components: {},
  data: function() {
    return {
      process: null,
      select: [],
      chk_act: "cnt"
    };
  },
  computed: {
    ...mapState({
      works: "works"
    })
  },
  created: function() {
    this.init();
  },
  mounted() {},
  methods: {
    ...mapActions(["WORKS_EDIT_WORK_DAY"]),
    init() {
      this.process = this.works.list.process;
    },
    rtWorkModel(work, index) {
      let def =
        work.model.model_code_ne !== null
          ? work.model.model_code_ne
          : work.model.model_code;
      if (index === 0) return def;
      let tmp = this.process[index - 1];
      let next =
        tmp.model.model_code_ne !== null
          ? tmp.model.model_code_ne
          : tmp.model.model_code;
      return def === next ? "" : def;
    },
    handleScroll(e) {
      this.$emit("scroll", e.target.scrollTop);
    },
    action(index) {
      switch (this.chk_act) {
        case "cnt":
          this.$router.push("/process/" + this.process[index].worklist_id);
          break;
        case "date":
          this.setThisList(index);
          break;
      }
    },
    setThisList(id) {
      let flg = this.select.indexOf(this.process[id]);
      if (flg === -1) {
        this.select.push(this.process[id]);
      } else {
        this.select.splice(flg, 1);
      }
    },
    async edit_date(num) {
      for (let i = 0; i < this.select.length; i++) {
        let d = {
          id: this.select[i].worklist_id,
          sday: dayjs(this.select[i].st_day)
            .add(num, "day")
            .format("YYYY-MM-DD"),
          eday: dayjs(this.select[i].ed_day)
            .add(num, "day")
            .format("YYYY-MM-DD")
        };
        axios.get("/db/works/set/day/" + d.id + "/" + d.sday + "/" + d.eday);
        this.WORKS_EDIT_WORK_DAY(d);
      }
    },
    add_date() {
      for (let i = 0; i < this.select.length; i++) {
        let add = 1;
        let d = {
          id: this.select[i].worklist_id,
          sday: dayjs(this.select[i].st_day).format("YYYY-MM-DD"),
          eday: dayjs(this.select[i].ed_day)
            .add(add, "day")
            .format("YYYY-MM-DD")
        };
        axios.get("/db/works/set/day/" + d.id + "/" + d.sday + "/" + d.eday);
        this.WORKS_EDIT_WORK_DAY(d);
      }
    },
    del_date() {
      for (let i = 0; i < this.select.length; i++) {
        let add = -1;
        if (this.select[i].st_day === this.select[i].ed_day) {
          add = 0;
        }
        let d = {
          id: this.select[i].worklist_id,
          sday: dayjs(this.select[i].st_day).format("YYYY-MM-DD"),
          eday: dayjs(this.select[i].ed_day)
            .add(add, "day")
            .format("YYYY-MM-DD")
        };
        axios.get("/db/works/set/day/" + d.id + "/" + d.sday + "/" + d.eday);
        this.WORKS_EDIT_WORK_DAY(d);
      }
    },
    clear() {
      this.select = [];
    }
  },
  watch: {
    scrollTop: function(val) {
      document.getElementById("workList").scrollTop = val;
    }
  }
};
</script>

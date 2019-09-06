<template>
  <div class="table" v-if="days" @scroll="handleScroll" id="calendarList">
    <div class="rows head" id="calendarListHead">
      <div :class="'block head ' + rtClass(day.ja)" v-for="(day, index) in days" :key="index">
        <p>{{ rtMonth(day.m, index) }}</p>
        <p>{{ day.d }}</p>
        <p>{{ day.ja }}</p>
      </div>
    </div>
    <div class="rowbox">
      <div class="rows" v-for="(process, index) in process" :key="index">
        <div
          :class="'block cells ' + rtClass(day.ja)"
          v-for="(day, index) in days"
          :key="'process' + index"
        ></div>
      </div>
    </div>
    <div
      class="progress"
      v-for="(work, index) in process"
      :key="'progress' + index"
      :style="rtProgressStyle(work, index)"
      @click="select_work(work)"
    >
      <v-progress-linear :color="setColor(work)" class="pline" :value="work.context || 0"></v-progress-linear>
    </div>
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
    return { days: null, process: null, headLeft: 0 };
  },
  computed: {
    ...mapState({
      works: "works",
      search_x: state => state.search.modelconst
    })
  },
  created: function() {
    this.init();
  },
  mounted: function() {
    const el = document.getElementById("calendarListHead");
    this.headLeft = el.getBoundingClientRect().left;
  },
  methods: {
    ...mapActions([]),
    init() {
      // console.log(this.works);
      this.days = this.works.list.days.values;
      this.process = this.works.list.process;
      if (this.search_x) {
        this.filterAct(this.search_x);
      }
    },
    rtMonth(m, index) {
      if (index === 0) {
        return m;
      }
      if (m === this.days[index - 1].m) return "";
      return m;
    },
    rtClass(hi) {
      if (hi === "土" || hi === "日") {
        return "yasumi";
      }
      return "heizitsu";
    },
    rtProgressStyle(v, n) {
      const TOP = 6;
      const WIDTH = 3;
      const HEIGHT = 2;
      const baseDay = dayjs(this.days[0].str);
      const stDay = dayjs(v.st_day);
      const edDay = dayjs(v.ed_day).add(1, "day");
      const wid = edDay.diff(stDay, "days") * WIDTH;
      const left = stDay.diff(baseDay, "days") * WIDTH;
      const top = TOP + n * HEIGHT;
      let heightVal = n * HEIGHT;
      return (
        "top:" + top + "rem; left: " + left + "rem; width: " + wid + "rem;"
      );
    },
    handleScroll(e) {
      const el = document.getElementById("calendarListHead");
      el.setAttribute(
        "style",
        "left: " + (this.headLeft - e.target.scrollLeft) + "px;"
      );
      this.$emit("scroll", e.target.scrollTop);
    },
    setColor(work) {
      let today = this.works.list.days.day;
      let ed_day = work.ed_day;
      let context = work.context;
      if (context === 100) return "#2e7d32";
      else if (ed_day < today) return "#ef6c00";
      else return "#1565c0";
    },
    select_work(work) {
      this.$router.push("/process/" + work.worklist_id);
    },
    filterAct(val) {
      val = val === null ? "" : val;
      let tar = val.toLowerCase();
      this.process = this.works.list.process.filter(ar => {
        return (
          ~ar.model.model_code.toLowerCase().indexOf(tar) ||
          ~ar.worklist_code.toLowerCase().indexOf(tar)
        );
      });
      this.select = [];
    }
  },
  watch: {
    scrollTop: function(val) {
      document.getElementById("calendarList").scrollTop = val;
    },
    search_x: function(val) {
      this.filterAct(val);
    }
  }
};
</script>

<template>
  <v-app id="work_day_table">
    <v-layout wrap v-if="standby" class="pt-3" id="work_day_tabl_box">
      <v-flex xs4 id="work_day_list">
        <WorkList :scrollTop="scrollTop" @scroll="scroll" @reView="init"></WorkList>
      </v-flex>
      <v-flex xs8 id="work_day_calendar_table">
        <WorkCalendarTable :scrollTop="scrollTop" @scroll="scroll"></WorkCalendarTable>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import WorkCalendarTable from "@/components/Work/WorkCalendarTable";
import WorkList from "@/components/Work/WorkList";

import { mapState, mapMutations, mapActions } from "vuex";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

export default {
  props: [],
  components: { WorkCalendarTable, WorkList },
  data: function() {
    return {
      standby: false,
      scrollTop: 0
    };
  },
  computed: {
    ...mapState({})
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions(["WORKS_INIT_DAY_PROCESS"]),
    async init() {
      let day = {
        day: dayjs().format("YYYY-MM-DD"),
        before: dayjs()
          .add(-10, "day")
          .format("YYYY-MM-DD"),
        after: dayjs()
          .add(20, "day")
          .format("YYYY-MM-DD"),
        values: this.setDayArray(
          dayjs()
            .add(-10, "day")
            .format("YYYY-MM-DD")
        )
      };
      let ptmp = await axios.get(
        "/db/works/get/list/way/day/" + day.before + "/" + day.after
      );
      let d = {
        list: {
          days: day,
          process: ptmp.data
        }
      };
      await this.WORKS_INIT_DAY_PROCESS(d);
      this.standby = true;
    },
    setDayArray(def) {
      let day_ar = [];
      for (let i = 0; i <= 30; i++) {
        let day_tmp = dayjs(def).add(i, "day");
        day_ar.push({
          str: day_tmp.format("YYYY-MM-DD"),
          ja: day_tmp.format("dd"),
          y: day_tmp.format("YY"),
          m: day_tmp.format("MM"),
          d: day_tmp.format("DD")
        });
      }
      return day_ar;
    },
    scroll(val) {
      this.scrollTop = val;
    }
  }
};
</script>

<style lang="scss">
#work_day_tabl_box {
  height: calc(100% - 56px);
}
#work_day_table {
  height: calc(100% - 56px);
  background-color: #fff;
  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 1;
  }
  p {
    margin: 0;
    padding: 0;
    height: 2rem;
  }
  .cells {
    border-left: 0.5px solid #eeeeee;
  }
  .block {
    vertical-align: middle;
    display: inline-block;
    height: 2rem;
    text-align: center;
    font-size: 1.3rem;
  }
  .rowbox {
    position: absolute;
    top: 6rem;
    .rows:nth-child(odd) {
      .block {
        background-color: #eaeaea;
      }
    }
  }
  .rows {
    width: 93rem;
    height: 2rem;
  }
  .rows.head {
    height: 6rem;
    position: fixed;
    z-index: 100;
    background-color: #fff;
  }
  .table,
  .workList {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    position: relative;
    margin-bottom: 0;
  }
  .progress {
    position: absolute;
    height: 2rem;
    background-color: transparent;
    top: 0;
    left: 0;
  }
  .yasumi {
    color: coral;
  }
  .head-row {
    width: 100%;
    font-size: 1.2rem;
  }
  .head-row .fbox {
    text-align: center;
    height: 2rem;
    position: relative;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
  }
  .head-row:nth-child(odd) {
    background-color: #eaeaea;
  }
}
#work_day_list {
  height: calc(100% - 56px);
  overflow: scroll;
  .worklist_head {
    height: 6rem;
    position: fixed;
    background: #fff;
    z-index: 99;
    width: 100%;
  }
  .worklist {
    position: absolute;
    top: 6rem;
    width: 100%;
  }
  .select_action {
    &:hover {
      color: #1565c0;
      cursor: pointer;
    }
  }
}
#work_day_calendar_table {
  height: calc(100% - 56px);
  overflow: scroll;
  position: relative;
  .block {
    width: 3rem;
  }
}
</style>
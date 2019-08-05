<template>
  <div class="entry">
    <v-layout row wrap class="ml-5 mr-5">
      <v-flex xs8 md6>
        <Counter :day="day" :count="count"></Counter>
      </v-flex>
    </v-layout>
    <Unknown :unknown="unknown" @act="act"></Unknown>
    <v-bottom-nav fixed :value="true">
      <v-btn flat color="primary" dark @click="clear()">
        <span>再読込</span>
        <v-icon>fas fa-arrow-alt-circle-left</v-icon>
      </v-btn>
      <v-btn flat color="primary" dark @click="fin()">
        <span>完了</span>
        <v-icon>far fa-thumbs-up</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import Counter from "./../UpCounterOfZyutyu";
import Unknown from "./../UnknownAction";

export default {
  components: {
    Counter,
    Unknown
  },
  props: {
    csv: {
      default: null
    },
    type: {
      default: ""
    }
  },
  data: function() {
    return {
      count: {
        all: 0,
        new: 0,
        cng: 0,
        del: 0
      },
      day: "",
      setting: null,
      unknown: [],
      unknown_up: []
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    async init() {
      let csv = this.csv;
      await axios.get("/db/csv/type/setting/" + this.type).then(res => {
        this.setting = res.data;
      });

      const key = "order_code";
      let keynum = 0;
      let st = {};
      this.setting.forEach((ar, index) => {
        if (ar.csv_col === key) keynum = ar.csv_col_num;
        st[ar.csv_col] = ar.csv_col_num;
      });

      let data = {};
      let selectIni = [];
      let setTime = Date.now();
      csv.forEach((ar, index) => {
        if (index === 0) return;
        let tmp = (data[Number(ar[keynum])] = {});
        tmp.all = {};
        this.setting.forEach(st => {
          tmp.all[st.csv_col] = ar[st.csv_col_num];
        });
        tmp.all.rcpt_status = 0;
        tmp.all.set_update_time = setTime;
        tmp.key = tmp.all[key] = Number(tmp.all[key]);
        selectIni.push(tmp.key);
      });

      await axios.post("/db/recept/hatyu/data/list", selectIni).then(res => {
        res.data.forEach(ar => {
          let d = data[ar[key]];
          if (ar.rcpt_status > 2) {
            d.all.rcpt_status = ar.rcpt_status;
          } else if (
            Number(d.all.ts_update_day) + Number(d.all.ts_update_time) ===
            Number(ar.ts_update_day) + Number(ar.ts_update_time)
          ) {
            d.all.rcpt_status = 1;
          } else {
            d.all.rcpt_status = 2;
          }
        });
      });

      let entry_data = {
        new: [],
        cng: [],
        nocng: []
      };
      for (let [key, value] of Object.entries(data)) {
        switch (value.all.rcpt_status) {
          case 0:
            entry_data.new.push(value);
            break;
          case 1:
            entry_data.nocng.push(value);
            break;
          case 2:
            entry_data.cng.push(value);
            break;
          default:
            entry_data.nocng.push(value);
            break;
        }
      }

      let daytmp = csv[1][1];
      this.day =
        daytmp.slice(0, 4) +
        "年" +
        daytmp.slice(4, 6) +
        "月" +
        daytmp.slice(6, 8) +
        "日";
      this.count.all = selectIni.length;
      this.count.new = entry_data.new.length;
      this.count.cng = entry_data.cng.length;

      await axios
        .post(
          "/db/recept/hatyu/data/set/" + setTime + "/" + this.type,
          entry_data
        )
        .then(res => {
          this.count.del = res.data.length;
          this.unknown = res.data;
        });
    },
    clear() {
      this.$emit("clear");
    },
    act(index, act) {
      let up_key = 0;
      switch (act) {
        case "del":
          up_key = 9;
          break;
        case "put":
          up_key = 5;
          break;
        case "keep":
          up_key = 4;
          break;
      }
      this.unknown_up.push({
        recept_id: this.unknown[index].recept_id,
        rcpt_status: up_key
      });
      this.unknown.splice(index, 1);
      axios.post("/db/recept/unknown/data/", this.unknown_up);
      this.unknown_up = [];
    },
    fin() {
      this.unknown.forEach((ar, index, or) => {
        this.unknown_up.push({
          recept_id: ar.recept_id,
          rcpt_status: 4
        });
      });
      axios.post("/db/recept/unknown/data/", this.unknown_up);
      this.$emit("clear");
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.8rem;
}
</style>

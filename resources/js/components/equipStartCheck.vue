<template>
  <v-container grid-list-xs>
    <h1 class="page-title">
      <v-icon>fas fa-check-square</v-icon>始業時点検
    </h1>
    <table id="chk_info">
      <tr class="title">
        <td>項目名</td>
        <td>状況</td>
        <td>作業者</td>
        <td>確認日</td>
        <td>表示</td>
      </tr>
      <tr v-for="(item, index) in d" :key="index">
        <td class="title">{{ item.title }}</td>
        <td class="check" v-html="rt_check(item.check)"></td>
        <td class="user">{{ item.workuser }}</td>
        <td class="day">{{ item.workday }}</td>
        <td class="link">
          <v-btn flat light :to="'/work/equipStartCheck/' + item.pagecode">
            <v-icon>fas fa-edit</v-icon>
          </v-btn>
        </td>
      </tr>
    </table>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      d: {
        ts2_39: {
          title: "刻印機",
          workday: "",
          workuser: "",
          values: {
            val1: { val: "", check: ["-", "1"] },
            val2: { val: "", check: ["1"] },
            val3: { val: "", check: ["1"] }
          },
          check: null,
          pagecode: "kokuin"
        }
      },
      url: this.$router.currentRoute.fullPath + "/"
    };
  },
  methods: {
    rt_check(flg) {
      switch (flg) {
        case null:
          return "<span>未確認</span>";
          break;
        case true:
          return "<span>確認済</span>";
          break;
        case false:
          return "<span>不良有</span>";
          break;
      }
    }
  },
  mounted: async function() {
    var get_val_fromArr = function(obj, code, val) {
      var rtval = "";
      if (obj.workcode === code && obj.code === val) {
        return obj.val;
      } else {
        return false;
      }
    };
    var d = this.d;
    // await axios.get("/checkdata/day/2019-05-22").then(function(res) {
    await axios.get("/checkdata/day/" + this.get__hiduke()).then(function(res) {
      res.data.forEach((arr, index) => {
        if (get_val_fromArr(arr, "TS2-39", "val1")) {
          d.ts2_39.values.val1.val = get_val_fromArr(arr, "TS2-39", "val1");
          return;
        }
        if (get_val_fromArr(arr, "TS2-39", "val2")) {
          d.ts2_39.values.val2.val = get_val_fromArr(arr, "TS2-39", "val2");
          return;
        }
        if (get_val_fromArr(arr, "TS2-39", "val3")) {
          d.ts2_39.values.val3.val = get_val_fromArr(arr, "TS2-39", "val3");
          d.ts2_39.workuser = arr.workuser;
          d.ts2_39.workday = arr.updated_at;
          return;
        }
      });
    });
    Object.keys(d).forEach(function(code) {
      var flg = true;
      if (d[code].workday === "") {
        return;
      }
      Object.keys(d[code].values).forEach(function(val) {
        if (d[code].values[val].check.indexOf(d[code].values[val].val) < 0)
          flg = false;
      });
      d[code].check = flg;
    });
  },
  created: function() {}
};
</script>

<style lang="scss" scoped>
#chk_info {
  .title {
    width: 33%;
  }
  .check {
    width: 12%;
  }
  .user {
    width: 23%;
  }
  .day {
    width: 25%;
  }
  .link {
    width: 7%;
  }
}
</style>

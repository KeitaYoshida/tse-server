<template>
  <v-card v-if="tar.process" class="const_info" flat>
    <v-card-text>
      <table sticky_table width="100%">
        <template v-for="(item, index) in tar.process.process">
          <tr :key="'h' + index" width="100%">
            <td width="10rem">
              <v-chip
                small
                outline
                :class="switchCmptClass(item.cmpt_id) + ' mb-0'"
              >{{ getCmptName(item.cmpt_id) }}</v-chip>
            </td>
            <td class="status">
              <v-progress-linear :value="rtFlg(item)" :color="rtClass(item)"></v-progress-linear>
            </td>
          </tr>
          <tr :key="'v' + index">
            <td :class="'title_text ' + rtTitleClass(item)" colspan="2">
              <v-btn
                flat
                @click="selectProcess(item)"
              >{{ ("00" + (index + 1)).slice(-2) + ": " + item.title }}</v-btn>
            </td>
          </tr>
        </template>
      </table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      clSwitch: {
        flg: true,
        bVal: null
      }
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
    ...mapActions(["PROCESS_SERIAL_INFO", "PROCESS_INFO", "PROCESS_ITEMS_SET"]),
    init() {},
    getCmptName(id) {
      let d = this.tar.process.components.filter(ar => ar.cmpt_id === id);
      return d[0].cmpt_code.slice(0, 7) + "N" + d[0].cmpt_code.slice(7, 11);
    },
    switchCmptClass(id) {
      return (
        "row" +
        (this.tar.process.components.findIndex(
          ({ cmpt_id }) => cmpt_id === id
        ) %
          2)
      );
    },
    rtFlg(i) {
      let f0 = i["0"] !== undefined ? i["0"] : 0;
      let f1 = i["1"] !== undefined ? i["1"] : 0;
      let f2 = i["2"] !== undefined ? i["2"] : 0;
      let f3 = i["3"] !== undefined ? i["3"] : 0;
      let fa = f0 + f1 + f2 + f3;
      return (f2 / fa) * 100;
    },
    rtClass(i) {
      let per = this.rtFlg(i);
      let err = i["3"] !== undefined ? i["3"] : 0;
      if (per === 100) {
        return "#2e7d32";
      } else if (err > 0) {
        return "#F4511E";
      } else {
        return "#1565c0";
      }
    },
    rtTitleClass(i) {
      if (this.tar.process.info === null) {
        return "";
      }
      if (this.tar.process.info.row === i.row) {
        return "select";
      }
      return "";
    },
    async selectProcess(i) {
      let wid = this.tar.process.base.wid;
      let pInfo = {};
      let sInfo = {};
      let items = null;
      await this.PROCESS_SERIAL_INFO({});
      await this.PROCESS_INFO({});
      await this.wait(0.5);
      await axios
        .get("/db/workdata/process/status/" + wid + "/" + i.row)
        .then(res => {
          let d = [];
          res.data[0].serials.forEach(ar => {
            d.push({
              serial_id: ar.serial_id,
              worker: ar.process[0].worker,
              check_time: ar.process[0].check_time,
              process_status: ar.process[0].process_status
            });
          });
          this.PROCESS_SERIAL_INFO(d);
          sInfo = d;
          pInfo = i;
        });
      await axios.get("/db/workdata/cmpt/items/" + i.work_id).then(res => {
        // console.log(i.work_id);
        let d = [];
        let price = 0;
        res.data.forEach(cmpt => {
          // console.log("test");
          let item = cmpt.items;
          d.push({
            item_id: cmpt.item_id,
            item_code: item.item_code,
            item_rev: item.item_rev,
            item_use: cmpt.item_use,
            item_ren: cmpt.item_ren,
            item_name: item.item_name,
            order_code: item.order_code,
            item_model: item.item_model,
            item_class: item.item_class,
            last_num: item.last_num,
            appo_num: item.appo_num,
            order_num: item.order_num,
            inv_num: item.inv_num
          });
          price = price + Number(item.item_price);
        });
        items = d;
        pInfo.itemCheck = true;
        pInfo.setPrice = price;
        this.PROCESS_ITEMS_SET(d);
      });
      let allNum = sInfo.length;
      let finNum = sInfo.filter(ar => ar.process_status === 2).length;
      let makeNum = allNum - finNum;

      // console.log(pInfo);
      // console.log(sInfo);
      // console.log(items);
      items.forEach(item => {
        let useNum = item.item_use * makeNum;
        if (item.last_num < useNum) pInfo.itemCheck = false;
      });
      this.PROCESS_INFO(pInfo);
      // console.log(finNum + " / " + allNum);
    }
  }
};
</script>

<style lang="scss" scoped>
td.title_text button {
  font-size: 1.5rem;
}
td.title_text.select button {
  color: #1565c0;
}
td.status {
  font-size: 1rem;
}
tr:nth-child(odd) {
  td {
    padding: 0.3rem;
    padding-bottom: 0;
  }
}
tr:nth-child(even) {
  td {
    padding: 0.3rem;
    padding-top: 0;
    border-bottom: 0.5px solid #ddd;
    button {
      margin-top: 0;
    }
  }
}
.v-chip {
  border-radius: 2px !important;
}
.v-chip.row1 {
  color: #1565c0;
  border-color: #1565c0;
}
.v-chip.row0 {
  color: #2e7d32;
  border-color: #2e7d32;
}
.const_info {
  height: 70%;
  overflow-y: auto;
}
div.flex {
  height: 100%;
}
</style>

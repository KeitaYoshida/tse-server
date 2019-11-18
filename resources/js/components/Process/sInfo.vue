<template>
  <main>
    <v-card class="const_info" flat>
      <v-card-text>
        <div class="info-area">
          <div class="text-xs-left mb-1 mt-2">
            <v-chip v-if="tar.process.info.itemCheck === false" class="lowItem" color="error">部材不足</v-chip>
            <h3>{{ ("00" + (tar.process.info.row + 1)).slice(-2) + ": " + tar.process.info.title }}</h3>
            <v-btn
              color="#2e7d32"
              outline
              small
              v-if="tar.process.process_items.length!==0"
              dark
              @click="itemView = !itemView"
            >部材情報</v-btn>
            <v-btn color="#2e7d32" outline small v-else disabled>使用部材なし</v-btn>
            <v-btn
              color="#2e7d32"
              small
              v-if="tar.process.process_items.length!==0"
              dark
              @click="itemMonitor()"
            >部材モニタ</v-btn>
            <template v-for="(item, index) in statuses">
              <v-chip
                :key="index"
                v-if="item!==undefined"
                small
              >{{ tar.process.process_status[index].val + ': ' + item }}</v-chip>
            </template>
          </div>
          <div>
            <v-btn
              small
              color="#1565c0"
              outline
              :loading="btn_load"
              @click="loopAction()"
            >一括 {{ tar.process.process_status[act_val].val}}</v-btn>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="#2e7d32"
                  outline
                  small
                  v-on="on"
                >処理内容: {{ tar.process.process_status[act_val].val}}</v-btn>
              </template>
              <v-list>
                <v-list-tile
                  v-for="(item, index) in tar.process.process_status"
                  :key="index"
                  @click="rtActIndex(index)"
                >
                  <v-list-tile-title>{{ item.val }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  small
                  color="#2e7d32"
                  v-on="on"
                  outline
                >一括 {{ tar.process.process_status[act_val].val}} 台数：{{ set_num }} 台</v-btn>
              </template>
              <v-list>
                <v-list-tile
                  v-for="(item, index) in [25, 50, 100]"
                  :key="index"
                  @click="set_num = item"
                >
                  <v-list-tile-title>{{ item }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <label for="set_tar_val">
              開始NO：
              <input type="text" id="set_tar_val" v-model="set_tar_val" />
            </label>
          </div>
        </div>
        <table class="sticky_table val-area">
          <thead>
            <tr class="blank">
              <td class="text-xs-center"></td>
              <td v-for="(c, s) in tar.process.serials[0]" :key="s">
                <strong :class="'h ' + switchCmptClass(c.cmpt_id) + ' ' + selectCmpt(c.cmpt_id)">
                  <nobr>{{ getCmptName(c.cmpt_id) }}</nobr>
                </strong>
              </td>
              <td class="text-xs-center">
                <strong class="h">確認</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cmpt, index) in tar.process.serials" :key="index">
              <th class="no text-xs-center">
                <v-btn
                  color="#1565c0"
                  style="border-radius:3px;"
                  dark
                  v-if="tar.process.process_status[act_val].val === rtStatus(index)"
                >{{index + 1 }}: {{ rtStatus(index) }}</v-btn>
                <v-btn class="act" outline v-else @click="action(index)" :loading="btn_load">
                  {{index + 1 }}: {{ rtStatus(index) }}
                  <br />
                  -> {{ tar.process.process_status[act_val].val}}
                </v-btn>
              </th>
              <td
                v-for="(item, n) in cmpt"
                :key="n"
                :class="'text-xs-center ' + selectCmpt(item.cmpt_id)"
              >{{ item.serial_no }}</td>
              <td class="text-xs-center chk-info">
                <template v-if="tar.process.process_info[index].worker">
                  {{ tar.process.process_info[index].worker }}
                  <br />
                  {{ tar.process.process_info[index].check_time }}
                </template>
                <template v-else>未確認</template>
              </td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
    </v-card>
    <v-dialog v-model="itemView" :overlay="false" width="80%" height="80%">
      <UseItemList></UseItemList>
    </v-dialog>
  </main>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import load from "@/components/com/Loading";
import UseItemList from "@/components/com/ComUseItem";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

export default {
  props: [],
  components: { load, UseItemList },
  data: function() {
    return {
      act_val: 2,
      set_tar_val: 1,
      set_num: 25,
      btn_load: false,
      statuses: [],
      itemView: false,
      alertMessage: []
    };
  },
  computed: {
    ...mapState({
      tar: "target",
      user: "user_info"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions(["PROCESS_STATUS_UPDATE"]),
    init() {
      this.setStatus();
    },
    setStatus() {
      this.statuses = [];
      this.tar.process.process_info.forEach(ar => {
        if (this.statuses[ar.process_status] === undefined) {
          this.statuses[ar.process_status] = 1;
          return;
        }
        this.statuses[ar.process_status]++;
      });
    },
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
    selectCmpt(id) {
      if (id === this.tar.process.info.cmpt_id) return "select";
      return "";
    },
    rtStatus(n) {
      let v = this.tar.process.process_info[n].process_status;
      return this.tar.process.process_status[v].val;
    },
    rtActIndex(n) {
      this.act_val = n;
    },
    Item_Checker(n, now, to) {
      if (this.tar.process.process_items.length === 0) return;
      if (to === 2) {
        this.ItemUseAction();
      } else if (now === 2) {
        this.ItemReturnAction();
      }
    },
    ItemUseAction() {
      const URL = "/db/workdata/use/item/act/add/";
      let d = this.tar.process.process_items;
      let price = this.tar.process.info.setPrice;
      let wid = this.tar.process.base.wid;
      let cmpt = this.tar.process.info.cmpt_id;
      axios.post(URL + price + "/" + wid + "/" + cmpt, d).then(res => {});
    },
    ItemReturnAction() {
      const URL = "/db/workdata/use/item/act/rev/";
      let d = this.tar.process.process_items;
      let price = this.tar.process.info.setPrice;
      let wid = this.tar.process.base.wid;
      let cmpt = this.tar.process.info.cmpt_id;
      let pdct_id = this.tar.process.base.pdct_id;
      axios.post(URL + price + "/" + wid + "/" + cmpt, d).then(res => {});
    },
    async action(n, loopflg = false) {
      if (loopflg === false) {
        this.btn_load = true;
        this.alertMessage = [];
      }
      let shutoku_time = this.tar.process.process_info[n].check_time;
      let shutoku_status = this.tar.process.process_info[n].process_status;
      let d = {
        num: n,
        upval: this.tar.process.process_info[n],
        shutoku_time: shutoku_time
      };
      let now = {
        process_status: d.upval.process_status,
        worker: d.upval.worker,
        check_time: d.upval.check_time
      };
      d.upval.process_status = this.act_val;
      d.upval.worker = this.user.name;
      d.upval.check_time = dayjs().format("YY-MM-DD HH:mm:ss");
      let row = this.tar.process.info.row;
      let rt = await axios.post("/db/workdata/set/sn/act/" + row, d);
      if (rt.data === 0) {
        d.upval.process_status = now.process_status;
        d.upval.worker = now.worker;
        d.upval.check_time = now.check_time;
        this.alertMessage.push(n);
      } else {
        this.Item_Checker(n, shutoku_status, this.act_val);
        await this.PROCESS_STATUS_UPDATE(d);
        this.setStatus();
        this.set_tar_val = n + 2;
      }
      // return;
      if (loopflg === false) {
        this.alertFail();
        await this.$emit("reload");
        this.btn_load = false;
      }
    },
    async loopAction() {
      let pinfo = this.tar.process.process_info;
      let num = this.set_num;
      let st_num = this.set_tar_val - 1;
      let max_num = pinfo.length;
      this.btn_load = true;
      this.alertMessage = [];
      for (let i = 0; i < num; i++) {
        let tar_num = st_num + i;
        if (tar_num >= max_num) break;
        if (pinfo[tar_num].process_status === this.act_val) continue;
        await this.action(tar_num, true);
      }
      this.alertFail();
      await this.$emit("reload");
      this.btn_load = false;
    },
    alertFail() {
      // console.log(this.alertMessage);
      if (this.alertMessage.length === 0) return;
      let mess = "排他処理エラー：別作業者により更新済みデータです\n";
      this.alertMessage.forEach(row => {
        mess = mess + "No. " + (Number(row) + Number(1)) + " \n";
      });
      alert(mess);
      this.$emit("reload");
    },
    itemMonitor() {
      // this.$router.push("/item_monitor/89")
      window.open(
        "http://192.168.13.103:8000/item_monitor/" +
          this.tar.process.info.work_id
      );
    }
  }
};
</script>

<style lang="scss" scoped>
strong.h {
  font-size: 1rem;
  display: block;
  text-align: center;
  margin-top: 1rem;
  &.row0 {
    color: #2e7d32;
    border-color: #2e7d32;
  }
  &.row1 {
    color: #1565c0;
    border-color: #1565c0;
  }
  &.select {
    border-bottom: 1px solid;
  }
}
td.select {
  font-weight: 900;
  color: #1565c0;
}
.v-chip.row1 {
  color: white;
  background-color: #1565c0;
  border-color: #1565c0;
  border-radius: 5px;
}
.v-chip.row0 {
  color: white;
  background-color: #2e7d32;
  border-color: #2e7d32;
  border-radius: 5px;
}
.v-chip.row1.v-chip--outline {
  color: #1565c0;
  border-color: #1565c0;
}
.v-chip.row0.v-chip--outline {
  color: #2e7d32;
  border-color: #2e7d32;
}
.v-menu {
  display: inline;
}
label {
  font-size: 1rem;
}
#set_tar_val {
  width: 100px;
  border-bottom: 1px solid gray;
}
h3 {
  display: inline;
}
.const_info {
  height: 100%;
}
.info-area {
  height: 17%;
  overflow: hidden;
}
.val-area {
  height: 83%;
  overflow: auto;
}
.v-card__text {
  height: 100%;
}
button.act {
  height: 3rem;
  margin: 0;
  border-radius: 2px;
  color: #1565c0;
}
div.flex {
  height: 100%;
}
th,
td {
  padding: 0.6rem 0;
  border-bottom: 0.8px solid rgb(214, 212, 212);
  font-size: 1.5rem;
  font-weight: 400;
  height: 4rem;
  vertical-align: middle;
}
th.no {
  color: darkgray;
}
.sticky_table {
  display: block;
  position: relative;
  // overflow: scroll;
  // width: calc(100vw - 3rem);
  // height: calc(80vh);
  border-collapse: collapse;
  font-size: 0;
}
.sticky_table thead,
.sticky_table tbody {
  display: block;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
}
.sticky_table th,
.sticky_table td {
  display: inline-block;
  width: 10rem;
  background: #fff;
  font-size: 1.5rem;
}
.sticky_table thead {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}
.sticky_table tbody th {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: 1;
}
.sticky_table thead th.blank {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
}
td.chk-info {
  font-size: 0.9rem;
}
.lowItem {
  border-radius: 5px;
  color: white;
}
</style>

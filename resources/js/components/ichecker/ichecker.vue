<template>
  <v-app>
    <v-container grid-list-xs>
      <transition name="fade" mode="out-in">
        <template v-if="orders===null" mode="in-out">
          <div>
            <h3 class="flash">手配データ取得中</h3>
            <Loading></Loading>
          </div>
        </template>
        <template v-else-if="worklist===null">
          <div>
            <h3 class="flash">手配データ --> 工事データ取得中</h3>
            <Loading></Loading>
          </div>
        </template>
        <template v-else-if="orderSum">
          <div>
            <v-btn color="primary" large @click="getProcessData()">工事データ取り込み</v-btn>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-data-table
              :headers="headers"
              :items="orderSum"
              class="elevation-1 my-3"
              :pagination.sync="pagination"
              item-key="item_id"
              :search="search"
            >
              <template v-slot:items="props">
                <tr @click="props.expanded = !props.expanded">
                  <td class="text-xs-center">{{ props.item.item_code }}</td>
                  <td class="text-xs-center">
                    <p>{{ props.item.item_model }}</p>
                    <p>{{ props.item.item_name }}</p>
                  </td>
                  <td class="text-xs-center py-2">
                    <div
                      :class="'coverNum '  + rtClass(props.item.clast_num_org, props.item.clast_num_set)"
                    >
                      <p>実：{{ props.item.clast_num_org }}</p>
                      <p>計：{{ props.item.clast_num_set }}</p>
                    </div>
                  </td>
                  <td class="text-xs-center py-2">
                    <div
                      :class="'coverNum '  + rtClass(props.item.cappo_num_org, props.item.cappo_num_set)"
                    >
                      <p>実：{{ props.item.cappo_num_org }}</p>
                      <p>計：{{ props.item.cappo_num_set }}</p>
                    </div>
                  </td>
                  <td class="text-xs-center py-2">
                    <div
                      :class="'coverNum '  + rtClass(props.item.corder_num_org, props.item.corder_num_set)"
                    >
                      <p>実：{{ props.item.corder_num_org }}</p>
                      <p>計：{{ props.item.corder_num_set }}</p>
                    </div>
                  </td>
                  <td class="text-xs-center py-2">
                    <div
                      :class="'coverNum '  + rtClass(props.item.corder_num_org + props.item.clast_num_org - props.item.cappo_num_org, props.item.corder_num_set + props.item.clast_num_set - props.item.cappo_num_set)"
                    >
                      <p>実：{{ props.item.corder_num_org + props.item.clast_num_org - props.item.cappo_num_org }}</p>
                      <p>計：{{ props.item.corder_num_set + props.item.clast_num_set - props.item.cappo_num_set }}</p>
                    </div>
                  </td>
                </tr>
              </template>
              <template v-slot:expand="props">
                <v-layout row wrap pa-1>
                  <v-flex xs6 pa-1>
                    <v-layout row wrap>
                      <v-flex
                        xs6
                        v-for="(order, index) in props.item.cnt_order_code"
                        :key="index"
                        pa-1
                      >
                        <v-card :class="'pa-2 ' + returnOrderClass(order)" color="primary--text">
                          <p>形式番号：{{order.model_code}}</p>
                          <p>工事番号：{{order.order_code}}</p>
                          <p>注文ID：{{order.order_id}}</p>
                          <p>発注数：{{order.order_num}}</p>
                          <p>予約数：{{order.appo_num}}</p>
                          <p>受入数：{{order.recept_num}}</p>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs6 pa-2>
                    <v-layout row wrap>
                      <v-flex xs6 v-for="(process, index) in props.item.process" :key="index" pa-1>
                        <v-card color="success--text" class="pa-2">
                          <p>工事番号：{{process.work_code}}</p>
                          <p>員数：{{process.cmpt_use_num}}</p>
                          <p>完了台数：{{process.fin_serial}}</p>
                          <p>使用数：{{process.use_num}}</p>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </template>
            </v-data-table>
          </div>
        </template>
      </transition>
      <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition">
        <v-card>
          <v-alert type="info" :value="true" outline>
            <v-progress-linear :value="progress"></v-progress-linear>
          </v-alert>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from "@/components/com/Loading";

export default {
  props: [],
  components: {
    Loading
  },
  data: function() {
    return {
      orders: null,
      orderSum: null,
      worklist: null,
      models: null,
      checkWorklist: null,
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 4,
        sortBy: "fat",
        totalItems: 0,
        rowsPerPageItems: [1, 2, 4, 8, 16]
      },
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "形式・品名", value: "item_model", align: "center" },
        { text: "在庫数", value: "item_code", align: "center" },
        { text: "予約数", value: "item_code", align: "center" },
        { text: "発注数", value: "item_code", align: "center" },
        { text: "残物品", value: "item_code", align: "center" }
      ],
      search: "",
      dialog: false,
      progress: 0
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
    ...mapActions([]),
    async init() {
      let orders = await axios.get("/db/order/get/all/order");
      this.orders = orders = orders.data;
      let worklist = await axios.get("/db/workdata/get/worklist/not/start");
      this.worklist = worklist = worklist.data;
      let models = await axios.get("/db/model_mst/list");
      this.models = models = models.data;
      let orderlist = await axios.get("/db/order/mini");
      orderlist = orderlist.data;
      let orderSum = [];
      orders.forEach(order => {
        let iid = order.item_id;
        let tar = orderSum.filter(ar => ar.item_id === iid);
        let model = orderlist.filter(
          ar => ar.cnt_order_code === order.cnt_order_code
        );
        model = model[0].cnt_model;
        if (tar.length === 0) {
          tar = [
            {
              item_id: order.item_id,
              item_code: order.item.item_code,
              item_model: order.item.item_model,
              item_name: order.item.item_name,
              clast_num_org: order.item.last_num,
              cappo_num_org: order.item.appo_num,
              corder_num_org: order.item.order_num,
              // --- counter
              cnt_order_code: [
                {
                  order_id: order.cnt_order_id,
                  order_code: order.cnt_order_code,
                  order_num: order.num_order,
                  appo_num: order.appo_num,
                  recept_num: order.num_recept,
                  model_code: model
                }
              ],
              process: [],
              num_order: order.num_order,
              num_appo: order.appo_num,
              num_recept: order.num_recept,
              // --- setter
              clast_num_set: order.num_recept,
              cappo_num_set: order.appo_num,
              corder_num_set:
                order.num_order - order.num_recept < 0
                  ? 0
                  : order.num_order - order.num_recept
            }
          ];
          orderSum.push(tar[0]);
        } else {
          tar[0].cnt_order_code.push({
            order_id: order.cnt_order_id,
            order_code: order.cnt_order_code,
            order_num: order.num_order,
            appo_num: order.appo_num,
            recept_num: order.num_recept,
            model_code: model
          });
          tar[0].num_order = tar[0].num_order + order.num_order;
          tar[0].num_recept = tar[0].num_recept + order.num_recept;
          tar[0].num_appo = tar[0].num_appo + order.appo_num;
          tar[0].clast_num_set = tar[0].clast_num_set + order.num_recept;
          tar[0].cappo_num_set = tar[0].cappo_num_set + order.appo_num;
          tar[0].corder_num_set =
            tar[0].corder_num_set +
            (order.num_order - order.num_recept < 0
              ? 0
              : order.num_order - order.num_recept);
        }
      });
      this.orderSum = orderSum;
      console.log(worklist);
      console.log(orderSum);
    },
    rtClass(org, set) {
      if (org > set) {
        return "bigOrg";
      } else if (org < set) {
        return "bigSet";
      } else {
        return "even";
      }
    },
    async getProcessData() {
      this.dialog = true;
      let progressNum = this.worklist.length;
      let i = 0;
      this.worklist.forEach(async (work, index) => {
        this.oneProcessData(work.worklist_id, work.worklist_code);
        // this.progress = (i + 1 / progressNum) * 100;
      });
      // console.log(this.worklist);
    },
    async oneProcessData(id, code) {
      const Fin = 2;
      let list = await axios.get("/db/workdata/process/" + id);
      let process = {};
      list.data[0].serials.forEach(serial => {
        serial.process.forEach(p => {
          if (p.process_status === Fin) {
            process[p.work_id] =
              process[p.work_id] === undefined ? 1 : process[p.work_id] + 1;
          }
        });
      });
      // console.log(process);
      let items = this.orderSum;
      Object.keys(process).forEach(pid => {
        axios.get("/db/workdata/cmpt/items/" + pid).then(res => {
          res.data.forEach(item => {
            let tar = items.filter(ar => ar.item_id === item.item_id);
            tar[0].clast_num_set =
              tar[0].clast_num_set - Number(item.item_use) * process[pid];
            tar[0].cappo_num_set =
              tar[0].cappo_num_set - Number(item.item_use) * process[pid];
            tar[0].process.push({
              work_id: id,
              work_code: code,
              fin_serial: process[pid],
              cmpt_use_num: item.item_use,
              use_num: process[pid] * Number(item.item_use)
            });
            console.log(Number(item.item_use) * process[pid]);
          });
        });
      });
      return 1;
    },
    returnOrderClass(order) {
      if (
        order.order_num === order.appo_num &&
        order.order_num === order.recept_num
      ) {
        return "recepted";
      } else {
        return "norecept";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recepted {
  color: dimgrey !important;
}
.coverNum {
  border: 1px solid black;
  border-radius: 3px;
  font-size: 1.2rem;
  &.bigOrg {
    border-color: #2e7d32;
    color: #2e7d32;
  }
  &.bigSet {
    border-color: #ef6c00;
    color: #ef6c00;
  }
  &.even {
    border-color: #283593;
    color: #283593;
  }
}
p {
  margin: 0;
}
.flash {
  animation: flash 2s linear infinite;
  margin-top: 10%;
  text-align: center;
  color: cornflowerblue;
}

@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
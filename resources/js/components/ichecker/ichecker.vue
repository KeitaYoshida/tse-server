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
            <v-btn color="primary" large>工事データ取り込み</v-btn>
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
              </template>
            </v-data-table>
          </div>
        </template>
      </transition>
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
      search: ""
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
      let orderSum = [];
      orders.forEach(order => {
        let iid = order.item_id;
        let tar = orderSum.filter(ar => ar.item_id === iid);
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
              cnt_order_code: [order.cnt_order_code],
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
          tar[0].cnt_order_code.push(order.cnt_order_code);
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
    }
  }
};
</script>

<style lang="scss" scoped>
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
<template>
  <v-app>
    <v-container grid-list-xs fluid id="inventory">
      <v-tabs v-model="tab" slider-color="primary" fixed-tabs class="trance-tab">
        <v-tab>部材別集計リスト</v-tab>
        <v-tab>発注コード別集計リスト</v-tab>
        <v-tab>集計履歴</v-tab>
        <v-tabs-items>
          <transition name="fade" mode="out-in">
            <BuzaiList v-if="tab === 0" />
            <OrderList v-if="tab === 1" />
            <InvHistory v-if="tab === 2" />
          </transition>
        </v-tabs-items>
      </v-tabs>
    </v-container>
  </v-app>
</template>

<script>
// import HorizontalBarChart from "./test";
import BuzaiList from "./BuzaiList";
import OrderList from "./OrderList";
import InvHistory from "./InvHistory";

export default {
  components: {
    BuzaiList,
    OrderList,
    InvHistory
  },
  data: function() {
    return {
      tab: null
    };
  }
};
</script>

<style lang="scss" >
.trance-tab .v-tabs__bar {
  background-color: transparent;
}
#inventory {
  .v-card {
    .v-card__title {
      font-size: 2rem;
    }
    height: 100%;
    padding: 1rem;
    padding-bottom: 3rem;
  }
  table#info {
    width: 95%;
    margin: 0 auto;
    tr {
      border-bottom: 1px dashed #666;
      td {
        font-size: 1.5rem;
        padding: 0.5rem;
      }
    }
  }
  table.v-datatable {
    td {
      text-align: center;
    }
    #item_info {
      tr {
        border-bottom: 1px solid #777;
      }
      td {
        height: 24px;
        &.title,
        &.icom {
          font-size: 1rem !important;
          padding: 0.1rem;
          font-weight: normal;
        }
      }
    }
  }
}
</style>

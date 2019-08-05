<template>
  <v-app>
    <v-container grid-list-sm>
      <h1 class="text-xs-center mb-5">Welcom to Torks WEB</h1>
      <v-layout wrap v-if="yoyaku_list" class="mb-4">
        <v-flex xs12 md10 offset-md1>
          <v-tabs
            v-model="tabs"
            color="transparent"
            slider-color="primary"
            fixed-tabs
            class="tab_list mb-3"
          >
            <v-tab v-for="(item, index) in tab_list" :key="index">
              <template v-if="index===0 && tabs===0">
                <v-icon small left>far fa-meh</v-icon>
              </template>
              <template v-if="index===0 && tabs!==0">
                <v-icon small left>far fa-smile</v-icon>
              </template>
              <template v-if="tab_list_counter[index]!==undefined">
                <v-badge right small>
                  <template v-slot:badge>
                    <span>{{ tab_list_counter[index] }}</span>
                  </template>
                  {{item}}
                </v-badge>
              </template>
              <template v-else>{{item}}</template>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs" v-if="tabs!==null">
            <v-tab-item></v-tab-item>
            <v-tab-item>
              <v-card class="top-alert pa-2" flat>
                <v-layout wrap>
                  <v-flex xs12 class="text-xs-center">
                    <v-btn
                      color="success"
                      flat
                      large
                      outline
                      class="order_act_btn"
                      to="/order_list/yoyaku"
                    >一括手配</v-btn>
                  </v-flex>
                  <template v-for="(item, index) in yoyaku_list">
                    <v-flex xs4 lg3 :key="index" class="info-box">
                      <v-card flat class="pt-2">
                        <nobr>
                          <v-chip
                            small
                            outline
                            :class="'ml-3 ' + 'o-flg-' + item.cnt_order_list_status"
                          >{{ item.status.val }}</v-chip>
                          <v-chip
                            small
                            outline
                            :class="'l-flg-' + item.cnt_status"
                          >{{ item.order_status.val }}</v-chip>
                        </nobr>
                        <v-card-text class="text-xs-center pt-2 pb-0 mb-0">
                          <p>{{ item.cnt_model }}</p>
                          <p>{{ item.cnt_order_code }}</p>
                          <p>{{ item.user_yoyaku }}</p>
                        </v-card-text>
                        <v-card-actions>
                          <v-layout wrap>
                            <v-flex xs6 class="text-xs-center">
                              <v-btn
                                flat
                                color="primary"
                                :to="'/order_list/' + item.cnt_order_code"
                              >詳細</v-btn>
                            </v-flex>
                            <v-flex xs6 class="text-xs-center">
                              <template v-if="item.cnt_status===0">
                                <v-btn flat color="primary" @click="order_horyu(item)">保留</v-btn>
                              </template>
                              <template v-else>
                                <v-btn flat color="primary" @click="order_horyu(item)">承認待ち</v-btn>
                              </template>
                            </v-flex>
                          </v-layout>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </template>
                </v-layout>
              </v-card>
            </v-tab-item>
            <v-tab-item></v-tab-item>
            <v-tab-item></v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="item_list"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="equipStartCheck"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="petition"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="inventory"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="readfile"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="model_mst"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="recept_list"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="product_list"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="user_info"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="ukeire"></common-cards>
        </v-flex>
        <v-flex d-flex xs6 md4 lg3>
          <common-cards card_name="tehaisaki"></common-cards>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import CommonCards from "./CommonCards";

export default {
  components: {
    CommonCards
  },
  data: function() {
    return {
      yoyaku_list: null,
      tabs: null,
      tab_list: ["Information", "手配予約", "各種申請", "承認待ち"],
      tab_list_counter: []
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("/db/order/yoyaku/gaiyou").then(res => {
        this.yoyaku_list = res.data;
        this.tab_list_counter[1] = res.data.length;
      });
      let d = {
        text: "hoge",
        val: "huga"
      };
      // axios.post("/Firebase/test", d).then(res => {
      //   console.log(res);
      // });
    },
    order_horyu(item) {
      if (item.cnt_status === 0) {
        item.cnt_status = 8;
        item.order_status.val = "保留";
        axios.get(
          "/db/order/list/col/up/" + item.cnt_orderlist_id + "/cnt_status/" + 8
        );
      } else {
        item.cnt_status = 0;
        item.order_status.val = "承認待ち";
        axios.get(
          "/db/order/list/col/up/" + item.cnt_orderlist_id + "/cnt_status/" + 0
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 40px;
}
.layout.gadget {
  margin-top: 40px;
}
.top-alert.v-card {
  background: transparent;
}
.tab_list {
  background: transparent;
}
.order_act_btn {
  width: 25%;
}
.info-box {
  font-size: 1rem;
  .v-card {
    border: 1px solid #1a237e;
    color: #1a237e;
    border-radius: 5px;
    height: 100%;
    background: transparent;
  }
  .v-chip {
    font-size: 0.8rem;
    border-radius: 5px;
    padding: 0;
    &.o-flg-0 {
      color: #1a237e;
      border-color: #1a237e;
    }
    &.l-flg-0 {
      color: #1a237e;
      border-color: #1a237e;
    }
    &.o-flg-1 {
      color: #bf360c;
      border-color: #bf360c;
    }
    &.o-flg-2 {
      color: #1b5e20;
      border-color: #1b5e20;
    }
  }
  p {
    margin: 0;
    padding: 0;
  }
}
// svg {
//   path:hover {
//     animation: colorChange 1s ease forwards;
//   }
// }
// @keyframes colorChange{
//     100% {
//         fill: #FF0000;
//     }
// }
</style>


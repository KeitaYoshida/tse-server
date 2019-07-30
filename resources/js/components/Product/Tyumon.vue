<template>
  <v-layout row wrap fill-height>
    <v-flex v-for="(item, index) in target.orders" :key="index" xs6 md4 lg3 class="pa-3 tyumon">
      <v-card flat>
        <v-card-title primary-title>
          <v-chip
            small
            outline
            dark
            :class="'chip ' + rtOrderClass(item.order_status.val)"
          >{{ item.order_status.val }}</v-chip>
          <v-chip
            small
            outline
            dark
            :class="'chip ' + rtOrderFlg(item.status.val)"
          >{{ item.status.val }}</v-chip>
        </v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs5>
              <span class="mini">手配形式:</span>
            </v-flex>
            <v-flex xs7>
              <p>{{ item.cnt_model }}</p>
              <p
                v-if="item.cnt_model_rev !== null"
                class="mini"
              >( {{ item.cnt_model_rev.numToRev() }} )</p>
            </v-flex>
            <v-flex xs5>
              <span class="mini">手配コード:</span>
            </v-flex>
            <v-flex xs7>
              <span>{{ item.cnt_order_code }}</span>
            </v-flex>
            <v-flex xs5>
              <span class="mini">手配予約者:</span>
            </v-flex>
            <v-flex xs7>
              <span>{{ item.user_yoyaku }}</span>
            </v-flex>
            <v-flex xs5>
              <span class="mini">手配者:</span>
            </v-flex>
            <v-flex xs7>
              <span>{{ item.user_order }}</span>
            </v-flex>
            <v-flex xs5>
              <span class="mini">手配総額:</span>
            </v-flex>
            <v-flex xs7>
              <span>{{ item.order_price === null ? 0 : item.order_price.toLocaleString() }}</span>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="pt-0 text-xs-center">
          <v-layout row wrap>
            <v-flex xs6>
              <v-btn flat small class="caption" :to="'/order_list/' + item.cnt_order_code">手配</v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn flat small class="caption" color="warning">取消</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs6 md4 lg3 class="pa-3 tyumon_order">
      <v-card class="add_button" flat height="100%">
        <v-btn outline dark large @click="selectModel=!selectModel">構成部材発注</v-btn>
      </v-card>
    </v-flex>
    <v-dialog
      v-model="selectModel"
      :overlay="false"
      max-width="680px"
      transition="dialog-transition"
      v-if="selectModel"
    >
      <MakeOrder
        :target="target"
        :ccode="target.const_code + '_' + target.orders.length"
        :model_data="model_data"
      ></MakeOrder>
    </v-dialog>
  </v-layout>
</template>

<script>
import MakeOrder from "./Tyumon/MakeOrder";

export default {
  components: {
    MakeOrder
  },
  props: ["target", "model_data"],
  data: function() {
    return {
      selectModel: false,
      items: null,
      headers: null
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      switch (this.target.pdct_class) {
        case "部材":
          break;
        default:
          break;
      }
    },
    rtOrderClass(val) {
      switch (val) {
        case "承認待ち":
          return "cShoninmachi";
          break;
        case "発注済":
          return "cHatyuzumi";
          break;
        case "保留":
          return "cHoryu";
          break;
        default:
          return "cShoninEtc";
          break;
      }
    },
    rtOrderFlg(val) {
      switch (val) {
        case "工事手配":
          return "cKoziTehai";
          break;
        case "不良手配":
          return "cHuryoTehai";
          break;
        case "追加手配":
          return "cTuikaTehai";
          break;
        default:
          return "cTehaiEtc";
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
.v-card {
  text-align: center;
}
.tyumon_order {
  min-height: 200px;
  .v-card {
    background-color: #4caf50;
    color: #fff;
  }
}
.tyumon {
  .v-card {
    border: 1px solid #4caf50;
    color: #1b5e20;
  }
}
.mini {
  font-size: 0.7rem;
}
.add_button {
  button {
    position: absolute;
    top: 45%;
    left: 48%;
    transform: translateY(-50%) translateX(-50%);
  }
}
.v-card__title {
  padding: 0;
  font-size: 0.9rem;
  .v-chip {
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 5px;
  }
}
.v-card__title--primary {
  padding: 0;
}
.v-card__actions {
  .v-btn {
    font-size: 0.8rem;
    color: #1b5e20;
  }
}
.v-chip.v-chip.v-chip--outline.chip {
  border-radius: 5px;
}
</style>


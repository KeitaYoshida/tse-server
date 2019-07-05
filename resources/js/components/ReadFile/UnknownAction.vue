<template v-if="unknown">
  <div>
    <h2 class="mt-5 mb-3">不明データ処理選択</h2>
    <v-chip class="notpd" outline>緑：製造コード未発行</v-chip>
    <v-chip class="notdt" outline>青：注文書明細番号未発行</v-chip>
    <v-chip class="etc" outline>灰：その他データ</v-chip>
    <v-layout row wrap class="mt-3">
      <v-flex xs6 md6 lg4 v-for="(item, index) in unknown" :key="index">
        <v-card :class="addClass(item)">
          <v-card-text class="text">
            <v-chip outline>
              <v-icon small>far fa-id-badge</v-icon>
              ID : {{item.recept_id}}
            </v-chip>
            <v-chip outline @click="viewDetail(item)" hover>
              <v-icon small>fas fa-info-circle</v-icon>
              発番 : {{item.order_code}}
            </v-chip>
            <p v-if="item.detail_code">{{item.detail_code}}</p>
            <p class="constCode">
              {{item.const_code}}
              <span class="orderNum">{{ item.order_num }} EA</span>
            </p>
            <p class="rcptCode">{{item.recept_code}}</p>
            <p class="rcptName">{{item.recept_name}}</p>
          </v-card-text>
          <v-card-actions>
            <v-layout wrap>
              <v-flex xs4 class="text-xs-center">
                <v-btn outline class="btn-text" @click="act(index, 'del')">削除</v-btn>
              </v-flex>
              <v-flex xs4 class="text-xs-center">
                <v-btn outline class="btn-text" @click="act(index, 'put')">納品済</v-btn>
              </v-flex>
              <v-flex xs4 class="text-xs-center">
                <v-btn outline class="btn-text" @click="act(index, 'keep')">保留</v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
      v-if="item"
    >
      <ReceptDetail :item="item"></ReceptDetail>
    </v-dialog>
  </div>
</template>

<script>
import ReceptDetail from "./ReceptDetail";

export default {
  components: {
    ReceptDetail
  },
  props: ["unknown"],
  data: function() {
    return {
      item: null,
      dialog: false
    };
  },
  methods: {
    act(index, act) {
      this.$emit("act", index, act);
    },
    addClass(item) {
      let add = "";
      if (item.detail_code === null) {
        add = add + " notdetail";
      }
      if (item.pdct_id === null) {
        add = add + " notpdct";
      }
      return "receptions" + add;
    },
    viewDetail(item) {
      this.item = item;
      this.dialog = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.entry p {
  margin: 0;
}
.receptions {
  background-color: transparent;
  margin: 0.5rem;
  border-radius: 10px;
  border: 1px solid #263238;
  color: #455a64;
  .v-chip,
  .btn-text {
    border-color: #303f9f;
    color: #1a237e;
  }
  &.notdetail {
    border: 1px solid #303f9f;
    color: #1a237e;
    .v-chip,
    .btn-text {
      border-color: #303f9f;
      color: #1a237e;
    }
  }
  &.notpdct {
    border: 1px solid #388e3c;
    color: #1b5e20;
    .v-chip,
    .v-chip,
    .btn-text {
      border-color: #388e3c;
      color: #1b5e20;
    }
  }
  .v-chip {
    border-radius: 10px;
    margin-bottom: 1rem;
    i {
      padding-right: 0.5rem;
    }
  }
}
.v-chip.notpd {
  border-color: #388e3c;
  color: #1b5e20;
}
.v-chip.notdt {
  border-color: #303f9f;
  color: #1a237e;
}
.v-chip.etc {
  border: 1px solid #263238;
  color: #455a64;
}
.orderNum {
  padding: 0 0.8rem;
  font-size: 0.7rem;
}
.text,
.btn-text {
  font-size: 1rem;
}
.btn-text {
  height: 1.5rem;
}
.rcptCode {
  font-size: 1.2rem;
}
.rcptName {
  font-size: 0.8rem;
  padding-left: 1.5rem;
}
</style>

<template>
  <v-card>
    <v-card-text>
      <v-chip outline :class="view_class[view_flg]">{{ view_val[view_flg] }}</v-chip>
      <br />
      <v-chip outline :class="view_class[view_flg]">
        <v-icon small>far fa-id-badge</v-icon>
        ID : {{item.recept_id}}
      </v-chip>
      <v-chip outline :class="view_class[view_flg]">
        <v-icon small>fas fa-info-circle</v-icon>
        <template v-if="detail_flg === false">発番 : {{item.order_code}}</template>
        <template v-else>明細 : {{item.detail_code}}</template>
      </v-chip>
      <hr :class="view_class[view_flg]" />
      <div :class="'detail ' + view_text[view_flg]" outline>
        <v-layout wrap>
          <v-flex xs4>工事番号</v-flex>
          <v-flex xs8>{{ item.const_code }}</v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs4>形式</v-flex>
          <v-flex xs8>{{ item.recept_code }}</v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs4>品名</v-flex>
          <v-flex xs8>{{ item.recept_name }}</v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs4>受注数 単価</v-flex>
          <v-flex xs4>{{ item.order_num }} EA</v-flex>
          <v-flex xs4 v-if="detail_flg">{{ item.order_price_one }} ¥</v-flex>
          <v-flex xs4 v-else class="mini grey--text text--darken-1">(未確定)</v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs4>依頼日</v-flex>
          <v-flex xs8>{{ item.day3_irai }}</v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs4>納入指定日</v-flex>
          <v-flex xs8>{{ item.day3_nonyu_shitei }}</v-flex>
        </v-layout>
        <v-layout wrap v-if="detail_flg">
          <v-flex xs4>発注日</v-flex>
          <v-flex xs8>{{ item.day5hatyu }}</v-flex>
        </v-layout>
        <v-layout wrap v-if="detail_flg">
          <v-flex xs4>納入予定日</v-flex>
          <v-flex xs8>{{ item.day5nonyu_yotei }}</v-flex>
        </v-layout>
        <v-layout wrap v-if="item.memo_bikou1 !== null">
          <v-flex xs4>備考１</v-flex>
          <v-flex xs8>{{ item.memo_bikou1 }}</v-flex>
        </v-layout>
        <v-layout wrap v-if="item.memo_bikou2 !== null">
          <v-flex xs4>備考２</v-flex>
          <v-flex xs8>{{ item.memo_bikou2 }}</v-flex>
        </v-layout>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
  data: function() {
    return {
      detail_flg: false,
      product_flg: false,
      view_flg: 0,
      view_val: [
        "発注データ（製造未登録）",
        "明細データ（製造未登録）",
        "発注データ（製造登録済み）",
        "明細データ（製造登録済み）"
      ],
      view_class: [
        "green darken-4 green--text text--darken-4",
        "blue darken-4 blue--text text--darken-4",
        "green darken-4 green--text text--darken-4",
        "blue darken-4 blue--text text--darken-4"
      ],
      view_text: [
        "green--text text--darken-4",
        "blue--text text--darken-4",
        "green--text text--darken-4",
        "blue--text text--darken-4"
      ]
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      let i = this.item;
      if (i.detail_code !== null) {
        this.detail_flg = true;
      }
      if (i.pdct_id !== null) {
        this.product_flg = true;
      }
      if (this.detail_flg === false && this.product_flg === false) {
        this.view_flg = 0;
      } else if (this.detail_flg === true && this.product_flg === false) {
        this.view_flg = 1;
      } else if (this.detail_flg === false && this.product_flg === true) {
        this.view_flg = 2;
      } else if (this.detail_flg === true && this.product_flg === true) {
        this.view_flg = 3;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-chip {
  border-radius: 10px;
  i {
    padding-right: 0.5rem;
  }
}
.detail {
  font-size: 1rem;
  text-align: center;
}
.mini {
  font-size: 0.7rem;
}
</style>

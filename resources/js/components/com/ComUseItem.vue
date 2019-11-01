<template>
  <v-card>
    <v-card-text>
      <v-chip outline color="primary">形式： {{ tar.process.base.mcode }}</v-chip>
      <v-chip outline color="primary">工事番号： {{ tar.process.base.wcode }}</v-chip>
      <v-chip outline color="primary">使用部材点数： {{ tar.process.process_items.length }} 点</v-chip>
      <table class="my-5">
        <thead>
          <tr>
            <th>品目コード</th>
            <th>形式・品名</th>
            <th>必要数</th>
            <th>残数</th>
          </tr>
        </thead>
        <tr
          v-for="(item, index) in tar.process.process_items"
          :key="index"
          :class="returnNumFlg(item.item_use * tar.process.info.all, item.last_num)"
        >
          <td>{{ item.item_code }}</td>
          <td>
            {{ item.item_model }}
            <br />
            {{ item.item_name }}
          </td>
          <td>
            <span class="bigNum">{{ item.item_use * tar.process.info.all }}</span>
            <br />
            <span class="mini">( {{ item.item_use}} )</span>
          </td>
          <td>
            <span class="bigNum">{{ item.last_num }}</span>
          </td>
        </tr>
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
    return {};
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
    ...mapActions([]),
    init() {},
    returnNumFlg(needNum, lastNum) {
      if (needNum > lastNum) return "lessItem";
    }
  }
};
</script>

<style lang="scss" scoped>
table,
tr {
  width: 100%;
}
th,
td {
  font-weight: 100;
  font-size: 1rem;
  width: 25%;
  padding: 0.5rem;
  text-align: center;
  border-bottom: 0.8px solid rgb(214, 212, 212);
}
.mini {
  font-size: 0.8rem;
}
tr.lessItem {
  color: red;
}
.bigNum {
  font-size: 1.2rem;
}
</style>

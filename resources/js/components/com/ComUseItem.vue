<template>
  <v-card>
    <v-card-text>
      <p>{{ tar.process.process_items.length }} 点</p>
      <table>
        <thead>
          <tr>
            <th>品目コード</th>
            <th>品名</th>
            <th>品目形式</th>
            <th>使用数</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in tar.process.process_items" :key="index">
          <td>{{ item.item_code }}</td>
          <td>{{ item.item_name }}</td>
          <td>{{ item.item_model }}</td>
          <td>{{ item.item_use }}</td>
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
    init() {}
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
  width: 25%;
  padding: 0.5rem;
  text-align: center;
  border-bottom: 0.8px solid rgb(214, 212, 212);
}
</style>

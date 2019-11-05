<template>
  <v-app>
    <v-container grid-list-xs>
      <template v-if="totalPrice!==0">
        <v-btn icon color="primary" flat @click="$router.go(-1)">
          <v-icon>fas fa-angle-double-left</v-icon>
        </v-btn>
        <v-btn color="primary" outline>{{workdata.model.model_code}}</v-btn>
        <v-btn
          color="primary"
          outline
          :to="'/process/' + $route.params.work_id"
        >{{workdata.worklist_code}}</v-btn>
        <v-btn color="primary" outline @click="setPrice()">金額：{{ totalPrice.toLocaleString() }}</v-btn>
      </template>
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1 mt-3"
        :pagination.sync="pagination"
        item-key="item_id"
        :loading="items.length===0"
      >
        <template v-slot:items="props" :class="rt(props)">
          <td class="text-xs-center">{{props.item.item_code }}</td>
          <td class="text-xs-center">{{props.item.item_model }}</td>
          <td class="text-xs-center">{{props.item.item_name }}</td>
          <td class="text-xs-center">{{props.item.count }}</td>
          <td class="text-xs-center">{{props.item.total_price.toLocaleString() }}</td>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      items: [],
      workdata: {},
      headers: [
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "形式", value: "item_model", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "数量", value: "count", align: "center" },
        { text: "金額", value: "total_price", align: "center" }
      ],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 1000,
        sortBy: "item_name"
      },
      totalPrice: 0
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
      const Fin = 2;
      let list = await axios.get(
        "/db/workdata/process/" + this.$route.params.work_id
      );
      this.workdata = list.data[0];
      let process = {};
      // console.log(list.data[0]);
      // worklist -> serial[] -> process[]
      list.data[0].serials.forEach(serial => {
        serial.process.forEach(p => {
          if (p.process_status === Fin) {
            process[p.work_id] =
              process[p.work_id] === undefined ? 1 : process[p.work_id] + 1;
          }
        });
      });
      // console.log(process);
      let items = [];
      Object.keys(process).forEach(pid => {
        axios.get("/db/workdata/cmpt/items/" + pid).then(res => {
          res.data.forEach(item => {
            let tar = items.filter(ar => ar.item_id === item.items.item_id);
            if (tar.length === 0) {
              items.push({
                item_id: item.items.item_id,
                item_code: item.items.item_code,
                item_model: item.items.item_model,
                item_name: item.items.item_name,
                item_price: Number(item.items.item_price),
                count: Number(item.item_use) * process[pid],
                total_price:
                  Number(item.items.item_price) *
                  Number(item.item_use) *
                  process[pid]
              });
            } else {
              tar.count = tar.count + item.item_use * process[pid];
              tar.total_price =
                tar.total_price + item.item_use * tar.item_price * process[pid];
            }
            this.totalPrice =
              this.totalPrice + Number(item.items.item_price) * process[pid];
          });
        });
      });
      this.items = items;
      // console.log(this.items);
      // console.log(items);
      // this.items = Object.keys(items).map(key => {
      //   console.log(key);
      //   return items[key];
      // });
      // console.log(this.items);
    },
    rt(i) {
      console.log(i);
    },
    setPrice() {
      axios.get(
        "/db/workdata/set/useitemprice/" +
          this.$route.params.work_id +
          "/" +
          Math.round(this.totalPrice * 100) / 100
      );
      // .then(res => {});
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
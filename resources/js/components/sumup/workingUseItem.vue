<template>
  <v-app>
    <v-container grid-list-xs>
      test
      <table>
        <tr v-for="(item, index) in items" :key="index">
          test
          <td>{{item.item_code}}</td>
        </tr>
      </table>
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
        sortBy: "model.model_code"
      }
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
      let items = {};
      Object.keys(process).forEach(pid => {
        axios.get("/db/workdata/cmpt/items/" + pid).then(res => {
          res.data.forEach(item => {
            let i = items[item.items.item_id];
            if (i === undefined) {
              i = items[item.items.item_id] = {
                item_code: item.items.item_code,
                item_model: item.items.item_model,
                item_name: item.items.item_name,
                item_price: Number(item.items.item_price),
                count: 0,
                total_price: 0
              };
            }
            i.count = i.count + item.item_use * process[pid];
            i.total_price = i.total_price + i.item_price * process[pid];
          });
        });
      });
      this.items = items;
      // console.log(items);
      // this.items = Object.keys(items).map(key => {
      //   console.log(key);
      //   return items[key];
      // });
      console.log(this.items);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
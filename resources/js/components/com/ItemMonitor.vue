<template>
  <v-app>
    <table v-if="m" class="sticky_table">
      <thead>
        <tr>
          <th>親形式</th>
          <th>連</th>
          <th>品目コード</th>
          <th>形式／品名</th>
          <th>残数</th>
          <th>使用予約数</th>
          <th>発注数</th>
        </tr>
      </thead>
      <template v-for="(cmpt, prow) in m.cmpt">
        <tr v-for="(info, row) in cmpt.item_use" :key="prow + '-' + row" :class="rtSwitch(prow)">
          <td>{{ cmpt.cmpt_code.slice(0,11) }}</td>
          <td>{{ info.item_ren }}</td>
          <td>{{ info.items.item_code }}</td>
          <td>
            {{ info.items.item_model !== null ? info.items.item_model : '-' }}
            <br />
            {{ info.items.item_name !== null ? info.items.item_name : '-' }}
          </td>
          <td>{{ info.items.last_num }}</td>
          <td>{{ info.items.appo_num }}</td>
          <td>{{ info.items.order_num }}</td>
        </tr>
      </template>
    </table>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      id: null,
      m: null,
      cflg: true
    };
  },
  computed: {
    ...mapState({
      target: "target"
    })
  },
  created: function() {
    this.init();
    this.dataLoading = setInterval(() => {
      this.init();
    }, 3000);
  },
  methods: {
    ...mapActions([]),
    async init() {
      let id = this.$route.params.mid;
      let mdata = await axios.get("/db/model_mst/data/" + id + "/fromItem");
      this.m = mdata.data[0];
    },
    rtSwitch(row) {
      return row % 2 === 0 ? "t0" : "t1";
    }
  },
  beforeDestroy: function() {
    clearInterval(this.dataLoading);
  }
};
</script>

<style lang="scss" scoped>
th,
td {
  text-align: center;
  vertical-align: middle;
}
tr:nth-child(even) {
  td {
    background: #eee;
  }
}
tr.t0 {
  td {
    color: #1b5e20;
  }
}
tr.t1 {
  td {
    color: #1a237e;
  }
}
</style>

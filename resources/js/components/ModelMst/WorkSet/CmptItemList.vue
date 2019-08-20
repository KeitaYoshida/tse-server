<template>
  <v-data-table
    :items="lists"
    hide-actions
    hide-headers
    :pagination.sync="search.sync"
    :search="search.val"
  >
    <template v-slot:items="props">
      <td v-if="props.item.work_id===null" class="text-xs-center">
        <v-chip color="teal darken-2" dark @click="select(props.item)">選択</v-chip>
      </td>
      <td v-else class="text-xs-center">
        <v-chip
          color="teal darken-2 m"
          outline
          @click="disselect(props.item)"
        >id: {{ props.item.work_id }}</v-chip>
      </td>
      <td class="text-xs-center">
        <v-chip outline color="teal darken-2">
          {{ props.item.items.item_class_val.value }}
          <br />
          連:{{ props.item.item_ren }}
        </v-chip>
      </td>
      <td class="text-xs-center teal--text text--darken-4">{{ props.item.items.item_code }}</td>
      <td class="text-xs-center teal--text text--darken-4">
        <p>{{ props.item.items.item_model }}</p>
        <p>{{ props.item.items.item_name }}</p>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      lists: null,
      search: null,
      updatingflg: false
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
    ...mapActions(["CMPT_SEARCH_LENGTH"]),
    init() {
      this.lists = this.target.component.data[0].item_use.filter(ar => {
        return [1, 3, 6].indexOf(ar.items.item_class) === -1;
      });
      this.search = this.target.component.search;
      this.CMPT_SEARCH_LENGTH(this.lists.length);
    },
    async select(i) {
      if (this.updatingflg) return;
      this.updatingflg = true;
      let wid = (i.work_id = this.target.work.id);
      let cid = i.r_ci_id;
      await axios.get("/db/model_mst/cmpt/work/item/select/" + cid + "/" + wid);
      this.updatingflg = false;
    },
    async disselect(i) {
      if (this.updatingflg) return;
      this.updatingflg = true;
      let wid = (i.work_id = null);
      let cid = i.r_ci_id;
      await axios.get("/db/model_mst/cmpt/work/item/select/" + cid + "/" + wid);
      this.updatingflg = false;
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0 !important;
}
p {
  padding: 0;
  margin: 0;
}
.v-chip.v-chip.v-chip--outline.m {
  height: 28px;
  border-radius: 10px;
}
.v-chip.v-chip.v-chip--outline {
  height: 40px;
  border-radius: 5px;
}
</style>

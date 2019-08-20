<template>
  <div>
    <nav>
      <v-chip color="blue darken-4" outline>{{ target.component.code }}</v-chip>
      <v-chip color="blue darken-4" outline>{{ target.component.rev.numToRev() }}</v-chip>
      <v-chip color="blue darken-4" dark @click="add=!add">追加</v-chip>
    </nav>
    <main class="blue--text text--darken-4">
      <table>
        <tr v-for="(item, index) in list" :key="index">
          <td class="pt-3" width="7%">
            <v-btn icon class="ma-0" @click="chkRow(item, -1)" :loading="loadRow">
              <v-icon color="blue darken-4">fas fa-arrow-circle-up</v-icon>
            </v-btn>
          </td>
          <td class="pt-3" width="7%">
            <v-btn icon class="ma-0" @click="chkRow(item, 1)" :loading="loadRow">
              <v-icon color="blue darken-4">fas fa-arrow-circle-down</v-icon>
            </v-btn>
          </td>
          <td class="pt-3 pl-3" width="79%">
            <span>
              <v-chip
                small
                class="id"
                color="blue darken-4"
                @click="selectWork(item)"
                v-if="target.work.id===item.work_id"
                dark
              >
                <v-icon class="pr-2" small>far fa-plus-square</v-icon>
                id: {{ item.work_id }}
              </v-chip>
              <v-chip
                small
                outline
                class="id"
                color="blue darken-4"
                @click="selectWork(item )"
                v-else
              >
                <v-icon class="pr-2" small>far fa-hand-point-up</v-icon>
                id: {{ item.work_id }}
              </v-chip>
            </span>
            <span>{{ item.work_title }}</span>
          </td>
          <td class="pt-3" width="7%">
            <v-btn icon class="ma-0" :loading="loadRow" @click="del(item.row)">
              <v-icon color="orange darken-4">far fa-trash-alt</v-icon>
            </v-btn>
          </td>
        </tr>
      </table>
    </main>
    <v-dialog
      v-model="add"
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
      v-if="add"
    >
      <AddWorkForm :data="addform" @rt="rt"></AddWorkForm>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AddWorkForm from "@/components/com/ComFormDialog";

export default {
  props: [],
  components: {
    AddWorkForm
  },
  data: function() {
    return {
      add: false,
      addform: {
        title: "工程登録",
        message: "工程名を入力してください",
        data: [
          {
            name: "koteiname",
            label: "工程名",
            value: null
          }
        ]
      },
      list: [],
      loadRow: false
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
    ...mapMutations(["WORK_ABOUT_SET"]),
    async init() {
      let res = await axios.get(
        "/db/model_mst/work/list/" + this.target.component.id
      );
      this.list = res.data;
      this.sortList();
    },
    async rt(d) {
      this.add = !this.add;
      let v = {
        cmpt_id: this.target.component.id,
        val: d.data[0].value
      };
      let res = await axios.post("/db/model_mst/work/add", v);
      this.list.push(res.data);
    },
    async chkRow(i, val) {
      this.loadRow = !this.loadRow;
      let rows = this.list.length;
      let tarRow = i.row + val;
      if (tarRow > rows || tarRow === 0) {
        this.loadRow = !this.loadRow;
        return;
      }
      let tarSetRow = i.row;
      this.list[tarRow - 1].row = tarSetRow;
      this.list[i.row - 1].row = tarRow;
      let tarId = this.list[tarRow - 1].work_id;
      let baseId = i.work_id;
      this.sortList();
      await axios.get(
        "/db/model_mst/work/row/update/" + tarId + "/" + tarSetRow
      );
      await axios.get("/db/model_mst/work/row/update/" + baseId + "/" + tarRow);
      this.loadRow = !this.loadRow;
    },
    sortList() {
      this.list.sort(function(a, b) {
        if (a.row < b.row) return -1;
        if (a.row > b.row) return 1;
        return 0;
      });
    },
    async del(row) {
      let cmpt = this.target.component.id;
      let tmp = await axios.get(
        "/db/model_mst/cmpt/work/del/row/" + row + "/" + cmpt
      );
      this.init();
      this.$emit("rt");
    },
    selectWork(i) {
      let d = {
        id: i.work_id,
        name: i.work_title
      };
      this.WORK_ABOUT_SET(d);
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
}
tr {
  border-bottom: 1px solid #0d47a1;
  width: 100%;
}
td {
  line-height: 1.5;
  font-size: 1.3rem;
}
.v-chip.id {
  border-radius: 3px;
}
</style>

<template>
  <div>
    <h2>CSVファイル読込設定確認</h2>
    <p class="error--text">読込情報に異常があります。読込設定カラムを修正してください。</p>
    <template v-if="deff">
      <v-data-table
        :headers="headers"
        :items="deff"
        hide-actions
        item-key="s_col"
        disable-initial-sort
      >
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.s_col }}</td>
          <td class="text-xs-center">{{ props.item.s_col_jp }}</td>
          <td class="text-xs-center">
            <v-text-field
              label="row"
              @change="change(props.item)"
              v-model="props.item.s_col_num"
              type="number"
              class="row_text"
            ></v-text-field>
          </td>
          <td class="text-xs-center" :class="props.item.class">{{ props.item.csv_val }}</td>
        </template>
      </v-data-table>
    </template>
    <v-bottom-nav fixed :value="true">
      <v-btn flat color="primary" dark @click="clear()">
        <span>再読込</span>
        <v-icon>fas fa-arrow-alt-circle-left</v-icon>
      </v-btn>
      <v-btn flat color="primary" dark @click="up_setting()">
        <span>更新</span>
        <v-icon>fas fa-arrow-alt-circle-right</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  props: ["csv", "type"],
  data: function() {
    return {
      flg: false,
      deff: null,
      headers: [
        { text: "設定カラム", value: "s_col", align: "center" },
        { text: "設定カラム名", value: "s_col_jp", align: "center" },
        { text: "設定行数", value: "s_col_num", align: "center" },
        { text: "実ファイル行数値", value: "csv_val", align: "center" }
      ]
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    async init() {
      await axios.get("/db/csv/type/setting/" + this.type).then(res => {
        let deff = [];
        res.data.forEach((ar, index) => {
          deff[index] = {
            s_id: ar.csv_id,
            s_col: ar.csv_col,
            s_col_jp: ar.csv_col_jp,
            s_col_num: ar.csv_col_num,
            csv_val: this.csv[0][ar.csv_col_num],
            class: "ok",
            flg: false
          };
          if (
            String(ar.csv_col_jp.trim()) !=
            String(this.csv[0][ar.csv_col_num].trim())
          ) {
            this.flg = true;
            deff[index].class = "red--text";
          }
        });
        if (this.flg) {
          this.deff = deff;
          console.log(deff);
        } else {
          this.$emit("up");
        }
      });
    },
    clear() {
      this.$emit("clear");
    },
    async up_setting() {
      let data = [];
      this.deff.forEach(ar => {
        if (ar.flg) {
          data.push({
            csv_id: ar.s_id,
            csv_col_num: ar.s_col_num
          });
        }
      });
      if (data.length === 0) {
        alert("変更がありません");
        return;
      } else {
        await axios.post("/db/csv/type/setting/", data).then(res => {
          this.flg = false;
          this.init();
        });
      }
    },
    change(item) {
      item.flg = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.row_text {
  width: 5rem;
  text-align: center;
  margin: 0 auto;
}
</style>

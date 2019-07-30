<template>
  <div>
    <h2>形式</h2>
    <v-layout row wrap id="model" pa-2>
      <v-flex xs8 offset-xs-4 pl-5>
        <v-text-field name="model" label="形式" v-model="model.model_code" disabled></v-text-field>
      </v-flex>
      <v-flex xs8 offset-xs-4 pl-5>
        <v-text-field name="model_code_ne" label="形式NE" v-model="model.model_code_ne"></v-text-field>
      </v-flex>
      <v-flex xs8 offset-xs-4 pl-5>
        <v-text-field name="model_rev" label="rev" v-model="model.model_rev" disabled></v-text-field>
      </v-flex>
      <v-flex xs8 offset-xs-4 pl-5>
        <v-text-field name="model_name" label="名称" v-model="model.model_name" disabled></v-text-field>
      </v-flex>
    </v-layout>
    <h2 class="mt-5">構成</h2>
    <DataTable :items.sync="basis" :headers="basis_header" id="kosei" :sea="false"></DataTable>
    <template v-if="outers">
      <h2 class="mt-5">除外データ</h2>
      <DataTable :items.sync="outers" :headers="items_header" id="outers" :sea="false"></DataTable>
    </template>
    <h2 class="mt-5">部材</h2>
    <DataTable :items.sync="items" :headers="items_header" id="items" class="mb-5"></DataTable>
    <v-bottom-nav fixed value="value">
      <v-btn flat @click="back">
        <span>戻る</span>
        <v-icon>fas fa-backward</v-icon>
      </v-btn>
      <v-btn flat @click="next">
        <span>次へ</span>
        <v-icon>fas fa-forward</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import DataTable from "./../../com/DataTable";

export default {
  components: {
    DataTable
  },
  props: ["csv"],
  data: function() {
    return {
      model: null,
      basis: null,
      basis_header: [
        { text: "構成形式", value: "cmpt_code", align: "center" },
        { text: "REV", value: "cmpt_rev", align: "center" },
        { text: "構成名", value: "cmpt_name", align: "center" }
      ],
      items: null,
      outers: null,
      items_header: [
        { text: "構成形式", value: "cmpt_code", align: "center" },
        { text: "品目コード", value: "item_code", align: "center" },
        { text: "REV", value: "item_rev", align: "center" },
        { text: "品名", value: "item_name", align: "center" },
        { text: "品目形式", value: "item_model", align: "center" },
        { text: "引数", value: "item_use", align: "center" }
      ]
    };
  },
  created: function() {
    this.model_file_act(this.csv);
  },
  methods: {
    model_file_act(csv) {
      const Head_Col_Jp = "形式";
      let st_row = this.has_head_line(csv[0], Head_Col_Jp) ? 1 : 0;

      let n = csv[st_row][0].rtrim();
      let model = {
        model_code: n,
        model_code_ne:
          n.slice(0, 7) + "N" + n.slice(7, 11) + "E" + n.slice(11, 14),
        model_name: csv[st_row][1].rtrim(),
        model_rev: csv[st_row][4].revToNum()
      };

      let basis = [];
      let basis_data = [];
      const basis_model_row = 6;
      const basis_rev_row = 10;
      const basis_name_row = 8;

      let items = [];
      let outers = [];
      const item_code_row = 14;
      const item_rev_row = 20;
      const item_ren_row = 11;
      const item_unit_row = 25;
      const item_use_row = 24;
      const item_child_row = 12;
      const item_name_row = 18;
      const item_model_row = 17;
      const item_maker_row = 22;
      csv.forEach((ar, index) => {
        if (index < st_row) {
          return;
        }
        if (basis.indexOf(ar[basis_model_row]) < 0) {
          basis.push(ar[basis_model_row]);
          basis_data.push({
            cmpt_code: ar[basis_model_row].rtrim(),
            cmpt_rev: ar[basis_rev_row].revToNum(),
            cmpt_name: ar[basis_name_row].rtrim()
          });
        }

        let item_class = "";
        if (ar[item_unit_row] === "PR") {
          item_class = "1";
        } else if (
          ar[item_name_row].rtrim().slice(-3) === "ﾈｼﾞ" ||
          ar[item_name_row].rtrim().slice(-3) === "ﾅｯﾄ" ||
          ar[item_name_row].rtrim().slice(-3) === "ｶﾞﾈ"
        ) {
          item_class = "5";
        } else {
          switch (ar[item_name_row].rtrim()) {
            case "ｶﾊﾞｰ":
            case "ﾌﾛﾝﾄﾊﾟﾈﾙ":
            case "ﾌﾚｰﾑ":
            case "ｹｰｽ":
            case "ﾍﾞｰｽ":
            case "ﾄﾘﾂｹｶﾅｸﾞ":
            case "ﾎｳﾈﾂﾊﾞﾝ":
            case "ﾋｰﾄｼﾝｸ":
              item_class = "4";
              break;
            case "ﾁｯﾌﾟｺﾃｲﾃｲｺｳ":
              item_class = "6";
              break;
            case "ｽﾍﾟｰｻ":
              item_class = "5";
              break;
            default:
              item_class = "2";
          }
        }

        if (ar[item_child_row] < 2) {
          items.push({
            cmpt_code: ar[basis_model_row].rtrim(),
            item_code: ar[item_code_row].rtrim(),
            item_rev: ar[item_rev_row].revToNum(),
            item_ren: ar[item_ren_row].num(),
            item_class: item_class,
            item_name: ar[item_name_row].rtrim(),
            item_model: ar[item_model_row].rtrim(),
            item_maker: ar[item_maker_row].rtrim(),
            item_use: ar[item_use_row].num()
          });
        } else {
          outers.push({
            cmpt_code: ar[basis_model_row].rtrim(),
            item_code: ar[item_code_row].rtrim(),
            item_rev: ar[item_rev_row].revToNum(),
            item_ren: ar[item_ren_row].num(),
            item_class: item_class,
            item_name: ar[item_name_row].rtrim(),
            item_model: ar[item_model_row].rtrim(),
            item_maker: ar[item_maker_row].rtrim(),
            item_use: ar[item_use_row].num()
          });
        }
      });
      this.model = model;
      this.basis = basis_data;
      this.items = items;
      this.outers = outers;
    },
    has_head_line(ar, tar) {
      if (ar[0] === tar) {
        return true;
      } else {
        return false;
      }
    },
    back() {
      this.model = null;
      this.basis = null;
      this.items = null;
      this.$emit("down");
    },
    next() {
      let item = {};
      let rele = {};
      let item_key = {};
      this.basis.forEach(ar => {
        item[ar.cmpt_code] = [];
        rele[ar.cmpt_code] = [];
        item_key[ar.cmpt_code] = [];
      });
      this.items.forEach(ar => {
        item_key[ar.cmpt_code].push({
          item_code: ar.item_code,
          item_rev: ar.item_rev
        });
        item[ar.cmpt_code].push({
          item_class: ar.item_class,
          maker_name: ar.item_maker,
          item_model: ar.item_model,
          item_name: ar.item_name
        });
        if (ar.item_class !== "CHIP品" && ar.item_class !== "図面") {
          rele[ar.cmpt_code].push({
            item_ren: ar.item_ren,
            item_use: ar.item_use,
            item_order: 1
          });
        } else {
          rele[ar.cmpt_code].push({
            item_ren: ar.item_ren,
            item_use: ar.item_use,
            item_order: 0
          });
        }
      });
      let d = {
        model: this.model,
        basis: this.basis,
        iuni: item_key,
        item: item,
        rele: rele
      };
      axios.post("/db/model_entry/", d).then(res => {
        this.$emit("getModelData", res.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#model {
  width: 60%;
}
#kosei {
  width: 80%;
}
h2 {
  margin-bottom: 1rem;
}
#model {
  background: #fff;
}
</style>

<template>
  <v-card>
    <v-card-text>
      <v-chip outline color="warning" @click="sp_class=!sp_class">区分：{{ p_class }}</v-chip>
      <v-chip outline color="primary">形式：{{ target.recept_code }}</v-chip>
      <v-chip outline color="primary">工事番号：{{ target.const_code }}</v-chip>
      <v-layout wrap align-space-around justify-center fill-height>
        <v-flex xs10 class="pt-3 pb-3">
          <v-text-field label="製造コード" v-model="code" prepend-icon="fas fa-sitemap"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-radio-group v-model="radioGroup" @click="changeFlg()" class="pl-3">
            <v-radio v-for="(n,index) in selects" :key="index" :label="n" :value="index"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex xs9 class="rightView text-xs-center">
          <template v-if="pdct_data===null" class="text-xs-center">
            <v-chip collor="warning" outline>製造実績がありません</v-chip>
          </template>
          <template v-else>
            <h5>既存製造データ</h5>
            <table class="data_list">
              <v-radio-group v-model="add_pdct" @click="changeAddFlg()" class="pl-3">
                <tr v-for="(item, index) in pdct_data" :key="index">
                  <td>
                    <v-radio :value="item.const_code"></v-radio>
                  </td>
                  <td>{{ item.status.st_val }}</td>
                  <td>{{ item.pdct_class }}</td>
                  <td>{{ item.const_code }}</td>
                </tr>
              </v-radio-group>
            </table>
          </template>
        </v-flex>
      </v-layout>
      <v-card-actions class="text-xs-center">
        <v-btn color="primary" flat class="action" @click="cancel()">取消</v-btn>
        <v-btn color="primary" flat class="action" @click="makePdct()">作成</v-btn>
      </v-card-actions>
    </v-card-text>
    <v-dialog v-model="sp_class" :overlay="false" max-width="200px" transition="dialog-transition">
      <v-card>
        <v-card-text>
          <v-radio-group v-model="sp_group" @click="changeClass()">
            <v-radio
              v-for="(n, index) in ['製品', '修理', '部品', 'その他']"
              :label="n"
              :value="n"
              :key="index"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  props: ["target"],
  data: function() {
    return {
      code: "",
      p_class: "",
      sp_class: false,
      sp_group: "",
      selects: ["単体", "まとめ", "追加"],
      add_pdct: false,
      radioGroup: 0,
      pdct_data: null
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      this.code = this.target.const_code;
      this.p_class = this.target.rcpt_class;
      axios
        .get("/db/pdct/list/from/model/" + this.target.recept_code)
        .then(res => {
          console.log(res.data);
          this.pdct_data = res.data.length === 0 ? null : res.data;
        });
    },
    changeAddFlg() {
      this.radioGroup = 2;
      this.code = this.add_pdct;
    },
    changeFlg() {
      this.code = this.code === "" ? this.target.const_code : this.code;
      this.add_pdct = false;
      let f = this.code.slice(-1) === "M" ? true : false;
      let l = this.code.length;
      switch (this.radioGroup) {
        case 0:
          this.code = f === true ? this.code.slice(0, l - 1) : this.code;
          break;
        case 1:
          this.code = f === true ? this.code : this.code + "M";
          break;
        case 2:
          if (this.pdct_data === null) {
            alert("追加データがありません");
            this.radioGroup = 0;
            this.code = this.target.const_code;
          } else {
            this.add_pdct = this.pdct_data[0].const_code;
            this.code = this.pdct_data[0].const_code;
          }
      }
    },
    async makePdct() {
      if (this.radioGroup !== 2) {
        let flg = await this.checkCode();
        if (flg === false) {
          return;
        }
      }
      let pdct_id = 0;
      let d = {
        model_id: this.target.recept_code,
        const_code: this.code,
        pdct_class: this.p_class
      };
      if (this.radioGroup !== 2) {
        axios.post("/db/pdct/create/" + this.target.recept_id, d).then(res => {
          this.$emit("createPdct", res.data);
        });
      } else {
        axios
          .get("/db/pdct/add/rcpt/" + this.code + "/" + this.target.recept_id)
          .then(res => {
            this.$emit("createPdct", res.data);
          });
      }
    },
    async checkCode() {
      let l = this.code.length;
      if (l < 5) {
        alert("工事番号が短すぎます");
        return false;
      }
      if (l > 12) {
        alert("工事番号が長すぎます");
        return false;
      }
      let v = this.code.slice(-1);
      if (["S", "L", "T", "P"].includes(v)) {
        alert("末尾: " + v + " は予約文字です");
        return false;
      }
      let dupCheck = true;
      await axios.get("/db/pdct/is/this/" + this.code).then(res => {
        if (res.data.length !== 0) {
          alert("使用済み工事番号です");
          dupCheck = false;
        }
      });
      return dupCheck;
    },
    cancel() {
      this.$emit("createPdct");
    },
    changeClass() {
      this.p_class = this.sp_group;
      this.sp_class = !this.sp_class;
    }
  }
  // watch: {
  // code: function() {
  //   console.log(this.code);
  // }
  // }
};
</script>

<style lang="scss" scoped>
.action {
  margin: 0 auto;
}
.data_list {
  font-size: 1rem;
  margin: 0 auto;
  td {
    padding: 0 1rem;
    border-bottom: 1px solid gray;
  }
}
</style>


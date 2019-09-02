<template>
  <v-card>
    <v-card-text>
      <v-chip outline color="primary">製造形式：{{ target.product.model }}</v-chip>
      <v-chip outline color="primary">製造コード：{{ target.product.code }}</v-chip>
      <ComMenu :prop="wlClass" @rtVal="rtWlClass" v-if="wlClass.value"></ComMenu>
      <v-layout wrap>
        <v-flex xs4 class="px-4 pt-3">
          <v-text-field label="形式" readonly :value="d.model_code" @click="mselect=!mselect"></v-text-field>
        </v-flex>
        <v-flex xs4 class="px-4 pt-3">
          <v-text-field label="工事番号(共通)" :value="d.base_code"></v-text-field>
        </v-flex>
        <v-flex xs4 class="px-4 pt-3">
          <v-text-field label="起工氏" readonly :value="d.user"></v-text-field>
        </v-flex>
        <template v-if="d.cmpt !== null">
          <template v-for="(item, index) in d.cmpt">
            <v-flex xs6 :key="index" class="px-4 pt-3">
              <v-text-field v-model="item.sn" :label="'先頭SN: ' + item.cmpt_code" type="number"></v-text-field>
            </v-flex>
          </template>
          <template v-if="d.cmpt.length % 2 !== 0">
            <v-flex xs6></v-flex>
          </template>
        </template>
        <v-flex xs6 class="px-4 pt-3">
          <Calender label="開始予定日" @select="select_st_day"></Calender>
        </v-flex>
        <v-flex xs6 class="px-4 pt-3">
          <Calender label="終了予定日" @select="select_ed_day"></Calender>
        </v-flex>
        <v-flex xs4 class="px-4 pt-3">
          <v-text-field label="総台数" type="number" v-model="d.all_num" @change="set_num()"></v-text-field>
        </v-flex>
        <v-flex xs4 class="px-4 pt-3">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-text-field label="分割台数" type="number" v-on="on" v-model="d.split_num"></v-text-field>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, index) in [10, 15, 20, 25, 50, 100]"
                :key="index"
                @click="d.split_num = item"
              >
                <v-list-tile-title>{{ item }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex xs4 class="px-4 pt-3">
          <v-text-field disabled label="分割数" :value="slice_num()"></v-text-field>
        </v-flex>
        <v-flex xs8 offset-xs2 class="py-3">
          <v-btn color="primary" style="width:100%" large :disabled="form_flg()" @click="submit">作成</v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-dialog v-model="mselect" width="600px">
      <SelectModel @select="rtModel" :defval="d.product_model"></SelectModel>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ComMenu from "./../com/ComMenu";
import Calender from "./../com/CalendarText";
import SelectModel from "./../com/SelectModel";

export default {
  props: [],
  components: { ComMenu, Calender, SelectModel },
  data: function() {
    return {
      wlClass: {
        color: "#3949AB",
        text: "区分",
        value: null,
        selected: "製品",
        rad: "5px",
        small: true,
        outline: false
      },
      data_row: null,
      mselect: false,
      d: {
        product_model: null,
        product_id: null,
        model_code: null,
        model_id: null,
        product_code: null,
        wclass: null,
        base_code: null,
        all_num: null,
        split_num: null,
        user: null,
        stday: null,
        edday: null,
        cmpt: null
      },
      make_flg: true
    };
  },
  computed: {
    ...mapState({
      user: "user_info",
      target: "target"
    })
  },
  created: function() {
    this.init();
  },
  methods: {
    ...mapActions([]),
    init() {
      // console.log(this.target);
      let p = this.target.product;
      let model_id = p.model;
      this.d.product_model = model_id;
      this.d.product_id = p.id;
      this.d.product_code = p.code;
      this.d.base_code = p.code;
      this.d.user = this.user.name;
      axios.get("/db/workdata/make/class").then(res => {
        let c = [];
        res.data.forEach(ar => {
          c.push(ar.val);
        });
        this.wlClass.value = c;
      });
      axios.get("/db/workdata/get/worklist/num/" + model_id).then(res => {
        this.data_row = res.data;
      });
    },
    rtWlClass(val) {
      this.wlClass.selected = val;
      this.d.wclass = this.wlClass.value.indexOf(val);
    },
    async rtModel(m) {
      this.mselect = !this.mselect;
      this.d.model_code = m.model_code;
      this.d.model_id = m.model_id;
      this.d.cmpt = m.cmpt.filter(ar => ar.works.length > 0);
      if (this.d.cmpt.length === 0) {
        alert("工程が登録されていません");
        this.d.model_code = null;
      }
    },
    set_num() {
      this.d.split_num = this.d.all_num;
    },
    slice_num() {
      if (this.d.all_num === null || this.d.split_num === null) return;
      let n = Number(this.d.all_num) / Number(this.d.split_num);
      if (n === 1) return "分割なし";
      if (n > 20) return "分割数が多すぎます";
      return Math.ceil(n);
    },
    select_st_day(val) {
      this.d.stday = val;
    },
    select_ed_day(val) {
      this.d.edday = val;
    },
    form_flg() {
      let flg = false;
      Object.keys(this.d).forEach(ar => {
        if (Array.isArray(this.d[ar])) {
          this.d[ar].forEach(cmpt => {
            if (cmpt.sn === undefined) flg = true;
            if (cmpt.sn === "") flg = true;
          });
          return flg;
        }
        if (this.d[ar] === null) flg = true;
        if (this.d[ar] === "") flg = true;
      });
      return flg;
    },
    async submit() {
      let d = this.d;
      let data = [];
      let sub_serial = [];
      let works = [];
      for (
        let i = 1;
        i * d.split_num < Number(d.all_num) + Number(d.split_num);
        i++
      ) {
        let row = i - 1;
        let rnum = i * d.split_num;
        let num =
          rnum <= d.all_num ? d.split_num : d.all_num - (rnum - d.split_num);
        data[row] = {
          pdct_id: d.product_id,
          model_id: d.model_id,
          worklist_code: d.base_code + "-" + ("00" + i).slice(-2),
          worklist_status: 0,
          worklist_class: d.wclass,
          num: num,
          all_num: d.all_num,
          st_day: d.stday,
          ed_day: d.edday,
          user: d.user
        };
        d.cmpt.forEach(ar => {
          if (row !== 0) {
            ar.sn = Number(ar.sn) + Number(d.split_num);
          }
          if (Array.isArray(sub_serial[row]) === false) {
            sub_serial[row] = [];
          }
          sub_serial[row].push({
            cmpt_id: ar.cmpt_id,
            serial_no: Number(ar.sn)
          });
        });
      }
      let h = 0;
      d.cmpt.forEach(ar => {
        ar.works.forEach(w => {
          works.push({
            cmpt_id: ar.cmpt_id,
            process_title: w.work_title,
            work_id: w.work_id,
            row: h
          });
          h = h + 1;
        });
      });
      // console.log(d);
      // console.log(data);
      // console.log(sub_serial);
      // console.log(works);
      let axdata = {
        listdata: data,
        snarr: sub_serial,
        process: works
      };
      axios.post("/db/pdct/make/sn_process", axdata).then(res => {
        this.$router.push("/product_list");
        this.reload("/product_list");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

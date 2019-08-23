<template>
  <v-card>
    <v-card-text>
      <v-chip outline color="primary">製造形式：{{ target.product.model }}</v-chip>
      <v-chip outline color="primary">製造コード：{{ target.product.code }}</v-chip>
      <ComMenu :prop="wlClass" @rtVal="rtWlClass" v-if="wlClass.value"></ComMenu>
      <v-layout wrap>
        <v-flex xs4 class="px-4 pt-3">
          <v-text-field label="形式" readonly :value="d.model" @click="mselect=!mselect"></v-text-field>
        </v-flex>
        <v-flex xs4 class="px-4 pt-3">
          <v-text-field label="工事番号(共通)" :value="d.ccode"></v-text-field>
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
              <v-text-field label="分割台数" type="number" v-on="on" v-model="d.num"></v-text-field>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, index) in [10, 15, 20, 25, 50, 100]"
                :key="index"
                @click="d.num = item"
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
      <SelectModel @select="rtModel" :defval="d.pmodel"></SelectModel>
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
        pmodel: null,
        model: null,
        pcode: null,
        wclass: "製造",
        ccode: null,
        all_num: null,
        num: null,
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
      this.d.pmodel = model_id;
      this.d.pcode = p.code;
      this.d.ccode = p.code;
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
      this.d.wclass = val;
    },
    async rtModel(m) {
      this.mselect = !this.mselect;
      this.d.model = m.model_code;
      this.d.cmpt = m.cmpt.filter(ar => ar.works.length > 0);
    },
    set_num() {
      this.d.num = this.d.all_num;
    },
    slice_num() {
      if (this.d.all_num === null || this.d.num === null) return;
      let n = Number(this.d.all_num) / Number(this.d.num);
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
    submit() {}
  }
};
</script>

<style lang="scss" scoped>
</style>

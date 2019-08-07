(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/locale/ja */ "./node_modules/dayjs/locale/ja.js");
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _com_ComCheckDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../com/ComCheckDialog */ "./resources/js/components/com/ComCheckDialog.vue");
/* harmony import */ var _com_ComFormDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../com/ComFormDialog */ "./resources/js/components/com/ComFormDialog.vue");
/* harmony import */ var _ItemData_Henshu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../ItemData/Henshu */ "./resources/js/components/ItemData/Henshu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale("ja");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DelChecker: _com_ComCheckDialog__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddCmptItem: _com_ComFormDialog__WEBPACK_IMPORTED_MODULE_3__["default"],
    NumChanger: _com_ComFormDialog__WEBPACK_IMPORTED_MODULE_3__["default"],
    HenshuView: _ItemData_Henshu__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["tar_model", "fm", "mode", "rtname"],
  data: function data() {
    return {
      tabs: 0,
      target: null,
      target_index: 0,
      num_change_target: null,
      num_selecter: false,
      num_select_obj: {
        title: "手配数量変更",
        message: "手配数を変更できます。",
        data: [{
          name: "num",
          label: "手配数",
          id: "",
          hint: "",
          type: "number",
          value: 0
        }]
      },
      headers: [{
        text: "連／種別",
        value: "item_ren",
        align: "center"
      }, {
        text: "手配品目コード",
        value: "items.item_code",
        align: "center"
      }, {
        text: "品名",
        value: "items.item_model",
        align: "center"
      }, {
        text: "手配数",
        value: "items.item_model",
        align: "center"
      }, {
        text: "手配先",
        value: "items.item_model",
        align: "center"
      }],
      selected: [],
      selecter: true,
      pagination: {
        sortBy: "item_ren"
      },
      class_selecter: false,
      class_list: null,
      henshu_view: false,
      flg_chip_view: false,
      flg_set_view: false,
      view: true,
      additem: false,
      dialog_data: null,
      delchk: false,
      delchk_val: {
        title: "構成部材削除",
        message: "親形式から部材を削除します。"
      }
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      if (this.mode === "cmpt") {
        this.selecter = false;
        this.headers = [{
          text: "連／種別",
          value: "item_ren",
          align: "center"
        }, {
          text: "手配品目コード",
          value: "items.item_code",
          align: "center"
        }, {
          text: "品名",
          value: "items.item_model",
          align: "center"
        }, {
          text: "手配先",
          value: "items.item_model",
          align: "center"
        }];
      }

      if (this.tar_model === undefined) {
        this.$router.push({
          name: "product_list"
        });
        return;
      }

      this.tar_model.cmpt.forEach(function (c) {
        c.item_use.forEach(function (i) {
          _this.setNumPrice(i);
        });
      });
      axios.get("/db/items/class/list").then(function (res) {
        _this.class_list = res.data;
      });
    },
    make: function make() {
      var _this2 = this;

      var fm = this.fm;

      if (this.selected.length === 0) {
        alert("部材を選択してください");
        return;
      }

      var dCntOrderList = {
        cnt_model: fm.model,
        cnt_model_rev: fm.rev,
        cnt_order_code: fm.code,
        cnt_status: 0,
        cnt_order_list_status: fm.order_class,
        pdct_id: fm.pdct_id,
        order_price: 0,
        cnt_order_num: fm.num,
        user_yoyaku: fm.user
      };
      var price = 0;
      var dCntOrders = [];
      var dCntPrice = [];
      var keynum = 1000; // console.log(this.selected);

      this.selected.forEach(function (a, x) {
        a.forEach(function (ar, n) {
          keynum = keynum - 1;
          var i = ar.items;
          if (i.item_class === 1) return;

          if (!_this2.flg_chip_view) {
            if (i.item_class === 6) return;
          }

          if (!_this2.flg_set_view) {
            if (i.item_class === 3) return;
          }

          if (dCntOrders[x] === undefined) dCntOrders[x] = [];
          dCntOrders[x][n] = {
            cnt_order_code: fm.code,
            order_key: keynum,
            cmpt_id: ar.cmpt_id,
            assy_num: ar.item_ren,
            item_id: i.item_id,
            num_order: ar.items.num,
            appo_num: fm.num * ar.item_use
          };

          if (i.vendor !== undefined) {
            i.vendor.forEach(function (arr, nn) {
              if (dCntPrice[x] === undefined) {
                dCntPrice[x] = [];
              }

              if (dCntPrice[x][n] === undefined) {
                dCntPrice[x][n] = [];
              }

              dCntPrice[x][n][nn] = {
                vendor_code: arr.vendor_code,
                price: arr.vendor_item_price,
                kako: arr.kako,
                order_day: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(fm.order_day).add(arr.order_add_date, "days").format("YYYY-MM-DD")
              };
              price = price + arr.vendor_item_price * i.num;
            });
          }
        });
      });
      dCntOrderList.order_price = price;
      var d = {
        ol: dCntOrderList,
        o: dCntOrders,
        op: dCntPrice
      }; // console.log(d);
      // return;

      axios.post("/db/order/yoyaku/set", d).then(function (res) {
        _this2.$router.push("/product_list");
      });
    },
    close_cmpt: function close_cmpt() {
      this.$emit("close");
    },
    toggleAll: function toggleAll(i) {
      if (this.selected.length) this.selected = [];else this.selected = i.slice();
    },
    setNumPrice: function setNumPrice(i) {
      var zan = i.items.last_num;
      var yoyaku = i.items.appo_num;
      var tehai = i.items.order_num;
      var hituyou = i.item_use * this.fm.num;
      var order = hituyou - zan - tehai + yoyaku;

      if (i.items.lot_num <= 0) {
        if (order < 0) {
          i.items.num = 0;
        } else {
          i.items.num = order;
        }
      } else {
        var lot = i.items.lot_num;
        var min = i.items.minimum_set;

        if (order < min) {
          i.items.num = 0;
        }

        var setNum = Math.ceil(order / lot);
        i.items.num = lot * setNum;
      }

      var price = 0;
      i.items.vendor.forEach(function (ar) {
        price = Number(price) + Number(ar.vendor_item_price);
      });
      i.items.price = Math.round(i.items.num * price).toLocaleString();
    },
    num_change: function num_change(is) {
      this.num_select_obj.data[0].value = is.num;
      this.num_change_target = is;
      this.num_selecter = !this.num_selecter;
    },
    itemClass: function itemClass(c) {
      switch (c) {
        case "部材":
          return "green--text text--darken-3";
          break;

        case "板金":
          return "blue-grey--text text--darken-4";
          break;

        case "ネジ・スペーサ":
          return "orange--text text--darken-3";
          break;
      }
    },
    change_item_class: function change_item_class(item) {
      this.class_selecter = !this.class_selecter;
      this.target = item;
    },
    select_item_class: function select_item_class(d) {
      var tar = this.target.item;
      tar.items.item_class = d.item_class_id;
      tar.items.item_class_val = d;
      axios.get("/db/items/class/set/" + d.item_class_id + "/" + tar.items.item_id);
      this.class_selecter = !this.class_selecter;
      this.target.selected = false;
      this.target = null;
    },
    change_num: function change_num(d) {
      this.num_change_target.num = d.data[0].value;
      this.num_selecter = !this.num_selecter;
    },
    henshu: function henshu(i) {
      this.henshu_view = true;
      this.target = i;
    },
    henshu_rt: function henshu_rt() {
      this.henshu_view = false;
      this.target = null;
    },
    up_items: function up_items(d) {
      var _this3 = this;

      axios.get("/items/iteminfo/" + this.target.items.item_code + "/" + this.target.items.item_rev).then(function (res) {
        _this3.target.items = res.data[0];

        _this3.setNumPrice(_this3.target);

        _this3.henshu_view = false;
      });
    },
    view_data_checker: function view_data_checker(n) {
      if (this.flg_chip_view === false) {
        if (n === 6) return false;
      }

      if (this.flg_set_view === false) {
        if (n === 3) return false;
      }

      if (n === 1) return false;
      return true;
    },
    add: function add() {
      var m = this.tar_model;
      var model_id = m.model_id;
      var cmpt = m.cmpt[this.tabs];
      this.dialog_data = {
        title: "構成部材登録",
        message: "親形式 " + cmpt.cmpt_code + '<span style="padding:0 0.5rem; font-size:0.5rem;">' + cmpt.cmpt_rev.numToRev() + "</span> に部材を登録します<br>※連番は０番固定",
        data: [{
          name: "item_code",
          label: "品目コード",
          id: "item_code",
          hint: "",
          value: "",
          type: ""
        }, {
          name: "item_rev",
          label: "品目ＲＥＶ",
          id: "item_rev",
          hint: "ハイフン(-)を除いた整数値を入力してください　例 01-03 → 103",
          value: "",
          type: "number"
        }, {
          name: "item_use",
          label: "員数",
          id: "item_use",
          hint: "手配時発注単位数",
          value: "",
          type: "number"
        }],
        tar: {
          rci: cmpt.cmpt_id
        }
      };
      this.additem = true;
    },
    rtAdd: function rtAdd(d, flg) {
      var _this4 = this;

      if (d.data[0].value === "" || d.data[1].value === "" || d.data[2].value === "") {
        return;
      }

      var data = {
        item: {
          item_code: d.data[0].value,
          item_rev: d.data[1].value
        },
        cmpt: {
          cmpt_id: d.tar.rci,
          item_use: d.data[2].value
        }
      };
      axios.post("/db/r_cmpt_item/add/item/", data).then(function (res) {
        if (res.data.length === 0) {
          alert("登録済みデータです");
        } else {
          _this4.setNumPrice(res.data[0]);

          _this4.tar_model.cmpt[_this4.tabs].item_use.unshift(res.data[0]);
        }
      });
      this.additem = !this.additem;
    },
    delAct: function delAct(i, index) {
      this.target = i;
      console.log(this.target_index);
      console.log(this.tar_model.cmpt[this.tabs].item_use[this.target_index]);
      this.target_index = index;
      this.delchk = true;
    },
    delAct_Do: function delAct_Do() {
      var _this5 = this;

      var cmpt_id = this.tar_model.cmpt[this.tabs].cmpt_id;
      var item_id = this.target.items.item_id;
      axios.get("/db/r_cmpt_item/delete/item/" + cmpt_id + "/" + item_id);
      var index = this.tar_model.cmpt[this.tabs].item_use.forEach(function (ar, ind) {
        if (ar.items.item_id === item_id) {
          _this5.tar_model.cmpt[_this5.tabs].item_use.splice(ind, 1);

          _this5.delchk = false;
          _this5.target = null;
          _this5.target_index = 0;
          return;
        }
      });
    },
    mv_back: function mv_back() {
      this.$router.go(-1); // let name = this.rtname ? this.rtname : "product_list";
      // this.$router.push({
      //   name: name
      // });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  methods: {
    submit: function submit() {
      this.$emit("rt", this.data, true);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".item_code_area .v-btn[data-v-4e1e03f6] {\n  margin: 0;\n}\n.class_list button[data-v-4e1e03f6] {\n  margin: 0 auto;\n}\n.item_code[data-v-4e1e03f6] {\n  font-size: 1.2rem;\n}\n.v-card__text[data-v-4e1e03f6] {\n  margin-bottom: 5rem;\n}\n.v-chip.ren[data-v-4e1e03f6] {\n  height: 44px;\n}\n.t + .t[data-v-4e1e03f6] {\n  margin-left: 1rem;\n}\ntd.price[data-v-4e1e03f6] {\n  font-size: 0.8rem;\n}\n.t[data-v-4e1e03f6] {\n  font-size: 1.2rem;\n  border: 0.5px solid white;\n  border-radius: 5px;\n  padding: 0.5rem;\n}\n.mini[data-v-4e1e03f6] {\n  font-size: 0.5rem;\n}\n.v-btn.lg[data-v-4e1e03f6] {\n  font-size: 1.4rem;\n  height: 28px;\n  padding: 4px;\n}\np[data-v-4e1e03f6] {\n  margin-bottom: 0;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "h1[data-v-82c08db8] {\n  font-size: 1.5rem;\n}\n.back[data-v-82c08db8] {\n  background-color: #fff;\n}\n.del-info[data-v-82c08db8] {\n  text-align: center;\n}\n.submit-btn[data-v-82c08db8] {\n  width: 100%;\n}\n.message[data-v-82c08db8] {\n  font-size: 0.8rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.valueOf()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),

/***/ "./node_modules/dayjs/locale/ja.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/locale/ja.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,_){ true?module.exports=_(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js")):undefined}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var _={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return e.locale(_,null,!0),_});


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=template&id=4e1e03f6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=template&id=4e1e03f6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _vm.tar_model && _vm.fm
        ? _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { color: "transparent", flat: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", flat: "" },
                      on: {
                        click: function($event) {
                          return _vm.mv_back()
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { color: "primary" } }, [
                        _vm._v("fas fa-angle-double-left")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-chip", { attrs: { color: "primary", outline: "" } }, [
                    _vm._v(_vm._s(_vm.fm.model))
                  ]),
                  _vm._v(" "),
                  _vm.selecter
                    ? [
                        _c(
                          "v-chip",
                          { attrs: { color: "primary", outline: "" } },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(_vm.fm.num) +
                                "\n          "
                            ),
                            _c("span", { staticClass: "mini" }, [_vm._v("EA")])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { attrs: { color: "primary", outline: "" } },
                          [_vm._v(_vm._s(_vm.fm.rev.numToRev()))]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { attrs: { color: "primary", outline: "" } },
                          [_vm._v(_vm._s(_vm.fm.code))]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { attrs: { color: "primary", outline: "" } },
                          [_vm._v(_vm._s(_vm.fm.order_day))]
                        )
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _vm.view
                    ? _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-tabs",
                            {
                              attrs: { "fixed-tabs": "", "show-arrows": "" },
                              model: {
                                value: _vm.tabs,
                                callback: function($$v) {
                                  _vm.tabs = $$v
                                },
                                expression: "tabs"
                              }
                            },
                            [
                              _c("v-tabs-slider", {
                                attrs: { color: "yellow" }
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.tar_model.cmpt, function(cmpt, index) {
                                return _c("v-tab", { key: index }, [
                                  _vm._v(_vm._s(cmpt.cmpt_code.slice(0, -3)))
                                ])
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.tar_model.cmpt, function(cmpt, index) {
                                return _c(
                                  "v-tab-item",
                                  { key: index, staticClass: "mt-5" },
                                  [
                                    _c("v-data-table", {
                                      attrs: {
                                        headers: _vm.headers,
                                        items: cmpt.item_use,
                                        "pagination.sync": "pagination",
                                        "hide-actions": "",
                                        "select-all": _vm.selecter,
                                        "item-key": "item_id"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "items",
                                            fn: function(props) {
                                              return [
                                                _vm.view_data_checker(
                                                  props.item.items.item_class
                                                )
                                                  ? _c("tr", [
                                                      _vm.selecter
                                                        ? _c(
                                                            "td",
                                                            [
                                                              _c("v-checkbox", {
                                                                attrs: {
                                                                  primary: "",
                                                                  "hide-details":
                                                                    ""
                                                                },
                                                                model: {
                                                                  value:
                                                                    props.selected,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      props,
                                                                      "selected",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "props.selected"
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-xs-center"
                                                        },
                                                        [
                                                          _c(
                                                            "p",
                                                            [
                                                              _c(
                                                                "v-chip",
                                                                {
                                                                  class:
                                                                    props.item
                                                                      .items
                                                                      .item_class_val
                                                                      .custom +
                                                                    " chip ren",
                                                                  attrs: {
                                                                    large: "",
                                                                    outline: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.change_item_class(
                                                                        props
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                        " +
                                                                      _vm._s(
                                                                        props
                                                                          .item
                                                                          .items
                                                                          .item_class_val
                                                                          .value ===
                                                                          "ネジ・スペーサ"
                                                                          ? "ネジ他"
                                                                          : props
                                                                              .item
                                                                              .items
                                                                              .item_class_val
                                                                              .value
                                                                      ) +
                                                                      "\n                        "
                                                                  ),
                                                                  _c("br"),
                                                                  _vm._v(
                                                                    "\n                        " +
                                                                      _vm._s(
                                                                        props
                                                                          .item
                                                                          .item_ren
                                                                      ) +
                                                                      "\n                      "
                                                                  )
                                                                ]
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-xs-center"
                                                        },
                                                        [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "item_code_area"
                                                            },
                                                            [
                                                              _c(
                                                                "nobr",
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        flat:
                                                                          "",
                                                                        icon:
                                                                          "",
                                                                        small:
                                                                          "",
                                                                        color:
                                                                          "primary"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.henshu(
                                                                            props.item
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            small:
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "far fa-edit"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "item_code"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          props
                                                                            .item
                                                                            .items
                                                                            .item_code
                                                                        )
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        flat:
                                                                          "",
                                                                        icon:
                                                                          "",
                                                                        small:
                                                                          "",
                                                                        color:
                                                                          "deep-orange darken-3"
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.delAct(
                                                                            props.item,
                                                                            props.index
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            small:
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "far fa-trash-alt"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          props.item.items
                                                            .order_code !==
                                                            "" &&
                                                          props.item.items
                                                            .order_code !==
                                                            props.item.items
                                                              .item_code
                                                            ? _c("p", [
                                                                _vm._v(
                                                                  "( " +
                                                                    _vm._s(
                                                                      props.item
                                                                        .items
                                                                        .order_code
                                                                    ) +
                                                                    " )"
                                                                )
                                                              ])
                                                            : _vm._e()
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-xs-center"
                                                        },
                                                        [
                                                          _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                props.item.items
                                                                  .item_model
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                props.item.items
                                                                  .item_name
                                                              )
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm.selecter
                                                        ? _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-xs-center"
                                                            },
                                                            [
                                                              _c(
                                                                "p",
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      staticClass:
                                                                        "lg indigo--text text--darken-3",
                                                                      attrs: {
                                                                        flat:
                                                                          "",
                                                                        small:
                                                                          ""
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.num_change(
                                                                            props
                                                                              .item
                                                                              .items
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                        " +
                                                                          _vm._s(
                                                                            props
                                                                              .item
                                                                              .items
                                                                              .num
                                                                          ) +
                                                                          "\n                        "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "mini pl-2"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "EA"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c("p", [
                                                                _vm._v(
                                                                  "\n                      " +
                                                                    _vm._s(
                                                                      props.item
                                                                        .items
                                                                        .price
                                                                    ) +
                                                                    "\n                      "
                                                                ),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "mini pl-2"
                                                                  },
                                                                  [_vm._v("¥")]
                                                                )
                                                              ])
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-xs-center price"
                                                        },
                                                        [
                                                          _c(
                                                            "v-layout",
                                                            {
                                                              attrs: {
                                                                row: "",
                                                                wrap: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._l(
                                                                props.item.items
                                                                  .vendor,
                                                                function(
                                                                  item,
                                                                  index
                                                                ) {
                                                                  return [
                                                                    _c(
                                                                      "v-flex",
                                                                      {
                                                                        key:
                                                                          "n" +
                                                                          index,
                                                                        attrs: {
                                                                          xs6:
                                                                            ""
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            item
                                                                              .vendname
                                                                              .com_name
                                                                          )
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm.selecter
                                                                      ? _c(
                                                                          "v-flex",
                                                                          {
                                                                            key:
                                                                              "p" +
                                                                              index,
                                                                            attrs: {
                                                                              xs6:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                Math.round(
                                                                                  item.vendor_item_price *
                                                                                    props
                                                                                      .item
                                                                                      .items
                                                                                      .num
                                                                                ).toLocaleString()
                                                                              )
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _c(
                                                                          "v-flex",
                                                                          {
                                                                            key:
                                                                              "p" +
                                                                              index,
                                                                            attrs: {
                                                                              xs6:
                                                                                ""
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                item.vendor_item_price
                                                                              )
                                                                            )
                                                                          ]
                                                                        )
                                                                  ]
                                                                }
                                                              )
                                                            ],
                                                            2
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ])
                                                  : _vm._e()
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      ),
                                      model: {
                                        value: _vm.selected[index],
                                        callback: function($$v) {
                                          _vm.$set(_vm.selected, index, $$v)
                                        },
                                        expression: "selected[index]"
                                      }
                                    })
                                  ],
                                  1
                                )
                              })
                            ],
                            2
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-bottom-nav",
                {
                  attrs: { fixed: "", value: "value", "active.sync": "value" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.close_cmpt()
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("戻る")]),
                      _vm._v(" "),
                      _c("v-icon", [_vm._v("fas fa-chevron-circle-left")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.selecter
                    ? _c(
                        "v-btn",
                        {
                          attrs: { flat: "", color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.make()
                            }
                          }
                        },
                        [
                          _c("span", [_vm._v("決定")]),
                          _vm._v(" "),
                          _c("v-icon", [_vm._v("fas fa-check-circle")])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.flg_chip_view = !_vm.flg_chip_view
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("CHIP品")]),
                      _vm._v(" "),
                      !_vm.flg_chip_view
                        ? _c("v-icon", [_vm._v("far fa-meh")])
                        : _c("v-icon", [_vm._v("far fa-laugh")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.flg_set_view = !_vm.flg_set_view
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("セット品")]),
                      _vm._v(" "),
                      !_vm.flg_set_view
                        ? _c("v-icon", [_vm._v("far fa-meh")])
                        : _c("v-icon", [_vm._v("far fa-laugh")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.add()
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("構成追加")]),
                      _vm._v(" "),
                      _c("v-icon", [_vm._v("fas fa-sitemap")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { transition: "dialog-transition", width: "500px" },
                  model: {
                    value: _vm.additem,
                    callback: function($$v) {
                      _vm.additem = $$v
                    },
                    expression: "additem"
                  }
                },
                [
                  _vm.additem
                    ? _c("AddCmptItem", {
                        attrs: { data: _vm.dialog_data },
                        on: { rt: _vm.rtAdd }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: {
                    "max-width": "500px",
                    transition: "dialog-transition"
                  },
                  model: {
                    value: _vm.delchk,
                    callback: function($$v) {
                      _vm.delchk = $$v
                    },
                    expression: "delchk"
                  }
                },
                [
                  _vm.delchk
                    ? _c("DelChecker", {
                        attrs: { data: _vm.delchk_val },
                        on: { rt: _vm.delAct_Do }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: {
                    "max-width": "700px",
                    transition: "dialog-transition"
                  },
                  model: {
                    value: _vm.henshu_view,
                    callback: function($$v) {
                      _vm.henshu_view = $$v
                    },
                    expression: "henshu_view"
                  }
                },
                [
                  _vm.henshu_view
                    ? _c("HenshuView", {
                        attrs: {
                          item_code: _vm.target.items.item_code,
                          item_rev: _vm.target.items.item_rev,
                          del: false
                        },
                        on: { pass: _vm.up_items }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: {
                    "max-width": "500px",
                    transition: "dialog-transition"
                  },
                  model: {
                    value: _vm.num_selecter,
                    callback: function($$v) {
                      _vm.num_selecter = $$v
                    },
                    expression: "num_selecter"
                  }
                },
                [
                  _c("NumChanger", {
                    attrs: { data: _vm.num_select_obj },
                    on: { rt: _vm.change_num }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: {
                    "max-width": "200px",
                    transition: "dialog-transition"
                  },
                  model: {
                    value: _vm.class_selecter,
                    callback: function($$v) {
                      _vm.class_selecter = $$v
                    },
                    expression: "class_selecter"
                  }
                },
                [
                  _c(
                    "v-list",
                    { staticClass: "text-xs-center class_list" },
                    _vm._l(_vm.class_list, function(item, index) {
                      return _c(
                        "v-list-tile",
                        { key: index, attrs: { avatar: "" } },
                        [
                          _c(
                            "v-list-tile-content",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { flat: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.select_item_class(item)
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(item.value))]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-alert",
    { staticClass: "back", attrs: { type: "info", value: true, outline: "" } },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c("v-flex", { attrs: { xs12: "" } }, [
            _c("h1", [_vm._v(_vm._s(_vm.data.title))]),
            _vm._v(" "),
            _c("p", {
              staticClass: "message",
              domProps: { innerHTML: _vm._s(_vm.data.message) }
            })
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "del-info", attrs: { xs12: "" } },
            [
              _c(
                "v-layout",
                { attrs: { wrap: "" } },
                [
                  _vm._l(_vm.data.data, function(item, index) {
                    return [
                      _c(
                        "v-flex",
                        { key: index, attrs: { xs12: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              name: item.name,
                              label: item.label,
                              id: item.id,
                              hint: item.hint,
                              type: item.type
                            },
                            model: {
                              value: item.value,
                              callback: function($$v) {
                                _vm.$set(item, "value", $$v)
                              },
                              expression: "item.value"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  }),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    {
                      staticClass: "mt-4",
                      attrs: { xs8: "", "offset-xs2": "" }
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "submit-btn",
                          attrs: { color: "info", outline: "" },
                          on: {
                            click: function($event) {
                              return _vm.submit()
                            }
                          }
                        },
                        [_vm._v("決定")]
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Product/Tyumon/CmptOrderList.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Product/Tyumon/CmptOrderList.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CmptOrderList_vue_vue_type_template_id_4e1e03f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CmptOrderList.vue?vue&type=template&id=4e1e03f6&scoped=true& */ "./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=template&id=4e1e03f6&scoped=true&");
/* harmony import */ var _CmptOrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CmptOrderList.vue?vue&type=script&lang=js& */ "./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CmptOrderList_vue_vue_type_style_index_0_id_4e1e03f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true& */ "./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CmptOrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CmptOrderList_vue_vue_type_template_id_4e1e03f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CmptOrderList_vue_vue_type_template_id_4e1e03f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e1e03f6",
  null
  
)

/* vuetify-loader */






















_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VApp"],VBottomNav: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBottomNav"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCheckbox: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCheckbox"],VChip: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VChip"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VDataTable: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VDataTable"],VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VDialog"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VList: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VList"],VListTile: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VListTile"],VListTileContent: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VListTileContent"],VTab: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTab"],VTabItem: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabItem"],VTabs: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabs"],VTabsSlider: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabsSlider"],VToolbar: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product/Tyumon/CmptOrderList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CmptOrderList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_style_index_0_id_4e1e03f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=style&index=0&id=4e1e03f6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_style_index_0_id_4e1e03f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_style_index_0_id_4e1e03f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_style_index_0_id_4e1e03f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_style_index_0_id_4e1e03f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_style_index_0_id_4e1e03f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=template&id=4e1e03f6&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=template&id=4e1e03f6&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_template_id_4e1e03f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CmptOrderList.vue?vue&type=template&id=4e1e03f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/Tyumon/CmptOrderList.vue?vue&type=template&id=4e1e03f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_template_id_4e1e03f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CmptOrderList_vue_vue_type_template_id_4e1e03f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/com/ComFormDialog.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/com/ComFormDialog.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true& */ "./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true&");
/* harmony import */ var _ComFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComFormDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& */ "./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "82c08db8",
  null
  
)

/* vuetify-loader */






_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAlert: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VAlert"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/com/ComFormDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComFormDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZHVjdC9UeXVtb24vQ21wdE9yZGVyTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9kdWN0L1R5dW1vbi9DbXB0T3JkZXJMaXN0LnZ1ZT9kZGExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT9kMTVkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RheWpzL2xvY2FsZS9qYS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9kdWN0L1R5dW1vbi9DbXB0T3JkZXJMaXN0LnZ1ZT9kOTI5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT84MGI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2R1Y3QvVHl1bW9uL0NtcHRPcmRlckxpc3QudnVlPzg5ZTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlPzZjMmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZHVjdC9UeXVtb24vQ21wdE9yZGVyTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZHVjdC9UeXVtb24vQ21wdE9yZGVyTGlzdC52dWU/OWQxOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9kdWN0L1R5dW1vbi9DbXB0T3JkZXJMaXN0LnZ1ZT8yNWRmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2R1Y3QvVHl1bW9uL0NtcHRPcmRlckxpc3QudnVlPzVlOWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT80YzlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT9lZTVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT83MzQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLDJFQURBO0FBRUEsMkVBRkE7QUFHQSwwRUFIQTtBQUlBO0FBSkEsR0FEQTtBQU9BLDhDQVBBO0FBUUE7QUFDQTtBQUNBLGFBREE7QUFFQSxrQkFGQTtBQUdBLHFCQUhBO0FBSUEsNkJBSkE7QUFLQSx5QkFMQTtBQU1BO0FBQ0EsdUJBREE7QUFFQSw4QkFGQTtBQUdBLGVBQ0E7QUFDQSxxQkFEQTtBQUVBLHNCQUZBO0FBR0EsZ0JBSEE7QUFJQSxrQkFKQTtBQUtBLHdCQUxBO0FBTUE7QUFOQSxTQURBO0FBSEEsT0FOQTtBQW9CQSxnQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSEEsRUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSkEsRUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTEEsQ0FwQkE7QUEyQkEsa0JBM0JBO0FBNEJBLG9CQTVCQTtBQTZCQTtBQUNBO0FBREEsT0E3QkE7QUFnQ0EsMkJBaENBO0FBaUNBLHNCQWpDQTtBQWtDQSx3QkFsQ0E7QUFtQ0EsMEJBbkNBO0FBb0NBLHlCQXBDQTtBQXFDQSxnQkFyQ0E7QUFzQ0Esb0JBdENBO0FBdUNBLHVCQXZDQTtBQXdDQSxtQkF4Q0E7QUF5Q0E7QUFDQSx1QkFEQTtBQUVBO0FBRkE7QUF6Q0E7QUE4Q0EsR0F2REE7QUF3REE7QUFDQTtBQUNBLEdBMURBO0FBMkRBO0FBQ0EsUUFEQSxrQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSx3QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkEsRUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSEEsRUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSkE7QUFNQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BSkE7QUFLQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBdkJBO0FBd0JBLFFBeEJBLGtCQXdCQTtBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsMkJBREE7QUFFQSw2QkFGQTtBQUdBLCtCQUhBO0FBSUEscUJBSkE7QUFLQSw2Q0FMQTtBQU1BLDJCQU5BO0FBT0Esc0JBUEE7QUFRQSw2QkFSQTtBQVNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQSx3QkFwQkEsQ0FxQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLDZCQUZBO0FBR0EsK0JBSEE7QUFJQSxpQ0FKQTtBQUtBLDhCQUxBO0FBTUEsbUNBTkE7QUFPQTtBQVBBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsNENBREE7QUFFQSw0Q0FGQTtBQUdBLDhCQUhBO0FBSUEsc0ZBQ0EsR0FEQSxDQUNBLGtCQURBLEVBQ0EsTUFEQSxFQUVBLE1BRkEsQ0FFQSxZQUZBO0FBSkE7QUFRQTtBQUNBLGFBaEJBO0FBaUJBO0FBQ0EsU0F2Q0E7QUF3Q0EsT0F6Q0E7QUEwQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEscUJBRkE7QUFHQTtBQUhBLFFBakVBLENBc0VBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQW5HQTtBQW9HQSxjQXBHQSx3QkFvR0E7QUFDQTtBQUNBLEtBdEdBO0FBdUdBLGFBdkdBLHFCQXVHQSxDQXZHQSxFQXVHQTtBQUNBLHdEQUNBO0FBQ0EsS0ExR0E7QUEyR0EsZUEzR0EsdUJBMkdBLENBM0dBLEVBMkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBLEtBdElBO0FBdUlBLGNBdklBLHNCQXVJQSxFQXZJQSxFQXVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0lBO0FBNElBLGFBNUlBLHFCQTRJQSxDQTVJQSxFQTRJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBLEtBeEpBO0FBeUpBLHFCQXpKQSw2QkF5SkEsSUF6SkEsRUF5SkE7QUFDQTtBQUNBO0FBQ0EsS0E1SkE7QUE2SkEscUJBN0pBLDZCQTZKQSxDQTdKQSxFQTZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUNBLGtFQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0F2S0E7QUF3S0EsY0F4S0Esc0JBd0tBLENBeEtBLEVBd0tBO0FBQ0E7QUFDQTtBQUNBLEtBM0tBO0FBNEtBLFVBNUtBLGtCQTRLQSxDQTVLQSxFQTRLQTtBQUNBO0FBQ0E7QUFDQSxLQS9LQTtBQWdMQSxhQWhMQSx1QkFnTEE7QUFDQTtBQUNBO0FBQ0EsS0FuTEE7QUFvTEEsWUFwTEEsb0JBb0xBLENBcExBLEVBb0xBO0FBQUE7O0FBQ0EsWUFDQSxHQURBLENBRUEscUJBQ0EsMkJBREEsR0FFQSxHQUZBLEdBR0EsMEJBTEEsRUFPQSxJQVBBLENBT0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBLE9BWEE7QUFZQSxLQWpNQTtBQWtNQSxxQkFsTUEsNkJBa01BLENBbE1BLEVBa01BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsS0EzTUE7QUE0TUEsT0E1TUEsaUJBNE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLGlCQUNBLFNBQ0EsY0FEQSxHQUVBLG9EQUZBLEdBR0Esd0JBSEEsR0FJQSwrQkFQQTtBQVFBLGVBQ0E7QUFDQSwyQkFEQTtBQUVBLHdCQUZBO0FBR0EseUJBSEE7QUFJQSxrQkFKQTtBQUtBLG1CQUxBO0FBTUE7QUFOQSxTQURBLEVBU0E7QUFDQSwwQkFEQTtBQUVBLHdCQUZBO0FBR0Esd0JBSEE7QUFJQSx1REFKQTtBQUtBLG1CQUxBO0FBTUE7QUFOQSxTQVRBLEVBaUJBO0FBQ0EsMEJBREE7QUFFQSxxQkFGQTtBQUdBLHdCQUhBO0FBSUEsMEJBSkE7QUFLQSxtQkFMQTtBQU1BO0FBTkEsU0FqQkEsQ0FSQTtBQWtDQTtBQUNBO0FBREE7QUFsQ0E7QUFzQ0E7QUFDQSxLQXZQQTtBQXdQQSxTQXhQQSxpQkF3UEEsQ0F4UEEsRUF3UEEsR0F4UEEsRUF3UEE7QUFBQTs7QUFDQSxVQUNBLDBCQUNBLHNCQURBLElBRUEsc0JBSEEsRUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUE7QUFGQSxTQURBO0FBS0E7QUFDQSw0QkFEQTtBQUVBO0FBRkE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQVBBO0FBUUE7QUFDQSxLQW5SQTtBQW9SQSxVQXBSQSxrQkFvUkEsQ0FwUkEsRUFvUkEsS0FwUkEsRUFvUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExUkE7QUEyUkEsYUEzUkEsdUJBMlJBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVJBO0FBU0EsS0F4U0E7QUF5U0EsV0F6U0EscUJBeVNBO0FBQ0EsMEJBREEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL1NBO0FBM0RBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SkE7QUFDQSxpQkFEQTtBQUVBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBLEc7Ozs7Ozs7Ozs7O0FDL0JBLDJCQUEyQixtQkFBTyxDQUFDLGlIQUE0RDtBQUMvRjtBQUNBLGNBQWMsUUFBUyw0Q0FBNEMsY0FBYyxHQUFHLHVDQUF1QyxtQkFBbUIsR0FBRywrQkFBK0Isc0JBQXNCLEdBQUcsa0NBQWtDLHdCQUF3QixHQUFHLGdDQUFnQyxpQkFBaUIsR0FBRyw0QkFBNEIsc0JBQXNCLEdBQUcsNkJBQTZCLHNCQUFzQixHQUFHLHVCQUF1QixzQkFBc0IsOEJBQThCLHVCQUF1QixvQkFBb0IsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcsOEJBQThCLHNCQUFzQixpQkFBaUIsaUJBQWlCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHOzs7Ozs7Ozs7Ozs7O0FDRnh0QiwyQkFBMkIsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDNUY7QUFDQSxjQUFjLFFBQVMsd0JBQXdCLHNCQUFzQixHQUFHLDBCQUEwQiwyQkFBMkIsR0FBRyw4QkFBOEIsdUJBQXVCLEdBQUcsZ0NBQWdDLGdCQUFnQixHQUFHLDZCQUE2QixzQkFBc0IsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0ZqUyxlQUFlLEtBQW9ELG9CQUFvQixTQUEyRCxDQUFDLGlCQUFpQixhQUFhLDJHQUEyRyxFQUFFLE9BQU8sSUFBSSxPQUFPLElBQUksWUFBWSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLHNCQUFzQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUkseUJBQXlCLGdCQUFnQix5REFBeUQsSUFBSSxrQkFBa0IsNkRBQTZELCtDQUErQyxpQkFBaUIsOEdBQThHLHlDQUF5QyxlQUFlLHlDQUF5QyxlQUFlLE9BQU8scUNBQXFDLGtEQUFrRCxlQUFlLG1CQUFtQixJQUFJLG1NQUFtTSxhQUFhLE9BQU8sa0JBQWtCLHNCQUFzQixtQkFBbUIsTUFBTSxlQUFlLGtEQUFrRCxLQUFLLGFBQWEsV0FBVyxrQkFBa0IsbUJBQW1CLHlCQUF5Qiw0QkFBNEIsY0FBYyxNQUFNLHlCQUF5QixLQUFLLDhCQUE4QixZQUFZLHFCQUFxQixHQUFHLGlCQUFpQixjQUFjLG1EQUFtRCxrQkFBa0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsaUNBQWlDLDBCQUEwQix3Q0FBd0MsdUNBQXVDLGlCQUFpQixvSkFBb0osbUJBQW1CLGdCQUFnQixtQkFBbUIsY0FBYyxvTEFBb0wscUJBQXFCLFNBQVMsc0JBQXNCLDZDQUE2Qyx3QkFBd0IsV0FBVyw0Q0FBNEMseUJBQXlCLDRCQUE0QiwwQkFBMEIsMEJBQTBCLHNCQUFzQixvQ0FBb0Msb0JBQW9CLHlCQUF5QixxQkFBcUIseUJBQXlCLG1CQUFtQix5QkFBeUIsb0JBQW9CLDhCQUE4QixvQkFBb0IseUJBQXlCLHNCQUFzQix5QkFBeUIsc0JBQXNCLHlCQUF5QiwyQkFBMkIsMEJBQTBCLG1CQUFtQixzQ0FBc0Msc0JBQXNCLHlCQUF5Qix5QkFBeUIsa0RBQWtELHdEQUF3RCxzQkFBc0IsaUJBQWlCLG9GQUFvRiwwREFBMEQsVUFBVSxnQ0FBZ0MsZ0NBQWdDLHlEQUF5RCwwQkFBMEIsd0NBQXdDLCtCQUErQiwrQkFBK0Isb0NBQW9DLDZCQUE2QixxQkFBcUIsMEJBQTBCLHNCQUFzQixpREFBaUQsMktBQTJLLGlCQUFpQixpQ0FBaUMscUZBQXFGLHNCQUFzQix3QkFBd0IscUJBQXFCLDhCQUE4QixtQkFBbUIsc0JBQXNCLHFCQUFxQixhQUFhLFlBQVksMkJBQTJCLFdBQVcsZ0RBQWdELHNDQUFzQyxzQ0FBc0MscUJBQXFCLHFCQUFxQixXQUFXLDJEQUEyRCxtQkFBbUIsMEJBQTBCLHdCQUF3QixzQkFBc0IsV0FBVyx3Q0FBd0MsdUlBQXVJLDJDQUEyQyxlQUFlLDJCQUEyQiwrQkFBK0IscUJBQXFCLDJCQUEyQixJQUFJLDJaQUEyWixpQ0FBaUMsa0NBQWtDLEVBQUUsd0JBQXdCLHNEQUFzRCx3QkFBd0Isb0ZBQW9GLGNBQWMsb0hBQW9ILDBCQUEwQix3QkFBd0Isc0JBQXNCLGtCQUFrQix3QkFBd0IscUJBQXFCLG1CQUFtQix3QkFBd0Isb0JBQW9CLCtCQUErQixxQkFBcUIseUJBQXlCLHFCQUFxQiwwQkFBMEIsMEJBQTBCLDZCQUE2Qix1QkFBdUIsNkJBQTZCLEdBQUcsR0FBRyxzREFBc0Qsa0JBQWtCLDJDQUEyQyxnQkFBZ0Isb0JBQW9COzs7Ozs7Ozs7Ozs7QUNBNzJNLGVBQWUsS0FBb0Qsa0JBQWtCLG1CQUFPLENBQUMsZ0RBQU8sR0FBRyxTQUFzRixDQUFDLGtCQUFrQixhQUFhLDZDQUE2QyxPQUFPLDJOQUEyTixhQUFhLFVBQVUsMExBQTBMLHNCQUFzQixzQkFBc0IsZUFBZSxxSEFBcUgsNkJBQTZCOzs7Ozs7Ozs7Ozs7O0FDQzE0QixjQUFjLG1CQUFPLENBQUMsK3pCQUE2Yzs7QUFFbmUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQyxreUJBQTJiOztBQUVqZCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNEdBQXlEOztBQUU5RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxpQ0FBaUMsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9DQUFvQyxTQUFTLG1CQUFtQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxTQUFTLGdDQUFnQyxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsZ0NBQWdDLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsZ0NBQWdDLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLGdDQUFnQyxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxnQ0FBZ0MsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsWUFBWSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNDQUFzQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxvREFBb0QsYUFBYTtBQUNqRTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtDQUFrQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDd0g7QUFDcEY7QUFDRjtBQUNDO0FBQ0U7QUFDRztBQUN4Qyw4SEFBaUIsYUFBYSwwREFBTSxDQUFDLHNEQUFJLENBQUMsd0RBQUssQ0FBQyw0REFBTyxDQUFDLGtFQUFVLENBQUM7OztBQUduRTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDakRmO0FBQUE7QUFBQSx3Q0FBeVAsQ0FBZ0IsbVNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN1E7QUFBQTtBQUFBO0FBQUE7QUFBMmYsQ0FBZ0Isa2ZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL2dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwPlxuICAgIDx2LWNhcmQgdi1pZj1cInRhcl9tb2RlbCAmJiBmbVwiPlxuICAgICAgPHYtdG9vbGJhciBjb2xvcj1cInRyYW5zcGFyZW50XCIgZmxhdD5cbiAgICAgICAgPHYtYnRuIGljb24gZmxhdCBAY2xpY2s9XCJtdl9iYWNrKClcIj5cbiAgICAgICAgICA8di1pY29uIGNvbG9yPVwicHJpbWFyeVwiPmZhcyBmYS1hbmdsZS1kb3VibGUtbGVmdDwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1jaGlwIGNvbG9yPVwicHJpbWFyeVwiIG91dGxpbmU+e3sgZm0ubW9kZWwgfX08L3YtY2hpcD5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzZWxlY3RlclwiPlxuICAgICAgICAgIDx2LWNoaXAgY29sb3I9XCJwcmltYXJ5XCIgb3V0bGluZT5cbiAgICAgICAgICAgIHt7IGZtLm51bSB9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW5pXCI+RUE8L3NwYW4+XG4gICAgICAgICAgPC92LWNoaXA+XG4gICAgICAgICAgPHYtY2hpcCBjb2xvcj1cInByaW1hcnlcIiBvdXRsaW5lPnt7IGZtLnJldi5udW1Ub1JldigpIH19PC92LWNoaXA+XG4gICAgICAgICAgPHYtY2hpcCBjb2xvcj1cInByaW1hcnlcIiBvdXRsaW5lPnt7IGZtLmNvZGUgfX08L3YtY2hpcD5cbiAgICAgICAgICA8di1jaGlwIGNvbG9yPVwicHJpbWFyeVwiIG91dGxpbmU+e3sgZm0ub3JkZXJfZGF5IH19PC92LWNoaXA+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3YtdG9vbGJhcj5cbiAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgPHYtY29udGFpbmVyIGZsdWlkIHYtaWY9XCJ2aWV3XCI+XG4gICAgICAgICAgPHYtdGFicyBmaXhlZC10YWJzIHNob3ctYXJyb3dzIHYtbW9kZWw9XCJ0YWJzXCI+XG4gICAgICAgICAgICA8di10YWJzLXNsaWRlciBjb2xvcj1cInllbGxvd1wiPjwvdi10YWJzLXNsaWRlcj5cbiAgICAgICAgICAgIDx2LXRhYlxuICAgICAgICAgICAgICB2LWZvcj1cIihjbXB0LCBpbmRleCkgaW4gdGFyX21vZGVsLmNtcHRcIlxuICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgPnt7IGNtcHQuY21wdF9jb2RlLnNsaWNlKDAsIC0zKSB9fTwvdi10YWI+XG4gICAgICAgICAgICA8di10YWItaXRlbSB2LWZvcj1cIihjbXB0LCBpbmRleCkgaW4gdGFyX21vZGVsLmNtcHRcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cIm10LTVcIj5cbiAgICAgICAgICAgICAgPHYtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFtpbmRleF1cIlxuICAgICAgICAgICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiY21wdC5pdGVtX3VzZVwiXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5zeW5jPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgaGlkZS1hY3Rpb25zXG4gICAgICAgICAgICAgICAgOnNlbGVjdC1hbGw9XCJzZWxlY3RlclwiXG4gICAgICAgICAgICAgICAgaXRlbS1rZXk9XCJpdGVtX2lkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbXM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgPHRyIHYtaWY9XCJ2aWV3X2RhdGFfY2hlY2tlcihwcm9wcy5pdGVtLml0ZW1zLml0ZW1fY2xhc3MpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwic2VsZWN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8di1jaGVja2JveCB2LW1vZGVsPVwicHJvcHMuc2VsZWN0ZWRcIiBwcmltYXJ5IGhpZGUtZGV0YWlscz48L3YtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInByb3BzLml0ZW0uaXRlbXMuaXRlbV9jbGFzc192YWwuY3VzdG9tICsgJyBjaGlwIHJlbidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZV9pdGVtX2NsYXNzKHByb3BzKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uaXRlbXMuaXRlbV9jbGFzc192YWwudmFsdWUgPT09IFwi44ON44K444O744K544Oa44O844K1XCIgPyBcIuODjeOCuOS7llwiIDogcHJvcHMuaXRlbS5pdGVtcy5pdGVtX2NsYXNzX3ZhbC52YWx1ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLml0ZW1fcmVuIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2hpcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtX2NvZGVfYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IGljb24gc21hbGwgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwiaGVuc2h1KHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbD5mYXIgZmEtZWRpdDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW1fY29kZVwiPnt7IHByb3BzLml0ZW0uaXRlbXMuaXRlbV9jb2RlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJkZWVwLW9yYW5nZSBkYXJrZW4tM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsQWN0KHByb3BzLml0ZW0sIHByb3BzLmluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIHNtYWxsPmZhciBmYS10cmFzaC1hbHQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbm9icj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwcm9wcy5pdGVtLml0ZW1zLm9yZGVyX2NvZGUgIT09ICcnICYmIHByb3BzLml0ZW0uaXRlbXMub3JkZXJfY29kZSAhPT0gcHJvcHMuaXRlbS5pdGVtcy5pdGVtX2NvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgID4oIHt7IHByb3BzLml0ZW0uaXRlbXMub3JkZXJfY29kZSB9fSApPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IHByb3BzLml0ZW0uaXRlbXMuaXRlbV9tb2RlbCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57eyBwcm9wcy5pdGVtLml0ZW1zLml0ZW1fbmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIiB2LWlmPVwic2VsZWN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGcgaW5kaWdvLS10ZXh0IHRleHQtLWRhcmtlbi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwibnVtX2NoYW5nZShwcm9wcy5pdGVtLml0ZW1zKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uaXRlbXMubnVtIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluaSBwbC0yXCI+RUE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0uaXRlbXMucHJpY2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluaSBwbC0yXCI+wqU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciBwcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcHJvcHMuaXRlbS5pdGVtcy52ZW5kb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgOmtleT1cIiduJyArIGluZGV4XCI+e3sgaXRlbS52ZW5kbmFtZS5jb21fbmFtZSB9fTwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeHM2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cIidwJyArIGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgTWF0aC5yb3VuZChpdGVtLnZlbmRvcl9pdGVtX3ByaWNlICogcHJvcHMuaXRlbS5pdGVtcy5udW0pLnRvTG9jYWxlU3RyaW5nKCkgfX08L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgOmtleT1cIidwJyArIGluZGV4XCIgdi1lbHNlPnt7IGl0ZW0udmVuZG9yX2l0ZW1fcHJpY2UgfX08L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgPC92LXRhYnM+XG4gICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgPHYtYm90dG9tLW5hdiBmaXhlZCB2YWx1ZT1cInZhbHVlXCIgYWN0aXZlLnN5bmM9XCJ2YWx1ZVwiPlxuICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJjbG9zZV9jbXB0KClcIj5cbiAgICAgICAgICA8c3Bhbj7miLvjgos8L3NwYW4+XG4gICAgICAgICAgPHYtaWNvbj5mYXMgZmEtY2hldnJvbi1jaXJjbGUtbGVmdDwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtYWtlKClcIiB2LWlmPVwic2VsZWN0ZXJcIj5cbiAgICAgICAgICA8c3Bhbj7msbrlrpo8L3NwYW4+XG4gICAgICAgICAgPHYtaWNvbj5mYXMgZmEtY2hlY2stY2lyY2xlPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cImZsZ19jaGlwX3ZpZXc9IWZsZ19jaGlwX3ZpZXdcIj5cbiAgICAgICAgICA8c3Bhbj5DSElQ5ZOBPC9zcGFuPlxuICAgICAgICAgIDx2LWljb24gdi1pZj1cIiFmbGdfY2hpcF92aWV3XCI+ZmFyIGZhLW1laDwvdi1pY29uPlxuICAgICAgICAgIDx2LWljb24gdi1lbHNlPmZhciBmYS1sYXVnaDwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJmbGdfc2V0X3ZpZXc9IWZsZ19zZXRfdmlld1wiPlxuICAgICAgICAgIDxzcGFuPuOCu+ODg+ODiOWTgTwvc3Bhbj5cbiAgICAgICAgICA8di1pY29uIHYtaWY9XCIhZmxnX3NldF92aWV3XCI+ZmFyIGZhLW1laDwvdi1pY29uPlxuICAgICAgICAgIDx2LWljb24gdi1lbHNlPmZhciBmYS1sYXVnaDwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJhZGQoKVwiPlxuICAgICAgICAgIDxzcGFuPuani+aIkOi/veWKoDwvc3Bhbj5cbiAgICAgICAgICA8di1pY29uPmZhcyBmYS1zaXRlbWFwPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtYm90dG9tLW5hdj5cbiAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiYWRkaXRlbVwiIHRyYW5zaXRpb249XCJkaWFsb2ctdHJhbnNpdGlvblwiIHdpZHRoPVwiNTAwcHhcIj5cbiAgICAgICAgPEFkZENtcHRJdGVtIDpkYXRhPVwiZGlhbG9nX2RhdGFcIiBAcnQ9XCJydEFkZFwiIHYtaWY9XCJhZGRpdGVtXCI+PC9BZGRDbXB0SXRlbT5cbiAgICAgIDwvdi1kaWFsb2c+XG4gICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGNoa1wiIG1heC13aWR0aD1cIjUwMHB4XCIgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCI+XG4gICAgICAgIDxEZWxDaGVja2VyIDpkYXRhPVwiZGVsY2hrX3ZhbFwiIEBydD1cImRlbEFjdF9Eb1wiIHYtaWY9XCJkZWxjaGtcIj48L0RlbENoZWNrZXI+XG4gICAgICA8L3YtZGlhbG9nPlxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJoZW5zaHVfdmlld1wiIG1heC13aWR0aD1cIjcwMHB4XCIgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCI+XG4gICAgICAgIDxIZW5zaHVWaWV3XG4gICAgICAgICAgdi1pZj1cImhlbnNodV92aWV3XCJcbiAgICAgICAgICA6aXRlbV9jb2RlPVwidGFyZ2V0Lml0ZW1zLml0ZW1fY29kZVwiXG4gICAgICAgICAgOml0ZW1fcmV2PVwidGFyZ2V0Lml0ZW1zLml0ZW1fcmV2XCJcbiAgICAgICAgICA6ZGVsPVwiZmFsc2VcIlxuICAgICAgICAgIEBwYXNzPVwidXBfaXRlbXNcIlxuICAgICAgICA+PC9IZW5zaHVWaWV3PlxuICAgICAgPC92LWRpYWxvZz5cbiAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwibnVtX3NlbGVjdGVyXCIgbWF4LXdpZHRoPVwiNTAwcHhcIiB0cmFuc2l0aW9uPVwiZGlhbG9nLXRyYW5zaXRpb25cIj5cbiAgICAgICAgPE51bUNoYW5nZXIgOmRhdGE9XCJudW1fc2VsZWN0X29ialwiIEBydD1cImNoYW5nZV9udW1cIj48L051bUNoYW5nZXI+XG4gICAgICA8L3YtZGlhbG9nPlxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJjbGFzc19zZWxlY3RlclwiIG1heC13aWR0aD1cIjIwMHB4XCIgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCI+XG4gICAgICAgIDx2LWxpc3QgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciBjbGFzc19saXN0XCI+XG4gICAgICAgICAgPHYtbGlzdC10aWxlIGF2YXRhciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2xhc3NfbGlzdFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgPHYtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgICAgIDx2LWJ0biBmbGF0IEBjbGljaz1cInNlbGVjdF9pdGVtX2NsYXNzKGl0ZW0pXCI+e3sgaXRlbS52YWx1ZSB9fTwvdi1idG4+XG4gICAgICAgICAgICA8L3YtbGlzdC10aWxlLWNvbnRlbnQ+XG4gICAgICAgICAgPC92LWxpc3QtdGlsZT5cbiAgICAgICAgPC92LWxpc3Q+XG4gICAgICA8L3YtZGlhbG9nPlxuICAgIDwvdi1jYXJkPlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCBcImRheWpzL2xvY2FsZS9qYVwiO1xuZGF5anMubG9jYWxlKFwiamFcIik7XG5cbmltcG9ydCBEZWxDaGVja2VyIGZyb20gXCIuLy4uLy4uL2NvbS9Db21DaGVja0RpYWxvZ1wiO1xuaW1wb3J0IE51bUNoYW5nZXIgZnJvbSBcIi4vLi4vLi4vY29tL0NvbUZvcm1EaWFsb2dcIjtcbmltcG9ydCBIZW5zaHVWaWV3IGZyb20gXCIuLy4uLy4uL0l0ZW1EYXRhL0hlbnNodVwiO1xuaW1wb3J0IEFkZENtcHRJdGVtIGZyb20gXCIuLy4uLy4uL2NvbS9Db21Gb3JtRGlhbG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIERlbENoZWNrZXIsXG4gICAgQWRkQ21wdEl0ZW0sXG4gICAgTnVtQ2hhbmdlcixcbiAgICBIZW5zaHVWaWV3XG4gIH0sXG4gIHByb3BzOiBbXCJ0YXJfbW9kZWxcIiwgXCJmbVwiLCBcIm1vZGVcIiwgXCJydG5hbWVcIl0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWJzOiAwLFxuICAgICAgdGFyZ2V0OiBudWxsLFxuICAgICAgdGFyZ2V0X2luZGV4OiAwLFxuICAgICAgbnVtX2NoYW5nZV90YXJnZXQ6IG51bGwsXG4gICAgICBudW1fc2VsZWN0ZXI6IGZhbHNlLFxuICAgICAgbnVtX3NlbGVjdF9vYmo6IHtcbiAgICAgICAgdGl0bGU6IFwi5omL6YWN5pWw6YeP5aSJ5pu0XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwi5omL6YWN5pWw44KS5aSJ5pu044Gn44GN44G+44GZ44CCXCIsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm51bVwiLFxuICAgICAgICAgICAgbGFiZWw6IFwi5omL6YWN5pWwXCIsXG4gICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgIGhpbnQ6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiBbXG4gICAgICAgIHsgdGV4dDogXCLpgKPvvI/nqK7liKVcIiwgdmFsdWU6IFwiaXRlbV9yZW5cIiwgYWxpZ246IFwiY2VudGVyXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIuaJi+mFjeWTgeebruOCs+ODvOODiVwiLCB2YWx1ZTogXCJpdGVtcy5pdGVtX2NvZGVcIiwgYWxpZ246IFwiY2VudGVyXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIuWTgeWQjVwiLCB2YWx1ZTogXCJpdGVtcy5pdGVtX21vZGVsXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCLmiYvphY3mlbBcIiwgdmFsdWU6IFwiaXRlbXMuaXRlbV9tb2RlbFwiLCBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICB7IHRleHQ6IFwi5omL6YWN5YWIXCIsIHZhbHVlOiBcIml0ZW1zLml0ZW1fbW9kZWxcIiwgYWxpZ246IFwiY2VudGVyXCIgfVxuICAgICAgXSxcbiAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICAgIHNlbGVjdGVyOiB0cnVlLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBzb3J0Qnk6IFwiaXRlbV9yZW5cIlxuICAgICAgfSxcbiAgICAgIGNsYXNzX3NlbGVjdGVyOiBmYWxzZSxcbiAgICAgIGNsYXNzX2xpc3Q6IG51bGwsXG4gICAgICBoZW5zaHVfdmlldzogZmFsc2UsXG4gICAgICBmbGdfY2hpcF92aWV3OiBmYWxzZSxcbiAgICAgIGZsZ19zZXRfdmlldzogZmFsc2UsXG4gICAgICB2aWV3OiB0cnVlLFxuICAgICAgYWRkaXRlbTogZmFsc2UsXG4gICAgICBkaWFsb2dfZGF0YTogbnVsbCxcbiAgICAgIGRlbGNoazogZmFsc2UsXG4gICAgICBkZWxjaGtfdmFsOiB7XG4gICAgICAgIHRpdGxlOiBcIuani+aIkOmDqOadkOWJiumZpFwiLFxuICAgICAgICBtZXNzYWdlOiBcIuimquW9ouW8j+OBi+OCiemDqOadkOOCkuWJiumZpOOBl+OBvuOBmeOAglwiXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0KCkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJjbXB0XCIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBbXG4gICAgICAgICAgeyB0ZXh0OiBcIumAo++8j+eoruWIpVwiLCB2YWx1ZTogXCJpdGVtX3JlblwiLCBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCLmiYvphY3lk4Hnm67jgrPjg7zjg4lcIiwgdmFsdWU6IFwiaXRlbXMuaXRlbV9jb2RlXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIuWTgeWQjVwiLCB2YWx1ZTogXCJpdGVtcy5pdGVtX21vZGVsXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIuaJi+mFjeWFiFwiLCB2YWx1ZTogXCJpdGVtcy5pdGVtX21vZGVsXCIsIGFsaWduOiBcImNlbnRlclwiIH1cbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRhcl9tb2RlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJwcm9kdWN0X2xpc3RcIiB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50YXJfbW9kZWwuY21wdC5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjLml0ZW1fdXNlLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXROdW1QcmljZShpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGF4aW9zLmdldChcIi9kYi9pdGVtcy9jbGFzcy9saXN0XCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5jbGFzc19saXN0ID0gcmVzLmRhdGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG1ha2UoKSB7XG4gICAgICBsZXQgZm0gPSB0aGlzLmZtO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KFwi6YOo5p2Q44KS6YG45oqe44GX44Gm44GP44Gg44GV44GEXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgZENudE9yZGVyTGlzdCA9IHtcbiAgICAgICAgY250X21vZGVsOiBmbS5tb2RlbCxcbiAgICAgICAgY250X21vZGVsX3JldjogZm0ucmV2LFxuICAgICAgICBjbnRfb3JkZXJfY29kZTogZm0uY29kZSxcbiAgICAgICAgY250X3N0YXR1czogMCxcbiAgICAgICAgY250X29yZGVyX2xpc3Rfc3RhdHVzOiBmbS5vcmRlcl9jbGFzcyxcbiAgICAgICAgcGRjdF9pZDogZm0ucGRjdF9pZCxcbiAgICAgICAgb3JkZXJfcHJpY2U6IDAsXG4gICAgICAgIGNudF9vcmRlcl9udW06IGZtLm51bSxcbiAgICAgICAgdXNlcl95b3lha3U6IGZtLnVzZXJcbiAgICAgIH07XG4gICAgICBsZXQgcHJpY2UgPSAwO1xuICAgICAgbGV0IGRDbnRPcmRlcnMgPSBbXTtcbiAgICAgIGxldCBkQ250UHJpY2UgPSBbXTtcbiAgICAgIGxldCBrZXludW0gPSAxMDAwO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RlZCk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmZvckVhY2goKGEsIHgpID0+IHtcbiAgICAgICAgYS5mb3JFYWNoKChhciwgbikgPT4ge1xuICAgICAgICAgIGtleW51bSA9IGtleW51bSAtIDE7XG4gICAgICAgICAgbGV0IGkgPSBhci5pdGVtcztcbiAgICAgICAgICBpZiAoaS5pdGVtX2NsYXNzID09PSAxKSByZXR1cm47XG4gICAgICAgICAgaWYgKCF0aGlzLmZsZ19jaGlwX3ZpZXcpIHtcbiAgICAgICAgICAgIGlmIChpLml0ZW1fY2xhc3MgPT09IDYpIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmZsZ19zZXRfdmlldykge1xuICAgICAgICAgICAgaWYgKGkuaXRlbV9jbGFzcyA9PT0gMykgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZENudE9yZGVyc1t4XSA9PT0gdW5kZWZpbmVkKSBkQ250T3JkZXJzW3hdID0gW107XG4gICAgICAgICAgZENudE9yZGVyc1t4XVtuXSA9IHtcbiAgICAgICAgICAgIGNudF9vcmRlcl9jb2RlOiBmbS5jb2RlLFxuICAgICAgICAgICAgb3JkZXJfa2V5OiBrZXludW0sXG4gICAgICAgICAgICBjbXB0X2lkOiBhci5jbXB0X2lkLFxuICAgICAgICAgICAgYXNzeV9udW06IGFyLml0ZW1fcmVuLFxuICAgICAgICAgICAgaXRlbV9pZDogaS5pdGVtX2lkLFxuICAgICAgICAgICAgbnVtX29yZGVyOiBhci5pdGVtcy5udW0sXG4gICAgICAgICAgICBhcHBvX251bTogZm0ubnVtICogYXIuaXRlbV91c2VcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpLnZlbmRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpLnZlbmRvci5mb3JFYWNoKChhcnIsIG5uKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChkQ250UHJpY2VbeF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRDbnRQcmljZVt4XSA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChkQ250UHJpY2VbeF1bbl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRDbnRQcmljZVt4XVtuXSA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRDbnRQcmljZVt4XVtuXVtubl0gPSB7XG4gICAgICAgICAgICAgICAgdmVuZG9yX2NvZGU6IGFyci52ZW5kb3JfY29kZSxcbiAgICAgICAgICAgICAgICBwcmljZTogYXJyLnZlbmRvcl9pdGVtX3ByaWNlLFxuICAgICAgICAgICAgICAgIGtha286IGFyci5rYWtvLFxuICAgICAgICAgICAgICAgIG9yZGVyX2RheTogZGF5anMoZm0ub3JkZXJfZGF5KVxuICAgICAgICAgICAgICAgICAgLmFkZChhcnIub3JkZXJfYWRkX2RhdGUsIFwiZGF5c1wiKVxuICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcHJpY2UgPSBwcmljZSArIGFyci52ZW5kb3JfaXRlbV9wcmljZSAqIGkubnVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgZENudE9yZGVyTGlzdC5vcmRlcl9wcmljZSA9IHByaWNlO1xuICAgICAgbGV0IGQgPSB7XG4gICAgICAgIG9sOiBkQ250T3JkZXJMaXN0LFxuICAgICAgICBvOiBkQ250T3JkZXJzLFxuICAgICAgICBvcDogZENudFByaWNlXG4gICAgICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coZCk7XG4gICAgICAvLyByZXR1cm47XG4gICAgICBheGlvcy5wb3N0KFwiL2RiL29yZGVyL3lveWFrdS9zZXRcIiwgZCkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9wcm9kdWN0X2xpc3RcIik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNsb3NlX2NtcHQoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xvc2VcIik7XG4gICAgfSxcbiAgICB0b2dnbGVBbGwoaSkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQubGVuZ3RoKSB0aGlzLnNlbGVjdGVkID0gW107XG4gICAgICBlbHNlIHRoaXMuc2VsZWN0ZWQgPSBpLnNsaWNlKCk7XG4gICAgfSxcbiAgICBzZXROdW1QcmljZShpKSB7XG4gICAgICBsZXQgemFuID0gaS5pdGVtcy5sYXN0X251bTtcbiAgICAgIGxldCB5b3lha3UgPSBpLml0ZW1zLmFwcG9fbnVtO1xuICAgICAgbGV0IHRlaGFpID0gaS5pdGVtcy5vcmRlcl9udW07XG4gICAgICBsZXQgaGl0dXlvdSA9IGkuaXRlbV91c2UgKiB0aGlzLmZtLm51bTtcbiAgICAgIGxldCBvcmRlciA9IGhpdHV5b3UgLSB6YW4gLSB0ZWhhaSArIHlveWFrdTtcbiAgICAgIGlmIChpLml0ZW1zLmxvdF9udW0gPD0gMCkge1xuICAgICAgICBpZiAob3JkZXIgPCAwKSB7XG4gICAgICAgICAgaS5pdGVtcy5udW0gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkuaXRlbXMubnVtID0gb3JkZXI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsb3QgPSBpLml0ZW1zLmxvdF9udW07XG4gICAgICAgIGxldCBtaW4gPSBpLml0ZW1zLm1pbmltdW1fc2V0O1xuICAgICAgICBpZiAob3JkZXIgPCBtaW4pIHtcbiAgICAgICAgICBpLml0ZW1zLm51bSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNldE51bSA9IE1hdGguY2VpbChvcmRlciAvIGxvdCk7XG4gICAgICAgIGkuaXRlbXMubnVtID0gbG90ICogc2V0TnVtO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJpY2UgPSAwO1xuICAgICAgaS5pdGVtcy52ZW5kb3IuZm9yRWFjaChhciA9PiB7XG4gICAgICAgIHByaWNlID0gTnVtYmVyKHByaWNlKSArIE51bWJlcihhci52ZW5kb3JfaXRlbV9wcmljZSk7XG4gICAgICB9KTtcbiAgICAgIGkuaXRlbXMucHJpY2UgPSBNYXRoLnJvdW5kKGkuaXRlbXMubnVtICogcHJpY2UpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgfSxcbiAgICBudW1fY2hhbmdlKGlzKSB7XG4gICAgICB0aGlzLm51bV9zZWxlY3Rfb2JqLmRhdGFbMF0udmFsdWUgPSBpcy5udW07XG4gICAgICB0aGlzLm51bV9jaGFuZ2VfdGFyZ2V0ID0gaXM7XG4gICAgICB0aGlzLm51bV9zZWxlY3RlciA9ICF0aGlzLm51bV9zZWxlY3RlcjtcbiAgICB9LFxuICAgIGl0ZW1DbGFzcyhjKSB7XG4gICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgY2FzZSBcIumDqOadkFwiOlxuICAgICAgICAgIHJldHVybiBcImdyZWVuLS10ZXh0IHRleHQtLWRhcmtlbi0zXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCLmnb/ph5FcIjpcbiAgICAgICAgICByZXR1cm4gXCJibHVlLWdyZXktLXRleHQgdGV4dC0tZGFya2VuLTRcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIuODjeOCuOODu+OCueODmuODvOOCtVwiOlxuICAgICAgICAgIHJldHVybiBcIm9yYW5nZS0tdGV4dCB0ZXh0LS1kYXJrZW4tM1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hhbmdlX2l0ZW1fY2xhc3MoaXRlbSkge1xuICAgICAgdGhpcy5jbGFzc19zZWxlY3RlciA9ICF0aGlzLmNsYXNzX3NlbGVjdGVyO1xuICAgICAgdGhpcy50YXJnZXQgPSBpdGVtO1xuICAgIH0sXG4gICAgc2VsZWN0X2l0ZW1fY2xhc3MoZCkge1xuICAgICAgbGV0IHRhciA9IHRoaXMudGFyZ2V0Lml0ZW07XG4gICAgICB0YXIuaXRlbXMuaXRlbV9jbGFzcyA9IGQuaXRlbV9jbGFzc19pZDtcbiAgICAgIHRhci5pdGVtcy5pdGVtX2NsYXNzX3ZhbCA9IGQ7XG4gICAgICBheGlvcy5nZXQoXG4gICAgICAgIFwiL2RiL2l0ZW1zL2NsYXNzL3NldC9cIiArIGQuaXRlbV9jbGFzc19pZCArIFwiL1wiICsgdGFyLml0ZW1zLml0ZW1faWRcbiAgICAgICk7XG4gICAgICB0aGlzLmNsYXNzX3NlbGVjdGVyID0gIXRoaXMuY2xhc3Nfc2VsZWN0ZXI7XG4gICAgICB0aGlzLnRhcmdldC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgIH0sXG4gICAgY2hhbmdlX251bShkKSB7XG4gICAgICB0aGlzLm51bV9jaGFuZ2VfdGFyZ2V0Lm51bSA9IGQuZGF0YVswXS52YWx1ZTtcbiAgICAgIHRoaXMubnVtX3NlbGVjdGVyID0gIXRoaXMubnVtX3NlbGVjdGVyO1xuICAgIH0sXG4gICAgaGVuc2h1KGkpIHtcbiAgICAgIHRoaXMuaGVuc2h1X3ZpZXcgPSB0cnVlO1xuICAgICAgdGhpcy50YXJnZXQgPSBpO1xuICAgIH0sXG4gICAgaGVuc2h1X3J0KCkge1xuICAgICAgdGhpcy5oZW5zaHVfdmlldyA9IGZhbHNlO1xuICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgIH0sXG4gICAgdXBfaXRlbXMoZCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBcIi9pdGVtcy9pdGVtaW5mby9cIiArXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5pdGVtcy5pdGVtX2NvZGUgK1xuICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuaXRlbXMuaXRlbV9yZXZcbiAgICAgICAgKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0Lml0ZW1zID0gcmVzLmRhdGFbMF07XG4gICAgICAgICAgdGhpcy5zZXROdW1QcmljZSh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgdGhpcy5oZW5zaHVfdmlldyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXdfZGF0YV9jaGVja2VyKG4pIHtcbiAgICAgIGlmICh0aGlzLmZsZ19jaGlwX3ZpZXcgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChuID09PSA2KSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5mbGdfc2V0X3ZpZXcgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChuID09PSAzKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobiA9PT0gMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhZGQoKSB7XG4gICAgICBsZXQgbSA9IHRoaXMudGFyX21vZGVsO1xuICAgICAgbGV0IG1vZGVsX2lkID0gbS5tb2RlbF9pZDtcbiAgICAgIGxldCBjbXB0ID0gbS5jbXB0W3RoaXMudGFic107XG4gICAgICB0aGlzLmRpYWxvZ19kYXRhID0ge1xuICAgICAgICB0aXRsZTogXCLmp4vmiJDpg6jmnZDnmbvpjLJcIixcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIuimquW9ouW8jyBcIiArXG4gICAgICAgICAgY21wdC5jbXB0X2NvZGUgK1xuICAgICAgICAgICc8c3BhbiBzdHlsZT1cInBhZGRpbmc6MCAwLjVyZW07IGZvbnQtc2l6ZTowLjVyZW07XCI+JyArXG4gICAgICAgICAgY21wdC5jbXB0X3Jldi5udW1Ub1JldigpICtcbiAgICAgICAgICBcIjwvc3Bhbj4g44Gr6YOo5p2Q44KS55m76Yyy44GX44G+44GZPGJyPuKAu+mAo+eVquOBr++8kOeVquWbuuWumlwiLFxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJpdGVtX2NvZGVcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIuWTgeebruOCs+ODvOODiVwiLFxuICAgICAgICAgICAgaWQ6IFwiaXRlbV9jb2RlXCIsXG4gICAgICAgICAgICBoaW50OiBcIlwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIml0ZW1fcmV2XCIsXG4gICAgICAgICAgICBsYWJlbDogXCLlk4Hnm67vvLLvvKXvvLZcIixcbiAgICAgICAgICAgIGlkOiBcIml0ZW1fcmV2XCIsXG4gICAgICAgICAgICBoaW50OiBcIuODj+OCpOODleODsygtKeOCkumZpOOBhOOBn+aVtOaVsOWApOOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgOS+iyAwMS0wMyDihpIgMTAzXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiaXRlbV91c2VcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIuWToeaVsFwiLFxuICAgICAgICAgICAgaWQ6IFwiaXRlbV91c2VcIixcbiAgICAgICAgICAgIGhpbnQ6IFwi5omL6YWN5pmC55m65rOo5Y2Y5L2N5pWwXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHRhcjoge1xuICAgICAgICAgIHJjaTogY21wdC5jbXB0X2lkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmFkZGl0ZW0gPSB0cnVlO1xuICAgIH0sXG4gICAgcnRBZGQoZCwgZmxnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGQuZGF0YVswXS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICBkLmRhdGFbMV0udmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgZC5kYXRhWzJdLnZhbHVlID09PSBcIlwiXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBpdGVtX2NvZGU6IGQuZGF0YVswXS52YWx1ZSxcbiAgICAgICAgICBpdGVtX3JldjogZC5kYXRhWzFdLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGNtcHQ6IHtcbiAgICAgICAgICBjbXB0X2lkOiBkLnRhci5yY2ksXG4gICAgICAgICAgaXRlbV91c2U6IGQuZGF0YVsyXS52YWx1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXhpb3MucG9zdChcIi9kYi9yX2NtcHRfaXRlbS9hZGQvaXRlbS9cIiwgZGF0YSkudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYWxlcnQoXCLnmbvpjLLmuIjjgb/jg4fjg7zjgr/jgafjgZlcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXROdW1QcmljZShyZXMuZGF0YVswXSk7XG4gICAgICAgICAgdGhpcy50YXJfbW9kZWwuY21wdFt0aGlzLnRhYnNdLml0ZW1fdXNlLnVuc2hpZnQocmVzLmRhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkaXRlbSA9ICF0aGlzLmFkZGl0ZW07XG4gICAgfSxcbiAgICBkZWxBY3QoaSwgaW5kZXgpIHtcbiAgICAgIHRoaXMudGFyZ2V0ID0gaTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFyZ2V0X2luZGV4KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFyX21vZGVsLmNtcHRbdGhpcy50YWJzXS5pdGVtX3VzZVt0aGlzLnRhcmdldF9pbmRleF0pO1xuICAgICAgdGhpcy50YXJnZXRfaW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuZGVsY2hrID0gdHJ1ZTtcbiAgICB9LFxuICAgIGRlbEFjdF9EbygpIHtcbiAgICAgIGxldCBjbXB0X2lkID0gdGhpcy50YXJfbW9kZWwuY21wdFt0aGlzLnRhYnNdLmNtcHRfaWQ7XG4gICAgICBsZXQgaXRlbV9pZCA9IHRoaXMudGFyZ2V0Lml0ZW1zLml0ZW1faWQ7XG4gICAgICBheGlvcy5nZXQoXCIvZGIvcl9jbXB0X2l0ZW0vZGVsZXRlL2l0ZW0vXCIgKyBjbXB0X2lkICsgXCIvXCIgKyBpdGVtX2lkKTtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMudGFyX21vZGVsLmNtcHRbdGhpcy50YWJzXS5pdGVtX3VzZS5mb3JFYWNoKChhciwgaW5kKSA9PiB7XG4gICAgICAgIGlmIChhci5pdGVtcy5pdGVtX2lkID09PSBpdGVtX2lkKSB7XG4gICAgICAgICAgdGhpcy50YXJfbW9kZWwuY21wdFt0aGlzLnRhYnNdLml0ZW1fdXNlLnNwbGljZShpbmQsIDEpO1xuICAgICAgICAgIHRoaXMuZGVsY2hrID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICAgIHRoaXMudGFyZ2V0X2luZGV4ID0gMDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbXZfYmFjaygpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5nbygtMSk7XG4gICAgICAvLyBsZXQgbmFtZSA9IHRoaXMucnRuYW1lID8gdGhpcy5ydG5hbWUgOiBcInByb2R1Y3RfbGlzdFwiO1xuICAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgLy8gICBuYW1lOiBuYW1lXG4gICAgICAvLyB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLml0ZW1fY29kZV9hcmVhIHtcbiAgLnYtYnRuIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5jbGFzc19saXN0IHtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuLml0ZW1fY29kZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLnYtY2FyZF9fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4udi1jaGlwLnJlbiB7XG4gIGhlaWdodDogNDRweDtcbn1cbi50ICsgLnQge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbnRkLnByaWNlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4udCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgLy8gJi5tb2RlbCB7XG4gIC8vIH1cbiAgLy8gJi5yZXYge1xuICAvLyB9XG4gIC8vICYubnVtIHtcbiAgLy8gfVxuICAvLyAmLmNvZGUge1xuICAvLyB9XG4gIC8vICYuZGF5IHtcbiAgLy8gfVxufVxuLm1pbmkge1xuICBmb250LXNpemU6IDAuNXJlbTtcbn1cbi52LWJ0bi5sZyB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDRweDtcbn1cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLy8gdHIsXG4vLyB0ZCB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHYtYWxlcnQgdHlwZT1cImluZm9cIiA6dmFsdWU9XCJ0cnVlXCIgb3V0bGluZSBjbGFzcz1cImJhY2tcIj5cbiAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPGgxPnt7IGRhdGEudGl0bGUgfX08L2gxPlxuICAgICAgICA8cCB2LWh0bWw9XCJkYXRhLm1lc3NhZ2VcIiBjbGFzcz1cIm1lc3NhZ2VcIj48L3A+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMiBjbGFzcz1cImRlbC1pbmZvXCI+XG4gICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZGF0YS5kYXRhXCI+XG4gICAgICAgICAgICA8di1mbGV4IHhzMTIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICA6bmFtZT1cIml0ZW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiaXRlbS5sYWJlbFwiXG4gICAgICAgICAgICAgICAgOmlkPVwiaXRlbS5pZFwiXG4gICAgICAgICAgICAgICAgOmhpbnQ9XCJpdGVtLmhpbnRcIlxuICAgICAgICAgICAgICAgIDp0eXBlPVwiaXRlbS50eXBlXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHYtZmxleCB4czggb2Zmc2V0LXhzMiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImluZm9cIiBjbGFzcz1cInN1Ym1pdC1idG5cIiBvdXRsaW5lIEBjbGljaz1cInN1Ym1pdCgpXCI+5rG65a6aPC92LWJ0bj5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPC92LWxheW91dD5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdi1sYXlvdXQ+XG4gIDwvdi1hbGVydD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJkYXRhXCJdLFxuICBtZXRob2RzOiB7XG4gICAgc3VibWl0KCkge1xuICAgICAgdGhpcy4kZW1pdChcInJ0XCIsIHRoaXMuZGF0YSwgdHJ1ZSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZGVsLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3VibWl0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtX2NvZGVfYXJlYSAudi1idG5bZGF0YS12LTRlMWUwM2Y2XSB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5jbGFzc19saXN0IGJ1dHRvbltkYXRhLXYtNGUxZTAzZjZdIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uaXRlbV9jb2RlW2RhdGEtdi00ZTFlMDNmNl0ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi52LWNhcmRfX3RleHRbZGF0YS12LTRlMWUwM2Y2XSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG4udi1jaGlwLnJlbltkYXRhLXYtNGUxZTAzZjZdIHtcXG4gIGhlaWdodDogNDRweDtcXG59XFxuLnQgKyAudFtkYXRhLXYtNGUxZTAzZjZdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG50ZC5wcmljZVtkYXRhLXYtNGUxZTAzZjZdIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4udFtkYXRhLXYtNGUxZTAzZjZdIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLm1pbmlbZGF0YS12LTRlMWUwM2Y2XSB7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuLnYtYnRuLmxnW2RhdGEtdi00ZTFlMDNmNl0ge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcbnBbZGF0YS12LTRlMWUwM2Y2XSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImgxW2RhdGEtdi04MmMwOGRiOF0ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5iYWNrW2RhdGEtdi04MmMwOGRiOF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmRlbC1pbmZvW2RhdGEtdi04MmMwOGRiOF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3VibWl0LWJ0bltkYXRhLXYtODJjMDhkYjhdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtODJjMDhkYjhdIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTp0LmRheWpzPW4oKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibWlsbGlzZWNvbmRcIixuPVwic2Vjb25kXCIsZT1cIm1pbnV0ZVwiLHI9XCJob3VyXCIsaT1cImRheVwiLHM9XCJ3ZWVrXCIsdT1cIm1vbnRoXCIsbz1cInF1YXJ0ZXJcIixhPVwieWVhclwiLGg9L14oXFxkezR9KS0/KFxcZHsxLDJ9KS0/KFxcZHswLDJ9KVteMC05XSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Lj8oXFxkezEsM30pPyQvLGY9L1xcWyhbXlxcXV0rKV18WXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLGM9ZnVuY3Rpb24odCxuLGUpe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PW4/dDpcIlwiK0FycmF5KG4rMS1yLmxlbmd0aCkuam9pbihlKSt0fSxkPXtzOmMsejpmdW5jdGlvbih0KXt2YXIgbj0tdC51dGNPZmZzZXQoKSxlPU1hdGguYWJzKG4pLHI9TWF0aC5mbG9vcihlLzYwKSxpPWUlNjA7cmV0dXJuKG48PTA/XCIrXCI6XCItXCIpK2MociwyLFwiMFwiKStcIjpcIitjKGksMixcIjBcIil9LG06ZnVuY3Rpb24odCxuKXt2YXIgZT0xMioobi55ZWFyKCktdC55ZWFyKCkpKyhuLm1vbnRoKCktdC5tb250aCgpKSxyPXQuY2xvbmUoKS5hZGQoZSx1KSxpPW4tcjwwLHM9dC5jbG9uZSgpLmFkZChlKyhpPy0xOjEpLHUpO3JldHVybiBOdW1iZXIoLShlKyhuLXIpLyhpP3ItczpzLXIpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbihoKXtyZXR1cm57TTp1LHk6YSx3OnMsZDppLGg6cixtOmUsczpuLG1zOnQsUTpvfVtoXXx8U3RyaW5nKGh8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sJD17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpfSxsPVwiZW5cIixtPXt9O21bbF09JDt2YXIgeT1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIHZ9LE09ZnVuY3Rpb24odCxuLGUpe3ZhciByO2lmKCF0KXJldHVybiBsO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KW1bdF0mJihyPXQpLG4mJihtW3RdPW4scj10KTtlbHNle3ZhciBpPXQubmFtZTttW2ldPXQscj1pfXJldHVybiBlfHwobD1yKSxyfSxnPWZ1bmN0aW9uKHQsbixlKXtpZih5KHQpKXJldHVybiB0LmNsb25lKCk7dmFyIHI9bj9cInN0cmluZ1wiPT10eXBlb2Ygbj97Zm9ybWF0Om4scGw6ZX06bjp7fTtyZXR1cm4gci5kYXRlPXQsbmV3IHYocil9LEQ9ZDtELmw9TSxELmk9eSxELnc9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZyh0LHtsb2NhbGU6bi4kTCx1dGM6bi4kdX0pfTt2YXIgdj1mdW5jdGlvbigpe2Z1bmN0aW9uIGModCl7dGhpcy4kTD10aGlzLiRMfHxNKHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCl9dmFyIGQ9Yy5wcm90b3R5cGU7cmV0dXJuIGQucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgbj10LmRhdGUsZT10LnV0YztpZihudWxsPT09bilyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihELnUobikpcmV0dXJuIG5ldyBEYXRlO2lmKG4gaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShuKTtpZihcInN0cmluZ1wiPT10eXBlb2YgbiYmIS9aJC9pLnRlc3Qobikpe3ZhciByPW4ubWF0Y2goaCk7aWYocilyZXR1cm4gZT9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLHJbMl0tMSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHJbN118fDApKTpuZXcgRGF0ZShyWzFdLHJbMl0tMSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHJbN118fDApfXJldHVybiBuZXcgRGF0ZShuKX0odCksdGhpcy5pbml0KCl9LGQuaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LGQuJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIER9LGQuaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEoXCJJbnZhbGlkIERhdGVcIj09PXRoaXMuJGQudG9TdHJpbmcoKSl9LGQuaXNTYW1lPWZ1bmN0aW9uKHQsbil7dmFyIGU9Zyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKG4pPD1lJiZlPD10aGlzLmVuZE9mKG4pfSxkLmlzQWZ0ZXI9ZnVuY3Rpb24odCxuKXtyZXR1cm4gZyh0KTx0aGlzLnN0YXJ0T2Yobil9LGQuaXNCZWZvcmU9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5lbmRPZihuKTxnKHQpfSxkLiRnPWZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gRC51KHQpP3RoaXNbbl06dGhpcy5zZXQoZSx0KX0sZC55ZWFyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkeVwiLGEpfSxkLm1vbnRoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkTVwiLHUpfSxkLmRheT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJFdcIixpKX0sZC5kYXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkRFwiLFwiZGF0ZVwiKX0sZC5ob3VyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkSFwiLHIpfSxkLm1pbnV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJG1cIixlKX0sZC5zZWNvbmQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRzXCIsbil9LGQubWlsbGlzZWNvbmQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuJGcobixcIiRtc1wiLHQpfSxkLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxkLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LGQuc3RhcnRPZj1mdW5jdGlvbih0LG8pe3ZhciBoPXRoaXMsZj0hIUQudShvKXx8byxjPUQucCh0KSxkPWZ1bmN0aW9uKHQsbil7dmFyIGU9RC53KGguJHU/RGF0ZS5VVEMoaC4keSxuLHQpOm5ldyBEYXRlKGguJHksbix0KSxoKTtyZXR1cm4gZj9lOmUuZW5kT2YoaSl9LCQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gRC53KGgudG9EYXRlKClbdF0uYXBwbHkoaC50b0RhdGUoKSwoZj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKG4pKSxoKX0sbD10aGlzLiRXLG09dGhpcy4kTSx5PXRoaXMuJEQsTT1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGMpe2Nhc2UgYTpyZXR1cm4gZj9kKDEsMCk6ZCgzMSwxMSk7Y2FzZSB1OnJldHVybiBmP2QoMSxtKTpkKDAsbSsxKTtjYXNlIHM6dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLHY9KGw8Zz9sKzc6bCktZztyZXR1cm4gZChmP3ktdjp5Kyg2LXYpLG0pO2Nhc2UgaTpjYXNlXCJkYXRlXCI6cmV0dXJuICQoTStcIkhvdXJzXCIsMCk7Y2FzZSByOnJldHVybiAkKE0rXCJNaW51dGVzXCIsMSk7Y2FzZSBlOnJldHVybiAkKE0rXCJTZWNvbmRzXCIsMik7Y2FzZSBuOnJldHVybiAkKE0rXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxkLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LGQuJHNldD1mdW5jdGlvbihzLG8pe3ZhciBoLGY9RC5wKHMpLGM9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGQ9KGg9e30saFtpXT1jK1wiRGF0ZVwiLGguZGF0ZT1jK1wiRGF0ZVwiLGhbdV09YytcIk1vbnRoXCIsaFthXT1jK1wiRnVsbFllYXJcIixoW3JdPWMrXCJIb3Vyc1wiLGhbZV09YytcIk1pbnV0ZXNcIixoW25dPWMrXCJTZWNvbmRzXCIsaFt0XT1jK1wiTWlsbGlzZWNvbmRzXCIsaClbZl0sJD1mPT09aT90aGlzLiREKyhvLXRoaXMuJFcpOm87aWYoZj09PXV8fGY9PT1hKXt2YXIgbD10aGlzLmNsb25lKCkuc2V0KFwiZGF0ZVwiLDEpO2wuJGRbZF0oJCksbC5pbml0KCksdGhpcy4kZD1sLnNldChcImRhdGVcIixNYXRoLm1pbih0aGlzLiRELGwuZGF5c0luTW9udGgoKSkpLnRvRGF0ZSgpfWVsc2UgZCYmdGhpcy4kZFtkXSgkKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sZC5zZXQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxuKX0sZC5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbRC5wKHQpXSgpfSxkLmFkZD1mdW5jdGlvbih0LG8pe3ZhciBoLGY9dGhpczt0PU51bWJlcih0KTt2YXIgYz1ELnAobyksZD1mdW5jdGlvbihuKXt2YXIgZT1nKGYpO3JldHVybiBELncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQobip0KSksZil9O2lmKGM9PT11KXJldHVybiB0aGlzLnNldCh1LHRoaXMuJE0rdCk7aWYoYz09PWEpcmV0dXJuIHRoaXMuc2V0KGEsdGhpcy4keSt0KTtpZihjPT09aSlyZXR1cm4gZCgxKTtpZihjPT09cylyZXR1cm4gZCg3KTt2YXIgJD0oaD17fSxoW2VdPTZlNCxoW3JdPTM2ZTUsaFtuXT0xZTMsaClbY118fDEsbD10aGlzLnZhbHVlT2YoKSt0KiQ7cmV0dXJuIEQudyhsLHRoaXMpfSxkLnN1YnRyYWN0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuYWRkKC0xKnQsbil9LGQuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVyblwiSW52YWxpZCBEYXRlXCI7dmFyIGU9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLHI9RC56KHRoaXMpLGk9dGhpcy4kbG9jYWxlKCkscz10aGlzLiRILHU9dGhpcy4kbSxvPXRoaXMuJE0sYT1pLndlZWtkYXlzLGg9aS5tb250aHMsYz1mdW5jdGlvbih0LHIsaSxzKXtyZXR1cm4gdCYmKHRbcl18fHQobixlKSl8fGlbcl0uc3Vic3RyKDAscyl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIEQucyhzJTEyfHwxMix0LFwiMFwiKX0sJD1pLm1lcmlkaWVtfHxmdW5jdGlvbih0LG4sZSl7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBlP3IudG9Mb3dlckNhc2UoKTpyfSxsPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOm8rMSxNTTpELnMobysxLDIsXCIwXCIpLE1NTTpjKGkubW9udGhzU2hvcnQsbyxoLDMpLE1NTU06aFtvXXx8aCh0aGlzLGUpLEQ6dGhpcy4kRCxERDpELnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpjKGkud2Vla2RheXNNaW4sdGhpcy4kVyxhLDIpLGRkZDpjKGkud2Vla2RheXNTaG9ydCx0aGlzLiRXLGEsMyksZGRkZDphW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOkQucyhzLDIsXCIwXCIpLGg6ZCgxKSxoaDpkKDIpLGE6JChzLHUsITApLEE6JChzLHUsITEpLG06U3RyaW5nKHUpLG1tOkQucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOkQucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpELnModGhpcy4kbXMsMyxcIjBcIiksWjpyfTtyZXR1cm4gZS5yZXBsYWNlKGYsZnVuY3Rpb24odCxuKXtyZXR1cm4gbnx8bFt0XXx8ci5yZXBsYWNlKFwiOlwiLFwiXCIpfSl9LGQudXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LGQuZGlmZj1mdW5jdGlvbih0LGgsZil7dmFyIGMsZD1ELnAoaCksJD1nKHQpLGw9NmU0KigkLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpLG09dGhpcy0kLHk9RC5tKHRoaXMsJCk7cmV0dXJuIHk9KGM9e30sY1thXT15LzEyLGNbdV09eSxjW29dPXkvMyxjW3NdPShtLWwpLzYwNDhlNSxjW2ldPShtLWwpLzg2NGU1LGNbcl09bS8zNmU1LGNbZV09bS82ZTQsY1tuXT1tLzFlMyxjKVtkXXx8bSxmP3k6RC5hKHkpfSxkLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YodSkuJER9LGQuJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBtW3RoaXMuJExdfSxkLmxvY2FsZT1mdW5jdGlvbih0LG4pe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBlPXRoaXMuY2xvbmUoKTtyZXR1cm4gZS4kTD1NKHQsbiwhMCksZX0sZC5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBELncodGhpcy50b0RhdGUoKSx0aGlzKX0sZC50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy4kZCl9LGQudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKX0sZC50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LGQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxjfSgpO3JldHVybiBnLnByb3RvdHlwZT12LnByb3RvdHlwZSxnLmV4dGVuZD1mdW5jdGlvbih0LG4pe3JldHVybiB0KG4sdixnKSxnfSxnLmxvY2FsZT1NLGcuaXNEYXlqcz15LGcudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gZygxZTMqdCl9LGcuZW49bVtsXSxnLkxzPW0sZ30pO1xuIiwiIWZ1bmN0aW9uKGUsXyl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9XyhyZXF1aXJlKFwiZGF5anNcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZGF5anNcIl0sXyk6ZS5kYXlqc19sb2NhbGVfamE9XyhlLmRheWpzKX0odGhpcyxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtlPWUmJmUuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0XCIpP2UuZGVmYXVsdDplO3ZhciBfPXtuYW1lOlwiamFcIix3ZWVrZGF5czpcIuaXpeabnOaXpV/mnIjmm5zml6Vf54Gr5puc5pelX+awtOabnOaXpV/mnKjmm5zml6Vf6YeR5puc5pelX+Wcn+abnOaXpVwiLnNwbGl0KFwiX1wiKSx3ZWVrZGF5c1Nob3J0Olwi5pelX+aciF/ngatf5rC0X+acqF/ph5Ff5ZyfXCIuc3BsaXQoXCJfXCIpLHdlZWtkYXlzTWluOlwi5pelX+aciF/ngatf5rC0X+acqF/ph5Ff5ZyfXCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIjHmnIhfMuaciF8z5pyIXzTmnIhfNeaciF825pyIXzfmnIhfOOaciF855pyIXzEw5pyIXzEx5pyIXzEy5pyIXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24oZSl7cmV0dXJuIGUrXCLml6VcIn0sZm9ybWF0czp7TFQ6XCJISDptbVwiLExUUzpcIkhIOm1tOnNzXCIsTDpcIllZWVkvTU0vRERcIixMTDpcIllZWVnlubRN5pyIROaXpVwiLExMTDpcIllZWVnlubRN5pyIROaXpSBISDptbVwiLExMTEw6XCJZWVlZ5bm0TeaciETml6UgZGRkZCBISDptbVwiLGw6XCJZWVlZL01NL0REXCIsbGw6XCJZWVlZ5bm0TeaciETml6VcIixsbGw6XCJZWVlZ5bm0TeaciETml6UgSEg6bW1cIixsbGxsOlwiWVlZWeW5tE3mnIhE5pelKGRkZCkgSEg6bW1cIn0sbWVyaWRpZW06ZnVuY3Rpb24oZSl7cmV0dXJuIGU8MTI/XCLljYjliY1cIjpcIuWNiOW+jFwifSxyZWxhdGl2ZVRpbWU6e2Z1dHVyZTpcIiVz5b6MXCIscGFzdDpcIiVz5YmNXCIsczpcIuaVsOenklwiLG06XCIx5YiGXCIsbW06XCIlZOWIhlwiLGg6XCIx5pmC6ZaTXCIsaGg6XCIlZOaZgumWk1wiLGQ6XCIx5pelXCIsZGQ6XCIlZOaXpVwiLE06XCIx44O25pyIXCIsTU06XCIlZOODtuaciFwiLHk6XCIx5bm0XCIseXk6XCIlZOW5tFwifX07cmV0dXJuIGUubG9jYWxlKF8sbnVsbCwhMCksX30pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DbXB0T3JkZXJMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlMWUwM2Y2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DbXB0T3JkZXJMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlMWUwM2Y2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ21wdE9yZGVyTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZTFlMDNmNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MmMwOGRiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgX3ZtLnRhcl9tb2RlbCAmJiBfdm0uZm1cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xvcjogXCJ0cmFuc3BhcmVudFwiLCBmbGF0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubXZfYmFjaygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJmYXMgZmEtYW5nbGUtZG91YmxlLWxlZnRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1jaGlwXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiLCBvdXRsaW5lOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mbS5tb2RlbCkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNoaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIG91dGxpbmU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZtLm51bSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWluaVwiIH0sIFtfdm0uX3YoXCJFQVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiLCBvdXRsaW5lOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZtLnJldi5udW1Ub1JldigpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiwgb3V0bGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5mbS5jb2RlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiwgb3V0bGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5mbS5vcmRlcl9kYXkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS52aWV3XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRhYnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImZpeGVkLXRhYnNcIjogXCJcIiwgXCJzaG93LWFycm93c1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFicyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRhYnMtc2xpZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwieWVsbG93XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YXJfbW9kZWwuY21wdCwgZnVuY3Rpb24oY21wdCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi10YWJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNtcHQuY21wdF9jb2RlLnNsaWNlKDAsIC0zKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhcl9tb2RlbC5jbXB0LCBmdW5jdGlvbihjbXB0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJtdC01XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGNtcHQuaXRlbV91c2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWdpbmF0aW9uLnN5bmNcIjogXCJwYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWFjdGlvbnNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdC1hbGxcIjogX3ZtLnNlbGVjdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIjogXCJpdGVtX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZpZXdfZGF0YV9jaGVja2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLml0ZW1zLml0ZW1fY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wcy5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1fY2xhc3NfdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmN1c3RvbSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGNoaXAgcmVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VfaXRlbV9jbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9jbGFzc192YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuODjeOCuOODu+OCueODmuODvOOCtVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLjg43jgrjku5ZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9jbGFzc192YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9yZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1fY29kZV9hcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm9iclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oZW5zaHUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYXIgZmEtZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW1fY29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9jb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlZXAtb3JhbmdlIGRhcmtlbi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsQWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFyIGZhLXRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5pdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9yZGVyX2NvZGUgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5pdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9yZGVyX2NvZGUgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiggXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3JkZXJfY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC14cy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtX21vZGVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbV9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGcgaW5kaWdvLS10ZXh0IHRleHQtLWRhcmtlbi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5udW1fY2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubnVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbmkgcGwtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluaSBwbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiwqVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtY2VudGVyIHByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVuZG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVuZG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb21fbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZlbmRvcl9pdGVtX3ByaWNlICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubnVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeHM2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZlbmRvcl9pdGVtX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWxlY3RlZCwgaW5kZXgsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRbaW5kZXhdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJvdHRvbS1uYXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmaXhlZDogXCJcIiwgdmFsdWU6IFwidmFsdWVcIiwgXCJhY3RpdmUuc3luY1wiOiBcInZhbHVlXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2VfY21wdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiLvjgotcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubWFrZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaxuuWumlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZsZ19jaGlwX3ZpZXcgPSAhX3ZtLmZsZ19jaGlwX3ZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkNISVDlk4FcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZmxnX2NoaXBfdmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFyIGZhLW1laFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYXIgZmEtbGF1Z2hcIildKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmxnX3NldF92aWV3ID0gIV92bS5mbGdfc2V0X3ZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuOCu+ODg+ODiOWTgVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5mbGdfc2V0X3ZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhciBmYS1tZWhcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFyIGZhLWxhdWdoXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5qeL5oiQ6L+95YqgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFzIGZhLXNpdGVtYXBcIildKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0cmFuc2l0aW9uOiBcImRpYWxvZy10cmFuc2l0aW9uXCIsIHdpZHRoOiBcIjUwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWRkaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRpdGVtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWRkaXRlbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uYWRkaXRlbVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiQWRkQ21wdEl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLmRpYWxvZ19kYXRhIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBydDogX3ZtLnJ0QWRkIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiZGlhbG9nLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVsY2hrLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGNoayA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbGNoa1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uZGVsY2hrXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJEZWxDaGVja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5kZWxjaGtfdmFsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBydDogX3ZtLmRlbEFjdF9EbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCI3MDBweFwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImRpYWxvZy10cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhlbnNodV92aWV3LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmhlbnNodV92aWV3ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGVuc2h1X3ZpZXdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmhlbnNodV92aWV3XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJIZW5zaHVWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fY29kZTogX3ZtLnRhcmdldC5pdGVtcy5pdGVtX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fcmV2OiBfdm0udGFyZ2V0Lml0ZW1zLml0ZW1fcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcGFzczogX3ZtLnVwX2l0ZW1zIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiZGlhbG9nLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubnVtX3NlbGVjdGVyLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm51bV9zZWxlY3RlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm51bV9zZWxlY3RlclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIk51bUNoYW5nZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0ubnVtX3NlbGVjdF9vYmogfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgcnQ6IF92bS5jaGFuZ2VfbnVtIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjIwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiZGlhbG9nLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2xhc3Nfc2VsZWN0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xhc3Nfc2VsZWN0ZXIgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjbGFzc19zZWxlY3RlclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlciBjbGFzc19saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jbGFzc19saXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1saXN0LXRpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgYXZhdGFyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3QtdGlsZS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdF9pdGVtX2NsYXNzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnZhbHVlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYWxlcnRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJhY2tcIiwgYXR0cnM6IHsgdHlwZTogXCJpbmZvXCIsIHZhbHVlOiB0cnVlLCBvdXRsaW5lOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LWZsZXhcIiwgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS50aXRsZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZGF0YS5tZXNzYWdlKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZWwtaW5mb1wiLCBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLmRhdGEsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogaXRlbS5oaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXQtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzODogXCJcIiwgXCJvZmZzZXQteHMyXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1Ym1pdC1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiaW5mb1wiLCBvdXRsaW5lOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmsbrlrppcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NtcHRPcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMWUwM2Y2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NtcHRPcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DbXB0T3JkZXJMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9DbXB0T3JkZXJMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlMWUwM2Y2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGUxZTAzZjZcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQXBwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQm90dG9tTmF2IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2hlY2tib3ggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDaGlwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRGF0YVRhYmxlIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRGlhbG9nIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGlzdFRpbGUgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMaXN0VGlsZUNvbnRlbnQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUYWIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUYWJJdGVtIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFicyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRhYnNTbGlkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUb29sYmFyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQXBwLFZCb3R0b21OYXYsVkJ0bixWQ2FyZCxWQ2FyZFRleHQsVkNoZWNrYm94LFZDaGlwLFZDb250YWluZXIsVkRhdGFUYWJsZSxWRGlhbG9nLFZGbGV4LFZJY29uLFZMYXlvdXQsVkxpc3QsVkxpc3RUaWxlLFZMaXN0VGlsZUNvbnRlbnQsVlRhYixWVGFiSXRlbSxWVGFicyxWVGFic1NsaWRlcixWVG9vbGJhcn0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGUxZTAzZjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGUxZTAzZjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NtcHRPcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMWUwM2Y2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRlMWUwM2Y2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9kdWN0L1R5dW1vbi9DbXB0T3JkZXJMaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ21wdE9yZGVyTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ21wdE9yZGVyTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NtcHRPcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGUxZTAzZjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NtcHRPcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGUxZTAzZjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NtcHRPcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMWUwM2Y2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MmMwOGRiOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MmMwOGRiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjgyYzA4ZGI4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFsZXJ0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFsZXJ0LFZCdG4sVkZsZXgsVkxheW91dCxWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MmMwOGRiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MmMwOGRiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODJjMDhkYjgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODJjMDhkYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODJjMDhkYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODJjMDhkYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgyYzA4ZGI4JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==
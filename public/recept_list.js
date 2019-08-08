(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recept_list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/MakePdct.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/MakePdct.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["target"],
  data: function data() {
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
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      this.code = this.target.const_code;
      this.p_class = this.target.rcpt_class;
      axios.get("/db/pdct/list/from/model/" + this.target.recept_code).then(function (res) {
        console.log(res.data);
        _this.pdct_data = res.data.length === 0 ? null : res.data;
      });
    },
    changeAddFlg: function changeAddFlg() {
      this.radioGroup = 2;
      this.code = this.add_pdct;
    },
    changeFlg: function changeFlg() {
      this.code = this.code === "" ? this.target.const_code : this.code;
      this.add_pdct = false;
      var f = this.code.slice(-1) === "M" ? true : false;
      var l = this.code.length;

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
    makePdct: function () {
      var _makePdct = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var flg, pdct_id, d;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.radioGroup !== 2)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return this.checkCode();

              case 3:
                flg = _context.sent;

                if (!(flg === false)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                pdct_id = 0;
                d = {
                  model_id: this.target.recept_code,
                  const_code: this.code,
                  pdct_class: this.p_class
                };

                if (this.radioGroup !== 2) {
                  axios.post("/db/pdct/create/" + this.target.recept_id, d).then(function (res) {
                    _this2.$emit("createPdct", res.data);
                  });
                } else {
                  axios.get("/db/pdct/add/rcpt/" + this.code + "/" + this.target.recept_id).then(function (res) {
                    _this2.$emit("createPdct", res.data);
                  });
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makePdct() {
        return _makePdct.apply(this, arguments);
      }

      return makePdct;
    }(),
    checkCode: function () {
      var _checkCode = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var l, v, dupCheck;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                l = this.code.length;

                if (!(l < 5)) {
                  _context2.next = 4;
                  break;
                }

                alert("工事番号が短すぎます");
                return _context2.abrupt("return", false);

              case 4:
                if (!(l > 12)) {
                  _context2.next = 7;
                  break;
                }

                alert("工事番号が長すぎます");
                return _context2.abrupt("return", false);

              case 7:
                v = this.code.slice(-1);

                if (!["S", "L", "T", "P"].includes(v)) {
                  _context2.next = 11;
                  break;
                }

                alert("末尾: " + v + " は予約文字です");
                return _context2.abrupt("return", false);

              case 11:
                dupCheck = true;
                _context2.next = 14;
                return axios.get("/db/pdct/is/this/" + this.code).then(function (res) {
                  if (res.data.length !== 0) {
                    alert("使用済み工事番号です");
                    dupCheck = false;
                  }
                });

              case 14:
                return _context2.abrupt("return", dupCheck);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkCode() {
        return _checkCode.apply(this, arguments);
      }

      return checkCode;
    }(),
    cancel: function cancel() {
      this.$emit("createPdct");
    },
    changeClass: function changeClass() {
      this.p_class = this.sp_group;
      this.sp_class = !this.sp_class;
    }
  } // watch: {
  // code: function() {
  //   console.log(this.code);
  // }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/PriceInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/PriceInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  props: ["price", "price_all"],
  data: function data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [],
        datasets: [{
          label: "受注金額",
          backgroundColor: "#7986CB",
          pointBackgroundColor: "white",
          borderWidth: 1,
          pointBorderColor: "#249EBF",
          //Data to be represented on y-axis
          data: []
        }]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      Object.keys(this.price).forEach(function (key, index) {
        _this.datacollection.labels[index] = _this.rtMonth(key);
        _this.datacollection.datasets[0].data[index] = _this.price[key];
      });
    },
    rtMonth: function rtMonth(name) {
      if (name === "null") return "未分類";
      name = String(name);
      return String(name.slice(-4, -2) + "年" + name.slice(-2) + "月");
    }
  },
  mounted: function mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  },
  watch: {
    price: function price() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["check"],
  methods: {
    remakeView: function remakeView() {
      this.$emit("remakeView", this.check);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/locale/ja */ "./node_modules/dayjs/locale/ja.js");
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _com_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../com/Loading */ "./resources/js/components/com/Loading.vue");
/* harmony import */ var _ReadFile_ReceptDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ReadFile/ReceptDetail */ "./resources/js/components/ReadFile/ReceptDetail.vue");
/* harmony import */ var _PriceInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PriceInfo */ "./resources/js/components/ReceptList/PriceInfo.vue");
/* harmony import */ var _SwitchViewCtrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwitchViewCtrl */ "./resources/js/components/ReceptList/SwitchViewCtrl.vue");
/* harmony import */ var _MakePdct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MakePdct */ "./resources/js/components/ReceptList/MakePdct.vue");
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

var iconv = __webpack_require__(/*! iconv-lite */ "./node_modules/iconv-lite/lib/index.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Loading: _com_Loading__WEBPACK_IMPORTED_MODULE_2__["default"],
    ReceptDetail: _ReadFile_ReceptDetail__WEBPACK_IMPORTED_MODULE_3__["default"],
    PriceInfo: _PriceInfo__WEBPACK_IMPORTED_MODULE_4__["default"],
    SwitchViewCtrl: _SwitchViewCtrl__WEBPACK_IMPORTED_MODULE_5__["default"],
    MakePdct: _MakePdct__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      search: "",
      detail: false,
      item: null,
      loading: true,
      items: null,
      views: null,
      make: false,
      target: null,
      date: "",
      month: false,
      menu: false,
      price: {},
      price_all: 0,
      headers: [{
        text: "受注区分",
        value: "rcpt_class",
        align: "center"
      }, {
        text: "発注・明細番号",
        value: "order_code",
        align: "center"
      }, {
        text: "受注形式・取引先",
        value: "recept_code",
        align: "center"
      }, {
        text: "工事番号・品名",
        value: "const_code",
        align: "center"
      }, {
        text: "台数・単価",
        value: "recept_name",
        align: "center",
        sortable: false
      }, {
        text: "納入指定日・予定日",
        value: "day3_nonyu_shitei",
        align: "center",
        sortable: false
      }],
      pagination: {
        sortBy: "recept_code",
        descending: false
      },
      check: {
        buhin: true,
        shuri: true,
        seihin: true,
        mi: true,
        etc: true,
        pro: true,
        nopro: true
      }
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      axios.get("/db/recept/tyuzan/data/").then(function (res) {
        _this.items = res.data;

        _this.remakeView();

        _this.loading = false;
      });
    },
    rtMonth: function rtMonth(name) {
      if (name === "all") return "受注総額";
      if (name === "null") return "未分類";
      name = String(name);
      return String(name.slice(-4, -2) + "年" + name.slice(-2) + "月");
    },
    makeProduct: function makeProduct(item) {
      this.make = !this.make;
      this.target = item;
    },
    viewDetail: function viewDetail(item) {
      this.item = item;
      this.detail = true;
    },
    addClassClass: function addClassClass(val) {
      var addClass = "";

      switch (val) {
        case "部品":
          addClass = "buhin";
          break;

        case "修理":
          addClass = "shuri";
          break;

        case "製品":
          addClass = "seihin";
          break;

        case "他":
          addClass = "etc";
          break;

        case "未":
          addClass = "enough";
          break;
      }

      return addClass;
    },
    remakeView: function remakeView() {
      var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.check;
      var i = this.items;
      var v = [];
      var p = this.price = {};
      var all = p["null"] = 0;
      i.forEach(function (ar, index) {
        if (c.buhin === false) {
          if (ar.rcpt_class === "部品") return;
        }

        if (c.shuri === false) {
          if (ar.rcpt_class === "修理") return;
        }

        if (c.seihin === false) {
          if (ar.rcpt_class === "製品") return;
        }

        if (c.mi === false) {
          if (ar.rcpt_class === null) return;
        }

        if (c.etc === false) {
          if (ar.rcpt_class === "他") return;
        }

        if (c.pro === false) {
          if (ar.pdct_id !== null) return;
        }

        if (c.nopro === false) {
          if (ar.pdct_id === null) return;
        }

        var zan_price = (ar.order_num - ar.nyuka_num) * ar.order_price_one;
        all = all + zan_price;

        if (ar.ym in p === false) {
          p[ar.ym] = 0;
        }

        p[ar.ym] = p[ar.ym] + zan_price;
        v.push(ar);
      });
      this.price_all = all;
      this.views = v;
    },
    createPdct: function createPdct() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (id !== false) {
        this.target.pdct_id = id;
      }

      this.make = false;
      this.target = null;
    },
    changeMonth: function changeMonth(d) {
      var sDate = d.slice(-5, -3) + d.slice(-2);
      var i = this.item;
      i.ym = sDate;
      this.remakeView();
      this.month = !this.month;
      axios.get("/db/recept/oneupdate/" + i.recept_id + "/" + "ym" + "/" + sDate);
    },
    monthSelectView: function monthSelectView(item) {
      this.item = item;
      this.month = !this.month;
    },
    getCsv: function getCsv() {
      var list = "";
      var csv = "";
      csv = csv + "顧客,明細NO,発注予定NO,工事番号,受注形式,受注名,";
      csv = csv + "受注数,単位CD,受注区分,受注残,発注単価,金額,";
      csv = csv + "依頼日(発注日),納入指定日(予定日)";
      list = csv + "\n";
      this.items.forEach(function (ar, n) {
        list = list + (ar.customer === null ? "" : ar.customer) + ",";
        list = list + (ar.detail_code === null ? "" : ar.detail_code) + ",";
        list = list + (ar.order_code === null ? "" : ar.order_code) + ",";
        list = list + (ar.const_code === null ? "" : ar.const_code) + ",";
        list = list + (ar.recept_code === null ? "" : ar.recept_code) + ",";
        list = list + (ar.recept_name === null ? "" : ar.recept_name) + ",";
        list = list + (ar.order_num === null ? "" : ar.order_num) + ",";
        list = list + (ar.order_ea === null ? "" : ar.order_ea) + ",";
        list = list + (ar.rcpt_class === null ? "" : ar.rcpt_class) + ",";
        list = list + (ar.nohin_num === null ? "" : ar.order_num - ar.nohin_num) + ",";
        list = list + (ar.order_price_one === null ? "" : ar.order_price_one) + ",";
        list = list + (ar.order_price_one === null ? "" : ar.order_price_one * ar.order_num) + ",";
        list = list + (ar.day3_irai === null ? ar.day5nonyu_yotei : ar.day3_irai) + ",";
        list = list + (ar.day3_nonyu_shitei === null ? ar.day5hatyu : ar.day3_nonyu_shitei) + "\n"; // list = list + (ar.recept_id === null ? "" : ar.recept_id) + ",";
        // list = list + (ar.rcpt_status === null ? "" : ar.rcpt_status) + ",";
        // list = list + (ar.pdct_id === null ? "" : ar.pdct_id) + ",";
        // list = list + (ar.nohin_num === null ? "" : ar.nohin_num) + ",";
        // list =
        //   list + (ar.last_nohin_day === null ? "" : ar.last_nohin_day) + ",";
        // list = list + (ar.nyuka_num === null ? "" : ar.nyuka_num) + ",";
        // list = list = list + (ar.ym === null ? "" : ar.ym) + ",";
        // list = list + (ar.day3_irai === null ? "" : ar.day3_irai) + ",";
        // list =
        //   list +
        //   (ar.day3_nonyu_shitei === null ? "" : ar.day3_nonyu_shitei) +
        //   ",";
        // list = list + (ar.day5hatyu === null ? "" : ar.day5hatyu) + ",";
        // list =
        //   list + (ar.day5nonyu_yotei === null ? "" : ar.day5nonyu_yotei) + ",";
        // list = list + (ar.memo_bikou1 === null ? "" : ar.memo_bikou1) + ",";
        // list = list + (ar.memo_bikou2 === null ? "" : ar.memo_bikou2) + ",";
        // list = list + (ar.shiyo === null ? "" : ar.shiyo) + ",";
        // list = list + (ar.tekiyo === null ? "" : ar.tekiyo) + ",";
        // list =
        //   list + (ar.set_update_time === null ? "" : ar.set_update_time) + ",";
        // list = list + (ar.ts_update_day === null ? "" : ar.ts_update_day) + ",";
        // list =
        //   list + (ar.ts_update_time === null ? "" : ar.ts_update_time) + "\n";
      });
      list = iconv.encode(list, "Shift_JIS");
      var blob = new Blob([list], {
        type: "text/csv"
      });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      var day = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYYMMDDHHmmss");
      var daynum = Number(day);
      var day16 = daynum.toString(16);
      var csv_name = "TSE_ORDER_LIST_" + day16 + ".csv";
      link.download = csv_name;
      link.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".action[data-v-44515da0] {\n  margin: 0 auto;\n}\n.data_list[data-v-44515da0] {\n  font-size: 1rem;\n  margin: 0 auto;\n}\n.data_list td[data-v-44515da0] {\n  padding: 0 1rem;\n  border-bottom: 1px solid gray;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#main h3[data-v-4168dd05] {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n}\n#main p[data-v-4168dd05] {\n  margin: 0;\n}\n#main td[data-v-4168dd05] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.order_code[data-v-4168dd05] {\n  font-size: 1rem;\n}\n.detail_code[data-v-4168dd05] {\n  font-size: 1rem;\n}\n.const_code[data-v-4168dd05] {\n  font-size: 1.2rem;\n}\n.recept_code[data-v-4168dd05] {\n  font-size: 1.2rem;\n}\n.recept_name[data-v-4168dd05] {\n  font-size: 0.8rem;\n}\n.customer[data-v-4168dd05] {\n  font-size: 0.7rem;\n}\n.order_num[data-v-4168dd05] {\n  font-size: 1rem;\n}\n.nyuka_num[data-v-4168dd05] {\n  font-size: 1rem;\n}\n.order_price_one[data-v-4168dd05] {\n  font-size: 1rem;\n}\n.mini[data-v-4168dd05] {\n  font-size: 0.5rem;\n}\n.v-chip[data-v-4168dd05] {\n  font-size: 0.9rem;\n  margin: 0;\n  border-radius: 5px;\n}\n.v-chip.v-chip.v-chip--outline[data-v-4168dd05] {\n  height: 24px;\n}\n.v-chip.buhin[data-v-4168dd05] {\n  border-color: #4e342e;\n  color: #4e342e;\n}\n.v-chip.shuri[data-v-4168dd05] {\n  border-color: #ef6c00;\n  color: #ef6c00;\n}\n.v-chip.seihin[data-v-4168dd05] {\n  border-color: #283593;\n  color: #283593;\n}\n.v-chip.etc[data-v-4168dd05] {\n  border-color: #2e7d32;\n  color: #2e7d32;\n}\n.v-chip.enough[data-v-4168dd05] {\n  border-color: #37474f;\n  color: #37474f;\n}\n.make_pdct[data-v-4168dd05] {\n  font-size: 0.9rem;\n  padding: 0 0.5rem;\n  height: 24px;\n  border-radius: 5px;\n}\n.make_pdct.maked[data-v-4168dd05] {\n  border-color: #283593;\n  color: #283593;\n}", ""]);



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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/MakePdct.vue?vue&type=template&id=44515da0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/MakePdct.vue?vue&type=template&id=44515da0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-chip",
            {
              attrs: { outline: "", color: "warning" },
              on: {
                click: function($event) {
                  _vm.sp_class = !_vm.sp_class
                }
              }
            },
            [_vm._v("区分：" + _vm._s(_vm.p_class))]
          ),
          _vm._v(" "),
          _c("v-chip", { attrs: { outline: "", color: "primary" } }, [
            _vm._v("形式：" + _vm._s(_vm.target.recept_code))
          ]),
          _vm._v(" "),
          _c("v-chip", { attrs: { outline: "", color: "primary" } }, [
            _vm._v("工事番号：" + _vm._s(_vm.target.const_code))
          ]),
          _vm._v(" "),
          _c(
            "v-layout",
            {
              attrs: {
                wrap: "",
                "align-space-around": "",
                "justify-center": "",
                "fill-height": ""
              }
            },
            [
              _c(
                "v-flex",
                { staticClass: "pt-3 pb-3", attrs: { xs10: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "製造コード",
                      "prepend-icon": "fas fa-sitemap"
                    },
                    model: {
                      value: _vm.code,
                      callback: function($$v) {
                        _vm.code = $$v
                      },
                      expression: "code"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs3: "" } },
                [
                  _c(
                    "v-radio-group",
                    {
                      staticClass: "pl-3",
                      on: {
                        click: function($event) {
                          return _vm.changeFlg()
                        }
                      },
                      model: {
                        value: _vm.radioGroup,
                        callback: function($$v) {
                          _vm.radioGroup = $$v
                        },
                        expression: "radioGroup"
                      }
                    },
                    _vm._l(_vm.selects, function(n, index) {
                      return _c("v-radio", {
                        key: index,
                        attrs: { label: n, value: index }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "rightView text-xs-center", attrs: { xs9: "" } },
                [
                  _vm.pdct_data === null
                    ? [
                        _c(
                          "v-chip",
                          { attrs: { collor: "warning", outline: "" } },
                          [_vm._v("製造実績がありません")]
                        )
                      ]
                    : [
                        _c("h5", [_vm._v("既存製造データ")]),
                        _vm._v(" "),
                        _c(
                          "table",
                          { staticClass: "data_list" },
                          [
                            _c(
                              "v-radio-group",
                              {
                                staticClass: "pl-3",
                                on: {
                                  click: function($event) {
                                    return _vm.changeAddFlg()
                                  }
                                },
                                model: {
                                  value: _vm.add_pdct,
                                  callback: function($$v) {
                                    _vm.add_pdct = $$v
                                  },
                                  expression: "add_pdct"
                                }
                              },
                              _vm._l(_vm.pdct_data, function(item, index) {
                                return _c("tr", { key: index }, [
                                  _c(
                                    "td",
                                    [
                                      _c("v-radio", {
                                        attrs: { value: item.const_code }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(item.status.st_val))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.pdct_class))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.const_code))])
                                ])
                              }),
                              0
                            )
                          ],
                          1
                        )
                      ]
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "text-xs-center" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "action",
                  attrs: { color: "primary", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.cancel()
                    }
                  }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "action",
                  attrs: { color: "primary", flat: "" },
                  on: {
                    click: function($event) {
                      return _vm.makePdct()
                    }
                  }
                },
                [_vm._v("作成")]
              )
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
          attrs: {
            overlay: false,
            "max-width": "200px",
            transition: "dialog-transition"
          },
          model: {
            value: _vm.sp_class,
            callback: function($$v) {
              _vm.sp_class = $$v
            },
            expression: "sp_class"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-radio-group",
                    {
                      on: {
                        click: function($event) {
                          return _vm.changeClass()
                        }
                      },
                      model: {
                        value: _vm.sp_group,
                        callback: function($$v) {
                          _vm.sp_group = $$v
                        },
                        expression: "sp_group"
                      }
                    },
                    _vm._l(["製品", "修理", "部品", "その他"], function(
                      n,
                      index
                    ) {
                      return _c("v-radio", {
                        key: index,
                        attrs: { label: n, value: n }
                      })
                    }),
                    1
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=template&id=0b060e81&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=template&id=0b060e81& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    { staticClass: "tyuzan_view_selector" },
    [
      _c("h3", [_vm._v("受注区分")]),
      _vm._v(" "),
      _c(
        "v-layout",
        { staticClass: "ml-2", attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c("v-checkbox", {
                attrs: { label: "部品", color: "indigo" },
                on: {
                  change: function($event) {
                    return _vm.remakeView()
                  }
                },
                model: {
                  value: _vm.check.buhin,
                  callback: function($$v) {
                    _vm.$set(_vm.check, "buhin", $$v)
                  },
                  expression: "check.buhin"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c("v-checkbox", {
                attrs: { label: "修理", color: "indigo" },
                on: {
                  change: function($event) {
                    return _vm.remakeView()
                  }
                },
                model: {
                  value: _vm.check.shuri,
                  callback: function($$v) {
                    _vm.$set(_vm.check, "shuri", $$v)
                  },
                  expression: "check.shuri"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c("v-checkbox", {
                attrs: { label: "製品", color: "indigo" },
                on: {
                  change: function($event) {
                    return _vm.remakeView()
                  }
                },
                model: {
                  value: _vm.check.seihin,
                  callback: function($$v) {
                    _vm.$set(_vm.check, "seihin", $$v)
                  },
                  expression: "check.seihin"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c("v-checkbox", {
                attrs: { label: "未", color: "indigo" },
                on: {
                  change: function($event) {
                    return _vm.remakeView()
                  }
                },
                model: {
                  value: _vm.check.mi,
                  callback: function($$v) {
                    _vm.$set(_vm.check, "mi", $$v)
                  },
                  expression: "check.mi"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs2: "" } },
            [
              _c("v-checkbox", {
                attrs: { label: "その他", color: "indigo" },
                on: {
                  change: function($event) {
                    return _vm.remakeView()
                  }
                },
                model: {
                  value: _vm.check.etc,
                  callback: function($$v) {
                    _vm.$set(_vm.check, "etc", $$v)
                  },
                  expression: "check.etc"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", [_vm._v("製造データ")]),
      _vm._v(" "),
      _c(
        "v-layout",
        { staticClass: "ml-2", attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs3: "" } },
            [
              _c("v-checkbox", {
                attrs: { label: "作成済" },
                on: {
                  change: function($event) {
                    return _vm.remakeView()
                  }
                },
                model: {
                  value: _vm.check.pro,
                  callback: function($$v) {
                    _vm.$set(_vm.check, "pro", $$v)
                  },
                  expression: "check.pro"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs3: "" } },
            [
              _c("v-checkbox", {
                attrs: { label: "未作成" },
                on: {
                  change: function($event) {
                    return _vm.remakeView()
                  }
                },
                model: {
                  value: _vm.check.nopro,
                  callback: function($$v) {
                    _vm.$set(_vm.check, "nopro", $$v)
                  },
                  expression: "check.nopro"
                }
              })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/index.vue?vue&type=template&id=4168dd05&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReceptList/index.vue?vue&type=template&id=4168dd05&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-container",
        { staticClass: "mb-5", attrs: { "grid-list-xs": "" } },
        [
          _c(
            "transition",
            { attrs: { name: "fade" } },
            [
              _vm.loading
                ? _c("Loading")
                : _c(
                    "div",
                    [
                      _c("h1", [_vm._v("受注データ")]),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        {
                          staticClass: "pt-3 pb-3",
                          attrs: { row: "", wrap: "" }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs8: "", "offset-xs1": "" } },
                            [
                              _vm._v(
                                "\n            総受注金額：" +
                                  _vm._s(_vm.price_all.toLocaleString()) +
                                  "\n            "
                              ),
                              _c("span", { staticClass: "mini" }, [_vm._v("¥")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs8: "", "offset-xs1": "" } },
                            [
                              _vm.price
                                ? _c("PriceInfo", {
                                    attrs: { price: _vm.price }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("SwitchViewCtrl", {
                        attrs: { check: _vm.check },
                        on: { remakeView: _vm.remakeView }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          name: "search",
                          label: "検索",
                          id: "search",
                          "prepend-inner-icon": "fas fa-search"
                        },
                        model: {
                          value: _vm.search,
                          callback: function($$v) {
                            _vm.search = $$v
                          },
                          expression: "search"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.views,
                          "item-key": "order_code",
                          search: _vm.search,
                          "rows-per-page-items": [
                            25,
                            50,
                            { text: "All", value: -1 }
                          ],
                          pagination: _vm.pagination
                        },
                        on: {
                          "update:pagination": function($event) {
                            _vm.pagination = $event
                          }
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "items",
                            fn: function(props) {
                              return [
                                _c(
                                  "tr",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.viewDetail(props.item)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "td",
                                      { staticClass: "text-xs-center" },
                                      [
                                        _c(
                                          "v-chip",
                                          {
                                            class: _vm.addClassClass(
                                              props.item.rcpt_class
                                            ),
                                            attrs: { outline: "" },
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                return _vm.monthSelectView(
                                                  props.item
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                props.item.ym === null
                                                  ? "年月"
                                                  : _vm.rtMonth(props.item.ym)
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-chip",
                                          {
                                            class: _vm.addClassClass(
                                              props.item.rcpt_class
                                            ),
                                            attrs: { outline: "" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                props.item.rcpt_class === null
                                                  ? "未"
                                                  : props.item.rcpt_class
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        props.item.pdct_id === null
                                          ? [
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "make_pdct",
                                                  attrs: {
                                                    color: "teal darken-3",
                                                    outline: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      $event.stopPropagation()
                                                      return _vm.makeProduct(
                                                        props.item
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("製造データ作成")]
                                              )
                                            ]
                                          : [
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "v-chip",
                                                {
                                                  staticClass:
                                                    "make_pdct maked mt-1",
                                                  attrs: { outline: "" },
                                                  on: {
                                                    click: function($event) {
                                                      $event.stopPropagation()
                                                      return _vm.makeProduct(
                                                        props.item
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "製造ID：" +
                                                      _vm._s(props.item.pdct_id)
                                                  )
                                                ]
                                              )
                                            ]
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "text-xs-center" },
                                      [
                                        _c("p", { staticClass: "order_code" }, [
                                          _vm._v(_vm._s(props.item.order_code))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "detail_code" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                props.item.detail_code === null
                                                  ? "-"
                                                  : props.item.detail_code
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "text-xs-center" },
                                      [
                                        _c(
                                          "p",
                                          { staticClass: "recept_code" },
                                          [
                                            _vm._v(
                                              _vm._s(props.item.recept_code)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "customer" }, [
                                          _vm._v(
                                            _vm._s(
                                              props.item.customer === null
                                                ? "-"
                                                : props.item.customer.minStr(16)
                                            )
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "text-xs-center" },
                                      [
                                        _c("p", { staticClass: "const_code" }, [
                                          _vm._v(_vm._s(props.item.const_code))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "recept_name" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                props.item.recept_name === null
                                                  ? "-"
                                                  : props.item.recept_name.minStr(
                                                      16
                                                    )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "text-xs-center" },
                                      [
                                        _c("p", { staticClass: "order_num" }, [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(props.item.order_num) +
                                              "\n                  "
                                          ),
                                          _c("span", { staticClass: "mini" }, [
                                            _vm._v("EA")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        props.item.nyuka_num !== 0 &&
                                        props.item.nyuka_num !== null
                                          ? _c(
                                              "p",
                                              { staticClass: "nyuka_num" },
                                              [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      props.item.nyuka_num
                                                    ) +
                                                    "\n                  "
                                                ),
                                                _c(
                                                  "span",
                                                  { staticClass: "mini" },
                                                  [_vm._v("納入済")]
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "order_price_one" },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(
                                                  props.item.order_price_one
                                                ) +
                                                "\n                  "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "mini" },
                                              [_vm._v("¥")]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "text-xs-center" },
                                      [
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              props.item.day3_nonyu_shitei ===
                                                null
                                                ? "-"
                                                : props.item.day3_nonyu_shitei
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              props.item.day5nonyu_yotei ===
                                                null
                                                ? "-"
                                                : props.item.day5nonyu_yotei
                                            )
                                          )
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ])
                      })
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
      _c(
        "v-dialog",
        {
          attrs: {
            "max-width": "290px",
            "min-width": "290px",
            transition: "dialog-transition"
          },
          model: {
            value: _vm.month,
            callback: function($$v) {
              _vm.month = $$v
            },
            expression: "month"
          }
        },
        [
          _c(
            "v-date-picker",
            {
              attrs: {
                type: "month",
                "no-title": "",
                scrollable: "",
                locale: "ja-jp",
                "day-format": function(date) {
                  return new Date(date).getDate()
                }
              },
              model: {
                value: _vm.date,
                callback: function($$v) {
                  _vm.date = $$v
                },
                expression: "date"
              }
            },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { flat: "", color: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.changeMonth(_vm.date)
                    }
                  }
                },
                [_vm._v("OK")]
              )
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
          attrs: { "max-width": "500px", transition: "dialog-transition" },
          model: {
            value: _vm.detail,
            callback: function($$v) {
              _vm.detail = $$v
            },
            expression: "detail"
          }
        },
        [
          _vm.detail
            ? _c("ReceptDetail", { attrs: { item: _vm.item } })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            scrollable: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
            width: "550px"
          },
          model: {
            value: _vm.make,
            callback: function($$v) {
              _vm.make = $$v
            },
            expression: "make"
          }
        },
        [
          _vm.make
            ? _c("MakePdct", {
                attrs: { target: _vm.target },
                on: { createPdct: _vm.createPdct }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-bottom-nav",
        { attrs: { fixed: "", value: "value", "active.sync": "value" } },
        [
          _c(
            "v-btn",
            {
              attrs: { flat: "" },
              on: {
                click: function($event) {
                  return _vm.getCsv()
                }
              }
            },
            [
              _c("span", [_vm._v("GET CSV")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("fas fa-file-csv")])
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

/***/ "./resources/js/components/ReceptList/MakePdct.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/ReceptList/MakePdct.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MakePdct_vue_vue_type_template_id_44515da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MakePdct.vue?vue&type=template&id=44515da0&scoped=true& */ "./resources/js/components/ReceptList/MakePdct.vue?vue&type=template&id=44515da0&scoped=true&");
/* harmony import */ var _MakePdct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MakePdct.vue?vue&type=script&lang=js& */ "./resources/js/components/ReceptList/MakePdct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MakePdct_vue_vue_type_style_index_0_id_44515da0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true& */ "./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VRadioGroup */ "./node_modules/vuetify/lib/components/VRadioGroup/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MakePdct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MakePdct_vue_vue_type_template_id_44515da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MakePdct_vue_vue_type_template_id_44515da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44515da0",
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VFlex"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VLayout"],VRadio: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_10__["VRadio"],VRadioGroup: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_10__["VRadioGroup"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReceptList/MakePdct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReceptList/MakePdct.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ReceptList/MakePdct.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./MakePdct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/MakePdct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_style_index_0_id_44515da0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/MakePdct.vue?vue&type=style&index=0&id=44515da0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_style_index_0_id_44515da0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_style_index_0_id_44515da0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_style_index_0_id_44515da0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_style_index_0_id_44515da0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_style_index_0_id_44515da0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ReceptList/MakePdct.vue?vue&type=template&id=44515da0&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ReceptList/MakePdct.vue?vue&type=template&id=44515da0&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_template_id_44515da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./MakePdct.vue?vue&type=template&id=44515da0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/MakePdct.vue?vue&type=template&id=44515da0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_template_id_44515da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakePdct_vue_vue_type_template_id_44515da0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ReceptList/PriceInfo.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ReceptList/PriceInfo.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/ReceptList/PriceInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PriceInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReceptList/PriceInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReceptList/PriceInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ReceptList/PriceInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./PriceInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/PriceInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReceptList/SwitchViewCtrl.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ReceptList/SwitchViewCtrl.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchViewCtrl_vue_vue_type_template_id_0b060e81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchViewCtrl.vue?vue&type=template&id=0b060e81& */ "./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=template&id=0b060e81&");
/* harmony import */ var _SwitchViewCtrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchViewCtrl.vue?vue&type=script&lang=js& */ "./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchViewCtrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchViewCtrl_vue_vue_type_template_id_0b060e81___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchViewCtrl_vue_vue_type_template_id_0b060e81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_4__["VCheckbox"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_6__["VForm"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReceptList/SwitchViewCtrl.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchViewCtrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchViewCtrl.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchViewCtrl_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=template&id=0b060e81&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=template&id=0b060e81& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchViewCtrl_vue_vue_type_template_id_0b060e81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchViewCtrl.vue?vue&type=template&id=0b060e81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/SwitchViewCtrl.vue?vue&type=template&id=0b060e81&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchViewCtrl_vue_vue_type_template_id_0b060e81___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchViewCtrl_vue_vue_type_template_id_0b060e81___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ReceptList/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ReceptList/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4168dd05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4168dd05&scoped=true& */ "./resources/js/components/ReceptList/index.vue?vue&type=template&id=4168dd05&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/ReceptList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_4168dd05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true& */ "./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBottomNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBottomNav */ "./node_modules/vuetify/lib/components/VBottomNav/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4168dd05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4168dd05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4168dd05",
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__["VApp"],VBottomNav: vuetify_lib_components_VBottomNav__WEBPACK_IMPORTED_MODULE_6__["VBottomNav"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["VBtn"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__["VChip"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__["VDataTable"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_11__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_12__["VDialog"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VFlex"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VLayout"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReceptList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReceptList/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ReceptList/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4168dd05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/index.vue?vue&type=style&index=0&id=4168dd05&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4168dd05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4168dd05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4168dd05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4168dd05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4168dd05_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ReceptList/index.vue?vue&type=template&id=4168dd05&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ReceptList/index.vue?vue&type=template&id=4168dd05&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4168dd05_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4168dd05&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReceptList/index.vue?vue&type=template&id=4168dd05&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4168dd05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4168dd05_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9NYWtlUGRjdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvUHJpY2VJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9Td2l0Y2hWaWV3Q3RybC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvTWFrZVBkY3QudnVlP2FlOTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9pbmRleC52dWU/NmRmYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXlqcy9sb2NhbGUvamEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvTWFrZVBkY3QudnVlPzhiNDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9pbmRleC52dWU/OTMwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZWNlcHRMaXN0L01ha2VQZGN0LnZ1ZT9hNjc5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvU3dpdGNoVmlld0N0cmwudnVlPzk1NjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9pbmRleC52dWU/YWE4NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZWNlcHRMaXN0L01ha2VQZGN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZWNlcHRMaXN0L01ha2VQZGN0LnZ1ZT83NWNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvTWFrZVBkY3QudnVlPzZmMDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9NYWtlUGRjdC52dWU/ZTQxYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZWNlcHRMaXN0L1ByaWNlSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9QcmljZUluZm8udnVlPzcxNTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9Td2l0Y2hWaWV3Q3RybC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9Td2l0Y2hWaWV3Q3RybC52dWU/NzcyNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZWNlcHRMaXN0L1N3aXRjaFZpZXdDdHJsLnZ1ZT8zNDZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvaW5kZXgudnVlPzBkMzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9pbmRleC52dWU/NDM3ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZWNlcHRMaXN0L2luZGV4LnZ1ZT80NDMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFOzs7Ozs7Ozs7Ozs7QUNsUkEsY0FBYyxtQkFBTyxDQUFDLCt4QkFBc2I7O0FBRTVjLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFB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LFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDL0NmO0FBQUE7QUFBQSx3Q0FBMFAsQ0FBZ0Isb1NBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUN5RztBQUN0RDtBQUNZO0FBQ1o7QUFDRTtBQUNLO0FBQ0s7QUFDRTtBQUNSO0FBQ0o7QUFDQTtBQUNFO0FBQ0E7QUFDUTtBQUMvRCxvR0FBaUIsYUFBYSxzRUFBSSxDQUFDLHdGQUFVLENBQUMsc0VBQUksQ0FBQyx5RUFBSyxDQUFDLG1GQUFVLENBQUMseUZBQVUsQ0FBQyw0RkFBVyxDQUFDLGdGQUFPLENBQUMseUVBQUssQ0FBQywwRUFBSyxDQUFDLDZFQUFPLENBQUMsNkVBQU8sQ0FBQyx5RkFBVSxDQUFDOzs7QUFHMUk7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3pEZjtBQUFBO0FBQUEsd0NBQWlQLENBQWdCLDJSQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJRO0FBQUE7QUFBQTtBQUFBO0FBQW1mLENBQWdCLDBlQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicmVjZXB0X2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWNhcmQ+XG4gICAgPHYtY2FyZC10ZXh0PlxuICAgICAgPHYtY2hpcCBvdXRsaW5lIGNvbG9yPVwid2FybmluZ1wiIEBjbGljaz1cInNwX2NsYXNzPSFzcF9jbGFzc1wiPuWMuuWIhu+8mnt7IHBfY2xhc3MgfX08L3YtY2hpcD5cbiAgICAgIDx2LWNoaXAgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj7lvaLlvI/vvJp7eyB0YXJnZXQucmVjZXB0X2NvZGUgfX08L3YtY2hpcD5cbiAgICAgIDx2LWNoaXAgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj7lt6Xkuovnlarlj7fvvJp7eyB0YXJnZXQuY29uc3RfY29kZSB9fTwvdi1jaGlwPlxuICAgICAgPHYtbGF5b3V0IHdyYXAgYWxpZ24tc3BhY2UtYXJvdW5kIGp1c3RpZnktY2VudGVyIGZpbGwtaGVpZ2h0PlxuICAgICAgICA8di1mbGV4IHhzMTAgY2xhc3M9XCJwdC0zIHBiLTNcIj5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkIGxhYmVsPVwi6KO96YCg44Kz44O844OJXCIgdi1tb2RlbD1cImNvZGVcIiBwcmVwZW5kLWljb249XCJmYXMgZmEtc2l0ZW1hcFwiPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCB4czM+XG4gICAgICAgICAgPHYtcmFkaW8tZ3JvdXAgdi1tb2RlbD1cInJhZGlvR3JvdXBcIiBAY2xpY2s9XCJjaGFuZ2VGbGcoKVwiIGNsYXNzPVwicGwtM1wiPlxuICAgICAgICAgICAgPHYtcmFkaW8gdi1mb3I9XCIobixpbmRleCkgaW4gc2VsZWN0c1wiIDprZXk9XCJpbmRleFwiIDpsYWJlbD1cIm5cIiA6dmFsdWU9XCJpbmRleFwiPjwvdi1yYWRpbz5cbiAgICAgICAgICA8L3YtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IHhzOSBjbGFzcz1cInJpZ2h0VmlldyB0ZXh0LXhzLWNlbnRlclwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwicGRjdF9kYXRhPT09bnVsbFwiIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDx2LWNoaXAgY29sbG9yPVwid2FybmluZ1wiIG91dGxpbmU+6KO96YCg5a6f57i+44GM44GC44KK44G+44Gb44KTPC92LWNoaXA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGg1PuaXouWtmOijvemAoOODh+ODvOOCvzwvaDU+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJkYXRhX2xpc3RcIj5cbiAgICAgICAgICAgICAgPHYtcmFkaW8tZ3JvdXAgdi1tb2RlbD1cImFkZF9wZGN0XCIgQGNsaWNrPVwiY2hhbmdlQWRkRmxnKClcIiBjbGFzcz1cInBsLTNcIj5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHBkY3RfZGF0YVwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8di1yYWRpbyA6dmFsdWU9XCJpdGVtLmNvbnN0X2NvZGVcIj48L3YtcmFkaW8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPnt7IGl0ZW0uc3RhdHVzLnN0X3ZhbCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgaXRlbS5wZGN0X2NsYXNzIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57eyBpdGVtLmNvbnN0X2NvZGUgfX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdi1yYWRpby1ncm91cD5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICA8L3YtbGF5b3V0PlxuICAgICAgPHYtY2FyZC1hY3Rpb25zIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGZsYXQgY2xhc3M9XCJhY3Rpb25cIiBAY2xpY2s9XCJjYW5jZWwoKVwiPuWPlua2iDwvdi1idG4+XG4gICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBmbGF0IGNsYXNzPVwiYWN0aW9uXCIgQGNsaWNrPVwibWFrZVBkY3QoKVwiPuS9nOaIkDwvdi1idG4+XG4gICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJzcF9jbGFzc1wiIDpvdmVybGF5PVwiZmFsc2VcIiBtYXgtd2lkdGg9XCIyMDBweFwiIHRyYW5zaXRpb249XCJkaWFsb2ctdHJhbnNpdGlvblwiPlxuICAgICAgPHYtY2FyZD5cbiAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgIDx2LXJhZGlvLWdyb3VwIHYtbW9kZWw9XCJzcF9ncm91cFwiIEBjbGljaz1cImNoYW5nZUNsYXNzKClcIj5cbiAgICAgICAgICAgIDx2LXJhZGlvXG4gICAgICAgICAgICAgIHYtZm9yPVwiKG4sIGluZGV4KSBpbiBbJ+ijveWTgScsICfkv67nkIYnLCAn6YOo5ZOBJywgJ+OBneOBruS7liddXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiblwiXG4gICAgICAgICAgICAgIDp2YWx1ZT1cIm5cIlxuICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgPjwvdi1yYWRpbz5cbiAgICAgICAgICA8L3YtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZGlhbG9nPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJ0YXJnZXRcIl0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2RlOiBcIlwiLFxuICAgICAgcF9jbGFzczogXCJcIixcbiAgICAgIHNwX2NsYXNzOiBmYWxzZSxcbiAgICAgIHNwX2dyb3VwOiBcIlwiLFxuICAgICAgc2VsZWN0czogW1wi5Y2Y5L2TXCIsIFwi44G+44Go44KBXCIsIFwi6L+95YqgXCJdLFxuICAgICAgYWRkX3BkY3Q6IGZhbHNlLFxuICAgICAgcmFkaW9Hcm91cDogMCxcbiAgICAgIHBkY3RfZGF0YTogbnVsbFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuY29kZSA9IHRoaXMudGFyZ2V0LmNvbnN0X2NvZGU7XG4gICAgICB0aGlzLnBfY2xhc3MgPSB0aGlzLnRhcmdldC5yY3B0X2NsYXNzO1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9kYi9wZGN0L2xpc3QvZnJvbS9tb2RlbC9cIiArIHRoaXMudGFyZ2V0LnJlY2VwdF9jb2RlKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICB0aGlzLnBkY3RfZGF0YSA9IHJlcy5kYXRhLmxlbmd0aCA9PT0gMCA/IG51bGwgOiByZXMuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjaGFuZ2VBZGRGbGcoKSB7XG4gICAgICB0aGlzLnJhZGlvR3JvdXAgPSAyO1xuICAgICAgdGhpcy5jb2RlID0gdGhpcy5hZGRfcGRjdDtcbiAgICB9LFxuICAgIGNoYW5nZUZsZygpIHtcbiAgICAgIHRoaXMuY29kZSA9IHRoaXMuY29kZSA9PT0gXCJcIiA/IHRoaXMudGFyZ2V0LmNvbnN0X2NvZGUgOiB0aGlzLmNvZGU7XG4gICAgICB0aGlzLmFkZF9wZGN0ID0gZmFsc2U7XG4gICAgICBsZXQgZiA9IHRoaXMuY29kZS5zbGljZSgtMSkgPT09IFwiTVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgbGV0IGwgPSB0aGlzLmNvZGUubGVuZ3RoO1xuICAgICAgc3dpdGNoICh0aGlzLnJhZGlvR3JvdXApIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHRoaXMuY29kZSA9IGYgPT09IHRydWUgPyB0aGlzLmNvZGUuc2xpY2UoMCwgbCAtIDEpIDogdGhpcy5jb2RlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGhpcy5jb2RlID0gZiA9PT0gdHJ1ZSA/IHRoaXMuY29kZSA6IHRoaXMuY29kZSArIFwiTVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgaWYgKHRoaXMucGRjdF9kYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICBhbGVydChcIui/veWKoOODh+ODvOOCv+OBjOOBguOCiuOBvuOBm+OCk1wiKTtcbiAgICAgICAgICAgIHRoaXMucmFkaW9Hcm91cCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLnRhcmdldC5jb25zdF9jb2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZF9wZGN0ID0gdGhpcy5wZGN0X2RhdGFbMF0uY29uc3RfY29kZTtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHRoaXMucGRjdF9kYXRhWzBdLmNvbnN0X2NvZGU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgbWFrZVBkY3QoKSB7XG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwICE9PSAyKSB7XG4gICAgICAgIGxldCBmbGcgPSBhd2FpdCB0aGlzLmNoZWNrQ29kZSgpO1xuICAgICAgICBpZiAoZmxnID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IHBkY3RfaWQgPSAwO1xuICAgICAgbGV0IGQgPSB7XG4gICAgICAgIG1vZGVsX2lkOiB0aGlzLnRhcmdldC5yZWNlcHRfY29kZSxcbiAgICAgICAgY29uc3RfY29kZTogdGhpcy5jb2RlLFxuICAgICAgICBwZGN0X2NsYXNzOiB0aGlzLnBfY2xhc3NcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwICE9PSAyKSB7XG4gICAgICAgIGF4aW9zLnBvc3QoXCIvZGIvcGRjdC9jcmVhdGUvXCIgKyB0aGlzLnRhcmdldC5yZWNlcHRfaWQsIGQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwiY3JlYXRlUGRjdFwiLCByZXMuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAuZ2V0KFwiL2RiL3BkY3QvYWRkL3JjcHQvXCIgKyB0aGlzLmNvZGUgKyBcIi9cIiArIHRoaXMudGFyZ2V0LnJlY2VwdF9pZClcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcImNyZWF0ZVBkY3RcIiwgcmVzLmRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgY2hlY2tDb2RlKCkge1xuICAgICAgbGV0IGwgPSB0aGlzLmNvZGUubGVuZ3RoO1xuICAgICAgaWYgKGwgPCA1KSB7XG4gICAgICAgIGFsZXJ0KFwi5bel5LqL55Wq5Y+344GM55+t44GZ44GO44G+44GZXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobCA+IDEyKSB7XG4gICAgICAgIGFsZXJ0KFwi5bel5LqL55Wq5Y+344GM6ZW344GZ44GO44G+44GZXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgdiA9IHRoaXMuY29kZS5zbGljZSgtMSk7XG4gICAgICBpZiAoW1wiU1wiLCBcIkxcIiwgXCJUXCIsIFwiUFwiXS5pbmNsdWRlcyh2KSkge1xuICAgICAgICBhbGVydChcIuacq+WwvjogXCIgKyB2ICsgXCIg44Gv5LqI57SE5paH5a2X44Gn44GZXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgZHVwQ2hlY2sgPSB0cnVlO1xuICAgICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2RiL3BkY3QvaXMvdGhpcy9cIiArIHRoaXMuY29kZSkudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgYWxlcnQoXCLkvb/nlKjmuIjjgb/lt6Xkuovnlarlj7fjgafjgZlcIik7XG4gICAgICAgICAgZHVwQ2hlY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZHVwQ2hlY2s7XG4gICAgfSxcbiAgICBjYW5jZWwoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY3JlYXRlUGRjdFwiKTtcbiAgICB9LFxuICAgIGNoYW5nZUNsYXNzKCkge1xuICAgICAgdGhpcy5wX2NsYXNzID0gdGhpcy5zcF9ncm91cDtcbiAgICAgIHRoaXMuc3BfY2xhc3MgPSAhdGhpcy5zcF9jbGFzcztcbiAgICB9XG4gIH1cbiAgLy8gd2F0Y2g6IHtcbiAgLy8gY29kZTogZnVuY3Rpb24oKSB7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy5jb2RlKTtcbiAgLy8gfVxuICAvLyB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5hY3Rpb24ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5kYXRhX2xpc3Qge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZCB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICB9XG59XG48L3N0eWxlPlxuXG4iLCI8c2NyaXB0PlxuaW1wb3J0IHsgQmFyIH0gZnJvbSBcInZ1ZS1jaGFydGpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZXh0ZW5kczogQmFyLFxuICBwcm9wczogW1wicHJpY2VcIiwgXCJwcmljZV9hbGxcIl0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhY29sbGVjdGlvbjoge1xuICAgICAgICAvL0RhdGEgdG8gYmUgcmVwcmVzZW50ZWQgb24geC1heGlzXG4gICAgICAgIGxhYmVsczogW10sXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi5Y+X5rOo6YeR6aGNXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc5ODZDQlwiLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCIjMjQ5RUJGXCIsXG4gICAgICAgICAgICAvL0RhdGEgdG8gYmUgcmVwcmVzZW50ZWQgb24geS1heGlzXG4gICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vQ2hhcnQuanMgb3B0aW9ucyB0aGF0IGNvbnRyb2xzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGFydFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJpY2UpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhY29sbGVjdGlvbi5sYWJlbHNbaW5kZXhdID0gdGhpcy5ydE1vbnRoKGtleSk7XG4gICAgICAgIHRoaXMuZGF0YWNvbGxlY3Rpb24uZGF0YXNldHNbMF0uZGF0YVtpbmRleF0gPSB0aGlzLnByaWNlW2tleV07XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJ0TW9udGgobmFtZSkge1xuICAgICAgaWYgKG5hbWUgPT09IFwibnVsbFwiKSByZXR1cm4gXCLmnKrliIbpoZ5cIjtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgICByZXR1cm4gU3RyaW5nKG5hbWUuc2xpY2UoLTQsIC0yKSArIFwi5bm0XCIgKyBuYW1lLnNsaWNlKC0yKSArIFwi5pyIXCIpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy9yZW5kZXJDaGFydCBmdW5jdGlvbiByZW5kZXJzIHRoZSBjaGFydCB3aXRoIHRoZSBkYXRhY29sbGVjdGlvbiBhbmQgb3B0aW9ucyBvYmplY3QuXG4gICAgdGhpcy5yZW5kZXJDaGFydCh0aGlzLmRhdGFjb2xsZWN0aW9uLCB0aGlzLm9wdGlvbnMpO1xuICB9LFxuICB3YXRjaDoge1xuICAgIHByaWNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG4iLCI8dGVtcGxhdGU+XG4gIDx2LWZvcm0gY2xhc3M9XCJ0eXV6YW5fdmlld19zZWxlY3RvclwiPlxuICAgIDxoMz7lj5fms6jljLrliIY8L2gzPlxuICAgIDx2LWxheW91dCByb3cgd3JhcCBjbGFzcz1cIm1sLTJcIj5cbiAgICAgIDx2LWZsZXggeHMyPlxuICAgICAgICA8di1jaGVja2JveCB2LW1vZGVsPVwiY2hlY2suYnVoaW5cIiBsYWJlbD1cIumDqOWTgVwiIGNvbG9yPVwiaW5kaWdvXCIgQGNoYW5nZT1cInJlbWFrZVZpZXcoKVwiPjwvdi1jaGVja2JveD5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czI+XG4gICAgICAgIDx2LWNoZWNrYm94IHYtbW9kZWw9XCJjaGVjay5zaHVyaVwiIGxhYmVsPVwi5L+u55CGXCIgY29sb3I9XCJpbmRpZ29cIiBAY2hhbmdlPVwicmVtYWtlVmlldygpXCI+PC92LWNoZWNrYm94PlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMj5cbiAgICAgICAgPHYtY2hlY2tib3ggdi1tb2RlbD1cImNoZWNrLnNlaWhpblwiIGxhYmVsPVwi6KO95ZOBXCIgY29sb3I9XCJpbmRpZ29cIiBAY2hhbmdlPVwicmVtYWtlVmlldygpXCI+PC92LWNoZWNrYm94PlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMj5cbiAgICAgICAgPHYtY2hlY2tib3ggdi1tb2RlbD1cImNoZWNrLm1pXCIgbGFiZWw9XCLmnKpcIiBjb2xvcj1cImluZGlnb1wiIEBjaGFuZ2U9XCJyZW1ha2VWaWV3KClcIj48L3YtY2hlY2tib3g+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMyPlxuICAgICAgICA8di1jaGVja2JveCB2LW1vZGVsPVwiY2hlY2suZXRjXCIgbGFiZWw9XCLjgZ3jga7ku5ZcIiBjb2xvcj1cImluZGlnb1wiIEBjaGFuZ2U9XCJyZW1ha2VWaWV3KClcIj48L3YtY2hlY2tib3g+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICAgIDxoMz7oo73pgKDjg4fjg7zjgr88L2gzPlxuICAgIDx2LWxheW91dCByb3cgd3JhcCBjbGFzcz1cIm1sLTJcIj5cbiAgICAgIDx2LWZsZXggeHMzPlxuICAgICAgICA8di1jaGVja2JveCB2LW1vZGVsPVwiY2hlY2sucHJvXCIgbGFiZWw9XCLkvZzmiJDmuIhcIiBAY2hhbmdlPVwicmVtYWtlVmlldygpXCI+PC92LWNoZWNrYm94PlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMz5cbiAgICAgICAgPHYtY2hlY2tib3ggdi1tb2RlbD1cImNoZWNrLm5vcHJvXCIgbGFiZWw9XCLmnKrkvZzmiJBcIiBAY2hhbmdlPVwicmVtYWtlVmlldygpXCI+PC92LWNoZWNrYm94PlxuICAgICAgPC92LWZsZXg+XG4gICAgPC92LWxheW91dD5cbiAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiY2hlY2tcIl0sXG4gIG1ldGhvZHM6IHtcbiAgICByZW1ha2VWaWV3KCkge1xuICAgICAgdGhpcy4kZW1pdChcInJlbWFrZVZpZXdcIiwgdGhpcy5jaGVjayk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8di1hcHA+XG4gICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC14cyBjbGFzcz1cIm1iLTVcIj5cbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XG4gICAgICAgIDxMb2FkaW5nIHYtaWY9XCJsb2FkaW5nXCI+PC9Mb2FkaW5nPlxuICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICA8aDE+5Y+X5rOo44OH44O844K/PC9oMT5cbiAgICAgICAgICA8di1sYXlvdXQgcm93IHdyYXAgY2xhc3M9XCJwdC0zIHBiLTNcIj5cbiAgICAgICAgICAgIDx2LWZsZXggeHM4IG9mZnNldC14czE+XG4gICAgICAgICAgICAgIOe3j+WPl+azqOmHkemhje+8mnt7IHByaWNlX2FsbC50b0xvY2FsZVN0cmluZygpIH19XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluaVwiPsKlPC9zcGFuPlxuICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICA8di1mbGV4IHhzOCBvZmZzZXQteHMxPlxuICAgICAgICAgICAgICA8UHJpY2VJbmZvIDpwcmljZT1cInByaWNlXCIgdi1pZj1cInByaWNlXCI+PC9QcmljZUluZm8+XG4gICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgIDxTd2l0Y2hWaWV3Q3RybCA6Y2hlY2s9XCJjaGVja1wiIEByZW1ha2VWaWV3PVwicmVtYWtlVmlld1wiPjwvU3dpdGNoVmlld0N0cmw+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICBsYWJlbD1cIuaknOe0olwiXG4gICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcbiAgICAgICAgICAgIHByZXBlbmQtaW5uZXItaWNvbj1cImZhcyBmYS1zZWFyY2hcIlxuICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgICAgICAgOml0ZW1zPVwidmlld3NcIlxuICAgICAgICAgICAgaXRlbS1rZXk9XCJvcmRlcl9jb2RlXCJcbiAgICAgICAgICAgIDpzZWFyY2g9XCJzZWFyY2hcIlxuICAgICAgICAgICAgOnJvd3MtcGVyLXBhZ2UtaXRlbXM9XCJbMjUsNTAseyd0ZXh0JzonQWxsJywndmFsdWUnOi0xfV1cIlxuICAgICAgICAgICAgOnBhZ2luYXRpb24uc3luYz1cInBhZ2luYXRpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbXM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8dHIgQGNsaWNrPVwidmlld0RldGFpbChwcm9wcy5pdGVtKVwiPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8di1jaGlwXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJtb250aFNlbGVjdFZpZXcocHJvcHMuaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJhZGRDbGFzc0NsYXNzKHByb3BzLml0ZW0ucmNwdF9jbGFzcylcIlxuICAgICAgICAgICAgICAgICAgPnt7IHByb3BzLml0ZW0ueW0gPT09IG51bGwgPyAn5bm05pyIJyA6IHJ0TW9udGgocHJvcHMuaXRlbS55bSkgfX08L3YtY2hpcD5cbiAgICAgICAgICAgICAgICAgIDx2LWNoaXBcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJhZGRDbGFzc0NsYXNzKHByb3BzLml0ZW0ucmNwdF9jbGFzcylcIlxuICAgICAgICAgICAgICAgICAgPnt7IHByb3BzLml0ZW0ucmNwdF9jbGFzcyA9PT0gbnVsbCA/ICfmnKonIDogcHJvcHMuaXRlbS5yY3B0X2NsYXNzIH19PC92LWNoaXA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInByb3BzLml0ZW0ucGRjdF9pZCA9PT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsIGRhcmtlbi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1ha2VfcGRjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJtYWtlUHJvZHVjdChwcm9wcy5pdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICA+6KO96YCg44OH44O844K/5L2c5oiQPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2hpcFxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1ha2VfcGRjdCBtYWtlZCBtdC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cIm1ha2VQcm9kdWN0KHByb3BzLml0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgPuijvemAoElE77yae3sgcHJvcHMuaXRlbS5wZGN0X2lkIH19PC92LWNoaXA+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXJfY29kZVwiPnt7IHByb3BzLml0ZW0ub3JkZXJfY29kZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGV0YWlsX2NvZGVcIlxuICAgICAgICAgICAgICAgICAgPnt7IHByb3BzLml0ZW0uZGV0YWlsX2NvZGUgPT09IG51bGwgPyAnLScgOiBwcm9wcy5pdGVtLmRldGFpbF9jb2RlIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicmVjZXB0X2NvZGVcIj57eyBwcm9wcy5pdGVtLnJlY2VwdF9jb2RlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b21lclwiXG4gICAgICAgICAgICAgICAgICA+e3sgcHJvcHMuaXRlbS5jdXN0b21lciA9PT0gbnVsbCA/ICctJyA6IHByb3BzLml0ZW0uY3VzdG9tZXIubWluU3RyKDE2KSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnN0X2NvZGVcIj57eyBwcm9wcy5pdGVtLmNvbnN0X2NvZGUgfX08L3A+XG4gICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlY2VwdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgID57eyBwcm9wcy5pdGVtLnJlY2VwdF9uYW1lID09PSBudWxsID8gJy0nIDogcHJvcHMuaXRlbS5yZWNlcHRfbmFtZS5taW5TdHIoMTYpIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib3JkZXJfbnVtXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHByb3BzLml0ZW0ub3JkZXJfbnVtIH19XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluaVwiPkVBPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJueXVrYV9udW1cIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvcHMuaXRlbS5ueXVrYV9udW0gIT09IDAgJiYgcHJvcHMuaXRlbS5ueXVrYV9udW0gIT09IG51bGxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLm55dWthX251bSB9fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbmlcIj7ntI3lhaXmuIg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9yZGVyX3ByaWNlX29uZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wcy5pdGVtLm9yZGVyX3ByaWNlX29uZSB9fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbmlcIj7CpTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cD57eyBwcm9wcy5pdGVtLmRheTNfbm9ueXVfc2hpdGVpID09PSBudWxsID8gJy0nIDogcHJvcHMuaXRlbS5kYXkzX25vbnl1X3NoaXRlaSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPnt7IHByb3BzLml0ZW0uZGF5NW5vbnl1X3lvdGVpID09PSBudWxsID8gJy0nIDogcHJvcHMuaXRlbS5kYXk1bm9ueXVfeW90ZWl9fTwvcD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RyYW5zaXRpb24+XG4gICAgPC92LWNvbnRhaW5lcj5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cIm1vbnRoXCIgbWF4LXdpZHRoPVwiMjkwcHhcIiBtaW4td2lkdGg9XCIyOTBweFwiIHRyYW5zaXRpb249XCJkaWFsb2ctdHJhbnNpdGlvblwiPlxuICAgICAgPHYtZGF0ZS1waWNrZXJcbiAgICAgICAgdi1tb2RlbD1cImRhdGVcIlxuICAgICAgICB0eXBlPVwibW9udGhcIlxuICAgICAgICBuby10aXRsZVxuICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgIGxvY2FsZT1cImphLWpwXCJcbiAgICAgICAgOmRheS1mb3JtYXQ9XCJkYXRlID0+IG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKVwiXG4gICAgICA+XG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJjaGFuZ2VNb250aChkYXRlKVwiPk9LPC92LWJ0bj5cbiAgICAgIDwvdi1kYXRlLXBpY2tlcj5cbiAgICA8L3YtZGlhbG9nPlxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGV0YWlsXCIgbWF4LXdpZHRoPVwiNTAwcHhcIiB0cmFuc2l0aW9uPVwiZGlhbG9nLXRyYW5zaXRpb25cIj5cbiAgICAgIDxSZWNlcHREZXRhaWwgOml0ZW09XCJpdGVtXCIgdi1pZj1cImRldGFpbFwiPjwvUmVjZXB0RGV0YWlsPlxuICAgIDwvdi1kaWFsb2c+XG4gICAgPHYtZGlhbG9nXG4gICAgICB2LW1vZGVsPVwibWFrZVwiXG4gICAgICBzY3JvbGxhYmxlXG4gICAgICBoaWRlLW92ZXJsYXlcbiAgICAgIHRyYW5zaXRpb249XCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIlxuICAgICAgd2lkdGg9XCI1NTBweFwiXG4gICAgPlxuICAgICAgPE1ha2VQZGN0IDp0YXJnZXQ9XCJ0YXJnZXRcIiB2LWlmPVwibWFrZVwiIEBjcmVhdGVQZGN0PVwiY3JlYXRlUGRjdFwiPjwvTWFrZVBkY3Q+XG4gICAgPC92LWRpYWxvZz5cbiAgICA8di1ib3R0b20tbmF2IGZpeGVkIHZhbHVlPVwidmFsdWVcIiBhY3RpdmUuc3luYz1cInZhbHVlXCI+XG4gICAgICA8di1idG4gZmxhdCBAY2xpY2s9XCJnZXRDc3YoKVwiPlxuICAgICAgICA8c3Bhbj5HRVQgQ1NWPC9zcGFuPlxuICAgICAgICA8di1pY29uPmZhcyBmYS1maWxlLWNzdjwvdi1pY29uPlxuICAgICAgPC92LWJ0bj5cbiAgICA8L3YtYm90dG9tLW5hdj5cbiAgPC92LWFwcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgXCJkYXlqcy9sb2NhbGUvamFcIjtcbmRheWpzLmxvY2FsZShcImphXCIpO1xudmFyIGljb252ID0gcmVxdWlyZShcImljb252LWxpdGVcIik7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi8uLi9jb20vTG9hZGluZ1wiO1xuaW1wb3J0IFJlY2VwdERldGFpbCBmcm9tIFwiLi8uLi9SZWFkRmlsZS9SZWNlcHREZXRhaWxcIjtcbmltcG9ydCBQcmljZUluZm8gZnJvbSBcIi4vUHJpY2VJbmZvXCI7XG5pbXBvcnQgU3dpdGNoVmlld0N0cmwgZnJvbSBcIi4vU3dpdGNoVmlld0N0cmxcIjtcbmltcG9ydCBNYWtlUGRjdCBmcm9tIFwiLi9NYWtlUGRjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBMb2FkaW5nLFxuICAgIFJlY2VwdERldGFpbCxcbiAgICBQcmljZUluZm8sXG4gICAgU3dpdGNoVmlld0N0cmwsXG4gICAgTWFrZVBkY3RcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgIGRldGFpbDogZmFsc2UsXG4gICAgICBpdGVtOiBudWxsLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBudWxsLFxuICAgICAgdmlld3M6IG51bGwsXG4gICAgICBtYWtlOiBmYWxzZSxcbiAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgIGRhdGU6IFwiXCIsXG4gICAgICBtb250aDogZmFsc2UsXG4gICAgICBtZW51OiBmYWxzZSxcbiAgICAgIHByaWNlOiB7fSxcbiAgICAgIHByaWNlX2FsbDogMCxcbiAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIuWPl+azqOWMuuWIhlwiLCB2YWx1ZTogXCJyY3B0X2NsYXNzXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCLnmbrms6jjg7vmmI7ntLDnlarlj7dcIiwgdmFsdWU6IFwib3JkZXJfY29kZVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICB7IHRleHQ6IFwi5Y+X5rOo5b2i5byP44O75Y+W5byV5YWIXCIsIHZhbHVlOiBcInJlY2VwdF9jb2RlXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCLlt6Xkuovnlarlj7fjg7vlk4HlkI1cIiwgdmFsdWU6IFwiY29uc3RfY29kZVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCLlj7DmlbDjg7vljZjkvqFcIixcbiAgICAgICAgICB2YWx1ZTogXCJyZWNlcHRfbmFtZVwiLFxuICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCLntI3lhaXmjIflrprml6Xjg7vkuojlrprml6VcIixcbiAgICAgICAgICB2YWx1ZTogXCJkYXkzX25vbnl1X3NoaXRlaVwiLFxuICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBzb3J0Qnk6IFwicmVjZXB0X2NvZGVcIixcbiAgICAgICAgZGVzY2VuZGluZzogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjaGVjazoge1xuICAgICAgICBidWhpbjogdHJ1ZSxcbiAgICAgICAgc2h1cmk6IHRydWUsXG4gICAgICAgIHNlaWhpbjogdHJ1ZSxcbiAgICAgICAgbWk6IHRydWUsXG4gICAgICAgIGV0YzogdHJ1ZSxcbiAgICAgICAgcHJvOiB0cnVlLFxuICAgICAgICBub3BybzogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIGF4aW9zLmdldChcIi9kYi9yZWNlcHQvdHl1emFuL2RhdGEvXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHJlcy5kYXRhO1xuICAgICAgICB0aGlzLnJlbWFrZVZpZXcoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHJ0TW9udGgobmFtZSkge1xuICAgICAgaWYgKG5hbWUgPT09IFwiYWxsXCIpIHJldHVybiBcIuWPl+azqOe3j+mhjVwiO1xuICAgICAgaWYgKG5hbWUgPT09IFwibnVsbFwiKSByZXR1cm4gXCLmnKrliIbpoZ5cIjtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgICByZXR1cm4gU3RyaW5nKG5hbWUuc2xpY2UoLTQsIC0yKSArIFwi5bm0XCIgKyBuYW1lLnNsaWNlKC0yKSArIFwi5pyIXCIpO1xuICAgIH0sXG4gICAgbWFrZVByb2R1Y3QoaXRlbSkge1xuICAgICAgdGhpcy5tYWtlID0gIXRoaXMubWFrZTtcbiAgICAgIHRoaXMudGFyZ2V0ID0gaXRlbTtcbiAgICB9LFxuICAgIHZpZXdEZXRhaWwoaXRlbSkge1xuICAgICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgICAgIHRoaXMuZGV0YWlsID0gdHJ1ZTtcbiAgICB9LFxuICAgIGFkZENsYXNzQ2xhc3ModmFsKSB7XG4gICAgICBsZXQgYWRkQ2xhc3MgPSBcIlwiO1xuICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgY2FzZSBcIumDqOWTgVwiOlxuICAgICAgICAgIGFkZENsYXNzID0gXCJidWhpblwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwi5L+u55CGXCI6XG4gICAgICAgICAgYWRkQ2xhc3MgPSBcInNodXJpXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCLoo73lk4FcIjpcbiAgICAgICAgICBhZGRDbGFzcyA9IFwic2VpaGluXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCLku5ZcIjpcbiAgICAgICAgICBhZGRDbGFzcyA9IFwiZXRjXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCLmnKpcIjpcbiAgICAgICAgICBhZGRDbGFzcyA9IFwiZW5vdWdoXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWRkQ2xhc3M7XG4gICAgfSxcbiAgICByZW1ha2VWaWV3KGMgPSB0aGlzLmNoZWNrKSB7XG4gICAgICBsZXQgaSA9IHRoaXMuaXRlbXM7XG4gICAgICBsZXQgdiA9IFtdO1xuICAgICAgbGV0IHAgPSAodGhpcy5wcmljZSA9IHt9KTtcbiAgICAgIGxldCBhbGwgPSAocC5udWxsID0gMCk7XG4gICAgICBpLmZvckVhY2goKGFyLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoYy5idWhpbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAoYXIucmNwdF9jbGFzcyA9PT0gXCLpg6jlk4FcIikgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLnNodXJpID09PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChhci5yY3B0X2NsYXNzID09PSBcIuS/rueQhlwiKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMuc2VpaGluID09PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChhci5yY3B0X2NsYXNzID09PSBcIuijveWTgVwiKSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMubWkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKGFyLnJjcHRfY2xhc3MgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5ldGMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKGFyLnJjcHRfY2xhc3MgPT09IFwi5LuWXCIpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5wcm8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKGFyLnBkY3RfaWQgIT09IG51bGwpIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYy5ub3BybyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAoYXIucGRjdF9pZCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB6YW5fcHJpY2UgPSAoYXIub3JkZXJfbnVtIC0gYXIubnl1a2FfbnVtKSAqIGFyLm9yZGVyX3ByaWNlX29uZTtcbiAgICAgICAgYWxsID0gYWxsICsgemFuX3ByaWNlO1xuICAgICAgICBpZiAoYXIueW0gaW4gcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBwW2FyLnltXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcFthci55bV0gPSBwW2FyLnltXSArIHphbl9wcmljZTtcbiAgICAgICAgdi5wdXNoKGFyKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcmljZV9hbGwgPSBhbGw7XG4gICAgICB0aGlzLnZpZXdzID0gdjtcbiAgICB9LFxuICAgIGNyZWF0ZVBkY3QoaWQgPSBmYWxzZSkge1xuICAgICAgaWYgKGlkICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRhcmdldC5wZGN0X2lkID0gaWQ7XG4gICAgICB9XG4gICAgICB0aGlzLm1ha2UgPSBmYWxzZTtcbiAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICB9LFxuICAgIGNoYW5nZU1vbnRoKGQpIHtcbiAgICAgIGxldCBzRGF0ZSA9IGQuc2xpY2UoLTUsIC0zKSArIGQuc2xpY2UoLTIpO1xuICAgICAgbGV0IGkgPSB0aGlzLml0ZW07XG4gICAgICBpLnltID0gc0RhdGU7XG4gICAgICB0aGlzLnJlbWFrZVZpZXcoKTtcbiAgICAgIHRoaXMubW9udGggPSAhdGhpcy5tb250aDtcbiAgICAgIGF4aW9zLmdldChcbiAgICAgICAgXCIvZGIvcmVjZXB0L29uZXVwZGF0ZS9cIiArIGkucmVjZXB0X2lkICsgXCIvXCIgKyBcInltXCIgKyBcIi9cIiArIHNEYXRlXG4gICAgICApO1xuICAgIH0sXG4gICAgbW9udGhTZWxlY3RWaWV3KGl0ZW0pIHtcbiAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICB0aGlzLm1vbnRoID0gIXRoaXMubW9udGg7XG4gICAgfSxcbiAgICBnZXRDc3YoKSB7XG4gICAgICBsZXQgbGlzdCA9IFwiXCI7XG4gICAgICB2YXIgY3N2ID0gXCJcIjtcbiAgICAgIGNzdiA9IGNzdiArIFwi6aGn5a6iLOaYjue0sE5PLOeZuuazqOS6iOWumk5PLOW3peS6i+eVquWPtyzlj5fms6jlvaLlvI8s5Y+X5rOo5ZCNLFwiO1xuICAgICAgY3N2ID0gY3N2ICsgXCLlj5fms6jmlbAs5Y2Y5L2NQ0Qs5Y+X5rOo5Yy65YiGLOWPl+azqOauiyznmbrms6jljZjkvqEs6YeR6aGNLFwiO1xuICAgICAgY3N2ID0gY3N2ICsgXCLkvp3poLzml6Uo55m65rOo5pelKSzntI3lhaXmjIflrprml6Uo5LqI5a6a5pelKVwiO1xuICAgICAgbGlzdCA9IGNzdiArIFwiXFxuXCI7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGFyLCBuKSA9PiB7XG4gICAgICAgIGxpc3QgPSBsaXN0ICsgKGFyLmN1c3RvbWVyID09PSBudWxsID8gXCJcIiA6IGFyLmN1c3RvbWVyKSArIFwiLFwiO1xuICAgICAgICBsaXN0ID0gbGlzdCArIChhci5kZXRhaWxfY29kZSA9PT0gbnVsbCA/IFwiXCIgOiBhci5kZXRhaWxfY29kZSkgKyBcIixcIjtcbiAgICAgICAgbGlzdCA9IGxpc3QgKyAoYXIub3JkZXJfY29kZSA9PT0gbnVsbCA/IFwiXCIgOiBhci5vcmRlcl9jb2RlKSArIFwiLFwiO1xuICAgICAgICBsaXN0ID0gbGlzdCArIChhci5jb25zdF9jb2RlID09PSBudWxsID8gXCJcIiA6IGFyLmNvbnN0X2NvZGUpICsgXCIsXCI7XG4gICAgICAgIGxpc3QgPSBsaXN0ICsgKGFyLnJlY2VwdF9jb2RlID09PSBudWxsID8gXCJcIiA6IGFyLnJlY2VwdF9jb2RlKSArIFwiLFwiO1xuICAgICAgICBsaXN0ID0gbGlzdCArIChhci5yZWNlcHRfbmFtZSA9PT0gbnVsbCA/IFwiXCIgOiBhci5yZWNlcHRfbmFtZSkgKyBcIixcIjtcbiAgICAgICAgbGlzdCA9IGxpc3QgKyAoYXIub3JkZXJfbnVtID09PSBudWxsID8gXCJcIiA6IGFyLm9yZGVyX251bSkgKyBcIixcIjtcbiAgICAgICAgbGlzdCA9IGxpc3QgKyAoYXIub3JkZXJfZWEgPT09IG51bGwgPyBcIlwiIDogYXIub3JkZXJfZWEpICsgXCIsXCI7XG4gICAgICAgIGxpc3QgPSBsaXN0ICsgKGFyLnJjcHRfY2xhc3MgPT09IG51bGwgPyBcIlwiIDogYXIucmNwdF9jbGFzcykgKyBcIixcIjtcbiAgICAgICAgbGlzdCA9XG4gICAgICAgICAgbGlzdCArXG4gICAgICAgICAgKGFyLm5vaGluX251bSA9PT0gbnVsbCA/IFwiXCIgOiBhci5vcmRlcl9udW0gLSBhci5ub2hpbl9udW0pICtcbiAgICAgICAgICBcIixcIjtcbiAgICAgICAgbGlzdCA9XG4gICAgICAgICAgbGlzdCArIChhci5vcmRlcl9wcmljZV9vbmUgPT09IG51bGwgPyBcIlwiIDogYXIub3JkZXJfcHJpY2Vfb25lKSArIFwiLFwiO1xuICAgICAgICBsaXN0ID1cbiAgICAgICAgICBsaXN0ICtcbiAgICAgICAgICAoYXIub3JkZXJfcHJpY2Vfb25lID09PSBudWxsXG4gICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgIDogYXIub3JkZXJfcHJpY2Vfb25lICogYXIub3JkZXJfbnVtKSArXG4gICAgICAgICAgXCIsXCI7XG4gICAgICAgIGxpc3QgPVxuICAgICAgICAgIGxpc3QgK1xuICAgICAgICAgIChhci5kYXkzX2lyYWkgPT09IG51bGwgPyBhci5kYXk1bm9ueXVfeW90ZWkgOiBhci5kYXkzX2lyYWkpICtcbiAgICAgICAgICBcIixcIjtcbiAgICAgICAgbGlzdCA9XG4gICAgICAgICAgbGlzdCArXG4gICAgICAgICAgKGFyLmRheTNfbm9ueXVfc2hpdGVpID09PSBudWxsXG4gICAgICAgICAgICA/IGFyLmRheTVoYXR5dVxuICAgICAgICAgICAgOiBhci5kYXkzX25vbnl1X3NoaXRlaSkgK1xuICAgICAgICAgIFwiXFxuXCI7XG5cbiAgICAgICAgLy8gbGlzdCA9IGxpc3QgKyAoYXIucmVjZXB0X2lkID09PSBudWxsID8gXCJcIiA6IGFyLnJlY2VwdF9pZCkgKyBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9IGxpc3QgKyAoYXIucmNwdF9zdGF0dXMgPT09IG51bGwgPyBcIlwiIDogYXIucmNwdF9zdGF0dXMpICsgXCIsXCI7XG4gICAgICAgIC8vIGxpc3QgPSBsaXN0ICsgKGFyLnBkY3RfaWQgPT09IG51bGwgPyBcIlwiIDogYXIucGRjdF9pZCkgKyBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9IGxpc3QgKyAoYXIubm9oaW5fbnVtID09PSBudWxsID8gXCJcIiA6IGFyLm5vaGluX251bSkgKyBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9XG4gICAgICAgIC8vICAgbGlzdCArIChhci5sYXN0X25vaGluX2RheSA9PT0gbnVsbCA/IFwiXCIgOiBhci5sYXN0X25vaGluX2RheSkgKyBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9IGxpc3QgKyAoYXIubnl1a2FfbnVtID09PSBudWxsID8gXCJcIiA6IGFyLm55dWthX251bSkgKyBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9IGxpc3QgPSBsaXN0ICsgKGFyLnltID09PSBudWxsID8gXCJcIiA6IGFyLnltKSArIFwiLFwiO1xuICAgICAgICAvLyBsaXN0ID0gbGlzdCArIChhci5kYXkzX2lyYWkgPT09IG51bGwgPyBcIlwiIDogYXIuZGF5M19pcmFpKSArIFwiLFwiO1xuICAgICAgICAvLyBsaXN0ID1cbiAgICAgICAgLy8gICBsaXN0ICtcbiAgICAgICAgLy8gICAoYXIuZGF5M19ub255dV9zaGl0ZWkgPT09IG51bGwgPyBcIlwiIDogYXIuZGF5M19ub255dV9zaGl0ZWkpICtcbiAgICAgICAgLy8gICBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9IGxpc3QgKyAoYXIuZGF5NWhhdHl1ID09PSBudWxsID8gXCJcIiA6IGFyLmRheTVoYXR5dSkgKyBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9XG4gICAgICAgIC8vICAgbGlzdCArIChhci5kYXk1bm9ueXVfeW90ZWkgPT09IG51bGwgPyBcIlwiIDogYXIuZGF5NW5vbnl1X3lvdGVpKSArIFwiLFwiO1xuICAgICAgICAvLyBsaXN0ID0gbGlzdCArIChhci5tZW1vX2Jpa291MSA9PT0gbnVsbCA/IFwiXCIgOiBhci5tZW1vX2Jpa291MSkgKyBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9IGxpc3QgKyAoYXIubWVtb19iaWtvdTIgPT09IG51bGwgPyBcIlwiIDogYXIubWVtb19iaWtvdTIpICsgXCIsXCI7XG4gICAgICAgIC8vIGxpc3QgPSBsaXN0ICsgKGFyLnNoaXlvID09PSBudWxsID8gXCJcIiA6IGFyLnNoaXlvKSArIFwiLFwiO1xuICAgICAgICAvLyBsaXN0ID0gbGlzdCArIChhci50ZWtpeW8gPT09IG51bGwgPyBcIlwiIDogYXIudGVraXlvKSArIFwiLFwiO1xuICAgICAgICAvLyBsaXN0ID1cbiAgICAgICAgLy8gICBsaXN0ICsgKGFyLnNldF91cGRhdGVfdGltZSA9PT0gbnVsbCA/IFwiXCIgOiBhci5zZXRfdXBkYXRlX3RpbWUpICsgXCIsXCI7XG4gICAgICAgIC8vIGxpc3QgPSBsaXN0ICsgKGFyLnRzX3VwZGF0ZV9kYXkgPT09IG51bGwgPyBcIlwiIDogYXIudHNfdXBkYXRlX2RheSkgKyBcIixcIjtcbiAgICAgICAgLy8gbGlzdCA9XG4gICAgICAgIC8vICAgbGlzdCArIChhci50c191cGRhdGVfdGltZSA9PT0gbnVsbCA/IFwiXCIgOiBhci50c191cGRhdGVfdGltZSkgKyBcIlxcblwiO1xuICAgICAgfSk7XG4gICAgICBsaXN0ID0gaWNvbnYuZW5jb2RlKGxpc3QsIFwiU2hpZnRfSklTXCIpO1xuICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbbGlzdF0sIHsgdHlwZTogXCJ0ZXh0L2NzdlwiIH0pO1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGxpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgbGV0IGRheSA9IGRheWpzKCkuZm9ybWF0KFwiWVlZWU1NRERISG1tc3NcIik7XG4gICAgICBsZXQgZGF5bnVtID0gTnVtYmVyKGRheSk7XG4gICAgICBsZXQgZGF5MTYgPSBkYXludW0udG9TdHJpbmcoMTYpO1xuICAgICAgbGV0IGNzdl9uYW1lID0gXCJUU0VfT1JERVJfTElTVF9cIiArIGRheTE2ICsgXCIuY3N2XCI7XG4gICAgICBsaW5rLmRvd25sb2FkID0gY3N2X25hbWU7XG4gICAgICBsaW5rLmNsaWNrKCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiNtYWluIHtcbiAgaDMge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICB0ZCB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cbn1cbi5vcmRlcl9jb2RlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmRldGFpbF9jb2RlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNvbnN0X2NvZGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5yZWNlcHRfY29kZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLnJlY2VwdF9uYW1lIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uY3VzdG9tZXIge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5vcmRlcl9udW0ge1xuICBmb250LXNpemU6IDFyZW07XG59XG4ubnl1a2FfbnVtIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm9yZGVyX3ByaWNlX29uZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5taW5pIHtcbiAgZm9udC1zaXplOiAwLjVyZW07XG59XG4udi1jaGlwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnYtY2hpcC52LWNoaXAudi1jaGlwLS1vdXRsaW5lIHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLnYtY2hpcC5idWhpbiB7XG4gIGJvcmRlci1jb2xvcjogIzRlMzQyZTtcbiAgY29sb3I6ICM0ZTM0MmU7XG59XG4udi1jaGlwLnNodXJpIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWY2YzAwO1xuICBjb2xvcjogI2VmNmMwMDtcbn1cbi52LWNoaXAuc2VpaGluIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjgzNTkzO1xuICBjb2xvcjogIzI4MzU5Mztcbn1cbi52LWNoaXAuZXRjIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmU3ZDMyO1xuICBjb2xvcjogIzJlN2QzMjtcbn1cbi52LWNoaXAuZW5vdWdoIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzc0NzRmO1xuICBjb2xvcjogIzM3NDc0Zjtcbn1cbi5tYWtlX3BkY3Qge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAmLm1ha2VkIHtcbiAgICBib3JkZXItY29sb3I6ICMyODM1OTM7XG4gICAgY29sb3I6ICMyODM1OTM7XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hY3Rpb25bZGF0YS12LTQ0NTE1ZGEwXSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmRhdGFfbGlzdFtkYXRhLXYtNDQ1MTVkYTBdIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZGF0YV9saXN0IHRkW2RhdGEtdi00NDUxNWRhMF0ge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW4gaDNbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4jbWFpbiBwW2RhdGEtdi00MTY4ZGQwNV0ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4jbWFpbiB0ZFtkYXRhLXYtNDE2OGRkMDVdIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5vcmRlcl9jb2RlW2RhdGEtdi00MTY4ZGQwNV0ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZGV0YWlsX2NvZGVbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5jb25zdF9jb2RlW2RhdGEtdi00MTY4ZGQwNV0ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5yZWNlcHRfY29kZVtkYXRhLXYtNDE2OGRkMDVdIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4ucmVjZXB0X25hbWVbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLmN1c3RvbWVyW2RhdGEtdi00MTY4ZGQwNV0ge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcbi5vcmRlcl9udW1bZGF0YS12LTQxNjhkZDA1XSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5ueXVrYV9udW1bZGF0YS12LTQxNjhkZDA1XSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5vcmRlcl9wcmljZV9vbmVbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5taW5pW2RhdGEtdi00MTY4ZGQwNV0ge1xcbiAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcbi52LWNoaXBbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnYtY2hpcC52LWNoaXAudi1jaGlwLS1vdXRsaW5lW2RhdGEtdi00MTY4ZGQwNV0ge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG4udi1jaGlwLmJ1aGluW2RhdGEtdi00MTY4ZGQwNV0ge1xcbiAgYm9yZGVyLWNvbG9yOiAjNGUzNDJlO1xcbiAgY29sb3I6ICM0ZTM0MmU7XFxufVxcbi52LWNoaXAuc2h1cmlbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBib3JkZXItY29sb3I6ICNlZjZjMDA7XFxuICBjb2xvcjogI2VmNmMwMDtcXG59XFxuLnYtY2hpcC5zZWloaW5bZGF0YS12LTQxNjhkZDA1XSB7XFxuICBib3JkZXItY29sb3I6ICMyODM1OTM7XFxuICBjb2xvcjogIzI4MzU5MztcXG59XFxuLnYtY2hpcC5ldGNbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBib3JkZXItY29sb3I6ICMyZTdkMzI7XFxuICBjb2xvcjogIzJlN2QzMjtcXG59XFxuLnYtY2hpcC5lbm91Z2hbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBib3JkZXItY29sb3I6ICMzNzQ3NGY7XFxuICBjb2xvcjogIzM3NDc0ZjtcXG59XFxuLm1ha2VfcGRjdFtkYXRhLXYtNDE2OGRkMDVdIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5tYWtlX3BkY3QubWFrZWRbZGF0YS12LTQxNjhkZDA1XSB7XFxuICBib3JkZXItY29sb3I6ICMyODM1OTM7XFxuICBjb2xvcjogIzI4MzU5MztcXG59XCIsIFwiXCJdKTtcblxuIiwiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6dC5kYXlqcz1uKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cIm1pbGxpc2Vjb25kXCIsbj1cInNlY29uZFwiLGU9XCJtaW51dGVcIixyPVwiaG91clwiLGk9XCJkYXlcIixzPVwid2Vla1wiLHU9XCJtb250aFwiLG89XCJxdWFydGVyXCIsYT1cInllYXJcIixoPS9eKFxcZHs0fSktPyhcXGR7MSwyfSktPyhcXGR7MCwyfSlbXjAtOV0qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPy4/KFxcZHsxLDN9KT8kLyxmPS9cXFsoW15cXF1dKyldfFl7Miw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxjPWZ1bmN0aW9uKHQsbixlKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1uP3Q6XCJcIitBcnJheShuKzEtci5sZW5ndGgpLmpvaW4oZSkrdH0sZD17czpjLHo6ZnVuY3Rpb24odCl7dmFyIG49LXQudXRjT2Zmc2V0KCksZT1NYXRoLmFicyhuKSxyPU1hdGguZmxvb3IoZS82MCksaT1lJTYwO3JldHVybihuPD0wP1wiK1wiOlwiLVwiKStjKHIsMixcIjBcIikrXCI6XCIrYyhpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uKHQsbil7dmFyIGU9MTIqKG4ueWVhcigpLXQueWVhcigpKSsobi5tb250aCgpLXQubW9udGgoKSkscj10LmNsb25lKCkuYWRkKGUsdSksaT1uLXI8MCxzPXQuY2xvbmUoKS5hZGQoZSsoaT8tMToxKSx1KTtyZXR1cm4gTnVtYmVyKC0oZSsobi1yKS8oaT9yLXM6cy1yKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24oaCl7cmV0dXJue006dSx5OmEsdzpzLGQ6aSxoOnIsbTplLHM6bixtczp0LFE6b31baF18fFN0cmluZyhofHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LCQ9e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbD1cImVuXCIsbT17fTttW2xdPSQ7dmFyIHk9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiB2fSxNPWZ1bmN0aW9uKHQsbixlKXt2YXIgcjtpZighdClyZXR1cm4gbDtpZihcInN0cmluZ1wiPT10eXBlb2YgdCltW3RdJiYocj10KSxuJiYobVt0XT1uLHI9dCk7ZWxzZXt2YXIgaT10Lm5hbWU7bVtpXT10LHI9aX1yZXR1cm4gZXx8KGw9cikscn0sZz1mdW5jdGlvbih0LG4sZSl7aWYoeSh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciByPW4/XCJzdHJpbmdcIj09dHlwZW9mIG4/e2Zvcm1hdDpuLHBsOmV9Om46e307cmV0dXJuIHIuZGF0ZT10LG5ldyB2KHIpfSxEPWQ7RC5sPU0sRC5pPXksRC53PWZ1bmN0aW9uKHQsbil7cmV0dXJuIGcodCx7bG9jYWxlOm4uJEwsdXRjOm4uJHV9KX07dmFyIHY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBjKHQpe3RoaXMuJEw9dGhpcy4kTHx8TSh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBkPWMucHJvdG90eXBlO3JldHVybiBkLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIG49dC5kYXRlLGU9dC51dGM7aWYobnVsbD09PW4pcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoRC51KG4pKXJldHVybiBuZXcgRGF0ZTtpZihuIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUobik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4mJiEvWiQvaS50ZXN0KG4pKXt2YXIgcj1uLm1hdGNoKGgpO2lmKHIpcmV0dXJuIGU/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxyWzJdLTEsclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxyWzddfHwwKSk6bmV3IERhdGUoclsxXSxyWzJdLTEsclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxyWzddfHwwKX1yZXR1cm4gbmV3IERhdGUobil9KHQpLHRoaXMuaW5pdCgpfSxkLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxkLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBEfSxkLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKFwiSW52YWxpZCBEYXRlXCI9PT10aGlzLiRkLnRvU3RyaW5nKCkpfSxkLmlzU2FtZT1mdW5jdGlvbih0LG4pe3ZhciBlPWcodCk7cmV0dXJuIHRoaXMuc3RhcnRPZihuKTw9ZSYmZTw9dGhpcy5lbmRPZihuKX0sZC5pc0FmdGVyPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGcodCk8dGhpcy5zdGFydE9mKG4pfSxkLmlzQmVmb3JlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuZW5kT2Yobik8Zyh0KX0sZC4kZz1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIEQudSh0KT90aGlzW25dOnRoaXMuc2V0KGUsdCl9LGQueWVhcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJHlcIixhKX0sZC5tb250aD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJE1cIix1KX0sZC5kYXk9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRXXCIsaSl9LGQuZGF0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJERcIixcImRhdGVcIil9LGQuaG91cj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJEhcIixyKX0sZC5taW51dGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRtXCIsZSl9LGQuc2Vjb25kPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkc1wiLG4pfSxkLm1pbGxpc2Vjb25kPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLiRnKG4sXCIkbXNcIix0KX0sZC51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sZC52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxkLnN0YXJ0T2Y9ZnVuY3Rpb24odCxvKXt2YXIgaD10aGlzLGY9ISFELnUobyl8fG8sYz1ELnAodCksZD1mdW5jdGlvbih0LG4pe3ZhciBlPUQudyhoLiR1P0RhdGUuVVRDKGguJHksbix0KTpuZXcgRGF0ZShoLiR5LG4sdCksaCk7cmV0dXJuIGY/ZTplLmVuZE9mKGkpfSwkPWZ1bmN0aW9uKHQsbil7cmV0dXJuIEQudyhoLnRvRGF0ZSgpW3RdLmFwcGx5KGgudG9EYXRlKCksKGY/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShuKSksaCl9LGw9dGhpcy4kVyxtPXRoaXMuJE0seT10aGlzLiRELE09XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChjKXtjYXNlIGE6cmV0dXJuIGY/ZCgxLDApOmQoMzEsMTEpO2Nhc2UgdTpyZXR1cm4gZj9kKDEsbSk6ZCgwLG0rMSk7Y2FzZSBzOnZhciBnPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCx2PShsPGc/bCs3OmwpLWc7cmV0dXJuIGQoZj95LXY6eSsoNi12KSxtKTtjYXNlIGk6Y2FzZVwiZGF0ZVwiOnJldHVybiAkKE0rXCJIb3Vyc1wiLDApO2Nhc2UgcjpyZXR1cm4gJChNK1wiTWludXRlc1wiLDEpO2Nhc2UgZTpyZXR1cm4gJChNK1wiU2Vjb25kc1wiLDIpO2Nhc2UgbjpyZXR1cm4gJChNK1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sZC5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxkLiRzZXQ9ZnVuY3Rpb24ocyxvKXt2YXIgaCxmPUQucChzKSxjPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSxkPShoPXt9LGhbaV09YytcIkRhdGVcIixoLmRhdGU9YytcIkRhdGVcIixoW3VdPWMrXCJNb250aFwiLGhbYV09YytcIkZ1bGxZZWFyXCIsaFtyXT1jK1wiSG91cnNcIixoW2VdPWMrXCJNaW51dGVzXCIsaFtuXT1jK1wiU2Vjb25kc1wiLGhbdF09YytcIk1pbGxpc2Vjb25kc1wiLGgpW2ZdLCQ9Zj09PWk/dGhpcy4kRCsoby10aGlzLiRXKTpvO2lmKGY9PT11fHxmPT09YSl7dmFyIGw9dGhpcy5jbG9uZSgpLnNldChcImRhdGVcIiwxKTtsLiRkW2RdKCQpLGwuaW5pdCgpLHRoaXMuJGQ9bC5zZXQoXCJkYXRlXCIsTWF0aC5taW4odGhpcy4kRCxsLmRheXNJbk1vbnRoKCkpKS50b0RhdGUoKX1lbHNlIGQmJnRoaXMuJGRbZF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LGQuc2V0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsbil9LGQuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW0QucCh0KV0oKX0sZC5hZGQ9ZnVuY3Rpb24odCxvKXt2YXIgaCxmPXRoaXM7dD1OdW1iZXIodCk7dmFyIGM9RC5wKG8pLGQ9ZnVuY3Rpb24obil7dmFyIGU9ZyhmKTtyZXR1cm4gRC53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKG4qdCkpLGYpfTtpZihjPT09dSlyZXR1cm4gdGhpcy5zZXQodSx0aGlzLiRNK3QpO2lmKGM9PT1hKXJldHVybiB0aGlzLnNldChhLHRoaXMuJHkrdCk7aWYoYz09PWkpcmV0dXJuIGQoMSk7aWYoYz09PXMpcmV0dXJuIGQoNyk7dmFyICQ9KGg9e30saFtlXT02ZTQsaFtyXT0zNmU1LGhbbl09MWUzLGgpW2NdfHwxLGw9dGhpcy52YWx1ZU9mKCkrdCokO3JldHVybiBELncobCx0aGlzKX0sZC5zdWJ0cmFjdD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmFkZCgtMSp0LG4pfSxkLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgbj10aGlzO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm5cIkludmFsaWQgRGF0ZVwiO3ZhciBlPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixyPUQueih0aGlzKSxpPXRoaXMuJGxvY2FsZSgpLHM9dGhpcy4kSCx1PXRoaXMuJG0sbz10aGlzLiRNLGE9aS53ZWVrZGF5cyxoPWkubW9udGhzLGM9ZnVuY3Rpb24odCxyLGkscyl7cmV0dXJuIHQmJih0W3JdfHx0KG4sZSkpfHxpW3JdLnN1YnN0cigwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBELnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9aS5tZXJpZGllbXx8ZnVuY3Rpb24odCxuLGUpe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gZT9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTpvKzEsTU06RC5zKG8rMSwyLFwiMFwiKSxNTU06YyhpLm1vbnRoc1Nob3J0LG8saCwzKSxNTU1NOmhbb118fGgodGhpcyxlKSxEOnRoaXMuJEQsREQ6RC5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6YyhpLndlZWtkYXlzTWluLHRoaXMuJFcsYSwyKSxkZGQ6YyhpLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxhLDMpLGRkZGQ6YVt0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpELnMocywyLFwiMFwiKSxoOmQoMSksaGg6ZCgyKSxhOiQocyx1LCEwKSxBOiQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpELnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpELnModGhpcy4kcywyLFwiMFwiKSxTU1M6RC5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6cn07cmV0dXJuIGUucmVwbGFjZShmLGZ1bmN0aW9uKHQsbil7cmV0dXJuIG58fGxbdF18fHIucmVwbGFjZShcIjpcIixcIlwiKX0pfSxkLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxkLmRpZmY9ZnVuY3Rpb24odCxoLGYpe3ZhciBjLGQ9RC5wKGgpLCQ9Zyh0KSxsPTZlNCooJC51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSxtPXRoaXMtJCx5PUQubSh0aGlzLCQpO3JldHVybiB5PShjPXt9LGNbYV09eS8xMixjW3VdPXksY1tvXT15LzMsY1tzXT0obS1sKS82MDQ4ZTUsY1tpXT0obS1sKS84NjRlNSxjW3JdPW0vMzZlNSxjW2VdPW0vNmU0LGNbbl09bS8xZTMsYylbZF18fG0sZj95OkQuYSh5KX0sZC5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKHUpLiREfSxkLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gbVt0aGlzLiRMXX0sZC5sb2NhbGU9ZnVuY3Rpb24odCxuKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgZT10aGlzLmNsb25lKCk7cmV0dXJuIGUuJEw9TSh0LG4sITApLGV9LGQuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gRC53KHRoaXMudG9EYXRlKCksdGhpcyl9LGQudG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMuJGQpfSxkLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvSVNPU3RyaW5nKCl9LGQudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxkLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sY30oKTtyZXR1cm4gZy5wcm90b3R5cGU9di5wcm90b3R5cGUsZy5leHRlbmQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdChuLHYsZyksZ30sZy5sb2NhbGU9TSxnLmlzRGF5anM9eSxnLnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIGcoMWUzKnQpfSxnLmVuPW1bbF0sZy5Mcz1tLGd9KTtcbiIsIiFmdW5jdGlvbihlLF8pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPV8ocmVxdWlyZShcImRheWpzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImRheWpzXCJdLF8pOmUuZGF5anNfbG9jYWxlX2phPV8oZS5kYXlqcyl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZT1lJiZlLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKT9lLmRlZmF1bHQ6ZTt2YXIgXz17bmFtZTpcImphXCIsd2Vla2RheXM6XCLml6Xmm5zml6Vf5pyI5puc5pelX+eBq+abnOaXpV/msLTmm5zml6Vf5pyo5puc5pelX+mHkeabnOaXpV/lnJ/mm5zml6VcIi5zcGxpdChcIl9cIiksd2Vla2RheXNTaG9ydDpcIuaXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcn1wiLnNwbGl0KFwiX1wiKSx3ZWVrZGF5c01pbjpcIuaXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcn1wiLnNwbGl0KFwiX1wiKSxtb250aHM6XCIx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciFwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKGUpe3JldHVybiBlK1wi5pelXCJ9LGZvcm1hdHM6e0xUOlwiSEg6bW1cIixMVFM6XCJISDptbTpzc1wiLEw6XCJZWVlZL01NL0REXCIsTEw6XCJZWVlZ5bm0TeaciETml6VcIixMTEw6XCJZWVlZ5bm0TeaciETml6UgSEg6bW1cIixMTExMOlwiWVlZWeW5tE3mnIhE5pelIGRkZGQgSEg6bW1cIixsOlwiWVlZWS9NTS9ERFwiLGxsOlwiWVlZWeW5tE3mnIhE5pelXCIsbGxsOlwiWVlZWeW5tE3mnIhE5pelIEhIOm1tXCIsbGxsbDpcIllZWVnlubRN5pyIROaXpShkZGQpIEhIOm1tXCJ9LG1lcmlkaWVtOmZ1bmN0aW9uKGUpe3JldHVybiBlPDEyP1wi5Y2I5YmNXCI6XCLljYjlvoxcIn0scmVsYXRpdmVUaW1lOntmdXR1cmU6XCIlc+W+jFwiLHBhc3Q6XCIlc+WJjVwiLHM6XCLmlbDnp5JcIixtOlwiMeWIhlwiLG1tOlwiJWTliIZcIixoOlwiMeaZgumWk1wiLGhoOlwiJWTmmYLplpNcIixkOlwiMeaXpVwiLGRkOlwiJWTml6VcIixNOlwiMeODtuaciFwiLE1NOlwiJWTjg7bmnIhcIix5OlwiMeW5tFwiLHl5OlwiJWTlubRcIn19O3JldHVybiBlLmxvY2FsZShfLG51bGwsITApLF99KTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ha2VQZGN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0NTE1ZGEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWtlUGRjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NDUxNWRhMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ha2VQZGN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0NTE1ZGEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQxNjhkZDA1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MTY4ZGQwNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQxNjhkZDA1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jYXJkXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNoaXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiwgY29sb3I6IFwid2FybmluZ1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNwX2NsYXNzID0gIV92bS5zcF9jbGFzc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLljLrliIbvvJpcIiArIF92bS5fcyhfdm0ucF9jbGFzcykpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtY2hpcFwiLCB7IGF0dHJzOiB7IG91dGxpbmU6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuW9ouW8j++8mlwiICsgX3ZtLl9zKF92bS50YXJnZXQucmVjZXB0X2NvZGUpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LWNoaXBcIiwgeyBhdHRyczogeyBvdXRsaW5lOiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLlt6Xkuovnlarlj7fvvJpcIiArIF92bS5fcyhfdm0udGFyZ2V0LmNvbnN0X2NvZGUpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgd3JhcDogXCJcIixcbiAgICAgICAgICAgICAgICBcImFsaWduLXNwYWNlLWFyb3VuZFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwianVzdGlmeS1jZW50ZXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImZpbGwtaGVpZ2h0XCI6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInB0LTMgcGItM1wiLCBhdHRyczogeyB4czEwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi6KO96YCg44Kz44O844OJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJmYXMgZmEtc2l0ZW1hcFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb2RlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvZGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VGbGcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmFkaW9Hcm91cCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJhZGlvR3JvdXAgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJhZGlvR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3RzLCBmdW5jdGlvbihuLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBuLCB2YWx1ZTogaW5kZXggfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyaWdodFZpZXcgdGV4dC14cy1jZW50ZXJcIiwgYXR0cnM6IHsgeHM5OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0ucGRjdF9kYXRhID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sbG9yOiBcIndhcm5pbmdcIiwgb3V0bGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLoo73pgKDlrp/nuL7jgYzjgYLjgorjgb7jgZvjgpNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgW192bS5fdihcIuaXouWtmOijvemAoOODh+ODvOOCv1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGF0YV9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBsLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZUFkZEZsZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWRkX3BkY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFkZF9wZGN0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFkZF9wZGN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGRjdF9kYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBpdGVtLmNvbnN0X2NvZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uc3RhdHVzLnN0X3ZhbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucGRjdF9jbGFzcykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY29uc3RfY29kZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYW5jZWwoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1ha2VQZGN0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuS9nOaIkFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMjAwcHhcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiZGlhbG9nLXRyYW5zaXRpb25cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc3BfY2xhc3MsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zcF9jbGFzcyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3BfY2xhc3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlQ2xhc3MoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3BfZ3JvdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zcF9ncm91cCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3BfZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFtcIuijveWTgVwiLCBcIuS/rueQhlwiLCBcIumDqOWTgVwiLCBcIuOBneOBruS7llwiXSwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogbiwgdmFsdWU6IG4gfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1mb3JtXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ0eXV6YW5fdmlld19zZWxlY3RvclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwi5Y+X5rOo5Yy65YiGXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtbC0yXCIsIGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHhzMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi6YOo5ZOBXCIsIGNvbG9yOiBcImluZGlnb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtYWtlVmlldygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVjay5idWhpbixcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNoZWNrLCBcImJ1aGluXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrLmJ1aGluXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHhzMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi5L+u55CGXCIsIGNvbG9yOiBcImluZGlnb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtYWtlVmlldygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVjay5zaHVyaSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNoZWNrLCBcInNodXJpXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrLnNodXJpXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHhzMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi6KO95ZOBXCIsIGNvbG9yOiBcImluZGlnb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtYWtlVmlldygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVjay5zZWloaW4sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jaGVjaywgXCJzZWloaW5cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2suc2VpaGluXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHhzMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi5pyqXCIsIGNvbG9yOiBcImluZGlnb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtYWtlVmlldygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVjay5taSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNoZWNrLCBcIm1pXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrLm1pXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHhzMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi44Gd44Gu5LuWXCIsIGNvbG9yOiBcImluZGlnb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtYWtlVmlldygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVjay5ldGMsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jaGVjaywgXCJldGNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2suZXRjXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCLoo73pgKDjg4fjg7zjgr9cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1sLTJcIiwgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLkvZzmiJDmuIhcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbWFrZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2sucHJvLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY2hlY2ssIFwicHJvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrLnByb1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB4czM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIuacquS9nOaIkFwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtYWtlVmlldygpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVjay5ub3BybyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNoZWNrLCBcIm5vcHJvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrLm5vcHJvXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi01XCIsIGF0dHJzOiB7IFwiZ3JpZC1saXN0LXhzXCI6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgID8gX2MoXCJMb2FkaW5nXCIpXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuWPl+azqOODh+ODvOOCv1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInB0LTMgcGItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzODogXCJcIiwgXCJvZmZzZXQteHMxXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICDnt4/lj5fms6jph5HpoY3vvJpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcmljZV9hbGwudG9Mb2NhbGVTdHJpbmcoKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtaW5pXCIgfSwgW192bS5fdihcIsKlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czg6IFwiXCIsIFwib2Zmc2V0LXhzMVwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIlByaWNlSW5mb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwcmljZTogX3ZtLnByaWNlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3dpdGNoVmlld0N0cmxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2hlY2s6IF92bS5jaGVjayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmVtYWtlVmlldzogX3ZtLnJlbWFrZVZpZXcgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5qSc57SiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBcImZhcyBmYS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS52aWV3cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiOiBcIm9yZGVyX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvd3MtcGVyLXBhZ2UtaXRlbXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJBbGxcIiwgdmFsdWU6IC0xIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTpwYWdpbmF0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdpbmF0aW9uID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXdEZXRhaWwocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uYWRkQ2xhc3NDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLnJjcHRfY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb250aFNlbGVjdFZpZXcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLnltID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLlubTmnIhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5ydE1vbnRoKHByb3BzLml0ZW0ueW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNoaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5hZGRDbGFzc0NsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ucmNwdF9jbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLnJjcHRfY2xhc3MgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIuacqlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcHMuaXRlbS5yY3B0X2NsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ucGRjdF9pZCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWtlX3BkY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ0ZWFsIGRhcmtlbi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tYWtlUHJvZHVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLoo73pgKDjg4fjg7zjgr/kvZzmiJBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1ha2VfcGRjdCBtYWtlZCBtdC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubWFrZVByb2R1Y3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuijvemAoElE77yaXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3BzLml0ZW0ucGRjdF9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwib3JkZXJfY29kZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5vcmRlcl9jb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRldGFpbF9jb2RlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uZGV0YWlsX2NvZGUgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLml0ZW0uZGV0YWlsX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyZWNlcHRfY29kZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5yZWNlcHRfY29kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjdXN0b21lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uY3VzdG9tZXIgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcHMuaXRlbS5jdXN0b21lci5taW5TdHIoMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29uc3RfY29kZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5jb25zdF9jb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlY2VwdF9uYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ucmVjZXB0X25hbWUgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLml0ZW0ucmVjZXB0X25hbWUubWluU3RyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwib3JkZXJfbnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvcHMuaXRlbS5vcmRlcl9udW0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWluaVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRUFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLm55dWthX251bSAhPT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ubnl1a2FfbnVtICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibnl1a2FfbnVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ubnl1a2FfbnVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtaW5pXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIue0jeWFpea4iFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJvcmRlcl9wcmljZV9vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ub3JkZXJfcHJpY2Vfb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtaW5pXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiwqVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5kYXkzX25vbnl1X3NoaXRlaSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcHMuaXRlbS5kYXkzX25vbnl1X3NoaXRlaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5kYXk1bm9ueXVfeW90ZWkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLml0ZW0uZGF5NW5vbnl1X3lvdGVpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyOTBweFwiLFxuICAgICAgICAgICAgXCJtaW4td2lkdGhcIjogXCIyOTBweFwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJkaWFsb2ctdHJhbnNpdGlvblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb250aCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vbnRoID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb250aFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1vbnRoXCIsXG4gICAgICAgICAgICAgICAgXCJuby10aXRsZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBcImphLWpwXCIsXG4gICAgICAgICAgICAgICAgXCJkYXktZm9ybWF0XCI6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VNb250aChfdm0uZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIk9LXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiLCB0cmFuc2l0aW9uOiBcImRpYWxvZy10cmFuc2l0aW9uXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZXRhaWwsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZXRhaWwgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRldGFpbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmRldGFpbFxuICAgICAgICAgICAgPyBfYyhcIlJlY2VwdERldGFpbFwiLCB7IGF0dHJzOiB7IGl0ZW06IF92bS5pdGVtIH0gfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHNjcm9sbGFibGU6IFwiXCIsXG4gICAgICAgICAgICBcImhpZGUtb3ZlcmxheVwiOiBcIlwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjU1MHB4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1ha2UsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tYWtlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYWtlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0ubWFrZVxuICAgICAgICAgICAgPyBfYyhcIk1ha2VQZGN0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YXJnZXQ6IF92bS50YXJnZXQgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjcmVhdGVQZGN0OiBfdm0uY3JlYXRlUGRjdCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1ib3R0b20tbmF2XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZml4ZWQ6IFwiXCIsIHZhbHVlOiBcInZhbHVlXCIsIFwiYWN0aXZlLnN5bmNcIjogXCJ2YWx1ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRDc3YoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJHRVQgQ1NWXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYXMgZmEtZmlsZS1jc3ZcIildKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFrZVBkY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0NTE1ZGEwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01ha2VQZGN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFrZVBkY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL01ha2VQZGN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0NTE1ZGEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDQ1MTVkYTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZDYXJkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZEFjdGlvbnMgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDYXJkVGV4dCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNoaXAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDaGlwJztcbmltcG9ydCB7IFZEaWFsb2cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEaWFsb2cnO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZSYWRpbyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlJhZGlvR3JvdXAnO1xuaW1wb3J0IHsgVlJhZGlvR3JvdXAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZSYWRpb0dyb3VwJztcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUZXh0RmllbGQnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZDaGlwLFZEaWFsb2csVkZsZXgsVkxheW91dCxWUmFkaW8sVlJhZGlvR3JvdXAsVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NDUxNWRhMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NDUxNWRhMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NDUxNWRhMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFrZVBkY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0NTE1ZGEwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ0NTE1ZGEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZWNlcHRMaXN0L01ha2VQZGN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFrZVBkY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ha2VQZGN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFrZVBkY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDQ1MTVkYTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ha2VQZGN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0NTE1ZGEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWtlUGRjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDQ1MTVkYTAmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJpY2VJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJpY2VJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2Y1Y2YxYWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2Y1Y2YxYWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2Y1Y2YxYWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVjZXB0TGlzdC9QcmljZUluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmljZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByaWNlSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N3aXRjaFZpZXdDdHJsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYjA2MGU4MSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Td2l0Y2hWaWV3Q3RybC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N3aXRjaFZpZXdDdHJsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkNoZWNrYm94IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2hlY2tib3gnO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZGb3JtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WRm9ybSc7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQ2hlY2tib3gsVkZsZXgsVkZvcm0sVkxheW91dH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYjA2MGU4MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYjA2MGU4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYjA2MGU4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3dpdGNoVmlld0N0cmwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiMDYwZTgxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBiMDYwZTgxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9SZWNlcHRMaXN0L1N3aXRjaFZpZXdDdHJsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3dpdGNoVmlld0N0cmwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N3aXRjaFZpZXdDdHJsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2l0Y2hWaWV3Q3RybC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGIwNjBlODEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MTY4ZGQwNSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MTY4ZGQwNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQxNjhkZDA1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkFwcCc7XG5pbXBvcnQgeyBWQm90dG9tTmF2IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQm90dG9tTmF2JztcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkNoaXAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDaGlwJztcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZEYXRhVGFibGUgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEYXRhVGFibGUnO1xuaW1wb3J0IHsgVkRhdGVQaWNrZXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEYXRlUGlja2VyJztcbmltcG9ydCB7IFZEaWFsb2cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEaWFsb2cnO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dEZpZWxkJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBcHAsVkJvdHRvbU5hdixWQnRuLFZDaGlwLFZDb250YWluZXIsVkRhdGFUYWJsZSxWRGF0ZVBpY2tlcixWRGlhbG9nLFZGbGV4LFZJY29uLFZMYXlvdXQsVlNwYWNlcixWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQxNjhkZDA1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQxNjhkZDA1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQxNjhkZDA1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDE2OGRkMDUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDE2OGRkMDUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL1JlY2VwdExpc3QvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MTY4ZGQwNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDE2OGRkMDUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MTY4ZGQwNSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=
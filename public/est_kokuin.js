(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["est_kokuin"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["btn_nav"],
  data: function data() {
    return {
      activeBtn: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemData_bottomNavAndDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ItemData/bottomNavAndDialog */ "./resources/js/components/ItemData/bottomNavAndDialog.vue");
/* harmony import */ var babel_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-types */ "./node_modules/babel-types/lib/index.js");
/* harmony import */ var babel_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_types__WEBPACK_IMPORTED_MODULE_2__);


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    bottomNav: _ItemData_bottomNavAndDialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      btn_nav: {
        view: {
          shukei: false,
          henshu: false,
          ukeire: false
        },
        config: [{
          name: "申請",
          code: "shinsei",
          icon: "fas fa-pencil-alt"
        }, {
          name: "戻る",
          code: "back",
          icon: "fas fa-arrow-alt-circle-left" // {
          //   name: "履歴",
          //   code: "hist",
          //   icon: "fas fa-journal-whills"
          // }

        }]
      },
      check_list: {
        nomal: {
          title: {
            index: "NO.",
            chk_name: "点検項目",
            chk_how: "点検方法",
            chk_val: "判定"
          },
          val1: {
            index: "1",
            chk_name: "活字ホイール増し締め",
            chk_how: "付属スパナにて増し締めする（１回／月頭）",
            chk_val: null
          },
          val2: {
            index: "2",
            chk_name: "ファンモータ清掃",
            chk_how: "付属ハケにて清掃（ｴｱﾌﾞﾛｰ厳禁）",
            chk_val: null
          },
          val3: {
            index: "3",
            chk_name: "Ｙ軸テーブル点検",
            chk_how: "目視にて凹み、キズ等確認",
            chk_val: null
          }
        },
        error_flg: false,
        error_title: "",
        error_data_index: null,
        work_user: "未確認",
        error: {
          val1: {
            index: "1",
            chk_code: "er1",
            chk_name: "異常の詳細",
            chk_val: null
          },
          val2: {
            index: "2",
            chk_code: "er2",
            chk_name: "異常処置指示者",
            chk_val: null
          },
          val3: {
            index: "3",
            chk_code: "er3",
            chk_name: "処置の詳細を記入",
            chk_val: null
          },
          val4: {
            index: "4",
            chk_code: "er4",
            chk_name: "処置担当者",
            chk_val: null
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.preLoad();
  },
  created: function created() {},
  methods: {
    rt_check_rt: function rt_check_rt(val) {
      switch (val) {
        case "0":
          return false;

        case "1":
          return true;

        case "-":
          return null;
      }
    },
    rt_check: function rt_check(bool) {
      if (bool === "判定") return bool;
      var rtval = "-";
      if (bool === true) rtval = "OK";

      if (bool === false) {
        rtval = "NG";
      }

      return rtval;
    },
    ckeck_equip: function ckeck_equip(item) {
      var data = this.check_list;

      if (item.chk_val === null) {
        item.chk_val = true;
      } else if (item.chk_val === true) {
        Object.keys(data.nomal).forEach(function (key) {
          if (data.nomal[key].chk_val === false) data.nomal[key].chk_val = null;
        });
        item.chk_val = false;
        data.error_flg = true;
        data.error_title = item.chk_name;
      } else if (item.chk_val === false) {
        item.chk_val = null;
        data.error_flg = false;
      }
    },
    buttomMenu: function () {
      var _buttomMenu = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(val) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = val;
                _context.next = _context.t0 === "shinsei" ? 3 : _context.t0 === "back" ? 5 : 7;
                break;

              case 3:
                this.entryCheckDate();
                return _context.abrupt("break", 7);

              case 5:
                this.$router.push("/work/equipStartCheck");
                return _context.abrupt("break", 7);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function buttomMenu(_x) {
        return _buttomMenu.apply(this, arguments);
      }

      return buttomMenu;
    }(),
    entryCheckDate: function () {
      var _entryCheckDate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var comdata, workdata, errordata, dataindex, data, erdata;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                comdata = {
                  workday: this.get__hiduke(),
                  workcode: this.get__workcode(),
                  workuser: this.get__username()
                };
                workdata = [];
                errordata = [];
                dataindex = 0;
                data = this.check_list;
                erdata = this.check_list.error;
                Object.keys(data.nomal).forEach(function (key) {
                  if (key !== "title") {
                    workdata.push({
                      workday: comdata.workday,
                      workcode: comdata.workcode,
                      workuser: comdata.workuser,
                      code: key,
                      val: data.nomal[key].chk_val === null ? "-" : data.nomal[key].chk_val
                    });

                    if (data.nomal[key].chk_val === false) {
                      if (!erdata.val1.chk_val) {
                        alert("異常の詳細は入力必須項目です");
                        return;
                      }

                      errordata.push({
                        detail_error: erdata.val1.chk_val,
                        user_order: erdata.val2.chk_val === null ? "" : erdata.val2.chk_val,
                        user_work: erdata.val3.chk_val === null ? "" : erdata.val3.chk_val,
                        detail_action: erdata.val4.chk_val === null ? "" : erdata.val4.chk_val
                      });
                      data.error_data_index = dataindex;
                    }

                    dataindex = dataindex + 1;
                  }
                });
                _context2.next = 9;
                return axios.post("/checkdata", workdata).then(console.log("complete job:check data insert/update "))["catch"](function (error) {
                  var _error$response = error.response,
                      status = _error$response.status,
                      statusText = _error$response.statusText;
                  alert("データ処理エラー 処理を正常に完了できませんでした\n管理担当者を呼んでください\n\n" + "Error! post checkdata HTTP Status: ".concat(status, " ").concat(statusText));
                  return;
                });

              case 9:
                if (!(errordata.length !== 0)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 12;
                return axios.post("/checkdata/upid", workdata[data.error_data_index]).then(function (response) {
                  errordata[0].checkdata_id = response.data[0].checkdata_id;
                  console.log("complete job:get upid");
                })["catch"](function (error) {
                  var _error$response2 = error.response,
                      status = _error$response2.status,
                      statusText = _error$response2.statusText;
                  alert("データ処理エラー 処理を正常に完了できませんでした\n管理担当者を呼んでください\n\n" + "Error! post upid HTTP Status: ".concat(status, " ").concat(statusText));
                  return;
                });

              case 12:
                _context2.next = 14;
                return axios.post("/errordata", errordata[0]).then(console.log("complete job:error data insert/update "))["catch"](function (error) {
                  var _error$response3 = error.response,
                      status = _error$response3.status,
                      statusText = _error$response3.statusText;
                  alert("データ処理エラー 処理を正常に完了できませんでした\n管理担当者を呼んでください\n\n" + "Error! post errordata HTTP Status: ".concat(status, " ").concat(statusText));
                  return;
                });

              case 14:
                this.preLoad();

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function entryCheckDate() {
        return _entryCheckDate.apply(this, arguments);
      }

      return entryCheckDate;
    }(),
    preLoad: function () {
      var _preLoad = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var d, u, rt_func;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                d = this.check_list.nomal;
                u = this.check_list;
                rt_func = this.rt_check_rt;
                _context3.next = 5;
                return axios.get("/work/equipStartCheck/" + this.get__workcode() + "/" + this.get__hiduke()).then(function (response) {
                  if (response.data.length == 0) return;
                  response.data.forEach(function (arr, index) {
                    u.work_user = arr.workuser;
                    d[arr.code].chk_val = rt_func(arr.val);
                  });
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function preLoad() {
        return _preLoad.apply(this, arguments);
      }

      return preLoad;
    }()
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "li.infomation[data-v-2b2717b6] {\n  display: inline-block;\n  text-align: left;\n  width: 33%;\n}\nform.v-form[data-v-2b2717b6] {\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 3rem;\n  margin-bottom: 5rem;\n  color: chocolate;\n}", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=template&id=7f7b3c3e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=template&id=7f7b3c3e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-bottom-nav",
    {
      attrs: { fixed: "", active: _vm.activeBtn, value: true },
      on: {
        "update:active": function($event) {
          _vm.activeBtn = $event
        }
      }
    },
    _vm._l(_vm.btn_nav.config, function(item, index) {
      return _c(
        "v-btn",
        {
          key: index,
          attrs: { color: "primary", flat: "" },
          on: {
            click: function($event) {
              return _vm.$emit("pflag", item.code)
            }
          }
        },
        [
          _c("span", [_vm._v(_vm._s(item.name))]),
          _vm._v(" "),
          _c("v-icon", [_vm._v(_vm._s(item.icon))])
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=template&id=2b2717b6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=template&id=2b2717b6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { "grid-list-xs": "" } },
        [
          _c(
            "h1",
            { staticClass: "page-title" },
            [
              _c("v-icon", [_vm._v("fas fa-edit")]),
              _vm._v("刻印機 - 始業点検記録\n    ")
            ],
            1
          ),
          _vm._v(" "),
          _c("ul", [
            _c("li", { staticClass: "infomation" }, [
              _vm._v("\n        管理番号：\n        "),
              _c("span", { attrs: { id: "kanri-no" } }, [_vm._v("ＴＳ２−３９")])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "infomation" }, [
              _vm._v("\n        日付：\n        "),
              _c("span", { attrs: { id: "work-day" } }, [
                _vm._v(_vm._s(_vm.get__hiduke()))
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "infomation" }, [
              _vm._v("\n        作業者：\n        "),
              _c("span", { attrs: { id: "work-user" } }, [
                _vm._v(_vm._s(_vm.check_list.work_user))
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "table",
            { attrs: { id: "chk_info" } },
            _vm._l(_vm.check_list.nomal, function(item, index) {
              return _c(
                "tr",
                {
                  key: index,
                  on: {
                    click: function($event) {
                      return _vm.ckeck_equip(item)
                    }
                  }
                },
                [
                  _c("td", { staticClass: "index" }, [
                    _vm._v(_vm._s(item.index))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "chk_name" }, [
                    _vm._v(_vm._s(item.chk_name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "chk_how" }, [
                    _vm._v(_vm._s(item.chk_how))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "chk_val" }, [
                    _vm._v(_vm._s(_vm.rt_check(item.chk_val)))
                  ])
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _vm.check_list.error_flg
            ? _c(
                "v-form",
                [
                  _c("h3", [
                    _vm._v("不良項目：" + _vm._s(_vm.check_list.error_title))
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.check_list.error, function(item, index) {
                    return _c("v-text-field", {
                      key: index,
                      attrs: {
                        counter: 50,
                        label: item.chk_name,
                        required: ""
                      },
                      model: {
                        value: item.chk_val,
                        callback: function($$v) {
                          _vm.$set(item, "chk_val", $$v)
                        },
                        expression: "item.chk_val"
                      }
                    })
                  })
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c("bottomNav", {
            attrs: { btn_nav: _vm.btn_nav },
            on: { pflag: _vm.buttomMenu }
          })
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

/***/ "./resources/js/components/ItemData/bottomNavAndDialog.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ItemData/bottomNavAndDialog.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bottomNavAndDialog_vue_vue_type_template_id_7f7b3c3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottomNavAndDialog.vue?vue&type=template&id=7f7b3c3e& */ "./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=template&id=7f7b3c3e&");
/* harmony import */ var _bottomNavAndDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottomNavAndDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBottomNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBottomNav */ "./node_modules/vuetify/lib/components/VBottomNav/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bottomNavAndDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bottomNavAndDialog_vue_vue_type_template_id_7f7b3c3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bottomNavAndDialog_vue_vue_type_template_id_7f7b3c3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBottomNav: vuetify_lib_components_VBottomNav__WEBPACK_IMPORTED_MODULE_4__["VBottomNav"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemData/bottomNavAndDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottomNavAndDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./bottomNavAndDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottomNavAndDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=template&id=7f7b3c3e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=template&id=7f7b3c3e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottomNavAndDialog_vue_vue_type_template_id_7f7b3c3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./bottomNavAndDialog.vue?vue&type=template&id=7f7b3c3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/bottomNavAndDialog.vue?vue&type=template&id=7f7b3c3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottomNavAndDialog_vue_vue_type_template_id_7f7b3c3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bottomNavAndDialog_vue_vue_type_template_id_7f7b3c3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/equipStartCheck/estKokuin.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/equipStartCheck/estKokuin.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _estKokuin_vue_vue_type_template_id_2b2717b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estKokuin.vue?vue&type=template&id=2b2717b6&scoped=true& */ "./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=template&id=2b2717b6&scoped=true&");
/* harmony import */ var _estKokuin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estKokuin.vue?vue&type=script&lang=js& */ "./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _estKokuin_vue_vue_type_style_index_0_id_2b2717b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true& */ "./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _estKokuin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _estKokuin_vue_vue_type_template_id_2b2717b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _estKokuin_vue_vue_type_template_id_2b2717b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b2717b6",
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__["VApp"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/equipStartCheck/estKokuin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./estKokuin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_style_index_0_id_2b2717b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=style&index=0&id=2b2717b6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_style_index_0_id_2b2717b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_style_index_0_id_2b2717b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_style_index_0_id_2b2717b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_style_index_0_id_2b2717b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_style_index_0_id_2b2717b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=template&id=2b2717b6&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=template&id=2b2717b6&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_template_id_2b2717b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./estKokuin.vue?vue&type=template&id=2b2717b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/equipStartCheck/estKokuin.vue?vue&type=template&id=2b2717b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_template_id_2b2717b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_estKokuin_vue_vue_type_template_id_2b2717b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZXF1aXBTdGFydENoZWNrL2VzdEtva3Vpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZXF1aXBTdGFydENoZWNrL2VzdEtva3Vpbi52dWU/OTkxYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZT9jNzU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL2JvdHRvbU5hdkFuZERpYWxvZy52dWU/ODcxZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZT8xMzhlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL2JvdHRvbU5hdkFuZERpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZT9hMDJiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL2JvdHRvbU5hdkFuZERpYWxvZy52dWU/NjQ5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZT8zYWZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2VxdWlwU3RhcnRDaGVjay9lc3RLb2t1aW4udnVlPzk1MzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZXF1aXBTdGFydENoZWNrL2VzdEtva3Vpbi52dWU/ODA2YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNkJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFIQSxTQURBO0FBTUEsaUJBQ0E7QUFDQSxvQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQSxTQURBLEVBTUE7QUFDQSxvQkFEQTtBQUVBLHNCQUZBO0FBR0EsOENBSEEsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBLFNBTkE7QUFOQSxPQURBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsNEJBRkE7QUFHQSwyQkFIQTtBQUlBO0FBSkEsV0FEQTtBQU9BO0FBQ0Esc0JBREE7QUFFQSxrQ0FGQTtBQUdBLDJDQUhBO0FBSUE7QUFKQSxXQVBBO0FBYUE7QUFDQSxzQkFEQTtBQUVBLGdDQUZBO0FBR0EseUNBSEE7QUFJQTtBQUpBLFdBYkE7QUFtQkE7QUFDQSxzQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUNBSEE7QUFJQTtBQUpBO0FBbkJBLFNBREE7QUEyQkEsd0JBM0JBO0FBNEJBLHVCQTVCQTtBQTZCQSw4QkE3QkE7QUE4QkEsd0JBOUJBO0FBK0JBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDJCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBLFdBREE7QUFPQTtBQUNBLHNCQURBO0FBRUEsMkJBRkE7QUFHQSwrQkFIQTtBQUlBO0FBSkEsV0FQQTtBQWFBO0FBQ0Esc0JBREE7QUFFQSwyQkFGQTtBQUdBLGdDQUhBO0FBSUE7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O0FBQUE7QUFBQTtBQUF1ZixDQUFnQiw4ZUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImVzdF9rb2t1aW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWJvdHRvbS1uYXYgZml4ZWQgOmFjdGl2ZS5zeW5jPVwiYWN0aXZlQnRuXCIgOnZhbHVlPVwidHJ1ZVwiPlxuICAgIDx2LWJ0blxuICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGJ0bl9uYXYuY29uZmlnXCJcbiAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICB2LW9uOmNsaWNrPVwiJGVtaXQoJ3BmbGFnJywgaXRlbS5jb2RlKVwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgZmxhdFxuICAgID5cbiAgICAgIDxzcGFuPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cbiAgICAgIDx2LWljb24+e3sgaXRlbS5pY29uIH19PC92LWljb24+XG4gICAgPC92LWJ0bj5cbiAgPC92LWJvdHRvbS1uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiYnRuX25hdlwiXSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZUJ0bjogbnVsbFxuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDx2LWFwcD5cbiAgICA8di1jb250YWluZXIgZ3JpZC1saXN0LXhzPlxuICAgICAgPGgxIGNsYXNzPVwicGFnZS10aXRsZVwiPlxuICAgICAgICA8di1pY29uPmZhcyBmYS1lZGl0PC92LWljb24+5Yi75Y2w5qmfIC0g5aeL5qWt54K55qSc6KiY6YyyXG4gICAgICA8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3M9XCJpbmZvbWF0aW9uXCI+XG4gICAgICAgICAg566h55CG55Wq5Y+377yaXG4gICAgICAgICAgPHNwYW4gaWQ9XCJrYW5yaS1ub1wiPu+8tO+8s++8kuKIku+8k++8mTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaW5mb21hdGlvblwiPlxuICAgICAgICAgIOaXpeS7mO+8mlxuICAgICAgICAgIDxzcGFuIGlkPVwid29yay1kYXlcIj57eyBnZXRfX2hpZHVrZSgpIH19PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJpbmZvbWF0aW9uXCI+XG4gICAgICAgICAg5L2c5qWt6ICF77yaXG4gICAgICAgICAgPHNwYW4gaWQ9XCJ3b3JrLXVzZXJcIj57eyBjaGVja19saXN0LndvcmtfdXNlciB9fTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8dGFibGUgaWQ9XCJjaGtfaW5mb1wiPlxuICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNoZWNrX2xpc3Qubm9tYWxcIiA6a2V5PVwiaW5kZXhcIiBAY2xpY2s9XCJja2Vja19lcXVpcChpdGVtKVwiPlxuICAgICAgICAgIDx0ZCBjbGFzcz1cImluZGV4XCI+e3sgaXRlbS5pbmRleCB9fTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzPVwiY2hrX25hbWVcIj57eyBpdGVtLmNoa19uYW1lIH19PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJjaGtfaG93XCI+e3sgaXRlbS5jaGtfaG93IH19PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJjaGtfdmFsXCI+e3sgcnRfY2hlY2soaXRlbS5jaGtfdmFsKSB9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPHYtZm9ybSB2LWlmPVwiY2hlY2tfbGlzdC5lcnJvcl9mbGdcIj5cbiAgICAgICAgPGgzPuS4jeiJr+mgheebru+8mnt7IGNoZWNrX2xpc3QuZXJyb3JfdGl0bGUgfX08L2gzPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNoZWNrX2xpc3QuZXJyb3JcIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0uY2hrX3ZhbFwiXG4gICAgICAgICAgOmNvdW50ZXI9XCI1MFwiXG4gICAgICAgICAgOmxhYmVsPVwiaXRlbS5jaGtfbmFtZVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgPC92LWZvcm0+XG4gICAgICA8Ym90dG9tTmF2IDpidG5fbmF2PVwiYnRuX25hdlwiIHYtb246cGZsYWc9XCJidXR0b21NZW51XCI+PC9ib3R0b21OYXY+XG4gICAgPC92LWNvbnRhaW5lcj5cbiAgPC92LWFwcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYm90dG9tTmF2IGZyb20gXCIuLi9JdGVtRGF0YS9ib3R0b21OYXZBbmREaWFsb2dcIjtcbmltcG9ydCB7IGFzc2VydEV4cHJlc3Npb25TdGF0ZW1lbnQsIHN3aXRjaENhc2UgfSBmcm9tIFwiYmFiZWwtdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgYm90dG9tTmF2XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBidG5fbmF2OiB7XG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICBzaHVrZWk6IGZhbHNlLFxuICAgICAgICAgIGhlbnNodTogZmFsc2UsXG4gICAgICAgICAgdWtlaXJlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBjb25maWc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIueUs+iri1wiLFxuICAgICAgICAgICAgY29kZTogXCJzaGluc2VpXCIsXG4gICAgICAgICAgICBpY29uOiBcImZhcyBmYS1wZW5jaWwtYWx0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwi5oi744KLXCIsXG4gICAgICAgICAgICBjb2RlOiBcImJhY2tcIixcbiAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIG5hbWU6IFwi5bGl5q20XCIsXG4gICAgICAgICAgLy8gICBjb2RlOiBcImhpc3RcIixcbiAgICAgICAgICAvLyAgIGljb246IFwiZmFzIGZhLWpvdXJuYWwtd2hpbGxzXCJcbiAgICAgICAgICAvLyB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBjaGVja19saXN0OiB7XG4gICAgICAgIG5vbWFsOiB7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGluZGV4OiBcIk5PLlwiLFxuICAgICAgICAgICAgY2hrX25hbWU6IFwi54K55qSc6aCF55uuXCIsXG4gICAgICAgICAgICBjaGtfaG93OiBcIueCueaknOaWueazlVwiLFxuICAgICAgICAgICAgY2hrX3ZhbDogXCLliKTlrppcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsMToge1xuICAgICAgICAgICAgaW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgY2hrX25hbWU6IFwi5rS75a2X44Ob44Kk44O844Or5aKX44GX57eg44KBXCIsXG4gICAgICAgICAgICBjaGtfaG93OiBcIuS7mOWxnuOCueODkeODiuOBq+OBpuWil+OBl+e3oOOCgeOBmeOCi++8iO+8keWbnu+8j+aciOmgre+8iVwiLFxuICAgICAgICAgICAgY2hrX3ZhbDogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsMjoge1xuICAgICAgICAgICAgaW5kZXg6IFwiMlwiLFxuICAgICAgICAgICAgY2hrX25hbWU6IFwi44OV44Kh44Oz44Oi44O844K/5riF5o6DXCIsXG4gICAgICAgICAgICBjaGtfaG93OiBcIuS7mOWxnuODj+OCseOBq+OBpua4heaOg++8iO+9tO+9se++jO++nu++m++9sOWOs+emge+8iVwiLFxuICAgICAgICAgICAgY2hrX3ZhbDogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsMzoge1xuICAgICAgICAgICAgaW5kZXg6IFwiM1wiLFxuICAgICAgICAgICAgY2hrX25hbWU6IFwi77y56Lu444OG44O844OW44Or54K55qScXCIsXG4gICAgICAgICAgICBjaGtfaG93OiBcIuebruimluOBq+OBpuWHueOBv+OAgeOCreOCuuetieeiuuiqjVwiLFxuICAgICAgICAgICAgY2hrX3ZhbDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JfZmxnOiBmYWxzZSxcbiAgICAgICAgZXJyb3JfdGl0bGU6IFwiXCIsXG4gICAgICAgIGVycm9yX2RhdGFfaW5kZXg6IG51bGwsXG4gICAgICAgIHdvcmtfdXNlcjogXCLmnKrnorroqo1cIixcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICB2YWwxOiB7XG4gICAgICAgICAgICBpbmRleDogXCIxXCIsXG4gICAgICAgICAgICBjaGtfY29kZTogXCJlcjFcIixcbiAgICAgICAgICAgIGNoa19uYW1lOiBcIueVsOW4uOOBruips+e0sFwiLFxuICAgICAgICAgICAgY2hrX3ZhbDogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsMjoge1xuICAgICAgICAgICAgaW5kZXg6IFwiMlwiLFxuICAgICAgICAgICAgY2hrX2NvZGU6IFwiZXIyXCIsXG4gICAgICAgICAgICBjaGtfbmFtZTogXCLnlbDluLjlh6bnva7mjIfnpLrogIVcIixcbiAgICAgICAgICAgIGNoa192YWw6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbDM6IHtcbiAgICAgICAgICAgIGluZGV4OiBcIjNcIixcbiAgICAgICAgICAgIGNoa19jb2RlOiBcImVyM1wiLFxuICAgICAgICAgICAgY2hrX25hbWU6IFwi5Yem572u44Gu6Kmz57Sw44KS6KiY5YWlXCIsXG4gICAgICAgICAgICBjaGtfdmFsOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWw0OiB7XG4gICAgICAgICAgICBpbmRleDogXCI0XCIsXG4gICAgICAgICAgICBjaGtfY29kZTogXCJlcjRcIixcbiAgICAgICAgICAgIGNoa19uYW1lOiBcIuWHpue9ruaLheW9k+iAhVwiLFxuICAgICAgICAgICAgY2hrX3ZhbDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJlTG9hZCgpO1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHt9LFxuICBtZXRob2RzOiB7XG4gICAgcnRfY2hlY2tfcnQodmFsKSB7XG4gICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJ0X2NoZWNrKGJvb2wpIHtcbiAgICAgIGlmIChib29sID09PSBcIuWIpOWumlwiKSByZXR1cm4gYm9vbDtcbiAgICAgIGxldCBydHZhbCA9IFwiLVwiO1xuICAgICAgaWYgKGJvb2wgPT09IHRydWUpIHJ0dmFsID0gXCJPS1wiO1xuICAgICAgaWYgKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgIHJ0dmFsID0gXCJOR1wiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJ0dmFsO1xuICAgIH0sXG4gICAgY2tlY2tfZXF1aXAoaXRlbSkge1xuICAgICAgdmFyIGRhdGEgPSB0aGlzLmNoZWNrX2xpc3Q7XG4gICAgICBpZiAoaXRlbS5jaGtfdmFsID09PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uY2hrX3ZhbCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hrX3ZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLm5vbWFsKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIGlmIChkYXRhLm5vbWFsW2tleV0uY2hrX3ZhbCA9PT0gZmFsc2UpIGRhdGEubm9tYWxba2V5XS5jaGtfdmFsID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0uY2hrX3ZhbCA9IGZhbHNlO1xuICAgICAgICBkYXRhLmVycm9yX2ZsZyA9IHRydWU7XG4gICAgICAgIGRhdGEuZXJyb3JfdGl0bGUgPSBpdGVtLmNoa19uYW1lO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmNoa192YWwgPT09IGZhbHNlKSB7XG4gICAgICAgIGl0ZW0uY2hrX3ZhbCA9IG51bGw7XG4gICAgICAgIGRhdGEuZXJyb3JfZmxnID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBidXR0b21NZW51KHZhbCkge1xuICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgY2FzZSBcInNoaW5zZWlcIjpcbiAgICAgICAgICB0aGlzLmVudHJ5Q2hlY2tEYXRlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJiYWNrXCI6XG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvd29yay9lcXVpcFN0YXJ0Q2hlY2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBlbnRyeUNoZWNrRGF0ZSgpIHtcbiAgICAgIGNvbnN0IGNvbWRhdGEgPSB7XG4gICAgICAgIHdvcmtkYXk6IHRoaXMuZ2V0X19oaWR1a2UoKSxcbiAgICAgICAgd29ya2NvZGU6IHRoaXMuZ2V0X193b3JrY29kZSgpLFxuICAgICAgICB3b3JrdXNlcjogdGhpcy5nZXRfX3VzZXJuYW1lKClcbiAgICAgIH07XG4gICAgICBjb25zdCB3b3JrZGF0YSA9IFtdO1xuICAgICAgY29uc3QgZXJyb3JkYXRhID0gW107XG4gICAgICB2YXIgZGF0YWluZGV4ID0gMDtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5jaGVja19saXN0O1xuICAgICAgdmFyIGVyZGF0YSA9IHRoaXMuY2hlY2tfbGlzdC5lcnJvcjtcbiAgICAgIE9iamVjdC5rZXlzKGRhdGEubm9tYWwpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChrZXkgIT09IFwidGl0bGVcIikge1xuICAgICAgICAgIHdvcmtkYXRhLnB1c2goe1xuICAgICAgICAgICAgd29ya2RheTogY29tZGF0YS53b3JrZGF5LFxuICAgICAgICAgICAgd29ya2NvZGU6IGNvbWRhdGEud29ya2NvZGUsXG4gICAgICAgICAgICB3b3JrdXNlcjogY29tZGF0YS53b3JrdXNlcixcbiAgICAgICAgICAgIGNvZGU6IGtleSxcbiAgICAgICAgICAgIHZhbDpcbiAgICAgICAgICAgICAgZGF0YS5ub21hbFtrZXldLmNoa192YWwgPT09IG51bGwgPyBcIi1cIiA6IGRhdGEubm9tYWxba2V5XS5jaGtfdmFsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGRhdGEubm9tYWxba2V5XS5jaGtfdmFsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKCFlcmRhdGEudmFsMS5jaGtfdmFsKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KFwi55Ww5bi444Gu6Kmz57Sw44Gv5YWl5Yqb5b+F6aCI6aCF55uu44Gn44GZXCIpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvcmRhdGEucHVzaCh7XG4gICAgICAgICAgICAgIGRldGFpbF9lcnJvcjogZXJkYXRhLnZhbDEuY2hrX3ZhbCxcbiAgICAgICAgICAgICAgdXNlcl9vcmRlcjpcbiAgICAgICAgICAgICAgICBlcmRhdGEudmFsMi5jaGtfdmFsID09PSBudWxsID8gXCJcIiA6IGVyZGF0YS52YWwyLmNoa192YWwsXG4gICAgICAgICAgICAgIHVzZXJfd29yazpcbiAgICAgICAgICAgICAgICBlcmRhdGEudmFsMy5jaGtfdmFsID09PSBudWxsID8gXCJcIiA6IGVyZGF0YS52YWwzLmNoa192YWwsXG4gICAgICAgICAgICAgIGRldGFpbF9hY3Rpb246XG4gICAgICAgICAgICAgICAgZXJkYXRhLnZhbDQuY2hrX3ZhbCA9PT0gbnVsbCA/IFwiXCIgOiBlcmRhdGEudmFsNC5jaGtfdmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEuZXJyb3JfZGF0YV9pbmRleCA9IGRhdGFpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YWluZGV4ID0gZGF0YWluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAucG9zdChcIi9jaGVja2RhdGFcIiwgd29ya2RhdGEpXG4gICAgICAgIC50aGVuKGNvbnNvbGUubG9nKFwiY29tcGxldGUgam9iOmNoZWNrIGRhdGEgaW5zZXJ0L3VwZGF0ZSBcIikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgXCLjg4fjg7zjgr/lh6bnkIbjgqjjg6njg7wg5Yem55CG44KS5q2j5bi444Gr5a6M5LqG44Gn44GN44G+44Gb44KT44Gn44GX44GfXFxu566h55CG5ouF5b2T6ICF44KS5ZG844KT44Gn44GP44Gg44GV44GEXFxuXFxuXCIgK1xuICAgICAgICAgICAgICBgRXJyb3IhIHBvc3QgY2hlY2tkYXRhIEhUVFAgU3RhdHVzOiAke3N0YXR1c30gJHtzdGF0dXNUZXh0fWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSk7XG4gICAgICBpZiAoZXJyb3JkYXRhLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBhd2FpdCBheGlvc1xuICAgICAgICAgIC5wb3N0KFwiL2NoZWNrZGF0YS91cGlkXCIsIHdvcmtkYXRhW2RhdGEuZXJyb3JfZGF0YV9pbmRleF0pXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZXJyb3JkYXRhWzBdLmNoZWNrZGF0YV9pZCA9IHJlc3BvbnNlLmRhdGFbMF0uY2hlY2tkYXRhX2lkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZSBqb2I6Z2V0IHVwaWRcIik7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgIFwi44OH44O844K/5Yem55CG44Ko44Op44O8IOWHpueQhuOCkuato+W4uOOBq+WujOS6huOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBn1xcbueuoeeQhuaLheW9k+iAheOCkuWRvOOCk+OBp+OBj+OBoOOBleOBhFxcblxcblwiICtcbiAgICAgICAgICAgICAgICBgRXJyb3IhIHBvc3QgdXBpZCBIVFRQIFN0YXR1czogJHtzdGF0dXN9ICR7c3RhdHVzVGV4dH1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgICAgLnBvc3QoXCIvZXJyb3JkYXRhXCIsIGVycm9yZGF0YVswXSlcbiAgICAgICAgICAudGhlbihjb25zb2xlLmxvZyhcImNvbXBsZXRlIGpvYjplcnJvciBkYXRhIGluc2VydC91cGRhdGUgXCIpKVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgc3RhdHVzVGV4dCB9ID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgXCLjg4fjg7zjgr/lh6bnkIbjgqjjg6njg7wg5Yem55CG44KS5q2j5bi444Gr5a6M5LqG44Gn44GN44G+44Gb44KT44Gn44GX44GfXFxu566h55CG5ouF5b2T6ICF44KS5ZG844KT44Gn44GP44Gg44GV44GEXFxuXFxuXCIgK1xuICAgICAgICAgICAgICAgIGBFcnJvciEgcG9zdCBlcnJvcmRhdGEgSFRUUCBTdGF0dXM6ICR7c3RhdHVzfSAke3N0YXR1c1RleHR9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlTG9hZCgpO1xuICAgIH0sXG4gICAgYXN5bmMgcHJlTG9hZCgpIHtcbiAgICAgIHZhciBkID0gdGhpcy5jaGVja19saXN0Lm5vbWFsO1xuICAgICAgdmFyIHUgPSB0aGlzLmNoZWNrX2xpc3Q7XG4gICAgICB2YXIgcnRfZnVuYyA9IHRoaXMucnRfY2hlY2tfcnQ7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KFxuICAgICAgICAgIFwiL3dvcmsvZXF1aXBTdGFydENoZWNrL1wiICtcbiAgICAgICAgICAgIHRoaXMuZ2V0X193b3JrY29kZSgpICtcbiAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgIHRoaXMuZ2V0X19oaWR1a2UoKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goKGFyciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHUud29ya191c2VyID0gYXJyLndvcmt1c2VyO1xuICAgICAgICAgICAgZFthcnIuY29kZV0uY2hrX3ZhbCA9IHJ0X2Z1bmMoYXJyLnZhbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5saS5pbmZvbWF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMzMlO1xufVxuZm9ybS52LWZvcm0ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpLmluZm9tYXRpb25bZGF0YS12LTJiMjcxN2I2XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDMzJTtcXG59XFxuZm9ybS52LWZvcm1bZGF0YS12LTJiMjcxN2I2XSB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIGNvbG9yOiBjaG9jb2xhdGU7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiMjcxN2I2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmIyNzE3YjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmIyNzE3YjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWJvdHRvbS1uYXZcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBmaXhlZDogXCJcIiwgYWN0aXZlOiBfdm0uYWN0aXZlQnRuLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJ1cGRhdGU6YWN0aXZlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5hY3RpdmVCdG4gPSAkZXZlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5idG5fbmF2LmNvbmZpZywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwicGZsYWdcIiwgaXRlbS5jb2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihfdm0uX3MoaXRlbS5pY29uKSldKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgeyBhdHRyczogeyBcImdyaWQtbGlzdC14c1wiOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlLXRpdGxlXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhcyBmYS1lZGl0XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIuWIu+WNsOapnyAtIOWni+alreeCueaknOiomOmMslxcbiAgICBcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9tYXRpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAg566h55CG55Wq5Y+377yaXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcImthbnJpLW5vXCIgfSB9LCBbX3ZtLl92KFwi77y077yz77yS4oiS77yT77yZXCIpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvbWF0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIOaXpeS7mO+8mlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJ3b3JrLWRheVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldF9faGlkdWtlKCkpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9tYXRpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAg5L2c5qWt6ICF77yaXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcIndvcmstdXNlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNoZWNrX2xpc3Qud29ya191c2VyKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaWQ6IFwiY2hrX2luZm9cIiB9IH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNoZWNrX2xpc3Qubm9tYWwsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNrZWNrX2VxdWlwKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJpbmRleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmluZGV4KSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjaGtfbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmNoa19uYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjaGtfaG93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uY2hrX2hvdykpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hrX3ZhbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucnRfY2hlY2soaXRlbS5jaGtfdmFsKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5jaGVja19saXN0LmVycm9yX2ZsZ1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuI3oia/poIXnm67vvJpcIiArIF92bS5fcyhfdm0uY2hlY2tfbGlzdC5lcnJvcl90aXRsZSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNoZWNrX2xpc3QuZXJyb3IsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5jaGtfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uY2hrX3ZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJjaGtfdmFsXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uY2hrX3ZhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYm90dG9tTmF2XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGJ0bl9uYXY6IF92bS5idG5fbmF2IH0sXG4gICAgICAgICAgICBvbjogeyBwZmxhZzogX3ZtLmJ1dHRvbU1lbnUgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjdiM2MzZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ib3R0b21OYXZBbmREaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ib3R0b21OYXZBbmREaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQm90dG9tTmF2IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQm90dG9tTmF2JztcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCdG4nO1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJY29uJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCb3R0b21OYXYsVkJ0bixWSWNvbn0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZjdiM2MzZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZjdiM2MzZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZjdiM2MzZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjdiM2MzZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZjdiM2MzZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ib3R0b21OYXZBbmREaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JvdHRvbU5hdkFuZERpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Y3YjNjM2UmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2VzdEtva3Vpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIyNzE3YjYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmIyNzE3YjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYjI3MTdiNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBcHAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBcHAnO1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkZvcm0gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZGb3JtJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dEZpZWxkJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBcHAsVkNvbnRhaW5lcixWRm9ybSxWSWNvbixWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJiMjcxN2I2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJiMjcxN2I2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJiMjcxN2I2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiMjcxN2I2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJiMjcxN2I2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmIyNzE3YjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VzdEtva3Vpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYjI3MTdiNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYjI3MTdiNiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=
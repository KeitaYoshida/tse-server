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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["btn_nav"]
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
    { attrs: { fixed: "", color: "transparent", value: true } },
    _vm._l(_vm.btn_nav.config, function(item, index) {
      return _c(
        "v-btn",
        {
          key: index,
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
    "v-container",
    { attrs: { "grid-list-xs": "" } },
    [
      _c(
        "h1",
        { staticClass: "page-title" },
        [
          _c("v-icon", [_vm._v("fas fa-edit")]),
          _vm._v("刻印機 - 始業点検記録\n  ")
        ],
        1
      ),
      _vm._v(" "),
      _c("ul", [
        _c("li", { staticClass: "infomation" }, [
          _vm._v("\n      管理番号：\n      "),
          _c("span", { attrs: { id: "kanri-no" } }, [_vm._v("ＴＳ２−３９")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "infomation" }, [
          _vm._v("\n      日付：\n      "),
          _c("span", { attrs: { id: "work-day" } }, [
            _vm._v(_vm._s(_vm.get__hiduke()))
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "infomation" }, [
          _vm._v("\n      作業者：\n      "),
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
              _c("td", { staticClass: "index" }, [_vm._v(_vm._s(item.index))]),
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
                  attrs: { counter: 50, label: item.chk_name, required: "" },
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
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





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




_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBottomNav: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBottomNav"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VIcon"]})


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
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






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





_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VForm: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VForm"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZXF1aXBTdGFydENoZWNrL2VzdEtva3Vpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZXF1aXBTdGFydENoZWNrL2VzdEtva3Vpbi52dWU/OTkxYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZT9jNzU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL2JvdHRvbU5hdkFuZERpYWxvZy52dWU/ODcxZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZT8xMzhlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL2JvdHRvbU5hdkFuZERpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZT9hMDJiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL2JvdHRvbU5hdkFuZERpYWxvZy52dWU/NjQ5NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9lcXVpcFN0YXJ0Q2hlY2svZXN0S29rdWluLnZ1ZT8zYWZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2VxdWlwU3RhcnRDaGVjay9lc3RLb2t1aW4udnVlPzk1MzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZXF1aXBTdGFydENoZWNrL2VzdEtva3Vpbi52dWU/ODA2YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBREEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNkJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFIQSxTQURBO0FBTUEsaUJBQ0E7QUFDQSxvQkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFIQSxTQURBLEVBTUE7QUFDQSxvQkFEQTtBQUVBLHNCQUZBO0FBR0EsOENBSEEsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBLFNBTkE7QUFOQSxPQURBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsNEJBRkE7QUFHQSwyQkFIQTtBQUlBO0FBSkEsV0FEQTtBQU9BO0FBQ0Esc0JBREE7QUFFQSxrQ0FGQTtBQUdBLDJDQUhBO0FBSUE7QUFKQSxXQVBBO0FBYUE7QUFDQSxzQkFEQTtBQUVBLGdDQUZBO0FBR0EseUNBSEE7QUFJQTtBQUpBLFdBYkE7QUFtQkE7QUFDQSxzQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUNBSEE7QUFJQTtBQUpBO0FBbkJBLFNBREE7QUEyQkEsd0JBM0JBO0FBNEJBLHVCQTVCQTtBQTZCQSw4QkE3QkE7QUE4QkEsd0JBOUJBO0FBK0JBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDJCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBLFdBREE7QUFPQTtBQUNBLHNCQURBO0FBRUEsMkJBRkE7QUFHQSwrQkFIQTtBQUlBO0FBSkEsV0FQQTtBQWFBO0FBQ0Esc0JBREE7QUFFQSwyQkFGQTtBQUdBLGdDQUhBO0FBSUE7QUFKQSxXQWJBO0FBbUJBO0FBQ0Esc0JBREE7QUFFQSwyQkFG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Z0IsMkdBQVU7QUFDMUIsRUFBRSx3RkFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ3dIO0FBQ2hGO0FBQ047QUFDQztBQUNuQyw4SEFBaUIsYUFBYSxrRUFBVSxDQUFDLHNEQUFJLENBQUMsd0RBQUssQ0FBQzs7O0FBR3BEO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUM5Q2Y7QUFBQTtBQUFBLHdDQUE4UCxDQUFnQix3U0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9HO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUc5RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ3dIO0FBQ2hGO0FBQ0w7QUFDQTtBQUNLO0FBQ3hDLDhIQUFpQixhQUFhLGtFQUFVLENBQUMsd0RBQUssQ0FBQyx3REFBSyxDQUFDLGtFQUFVLENBQUM7OztBQUdoRTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDaERmO0FBQUE7QUFBQSx3Q0FBcVAsQ0FBZ0IsK1JBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBelE7QUFBQTtBQUFBO0FBQUE7QUFBdWYsQ0FBZ0IsOGVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM2dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJlc3Rfa29rdWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1ib3R0b20tbmF2IGZpeGVkIGNvbG9yPVwidHJhbnNwYXJlbnRcIiA6dmFsdWU9XCJ0cnVlXCI+XG4gICAgPHYtYnRuXG4gICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gYnRuX25hdi5jb25maWdcIlxuICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgIHYtb246Y2xpY2s9XCIkZW1pdCgncGZsYWcnLCBpdGVtLmNvZGUpXCJcbiAgICA+XG4gICAgICA8c3Bhbj57eyBpdGVtLm5hbWUgfX08L3NwYW4+XG4gICAgICA8di1pY29uPnt7IGl0ZW0uaWNvbiB9fTwvdi1pY29uPlxuICAgIDwvdi1idG4+XG4gIDwvdi1ib3R0b20tbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcImJ0bl9uYXZcIl1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDx2LWNvbnRhaW5lciBncmlkLWxpc3QteHM+XG4gICAgPGgxIGNsYXNzPVwicGFnZS10aXRsZVwiPlxuICAgICAgPHYtaWNvbj5mYXMgZmEtZWRpdDwvdi1pY29uPuWIu+WNsOapnyAtIOWni+alreeCueaknOiomOmMslxuICAgIDwvaDE+XG4gICAgPHVsPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb21hdGlvblwiPlxuICAgICAgICDnrqHnkIbnlarlj7fvvJpcbiAgICAgICAgPHNwYW4gaWQ9XCJrYW5yaS1ub1wiPu+8tO+8s++8kuKIku+8k++8mTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvbWF0aW9uXCI+XG4gICAgICAgIOaXpeS7mO+8mlxuICAgICAgICA8c3BhbiBpZD1cIndvcmstZGF5XCI+e3sgZ2V0X19oaWR1a2UoKSB9fTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvbWF0aW9uXCI+XG4gICAgICAgIOS9nOalreiAhe+8mlxuICAgICAgICA8c3BhbiBpZD1cIndvcmstdXNlclwiPnt7IGNoZWNrX2xpc3Qud29ya191c2VyIH19PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDx0YWJsZSBpZD1cImNoa19pbmZvXCI+XG4gICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNoZWNrX2xpc3Qubm9tYWxcIiA6a2V5PVwiaW5kZXhcIiBAY2xpY2s9XCJja2Vja19lcXVpcChpdGVtKVwiPlxuICAgICAgICA8dGQgY2xhc3M9XCJpbmRleFwiPnt7IGl0ZW0uaW5kZXggfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJjaGtfbmFtZVwiPnt7IGl0ZW0uY2hrX25hbWUgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJjaGtfaG93XCI+e3sgaXRlbS5jaGtfaG93IH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiY2hrX3ZhbFwiPnt7IHJ0X2NoZWNrKGl0ZW0uY2hrX3ZhbCkgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDx2LWZvcm0gdi1pZj1cImNoZWNrX2xpc3QuZXJyb3JfZmxnXCI+XG4gICAgICA8aDM+5LiN6Imv6aCF55uu77yae3sgY2hlY2tfbGlzdC5lcnJvcl90aXRsZSB9fTwvaDM+XG4gICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjaGVja19saXN0LmVycm9yXCJcbiAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgdi1tb2RlbD1cIml0ZW0uY2hrX3ZhbFwiXG4gICAgICAgIDpjb3VudGVyPVwiNTBcIlxuICAgICAgICA6bGFiZWw9XCJpdGVtLmNoa19uYW1lXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICA8L3YtZm9ybT5cbiAgICA8Ym90dG9tTmF2IDpidG5fbmF2PVwiYnRuX25hdlwiIHYtb246cGZsYWc9XCJidXR0b21NZW51XCI+PC9ib3R0b21OYXY+XG4gIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGJvdHRvbU5hdiBmcm9tIFwiLi4vSXRlbURhdGEvYm90dG9tTmF2QW5kRGlhbG9nXCI7XG5pbXBvcnQgeyBhc3NlcnRFeHByZXNzaW9uU3RhdGVtZW50LCBzd2l0Y2hDYXNlIH0gZnJvbSBcImJhYmVsLXR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIGJvdHRvbU5hdlxuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnRuX25hdjoge1xuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgc2h1a2VpOiBmYWxzZSxcbiAgICAgICAgICBoZW5zaHU6IGZhbHNlLFxuICAgICAgICAgIHVrZWlyZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCLnlLPoq4tcIixcbiAgICAgICAgICAgIGNvZGU6IFwic2hpbnNlaVwiLFxuICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtcGVuY2lsLWFsdFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIuaIu+OCi1wiLFxuICAgICAgICAgICAgY29kZTogXCJiYWNrXCIsXG4gICAgICAgICAgICBpY29uOiBcImZhcyBmYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBuYW1lOiBcIuWxpeattFwiLFxuICAgICAgICAgIC8vICAgY29kZTogXCJoaXN0XCIsXG4gICAgICAgICAgLy8gICBpY29uOiBcImZhcyBmYS1qb3VybmFsLXdoaWxsc1wiXG4gICAgICAgICAgLy8gfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgY2hlY2tfbGlzdDoge1xuICAgICAgICBub21hbDoge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBpbmRleDogXCJOTy5cIixcbiAgICAgICAgICAgIGNoa19uYW1lOiBcIueCueaknOmgheebrlwiLFxuICAgICAgICAgICAgY2hrX2hvdzogXCLngrnmpJzmlrnms5VcIixcbiAgICAgICAgICAgIGNoa192YWw6IFwi5Yik5a6aXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbDE6IHtcbiAgICAgICAgICAgIGluZGV4OiBcIjFcIixcbiAgICAgICAgICAgIGNoa19uYW1lOiBcIua0u+Wtl+ODm+OCpOODvOODq+Wil+OBl+e3oOOCgVwiLFxuICAgICAgICAgICAgY2hrX2hvdzogXCLku5jlsZ7jgrnjg5Hjg4rjgavjgablopfjgZfnt6DjgoHjgZnjgovvvIjvvJHlm57vvI/mnIjpoK3vvIlcIixcbiAgICAgICAgICAgIGNoa192YWw6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbDI6IHtcbiAgICAgICAgICAgIGluZGV4OiBcIjJcIixcbiAgICAgICAgICAgIGNoa19uYW1lOiBcIuODleOCoeODs+ODouODvOOCv+a4heaOg1wiLFxuICAgICAgICAgICAgY2hrX2hvdzogXCLku5jlsZ7jg4/jgrHjgavjgabmuIXmjoPvvIjvvbTvvbHvvozvvp7vvpvvvbDljrPnpoHvvIlcIixcbiAgICAgICAgICAgIGNoa192YWw6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbDM6IHtcbiAgICAgICAgICAgIGluZGV4OiBcIjNcIixcbiAgICAgICAgICAgIGNoa19uYW1lOiBcIu+8uei7uOODhuODvOODluODq+eCueaknFwiLFxuICAgICAgICAgICAgY2hrX2hvdzogXCLnm67oppbjgavjgablh7njgb/jgIHjgq3jgrrnrYnnorroqo1cIixcbiAgICAgICAgICAgIGNoa192YWw6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yX2ZsZzogZmFsc2UsXG4gICAgICAgIGVycm9yX3RpdGxlOiBcIlwiLFxuICAgICAgICBlcnJvcl9kYXRhX2luZGV4OiBudWxsLFxuICAgICAgICB3b3JrX3VzZXI6IFwi5pyq56K66KqNXCIsXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgdmFsMToge1xuICAgICAgICAgICAgaW5kZXg6IFwiMVwiLFxuICAgICAgICAgICAgY2hrX2NvZGU6IFwiZXIxXCIsXG4gICAgICAgICAgICBjaGtfbmFtZTogXCLnlbDluLjjga7oqbPntLBcIixcbiAgICAgICAgICAgIGNoa192YWw6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHZhbDI6IHtcbiAgICAgICAgICAgIGluZGV4OiBcIjJcIixcbiAgICAgICAgICAgIGNoa19jb2RlOiBcImVyMlwiLFxuICAgICAgICAgICAgY2hrX25hbWU6IFwi55Ww5bi45Yem572u5oyH56S66ICFXCIsXG4gICAgICAgICAgICBjaGtfdmFsOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWwzOiB7XG4gICAgICAgICAgICBpbmRleDogXCIzXCIsXG4gICAgICAgICAgICBjaGtfY29kZTogXCJlcjNcIixcbiAgICAgICAgICAgIGNoa19uYW1lOiBcIuWHpue9ruOBruips+e0sOOCkuiomOWFpVwiLFxuICAgICAgICAgICAgY2hrX3ZhbDogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsNDoge1xuICAgICAgICAgICAgaW5kZXg6IFwiNFwiLFxuICAgICAgICAgICAgY2hrX2NvZGU6IFwiZXI0XCIsXG4gICAgICAgICAgICBjaGtfbmFtZTogXCLlh6bnva7mi4XlvZPogIVcIixcbiAgICAgICAgICAgIGNoa192YWw6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnByZUxvYWQoKTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7fSxcbiAgbWV0aG9kczoge1xuICAgIHJ0X2NoZWNrX3J0KHZhbCkge1xuICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBydF9jaGVjayhib29sKSB7XG4gICAgICBpZiAoYm9vbCA9PT0gXCLliKTlrppcIikgcmV0dXJuIGJvb2w7XG4gICAgICBsZXQgcnR2YWwgPSBcIi1cIjtcbiAgICAgIGlmIChib29sID09PSB0cnVlKSBydHZhbCA9IFwiT0tcIjtcbiAgICAgIGlmIChib29sID09PSBmYWxzZSkge1xuICAgICAgICBydHZhbCA9IFwiTkdcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBydHZhbDtcbiAgICB9LFxuICAgIGNrZWNrX2VxdWlwKGl0ZW0pIHtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5jaGVja19saXN0O1xuICAgICAgaWYgKGl0ZW0uY2hrX3ZhbCA9PT0gbnVsbCkge1xuICAgICAgICBpdGVtLmNoa192YWwgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLmNoa192YWwgPT09IHRydWUpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5ub21hbCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICBpZiAoZGF0YS5ub21hbFtrZXldLmNoa192YWwgPT09IGZhbHNlKSBkYXRhLm5vbWFsW2tleV0uY2hrX3ZhbCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLmNoa192YWwgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5lcnJvcl9mbGcgPSB0cnVlO1xuICAgICAgICBkYXRhLmVycm9yX3RpdGxlID0gaXRlbS5jaGtfbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGtfdmFsID09PSBmYWxzZSkge1xuICAgICAgICBpdGVtLmNoa192YWwgPSBudWxsO1xuICAgICAgICBkYXRhLmVycm9yX2ZsZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgYnV0dG9tTWVudSh2YWwpIHtcbiAgICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAgIGNhc2UgXCJzaGluc2VpXCI6XG4gICAgICAgICAgdGhpcy5lbnRyeUNoZWNrRGF0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYmFja1wiOlxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL3dvcmsvZXF1aXBTdGFydENoZWNrXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZW50cnlDaGVja0RhdGUoKSB7XG4gICAgICBjb25zdCBjb21kYXRhID0ge1xuICAgICAgICB3b3JrZGF5OiB0aGlzLmdldF9faGlkdWtlKCksXG4gICAgICAgIHdvcmtjb2RlOiB0aGlzLmdldF9fd29ya2NvZGUoKSxcbiAgICAgICAgd29ya3VzZXI6IHRoaXMuZ2V0X191c2VybmFtZSgpXG4gICAgICB9O1xuICAgICAgY29uc3Qgd29ya2RhdGEgPSBbXTtcbiAgICAgIGNvbnN0IGVycm9yZGF0YSA9IFtdO1xuICAgICAgdmFyIGRhdGFpbmRleCA9IDA7XG4gICAgICB2YXIgZGF0YSA9IHRoaXMuY2hlY2tfbGlzdDtcbiAgICAgIHZhciBlcmRhdGEgPSB0aGlzLmNoZWNrX2xpc3QuZXJyb3I7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhLm5vbWFsKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoa2V5ICE9PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICB3b3JrZGF0YS5wdXNoKHtcbiAgICAgICAgICAgIHdvcmtkYXk6IGNvbWRhdGEud29ya2RheSxcbiAgICAgICAgICAgIHdvcmtjb2RlOiBjb21kYXRhLndvcmtjb2RlLFxuICAgICAgICAgICAgd29ya3VzZXI6IGNvbWRhdGEud29ya3VzZXIsXG4gICAgICAgICAgICBjb2RlOiBrZXksXG4gICAgICAgICAgICB2YWw6XG4gICAgICAgICAgICAgIGRhdGEubm9tYWxba2V5XS5jaGtfdmFsID09PSBudWxsID8gXCItXCIgOiBkYXRhLm5vbWFsW2tleV0uY2hrX3ZhbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChkYXRhLm5vbWFsW2tleV0uY2hrX3ZhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICghZXJkYXRhLnZhbDEuY2hrX3ZhbCkge1xuICAgICAgICAgICAgICBhbGVydChcIueVsOW4uOOBruips+e0sOOBr+WFpeWKm+W/hemgiOmgheebruOBp+OBmVwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3JkYXRhLnB1c2goe1xuICAgICAgICAgICAgICBkZXRhaWxfZXJyb3I6IGVyZGF0YS52YWwxLmNoa192YWwsXG4gICAgICAgICAgICAgIHVzZXJfb3JkZXI6XG4gICAgICAgICAgICAgICAgZXJkYXRhLnZhbDIuY2hrX3ZhbCA9PT0gbnVsbCA/IFwiXCIgOiBlcmRhdGEudmFsMi5jaGtfdmFsLFxuICAgICAgICAgICAgICB1c2VyX3dvcms6XG4gICAgICAgICAgICAgICAgZXJkYXRhLnZhbDMuY2hrX3ZhbCA9PT0gbnVsbCA/IFwiXCIgOiBlcmRhdGEudmFsMy5jaGtfdmFsLFxuICAgICAgICAgICAgICBkZXRhaWxfYWN0aW9uOlxuICAgICAgICAgICAgICAgIGVyZGF0YS52YWw0LmNoa192YWwgPT09IG51bGwgPyBcIlwiIDogZXJkYXRhLnZhbDQuY2hrX3ZhbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRhLmVycm9yX2RhdGFfaW5kZXggPSBkYXRhaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFpbmRleCA9IGRhdGFpbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLnBvc3QoXCIvY2hlY2tkYXRhXCIsIHdvcmtkYXRhKVxuICAgICAgICAudGhlbihjb25zb2xlLmxvZyhcImNvbXBsZXRlIGpvYjpjaGVjayBkYXRhIGluc2VydC91cGRhdGUgXCIpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0gPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgIFwi44OH44O844K/5Yem55CG44Ko44Op44O8IOWHpueQhuOCkuato+W4uOOBq+WujOS6huOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBn1xcbueuoeeQhuaLheW9k+iAheOCkuWRvOOCk+OBp+OBj+OBoOOBleOBhFxcblxcblwiICtcbiAgICAgICAgICAgICAgYEVycm9yISBwb3N0IGNoZWNrZGF0YSBIVFRQIFN0YXR1czogJHtzdGF0dXN9ICR7c3RhdHVzVGV4dH1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgICAgaWYgKGVycm9yZGF0YS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgICAucG9zdChcIi9jaGVja2RhdGEvdXBpZFwiLCB3b3JrZGF0YVtkYXRhLmVycm9yX2RhdGFfaW5kZXhdKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGVycm9yZGF0YVswXS5jaGVja2RhdGFfaWQgPSByZXNwb25zZS5kYXRhWzBdLmNoZWNrZGF0YV9pZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGUgam9iOmdldCB1cGlkXCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0gPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICBcIuODh+ODvOOCv+WHpueQhuOCqOODqeODvCDlh6bnkIbjgpLmraPluLjjgavlrozkuobjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ9cXG7nrqHnkIbmi4XlvZPogIXjgpLlkbzjgpPjgafjgY/jgaDjgZXjgYRcXG5cXG5cIiArXG4gICAgICAgICAgICAgICAgYEVycm9yISBwb3N0IHVwaWQgSFRUUCBTdGF0dXM6ICR7c3RhdHVzfSAke3N0YXR1c1RleHR9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBheGlvc1xuICAgICAgICAgIC5wb3N0KFwiL2Vycm9yZGF0YVwiLCBlcnJvcmRhdGFbMF0pXG4gICAgICAgICAgLnRoZW4oY29uc29sZS5sb2coXCJjb21wbGV0ZSBqb2I6ZXJyb3IgZGF0YSBpbnNlcnQvdXBkYXRlIFwiKSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgIFwi44OH44O844K/5Yem55CG44Ko44Op44O8IOWHpueQhuOCkuato+W4uOOBq+WujOS6huOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBn1xcbueuoeeQhuaLheW9k+iAheOCkuWRvOOCk+OBp+OBj+OBoOOBleOBhFxcblxcblwiICtcbiAgICAgICAgICAgICAgICBgRXJyb3IhIHBvc3QgZXJyb3JkYXRhIEhUVFAgU3RhdHVzOiAke3N0YXR1c30gJHtzdGF0dXNUZXh0fWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByZUxvYWQoKTtcbiAgICB9LFxuICAgIGFzeW5jIHByZUxvYWQoKSB7XG4gICAgICB2YXIgZCA9IHRoaXMuY2hlY2tfbGlzdC5ub21hbDtcbiAgICAgIHZhciB1ID0gdGhpcy5jaGVja19saXN0O1xuICAgICAgdmFyIHJ0X2Z1bmMgPSB0aGlzLnJ0X2NoZWNrX3J0O1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBcIi93b3JrL2VxdWlwU3RhcnRDaGVjay9cIiArXG4gICAgICAgICAgICB0aGlzLmdldF9fd29ya2NvZGUoKSArXG4gICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICB0aGlzLmdldF9faGlkdWtlKClcbiAgICAgICAgKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChhcnIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB1LndvcmtfdXNlciA9IGFyci53b3JrdXNlcjtcbiAgICAgICAgICAgIGRbYXJyLmNvZGVdLmNoa192YWwgPSBydF9mdW5jKGFyci52YWwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxubGkuaW5mb21hdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDMzJTtcbn1cbmZvcm0udi1mb3JtIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIGNvbG9yOiBjaG9jb2xhdGU7XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaS5pbmZvbWF0aW9uW2RhdGEtdi0yYjI3MTdiNl0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAzMyU7XFxufVxcbmZvcm0udi1mb3JtW2RhdGEtdi0yYjI3MTdiNl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICBjb2xvcjogY2hvY29sYXRlO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VzdEtva3Vpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYjI3MTdiNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiMjcxN2I2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiMjcxN2I2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1ib3R0b20tbmF2XCIsXG4gICAgeyBhdHRyczogeyBmaXhlZDogXCJcIiwgY29sb3I6IFwidHJhbnNwYXJlbnRcIiwgdmFsdWU6IHRydWUgfSB9LFxuICAgIF92bS5fbChfdm0uYnRuX25hdi5jb25maWcsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInBmbGFnXCIsIGl0ZW0uY29kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uaWNvbikpXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH0pLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIHsgYXR0cnM6IHsgXCJncmlkLWxpc3QteHNcIjogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiaDFcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdlLXRpdGxlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYXMgZmEtZWRpdFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIuWIu+WNsOapnyAtIOWni+alreeCueaknOiomOmMslxcbiAgXCIpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvbWF0aW9uXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIOeuoeeQhueVquWPt++8mlxcbiAgICAgIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJrYW5yaS1ub1wiIH0gfSwgW192bS5fdihcIu+8tO+8s++8kuKIku+8k++8mVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb21hdGlvblwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICDml6Xku5jvvJpcXG4gICAgICBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwid29yay1kYXlcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldF9faGlkdWtlKCkpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb21hdGlvblwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICDkvZzmpa3ogIXvvJpcXG4gICAgICBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwid29yay11c2VyXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jaGVja19saXN0LndvcmtfdXNlcikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgaWQ6IFwiY2hrX2luZm9cIiB9IH0sXG4gICAgICAgIF92bS5fbChfdm0uY2hlY2tfbGlzdC5ub21hbCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5ja2Vja19lcXVpcChpdGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImluZGV4XCIgfSwgW192bS5fdihfdm0uX3MoaXRlbS5pbmRleCkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJjaGtfbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uY2hrX25hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNoa19ob3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmNoa19ob3cpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNoa192YWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucnRfY2hlY2soaXRlbS5jaGtfdmFsKSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uY2hlY2tfbGlzdC5lcnJvcl9mbGdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuS4jeiJr+mgheebru+8mlwiICsgX3ZtLl9zKF92bS5jaGVja19saXN0LmVycm9yX3RpdGxlKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY2hlY2tfbGlzdC5lcnJvciwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvdW50ZXI6IDUwLCBsYWJlbDogaXRlbS5jaGtfbmFtZSwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmNoa192YWwsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcImNoa192YWxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uY2hrX3ZhbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYm90dG9tTmF2XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgYnRuX25hdjogX3ZtLmJ0bl9uYXYgfSxcbiAgICAgICAgb246IHsgcGZsYWc6IF92bS5idXR0b21NZW51IH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2JvdHRvbU5hdkFuZERpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Y3YjNjM2UmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJvdHRvbU5hdiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCb3R0b21OYXYsVkJ0bixWSWNvbn0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2Y3YjNjM2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2Y3YjNjM2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2JvdHRvbU5hdkFuZERpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Y3YjNjM2UmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2Y3YjNjM2UnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL2JvdHRvbU5hdkFuZERpYWxvZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JvdHRvbU5hdkFuZERpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYm90dG9tTmF2QW5kRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ib3R0b21OYXZBbmREaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmN2IzYzNlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiMjcxN2I2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2VzdEtva3Vpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2VzdEtva3Vpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiMjcxN2I2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmIyNzE3YjZcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRm9ybSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZDb250YWluZXIsVkZvcm0sVkljb24sVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmIyNzE3YjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmIyNzE3YjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2VzdEtva3Vpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIyNzE3YjYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmIyNzE3YjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2VxdWlwU3RhcnRDaGVjay9lc3RLb2t1aW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VzdEtva3Vpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VzdEtva3Vpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYjI3MTdiNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXN0S29rdWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiMjcxN2I2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lc3RLb2t1aW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiMjcxN2I2JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==
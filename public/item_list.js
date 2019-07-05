(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item_list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_DataTableCommonSetting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/DataTableCommonSetting.js */ "./resources/js/mixins/DataTableCommonSetting.js");
/* harmony import */ var _item_item_qr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item/item_qr */ "./resources/js/components/item/item_qr.vue");
/* harmony import */ var _ItemList_QrButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemList/QrButton */ "./resources/js/components/ItemList/QrButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_DataTableCommonSetting_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    item_qr: _item_item_qr__WEBPACK_IMPORTED_MODULE_1__["default"],
    QrButton: _ItemList_QrButton__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      items: [],
      const_item_list: null,
      search: null,
      sheet: false,
      loading: true,
      setting: null,
      nodata: false,
      config: [],
      configs: [],
      output: null,
      a4: false
    };
  },
  created: function created() {
    var _this = this;

    if (this.dt_mix_com[this.$route.params.page_id] === undefined) {
      this.nodata = !this.nodata;
      return;
    }

    this.setting = Object.assign(this.dt_mix_com[this.$route.params.page_id], this.dt_mix_com.com);
    axios.get("/items/itemlist").then(function (response) {
      _this.items = response.data;
      _this.loading = false;
    })["catch"](function (error) {
      console.log("Error : " + error);
    });
  },
  methods: {
    addQrcode: function addQrcode(p) {
      var d = p.item;
      this.config.push({
        value: "http://192.168.13.103:8000/item/" + d.item_code + "/" + d.item_rev,
        id: d.item_code,
        name: d.item_name,
        model: d.item_model
      });
      this.configs = this.config.divide(10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList/QrButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemList/QrButton.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["rowdata"],
  data: function data() {
    return {
      num: 0
    };
  },
  created: function created() {},
  methods: {
    pCnt: function pCnt() {
      this.num = this.num + 1;
      this.$emit("act", this.rowdata);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MakeQR.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MakeQR.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_qriously__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-qriously */ "./node_modules/vue-qriously/dist/vue-qriously.js");
/* harmony import */ var vue_qriously__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_qriously__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_qriously__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: ["config"],
  name: "qrGenarate"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/item/item_qr.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MakeQR_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MakeQR.vue */ "./resources/js/components/MakeQR.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["qrlist", "config"],
  components: {
    makeQr: _MakeQR_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".qr-card[data-v-5a54e1c8] {\n  font-size: 10px;\n  text-align: center;\n  color: #000;\n}\n.qr-card li[data-v-5a54e1c8] {\n  list-style: none;\n}\n.qr-card table.qr-info[data-v-5a54e1c8] {\n  line-height: 1;\n  height: 53.2mm;\n  margin-left: 5mm;\n  margin-right: 5mm;\n  margin-top: 3mm;\n  margin-bottom: 3mm;\n}\n.qr-card table.qr-info .qrlist-list[data-v-5a54e1c8] {\n  height: 5mm;\n}\n.qr-card table.qr-info .qr-add[data-v-5a54e1c8] {\n  height: 24mm !important;\n}\n.qr-card table.qr-info td[data-v-5a54e1c8] {\n  border: 1px solid #000;\n}\n.qr-card table.qr-info td.qrlist-qr[data-v-5a54e1c8] {\n  padding: 0 !important;\n  margin: 0;\n}\n.qr-card table.qr-info td.title[data-v-5a54e1c8] {\n  height: 7mm;\n  border: 0;\n  font-size: 1.2rem !important;\n}\n.qr-card table.qr-info td[data-v-5a54e1c8]:nth-child(odd) {\n  width: 35%;\n}\n.qr-card table.qr-info td[data-v-5a54e1c8]:nth-child(even) {\n  width: 65%;\n  font-size: 1rem;\n}\n.qr-card table.qr-info td.qrlist-qr[data-v-5a54e1c8] {\n  border: 0;\n}\n.qr-card table.qr-info td.chk[data-v-5a54e1c8] {\n  border: 0;\n  font-size: 0.8rem;\n}\n.qr-card table.qr-info td.chk .layout[data-v-5a54e1c8] {\n  margin: 0;\n}\n.qr-card table.qr-info td.chk .layout .flex[data-v-5a54e1c8] {\n  height: 12mm;\n}\n.qr-card table.qr-info td.chk .layout .flex ul[data-v-5a54e1c8] {\n  padding: 0;\n  margin: 0;\n}\n.qr-card table.qr-info td.chk .layout .flex ul li[data-v-5a54e1c8] {\n  border: 1px solid #000;\n  height: 6mm;\n}\n.qr-card canvas[data-v-5a54e1c8] {\n  width: 100%;\n  height: auto;\n}", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=template&id=e04d3988&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemList.vue?vue&type=template&id=e04d3988&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "itemList" } },
    [
      !_vm.nodata
        ? _c(
            "v-container",
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "search",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
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
              _c("br"),
              _vm._v(" "),
              _c(
                "v-toolbar",
                { attrs: { color: "blue lighten-2", dark: "" } },
                [
                  _c("v-toolbar-title", [
                    _vm._v(_vm._s(_vm.setting.page_title))
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.a4 = !_vm.a4
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("far fa-sticky-note")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("QR FILE")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.sheet = !_vm.sheet
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("fas fa-question-circle")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("INFO")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                class: _vm.setting.page_class,
                attrs: {
                  headers: _vm.setting.headers,
                  items: _vm.items,
                  search: _vm.search,
                  "rows-per-page-items": _vm.setting.view_row_setting,
                  loading: _vm.loading
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "items",
                      fn: function(props) {
                        return [
                          _c("tr", [
                            _c("td", { staticClass: "text-xs-center" }, [
                              _vm._v(_vm._s(props.item.item_code))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-center" }, [
                              _vm._v(_vm._s(_vm.get__rev(props.item.item_rev)))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-center" }, [
                              _vm._v(_vm._s(props.item.item_name))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-center" }, [
                              _vm._v(_vm._s(props.item.item_model))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-center" }, [
                              _vm._v(
                                _vm._s(
                                  props.item.last_num === -1
                                    ? "未集計"
                                    : props.item.last_num
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass:
                                  "align-center justify-center layout px-0"
                              },
                              [
                                _c("QrButton", {
                                  attrs: { rowdata: props },
                                  on: { act: _vm.addQrcode }
                                }),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to:
                                        "/item/" +
                                        props.item.item_code +
                                        "/" +
                                        props.item.item_rev
                                    }
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass: "icon-edit",
                                        attrs: { color: "orange darken-1" }
                                      },
                                      [_vm._v("fas fa-edit")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  3604980418
                )
              }),
              _vm._v(" "),
              _c(
                "v-bottom-sheet",
                {
                  model: {
                    value: _vm.sheet,
                    callback: function($$v) {
                      _vm.sheet = $$v
                    },
                    expression: "sheet"
                  }
                },
                [
                  _c(
                    "v-list",
                    [
                      _c("v-subheader", [_vm._v("detail")]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("v-container", { attrs: { "grid-list-xs": "" } }, [
                        _vm._v(
                          "\n          手配工事を元に受入処理を行えます。対象の手配工事を選択すると手配一覧リストが表示されます。\n          表示されたリストより受け入れる部材をチェックし、画面下部の受入ボタンを押下してください。受入数量の変更がある場合は、リスト右部の編集コマンドを押してください。\n        "
                        )
                      ])
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
                    scrollable: "",
                    persistent: "",
                    fullscreen: "",
                    "hide-overlay": "",
                    transition: "dialog-bottom-transition"
                  },
                  model: {
                    value: _vm.a4,
                    callback: function($$v) {
                      _vm.a4 = $$v
                    },
                    expression: "a4"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { dark: "", color: "primary" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "", dark: "" },
                              on: {
                                click: function($event) {
                                  _vm.a4 = !_vm.a4
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("close")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-toolbar-title", [_vm._v("Settings")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-toolbar-items",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { dark: "", flat: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.print__pdf("makepdf")
                                    }
                                  }
                                },
                                [_vm._v("ＰＲＩＮＴ")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "a4-back" }, [
                        _c(
                          "div",
                          { staticClass: "a4-area", attrs: { id: "makepdf" } },
                          _vm._l(_vm.configs, function(row, rownum) {
                            return _c(
                              "div",
                              { key: rownum, staticClass: "a4" },
                              [
                                _c(
                                  "v-layout",
                                  {
                                    staticClass: "r2v5",
                                    attrs: {
                                      row: "",
                                      wrap: "",
                                      "align-start": ""
                                    }
                                  },
                                  _vm._l(row, function(item, index) {
                                    return _c(
                                      "v-flex",
                                      {
                                        key: index,
                                        staticClass: "qr-item",
                                        attrs: { xs6: "" }
                                      },
                                      [
                                        _c("item_qr", {
                                          attrs: { qrlist: item }
                                        })
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ])
                    ],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList/QrButton.vue?vue&type=template&id=1a8ab376&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemList/QrButton.vue?vue&type=template&id=1a8ab376& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.num === 0
    ? _c(
        "v-btn",
        {
          attrs: { icon: "", flat: "" },
          on: {
            click: function($event) {
              return _vm.pCnt()
            }
          }
        },
        [
          _c(
            "v-icon",
            { staticClass: "icon-qr", attrs: { color: "blue darken-1" } },
            [_vm._v("fas fa-qrcode")]
          )
        ],
        1
      )
    : _c(
        "v-btn",
        {
          attrs: { icon: "", flat: "" },
          on: {
            click: function($event) {
              return _vm.pCnt()
            }
          }
        },
        [
          _c(
            "v-badge",
            { attrs: { right: "", color: "primary" } },
            [
              _c("span", { attrs: { slot: "badge" }, slot: "badge" }, [
                _vm._v(_vm._s(_vm.num))
              ]),
              _vm._v(" "),
              _c(
                "v-icon",
                { staticClass: "icon-qr", attrs: { color: "blue darken-1" } },
                [_vm._v("fas fa-qrcode")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MakeQR.vue?vue&type=template&id=f6ebc98c&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MakeQR.vue?vue&type=template&id=f6ebc98c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("qriously", { attrs: { value: _vm.config } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "qr-card", attrs: { flat: "" } }, [
    _c("table", { staticClass: "qr-info" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("tr", { staticClass: "qrlist-list" }, [
        _c("td", [_vm._v("品番")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.qrlist.id))])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "qrlist-list" }, [
        _c("td", [_vm._v("品名")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.qrlist.name))])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "qrlist-list" }, [
        _c("td", [_vm._v("形式")]),
        _vm._v(" "),
        _c("td", [_vm._v(_vm._s(_vm.qrlist.model))])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("tr", { staticClass: "qr-add" }, [
        _c(
          "td",
          { staticClass: "qrlist-qr" },
          [_c("make-qr", { attrs: { config: _vm.qrlist.value } })],
          1
        ),
        _vm._v(" "),
        _c(
          "td",
          { staticClass: "chk" },
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              _vm._l(Array(12).keys(), function(item, index) {
                return _c("v-flex", { key: index, attrs: { xs2: "" } }, [
                  _c("ul", [
                    _c("li", [
                      _vm._v(
                        "\n                " +
                          _vm._s(item + 1) +
                          "\n                "
                      ),
                      _c("span", [_vm._v("月")])
                    ]),
                    _vm._v(" "),
                    _c("li", [_vm._v(" ")])
                  ])
                ])
              }),
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticClass: "title", attrs: { colspan: "2" } }, [
        _vm._v("部材識別標")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "qrlist-list" }, [
      _c("td", [_vm._v("管理")]),
      _vm._v(" "),
      _c("td", [_vm._v("資材 A棚 36-C")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ItemList.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/ItemList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemList_vue_vue_type_template_id_e04d3988_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemList.vue?vue&type=template&id=e04d3988&scoped=true& */ "./resources/js/components/ItemList.vue?vue&type=template&id=e04d3988&scoped=true&");
/* harmony import */ var _ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemList.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemList_vue_vue_type_template_id_e04d3988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemList_vue_vue_type_template_id_e04d3988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e04d3988",
  null
  
)

/* vuetify-loader */



















_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBottomSheet: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBottomSheet"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VDataTable: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VDataTable"],VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VDialog"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VLayout"],VList: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VList"],VSpacer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VSpacer"],VSubheader: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VSubheader"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VTextField"],VToolbar: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VToolbar"],VToolbarItems: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VToolbarItems"],VToolbarTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemList.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/ItemList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemList.vue?vue&type=template&id=e04d3988&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ItemList.vue?vue&type=template&id=e04d3988&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_template_id_e04d3988_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemList.vue?vue&type=template&id=e04d3988&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=template&id=e04d3988&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_template_id_e04d3988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_template_id_e04d3988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ItemList/QrButton.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ItemList/QrButton.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QrButton_vue_vue_type_template_id_1a8ab376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QrButton.vue?vue&type=template&id=1a8ab376& */ "./resources/js/components/ItemList/QrButton.vue?vue&type=template&id=1a8ab376&");
/* harmony import */ var _QrButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QrButton.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemList/QrButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QrButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QrButton_vue_vue_type_template_id_1a8ab376___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QrButton_vue_vue_type_template_id_1a8ab376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBadge: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBadge"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemList/QrButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemList/QrButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ItemList/QrButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QrButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./QrButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList/QrButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QrButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemList/QrButton.vue?vue&type=template&id=1a8ab376&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ItemList/QrButton.vue?vue&type=template&id=1a8ab376& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QrButton_vue_vue_type_template_id_1a8ab376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./QrButton.vue?vue&type=template&id=1a8ab376& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList/QrButton.vue?vue&type=template&id=1a8ab376&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QrButton_vue_vue_type_template_id_1a8ab376___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QrButton_vue_vue_type_template_id_1a8ab376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MakeQR.vue":
/*!********************************************!*\
  !*** ./resources/js/components/MakeQR.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MakeQR_vue_vue_type_template_id_f6ebc98c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MakeQR.vue?vue&type=template&id=f6ebc98c& */ "./resources/js/components/MakeQR.vue?vue&type=template&id=f6ebc98c&");
/* harmony import */ var _MakeQR_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MakeQR.vue?vue&type=script&lang=js& */ "./resources/js/components/MakeQR.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MakeQR_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MakeQR_vue_vue_type_template_id_f6ebc98c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MakeQR_vue_vue_type_template_id_f6ebc98c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MakeQR.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MakeQR.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/MakeQR.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeQR_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./MakeQR.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MakeQR.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeQR_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MakeQR.vue?vue&type=template&id=f6ebc98c&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/MakeQR.vue?vue&type=template&id=f6ebc98c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeQR_vue_vue_type_template_id_f6ebc98c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./MakeQR.vue?vue&type=template&id=f6ebc98c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MakeQR.vue?vue&type=template&id=f6ebc98c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeQR_vue_vue_type_template_id_f6ebc98c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MakeQR_vue_vue_type_template_id_f6ebc98c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/item/item_qr.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/item/item_qr.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_qr_vue_vue_type_template_id_5a54e1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item_qr.vue?vue&type=template&id=5a54e1c8&scoped=true& */ "./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&scoped=true&");
/* harmony import */ var _item_qr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item_qr.vue?vue&type=script&lang=js& */ "./resources/js/components/item/item_qr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _item_qr_vue_vue_type_style_index_0_id_5a54e1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true& */ "./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _item_qr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_qr_vue_vue_type_template_id_5a54e1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_qr_vue_vue_type_template_id_5a54e1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a54e1c8",
  null
  
)

/* vuetify-loader */



_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/item/item_qr.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/item/item_qr.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/item/item_qr.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./item_qr.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_id_5a54e1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&id=5a54e1c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_id_5a54e1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_id_5a54e1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_id_5a54e1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_id_5a54e1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_id_5a54e1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_template_id_5a54e1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./item_qr.vue?vue&type=template&id=5a54e1c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_template_id_5a54e1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_template_id_5a54e1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/DataTableCommonSetting.js":
/*!*******************************************************!*\
  !*** ./resources/js/mixins/DataTableCommonSetting.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _data_table_common_setting = {
  com: {
    page_title: '共通リストページ',
    page_class: 'com-data-table',
    info: null,
    view_row_setting: [5, 50, 100, {
      text: "$vuetify.dataIterator.rowsPerPageAll",
      value: -1
    }],
    no_data_text: "loading ... "
  },
  item_list: {
    page_title: '共通リストページ',
    headers: [{
      text: "品目コード",
      align: "center",
      value: "item_code"
    }, {
      text: "ＲＥＶ",
      align: "center",
      value: "item_rev"
    }, {
      text: "品名",
      align: "center",
      value: "item_name"
    }, {
      text: "型式",
      align: "center",
      value: "item_model"
    }, {
      text: "在庫数",
      align: "center",
      value: "last_num"
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dt_mix_com: _data_table_common_setting
    };
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01ha2VRUi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZT8yODcyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWU/NjRhOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC52dWU/MjhiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWU/NDQwMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlPzBlMjgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZT81NjViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC52dWU/YzM1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC52dWU/ZWU0MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QvUXJCdXR0b24udnVlPzAwODEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QvUXJCdXR0b24udnVlPzJmNDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFrZVFSLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlPzdjNDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFrZVFSLnZ1ZT9hZjZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZT8yZjNmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWU/ZmMyNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlPzBjZmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9EYXRhVGFibGVDb21tb25TZXR0aW5nLmpzIl0sIm5hbWVzIjpbIl9kYXRhX3RhYmxlX2NvbW1vbl9zZXR0aW5nIiwiY29tIiwicGFnZV90aXRsZSIsInBhZ2VfY2xhc3MiLCJpbmZvIiwidmlld19yb3dfc2V0dGluZyIsInRleHQiLCJ2YWx1ZSIsIm5vX2RhdGFfdGV4dCIsIml0ZW1fbGlzdCIsImhlYWRlcnMiLCJhbGlnbiIsImRhdGEiLCJkdF9taXhfY29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHFGQURBO0FBRUE7QUFDQSxrRUFEQTtBQUVBO0FBRkEsR0FGQTtBQU1BO0FBQ0E7QUFDQSxlQURBO0FBRUEsMkJBRkE7QUFHQSxrQkFIQTtBQUlBLGtCQUpBO0FBS0EsbUJBTEE7QUFNQSxtQkFOQTtBQU9BLG1CQVBBO0FBUUEsZ0JBUkE7QUFTQSxpQkFUQTtBQVVBLGtCQVZBO0FBV0E7QUFYQTtBQWFBLEdBcEJBO0FBcUJBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsaUNBQ0EsMkNBREEsRUFFQSxtQkFGQTtBQUlBLFVBQ0EsR0FEQSxDQUNBLGlCQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsV0FNQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLEdBdkNBO0FBd0NBO0FBQ0EsYUFEQSxxQkFDQSxDQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFDQSxtRUFGQTtBQUdBLHVCQUhBO0FBSUEseUJBSkE7QUFLQTtBQUxBO0FBT0E7QUFDQTtBQVhBO0FBeENBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FOQTtBQU9BLGdDQVBBO0FBUUE7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFSQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGdCQURBO0FBRUEsbUJBRkE7QUFHQTtBQUhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQ0E7QUFFQTtBQUNBLDZCQURBO0FBRUE7QUFDQTtBQURBO0FBRkEsRzs7Ozs7Ozs7Ozs7QUMvQ0EsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixvQkFBb0IsdUJBQXVCLGdCQUFnQixHQUFHLGdDQUFnQyxxQkFBcUIsR0FBRywyQ0FBMkMsbUJBQW1CLG1CQUFtQixxQkFBcUIsc0JBQXNCLG9CQUFvQix1QkFBdUIsR0FBRyx3REFBd0QsZ0JBQWdCLEdBQUcsbURBQW1ELDRCQUE0QixHQUFHLDhDQUE4QywyQkFBMkIsR0FBRyx3REFBd0QsMEJBQTBCLGNBQWMsR0FBRyxvREFBb0QsZ0JBQWdCLGNBQWMsaUNBQWlDLEdBQUcsNkRBQTZELGVBQWUsR0FBRyw4REFBOEQsZUFBZSxvQkFBb0IsR0FBRyx3REFBd0QsY0FBYyxHQUFHLGtEQUFrRCxjQUFjLHNCQUFzQixHQUFHLDBEQUEwRCxjQUFjLEdBQUcsZ0VBQWdFLGlCQUFpQixHQUFHLG1FQUFtRSxlQUFlLGNBQWMsR0FBRyxzRUFBc0UsMkJBQTJCLGdCQUFnQixHQUFHLG9DQUFvQyxnQkFBZ0IsaUJBQWlCLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDRDFpRCxjQUFjLG1CQUFPLENBQUMsdXhCQUFxYjs7QUFFM2MsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRHQUF5RDs7QUFFOUU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxpQkFBaUIsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9DQUFvQyxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9DQUFvQyxTQUFTLFdBQVcsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9DQUFvQyxTQUFTLFdBQVcsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQ0FBZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdDQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0NBQWdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQ0FBZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdDQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwwQ0FBMEMsaUJBQWlCO0FBQzNELHVDQUF1QztBQUN2QyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVMscUJBQXFCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLDZCQUE2QixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFCQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFpQyxnQkFBZ0IsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUNBQWlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQ0FBaUMseUJBQXlCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsOEJBQThCLEVBQUU7QUFDdEQ7QUFDQSwwQkFBMEIsU0FBUyxnQkFBZ0IsaUJBQWlCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUNBQWlDLHlCQUF5QixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsb0JBQW9CLEVBQUU7QUFDeEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQyxXQUFXLEVBQUU7QUFDbEUsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0EsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDLDBCQUEwQixTQUFTLDJCQUEyQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsb0JBQW9CLEVBQUU7QUFDOUM7QUFDQSxxQ0FBcUMscUJBQXFCLFVBQVUsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0JBQStCLGVBQWUsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRztBQUN2QztBQUNMOzs7QUFHdkQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUN3SDtBQUN0RjtBQUNRO0FBQ1I7QUFDQztBQUNJO0FBQ0M7QUFDQTtBQUNIO0FBQ0Y7QUFDQTtBQUNFO0FBQ0Y7QUFDRTtBQUNHO0FBQ0E7QUFDRjtBQUNLO0FBQ0E7QUFDM0MsOEhBQWlCLGFBQWEsc0RBQUksQ0FBQyxzRUFBWSxDQUFDLHNEQUFJLENBQUMsd0RBQUssQ0FBQyxnRUFBUyxDQUFDLGtFQUFVLENBQUMsa0VBQVUsQ0FBQyw0REFBTyxDQUFDLHdEQUFLLENBQUMsd0RBQUssQ0FBQyw0REFBTyxDQUFDLHdEQUFLLENBQUMsNERBQU8sQ0FBQyxrRUFBVSxDQUFDLGtFQUFVLENBQUMsOERBQVEsQ0FBQyx3RUFBYSxDQUFDLHdFQUFhLENBQUM7OztBQUdoTTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDN0RmO0FBQUE7QUFBQSx3Q0FBMk8sQ0FBZ0IsOFJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDd0g7QUFDcEY7QUFDRjtBQUNDO0FBQ25DLDhIQUFpQixhQUFhLDBEQUFNLENBQUMsc0RBQUksQ0FBQyx3REFBSyxDQUFDOzs7QUFHaEQ7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQzlDZjtBQUFBO0FBQUEsd0NBQW9QLENBQWdCLDhSQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXFGO0FBQzNCO0FBQ0w7OztBQUdyRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF5TyxDQUFnQiw0UkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3UDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUc1RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsOEZBQU07QUFDUixFQUFFLHVHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ3dIO0FBQ3JGO0FBQ0U7QUFDckMsOEhBQWlCLGFBQWEsd0RBQUssQ0FBQyw0REFBTyxDQUFDOzs7QUFHNUM7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQzlDZjtBQUFBO0FBQUEsd0NBQW1QLENBQWdCLDZSQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZRO0FBQUE7QUFBQTtBQUFBO0FBQXFmLENBQWdCLDRlQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBLElBQU1BLDBCQUEwQixHQUFHO0FBRWpDQyxLQUFHLEVBQUU7QUFDSEMsY0FBVSxFQUFFLFVBRFQ7QUFFSEMsY0FBVSxFQUFFLGdCQUZUO0FBR0hDLFFBQUksRUFBRSxJQUhIO0FBSUhDLG9CQUFnQixFQUFFLENBQ2hCLENBRGdCLEVBRWhCLEVBRmdCLEVBR2hCLEdBSGdCLEVBSWhCO0FBQ0VDLFVBQUksRUFBRSxzQ0FEUjtBQUVFQyxXQUFLLEVBQUUsQ0FBQztBQUZWLEtBSmdCLENBSmY7QUFhSEMsZ0JBQVksRUFBRTtBQWJYLEdBRjRCO0FBaUJqQ0MsV0FBUyxFQUFFO0FBQ1RQLGNBQVUsRUFBRSxVQURIO0FBRVRRLFdBQU8sRUFBRSxDQUFDO0FBQ1JKLFVBQUksRUFBRSxPQURFO0FBRVJLLFdBQUssRUFBRSxRQUZDO0FBR1JKLFdBQUssRUFBRTtBQUhDLEtBQUQsRUFLVDtBQUNFRCxVQUFJLEVBQUUsS0FEUjtBQUVFSyxXQUFLLEVBQUUsUUFGVDtBQUdFSixXQUFLLEVBQUU7QUFIVCxLQUxTLEVBVVQ7QUFDRUQsVUFBSSxFQUFFLElBRFI7QUFFRUssV0FBSyxFQUFFLFFBRlQ7QUFHRUosV0FBSyxFQUFFO0FBSFQsS0FWUyxFQWVUO0FBQ0VELFVBQUksRUFBRSxJQURSO0FBRUVLLFdBQUssRUFBRSxRQUZUO0FBR0VKLFdBQUssRUFBRTtBQUhULEtBZlMsRUFvQlQ7QUFDRUQsVUFBSSxFQUFFLEtBRFI7QUFFRUssV0FBSyxFQUFFLFFBRlQ7QUFHRUosV0FBSyxFQUFFO0FBSFQsS0FwQlM7QUFGQTtBQWpCc0IsQ0FBbkM7QUErQ2U7QUFDYkssTUFEYSxrQkFDTjtBQUNMLFdBQU87QUFDTEMsZ0JBQVUsRUFBRWI7QUFEUCxLQUFQO0FBR0Q7QUFMWSxDQUFmLEUiLCJmaWxlIjoiaXRlbV9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1hcHAgaWQ9XCJpdGVtTGlzdFwiPlxuICAgIDx2LWNvbnRhaW5lciB2LWlmPVwiIW5vZGF0YVwiPlxuICAgICAgPHYtdGV4dC1maWVsZCB2LW1vZGVsPVwic2VhcmNoXCIgYXBwZW5kLWljb249XCJzZWFyY2hcIiBsYWJlbD1cIlNlYXJjaFwiIHNpbmdsZS1saW5lIGhpZGUtZGV0YWlscz48L3YtdGV4dC1maWVsZD5cbiAgICAgIDxicj5cbiAgICAgIDx2LXRvb2xiYXIgY29sb3I9XCJibHVlIGxpZ2h0ZW4tMlwiIGRhcms+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGU+e3sgc2V0dGluZy5wYWdlX3RpdGxlIH19PC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICA8di1idG4gZmxhdCB2LW9uOmNsaWNrPVwiYTQgPSAhYTRcIj5cbiAgICAgICAgICA8di1pY29uIGxlZnQ+ZmFyIGZhLXN0aWNreS1ub3RlPC92LWljb24+XG4gICAgICAgICAgPHNwYW4+UVIgRklMRTwvc3Bhbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtYnRuIGZsYXQgdi1vbjpjbGljaz1cInNoZWV0ID0gIXNoZWV0XCI+XG4gICAgICAgICAgPHYtaWNvbiBsZWZ0PmZhcyBmYS1xdWVzdGlvbi1jaXJjbGU8L3YtaWNvbj5cbiAgICAgICAgICA8c3Bhbj5JTkZPPC9zcGFuPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgIDpoZWFkZXJzPVwic2V0dGluZy5oZWFkZXJzXCJcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcbiAgICAgICAgOnJvd3MtcGVyLXBhZ2UtaXRlbXM9XCJzZXR0aW5nLnZpZXdfcm93X3NldHRpbmdcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICA6Y2xhc3M9XCJzZXR0aW5nLnBhZ2VfY2xhc3NcIlxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW1zPVwicHJvcHNcIj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0uaXRlbV9jb2RlIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+e3sgZ2V0X19yZXYocHJvcHMuaXRlbS5pdGVtX3JldikgfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLml0ZW1fbmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0uaXRlbV9tb2RlbCB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0ubGFzdF9udW0gPT09IC0xID8gJ+acqumbhuioiCc6IHByb3BzLml0ZW0ubGFzdF9udW0gfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyIGxheW91dCBweC0wXCI+XG4gICAgICAgICAgICAgIDxRckJ1dHRvbiBAYWN0PVwiYWRkUXJjb2RlXCIgOnJvd2RhdGE9XCJwcm9wc1wiPjwvUXJCdXR0b24+XG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInL2l0ZW0vJyArIHByb3BzLml0ZW0uaXRlbV9jb2RlICsgJy8nICsgcHJvcHMuaXRlbS5pdGVtX3JldlwiPlxuICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJvcmFuZ2UgZGFya2VuLTFcIiBjbGFzcz1cImljb24tZWRpdFwiPmZhcyBmYS1lZGl0PC92LWljb24+XG4gICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwic2hlZXRcIj5cbiAgICAgICAgPHYtbGlzdD5cbiAgICAgICAgICA8di1zdWJoZWFkZXI+ZGV0YWlsPC92LXN1YmhlYWRlcj5cbiAgICAgICAgICA8aHI+XG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC14cz5cbiAgICAgICAgICAgIOaJi+mFjeW3peS6i+OCkuWFg+OBq+WPl+WFpeWHpueQhuOCkuihjOOBiOOBvuOBmeOAguWvvuixoeOBruaJi+mFjeW3peS6i+OCkumBuOaKnuOBmeOCi+OBqOaJi+mFjeS4gOimp+ODquOCueODiOOBjOihqOekuuOBleOCjOOBvuOBmeOAglxuICAgICAgICAgICAg6KGo56S644GV44KM44Gf44Oq44K544OI44KI44KK5Y+X44GR5YWl44KM44KL6YOo5p2Q44KS44OB44Kn44OD44Kv44GX44CB55S76Z2i5LiL6YOo44Gu5Y+X5YWl44Oc44K/44Oz44KS5oq85LiL44GX44Gm44GP44Gg44GV44GE44CC5Y+X5YWl5pWw6YeP44Gu5aSJ5pu044GM44GC44KL5aC05ZCI44Gv44CB44Oq44K544OI5Y+z6YOo44Gu57eo6ZuG44Kz44Oe44Oz44OJ44KS5oq844GX44Gm44GP44Gg44GV44GE44CCXG4gICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC92LWxpc3Q+XG4gICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgPHYtZGlhbG9nXG4gICAgICAgIHYtbW9kZWw9XCJhNFwiXG4gICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgcGVyc2lzdGVudFxuICAgICAgICBmdWxsc2NyZWVuXG4gICAgICAgIGhpZGUtb3ZlcmxheVxuICAgICAgICB0cmFuc2l0aW9uPVwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICA8di10b29sYmFyIGRhcmsgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8di1idG4gaWNvbiBkYXJrIEBjbGljaz1cImE0ID0gIWE0XCI+XG4gICAgICAgICAgICAgIDx2LWljb24+Y2xvc2U8L3YtaWNvbj5cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPlNldHRpbmdzPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgIDx2LXRvb2xiYXItaXRlbXM+XG4gICAgICAgICAgICAgIDx2LWJ0biBkYXJrIGZsYXQgQGNsaWNrPVwicHJpbnRfX3BkZignbWFrZXBkZicpXCI+77yw77yy77yp77yu77y0PC92LWJ0bj5cbiAgICAgICAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxuICAgICAgICAgIDwvdi10b29sYmFyPlxuICAgICAgICAgIDx2LWNhcmQtdGV4dCBjbGFzcz1cImE0LWJhY2tcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWtlcGRmXCIgY2xhc3M9XCJhNC1hcmVhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhNFwiIHYtZm9yPVwiKHJvdywgcm93bnVtKSBpbiBjb25maWdzXCIgOmtleT1cInJvd251bVwiPlxuICAgICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcCBhbGlnbi1zdGFydCBjbGFzcz1cInIydjVcIj5cbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHJvd1wiIHYtYmluZDprZXk9XCJpbmRleFwiIHhzNiBjbGFzcz1cInFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW1fcXIgOnFybGlzdD1cIml0ZW1cIj48L2l0ZW1fcXI+XG4gICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgPC92LWRpYWxvZz5cbiAgICA8L3YtY29udGFpbmVyPlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBtaXhfY29tIGZyb20gXCIuLi9taXhpbnMvRGF0YVRhYmxlQ29tbW9uU2V0dGluZy5qc1wiO1xuaW1wb3J0IGl0ZW1fcXIgZnJvbSBcIi4vaXRlbS9pdGVtX3FyXCI7XG5pbXBvcnQgUXJCdXR0b24gZnJvbSBcIi4vSXRlbUxpc3QvUXJCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFttaXhfY29tXSxcbiAgY29tcG9uZW50czoge1xuICAgIGl0ZW1fcXIsXG4gICAgUXJCdXR0b25cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIGNvbnN0X2l0ZW1fbGlzdDogbnVsbCxcbiAgICAgIHNlYXJjaDogbnVsbCxcbiAgICAgIHNoZWV0OiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBzZXR0aW5nOiBudWxsLFxuICAgICAgbm9kYXRhOiBmYWxzZSxcbiAgICAgIGNvbmZpZzogW10sXG4gICAgICBjb25maWdzOiBbXSxcbiAgICAgIG91dHB1dDogbnVsbCxcbiAgICAgIGE0OiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmR0X21peF9jb21bdGhpcy4kcm91dGUucGFyYW1zLnBhZ2VfaWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubm9kYXRhID0gIXRoaXMubm9kYXRhO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmcgPSBPYmplY3QuYXNzaWduKFxuICAgICAgdGhpcy5kdF9taXhfY29tW3RoaXMuJHJvdXRlLnBhcmFtcy5wYWdlX2lkXSxcbiAgICAgIHRoaXMuZHRfbWl4X2NvbS5jb21cbiAgICApO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2l0ZW1zL2l0ZW1saXN0XCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDogXCIgKyBlcnJvcik7XG4gICAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZFFyY29kZShwKSB7XG4gICAgICBsZXQgZCA9IHAuaXRlbTtcbiAgICAgIHRoaXMuY29uZmlnLnB1c2goe1xuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICBcImh0dHA6Ly8xOTIuMTY4LjEzLjEwMzo4MDAwL2l0ZW0vXCIgKyBkLml0ZW1fY29kZSArIFwiL1wiICsgZC5pdGVtX3JldixcbiAgICAgICAgaWQ6IGQuaXRlbV9jb2RlLFxuICAgICAgICBuYW1lOiBkLml0ZW1fbmFtZSxcbiAgICAgICAgbW9kZWw6IGQuaXRlbV9tb2RlbFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbmZpZ3MgPSB0aGlzLmNvbmZpZy5kaXZpZGUoMTApO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlID5cbiAgPHYtYnRuIGljb24gZmxhdCB2LWlmPVwibnVtPT09MFwiIEBjbGljaz1cInBDbnQoKVwiPlxuICAgIDx2LWljb24gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgY2xhc3M9XCJpY29uLXFyXCI+ZmFzIGZhLXFyY29kZTwvdi1pY29uPlxuICA8L3YtYnRuPlxuICA8di1idG4gaWNvbiBmbGF0IHYtZWxzZSBAY2xpY2s9XCJwQ250KClcIj5cbiAgICA8di1iYWRnZSByaWdodCBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgIDxzcGFuIHNsb3Q9XCJiYWRnZVwiPnt7IG51bSB9fTwvc3Bhbj5cbiAgICAgIDx2LWljb24gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgY2xhc3M9XCJpY29uLXFyXCI+ZmFzIGZhLXFyY29kZTwvdi1pY29uPlxuICAgIDwvdi1iYWRnZT5cbiAgPC92LWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJyb3dkYXRhXCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtOiAwXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7fSxcbiAgbWV0aG9kczoge1xuICAgIHBDbnQoKSB7XG4gICAgICB0aGlzLm51bSA9IHRoaXMubnVtICsgMTtcbiAgICAgIHRoaXMuJGVtaXQoXCJhY3RcIiwgdGhpcy5yb3dkYXRhKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxxcmlvdXNseSA6dmFsdWU9XCJjb25maWdcIi8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVnVlUXJpb3VzbHkgZnJvbSBcInZ1ZS1xcmlvdXNseVwiO1xuVnVlLnVzZShWdWVRcmlvdXNseSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge30sXG4gIHByb3BzOiBbXCJjb25maWdcIl0sXG4gIG5hbWU6IFwicXJHZW5hcmF0ZVwiXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgZmxhdCBjbGFzcz1cInFyLWNhcmRcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJxci1pbmZvXCI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiIGNsYXNzPVwidGl0bGVcIj7pg6jmnZDorZjliKXmqJk8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBjbGFzcz1cInFybGlzdC1saXN0XCI+XG4gICAgICAgIDx0ZD7lk4Hnlao8L3RkPlxuICAgICAgICA8dGQ+e3sgcXJsaXN0LmlkIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJxcmxpc3QtbGlzdFwiPlxuICAgICAgICA8dGQ+5ZOB5ZCNPC90ZD5cbiAgICAgICAgPHRkPnt7IHFybGlzdC5uYW1lIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJxcmxpc3QtbGlzdFwiPlxuICAgICAgICA8dGQ+5b2i5byPPC90ZD5cbiAgICAgICAgPHRkPnt7IHFybGlzdC5tb2RlbCB9fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyIGNsYXNzPVwicXJsaXN0LWxpc3RcIj5cbiAgICAgICAgPHRkPueuoeeQhjwvdGQ+XG4gICAgICAgIDx0ZD7os4fmnZAgQeajmiAzNi1DPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJxci1hZGRcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwicXJsaXN0LXFyXCI+XG4gICAgICAgICAgPG1ha2UtcXIgOmNvbmZpZz1cInFybGlzdC52YWx1ZVwiPjwvbWFrZS1xcj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiY2hrXCI+XG4gICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxuICAgICAgICAgICAgPHYtZmxleCB4czIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIEFycmF5KDEyKS5rZXlzKClcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0gKyAxIH19XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7mnIg8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Jm5ic3A7PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBtYWtlUXIgZnJvbSBcIi4uL01ha2VRUi52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wicXJsaXN0XCIsIFwiY29uZmlnXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgbWFrZVFyXG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5xci1jYXJkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICB0YWJsZS5xci1pbmZvIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBoZWlnaHQ6IDUzLjJtbTtcbiAgICBtYXJnaW4tbGVmdDogNW1tO1xuICAgIG1hcmdpbi1yaWdodDogNW1tO1xuICAgIG1hcmdpbi10b3A6IDNtbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzbW07XG4gICAgLnFybGlzdC1saXN0IHtcbiAgICAgIGhlaWdodDogNW1tO1xuICAgIH1cbiAgICAucXItYWRkIHtcbiAgICAgIGhlaWdodDogMjRtbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICB0ZCB7XG4gICAgICAmLnFybGlzdC1xciB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgJi50aXRsZSB7XG4gICAgICAgIGhlaWdodDogN21tO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgICAgJi5xcmxpc3QtcXIge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgICAmLmNoayB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAuZmxleCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEybW07XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2bW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5xci1jYXJkW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5xci1jYXJkIGxpW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mb1tkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgaGVpZ2h0OiA1My4ybW07XFxuICBtYXJnaW4tbGVmdDogNW1tO1xcbiAgbWFyZ2luLXJpZ2h0OiA1bW07XFxuICBtYXJnaW4tdG9wOiAzbW07XFxuICBtYXJnaW4tYm90dG9tOiAzbW07XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gLnFybGlzdC1saXN0W2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgaGVpZ2h0OiA1bW07XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gLnFyLWFkZFtkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGhlaWdodDogMjRtbSAhaW1wb3J0YW50O1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyB0ZC5xcmxpc3QtcXJbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGQudGl0bGVbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBoZWlnaHQ6IDdtbTtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGRbZGF0YS12LTVhNTRlMWM4XTpudGgtY2hpbGQob2RkKSB7XFxuICB3aWR0aDogMzUlO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkW2RhdGEtdi01YTU0ZTFjOF06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGQucXJsaXN0LXFyW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoa1tkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoayAubGF5b3V0W2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoayAubGF5b3V0IC5mbGV4W2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgaGVpZ2h0OiAxMm1tO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoayAubGF5b3V0IC5mbGV4IHVsW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyB0ZC5jaGsgLmxheW91dCAuZmxleCB1bCBsaVtkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDZtbTtcXG59XFxuLnFyLWNhcmQgY2FudmFzW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE1NGUxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiaXRlbUxpc3RcIiB9IH0sXG4gICAgW1xuICAgICAgIV92bS5ub2RhdGFcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBsaWdodGVuLTJcIiwgZGFyazogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zZXR0aW5nLnBhZ2VfdGl0bGUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hNCA9ICFfdm0uYTRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGxlZnQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJmYXIgZmEtc3RpY2t5LW5vdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUVIgRklMRVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hlZXQgPSAhX3ZtLnNoZWV0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBsZWZ0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJJTkZPXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZXR0aW5nLnBhZ2VfY2xhc3MsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5zZXR0aW5nLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLWl0ZW1zXCI6IF92bS5zZXR0aW5nLnZpZXdfcm93X3NldHRpbmcsXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLml0ZW1fY29kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRfX3Jldihwcm9wcy5pdGVtLml0ZW1fcmV2KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaXRlbV9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pdGVtX21vZGVsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ubGFzdF9udW0gPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi5pyq6ZuG6KiIXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcHMuaXRlbS5sYXN0X251bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGF5b3V0IHB4LTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJRckJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93ZGF0YTogcHJvcHMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBhY3Q6IF92bS5hZGRRcmNvZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2l0ZW0vXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaXRlbV9jb2RlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5pdGVtX3JldlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJvcmFuZ2UgZGFya2VuLTFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJmYXMgZmEtZWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgMzYwNDk4MDQxOFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1ib3R0b20tc2hlZXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNoZWV0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNoZWV0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hlZXRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3ViaGVhZGVyXCIsIFtfdm0uX3YoXCJkZXRhaWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29udGFpbmVyXCIsIHsgYXR0cnM6IHsgXCJncmlkLWxpc3QteHNcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAg5omL6YWN5bel5LqL44KS5YWD44Gr5Y+X5YWl5Yem55CG44KS6KGM44GI44G+44GZ44CC5a++6LGh44Gu5omL6YWN5bel5LqL44KS6YG45oqe44GZ44KL44Go5omL6YWN5LiA6Kan44Oq44K544OI44GM6KGo56S644GV44KM44G+44GZ44CCXFxuICAgICAgICAgIOihqOekuuOBleOCjOOBn+ODquOCueODiOOCiOOCiuWPl+OBkeWFpeOCjOOCi+mDqOadkOOCkuODgeOCp+ODg+OCr+OBl+OAgeeUu+mdouS4i+mDqOOBruWPl+WFpeODnOOCv+ODs+OCkuaKvOS4i+OBl+OBpuOBj+OBoOOBleOBhOOAguWPl+WFpeaVsOmHj+OBruWkieabtOOBjOOBguOCi+WgtOWQiOOBr+OAgeODquOCueODiOWPs+mDqOOBrue3qOmbhuOCs+ODnuODs+ODieOCkuaKvOOBl+OBpuOBj+OBoOOBleOBhOOAglxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImhpZGUtb3ZlcmxheVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImRpYWxvZy1ib3R0b20tdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hNCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5hNCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImE0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBkYXJrOiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hNCA9ICFfdm0uYTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJjbG9zZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJTZXR0aW5nc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXJrOiBcIlwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmludF9fcGRmKFwibWFrZXBkZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIu+8sO+8su+8qe+8ru+8tFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBcImE0LWJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhNC1hcmVhXCIsIGF0dHJzOiB7IGlkOiBcIm1ha2VwZGZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29uZmlncywgZnVuY3Rpb24ocm93LCByb3dudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHJvd251bSwgc3RhdGljQ2xhc3M6IFwiYTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicjJ2NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduLXN0YXJ0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChyb3csIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInFyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czY6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpdGVtX3FyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHFybGlzdDogaXRlbSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ubnVtID09PSAwXG4gICAgPyBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucENudCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uLXFyXCIsIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiZmFzIGZhLXFyY29kZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5wQ250KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1iYWRnZVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByaWdodDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJiYWRnZVwiIH0sIHNsb3Q6IFwiYmFkZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubnVtKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uLXFyXCIsIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcImZhcyBmYS1xcmNvZGVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInFyaW91c2x5XCIsIHsgYXR0cnM6IHsgdmFsdWU6IF92bS5jb25maWcgfSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJxci1jYXJkXCIsIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSB9LCBbXG4gICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInFyLWluZm9cIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInFybGlzdC1saXN0XCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlk4HnlapcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucXJsaXN0LmlkKSldKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInFybGlzdC1saXN0XCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlk4HlkI1cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucXJsaXN0Lm5hbWUpKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwicXJsaXN0LWxpc3RcIiB9LCBbXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuW9ouW8j1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5xcmxpc3QubW9kZWwpKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInFyLWFkZFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicXJsaXN0LXFyXCIgfSxcbiAgICAgICAgICBbX2MoXCJtYWtlLXFyXCIsIHsgYXR0cnM6IHsgY29uZmlnOiBfdm0ucXJsaXN0LnZhbHVlIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2hrXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgIF92bS5fbChBcnJheSgxMikua2V5cygpLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtZmxleFwiLCB7IGtleTogaW5kZXgsIGF0dHJzOiB7IHhzMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmnIhcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiwqBcIildKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLCBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwi6YOo5p2Q6K2Y5Yil5qiZXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJxcmxpc3QtbGlzdFwiIH0sIFtcbiAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIueuoeeQhlwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuizh+adkCBB5qOaIDM2LUNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTA0ZDM5ODgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUwNGQzOTg4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJvdHRvbVNoZWV0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRGF0YVRhYmxlIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRGlhbG9nIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU3ViaGVhZGVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVG9vbGJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRvb2xiYXJJdGVtcyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRvb2xiYXJUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcCxWQm90dG9tU2hlZXQsVkJ0bixWQ2FyZCxWQ2FyZFRleHQsVkNvbnRhaW5lcixWRGF0YVRhYmxlLFZEaWFsb2csVkZsZXgsVkljb24sVkxheW91dCxWTGlzdCxWU3BhY2VyLFZTdWJoZWFkZXIsVlRleHRGaWVsZCxWVG9vbGJhcixWVG9vbGJhckl0ZW1zLFZUb29sYmFyVGl0bGV9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UwNGQzOTg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UwNGQzOTg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTA0ZDM5ODgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTA0ZDM5ODgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTA0ZDM5ODgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYThhYjM3NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RckJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJhZGdlIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJhZGdlLFZCdG4sVkljb259KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFhOGFiMzc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFhOGFiMzc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RckJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWE4YWIzNzYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWE4YWIzNzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0L1FyQnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RckJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWE4YWIzNzYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01ha2VRUi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZlYmM5OGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFrZVFSLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFrZVFSLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y2ZWJjOThjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y2ZWJjOThjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2ZWJjOThjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y2ZWJjOThjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ha2VRUi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFrZVFSLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmViYzk4YyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaXRlbV9xci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE1NGUxYzgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaXRlbV9xci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE1NGUxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1YTU0ZTFjOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWRmxleCxWTGF5b3V0fSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YTU0ZTFjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YTU0ZTFjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaXRlbV9xci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE1NGUxYzgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWE1NGUxYzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhNTRlMWM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhNTRlMWM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTU0ZTFjOCZzY29wZWQ9dHJ1ZSZcIiIsImNvbnN0IF9kYXRhX3RhYmxlX2NvbW1vbl9zZXR0aW5nID0ge1xuXG4gIGNvbToge1xuICAgIHBhZ2VfdGl0bGU6ICflhbHpgJrjg6rjgrnjg4jjg5rjg7zjgrgnLFxuICAgIHBhZ2VfY2xhc3M6ICdjb20tZGF0YS10YWJsZScsXG4gICAgaW5mbzogbnVsbCxcbiAgICB2aWV3X3Jvd19zZXR0aW5nOiBbXG4gICAgICA1LFxuICAgICAgNTAsXG4gICAgICAxMDAsXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiJHZ1ZXRpZnkuZGF0YUl0ZXJhdG9yLnJvd3NQZXJQYWdlQWxsXCIsXG4gICAgICAgIHZhbHVlOiAtMVxuICAgICAgfVxuICAgIF0sXG4gICAgbm9fZGF0YV90ZXh0OiBcImxvYWRpbmcgLi4uIFwiLFxuICB9LFxuICBpdGVtX2xpc3Q6IHtcbiAgICBwYWdlX3RpdGxlOiAn5YWx6YCa44Oq44K544OI44Oa44O844K4JyxcbiAgICBoZWFkZXJzOiBbe1xuICAgICAgdGV4dDogXCLlk4Hnm67jgrPjg7zjg4lcIixcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmFsdWU6IFwiaXRlbV9jb2RlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwi77yy77yl77y2XCIsXG4gICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHZhbHVlOiBcIml0ZW1fcmV2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwi5ZOB5ZCNXCIsXG4gICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHZhbHVlOiBcIml0ZW1fbmFtZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIuWei+W8j1wiLFxuICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2YWx1ZTogXCJpdGVtX21vZGVsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwi5Zyo5bqr5pWwXCIsXG4gICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHZhbHVlOiBcImxhc3RfbnVtXCJcbiAgICB9LFxuICAgIF0sXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHRfbWl4X2NvbTogX2RhdGFfdGFibGVfY29tbW9uX3NldHRpbmcsXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
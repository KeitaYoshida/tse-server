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
/* harmony import */ var _bin_makepdf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bin/makepdf.js */ "./resources/js/components/bin/makepdf.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    item_qr: _item_item_qr__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      output: null
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
    addQrcode: function addQrcode(d) {
      if (this.config.length < 16) {
        this.config.push({
          value: "http://192.168.13.103:8000/item/" + d.itemCode,
          id: d.itemCode,
          name: d.itemName,
          model: d.itemModelName
        });
      } else {
        this.download();
        this.config = [];
        this.config.push({
          value: "http://192.168.13.103:8000/item/" + d.itemCode,
          id: d.itemCode,
          name: d.itemName,
          model: d.itemModelName
        });
      }
    },
    download: function download() {
      // console.log(this.$refs.print);
      // createPdfFromHtml(this.$refs.data);
      Object(_bin_makepdf_js__WEBPACK_IMPORTED_MODULE_2__["createPdfFromHtml"])(this.$refs.print);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["qrlist", "config"],
  components: {
    makeQr: _MakeQR_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".printout[data-v-e04d3988] {\n  position: fixed;\n  height: 200vh;\n  padding: 10px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#qr-code,\n#qr-print {\n  margin-top: 30px;\n  text-align: center;\n}\n#qr-code .v-card__title--primary,\n#qr-code .v-card__title,\n#qr-print .v-card__title--primary,\n#qr-print .v-card__title {\n  display: block;\n  padding: 8px 6px;\n  padding-left: 15px;\n  font-size: 20px;\n  text-align: center;\n}\n#qr-code .v-toolbar,\n#qr-print .v-toolbar {\n  margin-bottom: 15px;\n}\n#qr-code .v-card,\n#qr-print .v-card {\n  border: 1px solid black;\n}\n#qr-code .v-card qrlist-title,\n#qr-print .v-card qrlist-title {\n  width: 100%;\n  font-size: 2rem;\n  font-weight: 400;\n  text-align: center;\n}\n#qr-code .v-card table,\n#qr-print .v-card table {\n  font-size: 19px;\n  width: 96%;\n  margin-left: 2%;\n  margin-bottom: 10px;\n}\n#qr-code .v-card table td,\n#qr-print .v-card table td {\n  border: 1px solid #222;\n}\n#qr-code .v-card table td.qrlist-list :nth-child(odd),\n#qr-print .v-card table td.qrlist-list :nth-child(odd) {\n  width: 25%;\n}\n#qr-code .v-card table td.qrlist-list :nth-child(even),\n#qr-print .v-card table td.qrlist-list :nth-child(even) {\n  width: 80%;\n}\n#qr-code .v-card table td.qrlist-qr,\n#qr-print .v-card table td.qrlist-qr {\n  padding-left: 15%;\n  padding-right: 15%;\n}\n#qr-code canvas,\n#qr-print canvas {\n  width: 100%;\n  height: auto;\n}", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./item_qr.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss&");

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
                { attrs: { color: "teal lighten-3", dark: "" } },
                [
                  _c("v-toolbar-title", [
                    _vm._v(_vm._s(_vm.setting.page_title))
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      on: {
                        click: function($event) {
                          _vm.sheet = !_vm.sheet
                        }
                      }
                    },
                    [_vm._v("fas fa-question-circle")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-data-table",
                {
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
                                _vm._v(
                                  _vm._s(_vm.get__rev(props.item.item_rev))
                                )
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
                                  _c(
                                    "v-btn",
                                    { attrs: { icon: "", flat: "" } },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticClass: "icon-qr",
                                          attrs: { color: "blue darken-1" },
                                          on: {
                                            click: function($event) {
                                              $event.stopPropagation()
                                              return _vm.addQrcode(props.item)
                                            }
                                          }
                                        },
                                        [_vm._v("fas fa-qrcode")]
                                      )
                                    ],
                                    1
                                  ),
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
                                        "v-btn",
                                        { attrs: { icon: "", flat: "" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "icon-edit",
                                              attrs: {
                                                color: "orange darken-1"
                                              }
                                            },
                                            [_vm._v("fas fa-edit")]
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
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    2369177797
                  )
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-alert",
                    {
                      attrs: {
                        slot: "no-results",
                        value: true,
                        color: "error",
                        icon: "warning",
                        outline: ""
                      },
                      slot: "no-results"
                    },
                    [_vm._v('"' + _vm._s(_vm.search) + '" の検索結果なし')]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.config.length !== 0
                ? [
                    _c(
                      "div",
                      { attrs: { id: "qr-code" } },
                      [
                        _c(
                          "v-toolbar",
                          { attrs: { color: "teal lighten-3", dark: "" } },
                          [
                            _c("v-toolbar-title", [_vm._v("QRコード発行")]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c("v-icon", { on: { click: _vm.download } }, [
                              _vm._v("fas fa-download")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-layout",
                          {
                            ref: "qrlist",
                            attrs: { row: "", wrap: "", id: "qrlist" }
                          },
                          _vm._l(_vm.config, function(qrlist, index) {
                            return _c(
                              "v-flex",
                              { key: index, attrs: { "d-flex": "", xs3: "" } },
                              [_c("item_qr", { attrs: { qrlist: qrlist } })],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        ref: "print",
                        staticClass: "printout",
                        attrs: { id: "qr-print" }
                      },
                      [
                        _c(
                          "v-layout",
                          { attrs: { row: "", wrap: "", id: "qrlist_print" } },
                          _vm._l(_vm.config, function(qrlist, index) {
                            return _c(
                              "v-flex",
                              { key: index, attrs: { "d-flex": "", xs3: "" } },
                              [_c("item_qr", { attrs: { qrlist: qrlist } })],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ]
                : _vm._e(),
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
              )
            ],
            2
          )
        : _vm._e()
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
  return _c("qriously", { attrs: { value: _vm.config, size: 200 } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-card-title", { attrs: { "primary-title": "" } }, [
        _vm._v("部材識別標")
      ]),
      _vm._v(" "),
      _c("table", [
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
        _c("tr", { staticClass: "qrlist-list" }, [
          _c("td", [_vm._v("管理")]),
          _vm._v(" "),
          _c("td", [_vm._v("資材 A棚 36-C")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c(
            "td",
            { staticClass: "qrlist-qr", attrs: { colspan: "2" } },
            [_c("make-qr", { attrs: { config: _vm.qrlist.value } })],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
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
/* empty/unused harmony star reexport *//* harmony import */ var _ItemList_vue_vue_type_style_index_0_id_e04d3988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true& */ "./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemList_vue_vue_type_template_id_e04d3988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemList_vue_vue_type_template_id_e04d3988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e04d3988",
  null
  
)

/* vuetify-loader */
















_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAlert: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VAlert"],VApp: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VApp"],VBottomSheet: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBottomSheet"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VDataTable: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VDataTable"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VList: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VList"],VSpacer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VSpacer"],VSubheader: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VSubheader"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTextField"],VToolbar: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VToolbar"],VToolbarTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VToolbarTitle"]})


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

/***/ "./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_e04d3988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=style&index=0&id=e04d3988&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_e04d3988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_e04d3988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_e04d3988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_e04d3988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemList_vue_vue_type_style_index_0_id_e04d3988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./resources/js/components/bin/makepdf.js":
/*!************************************************!*\
  !*** ./resources/js/components/bin/makepdf.js ***!
  \************************************************/
/*! exports provided: createPdfFromHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPdfFromHtml", function() { return createPdfFromHtml; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfmake_build_pdfmake_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/pdfmake.min */ "./node_modules/pdfmake/build/pdfmake.min.js");
/* harmony import */ var pdfmake_build_pdfmake_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake_min__WEBPACK_IMPORTED_MODULE_2__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // 72dpi 時の mm => px 換算比
// 計算式は 1/(25.4mm / 72dpi)

var RATE = 2.83464566929; // A3 297mm x 419mm
// A4 210 × 297 ミリ

var PAGE_WIDTH = 210 * RATE;
var PAGE_HEIGHT = 297 * RATE; // TODO: 仮置き。後でページ設計に合わせて修正

var CONTENT_WIDTH = 210 * RATE;
var CONTENT_HEIGHT = 297 * RATE;
var PAGE_MARGINS = [0 * RATE, 0 * RATE];
/* for ts
interface PdfProps {
  dataUrl: string;
  pageSize?: {
    width: number;
    height: number;
  };
  pageOrientation?: string;
  contentSize?: {
    width: number;
    height: number;
  };
  pageMargins?: [number, number];
}
*/

/**
 * HTMLからPDFを生成
 * @param {HTMLElement} element
 */

function createPdfFromHtml(_x) {
  return _createPdfFromHtml.apply(this, arguments);
}
/**
 * PDF出力用のPdfPropsを作成
 * @param {HTMLElement} element
 * @param {boolean} isOnlyQrCode
 * @returns {Promise<PdfProps>}
 */

function _createPdfFromHtml() {
  _createPdfFromHtml = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(element) {
    var pdfProps;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return createPdfProps(element);

          case 2:
            pdfProps = _context.sent;
            createPdf(pdfProps);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createPdfFromHtml.apply(this, arguments);
}

function createPdfProps(_x2) {
  return _createPdfProps.apply(this, arguments);
}
/**
 * エンコードされた画像URLを貼り付けたPDFを出力する
 * @param {PdfProps} pdfProps
 */


function _createPdfProps() {
  _createPdfProps = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(element) {
    var options, canvas, dataUrl, pdfProps;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // html2canvas実行
            options = {
              // HACK: ブラウザ依存でcanvasサイズが変わらないように、scaleは固定値。IEでのぼやけ対策で十分大きめの2にした
              scale: 2
            };
            _context2.next = 3;
            return html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(element, options);

          case 3:
            canvas = _context2.sent;
            dataUrl = canvas.toDataURL();
            pdfProps = {
              dataUrl: dataUrl,
              pageSize: {
                width: PAGE_WIDTH,
                height: PAGE_HEIGHT
              },
              pageOrientation: "PORTRAIT",
              contentSize: {
                width: CONTENT_WIDTH,
                height: CONTENT_HEIGHT
              },
              pageMargins: PAGE_MARGINS
            };
            return _context2.abrupt("return", pdfProps);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createPdfProps.apply(this, arguments);
}

function createPdf(pdfProps) {
  var dataUrl = pdfProps.dataUrl,
      contentSize = pdfProps.contentSize,
      pageMargins = pdfProps.pageMargins; // tsエラー回避のため一時的にany

  var pageSize = pdfProps.pageSize;
  var pageOrientation = pdfProps.pageOrientation;
  var documentDefinitions = {
    pageSize: pageSize,
    pageOrientation: pageOrientation,
    content: _objectSpread({
      image: dataUrl
    }, contentSize),
    pageMargins: pageMargins
  };
  pdfmake_build_pdfmake_min__WEBPACK_IMPORTED_MODULE_2___default.a.createPdf(documentDefinitions).download();
}

/***/ }),

/***/ "./resources/js/components/item/item_qr.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/item/item_qr.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_qr_vue_vue_type_template_id_5a54e1c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item_qr.vue?vue&type=template&id=5a54e1c8& */ "./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&");
/* harmony import */ var _item_qr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item_qr.vue?vue&type=script&lang=js& */ "./resources/js/components/item/item_qr.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _item_qr_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item_qr.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _item_qr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_qr_vue_vue_type_template_id_5a54e1c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_qr_vue_vue_type_template_id_5a54e1c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"]})


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

/***/ "./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./item_qr.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_template_id_5a54e1c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./item_qr.vue?vue&type=template&id=5a54e1c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/item/item_qr.vue?vue&type=template&id=5a54e1c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_template_id_5a54e1c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_qr_vue_vue_type_template_id_5a54e1c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZT9mMGQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWU/ZDA4ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC52dWU/ZmY2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlPzI0ODQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlPzI4YjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFrZVFSLnZ1ZT8wZTI4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWU/ZmYzMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlP2MzNWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlP2Q0YTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlP2VlNDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFrZVFSLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlPzdjNDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFrZVFSLnZ1ZT9hZjZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jpbi9tYWtlcGRmLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZT8yZjNmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWU/Njc2YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlP2IyOTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9EYXRhVGFibGVDb21tb25TZXR0aW5nLmpzIl0sIm5hbWVzIjpbIlJBVEUiLCJQQUdFX1dJRFRIIiwiUEFHRV9IRUlHSFQiLCJDT05URU5UX1dJRFRIIiwiQ09OVEVOVF9IRUlHSFQiLCJQQUdFX01BUkdJTlMiLCJjcmVhdGVQZGZGcm9tSHRtbCIsImVsZW1lbnQiLCJjcmVhdGVQZGZQcm9wcyIsInBkZlByb3BzIiwiY3JlYXRlUGRmIiwib3B0aW9ucyIsInNjYWxlIiwiaHRtbDJjYW52YXMiLCJjYW52YXMiLCJkYXRhVXJsIiwidG9EYXRhVVJMIiwicGFnZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsInBhZ2VPcmllbnRhdGlvbiIsImNvbnRlbnRTaXplIiwicGFnZU1hcmdpbnMiLCJkb2N1bWVudERlZmluaXRpb25zIiwiY29udGVudCIsImltYWdlIiwicGRmTWFrZSIsImRvd25sb2FkIiwiX2RhdGFfdGFibGVfY29tbW9uX3NldHRpbmciLCJjb20iLCJwYWdlX3RpdGxlIiwicGFnZV9jbGFzcyIsImluZm8iLCJ2aWV3X3Jvd19zZXR0aW5nIiwidGV4dCIsInZhbHVlIiwibm9fZGF0YV90ZXh0IiwiaXRlbV9saXN0IiwiaGVhZGVycyIsImFsaWduIiwiZGF0YSIsImR0X21peF9jb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EscUZBREE7QUFFQTtBQUNBO0FBREEsR0FGQTtBQUtBO0FBQ0E7QUFDQSxlQURBO0FBRUEsMkJBRkE7QUFHQSxrQkFIQTtBQUlBLGtCQUpBO0FBS0EsbUJBTEE7QUFNQSxtQkFOQTtBQU9BLG1CQVBBO0FBUUEsZ0JBUkE7QUFTQTtBQVRBO0FBV0EsR0FqQkE7QUFrQkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxpQ0FDQSwyQ0FEQSxFQUVBLG1CQUZBO0FBSUEsVUFDQSxHQURBLENBQ0EsaUJBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQSxXQU1BO0FBQ0E7QUFDQSxLQVJBO0FBU0EsR0FwQ0E7QUFxQ0E7QUFDQSxhQURBLHFCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFEQTtBQUVBLHdCQUZBO0FBR0EsMEJBSEE7QUFJQTtBQUpBO0FBTUEsT0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBREE7QUFFQSx3QkFGQTtBQUdBLDBCQUhBO0FBSUE7QUFKQTtBQU1BO0FBQ0EsS0FuQkE7QUFvQkEsWUFwQkEsc0JBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFyQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZ0JBREE7QUFFQSxtQkFGQTtBQUdBO0FBSEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FCQTtBQUVBO0FBQ0EsNkJBREE7QUFFQTtBQUNBO0FBREE7QUFGQSxHOzs7Ozs7Ozs7OztBQ2hDQSwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsK0JBQStCLG9CQUFvQixrQkFBa0Isa0JBQWtCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNGakgsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLHlCQUF5QixxQkFBcUIsdUJBQXVCLEdBQUcsNkhBQTZILG1CQUFtQixxQkFBcUIsdUJBQXVCLG9CQUFvQix1QkFBdUIsR0FBRyw4Q0FBOEMsd0JBQXdCLEdBQUcsd0NBQXdDLDRCQUE0QixHQUFHLGtFQUFrRSxnQkFBZ0Isb0JBQW9CLHFCQUFxQix1QkFBdUIsR0FBRyxvREFBb0Qsb0JBQW9CLGVBQWUsb0JBQW9CLHdCQUF3QixHQUFHLDBEQUEwRCwyQkFBMkIsR0FBRyxrSEFBa0gsZUFBZSxHQUFHLG9IQUFvSCxlQUFlLEdBQUcsOEVBQThFLHNCQUFzQix1QkFBdUIsR0FBRyxzQ0FBc0MsZ0JBQWdCLGlCQUFpQixHQUFHOzs7Ozs7Ozs7Ozs7OztBQ0Q5eEMsY0FBYyxtQkFBTyxDQUFDLGt3QkFBb2E7O0FBRTFiLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx5R0FBc0Q7O0FBRTNFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ2xCZixjQUFjLG1CQUFPLENBQUMsdXVCQUE2Wjs7QUFFbmIsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRHQUF5RDs7QUFFOUU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxpQkFBaUIsRUFBRTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9DQUFvQyxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQ0FBZ0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdDQUFnQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGdDQUFnQztBQUN4RTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0NBQWdDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnQ0FBZ0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUyxxQkFBcUIsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHlCQUF5QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVMscUJBQXFCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxnQkFBZ0IsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxvQ0FBb0MsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU0sc0JBQXNCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxQkFBcUIsd0JBQXdCLEVBQUU7QUFDOUUsOENBQThDLFNBQVMsaUJBQWlCLEVBQUU7QUFDMUU7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyx3Q0FBd0MsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUJBQXFCLHdCQUF3QixFQUFFO0FBQzlFLDhDQUE4QyxTQUFTLGlCQUFpQixFQUFFO0FBQzFFO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTLHFCQUFxQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOVNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsK0JBQStCLEVBQUU7QUFDbkU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVMsc0JBQXNCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQyxlQUFlLEVBQUU7QUFDakUsNEJBQTRCLFNBQVMsMkJBQTJCLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzdGO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDd0g7QUFDcEY7QUFDRjtBQUNRO0FBQ1I7QUFDTTtBQUNBO0FBQ0w7QUFDQTtBQUNFO0FBQ0Y7QUFDRTtBQUNHO0FBQ0E7QUFDRjtBQUNLO0FBQzNDLDhIQUFpQixhQUFhLDBEQUFNLENBQUMsc0RBQUksQ0FBQyxzRUFBWSxDQUFDLHNEQUFJLENBQUMsa0VBQVUsQ0FBQyxrRUFBVSxDQUFDLHdEQUFLLENBQUMsd0RBQUssQ0FBQyw0REFBTyxDQUFDLHdEQUFLLENBQUMsNERBQU8sQ0FBQyxrRUFBVSxDQUFDLGtFQUFVLENBQUMsOERBQVEsQ0FBQyx3RUFBYSxDQUFDOzs7QUFHaks7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQzNEZjtBQUFBO0FBQUEsd0NBQTJPLENBQWdCLDhSQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9QO0FBQUE7QUFBQTtBQUFBO0FBQWllLENBQWdCLDZlQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXFGO0FBQzNCO0FBQ0w7OztBQUdyRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF5TyxDQUFnQiw0UkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3UDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtDQUdBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLGFBQWIsQyxDQUVBO0FBQ0E7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLE1BQU1ELElBQXpCO0FBQ0EsSUFBTUUsV0FBVyxHQUFHLE1BQU1GLElBQTFCLEMsQ0FFQTs7QUFDQSxJQUFNRyxhQUFhLEdBQUcsTUFBTUgsSUFBNUI7QUFDQSxJQUFNSSxjQUFjLEdBQUcsTUFBTUosSUFBN0I7QUFDQSxJQUFNSyxZQUFZLEdBQUcsQ0FBQyxJQUFJTCxJQUFMLEVBQVcsSUFBSUEsSUFBZixDQUFyQjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7OztBQUlPLFNBQWVNLGlCQUF0QjtBQUFBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozt5RUFMTyxpQkFBaUNDLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2tCQyxjQUFjLENBQUNELE9BQUQsQ0FEaEM7O0FBQUE7QUFDQ0Usb0JBREQ7QUFFTEMscUJBQVMsQ0FBQ0QsUUFBRCxDQUFUOztBQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FXUUQsYzs7O0FBMkJmOzs7Ozs7Ozs7eUVBM0JBLGtCQUE4QkQsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFDTUksbUJBRlIsR0FFa0I7QUFDZDtBQUNBQyxtQkFBSyxFQUFFO0FBRk8sYUFGbEI7QUFBQTtBQUFBLG1CQU11QkMsa0RBQVcsQ0FBQ04sT0FBRCxFQUFVSSxPQUFWLENBTmxDOztBQUFBO0FBTVFHLGtCQU5SO0FBUVFDLG1CQVJSLEdBUWtCRCxNQUFNLENBQUNFLFNBQVAsRUFSbEI7QUFVUVAsb0JBVlIsR0FVbUI7QUFDZk0scUJBQU8sRUFBUEEsT0FEZTtBQUVmRSxzQkFBUSxFQUFFO0FBQ1JDLHFCQUFLLEVBQUVqQixVQURDO0FBRVJrQixzQkFBTSxFQUFFakI7QUFGQSxlQUZLO0FBTWZrQiw2QkFBZSxFQUFFLFVBTkY7QUFPZkMseUJBQVcsRUFBRTtBQUNYSCxxQkFBSyxFQUFFZixhQURJO0FBRVhnQixzQkFBTSxFQUFFZjtBQUZHLGVBUEU7QUFXZmtCLHlCQUFXLEVBQUVqQjtBQVhFLGFBVm5CO0FBQUEsOENBd0JTSSxRQXhCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBK0JBLFNBQVNDLFNBQVQsQ0FBbUJELFFBQW5CLEVBQTZCO0FBQUEsTUFDbkJNLE9BRG1CLEdBQ21CTixRQURuQixDQUNuQk0sT0FEbUI7QUFBQSxNQUNWTSxXQURVLEdBQ21CWixRQURuQixDQUNWWSxXQURVO0FBQUEsTUFDR0MsV0FESCxHQUNtQmIsUUFEbkIsQ0FDR2EsV0FESCxFQUUzQjs7QUFDQSxNQUFNTCxRQUFRLEdBQUdSLFFBQVEsQ0FBQ1EsUUFBMUI7QUFDQSxNQUFNRyxlQUFlLEdBQUdYLFFBQVEsQ0FBQ1csZUFBakM7QUFFQSxNQUFNRyxtQkFBbUIsR0FBRztBQUMxQk4sWUFBUSxFQUFSQSxRQUQwQjtBQUUxQkcsbUJBQWUsRUFBZkEsZUFGMEI7QUFHMUJJLFdBQU87QUFDTEMsV0FBSyxFQUFFVjtBQURGLE9BRUZNLFdBRkUsQ0FIbUI7QUFPMUJDLGVBQVcsRUFBWEE7QUFQMEIsR0FBNUI7QUFVQUksa0VBQU8sQ0FBQ2hCLFNBQVIsQ0FBa0JhLG1CQUFsQixFQUF1Q0ksUUFBdkM7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNoR0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRjtBQUMzQjtBQUNMO0FBQ2M7OztBQUdwRTtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ3dIO0FBQ3JGO0FBQ0s7QUFDeEMsOEhBQWlCLGFBQWEsd0RBQUssQ0FBQyxrRUFBVSxDQUFDOzs7QUFHL0M7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQzlDZjtBQUFBO0FBQUEsd0NBQW1QLENBQWdCLDZSQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZRO0FBQUE7QUFBQTtBQUFBO0FBQTZkLENBQWdCLG9kQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEsSUFBTUMsMEJBQTBCLEdBQUc7QUFFakNDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUUsVUFEVDtBQUVIQyxjQUFVLEVBQUUsZ0JBRlQ7QUFHSEMsUUFBSSxFQUFFLElBSEg7QUFJSEMsb0JBQWdCLEVBQUUsQ0FDaEIsQ0FEZ0IsRUFFaEIsRUFGZ0IsRUFHaEIsR0FIZ0IsRUFJaEI7QUFDRUMsVUFBSSxFQUFFLHNDQURSO0FBRUVDLFdBQUssRUFBRSxDQUFDO0FBRlYsS0FKZ0IsQ0FKZjtBQWFIQyxnQkFBWSxFQUFFO0FBYlgsR0FGNEI7QUFpQmpDQyxXQUFTLEVBQUU7QUFDVFAsY0FBVSxFQUFFLFVBREg7QUFFVFEsV0FBTyxFQUFFLENBQUM7QUFDUkosVUFBSSxFQUFFLE9BREU7QUFFUkssV0FBSyxFQUFFLFFBRkM7QUFHUkosV0FBSyxFQUFFO0FBSEMsS0FBRCxFQUtUO0FBQ0VELFVBQUksRUFBRSxLQURSO0FBRUVLLFdBQUssRUFBRSxRQUZUO0FBR0VKLFdBQUssRUFBRTtBQUhULEtBTFMsRUFVVDtBQUNFRCxVQUFJLEVBQUUsSUFEUjtBQUVFSyxXQUFLLEVBQUUsUUFGVDtBQUdFSixXQUFLLEVBQUU7QUFIVCxLQVZTLEVBZVQ7QUFDRUQsVUFBSSxFQUFFLElBRFI7QUFFRUssV0FBSyxFQUFFLFFBRlQ7QUFHRUosV0FBSyxFQUFFO0FBSFQsS0FmUyxFQW9CVDtBQUNFRCxVQUFJLEVBQUUsS0FEUjtBQUVFSyxXQUFLLEVBQUUsUUFGVDtBQUdFSixXQUFLLEVBQUU7QUFIVCxLQXBCUztBQUZBO0FBakJzQixDQUFuQztBQStDZTtBQUNiSyxNQURhLGtCQUNOO0FBQ0wsV0FBTztBQUNMQyxnQkFBVSxFQUFFYjtBQURQLEtBQVA7QUFHRDtBQUxZLENBQWYsRSIsImZpbGUiOiJpdGVtX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWFwcCBpZD1cIml0ZW1MaXN0XCI+XG4gICAgPHYtY29udGFpbmVyIHYtaWY9XCIhbm9kYXRhXCI+XG4gICAgICA8di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJzZWFyY2hcIiBhcHBlbmQtaWNvbj1cInNlYXJjaFwiIGxhYmVsPVwiU2VhcmNoXCIgc2luZ2xlLWxpbmUgaGlkZS1kZXRhaWxzPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgPGJyPlxuICAgICAgPHYtdG9vbGJhciBjb2xvcj1cInRlYWwgbGlnaHRlbi0zXCIgZGFyaz5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZT57eyBzZXR0aW5nLnBhZ2VfdGl0bGUgfX08L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgIDx2LWljb24gdi1vbjpjbGljaz1cInNoZWV0ID0gIXNoZWV0XCI+ZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZTwvdi1pY29uPlxuICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgIDpoZWFkZXJzPVwic2V0dGluZy5oZWFkZXJzXCJcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcbiAgICAgICAgOnJvd3MtcGVyLXBhZ2UtaXRlbXM9XCJzZXR0aW5nLnZpZXdfcm93X3NldHRpbmdcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICA6Y2xhc3M9XCJzZXR0aW5nLnBhZ2VfY2xhc3NcIlxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLml0ZW1fY29kZSB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IGdldF9fcmV2KHByb3BzLml0ZW0uaXRlbV9yZXYpIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+e3sgcHJvcHMuaXRlbS5pdGVtX25hbWUgfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLml0ZW1fbW9kZWwgfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLmxhc3RfbnVtID09PSAtMSA/ICfmnKrpm4boqIgnOiBwcm9wcy5pdGVtLmxhc3RfbnVtIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsYXlvdXQgcHgtMFwiPlxuICAgICAgICAgICAgICA8di1idG4gaWNvbiBmbGF0PlxuICAgICAgICAgICAgICAgIDx2LWljb25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJhZGRRcmNvZGUocHJvcHMuaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLXFyXCJcbiAgICAgICAgICAgICAgICA+ZmFzIGZhLXFyY29kZTwvdi1pY29uPlxuICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy9pdGVtLycgKyBwcm9wcy5pdGVtLml0ZW1fY29kZSArICcvJyArIHByb3BzLml0ZW0uaXRlbV9yZXZcIj5cbiAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBmbGF0PlxuICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cIm9yYW5nZSBkYXJrZW4tMVwiIGNsYXNzPVwiaWNvbi1lZGl0XCI+ZmFzIGZhLWVkaXQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8di1hbGVydFxuICAgICAgICAgIHNsb3Q9XCJuby1yZXN1bHRzXCJcbiAgICAgICAgICA6dmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICBjb2xvcj1cImVycm9yXCJcbiAgICAgICAgICBpY29uPVwid2FybmluZ1wiXG4gICAgICAgICAgb3V0bGluZVxuICAgICAgICA+XCJ7eyBzZWFyY2ggfX1cIiDjga7mpJzntKLntZDmnpzjgarjgZc8L3YtYWxlcnQ+XG4gICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY29uZmlnLmxlbmd0aCE9PTBcIj5cbiAgICAgICAgPGRpdiBpZD1cInFyLWNvZGVcIj5cbiAgICAgICAgICA8di10b29sYmFyIGNvbG9yPVwidGVhbCBsaWdodGVuLTNcIiBkYXJrPlxuICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5RUuOCs+ODvOODieeZuuihjDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICA8di1pY29uIEBjbGljaz1cImRvd25sb2FkXCI+ZmFzIGZhLWRvd25sb2FkPC92LWljb24+XG4gICAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwIGlkPVwicXJsaXN0XCIgcmVmPVwicXJsaXN0XCI+XG4gICAgICAgICAgICA8di1mbGV4IHYtZm9yPVwiKHFybGlzdCwgaW5kZXgpIGluIGNvbmZpZ1wiIHYtYmluZDprZXk9XCJpbmRleFwiIGQtZmxleCB4czM+XG4gICAgICAgICAgICAgIDxpdGVtX3FyIDpxcmxpc3Q9XCJxcmxpc3RcIj48L2l0ZW1fcXI+XG4gICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInFyLXByaW50XCIgcmVmPVwicHJpbnRcIiBjbGFzcz1cInByaW50b3V0XCI+XG4gICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwIGlkPVwicXJsaXN0X3ByaW50XCI+XG4gICAgICAgICAgICA8di1mbGV4IHYtZm9yPVwiKHFybGlzdCwgaW5kZXgpIGluIGNvbmZpZ1wiIHYtYmluZDprZXk9XCJpbmRleFwiIGQtZmxleCB4czM+XG4gICAgICAgICAgICAgIDxpdGVtX3FyIDpxcmxpc3Q9XCJxcmxpc3RcIj48L2l0ZW1fcXI+XG4gICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cInNoZWV0XCI+XG4gICAgICAgIDx2LWxpc3Q+XG4gICAgICAgICAgPHYtc3ViaGVhZGVyPmRldGFpbDwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgPGhyPlxuICAgICAgICAgIDx2LWNvbnRhaW5lciBncmlkLWxpc3QteHM+XG4gICAgICAgICAgICDmiYvphY3lt6XkuovjgpLlhYPjgavlj5flhaXlh6bnkIbjgpLooYzjgYjjgb7jgZnjgILlr77osaHjga7miYvphY3lt6XkuovjgpLpgbjmip7jgZnjgovjgajmiYvphY3kuIDopqfjg6rjgrnjg4jjgYzooajnpLrjgZXjgozjgb7jgZnjgIJcbiAgICAgICAgICAgIOihqOekuuOBleOCjOOBn+ODquOCueODiOOCiOOCiuWPl+OBkeWFpeOCjOOCi+mDqOadkOOCkuODgeOCp+ODg+OCr+OBl+OAgeeUu+mdouS4i+mDqOOBruWPl+WFpeODnOOCv+ODs+OCkuaKvOS4i+OBl+OBpuOBj+OBoOOBleOBhOOAguWPl+WFpeaVsOmHj+OBruWkieabtOOBjOOBguOCi+WgtOWQiOOBr+OAgeODquOCueODiOWPs+mDqOOBrue3qOmbhuOCs+ODnuODs+ODieOCkuaKvOOBl+OBpuOBj+OBoOOBleOBhOOAglxuICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgIDwvdi1saXN0PlxuICAgICAgPC92LWJvdHRvbS1zaGVldD5cbiAgICA8L3YtY29udGFpbmVyPlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBtaXhfY29tIGZyb20gXCIuLi9taXhpbnMvRGF0YVRhYmxlQ29tbW9uU2V0dGluZy5qc1wiO1xuaW1wb3J0IGl0ZW1fcXIgZnJvbSBcIi4vaXRlbS9pdGVtX3FyXCI7XG5pbXBvcnQgeyBjcmVhdGVQZGZGcm9tSHRtbCB9IGZyb20gXCIuL2Jpbi9tYWtlcGRmLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbbWl4X2NvbV0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBpdGVtX3FyXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBjb25zdF9pdGVtX2xpc3Q6IG51bGwsXG4gICAgICBzZWFyY2g6IG51bGwsXG4gICAgICBzaGVldDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc2V0dGluZzogbnVsbCxcbiAgICAgIG5vZGF0YTogZmFsc2UsXG4gICAgICBjb25maWc6IFtdLFxuICAgICAgb3V0cHV0OiBudWxsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZHRfbWl4X2NvbVt0aGlzLiRyb3V0ZS5wYXJhbXMucGFnZV9pZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub2RhdGEgPSAhdGhpcy5ub2RhdGE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB0aGlzLmR0X21peF9jb21bdGhpcy4kcm91dGUucGFyYW1zLnBhZ2VfaWRdLFxuICAgICAgdGhpcy5kdF9taXhfY29tLmNvbVxuICAgICk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvaXRlbXMvaXRlbWxpc3RcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgOiBcIiArIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkUXJjb2RlKGQpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aGlzLmNvbmZpZy5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogXCJodHRwOi8vMTkyLjE2OC4xMy4xMDM6ODAwMC9pdGVtL1wiICsgZC5pdGVtQ29kZSxcbiAgICAgICAgICBpZDogZC5pdGVtQ29kZSxcbiAgICAgICAgICBuYW1lOiBkLml0ZW1OYW1lLFxuICAgICAgICAgIG1vZGVsOiBkLml0ZW1Nb2RlbE5hbWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRvd25sb2FkKCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gW107XG4gICAgICAgIHRoaXMuY29uZmlnLnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBcImh0dHA6Ly8xOTIuMTY4LjEzLjEwMzo4MDAwL2l0ZW0vXCIgKyBkLml0ZW1Db2RlLFxuICAgICAgICAgIGlkOiBkLml0ZW1Db2RlLFxuICAgICAgICAgIG5hbWU6IGQuaXRlbU5hbWUsXG4gICAgICAgICAgbW9kZWw6IGQuaXRlbU1vZGVsTmFtZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRvd25sb2FkKCkge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy4kcmVmcy5wcmludCk7XG4gICAgICAvLyBjcmVhdGVQZGZGcm9tSHRtbCh0aGlzLiRyZWZzLmRhdGEpO1xuICAgICAgY3JlYXRlUGRmRnJvbUh0bWwodGhpcy4kcmVmcy5wcmludCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5wcmludG91dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAyMDB2aDtcbiAgcGFkZGluZzogMTBweDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxcmlvdXNseSA6dmFsdWU9XCJjb25maWdcIiA6c2l6ZT1cIjIwMFwiLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBWdWVRcmlvdXNseSBmcm9tIFwidnVlLXFyaW91c2x5XCI7XG5WdWUudXNlKFZ1ZVFyaW91c2x5KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7fSxcbiAgcHJvcHM6IFtcImNvbmZpZ1wiXSxcbiAgbmFtZTogXCJxckdlbmFyYXRlXCJcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHYtY2FyZD5cbiAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+6YOo5p2Q6K2Y5Yil5qiZPC92LWNhcmQtdGl0bGU+XG4gICAgPHRhYmxlPlxuICAgICAgPHRyIGNsYXNzPVwicXJsaXN0LWxpc3RcIj5cbiAgICAgICAgPHRkPuWTgeeVqjwvdGQ+XG4gICAgICAgIDx0ZD57eyBxcmxpc3QuaWQgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBjbGFzcz1cInFybGlzdC1saXN0XCI+XG4gICAgICAgIDx0ZD7lk4HlkI08L3RkPlxuICAgICAgICA8dGQ+e3sgcXJsaXN0Lm5hbWUgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBjbGFzcz1cInFybGlzdC1saXN0XCI+XG4gICAgICAgIDx0ZD7lvaLlvI88L3RkPlxuICAgICAgICA8dGQ+e3sgcXJsaXN0Lm1vZGVsIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJxcmxpc3QtbGlzdFwiPlxuICAgICAgICA8dGQ+566h55CGPC90ZD5cbiAgICAgICAgPHRkPuizh+adkCBB5qOaIDM2LUM8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJxcmxpc3QtcXJcIj5cbiAgICAgICAgICA8bWFrZS1xciA6Y29uZmlnPVwicXJsaXN0LnZhbHVlXCI+PC9tYWtlLXFyPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgbWFrZVFyIGZyb20gXCIuLi9NYWtlUVIudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcInFybGlzdFwiLCBcImNvbmZpZ1wiXSxcbiAgY29tcG9uZW50czoge1xuICAgIG1ha2VRclxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiID5cbiNxci1jb2RlLFxuI3FyLXByaW50IHtcbiAgLnYtY2FyZF9fdGl0bGUtLXByaW1hcnksXG4gIC52LWNhcmRfX3RpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA4cHggNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLnYtdG9vbGJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAudi1jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBxcmxpc3QtdGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICB3aWR0aDogOTYlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHRkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcbiAgICAgICAgJi5xcmxpc3QtbGlzdCB7XG4gICAgICAgICAgOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5xcmxpc3QtcXIge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByaW50b3V0W2RhdGEtdi1lMDRkMzk4OF0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAyMDB2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI3FyLWNvZGUsXFxuI3FyLXByaW50IHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNxci1jb2RlIC52LWNhcmRfX3RpdGxlLS1wcmltYXJ5LFxcbiNxci1jb2RlIC52LWNhcmRfX3RpdGxlLFxcbiNxci1wcmludCAudi1jYXJkX190aXRsZS0tcHJpbWFyeSxcXG4jcXItcHJpbnQgLnYtY2FyZF9fdGl0bGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggNnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jcXItY29kZSAudi10b29sYmFyLFxcbiNxci1wcmludCAudi10b29sYmFyIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbiNxci1jb2RlIC52LWNhcmQsXFxuI3FyLXByaW50IC52LWNhcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNxci1jb2RlIC52LWNhcmQgcXJsaXN0LXRpdGxlLFxcbiNxci1wcmludCAudi1jYXJkIHFybGlzdC10aXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNxci1jb2RlIC52LWNhcmQgdGFibGUsXFxuI3FyLXByaW50IC52LWNhcmQgdGFibGUge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgd2lkdGg6IDk2JTtcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbiNxci1jb2RlIC52LWNhcmQgdGFibGUgdGQsXFxuI3FyLXByaW50IC52LWNhcmQgdGFibGUgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcXG59XFxuI3FyLWNvZGUgLnYtY2FyZCB0YWJsZSB0ZC5xcmxpc3QtbGlzdCA6bnRoLWNoaWxkKG9kZCksXFxuI3FyLXByaW50IC52LWNhcmQgdGFibGUgdGQucXJsaXN0LWxpc3QgOm50aC1jaGlsZChvZGQpIHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbiNxci1jb2RlIC52LWNhcmQgdGFibGUgdGQucXJsaXN0LWxpc3QgOm50aC1jaGlsZChldmVuKSxcXG4jcXItcHJpbnQgLnYtY2FyZCB0YWJsZSB0ZC5xcmxpc3QtbGlzdCA6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcbiNxci1jb2RlIC52LWNhcmQgdGFibGUgdGQucXJsaXN0LXFyLFxcbiNxci1wcmludCAudi1jYXJkIHRhYmxlIHRkLnFybGlzdC1xciB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcXG59XFxuI3FyLWNvZGUgY2FudmFzLFxcbiNxci1wcmludCBjYW52YXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTA0ZDM5ODgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUwNGQzOTg4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTA0ZDM5ODgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiaXRlbUxpc3RcIiB9IH0sXG4gICAgW1xuICAgICAgIV92bS5ub2RhdGFcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIFwic2luZ2xlLWxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwiaGlkZS1kZXRhaWxzXCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwidGVhbCBsaWdodGVuLTNcIiwgZGFyazogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zZXR0aW5nLnBhZ2VfdGl0bGUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaGVldCA9ICFfdm0uc2hlZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJmYXMgZmEtcXVlc3Rpb24tY2lyY2xlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2V0dGluZy5wYWdlX2NsYXNzLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLnNldHRpbmcuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICBcInJvd3MtcGVyLXBhZ2UtaXRlbXNcIjogX3ZtLnNldHRpbmcudmlld19yb3dfc2V0dGluZyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLml0ZW1fY29kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldF9fcmV2KHByb3BzLml0ZW0uaXRlbV9yZXYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pdGVtX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaXRlbV9tb2RlbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmxhc3RfbnVtID09PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi5pyq6ZuG6KiIXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5pdGVtLmxhc3RfbnVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsYXlvdXQgcHgtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaWNvbjogXCJcIiwgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1xclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiYmx1ZSBkYXJrZW4tMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRRcmNvZGUocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImZhcyBmYS1xcmNvZGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvaXRlbS9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLml0ZW1fY29kZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLml0ZW1fcmV2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGljb246IFwiXCIsIGZsYXQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZSBkYXJrZW4tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZmFzIGZhLWVkaXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIDIzNjkxNzc3OTdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJuby1yZXN1bHRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwibm8tcmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoJ1wiJyArIF92bS5fcyhfdm0uc2VhcmNoKSArICdcIiDjga7mpJzntKLntZDmnpzjgarjgZcnKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmNvbmZpZy5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGlkOiBcInFyLWNvZGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwidGVhbCBsaWdodGVuLTNcIiwgZGFyazogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbX3ZtLl92KFwiUVLjgrPjg7zjg4nnmbrooYxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uZG93bmxvYWQgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJmYXMgZmEtZG93bmxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicXJsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiLCBpZDogXCJxcmxpc3RcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29uZmlnLCBmdW5jdGlvbihxcmxpc3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHMzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIml0ZW1fcXJcIiwgeyBhdHRyczogeyBxcmxpc3Q6IHFybGlzdCB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInByaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmludG91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicXItcHJpbnRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiwgaWQ6IFwicXJsaXN0X3ByaW50XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbmZpZywgZnVuY3Rpb24ocXJsaXN0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpdGVtX3FyXCIsIHsgYXR0cnM6IHsgcXJsaXN0OiBxcmxpc3QgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJvdHRvbS1zaGVldFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hlZXQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hlZXQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaGVldFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zdWJoZWFkZXJcIiwgW192bS5fdihcImRldGFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb250YWluZXJcIiwgeyBhdHRyczogeyBcImdyaWQtbGlzdC14c1wiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICDmiYvphY3lt6XkuovjgpLlhYPjgavlj5flhaXlh6bnkIbjgpLooYzjgYjjgb7jgZnjgILlr77osaHjga7miYvphY3lt6XkuovjgpLpgbjmip7jgZnjgovjgajmiYvphY3kuIDopqfjg6rjgrnjg4jjgYzooajnpLrjgZXjgozjgb7jgZnjgIJcXG4gICAgICAgICAg6KGo56S644GV44KM44Gf44Oq44K544OI44KI44KK5Y+X44GR5YWl44KM44KL6YOo5p2Q44KS44OB44Kn44OD44Kv44GX44CB55S76Z2i5LiL6YOo44Gu5Y+X5YWl44Oc44K/44Oz44KS5oq85LiL44GX44Gm44GP44Gg44GV44GE44CC5Y+X5YWl5pWw6YeP44Gu5aSJ5pu044GM44GC44KL5aC05ZCI44Gv44CB44Oq44K544OI5Y+z6YOo44Gu57eo6ZuG44Kz44Oe44Oz44OJ44KS5oq844GX44Gm44GP44Gg44GV44GE44CCXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJxcmlvdXNseVwiLCB7IGF0dHJzOiB7IHZhbHVlOiBfdm0uY29uZmlnLCBzaXplOiAyMDAgfSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICBbXG4gICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCLpg6jmnZDorZjliKXmqJlcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGFibGVcIiwgW1xuICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwicXJsaXN0LWxpc3RcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5ZOB55WqXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5xcmxpc3QuaWQpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwicXJsaXN0LWxpc3RcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5ZOB5ZCNXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5xcmxpc3QubmFtZSkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJxcmxpc3QtbGlzdFwiIH0sIFtcbiAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlvaLlvI9cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnFybGlzdC5tb2RlbCkpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJxcmxpc3QtbGlzdFwiIH0sIFtcbiAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrqHnkIZcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuizh+adkCBB5qOaIDM2LUNcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInFybGlzdC1xclwiLCBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sXG4gICAgICAgICAgICBbX2MoXCJtYWtlLXFyXCIsIHsgYXR0cnM6IHsgY29uZmlnOiBfdm0ucXJsaXN0LnZhbHVlIH0gfSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMDRkMzk4OCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMDRkMzk4OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUwNGQzOTg4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFsZXJ0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQXBwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQm90dG9tU2hlZXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZEYXRhVGFibGUgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxpc3QgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZTcGFjZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZTdWJoZWFkZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUb29sYmFyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVG9vbGJhclRpdGxlIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQWxlcnQsVkFwcCxWQm90dG9tU2hlZXQsVkJ0bixWQ29udGFpbmVyLFZEYXRhVGFibGUsVkZsZXgsVkljb24sVkxheW91dCxWTGlzdCxWU3BhY2VyLFZTdWJoZWFkZXIsVlRleHRGaWVsZCxWVG9vbGJhcixWVG9vbGJhclRpdGxlfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMDRkMzk4OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMDRkMzk4OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwNGQzOTg4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UwNGQzOTg4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUwNGQzOTg4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMDRkMzk4OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwNGQzOTg4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2ZWJjOThjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01ha2VRUi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01ha2VRUi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNmViYzk4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNmViYzk4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFrZVFSLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmViYzk4YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmNmViYzk4YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFrZVFSLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFrZVFSLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ha2VRUi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZlYmM5OGMmXCIiLCJpbXBvcnQgaHRtbDJjYW52YXMgZnJvbSBcImh0bWwyY2FudmFzXCI7XG5pbXBvcnQgcGRmTWFrZSBmcm9tIFwicGRmbWFrZS9idWlsZC9wZGZtYWtlLm1pblwiO1xuXG4vLyA3MmRwaSDmmYLjga4gbW0gPT4gcHgg5o+b566X5q+UXG4vLyDoqIjnrpflvI/jga8gMS8oMjUuNG1tIC8gNzJkcGkpXG5jb25zdCBSQVRFID0gMi44MzQ2NDU2NjkyOTtcblxuLy8gQTMgMjk3bW0geCA0MTltbVxuLy8gQTQgMjEwIMOXIDI5NyDjg5/jg6pcbmNvbnN0IFBBR0VfV0lEVEggPSAyMTAgKiBSQVRFO1xuY29uc3QgUEFHRV9IRUlHSFQgPSAyOTcgKiBSQVRFO1xuXG4vLyBUT0RPOiDku67nva7jgY3jgILlvozjgafjg5rjg7zjgrjoqK3oqIjjgavlkIjjgo/jgZvjgabkv67mraNcbmNvbnN0IENPTlRFTlRfV0lEVEggPSAyMTAgKiBSQVRFO1xuY29uc3QgQ09OVEVOVF9IRUlHSFQgPSAyOTcgKiBSQVRFO1xuY29uc3QgUEFHRV9NQVJHSU5TID0gWzAgKiBSQVRFLCAwICogUkFURV07XG5cbi8qIGZvciB0c1xuaW50ZXJmYWNlIFBkZlByb3BzIHtcbiAgZGF0YVVybDogc3RyaW5nO1xuICBwYWdlU2l6ZT86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9O1xuICBwYWdlT3JpZW50YXRpb24/OiBzdHJpbmc7XG4gIGNvbnRlbnRTaXplPzoge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH07XG4gIHBhZ2VNYXJnaW5zPzogW251bWJlciwgbnVtYmVyXTtcbn1cbiovXG5cbi8qKlxuICogSFRNTOOBi+OCiVBERuOCkueUn+aIkFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGRmRnJvbUh0bWwoZWxlbWVudCkge1xuICBjb25zdCBwZGZQcm9wcyA9IGF3YWl0IGNyZWF0ZVBkZlByb3BzKGVsZW1lbnQpO1xuICBjcmVhdGVQZGYocGRmUHJvcHMpO1xufVxuXG4vKipcbiAqIFBERuWHuuWKm+eUqOOBrlBkZlByb3Bz44KS5L2c5oiQXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzT25seVFyQ29kZVxuICogQHJldHVybnMge1Byb21pc2U8UGRmUHJvcHM+fVxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVQZGZQcm9wcyhlbGVtZW50KSB7XG4gIC8vIGh0bWwyY2FudmFz5a6f6KGMXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLy8gSEFDSzog44OW44Op44Km44K25L6d5a2Y44GnY2FudmFz44K144Kk44K644GM5aSJ44KP44KJ44Gq44GE44KI44GG44Gr44CBc2NhbGXjga/lm7rlrprlgKTjgIJJReOBp+OBruOBvOOChOOBkeWvvuetluOBp+WNgeWIhuWkp+OBjeOCgeOBrjLjgavjgZfjgZ9cbiAgICBzY2FsZTogMlxuICB9O1xuICBjb25zdCBjYW52YXMgPSBhd2FpdCBodG1sMmNhbnZhcyhlbGVtZW50LCBvcHRpb25zKTtcblxuICBjb25zdCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuXG4gIGNvbnN0IHBkZlByb3BzID0ge1xuICAgIGRhdGFVcmwsXG4gICAgcGFnZVNpemU6IHtcbiAgICAgIHdpZHRoOiBQQUdFX1dJRFRILFxuICAgICAgaGVpZ2h0OiBQQUdFX0hFSUdIVFxuICAgIH0sXG4gICAgcGFnZU9yaWVudGF0aW9uOiBcIlBPUlRSQUlUXCIsXG4gICAgY29udGVudFNpemU6IHtcbiAgICAgIHdpZHRoOiBDT05URU5UX1dJRFRILFxuICAgICAgaGVpZ2h0OiBDT05URU5UX0hFSUdIVFxuICAgIH0sXG4gICAgcGFnZU1hcmdpbnM6IFBBR0VfTUFSR0lOU1xuICB9O1xuXG4gIHJldHVybiBwZGZQcm9wcztcbn1cblxuLyoqXG4gKiDjgqjjg7PjgrPjg7zjg4njgZXjgozjgZ/nlLvlg49VUkzjgpLosrzjgorku5jjgZHjgZ9QREbjgpLlh7rlipvjgZnjgotcbiAqIEBwYXJhbSB7UGRmUHJvcHN9IHBkZlByb3BzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBkZihwZGZQcm9wcykge1xuICBjb25zdCB7IGRhdGFVcmwsIGNvbnRlbnRTaXplLCBwYWdlTWFyZ2lucyB9ID0gcGRmUHJvcHM7XG4gIC8vIHRz44Ko44Op44O85Zue6YG/44Gu44Gf44KB5LiA5pmC55qE44GrYW55XG4gIGNvbnN0IHBhZ2VTaXplID0gcGRmUHJvcHMucGFnZVNpemU7XG4gIGNvbnN0IHBhZ2VPcmllbnRhdGlvbiA9IHBkZlByb3BzLnBhZ2VPcmllbnRhdGlvbjtcblxuICBjb25zdCBkb2N1bWVudERlZmluaXRpb25zID0ge1xuICAgIHBhZ2VTaXplLFxuICAgIHBhZ2VPcmllbnRhdGlvbixcbiAgICBjb250ZW50OiB7XG4gICAgICBpbWFnZTogZGF0YVVybCxcbiAgICAgIC4uLmNvbnRlbnRTaXplXG4gICAgfSxcbiAgICBwYWdlTWFyZ2luc1xuICB9O1xuXG4gIHBkZk1ha2UuY3JlYXRlUGRmKGRvY3VtZW50RGVmaW5pdGlvbnMpLmRvd25sb2FkKCk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhNTRlMWM4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDYXJkVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZDYXJkLFZDYXJkVGl0bGV9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVhNTRlMWM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVhNTRlMWM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTU0ZTFjOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YTU0ZTFjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhNTRlMWM4JlwiIiwiY29uc3QgX2RhdGFfdGFibGVfY29tbW9uX3NldHRpbmcgPSB7XG5cbiAgY29tOiB7XG4gICAgcGFnZV90aXRsZTogJ+WFsemAmuODquOCueODiOODmuODvOOCuCcsXG4gICAgcGFnZV9jbGFzczogJ2NvbS1kYXRhLXRhYmxlJyxcbiAgICBpbmZvOiBudWxsLFxuICAgIHZpZXdfcm93X3NldHRpbmc6IFtcbiAgICAgIDUsXG4gICAgICA1MCxcbiAgICAgIDEwMCxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCIkdnVldGlmeS5kYXRhSXRlcmF0b3Iucm93c1BlclBhZ2VBbGxcIixcbiAgICAgICAgdmFsdWU6IC0xXG4gICAgICB9XG4gICAgXSxcbiAgICBub19kYXRhX3RleHQ6IFwibG9hZGluZyAuLi4gXCIsXG4gIH0sXG4gIGl0ZW1fbGlzdDoge1xuICAgIHBhZ2VfdGl0bGU6ICflhbHpgJrjg6rjgrnjg4jjg5rjg7zjgrgnLFxuICAgIGhlYWRlcnM6IFt7XG4gICAgICB0ZXh0OiBcIuWTgeebruOCs+ODvOODiVwiLFxuICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2YWx1ZTogXCJpdGVtX2NvZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCLvvLLvvKXvvLZcIixcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmFsdWU6IFwiaXRlbV9yZXZcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCLlk4HlkI1cIixcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmFsdWU6IFwiaXRlbV9uYW1lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwi5Z6L5byPXCIsXG4gICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHZhbHVlOiBcIml0ZW1fbW9kZWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCLlnKjluqvmlbBcIixcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmFsdWU6IFwibGFzdF9udW1cIlxuICAgIH0sXG4gICAgXSxcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkdF9taXhfY29tOiBfZGF0YV90YWJsZV9jb21tb25fc2V0dGluZyxcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product_list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _com_Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../com/Loading */ "./resources/js/components/com/Loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Loading: _com_Loading__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      pdct: null,
      search: "",
      headers: [{
        text: "区分",
        value: "pdct_class",
        align: "center"
      }, {
        text: "形式",
        value: "model_id",
        align: "center"
      }, {
        text: "製造コード",
        value: "pdct_code",
        align: "center"
      }, {
        text: "総受注数",
        value: "all_num",
        align: "center"
      }, {
        text: "総受注金額",
        value: "all_price",
        align: "center"
      }],
      pagination: {
        sortBy: "model_id",
        descending: false
      }
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      axios.get("/db/pdct/list/live").then(function (res) {
        var d = _this.pdct = res.data;
        d.forEach(function (ar, index) {
          if (ar.pdct_status !== 9) {
            var another_del = false;
            var all_num = 0;
            var all_price = 0;
            ar.child.forEach(function (a, ind) {
              another_del = a.rcpt_status !== 9 ? true : another_del;
              all_num = all_num + a.order_num;
              all_price = all_price + a.order_num * a.order_price_one;
            });

            if (another_del === false) {
              ar.status.pdct_status = 9;
              ar.status.st_val = "リンク切れ";
              console.log("リンク切れ" + ar.const_code);
              axios.get("/db/pdct/nolink/" + ar.pdct_id);
            }

            ar.all_num = all_num;
            ar.all_price = all_price;
          }
        });
        _this.loading = false;
      });
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

        case "新規":
          addClass = "shinki";
          break;
      }

      return addClass;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/Loading.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/Loading.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "td p[data-v-09740352] {\n  text-align: center;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.v-chip[data-v-09740352] {\n  font-size: 0.9rem;\n  margin: 0;\n  border-radius: 5px;\n}\n.v-chip.v-chip.v-chip--outline[data-v-09740352] {\n  height: 24px;\n}\n.v-chip.buhin[data-v-09740352] {\n  border-color: #4e342e;\n  color: #4e342e;\n}\n.v-chip.shuri[data-v-09740352] {\n  border-color: #ef6c00;\n  color: #ef6c00;\n}\n.v-chip.seihin[data-v-09740352] {\n  border-color: #283593;\n  color: #283593;\n}\n.v-chip.etc[data-v-09740352] {\n  border-color: #2e7d32;\n  color: #2e7d32;\n}\n.v-chip.shinki[data-v-09740352] {\n  border-color: #4caf50;\n  color: #4caf50;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@-webkit-keyframes Flash1-data-v-220b7293 {\n50% {\n    opacity: 0;\n}\n}\n@keyframes Flash1-data-v-220b7293 {\n50% {\n    opacity: 0;\n}\n}\n.v-progress-circular[data-v-220b7293] {\n  margin: 1rem;\n}\n.loading[data-v-220b7293] {\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.inner[data-v-220b7293] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n.text[data-v-220b7293] {\n  color: #ff8c00;\n  background: -webkit-linear-gradient(0deg, #40e0d0, #ff8c00, #ff0080);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/index.vue?vue&type=template&id=09740352&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product/index.vue?vue&type=template&id=09740352&scoped=true& ***!
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
    "v-app",
    { attrs: { id: "main" } },
    [
      _c(
        "v-container",
        { attrs: { "grid-list-xs": "" } },
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
                      _c("h1", [_vm._v("製造データ")]),
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
                          items: _vm.pdct,
                          "item-key": "pdct_id",
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
                                _c("td", { staticClass: "text-xs-center" }, [
                                  _c(
                                    "p",
                                    { staticClass: "pt-1 pb-1" },
                                    [
                                      _c(
                                        "v-chip",
                                        {
                                          class: _vm.addClassClass(
                                            props.item.pdct_class
                                          ),
                                          attrs: { outline: "" }
                                        },
                                        [_vm._v(_vm._s(props.item.pdct_class))]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "pb-1" },
                                    [
                                      _c(
                                        "v-chip",
                                        {
                                          class: _vm.addClassClass(
                                            props.item.status.st_val
                                          ),
                                          attrs: { outline: "" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(props.item.status.st_val)
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-xs-center" }, [
                                  _vm._v(_vm._s(props.item.model_id))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-xs-center" }, [
                                  _vm._v(_vm._s(props.item.const_code))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-xs-center" }, [
                                  _vm._v(_vm._s(props.item.all_num))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-xs-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      props.item.all_price.toLocaleString()
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-xs-center" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "warning",
                                          outline: "",
                                          small: ""
                                        }
                                      },
                                      [_vm._v("受注")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "success",
                                          outline: "",
                                          small: ""
                                        }
                                      },
                                      [_vm._v("注文")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "primary",
                                          outline: "",
                                          small: ""
                                        }
                                      },
                                      [_vm._v("製造")]
                                    )
                                  ],
                                  1
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/Loading.vue?vue&type=template&id=220b7293&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/Loading.vue?vue&type=template&id=220b7293&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    "v-layout",
    {
      attrs: {
        "align-space-around": "",
        "justify-center": "",
        "fill-height": ""
      }
    },
    [
      _c("v-flex", { staticClass: "loading", attrs: { xs12: "" } }, [
        _c(
          "div",
          { staticClass: "inner" },
          [
            _c("v-progress-circular", {
              attrs: { size: 50, color: "primary", indeterminate: "" }
            }),
            _vm._v(" "),
            _c("v-progress-circular", {
              attrs: { width: 3, color: "red", indeterminate: "" }
            }),
            _vm._v(" "),
            _c("v-progress-circular", {
              attrs: { size: 70, width: 7, color: "purple", indeterminate: "" }
            }),
            _vm._v(" "),
            _c("v-progress-circular", {
              attrs: { width: 3, color: "green", indeterminate: "" }
            }),
            _vm._v(" "),
            _c("v-progress-circular", {
              attrs: { size: 50, color: "amber", indeterminate: "" }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "display-3 text" }, [_vm._v("Loading Now")])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Product/index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Product/index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_09740352_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=09740352&scoped=true& */ "./resources/js/components/Product/index.vue?vue&type=template&id=09740352&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/Product/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_09740352_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true& */ "./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_09740352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_09740352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "09740352",
  null
  
)

/* vuetify-loader */







_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VApp"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VChip: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VChip"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VDataTable: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VDataTable"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Product/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_09740352_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/index.vue?vue&type=style&index=0&id=09740352&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_09740352_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_09740352_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_09740352_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_09740352_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_09740352_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Product/index.vue?vue&type=template&id=09740352&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Product/index.vue?vue&type=template&id=09740352&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_09740352_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=09740352&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product/index.vue?vue&type=template&id=09740352&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_09740352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_09740352_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/com/Loading.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/com/Loading.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading_vue_vue_type_template_id_220b7293_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=220b7293&scoped=true& */ "./resources/js/components/com/Loading.vue?vue&type=template&id=220b7293&scoped=true&");
/* harmony import */ var _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.vue?vue&type=script&lang=js& */ "./resources/js/components/com/Loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loading_vue_vue_type_style_index_0_id_220b7293_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true& */ "./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loading_vue_vue_type_template_id_220b7293_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loading_vue_vue_type_template_id_220b7293_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "220b7293",
  null
  
)

/* vuetify-loader */




_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VProgressCircular: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VProgressCircular"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/com/Loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/com/Loading.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/com/Loading.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/Loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_220b7293_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/Loading.vue?vue&type=style&index=0&id=220b7293&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_220b7293_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_220b7293_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_220b7293_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_220b7293_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_220b7293_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/com/Loading.vue?vue&type=template&id=220b7293&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/com/Loading.vue?vue&type=template&id=220b7293&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_220b7293_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=template&id=220b7293&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/Loading.vue?vue&type=template&id=220b7293&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_220b7293_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_220b7293_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZHVjdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Mb2FkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LnZ1ZT85MTdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Mb2FkaW5nLnZ1ZT9jZTc5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2R1Y3QvaW5kZXgudnVlPzMxYmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0xvYWRpbmcudnVlPzYxYWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZHVjdC9pbmRleC52dWU/NWE2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vTG9hZGluZy52dWU/ZmI1MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LnZ1ZT9lODU2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1Byb2R1Y3QvaW5kZXgudnVlP2E2NDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUHJvZHVjdC9pbmRleC52dWU/NmY1ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vTG9hZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0xvYWRpbmcudnVlPzA2ZmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0xvYWRpbmcudnVlP2EwMWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0xvYWRpbmcudnVlP2VlMTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBO0FBRUE7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGdCQUZBO0FBR0EsZ0JBSEE7QUFJQSxnQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSEEsRUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSkEsRUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTEEsQ0FKQTtBQVdBO0FBQ0EsMEJBREE7QUFFQTtBQUZBO0FBWEE7QUFnQkEsR0FyQkE7QUFzQkE7QUFDQTtBQUNBLEdBeEJBO0FBeUJBO0FBQ0EsUUFEQSxrQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUpBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQW5CQTtBQW9CQTtBQUNBLE9BdkJBO0FBd0JBLEtBMUJBO0FBMkJBLGlCQTNCQSx5QkEyQkEsR0EzQkEsRUEyQkE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFmQTs7QUFpQkE7QUFDQTtBQS9DQTtBQXpCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBLG1FOzs7Ozs7Ozs7OztBQ2hCQSwyQkFBMkIsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDNUY7QUFDQSxjQUFjLFFBQVMsMEJBQTBCLHVCQUF1QixzQkFBc0IscUJBQXFCLEdBQUcsNEJBQTRCLHNCQUFzQixjQUFjLHVCQUF1QixHQUFHLG1EQUFtRCxpQkFBaUIsR0FBRyxrQ0FBa0MsMEJBQTBCLG1CQUFtQixHQUFHLGtDQUFrQywwQkFBMEIsbUJBQW1CLEdBQUcsbUNBQW1DLDBCQUEwQixtQkFBbUIsR0FBRyxnQ0FBZ0MsMEJBQTBCLG1CQUFtQixHQUFHLG1DQUFtQywwQkFBMEIsbUJBQW1CLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNGanJCLDJCQUEyQixtQkFBTyxDQUFDLDhHQUF5RDtBQUM1RjtBQUNBLGNBQWMsUUFBUyw4Q0FBOEMsT0FBTyxpQkFBaUIsR0FBRyxHQUFHLHFDQUFxQyxPQUFPLGlCQUFpQixHQUFHLEdBQUcseUNBQXlDLGlCQUFpQixHQUFHLDZCQUE2Qix1QkFBdUIsNEJBQTRCLHdCQUF3QixHQUFHLDJCQUEyQix1QkFBdUIsYUFBYSxjQUFjLGlEQUFpRCx5REFBeUQsR0FBRywwQkFBMEIsbUJBQW1CLHlFQUF5RSxrQ0FBa0MseUNBQXlDLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDRDVzQixjQUFjLG1CQUFPLENBQUMsc3hCQUFtYjs7QUFFemMsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRHQUF5RDs7QUFFOUU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQyxzeEJBQXFiOztBQUUzYyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNEdBQXlEOztBQUU5RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMscUJBQXFCLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLGVBQWUsRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBO0FBQ0EscUNBQXFDLDJCQUEyQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQ0FBZ0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0IsaUNBQWlDLFdBQVcsRUFBRTtBQUNsRTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ3dIO0FBQ3RGO0FBQ0E7QUFDQztBQUNLO0FBQ0E7QUFDQTtBQUN4Qyw4SEFBaUIsYUFBYSxzREFBSSxDQUFDLHNEQUFJLENBQUMsd0RBQUssQ0FBQyxrRUFBVSxDQUFDLGtFQUFVLENBQUMsa0VBQVUsQ0FBQzs7O0FBRy9FO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNsRGY7QUFBQTtBQUFBLHdDQUFpUCxDQUFnQiwyUkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyUTtBQUFBO0FBQUE7QUFBQTtBQUFtZixDQUFnQiwwZUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2Z0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHNUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLDhGQUFNO0FBQ1IsRUFBRSx1R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUN3SDtBQUNyRjtBQUNFO0FBQ1U7QUFDL0MsOEhBQWlCLGFBQWEsd0RBQUssQ0FBQyw0REFBTyxDQUFDLGdGQUFpQixDQUFDOzs7QUFHOUQ7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQy9DZjtBQUFBO0FBQUEsd0NBQW1QLENBQWdCLDZSQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZRO0FBQUE7QUFBQTtBQUFBO0FBQXFmLENBQWdCLDRlQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoicHJvZHVjdF9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1hcHAgaWQ9XCJtYWluXCI+XG4gICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC14cz5cbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XG4gICAgICAgIDxMb2FkaW5nIHYtaWY9XCJsb2FkaW5nXCI+PC9Mb2FkaW5nPlxuICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICA8aDE+6KO96YCg44OH44O844K/PC9oMT5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAgIGxhYmVsPVwi5qSc57SiXCJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxuICAgICAgICAgICAgcHJlcGVuZC1pbm5lci1pY29uPVwiZmFzIGZhLXNlYXJjaFwiXG4gICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgIDx2LWRhdGEtdGFibGVcbiAgICAgICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICAgICAgICA6aXRlbXM9XCJwZGN0XCJcbiAgICAgICAgICAgIGl0ZW0ta2V5PVwicGRjdF9pZFwiXG4gICAgICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcbiAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLWl0ZW1zPVwiWzI1LDUwLHsndGV4dCc6J0FsbCcsJ3ZhbHVlJzotMX1dXCJcbiAgICAgICAgICAgIDpwYWdpbmF0aW9uLnN5bmM9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW1zPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInB0LTEgcGItMVwiPlxuICAgICAgICAgICAgICAgICAgPHYtY2hpcFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImFkZENsYXNzQ2xhc3MocHJvcHMuaXRlbS5wZGN0X2NsYXNzKVwiXG4gICAgICAgICAgICAgICAgICA+e3sgcHJvcHMuaXRlbS5wZGN0X2NsYXNzIH19PC92LWNoaXA+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGItMVwiPlxuICAgICAgICAgICAgICAgICAgPHYtY2hpcFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImFkZENsYXNzQ2xhc3MocHJvcHMuaXRlbS5zdGF0dXMuc3RfdmFsKVwiXG4gICAgICAgICAgICAgICAgICA+e3sgcHJvcHMuaXRlbS5zdGF0dXMuc3RfdmFsIH19PC92LWNoaXA+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0ubW9kZWxfaWQgfX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0uY29uc3RfY29kZSB9fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+e3sgcHJvcHMuaXRlbS5hbGxfbnVtIH19PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLmFsbF9wcmljZS50b0xvY2FsZVN0cmluZygpIH19PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJ3YXJuaW5nXCIgb3V0bGluZSBzbWFsbD7lj5fms6g8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInN1Y2Nlc3NcIiBvdXRsaW5lIHNtYWxsPuazqOaWhzwvdi1idG4+XG4gICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIG91dGxpbmUgc21hbGw+6KO96YCgPC92LWJ0bj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90cmFuc2l0aW9uPlxuICAgIDwvdi1jb250YWluZXI+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vLi4vY29tL0xvYWRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgTG9hZGluZ1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHBkY3Q6IG51bGwsXG4gICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICBoZWFkZXJzOiBbXG4gICAgICAgIHsgdGV4dDogXCLljLrliIZcIiwgdmFsdWU6IFwicGRjdF9jbGFzc1wiLCBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICB7IHRleHQ6IFwi5b2i5byPXCIsIHZhbHVlOiBcIm1vZGVsX2lkXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCLoo73pgKDjgrPjg7zjg4lcIiwgdmFsdWU6IFwicGRjdF9jb2RlXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCLnt4/lj5fms6jmlbBcIiwgdmFsdWU6IFwiYWxsX251bVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICB7IHRleHQ6IFwi57eP5Y+X5rOo6YeR6aGNXCIsIHZhbHVlOiBcImFsbF9wcmljZVwiLCBhbGlnbjogXCJjZW50ZXJcIiB9XG4gICAgICBdLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBzb3J0Qnk6IFwibW9kZWxfaWRcIixcbiAgICAgICAgZGVzY2VuZGluZzogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGluaXQoKSB7XG4gICAgICBheGlvcy5nZXQoXCIvZGIvcGRjdC9saXN0L2xpdmVcIikudGhlbihyZXMgPT4ge1xuICAgICAgICBsZXQgZCA9ICh0aGlzLnBkY3QgPSByZXMuZGF0YSk7XG4gICAgICAgIGQuZm9yRWFjaCgoYXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGFyLnBkY3Rfc3RhdHVzICE9PSA5KSB7XG4gICAgICAgICAgICBsZXQgYW5vdGhlcl9kZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBhbGxfbnVtID0gMDtcbiAgICAgICAgICAgIGxldCBhbGxfcHJpY2UgPSAwO1xuICAgICAgICAgICAgYXIuY2hpbGQuZm9yRWFjaCgoYSwgaW5kKSA9PiB7XG4gICAgICAgICAgICAgIGFub3RoZXJfZGVsID0gYS5yY3B0X3N0YXR1cyAhPT0gOSA/IHRydWUgOiBhbm90aGVyX2RlbDtcbiAgICAgICAgICAgICAgYWxsX251bSA9IGFsbF9udW0gKyBhLm9yZGVyX251bTtcbiAgICAgICAgICAgICAgYWxsX3ByaWNlID0gYWxsX3ByaWNlICsgYS5vcmRlcl9udW0gKiBhLm9yZGVyX3ByaWNlX29uZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFub3RoZXJfZGVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBhci5zdGF0dXMucGRjdF9zdGF0dXMgPSA5O1xuICAgICAgICAgICAgICBhci5zdGF0dXMuc3RfdmFsID0gXCLjg6rjg7Pjgq/liIfjgoxcIjtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLjg6rjg7Pjgq/liIfjgoxcIiArIGFyLmNvbnN0X2NvZGUpO1xuICAgICAgICAgICAgICBheGlvcy5nZXQoXCIvZGIvcGRjdC9ub2xpbmsvXCIgKyBhci5wZGN0X2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyLmFsbF9udW0gPSBhbGxfbnVtO1xuICAgICAgICAgICAgYXIuYWxsX3ByaWNlID0gYWxsX3ByaWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZGRDbGFzc0NsYXNzKHZhbCkge1xuICAgICAgbGV0IGFkZENsYXNzID0gXCJcIjtcbiAgICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAgIGNhc2UgXCLpg6jlk4FcIjpcbiAgICAgICAgICBhZGRDbGFzcyA9IFwiYnVoaW5cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIuS/rueQhlwiOlxuICAgICAgICAgIGFkZENsYXNzID0gXCJzaHVyaVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwi6KO95ZOBXCI6XG4gICAgICAgICAgYWRkQ2xhc3MgPSBcInNlaWhpblwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwi5LuWXCI6XG4gICAgICAgICAgYWRkQ2xhc3MgPSBcImV0Y1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwi5paw6KaPXCI6XG4gICAgICAgICAgYWRkQ2xhc3MgPSBcInNoaW5raVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFkZENsYXNzO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG50ZCB7XG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4udi1jaGlwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnYtY2hpcC52LWNoaXAudi1jaGlwLS1vdXRsaW5lIHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLnYtY2hpcC5idWhpbiB7XG4gIGJvcmRlci1jb2xvcjogIzRlMzQyZTtcbiAgY29sb3I6ICM0ZTM0MmU7XG59XG4udi1jaGlwLnNodXJpIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWY2YzAwO1xuICBjb2xvcjogI2VmNmMwMDtcbn1cbi52LWNoaXAuc2VpaGluIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjgzNTkzO1xuICBjb2xvcjogIzI4MzU5Mztcbn1cbi52LWNoaXAuZXRjIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmU3ZDMyO1xuICBjb2xvcjogIzJlN2QzMjtcbn1cbi52LWNoaXAuc2hpbmtpIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xuICBjb2xvcjogIzRjYWY1MDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDx2LWxheW91dCBhbGlnbi1zcGFjZS1hcm91bmQganVzdGlmeS1jZW50ZXIgZmlsbC1oZWlnaHQ+XG4gICAgPHYtZmxleCB4czEyIGNsYXNzPVwibG9hZGluZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgIDx2LXByb2dyZXNzLWNpcmN1bGFyIDpzaXplPVwiNTBcIiBjb2xvcj1cInByaW1hcnlcIiBpbmRldGVybWluYXRlPjwvdi1wcm9ncmVzcy1jaXJjdWxhcj5cbiAgICAgICAgPHYtcHJvZ3Jlc3MtY2lyY3VsYXIgOndpZHRoPVwiM1wiIGNvbG9yPVwicmVkXCIgaW5kZXRlcm1pbmF0ZT48L3YtcHJvZ3Jlc3MtY2lyY3VsYXI+XG4gICAgICAgIDx2LXByb2dyZXNzLWNpcmN1bGFyIDpzaXplPVwiNzBcIiA6d2lkdGg9XCI3XCIgY29sb3I9XCJwdXJwbGVcIiBpbmRldGVybWluYXRlPjwvdi1wcm9ncmVzcy1jaXJjdWxhcj5cbiAgICAgICAgPHYtcHJvZ3Jlc3MtY2lyY3VsYXIgOndpZHRoPVwiM1wiIGNvbG9yPVwiZ3JlZW5cIiBpbmRldGVybWluYXRlPjwvdi1wcm9ncmVzcy1jaXJjdWxhcj5cbiAgICAgICAgPHYtcHJvZ3Jlc3MtY2lyY3VsYXIgOnNpemU9XCI1MFwiIGNvbG9yPVwiYW1iZXJcIiBpbmRldGVybWluYXRlPjwvdi1wcm9ncmVzcy1jaXJjdWxhcj5cbiAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LTMgdGV4dFwiPkxvYWRpbmcgTm93PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC92LWZsZXg+XG4gIDwvdi1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge307XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGtleWZyYW1lcyBGbGFzaDEge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi52LXByb2dyZXNzLWNpcmN1bGFyIHtcbiAgbWFyZ2luOiAxcmVtO1xufVxuLmxvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi50ZXh0IHtcbiAgY29sb3I6ICNmZjhjMDA7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsICM0MGUwZDAsICNmZjhjMDAsICNmZjAwODApO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvLyBhbmltYXRpb246IEZsYXNoMSAwLjFzIGluZmluaXRlO1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidGQgcFtkYXRhLXYtMDk3NDAzNTJdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnYtY2hpcFtkYXRhLXYtMDk3NDAzNTJdIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4udi1jaGlwLnYtY2hpcC52LWNoaXAtLW91dGxpbmVbZGF0YS12LTA5NzQwMzUyXSB7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbi52LWNoaXAuYnVoaW5bZGF0YS12LTA5NzQwMzUyXSB7XFxuICBib3JkZXItY29sb3I6ICM0ZTM0MmU7XFxuICBjb2xvcjogIzRlMzQyZTtcXG59XFxuLnYtY2hpcC5zaHVyaVtkYXRhLXYtMDk3NDAzNTJdIHtcXG4gIGJvcmRlci1jb2xvcjogI2VmNmMwMDtcXG4gIGNvbG9yOiAjZWY2YzAwO1xcbn1cXG4udi1jaGlwLnNlaWhpbltkYXRhLXYtMDk3NDAzNTJdIHtcXG4gIGJvcmRlci1jb2xvcjogIzI4MzU5MztcXG4gIGNvbG9yOiAjMjgzNTkzO1xcbn1cXG4udi1jaGlwLmV0Y1tkYXRhLXYtMDk3NDAzNTJdIHtcXG4gIGJvcmRlci1jb2xvcjogIzJlN2QzMjtcXG4gIGNvbG9yOiAjMmU3ZDMyO1xcbn1cXG4udi1jaGlwLnNoaW5raVtkYXRhLXYtMDk3NDAzNTJdIHtcXG4gIGJvcmRlci1jb2xvcjogIzRjYWY1MDtcXG4gIGNvbG9yOiAjNGNhZjUwO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkAtd2Via2l0LWtleWZyYW1lcyBGbGFzaDEtZGF0YS12LTIyMGI3MjkzIHtcXG41MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyBGbGFzaDEtZGF0YS12LTIyMGI3MjkzIHtcXG41MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuLnYtcHJvZ3Jlc3MtY2lyY3VsYXJbZGF0YS12LTIyMGI3MjkzXSB7XFxuICBtYXJnaW46IDFyZW07XFxufVxcbi5sb2FkaW5nW2RhdGEtdi0yMjBiNzI5M10ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaW5uZXJbZGF0YS12LTIyMGI3MjkzXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLnRleHRbZGF0YS12LTIyMGI3MjkzXSB7XFxuICBjb2xvcjogI2ZmOGMwMDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsICM0MGUwZDAsICNmZjhjMDAsICNmZjAwODApO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk3NDAzNTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5NzQwMzUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk3NDAzNTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjBiNzI5MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjBiNzI5MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjIwYjcyOTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwibWFpblwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICB7IGF0dHJzOiB7IFwiZ3JpZC1saXN0LXhzXCI6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgID8gX2MoXCJMb2FkaW5nXCIpXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuijvemAoOODh+ODvOOCv1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5qSc57SiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBcImZhcyBmYS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wZGN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCI6IFwicGRjdF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS1pdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIkFsbFwiLCB2YWx1ZTogLTEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBfdm0ucGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnBhZ2luYXRpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2luYXRpb24gPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHQtMSBwYi0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNoaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmFkZENsYXNzQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ucGRjdF9jbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5wZGN0X2NsYXNzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBiLTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uYWRkQ2xhc3NDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5zdGF0dXMuc3RfdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9wcy5pdGVtLnN0YXR1cy5zdF92YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ubW9kZWxfaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5jb25zdF9jb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uYWxsX251bSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLmFsbF9wcmljZS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+X5rOoXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuazqOaWh1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLoo73pgKBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWxheW91dFwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYWxpZ24tc3BhY2UtYXJvdW5kXCI6IFwiXCIsXG4gICAgICAgIFwianVzdGlmeS1jZW50ZXJcIjogXCJcIixcbiAgICAgICAgXCJmaWxsLWhlaWdodFwiOiBcIlwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInYtZmxleFwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmdcIiwgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlubmVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInYtcHJvZ3Jlc3MtY2lyY3VsYXJcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiA1MCwgY29sb3I6IFwicHJpbWFyeVwiLCBpbmRldGVybWluYXRlOiBcIlwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi1wcm9ncmVzcy1jaXJjdWxhclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiAzLCBjb2xvcjogXCJyZWRcIiwgaW5kZXRlcm1pbmF0ZTogXCJcIiB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInYtcHJvZ3Jlc3MtY2lyY3VsYXJcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiA3MCwgd2lkdGg6IDcsIGNvbG9yOiBcInB1cnBsZVwiLCBpbmRldGVybWluYXRlOiBcIlwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi1wcm9ncmVzcy1jaXJjdWxhclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiAzLCBjb2xvcjogXCJncmVlblwiLCBpbmRldGVybWluYXRlOiBcIlwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidi1wcm9ncmVzcy1jaXJjdWxhclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IDUwLCBjb2xvcjogXCJhbWJlclwiLCBpbmRldGVybWluYXRlOiBcIlwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXktMyB0ZXh0XCIgfSwgW192bS5fdihcIkxvYWRpbmcgTm93XCIpXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5NzQwMzUyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5NzQwMzUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDk3NDAzNTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQXBwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2hpcCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkRhdGFUYWJsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcCxWQnRuLFZDaGlwLFZDb250YWluZXIsVkRhdGFUYWJsZSxWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOTc0MDM1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOTc0MDM1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5NzQwMzUyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA5NzQwMzUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk3NDAzNTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5NzQwMzUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk3NDAzNTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyMGI3MjkzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyMGI3MjkzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjIwYjcyOTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlByb2dyZXNzQ2lyY3VsYXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZGbGV4LFZMYXlvdXQsVlByb2dyZXNzQ2lyY3VsYXJ9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIyMGI3MjkzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIyMGI3MjkzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjBiNzI5MyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMjBiNzI5MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0xvYWRpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjBiNzI5MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjBiNzI5MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjIwYjcyOTMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9
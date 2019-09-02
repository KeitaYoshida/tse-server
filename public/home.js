(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommonCards.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CommonCards.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_CardValueList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/CardValueList.js */ "./resources/js/mixins/CardValueList.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_CardValueList_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ["card_name"],
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    ld: function ld() {
      this.loading = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommonCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonCards */ "./resources/js/components/CommonCards.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CommonCards: _CommonCards__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      yoyaku_list: null,
      tabs: null,
      tab_list: ["Information", "手配予約", "各種申請", "承認待ち"],
      tab_list_counter: []
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      axios.get("/db/order/yoyaku/gaiyou").then(function (res) {
        _this.yoyaku_list = res.data;
        _this.tab_list_counter[1] = res.data.length;
      });
      var d = {
        text: "hoge",
        val: "huga"
      }; // axios.post("/Firebase/test", d).then(res => {
      //   console.log(res);
      // });
    },
    order_horyu: function order_horyu(item) {
      if (item.cnt_status === 0) {
        item.cnt_status = 8;
        item.order_status.val = "保留";
        axios.get("/db/order/list/col/up/" + item.cnt_orderlist_id + "/cnt_status/" + 8);
      } else {
        item.cnt_status = 0;
        item.order_status.val = "承認待ち";
        axios.get("/db/order/list/col/up/" + item.cnt_orderlist_id + "/cnt_status/" + 0);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".v-card[data-v-5ea7671d] {\n  padding-bottom: 3rem;\n}\n.headline[data-v-5ea7671d] {\n  font-size: 1.3rem !important;\n}\np[data-v-5ea7671d] {\n  width: 80%;\n  margin: 0 auto;\n  font-size: 0.9rem;\n  text-align: center;\n}\n.progress[data-v-5ea7671d] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -35px;\n  margin-top: -35px;\n  background-color: transparent;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "h1[data-v-782dcf83] {\n  margin-top: 40px;\n}\n.layout.gadget[data-v-782dcf83] {\n  margin-top: 40px;\n}\n.top-alert.v-card[data-v-782dcf83] {\n  background: transparent;\n}\n.tab_list[data-v-782dcf83] {\n  background: transparent;\n}\n.order_act_btn[data-v-782dcf83] {\n  width: 25%;\n}\n.info-box[data-v-782dcf83] {\n  font-size: 1rem;\n}\n.info-box .v-card[data-v-782dcf83] {\n  border: 1px solid #1a237e;\n  color: #1a237e;\n  border-radius: 5px;\n  height: 100%;\n  background: transparent;\n}\n.info-box .v-chip[data-v-782dcf83] {\n  font-size: 0.8rem;\n  border-radius: 5px;\n  padding: 0;\n}\n.info-box .v-chip.o-flg-0[data-v-782dcf83] {\n  color: #1a237e;\n  border-color: #1a237e;\n}\n.info-box .v-chip.l-flg-0[data-v-782dcf83] {\n  color: #1a237e;\n  border-color: #1a237e;\n}\n.info-box .v-chip.o-flg-1[data-v-782dcf83] {\n  color: #bf360c;\n  border-color: #bf360c;\n}\n.info-box .v-chip.o-flg-2[data-v-782dcf83] {\n  color: #1b5e20;\n  border-color: #1b5e20;\n}\n.info-box p[data-v-782dcf83] {\n  margin: 0;\n  padding: 0;\n}", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommonCards.vue?vue&type=template&id=5ea7671d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CommonCards.vue?vue&type=template&id=5ea7671d&scoped=true& ***!
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
    "v-card",
    {
      class: _vm.card_data[_vm.card_name].class_text,
      attrs: {
        color: _vm.card_data[_vm.card_name].color,
        to: _vm.card_data[_vm.card_name].links + "/" + _vm.card_name,
        height: "100%",
        hover: ""
      },
      on: {
        click: function($event) {
          return _vm.ld()
        }
      }
    },
    [
      _vm.loading === false
        ? [
            _c("v-card-title", { attrs: { "primary-title": "" } }, [
              _c("div", { staticClass: "headline" }, [
                _vm._v(_vm._s(_vm.card_data[_vm.card_name].title))
              ]),
              _vm._v(" "),
              _c("hr")
            ]),
            _vm._v(" "),
            typeof _vm.card_data[_vm.card_name].text === "string"
              ? _c("p", [_vm._v(_vm._s(_vm.card_data[_vm.card_name].text))])
              : _vm._l(_vm.card_data[_vm.card_name].text, function(item) {
                  return _c("p", { key: item.id }, [_vm._v(_vm._s(item))])
                })
          ]
        : [
            _c("v-progress-circular", {
              staticClass: "progress",
              attrs: { size: 70, width: 7, indeterminate: "" }
            })
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& ***!
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
    [
      _c(
        "v-container",
        { attrs: { "grid-list-sm": "" } },
        [
          _c("h1", { staticClass: "text-xs-center mb-5" }, [
            _vm._v("Welcom to Torks WEB")
          ]),
          _vm._v(" "),
          _vm.yoyaku_list
            ? _c(
                "v-layout",
                { staticClass: "mb-4", attrs: { wrap: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", md10: "", "offset-md1": "" } },
                    [
                      _c(
                        "v-tabs",
                        {
                          staticClass: "tab_list mb-3",
                          attrs: {
                            color: "transparent",
                            "slider-color": "primary",
                            "fixed-tabs": ""
                          },
                          model: {
                            value: _vm.tabs,
                            callback: function($$v) {
                              _vm.tabs = $$v
                            },
                            expression: "tabs"
                          }
                        },
                        _vm._l(_vm.tab_list, function(item, index) {
                          return _c(
                            "v-tab",
                            { key: index },
                            [
                              index === 0 && _vm.tabs === 0
                                ? [
                                    _c(
                                      "v-icon",
                                      { attrs: { small: "", left: "" } },
                                      [_vm._v("far fa-meh")]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              index === 0 && _vm.tabs !== 0
                                ? [
                                    _c(
                                      "v-icon",
                                      { attrs: { small: "", left: "" } },
                                      [_vm._v("far fa-smile")]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.tab_list_counter[index] !== undefined
                                ? [
                                    _c(
                                      "v-badge",
                                      {
                                        attrs: { right: "", small: "" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "badge",
                                              fn: function() {
                                                return [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.tab_list_counter[
                                                          index
                                                        ]
                                                      )
                                                    )
                                                  ])
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(item) +
                                            "\n              "
                                        )
                                      ]
                                    )
                                  ]
                                : [_vm._v(_vm._s(item))]
                            ],
                            2
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _vm.tabs !== null
                        ? _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.tabs,
                                callback: function($$v) {
                                  _vm.tabs = $$v
                                },
                                expression: "tabs"
                              }
                            },
                            [
                              _c("v-tab-item"),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "top-alert pa-2",
                                      attrs: { flat: "" }
                                    },
                                    [
                                      _c(
                                        "v-layout",
                                        { attrs: { wrap: "" } },
                                        [
                                          _c(
                                            "v-flex",
                                            {
                                              staticClass: "text-xs-center",
                                              attrs: { xs12: "" }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "order_act_btn",
                                                  attrs: {
                                                    color: "success",
                                                    flat: "",
                                                    large: "",
                                                    outline: "",
                                                    to: "/order_list/yoyaku"
                                                  }
                                                },
                                                [_vm._v("一括手配")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.yoyaku_list, function(
                                            item,
                                            index
                                          ) {
                                            return [
                                              _c(
                                                "v-flex",
                                                {
                                                  key: index,
                                                  staticClass: "info-box",
                                                  attrs: { xs4: "", lg3: "" }
                                                },
                                                [
                                                  _c(
                                                    "v-card",
                                                    {
                                                      staticClass: "pt-2",
                                                      attrs: { flat: "" }
                                                    },
                                                    [
                                                      _c(
                                                        "nobr",
                                                        [
                                                          _c(
                                                            "v-chip",
                                                            {
                                                              class:
                                                                "ml-3 " +
                                                                "o-flg-" +
                                                                item.cnt_order_list_status,
                                                              attrs: {
                                                                small: "",
                                                                outline: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.status
                                                                    .val
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-chip",
                                                            {
                                                              class:
                                                                "l-flg-" +
                                                                item.cnt_status,
                                                              attrs: {
                                                                small: "",
                                                                outline: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item
                                                                    .order_status
                                                                    .val
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-card-text",
                                                        {
                                                          staticClass:
                                                            "text-xs-center pt-2 pb-0 mb-0"
                                                        },
                                                        [
                                                          _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                item.cnt_model
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                item.cnt_order_code
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                item.user_yoyaku
                                                              )
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-card-actions",
                                                        [
                                                          _c(
                                                            "v-layout",
                                                            {
                                                              attrs: {
                                                                wrap: ""
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-flex",
                                                                {
                                                                  staticClass:
                                                                    "text-xs-center",
                                                                  attrs: {
                                                                    xs6: ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        flat:
                                                                          "",
                                                                        color:
                                                                          "primary",
                                                                        to:
                                                                          "/order_list/" +
                                                                          item.cnt_order_code
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "詳細"
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-flex",
                                                                {
                                                                  staticClass:
                                                                    "text-xs-center",
                                                                  attrs: {
                                                                    xs6: ""
                                                                  }
                                                                },
                                                                [
                                                                  item.cnt_status ===
                                                                  0
                                                                    ? [
                                                                        _c(
                                                                          "v-btn",
                                                                          {
                                                                            attrs: {
                                                                              flat:
                                                                                "",
                                                                              color:
                                                                                "primary"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.order_horyu(
                                                                                  item
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "保留"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    : [
                                                                        _c(
                                                                          "v-btn",
                                                                          {
                                                                            attrs: {
                                                                              flat:
                                                                                "",
                                                                              color:
                                                                                "primary"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.order_horyu(
                                                                                  item
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "承認待ち"
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
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
                                                ],
                                                1
                                              )
                                            ]
                                          })
                                        ],
                                        2
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-tab-item"),
                              _vm._v(" "),
                              _c("v-tab-item")
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "item_list" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [
                  _c("common-cards", {
                    attrs: { card_name: "equipStartCheck" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "petition" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "inventory" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "readfile" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "model_mst" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "recept_list" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "product_list" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "user_info" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "ukeire" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "tehaisaki" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "d-flex": "", xs6: "", md4: "", lg3: "" } },
                [_c("common-cards", { attrs: { card_name: "work" } })],
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

/***/ "./resources/js/components/CommonCards.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CommonCards.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommonCards_vue_vue_type_template_id_5ea7671d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonCards.vue?vue&type=template&id=5ea7671d&scoped=true& */ "./resources/js/components/CommonCards.vue?vue&type=template&id=5ea7671d&scoped=true&");
/* harmony import */ var _CommonCards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommonCards.vue?vue&type=script&lang=js& */ "./resources/js/components/CommonCards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CommonCards_vue_vue_type_style_index_0_id_5ea7671d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true& */ "./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CommonCards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommonCards_vue_vue_type_template_id_5ea7671d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CommonCards_vue_vue_type_template_id_5ea7671d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ea7671d",
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__["VProgressCircular"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CommonCards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CommonCards.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CommonCards.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./CommonCards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommonCards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_style_index_0_id_5ea7671d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommonCards.vue?vue&type=style&index=0&id=5ea7671d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_style_index_0_id_5ea7671d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_style_index_0_id_5ea7671d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_style_index_0_id_5ea7671d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_style_index_0_id_5ea7671d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_style_index_0_id_5ea7671d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/CommonCards.vue?vue&type=template&id=5ea7671d&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/CommonCards.vue?vue&type=template&id=5ea7671d&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_template_id_5ea7671d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./CommonCards.vue?vue&type=template&id=5ea7671d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CommonCards.vue?vue&type=template&id=5ea7671d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_template_id_5ea7671d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCards_vue_vue_type_template_id_5ea7671d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/HomeComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& */ "./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HomeComponent_vue_vue_type_style_index_0_id_782dcf83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true& */ "./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "782dcf83",
  null
  
)

/* vuetify-loader */
















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__["VApp"],VBadge: vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_6__["VBadge"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCardText"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_9__["VChip"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VContainer"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VFlex"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VLayout"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabs"],VTabsItems: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabsItems"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HomeComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/CardValueList.js":
/*!**********************************************!*\
  !*** ./resources/js/mixins/CardValueList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TEXT_COLOR = 'white--text'; // const COLOR_TEAL_CLASS_2 = 'blue lighten-2';

var BUTON_TEXT = 'VIEW';
var COLOR_DEF = 'blue lighten-2';
var COLOR_MST = 'green lighten-2';
var COLOR_FILE = "indigo lighten-2";
var COLOR_WORK = "deep-orange lighten-2";
var COLOR_WORK_LESS = 'teal lighten-2';
var _card_data = {
  item_list: {
    title: "部材",
    class_text: COLOR_MST,
    color: TEXT_COLOR,
    text: '部材・図面一覧リスト',
    details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
    links: "/data_table",
    button: false,
    button_text: BUTON_TEXT
  },
  equipStartCheck: {
    title: "点検",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: "工具・設備の始業時点検",
    details: ["手配した工事を元に受入処理を行えます。", "対象の手配工事を選択すると手配一覧リストが表示されます。", "表示されたリストより受け入れる部材をチェックし、", "画面下部の受入ボタンを押下してください。", "受入数量の変更がある場合は、リスト右部の編集コマンドを押してください。"].join(""),
    links: "/work",
    button: false,
    button_text: BUTON_TEXT,
    contents: [{
      id: "kokuin",
      name: "刻印機",
      text: "刻印機使用時に確認を行う"
    }]
  },
  petition: {
    title: "申請",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: "休暇・残業・etcの申請を行う",
    details: [].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  inventory: {
    title: "棚卸し",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: "部材・その他・工事・履歴",
    details: [].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  readfile: {
    title: "読取",
    class_text: COLOR_FILE,
    color: TEXT_COLOR,
    text: ["TSデータ（CSV形式）"],
    details: ["ファイル読み込み"].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  model_mst: {
    title: "形式",
    class_text: COLOR_MST,
    color: TEXT_COLOR,
    text: ["形式リスト・構成データ更新・部材登録・手配・点検・確認"],
    details: [""].join(""),
    links: "",
    button: false
  },
  recept_list: {
    title: "受注",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: ["注残・製造データ作成"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  product_list: {
    title: "製造データ",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: ["手配・起工・納品"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  user_info: {
    title: "作業者情報",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: ["作業者情報更新"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  ukeire: {
    title: "受入",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: ["発注部材受け入れ"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  work: {
    title: "制作",
    class_text: COLOR_DEF,
    color: TEXT_COLOR,
    text: ["工事リスト・工程管理表・作業データ登録"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  },
  tehaisaki: {
    title: "手配先",
    class_text: COLOR_WORK_LESS,
    color: TEXT_COLOR,
    text: ["統合・登録・削除・更新"],
    details: [""].join(""),
    links: "",
    button: false,
    button_text: BUTON_TEXT
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      card_data: _card_data
    };
  }
});

/***/ })

}]);
//# sourceMappingURL=home.js.map
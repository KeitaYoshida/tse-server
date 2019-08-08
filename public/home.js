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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb25DYXJkcy52dWU/NGY5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZT9kNDIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbkNhcmRzLnZ1ZT81NjFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0hvbWVDb21wb25lbnQudnVlPzNkMzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlPzM1OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWU/Zjg1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb25DYXJkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlPzVkNGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlP2ZhYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlP2U3OTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWU/MzdkNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZT81ZTkyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0hvbWVDb21wb25lbnQudnVlP2U0YmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9DYXJkVmFsdWVMaXN0LmpzIl0sIm5hbWVzIjpbIlRFWFRfQ09MT1IiLCJCVVRPTl9URVhUIiwiQ09MT1JfREVGIiwiQ09MT1JfTVNUIiwiQ09MT1JfRklMRSIsIkNPTE9SX1dPUksiLCJDT0xPUl9XT1JLX0xFU1MiLCJfY2FyZF9kYXRhIiwiaXRlbV9saXN0IiwidGl0bGUiLCJjbGFzc190ZXh0IiwiY29sb3IiLCJ0ZXh0IiwiZGV0YWlscyIsImpvaW4iLCJsaW5rcyIsImJ1dHRvbiIsImJ1dHRvbl90ZXh0IiwiZXF1aXBTdGFydENoZWNrIiwiY29udGVudHMiLCJpZCIsIm5hbWUiLCJwZXRpdGlvbiIsImludmVudG9yeSIsInJlYWRmaWxlIiwibW9kZWxfbXN0IiwicmVjZXB0X2xpc3QiLCJwcm9kdWN0X2xpc3QiLCJ1c2VyX2luZm8iLCJ1a2VpcmUiLCJ0ZWhhaXNha2kiLCJkYXRhIiwiY2FyZF9kYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUVBO0FBQ0EsNEVBREE7QUFFQSxzQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FQQTtBQVFBO0FBQ0EsTUFEQSxnQkFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOEdBO0FBRUE7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLGdCQUZBO0FBR0EsdURBSEE7QUFJQTtBQUpBO0FBTUEs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QUFDQSwwREFBMEQ7QUFDMUQsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNB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LGVBRkg7QUFHVEssU0FBSyxFQUFFWCxVQUhFO0FBSVRZLFFBQUksRUFBRSxDQUFDLGFBQUQsQ0FKRztBQUtUQyxXQUFPLEVBQUUsQ0FBQyxFQUFELEVBQUtDLElBQUwsQ0FBVSxFQUFWLENBTEE7QUFNVEMsU0FBSyxFQUFFLEVBTkU7QUFPVEMsVUFBTSxFQUFFLEtBUEM7QUFRVEMsZUFBVyxFQUFFaEI7QUFSSjtBQW5ITSxDQUFuQjtBQStIZTtBQUNiOEIsTUFEYSxrQkFDTjtBQUNMLFdBQU87QUFDTEMsZUFBUyxFQUFFekI7QUFETixLQUFQO0FBR0Q7QUFMWSxDQUFmLEUiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtY2FyZFxuICAgIDpjb2xvcj1cImNhcmRfZGF0YVtjYXJkX25hbWVdLmNvbG9yXCJcbiAgICA6Y2xhc3M9XCJjYXJkX2RhdGFbY2FyZF9uYW1lXS5jbGFzc190ZXh0XCJcbiAgICA6dG89XCJjYXJkX2RhdGFbY2FyZF9uYW1lXS5saW5rcyArICcvJyArIGNhcmRfbmFtZVwiXG4gICAgQGNsaWNrPVwibGQoKVwiXG4gICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgaG92ZXJcbiAgPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwibG9hZGluZz09PWZhbHNlXCI+XG4gICAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPnt7IGNhcmRfZGF0YVtjYXJkX25hbWVdLnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDxociAvPlxuICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICA8cCB2LWlmPVwidHlwZW9mIGNhcmRfZGF0YVtjYXJkX25hbWVdLnRleHQgPT09ICdzdHJpbmcnXCI+e3sgY2FyZF9kYXRhW2NhcmRfbmFtZV0udGV4dCB9fTwvcD5cbiAgICAgIDxwIHYtZWxzZSB2LWZvcj1cIml0ZW0gaW4gY2FyZF9kYXRhW2NhcmRfbmFtZV0udGV4dFwiIDprZXk9XCJpdGVtLmlkXCI+e3sgaXRlbSB9fTwvcD5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICA8di1wcm9ncmVzcy1jaXJjdWxhciA6c2l6ZT1cIjcwXCIgOndpZHRoPVwiN1wiIGluZGV0ZXJtaW5hdGUgY2xhc3M9XCJwcm9ncmVzc1wiPjwvdi1wcm9ncmVzcy1jaXJjdWxhcj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgY2FyZF9kYXRhIGZyb20gXCIuLi9taXhpbnMvQ2FyZFZhbHVlTGlzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2NhcmRfZGF0YV0sXG4gIHByb3BzOiBbXCJjYXJkX25hbWVcIl0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsZCgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi52LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cbi5oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XG59XG5wIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwPlxuICAgIDx2LWNvbnRhaW5lciBncmlkLWxpc3Qtc20+XG4gICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciBtYi01XCI+V2VsY29tIHRvIFRvcmtzIFdFQjwvaDE+XG4gICAgICA8di1sYXlvdXQgd3JhcCB2LWlmPVwieW95YWt1X2xpc3RcIiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgPHYtZmxleCB4czEyIG1kMTAgb2Zmc2V0LW1kMT5cbiAgICAgICAgICA8di10YWJzXG4gICAgICAgICAgICB2LW1vZGVsPVwidGFic1wiXG4gICAgICAgICAgICBjb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgIHNsaWRlci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgZml4ZWQtdGFic1xuICAgICAgICAgICAgY2xhc3M9XCJ0YWJfbGlzdCBtYi0zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di10YWIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHRhYl9saXN0XCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaW5kZXg9PT0wICYmIHRhYnM9PT0wXCI+XG4gICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbCBsZWZ0PmZhciBmYS1tZWg8L3YtaWNvbj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpbmRleD09PTAgJiYgdGFicyE9PTBcIj5cbiAgICAgICAgICAgICAgICA8di1pY29uIHNtYWxsIGxlZnQ+ZmFyIGZhLXNtaWxlPC92LWljb24+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidGFiX2xpc3RfY291bnRlcltpbmRleF0hPT11bmRlZmluZWRcIj5cbiAgICAgICAgICAgICAgICA8di1iYWRnZSByaWdodCBzbWFsbD5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IHRhYl9saXN0X2NvdW50ZXJbaW5kZXhdIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIHt7aXRlbX19XG4gICAgICAgICAgICAgICAgPC92LWJhZGdlPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPnt7aXRlbX19PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdi10YWI+XG4gICAgICAgICAgPC92LXRhYnM+XG4gICAgICAgICAgPHYtdGFicy1pdGVtcyB2LW1vZGVsPVwidGFic1wiIHYtaWY9XCJ0YWJzIT09bnVsbFwiPlxuICAgICAgICAgICAgPHYtdGFiLWl0ZW0+PC92LXRhYi1pdGVtPlxuICAgICAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJ0b3AtYWxlcnQgcGEtMlwiIGZsYXQ+XG4gICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm9yZGVyX2FjdF9idG5cIlxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL29yZGVyX2xpc3QveW95YWt1XCJcbiAgICAgICAgICAgICAgICAgICAgPuS4gOaLrOaJi+mFjTwvdi1idG4+XG4gICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4geW95YWt1X2xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgbGczIDprZXk9XCJpbmRleFwiIGNsYXNzPVwiaW5mby1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkIGZsYXQgY2xhc3M9XCJwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIidtbC0zICcgKyAnby1mbGctJyArIGl0ZW0uY250X29yZGVyX2xpc3Rfc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0uc3RhdHVzLnZhbCB9fTwvdi1jaGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiJ2wtZmxnLScgKyBpdGVtLmNudF9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgaXRlbS5vcmRlcl9zdGF0dXMudmFsIH19PC92LWNoaXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25vYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlciBwdC0yIHBiLTAgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBpdGVtLmNudF9tb2RlbCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgaXRlbS5jbnRfb3JkZXJfY29kZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgaXRlbS51c2VyX3lveWFrdSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cIicvb3JkZXJfbGlzdC8nICsgaXRlbS5jbnRfb3JkZXJfY29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+6Kmz57SwPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW0uY250X3N0YXR1cz09PTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwib3JkZXJfaG9yeXUoaXRlbSlcIj7kv53nlZk8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIm9yZGVyX2hvcnl1KGl0ZW0pXCI+5om/6KqN5b6F44GhPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICA8di10YWItaXRlbT48L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICA8di10YWItaXRlbT48L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgPC92LXRhYnMtaXRlbXM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgPC92LWxheW91dD5cbiAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJpdGVtX2xpc3RcIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwiZXF1aXBTdGFydENoZWNrXCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cInBldGl0aW9uXCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cImludmVudG9yeVwiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJyZWFkZmlsZVwiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJtb2RlbF9tc3RcIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwicmVjZXB0X2xpc3RcIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwicHJvZHVjdF9saXN0XCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cInVzZXJfaW5mb1wiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJ1a2VpcmVcIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwidGVoYWlzYWtpXCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgPC92LWxheW91dD5cbiAgICA8L3YtY29udGFpbmVyPlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDb21tb25DYXJkcyBmcm9tIFwiLi9Db21tb25DYXJkc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDb21tb25DYXJkc1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeW95YWt1X2xpc3Q6IG51bGwsXG4gICAgICB0YWJzOiBudWxsLFxuICAgICAgdGFiX2xpc3Q6IFtcIkluZm9ybWF0aW9uXCIsIFwi5omL6YWN5LqI57SEXCIsIFwi5ZCE56iu55Sz6KuLXCIsIFwi5om/6KqN5b6F44GhXCJdLFxuICAgICAgdGFiX2xpc3RfY291bnRlcjogW11cbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGluaXQoKSB7XG4gICAgICBheGlvcy5nZXQoXCIvZGIvb3JkZXIveW95YWt1L2dhaXlvdVwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMueW95YWt1X2xpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgdGhpcy50YWJfbGlzdF9jb3VudGVyWzFdID0gcmVzLmRhdGEubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgICBsZXQgZCA9IHtcbiAgICAgICAgdGV4dDogXCJob2dlXCIsXG4gICAgICAgIHZhbDogXCJodWdhXCJcbiAgICAgIH07XG4gICAgICAvLyBheGlvcy5wb3N0KFwiL0ZpcmViYXNlL3Rlc3RcIiwgZCkudGhlbihyZXMgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgLy8gfSk7XG4gICAgfSxcbiAgICBvcmRlcl9ob3J5dShpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5jbnRfc3RhdHVzID09PSAwKSB7XG4gICAgICAgIGl0ZW0uY250X3N0YXR1cyA9IDg7XG4gICAgICAgIGl0ZW0ub3JkZXJfc3RhdHVzLnZhbCA9IFwi5L+d55WZXCI7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICBcIi9kYi9vcmRlci9saXN0L2NvbC91cC9cIiArIGl0ZW0uY250X29yZGVybGlzdF9pZCArIFwiL2NudF9zdGF0dXMvXCIgKyA4XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNudF9zdGF0dXMgPSAwO1xuICAgICAgICBpdGVtLm9yZGVyX3N0YXR1cy52YWwgPSBcIuaJv+iqjeW+heOBoVwiO1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgXCIvZGIvb3JkZXIvbGlzdC9jb2wvdXAvXCIgKyBpdGVtLmNudF9vcmRlcmxpc3RfaWQgKyBcIi9jbnRfc3RhdHVzL1wiICsgMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5oMSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubGF5b3V0LmdhZGdldCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4udG9wLWFsZXJ0LnYtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnRhYl9saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ub3JkZXJfYWN0X2J0biB7XG4gIHdpZHRoOiAyNSU7XG59XG4uaW5mby1ib3gge1xuICBmb250LXNpemU6IDFyZW07XG4gIC52LWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYTIzN2U7XG4gICAgY29sb3I6ICMxYTIzN2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAudi1jaGlwIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICAmLm8tZmxnLTAge1xuICAgICAgY29sb3I6ICMxYTIzN2U7XG4gICAgICBib3JkZXItY29sb3I6ICMxYTIzN2U7XG4gICAgfVxuICAgICYubC1mbGctMCB7XG4gICAgICBjb2xvcjogIzFhMjM3ZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzFhMjM3ZTtcbiAgICB9XG4gICAgJi5vLWZsZy0xIHtcbiAgICAgIGNvbG9yOiAjYmYzNjBjO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYmYzNjBjO1xuICAgIH1cbiAgICAmLm8tZmxnLTIge1xuICAgICAgY29sb3I6ICMxYjVlMjA7XG4gICAgICBib3JkZXItY29sb3I6ICMxYjVlMjA7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4vLyBzdmcge1xuLy8gICBwYXRoOmhvdmVyIHtcbi8vICAgICBhbmltYXRpb246IGNvbG9yQ2hhbmdlIDFzIGVhc2UgZm9yd2FyZHM7XG4vLyAgIH1cbi8vIH1cbi8vIEBrZXlmcmFtZXMgY29sb3JDaGFuZ2V7XG4vLyAgICAgMTAwJSB7XG4vLyAgICAgICAgIGZpbGw6ICNGRjAwMDA7XG4vLyAgICAgfVxuLy8gfVxuPC9zdHlsZT5cblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudi1jYXJkW2RhdGEtdi01ZWE3NjcxZF0ge1xcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcbi5oZWFkbGluZVtkYXRhLXYtNWVhNzY3MWRdIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxufVxcbnBbZGF0YS12LTVlYTc2NzFkXSB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnByb2dyZXNzW2RhdGEtdi01ZWE3NjcxZF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTM1cHg7XFxuICBtYXJnaW4tdG9wOiAtMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImgxW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLmxheW91dC5nYWRnZXRbZGF0YS12LTc4MmRjZjgzXSB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4udG9wLWFsZXJ0LnYtY2FyZFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4udGFiX2xpc3RbZGF0YS12LTc4MmRjZjgzXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLm9yZGVyX2FjdF9idG5bZGF0YS12LTc4MmRjZjgzXSB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4uaW5mby1ib3hbZGF0YS12LTc4MmRjZjgzXSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5pbmZvLWJveCAudi1jYXJkW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhMjM3ZTtcXG4gIGNvbG9yOiAjMWEyMzdlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5pbmZvLWJveCAudi1jaGlwW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uaW5mby1ib3ggLnYtY2hpcC5vLWZsZy0wW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgY29sb3I6ICMxYTIzN2U7XFxuICBib3JkZXItY29sb3I6ICMxYTIzN2U7XFxufVxcbi5pbmZvLWJveCAudi1jaGlwLmwtZmxnLTBbZGF0YS12LTc4MmRjZjgzXSB7XFxuICBjb2xvcjogIzFhMjM3ZTtcXG4gIGJvcmRlci1jb2xvcjogIzFhMjM3ZTtcXG59XFxuLmluZm8tYm94IC52LWNoaXAuby1mbGctMVtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGNvbG9yOiAjYmYzNjBjO1xcbiAgYm9yZGVyLWNvbG9yOiAjYmYzNjBjO1xcbn1cXG4uaW5mby1ib3ggLnYtY2hpcC5vLWZsZy0yW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgY29sb3I6ICMxYjVlMjA7XFxuICBib3JkZXItY29sb3I6ICMxYjVlMjA7XFxufVxcbi5pbmZvLWJveCBwW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XCIsIFwiXCJdKTtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWE3NjcxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVhNzY3MWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWE3NjcxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc4MmRjZjgzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc4MmRjZjgzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODJkY2Y4MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY2FyZFwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBfdm0uY2FyZF9kYXRhW192bS5jYXJkX25hbWVdLmNsYXNzX3RleHQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBjb2xvcjogX3ZtLmNhcmRfZGF0YVtfdm0uY2FyZF9uYW1lXS5jb2xvcixcbiAgICAgICAgdG86IF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0ubGlua3MgKyBcIi9cIiArIF92bS5jYXJkX25hbWUsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGhvdmVyOiBcIlwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdm0ubGQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0ubG9hZGluZyA9PT0gZmFsc2VcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNhcmRfZGF0YVtfdm0uY2FyZF9uYW1lXS50aXRsZSkpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICB0eXBlb2YgX3ZtLmNhcmRfZGF0YVtfdm0uY2FyZF9uYW1lXS50ZXh0ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0udGV4dCkpXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2woX3ZtLmNhcmRfZGF0YVtfdm0uY2FyZF9uYW1lXS50ZXh0LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIHsga2V5OiBpdGVtLmlkIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pKV0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX2MoXCJ2LXByb2dyZXNzLWNpcmN1bGFyXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3NcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogNzAsIHdpZHRoOiA3LCBpbmRldGVybWluYXRlOiBcIlwiIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgeyBhdHRyczogeyBcImdyaWQtbGlzdC1zbVwiOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlciBtYi01XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiV2VsY29tIHRvIFRvcmtzIFdFQlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnlveWFrdV9saXN0XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTRcIiwgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbWQxMDogXCJcIiwgXCJvZmZzZXQtbWQxXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtdGFic1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJfbGlzdCBtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsaWRlci1jb2xvclwiOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpeGVkLXRhYnNcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFicyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFicyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFiX2xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IDAgJiYgX3ZtLnRhYnMgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbWFsbDogXCJcIiwgbGVmdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJmYXIgZmEtbWVoXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gMCAmJiBfdm0udGFicyAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtYWxsOiBcIlwiLCBsZWZ0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImZhciBmYS1zbWlsZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYl9saXN0X2NvdW50ZXJbaW5kZXhdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJhZGdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByaWdodDogXCJcIiwgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImJhZGdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJfbGlzdF9jb3VudGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbX3ZtLl92KF92bS5fcyhpdGVtKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udGFicyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdGFicy1pdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFicyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGFiLWl0ZW1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10YWItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3AtYWxlcnQgcGEtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czEyOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvcmRlcl9hY3RfYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvb3JkZXJfbGlzdC95b3lha3VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS4gOaLrOaJi+mFjVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS55b3lha3VfbGlzdCwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluZm8tYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzNDogXCJcIiwgbGczOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHQtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub2JyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWwtMyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvLWZsZy1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbnRfb3JkZXJfbGlzdF9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibC1mbGctXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY250X3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcmRlcl9zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtY2VudGVyIHB0LTIgcGItMCBtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNudF9tb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbnRfb3JkZXJfY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51c2VyX3lveWFrdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4czY6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9vcmRlcl9saXN0L1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbnRfb3JkZXJfY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi6Kmz57SwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeHM2OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNudF9zdGF0dXMgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9yZGVyX2hvcnl1KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5L+d55WZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9yZGVyX2hvcnl1KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5om/6KqN5b6F44GhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGFiLWl0ZW1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRhYi1pdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwiaXRlbV9saXN0XCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJjb21tb24tY2FyZHNcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjYXJkX25hbWU6IFwiZXF1aXBTdGFydENoZWNrXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJwZXRpdGlvblwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJpbnZlbnRvcnlcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwicmVhZGZpbGVcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwibW9kZWxfbXN0XCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcInJlY2VwdF9saXN0XCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcInByb2R1Y3RfbGlzdFwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJ1c2VyX2luZm9cIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwidWtlaXJlXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcInRlaGFpc2FraVwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlYTc2NzFkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlYTc2NzFkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWVhNzY3MWRcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVlByb2dyZXNzQ2lyY3VsYXIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZQcm9ncmVzc0NpcmN1bGFyJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZDYXJkLFZDYXJkVGl0bGUsVlByb2dyZXNzQ2lyY3VsYXJ9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWVhNzY3MWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWVhNzY3MWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWVhNzY3MWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWE3NjcxZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZWE3NjcxZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWE3NjcxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVhNzY3MWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWE3NjcxZCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgyZGNmODMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzgyZGNmODMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ODJkY2Y4M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBcHAgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBcHAnO1xuaW1wb3J0IHsgVkJhZGdlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQmFkZ2UnO1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRBY3Rpb25zIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ2FyZFRleHQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZDYXJkJztcbmltcG9ydCB7IFZDaGlwIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2hpcCc7XG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZJY29uJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZUYWIgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZUYWJzJztcbmltcG9ydCB7IFZUYWJJdGVtIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGFicyc7XG5pbXBvcnQgeyBWVGFicyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW1wb3J0IHsgVlRhYnNJdGVtcyB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlRhYnMnO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcCxWQmFkZ2UsVkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZDaGlwLFZDb250YWluZXIsVkZsZXgsVkljb24sVkxheW91dCxWVGFiLFZUYWJJdGVtLFZUYWJzLFZUYWJzSXRlbXN9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzgyZGNmODMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzgyZGNmODMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzgyZGNmODMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4MmRjZjgzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4MmRjZjgzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzgyZGNmODMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzgyZGNmODMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4MmRjZjgzJnNjb3BlZD10cnVlJlwiIiwiY29uc3QgVEVYVF9DT0xPUiA9ICd3aGl0ZS0tdGV4dCc7XG4vLyBjb25zdCBDT0xPUl9URUFMX0NMQVNTXzIgPSAnYmx1ZSBsaWdodGVuLTInO1xuY29uc3QgQlVUT05fVEVYVCA9ICdWSUVXJztcbmNvbnN0IENPTE9SX0RFRiA9ICdibHVlIGxpZ2h0ZW4tMidcbmNvbnN0IENPTE9SX01TVCA9ICdncmVlbiBsaWdodGVuLTInXG5jb25zdCBDT0xPUl9GSUxFID0gXCJpbmRpZ28gbGlnaHRlbi0yXCJcbmNvbnN0IENPTE9SX1dPUksgPSBcImRlZXAtb3JhbmdlIGxpZ2h0ZW4tMlwiXG5jb25zdCBDT0xPUl9XT1JLX0xFU1MgPSAndGVhbCBsaWdodGVuLTInXG5cbmNvbnN0IF9jYXJkX2RhdGEgPSB7XG4gIGl0ZW1fbGlzdDoge1xuICAgIHRpdGxlOiBcIumDqOadkFwiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX01TVCxcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiAn6YOo5p2Q44O75Zuz6Z2i5LiA6Kan44Oq44K544OIJyxcbiAgICBkZXRhaWxzOiBbXCLpg6jmnZDjga7mpJzntKLjgIHmrovmlbDjgIHlt6XkuovlibLlvZPmlbDjgIHmiYvphY3jg7vlj5flhaXmuIjjgb/mlbDph4/jga7norroqo3jgYzjgafjgY3jgb7jgZlcIl0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCIvZGF0YV90YWJsZVwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfSxcbiAgZXF1aXBTdGFydENoZWNrOiB7XG4gICAgdGl0bGU6IFwi54K55qScXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfREVGLFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFwi5bel5YW344O76Kit5YKZ44Gu5aeL5qWt5pmC54K55qScXCIsXG4gICAgZGV0YWlsczogW1xuICAgICAgXCLmiYvphY3jgZfjgZ/lt6XkuovjgpLlhYPjgavlj5flhaXlh6bnkIbjgpLooYzjgYjjgb7jgZnjgIJcIixcbiAgICAgIFwi5a++6LGh44Gu5omL6YWN5bel5LqL44KS6YG45oqe44GZ44KL44Go5omL6YWN5LiA6Kan44Oq44K544OI44GM6KGo56S644GV44KM44G+44GZ44CCXCIsXG4gICAgICBcIuihqOekuuOBleOCjOOBn+ODquOCueODiOOCiOOCiuWPl+OBkeWFpeOCjOOCi+mDqOadkOOCkuODgeOCp+ODg+OCr+OBl+OAgVwiLFxuICAgICAgXCLnlLvpnaLkuIvpg6jjga7lj5flhaXjg5zjgr/jg7PjgpLmirzkuIvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIixcbiAgICAgIFwi5Y+X5YWl5pWw6YeP44Gu5aSJ5pu044GM44GC44KL5aC05ZCI44Gv44CB44Oq44K544OI5Y+z6YOo44Gu57eo6ZuG44Kz44Oe44Oz44OJ44KS5oq844GX44Gm44GP44Gg44GV44GE44CCXCJcbiAgICBdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiL3dvcmtcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhULFxuICAgIGNvbnRlbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcImtva3VpblwiLFxuICAgICAgICBuYW1lOiBcIuWIu+WNsOapn1wiLFxuICAgICAgICB0ZXh0OiBcIuWIu+WNsOapn+S9v+eUqOaZguOBq+eiuuiqjeOCkuihjOOBhlwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBwZXRpdGlvbjoge1xuICAgIHRpdGxlOiBcIueUs+iri1wiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX0RFRixcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBcIuS8keaah+ODu+aui+alreODu2V0Y+OBrueUs+iri+OCkuihjOOBhlwiLFxuICAgIGRldGFpbHM6IFtcbiAgICBdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVFxuICB9LFxuICBpbnZlbnRvcnk6IHtcbiAgICB0aXRsZTogXCLmo5rljbjjgZdcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9XT1JLX0xFU1MsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogXCLpg6jmnZDjg7vjgZ3jga7ku5bjg7vlt6Xkuovjg7vlsaXmrbRcIixcbiAgICBkZXRhaWxzOiBbXG4gICAgXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfSxcbiAgcmVhZGZpbGU6IHtcbiAgICB0aXRsZTogXCLoqq3lj5ZcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9GSUxFLFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFtcIlRT44OH44O844K/77yIQ1NW5b2i5byP77yJXCJdLFxuICAgIGRldGFpbHM6IFtcIuODleOCoeOCpOODq+iqreOBv+i+vOOBv1wiXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfSxcbiAgbW9kZWxfbXN0OiB7XG4gICAgdGl0bGU6IFwi5b2i5byPXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfTVNULFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFtcIuW9ouW8j+ODquOCueODiOODu+ani+aIkOODh+ODvOOCv+abtOaWsOODu+mDqOadkOeZu+mMsuODu+aJi+mFjeODu+eCueaknOODu+eiuuiqjVwiXSxcbiAgICBkZXRhaWxzOiBbXCJcIl0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCJcIixcbiAgICBidXR0b246IGZhbHNlLFxuICB9LFxuICByZWNlcHRfbGlzdDoge1xuICAgIHRpdGxlOiBcIuWPl+azqFwiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX1dPUktfTEVTUyxcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBbXCLms6jmrovjg7voo73pgKDjg4fjg7zjgr/kvZzmiJBcIl0sXG4gICAgZGV0YWlsczogW1wiXCJdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVFxuICB9LFxuICBwcm9kdWN0X2xpc3Q6IHtcbiAgICB0aXRsZTogXCLoo73pgKDjg4fjg7zjgr9cIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9XT1JLX0xFU1MsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogW1wi5omL6YWN44O76LW35bel44O757SN5ZOBXCJdLFxuICAgIGRldGFpbHM6IFtcIlwiXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfSxcbiAgdXNlcl9pbmZvOiB7XG4gICAgdGl0bGU6IFwi5L2c5qWt6ICF5oOF5aCxXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfREVGLFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFtcIuS9nOalreiAheaDheWgseabtOaWsFwiXSxcbiAgICBkZXRhaWxzOiBbXCJcIl0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCJcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhUXG4gIH0sXG4gIHVrZWlyZToge1xuICAgIHRpdGxlOiBcIuWPl+WFpVwiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX1dPUktfTEVTUyxcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBbXCLnmbrms6jpg6jmnZDlj5fjgZHlhaXjgoxcIl0sXG4gICAgZGV0YWlsczogW1wiXCJdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVFxuICB9LFxuICB0ZWhhaXNha2k6IHtcbiAgICB0aXRsZTogXCLmiYvphY3lhYhcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9XT1JLX0xFU1MsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogW1wi57Wx5ZCI44O755m76Yyy44O75YmK6Zmk44O75pu05pawXCJdLFxuICAgIGRldGFpbHM6IFtcIlwiXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRfZGF0YTogX2NhcmRfZGF0YSxcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
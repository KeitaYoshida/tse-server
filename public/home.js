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
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






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




_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VProgressCircular: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VProgressCircular"]})


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
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






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
















_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VApp"],VBadge: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBadge"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VChip: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VChip"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VTab: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTab"],VTabItem: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabItem"],VTabs: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabs"],VTabsItems: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabsItems"]})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb25DYXJkcy52dWU/NGY5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZT9kNDIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbkNhcmRzLnZ1ZT81NjFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0hvbWVDb21wb25lbnQudnVlPzNkMzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlPzM1OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWU/Zjg1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb25DYXJkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlPzVkNGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlP2ZhYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlP2U3OTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWU/MzdkNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZT81ZTkyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0hvbWVDb21wb25lbnQudnVlP2U0YmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9DYXJkVmFsdWVMaXN0LmpzIl0sIm5hbWVzIjpbIlRFWFRfQ09MT1IiLCJCVVRPTl9URVhUIiwiQ09MT1JfREVGIiwiQ09MT1JfTVNUIiwiQ09MT1JfRklMRSIsIkNPTE9SX1dPUksiLCJDT0xPUl9XT1JLX0xFU1MiLCJfY2FyZF9kYXRhIiwiaXRlbV9saXN0IiwidGl0bGUiLCJjbGFzc190ZXh0IiwiY29sb3IiLCJ0ZXh0IiwiZGV0YWlscyIsImpvaW4iLCJsaW5rcyIsImJ1dHRvbiIsImJ1dHRvbl90ZXh0IiwiZXF1aXBTdGFydENoZWNrIiwiY29udGVudHMiLCJpZCIsIm5hbWUiLCJwZXRpdGlvbiIsImludmVudG9yeSIsInJlYWRmaWxlIiwibW9kZWxfbXN0IiwicmVjZXB0X2xpc3QiLCJwcm9kdWN0X2xpc3QiLCJ1c2VyX2luZm8iLCJ1a2VpcmUiLCJ0ZWhhaXNha2kiLCJkYXRhIiwiY2FyZF9kYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUVBO0FBQ0EsNEVBREE7QUFFQSxzQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FQQTtBQVFBO0FBQ0EsTUFEQSxnQkFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOEdBO0FBRUE7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLGdCQUZBO0FBR0EsdURBSEE7QUFJQTtBQUpBO0FBTUEs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QUFDQSwwREFBMEQ7QUFDMUQsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNB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QUUsQ0FBQyxhQUFELENBSkc7QUFLVEMsV0FBTyxFQUFFLENBQUMsRUFBRCxFQUFLQyxJQUFMLENBQVUsRUFBVixDQUxBO0FBTVRDLFNBQUssRUFBRSxFQU5FO0FBT1RDLFVBQU0sRUFBRSxLQVBDO0FBUVRDLGVBQVcsRUFBRWhCO0FBUko7QUFuSE0sQ0FBbkI7QUErSGU7QUFDYjhCLE1BRGEsa0JBQ047QUFDTCxXQUFPO0FBQ0xDLGVBQVMsRUFBRXpCO0FBRE4sS0FBUDtBQUdEO0FBTFksQ0FBZixFIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWNhcmRcbiAgICA6Y29sb3I9XCJjYXJkX2RhdGFbY2FyZF9uYW1lXS5jb2xvclwiXG4gICAgOmNsYXNzPVwiY2FyZF9kYXRhW2NhcmRfbmFtZV0uY2xhc3NfdGV4dFwiXG4gICAgOnRvPVwiY2FyZF9kYXRhW2NhcmRfbmFtZV0ubGlua3MgKyAnLycgKyBjYXJkX25hbWVcIlxuICAgIEBjbGljaz1cImxkKClcIlxuICAgIGhlaWdodD1cIjEwMCVcIlxuICAgIGhvdmVyXG4gID5cbiAgICA8dGVtcGxhdGUgdi1pZj1cImxvYWRpbmc9PT1mYWxzZVwiPlxuICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj57eyBjYXJkX2RhdGFbY2FyZF9uYW1lXS50aXRsZSB9fTwvZGl2PlxuICAgICAgICA8aHIgLz5cbiAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgPHAgdi1pZj1cInR5cGVvZiBjYXJkX2RhdGFbY2FyZF9uYW1lXS50ZXh0ID09PSAnc3RyaW5nJ1wiPnt7IGNhcmRfZGF0YVtjYXJkX25hbWVdLnRleHQgfX08L3A+XG4gICAgICA8cCB2LWVsc2Ugdi1mb3I9XCJpdGVtIGluIGNhcmRfZGF0YVtjYXJkX25hbWVdLnRleHRcIiA6a2V5PVwiaXRlbS5pZFwiPnt7IGl0ZW0gfX08L3A+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgPHYtcHJvZ3Jlc3MtY2lyY3VsYXIgOnNpemU9XCI3MFwiIDp3aWR0aD1cIjdcIiBpbmRldGVybWluYXRlIGNsYXNzPVwicHJvZ3Jlc3NcIj48L3YtcHJvZ3Jlc3MtY2lyY3VsYXI+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC92LWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGNhcmRfZGF0YSBmcm9tIFwiLi4vbWl4aW5zL0NhcmRWYWx1ZUxpc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtjYXJkX2RhdGFdLFxuICBwcm9wczogW1wiY2FyZF9uYW1lXCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbGQoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4udi1jYXJkIHtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG4uaGVhZGxpbmUge1xuICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xufVxucCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTM1cHg7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDx2LWFwcD5cbiAgICA8di1jb250YWluZXIgZ3JpZC1saXN0LXNtPlxuICAgICAgPGgxIGNsYXNzPVwidGV4dC14cy1jZW50ZXIgbWItNVwiPldlbGNvbSB0byBUb3JrcyBXRUI8L2gxPlxuICAgICAgPHYtbGF5b3V0IHdyYXAgdi1pZj1cInlveWFrdV9saXN0XCIgY2xhc3M9XCJtYi00XCI+XG4gICAgICAgIDx2LWZsZXggeHMxMiBtZDEwIG9mZnNldC1tZDE+XG4gICAgICAgICAgPHYtdGFic1xuICAgICAgICAgICAgdi1tb2RlbD1cInRhYnNcIlxuICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICBzbGlkZXItY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGZpeGVkLXRhYnNcbiAgICAgICAgICAgIGNsYXNzPVwidGFiX2xpc3QgbWItM1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHYtdGFiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB0YWJfbGlzdFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImluZGV4PT09MCAmJiB0YWJzPT09MFwiPlxuICAgICAgICAgICAgICAgIDx2LWljb24gc21hbGwgbGVmdD5mYXIgZmEtbWVoPC92LWljb24+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaW5kZXg9PT0wICYmIHRhYnMhPT0wXCI+XG4gICAgICAgICAgICAgICAgPHYtaWNvbiBzbWFsbCBsZWZ0PmZhciBmYS1zbWlsZTwvdi1pY29uPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRhYl9saXN0X2NvdW50ZXJbaW5kZXhdIT09dW5kZWZpbmVkXCI+XG4gICAgICAgICAgICAgICAgPHYtYmFkZ2UgcmlnaHQgc21hbGw+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyB0YWJfbGlzdF9jb3VudGVyW2luZGV4XSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICB7e2l0ZW19fVxuICAgICAgICAgICAgICAgIDwvdi1iYWRnZT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT57e2l0ZW19fTwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3YtdGFiPlxuICAgICAgICAgIDwvdi10YWJzPlxuICAgICAgICAgIDx2LXRhYnMtaXRlbXMgdi1tb2RlbD1cInRhYnNcIiB2LWlmPVwidGFicyE9PW51bGxcIj5cbiAgICAgICAgICAgIDx2LXRhYi1pdGVtPjwvdi10YWItaXRlbT5cbiAgICAgICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwidG9wLWFsZXJ0IHBhLTJcIiBmbGF0PlxuICAgICAgICAgICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJvcmRlcl9hY3RfYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9vcmRlcl9saXN0L3lveWFrdVwiXG4gICAgICAgICAgICAgICAgICAgID7kuIDmi6zmiYvphY08L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHlveWFrdV9saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM0IGxnMyA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cImluZm8tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBmbGF0IGNsYXNzPVwicHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5vYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCInbWwtMyAnICsgJ28tZmxnLScgKyBpdGVtLmNudF9vcmRlcl9saXN0X3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpdGVtLnN0YXR1cy52YWwgfX08L3YtY2hpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIidsLWZsZy0nICsgaXRlbS5jbnRfc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0ub3JkZXJfc3RhdHVzLnZhbCB9fTwvdi1jaGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9ub2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0IGNsYXNzPVwidGV4dC14cy1jZW50ZXIgcHQtMiBwYi0wIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgaXRlbS5jbnRfbW9kZWwgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGl0ZW0uY250X29yZGVyX2NvZGUgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGl0ZW0udXNlcl95b3lha3UgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XCInL29yZGVyX2xpc3QvJyArIGl0ZW0uY250X29yZGVyX2NvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPuips+e0sDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtLmNudF9zdGF0dXM9PT0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIm9yZGVyX2hvcnl1KGl0ZW0pXCI+5L+d55WZPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJvcmRlcl9ob3J5dShpdGVtKVwiPuaJv+iqjeW+heOBoTwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICAgICAgPHYtdGFiLWl0ZW0+PC92LXRhYi1pdGVtPlxuICAgICAgICAgICAgPHYtdGFiLWl0ZW0+PC92LXRhYi1pdGVtPlxuICAgICAgICAgIDwvdi10YWJzLWl0ZW1zPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8di1sYXlvdXQgcm93IHdyYXA+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwiaXRlbV9saXN0XCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cImVxdWlwU3RhcnRDaGVja1wiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJwZXRpdGlvblwiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJpbnZlbnRvcnlcIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwicmVhZGZpbGVcIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwibW9kZWxfbXN0XCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cInJlY2VwdF9saXN0XCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cInByb2R1Y3RfbGlzdFwiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJ1c2VyX2luZm9cIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwidWtlaXJlXCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cInRlaGFpc2FraVwiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgIDwvdi1sYXlvdXQ+XG4gICAgPC92LWNvbnRhaW5lcj5cbiAgPC92LWFwcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ29tbW9uQ2FyZHMgZnJvbSBcIi4vQ29tbW9uQ2FyZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ29tbW9uQ2FyZHNcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHlveWFrdV9saXN0OiBudWxsLFxuICAgICAgdGFiczogbnVsbCxcbiAgICAgIHRhYl9saXN0OiBbXCJJbmZvcm1hdGlvblwiLCBcIuaJi+mFjeS6iOe0hFwiLCBcIuWQhOeorueUs+iri1wiLCBcIuaJv+iqjeW+heOBoVwiXSxcbiAgICAgIHRhYl9saXN0X2NvdW50ZXI6IFtdXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0KCkge1xuICAgICAgYXhpb3MuZ2V0KFwiL2RiL29yZGVyL3lveWFrdS9nYWl5b3VcIikudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnlveWFrdV9saXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMudGFiX2xpc3RfY291bnRlclsxXSA9IHJlcy5kYXRhLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgICAgbGV0IGQgPSB7XG4gICAgICAgIHRleHQ6IFwiaG9nZVwiLFxuICAgICAgICB2YWw6IFwiaHVnYVwiXG4gICAgICB9O1xuICAgICAgLy8gYXhpb3MucG9zdChcIi9GaXJlYmFzZS90ZXN0XCIsIGQpLnRoZW4ocmVzID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIC8vIH0pO1xuICAgIH0sXG4gICAgb3JkZXJfaG9yeXUoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uY250X3N0YXR1cyA9PT0gMCkge1xuICAgICAgICBpdGVtLmNudF9zdGF0dXMgPSA4O1xuICAgICAgICBpdGVtLm9yZGVyX3N0YXR1cy52YWwgPSBcIuS/neeVmVwiO1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgXCIvZGIvb3JkZXIvbGlzdC9jb2wvdXAvXCIgKyBpdGVtLmNudF9vcmRlcmxpc3RfaWQgKyBcIi9jbnRfc3RhdHVzL1wiICsgOFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jbnRfc3RhdHVzID0gMDtcbiAgICAgICAgaXRlbS5vcmRlcl9zdGF0dXMudmFsID0gXCLmib/oqo3lvoXjgaFcIjtcbiAgICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICAgIFwiL2RiL29yZGVyL2xpc3QvY29sL3VwL1wiICsgaXRlbS5jbnRfb3JkZXJsaXN0X2lkICsgXCIvY250X3N0YXR1cy9cIiArIDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuaDEge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmxheW91dC5nYWRnZXQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLnRvcC1hbGVydC52LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi50YWJfbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm9yZGVyX2FjdF9idG4ge1xuICB3aWR0aDogMjUlO1xufVxuLmluZm8tYm94IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAudi1jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWEyMzdlO1xuICAgIGNvbG9yOiAjMWEyMzdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnYtY2hpcCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgJi5vLWZsZy0wIHtcbiAgICAgIGNvbG9yOiAjMWEyMzdlO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMWEyMzdlO1xuICAgIH1cbiAgICAmLmwtZmxnLTAge1xuICAgICAgY29sb3I6ICMxYTIzN2U7XG4gICAgICBib3JkZXItY29sb3I6ICMxYTIzN2U7XG4gICAgfVxuICAgICYuby1mbGctMSB7XG4gICAgICBjb2xvcjogI2JmMzYwYztcbiAgICAgIGJvcmRlci1jb2xvcjogI2JmMzYwYztcbiAgICB9XG4gICAgJi5vLWZsZy0yIHtcbiAgICAgIGNvbG9yOiAjMWI1ZTIwO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMWI1ZTIwO1xuICAgIH1cbiAgfVxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLy8gc3ZnIHtcbi8vICAgcGF0aDpob3ZlciB7XG4vLyAgICAgYW5pbWF0aW9uOiBjb2xvckNoYW5nZSAxcyBlYXNlIGZvcndhcmRzO1xuLy8gICB9XG4vLyB9XG4vLyBAa2V5ZnJhbWVzIGNvbG9yQ2hhbmdle1xuLy8gICAgIDEwMCUge1xuLy8gICAgICAgICBmaWxsOiAjRkYwMDAwO1xuLy8gICAgIH1cbi8vIH1cbjwvc3R5bGU+XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnYtY2FyZFtkYXRhLXYtNWVhNzY3MWRdIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbn1cXG4uaGVhZGxpbmVbZGF0YS12LTVlYTc2NzFkXSB7XFxuICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xcbn1cXG5wW2RhdGEtdi01ZWE3NjcxZF0ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5wcm9ncmVzc1tkYXRhLXYtNWVhNzY3MWRdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xcbiAgbWFyZ2luLXRvcDogLTM1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMVtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5sYXlvdXQuZ2FkZ2V0W2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLnRvcC1hbGVydC52LWNhcmRbZGF0YS12LTc4MmRjZjgzXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLnRhYl9saXN0W2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5vcmRlcl9hY3RfYnRuW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLmluZm8tYm94W2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uaW5mby1ib3ggLnYtY2FyZFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYTIzN2U7XFxuICBjb2xvcjogIzFhMjM3ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uaW5mby1ib3ggLnYtY2hpcFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmluZm8tYm94IC52LWNoaXAuby1mbGctMFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGNvbG9yOiAjMWEyMzdlO1xcbiAgYm9yZGVyLWNvbG9yOiAjMWEyMzdlO1xcbn1cXG4uaW5mby1ib3ggLnYtY2hpcC5sLWZsZy0wW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgY29sb3I6ICMxYTIzN2U7XFxuICBib3JkZXItY29sb3I6ICMxYTIzN2U7XFxufVxcbi5pbmZvLWJveCAudi1jaGlwLm8tZmxnLTFbZGF0YS12LTc4MmRjZjgzXSB7XFxuICBjb2xvcjogI2JmMzYwYztcXG4gIGJvcmRlci1jb2xvcjogI2JmMzYwYztcXG59XFxuLmluZm8tYm94IC52LWNoaXAuby1mbGctMltkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGNvbG9yOiAjMWI1ZTIwO1xcbiAgYm9yZGVyLWNvbG9yOiAjMWI1ZTIwO1xcbn1cXG4uaW5mby1ib3ggcFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVhNzY3MWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlYTc2NzFkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVhNzY3MWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODJkY2Y4MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODJkY2Y4MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzgyZGNmODMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLmNhcmRfZGF0YVtfdm0uY2FyZF9uYW1lXS5jbGFzc190ZXh0LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgY29sb3I6IF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0uY29sb3IsXG4gICAgICAgIHRvOiBfdm0uY2FyZF9kYXRhW192bS5jYXJkX25hbWVdLmxpbmtzICsgXCIvXCIgKyBfdm0uY2FyZF9uYW1lLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBob3ZlcjogXCJcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLmxkKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLmxvYWRpbmcgPT09IGZhbHNlXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0udGl0bGUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoclwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgdHlwZW9mIF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0udGV4dCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uY2FyZF9kYXRhW192bS5jYXJkX25hbWVdLnRleHQpKV0pXG4gICAgICAgICAgICAgIDogX3ZtLl9sKF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0udGV4dCwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7IGtleTogaXRlbS5pZCB9LCBbX3ZtLl92KF92bS5fcyhpdGVtKSldKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIF9jKFwidi1wcm9ncmVzcy1jaXJjdWxhclwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IDcwLCB3aWR0aDogNywgaW5kZXRlcm1pbmF0ZTogXCJcIiB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgXCJncmlkLWxpc3Qtc21cIjogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXIgbWItNVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIldlbGNvbSB0byBUb3JrcyBXRUJcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS55b3lha3VfbGlzdFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi00XCIsIGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIG1kMTA6IFwiXCIsIFwib2Zmc2V0LW1kMVwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRhYnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiX2xpc3QgbWItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbGlkZXItY29sb3JcIjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaXhlZC10YWJzXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYnMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYl9saXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSAwICYmIF92bS50YWJzID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc21hbGw6IFwiXCIsIGxlZnQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZmFyIGZhLW1laFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IDAgJiYgX3ZtLnRhYnMgIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbWFsbDogXCJcIiwgbGVmdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJmYXIgZmEtc21pbGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJfbGlzdF9jb3VudGVyW2luZGV4XSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1iYWRnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcmlnaHQ6IFwiXCIsIHNtYWxsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJiYWRnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFiX2xpc3RfY291bnRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW192bS5fdihfdm0uX3MoaXRlbSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYnMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXRhYnMtaXRlbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFicyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRhYi1pdGVtXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9wLWFsZXJ0IHBhLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHMxMjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3JkZXJfYWN0X2J0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiL29yZGVyX2xpc3QveW95YWt1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLkuIDmi6zmiYvphY1cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ueW95YWt1X2xpc3QsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbmZvLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czQ6IFwiXCIsIGxnMzogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInB0LTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm9iclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1sLTMgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiby1mbGctXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY250X29yZGVyX2xpc3Rfc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImwtZmxnLVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNudF9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3JkZXJfc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWNlbnRlciBwdC0yIHBiLTAgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbnRfbW9kZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY250X29yZGVyX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udXNlcl95b3lha3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeHM2OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvb3JkZXJfbGlzdC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY250X29yZGVyX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuips+e0sFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC14cy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhzNjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbnRfc3RhdHVzID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcmRlcl9ob3J5dShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuS/neeVmVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcmRlcl9ob3J5dShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuaJv+iqjeW+heOBoVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRhYi1pdGVtXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10YWItaXRlbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcIml0ZW1fbGlzdFwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiY29tbW9uLWNhcmRzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2FyZF9uYW1lOiBcImVxdWlwU3RhcnRDaGVja1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwicGV0aXRpb25cIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwiaW52ZW50b3J5XCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcInJlYWRmaWxlXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcIm1vZGVsX21zdFwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJyZWNlcHRfbGlzdFwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJwcm9kdWN0X2xpc3RcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwidXNlcl9pbmZvXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcInVrZWlyZVwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJ0ZWhhaXNha2lcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWE3NjcxZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWE3NjcxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVlYTc2NzFkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDYXJkVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZQcm9ncmVzc0NpcmN1bGFyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQ2FyZCxWQ2FyZFRpdGxlLFZQcm9ncmVzc0NpcmN1bGFyfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZWE3NjcxZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZWE3NjcxZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlYTc2NzFkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVlYTc2NzFkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb25DYXJkcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlYTc2NzFkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWE3NjcxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlYTc2NzFkJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ODJkY2Y4MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODJkY2Y4MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc4MmRjZjgzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJhZGdlIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmRBY3Rpb25zIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZFRleHQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDaGlwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUYWIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUYWJJdGVtIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFicyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRhYnNJdGVtcyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcCxWQmFkZ2UsVkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUZXh0LFZDaGlwLFZDb250YWluZXIsVkZsZXgsVkljb24sVkxheW91dCxWVGFiLFZUYWJJdGVtLFZUYWJzLFZUYWJzSXRlbXN9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc4MmRjZjgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc4MmRjZjgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ODJkY2Y4MyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ODJkY2Y4MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc4MmRjZjgzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc4MmRjZjgzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ODJkY2Y4MyZzY29wZWQ9dHJ1ZSZcIiIsImNvbnN0IFRFWFRfQ09MT1IgPSAnd2hpdGUtLXRleHQnO1xuLy8gY29uc3QgQ09MT1JfVEVBTF9DTEFTU18yID0gJ2JsdWUgbGlnaHRlbi0yJztcbmNvbnN0IEJVVE9OX1RFWFQgPSAnVklFVyc7XG5jb25zdCBDT0xPUl9ERUYgPSAnYmx1ZSBsaWdodGVuLTInXG5jb25zdCBDT0xPUl9NU1QgPSAnZ3JlZW4gbGlnaHRlbi0yJ1xuY29uc3QgQ09MT1JfRklMRSA9IFwiaW5kaWdvIGxpZ2h0ZW4tMlwiXG5jb25zdCBDT0xPUl9XT1JLID0gXCJkZWVwLW9yYW5nZSBsaWdodGVuLTJcIlxuY29uc3QgQ09MT1JfV09SS19MRVNTID0gJ3RlYWwgbGlnaHRlbi0yJ1xuXG5jb25zdCBfY2FyZF9kYXRhID0ge1xuICBpdGVtX2xpc3Q6IHtcbiAgICB0aXRsZTogXCLpg6jmnZBcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9NU1QsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogJ+mDqOadkOODu+Wbs+mdouS4gOimp+ODquOCueODiCcsXG4gICAgZGV0YWlsczogW1wi6YOo5p2Q44Gu5qSc57Si44CB5q6L5pWw44CB5bel5LqL5Ymy5b2T5pWw44CB5omL6YWN44O75Y+X5YWl5riI44G/5pWw6YeP44Gu56K66KqN44GM44Gn44GN44G+44GZXCJdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiL2RhdGFfdGFibGVcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhUXG4gIH0sXG4gIGVxdWlwU3RhcnRDaGVjazoge1xuICAgIHRpdGxlOiBcIueCueaknFwiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX0RFRixcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBcIuW3peWFt+ODu+ioreWCmeOBruWni+alreaZgueCueaknFwiLFxuICAgIGRldGFpbHM6IFtcbiAgICAgIFwi5omL6YWN44GX44Gf5bel5LqL44KS5YWD44Gr5Y+X5YWl5Yem55CG44KS6KGM44GI44G+44GZ44CCXCIsXG4gICAgICBcIuWvvuixoeOBruaJi+mFjeW3peS6i+OCkumBuOaKnuOBmeOCi+OBqOaJi+mFjeS4gOimp+ODquOCueODiOOBjOihqOekuuOBleOCjOOBvuOBmeOAglwiLFxuICAgICAgXCLooajnpLrjgZXjgozjgZ/jg6rjgrnjg4jjgojjgorlj5fjgZHlhaXjgozjgovpg6jmnZDjgpLjg4Hjgqfjg4Pjgq/jgZfjgIFcIixcbiAgICAgIFwi55S76Z2i5LiL6YOo44Gu5Y+X5YWl44Oc44K/44Oz44KS5oq85LiL44GX44Gm44GP44Gg44GV44GE44CCXCIsXG4gICAgICBcIuWPl+WFpeaVsOmHj+OBruWkieabtOOBjOOBguOCi+WgtOWQiOOBr+OAgeODquOCueODiOWPs+mDqOOBrue3qOmbhuOCs+ODnuODs+ODieOCkuaKvOOBl+OBpuOBj+OBoOOBleOBhOOAglwiXG4gICAgXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIi93b3JrXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVCxcbiAgICBjb250ZW50czogW1xuICAgICAge1xuICAgICAgICBpZDogXCJrb2t1aW5cIixcbiAgICAgICAgbmFtZTogXCLliLvljbDmqZ9cIixcbiAgICAgICAgdGV4dDogXCLliLvljbDmqZ/kvb/nlKjmmYLjgavnorroqo3jgpLooYzjgYZcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgcGV0aXRpb246IHtcbiAgICB0aXRsZTogXCLnlLPoq4tcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9ERUYsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogXCLkvJHmmofjg7vmrovmpa3jg7tldGPjga7nlLPoq4vjgpLooYzjgYZcIixcbiAgICBkZXRhaWxzOiBbXG4gICAgXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfSxcbiAgaW52ZW50b3J5OiB7XG4gICAgdGl0bGU6IFwi5qOa5Y2444GXXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfV09SS19MRVNTLFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFwi6YOo5p2Q44O744Gd44Gu5LuW44O75bel5LqL44O75bGl5q20XCIsXG4gICAgZGV0YWlsczogW1xuICAgIF0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCJcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhUXG4gIH0sXG4gIHJlYWRmaWxlOiB7XG4gICAgdGl0bGU6IFwi6Kqt5Y+WXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfRklMRSxcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBbXCJUU+ODh+ODvOOCv++8iENTVuW9ouW8j++8iVwiXSxcbiAgICBkZXRhaWxzOiBbXCLjg5XjgqHjgqTjg6voqq3jgb/ovrzjgb9cIl0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCJcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhUXG4gIH0sXG4gIG1vZGVsX21zdDoge1xuICAgIHRpdGxlOiBcIuW9ouW8j1wiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX01TVCxcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBbXCLlvaLlvI/jg6rjgrnjg4jjg7vmp4vmiJDjg4fjg7zjgr/mm7TmlrDjg7vpg6jmnZDnmbvpjLLjg7vmiYvphY3jg7vngrnmpJzjg7vnorroqo1cIl0sXG4gICAgZGV0YWlsczogW1wiXCJdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgfSxcbiAgcmVjZXB0X2xpc3Q6IHtcbiAgICB0aXRsZTogXCLlj5fms6hcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9XT1JLX0xFU1MsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogW1wi5rOo5q6L44O76KO96YCg44OH44O844K/5L2c5oiQXCJdLFxuICAgIGRldGFpbHM6IFtcIlwiXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfSxcbiAgcHJvZHVjdF9saXN0OiB7XG4gICAgdGl0bGU6IFwi6KO96YCg44OH44O844K/XCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfV09SS19MRVNTLFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFtcIuaJi+mFjeODu+i1t+W3peODu+e0jeWTgVwiXSxcbiAgICBkZXRhaWxzOiBbXCJcIl0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCJcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhUXG4gIH0sXG4gIHVzZXJfaW5mbzoge1xuICAgIHRpdGxlOiBcIuS9nOalreiAheaDheWgsVwiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX0RFRixcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBbXCLkvZzmpa3ogIXmg4XloLHmm7TmlrBcIl0sXG4gICAgZGV0YWlsczogW1wiXCJdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVFxuICB9LFxuICB1a2VpcmU6IHtcbiAgICB0aXRsZTogXCLlj5flhaVcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9XT1JLX0xFU1MsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogW1wi55m65rOo6YOo5p2Q5Y+X44GR5YWl44KMXCJdLFxuICAgIGRldGFpbHM6IFtcIlwiXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfSxcbiAgdGVoYWlzYWtpOiB7XG4gICAgdGl0bGU6IFwi5omL6YWN5YWIXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfV09SS19MRVNTLFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFtcIue1seWQiOODu+eZu+mMsuODu+WJiumZpOODu+abtOaWsFwiXSxcbiAgICBkZXRhaWxzOiBbXCJcIl0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCJcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhUXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJkX2RhdGE6IF9jYXJkX2RhdGEsXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
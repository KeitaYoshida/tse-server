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

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_CardValueList_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ["card_name"]
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
exports.push([module.i, ".v-card[data-v-5ea7671d] {\n  padding-bottom: 3rem;\n}\n.headline[data-v-5ea7671d] {\n  font-size: 1.3rem !important;\n}\np[data-v-5ea7671d] {\n  width: 80%;\n  margin: 0 auto;\n  font-size: 0.9rem;\n  text-align: center;\n}", ""]);



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
        hover: ""
      }
    },
    [
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
          }),
      _vm._v(" "),
      _vm.card_data[_vm.card_name].button
        ? _c(
            "v-card-actions",
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: _vm.card_data[_vm.card_name].links & "/" & _vm.card_name
                  }
                },
                [
                  _c("v-btn", { attrs: { flat: "", dark: "", outline: "" } }, [
                    _vm._v(_vm._s(_vm.card_data[_vm.card_name].button_text))
                  ])
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
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





_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"]})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb25DYXJkcy52dWU/NGY5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZT9kNDIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbkNhcmRzLnZ1ZT81NjFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0hvbWVDb21wb25lbnQudnVlPzNkMzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlPzM1OGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWU/Zjg1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb25DYXJkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlPzVkNGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlP2ZhYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlP2U3OTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC52dWU/MzdkNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50LnZ1ZT81ZTkyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0hvbWVDb21wb25lbnQudnVlP2U0YmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9DYXJkVmFsdWVMaXN0LmpzIl0sIm5hbWVzIjpbIlRFWFRfQ09MT1IiLCJCVVRPTl9URVhUIiwiQ09MT1JfREVGIiwiQ09MT1JfTVNUIiwiQ09MT1JfRklMRSIsIkNPTE9SX1dPUksiLCJDT0xPUl9XT1JLX0xFU1MiLCJfY2FyZF9kYXRhIiwiaXRlbV9saXN0IiwidGl0bGUiLCJjbGFzc190ZXh0IiwiY29sb3IiLCJ0ZXh0IiwiZGV0YWlscyIsImpvaW4iLCJsaW5rcyIsImJ1dHRvbiIsImJ1dHRvbl90ZXh0IiwiZXF1aXBTdGFydENoZWNrIiwiY29udGVudHMiLCJpZCIsIm5hbWUiLCJwZXRpdGlvbiIsImludmVudG9yeSIsInJlYWRmaWxlIiwibW9kZWxfbXN0IiwicmVjZXB0X2xpc3QiLCJwcm9kdWN0X2xpc3QiLCJ1c2VyX2luZm8iLCJkYXRhIiwiY2FyZF9kYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFFQTtBQUNBLDRFQURBO0FBRUE7QUFGQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzBHQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxnQkFGQTtBQUdBLHVEQUhBO0FBSUE7QUFKQTtBQU1BLEdBWEE7QUFZQTtBQUNBO0FBQ0EsR0FkQTtBQWVBO0FBQ0EsUUFEQSxrQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTtBQUNBLG9CQURBO0FBRUE7QUFG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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TVpDLFNBQUssRUFBRSxFQU5LO0FBT1pDLFVBQU0sRUFBRSxLQVBJO0FBUVpDLGVBQVcsRUFBRWhCO0FBUkQsR0FyRkc7QUErRmpCMkIsV0FBUyxFQUFFO0FBQ1RuQixTQUFLLEVBQUUsT0FERTtBQUVUQyxjQUFVLEVBQUVSLFNBRkg7QUFHVFMsU0FBSyxFQUFFWCxVQUhFO0FBSVRZLFFBQUksRUFBRSxDQUFDLFNBQUQsQ0FKRztBQUtUQyxXQUFPLEVBQUUsQ0FBQyxFQUFELEVBQUtDLElBQUwsQ0FBVSxFQUFWLENBTEE7QUFNVEMsU0FBSyxFQUFFLEVBTkU7QUFPVEMsVUFBTSxFQUFFLEtBUEM7QUFRVEMsZUFBVyxFQUFFaEI7QUFSSjtBQS9GTSxDQUFuQjtBQTJHZTtBQUNiNEIsTUFEYSxrQkFDTjtBQUNMLFdBQU87QUFDTEMsZUFBUyxFQUFFdkI7QUFETixLQUFQO0FBR0Q7QUFMWSxDQUFmLEUiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtY2FyZFxuICAgIDpjb2xvcj1cImNhcmRfZGF0YVtjYXJkX25hbWVdLmNvbG9yXCJcbiAgICA6Y2xhc3M9XCJjYXJkX2RhdGFbY2FyZF9uYW1lXS5jbGFzc190ZXh0XCJcbiAgICA6dG89XCJjYXJkX2RhdGFbY2FyZF9uYW1lXS5saW5rcyArICcvJyArIGNhcmRfbmFtZVwiXG4gICAgaG92ZXJcbiAgPlxuICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPnt7IGNhcmRfZGF0YVtjYXJkX25hbWVdLnRpdGxlIH19PC9kaXY+XG4gICAgICA8aHI+XG4gICAgPC92LWNhcmQtdGl0bGU+XG4gICAgPHAgdi1pZj1cInR5cGVvZiBjYXJkX2RhdGFbY2FyZF9uYW1lXS50ZXh0ID09PSAnc3RyaW5nJ1wiPnt7IGNhcmRfZGF0YVtjYXJkX25hbWVdLnRleHQgfX08L3A+XG4gICAgPHAgdi1lbHNlIHYtZm9yPVwiaXRlbSBpbiBjYXJkX2RhdGFbY2FyZF9uYW1lXS50ZXh0XCIgOmtleT1cIml0ZW0uaWRcIj57eyBpdGVtIH19PC9wPlxuICAgIDx2LWNhcmQtYWN0aW9ucyB2LWlmPVwiY2FyZF9kYXRhW2NhcmRfbmFtZV0uYnV0dG9uXCI+XG4gICAgICA8cm91dGVyLWxpbmsgOnRvPVwiY2FyZF9kYXRhW2NhcmRfbmFtZV0ubGlua3MgJiAnLycgJiBjYXJkX25hbWVcIj5cbiAgICAgICAgPHYtYnRuIGZsYXQgZGFyayBvdXRsaW5lPnt7IGNhcmRfZGF0YVtjYXJkX25hbWVdLmJ1dHRvbl90ZXh0IH19PC92LWJ0bj5cbiAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgPC92LWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGNhcmRfZGF0YSBmcm9tIFwiLi4vbWl4aW5zL0NhcmRWYWx1ZUxpc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtjYXJkX2RhdGFdLFxuICBwcm9wczogW1wiY2FyZF9uYW1lXCJdXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi52LWNhcmQge1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cbi5oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XG59XG5wIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8di1hcHA+XG4gICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC1zbT5cbiAgICAgIDxoMSBjbGFzcz1cInRleHQteHMtY2VudGVyIG1iLTVcIj5XZWxjb20gdG8gVG9ya3MgV0VCPC9oMT5cbiAgICAgIDx2LWxheW91dCB3cmFwIHYtaWY9XCJ5b3lha3VfbGlzdFwiIGNsYXNzPVwibWItNFwiPlxuICAgICAgICA8di1mbGV4IHhzMTIgbWQxMCBvZmZzZXQtbWQxPlxuICAgICAgICAgIDx2LXRhYnNcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJzXCJcbiAgICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgc2xpZGVyLWNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBmaXhlZC10YWJzXG4gICAgICAgICAgICBjbGFzcz1cInRhYl9saXN0IG1iLTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXRhYiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdGFiX2xpc3RcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpbmRleD09PTAgJiYgdGFicz09PTBcIj5cbiAgICAgICAgICAgICAgICA8di1pY29uIHNtYWxsIGxlZnQ+ZmFyIGZhLW1laDwvdi1pY29uPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImluZGV4PT09MCAmJiB0YWJzIT09MFwiPlxuICAgICAgICAgICAgICAgIDx2LWljb24gc21hbGwgbGVmdD5mYXIgZmEtc21pbGU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ0YWJfbGlzdF9jb3VudGVyW2luZGV4XSE9PXVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgICAgIDx2LWJhZGdlIHJpZ2h0IHNtYWxsPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpiYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgdGFiX2xpc3RfY291bnRlcltpbmRleF0gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAge3tpdGVtfX1cbiAgICAgICAgICAgICAgICA8L3YtYmFkZ2U+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+e3tpdGVtfX08L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC92LXRhYj5cbiAgICAgICAgICA8L3YtdGFicz5cbiAgICAgICAgICA8di10YWJzLWl0ZW1zIHYtbW9kZWw9XCJ0YWJzXCIgdi1pZj1cInRhYnMhPT1udWxsXCI+XG4gICAgICAgICAgICA8di10YWItaXRlbT48L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICA8di10YWItaXRlbT5cbiAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cInRvcC1hbGVydCBwYS0yXCIgZmxhdD5cbiAgICAgICAgICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwib3JkZXJfYWN0X2J0blwiXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIvb3JkZXJfbGlzdC95b3lha3VcIlxuICAgICAgICAgICAgICAgICAgICA+5LiA5ous5omL6YWNPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB5b3lha3VfbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCBsZzMgOmtleT1cImluZGV4XCIgY2xhc3M9XCJpbmZvLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgZmxhdCBjbGFzcz1cInB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxub2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiJ21sLTMgJyArICdvLWZsZy0nICsgaXRlbS5jbnRfb3JkZXJfbGlzdF9zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgaXRlbS5zdGF0dXMudmFsIH19PC92LWNoaXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCInbC1mbGctJyArIGl0ZW0uY250X3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpdGVtLm9yZGVyX3N0YXR1cy52YWwgfX08L3YtY2hpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbm9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dCBjbGFzcz1cInRleHQteHMtY2VudGVyIHB0LTIgcGItMCBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGl0ZW0uY250X21vZGVsIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBpdGVtLmNudF9vcmRlcl9jb2RlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBpdGVtLnVzZXJfeW95YWt1IH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czYgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVwiJy9vcmRlcl9saXN0LycgKyBpdGVtLmNudF9vcmRlcl9jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID7oqbPntLA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS5jbnRfc3RhdHVzPT09MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJvcmRlcl9ob3J5dShpdGVtKVwiPuS/neeVmTwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGZsYXQgY29sb3I9XCJwcmltYXJ5XCIgQGNsaWNrPVwib3JkZXJfaG9yeXUoaXRlbSlcIj7mib/oqo3lvoXjgaE8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgICAgIDx2LXRhYi1pdGVtPjwvdi10YWItaXRlbT5cbiAgICAgICAgICAgIDx2LXRhYi1pdGVtPjwvdi10YWItaXRlbT5cbiAgICAgICAgICA8L3YtdGFicy1pdGVtcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICA8L3YtbGF5b3V0PlxuICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cIml0ZW1fbGlzdFwiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJlcXVpcFN0YXJ0Q2hlY2tcIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwicGV0aXRpb25cIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwiaW52ZW50b3J5XCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cInJlYWRmaWxlXCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8di1mbGV4IGQtZmxleCB4czYgbWQ0IGxnMz5cbiAgICAgICAgICA8Y29tbW9uLWNhcmRzIGNhcmRfbmFtZT1cIm1vZGVsX21zdFwiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJyZWNlcHRfbGlzdFwiPjwvY29tbW9uLWNhcmRzPlxuICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPHYtZmxleCBkLWZsZXggeHM2IG1kNCBsZzM+XG4gICAgICAgICAgPGNvbW1vbi1jYXJkcyBjYXJkX25hbWU9XCJwcm9kdWN0X2xpc3RcIj48L2NvbW1vbi1jYXJkcz5cbiAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDx2LWZsZXggZC1mbGV4IHhzNiBtZDQgbGczPlxuICAgICAgICAgIDxjb21tb24tY2FyZHMgY2FyZF9uYW1lPVwidXNlcl9pbmZvXCI+PC9jb21tb24tY2FyZHM+XG4gICAgICAgIDwvdi1mbGV4PlxuICAgICAgPC92LWxheW91dD5cbiAgICA8L3YtY29udGFpbmVyPlxuICA8L3YtYXBwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDb21tb25DYXJkcyBmcm9tIFwiLi9Db21tb25DYXJkc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDb21tb25DYXJkc1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeW95YWt1X2xpc3Q6IG51bGwsXG4gICAgICB0YWJzOiBudWxsLFxuICAgICAgdGFiX2xpc3Q6IFtcIkluZm9ybWF0aW9uXCIsIFwi5omL6YWN5LqI57SEXCIsIFwi5ZCE56iu55Sz6KuLXCIsIFwi5om/6KqN5b6F44GhXCJdLFxuICAgICAgdGFiX2xpc3RfY291bnRlcjogW11cbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGluaXQoKSB7XG4gICAgICBheGlvcy5nZXQoXCIvZGIvb3JkZXIveW95YWt1L2dhaXlvdVwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMueW95YWt1X2xpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgdGhpcy50YWJfbGlzdF9jb3VudGVyWzFdID0gcmVzLmRhdGEubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgICBsZXQgZCA9IHtcbiAgICAgICAgdGV4dDogXCJob2dlXCIsXG4gICAgICAgIHZhbDogXCJodWdhXCJcbiAgICAgIH07XG4gICAgICAvLyBheGlvcy5wb3N0KFwiL0ZpcmViYXNlL3Rlc3RcIiwgZCkudGhlbihyZXMgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgLy8gfSk7XG4gICAgfSxcbiAgICBvcmRlcl9ob3J5dShpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5jbnRfc3RhdHVzID09PSAwKSB7XG4gICAgICAgIGl0ZW0uY250X3N0YXR1cyA9IDg7XG4gICAgICAgIGl0ZW0ub3JkZXJfc3RhdHVzLnZhbCA9IFwi5L+d55WZXCI7XG4gICAgICAgIGF4aW9zLmdldChcbiAgICAgICAgICBcIi9kYi9vcmRlci9saXN0L2NvbC91cC9cIiArIGl0ZW0uY250X29yZGVybGlzdF9pZCArIFwiL2NudF9zdGF0dXMvXCIgKyA4XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNudF9zdGF0dXMgPSAwO1xuICAgICAgICBpdGVtLm9yZGVyX3N0YXR1cy52YWwgPSBcIuaJv+iqjeW+heOBoVwiO1xuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgXCIvZGIvb3JkZXIvbGlzdC9jb2wvdXAvXCIgKyBpdGVtLmNudF9vcmRlcmxpc3RfaWQgKyBcIi9jbnRfc3RhdHVzL1wiICsgMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5oMSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubGF5b3V0LmdhZGdldCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4udG9wLWFsZXJ0LnYtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnRhYl9saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ub3JkZXJfYWN0X2J0biB7XG4gIHdpZHRoOiAyNSU7XG59XG4uaW5mby1ib3gge1xuICBmb250LXNpemU6IDFyZW07XG4gIC52LWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYTIzN2U7XG4gICAgY29sb3I6ICMxYTIzN2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAudi1jaGlwIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICAmLm8tZmxnLTAge1xuICAgICAgY29sb3I6ICMxYTIzN2U7XG4gICAgICBib3JkZXItY29sb3I6ICMxYTIzN2U7XG4gICAgfVxuICAgICYubC1mbGctMCB7XG4gICAgICBjb2xvcjogIzFhMjM3ZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzFhMjM3ZTtcbiAgICB9XG4gICAgJi5vLWZsZy0xIHtcbiAgICAgIGNvbG9yOiAjYmYzNjBjO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYmYzNjBjO1xuICAgIH1cbiAgICAmLm8tZmxnLTIge1xuICAgICAgY29sb3I6ICMxYjVlMjA7XG4gICAgICBib3JkZXItY29sb3I6ICMxYjVlMjA7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG4vLyBzdmcge1xuLy8gICBwYXRoOmhvdmVyIHtcbi8vICAgICBhbmltYXRpb246IGNvbG9yQ2hhbmdlIDFzIGVhc2UgZm9yd2FyZHM7XG4vLyAgIH1cbi8vIH1cbi8vIEBrZXlmcmFtZXMgY29sb3JDaGFuZ2V7XG4vLyAgICAgMTAwJSB7XG4vLyAgICAgICAgIGZpbGw6ICNGRjAwMDA7XG4vLyAgICAgfVxuLy8gfVxuPC9zdHlsZT5cblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudi1jYXJkW2RhdGEtdi01ZWE3NjcxZF0ge1xcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XFxufVxcbi5oZWFkbGluZVtkYXRhLXYtNWVhNzY3MWRdIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxufVxcbnBbZGF0YS12LTVlYTc2NzFkXSB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMVtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5sYXlvdXQuZ2FkZ2V0W2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLnRvcC1hbGVydC52LWNhcmRbZGF0YS12LTc4MmRjZjgzXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLnRhYl9saXN0W2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5vcmRlcl9hY3RfYnRuW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLmluZm8tYm94W2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uaW5mby1ib3ggLnYtY2FyZFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYTIzN2U7XFxuICBjb2xvcjogIzFhMjM3ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uaW5mby1ib3ggLnYtY2hpcFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmluZm8tYm94IC52LWNoaXAuby1mbGctMFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGNvbG9yOiAjMWEyMzdlO1xcbiAgYm9yZGVyLWNvbG9yOiAjMWEyMzdlO1xcbn1cXG4uaW5mby1ib3ggLnYtY2hpcC5sLWZsZy0wW2RhdGEtdi03ODJkY2Y4M10ge1xcbiAgY29sb3I6ICMxYTIzN2U7XFxuICBib3JkZXItY29sb3I6ICMxYTIzN2U7XFxufVxcbi5pbmZvLWJveCAudi1jaGlwLm8tZmxnLTFbZGF0YS12LTc4MmRjZjgzXSB7XFxuICBjb2xvcjogI2JmMzYwYztcXG4gIGJvcmRlci1jb2xvcjogI2JmMzYwYztcXG59XFxuLmluZm8tYm94IC52LWNoaXAuby1mbGctMltkYXRhLXYtNzgyZGNmODNdIHtcXG4gIGNvbG9yOiAjMWI1ZTIwO1xcbiAgYm9yZGVyLWNvbG9yOiAjMWI1ZTIwO1xcbn1cXG4uaW5mby1ib3ggcFtkYXRhLXYtNzgyZGNmODNdIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVhNzY3MWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVlYTc2NzFkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVhNzY3MWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODJkY2Y4MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODJkY2Y4MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzgyZGNmODMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLmNhcmRfZGF0YVtfdm0uY2FyZF9uYW1lXS5jbGFzc190ZXh0LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgY29sb3I6IF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0uY29sb3IsXG4gICAgICAgIHRvOiBfdm0uY2FyZF9kYXRhW192bS5jYXJkX25hbWVdLmxpbmtzICsgXCIvXCIgKyBfdm0uY2FyZF9uYW1lLFxuICAgICAgICBob3ZlcjogXCJcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0udGl0bGUpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoclwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgdHlwZW9mIF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0udGV4dCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uY2FyZF9kYXRhW192bS5jYXJkX25hbWVdLnRleHQpKV0pXG4gICAgICAgIDogX3ZtLl9sKF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0udGV4dCwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7IGtleTogaXRlbS5pZCB9LCBbX3ZtLl92KF92bS5fcyhpdGVtKSldKVxuICAgICAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5jYXJkX2RhdGFbX3ZtLmNhcmRfbmFtZV0uYnV0dG9uXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0bzogX3ZtLmNhcmRfZGF0YVtfdm0uY2FyZF9uYW1lXS5saW5rcyAmIFwiL1wiICYgX3ZtLmNhcmRfbmFtZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LWJ0blwiLCB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGRhcms6IFwiXCIsIG91dGxpbmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNhcmRfZGF0YVtfdm0uY2FyZF9uYW1lXS5idXR0b25fdGV4dCkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgeyBhdHRyczogeyBcImdyaWQtbGlzdC1zbVwiOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlciBtYi01XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiV2VsY29tIHRvIFRvcmtzIFdFQlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnlveWFrdV9saXN0XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTRcIiwgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgbWQxMDogXCJcIiwgXCJvZmZzZXQtbWQxXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtdGFic1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJfbGlzdCBtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNsaWRlci1jb2xvclwiOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpeGVkLXRhYnNcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFicyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFicyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFiX2xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IDAgJiYgX3ZtLnRhYnMgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzbWFsbDogXCJcIiwgbGVmdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJmYXIgZmEtbWVoXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gMCAmJiBfdm0udGFicyAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtYWxsOiBcIlwiLCBsZWZ0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImZhciBmYS1zbWlsZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYl9saXN0X2NvdW50ZXJbaW5kZXhdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJhZGdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByaWdodDogXCJcIiwgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImJhZGdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJfbGlzdF9jb3VudGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbX3ZtLl92KF92bS5fcyhpdGVtKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udGFicyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdGFicy1pdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFicyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGFiLWl0ZW1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10YWItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3AtYWxlcnQgcGEtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czEyOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvcmRlcl9hY3RfYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvb3JkZXJfbGlzdC95b3lha3VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS4gOaLrOaJi+mFjVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS55b3lha3VfbGlzdCwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImluZm8tYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzNDogXCJcIiwgbGczOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHQtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub2JyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWwtMyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvLWZsZy1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbnRfb3JkZXJfbGlzdF9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibC1mbGctXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY250X3N0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcmRlcl9zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtY2VudGVyIHB0LTIgcGItMCBtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNudF9tb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbnRfb3JkZXJfY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS51c2VyX3lveWFrdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4czY6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9vcmRlcl9saXN0L1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbnRfb3JkZXJfY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi6Kmz57SwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeHM2OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNudF9zdGF0dXMgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9yZGVyX2hvcnl1KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5L+d55WZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9yZGVyX2hvcnl1KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5om/6KqN5b6F44GhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGFiLWl0ZW1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRhYi1pdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwiaXRlbV9saXN0XCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJjb21tb24tY2FyZHNcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjYXJkX25hbWU6IFwiZXF1aXBTdGFydENoZWNrXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJwZXRpdGlvblwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJpbnZlbnRvcnlcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwicmVhZGZpbGVcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImQtZmxleFwiOiBcIlwiLCB4czY6IFwiXCIsIG1kNDogXCJcIiwgbGczOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJjb21tb24tY2FyZHNcIiwgeyBhdHRyczogeyBjYXJkX25hbWU6IFwibW9kZWxfbXN0XCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcInJlY2VwdF9saXN0XCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJkLWZsZXhcIjogXCJcIiwgeHM2OiBcIlwiLCBtZDQ6IFwiXCIsIGxnMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiY29tbW9uLWNhcmRzXCIsIHsgYXR0cnM6IHsgY2FyZF9uYW1lOiBcInByb2R1Y3RfbGlzdFwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiZC1mbGV4XCI6IFwiXCIsIHhzNjogXCJcIiwgbWQ0OiBcIlwiLCBsZzM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImNvbW1vbi1jYXJkc1wiLCB7IGF0dHJzOiB7IGNhcmRfbmFtZTogXCJ1c2VyX2luZm9cIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWE3NjcxZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWE3NjcxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVlYTc2NzFkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDYXJkQWN0aW9ucyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWQ2FyZCxWQ2FyZEFjdGlvbnMsVkNhcmRUaXRsZX0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWVhNzY3MWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWVhNzY3MWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWE3NjcxZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZWE3NjcxZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uQ2FyZHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tb25DYXJkcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZWE3NjcxZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbW9uQ2FyZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWVhNzY3MWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbW1vbkNhcmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZWE3NjcxZCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgyZGNmODMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzgyZGNmODMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ODJkY2Y4M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBcHAgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZCYWRnZSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDYXJkQWN0aW9ucyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2hpcCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFiIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFiSXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRhYnMgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUYWJzSXRlbXMgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBcHAsVkJhZGdlLFZCdG4sVkNhcmQsVkNhcmRBY3Rpb25zLFZDYXJkVGV4dCxWQ2hpcCxWQ29udGFpbmVyLFZGbGV4LFZJY29uLFZMYXlvdXQsVlRhYixWVGFiSXRlbSxWVGFicyxWVGFic0l0ZW1zfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ODJkY2Y4MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ODJkY2Y4MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgyZGNmODMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzgyZGNmODMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0hvbWVDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODJkY2Y4MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODJkY2Y4MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgyZGNmODMmc2NvcGVkPXRydWUmXCIiLCJjb25zdCBURVhUX0NPTE9SID0gJ3doaXRlLS10ZXh0Jztcbi8vIGNvbnN0IENPTE9SX1RFQUxfQ0xBU1NfMiA9ICdibHVlIGxpZ2h0ZW4tMic7XG5jb25zdCBCVVRPTl9URVhUID0gJ1ZJRVcnO1xuY29uc3QgQ09MT1JfREVGID0gJ2JsdWUgbGlnaHRlbi0yJ1xuY29uc3QgQ09MT1JfTVNUID0gJ2dyZWVuIGxpZ2h0ZW4tMidcbmNvbnN0IENPTE9SX0ZJTEUgPSBcImluZGlnbyBsaWdodGVuLTJcIlxuY29uc3QgQ09MT1JfV09SSyA9IFwiZGVlcC1vcmFuZ2UgbGlnaHRlbi0yXCJcbmNvbnN0IENPTE9SX1dPUktfTEVTUyA9ICd0ZWFsIGxpZ2h0ZW4tMidcblxuY29uc3QgX2NhcmRfZGF0YSA9IHtcbiAgaXRlbV9saXN0OiB7XG4gICAgdGl0bGU6IFwi6YOo5p2QXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfTVNULFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6ICfpg6jmnZDjg7vlm7PpnaLkuIDopqfjg6rjgrnjg4gnLFxuICAgIGRldGFpbHM6IFtcIumDqOadkOOBruaknOe0ouOAgeaui+aVsOOAgeW3peS6i+WJsuW9k+aVsOOAgeaJi+mFjeODu+WPl+WFpea4iOOBv+aVsOmHj+OBrueiuuiqjeOBjOOBp+OBjeOBvuOBmVwiXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIi9kYXRhX3RhYmxlXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVFxuICB9LFxuICBlcXVpcFN0YXJ0Q2hlY2s6IHtcbiAgICB0aXRsZTogXCLngrnmpJxcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9ERUYsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogXCLlt6Xlhbfjg7voqK3lgpnjga7lp4vmpa3mmYLngrnmpJxcIixcbiAgICBkZXRhaWxzOiBbXG4gICAgICBcIuaJi+mFjeOBl+OBn+W3peS6i+OCkuWFg+OBq+WPl+WFpeWHpueQhuOCkuihjOOBiOOBvuOBmeOAglwiLFxuICAgICAgXCLlr77osaHjga7miYvphY3lt6XkuovjgpLpgbjmip7jgZnjgovjgajmiYvphY3kuIDopqfjg6rjgrnjg4jjgYzooajnpLrjgZXjgozjgb7jgZnjgIJcIixcbiAgICAgIFwi6KGo56S644GV44KM44Gf44Oq44K544OI44KI44KK5Y+X44GR5YWl44KM44KL6YOo5p2Q44KS44OB44Kn44OD44Kv44GX44CBXCIsXG4gICAgICBcIueUu+mdouS4i+mDqOOBruWPl+WFpeODnOOCv+ODs+OCkuaKvOS4i+OBl+OBpuOBj+OBoOOBleOBhOOAglwiLFxuICAgICAgXCLlj5flhaXmlbDph4/jga7lpInmm7TjgYzjgYLjgovloLTlkIjjga/jgIHjg6rjgrnjg4jlj7Ppg6jjga7nt6jpm4bjgrPjg57jg7Pjg4njgpLmirzjgZfjgabjgY/jgaDjgZXjgYTjgIJcIlxuICAgIF0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCIvd29ya1wiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFQsXG4gICAgY29udGVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwia29rdWluXCIsXG4gICAgICAgIG5hbWU6IFwi5Yi75Y2w5qmfXCIsXG4gICAgICAgIHRleHQ6IFwi5Yi75Y2w5qmf5L2/55So5pmC44Gr56K66KqN44KS6KGM44GGXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHBldGl0aW9uOiB7XG4gICAgdGl0bGU6IFwi55Sz6KuLXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfREVGLFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFwi5LyR5pqH44O75q6L5qWt44O7ZXRj44Gu55Sz6KuL44KS6KGM44GGXCIsXG4gICAgZGV0YWlsczogW1xuICAgIF0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCJcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhUXG4gIH0sXG4gIGludmVudG9yeToge1xuICAgIHRpdGxlOiBcIuajmuWNuOOBl1wiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX1dPUktfTEVTUyxcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBcIumDqOadkOODu+OBneOBruS7luODu+W3peS6i+ODu+WxpeattFwiLFxuICAgIGRldGFpbHM6IFtcbiAgICBdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVFxuICB9LFxuICByZWFkZmlsZToge1xuICAgIHRpdGxlOiBcIuiqreWPllwiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX0ZJTEUsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogW1wiVFPjg4fjg7zjgr/vvIhDU1blvaLlvI/vvIlcIl0sXG4gICAgZGV0YWlsczogW1wi44OV44Kh44Kk44Or6Kqt44G/6L6844G/XCJdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVFxuICB9LFxuICBtb2RlbF9tc3Q6IHtcbiAgICB0aXRsZTogXCLlvaLlvI9cIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9NU1QsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogW1wi5b2i5byP44Oq44K544OI44O75qeL5oiQ44OH44O844K/5pu05paw44O76YOo5p2Q55m76Yyy44O75omL6YWN44O754K55qSc44O756K66KqNXCJdLFxuICAgIGRldGFpbHM6IFtcIlwiXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gIH0sXG4gIHJlY2VwdF9saXN0OiB7XG4gICAgdGl0bGU6IFwi5Y+X5rOoXCIsXG4gICAgY2xhc3NfdGV4dDogQ09MT1JfV09SS19MRVNTLFxuICAgIGNvbG9yOiBURVhUX0NPTE9SLFxuICAgIHRleHQ6IFtcIuazqOaui+ODu+ijvemAoOODh+ODvOOCv+S9nOaIkFwiXSxcbiAgICBkZXRhaWxzOiBbXCJcIl0uam9pbihcIlwiKSxcbiAgICBsaW5rczogXCJcIixcbiAgICBidXR0b246IGZhbHNlLFxuICAgIGJ1dHRvbl90ZXh0OiBCVVRPTl9URVhUXG4gIH0sXG4gIHByb2R1Y3RfbGlzdDoge1xuICAgIHRpdGxlOiBcIuijvemAoOODh+ODvOOCv1wiLFxuICAgIGNsYXNzX3RleHQ6IENPTE9SX1dPUktfTEVTUyxcbiAgICBjb2xvcjogVEVYVF9DT0xPUixcbiAgICB0ZXh0OiBbXCLmiYvphY3jg7votbflt6Xjg7vntI3lk4FcIl0sXG4gICAgZGV0YWlsczogW1wiXCJdLmpvaW4oXCJcIiksXG4gICAgbGlua3M6IFwiXCIsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBidXR0b25fdGV4dDogQlVUT05fVEVYVFxuICB9LFxuICB1c2VyX2luZm86IHtcbiAgICB0aXRsZTogXCLkvZzmpa3ogIXmg4XloLFcIixcbiAgICBjbGFzc190ZXh0OiBDT0xPUl9ERUYsXG4gICAgY29sb3I6IFRFWFRfQ09MT1IsXG4gICAgdGV4dDogW1wi5L2c5qWt6ICF5oOF5aCx5pu05pawXCJdLFxuICAgIGRldGFpbHM6IFtcIlwiXS5qb2luKFwiXCIpLFxuICAgIGxpbmtzOiBcIlwiLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgYnV0dG9uX3RleHQ6IEJVVE9OX1RFWFRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRfZGF0YTogX2NhcmRfZGF0YSxcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
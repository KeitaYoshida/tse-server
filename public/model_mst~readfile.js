(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["model_mst~readfile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemData_Henshu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../ItemData/Henshu */ "./resources/js/components/ItemData/Henshu.vue");
/* harmony import */ var _com_ComFormDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../com/ComFormDialog */ "./resources/js/components/com/ComFormDialog.vue");
/* harmony import */ var _com_ComCheckDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../com/ComCheckDialog */ "./resources/js/components/com/ComCheckDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["modelData", "upmode"],
  components: {
    Henshu: _ItemData_Henshu__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddCmptItem: _com_ComFormDialog__WEBPACK_IMPORTED_MODULE_1__["default"],
    DelCmptItem: _com_ComCheckDialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tabs: 0,
      henshu: false,
      item_code: "",
      item_rev: "",
      i: null,
      delflg: false,
      additem: false,
      delitem: false,
      dialog_data: null
    };
  },
  created: function created() {},
  methods: {
    put_order_code: function put_order_code(i, o) {
      if (o === "" || i === o) {
        return "-";
      } else {
        return o;
      }
    },
    checkout: function checkout(cl) {
      if (cl !== "CHIP品" && cl !== "図面") {
        return true;
      } else {
        return false;
      }
    },
    check: function check(c, i) {
      if (i.item_order) {
        i.item_order = 1;
      } else {
        i.item_order = 0;
      }

      axios.get("/db/r_cmpt_item/swich/order/flg/" + c.cmpt_id + "/" + i.item_id + "/" + i.item_order); // .then(res => {
      // console.log(res.data)
      // });
    },
    close: function close() {
      this.henshu = false;
      this.item_code = "";
      this.item_rev = "";
    },
    edit: function edit(i) {
      this.item_code = i.item_code;
      this.item_rev = i.item_rev;
      this.i = i;
      this.henshu = true;
    },
    pass: function pass(d) {
      switch (d.type) {
        case "base_data":
          this.i.item_name = d.data.item_name;
          this.i.item_model = d.data.item_model;
          this.i.order_code = d.data.order_code;
          this.i.read_time = d.data.read_time;
          break;

        case "order_way":
          this.i.lot_num = Number(d.data.lot_num);
          this.i.minimum_set = Number(d.data.minimum_set);
          break;

        case "order_price":
          this.i.vendor = d.data;
          break;

        default:
          break;
      }
    },
    del: function del(index) {
      var cmpt = this.modelData[0].cmpt[this.tabs];
      var item = cmpt.item_use[index].items;
      this.dialog_data = {
        title: "構成部材削除",
        message: "親形式 " + cmpt.cmpt_code + '<span style="padding:0 0.5rem; font-size:0.5rem;">' + cmpt.cmpt_rev.numToRev() + "</span> より 下記部材を削除します",
        data_v2: [["品目コード", item.item_code], ["ＲＥＶ", item.item_rev], ["品名", item.item_name], ["品目形式", item.item_model]],
        tar: {
          cmpt: cmpt,
          index: index
        }
      };
      this.delitem = true;
    },
    rtDel: function rtDel(d, flg) {
      var cmpt_id = d.tar.cmpt.cmpt_id;
      var item_id = d.tar.cmpt.item_use[d.tar.index].item_id;
      axios.get("/db/r_cmpt_item/delete/item/" + cmpt_id + "/" + item_id);
      this.modelData[0].cmpt[this.tabs].item_use.splice(d.tar.index, 1);
      this.delitem = false;
    },
    add: function add() {
      var m = this.modelData[0];
      var model_id = m.model_id;
      var cmpt = this.modelData[0].cmpt[this.tabs];
      this.dialog_data = {
        title: "構成部材登録",
        message: "親形式 " + cmpt.cmpt_code + '<span style="padding:0 0.5rem; font-size:0.5rem;">' + cmpt.cmpt_rev.numToRev() + "</span> に部材を登録します<br>※連番は０番固定",
        data: [{
          name: "item_code",
          label: "品目コード",
          id: "item_code",
          hint: "",
          value: "",
          type: ""
        }, {
          name: "item_rev",
          label: "品目ＲＥＶ",
          id: "item_rev",
          hint: "ハイフン(-)を除いた整数値を入力してください　例 01-03 → 103",
          value: "",
          type: "number"
        }, {
          name: "item_use",
          label: "員数",
          id: "item_use",
          hint: "手配時発注単位数",
          value: "",
          type: "number"
        }],
        tar: {
          rci: cmpt.cmpt_id
        }
      };
      this.additem = true;
    },
    rtAdd: function rtAdd(d, flg) {
      var _this = this;

      if (d.data[0].value === "" || d.data[1].value === "" || d.data[2].value === "") {
        return;
      }

      var data = {
        item: {
          item_code: d.data[0].value,
          item_rev: d.data[1].value
        },
        cmpt: {
          cmpt_id: d.tar.rci,
          item_use: d.data[2].value
        }
      };
      axios.post("/db/r_cmpt_item/add/item/", data).then(function (res) {
        if (res.data.length === 0) {
          alert("登録済みデータです");
        } else {
          _this.modelData[0].cmpt[_this.tabs].item_use.unshift(res.data[0]);
        }
      });
      this.additem = !this.additem;
    },
    next: function next() {
      this.$emit("up");
    },
    back: function back() {
      this.$emit("down");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
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
  props: ["data"],
  methods: {
    submit: function submit() {
      this.$emit("rt", this.data, true);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "h3[data-v-4c83d4bd] {\n  margin: 1rem 0;\n}\ntable[data-v-4c83d4bd] {\n  font-size: 1rem;\n  margin: 0 auto;\n  margin-bottom: 1.5rem;\n}\ntable tr[data-v-4c83d4bd] {\n  padding: 0.5rem;\n}\ntable td[data-v-4c83d4bd] {\n  border-bottom: 1px dashed #aaa;\n  padding: 0.9rem 0.5rem;\n  text-align: center;\n}\ntable td .mini[data-v-4c83d4bd] {\n  display: block;\n  font-size: 0.8rem;\n  text-align: right;\n}\n.act-btn[data-v-4c83d4bd] {\n  width: 100%;\n  height: 3rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "h1[data-v-82c08db8] {\n  font-size: 1.5rem;\n}\n.back[data-v-82c08db8] {\n  background-color: #fff;\n}\n.del-info[data-v-82c08db8] {\n  text-align: center;\n}\n.submit-btn[data-v-82c08db8] {\n  width: 100%;\n}\n.message[data-v-82c08db8] {\n  font-size: 0.8rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=template&id=4c83d4bd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=template&id=4c83d4bd&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    "main",
    [
      _c(
        "v-tabs",
        {
          staticClass: "mb-4",
          attrs: { "fixed-tabs": "", color: "transparent" },
          model: {
            value: _vm.tabs,
            callback: function($$v) {
              _vm.tabs = $$v
            },
            expression: "tabs"
          }
        },
        _vm._l(_vm.modelData[0].cmpt, function(cmpt, index) {
          return _c(
            "v-tab",
            { key: index, attrs: { "slider-color": "primary" } },
            [_vm._v(_vm._s(cmpt.cmpt_code.slice(0, 11)))]
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { staticClass: "pl-5 pr-5", attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { staticClass: "pl-5 pr-5 pb-3 pt-3", attrs: { xs6: "" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "act-btn",
                  attrs: { color: "green lighten-1", outline: "" },
                  on: {
                    click: function($event) {
                      return _vm.add()
                    }
                  }
                },
                [_vm._v("部材追加")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "pl-5 pr-5 pb-3 pt-3", attrs: { xs6: "" } },
            [
              _vm.delflg
                ? [
                    _c(
                      "v-btn",
                      {
                        staticClass: "act-btn",
                        attrs: { color: "primary lighten-1", outline: "" },
                        on: {
                          click: function($event) {
                            _vm.delflg = !_vm.delflg
                          }
                        }
                      },
                      [_vm._v("更新モード")]
                    )
                  ]
                : [
                    _c(
                      "v-btn",
                      {
                        staticClass: "act-btn",
                        attrs: { color: "deep-orange lighten-1", outline: "" },
                        on: {
                          click: function($event) {
                            _vm.delflg = !_vm.delflg
                          }
                        }
                      },
                      [_vm._v("削除モード")]
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
        _vm._l(_vm.modelData[0].cmpt, function(cmpt, index) {
          return _c("v-tab-item", { key: "cmpt" + index }, [
            _c(
              "table",
              [
                _c("tr", [
                  _c("td", [_vm._v("手配")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("連")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("品目コード")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("手配形式")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("部材名／形式")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("Lot(最小数)／RT")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "price" }, [_vm._v("手配先情報")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("編集")])
                ]),
                _vm._v(" "),
                _vm._l(cmpt.item_use, function(items, index) {
                  return [
                    _vm.checkout(items.items.item_class)
                      ? _c("tr", { key: "items_" + index }, [
                          _c(
                            "td",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.check(cmpt, items)
                                }
                              }
                            },
                            [
                              _c("v-checkbox", {
                                attrs: { color: "primary" },
                                model: {
                                  value: items.item_order,
                                  callback: function($$v) {
                                    _vm.$set(items, "item_order", $$v)
                                  },
                                  expression: "items.item_order"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(items.item_ren))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n              " +
                                _vm._s(items.items.item_code.rtrim()) +
                                "\n              "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", { staticClass: "mini" }, [
                              _vm._v(_vm._s(items.items.item_rev.numToRev()))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm.put_order_code(
                                  items.items.item_code.rtrim(),
                                  items.items.order_code.rtrim()
                                )
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  items.items.item_name !== null
                                    ? items.items.item_name.slice(0, 16)
                                    : ""
                                ) +
                                "\n              "
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  items.items.item_model !== null
                                    ? items.items.item_model.slice(0, 20)
                                    : ""
                                ) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(items.items.lot_num.lotToText()) +
                                  "\n              "
                              ),
                              items.items.lot_num >= 0
                                ? [
                                    _vm._v(
                                      "(" +
                                        _vm._s(
                                          items.items.minimum_set.comHyphen()
                                        ) +
                                        ")"
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    Number(items.items.read_time).comHyphen()
                                  ) +
                                  "\n            "
                              )
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            _vm._l(items.items.vendor, function(vendor, index) {
                              return _c(
                                "v-layout",
                                { key: index, attrs: { row: "", wrap: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { staticClass: "mini", attrs: { xs6: "" } },
                                    [_vm._v(_vm._s(vendor.vendname.com_name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { staticClass: "mini", attrs: { xs6: "" } },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          Number(
                                            vendor.vendor_item_price
                                          ).toLocaleString()
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              !_vm.delflg
                                ? [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          outline: "",
                                          color: "primary",
                                          small: "",
                                          dark: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.edit(items.items)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { small: "", left: "" } },
                                          [_vm._v("edit")]
                                        ),
                                        _vm._v("edit\n                ")
                                      ],
                                      1
                                    )
                                  ]
                                : [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          outline: "",
                                          color: "deep-orange",
                                          small: "",
                                          dark: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.del(index)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { small: "", left: "" } },
                                          [_vm._v("delete")]
                                        ),
                                        _vm._v("del\n                ")
                                      ],
                                      1
                                    )
                                  ]
                            ],
                            2
                          )
                        ])
                      : _vm._e()
                  ]
                })
              ],
              2
            )
          ])
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "80%", overflow: "" },
          on: { input: _vm.close },
          model: {
            value: _vm.henshu,
            callback: function($$v) {
              _vm.henshu = $$v
            },
            expression: "henshu"
          }
        },
        [
          _vm.henshu
            ? _c("Henshu", {
                attrs: {
                  item_code: _vm.item_code,
                  item_rev: _vm.item_rev,
                  del: false
                },
                on: { pass: _vm.pass }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { transition: "dialog-transition", width: "36%" },
          model: {
            value: _vm.additem,
            callback: function($$v) {
              _vm.additem = $$v
            },
            expression: "additem"
          }
        },
        [
          _vm.additem
            ? _c("AddCmptItem", {
                attrs: { data: _vm.dialog_data },
                on: { rt: _vm.rtAdd }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { transition: "dialog-transition", width: "36%" },
          model: {
            value: _vm.delitem,
            callback: function($$v) {
              _vm.delitem = $$v
            },
            expression: "delitem"
          }
        },
        [
          _vm.delitem
            ? _c("DelCmptItem", {
                attrs: { data: _vm.dialog_data },
                on: { rt: _vm.rtDel }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.upmode !== true
        ? [
            _c(
              "v-bottom-nav",
              { attrs: { fixed: "", value: "value" } },
              [
                _c(
                  "v-btn",
                  { attrs: { flat: "" }, on: { click: _vm.back } },
                  [
                    _c("span", [_vm._v("戻る")]),
                    _vm._v(" "),
                    _c("v-icon", [_vm._v("fas fa-backward")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  { attrs: { flat: "" }, on: { click: _vm.next } },
                  [
                    _c("span", [_vm._v("次へ")]),
                    _vm._v(" "),
                    _c("v-icon", [_vm._v("fas fa-forward")])
                  ],
                  1
                )
              ],
              1
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-alert",
    { staticClass: "back", attrs: { type: "info", value: true, outline: "" } },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c("v-flex", { attrs: { xs12: "" } }, [
            _c("h1", [_vm._v(_vm._s(_vm.data.title))]),
            _vm._v(" "),
            _c("p", {
              staticClass: "message",
              domProps: { innerHTML: _vm._s(_vm.data.message) }
            })
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "del-info", attrs: { xs12: "" } },
            [
              _c(
                "v-layout",
                { attrs: { wrap: "" } },
                [
                  _vm._l(_vm.data.data, function(item, index) {
                    return [
                      _c(
                        "v-flex",
                        { key: index, attrs: { xs12: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              name: item.name,
                              label: item.label,
                              id: item.id,
                              hint: item.hint,
                              type: item.type
                            },
                            model: {
                              value: item.value,
                              callback: function($$v) {
                                _vm.$set(item, "value", $$v)
                              },
                              expression: "item.value"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  }),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    {
                      staticClass: "mt-4",
                      attrs: { xs8: "", "offset-xs2": "" }
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "submit-btn",
                          attrs: { color: "info", outline: "" },
                          on: {
                            click: function($event) {
                              return _vm.submit()
                            }
                          }
                        },
                        [_vm._v("決定")]
                      )
                    ],
                    1
                  )
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ReadFile/Model/ComponentEntry.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/ReadFile/Model/ComponentEntry.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentEntry_vue_vue_type_template_id_4c83d4bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentEntry.vue?vue&type=template&id=4c83d4bd&scoped=true& */ "./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=template&id=4c83d4bd&scoped=true&");
/* harmony import */ var _ComponentEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentEntry.vue?vue&type=script&lang=js& */ "./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComponentEntry_vue_vue_type_style_index_0_id_4c83d4bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true& */ "./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComponentEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentEntry_vue_vue_type_template_id_4c83d4bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentEntry_vue_vue_type_template_id_4c83d4bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c83d4bd",
  null
  
)

/* vuetify-loader */












_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBottomNav: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBottomNav"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCheckbox: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCheckbox"],VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VDialog"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VTab: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTab"],VTabItem: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabItem"],VTabs: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabs"],VTabsItems: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabsItems"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReadFile/Model/ComponentEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ComponentEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_style_index_0_id_4c83d4bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=style&index=0&id=4c83d4bd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_style_index_0_id_4c83d4bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_style_index_0_id_4c83d4bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_style_index_0_id_4c83d4bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_style_index_0_id_4c83d4bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_style_index_0_id_4c83d4bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=template&id=4c83d4bd&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=template&id=4c83d4bd&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_template_id_4c83d4bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ComponentEntry.vue?vue&type=template&id=4c83d4bd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReadFile/Model/ComponentEntry.vue?vue&type=template&id=4c83d4bd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_template_id_4c83d4bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentEntry_vue_vue_type_template_id_4c83d4bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/com/ComFormDialog.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/com/ComFormDialog.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true& */ "./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true&");
/* harmony import */ var _ComFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComFormDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& */ "./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "82c08db8",
  null
  
)

/* vuetify-loader */






_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAlert: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VAlert"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/com/ComFormDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComFormDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=style&index=0&id=82c08db8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_style_index_0_id_82c08db8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComFormDialog.vue?vue&type=template&id=82c08db8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComFormDialog_vue_vue_type_template_id_82c08db8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVhZEZpbGUvTW9kZWwvQ29tcG9uZW50RW50cnkudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVhZEZpbGUvTW9kZWwvQ29tcG9uZW50RW50cnkudnVlP2QzMWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlP2QxNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVhZEZpbGUvTW9kZWwvQ29tcG9uZW50RW50cnkudnVlPzdhODQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlPzgwYjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVhZEZpbGUvTW9kZWwvQ29tcG9uZW50RW50cnkudnVlP2VkZTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlPzZjMmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVhZEZpbGUvTW9kZWwvQ29tcG9uZW50RW50cnkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlYWRGaWxlL01vZGVsL0NvbXBvbmVudEVudHJ5LnZ1ZT8zNjA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlYWRGaWxlL01vZGVsL0NvbXBvbmVudEVudHJ5LnZ1ZT8yZjA1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1JlYWRGaWxlL01vZGVsL0NvbXBvbmVudEVudHJ5LnZ1ZT9mYzMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWU/NGM5YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWU/ZWU1ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWU/NzM0NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZ0NBREE7QUFFQTtBQUNBLG9FQURBO0FBRUEsMkVBRkE7QUFHQTtBQUhBLEdBRkE7QUFPQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLG1CQUZBO0FBR0EsbUJBSEE7QUFJQSxrQkFKQTtBQUtBLGFBTEE7QUFNQSxtQkFOQTtBQU9BLG9CQVBBO0FBUUEsb0JBUkE7QUFTQTtBQVRBO0FBV0EsR0FuQkE7QUFvQkEsZ0NBcEJBO0FBcUJBO0FBQ0Esa0JBREEsMEJBQ0EsQ0FEQSxFQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVFBLFlBUkEsb0JBUUEsRUFSQSxFQVFBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQWRBO0FBZUEsU0FmQSxpQkFlQSxDQWZBLEVBZUEsQ0FmQSxFQWVBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0EsZ0JBQ0EscUNBQ0EsU0FEQSxHQUVBLEdBRkEsR0FHQSxTQUhBLEdBSUEsR0FKQSxHQUtBLFlBTkEsRUFOQSxD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QWdCLG9TQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZSO0FBQUE7QUFBQTtBQUFBO0FBQWloQixDQUFnQixtZkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHbEc7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLG9HQUFNO0FBQ1IsRUFBRSw2R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUN3SDtBQUNwRjtBQUNGO0FBQ0M7QUFDRTtBQUNHO0FBQ3hDLDhIQUFpQixhQUFhLDBEQUFNLENBQUMsc0RBQUksQ0FBQyx3REFBSyxDQUFDLDREQUFPLENBQUMsa0VBQVUsQ0FBQzs7O0FBR25FO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNqRGY7QUFBQTtBQUFBLHdDQUF5UCxDQUFnQixtU0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3UTtBQUFBO0FBQUE7QUFBQTtBQUEyZixDQUFnQixrZkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Im1vZGVsX21zdH5yZWFkZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPG1haW4+XG4gICAgPHYtdGFicyB2LW1vZGVsPVwidGFic1wiIGZpeGVkLXRhYnMgY29sb3I9XCJ0cmFuc3BhcmVudFwiIGNsYXNzPVwibWItNFwiPlxuICAgICAgPHYtdGFiXG4gICAgICAgIHYtZm9yPVwiKGNtcHQsIGluZGV4KSBpbiBtb2RlbERhdGFbMF0uY21wdFwiXG4gICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgIHNsaWRlci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgPnt7IGNtcHQuY21wdF9jb2RlLnNsaWNlKDAsIDExKSB9fTwvdi10YWI+XG4gICAgPC92LXRhYnM+XG4gICAgPHYtbGF5b3V0IHJvdyB3cmFwIGNsYXNzPVwicGwtNSBwci01XCI+XG4gICAgICA8di1mbGV4IHhzNiBjbGFzcz1cInBsLTUgcHItNSBwYi0zIHB0LTNcIj5cbiAgICAgICAgPHYtYnRuIGNsYXNzPVwiYWN0LWJ0blwiIGNvbG9yPVwiZ3JlZW4gbGlnaHRlbi0xXCIgb3V0bGluZSBAY2xpY2s9XCJhZGQoKVwiPumDqOadkOi/veWKoDwvdi1idG4+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHM2IGNsYXNzPVwicGwtNSBwci01IHBiLTMgcHQtM1wiPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImRlbGZsZ1wiPlxuICAgICAgICAgIDx2LWJ0biBjbGFzcz1cImFjdC1idG5cIiBjb2xvcj1cInByaW1hcnkgbGlnaHRlbi0xXCIgb3V0bGluZSBAY2xpY2s9XCJkZWxmbGc9IWRlbGZsZ1wiPuabtOaWsOODouODvOODiTwvdi1idG4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgPHYtYnRuIGNsYXNzPVwiYWN0LWJ0blwiIGNvbG9yPVwiZGVlcC1vcmFuZ2UgbGlnaHRlbi0xXCIgb3V0bGluZSBAY2xpY2s9XCJkZWxmbGc9IWRlbGZsZ1wiPuWJiumZpOODouODvOODiTwvdi1idG4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICAgIDx2LXRhYnMtaXRlbXMgdi1tb2RlbD1cInRhYnNcIj5cbiAgICAgIDx2LXRhYi1pdGVtIHYtZm9yPVwiKGNtcHQsIGluZGV4KSBpbiBtb2RlbERhdGFbMF0uY21wdFwiIDprZXk9XCInY21wdCcgKyBpbmRleFwiPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPuaJi+mFjTwvdGQ+XG4gICAgICAgICAgICA8dGQ+6YCjPC90ZD5cbiAgICAgICAgICAgIDx0ZD7lk4Hnm67jgrPjg7zjg4k8L3RkPlxuICAgICAgICAgICAgPHRkPuaJi+mFjeW9ouW8jzwvdGQ+XG4gICAgICAgICAgICA8dGQ+6YOo5p2Q5ZCN77yP5b2i5byPPC90ZD5cbiAgICAgICAgICAgIDx0ZD5Mb3Qo5pyA5bCP5pWwKe+8j1JUPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+5omL6YWN5YWI5oOF5aCxPC90ZD5cbiAgICAgICAgICAgIDx0ZD7nt6jpm4Y8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW1zLCBpbmRleCkgaW4gY21wdC5pdGVtX3VzZVwiPlxuICAgICAgICAgICAgPHRyIHYtaWY9XCJjaGVja291dChpdGVtcy5pdGVtcy5pdGVtX2NsYXNzKVwiIDprZXk9XCInaXRlbXNfJyArIGluZGV4XCI+XG4gICAgICAgICAgICAgIDx0ZCBAY2xpY2s9XCJjaGVjayhjbXB0LCBpdGVtcylcIj5cbiAgICAgICAgICAgICAgICA8di1jaGVja2JveCB2LW1vZGVsPVwiaXRlbXMuaXRlbV9vcmRlclwiIGNvbG9yPVwicHJpbWFyeVwiPjwvdi1jaGVja2JveD5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt7IGl0ZW1zLml0ZW1fcmVufX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge3sgaXRlbXMuaXRlbXMuaXRlbV9jb2RlLnJ0cmltKCkgfX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbmlcIj57eyBpdGVtcy5pdGVtcy5pdGVtX3Jldi5udW1Ub1JldigpIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3sgcHV0X29yZGVyX2NvZGUoaXRlbXMuaXRlbXMuaXRlbV9jb2RlLnJ0cmltKCksIGl0ZW1zLml0ZW1zLm9yZGVyX2NvZGUucnRyaW0oKSl9fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7eyBpdGVtcy5pdGVtcy5pdGVtX25hbWUgIT09IG51bGwgPyBpdGVtcy5pdGVtcy5pdGVtX25hbWUuc2xpY2UoMCwxNik6ICcnIH19XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAge3sgaXRlbXMuaXRlbXMuaXRlbV9tb2RlbCAhPT0gbnVsbCA/IGl0ZW1zLml0ZW1zLml0ZW1fbW9kZWwuc2xpY2UoMCwgMjApOiAnJyB9fVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge3sgaXRlbXMuaXRlbXMubG90X251bS5sb3RUb1RleHQoKSB9fVxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgdi1pZj1cIml0ZW1zLml0ZW1zLmxvdF9udW0gPj0gMFwiXG4gICAgICAgICAgICAgICAgPih7eyBpdGVtcy5pdGVtcy5taW5pbXVtX3NldC5jb21IeXBoZW4oKSB9fSk8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIHt7IE51bWJlcihpdGVtcy5pdGVtcy5yZWFkX3RpbWUpLmNvbUh5cGhlbigpIH19XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8di1sYXlvdXQgcm93IHdyYXAgdi1mb3I9XCIodmVuZG9yLCBpbmRleCkgaW4gaXRlbXMuaXRlbXMudmVuZG9yXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNiBjbGFzcz1cIm1pbmlcIj57eyB2ZW5kb3IudmVuZG5hbWUuY29tX25hbWUgfX08L3YtZmxleD5cbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggeHM2IGNsYXNzPVwibWluaVwiPnt7IE51bWJlcih2ZW5kb3IudmVuZG9yX2l0ZW1fcHJpY2UpLnRvTG9jYWxlU3RyaW5nKCkgfX08L3YtZmxleD5cbiAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhZGVsZmxnXCI+XG4gICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIiBzbWFsbCBkYXJrIEBjbGljaz1cImVkaXQoaXRlbXMuaXRlbXMpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWljb24gc21hbGwgbGVmdD5lZGl0PC92LWljb24+ZWRpdFxuICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICA8di1idG4gb3V0bGluZSBjb2xvcj1cImRlZXAtb3JhbmdlXCIgc21hbGwgZGFyayBAY2xpY2s9XCJkZWwoaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWljb24gc21hbGwgbGVmdD5kZWxldGU8L3YtaWNvbj5kZWxcbiAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvdi10YWItaXRlbT5cbiAgICA8L3YtdGFicy1pdGVtcz5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImhlbnNodVwiIHdpZHRoPVwiODAlXCIgQGlucHV0PVwiY2xvc2VcIiBvdmVyZmxvdz5cbiAgICAgIDxIZW5zaHUgdi1pZj1cImhlbnNodVwiIDppdGVtX2NvZGU9XCJpdGVtX2NvZGVcIiA6aXRlbV9yZXY9XCJpdGVtX3JldlwiIEBwYXNzPVwicGFzc1wiIDpkZWw9XCJmYWxzZVwiPjwvSGVuc2h1PlxuICAgIDwvdi1kaWFsb2c+XG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJhZGRpdGVtXCIgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCIgd2lkdGg9XCIzNiVcIj5cbiAgICAgIDxBZGRDbXB0SXRlbSA6ZGF0YT1cImRpYWxvZ19kYXRhXCIgQHJ0PVwicnRBZGRcIiB2LWlmPVwiYWRkaXRlbVwiPjwvQWRkQ21wdEl0ZW0+XG4gICAgPC92LWRpYWxvZz5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbGl0ZW1cIiB0cmFuc2l0aW9uPVwiZGlhbG9nLXRyYW5zaXRpb25cIiB3aWR0aD1cIjM2JVwiPlxuICAgICAgPERlbENtcHRJdGVtIDpkYXRhPVwiZGlhbG9nX2RhdGFcIiBAcnQ9XCJydERlbFwiIHYtaWY9XCJkZWxpdGVtXCI+PC9EZWxDbXB0SXRlbT5cbiAgICA8L3YtZGlhbG9nPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwidXBtb2RlIT09dHJ1ZVwiPlxuICAgICAgPHYtYm90dG9tLW5hdiBmaXhlZCB2YWx1ZT1cInZhbHVlXCI+XG4gICAgICAgIDx2LWJ0biBmbGF0IEBjbGljaz1cImJhY2tcIj5cbiAgICAgICAgICA8c3Bhbj7miLvjgos8L3NwYW4+XG4gICAgICAgICAgPHYtaWNvbj5mYXMgZmEtYmFja3dhcmQ8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtYnRuIGZsYXQgQGNsaWNrPVwibmV4dFwiPlxuICAgICAgICAgIDxzcGFuPuasoeOBuDwvc3Bhbj5cbiAgICAgICAgICA8di1pY29uPmZhcyBmYS1mb3J3YXJkPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtYm90dG9tLW5hdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEhlbnNodSBmcm9tIFwiLi8uLi8uLi9JdGVtRGF0YS9IZW5zaHVcIjtcbmltcG9ydCBBZGRDbXB0SXRlbSBmcm9tIFwiLi8uLi8uLi9jb20vQ29tRm9ybURpYWxvZ1wiO1xuaW1wb3J0IERlbENtcHRJdGVtIGZyb20gXCIuLy4uLy4uL2NvbS9Db21DaGVja0RpYWxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJtb2RlbERhdGFcIiwgXCJ1cG1vZGVcIl0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBIZW5zaHUsXG4gICAgQWRkQ21wdEl0ZW0sXG4gICAgRGVsQ21wdEl0ZW1cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYnM6IDAsXG4gICAgICBoZW5zaHU6IGZhbHNlLFxuICAgICAgaXRlbV9jb2RlOiBcIlwiLFxuICAgICAgaXRlbV9yZXY6IFwiXCIsXG4gICAgICBpOiBudWxsLFxuICAgICAgZGVsZmxnOiBmYWxzZSxcbiAgICAgIGFkZGl0ZW06IGZhbHNlLFxuICAgICAgZGVsaXRlbTogZmFsc2UsXG4gICAgICBkaWFsb2dfZGF0YTogbnVsbFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBwdXRfb3JkZXJfY29kZShpLCBvKSB7XG4gICAgICBpZiAobyA9PT0gXCJcIiB8fCBpID09PSBvKSB7XG4gICAgICAgIHJldHVybiBcIi1cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tvdXQoY2wpIHtcbiAgICAgIGlmIChjbCAhPT0gXCJDSElQ5ZOBXCIgJiYgY2wgIT09IFwi5Zuz6Z2iXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVjayhjLCBpKSB7XG4gICAgICBpZiAoaS5pdGVtX29yZGVyKSB7XG4gICAgICAgIGkuaXRlbV9vcmRlciA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpLml0ZW1fb3JkZXIgPSAwO1xuICAgICAgfVxuICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICBcIi9kYi9yX2NtcHRfaXRlbS9zd2ljaC9vcmRlci9mbGcvXCIgK1xuICAgICAgICAgIGMuY21wdF9pZCArXG4gICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgIGkuaXRlbV9pZCArXG4gICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgIGkuaXRlbV9vcmRlclxuICAgICAgKTtcbiAgICAgIC8vIC50aGVuKHJlcyA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIC8vIH0pO1xuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLmhlbnNodSA9IGZhbHNlO1xuICAgICAgdGhpcy5pdGVtX2NvZGUgPSBcIlwiO1xuICAgICAgdGhpcy5pdGVtX3JldiA9IFwiXCI7XG4gICAgfSxcbiAgICBlZGl0KGkpIHtcbiAgICAgIHRoaXMuaXRlbV9jb2RlID0gaS5pdGVtX2NvZGU7XG4gICAgICB0aGlzLml0ZW1fcmV2ID0gaS5pdGVtX3JldjtcbiAgICAgIHRoaXMuaSA9IGk7XG4gICAgICB0aGlzLmhlbnNodSA9IHRydWU7XG4gICAgfSxcbiAgICBwYXNzKGQpIHtcbiAgICAgIHN3aXRjaCAoZC50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJiYXNlX2RhdGFcIjpcbiAgICAgICAgICB0aGlzLmkuaXRlbV9uYW1lID0gZC5kYXRhLml0ZW1fbmFtZTtcbiAgICAgICAgICB0aGlzLmkuaXRlbV9tb2RlbCA9IGQuZGF0YS5pdGVtX21vZGVsO1xuICAgICAgICAgIHRoaXMuaS5vcmRlcl9jb2RlID0gZC5kYXRhLm9yZGVyX2NvZGU7XG4gICAgICAgICAgdGhpcy5pLnJlYWRfdGltZSA9IGQuZGF0YS5yZWFkX3RpbWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJvcmRlcl93YXlcIjpcbiAgICAgICAgICB0aGlzLmkubG90X251bSA9IE51bWJlcihkLmRhdGEubG90X251bSk7XG4gICAgICAgICAgdGhpcy5pLm1pbmltdW1fc2V0ID0gTnVtYmVyKGQuZGF0YS5taW5pbXVtX3NldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJvcmRlcl9wcmljZVwiOlxuICAgICAgICAgIHRoaXMuaS52ZW5kb3IgPSBkLmRhdGE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWwoaW5kZXgpIHtcbiAgICAgIGxldCBjbXB0ID0gdGhpcy5tb2RlbERhdGFbMF0uY21wdFt0aGlzLnRhYnNdO1xuICAgICAgbGV0IGl0ZW0gPSBjbXB0Lml0ZW1fdXNlW2luZGV4XS5pdGVtcztcbiAgICAgIHRoaXMuZGlhbG9nX2RhdGEgPSB7XG4gICAgICAgIHRpdGxlOiBcIuani+aIkOmDqOadkOWJiumZpFwiLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgIFwi6Kaq5b2i5byPIFwiICtcbiAgICAgICAgICBjbXB0LmNtcHRfY29kZSArXG4gICAgICAgICAgJzxzcGFuIHN0eWxlPVwicGFkZGluZzowIDAuNXJlbTsgZm9udC1zaXplOjAuNXJlbTtcIj4nICtcbiAgICAgICAgICBjbXB0LmNtcHRfcmV2Lm51bVRvUmV2KCkgK1xuICAgICAgICAgIFwiPC9zcGFuPiDjgojjgoog5LiL6KiY6YOo5p2Q44KS5YmK6Zmk44GX44G+44GZXCIsXG4gICAgICAgIGRhdGFfdjI6IFtcbiAgICAgICAgICBbXCLlk4Hnm67jgrPjg7zjg4lcIiwgaXRlbS5pdGVtX2NvZGVdLFxuICAgICAgICAgIFtcIu+8su+8pe+8tlwiLCBpdGVtLml0ZW1fcmV2XSxcbiAgICAgICAgICBbXCLlk4HlkI1cIiwgaXRlbS5pdGVtX25hbWVdLFxuICAgICAgICAgIFtcIuWTgeebruW9ouW8j1wiLCBpdGVtLml0ZW1fbW9kZWxdXG4gICAgICAgIF0sXG4gICAgICAgIHRhcjoge1xuICAgICAgICAgIGNtcHQ6IGNtcHQsXG4gICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmRlbGl0ZW0gPSB0cnVlO1xuICAgIH0sXG4gICAgcnREZWwoZCwgZmxnKSB7XG4gICAgICBsZXQgY21wdF9pZCA9IGQudGFyLmNtcHQuY21wdF9pZDtcbiAgICAgIGxldCBpdGVtX2lkID0gZC50YXIuY21wdC5pdGVtX3VzZVtkLnRhci5pbmRleF0uaXRlbV9pZDtcbiAgICAgIGF4aW9zLmdldChcIi9kYi9yX2NtcHRfaXRlbS9kZWxldGUvaXRlbS9cIiArIGNtcHRfaWQgKyBcIi9cIiArIGl0ZW1faWQpO1xuICAgICAgdGhpcy5tb2RlbERhdGFbMF0uY21wdFt0aGlzLnRhYnNdLml0ZW1fdXNlLnNwbGljZShkLnRhci5pbmRleCwgMSk7XG4gICAgICB0aGlzLmRlbGl0ZW0gPSBmYWxzZTtcbiAgICB9LFxuICAgIGFkZCgpIHtcbiAgICAgIGxldCBtID0gdGhpcy5tb2RlbERhdGFbMF07XG4gICAgICBsZXQgbW9kZWxfaWQgPSBtLm1vZGVsX2lkO1xuICAgICAgbGV0IGNtcHQgPSB0aGlzLm1vZGVsRGF0YVswXS5jbXB0W3RoaXMudGFic107XG4gICAgICB0aGlzLmRpYWxvZ19kYXRhID0ge1xuICAgICAgICB0aXRsZTogXCLmp4vmiJDpg6jmnZDnmbvpjLJcIixcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIuimquW9ouW8jyBcIiArXG4gICAgICAgICAgY21wdC5jbXB0X2NvZGUgK1xuICAgICAgICAgICc8c3BhbiBzdHlsZT1cInBhZGRpbmc6MCAwLjVyZW07IGZvbnQtc2l6ZTowLjVyZW07XCI+JyArXG4gICAgICAgICAgY21wdC5jbXB0X3Jldi5udW1Ub1JldigpICtcbiAgICAgICAgICBcIjwvc3Bhbj4g44Gr6YOo5p2Q44KS55m76Yyy44GX44G+44GZPGJyPuKAu+mAo+eVquOBr++8kOeVquWbuuWumlwiLFxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJpdGVtX2NvZGVcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIuWTgeebruOCs+ODvOODiVwiLFxuICAgICAgICAgICAgaWQ6IFwiaXRlbV9jb2RlXCIsXG4gICAgICAgICAgICBoaW50OiBcIlwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIml0ZW1fcmV2XCIsXG4gICAgICAgICAgICBsYWJlbDogXCLlk4Hnm67vvLLvvKXvvLZcIixcbiAgICAgICAgICAgIGlkOiBcIml0ZW1fcmV2XCIsXG4gICAgICAgICAgICBoaW50OiBcIuODj+OCpOODleODsygtKeOCkumZpOOBhOOBn+aVtOaVsOWApOOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgOS+iyAwMS0wMyDihpIgMTAzXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiaXRlbV91c2VcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIuWToeaVsFwiLFxuICAgICAgICAgICAgaWQ6IFwiaXRlbV91c2VcIixcbiAgICAgICAgICAgIGhpbnQ6IFwi5omL6YWN5pmC55m65rOo5Y2Y5L2N5pWwXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHRhcjoge1xuICAgICAgICAgIHJjaTogY21wdC5jbXB0X2lkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmFkZGl0ZW0gPSB0cnVlO1xuICAgIH0sXG4gICAgcnRBZGQoZCwgZmxnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGQuZGF0YVswXS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICBkLmRhdGFbMV0udmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgZC5kYXRhWzJdLnZhbHVlID09PSBcIlwiXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICBpdGVtX2NvZGU6IGQuZGF0YVswXS52YWx1ZSxcbiAgICAgICAgICBpdGVtX3JldjogZC5kYXRhWzFdLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGNtcHQ6IHtcbiAgICAgICAgICBjbXB0X2lkOiBkLnRhci5yY2ksXG4gICAgICAgICAgaXRlbV91c2U6IGQuZGF0YVsyXS52YWx1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXhpb3MucG9zdChcIi9kYi9yX2NtcHRfaXRlbS9hZGQvaXRlbS9cIiwgZGF0YSkudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYWxlcnQoXCLnmbvpjLLmuIjjgb/jg4fjg7zjgr/jgafjgZlcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tb2RlbERhdGFbMF0uY21wdFt0aGlzLnRhYnNdLml0ZW1fdXNlLnVuc2hpZnQocmVzLmRhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkaXRlbSA9ICF0aGlzLmFkZGl0ZW07XG4gICAgfSxcbiAgICBuZXh0KCkge1xuICAgICAgdGhpcy4kZW1pdChcInVwXCIpO1xuICAgIH0sXG4gICAgYmFjaygpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJkb3duXCIpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5oMyB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxudGFibGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgdGQge1xuICAgICYucHJpY2Uge1xuICAgICAgLy8gbWluLXdpZHRoOiAyNTBweDtcbiAgICB9XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjYWFhO1xuICAgIHBhZGRpbmc6IDAuOXJlbSAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5taW5pIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbn1cbi5hY3QtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDx2LWFsZXJ0IHR5cGU9XCJpbmZvXCIgOnZhbHVlPVwidHJ1ZVwiIG91dGxpbmUgY2xhc3M9XCJiYWNrXCI+XG4gICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDxoMT57eyBkYXRhLnRpdGxlIH19PC9oMT5cbiAgICAgICAgPHAgdi1odG1sPVwiZGF0YS5tZXNzYWdlXCIgY2xhc3M9XCJtZXNzYWdlXCI+PC9wPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTIgY2xhc3M9XCJkZWwtaW5mb1wiPlxuICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGRhdGEuZGF0YVwiPlxuICAgICAgICAgICAgPHYtZmxleCB4czEyIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgICAgICAgIDpsYWJlbD1cIml0ZW0ubGFiZWxcIlxuICAgICAgICAgICAgICAgIDppZD1cIml0ZW0uaWRcIlxuICAgICAgICAgICAgICAgIDpoaW50PVwiaXRlbS5oaW50XCJcbiAgICAgICAgICAgICAgICA6dHlwZT1cIml0ZW0udHlwZVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx2LWZsZXggeHM4IG9mZnNldC14czIgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgICAgICA8di1idG4gY29sb3I9XCJpbmZvXCIgY2xhc3M9XCJzdWJtaXQtYnRuXCIgb3V0bGluZSBAY2xpY2s9XCJzdWJtaXQoKVwiPuaxuuWumjwvdi1idG4+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICA8L3YtYWxlcnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiZGF0YVwiXSxcbiAgbWV0aG9kczoge1xuICAgIHN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJydFwiLCB0aGlzLmRhdGEsIHRydWUpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmRlbC1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN1Ym1pdC1idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoM1tkYXRhLXYtNGM4M2Q0YmRdIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG50YWJsZVtkYXRhLXYtNGM4M2Q0YmRdIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG50YWJsZSB0cltkYXRhLXYtNGM4M2Q0YmRdIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxudGFibGUgdGRbZGF0YS12LTRjODNkNGJkXSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNhYWE7XFxuICBwYWRkaW5nOiAwLjlyZW0gMC41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG50YWJsZSB0ZCAubWluaVtkYXRhLXYtNGM4M2Q0YmRdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFjdC1idG5bZGF0YS12LTRjODNkNGJkXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3JlbTtcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMVtkYXRhLXYtODJjMDhkYjhdIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uYmFja1tkYXRhLXYtODJjMDhkYjhdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5kZWwtaW5mb1tkYXRhLXYtODJjMDhkYjhdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnN1Ym1pdC1idG5bZGF0YS12LTgyYzA4ZGI4XSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1lc3NhZ2VbZGF0YS12LTgyYzA4ZGI4XSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XCIsIFwiXCJdKTtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21wb25lbnRFbnRyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YzgzZDRiZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tcG9uZW50RW50cnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGM4M2Q0YmQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21wb25lbnRFbnRyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YzgzZDRiZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MmMwOGRiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIm1haW5cIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXRhYnNcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTRcIixcbiAgICAgICAgICBhdHRyczogeyBcImZpeGVkLXRhYnNcIjogXCJcIiwgY29sb3I6IFwidHJhbnNwYXJlbnRcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYnMsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS50YWJzID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0ubW9kZWxEYXRhWzBdLmNtcHQsIGZ1bmN0aW9uKGNtcHQsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJ2LXRhYlwiLFxuICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBhdHRyczogeyBcInNsaWRlci1jb2xvclwiOiBcInByaW1hcnlcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhjbXB0LmNtcHRfY29kZS5zbGljZSgwLCAxMSkpKV1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGwtNSBwci01XCIsIGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBsLTUgcHItNSBwYi0zIHB0LTNcIiwgYXR0cnM6IHsgeHM2OiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdC1idG5cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImdyZWVuIGxpZ2h0ZW4tMVwiLCBvdXRsaW5lOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6YOo5p2Q6L+95YqgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBsLTUgcHItNSBwYi0zIHB0LTNcIiwgYXR0cnM6IHsgeHM2OiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmRlbGZsZ1xuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeSBsaWdodGVuLTFcIiwgb3V0bGluZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxmbGcgPSAhX3ZtLmRlbGZsZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5pu05paw44Oi44O844OJXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3QtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJkZWVwLW9yYW5nZSBsaWdodGVuLTFcIiwgb3V0bGluZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxmbGcgPSAhX3ZtLmRlbGZsZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5YmK6Zmk44Oi44O844OJXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LXRhYnMtaXRlbXNcIixcbiAgICAgICAge1xuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYnMsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS50YWJzID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0ubW9kZWxEYXRhWzBdLmNtcHQsIGZ1bmN0aW9uKGNtcHQsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwidi10YWItaXRlbVwiLCB7IGtleTogXCJjbXB0XCIgKyBpbmRleCB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmiYvphY1cIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLpgKNcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlk4Hnm67jgrPjg7zjg4lcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLmiYvphY3lvaLlvI9cIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLpg6jmnZDlkI3vvI/lvaLlvI9cIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJMb3Qo5pyA5bCP5pWwKe+8j1JUXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInByaWNlXCIgfSwgW192bS5fdihcIuaJi+mFjeWFiOaDheWgsVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIue3qOmbhlwiKV0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woY21wdC5pdGVtX3VzZSwgZnVuY3Rpb24oaXRlbXMsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfdm0uY2hlY2tvdXQoaXRlbXMuaXRlbXMuaXRlbV9jbGFzcylcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidHJcIiwgeyBrZXk6IFwiaXRlbXNfXCIgKyBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVjayhjbXB0LCBpdGVtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1zLml0ZW1fb3JkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbXMsIFwiaXRlbV9vcmRlclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW1zLml0ZW1fb3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW1zLml0ZW1fcmVuKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW1zLml0ZW1zLml0ZW1fY29kZS5ydHJpbSgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1pbmlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW1zLml0ZW1zLml0ZW1fcmV2Lm51bVRvUmV2KCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wdXRfb3JkZXJfY29kZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5pdGVtcy5pdGVtX2NvZGUucnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5pdGVtcy5vcmRlcl9jb2RlLnJ0cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5pdGVtcy5pdGVtX25hbWUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbXMuaXRlbXMuaXRlbV9uYW1lLnNsaWNlKDAsIDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLml0ZW1zLml0ZW1fbW9kZWwgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbXMuaXRlbXMuaXRlbV9tb2RlbC5zbGljZSgwLCAyMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW1zLml0ZW1zLmxvdF9udW0ubG90VG9UZXh0KCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5pdGVtcy5sb3RfbnVtID49IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5pdGVtcy5taW5pbXVtX3NldC5jb21IeXBoZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW1zLml0ZW1zLnJlYWRfdGltZSkuY29tSHlwaGVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbXMuaXRlbXMudmVuZG9yLCBmdW5jdGlvbih2ZW5kb3IsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtaW5pXCIsIGF0dHJzOiB7IHhzNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh2ZW5kb3IudmVuZG5hbWUuY29tX25hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtaW5pXCIsIGF0dHJzOiB7IHhzNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvci52ZW5kb3JfaXRlbV9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5kZWxmbGdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdChpdGVtcy5pdGVtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtYWxsOiBcIlwiLCBsZWZ0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJlZGl0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZWRpdFxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJkZWVwLW9yYW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNtYWxsOiBcIlwiLCBsZWZ0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJkZWxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJkZWxcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiODAlXCIsIG92ZXJmbG93OiBcIlwiIH0sXG4gICAgICAgICAgb246IHsgaW5wdXQ6IF92bS5jbG9zZSB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmhlbnNodSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmhlbnNodSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGVuc2h1XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uaGVuc2h1XG4gICAgICAgICAgICA/IF9jKFwiSGVuc2h1XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaXRlbV9jb2RlOiBfdm0uaXRlbV9jb2RlLFxuICAgICAgICAgICAgICAgICAgaXRlbV9yZXY6IF92bS5pdGVtX3JldixcbiAgICAgICAgICAgICAgICAgIGRlbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHBhc3M6IF92bS5wYXNzIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgdHJhbnNpdGlvbjogXCJkaWFsb2ctdHJhbnNpdGlvblwiLCB3aWR0aDogXCIzNiVcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmFkZGl0ZW0sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5hZGRpdGVtID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhZGRpdGVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uYWRkaXRlbVxuICAgICAgICAgICAgPyBfYyhcIkFkZENtcHRJdGVtXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uZGlhbG9nX2RhdGEgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBydDogX3ZtLnJ0QWRkIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgdHJhbnNpdGlvbjogXCJkaWFsb2ctdHJhbnNpdGlvblwiLCB3aWR0aDogXCIzNiVcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbGl0ZW0sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxpdGVtID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZWxpdGVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uZGVsaXRlbVxuICAgICAgICAgICAgPyBfYyhcIkRlbENtcHRJdGVtXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uZGlhbG9nX2RhdGEgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBydDogX3ZtLnJ0RGVsIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udXBtb2RlICE9PSB0cnVlXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1ib3R0b20tbmF2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgZml4ZWQ6IFwiXCIsIHZhbHVlOiBcInZhbHVlXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSwgb246IHsgY2xpY2s6IF92bS5iYWNrIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiLvjgotcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhcyBmYS1iYWNrd2FyZFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLm5leHQgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuasoeOBuFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFzIGZhLWZvcndhcmRcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFsZXJ0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJiYWNrXCIsIGF0dHJzOiB7IHR5cGU6IFwiaW5mb1wiLCB2YWx1ZTogdHJ1ZSwgb3V0bGluZTogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEudGl0bGUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRhdGEubWVzc2FnZSkgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVsLWluZm9cIiwgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YS5kYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IGl0ZW0uaGludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czg6IFwiXCIsIFwib2Zmc2V0LXhzMlwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJtaXQtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImluZm9cIiwgb3V0bGluZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5rG65a6aXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db21wb25lbnRFbnRyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGM4M2Q0YmQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29tcG9uZW50RW50cnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db21wb25lbnRFbnRyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29tcG9uZW50RW50cnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGM4M2Q0YmQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0YzgzZDRiZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZCb3R0b21OYXYgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDaGVja2JveCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFiIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFiSXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRhYnMgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUYWJzSXRlbXMgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCb3R0b21OYXYsVkJ0bixWQ2hlY2tib3gsVkRpYWxvZyxWRmxleCxWSWNvbixWTGF5b3V0LFZUYWIsVlRhYkl0ZW0sVlRhYnMsVlRhYnNJdGVtc30pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGM4M2Q0YmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGM4M2Q0YmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbXBvbmVudEVudHJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YzgzZDRiZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YzgzZDRiZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvUmVhZEZpbGUvTW9kZWwvQ29tcG9uZW50RW50cnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21wb25lbnRFbnRyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tcG9uZW50RW50cnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21wb25lbnRFbnRyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YzgzZDRiZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tcG9uZW50RW50cnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGM4M2Q0YmQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbXBvbmVudEVudHJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YzgzZDRiZCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODJjMDhkYjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODJjMDhkYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4MmMwOGRiOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBbGVydCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBbGVydCxWQnRuLFZGbGV4LFZMYXlvdXQsVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODJjMDhkYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODJjMDhkYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgyYzA4ZGI4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgyYzA4ZGI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MmMwOGRiOCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=
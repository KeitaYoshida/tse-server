(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item_list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _com_ComFormDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./com/ComFormDialog */ "./resources/js/components/com/ComFormDialog.vue");
/* harmony import */ var _mixins_DataTableCommonSetting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/DataTableCommonSetting.js */ "./resources/js/mixins/DataTableCommonSetting.js");
/* harmony import */ var _item_item_qr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item/item_qr */ "./resources/js/components/item/item_qr.vue");
/* harmony import */ var _ItemList_QrButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemList/QrButton */ "./resources/js/components/ItemList/QrButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_DataTableCommonSetting_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    item_qr: _item_item_qr__WEBPACK_IMPORTED_MODULE_2__["default"],
    QrButton: _ItemList_QrButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddItem: _com_ComFormDialog__WEBPACK_IMPORTED_MODULE_0__["default"]
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
      a4: false,
      additem: false,
      dialog_data: {
        title: "部材登録",
        message: "",
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
          value: "0",
          type: "number"
        }]
      }
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
    },
    rtAdd: function rtAdd(d) {
      var iid = d.data[0].value;
      var irev = d.data[1].value;
      this.search = iid;
      this.additem = !this.additem;
      this.items.push({
        item_code: iid,
        item_rev: irev
      });
      axios.get("/db/items/add/item/" + iid + "/" + irev);
    },
    searchChange: function searchChange() {
      this.dialog_data.data[0].value = this.search;
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
    [
      !_vm.nodata
        ? _c(
            "v-container",
            [
              _c("h1", [_vm._v("部材")]),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "search",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
                },
                on: {
                  change: function($event) {
                    return _vm.searchChange()
                  }
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
                    ? _c("AddItem", {
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
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-bottom-nav",
        { attrs: { value: "value", "active.sync": "value", fixed: "" } },
        [
          _c(
            "v-btn",
            {
              on: {
                click: function($event) {
                  _vm.additem = !_vm.additem
                }
              }
            },
            [
              _c("span", [_vm._v("New Item")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("fas fa-plus-square")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              on: {
                click: function($event) {
                  _vm.a4 = !_vm.a4
                }
              }
            },
            [
              _c("span", [_vm._v("QR FILE")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("far fa-sticky-note")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              on: {
                click: function($event) {
                  _vm.sheet = !_vm.sheet
                }
              }
            },
            [
              _c("span", [_vm._v("INFO")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("fas fa-question-circle")])
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




















_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBottomNav: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBottomNav"],VBottomSheet: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBottomSheet"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VDataTable: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VDataTable"],VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VDialog"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VLayout"],VList: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VList"],VSpacer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VSpacer"],VSubheader: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VSubheader"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VTextField"],VToolbar: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VToolbar"],VToolbarItems: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VToolbarItems"],VToolbarTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VToolbarTitle"]})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01ha2VRUi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWU/ZDE1ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlPzI4NzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlPzgwYjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZT82NGE4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZT8yOGI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0L1FyQnV0dG9uLnZ1ZT80NDAyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01ha2VRUi52dWU/MGUyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWU/NmMyZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlPzU2NWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZT9jMzVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZT9lZTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0L1FyQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWU/MDA4MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWU/MmY0NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01ha2VRUi52dWU/N2M0NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlP2FmNmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT80YzlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT9lZTVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT83MzQ0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZT8yZjNmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWU/ZmMyNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlPzBjZmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9EYXRhVGFibGVDb21tb25TZXR0aW5nLmpzIl0sIm5hbWVzIjpbIl9kYXRhX3RhYmxlX2NvbW1vbl9zZXR0aW5nIiwiY29tIiwicGFnZV90aXRsZSIsInBhZ2VfY2xhc3MiLCJpbmZvIiwidmlld19yb3dfc2V0dGluZyIsInRleHQiLCJ2YWx1ZSIsIm5vX2RhdGFfdGV4dCIsIml0ZW1fbGlzdCIsImhlYWRlcnMiLCJhbGlnbiIsImRhdGEiLCJkdF9taXhfY29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxxRkFEQTtBQUVBO0FBQ0Esa0VBREE7QUFFQSx3RUFGQTtBQUdBO0FBSEEsR0FGQTtBQU9BO0FBQ0E7QUFDQSxlQURBO0FBRUEsMkJBRkE7QUFHQSxrQkFIQTtBQUlBLGtCQUpBO0FBS0EsbUJBTEE7QUFNQSxtQkFOQTtBQU9BLG1CQVBBO0FBUUEsZ0JBUkE7QUFTQSxpQkFUQTtBQVVBLGtCQVZBO0FBV0EsZUFYQTtBQVlBLG9CQVpBO0FBYUE7QUFDQSxxQkFEQTtBQUVBLG1CQUZBO0FBR0EsZUFDQTtBQUNBLDJCQURBO0FBRUEsd0JBRkE7QUFHQSx5QkFIQTtBQUlBLGtCQUpBO0FBS0EsbUJBTEE7QUFNQTtBQU5BLFNBREEsRUFTQTtBQUNBLDBCQURBO0FBRUEsd0JBRkE7QUFHQSx3QkFIQTtBQUlBLHVEQUpBO0FBS0Esb0JBTEE7QUFNQTtBQU5BLFNBVEE7QUFIQTtBQWJBO0FBb0NBLEdBNUNBO0FBNkNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsaUNB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RUQsVUFBSSxFQUFFLEtBRFI7QUFFRUssV0FBSyxFQUFFLFFBRlQ7QUFHRUosV0FBSyxFQUFFO0FBSFQsS0FwQlM7QUFGQTtBQWpCc0IsQ0FBbkM7QUErQ2U7QUFDYkssTUFEYSxrQkFDTjtBQUNMLFdBQU87QUFDTEMsZ0JBQVUsRUFBRWI7QUFEUCxLQUFQO0FBR0Q7QUFMWSxDQUFmLEUiLCJmaWxlIjoiaXRlbV9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1hcHA+XG4gICAgPHYtY29udGFpbmVyIHYtaWY9XCIhbm9kYXRhXCI+XG4gICAgICA8aDE+6YOo5p2QPC9oMT5cbiAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXG4gICAgICAgIGFwcGVuZC1pY29uPVwic2VhcmNoXCJcbiAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICBAY2hhbmdlPVwic2VhcmNoQ2hhbmdlKClcIlxuICAgICAgICBzaW5nbGUtbGluZVxuICAgICAgICBoaWRlLWRldGFpbHNcbiAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgIDxiciAvPlxuICAgICAgPHYtZGF0YS10YWJsZVxuICAgICAgICA6aGVhZGVycz1cInNldHRpbmcuaGVhZGVyc1wiXG4gICAgICAgIDppdGVtcz1cIml0ZW1zXCJcbiAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXG4gICAgICAgIDpyb3dzLXBlci1wYWdlLWl0ZW1zPVwic2V0dGluZy52aWV3X3Jvd19zZXR0aW5nXCJcbiAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgOmNsYXNzPVwic2V0dGluZy5wYWdlX2NsYXNzXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtcz1cInByb3BzXCI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLml0ZW1fY29kZSB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IGdldF9fcmV2KHByb3BzLml0ZW0uaXRlbV9yZXYpIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+e3sgcHJvcHMuaXRlbS5pdGVtX25hbWUgfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLml0ZW1fbW9kZWwgfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLmxhc3RfbnVtID09PSAtMSA/ICfmnKrpm4boqIgnOiBwcm9wcy5pdGVtLmxhc3RfbnVtIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsYXlvdXQgcHgtMFwiPlxuICAgICAgICAgICAgICA8UXJCdXR0b24gQGFjdD1cImFkZFFyY29kZVwiIDpyb3dkYXRhPVwicHJvcHNcIj48L1FyQnV0dG9uPlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy9pdGVtLycgKyBwcm9wcy5pdGVtLml0ZW1fY29kZSArICcvJyArIHByb3BzLml0ZW0uaXRlbV9yZXZcIj5cbiAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwib3JhbmdlIGRhcmtlbi0xXCIgY2xhc3M9XCJpY29uLWVkaXRcIj5mYXMgZmEtZWRpdDwvdi1pY29uPlxuICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cInNoZWV0XCI+XG4gICAgICAgIDx2LWxpc3Q+XG4gICAgICAgICAgPHYtc3ViaGVhZGVyPmRldGFpbDwvdi1zdWJoZWFkZXI+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC14cz5cbiAgICAgICAgICAgIOaJi+mFjeW3peS6i+OCkuWFg+OBq+WPl+WFpeWHpueQhuOCkuihjOOBiOOBvuOBmeOAguWvvuixoeOBruaJi+mFjeW3peS6i+OCkumBuOaKnuOBmeOCi+OBqOaJi+mFjeS4gOimp+ODquOCueODiOOBjOihqOekuuOBleOCjOOBvuOBmeOAglxuICAgICAgICAgICAg6KGo56S644GV44KM44Gf44Oq44K544OI44KI44KK5Y+X44GR5YWl44KM44KL6YOo5p2Q44KS44OB44Kn44OD44Kv44GX44CB55S76Z2i5LiL6YOo44Gu5Y+X5YWl44Oc44K/44Oz44KS5oq85LiL44GX44Gm44GP44Gg44GV44GE44CC5Y+X5YWl5pWw6YeP44Gu5aSJ5pu044GM44GC44KL5aC05ZCI44Gv44CB44Oq44K544OI5Y+z6YOo44Gu57eo6ZuG44Kz44Oe44Oz44OJ44KS5oq844GX44Gm44GP44Gg44GV44GE44CCXG4gICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC92LWxpc3Q+XG4gICAgICA8L3YtYm90dG9tLXNoZWV0PlxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJhZGRpdGVtXCIgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCIgd2lkdGg9XCIzNiVcIj5cbiAgICAgICAgPEFkZEl0ZW0gOmRhdGE9XCJkaWFsb2dfZGF0YVwiIEBydD1cInJ0QWRkXCIgdi1pZj1cImFkZGl0ZW1cIj48L0FkZEl0ZW0+XG4gICAgICA8L3YtZGlhbG9nPlxuICAgICAgPHYtZGlhbG9nXG4gICAgICAgIHYtbW9kZWw9XCJhNFwiXG4gICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgcGVyc2lzdGVudFxuICAgICAgICBmdWxsc2NyZWVuXG4gICAgICAgIGhpZGUtb3ZlcmxheVxuICAgICAgICB0cmFuc2l0aW9uPVwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICA8di10b29sYmFyIGRhcmsgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8di1idG4gaWNvbiBkYXJrIEBjbGljaz1cImE0ID0gIWE0XCI+XG4gICAgICAgICAgICAgIDx2LWljb24+Y2xvc2U8L3YtaWNvbj5cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPlNldHRpbmdzPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgIDx2LXRvb2xiYXItaXRlbXM+XG4gICAgICAgICAgICAgIDx2LWJ0biBkYXJrIGZsYXQgQGNsaWNrPVwicHJpbnRfX3BkZignbWFrZXBkZicpXCI+77yw77yy77yp77yu77y0PC92LWJ0bj5cbiAgICAgICAgICAgIDwvdi10b29sYmFyLWl0ZW1zPlxuICAgICAgICAgIDwvdi10b29sYmFyPlxuICAgICAgICAgIDx2LWNhcmQtdGV4dCBjbGFzcz1cImE0LWJhY2tcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWtlcGRmXCIgY2xhc3M9XCJhNC1hcmVhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhNFwiIHYtZm9yPVwiKHJvdywgcm93bnVtKSBpbiBjb25maWdzXCIgOmtleT1cInJvd251bVwiPlxuICAgICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcCBhbGlnbi1zdGFydCBjbGFzcz1cInIydjVcIj5cbiAgICAgICAgICAgICAgICAgIDx2LWZsZXggdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHJvd1wiIHYtYmluZDprZXk9XCJpbmRleFwiIHhzNiBjbGFzcz1cInFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW1fcXIgOnFybGlzdD1cIml0ZW1cIj48L2l0ZW1fcXI+XG4gICAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgPC92LWRpYWxvZz5cbiAgICA8L3YtY29udGFpbmVyPlxuICAgIDx2LWJvdHRvbS1uYXYgdmFsdWU9XCJ2YWx1ZVwiIGFjdGl2ZS5zeW5jPVwidmFsdWVcIiBmaXhlZD5cbiAgICAgIDx2LWJ0biBAY2xpY2s9XCJhZGRpdGVtPSFhZGRpdGVtXCI+XG4gICAgICAgIDxzcGFuPk5ldyBJdGVtPC9zcGFuPlxuICAgICAgICA8di1pY29uPmZhcyBmYS1wbHVzLXNxdWFyZTwvdi1pY29uPlxuICAgICAgPC92LWJ0bj5cbiAgICAgIDx2LWJ0biBAY2xpY2s9XCJhNCA9ICFhNFwiPlxuICAgICAgICA8c3Bhbj5RUiBGSUxFPC9zcGFuPlxuICAgICAgICA8di1pY29uPmZhciBmYS1zdGlja3ktbm90ZTwvdi1pY29uPlxuICAgICAgPC92LWJ0bj5cbiAgICAgIDx2LWJ0biBAY2xpY2s9XCJzaGVldCA9ICFzaGVldFwiPlxuICAgICAgICA8c3Bhbj5JTkZPPC9zcGFuPlxuICAgICAgICA8di1pY29uPmZhcyBmYS1xdWVzdGlvbi1jaXJjbGU8L3YtaWNvbj5cbiAgICAgIDwvdi1idG4+XG4gICAgPC92LWJvdHRvbS1uYXY+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFkZEl0ZW0gZnJvbSBcIi4vY29tL0NvbUZvcm1EaWFsb2dcIjtcbmltcG9ydCBtaXhfY29tIGZyb20gXCIuLi9taXhpbnMvRGF0YVRhYmxlQ29tbW9uU2V0dGluZy5qc1wiO1xuaW1wb3J0IGl0ZW1fcXIgZnJvbSBcIi4vaXRlbS9pdGVtX3FyXCI7XG5pbXBvcnQgUXJCdXR0b24gZnJvbSBcIi4vSXRlbUxpc3QvUXJCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFttaXhfY29tXSxcbiAgY29tcG9uZW50czoge1xuICAgIGl0ZW1fcXIsXG4gICAgUXJCdXR0b24sXG4gICAgQWRkSXRlbVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgICAgY29uc3RfaXRlbV9saXN0OiBudWxsLFxuICAgICAgc2VhcmNoOiBudWxsLFxuICAgICAgc2hlZXQ6IGZhbHNlLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHNldHRpbmc6IG51bGwsXG4gICAgICBub2RhdGE6IGZhbHNlLFxuICAgICAgY29uZmlnOiBbXSxcbiAgICAgIGNvbmZpZ3M6IFtdLFxuICAgICAgb3V0cHV0OiBudWxsLFxuICAgICAgYTQ6IGZhbHNlLFxuICAgICAgYWRkaXRlbTogZmFsc2UsXG4gICAgICBkaWFsb2dfZGF0YToge1xuICAgICAgICB0aXRsZTogXCLpg6jmnZDnmbvpjLJcIixcbiAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiaXRlbV9jb2RlXCIsXG4gICAgICAgICAgICBsYWJlbDogXCLlk4Hnm67jgrPjg7zjg4lcIixcbiAgICAgICAgICAgIGlkOiBcIml0ZW1fY29kZVwiLFxuICAgICAgICAgICAgaGludDogXCJcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgdHlwZTogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJpdGVtX3JldlwiLFxuICAgICAgICAgICAgbGFiZWw6IFwi5ZOB55uu77yy77yl77y2XCIsXG4gICAgICAgICAgICBpZDogXCJpdGVtX3JldlwiLFxuICAgICAgICAgICAgaGludDogXCLjg4/jgqTjg5Xjg7MoLSnjgpLpmaTjgYTjgZ/mlbTmlbDlgKTjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIDkvosgMDEtMDMg4oaSIDEwM1wiLFxuICAgICAgICAgICAgdmFsdWU6IFwiMFwiLFxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmR0X21peF9jb21bdGhpcy4kcm91dGUucGFyYW1zLnBhZ2VfaWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubm9kYXRhID0gIXRoaXMubm9kYXRhO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmcgPSBPYmplY3QuYXNzaWduKFxuICAgICAgdGhpcy5kdF9taXhfY29tW3RoaXMuJHJvdXRlLnBhcmFtcy5wYWdlX2lkXSxcbiAgICAgIHRoaXMuZHRfbWl4X2NvbS5jb21cbiAgICApO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2l0ZW1zL2l0ZW1saXN0XCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDogXCIgKyBlcnJvcik7XG4gICAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZFFyY29kZShwKSB7XG4gICAgICBsZXQgZCA9IHAuaXRlbTtcbiAgICAgIHRoaXMuY29uZmlnLnB1c2goe1xuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICBcImh0dHA6Ly8xOTIuMTY4LjEzLjEwMzo4MDAwL2l0ZW0vXCIgKyBkLml0ZW1fY29kZSArIFwiL1wiICsgZC5pdGVtX3JldixcbiAgICAgICAgaWQ6IGQuaXRlbV9jb2RlLFxuICAgICAgICBuYW1lOiBkLml0ZW1fbmFtZSxcbiAgICAgICAgbW9kZWw6IGQuaXRlbV9tb2RlbFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbmZpZ3MgPSB0aGlzLmNvbmZpZy5kaXZpZGUoMTApO1xuICAgIH0sXG4gICAgcnRBZGQoZCkge1xuICAgICAgbGV0IGlpZCA9IGQuZGF0YVswXS52YWx1ZTtcbiAgICAgIGxldCBpcmV2ID0gZC5kYXRhWzFdLnZhbHVlO1xuICAgICAgdGhpcy5zZWFyY2ggPSBpaWQ7XG4gICAgICB0aGlzLmFkZGl0ZW0gPSAhdGhpcy5hZGRpdGVtO1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgaXRlbV9jb2RlOiBpaWQsXG4gICAgICAgIGl0ZW1fcmV2OiBpcmV2XG4gICAgICB9KTtcbiAgICAgIGF4aW9zLmdldChcIi9kYi9pdGVtcy9hZGQvaXRlbS9cIiArIGlpZCArIFwiL1wiICsgaXJldik7XG4gICAgfSxcbiAgICBzZWFyY2hDaGFuZ2UoKSB7XG4gICAgICB0aGlzLmRpYWxvZ19kYXRhLmRhdGFbMF0udmFsdWUgPSB0aGlzLnNlYXJjaDtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZSA+XG4gIDx2LWJ0biBpY29uIGZsYXQgdi1pZj1cIm51bT09PTBcIiBAY2xpY2s9XCJwQ250KClcIj5cbiAgICA8di1pY29uIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGNsYXNzPVwiaWNvbi1xclwiPmZhcyBmYS1xcmNvZGU8L3YtaWNvbj5cbiAgPC92LWJ0bj5cbiAgPHYtYnRuIGljb24gZmxhdCB2LWVsc2UgQGNsaWNrPVwicENudCgpXCI+XG4gICAgPHYtYmFkZ2UgcmlnaHQgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICA8c3BhbiBzbG90PVwiYmFkZ2VcIj57eyBudW0gfX08L3NwYW4+XG4gICAgICA8di1pY29uIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIGNsYXNzPVwiaWNvbi1xclwiPmZhcyBmYS1xcmNvZGU8L3YtaWNvbj5cbiAgICA8L3YtYmFkZ2U+XG4gIDwvdi1idG4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wicm93ZGF0YVwiXSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG51bTogMFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBwQ250KCkge1xuICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSArIDE7XG4gICAgICB0aGlzLiRlbWl0KFwiYWN0XCIsIHRoaXMucm93ZGF0YSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8cXJpb3VzbHkgOnZhbHVlPVwiY29uZmlnXCIgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBWdWVRcmlvdXNseSBmcm9tIFwidnVlLXFyaW91c2x5XCI7XG5WdWUudXNlKFZ1ZVFyaW91c2x5KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7fSxcbiAgcHJvcHM6IFtcImNvbmZpZ1wiXSxcbiAgbmFtZTogXCJxckdlbmFyYXRlXCJcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHYtYWxlcnQgdHlwZT1cImluZm9cIiA6dmFsdWU9XCJ0cnVlXCIgb3V0bGluZSBjbGFzcz1cImJhY2tcIj5cbiAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPGgxPnt7IGRhdGEudGl0bGUgfX08L2gxPlxuICAgICAgICA8cCB2LWh0bWw9XCJkYXRhLm1lc3NhZ2VcIiBjbGFzcz1cIm1lc3NhZ2VcIj48L3A+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMiBjbGFzcz1cImRlbC1pbmZvXCI+XG4gICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZGF0YS5kYXRhXCI+XG4gICAgICAgICAgICA8di1mbGV4IHhzMTIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICA6bmFtZT1cIml0ZW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiaXRlbS5sYWJlbFwiXG4gICAgICAgICAgICAgICAgOmlkPVwiaXRlbS5pZFwiXG4gICAgICAgICAgICAgICAgOmhpbnQ9XCJpdGVtLmhpbnRcIlxuICAgICAgICAgICAgICAgIDp0eXBlPVwiaXRlbS50eXBlXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHYtZmxleCB4czggb2Zmc2V0LXhzMiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImluZm9cIiBjbGFzcz1cInN1Ym1pdC1idG5cIiBvdXRsaW5lIEBjbGljaz1cInN1Ym1pdCgpXCI+5rG65a6aPC92LWJ0bj5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPC92LWxheW91dD5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdi1sYXlvdXQ+XG4gIDwvdi1hbGVydD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJkYXRhXCJdLFxuICBtZXRob2RzOiB7XG4gICAgc3VibWl0KCkge1xuICAgICAgdGhpcy4kZW1pdChcInJ0XCIsIHRoaXMuZGF0YSwgdHJ1ZSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZGVsLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3VibWl0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgZmxhdCBjbGFzcz1cInFyLWNhcmRcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJxci1pbmZvXCI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiIGNsYXNzPVwidGl0bGVcIj7pg6jmnZDorZjliKXmqJk8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBjbGFzcz1cInFybGlzdC1saXN0XCI+XG4gICAgICAgIDx0ZD7lk4Hnlao8L3RkPlxuICAgICAgICA8dGQ+e3sgcXJsaXN0LmlkIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJxcmxpc3QtbGlzdFwiPlxuICAgICAgICA8dGQ+5ZOB5ZCNPC90ZD5cbiAgICAgICAgPHRkPnt7IHFybGlzdC5uYW1lIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJxcmxpc3QtbGlzdFwiPlxuICAgICAgICA8dGQ+5b2i5byPPC90ZD5cbiAgICAgICAgPHRkPnt7IHFybGlzdC5tb2RlbCB9fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyIGNsYXNzPVwicXJsaXN0LWxpc3RcIj5cbiAgICAgICAgPHRkPueuoeeQhjwvdGQ+XG4gICAgICAgIDx0ZD7os4fmnZAgQeajmiAzNi1DPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJxci1hZGRcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwicXJsaXN0LXFyXCI+XG4gICAgICAgICAgPG1ha2UtcXIgOmNvbmZpZz1cInFybGlzdC52YWx1ZVwiPjwvbWFrZS1xcj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiY2hrXCI+XG4gICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxuICAgICAgICAgICAgPHYtZmxleCB4czIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIEFycmF5KDEyKS5rZXlzKClcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0gKyAxIH19XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7mnIg8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Jm5ic3A7PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBtYWtlUXIgZnJvbSBcIi4uL01ha2VRUi52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wicXJsaXN0XCIsIFwiY29uZmlnXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgbWFrZVFyXG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5xci1jYXJkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICB0YWJsZS5xci1pbmZvIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBoZWlnaHQ6IDUzLjJtbTtcbiAgICBtYXJnaW4tbGVmdDogNW1tO1xuICAgIG1hcmdpbi1yaWdodDogNW1tO1xuICAgIG1hcmdpbi10b3A6IDNtbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzbW07XG4gICAgLnFybGlzdC1saXN0IHtcbiAgICAgIGhlaWdodDogNW1tO1xuICAgIH1cbiAgICAucXItYWRkIHtcbiAgICAgIGhlaWdodDogMjRtbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICB0ZCB7XG4gICAgICAmLnFybGlzdC1xciB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgJi50aXRsZSB7XG4gICAgICAgIGhlaWdodDogN21tO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgICAgJi5xcmxpc3QtcXIge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgICAmLmNoayB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAuZmxleCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEybW07XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2bW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImgxW2RhdGEtdi04MmMwOGRiOF0ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5iYWNrW2RhdGEtdi04MmMwOGRiOF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmRlbC1pbmZvW2RhdGEtdi04MmMwOGRiOF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3VibWl0LWJ0bltkYXRhLXYtODJjMDhkYjhdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtODJjMDhkYjhdIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5xci1jYXJkW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5xci1jYXJkIGxpW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mb1tkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgaGVpZ2h0OiA1My4ybW07XFxuICBtYXJnaW4tbGVmdDogNW1tO1xcbiAgbWFyZ2luLXJpZ2h0OiA1bW07XFxuICBtYXJnaW4tdG9wOiAzbW07XFxuICBtYXJnaW4tYm90dG9tOiAzbW07XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gLnFybGlzdC1saXN0W2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgaGVpZ2h0OiA1bW07XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gLnFyLWFkZFtkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGhlaWdodDogMjRtbSAhaW1wb3J0YW50O1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyB0ZC5xcmxpc3QtcXJbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDA7XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGQudGl0bGVbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBoZWlnaHQ6IDdtbTtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGRbZGF0YS12LTVhNTRlMWM4XTpudGgtY2hpbGQob2RkKSB7XFxuICB3aWR0aDogMzUlO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkW2RhdGEtdi01YTU0ZTFjOF06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGQucXJsaXN0LXFyW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoa1tkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoayAubGF5b3V0W2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoayAubGF5b3V0IC5mbGV4W2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgaGVpZ2h0OiAxMm1tO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoayAubGF5b3V0IC5mbGV4IHVsW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyB0ZC5jaGsgLmxheW91dCAuZmxleCB1bCBsaVtkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDZtbTtcXG59XFxuLnFyLWNhcmQgY2FudmFzW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MmMwOGRiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MmMwOGRiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODJjMDhkYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE1NGUxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIFtcbiAgICAgICFfdm0ubm9kYXRhXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIumDqOadkFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgXCJzaW5nbGUtbGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgXCJoaWRlLWRldGFpbHNcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoQ2hhbmdlKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZXR0aW5nLnBhZ2VfY2xhc3MsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5zZXR0aW5nLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLWl0ZW1zXCI6IF92bS5zZXR0aW5nLnZpZXdfcm93X3NldHRpbmcsXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLml0ZW1fY29kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRfX3Jldihwcm9wcy5pdGVtLml0ZW1fcmV2KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaXRlbV9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pdGVtX21vZGVsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0ubGFzdF9udW0gPT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi5pyq6ZuG6KiIXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvcHMuaXRlbS5sYXN0X251bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGF5b3V0IHB4LTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJRckJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93ZGF0YTogcHJvcHMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBhY3Q6IF92bS5hZGRRcmNvZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2l0ZW0vXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW0uaXRlbV9jb2RlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5pdGVtX3JldlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJvcmFuZ2UgZGFya2VuLTFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJmYXMgZmEtZWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgMzYwNDk4MDQxOFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1ib3R0b20tc2hlZXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNoZWV0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNoZWV0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hlZXRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3ViaGVhZGVyXCIsIFtfdm0uX3YoXCJkZXRhaWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY29udGFpbmVyXCIsIHsgYXR0cnM6IHsgXCJncmlkLWxpc3QteHNcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAg5omL6YWN5bel5LqL44KS5YWD44Gr5Y+X5YWl5Yem55CG44KS6KGM44GI44G+44GZ44CC5a++6LGh44Gu5omL6YWN5bel5LqL44KS6YG45oqe44GZ44KL44Go5omL6YWN5LiA6Kan44Oq44K544OI44GM6KGo56S644GV44KM44G+44GZ44CCXFxuICAgICAgICAgIOihqOekuuOBleOCjOOBn+ODquOCueODiOOCiOOCiuWPl+OBkeWFpeOCjOOCi+mDqOadkOOCkuODgeOCp+ODg+OCr+OBl+OAgeeUu+mdouS4i+mDqOOBruWPl+WFpeODnOOCv+ODs+OCkuaKvOS4i+OBl+OBpuOBj+OBoOOBleOBhOOAguWPl+WFpeaVsOmHj+OBruWkieabtOOBjOOBguOCi+WgtOWQiOOBr+OAgeODquOCueODiOWPs+mDqOOBrue3qOmbhuOCs+ODnuODs+ODieOCkuaKvOOBl+OBpuOBj+OBoOOBleOBhOOAglxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0cmFuc2l0aW9uOiBcImRpYWxvZy10cmFuc2l0aW9uXCIsIHdpZHRoOiBcIjM2JVwiIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFkZGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uYWRkaXRlbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFkZGl0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmFkZGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkFkZEl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLmRpYWxvZ19kYXRhIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBydDogX3ZtLnJ0QWRkIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImhpZGUtb3ZlcmxheVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImRpYWxvZy1ib3R0b20tdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hNCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5hNCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImE0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBkYXJrOiBcIlwiLCBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hNCA9ICFfdm0uYTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJjbG9zZVwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJTZXR0aW5nc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtdG9vbGJhci1pdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXJrOiBcIlwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmludF9fcGRmKFwibWFrZXBkZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIu+8sO+8su+8qe+8ru+8tFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBcImE0LWJhY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhNC1hcmVhXCIsIGF0dHJzOiB7IGlkOiBcIm1ha2VwZGZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY29uZmlncywgZnVuY3Rpb24ocm93LCByb3dudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHJvd251bSwgc3RhdGljQ2xhc3M6IFwiYTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicjJ2NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduLXN0YXJ0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChyb3csIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInFyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czY6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpdGVtX3FyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHFybGlzdDogaXRlbSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJvdHRvbS1uYXZcIixcbiAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJ2YWx1ZVwiLCBcImFjdGl2ZS5zeW5jXCI6IFwidmFsdWVcIiwgZml4ZWQ6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmFkZGl0ZW0gPSAhX3ZtLmFkZGl0ZW1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmV3IEl0ZW1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhcyBmYS1wbHVzLXNxdWFyZVwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYTQgPSAhX3ZtLmE0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlFSIEZJTEVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhciBmYS1zdGlja3ktbm90ZVwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2hlZXQgPSAhX3ZtLnNoZWV0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIklORk9cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhcyBmYS1xdWVzdGlvbi1jaXJjbGVcIildKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLm51bSA9PT0gMFxuICAgID8gX2MoXG4gICAgICAgIFwidi1idG5cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBDbnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1xclwiLCBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcImZhcyBmYS1xcmNvZGVcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucENudCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYmFkZ2VcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwiYmFkZ2VcIiB9LCBzbG90OiBcImJhZGdlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm51bSkpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1xclwiLCBhdHRyczogeyBjb2xvcjogXCJibHVlIGRhcmtlbi0xXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJmYXMgZmEtcXJjb2RlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJxcmlvdXNseVwiLCB7IGF0dHJzOiB7IHZhbHVlOiBfdm0uY29uZmlnIH0gfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hbGVydFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFja1wiLCBhdHRyczogeyB0eXBlOiBcImluZm9cIiwgdmFsdWU6IHRydWUsIG91dGxpbmU6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnRpdGxlKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5kYXRhLm1lc3NhZ2UpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRlbC1pbmZvXCIsIGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGEuZGF0YSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBpdGVtLmhpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtdC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHM4OiBcIlwiLCBcIm9mZnNldC14czJcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VibWl0LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJpbmZvXCIsIG91dGxpbmU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaxuuWumlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJxci1jYXJkXCIsIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSB9LCBbXG4gICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInFyLWluZm9cIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInFybGlzdC1saXN0XCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlk4HnlapcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucXJsaXN0LmlkKSldKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInFybGlzdC1saXN0XCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLlk4HlkI1cIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucXJsaXN0Lm5hbWUpKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwicXJsaXN0LWxpc3RcIiB9LCBbXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuW9ouW8j1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5xcmxpc3QubW9kZWwpKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInFyLWFkZFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicXJsaXN0LXFyXCIgfSxcbiAgICAgICAgICBbX2MoXCJtYWtlLXFyXCIsIHsgYXR0cnM6IHsgY29uZmlnOiBfdm0ucXJsaXN0LnZhbHVlIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2hrXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgIF92bS5fbChBcnJheSgxMikua2V5cygpLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtZmxleFwiLCB7IGtleTogaW5kZXgsIGF0dHJzOiB7IHhzMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmnIhcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiwqBcIildKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLCBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwi6YOo5p2Q6K2Y5Yil5qiZXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJxcmxpc3QtbGlzdFwiIH0sIFtcbiAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIueuoeeQhlwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuizh+adkCBB5qOaIDM2LUNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTA0ZDM5ODgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUwNGQzOTg4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFwcCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJvdHRvbU5hdiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJvdHRvbVNoZWV0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRGF0YVRhYmxlIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRGlhbG9nIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkljb24gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMaXN0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU3ViaGVhZGVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVG9vbGJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRvb2xiYXJJdGVtcyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRvb2xiYXJUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFwcCxWQm90dG9tTmF2LFZCb3R0b21TaGVldCxWQnRuLFZDYXJkLFZDYXJkVGV4dCxWQ29udGFpbmVyLFZEYXRhVGFibGUsVkRpYWxvZyxWRmxleCxWSWNvbixWTGF5b3V0LFZMaXN0LFZTcGFjZXIsVlN1YmhlYWRlcixWVGV4dEZpZWxkLFZUb29sYmFyLFZUb29sYmFySXRlbXMsVlRvb2xiYXJUaXRsZX0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTA0ZDM5ODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTA0ZDM5ODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMDRkMzk4OCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlMDRkMzk4OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMDRkMzk4OCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhOGFiMzc2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQmFkZ2UgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQmFkZ2UsVkJ0bixWSWNvbn0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWE4YWIzNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWE4YWIzNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYThhYjM3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYThhYjM3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QvUXJCdXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RckJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYThhYjM3NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFrZVFSLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmViYzk4YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjZlYmM5OGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjZlYmM5OGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01ha2VRUi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZlYmM5OGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjZlYmM5OGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL01ha2VRUi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ha2VRUi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFrZVFSLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2ZWJjOThjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MmMwOGRiOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MmMwOGRiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjgyYzA4ZGI4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFsZXJ0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkFsZXJ0LFZCdG4sVkZsZXgsVkxheW91dCxWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MmMwOGRiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MmMwOGRiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODJjMDhkYjgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODJjMDhkYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODJjMDhkYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODJjMDhkYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgyYzA4ZGI4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTU0ZTFjOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaXRlbV9xci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVhNTRlMWM4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZGbGV4LFZMYXlvdXR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVhNTRlMWM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVhNTRlMWM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTU0ZTFjOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YTU0ZTFjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE1NGUxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE1NGUxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhNTRlMWM4JnNjb3BlZD10cnVlJlwiIiwiY29uc3QgX2RhdGFfdGFibGVfY29tbW9uX3NldHRpbmcgPSB7XG5cbiAgY29tOiB7XG4gICAgcGFnZV90aXRsZTogJ+WFsemAmuODquOCueODiOODmuODvOOCuCcsXG4gICAgcGFnZV9jbGFzczogJ2NvbS1kYXRhLXRhYmxlJyxcbiAgICBpbmZvOiBudWxsLFxuICAgIHZpZXdfcm93X3NldHRpbmc6IFtcbiAgICAgIDUsXG4gICAgICA1MCxcbiAgICAgIDEwMCxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCIkdnVldGlmeS5kYXRhSXRlcmF0b3Iucm93c1BlclBhZ2VBbGxcIixcbiAgICAgICAgdmFsdWU6IC0xXG4gICAgICB9XG4gICAgXSxcbiAgICBub19kYXRhX3RleHQ6IFwibG9hZGluZyAuLi4gXCIsXG4gIH0sXG4gIGl0ZW1fbGlzdDoge1xuICAgIHBhZ2VfdGl0bGU6ICflhbHpgJrjg6rjgrnjg4jjg5rjg7zjgrgnLFxuICAgIGhlYWRlcnM6IFt7XG4gICAgICB0ZXh0OiBcIuWTgeebruOCs+ODvOODiVwiLFxuICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2YWx1ZTogXCJpdGVtX2NvZGVcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCLvvLLvvKXvvLZcIixcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmFsdWU6IFwiaXRlbV9yZXZcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCLlk4HlkI1cIixcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmFsdWU6IFwiaXRlbV9uYW1lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwi5Z6L5byPXCIsXG4gICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHZhbHVlOiBcIml0ZW1fbW9kZWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCLlnKjluqvmlbBcIixcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmFsdWU6IFwibGFzdF9udW1cIlxuICAgIH0sXG4gICAgXSxcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkdF9taXhfY29tOiBfZGF0YV90YWJsZV9jb21tb25fc2V0dGluZyxcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
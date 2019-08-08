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
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBottomNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBottomNav */ "./node_modules/vuetify/lib/components/VBottomNav/index.js");
/* harmony import */ var vuetify_lib_components_VBottomSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBottomSheet */ "./node_modules/vuetify/lib/components/VBottomSheet/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





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




















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBottomNav: vuetify_lib_components_VBottomNav__WEBPACK_IMPORTED_MODULE_5__["VBottomNav"],VBottomSheet: vuetify_lib_components_VBottomSheet__WEBPACK_IMPORTED_MODULE_6__["VBottomSheet"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCardText"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__["VDialog"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VFlex"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VLayout"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VList"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_14__["VSubheader"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbar"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarItems"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarTitle"]})


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
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





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




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBadge: vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__["VBadge"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"]})


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
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






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






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_5__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VFlex"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VLayout"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


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
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");






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



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VLayout"]})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01ha2VRUi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWU/ZDE1ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlPzI4NzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlPzgwYjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZT82NGE4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZT8yOGI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0L1FyQnV0dG9uLnZ1ZT80NDAyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01ha2VRUi52dWU/MGUyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tRm9ybURpYWxvZy52dWU/NmMyZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlPzU2NWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZT9jMzVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZT9lZTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0L1FyQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWU/MDA4MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtTGlzdC9RckJ1dHRvbi52dWU/MmY0NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL01ha2VRUi52dWU/N2M0NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9NYWtlUVIudnVlP2FmNmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUZvcm1EaWFsb2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT80YzlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT9lZTVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZT83MzQ0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvaXRlbS9pdGVtX3FyLnZ1ZT8yZjNmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2l0ZW0vaXRlbV9xci52dWU/ZmMyNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlPzBjZmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9EYXRhVGFibGVDb21tb25TZXR0aW5nLmpzIl0sIm5hbWVzIjpbIl9kYXRhX3RhYmxlX2NvbW1vbl9zZXR0aW5nIiwiY29tIiwicGFnZV90aXRsZSIsInBhZ2VfY2xhc3MiLCJpbmZvIiwidmlld19yb3dfc2V0dGluZyIsInRleHQiLCJ2YWx1ZSIsIm5vX2RhdGFfdGV4dCIsIml0ZW1fbGlzdCIsImhlYWRlcnMiLCJhbGlnbiIsImRhdGEiLCJkdF9taXhfY29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxxRkFEQTtBQUVBO0FBQ0Esa0VBREE7QUFFQSx3RUFGQTtBQUdBO0FBSEEsR0FGQTtBQU9BO0FBQ0E7QUFDQSxlQURBO0FBRUEsMkJBRkE7QUFHQSxrQkFIQTtBQUlBLGtCQUpBO0FBS0EsbUJBTEE7QUFNQSxtQkFOQTtBQU9BLG1CQVBBO0FBUUEsZ0JBUkE7QUFTQSxpQkFUQTtBQVVBLGtCQVZBO0FBV0EsZUFYQTtBQVlBLG9CQVpBO0FBYUE7QUFDQSxxQkFEQTtBQUVBLG1CQUZBO0FBR0EsZUFDQTtBQUNBLDJCQURBO0FBRUEsd0JBRkE7QUFHQSx5QkFIQTtBQUlBLGtCQUpBO0FBS0EsbUJBTEE7QUFNQTtBQU5BLFNBREEsRUFTQTtBQUNBLDBCQURBO0FBRUEsd0JBRkE7QUFHQSx3QkFIQTtBQUlBLHVEQUpBO0FBS0Esb0JBTEE7QUFNQTtBQU5BLFNBVEE7QUFIQTtBQWJBO0FBb0NBLEdBNUNBO0FBNkNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsaUNBQ0EsMkNBREEsRUFFQSxtQkFGQTtBQUlBLFVBQ0EsR0FEQSxDQUNBLGlCQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsV0FNQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLEdBL0RBO0FBZ0VBO0FBQ0EsYUFEQSxxQkFDQSxDQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFDQSxtRUFGQTtBQUdBLHVCQUhBO0FBSUEseUJBSkE7QUFLQTtBQUxBO0FBT0E7QUFDQSxLQVhBO0FBWUEsU0FaQSxpQkFZQSxDQVpBLEVBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUZBO0FBSUE7QUFDQSxLQXRCQTtBQXVCQSxnQkF2QkEsMEJBdUJBO0FBQ0E7QUFDQTtBQXpCQTtBQWhFQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBTkE7QUFPQSxnQ0FQQTtBQVFBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBRUE7QUFDQSxnQkFEQTtBQUVBLG1CQUZBO0FBR0E7QUFIQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0JBO0FBQ0EsaUJBREE7QUFFQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDY0E7QUFFQTtBQUNBLDZCQURBO0FBRUE7QUFDQTtBQURBO0FBRkEsRzs7Ozs7Ozs7Ozs7QUMvQ0EsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLHdCQUF3QixzQkFBc0IsR0FBRywwQkFBMEIsMkJBQTJCLEdBQUcsOEJBQThCLHVCQUF1QixHQUFHLGdDQUFnQyxnQkFBZ0IsR0FBRyw2QkFBNkIsc0JBQXNCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNGalMsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLDhCQUE4QixvQkFBb0IsdUJBQXVCLGdCQUFnQixHQUFHLGdDQUFnQyxxQkFBcUIsR0FBRywyQ0FBMkMsbUJBQW1CLG1CQUFtQixxQkFBcUIsc0JBQXNCLG9CQUFvQix1QkFBdUIsR0FBRyx3REFBd0QsZ0JBQWdCLEdBQUcsbURBQW1ELDRCQUE0QixHQUFHLDhDQUE4QywyQkFBMkIsR0FBRyx3REFBd0QsMEJBQTBCLGNBQWMsR0FBRyxvREFBb0QsZ0JBQWdCLGNBQWMsaUNBQWlDLEdBQUcsNkRBQTZELGVBQWUsR0FBRyw4REFBOEQsZUFBZSxvQkFBb0IsR0FBRyx3REFBd0QsY0FBYyxHQUFHLGtEQUFrRCxjQUFjLHNCQUFzQixHQUFHLDBEQUEwRCxjQUFjLEdBQUcsZ0VBQWdFLGlCQUFpQixHQUFHLG1FQUFtRSxlQUFlLGNBQWMsR0FBRyxzRUFBc0UsMkJBQTJCLGdCQUFnQixHQUFHLG9DQUFvQyxnQkFBZ0IsaUJBQWlCLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDRDFpRCxjQUFjLG1CQUFPLENBQUMsa3lCQUEyYjs7QUFFamQsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRHQUF5RDs7QUFFOUU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQyx1eEJBQXFiOztBQUUzYyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNEdBQXlEOztBQUU5RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdDQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0NBQWdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQ0FBZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdDQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0NBQWdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsdUNBQXVDO0FBQ3ZDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUyxxQkFBcUIsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFnRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3QkFBd0I7QUFDeEQsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsNkJBQTZCLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUJBQXFCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseUJBQXlCO0FBQ2xFO0FBQ0E7QUFDQSwyQkFBMkIsaUNBQWlDLGdCQUFnQixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QztBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxvREFBb0QsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNVdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQ0FBaUMseUJBQXlCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsOEJBQThCLEVBQUU7QUFDdEQ7QUFDQSwwQkFBMEIsU0FBUyxnQkFBZ0IsaUJBQWlCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUNBQWlDLHlCQUF5QixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsb0JBQW9CLEVBQUU7QUFDeEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssOEJBQThCLHlDQUF5QyxFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxXQUFXLEVBQUU7QUFDL0I7QUFDQSx3QkFBd0IsU0FBUyxXQUFXLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQ0FBa0MsV0FBVyxFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFCQUFxQixXQUFXLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkJBQTZCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDLFdBQVcsRUFBRTtBQUNsRSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQSxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEMsMEJBQTBCLFNBQVMsMkJBQTJCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxvQkFBb0IsRUFBRTtBQUM5QztBQUNBLHFDQUFxQyxxQkFBcUIsVUFBVSxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQkFBK0IsZUFBZSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7OztBQUd2RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ3NHO0FBQ25EO0FBQ1k7QUFDSTtBQUNoQjtBQUNFO0FBQ0k7QUFDQztBQUNLO0FBQ047QUFDSjtBQUNBO0FBQ0U7QUFDRjtBQUNFO0FBQ1E7QUFDQTtBQUNKO0FBQ0s7QUFDQTtBQUNoRSxvR0FBaUIsYUFBYSxzRUFBSSxDQUFDLHdGQUFVLENBQUMsOEZBQVksQ0FBQyxzRUFBSSxDQUFDLHlFQUFLLENBQUMsaUZBQVMsQ0FBQyxtRkFBVSxDQUFDLHlGQUFVLENBQUMsZ0ZBQU8sQ0FBQyx5RUFBSyxDQUFDLDBFQUFLLENBQUMsNkVBQU8sQ0FBQywwRUFBSyxDQUFDLDZFQUFPLENBQUMseUZBQVUsQ0FBQyx5RkFBVSxDQUFDLG1GQUFRLENBQUMsNkZBQWEsQ0FBQyw2RkFBYSxDQUFDOzs7QUFHM007QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQzlEZjtBQUFBO0FBQUEsd0NBQTJPLENBQWdCLDhSQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMOzs7QUFHdkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUN5RztBQUNsRDtBQUNKO0FBQ0U7QUFDckQsb0dBQWlCLGFBQWEsNEVBQU0sQ0FBQyxzRUFBSSxDQUFDLHlFQUFLLENBQUM7OztBQUdoRDtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDOUNmO0FBQUE7QUFBQSx3Q0FBb1AsQ0FBZ0IsOFJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXlPLENBQWdCLDRSQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR2xHO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDeUc7QUFDbEQ7QUFDSjtBQUNFO0FBQ0U7QUFDUTtBQUMvRCxvR0FBaUIsYUFBYSw0RUFBTSxDQUFDLHNFQUFJLENBQUMseUVBQUssQ0FBQyw2RUFBTyxDQUFDLHdGQUFVLENBQUM7OztBQUduRTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDakRmO0FBQUE7QUFBQSx3Q0FBeVAsQ0FBZ0IsbVNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN1E7QUFBQTtBQUFBO0FBQUE7QUFBMmYsQ0FBZ0Isa2ZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL2dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzVGO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDeUc7QUFDcEQ7QUFDRTtBQUN2RCxvR0FBaUIsYUFBYSx5RUFBSyxDQUFDLDZFQUFPLENBQUM7OztBQUc1QztBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDOUNmO0FBQUE7QUFBQSx3Q0FBbVAsQ0FBZ0IsNlJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdlE7QUFBQTtBQUFBO0FBQUE7QUFBcWYsQ0FBZ0IsNGVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBemdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEsSUFBTUEsMEJBQTBCLEdBQUc7QUFFakNDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUUsVUFEVDtBQUVIQyxjQUFVLEVBQUUsZ0JBRlQ7QUFHSEMsUUFBSSxFQUFFLElBSEg7QUFJSEMsb0JBQWdCLEVBQUUsQ0FDaEIsQ0FEZ0IsRUFFaEIsRUFGZ0IsRUFHaEIsR0FIZ0IsRUFJaEI7QUFDRUMsVUFBSSxFQUFFLHNDQURSO0FBRUVDLFdBQUssRUFBRSxDQUFDO0FBRlYsS0FKZ0IsQ0FKZjtBQWFIQyxnQkFBWSxFQUFFO0FBYlgsR0FGNEI7QUFpQmpDQyxXQUFTLEVBQUU7QUFDVFAsY0FBVSxFQUFFLFVBREg7QUFFVFEsV0FBTyxFQUFFLENBQUM7QUFDUkosVUFBSSxFQUFFLE9BREU7QUFFUkssV0FBSyxFQUFFLFFBRkM7QUFHUkosV0FBSyxFQUFFO0FBSEMsS0FBRCxFQUtUO0FBQ0VELFVBQUksRUFBRSxLQURSO0FBRUVLLFdBQUssRUFBRSxRQUZUO0FBR0VKLFdBQUssRUFBRTtBQUhULEtBTFMsRUFVVDtBQUNFRCxVQUFJLEVBQUUsSUFEUjtBQUVFSyxXQUFLLEVBQUUsUUFGVDtBQUdFSixXQUFLLEVBQUU7QUFIVCxLQVZTLEVBZVQ7QUFDRUQsVUFBSSxFQUFFLElBRFI7QUFFRUssV0FBSyxFQUFFLFFBRlQ7QUFHRUosV0FBSyxFQUFFO0FBSFQsS0FmUyxFQW9CVDtBQUNFRCxVQUFJLEVBQUUsS0FEUjtBQUVFSyxXQUFLLEVBQUUsUUFGVDtBQUdFSixXQUFLLEVBQUU7QUFIVCxLQXBCUztBQUZBO0FBakJzQixDQUFuQztBQStDZTtBQUNiSyxNQURhLGtCQUNOO0FBQ0wsV0FBTztBQUNMQyxnQkFBVSxFQUFFYjtBQURQLEtBQVA7QUFHRDtBQUxZLENBQWYsRSIsImZpbGUiOiJpdGVtX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWFwcD5cbiAgICA8di1jb250YWluZXIgdi1pZj1cIiFub2RhdGFcIj5cbiAgICAgIDxoMT7pg6jmnZA8L2gxPlxuICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcbiAgICAgICAgYXBwZW5kLWljb249XCJzZWFyY2hcIlxuICAgICAgICBsYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgIEBjaGFuZ2U9XCJzZWFyY2hDaGFuZ2UoKVwiXG4gICAgICAgIHNpbmdsZS1saW5lXG4gICAgICAgIGhpZGUtZGV0YWlsc1xuICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgPGJyIC8+XG4gICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgIDpoZWFkZXJzPVwic2V0dGluZy5oZWFkZXJzXCJcbiAgICAgICAgOml0ZW1zPVwiaXRlbXNcIlxuICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcbiAgICAgICAgOnJvd3MtcGVyLXBhZ2UtaXRlbXM9XCJzZXR0aW5nLnZpZXdfcm93X3NldHRpbmdcIlxuICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICA6Y2xhc3M9XCJzZXR0aW5nLnBhZ2VfY2xhc3NcIlxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW1zPVwicHJvcHNcIj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0uaXRlbV9jb2RlIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+e3sgZ2V0X19yZXYocHJvcHMuaXRlbS5pdGVtX3JldikgfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLml0ZW1fbmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0uaXRlbV9tb2RlbCB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0ubGFzdF9udW0gPT09IC0xID8gJ+acqumbhuioiCc6IHByb3BzLml0ZW0ubGFzdF9udW0gfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyIGxheW91dCBweC0wXCI+XG4gICAgICAgICAgICAgIDxRckJ1dHRvbiBAYWN0PVwiYWRkUXJjb2RlXCIgOnJvd2RhdGE9XCJwcm9wc1wiPjwvUXJCdXR0b24+XG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCInL2l0ZW0vJyArIHByb3BzLml0ZW0uaXRlbV9jb2RlICsgJy8nICsgcHJvcHMuaXRlbS5pdGVtX3JldlwiPlxuICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJvcmFuZ2UgZGFya2VuLTFcIiBjbGFzcz1cImljb24tZWRpdFwiPmZhcyBmYS1lZGl0PC92LWljb24+XG4gICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICAgIDx2LWJvdHRvbS1zaGVldCB2LW1vZGVsPVwic2hlZXRcIj5cbiAgICAgICAgPHYtbGlzdD5cbiAgICAgICAgICA8di1zdWJoZWFkZXI+ZGV0YWlsPC92LXN1YmhlYWRlcj5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8di1jb250YWluZXIgZ3JpZC1saXN0LXhzPlxuICAgICAgICAgICAg5omL6YWN5bel5LqL44KS5YWD44Gr5Y+X5YWl5Yem55CG44KS6KGM44GI44G+44GZ44CC5a++6LGh44Gu5omL6YWN5bel5LqL44KS6YG45oqe44GZ44KL44Go5omL6YWN5LiA6Kan44Oq44K544OI44GM6KGo56S644GV44KM44G+44GZ44CCXG4gICAgICAgICAgICDooajnpLrjgZXjgozjgZ/jg6rjgrnjg4jjgojjgorlj5fjgZHlhaXjgozjgovpg6jmnZDjgpLjg4Hjgqfjg4Pjgq/jgZfjgIHnlLvpnaLkuIvpg6jjga7lj5flhaXjg5zjgr/jg7PjgpLmirzkuIvjgZfjgabjgY/jgaDjgZXjgYTjgILlj5flhaXmlbDph4/jga7lpInmm7TjgYzjgYLjgovloLTlkIjjga/jgIHjg6rjgrnjg4jlj7Ppg6jjga7nt6jpm4bjgrPjg57jg7Pjg4njgpLmirzjgZfjgabjgY/jgaDjgZXjgYTjgIJcbiAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICA8L3YtbGlzdD5cbiAgICAgIDwvdi1ib3R0b20tc2hlZXQ+XG4gICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImFkZGl0ZW1cIiB0cmFuc2l0aW9uPVwiZGlhbG9nLXRyYW5zaXRpb25cIiB3aWR0aD1cIjM2JVwiPlxuICAgICAgICA8QWRkSXRlbSA6ZGF0YT1cImRpYWxvZ19kYXRhXCIgQHJ0PVwicnRBZGRcIiB2LWlmPVwiYWRkaXRlbVwiPjwvQWRkSXRlbT5cbiAgICAgIDwvdi1kaWFsb2c+XG4gICAgICA8di1kaWFsb2dcbiAgICAgICAgdi1tb2RlbD1cImE0XCJcbiAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICBwZXJzaXN0ZW50XG4gICAgICAgIGZ1bGxzY3JlZW5cbiAgICAgICAgaGlkZS1vdmVybGF5XG4gICAgICAgIHRyYW5zaXRpb249XCJkaWFsb2ctYm90dG9tLXRyYW5zaXRpb25cIlxuICAgICAgPlxuICAgICAgICA8di1jYXJkPlxuICAgICAgICAgIDx2LXRvb2xiYXIgZGFyayBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIDx2LWJ0biBpY29uIGRhcmsgQGNsaWNrPVwiYTQgPSAhYTRcIj5cbiAgICAgICAgICAgICAgPHYtaWNvbj5jbG9zZTwvdi1pY29uPlxuICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+U2V0dGluZ3M8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgPHYtdG9vbGJhci1pdGVtcz5cbiAgICAgICAgICAgICAgPHYtYnRuIGRhcmsgZmxhdCBAY2xpY2s9XCJwcmludF9fcGRmKCdtYWtlcGRmJylcIj7vvLDvvLLvvKnvvK7vvLQ8L3YtYnRuPlxuICAgICAgICAgICAgPC92LXRvb2xiYXItaXRlbXM+XG4gICAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICAgICAgPHYtY2FyZC10ZXh0IGNsYXNzPVwiYTQtYmFja1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1ha2VwZGZcIiBjbGFzcz1cImE0LWFyZWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImE0XCIgdi1mb3I9XCIocm93LCByb3dudW0pIGluIGNvbmZpZ3NcIiA6a2V5PVwicm93bnVtXCI+XG4gICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwIGFsaWduLXN0YXJ0IGNsYXNzPVwicjJ2NVwiPlxuICAgICAgICAgICAgICAgICAgPHYtZmxleCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcm93XCIgdi1iaW5kOmtleT1cImluZGV4XCIgeHM2IGNsYXNzPVwicXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbV9xciA6cXJsaXN0PVwiaXRlbVwiPjwvaXRlbV9xcj5cbiAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICA8L3YtZGlhbG9nPlxuICAgIDwvdi1jb250YWluZXI+XG4gICAgPHYtYm90dG9tLW5hdiB2YWx1ZT1cInZhbHVlXCIgYWN0aXZlLnN5bmM9XCJ2YWx1ZVwiIGZpeGVkPlxuICAgICAgPHYtYnRuIEBjbGljaz1cImFkZGl0ZW09IWFkZGl0ZW1cIj5cbiAgICAgICAgPHNwYW4+TmV3IEl0ZW08L3NwYW4+XG4gICAgICAgIDx2LWljb24+ZmFzIGZhLXBsdXMtc3F1YXJlPC92LWljb24+XG4gICAgICA8L3YtYnRuPlxuICAgICAgPHYtYnRuIEBjbGljaz1cImE0ID0gIWE0XCI+XG4gICAgICAgIDxzcGFuPlFSIEZJTEU8L3NwYW4+XG4gICAgICAgIDx2LWljb24+ZmFyIGZhLXN0aWNreS1ub3RlPC92LWljb24+XG4gICAgICA8L3YtYnRuPlxuICAgICAgPHYtYnRuIEBjbGljaz1cInNoZWV0ID0gIXNoZWV0XCI+XG4gICAgICAgIDxzcGFuPklORk88L3NwYW4+XG4gICAgICAgIDx2LWljb24+ZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZTwvdi1pY29uPlxuICAgICAgPC92LWJ0bj5cbiAgICA8L3YtYm90dG9tLW5hdj5cbiAgPC92LWFwcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQWRkSXRlbSBmcm9tIFwiLi9jb20vQ29tRm9ybURpYWxvZ1wiO1xuaW1wb3J0IG1peF9jb20gZnJvbSBcIi4uL21peGlucy9EYXRhVGFibGVDb21tb25TZXR0aW5nLmpzXCI7XG5pbXBvcnQgaXRlbV9xciBmcm9tIFwiLi9pdGVtL2l0ZW1fcXJcIjtcbmltcG9ydCBRckJ1dHRvbiBmcm9tIFwiLi9JdGVtTGlzdC9RckJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW21peF9jb21dLFxuICBjb21wb25lbnRzOiB7XG4gICAgaXRlbV9xcixcbiAgICBRckJ1dHRvbixcbiAgICBBZGRJdGVtXG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBjb25zdF9pdGVtX2xpc3Q6IG51bGwsXG4gICAgICBzZWFyY2g6IG51bGwsXG4gICAgICBzaGVldDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgc2V0dGluZzogbnVsbCxcbiAgICAgIG5vZGF0YTogZmFsc2UsXG4gICAgICBjb25maWc6IFtdLFxuICAgICAgY29uZmlnczogW10sXG4gICAgICBvdXRwdXQ6IG51bGwsXG4gICAgICBhNDogZmFsc2UsXG4gICAgICBhZGRpdGVtOiBmYWxzZSxcbiAgICAgIGRpYWxvZ19kYXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIumDqOadkOeZu+mMslwiLFxuICAgICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJpdGVtX2NvZGVcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIuWTgeebruOCs+ODvOODiVwiLFxuICAgICAgICAgICAgaWQ6IFwiaXRlbV9jb2RlXCIsXG4gICAgICAgICAgICBoaW50OiBcIlwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIml0ZW1fcmV2XCIsXG4gICAgICAgICAgICBsYWJlbDogXCLlk4Hnm67vvLLvvKXvvLZcIixcbiAgICAgICAgICAgIGlkOiBcIml0ZW1fcmV2XCIsXG4gICAgICAgICAgICBoaW50OiBcIuODj+OCpOODleODsygtKeOCkumZpOOBhOOBn+aVtOaVsOWApOOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgOS+iyAwMS0wMyDihpIgMTAzXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCIwXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZHRfbWl4X2NvbVt0aGlzLiRyb3V0ZS5wYXJhbXMucGFnZV9pZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub2RhdGEgPSAhdGhpcy5ub2RhdGE7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0dGluZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB0aGlzLmR0X21peF9jb21bdGhpcy4kcm91dGUucGFyYW1zLnBhZ2VfaWRdLFxuICAgICAgdGhpcy5kdF9taXhfY29tLmNvbVxuICAgICk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvaXRlbXMvaXRlbWxpc3RcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgOiBcIiArIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkUXJjb2RlKHApIHtcbiAgICAgIGxldCBkID0gcC5pdGVtO1xuICAgICAgdGhpcy5jb25maWcucHVzaCh7XG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgIFwiaHR0cDovLzE5Mi4xNjguMTMuMTAzOjgwMDAvaXRlbS9cIiArIGQuaXRlbV9jb2RlICsgXCIvXCIgKyBkLml0ZW1fcmV2LFxuICAgICAgICBpZDogZC5pdGVtX2NvZGUsXG4gICAgICAgIG5hbWU6IGQuaXRlbV9uYW1lLFxuICAgICAgICBtb2RlbDogZC5pdGVtX21vZGVsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29uZmlncyA9IHRoaXMuY29uZmlnLmRpdmlkZSgxMCk7XG4gICAgfSxcbiAgICBydEFkZChkKSB7XG4gICAgICBsZXQgaWlkID0gZC5kYXRhWzBdLnZhbHVlO1xuICAgICAgbGV0IGlyZXYgPSBkLmRhdGFbMV0udmFsdWU7XG4gICAgICB0aGlzLnNlYXJjaCA9IGlpZDtcbiAgICAgIHRoaXMuYWRkaXRlbSA9ICF0aGlzLmFkZGl0ZW07XG4gICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICBpdGVtX2NvZGU6IGlpZCxcbiAgICAgICAgaXRlbV9yZXY6IGlyZXZcbiAgICAgIH0pO1xuICAgICAgYXhpb3MuZ2V0KFwiL2RiL2l0ZW1zL2FkZC9pdGVtL1wiICsgaWlkICsgXCIvXCIgKyBpcmV2KTtcbiAgICB9LFxuICAgIHNlYXJjaENoYW5nZSgpIHtcbiAgICAgIHRoaXMuZGlhbG9nX2RhdGEuZGF0YVswXS52YWx1ZSA9IHRoaXMuc2VhcmNoO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlID5cbiAgPHYtYnRuIGljb24gZmxhdCB2LWlmPVwibnVtPT09MFwiIEBjbGljaz1cInBDbnQoKVwiPlxuICAgIDx2LWljb24gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgY2xhc3M9XCJpY29uLXFyXCI+ZmFzIGZhLXFyY29kZTwvdi1pY29uPlxuICA8L3YtYnRuPlxuICA8di1idG4gaWNvbiBmbGF0IHYtZWxzZSBAY2xpY2s9XCJwQ250KClcIj5cbiAgICA8di1iYWRnZSByaWdodCBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgIDxzcGFuIHNsb3Q9XCJiYWRnZVwiPnt7IG51bSB9fTwvc3Bhbj5cbiAgICAgIDx2LWljb24gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgY2xhc3M9XCJpY29uLXFyXCI+ZmFzIGZhLXFyY29kZTwvdi1pY29uPlxuICAgIDwvdi1iYWRnZT5cbiAgPC92LWJ0bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJyb3dkYXRhXCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbnVtOiAwXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7fSxcbiAgbWV0aG9kczoge1xuICAgIHBDbnQoKSB7XG4gICAgICB0aGlzLm51bSA9IHRoaXMubnVtICsgMTtcbiAgICAgIHRoaXMuJGVtaXQoXCJhY3RcIiwgdGhpcy5yb3dkYXRhKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxxcmlvdXNseSA6dmFsdWU9XCJjb25maWdcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IFZ1ZVFyaW91c2x5IGZyb20gXCJ2dWUtcXJpb3VzbHlcIjtcblZ1ZS51c2UoVnVlUXJpb3VzbHkpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHt9LFxuICBwcm9wczogW1wiY29uZmlnXCJdLFxuICBuYW1lOiBcInFyR2VuYXJhdGVcIlxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8di1hbGVydCB0eXBlPVwiaW5mb1wiIDp2YWx1ZT1cInRydWVcIiBvdXRsaW5lIGNsYXNzPVwiYmFja1wiPlxuICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICA8aDE+e3sgZGF0YS50aXRsZSB9fTwvaDE+XG4gICAgICAgIDxwIHYtaHRtbD1cImRhdGEubWVzc2FnZVwiIGNsYXNzPVwibWVzc2FnZVwiPjwvcD5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czEyIGNsYXNzPVwiZGVsLWluZm9cIj5cbiAgICAgICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkYXRhLmRhdGFcIj5cbiAgICAgICAgICAgIDx2LWZsZXggeHMxMiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIDpuYW1lPVwiaXRlbS5uYW1lXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtLmxhYmVsXCJcbiAgICAgICAgICAgICAgICA6aWQ9XCJpdGVtLmlkXCJcbiAgICAgICAgICAgICAgICA6aGludD1cIml0ZW0uaGludFwiXG4gICAgICAgICAgICAgICAgOnR5cGU9XCJpdGVtLnR5cGVcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8di1mbGV4IHhzOCBvZmZzZXQteHMyIGNsYXNzPVwibXQtNFwiPlxuICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiaW5mb1wiIGNsYXNzPVwic3VibWl0LWJ0blwiIG91dGxpbmUgQGNsaWNrPVwic3VibWl0KClcIj7msbrlrpo8L3YtYnRuPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgPC92LWZsZXg+XG4gICAgPC92LWxheW91dD5cbiAgPC92LWFsZXJ0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcImRhdGFcIl0sXG4gIG1ldGhvZHM6IHtcbiAgICBzdWJtaXQoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwicnRcIiwgdGhpcy5kYXRhLCB0cnVlKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5kZWwtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWJtaXQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBmbGF0IGNsYXNzPVwicXItY2FyZFwiPlxuICAgIDx0YWJsZSBjbGFzcz1cInFyLWluZm9cIj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNvbHNwYW49XCIyXCIgY2xhc3M9XCJ0aXRsZVwiPumDqOadkOitmOWIpeaomTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyIGNsYXNzPVwicXJsaXN0LWxpc3RcIj5cbiAgICAgICAgPHRkPuWTgeeVqjwvdGQ+XG4gICAgICAgIDx0ZD57eyBxcmxpc3QuaWQgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBjbGFzcz1cInFybGlzdC1saXN0XCI+XG4gICAgICAgIDx0ZD7lk4HlkI08L3RkPlxuICAgICAgICA8dGQ+e3sgcXJsaXN0Lm5hbWUgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBjbGFzcz1cInFybGlzdC1saXN0XCI+XG4gICAgICAgIDx0ZD7lvaLlvI88L3RkPlxuICAgICAgICA8dGQ+e3sgcXJsaXN0Lm1vZGVsIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJxcmxpc3QtbGlzdFwiPlxuICAgICAgICA8dGQ+566h55CGPC90ZD5cbiAgICAgICAgPHRkPuizh+adkCBB5qOaIDM2LUM8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBjbGFzcz1cInFyLWFkZFwiPlxuICAgICAgICA8dGQgY2xhc3M9XCJxcmxpc3QtcXJcIj5cbiAgICAgICAgICA8bWFrZS1xciA6Y29uZmlnPVwicXJsaXN0LnZhbHVlXCI+PC9tYWtlLXFyPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJjaGtcIj5cbiAgICAgICAgICA8di1sYXlvdXQgcm93IHdyYXA+XG4gICAgICAgICAgICA8di1mbGV4IHhzMiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gQXJyYXkoMTIpLmtleXMoKVwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAge3sgaXRlbSArIDEgfX1cbiAgICAgICAgICAgICAgICAgIDxzcGFuPuaciDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4mbmJzcDs8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IG1ha2VRciBmcm9tIFwiLi4vTWFrZVFSLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJxcmxpc3RcIiwgXCJjb25maWdcIl0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBtYWtlUXJcbiAgfVxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnFyLWNhcmQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIHRhYmxlLnFyLWluZm8ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGhlaWdodDogNTMuMm1tO1xuICAgIG1hcmdpbi1sZWZ0OiA1bW07XG4gICAgbWFyZ2luLXJpZ2h0OiA1bW07XG4gICAgbWFyZ2luLXRvcDogM21tO1xuICAgIG1hcmdpbi1ib3R0b206IDNtbTtcbiAgICAucXJsaXN0LWxpc3Qge1xuICAgICAgaGVpZ2h0OiA1bW07XG4gICAgfVxuICAgIC5xci1hZGQge1xuICAgICAgaGVpZ2h0OiAyNG1tICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRkIHtcbiAgICAgICYucXJsaXN0LXFyIHtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAmLnRpdGxlIHtcbiAgICAgICAgaGVpZ2h0OiA3bW07XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgICAmLnFybGlzdC1xciB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICAgICYuY2hrIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgIGhlaWdodDogMTJtbTtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZtbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaDFbZGF0YS12LTgyYzA4ZGI4XSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmJhY2tbZGF0YS12LTgyYzA4ZGI4XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uZGVsLWluZm9bZGF0YS12LTgyYzA4ZGI4XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtYnRuW2RhdGEtdi04MmMwOGRiOF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi04MmMwOGRiOF0ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnFyLWNhcmRbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLnFyLWNhcmQgbGlbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBoZWlnaHQ6IDUzLjJtbTtcXG4gIG1hcmdpbi1sZWZ0OiA1bW07XFxuICBtYXJnaW4tcmlnaHQ6IDVtbTtcXG4gIG1hcmdpbi10b3A6IDNtbTtcXG4gIG1hcmdpbi1ib3R0b206IDNtbTtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyAucXJsaXN0LWxpc3RbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBoZWlnaHQ6IDVtbTtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyAucXItYWRkW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgaGVpZ2h0OiAyNG1tICFpbXBvcnRhbnQ7XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGRbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLnFybGlzdC1xcltkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyB0ZC50aXRsZVtkYXRhLXYtNWE1NGUxYzhdIHtcXG4gIGhlaWdodDogN21tO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyB0ZFtkYXRhLXYtNWE1NGUxYzhdOm50aC1jaGlsZChvZGQpIHtcXG4gIHdpZHRoOiAzNSU7XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGRbZGF0YS12LTVhNTRlMWM4XTpudGgtY2hpbGQoZXZlbikge1xcbiAgd2lkdGg6IDY1JTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnFyLWNhcmQgdGFibGUucXItaW5mbyB0ZC5xcmxpc3QtcXJbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBib3JkZXI6IDA7XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGQuY2hrW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGQuY2hrIC5sYXlvdXRbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGQuY2hrIC5sYXlvdXQgLmZsZXhbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBoZWlnaHQ6IDEybW07XFxufVxcbi5xci1jYXJkIHRhYmxlLnFyLWluZm8gdGQuY2hrIC5sYXlvdXQgLmZsZXggdWxbZGF0YS12LTVhNTRlMWM4XSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ucXItY2FyZCB0YWJsZS5xci1pbmZvIHRkLmNoayAubGF5b3V0IC5mbGV4IHVsIGxpW2RhdGEtdi01YTU0ZTFjOF0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogNm1tO1xcbn1cXG4ucXItY2FyZCBjYW52YXNbZGF0YS12LTVhNTRlMWM4XSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XCIsIFwiXCJdKTtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MmMwOGRiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhNTRlMWM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhNTRlMWM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYXBwXCIsXG4gICAgW1xuICAgICAgIV92bS5ub2RhdGFcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi6YOo5p2QXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJhcHBlbmQtaWNvblwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICBcInNpbmdsZS1saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcImhpZGUtZGV0YWlsc1wiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWFyY2hDaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNldHRpbmcucGFnZV9jbGFzcyxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaGVhZGVyczogX3ZtLnNldHRpbmcuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBcInJvd3MtcGVyLXBhZ2UtaXRlbXNcIjogX3ZtLnNldHRpbmcudmlld19yb3dfc2V0dGluZyxcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaXRlbV9jb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldF9fcmV2KHByb3BzLml0ZW0uaXRlbV9yZXYpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pdGVtX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLml0ZW1fbW9kZWwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5sYXN0X251bSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLmnKrpm4boqIhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5pdGVtLmxhc3RfbnVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsYXlvdXQgcHgtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlFyQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dkYXRhOiBwcm9wcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGFjdDogX3ZtLmFkZFFyY29kZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvaXRlbS9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5pdGVtX2NvZGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtLml0ZW1fcmV2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcIm9yYW5nZSBkYXJrZW4tMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImZhcyBmYS1lZGl0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAzNjA0OTgwNDE4XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJvdHRvbS1zaGVldFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hlZXQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hlZXQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaGVldFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zdWJoZWFkZXJcIiwgW192bS5fdihcImRldGFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jb250YWluZXJcIiwgeyBhdHRyczogeyBcImdyaWQtbGlzdC14c1wiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICDmiYvphY3lt6XkuovjgpLlhYPjgavlj5flhaXlh6bnkIbjgpLooYzjgYjjgb7jgZnjgILlr77osaHjga7miYvphY3lt6XkuovjgpLpgbjmip7jgZnjgovjgajmiYvphY3kuIDopqfjg6rjgrnjg4jjgYzooajnpLrjgZXjgozjgb7jgZnjgIJcXG4gICAgICAgICAg6KGo56S644GV44KM44Gf44Oq44K544OI44KI44KK5Y+X44GR5YWl44KM44KL6YOo5p2Q44KS44OB44Kn44OD44Kv44GX44CB55S76Z2i5LiL6YOo44Gu5Y+X5YWl44Oc44K/44Oz44KS5oq85LiL44GX44Gm44GP44Gg44GV44GE44CC5Y+X5YWl5pWw6YeP44Gu5aSJ5pu044GM44GC44KL5aC05ZCI44Gv44CB44Oq44K544OI5Y+z6YOo44Gu57eo6ZuG44Kz44Oe44Oz44OJ44KS5oq844GX44Gm44GP44Gg44GV44GE44CCXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRyYW5zaXRpb246IFwiZGlhbG9nLXRyYW5zaXRpb25cIiwgd2lkdGg6IFwiMzYlXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWRkaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5hZGRpdGVtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWRkaXRlbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uYWRkaXRlbVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiQWRkSXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uZGlhbG9nX2RhdGEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHJ0OiBfdm0ucnRBZGQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGlkZS1vdmVybGF5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiZGlhbG9nLWJvdHRvbS10cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmE0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmE0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYTRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGRhcms6IFwiXCIsIGNvbG9yOiBcInByaW1hcnlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmE0ID0gIV92bS5hNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImNsb3NlXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRvb2xiYXItdGl0bGVcIiwgW192bS5fdihcIlNldHRpbmdzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyLWl0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRhcms6IFwiXCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByaW50X19wZGYoXCJtYWtlcGRmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi77yw77yy77yp77yu77y0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFwiYTQtYmFja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImE0LWFyZWFcIiwgYXR0cnM6IHsgaWQ6IFwibWFrZXBkZlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb25maWdzLCBmdW5jdGlvbihyb3csIHJvd251bSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogcm93bnVtLCBzdGF0aWNDbGFzczogXCJhNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyMnY1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ24tc3RhcnRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHJvdywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicXItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzNjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIml0ZW1fcXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcXJsaXN0OiBpdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtYm90dG9tLW5hdlwiLFxuICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcInZhbHVlXCIsIFwiYWN0aXZlLnN5bmNcIjogXCJ2YWx1ZVwiLCBmaXhlZDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWRkaXRlbSA9ICFfdm0uYWRkaXRlbVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJOZXcgSXRlbVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFzIGZhLXBsdXMtc3F1YXJlXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hNCA9ICFfdm0uYTRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUVIgRklMRVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFyIGZhLXN0aWNreS1ub3RlXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaGVldCA9ICFfdm0uc2hlZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiSU5GT1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZVwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ubnVtID09PSAwXG4gICAgPyBfYyhcbiAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucENudCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uLXFyXCIsIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiZmFzIGZhLXFyY29kZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF9jKFxuICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5wQ250KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1iYWRnZVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByaWdodDogXCJcIiwgY29sb3I6IFwicHJpbWFyeVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJiYWRnZVwiIH0sIHNsb3Q6IFwiYmFkZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubnVtKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uLXFyXCIsIGF0dHJzOiB7IGNvbG9yOiBcImJsdWUgZGFya2VuLTFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcImZhcyBmYS1xcmNvZGVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInFyaW91c2x5XCIsIHsgYXR0cnM6IHsgdmFsdWU6IF92bS5jb25maWcgfSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFsZXJ0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJiYWNrXCIsIGF0dHJzOiB7IHR5cGU6IFwiaW5mb1wiLCB2YWx1ZTogdHJ1ZSwgb3V0bGluZTogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEudGl0bGUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRhdGEubWVzc2FnZSkgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVsLWluZm9cIiwgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YS5kYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IGl0ZW0uaGludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czg6IFwiXCIsIFwib2Zmc2V0LXhzMlwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJtaXQtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImluZm9cIiwgb3V0bGluZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5rG65a6aXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInFyLWNhcmRcIiwgYXR0cnM6IHsgZmxhdDogXCJcIiB9IH0sIFtcbiAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwicXItaW5mb1wiIH0sIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwicXJsaXN0LWxpc3RcIiB9LCBbXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuWTgeeVqlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5xcmxpc3QuaWQpKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwicXJsaXN0LWxpc3RcIiB9LCBbXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuWTgeWQjVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5xcmxpc3QubmFtZSkpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJxcmxpc3QtbGlzdFwiIH0sIFtcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi5b2i5byPXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnFybGlzdC5tb2RlbCkpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwicXItYWRkXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJxcmxpc3QtcXJcIiB9LFxuICAgICAgICAgIFtfYyhcIm1ha2UtcXJcIiwgeyBhdHRyczogeyBjb25maWc6IF92bS5xcmxpc3QudmFsdWUgfSB9KV0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjaGtcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKEFycmF5KDEyKS5rZXlzKCksIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi1mbGV4XCIsIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgeHMyOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0gKyAxKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaciFwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCLCoFwiKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsIGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCLpg6jmnZDorZjliKXmqJlcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInFybGlzdC1saXN0XCIgfSwgW1xuICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi566h55CGXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi6LOH5p2QIEHmo5ogMzYtQ1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMDRkMzk4OCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTA0ZDM5ODhcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQXBwIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQXBwJztcbmltcG9ydCB7IFZCb3R0b21OYXYgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZCb3R0b21OYXYnO1xuaW1wb3J0IHsgVkJvdHRvbVNoZWV0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQm90dG9tU2hlZXQnO1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkNhcmQnO1xuaW1wb3J0IHsgVkNhcmRUZXh0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQ2FyZCc7XG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWRGF0YVRhYmxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WRGF0YVRhYmxlJztcbmltcG9ydCB7IFZEaWFsb2cgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZEaWFsb2cnO1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WSWNvbic7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWTGlzdCB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkxpc3QnO1xuaW1wb3J0IHsgVlNwYWNlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkdyaWQnO1xuaW1wb3J0IHsgVlN1YmhlYWRlciB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVlN1YmhlYWRlcic7XG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dEZpZWxkJztcbmltcG9ydCB7IFZUb29sYmFyIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVG9vbGJhcic7XG5pbXBvcnQgeyBWVG9vbGJhckl0ZW1zIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVG9vbGJhcic7XG5pbXBvcnQgeyBWVG9vbGJhclRpdGxlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVG9vbGJhcic7XG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQXBwLFZCb3R0b21OYXYsVkJvdHRvbVNoZWV0LFZCdG4sVkNhcmQsVkNhcmRUZXh0LFZDb250YWluZXIsVkRhdGFUYWJsZSxWRGlhbG9nLFZGbGV4LFZJY29uLFZMYXlvdXQsVkxpc3QsVlNwYWNlcixWU3ViaGVhZGVyLFZUZXh0RmllbGQsVlRvb2xiYXIsVlRvb2xiYXJJdGVtcyxWVG9vbGJhclRpdGxlfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UwNGQzOTg4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UwNGQzOTg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UwNGQzOTg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTA0ZDM5ODgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTA0ZDM5ODgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1MaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTA0ZDM5ODgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYThhYjM3NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RckJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJhZGdlIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQmFkZ2UnO1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkJ0bic7XG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliL2NvbXBvbmVudHMvVkljb24nO1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJhZGdlLFZCdG4sVkljb259KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWE4YWIzNzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWE4YWIzNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWE4YWIzNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYThhYjM3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYThhYjM3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbUxpc3QvUXJCdXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RckJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1FyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYThhYjM3NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFrZVFSLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmViYzk4YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmNmViYzk4YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmNmViYzk4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmNmViYzk4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFrZVFSLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNmViYzk4YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmNmViYzk4YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTWFrZVFSLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFrZVFSLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWtlUVIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01ha2VRUi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjZlYmM5OGMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgyYzA4ZGI4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db21Gb3JtRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgyYzA4ZGI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODJjMDhkYjhcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQWxlcnQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZBbGVydCc7XG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WQnRuJztcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WR3JpZCc7XG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWIvY29tcG9uZW50cy9WVGV4dEZpZWxkJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBbGVydCxWQnRuLFZGbGV4LFZMYXlvdXQsVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4MmMwOGRiOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MmMwOGRiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MmMwOGRiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODJjMDhkYjgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODJjMDhkYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21Gb3JtRGlhbG9nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tRm9ybURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODJjMDhkYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODJjMDhkYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUZvcm1EaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgyYzA4ZGI4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTU0ZTFjOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaXRlbV9xci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVhNTRlMWM4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYi9jb21wb25lbnRzL1ZHcmlkJztcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZGbGV4LFZMYXlvdXR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWE1NGUxYzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWE1NGUxYzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWE1NGUxYzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2l0ZW1fcXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhNTRlMWM4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVhNTRlMWM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9pdGVtL2l0ZW1fcXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pdGVtX3FyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YTU0ZTFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaXRlbV9xci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE1NGUxYzgmc2NvcGVkPXRydWUmXCIiLCJjb25zdCBfZGF0YV90YWJsZV9jb21tb25fc2V0dGluZyA9IHtcblxuICBjb206IHtcbiAgICBwYWdlX3RpdGxlOiAn5YWx6YCa44Oq44K544OI44Oa44O844K4JyxcbiAgICBwYWdlX2NsYXNzOiAnY29tLWRhdGEtdGFibGUnLFxuICAgIGluZm86IG51bGwsXG4gICAgdmlld19yb3dfc2V0dGluZzogW1xuICAgICAgNSxcbiAgICAgIDUwLFxuICAgICAgMTAwLFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIiR2dWV0aWZ5LmRhdGFJdGVyYXRvci5yb3dzUGVyUGFnZUFsbFwiLFxuICAgICAgICB2YWx1ZTogLTFcbiAgICAgIH1cbiAgICBdLFxuICAgIG5vX2RhdGFfdGV4dDogXCJsb2FkaW5nIC4uLiBcIixcbiAgfSxcbiAgaXRlbV9saXN0OiB7XG4gICAgcGFnZV90aXRsZTogJ+WFsemAmuODquOCueODiOODmuODvOOCuCcsXG4gICAgaGVhZGVyczogW3tcbiAgICAgIHRleHQ6IFwi5ZOB55uu44Kz44O844OJXCIsXG4gICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHZhbHVlOiBcIml0ZW1fY29kZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIu+8su+8pe+8tlwiLFxuICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2YWx1ZTogXCJpdGVtX3JldlwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIuWTgeWQjVwiLFxuICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2YWx1ZTogXCJpdGVtX25hbWVcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCLlnovlvI9cIixcbiAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgdmFsdWU6IFwiaXRlbV9tb2RlbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIuWcqOW6q+aVsFwiLFxuICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB2YWx1ZTogXCJsYXN0X251bVwiXG4gICAgfSxcbiAgICBdLFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGR0X21peF9jb206IF9kYXRhX3RhYmxlX2NvbW1vbl9zZXR0aW5nLFxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
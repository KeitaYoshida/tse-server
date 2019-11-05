(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workingUseItem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sumup/workingUseItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sumup/workingUseItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: [],
  components: {},
  data: function data() {
    return {
      items: [],
      workdata: {},
      headers: [{
        text: "品目コード",
        value: "item_code",
        align: "center"
      }, {
        text: "形式",
        value: "item_model",
        align: "center"
      }, {
        text: "品名",
        value: "item_name",
        align: "center"
      }, {
        text: "数量",
        value: "count",
        align: "center"
      }, {
        text: "金額",
        value: "total_price",
        align: "center"
      }],
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 1000,
        sortBy: "item_name"
      },
      totalPrice: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    target: "target"
  })),
  created: function created() {
    this.init();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])([]), {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var Fin, list, process, items;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Fin = 2;
                _context.next = 3;
                return axios.get("/db/workdata/process/" + this.$route.params.work_id);

              case 3:
                list = _context.sent;
                this.workdata = list.data[0];
                process = {}; // console.log(list.data[0]);
                // worklist -> serial[] -> process[]

                list.data[0].serials.forEach(function (serial) {
                  serial.process.forEach(function (p) {
                    if (p.process_status === Fin) {
                      process[p.work_id] = process[p.work_id] === undefined ? 1 : process[p.work_id] + 1;
                    }
                  });
                }); // console.log(process);

                items = [];
                Object.keys(process).forEach(function (pid) {
                  axios.get("/db/workdata/cmpt/items/" + pid).then(function (res) {
                    res.data.forEach(function (item) {
                      var tar = items.filter(function (ar) {
                        return ar.item_id === item.items.item_id;
                      });

                      if (tar.length === 0) {
                        items.push({
                          item_id: item.items.item_id,
                          item_code: item.items.item_code,
                          item_model: item.items.item_model,
                          item_name: item.items.item_name,
                          item_price: Number(item.items.item_price),
                          count: Number(item.item_use) * process[pid],
                          total_price: Number(item.items.item_price) * process[pid]
                        });
                      } else {
                        tar.count = tar.count + item.item_use * process[pid];
                        tar.total_price = tar.total_price + tar.item_price * process[pid];
                      }

                      _this.totalPrice = _this.totalPrice + Number(item.items.item_price) * process[pid];
                    });
                  });
                });
                this.items = items; // console.log(this.items);
                // console.log(items);
                // this.items = Object.keys(items).map(key => {
                //   console.log(key);
                //   return items[key];
                // });
                // console.log(this.items);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    rt: function rt(i) {
      console.log(i);
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sumup/workingUseItem.vue?vue&type=template&id=7c00c8c6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sumup/workingUseItem.vue?vue&type=template&id=7c00c8c6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { "grid-list-xs": "" } },
        [
          _vm.totalPrice !== 0
            ? [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "", color: "primary", flat: "" },
                    on: {
                      click: function($event) {
                        return _vm.$router.go(-1)
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("fas fa-angle-double-left")])],
                  1
                ),
                _vm._v(" "),
                _c("v-btn", { attrs: { color: "primary", outline: "" } }, [
                  _vm._v(_vm._s(_vm.workdata.model.model_code))
                ]),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "primary",
                      outline: "",
                      to: "/process/" + _vm.$route.params.work_id
                    }
                  },
                  [_vm._v(_vm._s(_vm.workdata.worklist_code))]
                ),
                _vm._v(" "),
                _c("v-btn", { attrs: { color: "primary", flat: "" } }, [
                  _vm._v("金額：" + _vm._s(_vm.totalPrice.toLocaleString()))
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1 mt-3",
            attrs: {
              headers: _vm.headers,
              items: _vm.items,
              "hide-actions": "",
              pagination: _vm.pagination,
              "item-key": "item_id",
              loading: _vm.items.length === 0
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
                      _vm._v(_vm._s(props.item.item_code))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-center" }, [
                      _vm._v(_vm._s(props.item.item_model))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-center" }, [
                      _vm._v(_vm._s(props.item.item_name))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-center" }, [
                      _vm._v(_vm._s(props.item.count))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-xs-center" }, [
                      _vm._v(_vm._s(props.item.total_price.toLocaleString()))
                    ])
                  ]
                }
              }
            ])
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/sumup/workingUseItem.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/sumup/workingUseItem.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _workingUseItem_vue_vue_type_template_id_7c00c8c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workingUseItem.vue?vue&type=template&id=7c00c8c6&scoped=true& */ "./resources/js/components/sumup/workingUseItem.vue?vue&type=template&id=7c00c8c6&scoped=true&");
/* harmony import */ var _workingUseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workingUseItem.vue?vue&type=script&lang=js& */ "./resources/js/components/sumup/workingUseItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _workingUseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _workingUseItem_vue_vue_type_template_id_7c00c8c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _workingUseItem_vue_vue_type_template_id_7c00c8c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c00c8c6",
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sumup/workingUseItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sumup/workingUseItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/sumup/workingUseItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_workingUseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./workingUseItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sumup/workingUseItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_workingUseItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sumup/workingUseItem.vue?vue&type=template&id=7c00c8c6&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/sumup/workingUseItem.vue?vue&type=template&id=7c00c8c6&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_workingUseItem_vue_vue_type_template_id_7c00c8c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./workingUseItem.vue?vue&type=template&id=7c00c8c6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sumup/workingUseItem.vue?vue&type=template&id=7c00c8c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_workingUseItem_vue_vue_type_template_id_7c00c8c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_workingUseItem_vue_vue_type_template_id_7c00c8c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=workingUseItem.js.map
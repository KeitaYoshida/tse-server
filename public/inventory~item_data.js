(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory~item_data"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/ItemInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_ItemData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mixins/ItemData */ "./resources/js/mixins/ItemData.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
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
  mixins: [_mixins_ItemData__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: ["item_code", "item_rev"],
  components: {},
  data: function data() {
    return {};
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var outer;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.get_item_data();

            case 2:
              outer = ["lot_num", "minimum_set"];
              this.out(outer);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }()
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemInfo.vue?vue&type=template&id=0fb00e98&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/ItemInfo.vue?vue&type=template&id=0fb00e98& ***!
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
  return _c("article", [
    _c(
      "table",
      { staticClass: "torks_com", attrs: { id: "item_info" } },
      _vm._l(_vm.item_data, function(item, index) {
        return _c("tr", { key: index }, [
          _c(
            "td",
            { staticClass: "icon" },
            [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
            1
          ),
          _vm._v(" "),
          _c("td", { staticClass: "title" }, [_vm._v(_vm._s(item.title))]),
          _vm._v(" "),
          _c("td", { staticClass: "value" }, [
            _vm._v(_vm._s(!item.value ? "-" : item.value))
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ItemData/ItemInfo.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ItemData/ItemInfo.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemInfo_vue_vue_type_template_id_0fb00e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemInfo.vue?vue&type=template&id=0fb00e98& */ "./resources/js/components/ItemData/ItemInfo.vue?vue&type=template&id=0fb00e98&");
/* harmony import */ var _ItemInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemInfo.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemData/ItemInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemInfo_vue_vue_type_template_id_0fb00e98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemInfo_vue_vue_type_template_id_0fb00e98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemData/ItemInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemData/ItemInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ItemData/ItemInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemData/ItemInfo.vue?vue&type=template&id=0fb00e98&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ItemData/ItemInfo.vue?vue&type=template&id=0fb00e98& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemInfo_vue_vue_type_template_id_0fb00e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemInfo.vue?vue&type=template&id=0fb00e98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemInfo.vue?vue&type=template&id=0fb00e98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemInfo_vue_vue_type_template_id_0fb00e98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemInfo_vue_vue_type_template_id_0fb00e98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/ItemData.js":
/*!*****************************************!*\
  !*** ./resources/js/mixins/ItemData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      item_data: null,
      vendor: []
    };
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    get_item_data: function () {
      var _get_item_data = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/items/iteminfo/" + this.item_code + "/" + this.item_rev).then(function (response) {
                  _this.item_data = [{
                    icon: "fas fa-barcode",
                    title: "部材シリアル",
                    name: 'item_id',
                    value: response.data[0].item_id
                  }, {
                    icon: "fas fa-info",
                    title: "品目コード",
                    name: 'item_code',
                    value: response.data[0].item_code
                  }, {
                    icon: "fas fa-arrow-alt-circle-up",
                    title: "Rev",
                    name: 'item_rev',
                    value: _this.get__chk(response.data[0].item_rev)
                  }, {
                    icon: "fas fa-info",
                    title: "手配コード",
                    name: 'order_code',
                    value: response.data[0].order_code
                  }, {
                    icon: "fas fa-info",
                    title: "部材区分",
                    name: 'item_class',
                    value: response.data[0].item_class
                  }, {
                    icon: "fas fa-id-badge",
                    title: "品名",
                    name: "item_name",
                    value: response.data[0].item_name
                  }, {
                    icon: "fas fa-id-card",
                    title: "品目形式",
                    name: "item_model",
                    value: response.data[0].item_model
                  }, {
                    icon: "fas fa-map-marked",
                    title: "製造元",
                    name: "maker_name",
                    value: response.data[0].maker_name
                  }, {
                    icon: "fas fa-arrows-alt-h",
                    title: "RT",
                    name: "read_time",
                    value: _this.get__chk(response.data[0].read_time)
                  }, {
                    icon: "fas fa-calculator",
                    title: "在庫数",
                    name: "last_num",
                    value: _this.get__chk(response.data[0].last_num)
                  }, {
                    icon: "fas fa-calculator",
                    title: "使用予約数",
                    name: "appo_num",
                    value: _this.get__chk(response.data[0].appo_num)
                  }, {
                    icon: "fas fa-map-signs",
                    title: "ＬＯＴ手配数",
                    name: "lot_num",
                    value: response.data[0].lot_num
                  }, {
                    icon: "fas fa-map-signs",
                    title: "最小保持数",
                    name: "minimum_set",
                    value: response.data[0].minimum_set
                  }, {
                    icon: "fas fa-map-signs",
                    title: "手配方法",
                    name: "order_way",
                    value: _this.get__orderway(response.data[0].lot_num, response.data[0].minimum_set)
                  }, {
                    icon: "fas fa-map-marker-alt",
                    title: "保管場所",
                    name: "location",
                    value: _this.get__chk(response.data[0].location)
                  }];

                  if (response.data[0].vendor) {
                    response.data[0].vendor.forEach(function (ob) {
                      _this.item_data.push({
                        icon: "fas fa-money-bill-wave",
                        title: "手配金額",
                        name: "order_prices",
                        edit: true,
                        value: "[" + ob.vendname.com_name + "] " + ob.vendor_item_price + " ¥"
                      });

                      _this.vendor.push({
                        item_id: ob.item_id,
                        vendor_code: ob.vendor_code,
                        com_name: ob.vendname.com_name,
                        vendor_item_price: ob.vendor_item_price,
                        order_add_date: ob.order_add_date
                      });
                    });
                  }
                })["catch"](function (error) {
                  console.log("Error : " + error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function get_item_data() {
        return _get_item_data.apply(this, arguments);
      }

      return get_item_data;
    }(),
    out: function out(arr) {
      var _this2 = this;

      arr.forEach(function (id) {
        var index = _this2.item_data.findIndex(function (v) {
          return v.name === id;
        });

        if (index !== -1) {
          _this2.item_data.splice(index, 1);
        }
      });
    },
    get_serial: function get_serial() {
      return this.item_data[this.item_data.findIndex(function (v) {
        return v.name === "item_id";
      })].value;
    },
    selecter: function selecter(arr) {
      return this.item_data.filter(function (v) {
        return arr.includes(v.name);
      });
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUluZm8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbmZvLnZ1ZT8yZDMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW5mby52dWU/Y2Q4NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW5mby52dWU/MzQzOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL0l0ZW1EYXRhLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpdGVtX2RhdGEiLCJ2ZW5kb3IiLCJjcmVhdGVkIiwibWV0aG9kcyIsImdldF9pdGVtX2RhdGEiLCJheGlvcyIsImdldCIsIml0ZW1fY29kZSIsIml0ZW1fcmV2IiwidGhlbiIsInJlc3BvbnNlIiwiaWNvbiIsInRpdGxlIiwibmFtZSIsInZhbHVlIiwiaXRlbV9pZCIsImdldF9fY2hrIiwib3JkZXJfY29kZSIsIml0ZW1fY2xhc3MiLCJpdGVtX25hbWUiLCJpdGVtX21vZGVsIiwibWFrZXJfbmFtZSIsInJlYWRfdGltZSIsImxhc3RfbnVtIiwiYXBwb19udW0iLCJsb3RfbnVtIiwibWluaW11bV9zZXQiLCJnZXRfX29yZGVyd2F5IiwibG9jYXRpb24iLCJmb3JFYWNoIiwib2IiLCJwdXNoIiwiZWRpdCIsInZlbmRuYW1lIiwiY29tX25hbWUiLCJ2ZW5kb3JfaXRlbV9wcmljZSIsInZlbmRvcl9jb2RlIiwib3JkZXJfYWRkX2RhdGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvdXQiLCJhcnIiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwidiIsInNwbGljZSIsImdldF9z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WSxVQUFBYyxFQUFFLEVBQUk7QUFDaEIsWUFBTUMsS0FBSyxHQUFHLE1BQUksQ0FBQzVDLFNBQUwsQ0FBZTZDLFNBQWYsQ0FBeUIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNqQyxJQUFGLEtBQVc4QixFQUFmO0FBQUEsU0FBMUIsQ0FBZDs7QUFDQSxZQUFJQyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGdCQUFJLENBQUM1QyxTQUFMLENBQWUrQyxNQUFmLENBQXNCSCxLQUF0QixFQUE2QixDQUE3QjtBQUNEO0FBQ0YsT0FMRDtBQU1ELEtBcElNO0FBcUlQSSxjQXJJTyx3QkFxSU07QUFDWCxhQUFPLEtBQUtoRCxTQUFMLENBQ0wsS0FBS0EsU0FBTCxDQUFlNkMsU0FBZixDQUF5QixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDakMsSUFBRixLQUFXLFNBQWY7QUFBQSxPQUExQixDQURLLEVBRUxDLEtBRkY7QUFHRCxLQXpJTTtBQTBJUG1DLFlBMUlPLG9CQTBJRVAsR0ExSUYsRUEwSU87QUFDWixhQUFPLEtBQUsxQyxTQUFMLENBQWVrRCxNQUFmLENBQXNCLFVBQUNKLENBQUQ7QUFBQSxlQUFPSixHQUFHLENBQUNTLFFBQUosQ0FBYUwsQ0FBQyxDQUFDakMsSUFBZixDQUFQO0FBQUEsT0FBdEIsQ0FBUDtBQUNEO0FBNUlNO0FBVEksQ0FBZixFIiwiZmlsZSI6ImludmVudG9yeX5pdGVtX2RhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxhcnRpY2xlPlxuICAgIDx0YWJsZSBpZD1cIml0ZW1faW5mb1wiIGNsYXNzPVwidG9ya3NfY29tXCI+XG4gICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGl0ZW1fZGF0YVwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICA8dGQgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgPHYtaWNvbj57eyBpdGVtLmljb24gfX08L3YtaWNvbj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGl0bGVcIj57eyBpdGVtLnRpdGxlIH19PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidmFsdWVcIj57eyAhaXRlbS52YWx1ZSA/ICctJyA6IGl0ZW0udmFsdWUgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2FydGljbGU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEl0ZW1EYXRhIGZyb20gXCIuLy4uLy4uL21peGlucy9JdGVtRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW0l0ZW1EYXRhXSxcbiAgcHJvcHM6IFtcIml0ZW1fY29kZVwiLCBcIml0ZW1fcmV2XCJdLFxuICBjb21wb25lbnRzOiB7fSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhd2FpdCB0aGlzLmdldF9pdGVtX2RhdGEoKTtcbiAgICBjb25zdCBvdXRlciA9IFtcImxvdF9udW1cIiwgXCJtaW5pbXVtX3NldFwiXTtcbiAgICB0aGlzLm91dChvdXRlcik7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiA+XG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJhcnRpY2xlXCIsIFtcbiAgICBfYyhcbiAgICAgIFwidGFibGVcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9ya3NfY29tXCIsIGF0dHJzOiB7IGlkOiBcIml0ZW1faW5mb1wiIH0gfSxcbiAgICAgIF92bS5fbChfdm0uaXRlbV9kYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSxcbiAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmljb24pKV0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW192bS5fdihfdm0uX3MoaXRlbS50aXRsZSkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKCFpdGVtLnZhbHVlID8gXCItXCIgOiBpdGVtLnZhbHVlKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXRlbUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmYjAwZTk4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0l0ZW1JbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXRlbUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7Vkljb259KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBmYjAwZTk4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBmYjAwZTk4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JdGVtSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZiMDBlOTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGZiMDBlOTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbmZvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZiMDBlOTgmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1fZGF0YTogbnVsbCxcbiAgICAgIHZlbmRvcjogW10sXG4gICAgfVxuICB9LFxuICBhc3luYyBjcmVhdGVkKCkge1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0X2l0ZW1fZGF0YSgpIHtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXCIvaXRlbXMvaXRlbWluZm8vXCIgKyB0aGlzLml0ZW1fY29kZSArIFwiL1wiICsgdGhpcy5pdGVtX3JldilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuaXRlbV9kYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1iYXJjb2RlXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIumDqOadkOOCt+ODquOCouODq1wiLFxuICAgICAgICAgICAgICBuYW1lOiAnaXRlbV9pZCcsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLml0ZW1faWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWluZm9cIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5ZOB55uu44Kz44O844OJXCIsXG4gICAgICAgICAgICAgIG5hbWU6ICdpdGVtX2NvZGUnLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5pdGVtX2NvZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWFycm93LWFsdC1jaXJjbGUtdXBcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwiUmV2XCIsXG4gICAgICAgICAgICAgIG5hbWU6ICdpdGVtX3JldicsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fY2hrKHJlc3BvbnNlLmRhdGFbMF0uaXRlbV9yZXYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1pbmZvXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuaJi+mFjeOCs+ODvOODiVwiLFxuICAgICAgICAgICAgICBuYW1lOiAnb3JkZXJfY29kZScsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLm9yZGVyX2NvZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWluZm9cIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi6YOo5p2Q5Yy65YiGXCIsXG4gICAgICAgICAgICAgIG5hbWU6ICdpdGVtX2NsYXNzJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0uaXRlbV9jbGFzc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtaWQtYmFkZ2VcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5ZOB5ZCNXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiaXRlbV9uYW1lXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLml0ZW1fbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtaWQtY2FyZFwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLlk4Hnm67lvaLlvI9cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJpdGVtX21vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLml0ZW1fbW9kZWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLW1hcC1tYXJrZWRcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi6KO96YCg5YWDXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwibWFrZXJfbmFtZVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5tYWtlcl9uYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1hcnJvd3MtYWx0LWhcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwiUlRcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJyZWFkX3RpbWVcIixcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0X19jaGsocmVzcG9uc2UuZGF0YVswXS5yZWFkX3RpbWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1jYWxjdWxhdG9yXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuWcqOW6q+aVsFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImxhc3RfbnVtXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fY2hrKHJlc3BvbnNlLmRhdGFbMF0ubGFzdF9udW0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1jYWxjdWxhdG9yXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuS9v+eUqOS6iOe0hOaVsFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImFwcG9fbnVtXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fY2hrKHJlc3BvbnNlLmRhdGFbMF0uYXBwb19udW0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1tYXAtc2lnbnNcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi77ys77yv77y05omL6YWN5pWwXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwibG90X251bVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5sb3RfbnVtXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1tYXAtc2lnbnNcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5pyA5bCP5L+d5oyB5pWwXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwibWluaW11bV9zZXRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0ubWluaW11bV9zZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLW1hcC1zaWduc1wiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLmiYvphY3mlrnms5VcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJvcmRlcl93YXlcIixcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0X19vcmRlcndheShcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhWzBdLmxvdF9udW0sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVswXS5taW5pbXVtX3NldFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLkv53nrqHloLTmiYBcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJsb2NhdGlvblwiLFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRfX2NoayhyZXNwb25zZS5kYXRhWzBdLmxvY2F0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF07XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbMF0udmVuZG9yKSB7XG4gICAgICAgICAgICByZXNwb25zZS5kYXRhWzBdLnZlbmRvci5mb3JFYWNoKG9iID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pdGVtX2RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtbW9uZXktYmlsbC13YXZlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5omL6YWN6YeR6aGNXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJvcmRlcl9wcmljZXNcIixcbiAgICAgICAgICAgICAgICBlZGl0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgXCJbXCIgKyBvYi52ZW5kbmFtZS5jb21fbmFtZSArIFwiXSBcIiArIG9iLnZlbmRvcl9pdGVtX3ByaWNlICsgXCIgwqVcIlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy52ZW5kb3IucHVzaCh7XG4gICAgICAgICAgICAgICAgaXRlbV9pZDogb2IuaXRlbV9pZCxcbiAgICAgICAgICAgICAgICB2ZW5kb3JfY29kZTogb2IudmVuZG9yX2NvZGUsXG4gICAgICAgICAgICAgICAgY29tX25hbWU6IG9iLnZlbmRuYW1lLmNvbV9uYW1lLFxuICAgICAgICAgICAgICAgIHZlbmRvcl9pdGVtX3ByaWNlOiBvYi52ZW5kb3JfaXRlbV9wcmljZSxcbiAgICAgICAgICAgICAgICBvcmRlcl9hZGRfZGF0ZTogb2Iub3JkZXJfYWRkX2RhdGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciA6IFwiICsgZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgIH0sXG4gICAgb3V0KGFycikge1xuICAgICAgYXJyLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbV9kYXRhLmZpbmRJbmRleCh2ID0+IHYubmFtZSA9PT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5pdGVtX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRfc2VyaWFsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbV9kYXRhW1xuICAgICAgICB0aGlzLml0ZW1fZGF0YS5maW5kSW5kZXgodiA9PiB2Lm5hbWUgPT09IFwiaXRlbV9pZFwiKVxuICAgICAgXS52YWx1ZTtcbiAgICB9LFxuICAgIHNlbGVjdGVyKGFycikge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbV9kYXRhLmZpbHRlcigodikgPT4gYXJyLmluY2x1ZGVzKHYubmFtZSkpO1xuICAgIH1cbiAgfSxcbn0iXSwic291cmNlUm9vdCI6IiJ9
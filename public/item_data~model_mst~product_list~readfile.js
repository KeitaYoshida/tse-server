(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item_data~model_mst~product_list~readfile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_ItemData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mixins/ItemData */ "./resources/js/mixins/ItemData.js");
/* harmony import */ var _Henshu_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Henshu/Base */ "./resources/js/components/ItemData/Henshu/Base.vue");
/* harmony import */ var _Henshu_OrderWay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Henshu/OrderWay */ "./resources/js/components/ItemData/Henshu/OrderWay.vue");
/* harmony import */ var _act_ImageUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../act/ImageUpload */ "./resources/js/components/act/ImageUpload.vue");
/* harmony import */ var _Henshu_OrderPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Henshu/OrderPrice */ "./resources/js/components/ItemData/Henshu/OrderPrice.vue");
/* harmony import */ var _com_ComCheckDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../com/ComCheckDialog */ "./resources/js/components/com/ComCheckDialog.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Base: _Henshu_Base__WEBPACK_IMPORTED_MODULE_2__["default"],
    OrderWay: _Henshu_OrderWay__WEBPACK_IMPORTED_MODULE_3__["default"],
    ImageUpload: _act_ImageUpload__WEBPACK_IMPORTED_MODULE_4__["default"],
    OrderPrice: _Henshu_OrderPrice__WEBPACK_IMPORTED_MODULE_5__["default"],
    DelCheck: _com_ComCheckDialog__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [_mixins_ItemData__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    item_code: {
      "default": ""
    },
    item_rev: {
      "default": 0
    },
    del: {
      "default": true
    }
  },
  data: function data() {
    return {
      item_id: "",
      tab: 0,
      lot_data: null,
      del_check_flg: false,
      del_check: {
        title: "部材削除",
        message: "部材データは、形式マスタ、残数管理データ含め、全て削除されます。<br>削除後の取消はできません。<br>本当に削除しますか？"
      }
    };
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var selecter, out;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.get_item_data();

            case 2:
              this.item_id = this.get_serial();
              selecter = ["lot_num", "minimum_set"];
              this.lot_data = this.selecter(selecter);
              out = ["item_id", "item_code", "item_rev", "last_num", "appo_num", "lot_num", "minimum_set", "order_way", "order_prices"];
              this.out(out);

            case 7:
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
  }(),
  methods: {
    up: function () {
      var _up = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ob, id) {
        var _this = this;

        var d;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                d = this.rt__up_data_items(ob, id);
                delete d.order_prices;
                _context2.next = 4;
                return axios.post("/items/update/post/" + id, d).then(function (res) {
                  _this.$emit("pass", {
                    type: "base_data",
                    data: d
                  });
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function up(_x, _x2) {
        return _up.apply(this, arguments);
      }

      return up;
    }(),
    pass: function pass(d) {
      this.$emit("pass", d);
    },
    del_item: function del_item() {
      axios.get("/db/items/delete/item/" + this.item_code + "/" + this.item_rev);
      alert("部材データを削除しました。トップページへ戻ります。");
      this.$router.push({
        path: "/"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item_data", "item_id"],
  data: function data() {
    return {
      submit_text: "データ更新"
    };
  },
  methods: {
    submit: function submit() {
      this.$emit("up", this.item_data, this.item_id);
      this.submit_text = "更新済み";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js");
/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimatch__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["item_id", "vendor"],
  data: function data() {
    return {
      vend_list: null,
      submit_text: "決定"
    };
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(this.vendor);
              _context.next = 3;
              return axios.get("/vendor/list").then(function (res) {
                _this.vend_list = res.data;
              });

            case 3:
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
  }(),
  methods: {
    add: function add() {
      this.vendor.push({
        item_id: this.item_id,
        vendor_code: "",
        com_name: "",
        vendor_item_price: 0,
        order_add_date: 0
      });
    },
    submit: function submit() {
      var _this2 = this;

      var d = this.vendor.filter(function (ar) {
        return ar.vendor_code !== "";
      });
      var f = d.map(function (ar) {
        return {
          item_id: ar.item_id,
          vendor_code: ar.vendor_code,
          vendor_item_price: ar.vendor_item_price,
          order_add_date: ar.order_add_date,
          kako: ar.kako
        };
      });
      axios.post("/vendor-item/up/" + this.item_id, f).then(function (res) {
        console.log(res.data);
        return;
        _this2.submit_text = "更新済み";

        _this2.$emit("pass", {
          type: "order_price",
          data: res.data
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
//
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
  props: ["lot_data", "item_id"],
  data: function data() {
    return {
      redioValue: ["通常手配", "ＬＯＴ手配", "支給品"],
      redio: 0,
      lot_num: 0,
      minimum_set: 0,
      submit_text: "データ更新"
    };
  },
  created: function created() {
    var _this = this;

    this.lot_data.forEach(function (ar) {
      if (ar.name === "lot_num") {
        _this.lot_num = ar.value;
      } else if (ar.name === "minimum_set") {
        _this.minimum_set = ar.value;
      }
    });

    switch (this.lot_num) {
      case -1:
        this.redio = 0;
        break;

      case -2:
        this.redio = 2;
        break;

      default:
        this.redio = 1;
        break;
    }
  },
  methods: {
    change: function change(e) {
      switch (e) {
        case 0:
          this.lot_num = -1;
          this.minimum_set = -1;
          break;

        case 1:
          if (this.lot_num === -1 || this.lot_num === -2) {
            this.lot_num = 0;
            this.minimum_set = 0;
          }

          break;

        case 2:
          this.lot_num = -2;
          this.minimum_set = -1;
          break;
      }
    },
    submit: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var d;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                d = {
                  lot_num: this.lot_num,
                  minimum_set: this.minimum_set
                };
                this.$emit("pass", {
                  type: "order_way",
                  data: d
                });
                _context.next = 4;
                return axios.post("/items/update/post/" + this.item_id, d).then(function (res) {
                  _this2.submit_text = "更新済み";
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/ItemImg.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_my_photos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-my-photos */ "./node_modules/vue-my-photos/dist/lightbox.esm.js");
/* harmony import */ var _mixins_loading64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../mixins/loading64.js */ "./resources/js/mixins/loading64.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_loading64_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    lightbox: vue_my_photos__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    path: String,
    col: {
      "default": "xs3"
    },
    etc: {
      "default": true
    }
  },
  data: function data() {
    return {
      img: "",
      images: [],
      les_cnt: 0,
      big_img: false,
      big_img_64: "",
      big_img_name: "",
      big_img_width: "",
      big_img_height: ""
    };
  },
  created: function created() {
    this.get_file_list();
  },
  methods: {
    get_file_list: function () {
      var _get_file_list = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var get_data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                get_data = {
                  path: this.path
                };
                _context.next = 3;
                return axios.post("/upload/check/items", get_data).then(function (res) {
                  if (!res.data) {
                    return;
                  }

                  _this.images = res.data;
                  _this.les_cnt = 4 - _this.images.length;

                  _this.images.forEach(function (ar) {
                    var i = new Image();
                    i.src = ar.base64;

                    i.onload = function () {
                      ar.height = i.height;
                      ar.width = i.width;
                    };
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get_file_list() {
        return _get_file_list.apply(this, arguments);
      }

      return get_file_list;
    }(),
    view: function view(img) {
      this.big_img = true;
      this.big_img_64 = img.base64;
      this.big_img_name = img.path;
      this.big_img_width = img.width;
      this.big_img_height = img.height;
    },
    close: function close() {
      this.big_img = false;
      this.big_img_64 = "";
      this.big_img_name = "";
      this.big_img_width = "";
      this.big_img_height = "";
    },
    deleteImg: function deleteImg() {
      var _this2 = this;

      var d = {
        path: this.big_img_name
      };
      axios.post("/upload/delete/items", d).then(function (res) {
        console.log(res.data);
        _this2.images = _this2.images.filter(function (ar) {
          return ar.path !== _this2.big_img_name;
        });

        _this2.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/act/ImageUpload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/act/ImageUpload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_ImageUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ImageUtil */ "./resources/js/components/act/lib/ImageUtil.js");
/* harmony import */ var _mixins_loading64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../mixins/loading64.js */ "./resources/js/mixins/loading64.js");
/* harmony import */ var _ItemData_ItemImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ItemData/ItemImg */ "./resources/js/components/ItemData/ItemImg.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_loading64_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    ItemImg: _ItemData_ItemImg__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["item_code", "item_rev"],
  data: function data() {
    return {
      isUploading: true,
      // 画像ファイルアップロード中の判断フラグ
      upimage: {
        fileUrl: "",
        fileName: "",
        blob: null,
        filePath: "",
        setName: "日付時刻 ＋ ランダムな英数値がファイル名として登録されます"
      },
      // 画像ファイル
      fileInfo: {
        before: {
          size: 0
        },
        after: {
          size: 0
        }
      },
      upmessage: false,
      submit_message: "登録",
      path_flg: false,
      name_flg: true,
      item_clear_flg: true
    };
  },
  created: function created() {
    this.getDefaultpath();
  },
  methods: {
    pickFile: function pickFile() {
      this.$refs.image.click();
    },
    getDefaultpath: function getDefaultpath() {
      if (this.item_code && this.item_rev) {
        this.upimage.filePath = "/img/items/" + this.item_code + "/" + this.item_rev + "/";
        this.path_flg = true;
      }
    },
    selectedFile: function () {
      var _selectedFile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var file, compFile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isUploading = true;
                file = e.target.files[0];

                if (file) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.prev = 4;
                _context.next = 7;
                return _lib_ImageUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getCompressImageFileAsync(file);

              case 7:
                compFile = _context.sent;
                //ファイルサイズの表示
                this.fileInfo.before.size = (file.size / 1024 / 1024).toFixed(4);
                this.fileInfo.after.size = (compFile.size / 1024 / 1024).toFixed(4); // 画像情報の設定

                this.upimage.blob = compFile;
                _context.next = 13;
                return _lib_ImageUtil__WEBPACK_IMPORTED_MODULE_1__["default"].getDataUrlFromFile(compFile);

              case 13:
                this.upimage.fileUrl = _context.sent;
                this.upimage.fileName = file.name;
                _context.next = 19;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](4);

              case 19:
                _context.prev = 19;
                this.isUploading = false;
                return _context.finish(19);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 17, 19, 22]]);
      }));

      function selectedFile(_x) {
        return _selectedFile.apply(this, arguments);
      }

      return selectedFile;
    }(),
    submit: function submit() {
      var _this = this;

      this.submit_message = "loading ...";
      this.item_clear_flg = false;

      try {
        var d = {};
        d.base64 = this.upimage.fileUrl;
        d.type = this.upimage.blob.type;
        d.item_code = this.item_code;
        d.item_rev = this.item_rev;
        d.path = "/items/";
        axios.post("/upload/items/image", d).then(function (res) {
          _this.upmessage = true;
          _this.submit_message = "finish!!";
          _this.item_clear_flg = true;
        });
      } catch (err) {
        console.log("er");
        console.log(err);
      }
    },
    close: function close() {
      this.upimage.fileUrl = "";
      this.upimage.fileName = "";
      this.upimage.blob = null;
      this.submit_message = "登録";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComCheckDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComCheckDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      "default": {
        title: "タイトル",
        message: "",
        data_v2: [["title", "value"]]
      }
    }
  },
  created: function created() {
    console.log(this.data);
  },
  methods: {
    submit: function submit() {
      this.$emit("rt", this.data, true);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#henshu #info_area {\n  text-align: center;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n#henshu #info_area span {\n  display: inline-block;\n  min-width: 30%;\n}\n#henshu #info_area span strong {\n  font-size: 2rem;\n}\n#henshu .edit button {\n  margin: 0 auto;\n  width: 80%;\n}\n#henshu .edit.dowble .v-input {\n  margin: 0 auto;\n  width: 95%;\n}\n#henshu .v-card__title {\n  padding-left: 2.5rem;\n}\n#henshu .v-card__title .v-icon {\n  padding-right: 0.8rem;\n}\n#henshu .menu .v-tabs__bar {\n  margin-bottom: 1.5rem;\n}\n#henshu #etc-button {\n  text-align: center;\n}\n#henshu #etc-button i {\n  padding-right: 1rem;\n}\n#henshu #etc-button button {\n  width: 60%;\n  margin-top: 2rem;\n  font-size: 1.5rem;\n}\n#henshu .submit {\n  margin: 0 auto;\n  width: 80%;\n}\n.mini {\n  padding: 0 1rem;\n  font-size: 1rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".edit .v-icon[data-v-9fe27eec] {\n  font-size: 12px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#images[data-v-2808a049] {\n  width: 90%;\n  max-width: 700px;\n  margin: 0 auto;\n}\n#images .flex[data-v-2808a049] {\n  padding: 1rem;\n}\n#images .flex .square[data-v-2808a049] {\n  position: relative;\n  width: 100%;\n}\n#images .flex .square[data-v-2808a049]::after {\n  padding-top: 100%;\n  display: block;\n  content: \"\";\n}\n#images .flex .square .content[data-v-2808a049] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border: 1px solid black;\n  text-align: center;\n}\n#images .flex .square .content[data-v-2808a049]::before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#images .v-dialog {\n  width: auto !important;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "h1[data-v-6ec3e5a8] {\n  font-size: 1.5rem;\n}\n.back[data-v-6ec3e5a8] {\n  background-color: #fff;\n}\n.del-info[data-v-6ec3e5a8] {\n  text-align: center;\n}\n.submit-btn[data-v-6ec3e5a8] {\n  width: 100%;\n}\n.message[data-v-6ec3e5a8] {\n  font-size: 0.8rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Henshu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemImg.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu.vue?vue&type=template&id=1373f506&v-if=item_data&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu.vue?vue&type=template&id=1373f506&v-if=item_data& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "henshu" } },
    [
      _c(
        "v-card-title",
        { staticClass: "headline" },
        [
          _vm.i
            ? _c(
                "v-chip",
                {
                  class: "chip " + _vm.i.item_class_val.custom,
                  attrs: { outline: "" }
                },
                [_vm._v(_vm._s(_vm.i.item_class_val.value))]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("span", { attrs: { id: "item_code" } }, [
            _vm._v(_vm._s(_vm.item_code))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "mini", attrs: { id: "item_rev" } }, [
            _vm._v(_vm._s(Number(_vm.item_rev).numToRev()))
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.del
            ? [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "error", outline: "" },
                    on: {
                      click: function($event) {
                        _vm.del_check_flg = !_vm.del_check_flg
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("delete")]), _vm._v("削除\n      ")],
                  1
                )
              ]
            : [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "error", outline: "", disabled: "" },
                    on: {
                      click: function($event) {
                        _vm.del_check_flg = !_vm.del_check_flg
                      }
                    }
                  },
                  [_c("v-icon", [_vm._v("delete")]), _vm._v("削除\n      ")],
                  1
                )
              ]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-tabs",
            {
              staticClass: "menu",
              attrs: { "slider-color": "primary", "fixed-tabs": "" },
              model: {
                value: _vm.tab,
                callback: function($$v) {
                  _vm.tab = $$v
                },
                expression: "tab"
              }
            },
            [
              _c("v-tab", [_vm._v("基本情報")]),
              _vm._v(" "),
              _c("v-tab", [_vm._v("手配方法")]),
              _vm._v(" "),
              _c("v-tab", [_vm._v("金額")]),
              _vm._v(" "),
              _c("v-tab", [_vm._v("画像")]),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _vm.item_data
                    ? _c("Base", {
                        attrs: {
                          item_data: _vm.item_data,
                          item_id: _vm.item_id
                        },
                        on: { up: _vm.up, pass: _vm.pass }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _vm.lot_data
                    ? _c("OrderWay", {
                        attrs: { lot_data: _vm.lot_data, item_id: _vm.item_id },
                        on: { pass: _vm.pass }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _c("OrderPrice", {
                    attrs: { item_id: _vm.item_id, vendor: _vm.vendor },
                    on: { pass: _vm.pass }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _c("ImageUpload", {
                    attrs: { item_code: _vm.item_code, item_rev: _vm.item_rev }
                  })
                ],
                1
              )
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
          attrs: { width: "50%", transition: "dialog-transition" },
          model: {
            value: _vm.del_check_flg,
            callback: function($$v) {
              _vm.del_check_flg = $$v
            },
            expression: "del_check_flg"
          }
        },
        [
          _c("DelCheck", {
            attrs: { data: _vm.del_check },
            on: {
              rt: function($event) {
                return _vm.del_item()
              }
            }
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=template&id=9fe27eec&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=template&id=9fe27eec&scoped=true& ***!
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
  return _vm.item_data
    ? _c(
        "v-form",
        { ref: "item_data", staticClass: "edit", attrs: { id: "item_data" } },
        [
          _c(
            "v-layout",
            { attrs: { wrap: "" } },
            _vm._l(_vm.item_data, function(item, index) {
              return _c(
                "v-flex",
                { key: index, staticClass: "px-4", attrs: { xs6: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      name: item.name,
                      "prepend-inner-icon": item.icon,
                      label: item.title,
                      id: item.name,
                      disabled: item.edit,
                      small: ""
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
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "submit",
              attrs: {
                color: "success",
                form: "item_data",
                flat: "",
                large: "",
                block: "",
                outline: ""
              },
              on: {
                click: function($event) {
                  return _vm.submit()
                }
              }
            },
            [_vm._v(_vm._s(_vm.submit_text))]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=template&id=258d6294&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=template&id=258d6294& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.vend_list
    ? _c(
        "v-container",
        { staticClass: "edit dowble", attrs: { "grid-list-xs": "" } },
        [
          _c(
            "v-btn",
            {
              attrs: {
                color: "primary",
                flat: "",
                large: "",
                block: "",
                outline: ""
              },
              on: { click: _vm.add }
            },
            [_vm._v("追加")]
          ),
          _vm._v(" "),
          _vm._l(_vm.vendor, function(item, index) {
            return _c(
              "v-layout",
              {
                key: index,
                attrs: { row: "", wrap: "", "mt-5": "", "mb-5": "" }
              },
              [
                _c(
                  "v-flex",
                  { attrs: { xs3: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        items: _vm.vend_list,
                        "item-text": "com_name",
                        "item-value": "vendor_code",
                        label: "取引先名",
                        "prepend-inner-icon": "far fa-building"
                      },
                      model: {
                        value: item.vendor_code,
                        callback: function($$v) {
                          _vm.$set(item, "vendor_code", $$v)
                        },
                        expression: "item.vendor_code"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs3: "" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "加工内容" },
                      model: {
                        value: item.kako,
                        callback: function($$v) {
                          _vm.$set(item, "kako", $$v)
                        },
                        expression: "item.kako"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { staticClass: "pl-3", attrs: { xs3: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        name: "price",
                        label: "金額",
                        id: "price_" + index,
                        "prepend-inner-icon": "fas fa-money-bill-wave"
                      },
                      model: {
                        value: item.vendor_item_price,
                        callback: function($$v) {
                          _vm.$set(item, "vendor_item_price", $$v)
                        },
                        expression: "item.vendor_item_price"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { staticClass: "pl-3", attrs: { xs2: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        name: "add_date",
                        label: "調整日数",
                        hint: "一括手配時に入力値の分の日数を加算します",
                        type: "number",
                        id: "add_date" + index,
                        "prepend-inner-icon": "fas fa-money-bill-wave"
                      },
                      model: {
                        value: item.order_add_date,
                        callback: function($$v) {
                          _vm.$set(item, "order_add_date", $$v)
                        },
                        expression: "item.order_add_date"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs1: "" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          color: "primary",
                          flat: "",
                          icon: "",
                          large: ""
                        },
                        on: {
                          click: function($event) {
                            return _vm.vendor.splice(index, 1)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("far fa-trash-alt")])],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                color: "success",
                flat: "",
                large: "",
                block: "",
                outline: ""
              },
              on: { click: _vm.submit }
            },
            [_vm._v(_vm._s(_vm.submit_text))]
          )
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=template&id=cfa52c0c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=template&id=cfa52c0c& ***!
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
  return _vm.lot_data
    ? _c(
        "v-form",
        {
          staticClass: "edit",
          attrs: { id: "lot" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "v-radio-group",
            {
              model: {
                value: _vm.redio,
                callback: function($$v) {
                  _vm.redio = $$v
                },
                expression: "redio"
              }
            },
            _vm._l(_vm.redioValue, function(d, n) {
              return _c("v-radio", {
                key: n,
                attrs: { label: d, value: n },
                on: { change: _vm.change }
              })
            }),
            1
          ),
          _vm._v(" "),
          _c("v-expand-x-transition", [
            _vm.redio === 1
              ? _c(
                  "div",
                  [
                    _c("v-text-field", {
                      attrs: {
                        name: "lot_num",
                        label: "ＬＯＴ手配数",
                        id: "lot_num"
                      },
                      model: {
                        value: _vm.lot_num,
                        callback: function($$v) {
                          _vm.lot_num = $$v
                        },
                        expression: "lot_num"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                      attrs: {
                        name: "minimum_set",
                        label: "最小保持数",
                        id: "minimum_set"
                      },
                      model: {
                        value: _vm.minimum_set,
                        callback: function($$v) {
                          _vm.minimum_set = $$v
                        },
                        expression: "minimum_set"
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "submit",
              attrs: {
                color: "success",
                type: "submit",
                form: "lot",
                flat: "",
                large: "",
                block: "",
                outline: ""
              }
            },
            [_vm._v(_vm._s(_vm.submit_text))]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=template&id=2808a049&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemData/ItemImg.vue?vue&type=template&id=2808a049&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.images
    ? _c(
        "v-layout",
        { attrs: { row: "", wrap: "", id: "images" } },
        [
          _vm._l(_vm.images, function(image, index) {
            return _c(
              "v-flex",
              { key: index, class: _vm.col },
              [
                _c(
                  "v-card",
                  {
                    staticClass: "square",
                    attrs: { hover: "" },
                    on: {
                      click: function($event) {
                        return _vm.view(image)
                      }
                    }
                  },
                  [
                    _c("v-img", {
                      staticClass: "content",
                      attrs: { src: image.base64, "lazy-src": _vm.loading64 }
                    })
                  ],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _vm.les_cnt > 0 && _vm.etc
            ? _vm._l(_vm.les_cnt, function(n, index) {
                return _c(
                  "v-flex",
                  { key: "no" + index, class: _vm.col },
                  [
                    _c(
                      "v-card",
                      { staticClass: "square", attrs: { dark: "" } },
                      [
                        _c(
                          "span",
                          { staticClass: "content" },
                          [
                            _c("v-icon", [_vm._v("fas fa-video-slash")]),
                            _vm._v(" "),
                            _c("span", [_vm._v("no image")])
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                transition: "dialog-transition",
                dark: "",
                width: _vm.big_img_width,
                height: _vm.big_img_height
              },
              model: {
                value: _vm.big_img,
                callback: function($$v) {
                  _vm.big_img = $$v
                },
                expression: "big_img"
              }
            },
            [
              _c(
                "v-toolbar",
                { attrs: { color: "primary" } },
                [
                  _vm._v("\n      File\n      "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { flat: "", dark: "" }, on: { click: _vm.close } },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("far fa-times-circle")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("閉じる")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", dark: "" },
                      on: { click: _vm.deleteImg }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("far fa-trash-alt")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("削除")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("img", { attrs: { src: _vm.big_img_64 } })
            ],
            1
          )
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/act/ImageUpload.vue?vue&type=template&id=91ae7bb8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/act/ImageUpload.vue?vue&type=template&id=91ae7bb8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-layout",
        { staticClass: "edit", attrs: { "text-xs-center": "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", "mb-3": "" } },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "primary",
                    disabled: _vm.isUploading,
                    id: "submit"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v(_vm._s(_vm.submit_message))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("v-text-field", {
                attrs: {
                  name: "select_image",
                  label: "画像選択",
                  id: "select_image",
                  color: "primary",
                  "prepend-inner-icon": "attach_file"
                },
                on: { click: _vm.pickFile },
                model: {
                  value: _vm.upimage.fileName,
                  callback: function($$v) {
                    _vm.$set(_vm.upimage, "fileName", $$v)
                  },
                  expression: "upimage.fileName"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  name: "file_path",
                  label: "保存先",
                  id: "seve_dir",
                  "prepend-inner-icon": "edit",
                  disabled: _vm.path_flg,
                  hint:
                    "/public/img の下に保存されます(/storage/app/public/img)"
                },
                model: {
                  value: _vm.upimage.filePath,
                  callback: function($$v) {
                    _vm.$set(_vm.upimage, "filePath", $$v)
                  },
                  expression: "upimage.filePath"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  name: "file_name",
                  label: "ファイル名",
                  id: "file_name",
                  "prepend-inner-icon": "fas fa-save",
                  disabled: _vm.name_flg
                },
                model: {
                  value: _vm.upimage.setName,
                  callback: function($$v) {
                    _vm.$set(_vm.upimage, "setName", $$v)
                  },
                  expression: "upimage.setName"
                }
              }),
              _vm._v(" "),
              _c("input", {
                ref: "image",
                staticStyle: { display: "none" },
                attrs: {
                  type: "file",
                  accept: "image/jpeg, image/jpg, image/png"
                },
                on: { change: _vm.selectedFile }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _vm.upimage.fileUrl
                ? _c("v-img", {
                    attrs: {
                      src: _vm.upimage.fileUrl,
                      "aspect-ratio": "2",
                      contain: true
                    }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm.item_clear_flg
            ? _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [_c("ItemImg", { attrs: { path: _vm.upimage.filePath } })],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px", height: "300px;" },
          on: { input: _vm.close },
          model: {
            value: _vm.upmessage,
            callback: function($$v) {
              _vm.upmessage = $$v
            },
            expression: "upmessage"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { "pa-2": "" } },
            [
              _c(
                "v-alert",
                { attrs: { type: "info", value: true, outline: "" } },
                [_c("span", [_vm._v("画像登録処理が完了しました")])]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComCheckDialog.vue?vue&type=template&id=6ec3e5a8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/com/ComCheckDialog.vue?vue&type=template&id=6ec3e5a8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "back",
      attrs: { type: "warning", value: true, outline: "" }
    },
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
                  _vm._l(_vm.data.data_v2, function(item, index) {
                    return [
                      _c(
                        "v-flex",
                        {
                          key: "title" + index,
                          staticClass: "mb-2",
                          attrs: { xs6: "" }
                        },
                        [_vm._v(_vm._s(item[0]))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        {
                          key: "column" + index,
                          staticClass: "mb-2",
                          attrs: { xs6: "" }
                        },
                        [_vm._v(_vm._s(item[1]))]
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
                          attrs: { color: "warning", outline: "" },
                          on: {
                            click: function($event) {
                              return _vm.submit()
                            }
                          }
                        },
                        [_vm._v("OK")]
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

/***/ "./resources/js/components/ItemData/Henshu.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Henshu_vue_vue_type_template_id_1373f506_v_if_item_data___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Henshu.vue?vue&type=template&id=1373f506&v-if=item_data& */ "./resources/js/components/ItemData/Henshu.vue?vue&type=template&id=1373f506&v-if=item_data&");
/* harmony import */ var _Henshu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Henshu.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemData/Henshu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Henshu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Henshu.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Henshu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Henshu_vue_vue_type_template_id_1373f506_v_if_item_data___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Henshu_vue_vue_type_template_id_1373f506_v_if_item_data___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VChip"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VDialog"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VSpacer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VSpacer"],VTab: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTab"],VTabItem: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabItem"],VTabs: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTabs"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemData/Henshu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Henshu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Henshu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu.vue?vue&type=template&id=1373f506&v-if=item_data&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu.vue?vue&type=template&id=1373f506&v-if=item_data& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_template_id_1373f506_v_if_item_data___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Henshu.vue?vue&type=template&id=1373f506&v-if=item_data& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu.vue?vue&type=template&id=1373f506&v-if=item_data&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_template_id_1373f506_v_if_item_data___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Henshu_vue_vue_type_template_id_1373f506_v_if_item_data___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/Base.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/Base.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_vue_vue_type_template_id_9fe27eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.vue?vue&type=template&id=9fe27eec&scoped=true& */ "./resources/js/components/ItemData/Henshu/Base.vue?vue&type=template&id=9fe27eec&scoped=true&");
/* harmony import */ var _Base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemData/Henshu/Base.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Base_vue_vue_type_style_index_0_id_9fe27eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true& */ "./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Base_vue_vue_type_template_id_9fe27eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Base_vue_vue_type_template_id_9fe27eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9fe27eec",
  null
  
)

/* vuetify-loader */






_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VForm: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VForm"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemData/Henshu/Base.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/Base.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/Base.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Base.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_9fe27eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=style&index=0&id=9fe27eec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_9fe27eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_9fe27eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_9fe27eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_9fe27eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_9fe27eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/Base.vue?vue&type=template&id=9fe27eec&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/Base.vue?vue&type=template&id=9fe27eec&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_template_id_9fe27eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Base.vue?vue&type=template&id=9fe27eec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/Base.vue?vue&type=template&id=9fe27eec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_template_id_9fe27eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_template_id_9fe27eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/OrderPrice.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/OrderPrice.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderPrice_vue_vue_type_template_id_258d6294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderPrice.vue?vue&type=template&id=258d6294& */ "./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=template&id=258d6294&");
/* harmony import */ var _OrderPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderPrice.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderPrice_vue_vue_type_template_id_258d6294___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderPrice_vue_vue_type_template_id_258d6294___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VLayout"],VSelect: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VSelect"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemData/Henshu/OrderPrice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderPrice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPrice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=template&id=258d6294&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=template&id=258d6294& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPrice_vue_vue_type_template_id_258d6294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderPrice.vue?vue&type=template&id=258d6294& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/OrderPrice.vue?vue&type=template&id=258d6294&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPrice_vue_vue_type_template_id_258d6294___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderPrice_vue_vue_type_template_id_258d6294___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/OrderWay.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/OrderWay.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderWay_vue_vue_type_template_id_cfa52c0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderWay.vue?vue&type=template&id=cfa52c0c& */ "./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=template&id=cfa52c0c&");
/* harmony import */ var _OrderWay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderWay.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderWay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderWay_vue_vue_type_template_id_cfa52c0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderWay_vue_vue_type_template_id_cfa52c0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VExpandXTransition: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VExpandXTransition"],VForm: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VForm"],VRadio: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VRadio"],VRadioGroup: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VRadioGroup"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemData/Henshu/OrderWay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderWay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderWay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderWay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=template&id=cfa52c0c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=template&id=cfa52c0c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderWay_vue_vue_type_template_id_cfa52c0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderWay.vue?vue&type=template&id=cfa52c0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/Henshu/OrderWay.vue?vue&type=template&id=cfa52c0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderWay_vue_vue_type_template_id_cfa52c0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderWay_vue_vue_type_template_id_cfa52c0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ItemData/ItemImg.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ItemData/ItemImg.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemImg_vue_vue_type_template_id_2808a049_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemImg.vue?vue&type=template&id=2808a049&scoped=true& */ "./resources/js/components/ItemData/ItemImg.vue?vue&type=template&id=2808a049&scoped=true&");
/* harmony import */ var _ItemImg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemImg.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemData/ItemImg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ItemImg_vue_vue_type_style_index_0_id_2808a049_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true& */ "./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true&");
/* harmony import */ var _ItemImg_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemImg.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ItemImg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemImg_vue_vue_type_template_id_2808a049_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemImg_vue_vue_type_template_id_2808a049_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2808a049",
  null
  
)

/* vuetify-loader */










_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_5___default()(component, {VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VCard"],VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VImg: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VImg"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VLayout"],VSpacer: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VToolbar: vuetify_lib__WEBPACK_IMPORTED_MODULE_6__["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemData/ItemImg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemData/ItemImg.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ItemData/ItemImg.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemImg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_0_id_2808a049_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=0&id=2808a049&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_0_id_2808a049_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_0_id_2808a049_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_0_id_2808a049_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_0_id_2808a049_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_0_id_2808a049_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemImg.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ItemData/ItemImg.vue?vue&type=template&id=2808a049&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ItemData/ItemImg.vue?vue&type=template&id=2808a049&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_template_id_2808a049_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemImg.vue?vue&type=template&id=2808a049&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemData/ItemImg.vue?vue&type=template&id=2808a049&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_template_id_2808a049_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImg_vue_vue_type_template_id_2808a049_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/act/ImageUpload.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/act/ImageUpload.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageUpload_vue_vue_type_template_id_91ae7bb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageUpload.vue?vue&type=template&id=91ae7bb8&scoped=true& */ "./resources/js/components/act/ImageUpload.vue?vue&type=template&id=91ae7bb8&scoped=true&");
/* harmony import */ var _ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/act/ImageUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageUpload_vue_vue_type_template_id_91ae7bb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageUpload_vue_vue_type_template_id_91ae7bb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91ae7bb8",
  null
  
)

/* vuetify-loader */










_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VCard"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VDialog: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VDialog"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VFlex"],VImg: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VImg"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VLayout"],VTextField: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/act/ImageUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/act/ImageUpload.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/act/ImageUpload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/act/ImageUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/act/ImageUpload.vue?vue&type=template&id=91ae7bb8&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/act/ImageUpload.vue?vue&type=template&id=91ae7bb8&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_91ae7bb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageUpload.vue?vue&type=template&id=91ae7bb8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/act/ImageUpload.vue?vue&type=template&id=91ae7bb8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_91ae7bb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageUpload_vue_vue_type_template_id_91ae7bb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/act/lib/ImageUtil.js":
/*!******************************************************!*\
  !*** ./resources/js/components/act/lib/ImageUtil.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-image-compression */ "./node_modules/browser-image-compression/dist/browser-image-compression.mjs");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  // アップロードされた画像ファイルを取得
  getCompressImageFileAsync: function () {
    var _getCompressImageFileAsync = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {
      var options;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = {
                maxSizeMB: 2,
                // 最大ファイルサイズ
                maxWidthOrHeight: 1200 // 最大画像幅もしくは高さ

              };
              _context.prev = 1;
              _context.next = 4;
              return Object(browser_image_compression__WEBPACK_IMPORTED_MODULE_1__["default"])(file, options);

            case 4:
              return _context.abrupt("return", _context.sent);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              console.error("getCompressImageFileAsync is error", _context.t0);
              throw _context.t0;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    function getCompressImageFileAsync(_x) {
      return _getCompressImageFileAsync.apply(this, arguments);
    }

    return getCompressImageFileAsync;
  }(),
  // プレビュー表示用のdataurlを取得
  getDataUrlFromFile: function () {
    var _getDataUrlFromFile = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(file) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return browser_image_compression__WEBPACK_IMPORTED_MODULE_1__["default"].getDataUrlFromFile(file);

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.error("getDataUrlFromFile is error", _context2.t0);
              throw _context2.t0;

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));

    function getDataUrlFromFile(_x2) {
      return _getDataUrlFromFile.apply(this, arguments);
    }

    return getDataUrlFromFile;
  }()
});

/***/ }),

/***/ "./resources/js/components/com/ComCheckDialog.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/com/ComCheckDialog.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComCheckDialog_vue_vue_type_template_id_6ec3e5a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComCheckDialog.vue?vue&type=template&id=6ec3e5a8&scoped=true& */ "./resources/js/components/com/ComCheckDialog.vue?vue&type=template&id=6ec3e5a8&scoped=true&");
/* harmony import */ var _ComCheckDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComCheckDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/com/ComCheckDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComCheckDialog_vue_vue_type_style_index_0_id_6ec3e5a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true& */ "./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComCheckDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComCheckDialog_vue_vue_type_template_id_6ec3e5a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComCheckDialog_vue_vue_type_template_id_6ec3e5a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ec3e5a8",
  null
  
)

/* vuetify-loader */





_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAlert: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VAlert"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/com/ComCheckDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/com/ComCheckDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/com/ComCheckDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComCheckDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComCheckDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_style_index_0_id_6ec3e5a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComCheckDialog.vue?vue&type=style&index=0&id=6ec3e5a8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_style_index_0_id_6ec3e5a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_style_index_0_id_6ec3e5a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_style_index_0_id_6ec3e5a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_style_index_0_id_6ec3e5a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_style_index_0_id_6ec3e5a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/com/ComCheckDialog.vue?vue&type=template&id=6ec3e5a8&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/com/ComCheckDialog.vue?vue&type=template&id=6ec3e5a8&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_template_id_6ec3e5a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComCheckDialog.vue?vue&type=template&id=6ec3e5a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/com/ComCheckDialog.vue?vue&type=template&id=6ec3e5a8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_template_id_6ec3e5a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComCheckDialog_vue_vue_type_template_id_6ec3e5a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
      i: null,
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
                return axios.get('/items/iteminfo/' + this.item_code + '/' + this.item_rev).then(function (response) {
                  _this.i = response.data[0];
                  _this.item_data = [{
                    icon: 'fas fa-barcode',
                    title: '部材シリアル',
                    name: 'item_id',
                    value: response.data[0].item_id
                  }, {
                    icon: 'fas fa-info',
                    title: '品目コード',
                    name: 'item_code',
                    value: response.data[0].item_code
                  }, {
                    icon: 'fas fa-arrow-alt-circle-up',
                    title: 'Rev',
                    name: 'item_rev',
                    value: _this.get__chk(response.data[0].item_rev)
                  }, {
                    icon: 'fas fa-info',
                    title: '手配コード',
                    name: 'order_code',
                    value: response.data[0].order_code
                  }, {
                    icon: 'fas fa-id-badge',
                    title: '品名',
                    name: 'item_name',
                    value: response.data[0].item_name
                  }, {
                    icon: 'fas fa-id-card',
                    title: '品目形式',
                    name: 'item_model',
                    value: response.data[0].item_model
                  }, {
                    icon: 'fas fa-map-marked',
                    title: '製造元',
                    name: 'maker_name',
                    value: response.data[0].maker_name
                  }, {
                    icon: 'fas fa-arrows-alt-h',
                    title: 'RT',
                    name: 'read_time',
                    value: _this.get__chk(response.data[0].read_time)
                  }, {
                    icon: 'fas fa-calculator',
                    title: '在庫数',
                    name: 'last_num',
                    value: _this.get__chk(response.data[0].last_num)
                  }, {
                    icon: 'fas fa-calculator',
                    title: '使用予約数',
                    name: 'appo_num',
                    value: _this.get__chk(response.data[0].appo_num)
                  }, {
                    icon: 'fas fa-map-signs',
                    title: 'ＬＯＴ手配数',
                    name: 'lot_num',
                    value: response.data[0].lot_num
                  }, {
                    icon: 'fas fa-map-signs',
                    title: '最小保持数',
                    name: 'minimum_set',
                    value: response.data[0].minimum_set
                  }, {
                    icon: 'fas fa-map-signs',
                    title: '手配方法',
                    name: 'order_way',
                    value: _this.get__orderway(response.data[0].lot_num, response.data[0].minimum_set)
                  }, {
                    icon: 'fas fa-map-marker-alt',
                    title: '保管場所',
                    name: 'location',
                    value: _this.get__chk(response.data[0].location)
                  }];

                  if (response.data[0].vendor) {
                    response.data[0].vendor.forEach(function (ob) {
                      _this.item_data.push({
                        icon: 'fas fa-money-bill-wave',
                        title: '手配金額',
                        name: 'order_prices',
                        edit: true,
                        value: '[' + ob.vendname.com_name + '] ' + ob.vendor_item_price + ' ¥'
                      });

                      _this.vendor.push({
                        item_id: ob.item_id,
                        vendor_code: ob.vendor_code,
                        com_name: ob.vendname.com_name,
                        vendor_item_price: ob.vendor_item_price,
                        order_add_date: ob.order_add_date,
                        kako: ob.kako
                      });
                    });
                  }
                })["catch"](function (error) {
                  console.log('Error : ' + error);
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
        return v.name === 'item_id';
      })].value;
    },
    selecter: function selecter(arr) {
      return this.item_data.filter(function (v) {
        return arr.includes(v.name);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/loading64.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/loading64.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QDKRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAARAAAAcgEyAAIAAAAUAAAAhIdpAAQAAAABAAAAmAAAAAAAAABIAAAAAQAAAEgAAAABUGl4ZWxtYXRvciAzLjguNAAAMjAxOTowNjoxNCAxMDowNjo5OAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAADIKADAAQAAAABAAADIAAAAAD/4QmSaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJQaXhlbG1hdG9yIDMuOC40IiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNi0xNFQxMDowNjo5OCIvPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz4A/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQE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"
    };
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L0Jhc2UudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlcldheS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tQ2hlY2tEaWFsb2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/Yjg2YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/OGFhNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT9mYTQ4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlP2QxMWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT9mNzI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/MzhjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/MGE0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT80ZDljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlP2ZhY2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT8wMjQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/Y2VmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/MDI3YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/ZGM3YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlPzZkMDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/MTY5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlP2U3MjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT80NDgwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1LnZ1ZT9mNmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/ZGIzNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUudnVlPzQ0ZDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L0Jhc2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT81NjMyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT85YTRmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT9kNWM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlclByaWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/MDhiZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/MGYwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlcldheS52dWU/NjhjMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlPzNjZjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/MjQ0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT84N2IzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlPzkyMDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/ODdjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjdC9JbWFnZVVwbG9hZC52dWU/ZTczOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlP2I5NzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWN0L2xpYi9JbWFnZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tQ2hlY2tEaWFsb2cudnVlP2UxODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT81OWVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21DaGVja0RpYWxvZy52dWU/NGZmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL0l0ZW1EYXRhLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvbG9hZGluZzY0LmpzIl0sIm5hbWVzIjpbImdldENvbXByZXNzSW1hZ2VGaWxlQXN5bmMiLCJmaWxlIiwib3B0aW9ucyIsIm1heFNpemVNQiIsIm1heFdpZHRoT3JIZWlnaHQiLCJpbWFnZUNvbXByZXNzaW9uIiwiY29uc29sZSIsImVycm9yIiwiZ2V0RGF0YVVybEZyb21GaWxlIiwiZGF0YSIsImkiLCJpdGVtX2RhdGEiLCJ2ZW5kb3IiLCJjcmVhdGVkIiwibWV0aG9kcyIsImdldF9pdGVtX2RhdGEiLCJheGlvcyIsImdldCIsIml0ZW1fY29kZSIsIml0ZW1fcmV2IiwidGhlbiIsInJlc3BvbnNlIiwiaWNvbiIsInRpdGxlIiwibmFtZSIsInZhbHVlIiwiaXRlbV9pZCIsImdldF9fY2hrIiwib3JkZXJfY29kZSIsIml0ZW1fbmFtZSIsIml0ZW1fbW9kZWwiLCJtYWtlcl9uYW1lIiwicmVhZF90aW1lIiwibGFzdF9udW0iLCJhcHBvX251bSIsImxvdF9udW0iLCJtaW5pbXVtX3NldCIsImdldF9fb3JkZXJ3YXkiLCJsb2NhdGlvbiIsImZvckVhY2giLCJvYiIsInB1c2giLCJlZGl0IiwidmVuZG5hbWUiLCJjb21fbmFtZSIsInZlbmRvcl9pdGVtX3ByaWNlIiwidmVuZG9yX2NvZGUiLCJvcmRlcl9hZGRfZGF0ZSIsImtha28iLCJsb2ciLCJvdXQiLCJhcnIiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwidiIsInNwbGljZSIsImdldF9zZXJpYWwiLCJzZWxlY3RlciIsImZpbHRlciIsImluY2x1ZGVzIiwibG9hZGluZzY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSw4REFEQTtBQUVBLHNFQUZBO0FBR0EseUVBSEE7QUFJQSwwRUFKQTtBQUtBO0FBTEEsR0FEQTtBQVFBLG9FQVJBO0FBU0E7QUFDQTtBQUNBO0FBREEsS0FEQTtBQUlBO0FBQ0E7QUFEQSxLQUpBO0FBT0E7QUFDQTtBQURBO0FBUEEsR0FUQTtBQW9CQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxZQUZBO0FBR0Esb0JBSEE7QUFJQSwwQkFKQTtBQUtBO0FBQ0EscUJBREE7QUFFQSxpQkFDQTtBQUhBO0FB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QkFDTjtBQUNMLFdBQU87QUFDTG9ELGVBQVMsRUFBRTtBQUROLEtBQVA7QUFHRDtBQUxZLENBQWYsRSIsImZpbGUiOiJpdGVtX2RhdGF+bW9kZWxfbXN0fnByb2R1Y3RfbGlzdH5yZWFkZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSB2LWlmPVwiaXRlbV9kYXRhXCI+XG4gIDx2LWNhcmQgaWQ9XCJoZW5zaHVcIj5cbiAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwiaGVhZGxpbmVcIj5cbiAgICAgIDx2LWNoaXBcbiAgICAgICAgb3V0bGluZVxuICAgICAgICB2LWlmPVwiaVwiXG4gICAgICAgIDpjbGFzcz1cIidjaGlwICcgKyBpLml0ZW1fY2xhc3NfdmFsLmN1c3RvbVwiXG4gICAgICA+e3sgaS5pdGVtX2NsYXNzX3ZhbC52YWx1ZSB9fTwvdi1jaGlwPlxuICAgICAgPHNwYW4gaWQ9XCJpdGVtX2NvZGVcIj57eyBpdGVtX2NvZGUgfX08L3NwYW4+XG4gICAgICA8c3BhbiBpZD1cIml0ZW1fcmV2XCIgY2xhc3M9XCJtaW5pXCI+e3sgTnVtYmVyKGl0ZW1fcmV2KS5udW1Ub1JldigpIH19PC9zcGFuPlxuICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImRlbFwiPlxuICAgICAgICA8di1idG4gY29sb3I9XCJlcnJvclwiIG91dGxpbmUgQGNsaWNrPVwiZGVsX2NoZWNrX2ZsZz0hZGVsX2NoZWNrX2ZsZ1wiPlxuICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+5YmK6ZmkXG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgPHYtYnRuIGNvbG9yPVwiZXJyb3JcIiBvdXRsaW5lIEBjbGljaz1cImRlbF9jaGVja19mbGc9IWRlbF9jaGVja19mbGdcIiBkaXNhYmxlZD5cbiAgICAgICAgICA8di1pY29uPmRlbGV0ZTwvdi1pY29uPuWJiumZpFxuICAgICAgICA8L3YtYnRuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3YtY2FyZC10aXRsZT5cbiAgICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgICA8di10YWJzIHYtbW9kZWw9XCJ0YWJcIiBzbGlkZXItY29sb3I9XCJwcmltYXJ5XCIgZml4ZWQtdGFicyBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgPHYtdGFiPuWfuuacrOaDheWgsTwvdi10YWI+XG4gICAgICAgIDx2LXRhYj7miYvphY3mlrnms5U8L3YtdGFiPlxuICAgICAgICA8di10YWI+6YeR6aGNPC92LXRhYj5cbiAgICAgICAgPHYtdGFiPueUu+WDjzwvdi10YWI+XG4gICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgIDxCYXNlIDppdGVtX2RhdGE9XCJpdGVtX2RhdGFcIiA6aXRlbV9pZD1cIml0ZW1faWRcIiB2LWlmPVwiaXRlbV9kYXRhXCIgQHVwPVwidXBcIiBAcGFzcz1cInBhc3NcIiAvPlxuICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgIDxPcmRlcldheSA6bG90X2RhdGE9XCJsb3RfZGF0YVwiIDppdGVtX2lkPVwiaXRlbV9pZFwiIHYtaWY9XCJsb3RfZGF0YVwiIEBwYXNzPVwicGFzc1wiIC8+XG4gICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgPE9yZGVyUHJpY2UgOml0ZW1faWQ9XCJpdGVtX2lkXCIgOnZlbmRvcj1cInZlbmRvclwiIEBwYXNzPVwicGFzc1wiPjwvT3JkZXJQcmljZT5cbiAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICA8di10YWItaXRlbT5cbiAgICAgICAgICA8SW1hZ2VVcGxvYWQgOml0ZW1fY29kZT1cIml0ZW1fY29kZVwiIDppdGVtX3Jldj1cIml0ZW1fcmV2XCIgLz5cbiAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgPC92LXRhYnM+XG4gICAgPC92LWNvbnRhaW5lcj5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRlbF9jaGVja19mbGdcIiB3aWR0aD1cIjUwJVwiIHRyYW5zaXRpb249XCJkaWFsb2ctdHJhbnNpdGlvblwiPlxuICAgICAgPERlbENoZWNrIDpkYXRhPVwiZGVsX2NoZWNrXCIgQHJ0PVwiZGVsX2l0ZW0oKVwiPjwvRGVsQ2hlY2s+XG4gICAgPC92LWRpYWxvZz5cbiAgPC92LWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEl0ZW1EYXRhIGZyb20gXCIuLy4uLy4uL21peGlucy9JdGVtRGF0YVwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vSGVuc2h1L0Jhc2VcIjtcbmltcG9ydCBPcmRlcldheSBmcm9tIFwiLi9IZW5zaHUvT3JkZXJXYXlcIjtcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tIFwiLi8uLi9hY3QvSW1hZ2VVcGxvYWRcIjtcbmltcG9ydCBPcmRlclByaWNlIGZyb20gXCIuL0hlbnNodS9PcmRlclByaWNlXCI7XG5pbXBvcnQgRGVsQ2hlY2sgZnJvbSBcIi4vLi4vY29tL0NvbUNoZWNrRGlhbG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIEJhc2UsXG4gICAgT3JkZXJXYXksXG4gICAgSW1hZ2VVcGxvYWQsXG4gICAgT3JkZXJQcmljZSxcbiAgICBEZWxDaGVja1xuICB9LFxuICBtaXhpbnM6IFtJdGVtRGF0YV0sXG4gIHByb3BzOiB7XG4gICAgaXRlbV9jb2RlOiB7XG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfSxcbiAgICBpdGVtX3Jldjoge1xuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgZGVsOiB7XG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbV9pZDogXCJcIixcbiAgICAgIHRhYjogMCxcbiAgICAgIGxvdF9kYXRhOiBudWxsLFxuICAgICAgZGVsX2NoZWNrX2ZsZzogZmFsc2UsXG4gICAgICBkZWxfY2hlY2s6IHtcbiAgICAgICAgdGl0bGU6IFwi6YOo5p2Q5YmK6ZmkXCIsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgXCLpg6jmnZDjg4fjg7zjgr/jga/jgIHlvaLlvI/jg57jgrnjgr/jgIHmrovmlbDnrqHnkIbjg4fjg7zjgr/lkKvjgoHjgIHlhajjgabliYrpmaTjgZXjgozjgb7jgZnjgII8YnI+5YmK6Zmk5b6M44Gu5Y+W5raI44Gv44Gn44GN44G+44Gb44KT44CCPGJyPuacrOW9k+OBq+WJiumZpOOBl+OBvuOBmeOBi++8n1wiXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgYXdhaXQgdGhpcy5nZXRfaXRlbV9kYXRhKCk7XG4gICAgdGhpcy5pdGVtX2lkID0gdGhpcy5nZXRfc2VyaWFsKCk7XG4gICAgY29uc3Qgc2VsZWN0ZXIgPSBbXCJsb3RfbnVtXCIsIFwibWluaW11bV9zZXRcIl07XG4gICAgdGhpcy5sb3RfZGF0YSA9IHRoaXMuc2VsZWN0ZXIoc2VsZWN0ZXIpO1xuICAgIGNvbnN0IG91dCA9IFtcbiAgICAgIFwiaXRlbV9pZFwiLFxuICAgICAgXCJpdGVtX2NvZGVcIixcbiAgICAgIFwiaXRlbV9yZXZcIixcbiAgICAgIFwibGFzdF9udW1cIixcbiAgICAgIFwiYXBwb19udW1cIixcbiAgICAgIFwibG90X251bVwiLFxuICAgICAgXCJtaW5pbXVtX3NldFwiLFxuICAgICAgXCJvcmRlcl93YXlcIixcbiAgICAgIFwib3JkZXJfcHJpY2VzXCJcbiAgICBdO1xuICAgIHRoaXMub3V0KG91dCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyB1cChvYiwgaWQpIHtcbiAgICAgIGxldCBkID0gdGhpcy5ydF9fdXBfZGF0YV9pdGVtcyhvYiwgaWQpO1xuICAgICAgZGVsZXRlIGQub3JkZXJfcHJpY2VzO1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9pdGVtcy91cGRhdGUvcG9zdC9cIiArIGlkLCBkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJwYXNzXCIsIHsgdHlwZTogXCJiYXNlX2RhdGFcIiwgZGF0YTogZCB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcGFzcyhkKSB7XG4gICAgICB0aGlzLiRlbWl0KFwicGFzc1wiLCBkKTtcbiAgICB9LFxuICAgIGRlbF9pdGVtKCkge1xuICAgICAgYXhpb3MuZ2V0KFxuICAgICAgICBcIi9kYi9pdGVtcy9kZWxldGUvaXRlbS9cIiArIHRoaXMuaXRlbV9jb2RlICsgXCIvXCIgKyB0aGlzLml0ZW1fcmV2XG4gICAgICApO1xuICAgICAgYWxlcnQoXCLpg6jmnZDjg4fjg7zjgr/jgpLliYrpmaTjgZfjgb7jgZfjgZ/jgILjg4jjg4Pjg5fjg5rjg7zjgrjjgbjmiLvjgorjgb7jgZnjgIJcIik7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IFwiL1wiIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiA+XG4jaGVuc2h1IHtcbiAgI2luZm9fYXJlYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgfVxuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICAuZWRpdCB7XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gIH1cbiAgLmVkaXQuZG93YmxlIHtcbiAgICAudi1pbnB1dCB7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICB9XG4gIC52LWNhcmRfX3RpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICAudi1pY29uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbiAgICB9XG4gIH1cbiAgLm1lbnUge1xuICAgIC52LXRhYnNfX2JhciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuICB9XG4gICNldGMtYnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gIH1cbiAgLnN1Ym1pdCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufVxuLm1pbmkge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDx2LWZvcm0gdi1pZj1cIml0ZW1fZGF0YVwiIGNsYXNzPVwiZWRpdFwiIGlkPVwiaXRlbV9kYXRhXCIgcmVmPVwiaXRlbV9kYXRhXCI+XG4gICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICA8di1mbGV4IHhzNiBjbGFzcz1cInB4LTRcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbV9kYXRhXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICA6bmFtZT1cIml0ZW0ubmFtZVwiXG4gICAgICAgICAgOnByZXBlbmQtaW5uZXItaWNvbj1cIml0ZW0uaWNvblwiXG4gICAgICAgICAgOmxhYmVsPVwiaXRlbS50aXRsZVwiXG4gICAgICAgICAgOmlkPVwiaXRlbS5uYW1lXCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJpdGVtLmVkaXRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICBzbWFsbFxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICAgIDx2LWJ0blxuICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgIGZvcm09XCJpdGVtX2RhdGFcIlxuICAgICAgZmxhdFxuICAgICAgbGFyZ2VcbiAgICAgIGJsb2NrXG4gICAgICBvdXRsaW5lXG4gICAgICBjbGFzcz1cInN1Ym1pdFwiXG4gICAgICBAY2xpY2s9XCJzdWJtaXQoKVwiXG4gICAgPnt7IHN1Ym1pdF90ZXh0IH19PC92LWJ0bj5cbiAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiaXRlbV9kYXRhXCIsIFwiaXRlbV9pZFwiXSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Ym1pdF90ZXh0OiBcIuODh+ODvOOCv+abtOaWsFwiXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJ1cFwiLCB0aGlzLml0ZW1fZGF0YSwgdGhpcy5pdGVtX2lkKTtcbiAgICAgIHRoaXMuc3VibWl0X3RleHQgPSBcIuabtOaWsOa4iOOBv1wiO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uZWRpdCB7XG4gIC52LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHYtY29udGFpbmVyIGdyaWQtbGlzdC14cyBjbGFzcz1cImVkaXQgZG93YmxlXCIgdi1pZj1cInZlbmRfbGlzdFwiPlxuICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBmbGF0IGxhcmdlIGJsb2NrIG91dGxpbmUgQGNsaWNrPVwiYWRkXCI+6L+95YqgPC92LWJ0bj5cbiAgICA8di1sYXlvdXQgcm93IHdyYXAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHZlbmRvclwiIDprZXk9XCJpbmRleFwiIG10LTUgbWItNT5cbiAgICAgIDx2LWZsZXggeHMzPlxuICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICA6aXRlbXM9XCJ2ZW5kX2xpc3RcIlxuICAgICAgICAgIGl0ZW0tdGV4dD1cImNvbV9uYW1lXCJcbiAgICAgICAgICBpdGVtLXZhbHVlPVwidmVuZG9yX2NvZGVcIlxuICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnZlbmRvcl9jb2RlXCJcbiAgICAgICAgICBsYWJlbD1cIuWPluW8leWFiOWQjVwiXG4gICAgICAgICAgcHJlcGVuZC1pbm5lci1pY29uPVwiZmFyIGZhLWJ1aWxkaW5nXCJcbiAgICAgICAgPjwvdi1zZWxlY3Q+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMzPlxuICAgICAgICA8di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJpdGVtLmtha29cIiBsYWJlbD1cIuWKoOW3peWGheWuuVwiPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMyBjbGFzcz1cInBsLTNcIj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgbGFiZWw9XCLph5HpoY1cIlxuICAgICAgICAgIDppZD1cIidwcmljZV8nICsgaW5kZXhcIlxuICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnZlbmRvcl9pdGVtX3ByaWNlXCJcbiAgICAgICAgICBwcmVwZW5kLWlubmVyLWljb249XCJmYXMgZmEtbW9uZXktYmlsbC13YXZlXCJcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMiBjbGFzcz1cInBsLTNcIj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIG5hbWU9XCJhZGRfZGF0ZVwiXG4gICAgICAgICAgbGFiZWw9XCLoqr/mlbTml6XmlbBcIlxuICAgICAgICAgIGhpbnQ9XCLkuIDmi6zmiYvphY3mmYLjgavlhaXlipvlgKTjga7liIbjga7ml6XmlbDjgpLliqDnrpfjgZfjgb7jgZlcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIDppZD1cIidhZGRfZGF0ZScgKyBpbmRleFwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0ub3JkZXJfYWRkX2RhdGVcIlxuICAgICAgICAgIHByZXBlbmQtaW5uZXItaWNvbj1cImZhcyBmYS1tb25leS1iaWxsLXdhdmVcIlxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxPlxuICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgZmxhdCBpY29uIGxhcmdlIEBjbGljaz1cInZlbmRvci5zcGxpY2UoaW5kZXgsIDEpXCI+XG4gICAgICAgICAgPHYtaWNvbj5mYXIgZmEtdHJhc2gtYWx0PC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICAgIDx2LWJ0biBjb2xvcj1cInN1Y2Nlc3NcIiBmbGF0IGxhcmdlIGJsb2NrIG91dGxpbmUgQGNsaWNrPVwic3VibWl0XCI+e3sgc3VibWl0X3RleHQgfX08L3YtYnRuPlxuICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJtaW5pbWF0Y2hcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcIml0ZW1faWRcIiwgXCJ2ZW5kb3JcIl0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7IHZlbmRfbGlzdDogbnVsbCwgc3VibWl0X3RleHQ6IFwi5rG65a6aXCIgfTtcbiAgfSxcbiAgY3JlYXRlZDogYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2codGhpcy52ZW5kb3IpO1xuICAgIGF3YWl0IGF4aW9zLmdldChcIi92ZW5kb3IvbGlzdFwiKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnZlbmRfbGlzdCA9IHJlcy5kYXRhO1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkKCkge1xuICAgICAgdGhpcy52ZW5kb3IucHVzaCh7XG4gICAgICAgIGl0ZW1faWQ6IHRoaXMuaXRlbV9pZCxcbiAgICAgICAgdmVuZG9yX2NvZGU6IFwiXCIsXG4gICAgICAgIGNvbV9uYW1lOiBcIlwiLFxuICAgICAgICB2ZW5kb3JfaXRlbV9wcmljZTogMCxcbiAgICAgICAgb3JkZXJfYWRkX2RhdGU6IDBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgY29uc3QgZCA9IHRoaXMudmVuZG9yLmZpbHRlcihhciA9PiBhci52ZW5kb3JfY29kZSAhPT0gXCJcIik7XG4gICAgICBjb25zdCBmID0gZC5tYXAoYXIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGl0ZW1faWQ6IGFyLml0ZW1faWQsXG4gICAgICAgICAgdmVuZG9yX2NvZGU6IGFyLnZlbmRvcl9jb2RlLFxuICAgICAgICAgIHZlbmRvcl9pdGVtX3ByaWNlOiBhci52ZW5kb3JfaXRlbV9wcmljZSxcbiAgICAgICAgICBvcmRlcl9hZGRfZGF0ZTogYXIub3JkZXJfYWRkX2RhdGUsXG4gICAgICAgICAga2FrbzogYXIua2Frb1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBheGlvcy5wb3N0KFwiL3ZlbmRvci1pdGVtL3VwL1wiICsgdGhpcy5pdGVtX2lkLCBmKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnN1Ym1pdF90ZXh0ID0gXCLmm7TmlrDmuIjjgb9cIjtcbiAgICAgICAgdGhpcy4kZW1pdChcInBhc3NcIiwgeyB0eXBlOiBcIm9yZGVyX3ByaWNlXCIsIGRhdGE6IHJlcy5kYXRhIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8di1mb3JtIHYtaWY9XCJsb3RfZGF0YVwiIGlkPVwibG90XCIgY2xhc3M9XCJlZGl0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgPHYtcmFkaW8tZ3JvdXAgdi1tb2RlbD1cInJlZGlvXCI+XG4gICAgICA8di1yYWRpbyB2LWZvcj1cIihkLCBuKSBpbiByZWRpb1ZhbHVlXCIgOmtleT1cIm5cIiA6bGFiZWw9XCJkXCIgOnZhbHVlPVwiblwiIHYtb246Y2hhbmdlPVwiY2hhbmdlXCI+PC92LXJhZGlvPlxuICAgIDwvdi1yYWRpby1ncm91cD5cbiAgICA8di1leHBhbmQteC10cmFuc2l0aW9uPlxuICAgICAgPGRpdiB2LWlmPVwicmVkaW89PT0xXCI+XG4gICAgICAgIDx2LXRleHQtZmllbGQgbmFtZT1cImxvdF9udW1cIiBsYWJlbD1cIu+8rO+8r++8tOaJi+mFjeaVsFwiIGlkPVwibG90X251bVwiIHYtbW9kZWw9XCJsb3RfbnVtXCI+PC92LXRleHQtZmllbGQ+XG4gICAgICAgIDx2LXRleHQtZmllbGQgbmFtZT1cIm1pbmltdW1fc2V0XCIgbGFiZWw9XCLmnIDlsI/kv53mjIHmlbBcIiBpZD1cIm1pbmltdW1fc2V0XCIgdi1tb2RlbD1cIm1pbmltdW1fc2V0XCI+PC92LXRleHQtZmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L3YtZXhwYW5kLXgtdHJhbnNpdGlvbj5cbiAgICA8di1idG5cbiAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgIGZvcm09XCJsb3RcIlxuICAgICAgZmxhdFxuICAgICAgbGFyZ2VcbiAgICAgIGJsb2NrXG4gICAgICBvdXRsaW5lXG4gICAgICBjbGFzcz1cInN1Ym1pdFwiXG4gICAgPnt7IHN1Ym1pdF90ZXh0IH19PC92LWJ0bj5cbiAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wibG90X2RhdGFcIiwgXCJpdGVtX2lkXCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaW9WYWx1ZTogW1wi6YCa5bi45omL6YWNXCIsIFwi77ys77yv77y05omL6YWNXCIsIFwi5pSv57Wm5ZOBXCJdLFxuICAgICAgcmVkaW86IDAsXG4gICAgICBsb3RfbnVtOiAwLFxuICAgICAgbWluaW11bV9zZXQ6IDAsXG4gICAgICBzdWJtaXRfdGV4dDogXCLjg4fjg7zjgr/mm7TmlrBcIlxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubG90X2RhdGEuZm9yRWFjaChhciA9PiB7XG4gICAgICBpZiAoYXIubmFtZSA9PT0gXCJsb3RfbnVtXCIpIHtcbiAgICAgICAgdGhpcy5sb3RfbnVtID0gYXIudmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGFyLm5hbWUgPT09IFwibWluaW11bV9zZXRcIikge1xuICAgICAgICB0aGlzLm1pbmltdW1fc2V0ID0gYXIudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3dpdGNoICh0aGlzLmxvdF9udW0pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHRoaXMucmVkaW8gPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTI6XG4gICAgICAgIHRoaXMucmVkaW8gPSAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMucmVkaW8gPSAxO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGFuZ2UoZSkge1xuICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLmxvdF9udW0gPSAtMTtcbiAgICAgICAgICB0aGlzLm1pbmltdW1fc2V0ID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGhpcy5sb3RfbnVtID09PSAtMSB8fCB0aGlzLmxvdF9udW0gPT09IC0yKSB7XG4gICAgICAgICAgICB0aGlzLmxvdF9udW0gPSAwO1xuICAgICAgICAgICAgdGhpcy5taW5pbXVtX3NldCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5sb3RfbnVtID0gLTI7XG4gICAgICAgICAgdGhpcy5taW5pbXVtX3NldCA9IC0xO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc3VibWl0KCkge1xuICAgICAgY29uc3QgZCA9IHtcbiAgICAgICAgbG90X251bTogdGhpcy5sb3RfbnVtLFxuICAgICAgICBtaW5pbXVtX3NldDogdGhpcy5taW5pbXVtX3NldFxuICAgICAgfTtcbiAgICAgIHRoaXMuJGVtaXQoXCJwYXNzXCIsIHsgdHlwZTogXCJvcmRlcl93YXlcIiwgZGF0YTogZCB9KTtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvaXRlbXMvdXBkYXRlL3Bvc3QvXCIgKyB0aGlzLml0ZW1faWQsIGQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zdWJtaXRfdGV4dCA9IFwi5pu05paw5riI44G/XCI7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDx2LWxheW91dCByb3cgd3JhcCBpZD1cImltYWdlc1wiIHYtaWY9XCJpbWFnZXNcIj5cbiAgICA8di1mbGV4IHYtZm9yPVwiKGltYWdlLCBpbmRleCkgaW4gaW1hZ2VzXCIgOmtleT1cImluZGV4XCIgOmNsYXNzPVwiY29sXCI+XG4gICAgICA8di1jYXJkIGNsYXNzPVwic3F1YXJlXCIgQGNsaWNrPVwidmlldyhpbWFnZSlcIiBob3Zlcj5cbiAgICAgICAgPHYtaW1nIDpzcmM9XCJpbWFnZS5iYXNlNjRcIiBjbGFzcz1cImNvbnRlbnRcIiA6bGF6eS1zcmM9XCJsb2FkaW5nNjRcIj48L3YtaW1nPlxuICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWZsZXg+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJsZXNfY250ID4gMCAmJiBldGNcIj5cbiAgICAgIDx2LWZsZXggdi1mb3I9XCIobiwgaW5kZXgpIGluIGxlc19jbnRcIiA6a2V5PVwiJ25vJyArIGluZGV4XCIgOmNsYXNzPVwiY29sXCI+XG4gICAgICAgIDx2LWNhcmQgY2xhc3M9XCJzcXVhcmVcIiBkYXJrPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHYtaWNvbj5mYXMgZmEtdmlkZW8tc2xhc2g8L3YtaWNvbj5cbiAgICAgICAgICAgIDxzcGFuPm5vIGltYWdlPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx2LWRpYWxvZ1xuICAgICAgdi1tb2RlbD1cImJpZ19pbWdcIlxuICAgICAgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCJcbiAgICAgIGRhcmtcbiAgICAgIDp3aWR0aD1cImJpZ19pbWdfd2lkdGhcIlxuICAgICAgOmhlaWdodD1cImJpZ19pbWdfaGVpZ2h0XCJcbiAgICA+XG4gICAgICA8di10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICBGaWxlXG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICA8di1idG4gZmxhdCBkYXJrIEBjbGljaz1cImNsb3NlXCI+XG4gICAgICAgICAgPHYtaWNvbiBsZWZ0PmZhciBmYS10aW1lcy1jaXJjbGU8L3YtaWNvbj5cbiAgICAgICAgICA8c3Bhbj7plonjgZjjgos8L3NwYW4+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LWJ0biBmbGF0IGRhcmsgQGNsaWNrPVwiZGVsZXRlSW1nXCI+XG4gICAgICAgICAgPHYtaWNvbiBsZWZ0PmZhciBmYS10cmFzaC1hbHQ8L3YtaWNvbj5cbiAgICAgICAgICA8c3Bhbj7liYrpmaQ8L3NwYW4+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtdG9vbGJhcj5cbiAgICAgIDxpbWcgOnNyYz1cImJpZ19pbWdfNjRcIj5cbiAgICA8L3YtZGlhbG9nPlxuICA8L3YtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBMaWdodGJveCBmcm9tIFwidnVlLW15LXBob3Rvc1wiO1xuaW1wb3J0IGxvYWRpbmc2NCBmcm9tIFwiLi8uLi8uLi9taXhpbnMvbG9hZGluZzY0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbbG9hZGluZzY0XSxcbiAgY29tcG9uZW50czoge1xuICAgIGxpZ2h0Ym94OiBMaWdodGJveFxuICB9LFxuICBwcm9wczoge1xuICAgIHBhdGg6IFN0cmluZyxcbiAgICBjb2w6IHtcbiAgICAgIGRlZmF1bHQ6IFwieHMzXCJcbiAgICB9LFxuICAgIGV0Yzoge1xuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGltZzogXCJcIixcbiAgICAgIGltYWdlczogW10sXG4gICAgICBsZXNfY250OiAwLFxuICAgICAgYmlnX2ltZzogZmFsc2UsXG4gICAgICBiaWdfaW1nXzY0OiBcIlwiLFxuICAgICAgYmlnX2ltZ19uYW1lOiBcIlwiLFxuICAgICAgYmlnX2ltZ193aWR0aDogXCJcIixcbiAgICAgIGJpZ19pbWdfaGVpZ2h0OiBcIlwiXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRfZmlsZV9saXN0KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRfZmlsZV9saXN0KCkge1xuICAgICAgY29uc3QgZ2V0X2RhdGEgPSB7XG4gICAgICAgIHBhdGg6IHRoaXMucGF0aFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvdXBsb2FkL2NoZWNrL2l0ZW1zXCIsIGdldF9kYXRhKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmICghcmVzLmRhdGEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZXMgPSByZXMuZGF0YTtcbiAgICAgICAgdGhpcy5sZXNfY250ID0gNCAtIHRoaXMuaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChhciA9PiB7XG4gICAgICAgICAgbGV0IGkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpLnNyYyA9IGFyLmJhc2U2NDtcbiAgICAgICAgICBpLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGFyLmhlaWdodCA9IGkuaGVpZ2h0O1xuICAgICAgICAgICAgYXIud2lkdGggPSBpLndpZHRoO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB2aWV3KGltZykge1xuICAgICAgdGhpcy5iaWdfaW1nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYmlnX2ltZ182NCA9IGltZy5iYXNlNjQ7XG4gICAgICB0aGlzLmJpZ19pbWdfbmFtZSA9IGltZy5wYXRoO1xuICAgICAgdGhpcy5iaWdfaW1nX3dpZHRoID0gaW1nLndpZHRoO1xuICAgICAgdGhpcy5iaWdfaW1nX2hlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuYmlnX2ltZyA9IGZhbHNlO1xuICAgICAgdGhpcy5iaWdfaW1nXzY0ID0gXCJcIjtcbiAgICAgIHRoaXMuYmlnX2ltZ19uYW1lID0gXCJcIjtcbiAgICAgIHRoaXMuYmlnX2ltZ193aWR0aCA9IFwiXCI7XG4gICAgICB0aGlzLmJpZ19pbWdfaGVpZ2h0ID0gXCJcIjtcbiAgICB9LFxuICAgIGRlbGV0ZUltZygpIHtcbiAgICAgIGxldCBkID0ge1xuICAgICAgICBwYXRoOiB0aGlzLmJpZ19pbWdfbmFtZVxuICAgICAgfTtcbiAgICAgIGF4aW9zLnBvc3QoXCIvdXBsb2FkL2RlbGV0ZS9pdGVtc1wiLCBkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB0aGlzLmltYWdlcy5maWx0ZXIoYXIgPT4ge1xuICAgICAgICAgIHJldHVybiBhci5wYXRoICE9PSB0aGlzLmJpZ19pbWdfbmFtZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4jaW1hZ2VzIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC5mbGV4IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIC5zcXVhcmUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyDkuLhcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDQwJTtcbiAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIC8vIOOBk+OBk+OBp+mrmOOBleavlFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyDjg4bjgq3jgrnjg4jjgpLkuK3lpK7jgatcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4jaW1hZ2VzIHtcbiAgLnYtZGlhbG9nIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXI+XG4gICAgPHYtbGF5b3V0IHRleHQteHMtY2VudGVyIHdyYXAgY2xhc3M9XCJlZGl0XCI+XG4gICAgICA8di1mbGV4IHhzMTIgbWItMz5cbiAgICAgICAgPHYtYnRuXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJpc1VwbG9hZGluZ1wiXG4gICAgICAgICAgQGNsaWNrPVwic3VibWl0XCJcbiAgICAgICAgICBpZD1cInN1Ym1pdFwiXG4gICAgICAgID57eyBzdWJtaXRfbWVzc2FnZSB9fTwvdi1idG4+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIG5hbWU9XCJzZWxlY3RfaW1hZ2VcIlxuICAgICAgICAgIGxhYmVsPVwi55S75YOP6YG45oqeXCJcbiAgICAgICAgICBpZD1cInNlbGVjdF9pbWFnZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBAY2xpY2s9XCJwaWNrRmlsZVwiXG4gICAgICAgICAgdi1tb2RlbD1cInVwaW1hZ2UuZmlsZU5hbWVcIlxuICAgICAgICAgIHByZXBlbmQtaW5uZXItaWNvbj1cImF0dGFjaF9maWxlXCJcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgbmFtZT1cImZpbGVfcGF0aFwiXG4gICAgICAgICAgbGFiZWw9XCLkv53lrZjlhYhcIlxuICAgICAgICAgIGlkPVwic2V2ZV9kaXJcIlxuICAgICAgICAgIHYtbW9kZWw9XCJ1cGltYWdlLmZpbGVQYXRoXCJcbiAgICAgICAgICBwcmVwZW5kLWlubmVyLWljb249XCJlZGl0XCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJwYXRoX2ZsZ1wiXG4gICAgICAgICAgaGludD1cIi9wdWJsaWMvaW1nIOOBruS4i+OBq+S/neWtmOOBleOCjOOBvuOBmSgvc3RvcmFnZS9hcHAvcHVibGljL2ltZylcIlxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICBuYW1lPVwiZmlsZV9uYW1lXCJcbiAgICAgICAgICBsYWJlbD1cIuODleOCoeOCpOODq+WQjVwiXG4gICAgICAgICAgaWQ9XCJmaWxlX25hbWVcIlxuICAgICAgICAgIHYtbW9kZWw9XCJ1cGltYWdlLnNldE5hbWVcIlxuICAgICAgICAgIHByZXBlbmQtaW5uZXItaWNvbj1cImZhcyBmYS1zYXZlXCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJuYW1lX2ZsZ1wiXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgQGNoYW5nZT1cInNlbGVjdGVkRmlsZVwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cImltYWdlL2pwZWcsIGltYWdlL2pwZywgaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIlxuICAgICAgICAgIHJlZj1cImltYWdlXCJcbiAgICAgICAgPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LWltZyA6c3JjPVwidXBpbWFnZS5maWxlVXJsXCIgYXNwZWN0LXJhdGlvPVwiMlwiIDpjb250YWluPVwidHJ1ZVwiIHYtaWY9XCJ1cGltYWdlLmZpbGVVcmxcIj48L3YtaW1nPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTIgdi1pZj1cIml0ZW1fY2xlYXJfZmxnXCI+XG4gICAgICAgIDxJdGVtSW1nIDpwYXRoPVwidXBpbWFnZS5maWxlUGF0aFwiLz5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdi1sYXlvdXQ+XG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJ1cG1lc3NhZ2VcIiBtYXgtd2lkdGg9XCI1MDBweFwiIGhlaWdodD1cIjMwMHB4O1wiIEBpbnB1dD1cImNsb3NlXCI+XG4gICAgICA8di1jYXJkIHBhLTI+XG4gICAgICAgIDx2LWFsZXJ0IHR5cGU9XCJpbmZvXCIgOnZhbHVlPVwidHJ1ZVwiIG91dGxpbmU+XG4gICAgICAgICAgPHNwYW4+55S75YOP55m76Yyy5Yem55CG44GM5a6M5LqG44GX44G+44GX44GfPC9zcGFuPlxuICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZGlhbG9nPlxuICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbWFnZVV0aWwgZnJvbSBcIi4vbGliL0ltYWdlVXRpbFwiO1xuaW1wb3J0IGxvYWRpbmc2NCBmcm9tIFwiLi8uLi8uLi9taXhpbnMvbG9hZGluZzY0LmpzXCI7XG5pbXBvcnQgSXRlbUltZyBmcm9tIFwiLi8uLi9JdGVtRGF0YS9JdGVtSW1nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbbG9hZGluZzY0XSxcbiAgY29tcG9uZW50czogeyBJdGVtSW1nIH0sXG4gIHByb3BzOiBbXCJpdGVtX2NvZGVcIiwgXCJpdGVtX3JldlwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNVcGxvYWRpbmc6IHRydWUsIC8vIOeUu+WDj+ODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieS4reOBruWIpOaWreODleODqeOCsFxuICAgICAgdXBpbWFnZToge1xuICAgICAgICBmaWxlVXJsOiBcIlwiLFxuICAgICAgICBmaWxlTmFtZTogXCJcIixcbiAgICAgICAgYmxvYjogbnVsbCxcbiAgICAgICAgZmlsZVBhdGg6IFwiXCIsXG4gICAgICAgIHNldE5hbWU6IFwi5pel5LuY5pmC5Yi7IO+8iyDjg6njg7Pjg4Djg6Djgaroi7HmlbDlgKTjgYzjg5XjgqHjgqTjg6vlkI3jgajjgZfjgabnmbvpjLLjgZXjgozjgb7jgZlcIlxuICAgICAgfSwgLy8g55S75YOP44OV44Kh44Kk44OrXG4gICAgICBmaWxlSW5mbzoge1xuICAgICAgICBiZWZvcmU6IHsgc2l6ZTogMCB9LFxuICAgICAgICBhZnRlcjogeyBzaXplOiAwIH1cbiAgICAgIH0sXG4gICAgICB1cG1lc3NhZ2U6IGZhbHNlLFxuICAgICAgc3VibWl0X21lc3NhZ2U6IFwi55m76YyyXCIsXG4gICAgICBwYXRoX2ZsZzogZmFsc2UsXG4gICAgICBuYW1lX2ZsZzogdHJ1ZSxcbiAgICAgIGl0ZW1fY2xlYXJfZmxnOiB0cnVlXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXREZWZhdWx0cGF0aCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGlja0ZpbGUoKSB7XG4gICAgICB0aGlzLiRyZWZzLmltYWdlLmNsaWNrKCk7XG4gICAgfSxcbiAgICBnZXREZWZhdWx0cGF0aCgpIHtcbiAgICAgIGlmICh0aGlzLml0ZW1fY29kZSAmJiB0aGlzLml0ZW1fcmV2KSB7XG4gICAgICAgIHRoaXMudXBpbWFnZS5maWxlUGF0aCA9XG4gICAgICAgICAgXCIvaW1nL2l0ZW1zL1wiICsgdGhpcy5pdGVtX2NvZGUgKyBcIi9cIiArIHRoaXMuaXRlbV9yZXYgKyBcIi9cIjtcbiAgICAgICAgdGhpcy5wYXRoX2ZsZyA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNlbGVjdGVkRmlsZShlKSB7XG4gICAgICB0aGlzLmlzVXBsb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g5Zyn57iu44GX44Gf55S75YOP44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IGNvbXBGaWxlID0gYXdhaXQgSW1hZ2VVdGlsLmdldENvbXByZXNzSW1hZ2VGaWxlQXN5bmMoZmlsZSk7XG5cbiAgICAgICAgLy/jg5XjgqHjgqTjg6vjgrXjgqTjgrrjga7ooajnpLpcbiAgICAgICAgdGhpcy5maWxlSW5mby5iZWZvcmUuc2l6ZSA9IChmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCg0KTtcbiAgICAgICAgdGhpcy5maWxlSW5mby5hZnRlci5zaXplID0gKGNvbXBGaWxlLnNpemUgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCg0KTtcbiAgICAgICAgLy8g55S75YOP5oOF5aCx44Gu6Kit5a6aXG4gICAgICAgIHRoaXMudXBpbWFnZS5ibG9iID0gY29tcEZpbGU7XG4gICAgICAgIHRoaXMudXBpbWFnZS5maWxlVXJsID0gYXdhaXQgSW1hZ2VVdGlsLmdldERhdGFVcmxGcm9tRmlsZShjb21wRmlsZSk7XG4gICAgICAgIHRoaXMudXBpbWFnZS5maWxlTmFtZSA9IGZpbGUubmFtZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjnrYnjgpLooajnpLpcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuc3VibWl0X21lc3NhZ2UgPSBcImxvYWRpbmcgLi4uXCI7XG4gICAgICB0aGlzLml0ZW1fY2xlYXJfZmxnID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkID0ge307XG4gICAgICAgIGQuYmFzZTY0ID0gdGhpcy51cGltYWdlLmZpbGVVcmw7XG4gICAgICAgIGQudHlwZSA9IHRoaXMudXBpbWFnZS5ibG9iLnR5cGU7XG4gICAgICAgIGQuaXRlbV9jb2RlID0gdGhpcy5pdGVtX2NvZGU7XG4gICAgICAgIGQuaXRlbV9yZXYgPSB0aGlzLml0ZW1fcmV2O1xuICAgICAgICBkLnBhdGggPSBcIi9pdGVtcy9cIjtcbiAgICAgICAgYXhpb3MucG9zdChcIi91cGxvYWQvaXRlbXMvaW1hZ2VcIiwgZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMudXBtZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdF9tZXNzYWdlID0gXCJmaW5pc2ghIVwiO1xuICAgICAgICAgIHRoaXMuaXRlbV9jbGVhcl9mbGcgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVyXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLnVwaW1hZ2UuZmlsZVVybCA9IFwiXCI7XG4gICAgICB0aGlzLnVwaW1hZ2UuZmlsZU5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy51cGltYWdlLmJsb2IgPSBudWxsO1xuICAgICAgdGhpcy5zdWJtaXRfbWVzc2FnZSA9IFwi55m76YyyXCI7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDx2LWFsZXJ0IHR5cGU9XCJ3YXJuaW5nXCIgOnZhbHVlPVwidHJ1ZVwiIG91dGxpbmUgY2xhc3M9XCJiYWNrXCI+XG4gICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDxoMT57eyBkYXRhLnRpdGxlIH19PC9oMT5cbiAgICAgICAgPHAgdi1odG1sPVwiZGF0YS5tZXNzYWdlXCIgY2xhc3M9XCJtZXNzYWdlXCI+PC9wPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTIgY2xhc3M9XCJkZWwtaW5mb1wiPlxuICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGRhdGEuZGF0YV92MlwiPlxuICAgICAgICAgICAgPHYtZmxleCB4czYgY2xhc3M9XCJtYi0yXCIgOmtleT1cIid0aXRsZScgKyBpbmRleFwiPnt7IGl0ZW1bMF0gfX08L3YtZmxleD5cbiAgICAgICAgICAgIDx2LWZsZXggeHM2IGNsYXNzPVwibWItMlwiIDprZXk9XCInY29sdW1uJyArIGluZGV4XCI+e3sgaXRlbVsxXSB9fTwvdi1mbGV4PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHYtZmxleCB4czggb2Zmc2V0LXhzMiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cIndhcm5pbmdcIiBjbGFzcz1cInN1Ym1pdC1idG5cIiBvdXRsaW5lIEBjbGljaz1cInN1Ym1pdCgpXCI+T0s8L3YtYnRuPlxuICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgPC92LWZsZXg+XG4gICAgPC92LWxheW91dD5cbiAgPC92LWFsZXJ0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRpdGxlOiBcIuOCv+OCpOODiOODq1wiLFxuICAgICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgICBkYXRhX3YyOiBbW1widGl0bGVcIiwgXCJ2YWx1ZVwiXV1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzdWJtaXQoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwicnRcIiwgdGhpcy5kYXRhLCB0cnVlKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5kZWwtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWJtaXQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2hlbnNodSAjaW5mb19hcmVhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4jaGVuc2h1ICNpbmZvX2FyZWEgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDMwJTtcXG59XFxuI2hlbnNodSAjaW5mb19hcmVhIHNwYW4gc3Ryb25nIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuI2hlbnNodSAuZWRpdCBidXR0b24ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbn1cXG4jaGVuc2h1IC5lZGl0LmRvd2JsZSAudi1pbnB1dCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA5NSU7XFxufVxcbiNoZW5zaHUgLnYtY2FyZF9fdGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxufVxcbiNoZW5zaHUgLnYtY2FyZF9fdGl0bGUgLnYtaWNvbiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxufVxcbiNoZW5zaHUgLm1lbnUgLnYtdGFic19fYmFyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuI2hlbnNodSAjZXRjLWJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNoZW5zaHUgI2V0Yy1idXR0b24gaSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4jaGVuc2h1ICNldGMtYnV0dG9uIGJ1dHRvbiB7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4jaGVuc2h1IC5zdWJtaXQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogODAlO1xcbn1cXG4ubWluaSB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmVkaXQgLnYtaWNvbltkYXRhLXYtOWZlMjdlZWNdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjaW1hZ2VzW2RhdGEtdi0yODA4YTA0OV0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuI2ltYWdlcyAuZmxleFtkYXRhLXYtMjgwOGEwNDldIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbiNpbWFnZXMgLmZsZXggLnNxdWFyZVtkYXRhLXYtMjgwOGEwNDldIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jaW1hZ2VzIC5mbGV4IC5zcXVhcmVbZGF0YS12LTI4MDhhMDQ5XTo6YWZ0ZXIge1xcbiAgcGFkZGluZy10b3A6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG4jaW1hZ2VzIC5mbGV4IC5zcXVhcmUgLmNvbnRlbnRbZGF0YS12LTI4MDhhMDQ5XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2ltYWdlcyAuZmxleCAuc3F1YXJlIC5jb250ZW50W2RhdGEtdi0yODA4YTA0OV06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2ltYWdlcyAudi1kaWFsb2cge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMVtkYXRhLXYtNmVjM2U1YThdIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uYmFja1tkYXRhLXYtNmVjM2U1YThdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5kZWwtaW5mb1tkYXRhLXYtNmVjM2U1YThdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnN1Ym1pdC1idG5bZGF0YS12LTZlYzNlNWE4XSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1lc3NhZ2VbZGF0YS12LTZlYzNlNWE4XSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XCIsIFwiXCJdKTtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbnNodS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbnNodS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlmZTI3ZWVjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlmZTI3ZWVjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmUyN2VlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI4MDhhMDQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI4MDhhMDQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODA4YTA0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZWMzZTVhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmVjM2U1YTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZWMzZTVhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY2FyZFwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiaGVuc2h1XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5pXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwiY2hpcCBcIiArIF92bS5pLml0ZW1fY2xhc3NfdmFsLmN1c3RvbSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG91dGxpbmU6IFwiXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmkuaXRlbV9jbGFzc192YWwudmFsdWUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcIml0ZW1fY29kZVwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaXRlbV9jb2RlKSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1pbmlcIiwgYXR0cnM6IHsgaWQ6IFwiaXRlbV9yZXZcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoTnVtYmVyKF92bS5pdGVtX3JldikubnVtVG9SZXYoKSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRlbFxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImVycm9yXCIsIG91dGxpbmU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsX2NoZWNrX2ZsZyA9ICFfdm0uZGVsX2NoZWNrX2ZsZ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSksIF92bS5fdihcIuWJiumZpFxcbiAgICAgIFwiKV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZXJyb3JcIiwgb3V0bGluZTogXCJcIiwgZGlzYWJsZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsX2NoZWNrX2ZsZyA9ICFfdm0uZGVsX2NoZWNrX2ZsZ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSksIF92bS5fdihcIuWJiumZpFxcbiAgICAgIFwiKV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgeyBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10YWJzXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJzbGlkZXItY29sb3JcIjogXCJwcmltYXJ5XCIsIFwiZml4ZWQtdGFic1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWIsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnRhYiA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGFiXCIsIFtfdm0uX3YoXCLln7rmnKzmg4XloLFcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRhYlwiLCBbX3ZtLl92KFwi5omL6YWN5pa55rOVXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10YWJcIiwgW192bS5fdihcIumHkemhjVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGFiXCIsIFtfdm0uX3YoXCLnlLvlg49cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLml0ZW1fZGF0YVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiQmFzZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX2RhdGE6IF92bS5pdGVtX2RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1faWQ6IF92bS5pdGVtX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdXA6IF92bS51cCwgcGFzczogX3ZtLnBhc3MgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmxvdF9kYXRhXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJPcmRlcldheVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsb3RfZGF0YTogX3ZtLmxvdF9kYXRhLCBpdGVtX2lkOiBfdm0uaXRlbV9pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcGFzczogX3ZtLnBhc3MgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJPcmRlclByaWNlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbV9pZDogX3ZtLml0ZW1faWQsIHZlbmRvcjogX3ZtLnZlbmRvciB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBwYXNzOiBfdm0ucGFzcyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlVXBsb2FkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbV9jb2RlOiBfdm0uaXRlbV9jb2RlLCBpdGVtX3JldjogX3ZtLml0ZW1fcmV2IH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCI1MCVcIiwgdHJhbnNpdGlvbjogXCJkaWFsb2ctdHJhbnNpdGlvblwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVsX2NoZWNrX2ZsZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbF9jaGVja19mbGcgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRlbF9jaGVja19mbGdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiRGVsQ2hlY2tcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLmRlbF9jaGVjayB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgcnQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsX2l0ZW0oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaXRlbV9kYXRhXG4gICAgPyBfYyhcbiAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAgeyByZWY6IFwiaXRlbV9kYXRhXCIsIHN0YXRpY0NsYXNzOiBcImVkaXRcIiwgYXR0cnM6IHsgaWQ6IFwiaXRlbV9kYXRhXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtX2RhdGEsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwicHgtNFwiLCBhdHRyczogeyB4czY6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWlubmVyLWljb25cIjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZWRpdCxcbiAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgZm9ybTogXCJpdGVtX2RhdGFcIixcbiAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnN1Ym1pdF90ZXh0KSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnZlbmRfbGlzdFxuICAgID8gX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlZGl0IGRvd2JsZVwiLCBhdHRyczogeyBcImdyaWQtbGlzdC14c1wiOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hZGQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLov73liqBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0udmVuZG9yLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiwgXCJtdC01XCI6IFwiXCIsIFwibWItNVwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udmVuZF9saXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJjb21fbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwidmVuZG9yX2NvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuWPluW8leWFiOWQjVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWlubmVyLWljb25cIjogXCJmYXIgZmEtYnVpbGRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZlbmRvcl9jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcInZlbmRvcl9jb2RlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0udmVuZG9yX2NvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIuWKoOW3peWGheWuuVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmtha28sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwia2Frb1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmtha29cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGwtM1wiLCBhdHRyczogeyB4czM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIumHkemhjVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicHJpY2VfXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pbm5lci1pY29uXCI6IFwiZmFzIGZhLW1vbmV5LWJpbGwtd2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmVuZG9yX2l0ZW1fcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwidmVuZG9yX2l0ZW1fcHJpY2VcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS52ZW5kb3JfaXRlbV9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwbC0zXCIsIGF0dHJzOiB7IHhzMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhZGRfZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi6Kq/5pW05pel5pWwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIuS4gOaLrOaJi+mFjeaZguOBq+WFpeWKm+WApOOBruWIhuOBruaXpeaVsOOCkuWKoOeul+OBl+OBvuOBmVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFkZF9kYXRlXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pbm5lci1pY29uXCI6IFwiZmFzIGZhLW1vbmV5LWJpbGwtd2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ub3JkZXJfYWRkX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwib3JkZXJfYWRkX2RhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5vcmRlcl9hZGRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czE6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXJnZTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZlbmRvci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFyIGZhLXRyYXNoLWFsdFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc3VibWl0X3RleHQpKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ubG90X2RhdGFcbiAgICA/IF9jKFxuICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWRpdFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImxvdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVkaW8sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnJlZGlvID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlZGlvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ucmVkaW9WYWx1ZSwgZnVuY3Rpb24oZCwgbikge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IG4sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IGQsIHZhbHVlOiBuIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uY2hhbmdlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtZXhwYW5kLXgtdHJhbnNpdGlvblwiLCBbXG4gICAgICAgICAgICBfdm0ucmVkaW8gPT09IDFcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsb3RfbnVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLvvKzvvK/vvLTmiYvphY3mlbBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImxvdF9udW1cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG90X251bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvdF9udW0gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvdF9udW1cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtaW5pbXVtX3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5pyA5bCP5L+d5oyB5pWwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtaW5pbXVtX3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5taW5pbXVtX3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1pbmltdW1fc2V0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtaW5pbXVtX3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICBmb3JtOiBcImxvdFwiLFxuICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnN1Ym1pdF90ZXh0KSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmltYWdlc1xuICAgID8gX2MoXG4gICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIsIGlkOiBcImltYWdlc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0uaW1hZ2VzLCBmdW5jdGlvbihpbWFnZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBjbGFzczogX3ZtLmNvbCB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzcXVhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaG92ZXI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXcoaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpbWFnZS5iYXNlNjQsIFwibGF6eS1zcmNcIjogX3ZtLmxvYWRpbmc2NCB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmxlc19jbnQgPiAwICYmIF92bS5ldGNcbiAgICAgICAgICAgID8gX3ZtLl9sKF92bS5sZXNfY250LCBmdW5jdGlvbihuLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogXCJub1wiICsgaW5kZXgsIGNsYXNzOiBfdm0uY29sIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzcXVhcmVcIiwgYXR0cnM6IHsgZGFyazogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhcyBmYS12aWRlby1zbGFzaFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJubyBpbWFnZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiZGlhbG9nLXRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICBkYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0uYmlnX2ltZ193aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5iaWdfaW1nX2hlaWdodFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmlnX2ltZyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYmlnX2ltZyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJiaWdfaW1nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgRmlsZVxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiLCBkYXJrOiBcIlwiIH0sIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBsZWZ0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZmFyIGZhLXRpbWVzLWNpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLplonjgZjjgotcIildKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiLCBkYXJrOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5kZWxldGVJbWcgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBsZWZ0OiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZmFyIGZhLXRyYXNoLWFsdFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLliYrpmaRcIildKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYmlnX2ltZ182NCB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jb250YWluZXJcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVkaXRcIiwgYXR0cnM6IHsgXCJ0ZXh0LXhzLWNlbnRlclwiOiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiwgXCJtYi0zXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmlzVXBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICBpZDogXCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5zdWJtaXRfbWVzc2FnZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VsZWN0X2ltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLnlLvlg4/pgbjmip5cIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcInNlbGVjdF9pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWlubmVyLWljb25cIjogXCJhdHRhY2hfZmlsZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnBpY2tGaWxlIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXBpbWFnZS5maWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVwaW1hZ2UsIFwiZmlsZU5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXBpbWFnZS5maWxlTmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImZpbGVfcGF0aFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5L+d5a2Y5YWIXCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJzZXZlX2RpclwiLFxuICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWlubmVyLWljb25cIjogXCJlZGl0XCIsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLnBhdGhfZmxnLFxuICAgICAgICAgICAgICAgICAgaGludDpcbiAgICAgICAgICAgICAgICAgICAgXCIvcHVibGljL2ltZyDjga7kuIvjgavkv53lrZjjgZXjgozjgb7jgZkoL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcpXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVwaW1hZ2UuZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51cGltYWdlLCBcImZpbGVQYXRoXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVwaW1hZ2UuZmlsZVBhdGhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuODleOCoeOCpOODq+WQjVwiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZmlsZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBcImZhcyBmYS1zYXZlXCIsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLm5hbWVfZmxnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51cGltYWdlLnNldE5hbWUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51cGltYWdlLCBcInNldE5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXBpbWFnZS5zZXROYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgIGFjY2VwdDogXCJpbWFnZS9qcGVnLCBpbWFnZS9qcGcsIGltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5zZWxlY3RlZEZpbGUgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLnVwaW1hZ2UuZmlsZVVybFxuICAgICAgICAgICAgICAgID8gX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0udXBpbWFnZS5maWxlVXJsLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXNwZWN0LXJhdGlvXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW46IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaXRlbV9jbGVhcl9mbGdcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcIkl0ZW1JbWdcIiwgeyBhdHRyczogeyBwYXRoOiBfdm0udXBpbWFnZS5maWxlUGF0aCB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI1MDBweFwiLCBoZWlnaHQ6IFwiMzAwcHg7XCIgfSxcbiAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLmNsb3NlIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udXBtZXNzYWdlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0udXBtZXNzYWdlID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1cG1lc3NhZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJwYS0yXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYWxlcnRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiaW5mb1wiLCB2YWx1ZTogdHJ1ZSwgb3V0bGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi55S75YOP55m76Yyy5Yem55CG44GM5a6M5LqG44GX44G+44GX44GfXCIpXSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1hbGVydFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJhY2tcIixcbiAgICAgIGF0dHJzOiB7IHR5cGU6IFwid2FybmluZ1wiLCB2YWx1ZTogdHJ1ZSwgb3V0bGluZTogXCJcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LWZsZXhcIiwgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS50aXRsZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZGF0YS5tZXNzYWdlKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZWwtaW5mb1wiLCBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLmRhdGFfdjIsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGl0bGVcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzNjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbVswXSkpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjb2x1bW5cIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzNjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbVsxXSkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtdC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHM4OiBcIlwiLCBcIm9mZnNldC14czJcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VibWl0LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJ3YXJuaW5nXCIsIG91dGxpbmU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk9LXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzNzNmNTA2JnYtaWY9aXRlbV9kYXRhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlbnNodS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbnNodS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDYXJkVGl0bGUgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDaGlwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRGlhbG9nIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlNwYWNlciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRhYiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRhYkl0ZW0gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUYWJzIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQnRuLFZDYXJkLFZDYXJkVGl0bGUsVkNoaXAsVkNvbnRhaW5lcixWRGlhbG9nLFZJY29uLFZTcGFjZXIsVlRhYixWVGFiSXRlbSxWVGFic30pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTM3M2Y1MDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTM3M2Y1MDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hlbnNodS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM3M2Y1MDYmdi1pZj1pdGVtX2RhdGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTM3M2Y1MDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbnNodS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbnNodS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM3M2Y1MDYmdi1pZj1pdGVtX2RhdGEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlmZTI3ZWVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CYXNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlmZTI3ZWVjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWZlMjdlZWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRmxleCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZvcm0gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCdG4sVkZsZXgsVkZvcm0sVkxheW91dCxWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZmUyN2VlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZmUyN2VlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmFzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWZlMjdlZWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWZlMjdlZWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZlMjdlZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZlMjdlZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlmZTI3ZWVjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNThkNjI5NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3JkZXJQcmljZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlNlbGVjdCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWQ29udGFpbmVyLFZGbGV4LFZJY29uLFZMYXlvdXQsVlNlbGVjdCxWVGV4dEZpZWxkfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNThkNjI5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNThkNjI5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3JkZXJQcmljZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjU4ZDYyOTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjU4ZDYyOTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlclByaWNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJQcmljZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJQcmljZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJQcmljZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjU4ZDYyOTQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZmE1MmMwYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9PcmRlcldheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkV4cGFuZFhUcmFuc2l0aW9uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRm9ybSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlJhZGlvIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWUmFkaW9Hcm91cCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWRXhwYW5kWFRyYW5zaXRpb24sVkZvcm0sVlJhZGlvLFZSYWRpb0dyb3VwLFZUZXh0RmllbGR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NmYTUyYzBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NmYTUyYzBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9PcmRlcldheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2ZhNTJjMGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2ZhNTJjMGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlcldheS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlcldheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJXYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNmYTUyYzBjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODA4YTA0OSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXRlbUltZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODA4YTA0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI4MDhhMDQ5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZEaWFsb2cgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkltZyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlNwYWNlciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRvb2xiYXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCdG4sVkNhcmQsVkRpYWxvZyxWRmxleCxWSWNvbixWSW1nLFZMYXlvdXQsVlNwYWNlcixWVG9vbGJhcn0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjgwOGEwNDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjgwOGEwNDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4MDhhMDQ5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI4MDhhMDQ5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjgwOGEwNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjgwOGEwNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODA4YTA0OSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW1hZ2VVcGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkxYWU3YmI4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ltYWdlVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW1hZ2VVcGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MWFlN2JiOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBbGVydCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZEaWFsb2cgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQWxlcnQsVkJ0bixWQ2FyZCxWQ29udGFpbmVyLFZEaWFsb2csVkZsZXgsVkltZyxWTGF5b3V0LFZUZXh0RmllbGR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzkxYWU3YmI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzkxYWU3YmI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbWFnZVVwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTFhZTdiYjgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTFhZTdiYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2FjdC9JbWFnZVVwbG9hZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZVVwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VVcGxvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkxYWU3YmI4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IGltYWdlQ29tcHJlc3Npb24gZnJvbSBcImJyb3dzZXItaW1hZ2UtY29tcHJlc3Npb25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyDjgqLjg4Pjg5fjg63jg7zjg4njgZXjgozjgZ/nlLvlg4/jg5XjgqHjgqTjg6vjgpLlj5blvpdcbiAgYXN5bmMgZ2V0Q29tcHJlc3NJbWFnZUZpbGVBc3luYyhmaWxlKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1heFNpemVNQjogMiwgLy8g5pyA5aSn44OV44Kh44Kk44Or44K144Kk44K6XG4gICAgICBtYXhXaWR0aE9ySGVpZ2h0OiAxMjAwIC8vIOacgOWkp+eUu+WDj+W5heOCguOBl+OBj+OBr+mrmOOBlVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIC8vIOWcp+e4rueUu+WDj+OBrueUn+aIkFxuICAgICAgcmV0dXJuIGF3YWl0IGltYWdlQ29tcHJlc3Npb24oZmlsZSwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXRDb21wcmVzc0ltYWdlRmlsZUFzeW5jIGlzIGVycm9yXCIsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfSxcbiAgLy8g44OX44Os44OT44Ol44O86KGo56S655So44GuZGF0YXVybOOCkuWPluW+l1xuICBhc3luYyBnZXREYXRhVXJsRnJvbUZpbGUoZmlsZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgaW1hZ2VDb21wcmVzc2lvbi5nZXREYXRhVXJsRnJvbUZpbGUoZmlsZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXREYXRhVXJsRnJvbUZpbGUgaXMgZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlYzNlNWE4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZlYzNlNWE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmVjM2U1YThcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQWxlcnQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQWxlcnQsVkJ0bixWRmxleCxWTGF5b3V0fSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZWMzZTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZWMzZTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlYzNlNWE4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZlYzNlNWE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tQ2hlY2tEaWFsb2cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZWMzZTVhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmVjM2U1YTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZWMzZTVhOCZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaTogbnVsbCxcbiAgICAgIGl0ZW1fZGF0YTogbnVsbCxcbiAgICAgIHZlbmRvcjogW11cbiAgICB9O1xuICB9LFxuICBhc3luYyBjcmVhdGVkKCkgeyB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0X2l0ZW1fZGF0YSgpIHtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoJy9pdGVtcy9pdGVtaW5mby8nICsgdGhpcy5pdGVtX2NvZGUgKyAnLycgKyB0aGlzLml0ZW1fcmV2KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5pID0gcmVzcG9uc2UuZGF0YVswXTtcbiAgICAgICAgICB0aGlzLml0ZW1fZGF0YSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1iYXJjb2RlJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfpg6jmnZDjgrfjg6rjgqLjg6snLFxuICAgICAgICAgICAgICBuYW1lOiAnaXRlbV9pZCcsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLml0ZW1faWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICdmYXMgZmEtaW5mbycsXG4gICAgICAgICAgICAgIHRpdGxlOiAn5ZOB55uu44Kz44O844OJJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2l0ZW1fY29kZScsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLml0ZW1fY29kZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1hcnJvdy1hbHQtY2lyY2xlLXVwJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdSZXYnLFxuICAgICAgICAgICAgICBuYW1lOiAnaXRlbV9yZXYnLFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRfX2NoayhyZXNwb25zZS5kYXRhWzBdLml0ZW1fcmV2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1pbmZvJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfmiYvphY3jgrPjg7zjg4knLFxuICAgICAgICAgICAgICBuYW1lOiAnb3JkZXJfY29kZScsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLm9yZGVyX2NvZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICdmYXMgZmEtaWQtYmFkZ2UnLFxuICAgICAgICAgICAgICB0aXRsZTogJ+WTgeWQjScsXG4gICAgICAgICAgICAgIG5hbWU6ICdpdGVtX25hbWUnLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5pdGVtX25hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICdmYXMgZmEtaWQtY2FyZCcsXG4gICAgICAgICAgICAgIHRpdGxlOiAn5ZOB55uu5b2i5byPJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2l0ZW1fbW9kZWwnLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5pdGVtX21vZGVsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLW1hcC1tYXJrZWQnLFxuICAgICAgICAgICAgICB0aXRsZTogJ+ijvemAoOWFgycsXG4gICAgICAgICAgICAgIG5hbWU6ICdtYWtlcl9uYW1lJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0ubWFrZXJfbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1hcnJvd3MtYWx0LWgnLFxuICAgICAgICAgICAgICB0aXRsZTogJ1JUJyxcbiAgICAgICAgICAgICAgbmFtZTogJ3JlYWRfdGltZScsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fY2hrKHJlc3BvbnNlLmRhdGFbMF0ucmVhZF90aW1lKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1jYWxjdWxhdG9yJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICflnKjluqvmlbAnLFxuICAgICAgICAgICAgICBuYW1lOiAnbGFzdF9udW0nLFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRfX2NoayhyZXNwb25zZS5kYXRhWzBdLmxhc3RfbnVtKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1jYWxjdWxhdG9yJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfkvb/nlKjkuojntITmlbAnLFxuICAgICAgICAgICAgICBuYW1lOiAnYXBwb19udW0nLFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRfX2NoayhyZXNwb25zZS5kYXRhWzBdLmFwcG9fbnVtKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1tYXAtc2lnbnMnLFxuICAgICAgICAgICAgICB0aXRsZTogJ++8rO+8r++8tOaJi+mFjeaVsCcsXG4gICAgICAgICAgICAgIG5hbWU6ICdsb3RfbnVtJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0ubG90X251bVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1tYXAtc2lnbnMnLFxuICAgICAgICAgICAgICB0aXRsZTogJ+acgOWwj+S/neaMgeaVsCcsXG4gICAgICAgICAgICAgIG5hbWU6ICdtaW5pbXVtX3NldCcsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLm1pbmltdW1fc2V0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLW1hcC1zaWducycsXG4gICAgICAgICAgICAgIHRpdGxlOiAn5omL6YWN5pa55rOVJyxcbiAgICAgICAgICAgICAgbmFtZTogJ29yZGVyX3dheScsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fb3JkZXJ3YXkoXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVswXS5sb3RfbnVtLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFbMF0ubWluaW11bV9zZXRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1tYXAtbWFya2VyLWFsdCcsXG4gICAgICAgICAgICAgIHRpdGxlOiAn5L+d566h5aC05omAJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0X19jaGsocmVzcG9uc2UuZGF0YVswXS5sb2NhdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdO1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhWzBdLnZlbmRvcikge1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVswXS52ZW5kb3IuZm9yRWFjaChvYiA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbV9kYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGljb246ICdmYXMgZmEtbW9uZXktYmlsbC13YXZlJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aJi+mFjemHkemhjScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29yZGVyX3ByaWNlcycsXG4gICAgICAgICAgICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICdbJyArXG4gICAgICAgICAgICAgICAgICBvYi52ZW5kbmFtZS5jb21fbmFtZSArXG4gICAgICAgICAgICAgICAgICAnXSAnICtcbiAgICAgICAgICAgICAgICAgIG9iLnZlbmRvcl9pdGVtX3ByaWNlICtcbiAgICAgICAgICAgICAgICAgICcgwqUnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnZlbmRvci5wdXNoKHtcbiAgICAgICAgICAgICAgICBpdGVtX2lkOiBvYi5pdGVtX2lkLFxuICAgICAgICAgICAgICAgIHZlbmRvcl9jb2RlOiBvYi52ZW5kb3JfY29kZSxcbiAgICAgICAgICAgICAgICBjb21fbmFtZTogb2IudmVuZG5hbWUuY29tX25hbWUsXG4gICAgICAgICAgICAgICAgdmVuZG9yX2l0ZW1fcHJpY2U6IG9iLnZlbmRvcl9pdGVtX3ByaWNlLFxuICAgICAgICAgICAgICAgIG9yZGVyX2FkZF9kYXRlOiBvYi5vcmRlcl9hZGRfZGF0ZSxcbiAgICAgICAgICAgICAgICBrYWtvOiBvYi5rYWtvXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciA6ICcgKyBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgb3V0KGFycikge1xuICAgICAgYXJyLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbV9kYXRhLmZpbmRJbmRleCh2ID0+IHYubmFtZSA9PT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5pdGVtX2RhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRfc2VyaWFsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbV9kYXRhW1xuICAgICAgICB0aGlzLml0ZW1fZGF0YS5maW5kSW5kZXgodiA9PiB2Lm5hbWUgPT09ICdpdGVtX2lkJylcbiAgICAgIF0udmFsdWU7XG4gICAgfSxcbiAgICBzZWxlY3RlcihhcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1fZGF0YS5maWx0ZXIodiA9PiBhcnIuaW5jbHVkZXModi5uYW1lKSk7XG4gICAgfVxuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nNjQ6IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQVNBQklBQUQvNFFES1JYaHBaZ0FBVFUwQUtnQUFBQWdBQndFU0FBTUFBQUFCQUFFQUFBRWFBQVVBQUFBQkFBQUFZZ0ViQUFVQUFBQUJBQUFBYWdFb0FBTUFBQUFCQUFJQUFBRXhBQUlBQUFBUkFBQUFjZ0V5QUFJQUFBQVVBQUFBaElkcEFBUUFBQUFCQUFBQW1BQUFBQUFBQUFCSUFBQUFBUUFBQUVnQUFBQUJVR2w0Wld4dFlYUnZjaUF6TGpndU5BQUFNakF4T1Rvd05qb3hOQ0F4TURvd05qbzVPQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQURJS0FEQUFRQUFBQUJBQUFESUFBQUFBRC80UW1TYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THdBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKWVRWQWdRMjl5WlNBMUxqUXVNQ0krSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJSGh0Ykc1ek9uaHRjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THlJZ2VHMXdPa055WldGMGIzSlViMjlzUFNKUWFYaGxiRzFoZEc5eUlETXVPQzQwSWlCNGJYQTZUVzlrYVdaNVJHRjBaVDBpTWpBeE9TMHdOaTB4TkZReE1Eb3dOam81T0NJdlBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHcvZUhCaFkydGxkQ0JsYm1ROUluY2lQejRBLyswQU9GQm9iM1J2YzJodmNDQXpMakFBT0VKSlRRUUVBQUFBQUFBQU9FSkpUUVFsQUFBQUFBQVExQjJNMlk4QXNnVHBnQW1ZN1BoQ2Z2L0FBQkVJQXlBRElBTUJJZ0FDRVFFREVRSC94QUFmQUFBQkJRRUJBUUVCQVFBQUFBQUFBQUFBQVFJREJBVUdCd2dKQ2d2L3hBQzFFQUFDQVFNREFnUURCUVVFQkFBQUFYMEJBZ01BQkJFRkVpRXhRUVlUVVdFSEluRVVNb0dSb1FnalFySEJGVkxSOENRelluS0NDUW9XRnhnWkdpVW1KeWdwS2pRMU5qYzRPVHBEUkVWR1IwaEpTbE5VVlZaWFdGbGFZMlJsWm1kb2FXcHpkSFYyZDNoNWVvT0VoWWFIaUltS2twT1VsWmFYbUptYW9xT2twYWFucUttcXNyTzB0YmEzdUxtNndzUEV4Y2JIeU1uSzB0UFUxZGJYMk5uYTRlTGo1T1htNStqcDZ2SHk4L1QxOXZmNCtmci94QUFmQVFBREFRRUJBUUVCQVFFQkFBQUFBQUFBQVFJREJBVUdCd2dKQ2d2L3hBQzFFUUFDQVFJRUJBTUVCd1VFQkFBQkFuY0FBUUlERVFRRklURUdFa0ZSQjJGeEV5SXlnUWdVUXBHaHNjRUpJek5TOEJWaWN0RUtGaVEwNFNYeEZ4Z1pHaVluS0NrcU5UWTNPRGs2UTBSRlJrZElTVXBUVkZWV1YxaFpXbU5rWldabmFHbHFjM1IxZG5kNGVYcUNnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmk0K1RsNXVmbzZlcnk4L1QxOXZmNCtmci8yd0JEQUFFQkFRRUJBUUlCQVFJREFnSUNBd1FEQXdNREJBVUVCQVFFQkFVR0JRVUZCUVVGQmdZR0JnWUdCZ1lIQndjSEJ3Y0lDQWdJQ0FrSkNRa0pDUWtKQ1FuLzJ3QkRBUUVCQVFJQ0FnUUNBZ1FKQmdVR0NRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUW4vM1FBRUFETC8yZ0FNQXdFQUFoRURFUUEvQVA1amVEMXBBZmFreHgxcHdITk5vWWc2Y1VjZHFVSHVhYjlLTGhZWEdSOWFVWkhGQTU2VWd5T3RPNEI3bWs2SDF4VGlPT0tUK0hwU0dMa1p3RFJuak5JY0FWRVdJNjBBRE1EeWFpTFlHYzBwZXE1WWtrVWhDczFWM2JQRkt6RHFCVmNzYUFFWnoycUIycEdiOEtxdS9lbUFPL1kxV1o4Y1k2VU80cXE3WnBBRHY2OWFwczNISFdsZHNkS3FQSVQxNXAzQVdSK1FLcHlTZGpROG5GVkhlZ0JHZmppcWJ1Y1k5YWN6MVNra29ZaEhrOU8xVTVIeFRwSlBTcVVqOXhTQWJJNVBKcW04bU1qTkRTRHJWS1IrVFRHRWo5K3dxcTc5cVJwQTNOVm5rUHBnVUNFZVRuamlxYnVEeFN1L1ZhcXUvWE5BMkVqWnFvN2pyUTdaNHFzem50UUNFa2M5TzFWWGJISTdValB4anJWZHBNODBnRWtlcTBqOWhTTytCajBxczdaT0tZZ2RqMXFySS9ZbnBUbmM5S3FGeFFNVjJQVE5WbWJtaG41NXF1Nyt1YUFRalBuaXE3dHh6U05Kem1vV1BQTkFoR2JBeDYxWGRzOENrWnZXb1dKem1pd3hXWUdxNWJOSTdjVkN6Z1VBQmJQV29Td3lSU2s4aW9TMmVLWU5BeDZWQ1RrNDZVakVZNUZNSjlLUUNONzAwNU5IYWloZ0h0UjlLS1RyUllCZTlGRkE2MEFBOXVUUmptbDVOSFR0UUFsSjFwU1NhVHJUQVU1cFFPUHBSMCtsQUhHS1FDZDZPS09jVXYxb3YyQkJ3ZXRKNzBkcVBsb0JoNlVVY0NsSHFhQUU3VW82OFVuZm1sL2hvdUFZN1VkOFVuYWxKejJvQU4zT2FNRE5IZkI1b1BXZ0F6Z1lveHpSbjBvNFBXZ0FPZS9OSE9mZWcrdEptZ0JjSEhOR2FUcGc0cFJRQXRKd0tYa2MwYzQ2MEFKMjVGTDBIRkoxTkxpZ0F4am50U0NsOXhTZDgwQUhYMkZCT2NVWk9LTStwb0FPMUhGSE5IYjNvc0ZnSTQ0cGVBZWVLQnh6UWZ6b0FUcWZyUzlxQjZudlFjOXUxQUpoN25paWt3VDFwMUlBTkp6M3BPbEhibnBURWYvUS9tTTllYzBlK2Z4bzYrMUxtbU1UUFNseitsSVNDUGFnOUtBRkE1cE0wZGVvcGU5QVhBY2NkVFNkdWU5R2U5UnNjOFpwQUJQYW9TNXptbFk4N2hVRE1TYzlLQkNGczlhZ1lqclNGODlEeFVMRURyVHNNQ1Nhck8zclN0SVQxcXE3OVFhQVFyeWNWVWR5UGx6U3V3N1ZVZHVENzBCWUhmakZWR2NrY2ZsVG5rUFNxanVNSE5Gd0VlVGc0cW5JK1RUbmZGVW5rem1nQWtrcW03bnJUbmZOVVhjZGFMZ0R5SG5QTlVwSHB6dVJWSjN5Q2Z6RkRBUjVNMVRrazlldExKSjNxakpKMm9BSkhxbXo1NDdVcnZ3YzFVWit3NG9BSGZKelZSMnljZDZIY2puclZabjU0b1FBeit0VTNmQXlSU3UrMnF6dVBXZ0xpTzJlRFZWbjVOSTdrbkZWM2ZPYzBndUR5WjR6VlYzTkR1ZWxWV2s0cGhZSGZ2VlZuN2VsRHNOdkZWbVk5dUtQVUJHZnRVRWo1cEdQSEZWbWVnQVo2cnNmV2xadU1HcTd0NjBBTmRzVkE3ZDZWeno5ZTlRTTNIMW9BYTcrdFFzeEdhQzROUU0zR2FHZ1lNd3g3Q29TY0RpaDI3VkVUampOQUNFanBpb2kzR2U5S3h5T0toWSt0Q0VLeDVwZ0g4VkhGSFEwRERQYWo2OTZNNW9ITkRBT2U5TDlPYU04ZGFRWjdVQmNLT2VsR09LTWtVQWc2VUhnODk2T1J6UVJTQk1YbkhIRko3VWRhWDM2VTBBbExtakdlZzVvOXFRQ0RIRkpTa1lwZXRNQkRuT1RSUVJnWm96UUFaUDFwZTJLQjcwZ0ZBQzU5RFIwK3RIVG1qZzBtQW1UMDZVR2xIVDBwRHh4VFNBQWFYOFRTOTgwMDhuaWdCZmVnbjBvcGNaK3RBaEIwb3BEem5OS1BXZ0F6UVFBY1VZN0VVZlNnQmFUcDBGQTZVQTlhQmg5ZndwTVV2T2FPL0p6VHVBRTU3VVVjMGNZeFNBVWcwdkI2VTNxTTlLTTgwQUdlTWswTWVhVWswZER4eVRRZ0U2ODBmU2pHR3lhV2k0V0RHVGcwdlFVMGUxTDNvQU05eFJuRkdPT0tPZzRvRUhQVHBSMTdVSDFIZWpIcFFNLy85SCtZdmtITkxrWjRPQlM4K2xHY2UxTUE0eHowb3h6bnJTZTVQU2w3SHRRTVFacGFibmptbUZzY1VnQmp6OUtpYzBGaCtWUU0zZWdCV2JyelVETWFSbXgxcXV6R21BcnRnY25wM3FzN2RTZUtSM3F1N2c5RFFGeEpIeDlLcnUrUHAzcHJ2bXEwa25OQWdkODVJTlZYZkhGSTc1NUZWSGZpZ1lPNTV4VlYzR09LUjVEVlI1RDJKb0JvSGtJcW04bVJRN21xY2tuSFdnUVNQbXFVa2xFajgxVGtjVWgyRmR4azhWUmtrNDVvZHpuR2VLcVNTVTdneEhmUFNxYk9hVjNCcW83bnBRSVNSdS9XcXJzT3RLN25yVlI1TThpZ1lPd3FxN0hHS1IzN1ZWa2ZCb0N3NTM2MVRhUW5PT3RLN2M5YXFzM1kwQ0VrZkhGVldmZzVvZHowcXRKSjE3MERFWmpWZG5wSGJOVjNjZGFBRWRqOVJWZDI1NW9hVHRWWjJQOWFBVEZaaWVUVlVrMHJNVFZkanpRQU8zUFdxek5Tcy9lb0hQT0RRMERCbnh4VmRuSGFsZHNjOUtoWmljaWdFTkxaSjlLaWMwak9LaVkwQUl6VkV6ZHFWbXFJbm5paGdJVHpUVGppbHozcE9QclNCaTBocGVvcEtZV0Q2VUFVR2c0b0FNVURwMHBjak9LVElOQ0dCUFdsNTZDZysxRkJJWnh3RFNkYVhJbzdaeFFoaUNnWW9IWEZIdjBvRUwrTkoxb0hVbWduQXhRTVVlOUp4UWNDam1nRWhjbnBTZldqZ0dsejJGQUFPZWFRNHBmY1VjZHFMQ0U0eFJuTk9QVWdVZzY5YUIzRXBjR2tGTHllZTVvQVVuSElwQ2FEZ1VsQ0FEeFM5K1B3bzQvT2ppaTRDVTdCcFBlZ0Qxb0FNajhLUGIxbzRwZU04aWdCT3Bvb3ozNzBkczBJQUpQZWp2eFNqSUZGRndDZ0hqMG95ZTNhak9PYUFFNzgwZTlIZk5MMTVvQU00NDcwbVQybzVKL1NnWkhOQUNqanRSMU5CNjBmVHBRSVE0L0tseGpqclJudFIxNG9BQjB3YUFCUm50U1l6UUF2Nllvd1FhUUNuZHZTa00vLzlMK1kwdHpTSHJqR2FNWjRvSUhVVlF4ZStjVW5YbWdZNzB3bms0cEF3WWdEbW9HT2VLY1cvdWpOUU0rT2NVQ0IyQi9Hb0dmUEZETjNxc1c1NC9TZ1lPMktydStldEt6WkZWWGJKd2UxQUE3NEZWbmZGRE1RYXFNL2FnQWtZMVZkODBNNTYxVWRzVUF3a2Nqa0dxYnlZNzBydmcxVGR4bkgvMXFBRmR6aXFVcjhFVTUyNHFsSklNZGFTWVdFa2Z2Vk41S1dSOGppcUx1ZVJUQVdWNnB1L09LSkh6d2FwTythQVlTT2FwU09CMHBYYkhBNjFVZDg5S0VBanZ4VldTUTkrZ3BaSk9PZTlWSGM5RFRDd094SXFwSS9XbGtjMVVkd1JTdU1HZkF6VloyQXBYYzVxcTcrbk5JbTQxbVBJcXU4bU9hSGJ2VldSc25qbW1OSUhlcXJ0K0FvWngxRlZXYjFvQkNzNHFzNzVvWitEL0txenVBT2FBRmR3S3JNeDZtaHpWZG1vQVIyQXFGbXlmYzBqTjZWQXpab0FVbnVLck1lYWNXR2FyRnNkZTFBQ3MzRlFrOVJReDR3YWgzWU5GZ0JqZ1lxRmllbEtTQ2NWRTdab1lJQzNyVE85TC9BSnpTZHFBQWRhT01jMHVQd3BPOUFCMUZBcENTVHpTZzQ0b0FLT0Qyb0h2UnlSUUFjVVpIVTk2QmlqZ0NnQmUxSjE1b3gzSEZIR0tBOUFQWGlsNkhtazZkS09ldEFDZ0RwUm5OSUJTKzFJQTc4YzBuVHBTOGtVZ29Dd2NkTTBBMGMvU2w2OENuWUFIUFdrNVBOSFdsSHNhQUVIVGlsTkh2U2ZTaEF4YysxR2U5SEI2MFVBQjYwbWVlS1BhbG9BU2w3OFVjZEtEa1VYQVByUjE0RktmYWs2L1NnQUdSUm5ITkg0MG52VEFYakhOSDA1b0dlbzRwZUR5YVhvQWhOR0tEbWw1N2RxQUVvSDYwcHp4bWppZ1lucFIxUEZLZU9nb0I2VUNFNUJwTytCVHNZcFBjMENESm8rbEx1Sm85NkJpRVVjbmpGS09lYUJRSU9uT01VWXpTWkhYRktQVTBXR0E5S0NNQ2t6bnJTakhOQUIxNlVja1lGSFhnVUgycEFmL1QvbU5PTTgwVTNudDFwR2I4S1l4Q3c2aW9tYkhRMGp2MXFFc1JTRUROak5RTTJmbEFwR2JqaW9YSUZNYkd1M1B5MVhaOGM5YzBNL0dSZ0NvSGtINTBBTmtmM3F1N2M4SHBTT3dHVFZWM1BJb0FSMy9XcXJ2NjlxVXVPdjhBazFVa2ZKNW9IY0hmTlUzY1k0NjByeVZUa1lZb1JJTytCbXFieVo0OUtXUjg4VlRra3lPdEFDU3lBOFZUa2NHaVIrK2VhcHlQeG1pd3hIa3FtNzg4VVBKenhWT1NRVUFKSklLcHlNYVYzcW5JK0tld0JJd3htcXJzT2FIY2RCMHFxNzk4MGhDTytmWVZXZHU5STduclZWbXpuRkNHRHY2VlZkaGpGSzdkcXFPL3FlS0dBNTM1eUtwTy9QTk9ac2UxVldhZ0VEdm5wVmQzTk5aejA2Vlhkd0JtZ0JKSEI1OWFybHowcEdmMXFxekRQTkZ3c09aK0tyTS9YTkR0bnJWWnp0T0RSY1lyTjNxQmpTTXd3VDNxQm14MW9FRE5qclVCY0UwTWVhZ2R1YzBBT0xkelVEdHpuTkl6WU9EVUxONjgwQUt6ZXZGUWxpY0UwckhBNTRxSW5IcFNBYVNSU2V4NG96Mk5KVlhBTTg1TkhYcFJuc2FDT2VLUUIxcHc5NmFPbEdNSGlrRERrVVVEdFNETk1CMmVNRTBnNjVvNEZGQ0FEMXg2VWZyUzhkT3RKaWhBR0tEbWpyMXBmcjFvUUJTWjV6UzhVbU1VZ0Y2VWdQRkhVMHVPTTA3QUpUdmNVblRyeFNkT0tBRkFBR0NhRG5vYVFjVVpKR0JRRmhjOFVuWGlqcjFOQnlSbWdBN1Vkc0h0UzloNlVtUlFBcC8rdlFPdEE5NkRSWVFFSHFhTWM0RkE1K3RIVGtVRERqdFFPZUtBUU9PMUx6bkFvQVEwZFByUjcwSEJOTmdGSFdqdmcwZER6U0M0WUovQ2pIYWs0NlV1UUJnVUlBNjB2VTRwRDE0bzU2Q2dCY24vQU90UVR6U0RyeFMrK0tFQW5PYUJuR2FNZTFHQURRd0RwUU1DakJKRkdmenBBS1B6cE9EMG82Y1VvNG9BRDB6UW96UUNNVXZCcGlHKy9TZ0hKNlU0Ky9Xazc4YzBERE9QclFlbWFPbkEvT2djY1pvdUZnUDFveHpTQTVwZUQxcENQLy9VL21KWWpHVFVKWVl3ZnpvWWttb1diajNwM0dETnhtcTdNRDBwU3g2OXFnZHM4Q2dCR1lFMVhkc2Q2SGZBNHFzN0VMbWdBa1lZcXM3OEhPS1IzR2VhcXU0SDRVd0JuNXFzOGc2MGtqOXlhcXlPcDRGSUdKSy9QclZSMzRvZVFkNnFQSnh6Mm9FTmtrR005NnF1NDc5cUhrcWs4bnBRTVY1QlZOM3pTTzRIV3FieWRUU0FKSk1jZGFwdS9PVFJKSVNhcE81L0VVd0NSeHRxbkkvTks3MVRrYnExQUNTdlZTUnptbGQrT2UzNFZWWjFicm5paXdBNzlnS3JPK1Jpa1ovU3Fyc2U5QWdkOGZTcWp2Njk2VjN4VlozN1VYR0R5SHZWUm45YVYyelZaMzZqT2FRaEN3NjFWWjZIWVZWYVFrODlhYlF4WGYwTlZtWTgwTXh6elZabnlldEFDTTNPUFNvR2JQQm9adVBTcXpQbnJRQXJObXF6c01VNTNJNXFCem5uOWFBR3MvcFVKUFBGSXpFREFxRm1KbzhnRVk0R2FoWTVwV1BwVURNTzFOQTBLeHp4VVROazBoZklKcUxkMHBXQUNmMHBwTklmU2ptZ0E1NjBIcHoxcEtkMVBOT3dDWko0b3ozb0p6MW9wQUpTNHh4UjdHbFBURkFDRGprVUhHYU9PMUhGQUJubWx6MjdVbVQwbzYveW9Dd1VwNHB2MXBUakZBQzV4eUtUZzhDamo4S0QwNG9zQVl5T0tCanRSU24xTkNZQVJSa2lrelMvVHRRRndKb1BTbTRHT2FYNlVJTEM4SGlqUHJSOWFEenhRSU01bzl5S09TYUQwb0d3SjR4U2Q4VXZ1T1RTNUswQUlCUi9LajJGQTQ2MEFIR0tNWS96MnBSNlVESUZBRFJ4U2pHZWFVMGc5T2xBQWVSUnowb0lOTGp0UTBBbldqTkdmVG1nQ2dBUEkvblM0OWVLVDlhTTBCWU90THgxRkhUazBoOTZBdUhJTktUMnBEUmc5YVFDODRwQWVLQnlhVThjZHFZaE9QclFUN1V2RkowNG9BVVovQ2tQdlMwSGpta05BTVpvenppamlqMk5NQUFGR0NSaWp0ZzBZT2FCQm4wcE04SHRUdW5Ta0dPaG9BRHp3S1FjOWFYbnZ4Ui9Ea1VBZi8vVi9sK2M4ZlNxN3VPdldsSklQRlZ5MytOTkRRTStPUlZaaU1ZcFdZNHFxN25QTkFDdStQYXFqTWZ6cFdZZHVLck8zcFJjQVp4VlIzeHptaDM0eDFxcTcvaFFGK2dTUGc4Q3FieURyM3BKWC93cW83OGVsQUN5U2RxcHUvYzBTTjcxVGtjSDd2NVVBSkkrUlZPV1R1RFN5U1k0eFZKNUFPaHpRQWp1QlZOM1BYTkswblAxcWxKTG1nUElSbjRxbzcrbEk3NEgwcXBJNE5BZ1p3YXFTUFN1NUZWWGJQTkE3Zzc5elZSbXdLVjN4ejYxVWFRaklvU0FIZnVLcXN3Rkt6QUhGVkhmSU5JTENTT0NEVloyT0tWM0djQ3FySFBCcGhZUnllOVFPL2ZyU1NOMkZWaStSOWFBRVpnZXRWMllkK0tHZnY2MVdkKzVvQUhmRlZuZmpCb1kxWFp6UUFNNTZuclZkMk9hVm1QSkJxdXpZTkFXQjNCNUp4VmRtcFdZQTlxZ1p4amlnQldiRlYzWWRxR2JQVHZVUks1eWFBRmZIZnRVTE5uUHBRV3djOTZpWWpHY1VBQlBmTk1vUEorYWtIWDBwQUJ6UjBHUlI3R2cwQUdEUy81eFNkdmFsUHJUQVE4SGlqR0tNOTZQYjFvQklPbEZIVHJTOVRtZ0FGQUhOQTlhUVl4elJZUXZUbnY5S0NjMG1SbWdtZ2RnNlVaenhSeDBvSDFvQUtNNTY4VXZQU2cwTUJPdkdhVW5ubWdlOUhQZWtEMERwOWFUaWw1cEQrVk1MQzR4MW9ISXdLRG1rRkFCeDJwY1VZUDUwbnRRQWQ2WHJSMUhGSVFLQXNIVDNwY2VncE9PMUtjSGlnQmNqb2FRaWs2OENsSkhCTkFDa1o1cE90SGVqcitOSUxoMnBlMUZKbjlLWVhFQXpTOTgwSEhwUmpOQUJucHhSakhJTkE0NW82R2dRb09hTURybWtKejFwUUNhQUR2a1VudFM0T09sSFE1b0dKaWorZEtTS01ZSEZBWEFjMERuZ1VDZzlhTENzQkg0VUFudlNVdWU5QXhNQWNtalBOS0tPL0ZBV0ZIUFdrNlVoeU9sTG52MW9zQWNVREhXazRwY2RhQURCR2NVZE90R00wcDVPQlJjUW1lMUwxd1RRY2RhWDYwSVovL1cvbHZaL1NxN01NODBNNC8rdFZabTdWUXhIZklxczdrZEtXVis5VlhmQU5KQWdkdU1WVWRqMzdVcnZpcWJ2aWhBa0R2NlZWZVRJeFNTTmptcXJ2Z1VBTmtjZXRWSkgveG9kZ001NXFuSTR4bWdHd2trOU85VTNreHpSSTRIRlVua29zRmdrZkpKcW5KSUtIZXFNa29IZW0wQ0ZkdXdGVTNrN2lpUisvYXFiT01mMXBCWWUwbWVhb3MrYzU0cHpQbmdkYXFNNDcwQWhIa3prR3E3dmpOSkpKelZabUo0b0FhemdEMHFxNzV5S0pKQ09hck8vY1VCY0hjWU5WV2ZuRkR5Q3F6dHoxejdVSUFkZ2V0VnBIejAvR2tkZ2MxVlpnZU85QUF6ZWhxczdFMHJOazFXWnV2TkFDTytLZ1pzZEtSbVBTb0hPS0FFWnUxUU0yRFNzZU9sVnkyT0tHQWhidlVMTjJwR2JQRlFNOUNBQzNyVUxOZzU3MEZzREFxRXQyb0Jpc3dJejBOUTVKNW9KNHFJbjhLQUJqeFRDY2c0NXBQclFNZE0wQUgxcE8xS1IrbEtldkZJUVk5S08yS1RPT3RLVG1tTUIwNXBQYWdETkwyd2FRQ2NVWjY1b3ptbHh4VFFDYzlxWFBGSlJpZ0dGR0tBTzU0bzZjVVhDd3Z1ZTlKUWVsTDA2VUFIVTgwbmFnZEtYcFFBbnJTMGNpZ1pHUHBRd1luUFNnVVpQV2loTUJmZWpQcFI5YURuclFDWW50UzU5S0FTZTFIdWFBc0djOFVuUVVvNTZjVW85S0FHNDRwYzkrbEJ6bmlsNEk5S0F1Sngyb1BGSHJ6UUFhQUVPY1lwZS9QRkpuaW5FY1pJb3NBblh0UUQrRkJQYzBFODhVQUhISE5HM25GTCt0SWVNMEFIVHJSMTcwY1l6UnpRQVo1by9uU2tZbzYwQUtLYWFYR2V0QXprNW9BVEFvNE5PcHVRZTFBQlJrOXpTaitsSUIzb0FQV25jOVJUZU9uYWxKOWFBRUpQUTB2SGZtZzRITkppZ0xDMG5TaWxIT0tBWWM5YVVqMXBDZldqdHpTRUZHTUhqcFJnZDZPcDRwZ0hTbDk2QWVlT3RIc0tBQTQ2RE5MU1lCcGNEdjhBblFobi85ZitWNW00cXV6Y1pGSTc5NnFzUU0weGl2SnpnVlVkc0hqaWxkejBOVTNrQjRvQUpINDYxVGQrL2VpUnpnbXFydnptaG9iR3UrQmlxcnVEOUtIZkZVNUg3MEN2MUVrWUQ2MVRkODlLSkg1d090VkhrSXo3VUFJNzU0TlVwSlBRMHJ5YnM4MVNrZWdPb1NTRHZWSjN5Y0VVc2pFOWFwdS9KNG9BVjVQZXFqeVk0TkR2amdWVlo4KzNlaEFETjJxbzdqc2FWMzlLcVBKazhVQURTZGFxdTQ2aWgzd01WVlpqMm9Cc0hhcXJ0bm1sZHNHcXJNTzlBWEIzcW94NXpUbWM5NnJPMUZ3VEVadldxem5tZ3RrMVdaZ0tBc0s4bWVEVlptSFhPYVYyeFZWMnp3YUFZclBuT2FydStCelE3bnJVRHNlbEFDTTNlb1MvWTBqc1JVQmIvd0N2UUFydVR4VURITkt6ZWxRTTNyUUNGWnNkS2hMRFBORE1TT0tqSm9CaUU1SHBURHdhTTUvclNaNDlNMEEySEFvUEhhanIxb09PS0FzR0tDS0JSOUtBUURnVWZqUjdpanIwb0JDOVJTSDA5T2FPL0ZKakdSUUF2SGVpaklvQW9BUG9LWG42VWxGQU1CUzBmMHBEUURGNUZBTkoxSFNsOWgzb0FPbEowbzYwcDlLQURQTkoycFQ2VWNpZ0JQclM5ZUtRVXBKNzBNTGlqamlrK2xIV2tvQkNuUFNqa0NqTkE1NU5BSVErOUF3S1hnOFVoOUtCaTVQYWpBRkZMK0ZERUpuRkhVMGREUjIrdENHRkhJb3djVXVQV2dRaE5HU09welM4RHJSbkhJb0FUa2UyYURTamdqbk5JVDJvQVU5YUIwb3lLT0NNbWdBOTZUSnBjOXFUSTYwQllPblh2U2ozcENmNGFDTUNnQTlxTzFMam4zbzQ2R2dBR0tPL05KejNvNG9BVUh0UjI0b3pRRFNBTzNBcERRZU9SUzhnNU5NRXhPU2VhVVV0SjFwQUdPZWVhRG5PS09EeUtPTzlVbUlBZTlLQ00wZ0dLWHJTQVg4S1RqQW94bW5ER09LQmlZenppZ0hJelM1STV4UUIvZG9BLzlEK1V4NURWUm45S1YzcW04aEo0cGpTQjVEakZWWkpLSGZ2bXFjajVPZTlBSVIzcXBJL1BGTEpJUnptcU1qNTU2MEFMSko2MVRray9Pa2xmZysxVkhrNjBBTEk1NXFsSkp4MXBIa3gwNCtsVkpIN1VBTmtrSUdCVktTVHNhV1IySXgwcXBJNW9BUm5xdXpESE5OZHpWWjNvQmlPL3dDSnFxemNtaDN5Y21xcnQ2VWhpTStlbFZuYzlLSkc1NHFzNytsTzRocnQ2VlZkODlhVjJxcXprbkk2MElBZCtocXN6ayt4b1o4aXF6c2V2ZWdCSGZ0VlptN1VyTmpwVlZuNXdLRUE1bjVxcTdjME85VjJlZ0VET0RuTlFPZWFSanh6VUR0M29DNGp2K2RRcy9wUXpkNmhac25rMGRBRVlnWnFCK2VsQmJtb21QRkRBYVdJTlJra0hBb0xZRlJrOXpRQUVuR0tqem42VXVUMnBQcFJZQlByeFNqclNIUGVpZ0xCelJ5ZUJTMGg0T0tHQVVVbnRtbHh4eFFBdWVNbWs3VVVkOFV3RjQ0Rkp4MXBlOUI2ODFJQ1o5YU00cFJ6MW82YzA3Z0p6MTYwdU94NjBuU2c5Y0NnQlR3ZnBRQmlrNjBkRGtVV0FQd3BlS1E1eGswdWVPYVlDQWZoUm4xb3pSMjVwQ0Y3MEhqMnBQcFJ0b0dMMEZJZW1LWGpyaWpvY0NnQTlqUmpqZzBjMGRxQUE4ZE8xR090QXhTZDgwSUFQUEFwU2NkS01tZ1VBTGlrUHRRUFdnWW9ZQ1V2V2pvTTBZb0FLTUhvYU9oNHBPQUtMZ08vR2twVHdPS09PbEFBU2MrbWFUam9PYUR5TWVsSFhpZ0FISEJITkx4bk5BeGs0b0dDUDZVQUdjakZCNXBPbkZBQTllS0FGNjhVWnpTYzB2MG9zSUR3YzBFNUhIRkdPYVRBeHpTR0xRQjJGSEhhamc5YVlJTzJCU1lIR0tYQjRwZTJSUWhDQVlQclIwNjBuUTlLWFBOSVluVVU3QUJ4VFJ4UzlCeHhUQVh0ajBvK3ZQdlNkcVVjSEZBQVRSMTYwSG5nVXZOQ0FPbkdhVVl4ZzhpajJINVV2UTBYQmlBREhyU2tkcVRrY0VVdVJuMXhRTS8vMGY1TnBKT2VhcXZJUU9PbER5RE9EeFZSM3hUQVIzeG5OVkhlaDNQUTFUYVRzRFFNSkpPb3FrOG5VRTBzajQ0UE5Vbmt6OUtBQ1J4MS9yVk9TVEhGRWprSE5VM2t5S0dBanY2VlRrZmlra2YzcW83OFVBRHZnODFWWi93b1o4Y21xYnY2MElCenlZSEJxckpKM29rZlBlcXJTWUk5NkFHcy9QTlZYZnJnZGFjempOVlhZODBBRHljNEhTcXJPTVl6U3M5VkdmajV1Z3BDQm5JT0tyTzVCK2FsWitQYXFqUHhUWXdkcXJGaFN1Mk92U3FyeVVBS3oxVllrZzVwUzNweFZkMnhrVUFEdU1WWFlrME8yQlZkbTdpZ0xnN1lxQXVlMURONjFDekROTUVJVHpVTE9hR05Ra25yU0JnekFtb1NTZWFHYk5SazBNQkdQclRDYzBaNTRwQlFBZWdwZnJRUFh2U0Qwb0FYSTZHa0hhak9LTWtkYUFBbkl4UnppbCt0SFNnR0lNWXhRZUJSMTZVZGFBQTlhS0tNRTBBR2FYT1J6U1o5YUJRQWQ2TWV0S0FQV2s0SFRyUmNkd0hQYjNvK3RMM09hVDJGQ0VHVG42VURpam9jVUdnUXVDT2FUcitGTDlhUFljMEREMkZBNlpwT3RMMTVOQUFUK05BNXhtZ0h2UndSelFBWkE2VXB5ZUtUcFJ3ZXRBQ2NEclNnVUVZRklSUUFVdlBlanAxb3pRQWRLWGpwU1VjZzgwQ0ZIdlNkODBEQUdLTy9OQlFVZXhwT2FkazlLR0lDVG5CcE9weWFNSE9SUUFUMG9zQXB4eFJuUEZJTWtZRkwvV2tBMzNwd1BOSndQZWp0bW1BZGZwU2pPZUJTWXhSa0U5T2xBTVhPVFNkS1h0a2lnNHhrVUFJQU8xSGJOS09PZlNrd1Q3MEFKamluKzFKMTROQk9EajBvQUR6Ump2bWdBNDRvSXdNVWdENjBuQTVwY2tjMHBQNDB3RzRPS0NlUHJUczVvd0RRRnhPbExTZHMwbzZlOUFnRkx4MzdjVVlPUWFEMXpRTU8zSEZLZW5GR005S1hQZnJRZ3VKejk2anFNOXhTNDR6UndlbEFBQitWQkRjZWxGSDBvdUIvLzlMK1NKM3hWS1IrT2FWMzV5YXB2TGc4MDdqWVBKM0ZVMmt6eWFKSHdlYXBPK2Z3b0FKSkIvRlZLU1RqTkxKSU9SVkdTVGcwQUs4bURWR1IrS1dSeU9LcXlQbWdMaU14L09xcnlVU1NkcXFPNDdVV0FWbTVxbTdrOWVhVjM2aXFydWNVQW1EeVlHVFZSNU1IQS96K2xPa2IwcW83NEhCb3VBanYycXM3NUdLSGJ2VlYzTkFnZHV3cXE3K3RLemNrbnBWWm5IU2dZUEozSnF1N0Q2VWp1UnhWWjNCT0NldEQ4Z0Zac0hOVlhibkZETUR6NlZBemdkS0FRak1PMVYyYjFvTGVoL3JWZHp6MTk2QVFPMVFzMkI2VWpzRDBxRm1BSkpwQUl6VkN6Y1VFbnZ4VVJiOEtBUWpISUo3MUdXSFFVaEo3ZEtpT0QwUDRVd3VJekhyVENmU2pQY1VtZWVhUXJoMzRvbzk2RGs4VTdERHZnMGhwZXB5YVBZVUFHUGZOQlBjVXZCb0lHY2V0Q0FRWkhOS09ldElldk5MbkZBQmpPUGVrN1pvUEhlak5BWEFlMUhhanZTKzFBQjBwTTg4ODBZOUtLQURqcFNqM295T29wQjE1cGdLQm5nQ2s0N1VkK2VCUVBiaWtDRnpqR0tRODBESHJTbmcwQXc2WnBCU25OR00wQWc0TkFBemlqSGVrRklCY2VwcEJUczQ0cE9wcGlFSEhOQVByUzBjNDRwakFnZGFRNEI0NW95UHJTL1FVcmdIUWNVVWNIclFNMEpnSEhyUi9Ta1BYaWw0NjlhQVlZeHpRUjNvNTZVWUdjVUFBNmMwdnVLVEdQd293ZXRBQi93RHJvSDZVSDBGS0JpbUFoNG8vMlRRU2NVdkFGSUF4eG1nRE5CNllvejNvQVFkZWFNZ0hOTGpOSjA3ME5nSEgxcGZyUjlLVDF3S0FBZGpSMEdEU25IVHZTQSsxRnV3QyszZWpPYVhJQXBENlVnc0FIdlNZSnBjMFlJK2xNQk92dFRnTytLYm1sT0Qxb0Joam1qSXBlcDlxTnBGQUJqbklGTDBwRFFNWnhSWUxDajB4ak5MeDB4UjBwQU1kT3ROZ0wzcE8vUFdselR4ZzVCcEFOQTV6MW95Y1lOTFIzK3RHZ0FPQlJpbHdQdTBxblBGQUkvL1Qva0tsbDlhcHZJTTBzajg4VlNrZk5PNHhKR3FuSTNmTkxJLzZWUmtrR090QUNPM2Fxc2tuT1RTTzVBeWFwdTU1b0JDdEprNU5WSGZqdlE3Ky9OVlhjR2dHRHZrWnFxN1pvZHUxVldmSjQ2MGdZanllbFZuYkI1cEdibm1xanZUdUlWMndjMVZaeDYwcnVNMVZaL1RtaEFEdjNxcTdZb1p6eU90Vm5PZVRRQU0vWTFYZC9Xa1o4NEZWbWJIdlFPNE0vRlYyZkhTa2RqZ2dWWGR1S0FBdG5pcTdOelNzMlI5S3JzM0dNVUFEUG1vR2JQRkRzUHpxQjJ6UUZ3WnVjOUtoWThZcEdhb1N4eGpGQU1VdHhpb2M5ODBqTWNlOVJsc1VCY0dQclRNOXhTSGswbjFvQUtYdlNVQTQ0b0JCanNhQjYwdmJpa0lHS0FEdFJqdlFSK0ZIVGtpZ0FvK2xHZWVLS1FCakJ4UjYwY2ptbDZVN2dKMEZIMStsQjVvNzhVQ0Y3OEdrN1lvNEp6U2xzam1rTVE4KzFMMG96aWdIQnhUQVRwU2tqTkdlb3BEUUF1UFRtakZJZW1EU2tjVUFKMUh0U2c4VW4xcFNlNU5BeE9sT3hTZTFMeUtRaHRMOUtTbEdNMHdRWXpTWi9PbEF6MW9ISFBXZ0xCUnoybzdjVVo5YUJDbmlreFNuazBtTzFBd0dTYUJ6UU1kS0RuclNFQTRwZWd6U0FldExuajFwalluZmlsR2FUSGFsd0NPS2JFSVBTakhIRkI1cGFRN0NjZGFDQjFITkgxcGNkalFJTzNOSE9PYVRwd0tBS1F3endCUVBXbE5KVFFXQUE5YVBZMEhubWx3UitOREM0WjU0b1VaelNaejE3MHVCMm9RQjdEaWpJOWVsTG1tamtlZ29BVUhQTkw3VTArb3BlMUFXRStsTGtkK0tPRDJvSDB6UUFEKzdtakdPaG85OFU3QUl4U0FUa2NDbDI1cFBiMHBUbnRUWUFSMnpTNHBQYk5MeDBvQm9CanZTNEE2VWh4MUZLZmVqekJDY1V2YWp2eFNEMEhhZ1E1ZWVsQzVITkE0cDJQUVlvR0hUa1U3QXh6U2daNUZLQVFhQVAvL1UvanprZjBxbEk0QXlLVjN4OUtwU3kraHBnTmtmUFdxa2tueStwb2QrS3FPKzZpd3hIZjhBdlZWZHpta2VRWTQ1cXE3OXVsQ0FXUjg5NnFNNTdVT3c2MVdkeWVLQVlqeUVWVmRzRE5LNzl4VlYzSk5BQ08yS3F1NDZDbGtjOVJWVm43MElBWnVjMVVadlRwUTdIb0tydXdQZm1nQVp5UnhWWjI0eUtHZlBmaXF6c0I5S0xpQm02NXFzNzl1OUt6am5IRlZXWWpOQXhXSTZpcTdPUnlhR2JnaXE3TU8zYWdRck54eFZkeU8xS3plbFFNdzZHZ1lNUm5rVlhadTFLNUhlb1hKSXpRQWpIQndLaVpzZE9CU3MzTlF0a2MwZFFBc09uU28rbzRwZTJEU0Qxb0FUdlM5c1VtZTlIZWdCZW80cE1VRDFvd2FMZ0dlUGVrSDUwdEE2MEFoUWVLYjdtbHgycFFCUUZ3elNkT2FCNmdVcDllOUZ4Q25HYWFlQmlqaWxJN1VERDYwbEtjVWZTZ0E2MG5GS2VSU1VCWU01cGVweFIycEtRSVhITkljNTVwYU9vcGhZUTVwUVBVVW4wb3pqanJROVFGUFBGSURqcFR1Z3BPOUFDY2QrYVUrcG95QnpTWUI0RkZ3WW93RFJ6MnBPaHdLT3RDQzRkS1hwMHBjNW9QVDB4UXdFSXlhT1J5YVBiMHBUUUZ4UDFGQjk2TTlnS1hIclFGeENPS09NOFV2VTRvem1nRUhmbW05cWNmUTBtUFNtSU9uTkhhak9hQjFHS1F3K2xMMSt0SjBQRkhHS0xBTGpCK3RKUm1seHpRQW5YaWc0OUtVbnNhRHljVUFKUzU3MGUxQTZVQW1MMjRwRHgwcE9UU25Cb2FCaDBwYzkrOUI3WXBQU2dRbjFweHhSa0E1b29BVCtWSEdCUzU0TkprZFNmd29HR2ZTbDZuMm96amtpZzhVQUpqTk94NlVIOUtUclFJTWZoVGppazk2WHIwb3VNVEJBNXBlbk5LVG5yUWVsQVhFejY5UlR1bElDT2gvU2djOUtHQUFlbEtNR2dIdlRnUHpvQUJrZGFjT3RBNUZPSE9SUUFnSFFIdFVnSEZOQS9ocC9haGdmLzlYK05tU1NxY2tudlN5eVZUWi8vd0JWVU1SMzkrbFZYYmcwUEpnWnFxN1VnQjM1NU5WSGJQSHJTeVBpcWpzQndhQUVaaFZkbngwb2tjNE5WWGJtZ0JIZnVLck0vd0NkSXplK2FyTzNjSDJvWUE3NHFxVzVvWi9RMVhaempCb0JpT3h4aXF6dWV0T2M5aFZSbVAzcUEyRmRoVlV0M0ZEdHh6VUR0UUFPM1hQZXE3Tm1rZHNWQXpkalNBR1lmbFZkaWFjelo3VldMZHM1cDNBVjNQU3E3TlNsdXRRczNGQ0FHT1JVVEhweFNNMVJNY2pBSDQwV0FDY2NtbUVqOGFUY09vNjBuR2FBRHIxbzRvNmRLRDBwQllPdmFqNlVjbWpINjB3QSszZWtwZTlIRkNCaDFwUmdkNlFVZGVmU2dCY2ZoUU9LVHRTa1o2YzBBSnhpZ1V2dlNFMEFIV2xQUGFrNzhVVUFISk9PdEx4U0EwdURRd0RyU0FITkI5QlMwSUdIQkZJYzk2WEhZVWh6M29BZG5pa3oyb3ozbzRKb0FQYWpKSDRVWnlPS1Qyb0FVOERGSm1sNDZVWU9NMEFIYWpzS0NlUHBTZ21nQk8zQW9QcFFjZHFNZTNGSUxBYzlLTzFKbjBwY2RoVEFUMkZPSE5KazR5S1hQWTBBSEFvelNkT0tCMG9BTWp0UUtQcCtsSDFvQVVjVWh3UnhTKzlIUGVnQTVIRkFOSU90QUp4UUF2MHBCbk9hWDZVbU1kYUVBYzRwY0hyU2UvcFM4OWFMZ0hTanFjMGNZd0tXZ1FuU2dBOUtBTWM1bzVCcEFHMmpJNkNqdGcwQUVVMk5CME9LTTRGSEJvQW9BQ08xSDFvNzRvNjhpaENGeDJwb3dPdE9BSGVqK2xBeE92VTlhZHgwb1Axb0hwMXAyQ3dvcER6U2trQUdqcFNHQXdlbExqMXBCUVJRSVVjWU5BSE5IUFFVcHlUMW91QTBnSHAwTk93Yy9TbHhTZ2R1OUFBTWRldE9VYzBneitGT3p4elF3RHZUd005YU1ZeGlsSFhyUUFBZEQzcCtPNTRvOXFmZzlEUWdQLy9XL2pDZHlBZWFxdS9RK2xJejVxczdrOWFkeGc4ZzdjMVRlVHYwcHp2MVBTcXp2aWk0RFhrd09LcXlTVU80UFE1cW83ZzgwQUs3NUhQQXFxN0Q2ME0zZXF6dURTRUk4bU90Vm5hZ3Rua1ZXZHU5TmpFZDg5YXJzK2FIZjE0cXE3TWVLQUZaL1NxOGpFaWtkdWZTcTdzVFFDZmNSbUpxc3pkODA5bVAvd0N1cTdObmcwQ0Vadlh2VmN0ejZtbGRzZjU2VkFXSjZVeGlGajZZcUV0NzBydGtmV29UeDBwQUl6RGtlMVJzM2VrSkdNQTFFV3p4UUFNMVIwckU5YVo3OXFBRkh2Ums5dUtRZTFKaWhnTHgwSE5COWFNK2xBOWFBQUNqOGFYQjZqbWt6bnJRQXRKUWZlajhhQXNLS1NqcFNrZTlGd0RQcUtTajYwVUFIU2pqOEtPbEdhQkMvaFFldEhKR0tTaGdHVFM5RFJqdFFBY1VERFBweFNEMEZIMHBlYzVvRUx4VGNZNE5HRG1sNTZVRERPS1FVdnVLT09vcDlBdUp3ZXRMUjF6bWpvY2lrQWRQcFJ4UmtZb09CUUNEanRTWTVwVDE1b1A1MGd1R0FjMEVENjBHaW1GdzU2OUtVam1rNHlNQ2pweWFBRTZVNFkvR2s0R2ZXZzlNZGFBRDYwY2s4MHZUNjBuVHAyb0VIVGlqSXlSU1U0YzllMUE3Q1pIYWxwUGMwY1VBQUhhbDZVWk5HQjlLQUFmVThVblhpbEF6MnBNOTZMaUFlOUtlZVRSME9hT2c5YUxnSm5QQUZLY0hnMG1CaWlpd3hhTWpxdEhGR01qQW9FQno5YU9oK3RJZnhweHlPbEF4Q0NlS1h2eFNVRDBvQU1jVWY3dEtjVWNHZ1FZeDhwcDJPeHBEbWxISE5GaDNFK1VuZ1VaeDFwT1NLVS8vQUY2ZGd1THRISXBSendPRFIyeWFRZTNHS1FDOWVsSmtrYzBweG1sOSsxQUIrbEdEME5CeVJtanIwcGdLRkMvVDFwM0FPY1VvK2xPQTNVZ0VGUHh4eFRRT2Flb29zTVhBQnpTajA5YVhudlRoK1ZBaGNZcGNEdFM4bW5nWUdhUUgvOWYrSzUzUFUxVWQ4OGQ2V1IvU3FqdlQ2REIycXMwZ1BXaVI4SEJxcXorMUFoWkd6elZONUNPZlNsZVRCcXE3NTVwREJtcXN6ODBqTng2VlZaeFRBR1luazlhcnU0SEFvZHppcXp0Z2MvcFFGaFdmMXFxN2MwcnZ4eHhWWjI5YUFCbndPS3JzeCs2T2dvZDhWQXo5cUFCMkE1L3lLZ0xFOFp6U00rRHhVSmJqbnZRSmlNeDY5eFVURW52VFNlNHFKaitkQTBETm1vZWZ6cFNTZXB6VUxaeGswQXdaaWVLakxVSHB4VGY0VFFBRVlvNlV2dlNjVUFBQjRvK2xKbkhOTzkvMG9zQW52UjlhVSs5SjB4UUF2MTcwbUtNOXpSZ0NnTEFUazhVdURuSnBNNDZVQStsQ0FVZTFCejE5YU9POUowNHpRQWRPdEdPOUdQYWp0aWhBTDBvR1J3YVNnVUFCNUZIdFM0cE1pZ0JlOUlCeFNuMXBPQjFvQU05cVg2VWxIV2l3WEZQSnlLVHB4Uy81NHBUN1VKaFlUM3BPMUtRT2FCNjlCUU5vU2pyN1V1ZlR2UmdnWm9FSEhXZzljVXBGSngzb0FNanBSbkZMem1tOVQwcHBnTHhTVXZIV2oycEJjRGtnWW95T282MFl5Y2RLQU05UlF3UURHZVRTbjFGSFhwUUNBZUtBRUF6UnoycGNnbWdjMC9VQTdaNjBBamJTZEI2MHRJQk01TktjWTlhVHZucUtEeUtBQTRwVHlLUHBSMDRvUUFlZUtQVTBoNE5MMDZkNkFBZXZTam9PYVROTHppZ0FBenhTOFk0cE92SGVqaWdRZHNVZDhVaDU2ZHFkMC9DZ1ltUFNqT09LQjB3S1hqdlFBY2RxVEdhWEE5ZVJRUlFBYzBBanZTMFk0NG9RV0J1bEtldEpqbjBveU90QUM5T1JRT25OQUhjMHZCNHBnSFhwelFmcFFLQjlLUUIzeWFVWkFwZnVuSnBSNmtpbmNMZ0FPOUwwNW80OWFjRjlLU0FBS2R4bkJwYVVkNlFDZ2NVNERqOGFCbnBTcm5vQlRBY0FlbEFCNjBvSG9La0E5YUFHcU9lS2VGSDBwUmpOUDlLWUgvL1EvaWJkL1dxanRRN2NHcXJOeG1uWUFMZzhWV2QvVS9oU08zV3F6dDZVQUR2K1ZWV2FuTS9QTlZHZkFvR0t6RHRWUm1wWFk5cWdkODVvQVk3WTVGUUZqK1ZJekRtcTdQMS9wUUFNM09Lck13SEZLekR0Vlptd09hTGdPTG5PYXJseDFITkRHb1N4RkFEV09ldkZRczJhQzRxSm1vQkNGZ2VhaExaNHBXUE5RRnNjMGdGWThaelVaUDVpbDROTUJ4VFFCbWlqaWwrbElCQnpSd08xS09Qd3B0TUJlblNsSEp6NlVsSHJRSVFlbEtEM3BhQWUxQXc3MG1lL2VnRTB1ZWMwSUE2ZmhTZHVLQnoyb1B0UUFVVWM0elIwT0tFQVVabzdVdkhXZ0JEZ0dqa1V1YzBkOG1nTGdjNHBDZTNTamcwcHlPYUFURDNvQTcwVVl6amlnQktQYWw5cU9oNW9CaVpBN1V0QjY4MEQxNlVBQlBGQk9lYVE1NE5MUUFIbmlsNzhVbWZXZy95cEFHUlFEaWpGSnoycG9CY2swRDBveU9tS01lblNnTEI3VXZOSUNmOEFDazk2QXNIVHBTanI2MHRBR09LQkRjWTZjMHVjOEEwdjBwT0J6UXhoMXljMHVDZWxKOVR4UzllM1dnQmUrYWJrbWpxS2RuSnlLUUNjWXdPYVRQZWwrdEhQZW1BRGcwYzBtT2FVMENEUDZVQTVvL25SUUFncDJjOENrejNOQjVGQXhNbnJTbjNvNUFvNkROQWc0SFEwWTdkS1hQZWtPUjBwRFF1T2FUQm9HQlMrOU93SVRuRk80byt0QUFQZWtGZ3prMFl3Y0xSZzk2VUg4dlNtSVVjR2t6Z1k2VUhBOTZNWkZBMkwrTkJIcFM4NHBPOUFDbm5pamdlNW9BeFNqQkZBSmlpbjkrS2IzcHlnWXo2VUFIUWV0T0MrdmFnRHNPOU9HTSt0TUxDL2hUZ01kS1FBWXAvUDRVZ0FjMDZnS1RUd09BYUFGVWRqU2dkK3RLQlRoOUtCQ0FjaXBNWjVvQTU0cVJWSjY4VUFmLy9SL2lHWTVxczcvd0FUY1VqbmlxN3ZRTVI1TWlxcnVRT0tKSE9PVFZabXhUQzRNMktyTTFEc0R4VmRuUFVkYUFHdTJhcnMvR1B3b1ppRHpVRHRRQWp0MXorZFFPMkJrOFVqc1RWZG15Y0NnQVp1TWlvR2IwN1VGNmdaanlPbEFBWDVOUUZpQmlobTQ5NmlMY1o5S1lXQm16elVMRUg4YUNld3FJazRwV0VJekRwM3FQaWc0NjAzT2FBRHZ6UzQ3R20rMUxnOWVsQTBnd0tPdEowcGVuSm9CaHpTOWZyU0E4VVlvQUR4U2pqdlJSMm9FR1IycERpanJSbmlrTU1VZlNnWTdVcDZVd0FnWTRwUFlVWnBjNUhOSUVIR0tRVWZXamltQ1FESGVseHo2VVo2MEEvaFFBYzlhU2w2OWFBYUFFcGNOMnBNY1V0QUFlbWFYanR4U2NqZzBFWkh2UUZnNjgwWW9wTythQUE0RkdPYVhweFFPbkZBQmoxb0FKcEJuaWx5UjBvQVQzcDJCaWsvU2s2MGdGR1B4b3pubk5LQ1QwcER4VEFCUWZlakJvSFBGQUIxUFAwb3BSd09hVDZVV0JCeVJuMXBlYzBBRTBuM3VhQUY1b09CNzBEMDlLVFBPS1FDNEZKa1p5YVhuclFCbk5NTGlZd00wWjV4M282YzlUUy9vYVFDZERqclJ3T0tVY2ZTZ1p4VEFUT0tYTkhzYU1VQUdEbWp2azBuWDhLY0NTS0dBSGppbW5tbkhtazY5T0tFQVk1eFNqcFNkUjdVbk5JQmNaNjB2Zkg5S1FEdUtPL0pwZ08vcFNETkFHT25OS0JrZGFBRkJKNlVod0JpbEdUeDYwZTVvUUIyd2FXajMvR2s2YzBBSEpOTDE0RkZMOUtBQWtVZGVsS0FQdmQ2WGdVZ1luWGluZ0EwZzZjOXFVQUUwMk5EaDZVNERCcEFNY0NuQUQ4UGVnUW96bWxBN0EwS3ZjVThBZzVOQ0M0b0ZLT2FRVklvQUdhRU5zQU1pbkFkcVVMbnB5S2NNbms5S0xpRXgzL0dwTWM1b0dhZUJqcHpRQURpbmdZUE5JRlBYK1ZQR1BTZ0QvL1MvaHpkeWV0VlhiaWxkam4weFZWMzllOU1hRlorTWptcXJ0anJ5YVYzSDNlMVZtYkdjR2dCR1BQRlZuYkhlbFo4OFZWZC9XaXd4ek1TZWFyczNHUlNPM0djVkE1MjhVQ0VkdlR2VUxONmRhQzNwK2RRTy9GQVhFWnNmNDFBeHowcFhiUElxQmpRQXBiMHFBdm5qclNsdlRtb3ljL2pRQTBuMXFQcnpRVGltaitWQU1NOTZYSEZIOWFRKzlBTU92Sm83WU5IYk5Bb0FNbWp0Z1VEa1V2b2FHQW5hbDdBVWdvT0tRQmpQSW9IQnpSd0tDS1lnRkh2Um5OTDFvR0hQV2s2MEgzbzZVQUZMbklvT01aeFIyb0FUMk5Mbkk1TkppbDR3S0FGQUI2R20rMUtmYzVOQk9SUUFFVXZ0U1o3VVlJUE5Gd0VCcGNabzZqMG94NlVCWUR5ZUtROUJTOThpazYwQUdPL1dqcHlCUU1VN25PS0FEZ2pGSlIxNlVveWFBWW44cU92V2xCeU9LYlFGZ3BlMUtldkhlam5xYVFJVHZ4UWNlbEE5QlM4WnpUQVRwaWpqdlMvV2pqcVBwUUFneWFEMDVwYzd1S1FqQm9BWEhwUjlhTTQ0UFNqZzBBSVJuZ1V1TzFJYzk2WG5wU0FCbk9LVE5CSU5LZW5GTkFMeDFQV2t4a1lIZWdqSFNsSUhhZ0JwNDZVWVBXbEhvUHpvSFNnUFVPYzRwUFkwWXBRZTlBaGUyRFNkczBIQTRvQXh5YUxqRXlNWXBhVHJ3YWQ3Q2dRbUNlbEdNVWNmblNBWm9HT1BGS2ZhalBwMW96dWJOQUIwUFBGQjlPbEx0eFJqQjVvQVByMnBlQUtUMkZLZmVnQTU2MHZOTkFHQ0JSeDYwQ0hEaWtYR1BXbHhnNW9PQ2VhUXh4d1RTcU1mTWFEeDBGT0dNNXBnS0J4aWx4MXpTNElwZHZlZ0FGUEFwTWR2V240Sjk2TEFDZzhEL0lwK0JTWTdpbmpuTkFNQnhUZ3VlcHpRQUNlYWZ0N2tVQUt1UU9sS0FEUUFPd3pUd0FLQXVLTVpwL1EwZTFQQTVwQUlCNjFJbzdDamJucFR3bzcwd1AvMC80WVdZQ3FyUGpyVG1mam1xcGJIV21NR2VxekhuRkR2M1BXcTdOeFFBTTdaNjFYWWprWTRvYzgxQTdEcFFBTzNPVFZkbTNjMEVrOWFoZHNaNTV4UUFNM1VpcTVPUmlndGpwMHFKaU1lbEFEU1RVTE5qaWxMWUdldFJNY2NpZ0JXYlBCcUlrWitsSm4xcHZQNTBBTG5GSlNmU2wrdENCZ09lbEpqdFM5cUFLQURIVEhlaWdlMUF4UUFkVFM1OWFRVURuZzBBRkI1b3ptajNGQU1YbkdSU2M5Nlg2VWg2MFhBWHRSZ2RhUGZwU1lQYWhDRGp0UjFOQkI2MHZVMERzSU9tYVBlbDZjVXZQU2dCdlhtZzg5ZUtYSHJSOWFBUW1jQ2oyNm1qcjFwZXZTZ0dINDBjMG4wNXBjQUdnQXo2VWQ2QjZHZ2tqclFnRCt0SFNsNXh3S2I5S0FGd0tNZWxIWHBSeWFBQURQV2pwelM1eDBwTUNnTGhraWo1dWdwY0hybWs3MEFISjY4VXVlMktUR2ZhaWdBOXFNaWdkYVVjY1VBaERqR090R0RRUWFLUVdBY1VuMXBlb3hSMnpUc05NTTVJQW83Y2MwcDQ1b3p4MG9FSmp0U2pJcE1IcDNwU2FBRGtjR2pxYVVqc2FUcDFvdUFIa1pGSU92RkxqTkpRQXZIZnJSalBQUVVaN1VuVGhxQkI4dE9IV2tKejN4UzhHa01RVW9GSjdDakdDS1loZU04VWRzK2xHUlNaQkJGQXdIMHpUdXZTa0F6UU9LWUNuZzgwZXdvNDcwdVRTR2hCMTVwUjF4UzlxTVpvRUdQV2pnVWdHTW1sNi9qUUFkOG50UzkrS1hHT0tQNUdtd0ErdE96azBFZW5lbkRPZUtRQlM4WnlPS1hITk9BR0FLQUY2YzB2NjBEMnBRTUNnQjNRWnB3R2U5SUFPMVNZQSt0RFlCak5QQTlhYUJnZ0NwTWRnYUVGaEFNY0duZ0dsQTlhY0J6Z2pyUUFBVTlRYytwb1hwNlZJQU80b0Joamo2VTlRT2dvVVpHTWQ2Y0I2VUF4VkhPYWtBN0htbWdaR1RVZ3lEaWdELzFQNFVIYzFWZHZUaWxkc2MxWFk0ejdVeGlNNXhpb0hibjZVanRqa1ZBejhjMERhQm00K3RWMmNBVXJISE5WMlk5VFFoTUdJK3RRRnMvalEvdlVUTnpta0RCeVJVQjQ0TktXR0NLaFk4NEZBQ2xpVDcxRVNPUjJvSnBoejNwM0N3Y1V1YVRGSDA0cEFJS1UwYzBVMkFmV2w5cVQ4YU1ldENBWG9lYVQ2MGZwUjJvRUxnZEtRZEtPMUZBMEZCNDRvNjlLWGp0UmNBQS9TZzlNVWNZcE0wQUhIWHJTOERpZytwbzQ2Q2l3WEVIU2daenpTOVJ4UWFFQWQrYVR0U2prWW8vU2dCZnJTSEk2VW5QclFPS1FoMmNkYWJ4UzlCelJ5UlRHQk9CaWpBSm85S0QxNW9BVFByUWM5YVg4T0tEUUFuU2w3WXhtanFhWG5OQUNFNEF4UmtFMHVCaWtIWGlnQk0rbEwzb3h6aWtvQmk4VW1PT2FYcnptakdmYWdMaSttYVEwZHhnVW5lZ0xEdWM4MG5hajYwdkhmdlFBZFJ6U0hOSHYxbzloUmNBNG9IcFNnYzhVSDBGRndZSG1rNEhGSFBXbE9lMUZoWEFmbFNZL1Nqa25GTGc1b1l3NkhtakhjR2tOTGduZzBoQlNIL0FQVlM1OWFUM3BqdDBGNmM0cE1kcWR4alBha09hQURwMG83ODlhQ004OUtRRUNoQ0ZKeU1VZEJpazlCMXAzMG9HSmdnMDdIR09sR08xSFBwUUFBR2w2NDVwTy9OTGdnZGNVSUE5cVU3Z090QTRHUlNIanJRQ0RQeTVwZStCU2V1YWQwN2NVTUE1TkF5YzBjOU9sR01FMEFBR1RtbmdmcFNqbmcwREFvQUJqc0tjYVhIT2FkZ1l6MHBnQUg4UUZQSHFhUUFrODgwb0hZMGdIQlQrSXBSMG9BeFQ4WW9BVWRPS2NQbUZBQTY5YWNGNmswQ0ZVZW5TbjRKTkpqbmsxSUJRTVFBa1ZJT2VEMXBGNDU5YWVvT2MwQUtSa1U5UWUxR0JUd004K3RBSVZWQjVwd0hIR0tRQ3BNZGMwZ2FBRE5QQzVwY2QrTVU0REpwZ2ovLzFmNFBtZkhJK2xRTXdQRkRPRCtGVjJZOXpUR3hXYnZWVmpqa0hOT1lnZE8xUU0yQ2NtZ0xDTTJUbW9DM09EVG1hcTVZa1VERlpzVkFUenVvTGNZcUpqNjlxR0s0cFA0azFDZVRTbnJUVDZBVUJjVHJ4UUtLQlNCaHgyb0hTanB3YURWQmNEUVBhbDYwVXJnSUtPdEhIV2xCNG9zRnhPOUx4M0ZKMHBhQUVJNkNqTkhTakpvSFlNZCtsSGFqNkdsSTllYUxpRUhOSDRVY1V1ZURRRnhNVXVRRFIxb3p5QlFBZzRvNjlhWHZTVTJBZTlMaWdIbkZIMTU3MGdBbkp6UUR4UVFSUjNwM0FCMDVwTTBlbEhPS1FDbi9BQ2FYUFpxTWMwZ0ZBQjh1ZWFNZHpSd09hT0IwNW9BUWM5YVhuOEtYdnpTR2dRWUZHTURQclJqSFdqM05OakRweU85QkFQU2pQTkhIWTBrSVVuQkZHUjFvSno5S1Fab0dnQUJveFNnSEhOSjdqdFFBRGprQ2pCSElvNXhTNG9ZQ0RtakE2VWVtYVU4OGQ2QVFoNDRwUnh6U1V2ZkpvQVhvUFdreDI2VVpKNW9IdlFBZERtanRnZDZENzBuR01qclNBWFBPVFNDbFBXanRpbUFtUFdsSEFvNEhBcFI3VWdFUFNqanBTOGQ2UVV4Q2prMDNHZUtYR09sTDlhQmgxQUlPS09oNDVJcFIwb0pCNG9CQWVwbzRBb3g2VXVSOWFMZ0wwNXBNOFpvSjZHbkVZR0tBRTY5S00vbFFQU2x4elFJQWFUQjZVY01hZGdBOWFSUXVEak9LWEJIdFJqaWxDMHhDNHh6VGdQYWsrdFBBeGhqeFFBZ0JISGVuYzBEZzU2MDhaemswQUdPYyt0UHgyb0hYSHJTak5BQ2pqbW5MZ3JnMG9VQ2xBb0FkanRTaWxVZTlQN2NEcFFDQUxoc1pwNEg1VW9CUE5PeFFBWXp5YWt3ZUIwb0hOUEE0b0FRQWQ2azIwQVlBT2FrQVBibWtBZ0hiOUtldlA1ZEtNZjhBMXFsQzRGTk1CRkJGUEEzY25yUjcxSUIweDYwQXovL1cvZ3Zkczk2Z1k0NHBXYmprMVhaeG1tQXJOam9hcmxpZWFDY25GUWx1YUJpazgxQXhHZjUwTVFPUFdvczVvQmlidlNveVNUbWdramltWndlS0FZWnpSMUZGSFRyUUF2MHBBTy9XanJSOWVNVUFIR0tNVURHZUtNVUFneitkSDhxT004MFVBSEhROFVkcVdnY0hGQUNVWW8rdEhYcDFOTkFMUUtUQXppbEF6MHBBMEEveitOQngxbzVQTkoyNG91QWR1T0tYajYwaEhmcFJ5QlRBRDZVY2Q2T0tYNmNVZ0U1b0hyUjcwdWFBQUROR08xQTY4MGg5S0JpOGRxQjZDZys5R00wTVFkZXRCOXFPQ2FUT0tManNLY2tWcTZIcGJhM3JWbm95UDVUWGM4Y0lZak8zekdDNXg3WnJKNEZkYjRESC9GZGFLZjhBcC90di9ScTFqaUpPTk9VbHZabDBZcHpTWit0UC9CU2IvZ2pKOFl2K0NkbmdIUmZpcmUrSUxmeHA0ZDFLNmF4dTd1enRIdGpZWEJHNkJaa2FTVEtUQU1GY0VBTXUwNExKbjhhdnJYK2h4KzJWKzA5OEw5Ui9iemkvNEpsL3RQeFJUZkRyNHplQXJLTzBrazJxYlhXNU5RMUdLUERrZksxd0lvaEU1eVk3aUtFcUJ1WTEvRForMmY4QXNvZkVEOWluOW96eEQrejU4UkVMejZSTnZzN3dLVmp2ckdYTFcxMUgxK1dSUHZBRTdIRElUdVUxL00zMGN2RnZNODd3VU1GeEcxOWFsQlZZU1NTVldsSjJ1a2tselFsN3Nra3Zzdlc5ejlnOFdlQnNKbDJJbGlNcHY3RlM1Sks3YmhOSzluZTd0SmFwK3E2SHZIN1h2L0JPN1h2MlN2MmIvZzcrMFZxZmllMzF1RDR2YVZGcWtGbEZhdEM5aXN0bmJYWWplUnBIRXBBdVF1UXE4cm5IUEg1eGNEaXY2YVArQ3pYL0FDakgvWXFQL1VvMm4vcG0wdXZrWDlqai9nbEI0TStJUDdPRW43Ylg3YjN4Q2krRlB3cWtabzlPbUVYbmFocUxxN1Jrd3hFTmhXS09JbFNPYVdYYXhXTUlBemUvd0o0dHdwOEx3emppR3RlVXF0V25IbGplVW1xczR3aEdFRmVVdVdLMFNiMGJmVm5sOFM4RFNubk1zQmxVUGRVSVNkM1pSVGhGeWxLVW5aSzc2dnJaSDRvOFk0bzZIaXY2TnZEUC9CS2IvZ25iKzJmbzJzYUwvd0FFMWZqbmY2cjQ1MG0yTnpIb0hpMjMrek5kcWh3eGprK3kyamhEMTN4eFRDUEtpVGJ1M0Q1Uy93Q0NkMy9CTXJ3MysyUjRuK0wvQU1EdmlKcXVwK0Z2aWI4UHRQbXVOTjBtTklTbHhjMjdTMjA4TnlIQlpmSnV2SVJ0amNpUThnZ0UvU1UvRzdJZnFtSXhkZVU2ZnNPWDJrSjA1d3FRVTJsR1RoSkp1TGIrSlhWcjY2SGt5OE9zeitzVXFGTlJuN1cvTEtNb3lqSnhWMmxKTzEvSjJma2ZqdDE1TktSNjE5Vi9zVGZzMFhmN1czN1dYZ245bTJTYWF4VHhKcVF0N3llSlFab0xXRkhudXBGVmhqZWtNVGtiaGpJR1JpdnBQL2dxNyt3Qm9uL0JQUDQvNlQ4TlBCbXNYWGlIdzlyMmlRYXZZNmhkckdIY3ZMTERMSG1JQkR0TVlZWS9oZGErc3hQSGVXVXM2cGNQVktuKzBWSU9wR05uckZOcTk5dWowOG4yUERwY000eWVYVHpXTWYzVVpLTGZtOWR0K3ErOUg1Z1pQNjB2VWU1cjlUL2pIK3dQOFBmZ2wvd1RPK0hYN1pYaTdYcjlmR3Z4SjFLU0hUOURDeEMyU3hSNXo5cFlsZk1iTVVVYmNOak15ZTlmbGh5UGF2UTRkNG53ZWEwNmxiQk51TUp6cHQyYVhOQjhzcmQwbW1yclIyME9YTnNtcjRLVUtlSVZuS01aTFcra2xkWDdPMnR0ejlMUGhoL3dUZzEvNG1mOEU3UEduL0JRaTM4VjI5cFkrRGRSYlQzMFZyVjNsbkt2YUp2V2NTQlZIK2xnNEtIN3A5ZVB6UzV6WDlSUDdLZi9BQ3JXL0hESC9ReVMvd0RvL1I2L2wyNlpyNFR3dTRweDJaWXJOcVdNbnpLaGlaVTRhSldnb1FhV2kxMWs5WGRuMHZHZVNZYkIwY0RQRHhzNmxHTTVhdldUbEpYMTIwUzBXZ0RQYWpuTmR4OE5QaDE0eStML0FNUXRFK0Z2dzhzWDFMWGZFRjVEWVdOdEhqTXM4N2hFWEp3RkdUbG1KQVVaSklBSnIrZ0R4aC93UzMvNEpsL3NadzZiNEgvNEtJZkh2VWJQeC9lMnFUM1dqK0VyVTNDV0psR1ZNci9aTHh5Z0JEQXlKQThpL01pWTVyMytMdkViTGNtclU4TGlPZWRhb200MDZjSlZKdExlWExGTnFLN3V5OHp6TWk0VHhlWVFuV3Bjc2FjYkp5bkpRaW05bGVUV3I3TFUvbkgrdEx3ZWEvWm45dUwvQUlKVDZGOEVmZ0pwL3dDMmQreU40OGcrS253aHZtamluMUJFRVY1cDhrcitXbjJpTmVDbm1GWTJKRWNrY2pCSGlIVStWZjhBQk9mL0FJSnZMKzJqWmVMUGkxOFV2RjF2OFB2aGQ4UDRWbjEzWFowV1Y5eEJmeUlVWmtHN3kxSlp5VHR5Z0NPekJhNUtQaXprTThubm5udHJVWVBsbGVNbEpUdWx5T0Z1Zm51MHVYbHU3cTJqTjZuQkdaeHg4Y3RkUDk1SlhXcTVYRzErWlN2eTh0azNlOWo4dWgycGEvcFUrR2YvQUFUNi93Q0NIWDdTbmoyRDRBL3M5L0h6eGNQRytvN29kTm0xT3pVV0YxT0ZMYlkxbDA2ejNIQU8xRGNJWFBDRmlSWDR1L0VIOWpQNHorQnYydzczOWlLMXRVMWJ4bkJyaWFIYkxiRWlLNWxtSytUS3JPRkt4UEc2eWxuQUNJU1d3QWF6NGE4Vjhxekt2Vnd0cDBhbE9IdEhHdFRsU2ZzOXVkYzZWNDMwYjZQZXhXY2NFWTNDVTRWN3hxUWxMbFRoSlRYTi9MN3IzN0xyMHVmSmc0SE5mb2IreUovd1Q5MTM5ckw5bno0emZIN1RQRTBHaVEvQjNSLzdYbnM1YlpwM3ZsK3pYZHo1YVNMSWdqT0xRcmtxMzNnY2NjL3B0NDAvNEpnZjhFcmYyTnBySDRiL0FMZjN4ODFhRDRnM0ZyRk5lYWI0VXRETERZdE1Od01qQ3l2WEtBWUk4d1F5U0xoMWpBWVYraFg3TWY3RnZnZjlsZjhBNEo0ZnRZZU8vZ2o0OXMvaVA4T1BpRjRDdWJ2UU5ZdDE4cWNHejA3VlV1YmU2aHlka3NKbGpCenRKSklaRVpTby9KK1BmcEM0UCt5MVZ5V1ZTRTV6cEtuT1ZHYXAxRTZzRlBrbE9QTEwzSEpycmE3anRjKzQ0WThLOFI5ZDVNd1VaUmpHYm5HTTR1VUdvU2NlWlJsZGU5YjU2UGMvbkEvWUUvNEovYTUrM2czajVORjhUUWVIUCtFRDBSdGFrOCsyYTQrMHF1LzkwdTJSTmgrVDd4ejE2VitlZko1TmZxai9BTUV3L3dCZ2p3VCszTko4VDA4WjYvcUdoLzhBQ0RlSFcxbTMrd0xFZlBrRy93RGR5K1lEaGZrN2M4MXAvd0RCTC84QTRKd2FUL3dVTTB2NHEyaDFXOXNkYzhGNkpIZTZOYTJua2hMMjluVzRFTUV6VERDSTBrU0tTQ01CaVNhL1JzYjRpWUxLOFhtZGZNc1hlbGgvWTNqeVc5bDdSV1h2TDQrZHROL3liYkh5V0g0VXhHTW9ZT25oS0h2MWZhV2ZOZm41ZGZoK3p5cFcvdkg1TmNVWnp6WDlER20vc0YvOEVZZmhacmNmd08vYVQvYU0xZWY0aVJTaTAxRzQ4UFd1TkNzTHdrQjRYdUhzYmxaRmpjbEdrODlBcEJNZ2lJS2o4OC8rQ2xYN0FIaWYvZ25sOGZJL2hkZmFzdmlIUWRac2wxVFJOVlJQTCswV2p1eWJaRURNcXl4c2hEYldJSUt1TUJnQjM4T2VMZVVabmo0NWRSVlNFNXB5aDdTbk9tcWtWYTdwdVVVcEpYVDcyZDdXT1hOdUJzZmc4TThYVWNaUmkwcGNzNHljRzlsSkp1MjF2WFRjL1BQdmswSGl2MzgrRFgvQkovOEFaaStEL3dDenRvUDdUWC9CVTM0bTNmdzVzZkdVYXo2RDRmMFpGbTFXZTNlTlpVa2tIa1hiQm1WbExJc0JFUVpQTmtSMjJMNzcrejcvQU1FUy93QmpIOXNyeHZaK0wvMlIvalBmZUtQaHRFczhHdHJMQkhiYTdwVjNzRWxvSklaNFlSSkROaGtMaUZQbVg1TjY3aW56K1ovU0Q0YndrYXRhcktmc2FiYWRWVXFqcE9VZDRxb284cmxkV1ZuWnZSTnZROVhCK0Z1YjEzQ25CUjlwT3pVSE9Lblo3Tnd2ZExyNUxWNkg4dzFIWG11bzhiNkZENFc4YWF2NFl0WkdrajA2OXVMVkhmRzVsaGtaQVRqdVFNbXVYQXdLL2FxVlZUZ3B4MlorZVRnNHljV0tNSG4wbzl6Um5OQUk0TmFFMkZ5Y1ViY2tZcGNrak9LQnpRSURqb2FVYzl1S1FjY2RhWCtLaGpRSGFEelM0SGVtN1IxUGVoZHhwaUhBZGFPZXRKOUtmampOSUE5NlhIZWtJNHlhZU1kYUxEQUE5RHo3MDRZSEZMMjRwUU9PdERFSmcveGRLZmpuaWs1KzdUK2FHTkFCazVwd0FHS1RpcEJqbkhXZ0FHZTlPSHRRQVJ5S2VPYUF1QUdlS2R3T2FVREZQQXpUWUNpblk0NHBWQUJweS9uU1lCZ24ycDQ2NE5BR2VCVW1PMUFDQURHRzZWSmpBcEFEa1pwKzNvb3BnQTU2VkxqakZJRlBhcEFCbWtBZ0hUTlNnQURQYWhhY0J4L09nTGdNMUpqUDRVRGpnMUlCNjBBZi85ZitDRm14VURNQndhVm1QclVMRTlLWXdMVkF6YzVGS3pZNlZEdUc3clFBTVNNNHFJbk9lMUJPYWJrZEtBRTZmU2pwMG9wZnJRSVR2elNVdWVNZHFNVUFMeUtNWjlxVEhJbzY4aWdZdWVhYjcwcDRPQnpSN25taGdIVG5GS2FUQjZVdmVnWWMvU2tvNG9vRUx6MUZKUlJ5VFFNQ01VWTdVNGU5TnBDVERxYUJTNDlPYVRnVXdGT2NVbEhibWpIclFBdlhtazk2UHBSMHBBSHRTMGhKNkdsUFdtQW5UcFNuMm96K2xIUFNnQkJucFNuTko3VW9PRFFBQ2dIblByUm1nYzBNQTZIbXV0OEIvd0RJOGFML0FOZjl2LzZOV3VTUHBYUStFYjYxMHp4VnBtcDM3ZVhCYlhjRXNqWUp3aU9yTWNBRW5BSFFjMWhpb3QwcEpkbWFVV3VkTjl6K2lIL2c1enVibXkvYjk4R1hsbkkwTTBQZ1BUM1IwSlZsWmRWMVFncVJ5Q0R5Q0s5ajhZMjl0L3dYQi80SnRSL0VQUzQwdWYyaVBnWGIrVHFFU0FmYU5hMDdhV0xBRGwydUVReVJnQTR1bzVFVlZXWUUvQS8vQUFYZC9hMy9BR2UvMnpQMnQvRG54Ty9aczhRZjhKSm9kaDRRdE5MbnVmc2wzWjdMdUsvdjUzajh1OGhna09JNW8yM0JTcDNZQnlDQjhTZnNBZnRtK052MkVmMm10QytQUGhQekxpeWhiN0pyT25xMjFiN1RKbVg3UkFlY2JoZ1NSRThMS2lNY2dFSCtVT0Z2RHJNNm5BZVZZakMwM1N6SEJ4NTZha25GMzE1NlUwN05ScVI5MXAyczdQb2Z0MmM4VjRPUEV1TnBWcEtlRXJ2bGs0dTZ0cHl6amE2dkI2cjVycWZzdi93V1pCWC9BSUpqL3NWZzlSNFJ0ZjhBMHphWFZuL2d2NWZYbmh6OW5uOWxmNGFlRVpHVHdaRDRVZWV6V003WXBwWWJXd2lqZGtIQmFPRnh0UEpIbXQ2blBOZjhGNC8yOXYyT2YyeC9oMThLdkRmN0tYaU5kWUhoZWZVRGQyaWFkZTJDMmNNME5za0NBWFZ2QkdRUExaUXNSWUx0N0RHZVQvWi8vYjQvWXEvYXcvWXYwUDhBWVIvNEtjUzZub0wrQndvOEwrTmRPamt1cGJlT01HT0dLV09LS1dRZVZFUkR0OHFTT1dKRjNiSkVSejhod1ZrbWI0VEpzbHovQUJHQnFmN1BXeE1xbEhsZnRZeHJTcUtNMUJwT1RoZE95VjNGM2lqM3VJY3h3RmZNTXh5dWxpWWZ2YWRGUXFjeTVHNmFpM0Z5VjB1YXoxYnNtck5uNW0vOEV2OEF4SjR2OEsvOEZEdmd6cVhnbVNTTzhsOFc2Wlp5ZVd4VXRhM2M2MjkyckVmd3RieVNCaC9kSjRyOXlQakg4ZGZEdjdKLy9CeXRONHMweTRXMjByeERkYVRvK3VvTUpFbjlzNlhhd3N6a2Z3cE0wTjA1L3ZBNXJ6ZjRFK1BmK0NNZi9CTDN4QmMvdEQvRER4MXEvd0FkL2lUcDl2SU5Bc2xzWnJDMHRYdUVhUHpESkxBc1N2NWJsSGtMeXNpbHRrTzhpdjU4UGpuOGNmSC9BTzBMOGF2RVh4NitJVjJaZGU4UjZoSnFFOGlFcUkyWS9KSEZ6bFVoUUxIR00vS2lxTzFmb3l5RjhZWi9pc2ZMRFRwWVI0V2VINXFrSFRsVWxVa3BYakNTVXVXQ1drbWw3ejkzWnMrVGVaTEljcm80WlZZenJxdEdyYUVsSlJVVTFySlhWNU42cE42TFUvcDcrQW43UDFwK3hIL3dVNC9hei9hUXY3Vlk5RytFUGh2VmZFV2pncis3RS9pR1A3WFlSSVR3UjVYbjI0SDk0WUo0TmZKSDdTZmgzeFArM0gvd1NVL1p0K0xHaGh0VThYK0QvRTF4OE9MdzVMT3pYemhiSHpHNUpBU0cxQXp5R200NjVyM2I5djcvQUlLdS9zdC9ILzhBNEp3TjRkK0crcitiOFpmaVBZZUd0TThhMnFXVjVBMGNla21TNm1ZM0VrQ1cwaWk0ekd2bHlzekpLQmphRzIrSi93REJFVDl2cjlrbjluRDRjZU9mZ3orMmxyUDlsYUZKcm1qZUt2RCtiSzh2Qi9hbGhKNWpzQlp3ek1qcTF0YU1wWUtwMmtFOXEvTGN2eXZpV25sYjR1eEdEcVBHNGFwUmdvY3NuT2RPbFNkR2JpclhjWnlxMUpxMmpTVHVmYVlyRzVSUEcvMkZSeEVWaDYwS2tuSzY1WXluUDJrVTNleWNZd2hGMzZ1eDUxL3dYMytJZWg2VDhlL0FuN0dQZ1NiZDRlK0NIaFN3MGFPTWRCZDNFRVR5SEE0ejltanRRZXBEQnNuMC9CYjZWN04rMFQ4WTliL2FHK1BQakQ0NStJdHd1L0ZlcjNlcHNqSFBsTGNTczZSRC9aaVFxaStnVVY0MXoxRmYxeDRhY0x2SmNod3VXVGQ1d2l1Wjk1djNwdjV6Y244ejhMNHZ6cFpobWRiR1IrR1V2ZDhvclNLK1VVa2YxRWZzcWY4QUt0YjhjUDhBc1pKUC9SK2oxL0xzZWVsZjB3ZjhFNHYycmY4QWduWGFmOEV0L0dmN0QvN1pmeEV2UEJzL2kzeEJjWFVxNmZwMS9jM0sybUxHU0tTT1dHeHU3Y0ZwTFlxVmJMWUI0R1FhNEwvaG1UL2czRzZmOE5HZU9QOEF3VjNmL3dBejlmaGZCZkYwK0hzenppampzRGlaZTF4TTV4bEREMVp4Y1hDQ1RVb3hzOVlzL1N1SWNpam11RHdGVERZbWl1U2pHTFVxc0l0TlNrN05OMzZvOGUvNE40dEg4TzZuL3dBRk5mRGx4cm0zejdIUjlXdUxFTUFjM1AyWXhuR2VoRUx5a0gycjg3UDI3L0VuaTd4ZCsydDhXZGQ4ZHlTUHEwbmkzV0k3Z1NNV01mazNrc1NSQW4rR0pFV05CMENxQU9CWDJoOFYvSG43RlA3QmY3UlB3dytQL3dEd1M0K0kydGVQYi9STG01dXRZWFc3ZWExVkVYeW8xdGg1bGhZbG9ydUNTNGpsMmh5QjNVNHo5ei9IWFdmK0NKbi9BQVVpOFlEOXBQeGg4UmRZK0J2am5XWTBuOFJhVExwODE3Ynp6eEtGZVNONG9IaE1yS3VONlNLWmVIYUVTRjgrakxQNnVENG1YRmRYQjE1WWJFVUZUMHBUZFNsS25VbTdUcEplMGpHYWQwK1Y2cFgwYVp4cks0WWpKM2tjTVJUVmFsVWMvamlvVFVveFY0enZ5dVViV2F1dEcrcVpiLzRJczMxNzRuLzRKdS90aWZEL0FNY1NNZkNWbjRiZTloOHc3bzRicWJUTlIrMFN4cWVONFcydDJ5T2NvbnRqNCsvWUEvWTQrTm54dy9aSzhkZkVQNGwvR09YNFBmczYyVjRCcjBranpUd2FqZUo1T1ZXd2praldaZ3d0MERNU3pTRkVqU1JnVkhybjdWdi9BQVVBL1krK0EzN0Y5My93VHgvNEptcnFXb2FONGtrRS9panhmcUtTVzgrb0J0b2xpU09TT0tRbVpZMGpjbU9LTklRWTFSaTdNTlA5Z1g5c0g5aUw0ai84RTlmRVgvQk5QOXQvWGIvd0xaM0dxTnFlaytJTE9DU2FQTFNwY0tzZ2hpbEt2SE1qWjh4Q2p4dnRESXlnMThmanFHZjA4Sm1QRU9Fd3M2Y2NWaWFNdVgyYW5XcDBZUmpDVmFOSnFYN3h0Y3lpNHVVZmljYm52WWFwbGs2K0Z5dXZYak4wYU5SWDUzR0VweWJrcWJtbXZjU2RtMDBudGM5RS9ZV3NmK0NMbnduL0FHd3ZoeFovQ0xWZmlCOFRmRzkxNGhzYlBTTHU5dDdmVDlHdDd1YVpZNHJ0NGlzTjBSRVczcXAzZ2tESzk2K3l2aFpwbmg3VVArRG9meHhQclczN1JaNmFackVNQWMzSC9DUDJVWnhub1JDOHB5T2VLK0VQZ2g0cS93Q0NNbi9CT0Q0djZIOGFmQm5qalhmanA0dzB5L2dTMEVlbnZwK21hWEhKSnN1TDVoTEV2bnpRd003UXJHOGdNZ0hDRWlST0kvNEtHZnRoL3MvZkR6L2dwUjRaL3dDQ2lQN0NYajgrTXRZMUdhRFVkWHNHdGJtMGd0VnRyUzJzUmFtU2FLTm5TOXQxbFdWUUMwZVNEZzdhK1p4dkRPTnpmT3NWU3drY1ZLR0p3VmFqQ3JYaEpKMUhLTWttdVdQczROTGVVWUtUYlVidTEvWncrY1lmQTVmUm5YZEZTcFlpblVsQ2xKTzBMTlh2ZDg4azNzcFNzclhzZmsvKzNKNGc4VitLUDJ6Zml0cmZqaDNmVlpmRnVzTGNDUWtsR2p2Sll4SDA0V05WQ0tPQUZBQTRyOXpQK0NQUGlQeGJkLzhBQktmOXNyd3BmUEkyaDJQaHE5dXJOQ1RzVzZ1ZEh2MHV0bzZBbElMZmRqMnF2OGVkUS80SWlmOEFCUlh4Yy83VG5pdjRsYXo4RS9HbXJ4UjNQaVBSMzA2ZThobHVFQVdTU05vNEpJMmxZQURkRkorOHdIYUVPWHo3ajRTLzRLQy84RW8vZ1Qrd2g4YXYySWYyY05ZMUd6dGI3d3JxRUdsYXRxdGxlUGRlSnRiMVN4dVlKbklpdGl0dWtleTFpVnB4YnI4eEFRS2hkdnBPT3VKOFhtM0RPR3lUQzVWWFZlRThQenAwWktOUDJkU0hNNHl0eXpXbGx5Tis0M0oyU1o1SERXVFVNRG5GYk1hMk5wT25LTlhsZnRGZWZOR1ZrNDN2RjYzZk5iM3JKWGJSODAvOEc4UCt2L2FIL3dDeEVmOEFuTld6L3dBRzhldmFwNFY4SGZ0TmVLTkRsYUc5MDN3WkZkVzhpa2hrbGhqdm5SZ1J5Q0dBSXhYeXAvd1JvL2E3L1o0L1pTbCtNei9IM3hEL0FHQVBGbmhOOU0wci9STHU2KzBYUjh6RWYraXd5N1B2RDVwTnErOU8vd0NDUWY3WFg3UFA3THZnTDQvYUw4ZFBFSDloWFhqYnduL1ptaXA5a3U3cjdUZGVWZHI1ZWJXR1VSOHlvTjBwUmVldkJ4MGVKdkN1WTRuL0FGa2pTdzA1cXE4SHlXaEo4Nmk0OC9McDczTHJ6V3Zicll5NFB6dkNVVmxEbldqRncrc2MxNUpjdDArVyt1bCtsOStoK0pyeVBMSTBraExNeEpKSnlTVDFKTmYxSC84QUJZN1MvRC9pRFZmMktyUHhnUWJIVWZEdGhCZnlTRGR1dDNiVFJMdXoxRzFtUFBxYS9sdDV6WDdiZjhGZFAydnYyZlAyblBBSDdQbWovQWJ4RWRhdlBBM2hUK3pkWlVXdDNhbTB1eEZacUVEWE1NUWtJYUovbWlMcngxNUdmMXp4QnlYRlluaWJKcWxDRXVTUDFoU2trMm9jMUZxTGIyVjN0ZTEzb2o0WGhYTUtOSEo4d2hWa3VaK3lzbTlaV3FYZGx1OU43Ykk5ay80T1d0VjhUemZ0OGFOb0dxRjAwclQvQUFqWWYyYkZ5SWxqa3VMcnpYUmVGQk1pbFNSMUNLT3dBM3YrRFkvVS9Gc0g3ZEhpalNkSWFRNlRjK0RydVRVRUdmTHpGZVdZZ2M5dDZzN0t2ZmF6NDcxMFdvL3R1LzhBQk9YL0FJS2MvQTN3ZjRPLzRLUzZuclh3OCtKM2dxMlhUNFBGMmxRUGR4YWhGc0FMM0N4d1hEWWtjZVpKRzBRMlNaYU9WVmQwSDZWLzhFZWZIWC9CUGo0WC90QTNmN0wvQVB3VDQvdGZ4dExxT21YR3RlTFBHMnR3dkFUYjJSamh0clMxamFLM1pFOCs0M0V0Q283RnBTVk1mODNjVlp6ak1yOE02L0NtTHkrcXE5R2s0U2x5UDJOb3UvdEZWK0IzWHZKWDUzTnBjdlUvVzhreS9ENDNqQ25uZERGUWRPYzFKTG0vZVhhdHlPSHhLejBiK0hsMXVmeGYvRjhEL2hiUGlnbi9BS0M5OS82UGV2T3M1QnJzL2lMcTFuci9BTVFkZDEzVGp1dDczVWJtZUp2VkpKV1pUK0lJcmp1bld2N3Z5K0xqUWdwZGwrUi9OR0trblZrMTNZZ3gxL0tqRk9IWG1qZy9qWFlZRGVUVHgxcE1aNE5LUVRReGlZSm85NmNPbkZBT0tCQ1k5ZWFVY25tZ0QxcGNja0NnWWNpbEF4UUFCeFR1TWZMM29GY0Z5M1duWUZLZXVLVVl6bWtBYlQ5ZTlPSHRTNDlLQm4wcWdIN2VlYWNNWkdLVEhGUEF6eDBwV0hZQUNlT3RPQXowNHBSeHlhZmpIV2dRZ1VjVTRjVTRESnBRTzlNR0tBYWtBL09reHhrVTREbm5tcEFWUVR3S2VCUmdtcEJ6eGpJcGdKakpwNEdLQmdWSUFRTVVYQVJSVW0zMnpRT25TcEFLTGdHUFh2VHdDYVFEMTRxVG9Ob29RTWNCeFQ4WnBBTThWSW9IZWxZQVhyVHgvc25wU2pQU25oZU9LWUgvMFA0RkdiUE9halp1RG1rYzhmU29tUGVtaG9heDVxTW5KNXBTY0RwVERpZ0JNazhDakhhZzhjQ2t6Z1VJQmZyUzQ3K2xKNlV2VVVBaEQwbzdVY0dselNFSm1sSXdlS1RBelJUR0dLQUQxbzdVZHFBWWR1TzlPeG1tNXp4Ungwb0JCbnJTL3JRUFdqTkFCbkZCd1Bla3pqbWdaSFdnQU5IV2w1emdVblU4MFhCaC90VWNEclMrdEdSUUFtT00wWUZPUEZONmNHa0FkK0tVZTFJT3RLZmFtQW5XbDloUjFwUWVNVVhBYlM5VFI5YVhuNjBBSjdtanB6UWM5YU9nelFGZ05IUGFrNjB2SnpRQURuZ1VDajJOR1NlS0FzR2M5YU05cUNNY2RLTTl6UUFBZ0dqSjZVSEE2VWZXaGlEcHpRTVp3TzlCNS9DbDZjMERRaDlUK1ZHTy9wUzVIV2s3ZGM1b1FCUzhZcE9uU2dIUEdLQURyUzBZL2lwT2ZwUUFBQUhCb3p4UVFUUzRQYWhoY00rdEdTT2FPY1l4UjM1RkZoQ0U1by9XbEpvN2VsQXhLWGtHaWpPYUFGd0tPaHBNNG9ISW9BTSt0TDFOQTlCU2tEclFDUDZIZFYvNEtBLzhFNlAyOS9oTjRSOEtmOEZKL0RmaWZRUEhuZzNUMDB5SHhaNFJhRi90ZHVtT1o0NS9Nd3pFYjJVd3lnT1haSFFPVXFucUgvQlI3OWhUOWl6NEFlTGZnMS93Uys4SytKRDRxOGNXejJHcCtNL0ZMd3Bkd1d4UW9Qc29nWTVZQm5LQVJ3S2prU0h6Q0FCL1BiajBwYS9HSStCT1RLMUJ6cXZEcVhPcURxUDJOK2JtK0hmbDV0ZVJ0eHY5bXgrZ3Z4THpCM3FxTUZWYTVmYWNpOXBhMXQrOXRPYTNOYnFIVGcwbzlxVE9NWXBSeFg3UWo4K1FuR2VhT2NacGR1QnlLRDBITks0QnlUU2ozbzl2U2pKSFBTaStnMmdIRkdEMU5GTzZqSi9LaTRneGdDbDU2bnBRQnhqOEtjdlgzRklBQjdDbmdaNEZKam5KcC84QXMwN0JZQU9PYVVESnBRYVZmV2dCZmxQdFNnQTlPQlNqUDhWUHhpZ0FJSEJQTlB4akdhTURxZWxPSDVlOUZ3QWptbjRvQXp3YWZ6MW9BUURtcEFDT25la0hPYWtIcjYwQjZpQVo2OFZJQWZ5b0E1TlBBeDA3MFdBQXZOU0FVZ0FIQXFRRHFCUUFEanB4VHgxNS9HZ0NwQU85REFCZzA0QVp3S0FNVklBS0FIS0IzRk82OUtPbFNLS0xnQVhuSXFRQWZqUUZ3S2tIVStsRndFVVZJQnpRcWdmalVnR01ldENZai8vUi9nS1pnVGlvaXdQL0FOYWhqbnZUQ2ZTbU1Ea2RLUThkYU1tZzlLQURIY1VZN1VZNHpSMnBBTGpqTklSaWdqSElvR2ZwVEFNRHBSUU9tYU1uT2FFQWM1b09LWHJ4UWVhRUFocFI2Q2t4M05LRGlnQVB2U0FjWXBSNzBtTVVBSDZDbEpKR2NVblhpanRuR0tMQUE2MGQ4MHZJUE5Bd0tCQ2M5cVVuMW83VVlPUFdnZm1CNDRwTzlMMTRvN1VBR2NVSDJvN2RhS0FBNTYwbjlhZDdVblh2UU1PaDRwT2NVdjBwT1JRSUI2VW9PS08xR2VNMEFHUHdwZVNNaW1uZzRwVDYvbFFBYzlNVUh2N1VwUFkwbkFvQURRS01kcUQ3MEFBeUtEOHRIRkhXaXdDNHgxbzU2VW4wRktlbk5JQk9oL3dwM3RUZTFIdDJwZ0tjMGRCa1VjVVlJb0FPbkhXakJ4UnhqSTRwUG9QeG9ZQ2lqQUI1cE9uUTBwcEFJZUtYdDBvNzgwZE9LZHd1SnprMHBHUmswY0RtZ2p0UUFEMm96Zzg5cU8zRkE2WXBBSFhyUmdIaWovZG82OEhyVEFUMEpwZVQwbzRQdlNqcnhRQWdIYWxHTThEcFM4RVVtUm1nQUI0cFFjbjJwS2ZrOVNhQUduSjQ2NW81QXBjWXBSZ21oQTBONDVGT3h6NlpveDNGSFNnUUVjNE5IVG1nQVp3ZnlwekFnL1NnWWRUNzA1ZWxBNTVwMlBscENFQTcwdU9hQnlQMHA0eUd6Vk1yWUFPMU9Bb3llQlR3S1FneDZuRk9BSC8xcUFNbkFwd0E2bWdFQUdSVHd1ZnBSdC9TbkJlLzVVQWtMajg2Y0JqbWx3TzlPQzVGQUM4NTRGT1hybkZLbzU1NzA1UVNhQVlZelVpcjJIU2tVR3BNWjZjQ2dCUjA1cFFPd3BWWEJ6M3FRZzlLYUFCVWdYMDRwQXVSNzA0REZJQnd6bW5xQ2VvcFI3OXFjRkI1b1RBRkEvOEFyMUlBY1VCUjFxUUJzNUZBQUZ3ZUtlbzlLVURuZzA4TDBJb0N3QUQ4cWVPT3RHTTgxS0J6Nm1rQW1La0FBT1JRQnh4MHFSUlRBLy9TL2dDNTU0cEtNVWZTbU1LWG5BT2VhVDNORkFCbnQwcGFRVXVhQUNrNzVvSEhOSHZRQXZQTkpTOU9hUTRvQVhINDBEanJSbnRRUnp4UUFtS1hpakhmdlNkcUxpQUhqNlVlL1dqbWpIYWk0d294M3BlQUtCakdLQkNlNW82VXVNWnp6U2UxREdMMEZCT1JTWjVwYUFEbWpyMHBQcWFkeFFBaEdLWGdjVTMycGV0RmhBUm5tams4MFlwQngwcERIZGV2RklmV2w1cE0wd0FldjZVY1pwTTU0cGVCeFEyQXA0T1RTY0hpbDZjbW04MEFMUm52UlJuMDRvUUFhQU00cGNZSE5BOVJTQU9wNXBNOFVmaFJuMG9BVWpyUUFhQnpTY2RhYlFDNTdHazQ2VXBGSE9hQUE1N21pa09CUjM5NkJDNHgxcEJ6eG1qdHhTbWdBUFRBSEZManVLVEF4Ump2MG9BQlNIam1seU1aSFdrOXdjVURGNlVjZzhVZDZUNkNpd0M1enpSOUtYTklUNjBBSFBYRkEvU2pucFFCUUFZQjU5YWNNNXdUU0RIVThVdkhhZ0dGSjFOQk9LY0R6VFlBTUg1anpSUjE3VXRJQTZkcVhPQlNlNG9BRkFNT25YdFIxTkFQWEhlbkFVSUE2ZEtVZTM1MFlOUFVkcUFFeDNOTzY0SjVGR0NSajlhY0JtaXdBQjZVNERIU2xHQ0tjQU9wb3VGd0hiSnhTNHB3SHRSamloQmNjbzJVL3dDWHJTZ0h0UmlnUVlHS2ZqRktvSUdSVHdBT0tCM0VYRlBBNzBvSEZPSFhwU0dLQlRsRkx0L1duY0R0VEVHTzFTWVBVOFVtM2luZ2R6elFBcWdZelVvQnB1S2x3S0FHcUNlbmFwUjBvQXp6VWdIclF3RUh2VWdBb0NnbW5LTzVvQVVldFNBQ2dESnFYM05BQ0tNVTlRYzlhQURVZ1dnQXg2VklvUFFVQUgxeFVnQkl4UUFLQm5tcEJ6eFFvNTVwK09NaW5ZRC8wLzRBYzlxQ09PS09POUgxcGxBQWVLT2xMMTQ3MG1hUWd3S1VIOWFUSGFsN0QycHNBNzg4MGc0b28rbEFDKzRwRFFUem1qT0tBRDYwZGVsS1I2VW1QV2dBd0R5S092U2x4azBkdWFCQ2Q2VWVsSFVZbzVCeFFNTUhvYVQwb1BGSEhwUUFwNS9Ha3dSMnBmcFJ6M05BaERqMXBUa1lvT1FNZXRJVG1oREQxbzYwWUp5TVU3cHlEU0JpRTd1OUhUcFNqa1pwTzVOTUFIVG1qMk5HUWFBQjJvc0FjZ2MwWjQ0N1VZOUtLQUUvR2xBb3lPdEtjbWhnSE9jVWxGSFE4MEFIZkJwZTJCU1VZNDlLQmk5QlFlbWV0SU92RkdhQkM4MGY3MUp6aWpIcm1nQUo5cVVIbm1qbkZKa2RxUElMQjA5alM4VWRPZjhBNjFCNTY4VUJjTVo2VVk3MGR1YVRIRkRZaFI2VW81NjBuRklPbjBvR3dOSHVhUDFveG5pZ0FPY0ROT3dSU0QxQW82Yzk2QUFBQ2duam5yUWV0QnBBaGVjZXRKMS93cGMwbE5BQnpuQnAyTzVwT0tYak5DRUhRODBtTThIZ1VlNXBSNlVERjVQYWprNXBjVWUxQUNZNStsT3p4U1VZNG9RQU1maFM1STYwZ0hKQW9HY1VBS0IzRk9BR01VdU81K3RMbkI1b0FVVW9HT0tQcFRzMEFoY2NkT2xMZ1p4UUJUeHhRQWRPbE9BSUhOQVR2U2dZNG9TQVVEUFduNDZtZ2NkYWNBU0tBQUFqcDJxVEF6eFJqdWFmZzBBSUJnMUlBTVo3MEQycHlqSEJvQzRCYy9TbmpQWTBCYys5UDJrZE9sQUNrSDFxUUE5NlFLQnpVaWc5S0dGeEY0N1UvR0FLTytha0E5YWRnc0NqQnhVZ1huUDhxUUwycVFESTQ3MGdEQkJ6VDhmM3FBS2x3T2xGZ0VBSlBGU0FBOEdsMm5OTzJqclFoQUJ6d0trQ2pxS1VBQ25qSGFpNHhRdU9sUENtaENNVThEMG9BRkI3ZmhVZ0FBNHBRdU92RlBDOUtMZ3dBendCVHd2TktPbFNEcjZVV0EvLzFQNEFmZnBSOUtPY1VkYWFHTGpGTkdLWDE0bzVJb1FDODV6U2V4RkdPZUtCUUF2dlNkT3RIMG96anBSZnNJVTlhVE5BTkdQV2tWNUM1enpSU2M5RFNqK2RCSWxHZS9wUzl1YVFkZWFCaDA0RktlT0RSemoxcERrMHdRZHVhWHJ3YVNsTkFCMW80RkdEMDdVRWV0QU1Ed1BwUitnb1A1MG1PZXRBQys0b3hRZUQxcFJtaEFKbWs3OUtjZVBlazR4UUZneFNyeWFRZDZCMDlxTGdKN2ppbmM0elNZNlVwOWM4VURZblRrVXZRY1VnNlVkQlF4Qy9sU2M5T2xCcGZyMG9BVHJ4U2pHTVVjQVpGQndmYWk0Q0ROTGc5VFFCM3BCbnFLQUY2aWtHZU0wR2puT1RRQVlQV2w0NlVtZTFMd2VhQURIT0tRMHZOQm9FQk5HS01qTkJHT1JSWUE5NkNQbHBEOUtYRkZnRHJSMEFvNmU5TDlUUU1hQUtYcDA2MG5OQkFvc0lYSFBXanY2VXB6MjRwTUE5S0JpZ0RIMW94Z0FOUjBveDFQYWdMaTRBL3BSM3hTNC9La0p6MG9ZQmdFODgwRGo2MHVSNjBmV2dBR0QxbzdVVXVNbmp0elFDWUhqdlJ5YVhIT0tVakhXZ0JCNkNuZ1VnelR4bmdZb3VBbkdQbXAzYnJTQVlwL1Npd0FCa21sQTlUUzQ1elM3Yzk2Qmlpbll6MnhRTTlENlU4RG1nUURwVDhZb1VZTk9GRndGSEZPQS9Pa0E0NHFRRFBUcFFBRDJwL2FrQzhVOERKb1FJY0J3S2N1Y1lIU2djZmo3VTlSUUFZejEvR3BBQmpwUXErdFB4ZzR4U0FBTy9TcEJqSEZJQjNQV3BBT2VUelRCaUFIcU9NMUlCelR0dU9sT0F3ZWxDQWFCbnBVcWp2bWxBR09hZmdqclFERkFwNnJnZXRHT2xQQXdjSHZRSUFLbEh2UUFlZ0ZQVlFhQmdGOXFreGpqRkFBSnA0NjBBS0FDYWtDNU9hUlFha0NuT2V0QUNoZWNVOGU5Q2o1czVwNG9DNG9HT3RTQWV0Q2dWSW81elFCLy8xZjRBU0tNOTZVak5JZXRNWXZHTTBjZFJSMDRGSlFBRDJveDJ6UlI3MEFLYVR2UmoxTktCbWhnSDRpalBGSVJtajI2ME1CYzl4UU8xSVQ2MGRLQmlqa2V0SGJGSEhTZzBJUXB6aWtHZWxKeFI5YUFRdWZXa0hIMXBlbk5IZk5BQm4wcE9POUx3VFFEenhRQW1hWE5BOXVLU2dBemcwcDlUelNuMTdVM3ZRQXVPYU9sSDBITktPT0tBRTYwSHJTZGV0TDJGQUJqclI3ZzB1Y2pOSnhtaEJjQm44S0RpakhPS01kcUFGT0R6UmdkNk05LzBwS0FESFltbmR1YWJ4MUZMMEZBQ2NVcFBjVW1SM3BSanBRQW51YVdsNTY1cE9oeFFERUhiM29KeDBwUm50UjA1b0FRODhVdkI2MGRSbWc5ZlNnQUhxRHpTRGlsR2M1b29ZQWM5eFM0cERuT2FEMHpRQWM1b1BITkhUaWpxUG1wQWdJQUhJb0g2VWRlRFNnWk5NUUhrYzBlMmFUZ1U0ZTNhaTRDWUpPZTFMMW81SnlhWHJSWWFZdjBvd2VlK2FUb0tEanRRQXZyUVFLUHJSMW9BQU8vZWw1QTlxQjFvSHYzb0FYYjIvT2xDbWpBQjQ2VTdCNzBBQTlCVGhqdHpTQWM1WHZUeGc4ZGFBWUw3OXFmMHBNVTRaN1VBd0E5RDBwNHhqYlNyakJwUjF6MW9zQ0Q2MC9CUFdqNmQ2Y0JURUFCSFduaGFCVHdySDJwV0dKZ21wRldnQVUvdFFDQURtcEFOM1NrR01VOVZ4MW9BQXZZR25xQjFvVWM4VklCUUFvWGpQNVVvR09ldEx6akhTbmdFOUtCZ0Y0cVFEcGlrWGdmU25oY2NpbUFvNDU2MUlGNW9YMDcwOERKcENBRHA3MUlCa2Mwb1VaeUtlb3p6UUFLTURpcEFPUHJTWTR5YWwyZ0NnQUNnY0NualBROWFBTWMxS0IvK3FnQkFNOG1ucU85T0F4d2ZwVGdLYTh3QmNubkZTQmVQcFJ0NlZJQWVCU0JDcUNCN1U1YzV3S2NvOU9hZVBVZDZBdUNqaXBRb3BNZHVsU0FkdlNoaVAvL1cvZ0I5elMrMUJwT0FPYVlCbm1qUEZIdFMrK0tCM0EwQWNkS0IweFFCMzlLQkNIam9LT2MwZ3hTbnJRVXdPVFIycGV0QUF4ejBvRUhXazRvejNwdzQ2OXFBR25JcGVmd29QWElvemdjVUlBR1RSeDFvL1NnQWcwV0FUQTZtbC9Xa282MFdBQjdVWjdVRG5yUys1b0FBYVdrN2RLVSsxSUE0elNkcVhwemlrNHBpREo5YU1ZNEFvOXFNWk5BeE9hZHoxN1VuWDJvQUhVZHFBREpQU2xIMHBPQ2FPRDN4UUNEMm9OSFhpZ0E4Q2dBenpSbjBvN1VvUDUwWEN3WUF6NzBuU2w2aWpBQnhRQW5PTURtbDlxVHJ6UzU3ZEtMQ0FpZ24xcE9RYUNjSElvQUtPMzBwVDE1cE9POUZ3RnhTZEtYL0FQWFJ6MUZBdzYvTlJ6bkk3MHVNY1VnUFBGQUM4OUJTZDhVWTV5T2FTZ0JjREdLTVlQTkxuTkdPMUlTRTV4U2dZSHBSZ0RpanZpbVBRVThpam9NNXBCakhOTytZbWdQTURSMzlhUW1sSndjZHFBQWNVdWVPZTlJTTlSelRnQUJRQW5OS2VlTVVkT0RRUURpa0FBWUhINTA3R0NBS1BhbkFldE1BeGluREdlYVRBUFRtbmpuaWl3QjM0cDNVOFVBSHBUbEJGQUFNOVNLZmpOQTlhVWRPS0FGNDZmNTRwL1dnY2Q2Y0FQOEE2OUFDZ2ZMaW5EN3ZGQUdUMHFUSEFvQWFBS2V1TUdsR2NjVS9ITkZ3RjY5Qm1sQUFGTGp0VHNVQUtveUtrQUo0eFNEamdjVS9CR2U5QUNyei9Lbjl1YVhHYWNBTTBBQUdlS2xDMGlqbW5qRkFXRkFJcDZqSTlhQU9tS2ZqMTYwd0RBNjFMaWtWY0dwUnlPZnpwTUJBQWFlcWp0U2daNjA0S0Q4eG9TQVZWeVByVHd1ZW5TbFViajBxVUQwNG9BUUFtcEJqdlNyK2xQQzRPY1VBQUhwVWdCNjBCZU9QenFUa2RhWUNLT09ha0FwUXVldFNESXBNQUEvT25oZWNVcWdkTVU5UUJ6aWk0TVVMMEdLY3FtbFhpbjRJcEFqLzEvNEFlMUwzOXFPRDFwTTB3REhhbDk2VEdEeHpTOUJSWVlIRklPbExTSDJvQkIrbEhlbG93QndhUUNFZDZQclNuSU5IRk1CQmp2U25rMENrK2xDQU0rMUdLVWoxbytsRmdFOXpTa1pvSEI1cENPY1VnRkJ4eWFNSHRSd2VsR01kS1lCbkZCOWFPS0R1NzBBQTRvK2xLT0RpajNIRklCRHh6UjE1cFNjVWdQSHZUQVhqT0tPaDlUU2RjRVVZeHlLR2dGSXpTZXZwUjJveCtOQUJ5QmswZlNqcnl4b0hUaWdBL0dqUGMwYzlxVWRldENBVEZHZWNVdUJuM3BPVHhRQXZPT2xKN2lnNDdjMG9IWTBXQVBYSE5JT2VldEtNaWtKb0FPMmFYRkE2Wm9Qb0tCQ1pwVHdLRHh6aWsrbEFDOXVhVVVBWjYwZE9sQXh1ZXdGS2NkQlJ6UjI2VUFMMzVvNXpSNzBtTTBBaGVSMG80UHRSZ25xYWRrOXFBRzR4MHBjWmFsT01ZcEFmMG9FS000d0tQeDVOSUJ4UzU5ZTFER3c3MHZmR0tCNlVZSGFnQVVMUmpQQW9QdFJqM29BY01VdU93b0E1NHhUZ1B5b1lnQ2luZHFOcEhCcHd3YUJvQXVLZGoxb0hzS2NBQjcwQllRWlhnMDhEb0tCalBOT1VEcFJjQmNIMHAyRDBwUU9NVW9vQVVESFRqTk9HQlFBT3BwL05BQUJqaW5nRG9lYUFNakFxVEdlbEhvQW1NOG52VW1Qem9HYzA4Y0Qxb0FRZlNwQU1qaWx4M3B3SFBIZWl3aGVtS2ZqSFdnQTl4VHh1em5GQlZ4Qm1wVkhHS1FESTRxUVlGQklCZlg4S2tBR0JqbWxIWG5tbkFkelFNTnZISnFRQUUvTnhTcnh4VGg3MEFLcTU5cWVCUW9QRlNoZU9hQVFpcGptcE51T3RDam9ha0M5cUxnS0JrNXhpbkFZcGR2UEhOU0FZb0N3QUFET2VLZUFEMW9BUFhQV3BRQVJSY0FBNDYwOEFkNlVMeGlucU1FR2dBQXpVZ0dCaWdEMnFSUVA2MGhBbzlLa0M1eC9XZ0R0VDFHQm1tTVVEajZWSXE0TkFIclVpajhhUUkvL1EvZ0JJcGMwREk1b05Pd3c0cE9sQXBmUUNnQTRKd2FRZXRMMTROSDA0cEFKaWxPUnpTRHBSeFRBRG1qdnpRQWNZcGNFMEFHZXVhUTRvbzc1TkNFTG4wcGUzTk45Nk9uV25ZQlJ4UjJ4UjFPS01EcWFRd3dhUDg1cERpbEI3MFdCQ0NsUEpvejFvNW9BVHRTNHg3VVVjQVVNQXptZ0VDamp0UzU0b0FUaWw3VVVnOXFBRitsR1RSMi94cHZINTBDSEQxOUtNbkhYbWpqT0tRZWdvR0hQcG1seHppazQ2ZFRTODR6UUFkOFVEcFNVWlBXZ0JjZTFMejFvNzVOSjJ6UUlRWTljVXZUcFNlMUtNOURTR0hRK3RKakJwZVRTZmpUc0F1Um1qdFIwSEZCR09mU2p5QVFaN1V0SFBTZys5SUE1N1V2QU9LUUhBelM0UFNtQWRLUWoxNHBlT2xHQjNwQUxnZDZYQjZaelNZNmRLVDYwN0JjZGtkTVVwcEtUcng2VTlBdUxnWitsTGtkcU0vaFFNK3VLUUNubjNvQXh3S1RQUEhXbDk2R0ZnNjhBOUtkeFNkYWVNRGlnQkFQMXArRDFJeFFCZyt0T3h6elJjQXhrWXpUc0NqcU1rMDREOHFBRGc4VTRZb3ovZHAvVTBXQUFwUFduQVpGSU9SazFJQjYwTUEyZ2pILzE2Y0JnNG9IcGlucUN3NjBYQUFQMDcwOERKcFI5ZWxPQXhqdFNBQXZhcEZCendLQXVQcjYxSUZGTWFFd2VvcDRIVDJvMjlxY005cUJNVURtbmdlbEdPTVZJRkdlS0FFQ2tWS0IyN0drSEhRVklvOWFMQXhBTW4vT2FrQTV3ZnpwZTNBNjA4REI1NlVBS0J3S2NGRktxNUJBcVRBSnlhQXNOVlRqRlNnZHFBS2tBeU1DZ0JBT2V0U3FQWGloUWV0UEM0NlVERlhPYWZ0cFZHYWNBUU9hQmVZdUJ1NHFWUWUzSk5HQmppcFF1VFFBMVZ5VG1wQUNEU0tNOEFWS0F2ZnRTQmdCMnFRYzhlbElCazFJQjB6elRFS3FrZDZrMmtpZ0xucFVnWEhTZ0FBR00xSUZ4elNLb0F4VWdBeHpSY2FGQTdubXBCOWFRRHJVZ0FIOWFBdWYvUi9nQkhxYU1HanRSK0hXZ1lZSi9DbHp6aWt4Mk5IVGcwd0FaSHZSMjRvNHBlUHJRQWNBYzBIdFJnOUtTZ0Jmb2FUUEZIZWp0UUF1ZU1VbjBwU2FUSEZBaFI2MEFjMG5URkJwREY3Y2RxT2FQZWdkS1lCbmpwU2ZXbDZjVUU4VUFHRFFQVEZKanZTOGRhR0Z3UHRRQjYwVUgxTkZnRDBQNlVVbjBwYzlEUU1YUE9LUW4xb1BvS1hka2NkYUJJQWFROThVN3J3YWI5UHpvQUtUOUtkMHBNNEZDRUxqanJSeVR4MnBEbm9PYUJsdnBRQTdBNjBtUjNvNUk0RkJ6akZBQ0dseHhuclJuUFR0UzQ0b0dON1lvSnhtbEo5UHpvQk5BQUJRT1R6Um50UUNEK0ZBaE9vNHBRY2REUU1kcU8zOHFCaThmalNjWXhSbm5tbHpnOWNVSUJOM05LTTR4Umc1d0tYQjZpZ0E5NlBmRkowUEFwZXZOQUJqOGU5TDlLTWdmTFNuSkI3VVdBUUFqbWw5dXRJRFM0d09uV2pZZmtINFVZSkdmU2xHU0tPLzBvRUlNQ3BEU0FrOXFjT2FHQUNuYmVqVUQrVktvd2VLUUFQL3IwNERJNEdLWHBUZ09lS1lKZ0JpbllIZnJRdlROUEF4UUFBVTdIUWlqc0FEVHdOdEFDTG5QV3BOb1BIZWhSMjlhY09hQXNDampBNHFRQTR3S0ZHUHBUZ3BCeFFBQWQ2ZU1VdU9PYWVCZ1o3MEFLcTg1SE5LQUJ3VFNnWjRwNEZBQUZ6Z0RwVWdIZkZBQTRBcDRCOUtBc0lCMnpVbU1VcWdnWUhlbkQwNjVwakZVWjVxUmFBb1BTbmJjQ2tJQUJnVktCeG1rVWNacVJUZ2RLTGdBcVJRQndhVGJ6N1ZOZ0NnQm9VZFBTcEZHVDdpbEE3NHB5ajBvQzQ0THprMUlGNzAwZGZXcFZBN1VBQ24xRlNEbkZBNVBGU0FNZWxBTUZBcVZWSUZKMDVGUEE3Q2dFQVhCeFVvQUhYcFNBZHVsU0t2YkZGd0JWNEZTaGUvV2dBSDcyS2t4bnBTRUFHZmFwQU05YUFCVGxHYVl4UXZQclVvR2VLQXZxS2Z0b0N3QmVNMUtvNTRwQUNlZjUxSUVJb2JBLy85TCtBSTQvQ2w0STlLYmpOSE9jVXhpOU9sSnpuZzB1TW42VWM5T2xBQ2Y1eFFUM29HTTB1RDBvRUdUaWs2bk5GTHgwb0dJZXRLZWFQOWswYzBBSFR2U2dZNlVZL09rejYwQ0QzelNZT0tCelRtTkF4UHJTR2xvN1VBR2M1b3hSOU9LVSt2ZWdFSnoxbzVOQTVvL25RRmhSem4wbzdVRWpvYVQyRk5CY1U4VWQ4bWcwbmJJcEFHTzlMazlQU2c5Y2lrRkNBQnljaWdETkwxNjBDaG9RYzRvN1lwZjBGSUFlOUF3N1lGSWVlbEtlS001NXBCWVRqanZTakk1TkhQclJqdWVhb0FQV2o2VUVIZ1VmU2xZQUlCbytsQkk2SDhhQndPYUFZWnp4UzU3VTBZSXBlYUVERG5vUHpvSkdlS0JrOEg2MGR1YUFBY1VwUHIwcGV2dlNEc1Axb0dnUGFnamNhWDBGS0IrWHJRU0ozb0o3Q2pwK05LZVR6UWhoOUtYQTdVR2t4MjdVQUx4MXBldkEvd0FhVG50U2dITkFCakF4VGh4U0E5aUtkakI2ODBXSDFBQTlLZmlrSHRUaDdmblFJWEhIMHB3QUhJNjBDbllQZW13QlJ6VGp6MnpRT2VTYWVNQ3BDdzFRT3BxUURuNjBZcDRVZGUxTUJRcEh5MDVSeHdLUUxVbU9LTGdHT00wOGZwU0FENllwNFhqTkFCeU9ha3gzRklNWXkxT3gyb0FjQnhrVThBZi9BRjZBdWVuTkxpaERRN2cwOEFDbEhUSFNuRDFOREVLcTA4RHQzb3h4N1ZKZzBEUUFEci9PbnFPMUF3T1QrVlNCUU9XSE5ERUNqbk5TQmU5SUJ4eFR3QVJRRmhRQVRVZ0dlUGVnTGcwOEFVQUtvSEdha1VFOGlnTGsvU3BGWDNwQUFHYWVGd0JpbFFEdDJwNEZNQlFBdk5TQmVhUlJqbW5qT09LQUZBcDQ2NEgwcEF1T0trQUhRVUFLQmdpcEFCeG1rQXpVb29BVlFLZUZHYUFPaEZTZ0VjaWtJUlJqaXBCN25yUnR5S2tVY2NVeG9GQXhVZ0hyaWdZenp5YWVGSFgxb0Jnb3djbXBCemttbEFKeFR3dU9NMFhBVlJUbFhQSHJUZ3VhZW96VEEvL1QvZ0N6Z1VlNHBCNjQ0cGVSd0tZd3llZ282MGxBb1lDL2pTY21nOWFVL3dDMVFBWTc5S1BiMW81enhTZlUwQUtlT2xISnBQYW5jOU0wTUxEY2c5ZWFVQWR1bEoycGZyUU5pNTlxUWUxSEdjVURyUUlPTTgwVWRlYVVqbk5BQ2QrS1BlakdlVFNEUGFnQmZyelMreHBNWkZMZy9pS0dDRUZHUUQwb280cEFMMW80by9DampIRk1BeGdVY2pyU2M1b0hIV2dBT2M0cFFlZnBRUGZ0UjFGQ1FCOWFLVGdERkFQVTBXRUhOTHdlQlFPS01EODZCaDJ6U0dqZ1VweCtGSVFkRHdLUWpzYWRuUHRTWUk0Rk1kdzZEQm9JNG81SjROSUNQeG9FS01mV2w2bmtVbWFVRTBnRHJ6UjM0bzU2bWxIUCtOTVlvNTQ3MFlvQUZKMUhTZ0JjVWMwaE9lV3B3R0Z6aWdCTWdjamswY21qK0hqTktjZEtZQ2NVdUtDZWFVZXRJR0FHVGpGTDFvSFhqbW5ZSTRvQU9PcHAzRkFIUVVvR2VCUUFvQkhUNlUvR1JTQWNaSFduQVVBeFJubkJwNEJ4VFJ4MC9HbmtIRkFBTWpPS2s3ZTFJT25GUEZBaEFLZU1EQUZDak5TQWVsQXhCVHUzdlNqUEZTREpHZTlOQU5BeU1tcE1lMktRTDZWSUFCanZTdUF1Q0JtcEJ6emptbXFDT2FrK2xGZ0FLQmcwOGU5QUg0MUp0R2FMZ0lvTzBZcCtNZlduQWVsUEdTS0FFR1J4NjFLQjNOSUJtcE1EUE5BQUIzcVFaN2MwQmVNRTA5VkZBQW94M3FVRG5GTnhuOGFrQXhRQW9CeGsxSnppanJ6VHh5TUNnQUF4eFVpcjNOSUI2OUtsQXhRREFMelQxR2VSVGxVSElQRlBBeHlLTGdBSEZQQzQ2MHFxS2VBTVlvQVVESC8xcWZ0QTRvQzVxVUFENXFRZ0FCT1A1MDhMZzBBWjQ5YWtBeDcwME5BRnhpcE1VQVlQSXpVaWpOQVhGQzg4Q3BGOUtURlBBRkNRWEZDNEdSVHdNOERtaFZCNHFWUVQzb0JDQUFlOVNoZjFwQXVlQVB4cVRIU2dHdzYxSW94U0FBVThaUE5JTEgvLzFQNEFlTTBvNG9QTkhQYW1NTWpyU1VwNjhVYzkrYUxBSnhTZ0hQV2c4YzBDZ0F6ajNOTDE2MGdKbzlQV2dBNDZVZGVsQW82ZGFMQXdCUDhBRFJRUFQxcFFjVVdBVDY5NktPK01VQWRxVEFCUU9tYU1FMERJR1JUdUFaejEvT2w2L1RyU0FESDlhWG9jVU1MQ2ZoeFFENjk2RCtWTGtIdlNBVGpHS09QOGlsSU9LQndjQ21BaDl1OUwxT09sQjRPYVRtaXdDamcrOUh0K3RCd0R4U2NnMEFIU2c1em52UzllS1RyMG9CQjcwdWQxQkhVQ2tISm9BT2hIclJ6UnhqZzB2WG1nUWh3UDhLWCtsR01VWndPZUtRdzc0bzY5T2NVb3lPYU8rRnBnSmp0MEZBNjhVSGtZcGVoOWhRQWQ4VVpQVHBRQnh6U2tmaFFoQ1k0eFNrQURCb3h4OWFQNjB4aHoycFJrQ2pwUU92TkZndUJIcFNrWTRwT0R6UzlSNlVnRTZqclM4NDVvNisxQUJQNDBBT0E0K3RBR09LVVpwY1pvQmdQUWMwN0hGSDRVNGM4VUFMM3lUUzVCL2xRQjZkcWtBenhRQW1PMU85eDJwQU9hZU1udFFBWTcwN3IxcFZHT1JUZ004VUNGNkRPYVVMZzlhWEhZVThldUtHT3dBWS9HbmpIR1JRT21SeFRnQzJmZWhvUUtQWG1wTWQ2QU9hazZnWW9IY01VNEE1T1BXbEhKcCtPYUFEYitOUEFKTklPZVRVb0dEd0tHQUFldmVwQmdIRk1DZ2Q4VktBVDFvQVZSdCs5VGw1RktGQTdVOEFEM29HS0FlMU9BcDNiNXFrQXp5S0VJUWRTYWVCZytsQUE2VklGOUtBRngzcDRHTVVuKzBLbUE3VVdBUURGU2daTk54azFJQitsQUNnRHFmeXFRRDBwQXVUazFJQjYwZ0ZVQWpOU0tEbkFwcWpBd0tsQXh5S2JRQUJubjNxUlJnZlNnQVUvNlVnSEtPeHFRQTVwQU1HcFFLWUNBRVl6VWdGQ2pIQnA0VVo1N1VKQUFYdjBxUUxRbzU1cVFBajZVZVFDNEF4VHdLQVBXcEY0NEhGQUFBdmFuZ0FVb0g2MDhlOUFDNEdLZUIrRkdCamoxcVFMbmswQUtCbjhLZUtRQThkcWwyNE5EWUgvLzFmNEFhQjdDbDVvT085TVlaSGFqZ1VaeFNVQllVZGFPS05wcE1EdFFBZldsQTV3YU8yQlNkZWVsRndzTDdDZzU2aWpHYU1kY0NnQXBRTWNHbWpJSE5POWpRd0c5QlMvV2pHZWxCSXpRZ0RHVG1pbEovQ2svclFBY25wU25GSndlOUI2VUFMOU9hYUFjVTQ0eGlnVWdFeU9sQU9ENjBER2FYUEZPd0NZSTZVdlEwVUVnOUtMZ0xuTklSNlVZN0dnOGMwV0VCUHJSMzlhRG52MW9CeHpRQWRPbEdPZnBTSDNwZTJLQUQySFdrd0RTOG5rVVo5QlNHSWZhbmV3cEJqRkdPYVlnT1FPS1RqT0tjUGFrNDYwRFFuUVU3SXpTREpwZU1jZGFBRjl6UUJuSW9Bb3lPMUFCZzllbExuSnhSMDROTGtkS0FzQU9UeitWSnlldExqSjQ2MGdBRk5nR01yL09sNXBTTWlqcU1VZ0VQcFR1QjFGQzgwN3Z6UUFBOURTOFpwY1UvcjFvQWFPQWNVOERqM29WUlRnQjBQU2dCY1U0WUk1NXBBQ2VTS2VCMG9BRjU2bXBCOUthb1BVVS9ITklBeGdZRlNCZTFOQTU2MUlCNzA3Z0dPYzU1cDRCNzBDbmdkNlFDQmNZcDRHZVRTcU0vU25xT2FZQUFlMVNEaWdBbmcwOERQUFdnQVZjZmpUbHhuSm9BNVBHS2VCUWdzTzI5dTFQQTR4U0JRZmNDcEFPVFFBdlBBRk94bWdMbm1wUXY0Q2dMaUxpcEFDVHpTS0JtcFFPZnJUdUFBRTA4WkF6UUJ4VWdYakE0cFdBRkF4VWdCemlnS0J4VDhEcUJRZ0ZVWXA0WEo0b1ZmU3BCNzBEOHd4azRxVEhHT3RDamlub0RqRkFrT0F4bk5QSHZTQUhPRDNxUlJRQW9VY1ZJRko2MEFaNHA0RkFoUUQwTlNnQWNVaXIrZFNBRTBnRUM4MUtCbmtVS3VldFNBSE9hWXdDbnJVaWpQU2hRQjE0eFQxQTZHZ1Fpam9SVXFyenpRcSt0U0JjSEE5YUIyRGJqclVtTThVQU5qaXBCbnJRQWdISEZTanBTQk05ZWFrQyt0REN3b0dlbEtGQnBRT2FrWDFvQUFPK00xSW8yODBnSFAwcHlqMDVKb0EvLzliK0FMdDZVZ28rbEx6MjZVeGgrSFNpazk2VTVPS0FERkhHTUNnY1VIR00wTUE3MHVPS09XNjBuR00wZ0RrVW1PS2RtanB4VEVKMTVQQW9BNzB1T2M5YVE1QTdETkF4UmpPYVRCNlVkT3RHVGdVV0FYdmcwREZKMTRwUjc5cUJDWndhTURIRkE2ODBwSkhTZ1ltZldrcDJEMW82OGpyUUFwOURUZWZXbDdETkh2U0FUMnhTOU85QUdSeFNaOWFiWUFLWDZFVWRlYUNEU0JvT1B5bzRvd1J4MW9IUE5NUW5HS01nMHZVMHBHVHpRTVB3NjAzUEZBeUtYdmlnUUgxb0E5YU92UVV0QXhNRHR6U2pCK2xHT01nMG80NW9CQ2VwcFNjYzBlMUF6bWdCZUFNOXFBZldqR0tEeU1uRkFDaklPQlJnai82OUp6Uyt3NzBBTDBwTzlCNmNkYWQ3ZHFMQUdPNG9DZ1V1S1VEMG9iQU1jOFU3QStsSmdkVFRnT2xBeGNZcDJEM3BRT2VhVWNjbWdRb0dhWEJIRkM1OUtrQUFQRkFDREJIV25nRWRhUUx4OWFlS1lBQU90U0FZcEJ6MDYwN2JqdFN1QW9HZUtmakh1UlNBY2MxTHdEOUtBRUE0cDRIYnBSalBGT3h4elFBNGRLY0FPS01VOEthQUZXblk5YVVaSDQwOEE5NkFFNkhtbmdmalNpcEFLQVlnd09hbFhPTS9wU0tQVTFJT21Cd0tMQmNCNkExS0Z6ejBwQUJUMUhmdlJZQlIxem5wVHdNRG1nRG5QclVtTzUvS20yQ0VBNEJxVmNkS0VYdFRncEpwQUx0QXFVREhXa0E3RGlwVlhGQWFDS01jQ3BBT203aWhCM3FVRCs2YUFFQTU0cVFLY2V0Q3Fha0NpaXdXQlFlS2VGN0NoVnp5T0tlbzlPbElMQ2dIUHBVcWp2U1lIUTFJQmp0VEFBQVFLbEE5ZWFRQUFmU3BBT2VQclFBdU05YWVxNStsS0IycDRGRmdFSFhpcFZVZFJRQmlwQU93NG9HSU9lYWxRVUFBRG5yVHdLQkFBTTgxSUIycFFCVDFIZWk0eEFCMjVxUURIZWpHT2xTYlR4U0VJQUNjaXBBS0I2MUlGd1ByVEdHQmluS0IxcFZHMDQ5cWZnZDZCTS8vMS80QXVnbzYwY1VjZDZZd3g2VXZTZys5Tm9DdzczRklEMnBlZzRwTWtVTUFBb3hpajM2VVo3ZzBBSjFwYU9hUHBRQVVEanR6U2swbklvQURqSEpwZmVqa0Ftako2ZGFBRXljQ2crOUxnbnBTVWdEMk5HT3hvejZjWm93QlRBUDF6UzhpajVjMGNqazBBSm5uSW9KeWMwdjYwZyt0SUJUbWdaejcwbjBwZm02MDdBeGM0cHZIV2xQZk5BOSs5QUNZcGVRZUtPdjQwWW9BT2V0QkdCU0dsRkFDMG1SMEZHQU9LTUFuRkFCNzU2MHVPZjBveVByUU92TkFDajZVWndQYzBHam9NMEFIZkpOTDlhVUFkYVRrampyNjBCWUI2L2pTay81NjBkQm1nZGZXaERFSHQycGNISFhOS0QrbEZBZ0dlMUFHQnpSamluNEo1UEZBQy9XZ0RCb1ZjOGlwTzJLQVFnd2VLY0tPYWRqbkJvQUFBZUtrSDAvQ21nNUZPd00wQUFCengycDQ2YzBjclQxQjR4eFFOb09CeFQ4Q2xBTktCeHhRSVVDbmdFZGFUYVZPS2VDVFFnRlhrMDRBNHlLTVlQSE5TWUIvbFFERVg4cWs2bkg2MG1BQjBwNEdEUUFLUFVWSUFSZ2p0UmoyelVneFFBQWR4VHh3YUZBSkFxUURGQUNCZlUxSmdpZ0RQSXFVWlBXaTREUU9NMUlBQ1JSakhXcEFNYzV6UUlBS2tYcnpTQWRqVXdIcno5YUJzYW96eFVxajA0cE1ZNlZLUFUweERWQi9PcFFQV2tYUFNwVlQwRklZb0dDZlNuakhVVUtwNjA4QVVBQTQ0cVVEdlFxNDYxSW83R2dCQVBicFVnNTR6U3F2cFVnQjdHaTRBcTloVWdYakpvSHZUeG5PQ0tMaUFMMkFxUUR0UUJ6eFR3TzRwREZBSTQ2VklBVHpTQWM0cVlVd0VBQjROUHdPOUtGcDZna1pvQVZRTWpOUFVEclFBZXBxUURGQ0VDcU85U0QwTklvd00xSUJRTVVLY1lGT1hwbWxBL0R0VW1PbmFnUWdCSTYvalR3S0FwSDQxSUFCelIwR0tGeitGUFVaL0drQXp6VWc2MENBRGluQVpPYzRwUU1pbkFIdWFCbi8wUDRBd2MwZzRIRkptblo0OWFZeEJqcUtPOUFvQko2VVdBTVk3MGZUdlIxNW94aWdCZnBRY0hta3BjZWxBZ1BQT2FROVJTZzVwRG5HS0xERFBIU2puT1Axbzl6Um1nQXo4dEFKUFRpam9lZjFveDNGQVhENlV2U2s3ZGVLWFBmdDcwQUpTNHlLRGdISFdrOUtRZzYrMUwyeFM0cG94UU1QZWpHS1huOFRSeWVuRk1BNHpnVW5JTkhXbHdCUmNCRHgxb3dNOGZyUzQ0bzU2MFhFRkJvN2NDZ2RjRHBRT3dESXBSelNjaWdjZk5RQWZVMDRjOGltOGRxZGp0UUlNazBkS09NZzBkdUtCaThIclNld3BmcFJnMEFIQTVGQTU1UFdqMEk0cE1IOHFBc081QXBjZXRJRDNvT2UvYWdHTDFHS1hCUFdnS2V4cDFBaFJ4eGpOTHQ3OWFRWXh5S2QxK1VVRFl0S01qcnpRb3h4ak5PeFFBRG9LY1BtT0J6VHNacHc2VUFLQlM0elI3bW5EcDgxQUFCbkF4aXBPVFNEMDcxS0RRd0dqamc5T3RTRWJqZ2RhVGJuL0NwQXB4aWdMZ09PYWNGQnBRUGFuNE9LQUVBUEFxVEJIRkF6MXA0R2V0QUFGNHA2NHhTcU94L3ppbjVJNjBBQUFxUlIzb1VkL1NuZHFBWTRETktvd01tZ0Fqa2lwUU85QUFCM3FSUmpnbWpHRFVnR0JtZ0JGSHJUOFo0TkFCQXdha3hnYzBBQUJCeFVnNlpOS3UzdlVtS0FZTDF5YWVCam1rQUpxVEhwelFnRnhqclQxWE9SbWxBUEFGU1lIR09LQUVDOXh4VTJQU21oYzFKemowb0FGWEZTcXVPRDBwTnA3OTZrd2NjOFpwQUE1NlZJRkFIU2tBSDFxVUFkQjNvRUFIYXBNSDd3NzBEUGVwQVBTbU1BcDdjVklCZzhVS3BwNEhITkFBb3gxNzFLRnhRdVJ6MXAyT1ByUmNCUVQzcVRBSTRvVlJVaTRJb0JBQjcxSU1maFNBZXRTS01kcUVBaWdpcEJqUFdnTG1wUXB4bWdCTVZLT09sSUI2MDhEMG9BQmswOVJ6MG9YMnA0QnBBS0JucDJwNDlLQms5YWVCN1V3Rlh2azA3SDQwQUU5S2VPbnkwQWtmL1IvZ0NwUHBTanRTQTRPYVlEdTNOSU1abzRIdlNkc1VORERnY1V1S1gxcEtBdUdlTVVkRFJuTkJvQVhQRkp6Mm8vV2xPUlNBT08xSjA1RkhQNFVvSjdVMklRWW81QTk2T0JTOFlGQXhPZndvNjhucFIwNG9QdFFBYzhVdmJtZ25uSm93M1dnQUhYNlVuUGVsR1IxbzYwQmNBRG5GR2FPUUFLS1FCeWVsSU92Rk9HVHpTQVo2VXhDbm5pazVQV2t6Mk5MaWdZSGlnSEhVMG5YNlU3bnJRQW1EUU9UU2s0T0tQclJjQmMrdmFrQXg3MGREZzA3a0NnTENFNTk2RGttbHh6a1VjaWdBSFQ2MHZ2bWhjZEJSd0JrVVdCaWNrVVp5ZWFQNVV2dFF4Z0tkOG9vcGZyUXhDOUtjUU9sR09jOXFjRGppaEFJQ2VvUFduOS9Xa0E3OUtlb3dPYVFBQjZVL2tVZ0g0MDRmZHAyQVVaUEZQQ250U0RKOXFlTWRSUllCb3gzNXFRREZLQmprVTdIcnpRTUFLZmpqaWdEdjFwNjlNVUNGSFBBcDJNRWlnREgzYWV1TzlBQU9Ubjhha3gvZTcwaThWSW9QZWtBRE9jVS9IR2FOdkhJelVtS2FCaUtuU3BBcHo3WnBBQm1wQjdVQUtCbnQvaFR3S0FPYzFKdC9DajFBQUtlbzlLQU1kdWFmdDU0N1VBeFFCbW5nY1k3VW9VOStha0E0elFBMVJuM3FRRDFwUUFLa1hyUUFvSFgxRlBBcE1BR3BRdWNVZ0FVOERIT2FBQm5BNXFRWkpBcGdDam5JcVFEQUE2VWdHS2xDNVdnQmYwcHlnQVpOT0E5S2VBQnhTRUtCZzU2VTVSamtVNEx6bW5jNEh2VHVBcWoxcVJWT2NVZ0dDQWFsQS9LZ1lpcjYwOERQTk9BM1ZJcTlqUUNCUitmdlVnVWR4U1lPS2tSUlJjQlFPOVNEcFNEMHhVb0dlL3RRREdxT2VLazIwQVpHUlVneU9LQUVIQStsU1k1d0tVS0QxNXA2ajFwMkFVTDNweWpKb0M5TTFKak5JTGh5T25YdlR3TTBiZVJUL3g0b0VBSEZQSFNqSGZwVWdCeFFBZzRPRFQ4WUdLTVU4WXhUR0Nqc2UxU0RQV2t4bm1uNDQ5Y1VYQm4vL1MvZ0NHUjBvNlVZNzBBVXhobk5HTzFIUVVleG9BUGVsNmNVMFVwOWFBRE5LTW5pa0l3Y1o0cGVuU2dCTWZsUzVwdE9JelFBbUJqaWxJcE9PbEwwb3VNUUgxb3pTNTcwZFI5S0JDRE9PS0RSampGS09LQXVMN0R0U1l4MnlUUlNkODBndUtRYzhDa0I5S1h2Z1VtTW4xcGdoZW5XZ2ZleWVLTTl4Uy9oU0M0MGc1OUtVNUZHTTBsQVdEbWxBeFFCUzRCNjB3QTg4aWpQYzlxVHB3ZWFkbWdCQmc4MHYrOVNISWJtbHdSMzZVQUhGTGpxTVVsTzR4azBBeHB4aW5BZC8wb1VkNkQ2SGlnQUdjKzlIR2R1S0tQYWdBNTZDbDVQV2djSEFwd3dQZWdBK2xPSEZLTW5tbEdjNXpRQW80SEZPL25RQnhTZ2NtZ1l2Tk9DNXgzb0FJcDVCSFdnUW1PT090UHh6elNEMU5QQUdNMElBQS9XcEFPT3ROR2Z5cCtDT1JRQTRjOG5wVHVLQU04dDBwNEI0cEFBNmdWSUJ4elNkcWR0NXBvQVhBcVRITkFCNzFJRklHS0FZbU1qTlBYa0VpbEEvV25CZlRpZ0JRTTgwL0ZLQUtlb0hVQ2kzUUFYbkdPS2t3ZW1LQXVPbFA1N1VBaFZBNlU1UU04MDRlbFBBR2ZXaXdDQVpIRlNoZU1rVWdHUm4xcVRBNjBJTENoZjRxZUJuaWpINVZJRk5BWEVDbXBGQXBjVTlWN2V0QUFvSk5TS085QVhOUENpZ0J3SGVuNFAzalFCamdWS3ErdEFEZWFsQzBLTSs5UzR4eDBvWUNBZGpVbUJRQnhUd0tRa0tvR00rdFNoVDBwb3dEeFVxKzlBK2dtT092TlNoYVFEQzhWS0FEeFRDd2dIR0treFFxbk5QQTQ0NXBvUUFZT0RVZ1huTkM4ZHFsd0tReE52cjJxVURJcEZCN1ZJQms0RkFCMy94cDR6UU1FYzA5UmlnQVVkdTlTTHhodXRBQVBGU0RweFFBWTUrdFNBSHYycG9CeFVtQ0tMQ0ZDLzU2MDRybkFwZWk1Rk94Mm9HS0J4aW5qa2NkcUIxK3RQSDg2QUFMa2luQWM1b0M0cHd6MDYwTUVBRlNmTGtFMGdBNXdQMXA0R2VhR0Z6LzAvNEFSanRTakZKVGg3MHhpWk9LWDBOSm5ubWc4VUNEZ2MwWnlNVWNkQlFBYUJnTTRvNjhkS1hyeFJ4MDdVWEFQMW9QV2dVbjFvQVh0azBnUGFsNTZDazY5S0FEdG5GSE9PS2RTY2tVWEJDZE9mU2xCT2MrdEo3VXVmOEE5ZEFCZ2tVRFBVVXZQSnBNOXFRcmgxNlVZSTR4MG9QV2c4a0U5NllNT1RSNzBlL1RGQTlBYVEyR09hWEhZVWdwUndLWUNDbDYwZE90THdlQ0tBRXdlNHAyT2VEU1pJSDFwUHArVkFoVHhTOGpyelNFanYxcGVuRkNLRElKR2FUR0tkd0RTais5UmNBK2xONmlseGc3cVZRYzhITklRREpwYU1Dbll4VHNJUURJcDQzZmRIV21xTWMwOERIQW9HTHR3UlNxT2FPT2dwK0JqSFNnQkJtbkFZNDlhVURIL3dCYW5VQUtvNlU2a0MrMVNBSDBvWUFCZ1pGT0FIU2dESFg5YWs2ZGFBUWdBelR3TWNDZ0RwVGxGSUFDNEZTRGcrdEoxcVFEakJQU20zM0JBb1BjMUlNMGdVZ2U1cCswazBCY01lbFA2REE3MG9GUEFBNTYwQUFIVEZTRDFwRkhPVFVuT2ZTZ0FDNDYxSmo4cVFMK1ZTRDBvQzRMeU9ha0NqcFNBVktCUUFBSHRUd004VUtPbFBVZHFkaHBDNHpVbmZCb0NnbnBVZ3dEa0NrSzRLdmJwVWdISHpVRElITlBBb0FGNllXcEZGQ3JrWUZTS0IxeFNBRkdPUjlLa1VIRkxnWndLY0FLb0VLQjM5Nmt4emlnTGpwVWdIYXBiQmdCem1wRlh0UUY3R3BBT2FCV0VBNXFVRHY2VWdIZXBCNjB4NkFPS2tDNU5DalArTlNBZFRSY1FZR0trQUo2L3BTQUhQTlNLb3oxb1F4VkhjVklGeHhpakhJeWFrVWQ2QVkwRDFxWUx4eFNiTWZqVDhHZ0JRT0treGprZEtBTVVvSHRRQTlRZWFjQU85SUJ6anBVZ0F6UUFBQUdwQU1mU2tDOGMxSjBvdUFvSFBIZWxBNXA0WGppamFNNW9RSUFLa3gyOUtRZE9sU0JjbjFwaFlVRUhrVTREUGZyUU1HbmdZUE5JR2hOdjUxSmpIV2t4azdlOU81eFJZTGdCVC9RQ2dDbjRHTVVYQS8vMVA0QXNEOEtPOUhRODBjZHFZdyt0SEJvSFRBbzVGQ0FCZysxSEdLTWNkYU8yRFFBRHBTZzloelNlOUwwUE5JQktNVVpCNW8vR25ZQmNacEtVNEo1b1BYTklBR0Izb1Bha3p4aWx4eG5wVEFPYzgwWXowcGFUMHpRQXZHZWVLYmp2NlVIcmtpbEg1Wm9zQVo5YVE0Tkx4MUZMejkwVUFKZ25nMHVTRGswVWdPZWNVZ1FvNTVOSWMvbFMrNU5KM3dhWUJ6aW5EaWxwUFkwQUdEMTlhQWMvTDNwVGdtbDc4MEFONHpTajFwQ0FmcFRnRDNvdU5CMTVGR1IxRkoyNXBjMFhFR0NlYWNCbjVxRGc5S1VqQjRvR0FGUEhQWGlrQXoxcHd6d2FHSzREMEZPQU5BQy9kRlAvU2dCdlduZ2RxVURuMXB3SEhOSFFBeCtOU0FmalNEMHA0NTZjMENHakFxUURubWtVY1ZJbzdVREVBOUtlcThacGNaNTZVL2JrbitWSUF4enhUOFo0eFNLQnR4VWdIZW1BQUVkYWVvT09UUU91VFR3Q2FBRUE1cVVLUHU0b0hYZCtGUHdXNmZsUXgzRTI1cVVEQnpRbzlPZ3A0M2RhR0pBRndEeDFxUlJrMGk0N2MwOExuaWdMQW83MUtCakdLUUwyRlNBSC9DZ0FVRFBGUEEvL1hUZ0NhZUFUUUNRRDg2ZUZ6ejYwQVlxUlIyb0N3YlJVZ0hyU0RCNlZLRkgwb1FBTVp6MnFUSGFnTGluZ2M4MEFLQnptcEZwQUIyN1ZMaWdCcWpzS21RWk9SU0FEOEtsQytsSUJBQjJxVVk3MEtPd3FRQUFVQ0FEUE9ha0hIdFNZeFVnd2FZd3g2MUlveHlSUUJuclVneDM0b0FVREk1cHlnWXlhVlJ4azA5Vi9TZ0FVRHZUMVg4NmNvSFUxSnhpbUFneVR4VWdIYzgwRE9jVThLS1EwQVU5UUtrRkFIcFVvQkZGeERRRHlUMnFSUWNVQUh2VHdNMEFBVTR4VHdPYVVaQTVwNEI2ZDZFRndVWUhOUDY4aWdEY09CVW1DT3RBQ0FBVTRESDRVb0hwVDl1T2xBZ3djNE5TQUR2U0RBNXB5NUhGQXhSZ1U0ZEtNWkdLY0JnNUZNQUdlbWFlS1VEamlsNHhuclNBQU1kS2RqT0tVQTlLY0JrWm9FZi8xZjRBK21lOUo3MGd6MXB3OURUQU9sSjN3S0Q2ZWxMbnB4UWtPNGRxQUIwTkppam1nQUJwYzVwT0tYUHArVkt3QngzcE1VbzlLQ2UxTVF2VGltL1FVcDU1NzAzMkZBeDNQR0tNOGNpanBSblA0VWdGeHhnMG1QZWpyMG9QcFRFSnhtbEFvQjlhQmc5YUJvRFJpam9jZHFLQkM4amlrNjBHbHhuanRRTzRkL2VsempwMXBlY2lrd1FlS0xBTGpqZDNwTVk1b0hIVG1nSG5GRmdGSDUwY2lrNkduZTRwZ0oyelFUbnAxcGNkcUIwNDU5NkdnRjVJeWFVQVlHZTlBcGV0S3dDL1NqQXpqcFRnQjNwUjF6UUF1TUhGS01aK3RCejBIUVU0Y1V3QUFEakhOUEE0b3dPb3AzSFdrSVhBSFdseDM2MEE0R1JVbU9RU2FCaWNkVFVnSFFta3g2MDhEUFR0UUEwTGlwTnVlUDBwUXZlbktwelFBcWdZOWFkUUY5cWNBVHhpbllCUjE2MDlRZndvVVZJdWV1S1NDd0FFY0g4NmVCbnRTQURIUE5TQURITklHS01kTVU4RFBGQ3FldFBBOWFkZ0FMemtqclVnOVR4UUJ1NmRLa0FKNjBBQ2c5alVpZ0Rta0dRTTFLb3pqMTlhR0FLQU9sUEM1b3dSVHdDZWFMZ0tBT01qbXBNZDZCeHlLZUZQVTBBQUI2MUlxOThVZ1VuZ1ZMampQNlVBR01pbnF0T0F4VHdEK0ZEQk1YR1JrVTRLRFNxQjNwNmoxRklBQzFJbzYwS0trQTdHbUlBRDNxUUE1K2xBSE5TQURvYVFBQlVnSHJTQUFWS0FlbE1ZcWpPTzFPeDNvQ2dlOVNCYy9OUUFvWHBtbnI2MG9Cenp4OUtmdDlPOUZnRlU0NUhhbmpwazBBWTRGU0JmYWdBSFhKcVRHQlFGNllwNEJBOXFFQUtweHhUd004VTRETlBVWTRvQUFPMmFmZytsR08xUHdDYUFBQThuclR3Q0tVS01jVTdhQ2FZQzlxZUJ6bitkSDArdFNZcENFQTdVOExnMEJhZVBXa01NSHJqNlU0REdEaWxDOFpwUU0vUVVBT3gwd2FVRDNwY1pwdzU5cVlBQjYwOEQxcEI2R245Y2U5QUFNWXpTaFEzMXBRTWRhZXZYbWk0SUFQV2xPZTlLTUNnRDlLQVAvOWIrQUlEME5HYzlhWEdLVEk2bWdiQUhKb3dUMHBmWTBZcGdKMDRwYzU0b0F3YVR0UUlYRkZISFkwY1p4UWdFNDdVb09CUmlrNmRLUXhjZzlPS0QwcENTS1hKQXdLWWhjNDcwaHoxb0ZIWG1nWUdqT09LQnhSamtkNkJBUHBTaklIQXBCNzBad2FFTUJ5YWRpazRPT2FPbzRvQUJnOFpvUHJTNDdacGNIcFFGaE8rVDlLTzJLV2s3VUQ4Z0dTS1VjbkZBcFNlY1k0cHRpc0lBUjEvQ2x6am1najI2MFo0cEFGTDBPUlNoY2RPbmFsQno5YUFBQWRhVmNua2ZqU2djODhVNGZTZ0xCeVR6eFQ5dkdhUlJ1RlB4elFBRG5rOXFlT3RJQUtVRFBOQUR2clRndEpqSXArQUtBWURpbmdVaXJ6VHdNMEFBQXFRQURpa1VISHRVbjBvc0FtRGlwTnVUaWtBeUtrVVk3MEI2aGc5Znlwd1gvR2pCN1ZJRkJvMkFUdmluakdjMG9Ydm5GT0h0U0JEZ0tkaWxXbnJrRDFwaUZVZWxQQUhXa0NjVktCd0tCaGpIRlNBVUt1YWVNOURRSUJqUEZTS094cE1DcEZCSi93QWFCZ296VW9CTklNOUFjMUlCaWhnQ2pIR0tsQXllYWFvOUtsQU9LQUVBOUtsQTcwQlQxcDQrbEFBQnhtcEFPYUJ4MnFWUU1VZ0VBeHptbmdldEtQU3BWWG1nTGliU1R6VWlyK2RLRkZQQTdDZ1Fpcm4rdFNLcDdVbzVQMXA2Z0RpbU1GSGNWS0FDZUtGQlBOT1ZlNHBnTC9PcEZCemdkNkF0U2dHbGNHSU1EbXBGSEcwMEl1T3RPQXg5YWJBZGdIbW5nQTBvNCtZZlNuWTVwQUtPbnRVZ0dhVURpbmhjYzlhQUVDanFLa0hIV2dManIxTlBBSVBTZ0EybnZVZ0g4V0tRYzV4K05TTHh3YUFBRFBTcEZIYm9CU0FlbFBDZy9ONjBBSW83MDlSK05MZ25yVGxIOElvdUFBYzFJQlFPRGpGUEM0NlVDRTdWSnN3TVVtTTlhZUFSOTZnQkZ4aW5xS01LZUtmUU93ZzQ2Q245c1VmV2xBRkFJTUFVNEFDZ0RvTzRwNUdSUUFuUWMwNGRhVEF4VHZlaEFmL1gvZ0RQVE5KMDYwdmFnSEp3YVl3NHBjWU5OeDZVSDFvQ3dlOUhVVXVSUWU1b1lDZGVlMUtmYmlpa29RQzlDTTBaUGFqSEhGSlFBWkJwZTFEWXpTRWM4VU1BUHRTKzlHRDBvSjlhQUV4VHVPbElUanFhUUhCb0N3NGRPbEhBTkdlS09wb0VncGNEcjYwZ3hnRTA3cnpRTVQ2MEFINlV2T2MwWjQ0b0FQd3pSajFwYzloU2RCelFBcW5KeC9LbEJHTVVuQUhGR0NDQlRZQ2dmalJqOUtVOCsxT0F4empOSUJBTVU0QW1qa2NHbisxQUlNRFAvd0JhbkQrZE5BN0Nuakk0cEFLTVVvSEZBcGNlOU1MRGdCMjRwdzYwQURITlArbEFBQnpUd1BhaFFCMXAyQWV2TkFBQXdGUEdLVURtbHhRRnhRQU9PdFB4azU5YVVBOWFlT2xBQUIyRlAyNTZHakhyVHdEM29BQXVlQlR6d1JTRDBxVmZhaGhZUUNwRlhybWdBMUlCbk5EQUFPNDZVNERCelNnRThIaW5qcm5ORndzS0Y1NXA0SE9EUUJ6bnJUd0RuMG9BUUE0eVJ4VW9YMHBRTWluZ1lHS0FCUlVnVThFZGFOdmVuZ2R4UUFLQ1JpcEF2WEZBR2VvcDZya2MwV0FWUWMwOEQwcHlybmdkUGVuZ2U5Tk1BQUlOUzQ0eFRRTVlxUURIU2hnS2k0T2FlT2VhVUxqZ1U4S0tRQW93ZWMxSUFjNG93Q2FsQzk2QkNBWTdWS0FBS1FBVkpnRGtVREZDMUlvSGFrSFhkVW9CeU1kcUxnQUZQQzU2MEJLa1ZhWUFGd09POVBBSFVVb0ZTQlRubWtBQWRoMnA0VWdab1g2Y1ZJQVJ3S0FBQ25nSDA2MHUzblBlbmhRZTlBTUZHT3ZhbmhjMG9VOStsUFVZNjBBQUdLZUFNWXBRT0tjQnh4UUFCYWVxNDYwQWVsU0tPUjJvUXdBeDFxUVo3VW1POVB4MkZBZ0E3ZnBUaHh5ZXRDak9NMDVmOW1nQndXbkJhVEdPRHlha1VHaG9CUFNuS0tYbW5LQm5GTUJPTVpxVEdlQjBwQnowTk9IRklBR2R0T3hpZ0RIRktDTWNjMEFLS2RTY2MwdkdNR2dBWG5yUzl6bWtCSjYwSHJtZ0QvL1EvZ0M2aWxHUlNFODlLWDJGTzQ3aUw3Y1V0SEJOR1FCU0JnZUQwbzQ3MFV1ZjhLYUVBNlpwdU92dFFNbW5FOC80MERBK2dwdmJJTktUUU1tZ0xnVCtGSWNVdEZJRUI5cUNNbkZBSk5BelRBUHJTbWdBZHFPTTBDREZCNjBEcFJqdDBGTkRGNjRwY0Q4YVRHUVIycFI3VWgyQWRlYVU4Y1VtVFNqbmp2UTBJT0FPYVRIR2FjQU9wcFBwUllHTGpqQjlLVVpDODBncHdIR0tCSVVldlNsQTR4UjJJcCtBYUVERUhxT3BwdzQ1NjBnNDZkS2VGUFQxcGpzSUFNNXArQWUvdlM5ZUtkakZJQUg2VXBHY1VvOUJUOFk3MERBZXBwd0dPYU9oeFVnSGJIU2dRZ0EvQ25nWkdSUmp2VDhjNDcwQWtLRngwNlU5UjJQRk5BRlNZSFFVQUFVZmhUd3RHT00wOGU5QWdBNTRxVlZHYWIwNkdwRjllOUF4VjU1cDZqdUtRRFAxcVFLQ2Vmem9BVUFnNHA2anZTcXZKeFRsWEhVVUFLQi9qVHdPZmVnWjZDbmhUamp0UUFvVTlCVHd2clFCeGowcVFDZ0FBd00xSUJ6UUJ4aW5yNjBBS0FSeFR3T21lb29BUFFWSUJrY1VEQURubXBGeDFQZWdDcEZGQWtMdDllYWR0SkdTT1RSakZTcW9IWG1tZ0VBTlM3Yzk2TVo1YXBGQjQ5cVRBQms0eHlha1hGQ2c5S2tBQU9hUUNDcEZYdUtVREdQU3BBTUhyUUFnSEFxUUw2MHFqSTVwNHoxUDVWUUNBWTR4bXBRQjI1cE52ZXBRTUQ2MGdCUU00RlNBYzBBVThBK2xBQ2dFSEFxVEF6bnZUZUNNRDhLa0NucFJZQlFvcVFDaGNEcDBwNFU5UFdnR0MwL2JnVWdIT0IwcVJSK2RBQ2daRlBYamdjMFlBRlB4UmNRcWtFVTdIRkxnazA4Y2NVREZBeFM4ZHVhQU9NR25qUFVVQUtCaW5qbjZVZ0dSbW5nY2ZXa0F2VGp2U2dlbEdNMUlBQ2NkYVlJUUE5YWNCbmdVREpIRlBBSjRvQkljQU9wN1VBVXZZNHBRRDBvQVVjakFwMkRUYWQwTk5nT0hOTDdHajJwZStSU0FRZ1V2ZklvSi9UdFFCM05BWEUrdjUwdnBTWTR6am1nRVlvQm4vOWs9XCJcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
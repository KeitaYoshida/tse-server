(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item_data~order~product_list~readfile"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L0Jhc2UudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlcldheS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tQ2hlY2tEaWFsb2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/Yjg2YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/OGFhNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT9mYTQ4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlP2QxMWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT9mNzI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/MzhjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/MGE0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT80ZDljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlP2ZhY2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT8wMjQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/Y2VmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/MDI3YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/ZGM3YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlPzZkMDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/MTY5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlP2U3MjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT80NDgwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1LnZ1ZT9mNmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/ZGIzNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUudnVlPzQ0ZDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L0Jhc2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT81NjMyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT85YTRmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT9kNWM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlclByaWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/MDhiZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/MGYwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlcldheS52dWU/NjhjMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlPzNjZjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/MjQ0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT84N2IzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlPzkyMDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/ODdjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjdC9JbWFnZVVwbG9hZC52dWU/ZTczOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlP2I5NzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWN0L2xpYi9JbWFnZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tQ2hlY2tEaWFsb2cudnVlP2UxODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT81OWVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21DaGVja0RpYWxvZy52dWU/NGZmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL0l0ZW1EYXRhLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvbG9hZGluZzY0LmpzIl0sIm5hbWVzIjpbImdldENvbXByZXNzSW1hZ2VGaWxlQXN5bmMiLCJmaWxlIiwib3B0aW9ucyIsIm1heFNpemVNQiIsIm1heFdpZHRoT3JIZWlnaHQiLCJpbWFnZUNvbXByZXNzaW9uIiwiY29uc29sZSIsImVycm9yIiwiZ2V0RGF0YVVybEZyb21GaWxlIiwiZGF0YSIsImkiLCJpdGVtX2RhdGEiLCJ2ZW5kb3IiLCJjcmVhdGVkIiwibWV0aG9kcyIsImdldF9pdGVtX2RhdGEiLCJheGlvcyIsImdldCIsIml0ZW1fY29kZSIsIml0ZW1fcmV2IiwidGhlbiIsInJlc3BvbnNlIiwiaWNvbiIsInRpdGxlIiwibmFtZSIsInZhbHVlIiwiaXRlbV9pZCIsImdldF9fY2hrIiwib3JkZXJfY29kZSIsIml0ZW1fbmFtZSIsIml0ZW1fbW9kZWwiLCJtYWtlcl9uYW1lIiwicmVhZF90aW1lIiwibGFzdF9udW0iLCJhcHBvX251bSIsImxvdF9udW0iLCJtaW5pbXVtX3NldCIsImdldF9fb3JkZXJ3YXkiLCJsb2NhdGlvbiIsImZvckVhY2giLCJvYiIsInB1c2giLCJlZGl0IiwidmVuZG5hbWUiLCJjb21fbmFtZSIsInZlbmRvcl9pdGVtX3ByaWNlIiwidmVuZG9yX2NvZGUiLCJvcmRlcl9hZGRfZGF0ZSIsImtha28iLCJsb2ciLCJvdXQiLCJhcnIiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwidiIsInNwbGljZSIsImdldF9zZXJpYWwiLCJzZWxlY3RlciIsImZpbHRlciIsImluY2x1ZGVzIiwibG9hZGluZzY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSw4REFEQTtBQUVBLHNFQUZBO0FBR0EseUVBSEE7QUFJQSwwRUFKQTtBQUtBO0FBTEEsR0FEQTtBQVFBLG9FQVJBO0FBU0E7QUFDQTtBQUNBO0FBREEsS0FEQTtBQUlBO0FBQ0E7QUFEQSxLQUpBO0FBT0E7QUFDQTtBQURBO0FBUEEsR0FUQTtBQW9CQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxZQUZBO0FBR0Esb0JBSEE7QUFJQSwwQkFKQTtBQUtBO0FBQ0EscUJBREE7QUFFQSxpQkFDQTtBQUhBO0FB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QkFDTjtBQUNMLFdBQU87QUFDTG9ELGVBQVMsRUFBRTtBQUROLEtBQVA7QUFHRDtBQUxZLENBQWYsRSIsImZpbGUiOiJpdGVtX2RhdGF+b3JkZXJ+cHJvZHVjdF9saXN0fnJlYWRmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHYtaWY9XCJpdGVtX2RhdGFcIj5cbiAgPHYtY2FyZCBpZD1cImhlbnNodVwiPlxuICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XCJoZWFkbGluZVwiPlxuICAgICAgPHYtY2hpcFxuICAgICAgICBvdXRsaW5lXG4gICAgICAgIHYtaWY9XCJpXCJcbiAgICAgICAgOmNsYXNzPVwiJ2NoaXAgJyArIGkuaXRlbV9jbGFzc192YWwuY3VzdG9tXCJcbiAgICAgID57eyBpLml0ZW1fY2xhc3NfdmFsLnZhbHVlIH19PC92LWNoaXA+XG4gICAgICA8c3BhbiBpZD1cIml0ZW1fY29kZVwiPnt7IGl0ZW1fY29kZSB9fTwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPVwiaXRlbV9yZXZcIiBjbGFzcz1cIm1pbmlcIj57eyBOdW1iZXIoaXRlbV9yZXYpLm51bVRvUmV2KCkgfX08L3NwYW4+XG4gICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZGVsXCI+XG4gICAgICAgIDx2LWJ0biBjb2xvcj1cImVycm9yXCIgb3V0bGluZSBAY2xpY2s9XCJkZWxfY2hlY2tfZmxnPSFkZWxfY2hlY2tfZmxnXCI+XG4gICAgICAgICAgPHYtaWNvbj5kZWxldGU8L3YtaWNvbj7liYrpmaRcbiAgICAgICAgPC92LWJ0bj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICA8di1idG4gY29sb3I9XCJlcnJvclwiIG91dGxpbmUgQGNsaWNrPVwiZGVsX2NoZWNrX2ZsZz0hZGVsX2NoZWNrX2ZsZ1wiIGRpc2FibGVkPlxuICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+5YmK6ZmkXG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgIDx2LWNvbnRhaW5lciBmbHVpZD5cbiAgICAgIDx2LXRhYnMgdi1tb2RlbD1cInRhYlwiIHNsaWRlci1jb2xvcj1cInByaW1hcnlcIiBmaXhlZC10YWJzIGNsYXNzPVwibWVudVwiPlxuICAgICAgICA8di10YWI+5Z+65pys5oOF5aCxPC92LXRhYj5cbiAgICAgICAgPHYtdGFiPuaJi+mFjeaWueazlTwvdi10YWI+XG4gICAgICAgIDx2LXRhYj7ph5HpoY08L3YtdGFiPlxuICAgICAgICA8di10YWI+55S75YOPPC92LXRhYj5cbiAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgPEJhc2UgOml0ZW1fZGF0YT1cIml0ZW1fZGF0YVwiIDppdGVtX2lkPVwiaXRlbV9pZFwiIHYtaWY9XCJpdGVtX2RhdGFcIiBAdXA9XCJ1cFwiIEBwYXNzPVwicGFzc1wiIC8+XG4gICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgPE9yZGVyV2F5IDpsb3RfZGF0YT1cImxvdF9kYXRhXCIgOml0ZW1faWQ9XCJpdGVtX2lkXCIgdi1pZj1cImxvdF9kYXRhXCIgQHBhc3M9XCJwYXNzXCIgLz5cbiAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICA8di10YWItaXRlbT5cbiAgICAgICAgICA8T3JkZXJQcmljZSA6aXRlbV9pZD1cIml0ZW1faWRcIiA6dmVuZG9yPVwidmVuZG9yXCIgQHBhc3M9XCJwYXNzXCI+PC9PcmRlclByaWNlPlxuICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgIDxJbWFnZVVwbG9hZCA6aXRlbV9jb2RlPVwiaXRlbV9jb2RlXCIgOml0ZW1fcmV2PVwiaXRlbV9yZXZcIiAvPlxuICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICA8L3YtdGFicz5cbiAgICA8L3YtY29udGFpbmVyPlxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGVsX2NoZWNrX2ZsZ1wiIHdpZHRoPVwiNTAlXCIgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCI+XG4gICAgICA8RGVsQ2hlY2sgOmRhdGE9XCJkZWxfY2hlY2tcIiBAcnQ9XCJkZWxfaXRlbSgpXCI+PC9EZWxDaGVjaz5cbiAgICA8L3YtZGlhbG9nPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSXRlbURhdGEgZnJvbSBcIi4vLi4vLi4vbWl4aW5zL0l0ZW1EYXRhXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9IZW5zaHUvQmFzZVwiO1xuaW1wb3J0IE9yZGVyV2F5IGZyb20gXCIuL0hlbnNodS9PcmRlcldheVwiO1xuaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gXCIuLy4uL2FjdC9JbWFnZVVwbG9hZFwiO1xuaW1wb3J0IE9yZGVyUHJpY2UgZnJvbSBcIi4vSGVuc2h1L09yZGVyUHJpY2VcIjtcbmltcG9ydCBEZWxDaGVjayBmcm9tIFwiLi8uLi9jb20vQ29tQ2hlY2tEaWFsb2dcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQmFzZSxcbiAgICBPcmRlcldheSxcbiAgICBJbWFnZVVwbG9hZCxcbiAgICBPcmRlclByaWNlLFxuICAgIERlbENoZWNrXG4gIH0sXG4gIG1peGluczogW0l0ZW1EYXRhXSxcbiAgcHJvcHM6IHtcbiAgICBpdGVtX2NvZGU6IHtcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIGl0ZW1fcmV2OiB7XG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBkZWw6IHtcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtX2lkOiBcIlwiLFxuICAgICAgdGFiOiAwLFxuICAgICAgbG90X2RhdGE6IG51bGwsXG4gICAgICBkZWxfY2hlY2tfZmxnOiBmYWxzZSxcbiAgICAgIGRlbF9jaGVjazoge1xuICAgICAgICB0aXRsZTogXCLpg6jmnZDliYrpmaRcIixcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIumDqOadkOODh+ODvOOCv+OBr+OAgeW9ouW8j+ODnuOCueOCv+OAgeaui+aVsOeuoeeQhuODh+ODvOOCv+WQq+OCgeOAgeWFqOOBpuWJiumZpOOBleOCjOOBvuOBmeOAgjxicj7liYrpmaTlvozjga7lj5bmtojjga/jgafjgY3jgb7jgZvjgpPjgII8YnI+5pys5b2T44Gr5YmK6Zmk44GX44G+44GZ44GL77yfXCJcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhd2FpdCB0aGlzLmdldF9pdGVtX2RhdGEoKTtcbiAgICB0aGlzLml0ZW1faWQgPSB0aGlzLmdldF9zZXJpYWwoKTtcbiAgICBjb25zdCBzZWxlY3RlciA9IFtcImxvdF9udW1cIiwgXCJtaW5pbXVtX3NldFwiXTtcbiAgICB0aGlzLmxvdF9kYXRhID0gdGhpcy5zZWxlY3RlcihzZWxlY3Rlcik7XG4gICAgY29uc3Qgb3V0ID0gW1xuICAgICAgXCJpdGVtX2lkXCIsXG4gICAgICBcIml0ZW1fY29kZVwiLFxuICAgICAgXCJpdGVtX3JldlwiLFxuICAgICAgXCJsYXN0X251bVwiLFxuICAgICAgXCJhcHBvX251bVwiLFxuICAgICAgXCJsb3RfbnVtXCIsXG4gICAgICBcIm1pbmltdW1fc2V0XCIsXG4gICAgICBcIm9yZGVyX3dheVwiLFxuICAgICAgXCJvcmRlcl9wcmljZXNcIlxuICAgIF07XG4gICAgdGhpcy5vdXQob3V0KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIHVwKG9iLCBpZCkge1xuICAgICAgbGV0IGQgPSB0aGlzLnJ0X191cF9kYXRhX2l0ZW1zKG9iLCBpZCk7XG4gICAgICBkZWxldGUgZC5vcmRlcl9wcmljZXM7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2l0ZW1zL3VwZGF0ZS9wb3N0L1wiICsgaWQsIGQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdChcInBhc3NcIiwgeyB0eXBlOiBcImJhc2VfZGF0YVwiLCBkYXRhOiBkIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwYXNzKGQpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJwYXNzXCIsIGQpO1xuICAgIH0sXG4gICAgZGVsX2l0ZW0oKSB7XG4gICAgICBheGlvcy5nZXQoXG4gICAgICAgIFwiL2RiL2l0ZW1zL2RlbGV0ZS9pdGVtL1wiICsgdGhpcy5pdGVtX2NvZGUgKyBcIi9cIiArIHRoaXMuaXRlbV9yZXZcbiAgICAgICk7XG4gICAgICBhbGVydChcIumDqOadkOODh+ODvOOCv+OCkuWJiumZpOOBl+OBvuOBl+OBn+OAguODiOODg+ODl+ODmuODvOOCuOOBuOaIu+OCiuOBvuOBmeOAglwiKTtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogXCIvXCIgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiID5cbiNoZW5zaHUge1xuICAjaW5mb19hcmVhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5lZGl0IHtcbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgfVxuICAuZWRpdC5kb3dibGUge1xuICAgIC52LWlucHV0IHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG4gIH1cbiAgLnYtY2FyZF9fdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIC52LWljb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xuICAgIH1cbiAgfVxuICAubWVudSB7XG4gICAgLnYtdGFic19fYmFyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG4gIH1cbiAgI2V0Yy1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgfVxuICAuc3VibWl0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4ubWluaSB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHYtZm9ybSB2LWlmPVwiaXRlbV9kYXRhXCIgY2xhc3M9XCJlZGl0XCIgaWQ9XCJpdGVtX2RhdGFcIiByZWY9XCJpdGVtX2RhdGFcIj5cbiAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgIDx2LWZsZXggeHM2IGNsYXNzPVwicHgtNFwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtX2RhdGFcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIDpuYW1lPVwiaXRlbS5uYW1lXCJcbiAgICAgICAgICA6cHJlcGVuZC1pbm5lci1pY29uPVwiaXRlbS5pY29uXCJcbiAgICAgICAgICA6bGFiZWw9XCJpdGVtLnRpdGxlXCJcbiAgICAgICAgICA6aWQ9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cIml0ZW0uZWRpdFwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgIHNtYWxsXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdi1sYXlvdXQ+XG4gICAgPHYtYnRuXG4gICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgZm9ybT1cIml0ZW1fZGF0YVwiXG4gICAgICBmbGF0XG4gICAgICBsYXJnZVxuICAgICAgYmxvY2tcbiAgICAgIG91dGxpbmVcbiAgICAgIGNsYXNzPVwic3VibWl0XCJcbiAgICAgIEBjbGljaz1cInN1Ym1pdCgpXCJcbiAgICA+e3sgc3VibWl0X3RleHQgfX08L3YtYnRuPlxuICA8L3YtZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJpdGVtX2RhdGFcIiwgXCJpdGVtX2lkXCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VibWl0X3RleHQ6IFwi44OH44O844K/5pu05pawXCJcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc3VibWl0KCkge1xuICAgICAgdGhpcy4kZW1pdChcInVwXCIsIHRoaXMuaXRlbV9kYXRhLCB0aGlzLml0ZW1faWQpO1xuICAgICAgdGhpcy5zdWJtaXRfdGV4dCA9IFwi5pu05paw5riI44G/XCI7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5lZGl0IHtcbiAgLnYtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXIgZ3JpZC1saXN0LXhzIGNsYXNzPVwiZWRpdCBkb3dibGVcIiB2LWlmPVwidmVuZF9saXN0XCI+XG4gICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGZsYXQgbGFyZ2UgYmxvY2sgb3V0bGluZSBAY2xpY2s9XCJhZGRcIj7ov73liqA8L3YtYnRuPlxuICAgIDx2LWxheW91dCByb3cgd3JhcCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdmVuZG9yXCIgOmtleT1cImluZGV4XCIgbXQtNSBtYi01PlxuICAgICAgPHYtZmxleCB4czM+XG4gICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgIDppdGVtcz1cInZlbmRfbGlzdFwiXG4gICAgICAgICAgaXRlbS10ZXh0PVwiY29tX25hbWVcIlxuICAgICAgICAgIGl0ZW0tdmFsdWU9XCJ2ZW5kb3JfY29kZVwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0udmVuZG9yX2NvZGVcIlxuICAgICAgICAgIGxhYmVsPVwi5Y+W5byV5YWI5ZCNXCJcbiAgICAgICAgICBwcmVwZW5kLWlubmVyLWljb249XCJmYXIgZmEtYnVpbGRpbmdcIlxuICAgICAgICA+PC92LXNlbGVjdD5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czM+XG4gICAgICAgIDx2LXRleHQtZmllbGQgdi1tb2RlbD1cIml0ZW0ua2Frb1wiIGxhYmVsPVwi5Yqg5bel5YaF5a65XCI+PC92LXRleHQtZmllbGQ+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMzIGNsYXNzPVwicGwtM1wiPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICBsYWJlbD1cIumHkemhjVwiXG4gICAgICAgICAgOmlkPVwiJ3ByaWNlXycgKyBpbmRleFwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0udmVuZG9yX2l0ZW1fcHJpY2VcIlxuICAgICAgICAgIHByZXBlbmQtaW5uZXItaWNvbj1cImZhcyBmYS1tb25leS1iaWxsLXdhdmVcIlxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMyIGNsYXNzPVwicGwtM1wiPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgbmFtZT1cImFkZF9kYXRlXCJcbiAgICAgICAgICBsYWJlbD1cIuiqv+aVtOaXpeaVsFwiXG4gICAgICAgICAgaGludD1cIuS4gOaLrOaJi+mFjeaZguOBq+WFpeWKm+WApOOBruWIhuOBruaXpeaVsOOCkuWKoOeul+OBl+OBvuOBmVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgOmlkPVwiJ2FkZF9kYXRlJyArIGluZGV4XCJcbiAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5vcmRlcl9hZGRfZGF0ZVwiXG4gICAgICAgICAgcHJlcGVuZC1pbm5lci1pY29uPVwiZmFzIGZhLW1vbmV5LWJpbGwtd2F2ZVwiXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czE+XG4gICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBmbGF0IGljb24gbGFyZ2UgQGNsaWNrPVwidmVuZG9yLnNwbGljZShpbmRleCwgMSlcIj5cbiAgICAgICAgICA8di1pY29uPmZhciBmYS10cmFzaC1hbHQ8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdi1sYXlvdXQ+XG4gICAgPHYtYnRuIGNvbG9yPVwic3VjY2Vzc1wiIGZsYXQgbGFyZ2UgYmxvY2sgb3V0bGluZSBAY2xpY2s9XCJzdWJtaXRcIj57eyBzdWJtaXRfdGV4dCB9fTwvdi1idG4+XG4gIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcIm1pbmltYXRjaFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiaXRlbV9pZFwiLCBcInZlbmRvclwiXSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHsgdmVuZF9saXN0OiBudWxsLCBzdWJtaXRfdGV4dDogXCLmsbrlrppcIiB9O1xuICB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnZlbmRvcik7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFwiL3ZlbmRvci9saXN0XCIpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMudmVuZF9saXN0ID0gcmVzLmRhdGE7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhZGQoKSB7XG4gICAgICB0aGlzLnZlbmRvci5wdXNoKHtcbiAgICAgICAgaXRlbV9pZDogdGhpcy5pdGVtX2lkLFxuICAgICAgICB2ZW5kb3JfY29kZTogXCJcIixcbiAgICAgICAgY29tX25hbWU6IFwiXCIsXG4gICAgICAgIHZlbmRvcl9pdGVtX3ByaWNlOiAwLFxuICAgICAgICBvcmRlcl9hZGRfZGF0ZTogMFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzdWJtaXQoKSB7XG4gICAgICBjb25zdCBkID0gdGhpcy52ZW5kb3IuZmlsdGVyKGFyID0+IGFyLnZlbmRvcl9jb2RlICE9PSBcIlwiKTtcbiAgICAgIGNvbnN0IGYgPSBkLm1hcChhciA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXRlbV9pZDogYXIuaXRlbV9pZCxcbiAgICAgICAgICB2ZW5kb3JfY29kZTogYXIudmVuZG9yX2NvZGUsXG4gICAgICAgICAgdmVuZG9yX2l0ZW1fcHJpY2U6IGFyLnZlbmRvcl9pdGVtX3ByaWNlLFxuICAgICAgICAgIG9yZGVyX2FkZF9kYXRlOiBhci5vcmRlcl9hZGRfZGF0ZSxcbiAgICAgICAgICBrYWtvOiBhci5rYWtvXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGF4aW9zLnBvc3QoXCIvdmVuZG9yLWl0ZW0vdXAvXCIgKyB0aGlzLml0ZW1faWQsIGYpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuc3VibWl0X3RleHQgPSBcIuabtOaWsOa4iOOBv1wiO1xuICAgICAgICB0aGlzLiRlbWl0KFwicGFzc1wiLCB7IHR5cGU6IFwib3JkZXJfcHJpY2VcIiwgZGF0YTogcmVzLmRhdGEgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDx2LWZvcm0gdi1pZj1cImxvdF9kYXRhXCIgaWQ9XCJsb3RcIiBjbGFzcz1cImVkaXRcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICA8di1yYWRpby1ncm91cCB2LW1vZGVsPVwicmVkaW9cIj5cbiAgICAgIDx2LXJhZGlvIHYtZm9yPVwiKGQsIG4pIGluIHJlZGlvVmFsdWVcIiA6a2V5PVwiblwiIDpsYWJlbD1cImRcIiA6dmFsdWU9XCJuXCIgdi1vbjpjaGFuZ2U9XCJjaGFuZ2VcIj48L3YtcmFkaW8+XG4gICAgPC92LXJhZGlvLWdyb3VwPlxuICAgIDx2LWV4cGFuZC14LXRyYW5zaXRpb24+XG4gICAgICA8ZGl2IHYtaWY9XCJyZWRpbz09PTFcIj5cbiAgICAgICAgPHYtdGV4dC1maWVsZCBuYW1lPVwibG90X251bVwiIGxhYmVsPVwi77ys77yv77y05omL6YWN5pWwXCIgaWQ9XCJsb3RfbnVtXCIgdi1tb2RlbD1cImxvdF9udW1cIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgPHYtdGV4dC1maWVsZCBuYW1lPVwibWluaW11bV9zZXRcIiBsYWJlbD1cIuacgOWwj+S/neaMgeaVsFwiIGlkPVwibWluaW11bV9zZXRcIiB2LW1vZGVsPVwibWluaW11bV9zZXRcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvdi1leHBhbmQteC10cmFuc2l0aW9uPlxuICAgIDx2LWJ0blxuICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgZm9ybT1cImxvdFwiXG4gICAgICBmbGF0XG4gICAgICBsYXJnZVxuICAgICAgYmxvY2tcbiAgICAgIG91dGxpbmVcbiAgICAgIGNsYXNzPVwic3VibWl0XCJcbiAgICA+e3sgc3VibWl0X3RleHQgfX08L3YtYnRuPlxuICA8L3YtZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJsb3RfZGF0YVwiLCBcIml0ZW1faWRcIl0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWRpb1ZhbHVlOiBbXCLpgJrluLjmiYvphY1cIiwgXCLvvKzvvK/vvLTmiYvphY1cIiwgXCLmlK/ntablk4FcIl0sXG4gICAgICByZWRpbzogMCxcbiAgICAgIGxvdF9udW06IDAsXG4gICAgICBtaW5pbXVtX3NldDogMCxcbiAgICAgIHN1Ym1pdF90ZXh0OiBcIuODh+ODvOOCv+abtOaWsFwiXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5sb3RfZGF0YS5mb3JFYWNoKGFyID0+IHtcbiAgICAgIGlmIChhci5uYW1lID09PSBcImxvdF9udW1cIikge1xuICAgICAgICB0aGlzLmxvdF9udW0gPSBhci52YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYXIubmFtZSA9PT0gXCJtaW5pbXVtX3NldFwiKSB7XG4gICAgICAgIHRoaXMubWluaW11bV9zZXQgPSBhci52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2l0Y2ggKHRoaXMubG90X251bSkge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgdGhpcy5yZWRpbyA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMjpcbiAgICAgICAgdGhpcy5yZWRpbyA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5yZWRpbyA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNoYW5nZShlKSB7XG4gICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHRoaXMubG90X251bSA9IC0xO1xuICAgICAgICAgIHRoaXMubWluaW11bV9zZXQgPSAtMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmICh0aGlzLmxvdF9udW0gPT09IC0xIHx8IHRoaXMubG90X251bSA9PT0gLTIpIHtcbiAgICAgICAgICAgIHRoaXMubG90X251bSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1pbmltdW1fc2V0ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLmxvdF9udW0gPSAtMjtcbiAgICAgICAgICB0aGlzLm1pbmltdW1fc2V0ID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzdWJtaXQoKSB7XG4gICAgICBjb25zdCBkID0ge1xuICAgICAgICBsb3RfbnVtOiB0aGlzLmxvdF9udW0sXG4gICAgICAgIG1pbmltdW1fc2V0OiB0aGlzLm1pbmltdW1fc2V0XG4gICAgICB9O1xuICAgICAgdGhpcy4kZW1pdChcInBhc3NcIiwgeyB0eXBlOiBcIm9yZGVyX3dheVwiLCBkYXRhOiBkIH0pO1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9pdGVtcy91cGRhdGUvcG9zdC9cIiArIHRoaXMuaXRlbV9pZCwgZCkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnN1Ym1pdF90ZXh0ID0gXCLmm7TmlrDmuIjjgb9cIjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPHYtbGF5b3V0IHJvdyB3cmFwIGlkPVwiaW1hZ2VzXCIgdi1pZj1cImltYWdlc1wiPlxuICAgIDx2LWZsZXggdi1mb3I9XCIoaW1hZ2UsIGluZGV4KSBpbiBpbWFnZXNcIiA6a2V5PVwiaW5kZXhcIiA6Y2xhc3M9XCJjb2xcIj5cbiAgICAgIDx2LWNhcmQgY2xhc3M9XCJzcXVhcmVcIiBAY2xpY2s9XCJ2aWV3KGltYWdlKVwiIGhvdmVyPlxuICAgICAgICA8di1pbWcgOnNyYz1cImltYWdlLmJhc2U2NFwiIGNsYXNzPVwiY29udGVudFwiIDpsYXp5LXNyYz1cImxvYWRpbmc2NFwiPjwvdi1pbWc+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZmxleD5cbiAgICA8dGVtcGxhdGUgdi1pZj1cImxlc19jbnQgPiAwICYmIGV0Y1wiPlxuICAgICAgPHYtZmxleCB2LWZvcj1cIihuLCBpbmRleCkgaW4gbGVzX2NudFwiIDprZXk9XCInbm8nICsgaW5kZXhcIiA6Y2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPHYtY2FyZCBjbGFzcz1cInNxdWFyZVwiIGRhcms+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8di1pY29uPmZhcyBmYS12aWRlby1zbGFzaDwvdi1pY29uPlxuICAgICAgICAgICAgPHNwYW4+bm8gaW1hZ2U8L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHYtZGlhbG9nXG4gICAgICB2LW1vZGVsPVwiYmlnX2ltZ1wiXG4gICAgICB0cmFuc2l0aW9uPVwiZGlhbG9nLXRyYW5zaXRpb25cIlxuICAgICAgZGFya1xuICAgICAgOndpZHRoPVwiYmlnX2ltZ193aWR0aFwiXG4gICAgICA6aGVpZ2h0PVwiYmlnX2ltZ19oZWlnaHRcIlxuICAgID5cbiAgICAgIDx2LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgIEZpbGVcbiAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgIDx2LWJ0biBmbGF0IGRhcmsgQGNsaWNrPVwiY2xvc2VcIj5cbiAgICAgICAgICA8di1pY29uIGxlZnQ+ZmFyIGZhLXRpbWVzLWNpcmNsZTwvdi1pY29uPlxuICAgICAgICAgIDxzcGFuPumWieOBmOOCizwvc3Bhbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtYnRuIGZsYXQgZGFyayBAY2xpY2s9XCJkZWxldGVJbWdcIj5cbiAgICAgICAgICA8di1pY29uIGxlZnQ+ZmFyIGZhLXRyYXNoLWFsdDwvdi1pY29uPlxuICAgICAgICAgIDxzcGFuPuWJiumZpDwvc3Bhbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPGltZyA6c3JjPVwiYmlnX2ltZ182NFwiPlxuICAgIDwvdi1kaWFsb2c+XG4gIDwvdi1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCJ2dWUtbXktcGhvdG9zXCI7XG5pbXBvcnQgbG9hZGluZzY0IGZyb20gXCIuLy4uLy4uL21peGlucy9sb2FkaW5nNjQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtsb2FkaW5nNjRdLFxuICBjb21wb25lbnRzOiB7XG4gICAgbGlnaHRib3g6IExpZ2h0Ym94XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgcGF0aDogU3RyaW5nLFxuICAgIGNvbDoge1xuICAgICAgZGVmYXVsdDogXCJ4czNcIlxuICAgIH0sXG4gICAgZXRjOiB7XG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW1nOiBcIlwiLFxuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIGxlc19jbnQ6IDAsXG4gICAgICBiaWdfaW1nOiBmYWxzZSxcbiAgICAgIGJpZ19pbWdfNjQ6IFwiXCIsXG4gICAgICBiaWdfaW1nX25hbWU6IFwiXCIsXG4gICAgICBiaWdfaW1nX3dpZHRoOiBcIlwiLFxuICAgICAgYmlnX2ltZ19oZWlnaHQ6IFwiXCJcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldF9maWxlX2xpc3QoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGdldF9maWxlX2xpc3QoKSB7XG4gICAgICBjb25zdCBnZXRfZGF0YSA9IHtcbiAgICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi91cGxvYWQvY2hlY2svaXRlbXNcIiwgZ2V0X2RhdGEpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKCFyZXMuZGF0YSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltYWdlcyA9IHJlcy5kYXRhO1xuICAgICAgICB0aGlzLmxlc19jbnQgPSA0IC0gdGhpcy5pbWFnZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGFyID0+IHtcbiAgICAgICAgICBsZXQgaSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIGkuc3JjID0gYXIuYmFzZTY0O1xuICAgICAgICAgIGkub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgYXIuaGVpZ2h0ID0gaS5oZWlnaHQ7XG4gICAgICAgICAgICBhci53aWR0aCA9IGkud2lkdGg7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXcoaW1nKSB7XG4gICAgICB0aGlzLmJpZ19pbWcgPSB0cnVlO1xuICAgICAgdGhpcy5iaWdfaW1nXzY0ID0gaW1nLmJhc2U2NDtcbiAgICAgIHRoaXMuYmlnX2ltZ19uYW1lID0gaW1nLnBhdGg7XG4gICAgICB0aGlzLmJpZ19pbWdfd2lkdGggPSBpbWcud2lkdGg7XG4gICAgICB0aGlzLmJpZ19pbWdfaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5iaWdfaW1nID0gZmFsc2U7XG4gICAgICB0aGlzLmJpZ19pbWdfNjQgPSBcIlwiO1xuICAgICAgdGhpcy5iaWdfaW1nX25hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5iaWdfaW1nX3dpZHRoID0gXCJcIjtcbiAgICAgIHRoaXMuYmlnX2ltZ19oZWlnaHQgPSBcIlwiO1xuICAgIH0sXG4gICAgZGVsZXRlSW1nKCkge1xuICAgICAgbGV0IGQgPSB7XG4gICAgICAgIHBhdGg6IHRoaXMuYmlnX2ltZ19uYW1lXG4gICAgICB9O1xuICAgICAgYXhpb3MucG9zdChcIi91cGxvYWQvZGVsZXRlL2l0ZW1zXCIsIGQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICB0aGlzLmltYWdlcyA9IHRoaXMuaW1hZ2VzLmZpbHRlcihhciA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFyLnBhdGggIT09IHRoaXMuYmlnX2ltZ19uYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiNpbWFnZXMge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgLmZsZXgge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgLnNxdWFyZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIOS4uFxuICAgICAgLy8gYm9yZGVyLXJhZGl1czogNDAlO1xuICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgLy8g44GT44GT44Gn6auY44GV5q+UXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIOODhuOCreOCueODiOOCkuS4reWkruOBq1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG48L3N0eWxlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiNpbWFnZXMge1xuICAudi1kaWFsb2cge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDx2LWNvbnRhaW5lcj5cbiAgICA8di1sYXlvdXQgdGV4dC14cy1jZW50ZXIgd3JhcCBjbGFzcz1cImVkaXRcIj5cbiAgICAgIDx2LWZsZXggeHMxMiBtYi0zPlxuICAgICAgICA8di1idG5cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cImlzVXBsb2FkaW5nXCJcbiAgICAgICAgICBAY2xpY2s9XCJzdWJtaXRcIlxuICAgICAgICAgIGlkPVwic3VibWl0XCJcbiAgICAgICAgPnt7IHN1Ym1pdF9tZXNzYWdlIH19PC92LWJ0bj5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czEyPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgbmFtZT1cInNlbGVjdF9pbWFnZVwiXG4gICAgICAgICAgbGFiZWw9XCLnlLvlg4/pgbjmip5cIlxuICAgICAgICAgIGlkPVwic2VsZWN0X2ltYWdlXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIEBjbGljaz1cInBpY2tGaWxlXCJcbiAgICAgICAgICB2LW1vZGVsPVwidXBpbWFnZS5maWxlTmFtZVwiXG4gICAgICAgICAgcHJlcGVuZC1pbm5lci1pY29uPVwiYXR0YWNoX2ZpbGVcIlxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICBuYW1lPVwiZmlsZV9wYXRoXCJcbiAgICAgICAgICBsYWJlbD1cIuS/neWtmOWFiFwiXG4gICAgICAgICAgaWQ9XCJzZXZlX2RpclwiXG4gICAgICAgICAgdi1tb2RlbD1cInVwaW1hZ2UuZmlsZVBhdGhcIlxuICAgICAgICAgIHByZXBlbmQtaW5uZXItaWNvbj1cImVkaXRcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cInBhdGhfZmxnXCJcbiAgICAgICAgICBoaW50PVwiL3B1YmxpYy9pbWcg44Gu5LiL44Gr5L+d5a2Y44GV44KM44G+44GZKC9zdG9yYWdlL2FwcC9wdWJsaWMvaW1nKVwiXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIG5hbWU9XCJmaWxlX25hbWVcIlxuICAgICAgICAgIGxhYmVsPVwi44OV44Kh44Kk44Or5ZCNXCJcbiAgICAgICAgICBpZD1cImZpbGVfbmFtZVwiXG4gICAgICAgICAgdi1tb2RlbD1cInVwaW1hZ2Uuc2V0TmFtZVwiXG4gICAgICAgICAgcHJlcGVuZC1pbm5lci1pY29uPVwiZmFzIGZhLXNhdmVcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cIm5hbWVfZmxnXCJcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBAY2hhbmdlPVwic2VsZWN0ZWRGaWxlXCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvanBlZywgaW1hZ2UvanBnLCBpbWFnZS9wbmdcIlxuICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTpub25lO1wiXG4gICAgICAgICAgcmVmPVwiaW1hZ2VcIlxuICAgICAgICA+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtaW1nIDpzcmM9XCJ1cGltYWdlLmZpbGVVcmxcIiBhc3BlY3QtcmF0aW89XCIyXCIgOmNvbnRhaW49XCJ0cnVlXCIgdi1pZj1cInVwaW1hZ2UuZmlsZVVybFwiPjwvdi1pbWc+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMiB2LWlmPVwiaXRlbV9jbGVhcl9mbGdcIj5cbiAgICAgICAgPEl0ZW1JbWcgOnBhdGg9XCJ1cGltYWdlLmZpbGVQYXRoXCIvPlxuICAgICAgPC92LWZsZXg+XG4gICAgPC92LWxheW91dD5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cInVwbWVzc2FnZVwiIG1heC13aWR0aD1cIjUwMHB4XCIgaGVpZ2h0PVwiMzAwcHg7XCIgQGlucHV0PVwiY2xvc2VcIj5cbiAgICAgIDx2LWNhcmQgcGEtMj5cbiAgICAgICAgPHYtYWxlcnQgdHlwZT1cImluZm9cIiA6dmFsdWU9XCJ0cnVlXCIgb3V0bGluZT5cbiAgICAgICAgICA8c3Bhbj7nlLvlg4/nmbvpjLLlh6bnkIbjgYzlrozkuobjgZfjgb7jgZfjgZ88L3NwYW4+XG4gICAgICAgIDwvdi1hbGVydD5cbiAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1kaWFsb2c+XG4gIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEltYWdlVXRpbCBmcm9tIFwiLi9saWIvSW1hZ2VVdGlsXCI7XG5pbXBvcnQgbG9hZGluZzY0IGZyb20gXCIuLy4uLy4uL21peGlucy9sb2FkaW5nNjQuanNcIjtcbmltcG9ydCBJdGVtSW1nIGZyb20gXCIuLy4uL0l0ZW1EYXRhL0l0ZW1JbWdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtsb2FkaW5nNjRdLFxuICBjb21wb25lbnRzOiB7IEl0ZW1JbWcgfSxcbiAgcHJvcHM6IFtcIml0ZW1fY29kZVwiLCBcIml0ZW1fcmV2XCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc1VwbG9hZGluZzogdHJ1ZSwgLy8g55S75YOP44OV44Kh44Kk44Or44Ki44OD44OX44Ot44O844OJ5Lit44Gu5Yik5pat44OV44Op44KwXG4gICAgICB1cGltYWdlOiB7XG4gICAgICAgIGZpbGVVcmw6IFwiXCIsXG4gICAgICAgIGZpbGVOYW1lOiBcIlwiLFxuICAgICAgICBibG9iOiBudWxsLFxuICAgICAgICBmaWxlUGF0aDogXCJcIixcbiAgICAgICAgc2V0TmFtZTogXCLml6Xku5jmmYLliLsg77yLIOODqeODs+ODgOODoOOBquiLseaVsOWApOOBjOODleOCoeOCpOODq+WQjeOBqOOBl+OBpueZu+mMsuOBleOCjOOBvuOBmVwiXG4gICAgICB9LCAvLyDnlLvlg4/jg5XjgqHjgqTjg6tcbiAgICAgIGZpbGVJbmZvOiB7XG4gICAgICAgIGJlZm9yZTogeyBzaXplOiAwIH0sXG4gICAgICAgIGFmdGVyOiB7IHNpemU6IDAgfVxuICAgICAgfSxcbiAgICAgIHVwbWVzc2FnZTogZmFsc2UsXG4gICAgICBzdWJtaXRfbWVzc2FnZTogXCLnmbvpjLJcIixcbiAgICAgIHBhdGhfZmxnOiBmYWxzZSxcbiAgICAgIG5hbWVfZmxnOiB0cnVlLFxuICAgICAgaXRlbV9jbGVhcl9mbGc6IHRydWVcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmdldERlZmF1bHRwYXRoKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBwaWNrRmlsZSgpIHtcbiAgICAgIHRoaXMuJHJlZnMuaW1hZ2UuY2xpY2soKTtcbiAgICB9LFxuICAgIGdldERlZmF1bHRwYXRoKCkge1xuICAgICAgaWYgKHRoaXMuaXRlbV9jb2RlICYmIHRoaXMuaXRlbV9yZXYpIHtcbiAgICAgICAgdGhpcy51cGltYWdlLmZpbGVQYXRoID1cbiAgICAgICAgICBcIi9pbWcvaXRlbXMvXCIgKyB0aGlzLml0ZW1fY29kZSArIFwiL1wiICsgdGhpcy5pdGVtX3JldiArIFwiL1wiO1xuICAgICAgICB0aGlzLnBhdGhfZmxnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgc2VsZWN0ZWRGaWxlKGUpIHtcbiAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyDlnKfnuK7jgZfjgZ/nlLvlg4/jgpLlj5blvpdcbiAgICAgICAgY29uc3QgY29tcEZpbGUgPSBhd2FpdCBJbWFnZVV0aWwuZ2V0Q29tcHJlc3NJbWFnZUZpbGVBc3luYyhmaWxlKTtcblxuICAgICAgICAvL+ODleOCoeOCpOODq+OCteOCpOOCuuOBruihqOekulxuICAgICAgICB0aGlzLmZpbGVJbmZvLmJlZm9yZS5zaXplID0gKGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0KS50b0ZpeGVkKDQpO1xuICAgICAgICB0aGlzLmZpbGVJbmZvLmFmdGVyLnNpemUgPSAoY29tcEZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0KS50b0ZpeGVkKDQpO1xuICAgICAgICAvLyDnlLvlg4/mg4XloLHjga7oqK3lrppcbiAgICAgICAgdGhpcy51cGltYWdlLmJsb2IgPSBjb21wRmlsZTtcbiAgICAgICAgdGhpcy51cGltYWdlLmZpbGVVcmwgPSBhd2FpdCBJbWFnZVV0aWwuZ2V0RGF0YVVybEZyb21GaWxlKGNvbXBGaWxlKTtcbiAgICAgICAgdGhpcy51cGltYWdlLmZpbGVOYW1lID0gZmlsZS5uYW1lO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIOOCqOODqeODvOODoeODg+OCu+ODvOOCuOetieOCkuihqOekulxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgdGhpcy5zdWJtaXRfbWVzc2FnZSA9IFwibG9hZGluZyAuLi5cIjtcbiAgICAgIHRoaXMuaXRlbV9jbGVhcl9mbGcgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGQgPSB7fTtcbiAgICAgICAgZC5iYXNlNjQgPSB0aGlzLnVwaW1hZ2UuZmlsZVVybDtcbiAgICAgICAgZC50eXBlID0gdGhpcy51cGltYWdlLmJsb2IudHlwZTtcbiAgICAgICAgZC5pdGVtX2NvZGUgPSB0aGlzLml0ZW1fY29kZTtcbiAgICAgICAgZC5pdGVtX3JldiA9IHRoaXMuaXRlbV9yZXY7XG4gICAgICAgIGQucGF0aCA9IFwiL2l0ZW1zL1wiO1xuICAgICAgICBheGlvcy5wb3N0KFwiL3VwbG9hZC9pdGVtcy9pbWFnZVwiLCBkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy51cG1lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3VibWl0X21lc3NhZ2UgPSBcImZpbmlzaCEhXCI7XG4gICAgICAgICAgdGhpcy5pdGVtX2NsZWFyX2ZsZyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMudXBpbWFnZS5maWxlVXJsID0gXCJcIjtcbiAgICAgIHRoaXMudXBpbWFnZS5maWxlTmFtZSA9IFwiXCI7XG4gICAgICB0aGlzLnVwaW1hZ2UuYmxvYiA9IG51bGw7XG4gICAgICB0aGlzLnN1Ym1pdF9tZXNzYWdlID0gXCLnmbvpjLJcIjtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHYtYWxlcnQgdHlwZT1cIndhcm5pbmdcIiA6dmFsdWU9XCJ0cnVlXCIgb3V0bGluZSBjbGFzcz1cImJhY2tcIj5cbiAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPGgxPnt7IGRhdGEudGl0bGUgfX08L2gxPlxuICAgICAgICA8cCB2LWh0bWw9XCJkYXRhLm1lc3NhZ2VcIiBjbGFzcz1cIm1lc3NhZ2VcIj48L3A+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMiBjbGFzcz1cImRlbC1pbmZvXCI+XG4gICAgICAgIDx2LWxheW91dCB3cmFwPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZGF0YS5kYXRhX3YyXCI+XG4gICAgICAgICAgICA8di1mbGV4IHhzNiBjbGFzcz1cIm1iLTJcIiA6a2V5PVwiJ3RpdGxlJyArIGluZGV4XCI+e3sgaXRlbVswXSB9fTwvdi1mbGV4PlxuICAgICAgICAgICAgPHYtZmxleCB4czYgY2xhc3M9XCJtYi0yXCIgOmtleT1cIidjb2x1bW4nICsgaW5kZXhcIj57eyBpdGVtWzFdIH19PC92LWZsZXg+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8di1mbGV4IHhzOCBvZmZzZXQteHMyIGNsYXNzPVwibXQtNFwiPlxuICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwid2FybmluZ1wiIGNsYXNzPVwic3VibWl0LWJ0blwiIG91dGxpbmUgQGNsaWNrPVwic3VibWl0KClcIj5PSzwvdi1idG4+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICA8L3YtYWxlcnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGl0bGU6IFwi44K/44Kk44OI44OrXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICAgIGRhdGFfdjI6IFtbXCJ0aXRsZVwiLCBcInZhbHVlXCJdXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJydFwiLCB0aGlzLmRhdGEsIHRydWUpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmRlbC1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN1Ym1pdC1idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjaGVuc2h1ICNpbmZvX2FyZWEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbiNoZW5zaHUgI2luZm9fYXJlYSBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogMzAlO1xcbn1cXG4jaGVuc2h1ICNpbmZvX2FyZWEgc3BhbiBzdHJvbmcge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4jaGVuc2h1IC5lZGl0IGJ1dHRvbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxufVxcbiNoZW5zaHUgLmVkaXQuZG93YmxlIC52LWlucHV0IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuI2hlbnNodSAudi1jYXJkX190aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG59XFxuI2hlbnNodSAudi1jYXJkX190aXRsZSAudi1pY29uIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXG59XFxuI2hlbnNodSAubWVudSAudi10YWJzX19iYXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG4jaGVuc2h1ICNldGMtYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2hlbnNodSAjZXRjLWJ1dHRvbiBpIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbiNoZW5zaHUgI2V0Yy1idXR0b24gYnV0dG9uIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbiNoZW5zaHUgLnN1Ym1pdCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5taW5pIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZWRpdCAudi1pY29uW2RhdGEtdi05ZmUyN2VlY10ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNpbWFnZXNbZGF0YS12LTI4MDhhMDQ5XSB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4jaW1hZ2VzIC5mbGV4W2RhdGEtdi0yODA4YTA0OV0ge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuI2ltYWdlcyAuZmxleCAuc3F1YXJlW2RhdGEtdi0yODA4YTA0OV0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNpbWFnZXMgLmZsZXggLnNxdWFyZVtkYXRhLXYtMjgwOGEwNDldOjphZnRlciB7XFxuICBwYWRkaW5nLXRvcDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbiNpbWFnZXMgLmZsZXggLnNxdWFyZSAuY29udGVudFtkYXRhLXYtMjgwOGEwNDldIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaW1hZ2VzIC5mbGV4IC5zcXVhcmUgLmNvbnRlbnRbZGF0YS12LTI4MDhhMDQ5XTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjaW1hZ2VzIC52LWRpYWxvZyB7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImgxW2RhdGEtdi02ZWMzZTVhOF0ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5iYWNrW2RhdGEtdi02ZWMzZTVhOF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmRlbC1pbmZvW2RhdGEtdi02ZWMzZTVhOF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3VibWl0LWJ0bltkYXRhLXYtNmVjM2U1YThdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtNmVjM2U1YThdIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbnNodS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZlMjdlZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZlMjdlZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlmZTI3ZWVjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjgwOGEwNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjgwOGEwNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI4MDhhMDQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZlYzNlNWE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZWMzZTVhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZlYzNlNWE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1jYXJkXCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJoZW5zaHVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmlcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNoaXBcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJjaGlwIFwiICsgX3ZtLmkuaXRlbV9jbGFzc192YWwuY3VzdG9tLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3V0bGluZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaS5pdGVtX2NsYXNzX3ZhbC52YWx1ZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiaXRlbV9jb2RlXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtX2NvZGUpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWluaVwiLCBhdHRyczogeyBpZDogXCJpdGVtX3JldlwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhOdW1iZXIoX3ZtLml0ZW1fcmV2KS5udW1Ub1JldigpKSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGVsXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZXJyb3JcIiwgb3V0bGluZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxfY2hlY2tfZmxnID0gIV92bS5kZWxfY2hlY2tfZmxnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKSwgX3ZtLl92KFwi5YmK6ZmkXFxuICAgICAgXCIpXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJlcnJvclwiLCBvdXRsaW5lOiBcIlwiLCBkaXNhYmxlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxfY2hlY2tfZmxnID0gIV92bS5kZWxfY2hlY2tfZmxnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJkZWxldGVcIildKSwgX3ZtLl92KFwi5YmK6ZmkXFxuICAgICAgXCIpXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRhYnNcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBcInNsaWRlci1jb2xvclwiOiBcInByaW1hcnlcIiwgXCJmaXhlZC10YWJzXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0udGFiID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10YWJcIiwgW192bS5fdihcIuWfuuacrOaDheWgsVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGFiXCIsIFtfdm0uX3YoXCLmiYvphY3mlrnms5VcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRhYlwiLCBbX3ZtLl92KFwi6YeR6aGNXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10YWJcIiwgW192bS5fdihcIueUu+WDj1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uaXRlbV9kYXRhXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJCYXNlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fZGF0YTogX3ZtLml0ZW1fZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9pZDogX3ZtLml0ZW1faWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB1cDogX3ZtLnVwLCBwYXNzOiBfdm0ucGFzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0ubG90X2RhdGFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIk9yZGVyV2F5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvdF9kYXRhOiBfdm0ubG90X2RhdGEsIGl0ZW1faWQ6IF92bS5pdGVtX2lkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBwYXNzOiBfdm0ucGFzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIk9yZGVyUHJpY2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtX2lkOiBfdm0uaXRlbV9pZCwgdmVuZG9yOiBfdm0udmVuZG9yIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHBhc3M6IF92bS5wYXNzIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10YWItaXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VVcGxvYWRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtX2NvZGU6IF92bS5pdGVtX2NvZGUsIGl0ZW1fcmV2OiBfdm0uaXRlbV9yZXYgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjUwJVwiLCB0cmFuc2l0aW9uOiBcImRpYWxvZy10cmFuc2l0aW9uXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kZWxfY2hlY2tfZmxnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGVsX2NoZWNrX2ZsZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVsX2NoZWNrX2ZsZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJEZWxDaGVja1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uZGVsX2NoZWNrIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBydDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxfaXRlbSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pdGVtX2RhdGFcbiAgICA/IF9jKFxuICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICB7IHJlZjogXCJpdGVtX2RhdGFcIiwgc3RhdGljQ2xhc3M6IFwiZWRpdFwiLCBhdHRyczogeyBpZDogXCJpdGVtX2RhdGFcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLml0ZW1fZGF0YSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJweC00XCIsIGF0dHJzOiB7IHhzNjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXRlbS5lZGl0LFxuICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBmb3JtOiBcIml0ZW1fZGF0YVwiLFxuICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc3VibWl0X3RleHQpKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0udmVuZF9saXN0XG4gICAgPyBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVkaXQgZG93YmxlXCIsIGF0dHJzOiB7IFwiZ3JpZC1saXN0LXhzXCI6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIui/veWKoFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS52ZW5kb3IsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiLCBcIm10LTVcIjogXCJcIiwgXCJtYi01XCI6IFwiXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS52ZW5kX2xpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcImNvbV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdmFsdWVcIjogXCJ2ZW5kb3JfY29kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5Y+W5byV5YWI5ZCNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBcImZhciBmYS1idWlsZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmVuZG9yX2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwidmVuZG9yX2NvZGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS52ZW5kb3JfY29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czM6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi5Yqg5bel5YaF5a65XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ua2FrbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJrYWtvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ua2Frb1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwbC0zXCIsIGF0dHJzOiB7IHhzMzogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi6YeR6aGNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJwcmljZV9cIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWlubmVyLWljb25cIjogXCJmYXMgZmEtbW9uZXktYmlsbC13YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52ZW5kb3JfaXRlbV9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJ2ZW5kb3JfaXRlbV9wcmljZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnZlbmRvcl9pdGVtX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBsLTNcIiwgYXR0cnM6IHsgeHMyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFkZF9kYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLoqr/mlbTml6XmlbBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwi5LiA5ous5omL6YWN5pmC44Gr5YWl5Yqb5YCk44Gu5YiG44Gu5pel5pWw44KS5Yqg566X44GX44G+44GZXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYWRkX2RhdGVcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWlubmVyLWljb25cIjogXCJmYXMgZmEtbW9uZXktYmlsbC13YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5vcmRlcl9hZGRfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJvcmRlcl9hZGRfZGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLm9yZGVyX2FkZF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmVuZG9yLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYXIgZmEtdHJhc2gtYWx0XCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5zdWJtaXRfdGV4dCkpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5sb3RfZGF0YVxuICAgID8gX2MoXG4gICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZGl0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibG90XCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWRpbyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ucmVkaW8gPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVkaW9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5yZWRpb1ZhbHVlLCBmdW5jdGlvbihkLCBuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInYtcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgIGtleTogbixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogZCwgdmFsdWU6IG4gfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5jaGFuZ2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi1leHBhbmQteC10cmFuc2l0aW9uXCIsIFtcbiAgICAgICAgICAgIF92bS5yZWRpbyA9PT0gMVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxvdF9udW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIu+8rO+8r++8tOaJi+mFjeaVsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibG90X251bVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb3RfbnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG90X251bSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG90X251bVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1pbmltdW1fc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmnIDlsI/kv53mjIHmlbBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1pbmltdW1fc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1pbmltdW1fc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWluaW11bV9zZXQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1pbmltdW1fc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgIGZvcm06IFwibG90XCIsXG4gICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc3VibWl0X3RleHQpKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaW1hZ2VzXG4gICAgPyBfYyhcbiAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiwgaWQ6IFwiaW1hZ2VzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5pbWFnZXMsIGZ1bmN0aW9uKGltYWdlLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIGNsYXNzOiBfdm0uY29sIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNxdWFyZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBob3ZlcjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlldyhpbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGltYWdlLmJhc2U2NCwgXCJsYXp5LXNyY1wiOiBfdm0ubG9hZGluZzY0IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubGVzX2NudCA+IDAgJiYgX3ZtLmV0Y1xuICAgICAgICAgICAgPyBfdm0uX2woX3ZtLmxlc19jbnQsIGZ1bmN0aW9uKG4sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBcIm5vXCIgKyBpbmRleCwgY2xhc3M6IF92bS5jb2wgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNxdWFyZVwiLCBhdHRyczogeyBkYXJrOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFzIGZhLXZpZGVvLXNsYXNoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIm5vIGltYWdlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJkaWFsb2ctdHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgIGRhcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5iaWdfaW1nX3dpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLmJpZ19pbWdfaGVpZ2h0XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5iaWdfaW1nLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5iaWdfaW1nID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJpZ19pbWdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtdG9vbGJhclwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBGaWxlXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGRhcms6IFwiXCIgfSwgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGxlZnQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJmYXIgZmEtdGltZXMtY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIumWieOBmOOCi1wiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGRhcms6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmRlbGV0ZUltZyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGxlZnQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJmYXIgZmEtdHJhc2gtYWx0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWJiumZpFwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5iaWdfaW1nXzY0IH0gfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZWRpdFwiLCBhdHRyczogeyBcInRleHQteHMtY2VudGVyXCI6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiLCBcIm1iLTNcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uaXNVcGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnN1Ym1pdF9tZXNzYWdlKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZWxlY3RfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIueUu+WDj+mBuOaKnlwiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwic2VsZWN0X2ltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBcImF0dGFjaF9maWxlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucGlja0ZpbGUgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51cGltYWdlLmZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXBpbWFnZSwgXCJmaWxlTmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1cGltYWdlLmZpbGVOYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZV9wYXRoXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLkv53lrZjlhYhcIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcInNldmVfZGlyXCIsXG4gICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBcImVkaXRcIixcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ucGF0aF9mbGcsXG4gICAgICAgICAgICAgICAgICBoaW50OlxuICAgICAgICAgICAgICAgICAgICBcIi9wdWJsaWMvaW1nIOOBruS4i+OBq+S/neWtmOOBleOCjOOBvuOBmSgvc3RvcmFnZS9hcHAvcHVibGljL2ltZylcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXBpbWFnZS5maWxlUGF0aCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVwaW1hZ2UsIFwiZmlsZVBhdGhcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXBpbWFnZS5maWxlUGF0aFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImZpbGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi44OV44Kh44Kk44Or5ZCNXCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJmaWxlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pbm5lci1pY29uXCI6IFwiZmFzIGZhLXNhdmVcIixcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ubmFtZV9mbGdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVwaW1hZ2Uuc2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVwaW1hZ2UsIFwic2V0TmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1cGltYWdlLnNldE5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgYWNjZXB0OiBcImltYWdlL2pwZWcsIGltYWdlL2pwZywgaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnNlbGVjdGVkRmlsZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0udXBpbWFnZS5maWxlVXJsXG4gICAgICAgICAgICAgICAgPyBfYyhcInYtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS51cGltYWdlLmZpbGVVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhc3BlY3QtcmF0aW9cIjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5pdGVtX2NsZWFyX2ZsZ1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW19jKFwiSXRlbUltZ1wiLCB7IGF0dHJzOiB7IHBhdGg6IF92bS51cGltYWdlLmZpbGVQYXRoIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjUwMHB4XCIsIGhlaWdodDogXCIzMDBweDtcIiB9LFxuICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0uY2xvc2UgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS51cG1lc3NhZ2UsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS51cG1lc3NhZ2UgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInVwbWVzc2FnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBcInBhLTJcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1hbGVydFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJpbmZvXCIsIHZhbHVlOiB0cnVlLCBvdXRsaW5lOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnlLvlg4/nmbvpjLLlh6bnkIbjgYzlrozkuobjgZfjgb7jgZfjgZ9cIildKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFsZXJ0XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYmFja1wiLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJ3YXJuaW5nXCIsIHZhbHVlOiB0cnVlLCBvdXRsaW5lOiBcIlwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtZmxleFwiLCB7IGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnRpdGxlKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5kYXRhLm1lc3NhZ2UpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRlbC1pbmZvXCIsIGF0dHJzOiB7IHhzMTI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGEuZGF0YV92MiwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0aXRsZVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHM2OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtWzBdKSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNvbHVtblwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgeHM2OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtWzFdKSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czg6IFwiXCIsIFwib2Zmc2V0LXhzMlwiOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJtaXQtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcIndhcm5pbmdcIiwgb3V0bGluZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT0tcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hlbnNodS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM3M2Y1MDYmdi1pZj1pdGVtX2RhdGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNoaXAgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZEaWFsb2cgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFiIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFiSXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRhYnMgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCdG4sVkNhcmQsVkNhcmRUaXRsZSxWQ2hpcCxWQ29udGFpbmVyLFZEaWFsb2csVkljb24sVlNwYWNlcixWVGFiLFZUYWJJdGVtLFZUYWJzfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMzczZjUwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMzczZjUwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVuc2h1LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzczZjUwNiZ2LWlmPWl0ZW1fZGF0YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMzczZjUwNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbnNodS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzczZjUwNiZ2LWlmPWl0ZW1fZGF0YSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQmFzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWZlMjdlZWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZlMjdlZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5ZmUyN2VlY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRm9ybSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWRmxleCxWRm9ybSxWTGF5b3V0LFZUZXh0RmllbGR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzlmZTI3ZWVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzlmZTI3ZWVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CYXNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZmUyN2VlYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZmUyN2VlYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L0Jhc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmUyN2VlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmUyN2VlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWZlMjdlZWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09yZGVyUHJpY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1OGQ2Mjk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09yZGVyUHJpY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU2VsZWN0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQnRuLFZDb250YWluZXIsVkZsZXgsVkljb24sVkxheW91dCxWU2VsZWN0LFZUZXh0RmllbGR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1OGQ2Mjk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1OGQ2Mjk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNThkNjI5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNThkNjI5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L09yZGVyUHJpY2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNThkNjI5NCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3JkZXJXYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNmYTUyYzBjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3JkZXJXYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRXhwYW5kWFRyYW5zaXRpb24gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGb3JtIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWUmFkaW8gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZSYWRpb0dyb3VwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQnRuLFZFeHBhbmRYVHJhbnNpdGlvbixWRm9ybSxWUmFkaW8sVlJhZGlvR3JvdXAsVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2ZhNTJjMGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2ZhNTJjMGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZmE1MmMwYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjZmE1MmMwYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L09yZGVyV2F5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJXYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlcldheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2ZhNTJjMGMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4MDhhMDQ5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI4MDhhMDQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjgwOGEwNDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVG9vbGJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWQ2FyZCxWRGlhbG9nLFZGbGV4LFZJY29uLFZJbWcsVkxheW91dCxWU3BhY2VyLFZUb29sYmFyfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyODA4YTA0OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyODA4YTA0OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSXRlbUltZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjgwOGEwNDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjgwOGEwNDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODA4YTA0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODA4YTA0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4MDhhMDQ5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbWFnZVVwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTFhZTdiYjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW1hZ2VVcGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbWFnZVVwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjkxYWU3YmI4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFsZXJ0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJbWcgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBbGVydCxWQnRuLFZDYXJkLFZDb250YWluZXIsVkRpYWxvZyxWRmxleCxWSW1nLFZMYXlvdXQsVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTFhZTdiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTFhZTdiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ltYWdlVXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MWFlN2JiOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MWFlN2JiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWN0L0ltYWdlVXBsb2FkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VVcGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZVVwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTFhZTdiYjgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgaW1hZ2VDb21wcmVzc2lvbiBmcm9tIFwiYnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIOOCouODg+ODl+ODreODvOODieOBleOCjOOBn+eUu+WDj+ODleOCoeOCpOODq+OCkuWPluW+l1xuICBhc3luYyBnZXRDb21wcmVzc0ltYWdlRmlsZUFzeW5jKGZpbGUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWF4U2l6ZU1COiAyLCAvLyDmnIDlpKfjg5XjgqHjgqTjg6vjgrXjgqTjgrpcbiAgICAgIG1heFdpZHRoT3JIZWlnaHQ6IDEyMDAgLy8g5pyA5aSn55S75YOP5bmF44KC44GX44GP44Gv6auY44GVXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgLy8g5Zyn57iu55S75YOP44Gu55Sf5oiQXG4gICAgICByZXR1cm4gYXdhaXQgaW1hZ2VDb21wcmVzc2lvbihmaWxlLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcImdldENvbXByZXNzSW1hZ2VGaWxlQXN5bmMgaXMgZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9LFxuICAvLyDjg5fjg6zjg5Pjg6Xjg7zooajnpLrnlKjjga5kYXRhdXJs44KS5Y+W5b6XXG4gIGFzeW5jIGdldERhdGFVcmxGcm9tRmlsZShmaWxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBpbWFnZUNvbXByZXNzaW9uLmdldERhdGFVcmxGcm9tRmlsZShmaWxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcImdldERhdGFVcmxGcm9tRmlsZSBpcyBlcnJvclwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmVjM2U1YTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmVjM2U1YTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2ZWMzZTVhOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBbGVydCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBbGVydCxWQnRuLFZGbGV4LFZMYXlvdXR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZlYzNlNWE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZlYzNlNWE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmVjM2U1YTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmVjM2U1YTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21DaGVja0RpYWxvZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZlYzNlNWE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZWMzZTVhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlYzNlNWE4JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpOiBudWxsLFxuICAgICAgaXRlbV9kYXRhOiBudWxsLFxuICAgICAgdmVuZG9yOiBbXVxuICAgIH07XG4gIH0sXG4gIGFzeW5jIGNyZWF0ZWQoKSB7IH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRfaXRlbV9kYXRhKCkge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldCgnL2l0ZW1zL2l0ZW1pbmZvLycgKyB0aGlzLml0ZW1fY29kZSArICcvJyArIHRoaXMuaXRlbV9yZXYpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLmkgPSByZXNwb25zZS5kYXRhWzBdO1xuICAgICAgICAgIHRoaXMuaXRlbV9kYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWJhcmNvZGUnLFxuICAgICAgICAgICAgICB0aXRsZTogJ+mDqOadkOOCt+ODquOCouODqycsXG4gICAgICAgICAgICAgIG5hbWU6ICdpdGVtX2lkJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0uaXRlbV9pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1pbmZvJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICflk4Hnm67jgrPjg7zjg4knLFxuICAgICAgICAgICAgICBuYW1lOiAnaXRlbV9jb2RlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0uaXRlbV9jb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWFycm93LWFsdC1jaXJjbGUtdXAnLFxuICAgICAgICAgICAgICB0aXRsZTogJ1JldicsXG4gICAgICAgICAgICAgIG5hbWU6ICdpdGVtX3JldicsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fY2hrKHJlc3BvbnNlLmRhdGFbMF0uaXRlbV9yZXYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWluZm8nLFxuICAgICAgICAgICAgICB0aXRsZTogJ+aJi+mFjeOCs+ODvOODiScsXG4gICAgICAgICAgICAgIG5hbWU6ICdvcmRlcl9jb2RlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0ub3JkZXJfY29kZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1pZC1iYWRnZScsXG4gICAgICAgICAgICAgIHRpdGxlOiAn5ZOB5ZCNJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2l0ZW1fbmFtZScsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLml0ZW1fbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1pZC1jYXJkJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICflk4Hnm67lvaLlvI8nLFxuICAgICAgICAgICAgICBuYW1lOiAnaXRlbV9tb2RlbCcsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLml0ZW1fbW9kZWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICdmYXMgZmEtbWFwLW1hcmtlZCcsXG4gICAgICAgICAgICAgIHRpdGxlOiAn6KO96YCg5YWDJyxcbiAgICAgICAgICAgICAgbmFtZTogJ21ha2VyX25hbWUnLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5tYWtlcl9uYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWFycm93cy1hbHQtaCcsXG4gICAgICAgICAgICAgIHRpdGxlOiAnUlQnLFxuICAgICAgICAgICAgICBuYW1lOiAncmVhZF90aW1lJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0X19jaGsocmVzcG9uc2UuZGF0YVswXS5yZWFkX3RpbWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWNhbGN1bGF0b3InLFxuICAgICAgICAgICAgICB0aXRsZTogJ+WcqOW6q+aVsCcsXG4gICAgICAgICAgICAgIG5hbWU6ICdsYXN0X251bScsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fY2hrKHJlc3BvbnNlLmRhdGFbMF0ubGFzdF9udW0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLWNhbGN1bGF0b3InLFxuICAgICAgICAgICAgICB0aXRsZTogJ+S9v+eUqOS6iOe0hOaVsCcsXG4gICAgICAgICAgICAgIG5hbWU6ICdhcHBvX251bScsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fY2hrKHJlc3BvbnNlLmRhdGFbMF0uYXBwb19udW0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLW1hcC1zaWducycsXG4gICAgICAgICAgICAgIHRpdGxlOiAn77ys77yv77y05omL6YWN5pWwJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2xvdF9udW0nLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5sb3RfbnVtXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLW1hcC1zaWducycsXG4gICAgICAgICAgICAgIHRpdGxlOiAn5pyA5bCP5L+d5oyB5pWwJyxcbiAgICAgICAgICAgICAgbmFtZTogJ21pbmltdW1fc2V0JyxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0ubWluaW11bV9zZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246ICdmYXMgZmEtbWFwLXNpZ25zJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfmiYvphY3mlrnms5UnLFxuICAgICAgICAgICAgICBuYW1lOiAnb3JkZXJfd2F5JyxcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0X19vcmRlcndheShcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhWzBdLmxvdF9udW0sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVswXS5taW5pbXVtX3NldFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiAnZmFzIGZhLW1hcC1tYXJrZXItYWx0JyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfkv53nrqHloLTmiYAnLFxuICAgICAgICAgICAgICBuYW1lOiAnbG9jYXRpb24nLFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRfX2NoayhyZXNwb25zZS5kYXRhWzBdLmxvY2F0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF07XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbMF0udmVuZG9yKSB7XG4gICAgICAgICAgICByZXNwb25zZS5kYXRhWzBdLnZlbmRvci5mb3JFYWNoKG9iID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pdGVtX2RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhcyBmYS1tb25leS1iaWxsLXdhdmUnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5omL6YWN6YeR6aGNJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3JkZXJfcHJpY2VzJyxcbiAgICAgICAgICAgICAgICBlZGl0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgJ1snICtcbiAgICAgICAgICAgICAgICAgIG9iLnZlbmRuYW1lLmNvbV9uYW1lICtcbiAgICAgICAgICAgICAgICAgICddICcgK1xuICAgICAgICAgICAgICAgICAgb2IudmVuZG9yX2l0ZW1fcHJpY2UgK1xuICAgICAgICAgICAgICAgICAgJyDCpSdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMudmVuZG9yLnB1c2goe1xuICAgICAgICAgICAgICAgIGl0ZW1faWQ6IG9iLml0ZW1faWQsXG4gICAgICAgICAgICAgICAgdmVuZG9yX2NvZGU6IG9iLnZlbmRvcl9jb2RlLFxuICAgICAgICAgICAgICAgIGNvbV9uYW1lOiBvYi52ZW5kbmFtZS5jb21fbmFtZSxcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaXRlbV9wcmljZTogb2IudmVuZG9yX2l0ZW1fcHJpY2UsXG4gICAgICAgICAgICAgICAgb3JkZXJfYWRkX2RhdGU6IG9iLm9yZGVyX2FkZF9kYXRlLFxuICAgICAgICAgICAgICAgIGtha286IG9iLmtha29cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIDogJyArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvdXQoYXJyKSB7XG4gICAgICBhcnIuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtX2RhdGEuZmluZEluZGV4KHYgPT4gdi5uYW1lID09PSBpZCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLml0ZW1fZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldF9zZXJpYWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtX2RhdGFbXG4gICAgICAgIHRoaXMuaXRlbV9kYXRhLmZpbmRJbmRleCh2ID0+IHYubmFtZSA9PT0gJ2l0ZW1faWQnKVxuICAgICAgXS52YWx1ZTtcbiAgICB9LFxuICAgIHNlbGVjdGVyKGFycikge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbV9kYXRhLmZpbHRlcih2ID0+IGFyci5pbmNsdWRlcyh2Lm5hbWUpKTtcbiAgICB9XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc2NDogXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBU0FCSUFBRC80UURLUlhocFpnQUFUVTBBS2dBQUFBZ0FCd0VTQUFNQUFBQUJBQUVBQUFFYUFBVUFBQUFCQUFBQVlnRWJBQVVBQUFBQkFBQUFhZ0VvQUFNQUFBQUJBQUlBQUFFeEFBSUFBQUFSQUFBQWNnRXlBQUlBQUFBVUFBQUFoSWRwQUFRQUFBQUJBQUFBbUFBQUFBQUFBQUJJQUFBQUFRQUFBRWdBQUFBQlVHbDRaV3h0WVhSdmNpQXpMamd1TkFBQU1qQXhPVG93TmpveE5DQXhNRG93TmpvNU9BQUFBNkFCQUFNQUFBQUJBQUVBQUtBQ0FBUUFBQUFCQUFBRElLQURBQVFBQUFBQkFBQURJQUFBQUFELzRRbVNhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMd0E4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QaUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pZVFZBZ1EyOXlaU0ExTGpRdU1DSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMeUlnZUcxd09rTnlaV0YwYjNKVWIyOXNQU0pRYVhobGJHMWhkRzl5SURNdU9DNDBJaUI0YlhBNlRXOWthV1o1UkdGMFpUMGlNakF4T1Mwd05pMHhORlF4TURvd05qbzVPQ0l2UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5jaVB6NEEvKzBBT0ZCb2IzUnZjMmh2Y0NBekxqQUFPRUpKVFFRRUFBQUFBQUFBT0VKSlRRUWxBQUFBQUFBUTFCMk0yWThBc2dUcGdBbVk3UGhDZnYvQUFCRUlBeUFESUFNQklnQUNFUUVERVFIL3hBQWZBQUFCQlFFQkFRRUJBUUFBQUFBQUFBQUFBUUlEQkFVR0J3Z0pDZ3YveEFDMUVBQUNBUU1EQWdRREJRVUVCQUFBQVgwQkFnTUFCQkVGRWlFeFFRWVRVV0VISW5FVU1vR1JvUWdqUXJIQkZWTFI4Q1F6WW5LQ0NRb1dGeGdaR2lVbUp5Z3BLalExTmpjNE9UcERSRVZHUjBoSlNsTlVWVlpYV0ZsYVkyUmxabWRvYVdwemRIVjJkM2g1ZW9PRWhZYUhpSW1La3BPVWxaYVhtSm1hb3FPa3BhYW5xS21xc3JPMHRiYTN1TG02d3NQRXhjYkh5TW5LMHRQVTFkYlgyTm5hNGVMajVPWG01K2pwNnZIeTgvVDE5dmY0K2ZyL3hBQWZBUUFEQVFFQkFRRUJBUUVCQUFBQUFBQUFBUUlEQkFVR0J3Z0pDZ3YveEFDMUVRQUNBUUlFQkFNRUJ3VUVCQUFCQW5jQUFRSURFUVFGSVRFR0VrRlJCMkZ4RXlJeWdRZ1VRcEdoc2NFSkl6TlM4QlZpY3RFS0ZpUTA0U1h4RnhnWkdpWW5LQ2txTlRZM09EazZRMFJGUmtkSVNVcFRWRlZXVjFoWldtTmtaV1puYUdscWMzUjFkbmQ0ZVhxQ2c0U0Zob2VJaVlxU2s1U1ZscGVZbVpxaW82U2xwcWVvcWFxeXM3UzF0cmU0dWJyQ3c4VEZ4c2ZJeWNyUzA5VFYxdGZZMmRyaTQrVGw1dWZvNmVyeTgvVDE5dmY0K2ZyLzJ3QkRBQUVCQVFFQkFRSUJBUUlEQWdJQ0F3UURBd01EQkFVRUJBUUVCQVVHQlFVRkJRVUZCZ1lHQmdZR0JnWUhCd2NIQndjSUNBZ0lDQWtKQ1FrSkNRa0pDUW4vMndCREFRRUJBUUlDQWdRQ0FnUUpCZ1VHQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRbi8zUUFFQURMLzJnQU1Bd0VBQWhFREVRQS9BUDVqZUQxcEFmYWt4eDFwd0hOTm9ZZzZjVWNkcVVIdWFiOUtMaFlYR1I5YVVaSEZBNTZVZ3lPdE80QjdtazZIMXhUaU9PS1QrSHBTR0xrWndEUm5qTkljQVZFV0k2MEFETUR5YWlMWUdjMHBlcTVZa2tVaENzMVYzYlBGS3pEcUJWY3NhQUVaejJxQjJwR2I4S3F1L2VtQU8vWTFXWjhjWTZVTzRxcTdacEFEdjY5YXBzM0hIV2xkc2RLcVBJVDE1cDNBV1IrUUtweVNkalE4bkZWSGVnQkdmamlxYnVjWTlhY3oxU2trb1loSGs5TzFVNUh4VHBKUFNxVWo5eFNBYkk1UEpxbThtTWpORFNEclZLUitUVEdFajkrd3FxNzlxUnBBM05WbmtQcGdVQ0VlVG5qaXFidUR4U3UvVmFxdS9YTkEyRWpacW83anJRN1o0cXN6bnRRQ0VrYzlPMVZYYkhJN1VqUHhqclZkcE04MGdFa2VxMGo5aFNPK0JqMHFzN1pPS1lnZGoxcXJJL1lucFRuYzlLcUZ4UU1WMlBUTlZtYm1objU1cXU3K3VhQVFqUG5pcTd0eHpTTkp6bW9XUFBOQWhHYkF4NjFYZHM4Q2tadldvV0p6bWl3eFdZR3E1Yk5JN2NWQ3pnVUFCYlBXb1N3eVJTazhpb1MyZUtZTkF4NlZDVGs0NlVqRVk1Rk1KOUtRQ043MDA1TkhhaWhnSHRSOUtLVHJSWUJlOUZGQTYwQUE5dVRSam1sNU5IVHRRQWxKMXBTU2FUclRBVTVwUU9QcFIwK2xBSEdLUUNkNk9LT2NVdjFvdjJCQndldEo3MGRxUGxvQmg2VVVjQ2xIcWFBRTdVbzY4VW5mbWwvaG91QVk3VWQ4VW5hbEp6Mm9BTjNPYU1ETkhmQjVvUFdnQXpnWW94elJuMG80UFdnQU9lL05IT2ZlZyt0Sm1nQmNISE5HYVRwZzRwUlFBdEp3S1hrYzBjNDYwQUoyNUZMMEhGSjFOTGlnQXhqbnRTQ2w5eFNkODBBSFgyRkJPY1VaT0tNK3BvQU8xSEZITkhiM29zRmdJNDRwZUFlZUtCeHpRZnpvQVRxZnJTOXFCNm52UWM5dTFBSmg3bmlpa3dUMXAxSUFOSnozcE9sSGJucFRFZi9RL21NOWVjMGUrZnhvNisxTG1tTVRQU2x6K2xJU0NQYWc5S0FGQTVwTTBkZW9wZTlBWEFjY2RUU2R1ZTlHZTlSc2M4WnBBQlBhb1M1em1sWTg3aFVETVNjOUtCQ0ZzOWFnWWpyU0Y4OUR4VUxFRHJUc01DU2FyTzNyU3RJVDFxcTc5UWFBUXJ5Y1ZVZHlQbHpTdXc3VlVkdUQ3MEJZSGZqRlZHY2tjZmxUbmtQU3FqdU1ITkZ3RWVUZzRxbkkrVFRuZkZVbmt6bWdBa2txbTduclRuZk5VWGNkYUxnRHlIblBOVXBIcHp1UlZKM3lDZnpGREFSNU0xVGtrOWV0TEpKM3FqSkoyb0FKSHFtejU0N1VydndjMVVaK3c0b0FIZkp6VlIyeWNkNkhjam5yVlpuNTRvUUF6K3RVM2ZBeVJTdSsycXp1UFdnTGlPMmVEVlZuNU5JN2tuRlYzZk9jMGd1RHlaNHpWVjNORHVlbFZXazRwaFlIZnZWVm43ZWxEc052RlZtWTl1S1BVQkdmdFVFajVwR1BIRlZtZWdBWjZyc2ZXbFp1TUdxN3Q2MEFOZHNWQTdkNlZ6ejllOVFNM0gxb0FhNyt0UXN4R2FDNE5RTTNHYUdnWU13eDdDb1NjRGloMjdWRVRqak5BQ0VqcGlvaTNHZTlLeHlPS2hZK3RDRUt4NXBnSDhWSEZIUTBERFBhajY5Nk01b0hOREFPZTlMOU9hTThkYVFaN1VCY0tPZWxHT0tNa1VBZzZVSGc4OTZPUnpRUlNCTVhuSEhGSjdVZGFYMzZVMEFsTG1qR2VnNW85cVFDREhGSlNrWXBldE1CRG5PVFJRUmdab3pRQVpQMXBlMktCNzBnRkFDNTlEUjArdEhUbWpnMG1BbVQwNlVHbEhUMHBEeHhUU0FBYVg4VFM5ODAwOG5pZ0JmZWduMG9wY1ordEFoQjBvcER6bk5LUFdnQXpRUUFjVVk3RVVmU2dCYVRwMEZBNlVBOWFCaDlmd3BNVXZPYU8vSnpUdUFFNTdVVWMwY1l4U0FVZzB2QjZVM3FNOUtNODBBR2VNazBNZWFVazBkRHh5VFFnRTY4MGZTakdHeWFXaTRXREdUZzB2UVUwZTFMM29BTTl4Um5GR09PS09nNG9FSFBUcFIxN1VIMUhlakhwUU0vLzlIK1l2a0hOTGtaNE9CUzgrbEdjZTFNQTR4ejBveHpuclNlNVBTbDdIdFFNUVpwYWJuam1tRnNjVWdCano5S2ljMEZoK1ZRTTNlZ0JXYnJ6VURNYVJteDFxdXpHbUFydGdjbnAzcXM3ZFNlS1IzcXU3ZzlEUUZ4Skh4OUtydStQcDNwcnZtcTBrbk5BZ2Q4NUlOVlhmSEZJNzU1RlZIZmlnWU81NXhWVjNHT0tSNURWUjVEMkpvQm9Ia0lxbThtUlE3bXFja25IV2dRU1BtcVVrbEVqODFUa2NVaDJGZHhrOFZSa2s0NW9kem5HZUtxU1NVN2d4SGZQU3FiT2FWM0JxbzducFFJU1J1L1dxcnNPdEs3bnJWUjVNOGlnWU93cXE3SEdLUjM3VlZrZkJvQ3c1MzYxVGFRbk9PdEs3YzlhcXMzWTBDRWtmSEZWV2ZnNW9kejBxdEpKMTcwREVaalZkbnBIYk5WM2NkYUFFZGo5UlZkMjU1b2FUdFZaMlA5YUFURlppZVRWVWswck1UVmRqelFBTzNQV3F6TlNzL2VvSFBPRFEwREJueHhWZG5IYWxkc2M5S2haaWNpZ0VOTFpKOUtpYzBqT0tpWTBBSXpWRXpkcVZtcUlubmloZ0lUelRUamlsejNwT1ByU0JpMGhwZW9wS1lXRDZVQVVHZzRvQU1VRHAwcGNqT0tUSU5DR0JQV2w1NkNnKzFGQklaeHdEU2RhWElvN1p4UWhpQ2dZb0hYRkh2MG9FTCtOSjFvSFVtZ25BeFFNVWU5SnhRY0NqbWdFaGNucFNmV2pnR2x6MkZBQU9lYVE0cGZjVWNkcUxDRTR4Um5OT1BVZ1VnNjlhQjNFcGNHa0ZMeWVlNW9BVW5ISXBDYURnVWxDQUR4UzkrUHdvNC9PamlpNENVN0JwUGVnRDFvQU1qOEtQYjFvNHBlTThpZ0JPcG9vejM3MGRzMElBSlBlanZ4U2pJRkZGd0NnSGowb3llM2FqT09hQUU3ODBlOUhmTkwxNW9BTTQ0NzBtVDJvNUovU2daSE5BQ2pqdFIxTkI2MGZUcFFJUTQvS2x4ampyUm50UjE0b0FCMHdhQUJSbnRTWXpRQXY2WW93UWFRQ25kdlNrTS8vOUwrWTB0elNIcmpHYU1aNG9JSFVWUXhlK2NVblhtZ1k3MHduazRwQXdZZ0Rtb0dPZUtjVy91ak5RTStPY1VDQjJCL0dvR2ZQRkROM3FzVzU0L1NnWU8yS3J1K2V0S3paRlZYYkp3ZTFBQTc0RlZuZkZETVFhcU0vYWdBa1kxVmQ4ME01NjFVZHNVQXdrY2prR3FieVk3MHJ2ZzFUZHhuSC8xcUFGZHppcVVyOEVVNTI0cWxKSU1kYVNZV0VrZnZWTjVLV1I4amlxTHVlUlRBV1Y2cHUvT0tKSHp3YXBPK2FBWVNPYXBTT0IwcFhiSEE2MVVkODlLRUFqdnhWV1NROStncFpKT09lOVZIYzlEVEN3T3hJcXBJL1dsa2MxVWR3UlN1TUdmQXpWWjJBcFhjNXFxNytuTkltNDFtUElxdThtT2FIYnZWV1JzbmptbU5JSGVxcnQrQW9aeDFGVldiMW9CQ3M0cXM3NW9aK0QvS3F6dUFPYUFGZHdLck14Nm1oelZkbW9BUjJBcUZteWZjMGpONlZBelpvQVVudUtyTWVhY1dHYXJGc2RlMUFDczNGUWs5UlF4NHdhaDNZTkZnQmpnWXFGaWVsS1NDY1ZFN1pvWUlDM3JUTzlML0FKelNkcUFBZGFPTWMwdVB3cE85QUIxRkFwQ1NUelNnNDRvQUtPRDJvSHZSeVJRQWNVWkhVOTZCaWpnQ2dCZTFKMTVveDNIRkhHS0E5QVBYaWw2SG1rNmRLT2V0QUNnRHBSbk5JQlMrMUlBNzhjMG5UcFM4a1Vnb0N3Y2RNMEEwYy9TbDY4Q25ZQUhQV2s1UE5IV2xIc2FBRUhUaWxOSHZTZlNoQXhjKzFHZTlIQjYwVUFCNjBtZWVLUGFsb0FTbDc4VWNkS0RrVVhBUHJSMTRGS2ZhazYvU2dBR1JSbkhOSDQwbnZUQVhqSE5IMDVvR2VvNHBlRHlhWG9BaE5HS0RtbDU3ZHFBRW9INjBwenhtamlnWW5wUjFQRktlT2dvQjZVQ0U1QnBPK0JUc1lwUGMwQ0RKbytsTHVKbzk2QmlFVWNuakZLT2VhQlFJT25PTVVZelNaSFhGS1BVMFdHQTlLQ01Da3puclNqSE5BQjE2VWNrWUZIWGdVSDJwQWYvVC9tTk9NODBVM250MXBHYjhLWXhDdzZpb21iSFEwanYxcUVzUlNFRE5qTlFNMmZsQXBHYmppb1hJRk1iR3UzUHkxWFo4YzljME0vR1JnQ29Ia0g1MEFOa2YzcXU3YzhIcFNPd0dUVlYzUElvQVIzL1dxcnY2OXFVdU92OEFrMVVrZko1b0hjSGZOVTNjWTQ2MHJ5VlRrWVlvUklPK0JtcWJ5WjQ5S1dSODhWVGtreU90QUNTeUE4VlRrY0dpUisrZWFweVB4bWl3eEhrcW03ODhVUEp6eFZPU1FVQUpKSUtweU1hVjNxbkkrS2V3Qkl3eG1xcnNPYUhjZEIwcXE3OTgwaENPK2ZZVldkdTlJN25yVlZtem5GQ0dEdjZWVmRoakZLN2RxcU8vcWVLR0E1MzV5S3BPL1BOT1pzZTFWV2FnRUR2bnBWZDNOTlp6MDZWWGR3Qm1nQkpIQjU5YXJsejBwR2YxcXF6RFBORndzT1orS3JNL1hORHRuclZaenRPRFJjWXJOM3FCalNNd3dUM3FCbXgxb0VETmpyVUJjRTBNZWFnZHVjMEFPTGR6VUR0em5OSXpZT0RVTE42ODBBS3pldkZRbGljRTBySEE1NHFJbkhwU0FhU1JTZXg0b3oyTkpWWEFNODVOSFhwUm5zYUNPZUtRQjFwdzk2YU9sR01IaWtERGtVVUR0U0ROTUIyZU1FMGc2NW80RkZDQUQxeDZVZnJTOGRPdEppaEFHS0RtanIxcGZyMW9RQlNaNXpTOFVtTVVnRjZVZ1BGSFUwdU9NMDdBSlR2Y1VuVHJ4U2RPS0FGQUFHQ2FEbm9hUWNVWkpHQlFGaGM4VW5YaWpyMU5CeVJtZ0E3VWRzSHRTOWg2VW1SUUFwLyt2UU90QTk2RFJZUUVIcWFNYzRGQTUrdEhUa1VERGp0UU9lS0FRT08xTHpuQW9BUTBkUHJSNzBIQk5OZ0ZIV2p2ZzBkRHpTQzRZSi9DakhhazQ2VXVRQmdVSUE2MHZVNHBEMTRvNTZDZ0Jjbi9BT3RRVHpTRHJ4UysrS0VBbk9hQm5HYU1lMUdBRFF3RHBRTUNqQkpGR2Z6cEFLUHpwT0QwbzZjVW80b0FEMHpRb3pRQ01VdkJwaUcrL1NnSEo2VTQrL1drNzhjMERET1ByUWVtYU9uQS9PZ2NjWm91RmdQMW94elNBNXBlRDFwQ1AvL1UvbUpZakdUVUpZWXdmem9Za21vV2JqM3AzR0ROeG1xN01EMHBTeDY5cWdkczhDZ0JHWUUxWGRzZDZIZkE0cXM3RUxtZ0FrWVlxczc4SE9LUjNHZWFxdTRINFV3Qm41cXM4ZzYwa2o5eWFxeU9wNEZJR0pLL1ByVlIzNG9lUWQ2cVBKeHoyb0VOa2tHTTk2cXU0NzlxSGtxazhucFFNVjVCVk4zelNPNEhXcWJ5ZFRTQUpKTWNkYXB1L09UUkpJU2FwTzUvRVV3Q1J4dHFuSS9OSzcxVGticTFBQ1N2VlNSem1sZCtPZTM0VlZaMWJybmlpd0E3OWdLck8rUmlrWi9TcXJzZTlBZ2Q4ZlNxanY2OTZWM3hWWjM3VVhHRHlIdlZSbjlhVjJ6VlozNmpPYVFoQ3c2MVZaNkhZVlZhUWs4OWFiUXhYZjBOVm1ZODBNeHp6VlpueWV0QUNNM09QU29HYlBCb1p1UFNxelBuclFBck5tcXpzTVU1M0k1cUJ6bm45YUFHcy9wVUpQUEZJekVEQXFGbUpvOGdFWTRHYWhZNXBXUHBVRE1PMU5BMEt4enhVVE5rMGhmSUpxTGQwcFdBQ2YwcHBOSWZTam1nQTU2MEhwejFwS2QxUE5Pd0NaSjRvejNvSnoxb3BBSlM0eHhSN0dsUFRGQUNEamtVSEdhT08xSEZBQm5tbHoyN1VtVDBvNi95b0N3VXA0cHYxcFRqRkFDNXh5S1RnOENqajhLRDA0b3NBWXlPS0JqdFJTbjFOQ1lBUlJraWt6Uy9UdFFGd0pvUFNtNEdPYVg2VUlMQzhIaWpQclI5YUR6eFFJTTVvOXlLT1NhRDBvR3dKNHhTZDhVdnVPVFM1SzBBSUJSL0tqMkZBNDYwQUhHS01ZL3oycFI2VURJRkFEUnhTakdlYVUwZzlPbEFBZVJSejBvSU5ManRRMEFuV2pOR2ZUbWdDZ0FQSS9uUzQ5ZUtUOWFNMEJZT3RMeDFGSFRrMGg5NkF1SElOS1QycERSZzlhUUM4NHBBZUtCeWFVOGNkcVloT1ByUVQ3VXZGSjA0b0FVWi9Da1B2UzBIam1rTkFNWm96emlqaWoyTk1BQUZHQ1JpanRnMFlPYUJCbjBwTThIdFR1blNrR09ob0FEendLUWM5YVhudnhSL0RrVUFmLy9WL2wrYzhmU3E3dU92V2xKSVBGVnkzK05ORFFNK09SVlppTVlwV1k0cXE3blBOQUN1K1BhcWpNZnpwV1lkdUtyTzNwUmNBWnhWUjN4em1oMzR4MXFxNy9oUUYrZ1NQZzhDcWJ5RHIzcEpYL3dxbzc4ZWxBQ3lTZHFwdS9jMFNONzFUa2NIN3Y1VUFKSStSVk9XVHVEU3lTWTR4Vko1QU9oelFBanVCVk4zUFhOSzBuUDFxbEpMbWdQSVJuNHFvNytsSTc0SDBxcEk0TkFnWndhcVNQU3U1RlZYYlBOQTdnNzl6VlJtd0tWM3h6NjFVYVFqSW9TQUhmdUtxc3dGS3pBSEZWSGZJTklMQ1NPQ0RWWjJPS1YzR2NDcXJIUEJwaFlSeWU5UU8vZnJTU04yRlZpK1I5YUFFWmdldFYyWWQrS0dmdjYxV2QrNW9BSGZGVm5makJvWTFYWnpRQU01Nm5yVmQyT2FWbVBKQnF1ellOQVdCM0I1SnhWZG1wV1lBOXFnWnhqaWdCV2JGVjNZZHFHYlBUdlVSSzV5YUFGZkhmdFVMTm5QcFFXd2M5NmlZakdjVUFCUGZOTW9QSitha0hYMHBBQnpSMEdSUjdHZzBBR0RTLzV4U2R2YWxQclRBUThIaWpHS005NlBiMW9CSU9sRkhUclM5VG1nQUZBSE5BOWFRWXh6UllRdlRudjlLQ2MwbVJtZ21nZGc2VVp6eFJ4MG9IMW9BS001NjhVdlBTZzBNQk92R2FVbm5tZ2U5SFBla0QwRHA5YVRpbDVwRCtWTUxDNHgxb0hJd0tEbWtGQUJ4MnBjVVlQNTBudFFBZDZYclIxSEZJUUtBc0hUM3BjZWdwT08xS2NIaWdCY2pvYVFpazY4Q2xKSEJOQUNrWjVwT3RIZWpyK05JTGgycGUxRkpuOUtZWEVBelM5ODBISHBSak5BQm5weFJqSElOQTQ1bzZHZ1FvT2FNRHJta0p6MXBRQ2FBRHZrVW50UzRPT2xIUTVvR0ppaitkS1NLTVlIRkFYQWMwRG5nVUNnOWFMQ3NCSDRVQW52U1V1ZTlBeE1BY21qUE5LS08vRkFXRkhQV2s2VWh5T2xMbnYxb3NBY1VESFdrNHBjZGFBREJHY1VkT3RHTTBwNU9CUmNRbWUxTDF3VFFjZGFYNjBJWi8vVy9sdlovU3E3TU04ME00Lyt0VlptN1ZReEhmSXFzN2tkS1dWKzlWWGZBTkpBZ2R1TVZVZGozN1VydmlxYnZpaEFrRHY2VlZlVEl4U1NOam1xcnZnVUFOa2NldFZKSC94b2RnTTU1cW5JNHhtZ0d3a2s5TzlVM2t4elJJNEhGVW5rb3NGZ2tmSkpxbkpJS0hlcU1rb0hlbTBDRmR1d0ZVM2s3aWlSKy9hcWJPTWYxcEJZZTBtZWFvcytjNTRwelBuZ2RhcU00NzBBaEhremtHcTd2ak5KSkp6VlptSjRvQWF6Z0QwcXE3NXlLSkpDT2FyTy9jVUJjSGNZTlZXZm5GRHlDcXp0ejF6N1VJQWRnZXRWcEh6MC9Ha2RnYzFWWmdlTzlBQXplaHFzN0Uwck5rMVdadXZOQUNPK0tnWnNkS1JtUFNvSE9LQUVadTFRTTJEU3NlT2xWeTJPS0dBaGJ2VUxOMnBHYlBGUU05Q0FDM3JVTE5nNTcwRnNEQXFFdDJvQmlzd0l6ME5RNUo1b0o0cUluOEtBQmp4VENjZzQ1cFByUU1kTTBBSDFwTzFLUitsS2V2RklRWTlLTzJLVE9PdEtUbW1NQjA1cFBhZ0ROTDJ3YVFDY1VaNjVvem1seHhUUUNjOXFYUEZKUmlnR0ZHS0FPNTRvNmNVWEN3dnVlOUpRZWxMMDZVQUhVODBuYWdkS1hwUUFuclMwY2lnWkdQcFF3WW5QU2dVWlBXaWhNQmZlalBwUjlhRG5yUUNZbnRTNTlLQVNlMUh1YUFzR2M4VW5RVW81NmNVbzlLQUc0NHBjOStsQnpuaWw0STlLQXVKeDJvUEZIcnpRQWFBRU9jWXBlL1BGSm5pbkVjWklvc0FuWHRRRCtGQlBjMEU4OFVBSEhITkczbkZMK3RJZU0wQUhUclIxNzBjWXpSelFBWjVvL25Ta1lvNjBBS0thYVhHZXRBems1b0FUQW80Tk9wdVFlMUFCUms5elNqK2xJQjNvQVBXbmM5UlRlT25hbEo5YUFFSlBRMHZIZm1nNEhOSmlnTEMwblNpbEhPS0FZYzlhVWoxcENmV2p0elNFRkdNSGpwUmdkNk9wNHBnSFNsOTZBZWVPdEhzS0FBNDZETkxTWUJwY0R2OEFuUWhuLzlmK1Y1bTRxdXpjWkZJNzk2cXNRTTB4aXZKemdWVWRzSGppbGR6ME5VM2tCNG9BSkg0NjFUZCsvZWlSemdtcXJ2em1ob2JHdStCaXFydUQ5S0hmRlU1SDcwQ3YxRWtZRDYxVGQ4OUtKSDV3T3RWSGtJejdVQUk3NTROVXBKUFEwcnliczgxU2tlZ09vU1NEdlZKM3ljRVVzakU5YXB1L0o0b0FWNVBlcWp5WTRORHZqZ1ZWWjgrM2VoQUROMnFvN2pzYVYzOUtxUEprOFVBRFNkYXF1NDZpaDN3TVZWWmoyb0JzSGFxcnRubWxkc0dxck1POUFYQjNxb3g1elRtYzk2ck8xRndURVp2V3F6bm1ndGsxV1pnS0FzSzhtZURWWm1IWE9hVjJ4VlYyendhQVlyUG5PYXJ1K0J6UTduclVEc2VsQUNNM2VvUy9ZMGpzUlVCYi93Q3ZRQXJ1VHhVREhOS3plbFFNM3JRQ0Zac2RLaExEUE5ETVNPS2pKb0JpRTVIcFREd2FNNS9yU1o0OU0wQTJIQW9QSGFqcjFvT09LQXNHS0NLQlI5S0FRRGdVZmpSN2lqcjBvQkM5UlNIMDlPYU8vRkpqR1JRQXZIZWlqSW9Bb0FQb0tYbjZVbEZBTUJTMGYwcERRREY1RkFOSjFIU2w5aDNvQU9sSjBvNjBwOUtBRFBOSjJwVDZVY2lnQlByUzllS1FVcEo3ME1MaWpqaWsrbEhXa29CQ25QU2prQ2pOQTU1TkFJUSs5QXdLWGc4VWg5S0JpNVBhakFGRkwrRkRFSm5GSFUwZERSMit0Q0dGSElvd2NVdVBXZ1FoTkdTT3B6UzhEclJuSElvQVRrZTJhRFNqZ2puTklUMm9BVTlhQjBveUtPQ01tZ0E5NlRKcGM5cVRJNjBCWU9uWHZTajNwQ2Y0YUNNQ2dBOXFPMUxqbjNvNDZHZ0FHS08vTkp6M280b0FVSHRSMjRvelFEU0FPM0FwRFFlT1JTOGc1Tk1FeE9TZWFVVXRKMXBBR09lZWFEbk9LT0R5S09POVVtSUFlOUtDTTBnR0tYclNBWDhLVGpBb3htbkRHT0tCaVl6emlnSEl6UzVJNXhRQi9kb0EvOUQrVXg1RFZSbjlLVjNxbThoSjRwalNCNURqRlZaSktIZnZtcWNqNU9lOUFJUjNxcEkvUEZMSklSem1xTWo1NTYwQUxKSjYxVGtrL09rbGZnKzFWSGs2MEFMSTU1cWxKSngxcEhreDA0K2xWSkg3VUFOa2tJR0JWS1NUc2FXUjJJeDBxcEk1b0FSbnF1ekRITk5kelZaM29CaU8vd0NKcXF6Y21oM3ljbXFydDZVaGlNK2VsVm5jOUtKRzU0cXM3K2xPNGhydDZWVmQ4OWFWMnFxemtuSTYwSUFkK2hxc3prK3hvWjhpcXpzZXZlZ0JIZnRWWm03VXJOanBWVm41d0tFQTVuNXFxN2MwTzlWMmVnRURPRG5OUU9lYVJqeHpVRHQzb0M0anYrZFFzL3BRemQ2aFpzbmswZEFFWWdacUIrZWxCYm1vbVBGREFhV0lOUmtrSEFvTFlGUms5elFBRW5HS2p6bjZVdVQycFBwUllCUHJ4U2pyU0hQZWlnTEJ6UnllQlMwaDRPS0dBVVVudG1seHh4UUF1ZU1tazdVVWQ4VXdGNDRGSngxcGU5QjY4MUlDWjlhTTRwUnoxbzZjMDdnSnoxNjB1T3g2MG5TZzljQ2dCVHdmcFFCaWs2MGREa1VXQVB3cGVLUTV4azB1ZU9hWUNBZmhSbjFvelIyNXBDRjcwSGoycFBwUnRvR0wwRkllbUtYanJpam9jQ2dBOWpSampnMGMwZHFBQThkTzFHT3RBeFNkODBJQVBQQXBTY2RLTW1nVUFMaWtQdFFQV2dZb1lDVXZXam9NMFlvQUtNSG9hT2g0cE9BS0xnTy9Ha3BUd09LT09sQUFTYyttYVRqb09hRHlNZWxIWGlnQUhIQkhOTHhuTkF4azRvR0NQNlVBR2NqRkI1cE9uRkFBOWVLQUY2OFVaelNjMHYwb3NJRHdjMEU1SEhGR09hVEF4elNHTFFCMkZISGFqZzlhWUlPMkJTWUhHS1hCNHBlMlJRaENBWVByUjA2MG5ROUtYUE5JWW5VVTdBQnhUUnhTOUJ4eFRBWHRqMG8rdlB2U2RxVWNIRkFBVFIxNjBIbmdVdk5DQU9uR2FVWXhnOGlqMkg1VXZRMFhCaUFESHJTa2RxVGtjRVV1Um4xeFFNLy8wZjVOcEpPZWFxdklRT09sRHlET0R4VlIzeFRBUjN4bk5WSGVoM1BRMVRhVHNEUU1KSk9vcWs4blVFMHNqNDRQTlVua3o5S0FDUngxL3JWT1NUSEZFamtITlUza3lLR0FqdjZWVGtmaWtrZjNxbzc4VUFEdmc4MVZaL3dvWjhjbXFidjYwSUJ6eVlIQnFySkozb2tmUGVxclNZSTk2QUdzL1BOVlhmcmdkYWN6ak5WWFk4MEFEeWM0SFNxck9NWXpTczlWR2ZqNXVncENCbklPS3JPNUIrYWxaK1BhcWpQeFRZd2RxckZoU3UyT3ZTcXJ5VUFLejFWWWtnNXBTM3B4VmQyeGtVQUR1TVZYWWswTzJCVmRtN2lnTGc3WXFBdWUxRE42MUN6RE5NRUlUelVMT2FHTlFrbnJTQmd6QW1vU1NlYUdiTlJrME1CR1ByVENjMFo1NHBCUUFlZ3BmclFQWHZTRDBvQVhJNkdrSGFqT0tNa2RhQUFuSXhSemlsK3RIU2dHSU1ZeFFlQlIxNlVkYUFBOWFLS01FMEFHYVhPUnpTWjlhQlFBZDZNZXRLQVBXazRIVHJSY2R3SFBiM28rdEwzT2FUMkZDRUdUbjZVRGlqb2NVR2dRdUNPYVRyK0ZMOWFQWWMwREQyRkE2WnBPdEwxNU5BQVQrTkE1eG1nSHZSd1J6UUFaQTZVcHllS1RwUndldEFDY0RyU2dVRVlGSVJRQVV2UGVqcDFvelFBZEtYanBTVWNnODBDRkh2U2Q4MERBR0tPL05CUVVleHBPYWRrOUtHSUNUbkJwT3B5YU1IT1JRQVQwb3NBcHh4Um5QRklNa1lGTC9Xa0EzM3B3UE5Kd1BlanRtbUFkZnBTak9lQlNZeFJrRTlPbEFNWE9UU2RLWHRraWc0eGtVQUlBTzFIYk5LT09mU2t3VDcwQUpqaW4rMUoxNE5CT0RqMG9BRHpSanZtZ0E0NG9Jd01VZ0Q2MG5BNXBja2MwcFA0MHdHNE9LQ2VQclRzNW93RFFGeE9sTFNkczBvNmU5QWdGTHgzN2NVWU9RYUQxelFNTzNIRktlbkZHTTlLWFBmclFndUp6OTZqcU05eFM0NHpSd2VsQUFCK1ZCRGNlbEZIMG91Qi8vOUwrU0ozeFZLUitPYVYzNXlhcHZMZzgwN2pZUEozRlUya3p5YUpId2VhcE8rZndvQUpKQi9GVktTVGpOTEpJT1JWR1NUZzBBSzhtRFZHUitLV1J5T0txeVBtZ0xpTXgvT3FyeVVTU2RxcU80N1VXQVZtNXFtN2s5ZWFWMzZpcXJ1Y1VBbUR5WUdUVlI1TUhBL3orbE9rYjBxbzc0SEJvdUFqdjJxczc1R0tIYnZWVjNOQWdkdXdxcTcrdEt6Y2tucFZabkhTZ1lQSjNKcXU3RDZVanVSeFZaM0JPQ2V0RDhnRlpzSE5WWGJuRkRNRHo2VkF6Z2RLQVFqTU8xVjJiMW9MZWgvclZkenoxOTZBUU8xUXMyQjZVanNEMHFGbUFKSnBBSXpWQ3pjVUVudnhVUmI4S0FRakhJSjcxR1dIUVVoSjdkS2lPRDBQNFV3dUl6SHJUQ2ZTalBjVW1lZWFRcmgzNG9vOTZEazhVN0REdmcwaHBlcHlhUFlVQUdQZk5CUGNVdkJvSUdjZXRDQVFaSE5LT2V0SWV2TkxuRkFCak9QZWs3Wm9QSGVqTkFYQWUxSGFqdlMrMUFCMHBNODg4MFk5S0tBRGpwU2ozb3lPb3BCMTVwZ0tCbmdDazQ3VWQrZUJRUGJpa0NGempHS1E4MERIclNuZzBBdzZacEJTbk5HTTBBZzROQUF6aWpIZWtGSUJjZXBwQlRzNDRwT3BwaUVISE5BUHJTMGM0NHBqQWdkYVE0QjQ1b3lQclMvUVVyZ0hRY1VVY0hyUU0wSmdISHJSL1NrUFhpbDQ2OWFBWVl4elFSM281NlVZR2NVQUE2YzB2dUtUR1B3b3dldEFCL3dEcm9INlVIMEZLQmltQWg0by8yVFFTY1V2QUZJQXh4bWdETkI2WW96M29BUWRlYU1nSE5Mak5KMDcwTmdISDFwZnJSOUtUMXdLQUFkalIwR0RTbkhUdlNBKzFGdXdDKzNlak9hWElBcEQ2VWdzQUh2U1lKcGMwWUkrbE1CT3Z0VGdPK0tibWxPRDFvQmhqbWpJcGVwOXFOcEZBQmpuSUZMMHBEUU1aeFJZTENqMHhqTkx4MHhSMHBBTWRPdE5nTDNwTy9QV2x6VHhnNUJwQU5BNXoxb3ljWU5MUjMrdEdnQU9CUmlsd1B1MHFuUEZBSS8vVC9rS2xsOWFwdklNMHNqODhWU2tmTk80eEpHcW5JM2ZOTEkvNlZSa2tHT3RBQ08zYXFza25PVFNPNUF5YXB1NTVvQkN0Sms1TlZIZmp2UTcrL05WWGNHZ0dEdmtacXE3Wm9kdTFWV2ZKNDYwZ1lqeWVsVm5iQjVwR2JubXFqdlR1SVYyd2MxVlp4NjBydU0xVlovVG1oQUR2M3FxN1lvWnp5T3RWbk9lVFFBTS9ZMVhkL1drWjg0RlZtYkh2UU80TS9GVjJmSFNrZGpnZ1ZYZHVLQUF0bmlxN056U3MyUjlLcnMzR01VQURQbW9HYlBGRHNQenFCMnpRRndadWM5S2hZOFlwR2FvU3h4akZBTVV0eGlvYzk4MGpNY2U5UmxzVUJjR1ByVE05eFNIazBuMW9BS1h2U1VBNDRvQkJqc2FCNjB2YmlrSUdLQUR0Ump2UVIrRkhUa2lnQW8rbEdlZUtLUUJqQnhSNjBjam1sNlU3Z0owRkgxK2xCNW83OFVDRjc4R2s3WW80SnpTbHNqbWtNUTgrMUwwb3ppZ0hCeFRBVHBTa2pOR2VvcERRQXVQVG1qRkllbURTa2NVQUoxSHRTZzhVbjFwU2U1TkF4T2xPeFNlMUx5S1FodEw5S1NsR00wd1FZelNaL09sQXoxb0hIUFdnTEJSejJvN2NVWjlhQkNuaWt4U25rMG1PMUF3R1NhQnpRTWRLRG5yU0VBNHBlZ3pTQWV0TG5qMXBqWW5maWxHYVRIYWx3Q09LYkVJUFNqSEhGQjVwYVE3Q2NkYUNCMUhOSDFwY2RqUUlPM05IT09hVHB3S0FLUXd6d0JRUFdsTkpUUVdBQTlhUFkwSG5tbHdSK05EQzRaNTRvVVp6U1p6MTcwdUIyb1FCN0Rpakk5ZWxMbW1qa2Vnb0FVSFBOTDdVMCtvcGUxQVdFK2xMa2QrS09EMm9IMHpRQUQrN21qR09obzk4VTdBSXhTQVRrY0NsMjVwUGIwcFRudFRZQVIyelM0cFBiTkx4MG9Cb0JqdlM0QTZVaHgxRktmZWp6QkNjVXZhanZ4U0QwSGFnUTVlZWxDNUhOQTRwMlBRWW9HSFRrVTdBeHpTZ1o1RktBUWFBUC8vVS9qemtmMHFsSTRBeUtWM3g5S3BTeStocGdOa2ZQV3Fra255K3BvZCtLcU8rNml3eEhmOEF2VlZkem1rZVFZNDVxcTc5dWxDQVdSODk2cU01N1VPdzYxV2R5ZUtBWWp5RVZWZHNETks3OXhWVjNKTkFDTzJLcXU0NkNsa2M5UlZWbjcwSUFadWMxVVp2VHBRN0hvS3J1d1BmbWdBWnlSeFZaMjR5S0dmUGZpcXpzQjlLTGlCbTY1cXM3OXU5S3pqbkhGVldZak5BeFdJNmlxN09SeWFHYmdpcTdNTzNhZ1FyTnh4VmR5TzFLemVsUU13NkdnWU1SbmtWWFp1MUs1SGVvWEpJelFBakhCd0tpWnNkT0JTczNOUXRrYzBkUUFzT25TbytvNHBlMkRTRDFvQVR2UzlzVW1lOUhlZ0JlbzRwTVVEMW93YUxnR2VQZWtINTB0QTYwQWhRZUtiN21seDJwUUJRRnd6U2RPYUI2Z1VwOWU5RnhDbkdhYWVCaWppbEk3VURENjBsS2NVZlNnQTYwbkZLZVJTVUJZTTVwZXB4UjJwS1FJWEhOSWM1NXBhT29waFlRNXBRUFVVbjBvempqclE5UUZQUEZJRGpwVHVncE85QUNjZCthVStwb3lCelNZQjRGRndZb3dEUnoycE9od0tPdENDNGRLWHAwcGM1b1BUMHhRd0VJeWFPUnlhUGIwcFRRRnhQMUZCOTZNOWdLWEhyUUZ4Q09LT004VXZVNG96bWdFSGZtbTlxY2ZRMG1QU21JT25OSGFqT2FCMUdLUXcrbEwxK3RKMFBGSEdLTEFMakIrdEpSbWx4elFBblhpZzQ5S1Vuc2FEeWNVQUpTNTcwZTFBNlVBbUwyNHBEeDBwT1RTbkJvYUJoMHBjOSs5QjdZcFBTZ1FuMXB4eFJrQTVvb0FUK1ZIR0JTNTROSmtkU2Z3b0dHZlNsNm4yb3pqa2lnOFVBSmpOT3g2VUg5S1RyUUlNZmhUamlrOTZYcjBvdU1UQkE1cGVuTktUbnJRZWxBWEV6NjlSVHVsSUNPaC9TZ2M5S0dBQWVsS01HZ0h2VGdQem9BQmtkYWNPdEE1Rk9IT1JRQWdIUUh0VWdIRk5BL2hwL2FoZ2YvOVgrTm1TU3Fja252U3l5VlRaLy93QlZVTVIzOStsVlhiZzBQSmdacXE3VWdCMzU1TlZIYlBIclN5UGlxanNCd2FBRVpoVmRueDBva2M0TlZYYm1nQkhmdUtyTS93Q2RJemUrYXJPM2NIMm9ZQTc0cXFXNW9aL1ExWFp6akJvQmlPeHhpcXp1ZXRPYzloVlJtUDNxQTJGZGhWVXQzRkR0eHpVRHRRQU8zWFBlcTdObWtkc1ZBemRqU0FHWWZsVmRpYWN6WjdWV0xkczVwM0FWM1BTcTdOU2x1dFFzM0ZDQUdPUlVUSHB4U00xUk1jakFINDBXQUNjY21tRWo4YVRjT282MG5HYUFEcjFvNG82ZEtEMHBCWU92YWo2VWNtakg2MHdBKzNla3BlOUhGQ0JoMXBSZ2Q2UVVkZWZTZ0JjZmhRT0tUdFNrWjZjMEFKeGlnVXZ2U0UwQUhXbFBQYWs3OFVVQUhKT090THhTQTB1RFF3RHJTQUhOQjlCUzBJR0hCRkljOTZYSFlVaHozb0FkbmlrejJvejNvNEpvQVBhakpINFVaeU9LVDJvQVU4REZKbWw0NlVZT00wQUhhanNLQ2VQcFNnbWdCTzNBb1BwUWNkcU1lM0ZJTEFjOUtPMUpuMHBjZGhUQVQyRk9ITkprNHlLWFBZMEFIQW96U2RPS0Iwb0FNanRRS1BwK2xIMW9BVWNVaHdSeFMrOUhQZWdBNUhGQU5JT3RBSnhRQXYwcEJuT2FYNlVtTWRhRUFjNHBjSHJTZS9wUzg5YUxnSFNqcWMwY1l3S1dnUW5TZ0E5S0FNYzVvNUJwQUcyakk2Q2p0ZzBBRVUyTkIwT0tNNEZIQm9Bb0FDTzFIMW83NG82OGloQ0Z4MnBvd090T0FIZWorbEF4T3ZVOWFkeDBvUDFvSHAxcDJDd29wRHpTa2tBR2pwU0dBd2VsTGoxcEJRUlFJVWNZTkFITkhQUVVweVQxb3VBMGdIcDBOT3djL1NseFNnZHU5QUFNZGV0T1VjMGd6K0ZPenh6UXdEdlR3TTlhTVl4aWxIWHJRQUFkRDNwK081NG85cWZnOURRZ1AvL1cvakNkeUFlYXF1L1ErbEl6NXFzN2s5YWR4ZzhnN2MxVGVUdjBwenYxUFNxenZpaTREWGt3T0txeVNVTzRQUTVxbzdnODBBSzc1SFBBcXE3RDYwTTNlcXp1RFNFSThtT3RWbmFndG5rVldkdTlOakVkODlhcnMrYUhmMTRxcTdNZUtBRlovU3E4akVpa2R1ZlNxN3NUUUNmY1JtSnFzemQ4MDltUC93Q3VxN05uZzBDRVp2WHZWY3R6Nm1sZHNmNTZWQVdKNlV4aUZqNllxRXQ3MHJ0a2ZXb1R4MHBBSXpEa2UxUnMzZWtKR01BMUVXenhRQU0xUjByRTlhWjc5cUFGSHZSazl1S1FlMUppaGdMeDBITkI5YU0rbEE5YUFBQ2o4YVhCNmpta3puclFBdEpRZmVqOGFBc0tLU2pwU2tlOUZ3RFBxS1NqNjBVQUhTamo4S09sR2FCQy9oUWV0SEpHS1NoZ0dUUzlEUmp0UUFjVUREUHB4U0QwRkgwcGVjNW9FTHhUY1k0TkdEbWw1NlVERE9LUVV2dUtPT29wOUF1SndldExSMXptam9jaWtBZFBwUnhSa1lvT0JRQ0RqdFNZNXBUMTVvUDUwZ3VHQWMwRUQ2MEdpbUZ3NTY5S1VqbWs0eU1DanB5YUFFNlU0WS9HazRHZldnOU1kYUFENjBjazgwdlQ2MG5UcDJvRUhUaWpJeVJTVTRjOWUxQTdDWkhhbHBQYzBjVUFBSGFsNlVaTkdCOUtBQWZVOFVuWGlsQXoycE05NkxpQWU5S2VlVFIwT2FPZzlhTGdKblBBRktjSGcwbUJpaWl3eGFNanF0SEZHTWpBb0VCejlhT2grdElmeHB4eU9sQXhDQ2VLWHZ4U1VEMG9BTWNVZjd0S2NVY0dnUVl4OHBwMk94cERtbEhITkZoM0UrVW5nVVp4MXBPU0tVLy9BRjZkZ3VMdEhJcFJ6d09EUjJ5YVFlM0dLUUM5ZWxKa2tjMHB4bWw5KzFBQitsR0QwTkJ5Um1qcjBwZ0tGQy9UMXAzQU9jVW8rbE9BM1VnRUZQeHh4VFFPYWVvb3NNWEFCelNqMDlhWG52VGgrVkFoY1lwY0R0UzhtbmdZR2FRSC85ZitLNTNQVTFVZDg4ZDZXUi9TcWp2VDZEQjJxczBnUFdpUjhIQnFxeisxQWhaR3p6Vk41Q09mU2xlVEJxcTc1NXBEQm1xc3o4MGpOeDZWVlp4VEFHWW5rOWFydTRIQW9kemlxenRnYy9wUUZoV2YxcXE3YzBydnh4eFZaMjlhQUJud09LcnN4KzZPZ29kOFZBejlxQUIyQTUveUtnTEU4WnpTTStEeFVKYmpudlFKaU14Njl4VVRFbnZUU2U0cUpqK2RBMERObW9lZnpwU1NlcHpVTFp4azBBd1ppZUtqTFVIcHhUZjRUUUFFWW82VXZ2U2NVQUFCNG8rbEpuSE5POS8wb3NBbnZSOWFVKzlKMHhRQXYxNzBtS005elJnQ2dMQVRrOFV1RG5KcE00NlVBK2xDQVVlMUJ6MTlhT085SjA0elFBZE90R085R1BhanRpaEFMMG9HUndhU2dVQUI1Rkh0UzRwTWlnQmU5SUJ4U24xcE9CMW9BTTlxWDZVbEhXaXdYRlBKeUtUcHhTLzU0cFQ3VUpoWVQzcE8xS1FPYUI2OUJRTm9TanI3VXVmVHZSZ2dab0VISFdnOWNVcEZKeDNvQU1qcFJuRkx6bW05VDBwcGdMeFNVdkhXajJwQmNEa2dZb3lPbzYwWXljZEtBTTlSUXdRREdlVFNuMUZIWHBRQ0FlS0FFQXpSejJwY2dtZ2MwL1VBN1o2MEFqYlNkQjYwdElCTTVOS2NZOWFUdm5xS0R5S0FBNHBUeUtQcFIwNG9RQWVlS1BVMGg0TkwwNmQ2QUFldlNqb09hVE5MemlnQUF6eFM4WTRwT3ZIZWppZ1Fkc1VkOFVoNTZkcWQwL0NnWW1QU2pPT0tCMHdLWGp2UUFjZHFUR2FYQTllUlFSUUFjMEFqdlMwWTQ0b1FXQnVsS2V0SmpuMG95T3RBQzlPUlFPbk5BSGMwdkI0cGdIWHB6UWZwUUtCOUtRQjN5YVVaQXBmdW5KcFI2a2luY0xnQU85TDA1bzQ5YWNGOUtTQUFLZHhuQnBhVWQ2UUNnY1U0RGo4YUJucFNybm9CVEFjQWVsQUI2MG9Ib0trQTlhQUdxT2VLZUZIMHBSak5QOUtZSC8vUS9pYmQvV3FqdFE3Y0dxck54bW5ZQUxnOFZXZC9VL2hTTzNXcXp0NlVBRHYrVlZXYW5NL1BOVkdmQW9HS3pEdFZSbXBYWTlxZ2Q4NW9BWTdZNUZRRmorVkl6RG1xN1AxL3BRQU0zT0tyTXdIRkt6RHRWWm13T2FMZ09Mbk9hcmx4MUhOREdvU3hGQURXT2V2RlFzMmFDNHFKbW9CQ0ZnZWFoTFo0cFdQTlFGc2MwZ0ZZOFp6VVpQNWlsNE5NQnhUUUJtaWppbCtsSUJCelJ3TzFLT1B3cHRNQmVuU2xISno2VWxIclFJUWVsS0QzcGFBZTFBdzcwbWUvZWdFMHVlYzBJQTZmaFNkdUtCejJvUHRRQVVVYzR6UjBPS0VBVVpvN1V2SFdnQkRnR2prVXVjMGQ4bWdMZ2M0cENlM1NqZzBweU9hQVREM29BNzBVWXpqaWdCS1BhbDlxT2g1b0JpWkE3VXRCNjgwRDE2VUFCUEZCT2VhUTU0TkxRQUhuaWw3OFVtZldnL3lwQUdSUURpakZKejJwb0JjazBEMG95T21LTWVuU2dMQjdVdk5JQ2Y4QUNrOTZBc0hUcFNqcjYwdEFHT0tCRGNZNmMwdWM4QTB2MHBPQnpReGgxeWMwdUNlbEo5VHhTOWUzV2dCZSthYmttanFLZG5KeUtRQ2NZd09hVFBlbCt0SFBlbUFEZzBjMG1PYVUwQ0RQNlVBNW8vblJRQWdwMmM4Q2t6M05CNUZBeE1uclNuM281QW82RE5BZzRIUTBZN2RLWFBla09SMHBEUXVPYVRCb0dCUys5T3dJVG5GTzRvK3RBQVBla0ZnemswWXdjTFJnOTZVSDh2U21JVWNHa3pnWTZVSEE5Nk1aRkEyTCtOQkhwUzg0cE85QUNubmlqZ2U1b0F4U2pCRkFKaWluOStLYjNweWdZejZVQUhRZXRPQyt2YWdEc085T0dNK3RNTEMvaFRnTWRLUUFZcC9QNFVnQWMwNmdLVFR3T0FhQUZVZGpTZ2QrdEtCVGg5S0JDQWNpcE1aNW9BNTRxUlZKNjhVQWYvL1IvaUdZNXFzNy93QVRjVWpuaXE3dlFNUjVNaXFydVFPS0pIT09UVlpteFRDNE0yS3JNMURzRHhWZG5QVWRhQUd1MmFycy9HUHdvWmlEelVEdFFBanQxeitkUU8yQms4VWpzVFZkbXljQ2dBWnVNaW9HYjA3VUY2Z1pqeU9sQUFYNU5RRmlCaWhtNDk2aUxjWjlLWVdCbXp6VUxFSDhhQ2V3cUlrNHBXRUl6RHAzcVBpZzQ2MDNPYUFEdnpTNDdHbSsxTGc5ZWxBMGd3S090SjBwZW5Kb0JoelM5ZnJTQThVWW9BRHhTamp2UlIyb0VHUjJwRGlqclJuaWtNTVVmU2dZN1VwNlV3QWdZNHBQWVVacGM1SE5JRUhHS1FVZldqaW1DUURIZWx4ejZVWjYwQS9oUUFjOWFTbDY5YUFhQUVwY04ycE1jVXRBQWVtYVhqdHhTY2pnMEVaSHZRRmc2ODBZb3BPK2FBQTRGR09hWHB4UU9uRkFCajFvQUpwQm5pbHlSMG9BVDNwMkJpay9TazYwZ0ZHUHhvem5uTktDVDBwRHhUQUJRZmVqQm9IUEZBQjFQUDBvcFJ3T2FUNlVXQkJ5Um4xcGVjMEFFMG4zdWFBRjVvT0I3MEQwOUtUUE9LUUM0RkprWnlhWG5yUUJuTk1MaVl3TTBaNXgzbzZjOVRTL29hUUNkRGpyUndPS1VjZlNnWnhUQVRPS1hOSHNhTVVBR0RtanZrMG5YOEtjQ1NLR0FIamltbm1uSG1rNjlPS0VBWTV4U2pwU2RSN1VuTklCY1o2MHZmSDlLUUR1S08vSnBnTy9wU0ROQUdPbk5LQmtkYUFGQko2VWh3QmlsR1R4NjBlNW9RQjJ3YVdqMy9HazZjMEFISk5MMTRGRkw5S0FBa1VkZWxLQVB2ZDZYZ1VnWW5YaW5nQTBnNmM5cVVBRTAyTkRoNlU0REJwQU1jQ25BRDhQZWdRb3ptbEE3QTBLdmNVOEFnNU5DQzRvRktPYVFWSW9BR2FFTnNBTWluQWRxVUxucHlLY01uazlLTGlFeDMvR3BNYzVvR2FlQmpwelFBRGluZ1lQTklGUFgrVlBHUFNnRC8vUy9oemR5ZXRWWGJpbGRqbjB4VlYzOWU5TWFGWitNam1xcnRqcnlhVjNIM2UxVm1iR2NHZ0JHUFBGVm5iSGVsWjg4VlZkL1dpd3h6TVNlYXJzM0dSU08zR2NWQTUyOFVDRWR2VHZVTE42ZGFDM3ArZFFPL0ZBWEVac2Y0MUF4ejBwWGJQSXFCalFBcGIwcUF2bmpyU2x2VG1veWMvalFBMG4xcVByelFUaW1qK1ZBTU05NlhIRkg5YVErOUFNT3ZKbzdZTkhiTkFvQU1tanRnVURrVXZvYUdBbmFsN0FVZ29PS1FCalBJb0hCelJ3S0NLWWdGSHZSbk5MMW9HSFBXazYwSDNvNlVBRkxuSW9PTVp4UjJvQVQyTkxuSTVOSmlsNHdLQUZBQjZHbSsxS2ZjNU5CT1JRQUVVdnRTWjdVWUlQTkZ3RUJwY1pvNmowb3g2VUJZRHllS1E5QlM5OGlrNjBBR08vV2pweUJRTVU3bk9LQURnakZKUjE2VW95YUFZbjhxT3ZXbEJ5T0tiUUZncGUxS2V2SGVqbnFhUUlUdnhRY2VsQTlCUzhaelRBVHBpamp2Uy9XampxUHBRQWd5YUQwNXBjN3VLUWpCb0FYSHBSOWFNNDRQU2pnMEFJUm5nVXVPMUljOTZYbnBTQUJuT0tUTkJJTktlbkZOQUx4MVBXa3hrWUhlZ2pIU2xJSGFnQnA0NlVZUFdsSG9Qem9IU2dQVU9jNHBQWTBZcFFlOUFoZTJEU2RzMEhBNG9BeHlhTGpFeU1ZcGFUcndhZDdDZ1FtQ2VsR01VY2ZuU0Fab0dPUEZLZmFqUHAxb3p1Yk5BQjBQUEZCOU9sTHR4UmpCNW9BUHIycGVBS1QyRktmZWdBNTYwdk5OQUdDQlJ4NjBDSERpa1hHUFdseGc1b09DZWFReHh3VFNxTWZNYUR4MEZPR001cGdLQnhpbHgxelM0SXBkdmVnQUZQQXBNZHZXbjRKOTZMQUNnOEQvSXArQlNZN2luam5OQU1CeFRndWVwelFBQ2VhZnQ3a1VBS3VRT2xLQURRQU93elR3QUtBdUtNWnAvUTBlMVBBNXBBSUI2MUlvN0NqYm5wVHdvNzB3UC8wLzRZV1lDcXJQanJUbWZqbXFwYkhXbU1HZXF6SG5GRHYzUFdxN054UUFNN1o2MVhZamtZNG9jODFBN0RwUUFPM09UVmRtM2MwRWs5YWhkc1o1NXhRQU0zVWlxNU9SaWd0anAwcUppTWVsQURTVFVMTmppbExZR2V0Uk1jY2lnQldiUEJxSWtaK2xKbjFwdlA1MEFMbkZKU2ZTbCt0Q0JnT2VsSmp0UzlxQUtBREhUSGVpZ2UxQXhRQWRUUzU5YVFVRG5nMEFGQjVvem1qM0ZBTVhuR1JTYzk2WDZVaDYwWEFYdFJnZGFQZnBTWVBhaENEanRSMU5CQjYwdlUwRHNJT21hUGVsNmNVdlBTZ0J2WG1nODllS1hIclI5YUFRbWNDajI2bWpyMXBldlNnR0g0MGMwbjA1cGNBR2dBejZVZDZCNkdna2pyUWdEK3RIU2w1eHdLYjlLQUZ3S01lbEhYcFJ5YUFBRFBXanB6UzV4MHBNQ2dMaGtpajV1Z3BjSHJtazcwQUhKNjhVdWUyS1RHZmFpZ0E5cU1pZ2RhVWNjVUFoRGpHT3RHRFFRYUtRV0FjVW4xcGVveFIyelRzTk1NNUlBbzdjYzBwNDVvengwb0VKanRTaklwTUhwM3BTYUFEa2NHanFhVWpzYVRwMW91QUhrWkZJT3ZGTGpOSlFBdkhmclJqUFBRVVo3VW5UaHFCQjh0T0hXa0p6M3hTOEdrTVFVb0ZKN0NqR0NLWWhlTThVZHMrbEdSU1pCQkZBd0gwelR1dlNrQXpRT0tZQ25nODBld280NzB1VFNHaEIxNXBSMXhTOXFNWm9FR1BXamdVZ0dNbWw2L2pRQWQ4bnRTOStLWEdPS1A1R213QSt0T3prMEVlbmVuRE9lS1FCUzhaeU9LWEhOT0FHQUtBRjZjMHY2MEQycFFNQ2dCM1FacHdHZTlJQU8xU1lBK3REWUJqTlBBOWFhQmdnQ3BNZGdhRUZoQU1jR25nR2xBOWFjQnpnanJRQUFVOVFjK3BvWHA2VklBTzRvQmhqajZVOVFPZ29VWkdNZDZjQjZVQXhWSE9ha0E3SG1tZ1pHVFVneURpZ0QvMVA0VUhjMVZkdlRpbGRzYzFYWTR6N1V4aU01eGlvSGJuNlVqdGprVkF6OGMwRGFCbTQrdFYyY0FVckhITlYyWTlUUWhNR0krdFFGcy9qUS92VVROem1rREJ5UlVCNDROS1dHQ0toWTg0RkFDbGlUNzFFU09SMm9KcGh6M3AzQ3djVXVhVEZIMDRwQUlLVTBjMFUyQWZXbDlxVDhhTWV0Q0FYb2VhVDYwZnBSMm9FTGdkS1FkS08xRkEwRkI0NG82OUtYanRSY0FBL1NnOU1VY1lwTTBBSEhYclM4RGlnK3BvNDZDaXdYRUhTZ1p6elM5UnhRYUVBZCthVHRTamtZby9TZ0JmclNISTZVblByUU9LUWgyY2RhYnhTOUJ6UnlSVEdCT0JpakFKbzlLRDE1b0FUUHJRYzlhWDhPS0RRQW5TbDdZeG1qcWFYbk5BQ0U0QXhSa0UwdUJpa0hYaWdCTStsTDNveHppa29CaThVbU9PYVhyem1qR2ZhZ0xpK21hUTBkeGdVbmVnTER1YzgwbmFqNjB2SGZ2UUFkUnpTSE5IdjFvOWhSY0E0b0hwU2djOFVIMEZGd1lIbWs0SEZIUFdsT2UxRmhYQWZsU1kvU2prbkZMZzVvWXc2SG1qSGNHa05MZ25nMGhCU0gvQVBWUzU5YVQzcGp0MEY2YzRwTWRxZHhqUGFrT2FBRHAwbzc4OWFDTTg5S1FFQ2hDRkp5TVVkQmlrOUIxcDMwb0dKZ2cwN0hHT2xHTzFIUHBRQUFHbDY0NXBPL05MZ2dkY1VJQTlxVTdnT3RBNEdSU0hqclFDRFB5NXBlK0JTZXVhZDA3Y1VNQTVOQXljMGM5T2xHTUUwQUFHVG1uZ2ZwU2puZzBEQW9BQmpzS2NhWEhPYWRnWXowcGdBSDhRRlBIcWFRQWs4ODBvSFkwZ0hCVCtJcFIwb0F4VDhZb0FVZE9LY1BtRkFBNjlhY0Y2azBDRlVlblNuNEpOSmpuazFJQlFNUUFrVklPZUQxcEY0NTlhZW9PYzBBS1JrVTlRZTFHQlR3TTgrdEFJVlZCNXB3SEhHS1FDcE1kYzBnYUFETlBDNXBjZCtNVTRESnBnai8vMWY0UG1mSEkrbFFNd1BGRE9EK0ZWMlk5elRHeFdidlZWamprSE5PWWdkTzFRTTJDY21nTENNMlRtb0MzT0RUbWFxNVlrVURGWnNWQVR6dW9MY1lxSmo2OXFHSzRwUDRrMUNlVFNuclRUNkFVQmNUcnhRS0tCU0JoeDJvSFNqcHdhRFZCY0RRUGFsNjBVcmdJS090SEhXbEI0b3NGeE85THgzRkowcGFBRUk2Q2pOSFNqSm9IWU1kK2xIYWo2R2xJOWVhTGlFSE5INFVjVXVlRFFGeE1VdVFEUjFvenlCUUFnNG82OWFYdlNVMkFlOUxpZ0huRkgxNTcwZ0FuSnpRRHhRUVJSM3AzQUIwNXBNMGVsSE9LUUNuL0FDYVhQWnFNYzBnRkFCOHVlYU1kelJ3T2FPQjA1b0FRYzlhWG44S1h2elNHZ1FZRkdNRFByUmpIV2ozTk5qRHB5TzlCQVBTalBOSEhZMGtJVW5CRkdSMW9KejlLUVpvR2dBQm94U2dISE5KN2p0UUFEamtDakJISW81eFM0b1lDRG1qQTZVZW1hVTg4ZDZBUWg0NHBSeHpTVXZmSm9BWG9QV2t4MjZVWko1b0h2UUFkRG1qdGdkNkQ3MG5HTWpyU0FYUE9UU0NsUFdqdGltQW1QV2xIQW80SEFwUjdVZ0VQU2pqcFM4ZDZRVXhDamswM0dlS1hHT2xMOWFCaDFBSU9LT2g0NUlwUjBvSkI0b0JBZXBvNEFveDZVdVI5YUxnTDA1cE04Wm9KNkduRVlHS0FFNjlLTS9sUVBTbHh6UUlBYVRCNlVjTWFkZ0E5YVJRdURqT0tYQkh0UmppbEMweEM0eHpUZ1Bhayt0UEF4aGp4UUFnQkhIZW5jMERnNTYwOFp6azBBR09jK3RQeDJvSFhIclNqTkFDamptbkxncmcwb1VDbEFvQWRqdFNpbFVlOVA3Y0RwUUNBTGhzWnA0SDVVb0JQTk94UUFZenlha3dlQjBvSE5QQTRvQVFBZDZrMjBBWUFPYWtBUGJta0FnSGI5S2V2UDVkS01mOEExcWxDNEZOTUJGQkZQQTNjbnJSNzFJQjB4NjBBei8vVy9ndmRzOTZnWTQ0cFdiamsxWFp4bW1Bck5qb2FybGllYUNjbkZRbHVhQmlrODFBeEdmNTBNUU9QV29zNW9CaWJ2U295U1RtZ2tqaW1ad2VLQVlaelIxRkZIVHJRQXYwcEFPL1dqclI5ZU1VQUhHS01VREdlS01VQWd6K2RIOHFPTTgwVUFISFE4VWRxV2djSEZBQ1VZbyt0SFhwMU5OQUxRS1RBemlsQXowcEEwQS96K05CeDFvNVBOSjI0b3VBZHVPS1hqNjBoSGZwUnlCVEFENlVjZDZPS1g2Y1VnRTVvSHJSNzB1YUFBRE5HTzFBNjgwaDlLQmk4ZHFCNkNnKzlHTTBNUWRldEI5cU9DYVRPS0xqc0tja1ZxNkhwYmEzclZub3lQNVRYYzhjSVlqTzN6R0M1eDdacko0RmRiNERIL0ZkYUtmOEFwL3R2L1JxMWppSk9OT1VsdlpsMFlwelNaK3RQL0JTYi9nako4WXYrQ2RuZ0hSZmlyZStJTGZ4cDRkMUs2YXh1N3V6dEh0allYQkc2QlprYVNUS1RBTUZjRUFNdTA0TEpuOGF2clgraHgrMlYrMDk4TDlSL2J6aS80SmwvdFB4UlRmRHI0emVBcktPMGtrMnFiWFc1TlExR0tQRGtmSzF3SW9oRTV5WTdpS0VxQnVZMS9EWisyZjhBc29mRUQ5aW45b3p4RCt6NThSRUx6NlJOdnM3d0tWanZyR1hMVzExSDErV1JQdkFFN0hESVR1VTEvTTMwY3ZGdk04N3dVTUZ4RzE5YWxCVllTU1NWV2xKMnVra2x6UWw3c2trdnN2Vzl6OWc4V2VCc0psMklsaU1wdjdGUzVKSzdiaE5LOW5lN3RKYXArcTZIdkg3WHYvQk83WHYyU3YyYi9nNyswVnFmaWUzMXVENHZhVkZxa0ZsRmF0Qzlpc3RuYlhZamVScEhFcEF1UXVRcThybkhQSDV4Y0RpdjZhUCtDelgvQUNqSC9ZcVAvVW8ybi9wbTB1dmtYOWpqL2dsQjRNK0lQN09FbjdiWDdiM3hDaStGUHdxa1pvOU9tRVhuYWhxTHE3Umt3eEVOaFdLT0lsU09hV1hheFdNSUF6ZS93SjR0d3A4THd6amlHdGVVcXRXbkhsamVVbXFzNHdoR0VGZVV1V0swU2IwYmZWbmw4UzhEU25uTXNCbFVQZFVJU2QzWlJUaEZ5bEtVblpLNzZ2clpING84WTRvNkhpdjZOdkRQL0JLYi9nbmIrMmZvMnNhTC93QUUxZmpuZjZyNDUwbTJOekhvSGkyMyt6TmRxaHd4amsreTJqaEQxM3h4VENQS2lUYnUzRDVTL3dDQ2QzL0JNcnczKzJSNG4rTC9BTUR2aUpxdXArRnZpYjhQdFBtdU5OMG1OSVNseGMyN1MyMDhOeUhCWmZKdXZJUnRqY2lROGdnRS9TVS9HN0lmcW1JeGRlVTZmc09YMmtKMDV3cVFVMmxHVGhKSnVMYitKWFZyNjZIa3k4T3N6K3NVcUZOUm43Vy9MS01veWpKeFYybEpPMS9KMmZrZmp0MTVOS1I2MTlWL3NUZnMwWGY3VzM3V1hnbjltMlNhYXhUeEpxUXQ3eWVKUVpvTFdGSG51cEZWaGpla01Ua2JoaklHUml2cFAvZ3E3K3dCb24vQlBQNC82VDhOUEJtc1hYaUh3OXIyaVFhdlk2aGRyR0hjdkxMRExIbUlCRHRNWVlZL2hkYStzeFBIZVdVczZwY1BWS24rMFZJT3BHTm5yRk5xOTl1ajA4bjJQRHBjTTR5ZVhUeldNZjNVWktMZm05ZHQrcSs5SDVnWlA2MHZVZTVyOVQvakgrd1A4UGZnbC93VE8rSFg3WlhpN1hyOWZHdnhKMUtTSFQ5REN4QzJTeFI1ejlwWWxmTWJNVVViY05qTXllOWZsaHlQYXZRNGQ0bndlYTA2bGJCTnVNSnpwdDJhWE5COHNyZDBtbXJyUjIwT1hOc21yNEtVS2VJVm5LTVpMVytrbGRYN08ydHR6OUxQaGgvd1RnMS80bWY4RTdQR24vQlFpMzhWMjlwWStEZFJiVDMwVnJWM2xuS3ZhSnZXY1NCVkgrbGc0S0g3cDllUHpTNXpYOVJQN0tmL0FDclcvSERIL1F5Uy93RG8vUjYvbDI2WnI0VHd1NHB4MlpZck5xV01uektoaVpVNGFKV2dvUWFXaTExazlYZG4wdkdlU1liQjBjRFBEeHM2bEdNNWF2V1RsSlgxMjBTMFdnRFBham5OZHg4TlBoMTR5K0wvQU1RdEUrRnZ3OHNYMUxYZkVGNURZV050SGpNczg3aEVYSndGR1RsbUpBVVpKSUFKcitnRHhoL3dTMy80Smwvc1p3NmI0SC80S0lmSHZVYlB4L2UycVQzV2orRXJVM0NXSmxHVk1yL1pMeHlnQkRBeUpBOGkvTWlZNXIzK0x2RWJMY21yVThMaU9lZGFvbTQwNmNKVkp0TGVYTEZOcUs3dXk4enpNaTRUeGVZUW5XcGNzYWNiSnluSlFpbTlsZVRXcjdMVS9uSCt0THdlYS9abjl1TC9BSUpUNkY4RWZnSnAvd0MyZCt5TjQ4ZytLbndodm1qaW4xQkVFVjVwOGtyK1duMmlOZUNubUZZMkpFY2tjakJIaUhVK1ZmOEFCT2YvQUlKdkwrMmpaZUxQaTE4VXZGMXY4UHZoZDhQNFZuMTNYWjBXVjl4QmZ5SVVaa0c3eTFKWnlUdHlnQ096QmE1S1BpemtNOG5ubm50clVZUGxsZU1sSlR1bHlPRnVmbnUwdVhsdTdxMmpONm5CR1p4eDhjdGRQOTVKWFdxNVhHMStaU3Z5OHRrM2U5ajh1aDJwYS9wVStHZi9BQVQ2L3dDQ0hYN1NuajJENEEvczkvSHp4Y1BHK283b2RObTFPelVXRjFPRkxiWTFsMDZ6M0hBTzFEY0lYUENGaVJYNHUvRUg5alA0eitCdjJ3NzM5aUsxdFUxYnhuQnJpYUhiTGJFaUs1bG1LK1RLck9GS3hQRzZ5bG5BQ0lTV3dBYXo0YThWOHF6S3ZWd3RwMGFsT0h0SEd0VGxTZnM5dWRjNlY0MzBiNlBleFdjY0VZM0NVNFY3eHFRbExsVGhKVFhOL0w3cjM3THIwdWZKZzRITmZvYit5Si93VDkxMzlyTDluejR6Zkg3VFBFMEdpUS9CM1IvN1huczViWnAzdmwrelhkejVhU0xJZ2pPTFFya3EzM2djY2MvcHQ0MC80SmdmOEVyZjJOcHJINGIvQUxmM3g4MWFENGczRnJGTmVhYjRVdERMRFl0TU53TWpDeXZYS0FZSTh3UXlTTGgxakFZVitoWDdNZjdGdmdmOWxmOEE0SjRmdFllTy9najQ5cy9pUDhPUGlGNEN1YnZRTll0MThxY0d6MDdWVXViZTZoeWRrc0psakJ6dEpKSVpFWlNvL0orUGZwQzRQK3kxVnlXVlNFNXpwS25PVkdhcDFFNnNGUGtsT1BMTDNISnJyYTdqdGMrNDRZOEs4UjlkNU13VVpSakdibkdNNHVVR29TY2VaUmxkZTliNTZQYy9uQS9ZRS80Si9hNSszZzNqNU5GOFRRZUhQK0VEMFJ0YWs4KzJhNCswcXUvOTB1MlJOaCtUN3h6MTZWK2VmSjVOZnFqL0FNRXcvd0JnandUKzNOSjhUMDhaNi9xR2gvOEFDRGVIVzFtMyt3TEVmUGtHL3dEZHkrWURoZms3YzgxcC93REJMLzhBNEp3YVQvd1VNMHY0cTJoMVc5c2RjOEY2SkhlNk5hMm5raEwyOW5XNEVNRXpURENJMGtTS1NDTUJpU2EvUnNiNGlZTEs4WG1kZk1zWGVsaC9ZM2p5VzlsN1JXWHZMNCtkdE4veWJiSHlXSDRVeEdNb1lPbmhLSHYxZmFXZk5mbjVkZmgrenlwVy92SDVOY1VaenpYOURHbS9zRi84RVlmaFpyY2Z3Ty9hVC9hTTFlZjRpUlNpMDFHNDhQV3VOQ3NMd2tCNFh1SHNibFpGamNsR2s4OUFwQk1naUlLajg4LytDbFg3QUhpZi9nbmw4ZkkvaGRmYXN2aUhRZFpzbDFUUk5WUlBMKzBXanV5YlpFRE1xeXhzaERiV0lJS3VNQmdCMzhPZUxlVVpuajQ1ZFJWU0U1cHloN1NuT21xa1ZhN3B1VVVwSlhUNzJkN1dPWE51QnNmZzhNOFhVY1pSaTBwY3M0eWNHOWxKSnUyMXZYVGMvUFB2azBIaXYzOCtEWC9CSi84QVppK0Qvd0N6dG9QN1RYL0JVMzRtM2Z3NXNmR1VhejZENGYwWkZtMVdlM2VOWlVra0hrWGJCbVZsTElzQkVRWlBOa1IyMkw3Nyt6Ny9BTUVTL3dCakg5c3J4dlorTC8yUi9qUGZlS1BodEVzOEd0ckxCSGJhN3BWM3NFbG9KSVo0WVJKRE5oa0xpRlBtWDVONjdpbnorWi9TRDRid2thdGFyS2ZzYWJhZFZVcWpwT1VkNHFvbzhybGRXVm5adlJOdlE5WEIrRnViMTNDbkJSOXBPelVIT0tuWjdOd3ZkTHI1TFY2SDh3MUhYbXVvOGI2RkQ0VzhhYXY0WXRaR2tqMDY5dUxWSGZHNWxoa1pBVGp1UU1tdVhBd0svYXFWVlRncHgyWitlVGc0eWNXS01IbjBvOXpSbk5BSTROYUUyRnljVWJja1lwY2tqT0tCelFJRGpvYVVjOXVLUWNjZGFYK0toalFIYUR6UzRIZW03UjFQZWhkeHBpSEFkYU9ldEo5S2Zqak5JQTk2WEhla0k0eWFlTWRhTERBQTlEejcwNFlIRkwyNHBRT090REVKZy94ZEtmam5pazUrN1QrYUdOQUJrNXB3QUdLVGlwQmpuSFdnQUdlOU9IdFFBUnlLZU9hQXVBR2VLZHdPYVVERlBBelRZQ2luWTQ0cFZBQnB5L25TWUJnbjJwNDY0TkFHZUJVbU8xQUNBREdHNlZKakFwQURrWnArM29vcGdBNTZWTGpqRklGUGFwQUJta0FnSFROU2dBRFBhaGFjQngvT2dMZ00xSmpQNFVEamcxSUI2MEFmLzlmK0NGbXhVRE1Cd2FWbVByVUxFOUtZd0xWQXpjNUZLelk2VkR1RzdyUUFNU000cUluT2UxQk9hYmtkS0FFNmZTanAwb3BmclFJVHZ6U1V1ZU1kcU1VQUx5S01aOXFUSElvNjhpZ1l1ZWFiNzBwNE9CelI3bm1oZ0hUbkZLYVRCNlV2ZWdZYy9Ta280b29FTHoxRkpSUnlUUU1DTVVZN1U0ZTlOcENURHFhQlM0OU9hVGdVd0ZPY1VsSGJtakhyUUF2WG1rOTZQcFIwcEFIdFMwaEo2R2xQV21BblRwU24yb3orbEhQU2dCQm5wU25OSjdVb09EUUFDZ0huUHJSbWdjME1BNkhtdXQ4Qi93REk4YUwvQU5mOXYvNk5XdVNQcFhRK0ViNjEwenhWcG1wMzdlWEJiWGNFc2pZSndpT3JNY0FFbkFIUWMxaGlvdDBwSmRtYVVXdWROOXoraUgvZzV6dWJteS9iOThHWGxuSTBNMFBnUFQzUjBKVmxaZFYxUWdxUnlDRHlDSzlqOFkyOXQvd1hCLzRKdFIvRVBTNDB1ZjJpUGdYYitUcUVTQWZhTmEwN2FXTEFEbDJ1RVF5UmdBNHVvNUVWVldZRS9BLy9BQVhkL2EzL0FHZS8yelAydC9EbnhPL1pzOFFmOEpKb2RoNFF0TkxudWZzbDNaN0x1Sy92NTNqOHU4aGdrT0k1bzIzQlNwM1lCeUNCOFNmc0FmdG0rTnYyRWYybXRDK1BQaFB6TGl5aGI3SnJPbnEyMWI3VEptWDdSQWVjYmhnU1JFOExLaU1jZ0VIK1VPRnZEck02bkFlVllqQzAzU3pIQng1NmFrbkYzMTU2VTA3TlJxUjkxcDJzN1BvZnQyYzhWNE9QRXVOcFZwS2VFcnZsazR1NnRweXpqYTZ2QjZyNXJxZnN2L3dXWkJYL0FJSmovc1ZnOVI0UnRmOEEwemFYVm4vZ3Y1ZlhuaHo5bm45bGY0YWVFWkdUd1pENFVlZXpXTTdZcHBZYld3aWpka0hCYU9GeHRQSkhtdDZuUE5mOEY0LzI5djJPZjJ4L2gxOEt2RGY3S1hpTmRZSGhlZlVEZDJpYWRlMkMyY00wTnNrQ0FYVnZCR1FQTFpRc1JZTHQ3REdlVC9aLy9iNC9ZcS9hdy9ZdjBQOEFZUi80S2NTNm5vTCtCd284TCtOZE9qa3VwYmVPTUdPR0tXT0tLV1FlVkVSRHQ4cVNPV0pGM2JKRVJ6OGh3VmttYjRUSnNsei9BQkdCcWY3UFd4TXFsSGxmdFl4clNxS00xQnBPVGhkT3lWM0YzaWozdUljeHdGZk1NeHl1bGlZZnZhZEZRcWN5NUc2YWkzRnlWMHVhejFic21yTm41bS84RXY4QXhKNHY4Sy84RkR2Z3pxWGdtU1NPOGw4VzZaWnllV3hVdGEzYzYyOTJyRWZ3dGJ5U0JoL2RKNHI5eVBqSDhkZkR2N0ovL0J5dE40czB5NFcyMHJ4RGRhVG8rdW9NSkVuOXM2WGF3c3prZndwTTBOMDUvdkE1cnpmNEUrUGYrQ01mL0JMM3hCYy90RC9ERHgxcS93QWQvaVRwOXZJTkFzbHNackMwdFh1RWFQekRKTEFzU3Y1YmxIa0x5c2lsdGtPOGl2NThQam44Y2ZIL0FPMEw4YXZFWHg2K0lWMlpkZThSNmhKcUU4aUVxSTJZL0pIRnpsVWhRTEhHTS9LaXFPMWZveXlGOFlaL2lzZkxEVHBZUjRXZUg1cWtIVGxVbFVrcFhqQ1NVdVdDV2ttbDd6OTNacytUZVpMSWNybzRaVll6cnF0R3JhRWxKUlVVMXJKWFY1TjZwTjZMVS9wNytBbjdQMXAreEgvd1U0L2F6L2FRdjdWWTlHK0VQaHZWZkVXamdyKzdFL2lHUDdYWVJJVHdSNVhuMjRIOTRZSjROZkpIN1NmaDN4UCszSC93U1UvWnQrTEdoaHRVOFgrRC9FMXg4T0x3NUxPelh6aGJIekc1SkFTRzFBenlHbTQ2NXIzYjl2Ny9BSUt1L3N0L0gvOEE0SndONGQrRytyK2I4WmZpUFllR3RNOGEycVdWNUEwY2VrbVM2bVkzRWtDVzBpaTR6R3ZseXN6SktCamFHMitKL3dEQkVUOXZyOWtuOW5ENGNlT2ZneisybHJQOWxhRkpybWplS3ZEK2JLOHZCL2FsaEo1anNCWnd6TWpxMXRhTXBZS3Aya0U5cS9MY3Z5dmlXbmxiNHV4R0RxUEc0YXBSZ29jc25PZE9sU2RHYmlyWGNaeXExSnEyalNUdWZhWXJHNVJQRy8yRlJ4RVZoNjBLa25LNjVZeW5QMmtVM2V5Y1l3aEYzNnV4NTEvd1gzK0llaDZUOGUvQW43R1BnU2JkNGUrQ0hoU3cwYU9NZEJkM0VFVHlIQTR6OW1qdFFlcERCc24wL0JiNlY3TiswVDhZOWIvYUcrUFBqRDQ1K0l0d3UvRmVyM2Vwc2pIUGxMY1NzNlJEL1ppUXFpK2dVVjQxejFGZjF4NGFjTHZKY2h3dVdUZDV3aXVaOTV2M3B2NXpjbjh6OEw0dnpwWmhtZGJHUitHVXZkOG9yU0srVVVrZjFFZnNxZjhBS3RiOGNQOEFzWkpQL1IrajEvTHNlZWxmMHdmOEU0djJyZjhBZ25YYWY4RXQvR2Y3RC83WmZ4RXZQQnMvaTN4QmNYVXE2ZnAxL2MzSzJtTEdTS1NPV0d4dTdjRnBMWXFWYkxZQjRHUWE0TC9obVQvZzNHNmY4TkdlT1A4QXdWM2Yvd0F6OWZoZkJmRjArSHN6emlqanNEaVplMXhNNXhsREQxWnhjWENDVFVveHM5WXMvU3VJY2lqbXVEd0ZURFltaXVTakdMVXFzSXROU2s3Tk4zNm84ZS80TjR0SDhPNm4vd0FGTmZEbHhybTN6N0hSOVd1TEVNQWMzUDJZeG5HZWhFTHlrSDJyODdQMjcvRW5pN3hkKzJ0OFdkZDhkeVNQcTBuaTNXSTdnU01XTWZrM2tzU1JBbitHSkVXTkIwQ3FBT0JYMmg4Vi9IbjdGUDdCZjdSUHd3K1Avd0R3UzQrSTJ0ZVBiL1JMbTV1dFlYVzdlYTFWRVh5bzF0aDVsaFlsb3J1Q1M0amwyaHlCM1U0ejl6L0hYV2YrQ0puL0FBVWk4WUQ5cFB4aDhSZFkrQnZqbldZMG44UmFUTHA4MTdienp4S0ZlU040b0hoTXJLdU42U0taZUhhRVNGOCtqTFA2dUQ0bVhGZFhCMTVZYkVVRlQwcFRkU2xLblVtN1RwSmUwakdhZDArVjZwWDBhWnhySzRZakoza2NNUlRWYWxVYy9qaW9UVW94VjR6dnl1VWJXYXV0RytxWmIvNElzMzE3NG4vNEp1L3RpZkQvQU1jU01mQ1ZuNGJlOWg4dzdvNGJxYlROUiswU3hxZU40VzJ0MnlPY29udGo0Ky9ZQS9ZNCtObnh3L1pLOGRmRVA0bC9HT1g0UGZzNjJWNEJyMGtqelR3YWplSjVPVld3amtqV1pnd3QwRE1TelNGRWpTUmdWSHJuN1Z2L0FBVUEvWSsrQTM3RjkzL3dUeC80Sm1ycVdvYU40a2tFL2lqeGZxS1NXOCtvQnRvbGlTT1NPS1FtWlkwamNtT0tOSVFZMVJpN01OUDlnWDlzSDlpTDRqLzhFOWZFWC9CTlA5dC9YYi93TFozR3FOcWVrK0lMT0NTYVBMU3BjS3NnaGlsS3ZITWpaOHhDanh2dERJeWcxOGZqcUdmMDhKbVBFT0V3czZjY1ZpYU11WDJhbldwMFlSakNWYU5KcVg3eHRjeWk0dVVmaWNibnZZYXBsazYrRnl1dlhqTjBhTlJYNTNHRXB5YmtxYm1tdmNTZG0wMG50YzlFL1lXc2YrQ0xud24vQUd3dmh4Wi9DTFZmaUI4VGZHOTE0aHNiUFNMdTl0N2ZUOUd0N3VhWlk0cnQ0aXNOMFJFVzNxcDNna0RLOTYreXZoWnBuaDdVUCtEb2Z4eFByVzM3Ulo2YVpyRU1BYzNIL0NQMlVaeG5vUkM4cHlPZUsrRVBnaDRxL3dDQ01uL0JPRDR2Nkg4YWZCbmpqWGZqcDR3MHkvZ1MwRWVudnArbWFYSEpKc3VMNWhMRXZuelF3TTdRckc4Z01nSENFaVJPSS80S0dmdGgvcy9mRHovZ3BSNFovd0NDaVA3Q1hqOCtNdFkxR2FEVWRYc0d0Ym0wZ3RWdHJTMnNSYW1TYUtOblM5dDFsV1ZRQzBlU0RnN2ErWnh2RE9OemZPc1ZTd2tjVktHSndWYWpDclhoSkoxSEtNa211V1BzNE5MZVVZS1RiVWJ1MS9adytjWWZBNWZSblhkRlNwWWluVWxDbEpPMExOWHZkODhrM3NwU3NyWHNmay8rM0o0ZzhWK0tQMnpmaXRyZmpoM2ZWWmZGdXNMY0NRa2xHanZKWXhIMDRXTlZDS09BRkFBNHI5elArQ1BQaVB4YmQvOEFCS2Y5c3J3cGZQSTJoMlBocTl1ck5DVHNXNnVkSHYwdXRvNkFsSUxmZGoycXY4ZWRRLzRJaWY4QUJSWHhjLzdUbml2NGxhejhFL0dtcnhSM1BpUFIzMDZlOGhsdUVBV1NTTm80SkkybFlBRGRGSis4d0hhRU9YejdqNFMvNEtDLzhFby9nVCt3aDhhdjJJZjJjTlkxR3p0Yjd3cnFFR2xhdHF0bGVQZGVKdGIxU3h1WUpuSWl0aXR1a2V5MWlWcHhicjh4QVFLaGR2cE9PdUo4WG0zRE9HeVRDNVZYVmVFOFB6cDBaS05QMmRTSE00eXR5eldsbHlOKzQzSjJTWjVIRFdUVU1EbkZiTWEyTnBPbktOWGxmdEZlZk5HVms0M3ZGNjNmTmIzckpYYlI4MC84RzhQK3YvYUgvd0N4RWY4QW5OV3ovd0FHOGV2YXA0VjhIZnROZUtORGxhRzkwM3daRmRXOGlraGtsaGp2blJnUnlDR0FJeFh5cC93Um8vYTcvWjQvWlNsK016L0gzeEQvQUdBUEZuaE45TTByL1JMdTYrMFhSOHpFZitpd3k3UHZENXBOcSs5Ty93Q0NRZjdYWDdQUDdMdmdMNC9hTDhkUEVIOWhYWGpid24vWm1pcDlrdTdyN1RkZVZkcjVlYldHVVI4eW9OMHBSZWV2QngwZUp2Q3VZNG4vQUZralN3MDVxcThIeVdoSjg2aTQ4L0xwNzNMcnpXdmJyWXk0UHp2Q1VWbERuV2pGdytzYzE1SmN0MCtXK3VsK2w5K2grSnJ5UExJMGtoTE14SkpKeVNUMUpOZjFILzhBQlk3Uy9EL2lEVmYyS3JQeGdRYkhVZkR0aEJmeVNEZHV0M2JUUkx1ejFHMW1QUHFhL2x0NXpYN2JmOEZkUDJ2djJmUDJuUEFIN1Btai9BYnhFZGF2UEEzaFQremRaVVd0M2FtMHV4RlpxRURYTU1Ra0lhSi9taUxyeDE1R2YxenhCeVhGWW5pYkpxbENFdVNQMWhTa2syb2MxRnFMYjJWM3RlMTNvajRYaFhNS05ISjh3aFZrdVoreXNtOVpXcVhkbHU5TjdiSTlrLzRPV3RWOFR6ZnQ4YU5vR3FGMDByVC9BQWpZZjJiRnlJbGprdUxyelhSZUZCTWlsU1IxQ0tPd0EzditEWS9VL0ZzSDdkSGlqU2RJYVE2VGMrRHJ1VFVFR2ZMekZlV1lnYzl0NnM3S3ZmYXo0NzEwV28vdHUvOEFCT1gvQUlLYy9BM3dmNE8vNEtTNm5yWHc4K0ozZ3EyWFQ0UEYybFFQZHhhaEZzQUwzQ3h3WERZa2NlWkpHMFEyU1phT1ZWZDBINlYvOEVlZkhYL0JQajRYL3RBM2Y3TC9BUHdUNC90Znh0THFPbVhHdGVMUEcydHd2QVRiMlJqaHRyUzFqYUszWkU4KzQzRXRDbzdGcFNWTWY4M2NWWnpqTXI4TTYvQ21MeStxcTlHazRTbHlQMk5vdS90RlYrQjNYdkpYNTNOcGN2VS9XOGt5L0Q0M2pDbm5kREZRZE9jMUpMbS9lWGF0eU9IeEt6MGIrSGwxdWZ4Zi9GOEQvaGJQaWduL0FLQzk5LzZQZXZPczVCcnMvaUxxMW5yL0FNUWRkMTNUanV0NzNVYm1lSnZWSkpXWlQrSUlyanVuV3Y3dnkrTGpRZ3BkbCtSL05HS2tuVmsxM1lneDEvS2pGT0hYbWpnL2pYWVlEZVRUeDFwTVo0TktRVFF4aVlKbzk2Y09uRkFPS0JDWTllYVVjbm1nRDFwY2NrQ2dZY2lsQXhRQUJ4VHVNZkwzb0ZjRnkzV25ZRktldUtVWXpta0FiVDllOU9IdFM0OUtCbjBxZ0g3ZWVhY01aR0tUSEZQQXp4MHBXSFlBQ2VPdE9BejA0cFJ4eWFmakhXZ1FnVWNVNGNVNERKcFFPOU1HS0Fha0EvT2t4eGtVNERubm1wQVZRVHdLZUJSZ21wQnp4aklwZ0pqSnA0R0tCZ1ZJQVFNVVhBUlJVbTMyelFPblNwQUtMZ0dQWHZUd0NhUUQxNHFUb05vb1FNY0J4VDhacEFNOFZJb0hlbFlBWHJUeC9zbnBTalBTbmhlT0tZSC8wUDRGR2JQT2FqWnVEbWtjOGZTb21QZW1ob2F4NXFNbko1cFNjRHBURGlnQk1rOENqSGFnOGNDa3pnVUlCZnJTNDcrbEo2VXZVVUFoRDBvN1VjR2x6U0VKbWxJd2VLVEF6UlRHR0tBRDFvN1VkcUFZZHVPOU94bW01enhSeDBvQkJuclMvclFQV2pOQUJuRkJ3UGVremptZ1pIV2dBTkhXbDV6Z1VuVTgwWEJoL3RVY0RyUyt0R1JRQW1PTTBZRk9QRk42Y0drQWQrS1VlMUlPdEtmYW1BbldsOWhSMXBRZU1VWEFiUzlUUjlhWG42MEFKN21qcHpRYzlhT2d6UUZnTkhQYWs2MHZKelFBRG5nVUNqMk5HU2VLQXNHYzlhTTlxQ01jZEtNOXpRQUFnR2pKNlVIQTZVZldoaURwelFNWndPOUI1L0NsNmMwRFFoOVQrVkdPL3BTNUhXazdkYzVvUUJTOFlwT25TZ0hQR0tBRHJTMFkvaXBPZnBRQUFBSEJvenhRUVRTNFBhaGhjTSt0R1NPYU9jWXhSMzVGRmhDRTVvL1dsSm83ZWxBeEtYa0dpak9hQUZ3S09ocE00b0hJb0FNK3RMMU5BOUJTa0RyUUNQNkhkVi80S0EvOEU2UDI5L2hONFI4S2Y4RkovRGZpZlFQSG5nM1QwMHlIeFo0UmFGL3RkdW1PWjQ1L013ekViMlV3eWdPWFpIUU9VcW5xSC9CUjc5aFQ5aXo0QWVMZmcxL3dTKzhLK0pENHE4Y1d6MkdwK00vRkx3cGR3V3hRb1Bzb2dZNVlCbktBUndLamtTSHpDQUIvUGJqMHBhL0dJK0JPVEsxQnpxdkRxWE9xRHFQMk4rYm0rSGZsNXRlUnR4djlteCtndnhMekIzcXFNRlZhNWZhY2k5cGExdCs5dE9hM05icUhUZzBvOXFUT01ZcFJ4WDdRajgrUW5HZWFPY1pwZHVCeUtEMEhOSzRCeVRTajNvOXZTakpIUFNpK2cyZ0hGR0QxTkZPNmpKL0tpNGd4Z0NsNTZucFFCeGo4S2N2WDNGSUFCN0NuZ1o0RkpqbkpwLzhBczA3QllBT09hVURKcFFhVmZXZ0JmbFB0U2dBOU9CU2pQOFZQeGlnQUlIQlBOUHhqR2FNRHFlbE9INWU5RndBam1uNG9BendhZnoxb0FRRG1wQUNPbmVrSE9ha0hyNjBCNmlBWjY4VklBZnlvQTVOUEF4MDcwV0FBdk5TQVVnQUhBcVFEcUJRQURqcHhUeDE1L0dnQ3BBTzlEQUJnMDRBWndLQU1WSUFLQUhLQjNGTzY5S09sU0tLTGdBWG5JcVFBZmpRRndLa0hVK2xGd0VVVklCelFxZ2ZqVWdHTWV0Q1lqLy9SL2dLWmdUaW9pd1AvQU5haGpudlRDZlNtTURrZEtROGRhTW1nOUtBREhjVVk3VVk0elIycEFMampOSVJpZ2pISW9HZnBUQU1EcFJRT21hTW5PYUVBYzVvT0tYcnhRZWFFQWhwUjZDa3gzTktEaWdBUHZTQWNZcFI3MG1NVUFINkNsSkpHY1VuWGlqdG5HS0xBQTYwZDgwdklQTkF3S0JDYzlxVW4xbzdVWU9QV2dmbUI0NHBPOUwxNG83VUFHY1VIMm83ZGFLQUE1NjBuOWFkN1VuWHZRTU9oNHBPY1V2MHBPUlFJQjZVb09LTzFHZU0wQUdQd3BlU01pbW5nNHBUNi9sUUFjOU1VSHY3VXBQWTBuQW9BRFFLTWRxRDcwQUF5S0Q4dEhGSFdpd0M0eDFvNTZVbjBGS2VuTklCT2gvd3AzdFRlMUh0MnBnS2MwZEJrVWNVWUlvQU9uSFdqQnhSeGpJNHBQb1B4b1lDaWpBQjVwT25RMHBwQUllS1h0MG83ODBkT0tkd3VKemswcEdSazBjRG1nanRRQUQyb3pnODlxTzNGQTZZcEFIWHJSZ0hpai9kbzY4SHJUQVQwSnBlVDBvNFB2U2pyeFFBZ0hhbEdNOERwUzhFVW1SbWdBQjRwUWNuMnBLZms5U2FBR25KNDY1bzVBcGNZcFJnbWhBME40NUZPeHo2Wm94M0ZIU2dRRWM0TkhUbWdBWndmeXB6QWcvU2dZZFQ3MDVlbEE1NXAyUGxwQ0VBNzB1T2FCeVAwcDR5R3pWTXJZQU8xT0FveWVCVHdLUWd4Nm5GT0FILzFxQU1uQXB3QTZtZ0VBR1JUd3VmcFJ0L1NuQmUvNVVBa0xqODZjQmptbHdPOU9DNUZBQzg1NEZPWHJuRktvNTU3MDVRU2FBWVl6VWlyMkhTa1VHcE1aNmNDZ0JSMDVwUU93cFZYQnozcVFnOUthQUJVZ1gwNHBBdVI3MDRERklCd3ptbnFDZW9wUjc5cWNGQjVvVEFGQS84QXIxSUFjVUJSMXFRQnM1RkFBRndlS2VvOUtVRG5nMDhMMElvQ3dBRDhxZU9PdEdNODFLQno2bWtBbUtrQUFPUlFCeHgwcVJSVEEvL1MvZ0M1NTRwS01VZlNtTUtYbkFPZWFUM05GQUJudDBwYVFVdWFBQ2s3NW9ISE5IdlFBdlBOSlM5T2FRNG9BWEg0MERqclJudFFSenhRQW1LWGlqSGZ2U2RxTGlBSGo2VWUvV2ptakhhaTR3b3gzcGVBS0JqR0tCQ2U1bzZVdU1aenpTZTFER0wwRkJPUlNaNXBhQURtanIwcFBxYWR4UUFoR0tYZ2NVMzJwZXRGaEFSbm1qazgwWXBCeDBwREhkZXZGSWZXbDVwTTB3QWV2NlVjWnBNNTRwZUJ4UTJBcDRPVFNjSGlsNmNtbTgwQUxSbnZSUm4wNG9RQWFBTTRwY1lITkE5UlNBT3A1cE04VWZoUm4wb0FVanJRQWFCelNjZGFiUUM1N0drNDZVcEZIT2FBQTU3bWlrT0JSMzk2QkM0eDFwQnp4bWp0eFNtZ0FQVEFIRkxqdUtUQXhSanYwb0FCU0hqbWx5TVpIV2s5d2NVREY2VWNnOFVkNlQ2Q2l3QzV6elI5S1hOSVQ2MEFIUFhGQS9Tam5wUUJRQVlCNTlhY001d1RTREhVOFV2SGFnR0ZKMU5CT0tjRHpUWUFNSDVqelJSMTdVdElBNmRxWE9CU2U0b0FGQU1Pblh0UjFOQVBYSGVuQVVJQTZkS1VlMzUwWU5QVWRxQUV4M05PNjRKNUZHQ1JqOWFjQm1pd0FCNlU0REhTbEdDS2NBT3BvdUZ3SGJKeFM0cHdIdFJqaWhCY2NvMlUvd0NYclNnSHRSaWdRWUdLZmpGS29JR1JUd0FPS0IzRVhGUEE3MG9IRk9IWHBTR0tCVGxGTHQvV25jRHRURUdPMVNZUFU4VW0zaW5nZHp6UUFxZ1l6VW9CcHVLbHdLQUdxQ2VuYXBSMG9BenpVZ0hyUXdFSHZVZ0FvQ2dtbktPNW9BVWV0U0FDZ0RKcVgzTkFDS01VOVFjOWFBRFVnV2dBeDZWSW9QUVVBSDF4VWdCSXhRQUtCbm1wQnp4UW81NXArT01pbllELzAvNEFjOXFDT09LT085SDFwbEFBZUtPbEwxNDcwbWFRZ3dLVUg5YVRIYWw3RDJwc0E3ODgwZzRvbytsQUMrNHBEUVR6bWpPS0FENjBkZWxLUjZVbVBXZ0F3RHlLT3ZTbHhrMGR1YUJDZDZVZWxIVVlvNUJ4UU1NSG9hVDBvUEZISHBRQXA1L0drd1IycGZwUnozTkFoRGoxcFRrWW9PUU1ldElUbWhERDFvNjBZSnlNVTdweURTQmlFN3U5SFRwU2prWnBPNU5NQUhUbWoyTkdRYUFCMm9zQWNnYzBaNDQ3VVk5S0tBRS9HbEFveU90S2NtaGdIT2NVbEZIUTgwQUhmQnBlMkJTVVk0OUtCaTlCUWVtZXRJT3ZGR2FCQzgwZjcxSnppakhybWdBSjlxVUhubWpuRkprZHFQSUxCMDlqUzhVZE9mOEE2MUI1NjhVQmNNWjZVWTcwZHVhVEhGRFloUjZVbzU2MG5GSU9uMG9Hd05IdWFQMW94bmlnQU9jRE5Pd1JTRDFBbzZjOTZBQUFDZ25qbnJRZXRCcEFoZWNldEoxL3dwYzBsTkFCem5CcDJPNXBPS1hqTkNFSFE4MG1NOEhnVWU1cFI2VURGNVBhams1cGNVZTFBQ1k1K2xPenhTVVk0b1FBTWZoUzVJNjBnSEpBb0djVUFLQjNGT0FHTVV1TzUrdExuQjVvQVVVb0dPS1BwVHMwQWhjY2RPbExnWnhRQlR4eFFBZE9sT0FJSE5BVHZTZ1k0b1NBVURQV240Nm1nY2RhY0FTS0FBQWpwMnFUQXp4Ump1YWZnMEFJQmcxSUFNWjcwRDJweWpIQm9DNEJjL1NualBZMEJjKzlQMmtkT2xBQ2tIMXFRQTk2UUtCelVpZzlLR0Z4RjQ3VS9HQUtPK2FrQTlhZGdzQ2pCeFVnWG5QOHFRTDJxUURJNDcwZ0RCQnpUOGYzcUFLbHdPbEZnRUFKUEZTQUE4R2wybk5PMmpyUWhBQnp3S2tDanFLVUFDbmpIYWk0eFF1T2xQQ21oQ01VOEQwb0FGQjdmaFVnQUE0cFF1T3ZGUEM5S0xnd0F6d0JUd3ZOS09sU0RyNlVXQS8vMVA0QWZmcFI5S09jVWRhYUdMakZOR0tYMTRvNUlvUUM4NXpTZXhGR09lS0JRQXZ2U2RPdEgwb3pqcFJmc0lVOWFUTkFOR1BXa1Y1QzV6elJTYzlEU2orZEJJbEdlL3BTOXVhUWRlYUJoMDRGS2VPRFJ6ajFwRGswd1FkdWFYcndhU2xOQUIxbzRGR0QwN1VFZXRBTUR3UHBSK2dvUDUwbU9ldEFDKzRveFFlRDFwUm1oQUptazc5S2NlUGVrNHhRRmd4U3J5YVFkNkIwOXFMZ0o3amluYzR6U1k2VXA5YzhVRFluVGtVdlFjVWc2VWRCUXhDL2xTYzlPbEJwZnIwb0FUcnhTakdNVWNBWkZCd2ZhaTRDRE5MZzlUUUIzcEJucUtBRjZpa0dlTTBHam5PVFFBWVBXbDQ2VW1lMUx3ZWFBREhPS1Ewdk5Cb0VCTkdLTWpOQkdPUlJZQTk2Q1BscEQ5S1hGRmdEclIwQW82ZTlMOVRRTWFBS1hwMDYwbk5CQW9zSVhIUFdqdjZVcHoyNHBNQTlLQmlnREgxb3hnQU5SMG94MVBhZ0xpNEEvcFIzeFM0L0trSnowb1lCZ0U4ODBEajYwdVI2MGZXZ0FHRDFvN1VVdU1uanR6UUNZSGp2UnlhWEhPS1VqSFdnQkI2Q25nVWd6VHhuZ1lvdUFuR1BtcDNiclNBWXAvU2l3QUJrbWxBOVRTNDV6UzdjOTZCaWluWXoyeFFNOUQ2VThEbWdRRHBUOFlvVVlOT0ZGd0ZIRk9BL09rQTQ0cVFEUFRwUUFEMnAvYWtDOFU4REpvUUljQndLY3VjWUhTZ2NmajdVOVJRQVl6MS9HcEFCanBRcSt0UHhnNHhTQUFPL1NwQmpIRklCM1BXcEFPZVR6VEJpQUhxT00xSUJ6VHR1T2xPQXdlbENBYUJucFVxanZtbEFHT2FmZ2pyUURGQXA2cmdldEdPbFBBd2NIdlFJQUtsSHZRQWVnRlBWUWFCZ0Y5cWt4ampGQUFKcDQ2MEFLQUNha0M1T2FSUWFrQ25PZXRBQ2hlY1U4ZTlDajVzNXA0b0M0b0dPdFNBZXRDZ1ZJbzV6UUIvLzFmNEFTS005NlVqTklldE1ZdkdNMGNkUlIwNEZKUUFEMm94MnpSUjcwQUthVHZSajFOS0JtaGdINGlqUEZJUm1qMjYwTUJjOXhRTzFJVDYwZEtCaWprZXRIYkZISFNnMElRcHppa0dlbEp4UjlhQVF1ZldrSEgxcGVuTkhmTkFCbjBwT085THdUUUR6eFFBbWFYTkE5dUtTZ0F6ZzBwOVR6U24xN1UzdlFBdU9hT2xIMEhOS09PS0FFNjBIclNkZXRMMkZBQmpyUjdnMHVjak5KeG1oQmNCbjhLRGlqSE9LTWRxQUZPRHpSZ2Q2TTkvMHBLQURIWW1uZHVhYngxRkwwRkFDY1VwUGNVbVIzcFJqcFFBbnVhV2w1NjVwT2h4UURFSGIzb0p4MHBSbnRSMDVvQVE4OFV2QjYwZFJtZzlmU2dBSHFEelNEaWxHYzVvb1lBYzl4UzRwRG5PYUQwelFBYzVvUEhOSFRpanFQbXBBZ0lBSElvSDZVZGVEU2daTk1RSGtjMGUyYVRnVTRlM2FpNENZSk9lMUwxbzVKeWFYclJZYVl2MG93ZWUrYVRvS0RqdFFBdnJRUUtQclIxb0FBTy9lbDVBOXFCMW9IdjNvQVhiMi9PbENtakFCNDZVN0I3MEFBOUJUaGp0elNBYzVYdlR4ZzhkYUFZTDc5cWYwcE1VNFo3VUF3QTlEMHA0eGpiU3JqQnBSMXoxb3NDRDYwL0JQV2o2ZDZjQlRFQUJIV25oYUJUd3JIMnBXR0pnbXBGV2dBVS90UUNBRG1wQU4zU2tHTVU5Vngxb0FBdllHbnFCMW9VYzhWSUJRQW9YalA1VW9HT2V0THpqSFNuZ0U5S0JnRjRxUURwaWtYZ2ZTbmhjY2ltQW80NTYxSUY1b1gwNzA4REpwQ0FEcDcxSUJrYzBvVVp5S2VvenpRQUtNRGlwQU9QclNZNHlhbDJnQ2dBQ2djQ25qUFE5YUFNYzFLQi8rcWdCQU04bW5xTzlPQXh3ZnBUZ0thOHdCY25uRlNCZVBwUnQ2VklBZUJTQkNxQ0I3VTVjNXdLY285T2FlUFVkNkF1Q2ppcFFvcE1kdWxTQWR2U2hpUC8vVy9nQjl6UysxQnBPQU9hWUJubWpQRkh0UysrS0IzQTBBY2RLQjB4UUIzOUtCQ0hqb0tPYzBneFNuclFVd09UUjJwZXRBQXh6MG9FSFdrNG96M3B3NDY5cUFHbklwZWZ3b1BYSW96Z2NVSUFHVFJ4MW8vU2dBZzBXQVRBNm1sL1drbzYwV0FCN1VaN1VEbnJTKzVvQUFhV2s3ZEtVKzFJQTR6U2RxWHB6aWs0cGlESjlhTVk0QW85cU1aTkF4T2FkejE3VW5YMm9BSFVkcUFESlBTbEgwcE9DYU9EM3hRQ0Qyb05IWGlnQThDZ0F6elJuMG83VW9QNTBYQ3dZQXo3MG5TbDZpakFCeFFBbk9NRG1sOXFUcnpTNTdkS0xDQWlnbjFwT1FhQ2NISW9BS08zMHBUMTVwT085RndGeFNkS1gvQVBYUnoxRkF3Ni9OUnpuSTcwdU1jVWdQUEZBQzg5QlNkOFVZNXlPYVNnQmNER0tNWVBOTG5OR08xSVNFNXhTZ1lIcFJnRGlqdmltUFFVOGlqb001cEJqSE5PK1ltZ1BNRFIzOWFRbWxKd2NkcUFBY1V1ZU9lOUlNOVJ6VGdBQlFBbk5LZWVNVWRPRFFRRGlrQUFZSEg1MDdHQ0FLUGFuQWV0TUF4aW5ER2VhVEFQVG1uam5paXdCMzRwM1U4VUFIcFRsQkZBQU05U0tmak5BOWFVZE9LQUY0NmY1NHAvV2djZDZjQVA4QTY5QUNnZkxpbkQ3dkZBR1QwcVRIQW9BYUFLZXVNR2xHY2NVL0hORndGNjlCbWxBQUZManRUc1VBS295S2tBSjR4U0RqZ2NVL0JHZTlBQ3J6L0tuOXVhWEdhY0FNMEFBR2VLbEMwaWptbmpGQVdGQUlwNmpJOWFBT21LZmoxNjB3REE2MUxpa1ZjR3BSeU9menBNQkFBYWVxanRTZ1o2MDRLRDh4b1NBVlZ5UHJUd3VlblNsVWJqMHFVRDA0b0FRQW1wQmp2U3IrbFBDNE9jVUFBSHBVZ0I2MEJlT1B6cVRrZGFZQ0tPT2FrQXBRdWV0U0RJcE1BQS9PbmhlY1VxZ2RNVTlRQnppaTRNVUwwR0tjcW1sWGluNElwQWovMS80QWUxTDM5cU9EMXBNMHdESGFsOTZUR0R4elM5QlJZWUhGSU9sTFNIMm9CQitsSGVsb3dCd2FRQ0VkNlByU25JTkhGTUJCanZTbmswQ2srbENBTSsxR0tVajFvK2xGZ0U5elNrWm9IQjVwQ09jVWdGQnh5YU1IdFJ3ZWxHTWRLWUJuRkI5YU9LRHU3MEFBNG8rbEtPRGlqM0hGSUJEeHpSMTVwU2NVZ1BIdlRBWGpPS09oOVRTZGNFVVl4eUtHZ0ZJelNldnBSMm94K05BQnlCazBmU2pyeXhvSFRpZ0EvR2pQYzBjOXFVZGV0Q0FURkdlY1V1Qm4zcE9UeFFBdk9PbEo3aWc0N2Mwb0hZMFdBUFhITklPZWV0S01pa0pvQU8yYVhGQTZab1BvS0JDWnBUd0tEeHppaytsQUM5dWFVVUFaNjBkT2xBeHVld0ZLY2RCUnpSMjZVQUwzNW81elI3MG1NMEFoZVIwbzRQdFJnbnFhZGs5cUFHNHgwcGNaYWxPTVlwQWYwb0VLTTR3S1B4NU5JQnhTNTllMURHdzcwdmZHS0I2VVlIYWdBVUxSalBBb1B0Umozb0FjTVV1T3dvQTU0eFRnUHlvWWdDaW5kcU5wSEJwd3dhQm9BdUtkajFvSHNLY0FCNzBCWVFaWGcwOERvS0JqUE5PVURwUmNCY0gwcDJEMHBRT01Vb29BVURIVGpOT0dCUUFPcHAvTkFBQmppbmdEb2VhQU1qQXFUR2VsSG9BbU04bnZVbVB6b0djMDhjRDFvQVFmU3BBTWppbHgzcHdIUEhlaXdoZW1LZmpIV2dBOXhUeHV6bkZCVnhCbXBWSEdLUURJNHFRWUZCSUJmWDhLa0FHQmptbEhYbm1uQWR6UU1OdkhKcVFBRS9OeFNyeHhUaDcwQUtxNTlxZUJRb1BGU2hlT2FBUWlwam1wTnVPdENqb2FrQzlxTGdLQms1eGluQVlwZHZQSE5TQVlvQ3dBQURPZUtlQUQxb0FQWFBXcFFBUlJjQUE0NjA4QWQ2VUx4aW5xTUVHZ0FBelVnR0JpZ0QycVJRUDYwaEFvOUtrQzV4L1dnRHRUMUdCbW1NVURqNlZJcTROQUhyVWlqOGFRSS8vUS9nQklwYzBESTVvTk93dzRwT2xBcGZRQ2dBNEp3YVFldEwxNE5IMDRwQUppbE9SelNEcFJ4VEFEbWp2elFBY1lwY0UwQUdldWFRNG9vNzVOQ0VMbjBwZTNOTjk2T25XbllCUnhSMnhSMU9LTURxYVF3d2FQODVwRGlsQjcwV0JDQ2xQSm96MW81b0FUdFM0eDdVVWNBVU1Bem1nRUNqanRTNTRvQVRpbDdVVWc5cUFGK2xHVFIyL3hwdkg1MENIRDE5S01uSFhtampPS1FlZ29HSFBwbWx4emlrNDZkVFM4NHpRQWQ4VURwU1VaUFdnQmNlMUx6MW83NU5KMnpRSVFZOWNVdlRwU2UxS005RFNHSFErdEpqQnBlVFNmalRzQXVSbWp0UjBIRkJHT2ZTanlBUVo3VXRIUFNnKzlJQTU3VXZBT0tRSEF6UzRQU21BZEtRajE0cGVPbEdCM3BBTGdkNlhCNlp6U1k2ZEtUNjA3QmNka2RNVXBwS1RyeDZVOUF1TGdaK2xMa2RxTS9oUU0rdUtRQ25uM29BeHdLVFBQSFdsOTZHRmc2OEE5S2R4U2RhZU1EaWdCQVAxcCtEMUl4UUJnK3RPeHp6UmNBeGtZelRzQ2pxTWswNEQ4cUFEZzhVNFlvei9kcC9VMFdBQXBQV25BWkZJT1JrMUlCNjBNQTJnakgvMTZjQmc0b0hwaW5xQ3c2MFhBQVAwNzA4REpwUjllbE9BeGp0U0FBdmFwRkJ6d0tBdVByNjFJRkZNYUV3ZW9wNEhUMm8yOXFjTTlxQk1VRG1uZ2VsR09NVklGR2VLQUVDa1ZLQjI3R2tISFFWSW85YUxBeEFNbi9PYWtBNXdmenBlM0E2MDhEQjU2VUFLQndLY0ZGS3E1QkFxVEFKeWFBc05WVGpGU2dkcUFLa0F5TUNnQkFPZXRTcVBYaWhRZXRQQzQ2VURGWE9hZnRwVkdhY0FRT2FCZVl1QnU0cVZRZTNKTkdCamlwUXVUUUExVnlUbXBBQ0RTS004QVZLQXZmdFNCZ0IycVFjOGVsSUJrMUlCMHp6VEVLcWtkNmsya2lnTG5wVWdYSFNnQUFHTTFJRnh6U0tvQXhVZ0F4elJjYUZBN25tcEI5YVFEclVnQUg5YUF1Zi9SL2dCSHFhTUdqdFIrSFdnWVlKL0Nsenppa3gyTkhUZzB3QVpIdlIyNG80cGVQclFBY0FjMEh0Umc5S1NnQmZvYVRQRkhlanRRQXVlTVVuMHBTYVRIRkFoUjYwQWMwblRGQnBERjdjZHFPYVBlZ2RLWUJuanBTZldsNmNVRThVQUdEUVBURkpqdlM4ZGFHRndQdFFCNjBVSDFORmdEMFA2VVVuMHBjOURRTVhQT0tRbjFvUG9LWGRrY2RhQklBYVE5OFU3cndhYjlQem9BS1Q5S2QwcE00RkNFTGpqclJ5VHgycERub09hQmx2cFFBN0E2MG1SM281STRGQnpqRkFDR2x4eG5yUm5QVHRTNDRvR043WW9KeG1sSjlQem9CTkFBQlFPVHpSbnRRQ0QrRkFoT280cFFjZERRTWRxTzM4cUJpOGZqU2NZeFJubm1semc5Y1VJQk4zTktNNHhSZzV3S1hCNmlnQTk2UGZGSjBQQXBldk5BQmo4ZTlMOUtNZ2ZMU25KQjdVV0FRQWptbDl1dElEUzR3T25Xallma0g0VVlKR2ZTbEdTS08vMG9FSU1DcERTQWs5cWNPYUdBQ25iZWpVRCtWS293ZUtRQVAvcjA0REk0R0tYcFRnT2VLWUpnQmluWUhmclF2VE5QQXhRQUFVN0hRaWpzQURUd050QUNMblBXcE5vUEhlaFIyOWFjT2FBc0NqakE0cVFBNHdLRkdQcFRncEJ4UUFBZDZlTVV1T09hZUJnWjcwQUtxODVITktBQndUU2daNHA0RkFBRnpnRHBVZ0hmRkFBNEFwNEI5S0FzSUIyelVtTVVxZ2dZSGVuRDA2NXBqRlVaNXFSYUFvUFNuYmNDa0lBQmdWS0J4bWtVY1pxUlRnZEtMZ0FxUlFCd2FUYno3Vk5nQ2dCb1VkUFNwRkdUN2lsQTc0cHlqMG9DNDRMemsxSUY3MDBkZldwVkE3VUFDbjFGU0RuRkE1UEZTQU1lbEFNRkFxVlZJRkowNUZQQTdDZ0VBWEJ4VW9BSFhwU0FkdWxTS3ZiRkZ3QlY0RlNoZS9XZ0FINzJLa3hucFNFQUdmYXBBTTlhQUJUbEdhWXhRdlByVW9HZUtBdnFLZnRvQ3dCZU0xS281NHBBQ2VmNTFJRUlvYkEvLzlMK0FJNC9DbDRJOUtiak5IT2NVeGk5T2xKem5nMHVNbjZVYzlPbEFDZjV4UVQzb0dNMHVEMG9FR1RpazZuTkZMeDBvR0lldEtlYVA5azBjMEFIVHZTZ1k2VVkvT2t6NjBDRDN6U1lPS0J6VG1OQXhQclNHbG83VUFHYzVveFI5T0tVK3ZlZ0VKejFvNU5BNW8vblFGaFJ6bjBvN1VFam9hVDJGTkJjVThVZDhtZzBuYklwQUdPOUxrOVBTZzljaWtGQ0FCeWNpZ0ROTDE2MENob1FjNG83WXBmMEZJQWU5QXc3WUZJZWVsS2VLTTU1cEJZVGpqdlNqSTVOSFByUmp1ZWFvQVBXajZVRUhnVWZTbFlBSUJvK2xCSTZIOGFCd09hQVlaenhTNTdVMFlJcGVhRUREbm9Qem9KR2VLQms4SDYwZHVhQUFjVXBQcjBwZXZ2U0RzUDFvR2dQYWdqY2FYMEZLQitYclFTSjNvSjdDanArTktlVHpRaGg5S1hBN1VHa3gyN1VBTHgxcGV2QS93QWFUbnRTZ0hOQUJqQXhUaHhTQTlpS2RqQjY4MFdIMUFBOUtmaWtIdFRoN2ZuUUlYSEgwcHdBSEk2MENuWVBlbXdCUnpUanoyelFPZVNhZU1DcEN3MVFPcHFRRG42MFlwNFVkZTFNQlFwSHkwNVJ4d0tRTFVtT0tMZ0dPTTA4ZnBTQUQ2WXA0WGpOQUJ5T2FreDNGSU1ZeTFPeDJvQWNCeGtVOEFmL0FGNkF1ZW5OTGloRFE3ZzA4QUNsSFRIU25EMU5ERUtxMDhEdDNveHg3VkpnMERRQURyL09ucU8xQXdPVCtWU0JRT1dITkRFQ2puTlNCZTlJQnh4VHdBUlFGaFFBVFVnR2VQZWdMZzA4QVVBS29IR2FrVUU4aWdMay9TcEZYM3BBQUdhZUZ3QmlsUUR0MnA0Rk1CUUF2TlNCZWFSUmptbmpPT0tBRkFwNDY0SDBwQXVPS2tBSFFVQUtCZ2lwQUJ4bWtBelVvb0FWUUtlRkdhQU9oRlNnRWNpa0lSUmppcEI3bnJSdHlLa1VjY1V4b0ZBeFVnSHJpZ1l6enlhZUZIWDFvQmdvd2NtcEJ6a21sQUp4VHd1T00wWEFWUlRsWFBIclRndWFlb3pUQS8vVC9nQ3pnVWU0cEI2NDRwZVJ3S1l3eWVnbzYwbEFvWUMvalNjbWc5YVUvd0MxUUFZNzlLUGIxbzV6eFNmVTBBS2VPbEhKcFBhbmM5TTBNTERjZzllYVVBZHVsSjJwZnJRTmk1OXFRZTFIR2NVRHJRSU9NODBVZGVhVWpuTkFDZCtLUGVqR2VUU0RQYWdCZnJ6Uyt4cE1aRkxnL2lLR0NFRkdRRDBvbzRwQUwxbzRvL0NqakhGTUF4Z1VjanJTYzVvSEhXZ0FPYzRwUWVmcFFQZnRSMUZDUUI5YUtUZ0RGQVBVMFdFSE5Md2VCUU9LTUQ4NkJoMnpTR2pnVXB4K0ZJUWREd0tRanNhZG5QdFNZSTRGTWR3NkRCb0k0bzVKNE5JQ1B4b0VLTWZXbDZua1VtYVVFMGdEcnpSMzRvNTZtbEhQK05NWW81NDcwWW9BRkoxSFNnQmNVYzBoT2VXcHdHRnppZ0JNZ2NqazBjbWorSGpOS2NkS1lDY1V1S0NlYVVldElHQUdUakZMMW9IWGptbllJNG9BT09wcDNGQUhRVW9HZUJRQW9CSFQ2VS9HUlNBY1pIV25BVUF4Um5uQnA0QnhUUngwL0dua0hGQUFNak9LazdlMUlPbkZQRkFoQUtlTURBRkNqTlNBZWxBeEJUdTN2U2pQRlNESkdlOU5BTkF5TW1wTWUyS1FMNlZJQUJqdlN1QXVDQm1wQnp6am1tcUNPYWsrbEZnQUtCZzA4ZTlBSDQxSnRHYUxnSW9PMFlwK01mV25BZWxQR1NLQUVHUng2MUtCM05JQm1wTURQTkFBQjNxUVo3YzBCZU1FMDlWRkFBb3gzcVVEbkZOeG44YWtBeFFBb0J4azFKemlqcnpUeHlNQ2dBQXh4VWlyM05JQjY5S2xBeFFEQUx6VDFHZVJUbFVISVBGUEF4eUtMZ0FIRlBDNDYwcXFLZUFNWW9BVURILzFxZnRBNG9DNXFVQUQ1cVFnQUJPUDUwOExnMEFaNDlha0F4NzAwTkFGeGlwTVVBWVBJelVpak5BWEZDODhDcEY5S1RGUEFGQ1FYRkM0R1JUd004RG1oVkI0cVZRVDNvQkNBQWU5U2hmMXBBdWVBUHhxVEhTZ0d3NjFJb3hTQUFVOFpQTklMSC8vMVA0QWVNMG80b1BOSFBhbU1NanJTVXA2OFVjOSthTEFKeFNnSFBXZzhjMENnQXpqM05MMTYwZ0pvOVBXZ0E0NlVkZWxBbzZkYUxBd0JQOEFEUlFQVDFwUWNVV0FUNjk2S08rTVVBZHFUQUJRT21hTUUwRElHUlR1QVp6MS9PbDYvVHJTQURIOWFYb2NVTUxDZmh4UUQ2OTZEK1ZMa0h2U0FUakdLT1A4aWxJT0tCd2NDbUFoOXU5TDFPT2xCNE9hVG1pd0NqZys5SHQrdEJ3RHhTY2cwQUhTZzV6bnZTOWVLVHIwb0JCNzB1ZDFCSFVDa0hKb0FPaEhyUnpSeGpnMHZYbWdRaHdQOEtYK2xHTVVad09lS1F3NzRvNjlPY1VveU9hTytGcGdKanQwRkE2OFVIa1lwZWg5aFFBZDhVWlBUcFFCeHpTa2ZoUWhDWTR4U2tBREJveHg5YVA2MHhoejJwUmtDanBRT3ZORmd1QkhwU2tZNHBPRHpTOVI2VWdFNmpyUzg0NW82KzFBQlA0MEFPQTQrdEFHT0tVWnBjWm9CZ1BRYzA3SEZINFU0YzhVQUwzeVRTNUIvbFFCNmRxa0F6eFFBbU8xTzl4MnBBT2FlTW50UUFZNzA3cjFwVkdPUlRnTThVQ0Y2RE9hVUxnOWFYSFlVOGV1S0dPd0FZL0duakhHUlFPbVJ4VGdDMmZlaG9RS1BYbXBNZDZBT2FrNmdZb0hjTVU0QTVPUFdsSEpwK09hQURiK05QQUpOSU9lVFVvR0R3S0dBQWV2ZXBCZ0hGTUNnZDhWS0FUMW9BVlJ0KzlUbDVGS0ZBN1U4QUQzb0dLQWUxT0FwM2I1cWtBenlLRUlRZFNhZUJnK2xBQTZWSUY5S0FGeDNwNEdNVW4rMEttQTdVV0FRREZTZ1pOTnhrMUlCK2xBQ2dEcWZ5cVFEMHBBdVRrMUlCNjBnRlVBak5TS0RuQXBxakF3S2xBeHlLYlFBQm5uM3FSUmdmU2dBVS82VWdIS094cVFBNXBBTUdwUUtZQ0FFWXpVZ0ZDakhCcDRVWjU3VUpBQVh2MHFRTFFvNTVxUUFqNlVlUUM0QXhUd0tBUFdwRjQ0SEZBQUF2YW5nQVVvSDYwOGU5QUM0R0tlQitGR0JqajFxUUxuazBBS0JuOEtlS1FBOGRxbDI0TkRZSC8vMWY0QWFCN0NsNW9PTzlNWVpIYWpnVVp4U1VCWVVkYU9LTnBwTUR0UUFmV2xBNXdhTzJCU2RlZWxGd3NMN0NnNTZpakdhTWRjQ2dBcFFNY0dtaklITk85alF3RzlCUy9XakdlbEJJelFnREdUbWlsSi9Day9yUUFjbnBTbkZKd2U5QjZVQUw5T2FhQWNVNDR4aWdVZ0V5T2xBT0Q2MERHYVhQRk93Q1lJNlV2UTBVRWc5S0xnTG5OSVI2VVk3R2c4YzBXRUJQclIzOWFEbnYxb0J4elFBZE9sR09mcFNIM3BlMktBRDJIV2t3RFM4bmtVWjlCU0dJZmFuZXdwQmpGR09hWWdPUU9LVGpPS2NQYWs0NjBEUW5RVTdJelNESnBlTWNkYUFGOXpRQm5Jb0FveU8xQUJnOWVsTG5KeFIwNE5Ma2RLQXNBT1R6K1ZKeWV0TGpKNDYwZ0FGTmdHTXIvT2w1cFNNaWpxTVVnRVBwVHVCMUZDODA3dnpRQUE5RFM4WnBjVS9yMW9BYU9BY1U4RGozb1ZSVGdCMFBTZ0JjVTRZSTU1cEFDZVNLZUIwb0FGNTZtcEI5S2FvUFVVL0hOSUF4Z1lGU0JlMU5BNTYxSUI3MDdnR09jNTVwNEI3MENuZ2Q2UUNCY1lwNEdlVFNxTS9TbnFPYVlBQWUxU0RpZ0FuZzA4RFBQV2dBVmNmalRseG5Kb0E1UEdLZUJRZ3NPMjl1MVBBNHhTQlFmY0NwQU9UUUF2UEFGT3htZ0xubXBRdjRDZ0xpTGlwQUNUelNLQm1wUU9mclR1QUFFMDhaQXpRQnhVZ1hqQTRwV0FGQXhVZ0J6aWdLQnhUOERxQlFnRlVZcDRYSjRvVmZTcEI3MEQ4d3hrNHFUSEdPdENqaW5vRGpGQWtPQXhuTlBIdlNBSE9EM3FSUlFBb1VjVklGSjYwQVo0cDRGQWhRRDBOU2dBY1VpcitkU0FFMGdFQzgxS0Jua1VLdWV0U0FIT2FZd0NuclVpalBTaFFCMTR4VDFBNkdnUWlqb1JVcXJ6elFxK3RTQmNIQTlhQjJEYmpyVW1NOFVBTmppcEJuclFBZ0hIRlNqcFNCTTllYWtDK3REQ3dvR2VsS0ZCcFFPYWtYMW9BQU8rTTFJbzI4MGdIUDBweWowNUpvQS8vOWIrQUx0NlVnbytsTHoyNlV4aCtIU2lrOTZVNU9LQURGSEdNQ2djVUhHTTBNQTcwdU9LT1c2MG5HTTBnRGtVbU9LZG1qcHhURUoxNVBBb0E3MHVPYzlhUTVBN0ROQXhSak9hVEI2VWRPdEdUZ1VXQVh2ZzBERkoxNHBSNzlxQkNad2FNREhGQTY4MHBKSFNnWW1mV2twMkQxbzY4anJRQXA5RFRlZldsN0ROSHZTQVQyeFM5TzlBR1J4U1o5YWJZQUtYNkVVZGVhQ0RTQm9PUHlvNG93Ungxb0hQTk1RbkdLTWcwdlUwcEdUelFNUHc2MDNQRkF5S1h2aWdRSDFvQTlhT3ZRVXRBeE1EdHpTakIrbEdPTWcwbzQ1b0JDZXBwU2NjMGUxQXptZ0JlQU05cUFmV2pHS0R5TW5GQUNqSU9CUmdqLzY5SnpTK3c3MEFMMHBPOUI2Y2RhZDdkcUxBR080b0NnVXVLVUQwb2JBTWM4VTdBK2xKZ2RUVGdPbEF4Y1lwMkQzcFFPZWFVY2NtZ1FvR2FYQkhGQzU5S2tBQVBGQUNEQkhXbmdFZGFRTHg5YWVLWUFBT3RTQVlwQnowNjA3Ymp0U3VBb0dlS2ZqSHVSU0FjYzFMd0Q5S0FFQTRwNEhicFJqUEZPeHh6UUE0ZEtjQU9LTVU4S2FBRlduWTlhVVpINDA4QTk2QUU2SG1uZ2ZqU2lwQUtBWWd3T2FsWE9NL3BTS1BVMUlPbUJ3S0xCY0I2QTFLRnp6MHBBQlQxSGZ2UllCUjF6bnBUd01EbWdEblByVW1PNS9LbTJDRUE0QnFWY2RLRVh0VGdwSnBBTHRBcVVESFdrQTdEaXBWWEZBYUNLTWNDcEFPbTdpaEIzcVVEKzZhQUVBNTRxUUtjZXRDcWFrQ2lpd1dCUWVLZUY3Q2hWenlPS2VvOU9sSUxDZ0hQcFVxanZTWUhRMUlCanRUQUFBUUtsQTllYVFBQWZTcEFPZVByUUF1TTlhZXE1K2xLQjJwNEZGZ0VIWGlwVlVkUlFCaXBBT3c0b0dJT2VhbFFVQUFEbnJUd0tCQUFNODFJQjJwUUJUMUhlaTR4QUIyNXFRREhlakdPbFNiVHhTRUlBQ2NpcEFLQjYxSUZ3UHJUR0dCaW5LQjFwVkcwNDlxZmdkNkJNLy8xLzRBdWdvNjBjVWNkNll3eDZVdlNnKzlOb0N3NzNGSUQycGVnNHBNa1VNQUFveGlqMzZVWjdnMEFKMXBhT2FQcFFBVURqdHpTazBuSW9BRGpISnBmZWprQW1qSjZkYUFFeWNDZys5TGducFNVZ0QyTkdPeG96NmNab3dCVEFQMXpTOGlqNWMwY2prMEFKbm5Jb0p5YzB2NjBnK3RJQlRtZ1p6NzBuMHBmbTYwN0F4YzRwdkhXbFBmTkE5KzlBQ1lwZVFlS092NDBZb0FPZXRCR0JTR2xGQUMwbVIwRkdBT0tNQW5GQUI3NTYwdU9mMG95UHJRT3ZOQUNqNlVad1BjMEdqb00wQUhmSk5MOWFVQWRhVGtqanI2MEJZQjYvalNrLzU2MGRCbWdkZldoREVIdDJwY0hIWE5LRCtsRkFnR2UxQUdCelJqaW40SjVQRkFDL1dnREJvVmM4aXBPMktBUWd3ZUtjS09hZGpuQm9BQUFlS2tIMC9DbWc1Rk93TTBBQUJ6eDJwNDZjMGNyVDFCNHh4UU5vT0J4VDhDbEFOS0J4eFFJVUNuZ0VkYVRhVk9LZUNUUWdGWGswNEE0eUtNWVBITlNZQi9sUURFWDhxazZuSDYwbUFCMHA0R0RRQUtQVVZJQVJnanRSajJ6VWd4UUFBZHhUeHdhRkFKQXFRREZBQ0JmVTFKZ2lnRFBJcVVaUFdpNERRT00xSUFDUlJqSFdwQU1jNXpRSUFLa1hyelNBZGpVd0hyejlhQnNhb3p4VXFqMDRwTVk2VktQVTB4RFZCL09wUVBXa1hQU3BWVDBGSVlvR0NmU25qSFVVS3A2MDhBVUFBNDRxVUR2UXE0NjFJbzdHZ0JBUGJwVWc1NHpTcXZwVWdCN0dpNEFxOWhVZ1hqSm9IdlR4bk9DS0xpQUwyQXFRRHRRQnp4VHdPNHBERkFJNDZWSUFUelNBYzRxWVV3RUFCNE5Qd085S0ZwNmdrWm9BVlFNak5QVURyUUFlcHFRREZDRUNxTzlTRDBOSW93TTFJQlFNVUtjWUZPWHBtbEEvRHRVbU9uYWdRZ0JJNi9qVHdLQXBINDFJQUJ6UjBHS0Z6K0ZQVVovR2tBenpVZzYwQ0FEaW5BWk9jNHBRTWluQUh1YUJuLzBQNEF3YzBnNEhGSm1uWjQ5YVl4QmpxS085QW9CSjZVV0FNWTcwZlR2UjE1b3hpZ0JmcFFjSG1rcGNlbEFnUFBPYVE5UlNnNXBEbkdLTEREUEhTam5PUDFvOXpSbWdBejh0QUpQVGlqb2VmMW94M0ZBWEQ2VXZTazdkZUtYUGZ0NzBBSlM0eUtEZ0hIV2s5S1FnNisxTDJ4UzRwb3hRTVBlakdLWG44VFJ5ZW5GTUE0emdVbklOSFdsd0JSY0JEeDFvd004ZnJTNDRvNTYwWEVGQm83Y0NnZGNEcFFPd0RJcFJ6U2NpZ2NmTlFBZlUwNGM4aW04ZHFkanRRSU1rMGRLT01nMGR1S0JpOEhyU2V3cGZwUmcwQUhBNUZBNTVQV2owSTRwTUg4cUFzTzVBcGNldElEM29PZS9hZ0dMMUdLWEJQV2dLZXhwMUFoUnh4ak5MdDc5YVFZeHlLZDErVVVEWXRLTWpyelFveHhqTk94UUFEb0tjUG1PQnpUc1pwdzZVQUtCUzR6UjdtbkRwODFBQUJuQXhpcE9UU0QwNzFLRFF3R2pqZzlPdFNFYmpnZGFUYm4vQ3BBcHhpZ0xnT09hY0ZCcFFQYW40T0tBRUFQQXFUQkhGQXoxcDRHZXRBQUY0cDY0eFNxT3gvemluNUk2MEFBQXFSUjNvVWQvU25kcUFZNEROS293TW1nQWpraXBRTzlBQUIzcVJSamdtakdEVWdHQm1nQkZIclQ4WjROQUJBd2FreGdjMEFBQkJ4VWc2Wk5LdTN2VW1LQVlMMXlhZUJqbWtBSnFUSHB6UWdGeGpyVDFYT1JtbEFQQUZTWUhHT0tBRUM5eHhVMlBTbWhjMUp6ajBvQUZYRlNxdU9EMHBOcDc5Nmt3Y2M4WnBBQTU2VklGQUhTa0FIMXFVQWRCM29FQUhhcE1IN3c3MERQZXBBUFNtTUFwN2NWSUJnOFVLcHA0SEhOQUFveDE3MUtGeFF1UnoxcDJPUHJSY0JRVDNxVEFJNG9WUlVpNElvQkFCNzFJTWZoU0FldFNLTWRxRUFpZ2lwQmpQV2dMbXBRcHhtZ0JNVktPT2xJQjYwOEQwb0FCazA5Unowb1gycDRCcEFLQm5wMnA0OUtCazlhZUI3VXdGWHZrMDdINDBBRTlLZU9ueTBBa2YvUi9nQ3BQcFNqdFNBNE9hWUR1M05JTVpvNEh2U2RzVU5ERGdjVXVLWDFwS0F1R2VNVWREUm5OQm9BWFBGSnoyby9XbE9SU0FPTzFKMDVGSFA0VW9KN1UySVFZbzVBOTZPQlM4WUZBeE9md282OG5wUjA0b1B0UUFjOFV2Ym1nbm5Kb3czV2dBSFg2VW5QZWxHUjFvNjBCY0FEbkZHYU9RQUtLUUJ5ZWxJT3ZGT0dUelNBWjZVeENubmlrNVBXa3oyTkxpZ1lIaWdISFUwblg2VTduclFBbURRT1RTazRPS1ByUmNCYyt2YWtBeDcwZERnMDdrQ2dMQ0U1OTZEa21seHprVWNpZ0FIVDYwdnZtaGNkQlJ3QmtVV0JpY2tVWnllYVA1VXZ0UXhnS2Q4b29wZnJReEM5S2NRT2xHT2M5cWNEamloQUlDZW9QV245L1drQTc5S2Vvd09hUUFCNlUva1VnSDQwNGZkcDJBVVpQRlBDbnRTREo5cWVNZFJSWUJveDM1cVFERktCamtVN0hyelFNQUtmamppZ0R2MXA2OU1VQ0ZIUEFwMk1FaWdESDNhZXVPOUFBT1RuOGFreC9lNzBpOFZJb1Bla0FET2NVL0hHYU52SEl6VW1LYUJpS25TcEFwejdacEFCbXBCN1VBS0JudC9oVHdLQU9jMUp0L0NqMUFBS2VvOUtBTWR1YWZ0NTQ3VUF4UUJtbmdjWTdVb1U5K2FrQTR6UUExUm4zcVFEMXBRQUtrWHJRQW9IWDFGUEFwTUFHcFF1Y1VnQVU4REhPYUFCbkE1cVFaSkFwZ0NqbklxUURBQTZVZ0dLbEM1V2dCZjBweWdBWk5PQTlLZUFCeFNFS0JnNTZVNVJqa1U0THptbmM0SHZUdUFxajFxUlZPY1VnR0NBYWxBL0tnWWlyNjA4RFBOT0EzVklxOWpRQ0JSK2Z2VWdVZHhTWU9La1JSUmNCUU85U0RwU0QweFVvR2UvdFFER3FPZUtrMjBBWkdSVWd5T0tBRUhBK2xTWTV3S1VLRDE1cDZqMXAyQVVMM3B5akpvQzlNMUpqTklMaHlPblh2VHdNMGJlUlQveDRvRUFIRlBIU2pIZnBVZ0J4UUFnNE9EVDhZR0tNVThZeFRHQ2pzZTFTRFBXa3hubW40NDljVVhCbi8vUy9nQ0dSMG82VVk3MEFVeGhuTkdPMUhRVWV4b0FQZWw2Y1UwVXA5YUFETktNbmlrSXdjWjRwZW5TZ0JNZmxTNXB0T0l6UUFtQmppbElwT09sTDBvdU1RSDFvelM1NzBkUjlLQkNET09LRFJqakZLT0tBdUw3RHRTWXgyeVRSU2Q4MGd1S1FjOENrQjlLWHZnVW1NbjFwZ2hlbldnZmV5ZUtNOXhTL2hTQzQwZzU5S1U1RkdNMGxBV0RtbEF4UUJTNEI2MHdBODhpalBjOXFUcHdlYWRtZ0JCZzgwdis5U0hJYm1sd1IzNlVBSEZManFNVWxPNHhrMEF4cHhpbkFkLzBvVWQ2RDZIaWdBR2MrOUhHZHVLS1BhZ0E1NkNsNVBXZ2NIQXB3d1BlZ0ErbE9IRktNbm1sR2M1elFBbzRIRk8vblFCeFNnY21nWXZOT0M1eDNvQUlwNUJIV2dRbU9PT3RQeHp6U0QxTlBBR00wSUFBL1dwQU9PdE5HZnlwK0NPUlFBNGM4bnBUdUtBTTh0MHA0QjRwQUE2Z1ZJQnh6U2RxZHQ1cG9BWEFxVEhOQUI3MUlGSUdLQVltTWpOUFhrRWlsQS9XbkJmVGlnQlFNODAvRktBS2VvSFVDaTNRQVhuR09La3dlbUtBdU9sUDU3VUFoVkE2VTVRTTgwNGVsUEFHZldpd0NBWkhGU2hlTWtVZ0dSbjFxVEE2MElMQ2hmNHFlQm5pakg1VklGTkFYRUNtcEZBcGNVOVY3ZXRBQW9KTlNLTzlBWE5QQ2lnQndIZW40UDNqUUJqZ1ZLcSt0QURlYWxDMEtNKzlTNHh4MG9ZQ0FkalVtQlFCeFR3S1FrS29HTSt0U2hUMHBvd0R4VXErOUErZ21PT3ZOU2hhUURDOFZLQUR4VEN3Z0hHS2t4UXFuTlBBNDQ1cG9RQVlPRFVnWG5OQzhkcWx3S1F4TnZyMnFVRElwRkI3VklCazRGQUIzL3hwNHpRTUVjMDlSaWdBVWR1OVNMeGh1dEFBUEZTRHB4UUFZNSt0U0FIdjJwb0J4VW1DS0xDRkMvNTYwNHJuQXBlaTVGT3gyb0dLQnhpbmprY2RxQjErdFBIODZBQUxraW5BYzVvQzRwd3owNjBNRUFGU2ZMa0UwZ0E1d1AxcDRHZWFHRnovMC80QVJqdFNqRkpUaDcweGlaT0tYME5Kbm5tZzhVQ0RnYzBaeU1VY2RCUUFhQmdNNG82OGRLWHJ4UngwN1VYQVAxb1BXZ1VuMW9BWHRrMGdQYWw1NkNrNjlLQUR0bkZIT09LZFNja1VYQkNkT2ZTbEJPYyt0SjdVdWY4QTlkQUJna1VEUFVVdlBKcE05cVFyaDE2VVlJNHgwb1BXZzhrRTk2WU1PVFI3MGUvVEZBOUFhUTJHT2FYSFlVZ3BSd0tZQ0NsNjBkT3RMd2VDS0FFd2U0cDJPZURTWklIMXBQcCtWQWhUeFM4anJ6U0VqdjFwZW5GQ0tESUpHYVRHS2R3RFNqKzlSY0ErbE42aWx4ZzdxVlFjOEhOSVFESnBhTUNuWXhUc0lRRElwNDNmZEhXbXFNYzA4REhBb0dMdHdSU3FPYU9PZ3ArQmpIU2dCQm1uQVk0OWFVREgvd0JhblVBS282VTZrQysxU0FIMG9ZQUJnWkZPQUhTZ0RIWDlhazZkYUFRZ0F6VHdNY0NnRHBUbEZJQUM0RlNEZyt0SjFxUURqQlBTbTMzQkFvUGMxSU0wZ1VnZTVwKzBrMEJjTWVsUDZEQTcwb0ZQQUE1NjBBQUhURlNEMXBGSE9UVW5PZlNnQUM0NjFKajhxUUwrVlNEMG9DNEx5T2FrQ2pwU0FWS0JRQUFIdFR3TThVS09sUFVkcWRocEM0elVuZkJvQ2ducFVnd0RrQ2tLNEt2YnBVZ0hIelVESUhOUEFvQUY2WVdwRkZDcmtZRlNLQjF4U0FGR09SOUtrVUhGTGdad0tjQUtvRUtCMzk2a3h6aWdManBVZ0hhcGJCZ0J6bXBGWHRRRjdHcEFPYUJXRUE1cVVEdjZVZ0hlcEI2MHg2QU9La0M1TkNqUCtOU0FkVFJjUVlHS2tBSjYvcFNBSFBOU0tvejFvUXhWSGNWSUZ4eGlqSEl5YWtVZDZBWTBEMXFZTHh4U2JNZmpUOEdnQlFPS2t4amtkS0FNVW9IdFFBOVFlYWNBTzlJQnpqcFVnQXpRQUFBR3BBTWZTa0M4YzFKMG91QW9IUEhlbEE1cDRYamlqYU01b1FJQUtreDI5S1FkT2xTQmNuMXBoWVVFSGtVNERQZnJRTUduZ1lQTklHaE52NTFKakhXa3hrN2U5TzV4UllMZ0JUL1FDZ0NuNEdNVVhBLy8xUDRBc0Q4S085SFE4MGNkcVl3K3RIQm9IVEFvNUZDQUJnKzFIR0tNY2RhTzJEUUFEcFNnOWh6U2U5TDBQTklCS01VWkI1by9HbllCY1pwS1U0SjVvUFhOSUFHQjNvUGFrenhpbHh4bnBUQU9jODBZejBwYVQwelFBdkdlZUtianY2VUhya2lsSDVab3NBWjlhUTROTHgxRkx6OTBVQUpnbmcwdVNEazBVZ09lY1VnUW81NU5JYy9sUys1Tkozd2FZQnppbkRpbHBQWTBBR0QxOWFBYy9MM3BUZ21sNzgwQU40elNqMXBDQWZwVGdEM291TkIxNUZHUjFGSjI1cGMwWEVHQ2VhY0JuNXFEZzlLVWpCNG9HQUZQSFBYaWtBejFwd3p3YUdLNEQwRk9BTkFDL2RGUC9TZ0J2V25nZHFVRG4xcHdISE5IUUF4K05TQWZqU0QwcDQ1NmMwQ0dqQXFRRG5ta1VjVklvN1VERUE5S2VxOFpwY1o1NlUvYmtuK1ZJQXh6eFQ4WjR4U0tCdHhVZ0hlbUFBRWRhZW9PT1RRT3VUVHdDYUFFQTVxVUtQdTRvSFhkK0ZQd1c2ZmxReDNFMjVxVURCelFvOU9ncDQzZGFHSkFGd0R4MXFSUmswaTQ3YzA4TG5pZ0xBbzcxS0JqR0tRTDJGU0FIL0NnQVVEUEZQQS8vWFRnQ2FlQVRRQ1FEODZlRnp6NjBBWXFSUjJvQ3diUlVnSHJTREI2VktGSDBvUUFNWnoycVRIYWdMaW5nYzgwQUtCem1wRnBBQjI3VkxpZ0JxanNLbVFaT1JTQUQ4S2xDK2xJQkFCMnFVWTcwS093cVFBQVVDQURQT2FrSEh0U1l4VWd3YVl3eDYxSW94eVJRQm5yVWd4MzRvQVVESTVweWdZeWFWUnhrMDlWL1NnQVVEdlQxWDg2Y29IVTFKeGltQWd5VHhVZ0hjODBET2NVOEtLUTBBVTlRS2tGQUhwVW9CRkZ4RFFEeVQycVJRY1VBSHZUd00wQUFVNHhUd09hVVpBNXA0QjZkNkVGd1VZSE5QNjhpZ0RjT0JVbUNPdEFDQUFVNERINFVvSHBUOXVPbEFnd2M0TlNBRHZTREE1cHk1SEZBeFJnVTRkS01aR0tjQmc1Rk1BR2VtYWVLVURqaWw0eG5yU0FBTWRLZGpPS1VBOUtjQmtab0VmLzFmNEErbWU5SjcwZ3oxcHc5RFRBT2xKM3dLRDZlbExucHhRa080ZHFBQjBOSmlqbWdBQnBjNXBPS1hQcCtWS3dCeDNwTVVvOUtDZTFNUXZUaW0vUVVwNTU3MDMyRkF4M1BHS004Y2lqcFJuUDRVZ0Z4eGcwbVBlanIwb1BwVEVKeG1sQW9COWFCZzlhQm9EUmlqb2NkcUtCQzhqaWs2MEdseG5qdFFPNGQvZWx6anAxcGVjaWt3UWVLTEFMampkM3BNWTVvSEhUbWdIbkZGZ0ZINTBjaWs2R25lNHBnSjJ6UVRucDFwY2RxQjA0NTk2R2dGNUl5YVVBWUdlOUFwZXRLd0MvU2pBempwVGdCM3BSMXpRQXVNSEZLTVordEJ6MEhRVTRjVXdBQURqSE5QQTRvd09vcDNIV2tJWEFIV2x4MzYwQTRHUlVtT1FTYUJpY2RUVWdIUW1reDYwOERQVHRRQTBMaXBOdWVQMHBRdmVuS3B6UUFxZ1k5YWRRRjlxY0FUeGluWUJSMTYwOVFmd29VVkl1ZXVLU0N3QUVjSDg2ZUJudFNBREhQTlNBREhOSUdLTWRNVThEUEZDcWV0UEE5YWRnQUx6a2pyVWc5VHhRQnU2ZEtrQUo2MEFDZzlqVWlnRG1rR1FNMUtvemoxOWFHQUtBT2xQQzVvd1JUd0NlYUxnS0FPTWptcE1kNkJ4eUtlRlBVMEFBQjYxSXE5OFVnVW5nVkxqalA2VUFHTWlucXRPQXhUd0QrRkRCTVhHUmtVNEtEU3FCM3A2ajFGSUFDMUlvNjBLS2tBN0dtSUFEM3FRQTUrbEFITlNBRG9hUUFCVWdIclNBQVZLQWVsTVlxak9PMU94M29DZ2U5U0JjL05RQW9YcG1ucjYwb0J6eng5S2Z0OU85RmdGVTQ1SGFuanBrMEFZNEZTQmZhZ0FIWEpxVEdCUUY2WXA0QkE5cUVBS3B4eFR3TThVNEROUFVZNG9BQU8yYWZnK2xHTzFQd0NhQUFBOG5yVHdDS1VLTWNVN2FDYVlDOXFlQnpuK2RIMCt0U1lwQ0VBN1U4TGcwQmFlUFdrTU1Icmo2VTRER0RpbEM4WnBRTS9RVUFPeDB3YVVEM3BjWnB3NTlxWUFCNjA4RDFwQjZHbjljZTlBQU1ZelNoUTMxcFFNZGFldlhtaTRJQVBXbE9lOUtNQ2dEOUtBUC85YitBSUQwTkdjOWFYR0tUSTZtZ2JBSEpvd1QwcGZZMFlwZ0owNHBjNTRvQXdhVHRRSVhGRkhIWTBjWnhRZ0U0N1VvT0JSaWs2ZEtReGNnOU9LRDBwQ1NLWEpBd0tZaGM0NzBoejFvRkhYbWdZR2pPT0tCeFJqa2Q2QkFQcFNqSUhBcEI3MFp3YUVNQnlhZGlrNE9PYU9vNG9BQmc4Wm9QclM0N1pwY0hwUUZoTytUOUtPMktXazdVRDhnR1NLVWNuRkFwU2VjWTRwdGlzSUFSMS9DbHpqbWdqMjYwWjRwQUZMME9SU2hjZE9uYWxCejlhQUFBZGFWY25rZmpTZ2M4OFU0ZlNnTEJ5VHp4VDl2R2FSUnVGUHh6UUFEbms5cWVPdElBS1VEUE5BRHZyVGd0SmpJcCtBS0FZRGluZ1VpcnpUd00wQUFBcVFBRGlrVUhIdFVuMG9zQW1EaXBOdVRpa0F5S2tVWTcwQjZoZzlmeXB3WC9HakI3VklGQm8yQVR2aW5qR2Mwb1h2bkZPSHRTQkRnS2RpbFducmtEMXBpRlVlbFBBSFdrQ2NWS0J3S0JoakhGU0FVS3VhZU05RFFJQmpQRlNLT3hwTUNwRkJKL3dBYUJnb3pVb0JOSU05QWMxSUJpaGdDakhHS2xBeWVhYW85S2xBT0tBRUE5S2xBNzBCVDFwNCtsQUFCeG1wQU9hQngycVZRTVVnRUF4em1uZ2V0S1BTcFZYbWdMaWJTVHpVaXIrZEtGRlBBN0NnUWlybit0U0twN1VvNVAxcDZnRGltTUZIY1ZLQUNlS0ZCUE5PVmU0cGdML09wRkJ6Z2Q2QXRTZ0dsY0dJTURtcEZIRzAwSXVPdE9BeDlhYkFkZ0htbmdBMG80K1lmU25ZNXBBS09udFVnR2FVRGluaGNjOWFBRUNqcUtrSEhXZ0xqcjFOUEFJUFNnQTJudlVnSDhXS1FjNXgrTlNMeHdhQUFEUFNwRkhib0JTQWVsUENnL042MEFJbzcwOVIrTkxnbnJUbEg4SW91QUFjMUlCUU9EakZQQzQ2VUNFN1ZKc3dNVW1NOWFlQVI5NmdCRnhpbnFLTUtlS2ZRT3dnNDZDbjlzVWZXbEFGQUlNQVU0QUNnRG9PNHA1R1JRQW5RYzA0ZGFUQXhUdmVoQWYvWC9nRFBUTkowNjB2YWdISndhWXc0cGNZTk54NlVIMW9Dd2U5SFVVdVJRZTVvWUNkZWUxS2ZiaWlrb1FDOUNNMFpQYWpISEZKUUFaQnBlMURZelNFYzhVTUFQdFMrOUdEMG9KOWFBRXhUdU9sSVRqcWFRSEJvQ3c0ZE9sSEFOR2VLT3BvRWdwY0RyNjBneGdFMDdyelFNVDYwQUg2VXZPYzBaNDRvQVB3elJqMXBjOWhTZEJ6UUFxbkp4L0tsQkdNVW5BSEZHQ0NCVFlDZ2ZqUmo5S1U4KzFPQXh6ak5JQkFNVTRBbWprY0duKzFBSU1EUC93QmFuRCtkTkE3Q25qSTRwQUtNVW9IRkFwY2U5TUxEZ0IyNHB3NjBBREhOUCtsQUFCelR3UGFoUUIxcDJBZXZOQUFBd0ZQR0tVRG1seFFGeFFBT090UHhrNTlhVUE5YWVPbEFBQjJGUDI1NkdqSHJUd0Qzb0FBdWVCVHp3UlNEMHFWZmFoaFlRQ3BGWHJtZ0ExSUJuTkRBQU80NlU0REJ6U2dFOEhpbmpybk5Gd3NLRjU1cDRIT0RRQnpuclR3RG4wb0FRQTR5UnhVb1gwcFFNaW5nWUdLQUJSVWdVOEVkYU52ZW5nZHhRQUtDUmlwQXZYRkFHZW9wNnJrYzBXQVZRYzA4RDBweXJuZ2RQZW5nZTlOTUFBSU5TNDR4VFFNWXFRREhTaGdLaTRPYWVPZWFVTGpnVThLS1FBb3dlYzFJQWM0b3dDYWxDOTZCQ0FZN1ZLQUFLUUFWSmdEa1VERkMxSW9IYWtIWGRVb0J5TWRxTGdBRlBDNTYwQktrVmFZQUZ3T085UEFIVVVvRlNCVG5ta0FBZGgycDRVZ1pvWDZjVklBUndLQUFDbmdIMDYwdTNuUGVuaFFlOUFNRkdPdmFuaGMwb1U5K2xQVVk2MEFBR0tlQU1ZcFFPS2NCeHhRQUJhZXE0NjBBZWxTS09SMm9Rd0F4MXFRWjdVbU85UHgyRkFnQTdmcFRoeHlldENqT00wNWY5bWdCd1duQmFUR09EeWFrVUdob0JQU25LS1htbktCbkZNQk9NWnFUR2VCMHBCejBOT0hGSUFHZHRPeGlnREhGS0NNY2MwQUtLZFNjYzB2R01HZ0FYbnJTOXpta0JKNjBIcm1nRC8vUS9nQzZpbEdSU0U4OUtYMkZPNDdpTDdjVXRIQk5HUUJTQmdlRDBvNDcwVXVmOEthRUE2WnB1T3Z0UU1tbkU4LzQwREErZ3B2YklOS1RRTW1nTGdUK0ZJY1V0RklFQjlxQ01uRkFKTkF6VEFQclNtZ0FkcU9NMENERkI2MERwUmp0MEZOREY2NHBjRDhhVEdRUjJwUjdVaDJBZGVhVThjVW1UU2puanZRMElPQU9hVEhHYWNBT3BwUHBSWUdMampCOUtVWkM4MGdwd0hHS0JJVWV2U2xBNHhSMklwK0FhRURFSHFPcHB3NDU2MGc0NmRLZUZQVDFwanNJQU01cCtBZS92UzllS2RqRklBSDZVcEdjVW85QlQ4WTcwREFlcHB3R09hT2h4VWdIYkhTZ1FnQS9DbmdaR1JSanZUOGM0NzBBa0tGeDA2VTlSMlBGTkFGU1lIUVVBQVVmaFR3dEdPTTA4ZTlBZ0E1NHFWVkdhYjA2R3BGOWU5QXhWNTVwNmp1S1FEUDFxUUtDZWZ6b0FVQWc0cDZqdlNxdkp4VGxYSFVVQUtCL2pUd09mZWdaNkNuaFRqanRRQW9VOUJUd3ZyUUJ4ajBxUUNnQUF3TTFJQnpRQnhpbnI2MEFLQVJ4VHdPbWVvb0FQUVZJQmtjVURBRG5tcEZ4MVBlZ0NwRkZBa0x0OWVhZHRKR1NPVFJqRlNxb0hYbW1nRUFOUzdjOTZNWjVhcEZCNDlxVEFCazR4eWFrWEZDZzlLa0FBT2FRQ0NwRlh1S1VER1BTcEFNSHJRQWdIQXFRTDYwcWpJNXA0ejFQNVZRQ0FZNHhtcFFCMjVwTnZlcFFNRDYwZ0JRTTRGU0FjMEFVOEErbEFDZ0VIQXFUQXpudlRlQ01EOEtrQ25wUllCUW9xUUNoY0RwMHA0VTlQV2dHQzAvYmdVZ0hPQjBxUlIrZEFDZ1pGUFhqZ2MwWUFGUHhSY1Fxa0VVN0hGTGdrMDhjY1VERkF4UzhkdWFBT01HbmpQVVVBS0JpbmpuNlVnR1JtbmdjZldrQXZUanZTZ2VsR00xSUFDY2RhWUlRQTlhY0JuZ1VESkhGUEFKNG9CSWNBT3A3VUFVdlk0cFFEMG9BVWNqQXAyRFRhZDBOTmdPSE5MN0dqMnBlK1JTQVFnVXZmSW9KL1R0UUIzTkFYRSt2NTB2cFNZNHpqbWdFWW9Cbi85az1cIlxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
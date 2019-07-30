(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item_data~readfile"],{

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
              _context.next = 2;
              return axios.get("/vendor/list").then(function (res) {
                _this.vend_list = res.data;
              });

            case 2:
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
          order_add_date: ar.order_add_date
        };
      });
      axios.post("/vendor-item/up/" + this.item_id, f).then(function (res) {
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
  props: ["data"],
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
                  { attrs: { xs5: "" } },
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
                  { staticClass: "pl-3", attrs: { xs4: "" } },
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
                return axios.get("/items/iteminfo/" + this.item_code + "/" + this.item_rev).then(function (response) {
                  _this.i = response.data[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L0Jhc2UudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlcldheS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tQ2hlY2tEaWFsb2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/Yjg2YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/OGFhNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT9mYTQ4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlP2QxMWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT9mNzI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/MzhjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/MGE0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT80ZDljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlP2ZhY2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT8wMjQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/Y2VmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvQmFzZS52dWU/MDI3YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/ZGM3YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlPzZkMDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/MTY5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlP2U3MjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT80NDgwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1LnZ1ZT9mNmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS52dWU/ZGIzNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUudnVlPzQ0ZDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L0Jhc2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT81NjMyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT85YTRmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9CYXNlLnZ1ZT9kNWM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlclByaWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/MDhiZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJQcmljZS52dWU/MGYwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0hlbnNodS9PcmRlcldheS52dWU/NjhjMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9IZW5zaHUvT3JkZXJXYXkudnVlPzNjZjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/MjQ0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JdGVtRGF0YS9JdGVtSW1nLnZ1ZT84N2IzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlPzkyMDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSXRlbUltZy52dWU/ODdjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2FjdC9JbWFnZVVwbG9hZC52dWU/ZTczOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9hY3QvSW1hZ2VVcGxvYWQudnVlP2I5NzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWN0L2xpYi9JbWFnZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb20vQ29tQ2hlY2tEaWFsb2cudnVlP2UxODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY29tL0NvbUNoZWNrRGlhbG9nLnZ1ZT81OWVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21DaGVja0RpYWxvZy52dWU/NGZmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL0l0ZW1EYXRhLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvbG9hZGluZzY0LmpzIl0sIm5hbWVzIjpbImdldENvbXByZXNzSW1hZ2VGaWxlQXN5bmMiLCJmaWxlIiwib3B0aW9ucyIsIm1heFNpemVNQiIsIm1heFdpZHRoT3JIZWlnaHQiLCJpbWFnZUNvbXByZXNzaW9uIiwiY29uc29sZSIsImVycm9yIiwiZ2V0RGF0YVVybEZyb21GaWxlIiwiZGF0YSIsImkiLCJpdGVtX2RhdGEiLCJ2ZW5kb3IiLCJjcmVhdGVkIiwibWV0aG9kcyIsImdldF9pdGVtX2RhdGEiLCJheGlvcyIsImdldCIsIml0ZW1fY29kZSIsIml0ZW1fcmV2IiwidGhlbiIsInJlc3BvbnNlIiwiaWNvbiIsInRpdGxlIiwibmFtZSIsInZhbHVlIiwiaXRlbV9pZCIsImdldF9fY2hrIiwib3JkZXJfY29kZSIsIml0ZW1fbmFtZSIsIml0ZW1fbW9kZWwiLCJtYWtlcl9uYW1lIiwicmVhZF90aW1lIiwibGFzdF9udW0iLCJhcHBvX251bSIsImxvdF9udW0iLCJtaW5pbXVtX3NldCIsImdldF9fb3JkZXJ3YXkiLCJsb2NhdGlvbiIsImZvckVhY2giLCJvYiIsInB1c2giLCJlZGl0IiwidmVuZG5hbWUiLCJjb21fbmFtZSIsInZlbmRvcl9pdGVtX3ByaWNlIiwidmVuZG9yX2NvZGUiLCJvcmRlcl9hZGRfZGF0ZSIsImxvZyIsIm91dCIsImFyciIsImlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ2Iiwic3BsaWNlIiwiZ2V0X3NlcmlhbCIsInNlbGVjdGVyIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJsb2FkaW5nNjQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLDhEQURBO0FBRUEsc0VBRkE7QUFHQSx5RUFIQTtBQUlBLDBFQUpBO0FBS0E7QUFMQSxHQURBO0FBUUEsb0VBUkE7QUFTQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQTtBQURBLEtBSkE7QUFPQTtBQUNBO0FBREE7QUFQQSxHQVRBO0FBb0JBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLFlBRkE7QUFHQSxvQkFIQTtBQUlBLDBCQUpBO0FBS0E7QUFDQSxxQkFEQTtBQUVBLGlCQUNBO0FBSEE7QUFMQTtBQVdB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SyxHQUFHLE1BQUksQ0FBQ3pDLFNBQUwsQ0FBZTBDLFNBQWYsQ0FBeUIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUM5QixJQUFGLEtBQVcyQixFQUFmO0FBQUEsU0FBMUIsQ0FBZDs7QUFDQSxZQUFJQyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGdCQUFJLENBQUN6QyxTQUFMLENBQWU0QyxNQUFmLENBQXNCSCxLQUF0QixFQUE2QixDQUE3QjtBQUNEO0FBQ0YsT0FMRDtBQU1ELEtBL0hNO0FBZ0lQSSxjQWhJTyx3QkFnSU07QUFDWCxhQUFPLEtBQUs3QyxTQUFMLENBQ0wsS0FBS0EsU0FBTCxDQUFlMEMsU0FBZixDQUF5QixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDOUIsSUFBRixLQUFXLFNBQWY7QUFBQSxPQUExQixDQURLLEVBRUxDLEtBRkY7QUFHRCxLQXBJTTtBQXFJUGdDLFlBcklPLG9CQXFJRVAsR0FySUYsRUFxSU87QUFDWixhQUFPLEtBQUt2QyxTQUFMLENBQWUrQyxNQUFmLENBQXNCLFVBQUNKLENBQUQ7QUFBQSxlQUFPSixHQUFHLENBQUNTLFFBQUosQ0FBYUwsQ0FBQyxDQUFDOUIsSUFBZixDQUFQO0FBQUEsT0FBdEIsQ0FBUDtBQUNEO0FBdklNO0FBVkksQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ2JmLE1BRGEsa0JBQ047QUFDTCxXQUFPO0FBQ0xtRCxlQUFTLEVBQUU7QUFETixLQUFQO0FBR0Q7QUFMWSxDQUFmLEUiLCJmaWxlIjoiaXRlbV9kYXRhfnJlYWRmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHYtaWY9XCJpdGVtX2RhdGFcIj5cbiAgPHYtY2FyZCBpZD1cImhlbnNodVwiPlxuICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XCJoZWFkbGluZVwiPlxuICAgICAgPHYtY2hpcFxuICAgICAgICBvdXRsaW5lXG4gICAgICAgIHYtaWY9XCJpXCJcbiAgICAgICAgOmNsYXNzPVwiJ2NoaXAgJyArIGkuaXRlbV9jbGFzc192YWwuY3VzdG9tXCJcbiAgICAgID57eyBpLml0ZW1fY2xhc3NfdmFsLnZhbHVlIH19PC92LWNoaXA+XG4gICAgICA8c3BhbiBpZD1cIml0ZW1fY29kZVwiPnt7IGl0ZW1fY29kZSB9fTwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPVwiaXRlbV9yZXZcIiBjbGFzcz1cIm1pbmlcIj57eyBOdW1iZXIoaXRlbV9yZXYpLm51bVRvUmV2KCkgfX08L3NwYW4+XG4gICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZGVsXCI+XG4gICAgICAgIDx2LWJ0biBjb2xvcj1cImVycm9yXCIgb3V0bGluZSBAY2xpY2s9XCJkZWxfY2hlY2tfZmxnPSFkZWxfY2hlY2tfZmxnXCI+XG4gICAgICAgICAgPHYtaWNvbj5kZWxldGU8L3YtaWNvbj7liYrpmaRcbiAgICAgICAgPC92LWJ0bj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICA8di1idG4gY29sb3I9XCJlcnJvclwiIG91dGxpbmUgQGNsaWNrPVwiZGVsX2NoZWNrX2ZsZz0hZGVsX2NoZWNrX2ZsZ1wiIGRpc2FibGVkPlxuICAgICAgICAgIDx2LWljb24+ZGVsZXRlPC92LWljb24+5YmK6ZmkXG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgIDx2LWNvbnRhaW5lciBmbHVpZD5cbiAgICAgIDx2LXRhYnMgdi1tb2RlbD1cInRhYlwiIHNsaWRlci1jb2xvcj1cInByaW1hcnlcIiBmaXhlZC10YWJzIGNsYXNzPVwibWVudVwiPlxuICAgICAgICA8di10YWI+5Z+65pys5oOF5aCxPC92LXRhYj5cbiAgICAgICAgPHYtdGFiPuaJi+mFjeaWueazlTwvdi10YWI+XG4gICAgICAgIDx2LXRhYj7ph5HpoY08L3YtdGFiPlxuICAgICAgICA8di10YWI+55S75YOPPC92LXRhYj5cbiAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgPEJhc2UgOml0ZW1fZGF0YT1cIml0ZW1fZGF0YVwiIDppdGVtX2lkPVwiaXRlbV9pZFwiIHYtaWY9XCJpdGVtX2RhdGFcIiBAdXA9XCJ1cFwiIEBwYXNzPVwicGFzc1wiIC8+XG4gICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgPHYtdGFiLWl0ZW0+XG4gICAgICAgICAgPE9yZGVyV2F5IDpsb3RfZGF0YT1cImxvdF9kYXRhXCIgOml0ZW1faWQ9XCJpdGVtX2lkXCIgdi1pZj1cImxvdF9kYXRhXCIgQHBhc3M9XCJwYXNzXCIgLz5cbiAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICA8di10YWItaXRlbT5cbiAgICAgICAgICA8T3JkZXJQcmljZSA6aXRlbV9pZD1cIml0ZW1faWRcIiA6dmVuZG9yPVwidmVuZG9yXCIgQHBhc3M9XCJwYXNzXCI+PC9PcmRlclByaWNlPlxuICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgIDx2LXRhYi1pdGVtPlxuICAgICAgICAgIDxJbWFnZVVwbG9hZCA6aXRlbV9jb2RlPVwiaXRlbV9jb2RlXCIgOml0ZW1fcmV2PVwiaXRlbV9yZXZcIiAvPlxuICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICA8L3YtdGFicz5cbiAgICA8L3YtY29udGFpbmVyPlxuICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGVsX2NoZWNrX2ZsZ1wiIHdpZHRoPVwiNTAlXCIgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCI+XG4gICAgICA8RGVsQ2hlY2sgOmRhdGE9XCJkZWxfY2hlY2tcIiBAcnQ9XCJkZWxfaXRlbSgpXCI+PC9EZWxDaGVjaz5cbiAgICA8L3YtZGlhbG9nPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSXRlbURhdGEgZnJvbSBcIi4vLi4vLi4vbWl4aW5zL0l0ZW1EYXRhXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9IZW5zaHUvQmFzZVwiO1xuaW1wb3J0IE9yZGVyV2F5IGZyb20gXCIuL0hlbnNodS9PcmRlcldheVwiO1xuaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gXCIuLy4uL2FjdC9JbWFnZVVwbG9hZFwiO1xuaW1wb3J0IE9yZGVyUHJpY2UgZnJvbSBcIi4vSGVuc2h1L09yZGVyUHJpY2VcIjtcbmltcG9ydCBEZWxDaGVjayBmcm9tIFwiLi8uLi9jb20vQ29tQ2hlY2tEaWFsb2dcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQmFzZSxcbiAgICBPcmRlcldheSxcbiAgICBJbWFnZVVwbG9hZCxcbiAgICBPcmRlclByaWNlLFxuICAgIERlbENoZWNrXG4gIH0sXG4gIG1peGluczogW0l0ZW1EYXRhXSxcbiAgcHJvcHM6IHtcbiAgICBpdGVtX2NvZGU6IHtcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIGl0ZW1fcmV2OiB7XG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBkZWw6IHtcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtX2lkOiBcIlwiLFxuICAgICAgdGFiOiAwLFxuICAgICAgbG90X2RhdGE6IG51bGwsXG4gICAgICBkZWxfY2hlY2tfZmxnOiBmYWxzZSxcbiAgICAgIGRlbF9jaGVjazoge1xuICAgICAgICB0aXRsZTogXCLpg6jmnZDliYrpmaRcIixcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIumDqOadkOODh+ODvOOCv+OBr+OAgeW9ouW8j+ODnuOCueOCv+OAgeaui+aVsOeuoeeQhuODh+ODvOOCv+WQq+OCgeOAgeWFqOOBpuWJiumZpOOBleOCjOOBvuOBmeOAgjxicj7liYrpmaTlvozjga7lj5bmtojjga/jgafjgY3jgb7jgZvjgpPjgII8YnI+5pys5b2T44Gr5YmK6Zmk44GX44G+44GZ44GL77yfXCJcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjcmVhdGVkOiBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBhd2FpdCB0aGlzLmdldF9pdGVtX2RhdGEoKTtcbiAgICB0aGlzLml0ZW1faWQgPSB0aGlzLmdldF9zZXJpYWwoKTtcbiAgICBjb25zdCBzZWxlY3RlciA9IFtcImxvdF9udW1cIiwgXCJtaW5pbXVtX3NldFwiXTtcbiAgICB0aGlzLmxvdF9kYXRhID0gdGhpcy5zZWxlY3RlcihzZWxlY3Rlcik7XG4gICAgY29uc3Qgb3V0ID0gW1xuICAgICAgXCJpdGVtX2lkXCIsXG4gICAgICBcIml0ZW1fY29kZVwiLFxuICAgICAgXCJpdGVtX3JldlwiLFxuICAgICAgXCJsYXN0X251bVwiLFxuICAgICAgXCJhcHBvX251bVwiLFxuICAgICAgXCJsb3RfbnVtXCIsXG4gICAgICBcIm1pbmltdW1fc2V0XCIsXG4gICAgICBcIm9yZGVyX3dheVwiLFxuICAgICAgXCJvcmRlcl9wcmljZXNcIlxuICAgIF07XG4gICAgdGhpcy5vdXQob3V0KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIHVwKG9iLCBpZCkge1xuICAgICAgbGV0IGQgPSB0aGlzLnJ0X191cF9kYXRhX2l0ZW1zKG9iLCBpZCk7XG4gICAgICBkZWxldGUgZC5vcmRlcl9wcmljZXM7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2l0ZW1zL3VwZGF0ZS9wb3N0L1wiICsgaWQsIGQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdChcInBhc3NcIiwgeyB0eXBlOiBcImJhc2VfZGF0YVwiLCBkYXRhOiBkIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwYXNzKGQpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJwYXNzXCIsIGQpO1xuICAgIH0sXG4gICAgZGVsX2l0ZW0oKSB7XG4gICAgICBheGlvcy5nZXQoXG4gICAgICAgIFwiL2RiL2l0ZW1zL2RlbGV0ZS9pdGVtL1wiICsgdGhpcy5pdGVtX2NvZGUgKyBcIi9cIiArIHRoaXMuaXRlbV9yZXZcbiAgICAgICk7XG4gICAgICBhbGVydChcIumDqOadkOODh+ODvOOCv+OCkuWJiumZpOOBl+OBvuOBl+OBn+OAguODiOODg+ODl+ODmuODvOOCuOOBuOaIu+OCiuOBvuOBmeOAglwiKTtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogXCIvXCIgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiID5cbiNoZW5zaHUge1xuICAjaW5mb19hcmVhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5lZGl0IHtcbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgfVxuICAuZWRpdC5kb3dibGUge1xuICAgIC52LWlucHV0IHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG4gIH1cbiAgLnYtY2FyZF9fdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICAgIC52LWljb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xuICAgIH1cbiAgfVxuICAubWVudSB7XG4gICAgLnYtdGFic19fYmFyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG4gIH1cbiAgI2V0Yy1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgfVxuICAuc3VibWl0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4ubWluaSB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHYtZm9ybSB2LWlmPVwiaXRlbV9kYXRhXCIgY2xhc3M9XCJlZGl0XCIgaWQ9XCJpdGVtX2RhdGFcIiByZWY9XCJpdGVtX2RhdGFcIj5cbiAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgIDx2LWZsZXggeHM2IGNsYXNzPVwicHgtNFwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtX2RhdGFcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIDpuYW1lPVwiaXRlbS5uYW1lXCJcbiAgICAgICAgICA6cHJlcGVuZC1pbm5lci1pY29uPVwiaXRlbS5pY29uXCJcbiAgICAgICAgICA6bGFiZWw9XCJpdGVtLnRpdGxlXCJcbiAgICAgICAgICA6aWQ9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgIDpkaXNhYmxlZD1cIml0ZW0uZWRpdFwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgIHNtYWxsXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdi1sYXlvdXQ+XG4gICAgPHYtYnRuXG4gICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgZm9ybT1cIml0ZW1fZGF0YVwiXG4gICAgICBmbGF0XG4gICAgICBsYXJnZVxuICAgICAgYmxvY2tcbiAgICAgIG91dGxpbmVcbiAgICAgIGNsYXNzPVwic3VibWl0XCJcbiAgICAgIEBjbGljaz1cInN1Ym1pdCgpXCJcbiAgICA+e3sgc3VibWl0X3RleHQgfX08L3YtYnRuPlxuICA8L3YtZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJpdGVtX2RhdGFcIiwgXCJpdGVtX2lkXCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VibWl0X3RleHQ6IFwi44OH44O844K/5pu05pawXCJcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc3VibWl0KCkge1xuICAgICAgdGhpcy4kZW1pdChcInVwXCIsIHRoaXMuaXRlbV9kYXRhLCB0aGlzLml0ZW1faWQpO1xuICAgICAgdGhpcy5zdWJtaXRfdGV4dCA9IFwi5pu05paw5riI44G/XCI7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5lZGl0IHtcbiAgLnYtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXIgZ3JpZC1saXN0LXhzIGNsYXNzPVwiZWRpdCBkb3dibGVcIiB2LWlmPVwidmVuZF9saXN0XCI+XG4gICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGZsYXQgbGFyZ2UgYmxvY2sgb3V0bGluZSBAY2xpY2s9XCJhZGRcIj7ov73liqA8L3YtYnRuPlxuICAgIDx2LWxheW91dCByb3cgd3JhcCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gdmVuZG9yXCIgOmtleT1cImluZGV4XCIgbXQtNSBtYi01PlxuICAgICAgPHYtZmxleCB4czU+XG4gICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgIDppdGVtcz1cInZlbmRfbGlzdFwiXG4gICAgICAgICAgaXRlbS10ZXh0PVwiY29tX25hbWVcIlxuICAgICAgICAgIGl0ZW0tdmFsdWU9XCJ2ZW5kb3JfY29kZVwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0udmVuZG9yX2NvZGVcIlxuICAgICAgICAgIGxhYmVsPVwi5Y+W5byV5YWI5ZCNXCJcbiAgICAgICAgICBwcmVwZW5kLWlubmVyLWljb249XCJmYXIgZmEtYnVpbGRpbmdcIlxuICAgICAgICA+PC92LXNlbGVjdD5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czQgY2xhc3M9XCJwbC0zXCI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgIGxhYmVsPVwi6YeR6aGNXCJcbiAgICAgICAgICA6aWQ9XCIncHJpY2VfJyArIGluZGV4XCJcbiAgICAgICAgICB2LW1vZGVsPVwiaXRlbS52ZW5kb3JfaXRlbV9wcmljZVwiXG4gICAgICAgICAgcHJlcGVuZC1pbm5lci1pY29uPVwiZmFzIGZhLW1vbmV5LWJpbGwtd2F2ZVwiXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgIDwvdi1mbGV4PlxuICAgICAgPHYtZmxleCB4czIgY2xhc3M9XCJwbC0zXCI+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICBuYW1lPVwiYWRkX2RhdGVcIlxuICAgICAgICAgIGxhYmVsPVwi6Kq/5pW05pel5pWwXCJcbiAgICAgICAgICBoaW50PVwi5LiA5ous5omL6YWN5pmC44Gr5YWl5Yqb5YCk44Gu5YiG44Gu5pel5pWw44KS5Yqg566X44GX44G+44GZXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICA6aWQ9XCInYWRkX2RhdGUnICsgaW5kZXhcIlxuICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLm9yZGVyX2FkZF9kYXRlXCJcbiAgICAgICAgICBwcmVwZW5kLWlubmVyLWljb249XCJmYXMgZmEtbW9uZXktYmlsbC13YXZlXCJcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMT5cbiAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGZsYXQgaWNvbiBsYXJnZSBAY2xpY2s9XCJ2ZW5kb3Iuc3BsaWNlKGluZGV4LCAxKVwiPlxuICAgICAgICAgIDx2LWljb24+ZmFyIGZhLXRyYXNoLWFsdDwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgICAgPC92LWZsZXg+XG4gICAgPC92LWxheW91dD5cbiAgICA8di1idG4gY29sb3I9XCJzdWNjZXNzXCIgZmxhdCBsYXJnZSBibG9jayBvdXRsaW5lIEBjbGljaz1cInN1Ym1pdFwiPnt7IHN1Ym1pdF90ZXh0IH19PC92LWJ0bj5cbiAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwibWluaW1hdGNoXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJpdGVtX2lkXCIsIFwidmVuZG9yXCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geyB2ZW5kX2xpc3Q6IG51bGwsIHN1Ym1pdF90ZXh0OiBcIuaxuuWumlwiIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGF3YWl0IGF4aW9zLmdldChcIi92ZW5kb3IvbGlzdFwiKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnZlbmRfbGlzdCA9IHJlcy5kYXRhO1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkKCkge1xuICAgICAgdGhpcy52ZW5kb3IucHVzaCh7XG4gICAgICAgIGl0ZW1faWQ6IHRoaXMuaXRlbV9pZCxcbiAgICAgICAgdmVuZG9yX2NvZGU6IFwiXCIsXG4gICAgICAgIGNvbV9uYW1lOiBcIlwiLFxuICAgICAgICB2ZW5kb3JfaXRlbV9wcmljZTogMCxcbiAgICAgICAgb3JkZXJfYWRkX2RhdGU6IDBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgY29uc3QgZCA9IHRoaXMudmVuZG9yLmZpbHRlcihhciA9PiBhci52ZW5kb3JfY29kZSAhPT0gXCJcIik7XG4gICAgICBjb25zdCBmID0gZC5tYXAoYXIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGl0ZW1faWQ6IGFyLml0ZW1faWQsXG4gICAgICAgICAgdmVuZG9yX2NvZGU6IGFyLnZlbmRvcl9jb2RlLFxuICAgICAgICAgIHZlbmRvcl9pdGVtX3ByaWNlOiBhci52ZW5kb3JfaXRlbV9wcmljZSxcbiAgICAgICAgICBvcmRlcl9hZGRfZGF0ZTogYXIub3JkZXJfYWRkX2RhdGVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgYXhpb3MucG9zdChcIi92ZW5kb3ItaXRlbS91cC9cIiArIHRoaXMuaXRlbV9pZCwgZikudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnN1Ym1pdF90ZXh0ID0gXCLmm7TmlrDmuIjjgb9cIjtcbiAgICAgICAgdGhpcy4kZW1pdChcInBhc3NcIiwgeyB0eXBlOiBcIm9yZGVyX3ByaWNlXCIsIGRhdGE6IHJlcy5kYXRhIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8di1mb3JtIHYtaWY9XCJsb3RfZGF0YVwiIGlkPVwibG90XCIgY2xhc3M9XCJlZGl0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgPHYtcmFkaW8tZ3JvdXAgdi1tb2RlbD1cInJlZGlvXCI+XG4gICAgICA8di1yYWRpbyB2LWZvcj1cIihkLCBuKSBpbiByZWRpb1ZhbHVlXCIgOmtleT1cIm5cIiA6bGFiZWw9XCJkXCIgOnZhbHVlPVwiblwiIHYtb246Y2hhbmdlPVwiY2hhbmdlXCI+PC92LXJhZGlvPlxuICAgIDwvdi1yYWRpby1ncm91cD5cbiAgICA8di1leHBhbmQteC10cmFuc2l0aW9uPlxuICAgICAgPGRpdiB2LWlmPVwicmVkaW89PT0xXCI+XG4gICAgICAgIDx2LXRleHQtZmllbGQgbmFtZT1cImxvdF9udW1cIiBsYWJlbD1cIu+8rO+8r++8tOaJi+mFjeaVsFwiIGlkPVwibG90X251bVwiIHYtbW9kZWw9XCJsb3RfbnVtXCI+PC92LXRleHQtZmllbGQ+XG4gICAgICAgIDx2LXRleHQtZmllbGQgbmFtZT1cIm1pbmltdW1fc2V0XCIgbGFiZWw9XCLmnIDlsI/kv53mjIHmlbBcIiBpZD1cIm1pbmltdW1fc2V0XCIgdi1tb2RlbD1cIm1pbmltdW1fc2V0XCI+PC92LXRleHQtZmllbGQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L3YtZXhwYW5kLXgtdHJhbnNpdGlvbj5cbiAgICA8di1idG5cbiAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgIGZvcm09XCJsb3RcIlxuICAgICAgZmxhdFxuICAgICAgbGFyZ2VcbiAgICAgIGJsb2NrXG4gICAgICBvdXRsaW5lXG4gICAgICBjbGFzcz1cInN1Ym1pdFwiXG4gICAgPnt7IHN1Ym1pdF90ZXh0IH19PC92LWJ0bj5cbiAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wibG90X2RhdGFcIiwgXCJpdGVtX2lkXCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaW9WYWx1ZTogW1wi6YCa5bi45omL6YWNXCIsIFwi77ys77yv77y05omL6YWNXCIsIFwi5pSv57Wm5ZOBXCJdLFxuICAgICAgcmVkaW86IDAsXG4gICAgICBsb3RfbnVtOiAwLFxuICAgICAgbWluaW11bV9zZXQ6IDAsXG4gICAgICBzdWJtaXRfdGV4dDogXCLjg4fjg7zjgr/mm7TmlrBcIlxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubG90X2RhdGEuZm9yRWFjaChhciA9PiB7XG4gICAgICBpZiAoYXIubmFtZSA9PT0gXCJsb3RfbnVtXCIpIHtcbiAgICAgICAgdGhpcy5sb3RfbnVtID0gYXIudmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGFyLm5hbWUgPT09IFwibWluaW11bV9zZXRcIikge1xuICAgICAgICB0aGlzLm1pbmltdW1fc2V0ID0gYXIudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3dpdGNoICh0aGlzLmxvdF9udW0pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHRoaXMucmVkaW8gPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTI6XG4gICAgICAgIHRoaXMucmVkaW8gPSAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMucmVkaW8gPSAxO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGFuZ2UoZSkge1xuICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLmxvdF9udW0gPSAtMTtcbiAgICAgICAgICB0aGlzLm1pbmltdW1fc2V0ID0gLTE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAodGhpcy5sb3RfbnVtID09PSAtMSB8fCB0aGlzLmxvdF9udW0gPT09IC0yKSB7XG4gICAgICAgICAgICB0aGlzLmxvdF9udW0gPSAwO1xuICAgICAgICAgICAgdGhpcy5taW5pbXVtX3NldCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5sb3RfbnVtID0gLTI7XG4gICAgICAgICAgdGhpcy5taW5pbXVtX3NldCA9IC0xO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc3VibWl0KCkge1xuICAgICAgY29uc3QgZCA9IHtcbiAgICAgICAgbG90X251bTogdGhpcy5sb3RfbnVtLFxuICAgICAgICBtaW5pbXVtX3NldDogdGhpcy5taW5pbXVtX3NldFxuICAgICAgfTtcbiAgICAgIHRoaXMuJGVtaXQoXCJwYXNzXCIsIHsgdHlwZTogXCJvcmRlcl93YXlcIiwgZGF0YTogZCB9KTtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvaXRlbXMvdXBkYXRlL3Bvc3QvXCIgKyB0aGlzLml0ZW1faWQsIGQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zdWJtaXRfdGV4dCA9IFwi5pu05paw5riI44G/XCI7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDx2LWxheW91dCByb3cgd3JhcCBpZD1cImltYWdlc1wiIHYtaWY9XCJpbWFnZXNcIj5cbiAgICA8di1mbGV4IHYtZm9yPVwiKGltYWdlLCBpbmRleCkgaW4gaW1hZ2VzXCIgOmtleT1cImluZGV4XCIgOmNsYXNzPVwiY29sXCI+XG4gICAgICA8di1jYXJkIGNsYXNzPVwic3F1YXJlXCIgQGNsaWNrPVwidmlldyhpbWFnZSlcIiBob3Zlcj5cbiAgICAgICAgPHYtaW1nIDpzcmM9XCJpbWFnZS5iYXNlNjRcIiBjbGFzcz1cImNvbnRlbnRcIiA6bGF6eS1zcmM9XCJsb2FkaW5nNjRcIj48L3YtaW1nPlxuICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWZsZXg+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJsZXNfY250ID4gMCAmJiBldGNcIj5cbiAgICAgIDx2LWZsZXggdi1mb3I9XCIobiwgaW5kZXgpIGluIGxlc19jbnRcIiA6a2V5PVwiJ25vJyArIGluZGV4XCIgOmNsYXNzPVwiY29sXCI+XG4gICAgICAgIDx2LWNhcmQgY2xhc3M9XCJzcXVhcmVcIiBkYXJrPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHYtaWNvbj5mYXMgZmEtdmlkZW8tc2xhc2g8L3YtaWNvbj5cbiAgICAgICAgICAgIDxzcGFuPm5vIGltYWdlPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICA8L3YtZmxleD5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx2LWRpYWxvZ1xuICAgICAgdi1tb2RlbD1cImJpZ19pbWdcIlxuICAgICAgdHJhbnNpdGlvbj1cImRpYWxvZy10cmFuc2l0aW9uXCJcbiAgICAgIGRhcmtcbiAgICAgIDp3aWR0aD1cImJpZ19pbWdfd2lkdGhcIlxuICAgICAgOmhlaWdodD1cImJpZ19pbWdfaGVpZ2h0XCJcbiAgICA+XG4gICAgICA8di10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICBGaWxlXG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICA8di1idG4gZmxhdCBkYXJrIEBjbGljaz1cImNsb3NlXCI+XG4gICAgICAgICAgPHYtaWNvbiBsZWZ0PmZhciBmYS10aW1lcy1jaXJjbGU8L3YtaWNvbj5cbiAgICAgICAgICA8c3Bhbj7plonjgZjjgos8L3NwYW4+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICAgIDx2LWJ0biBmbGF0IGRhcmsgQGNsaWNrPVwiZGVsZXRlSW1nXCI+XG4gICAgICAgICAgPHYtaWNvbiBsZWZ0PmZhciBmYS10cmFzaC1hbHQ8L3YtaWNvbj5cbiAgICAgICAgICA8c3Bhbj7liYrpmaQ8L3NwYW4+XG4gICAgICAgIDwvdi1idG4+XG4gICAgICA8L3YtdG9vbGJhcj5cbiAgICAgIDxpbWcgOnNyYz1cImJpZ19pbWdfNjRcIj5cbiAgICA8L3YtZGlhbG9nPlxuICA8L3YtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBMaWdodGJveCBmcm9tIFwidnVlLW15LXBob3Rvc1wiO1xuaW1wb3J0IGxvYWRpbmc2NCBmcm9tIFwiLi8uLi8uLi9taXhpbnMvbG9hZGluZzY0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbbG9hZGluZzY0XSxcbiAgY29tcG9uZW50czoge1xuICAgIGxpZ2h0Ym94OiBMaWdodGJveFxuICB9LFxuICBwcm9wczoge1xuICAgIHBhdGg6IFN0cmluZyxcbiAgICBjb2w6IHtcbiAgICAgIGRlZmF1bHQ6IFwieHMzXCJcbiAgICB9LFxuICAgIGV0Yzoge1xuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGltZzogXCJcIixcbiAgICAgIGltYWdlczogW10sXG4gICAgICBsZXNfY250OiAwLFxuICAgICAgYmlnX2ltZzogZmFsc2UsXG4gICAgICBiaWdfaW1nXzY0OiBcIlwiLFxuICAgICAgYmlnX2ltZ19uYW1lOiBcIlwiLFxuICAgICAgYmlnX2ltZ193aWR0aDogXCJcIixcbiAgICAgIGJpZ19pbWdfaGVpZ2h0OiBcIlwiXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXRfZmlsZV9saXN0KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRfZmlsZV9saXN0KCkge1xuICAgICAgY29uc3QgZ2V0X2RhdGEgPSB7XG4gICAgICAgIHBhdGg6IHRoaXMucGF0aFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvdXBsb2FkL2NoZWNrL2l0ZW1zXCIsIGdldF9kYXRhKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmICghcmVzLmRhdGEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZXMgPSByZXMuZGF0YTtcbiAgICAgICAgdGhpcy5sZXNfY250ID0gNCAtIHRoaXMuaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaChhciA9PiB7XG4gICAgICAgICAgbGV0IGkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBpLnNyYyA9IGFyLmJhc2U2NDtcbiAgICAgICAgICBpLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGFyLmhlaWdodCA9IGkuaGVpZ2h0O1xuICAgICAgICAgICAgYXIud2lkdGggPSBpLndpZHRoO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB2aWV3KGltZykge1xuICAgICAgdGhpcy5iaWdfaW1nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYmlnX2ltZ182NCA9IGltZy5iYXNlNjQ7XG4gICAgICB0aGlzLmJpZ19pbWdfbmFtZSA9IGltZy5wYXRoO1xuICAgICAgdGhpcy5iaWdfaW1nX3dpZHRoID0gaW1nLndpZHRoO1xuICAgICAgdGhpcy5iaWdfaW1nX2hlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuYmlnX2ltZyA9IGZhbHNlO1xuICAgICAgdGhpcy5iaWdfaW1nXzY0ID0gXCJcIjtcbiAgICAgIHRoaXMuYmlnX2ltZ19uYW1lID0gXCJcIjtcbiAgICAgIHRoaXMuYmlnX2ltZ193aWR0aCA9IFwiXCI7XG4gICAgICB0aGlzLmJpZ19pbWdfaGVpZ2h0ID0gXCJcIjtcbiAgICB9LFxuICAgIGRlbGV0ZUltZygpIHtcbiAgICAgIGxldCBkID0ge1xuICAgICAgICBwYXRoOiB0aGlzLmJpZ19pbWdfbmFtZVxuICAgICAgfTtcbiAgICAgIGF4aW9zLnBvc3QoXCIvdXBsb2FkL2RlbGV0ZS9pdGVtc1wiLCBkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB0aGlzLmltYWdlcy5maWx0ZXIoYXIgPT4ge1xuICAgICAgICAgIHJldHVybiBhci5wYXRoICE9PSB0aGlzLmJpZ19pbWdfbmFtZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4jaW1hZ2VzIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC5mbGV4IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIC5zcXVhcmUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyDkuLhcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDQwJTtcbiAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIC8vIOOBk+OBk+OBp+mrmOOBleavlFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB9XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyDjg4bjgq3jgrnjg4jjgpLkuK3lpK7jgatcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4jaW1hZ2VzIHtcbiAgLnYtZGlhbG9nIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXI+XG4gICAgPHYtbGF5b3V0IHRleHQteHMtY2VudGVyIHdyYXAgY2xhc3M9XCJlZGl0XCI+XG4gICAgICA8di1mbGV4IHhzMTIgbWItMz5cbiAgICAgICAgPHYtYnRuXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJpc1VwbG9hZGluZ1wiXG4gICAgICAgICAgQGNsaWNrPVwic3VibWl0XCJcbiAgICAgICAgICBpZD1cInN1Ym1pdFwiXG4gICAgICAgID57eyBzdWJtaXRfbWVzc2FnZSB9fTwvdi1idG4+XG4gICAgICA8L3YtZmxleD5cbiAgICAgIDx2LWZsZXggeHMxMj5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgIG5hbWU9XCJzZWxlY3RfaW1hZ2VcIlxuICAgICAgICAgIGxhYmVsPVwi55S75YOP6YG45oqeXCJcbiAgICAgICAgICBpZD1cInNlbGVjdF9pbWFnZVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBAY2xpY2s9XCJwaWNrRmlsZVwiXG4gICAgICAgICAgdi1tb2RlbD1cInVwaW1hZ2UuZmlsZU5hbWVcIlxuICAgICAgICAgIHByZXBlbmQtaW5uZXItaWNvbj1cImF0dGFjaF9maWxlXCJcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgbmFtZT1cImZpbGVfcGF0aFwiXG4gICAgICAgICAgbGFiZWw9XCLkv53lrZjlhYhcIlxuICAgICAgICAgIGlkPVwic2V2ZV9kaXJcIlxuICAgICAgICAgIHYtbW9kZWw9XCJ1cGltYWdlLmZpbGVQYXRoXCJcbiAgICAgICAgICBwcmVwZW5kLWlubmVyLWljb249XCJlZGl0XCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJwYXRoX2ZsZ1wiXG4gICAgICAgICAgaGludD1cIi9wdWJsaWMvaW1nIOOBruS4i+OBq+S/neWtmOOBleOCjOOBvuOBmSgvc3RvcmFnZS9hcHAvcHVibGljL2ltZylcIlxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICBuYW1lPVwiZmlsZV9uYW1lXCJcbiAgICAgICAgICBsYWJlbD1cIuODleOCoeOCpOODq+WQjVwiXG4gICAgICAgICAgaWQ9XCJmaWxlX25hbWVcIlxuICAgICAgICAgIHYtbW9kZWw9XCJ1cGltYWdlLnNldE5hbWVcIlxuICAgICAgICAgIHByZXBlbmQtaW5uZXItaWNvbj1cImZhcyBmYS1zYXZlXCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJuYW1lX2ZsZ1wiXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgQGNoYW5nZT1cInNlbGVjdGVkRmlsZVwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cImltYWdlL2pwZWcsIGltYWdlL2pwZywgaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIlxuICAgICAgICAgIHJlZj1cImltYWdlXCJcbiAgICAgICAgPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDx2LWltZyA6c3JjPVwidXBpbWFnZS5maWxlVXJsXCIgYXNwZWN0LXJhdGlvPVwiMlwiIDpjb250YWluPVwidHJ1ZVwiIHYtaWY9XCJ1cGltYWdlLmZpbGVVcmxcIj48L3YtaW1nPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTIgdi1pZj1cIml0ZW1fY2xlYXJfZmxnXCI+XG4gICAgICAgIDxJdGVtSW1nIDpwYXRoPVwidXBpbWFnZS5maWxlUGF0aFwiLz5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdi1sYXlvdXQ+XG4gICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJ1cG1lc3NhZ2VcIiBtYXgtd2lkdGg9XCI1MDBweFwiIGhlaWdodD1cIjMwMHB4O1wiIEBpbnB1dD1cImNsb3NlXCI+XG4gICAgICA8di1jYXJkIHBhLTI+XG4gICAgICAgIDx2LWFsZXJ0IHR5cGU9XCJpbmZvXCIgOnZhbHVlPVwidHJ1ZVwiIG91dGxpbmU+XG4gICAgICAgICAgPHNwYW4+55S75YOP55m76Yyy5Yem55CG44GM5a6M5LqG44GX44G+44GX44GfPC9zcGFuPlxuICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZGlhbG9nPlxuICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbWFnZVV0aWwgZnJvbSBcIi4vbGliL0ltYWdlVXRpbFwiO1xuaW1wb3J0IGxvYWRpbmc2NCBmcm9tIFwiLi8uLi8uLi9taXhpbnMvbG9hZGluZzY0LmpzXCI7XG5pbXBvcnQgSXRlbUltZyBmcm9tIFwiLi8uLi9JdGVtRGF0YS9JdGVtSW1nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbbG9hZGluZzY0XSxcbiAgY29tcG9uZW50czogeyBJdGVtSW1nIH0sXG4gIHByb3BzOiBbXCJpdGVtX2NvZGVcIiwgXCJpdGVtX3JldlwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNVcGxvYWRpbmc6IHRydWUsIC8vIOeUu+WDj+ODleOCoeOCpOODq+OCouODg+ODl+ODreODvOODieS4reOBruWIpOaWreODleODqeOCsFxuICAgICAgdXBpbWFnZToge1xuICAgICAgICBmaWxlVXJsOiBcIlwiLFxuICAgICAgICBmaWxlTmFtZTogXCJcIixcbiAgICAgICAgYmxvYjogbnVsbCxcbiAgICAgICAgZmlsZVBhdGg6IFwiXCIsXG4gICAgICAgIHNldE5hbWU6IFwi5pel5LuY5pmC5Yi7IO+8iyDjg6njg7Pjg4Djg6Djgaroi7HmlbDlgKTjgYzjg5XjgqHjgqTjg6vlkI3jgajjgZfjgabnmbvpjLLjgZXjgozjgb7jgZlcIlxuICAgICAgfSwgLy8g55S75YOP44OV44Kh44Kk44OrXG4gICAgICBmaWxlSW5mbzoge1xuICAgICAgICBiZWZvcmU6IHsgc2l6ZTogMCB9LFxuICAgICAgICBhZnRlcjogeyBzaXplOiAwIH1cbiAgICAgIH0sXG4gICAgICB1cG1lc3NhZ2U6IGZhbHNlLFxuICAgICAgc3VibWl0X21lc3NhZ2U6IFwi55m76YyyXCIsXG4gICAgICBwYXRoX2ZsZzogZmFsc2UsXG4gICAgICBuYW1lX2ZsZzogdHJ1ZSxcbiAgICAgIGl0ZW1fY2xlYXJfZmxnOiB0cnVlXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5nZXREZWZhdWx0cGF0aCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGlja0ZpbGUoKSB7XG4gICAgICB0aGlzLiRyZWZzLmltYWdlLmNsaWNrKCk7XG4gICAgfSxcbiAgICBnZXREZWZhdWx0cGF0aCgpIHtcbiAgICAgIGlmICh0aGlzLml0ZW1fY29kZSAmJiB0aGlzLml0ZW1fcmV2KSB7XG4gICAgICAgIHRoaXMudXBpbWFnZS5maWxlUGF0aCA9XG4gICAgICAgICAgXCIvaW1nL2l0ZW1zL1wiICsgdGhpcy5pdGVtX2NvZGUgKyBcIi9cIiArIHRoaXMuaXRlbV9yZXYgKyBcIi9cIjtcbiAgICAgICAgdGhpcy5wYXRoX2ZsZyA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNlbGVjdGVkRmlsZShlKSB7XG4gICAgICB0aGlzLmlzVXBsb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g5Zyn57iu44GX44Gf55S75YOP44KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IGNvbXBGaWxlID0gYXdhaXQgSW1hZ2VVdGlsLmdldENvbXByZXNzSW1hZ2VGaWxlQXN5bmMoZmlsZSk7XG5cbiAgICAgICAgLy/jg5XjgqHjgqTjg6vjgrXjgqTjgrrjga7ooajnpLpcbiAgICAgICAgdGhpcy5maWxlSW5mby5iZWZvcmUuc2l6ZSA9IChmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCg0KTtcbiAgICAgICAgdGhpcy5maWxlSW5mby5hZnRlci5zaXplID0gKGNvbXBGaWxlLnNpemUgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCg0KTtcbiAgICAgICAgLy8g55S75YOP5oOF5aCx44Gu6Kit5a6aXG4gICAgICAgIHRoaXMudXBpbWFnZS5ibG9iID0gY29tcEZpbGU7XG4gICAgICAgIHRoaXMudXBpbWFnZS5maWxlVXJsID0gYXdhaXQgSW1hZ2VVdGlsLmdldERhdGFVcmxGcm9tRmlsZShjb21wRmlsZSk7XG4gICAgICAgIHRoaXMudXBpbWFnZS5maWxlTmFtZSA9IGZpbGUubmFtZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyDjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjnrYnjgpLooajnpLpcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuc3VibWl0X21lc3NhZ2UgPSBcImxvYWRpbmcgLi4uXCI7XG4gICAgICB0aGlzLml0ZW1fY2xlYXJfZmxnID0gZmFsc2U7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkID0ge307XG4gICAgICAgIGQuYmFzZTY0ID0gdGhpcy51cGltYWdlLmZpbGVVcmw7XG4gICAgICAgIGQudHlwZSA9IHRoaXMudXBpbWFnZS5ibG9iLnR5cGU7XG4gICAgICAgIGQuaXRlbV9jb2RlID0gdGhpcy5pdGVtX2NvZGU7XG4gICAgICAgIGQuaXRlbV9yZXYgPSB0aGlzLml0ZW1fcmV2O1xuICAgICAgICBkLnBhdGggPSBcIi9pdGVtcy9cIjtcbiAgICAgICAgYXhpb3MucG9zdChcIi91cGxvYWQvaXRlbXMvaW1hZ2VcIiwgZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMudXBtZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN1Ym1pdF9tZXNzYWdlID0gXCJmaW5pc2ghIVwiO1xuICAgICAgICAgIHRoaXMuaXRlbV9jbGVhcl9mbGcgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVyXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLnVwaW1hZ2UuZmlsZVVybCA9IFwiXCI7XG4gICAgICB0aGlzLnVwaW1hZ2UuZmlsZU5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy51cGltYWdlLmJsb2IgPSBudWxsO1xuICAgICAgdGhpcy5zdWJtaXRfbWVzc2FnZSA9IFwi55m76YyyXCI7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDx2LWFsZXJ0IHR5cGU9XCJ3YXJuaW5nXCIgOnZhbHVlPVwidHJ1ZVwiIG91dGxpbmUgY2xhc3M9XCJiYWNrXCI+XG4gICAgPHYtbGF5b3V0IHdyYXA+XG4gICAgICA8di1mbGV4IHhzMTI+XG4gICAgICAgIDxoMT57eyBkYXRhLnRpdGxlIH19PC9oMT5cbiAgICAgICAgPHAgdi1odG1sPVwiZGF0YS5tZXNzYWdlXCIgY2xhc3M9XCJtZXNzYWdlXCI+PC9wPlxuICAgICAgPC92LWZsZXg+XG4gICAgICA8di1mbGV4IHhzMTIgY2xhc3M9XCJkZWwtaW5mb1wiPlxuICAgICAgICA8di1sYXlvdXQgd3JhcD5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGRhdGEuZGF0YV92MlwiPlxuICAgICAgICAgICAgPHYtZmxleCB4czYgY2xhc3M9XCJtYi0yXCIgOmtleT1cIid0aXRsZScgKyBpbmRleFwiPnt7IGl0ZW1bMF0gfX08L3YtZmxleD5cbiAgICAgICAgICAgIDx2LWZsZXggeHM2IGNsYXNzPVwibWItMlwiIDprZXk9XCInY29sdW1uJyArIGluZGV4XCI+e3sgaXRlbVsxXSB9fTwvdi1mbGV4PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHYtZmxleCB4czggb2Zmc2V0LXhzMiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cIndhcm5pbmdcIiBjbGFzcz1cInN1Ym1pdC1idG5cIiBvdXRsaW5lIEBjbGljaz1cInN1Ym1pdCgpXCI+5rG65a6aPC92LWJ0bj5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPC92LWxheW91dD5cbiAgICAgIDwvdi1mbGV4PlxuICAgIDwvdi1sYXlvdXQ+XG4gIDwvdi1hbGVydD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJkYXRhXCJdLFxuICBtZXRob2RzOiB7XG4gICAgc3VibWl0KCkge1xuICAgICAgdGhpcy4kZW1pdChcInJ0XCIsIHRoaXMuZGF0YSwgdHJ1ZSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZGVsLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3VibWl0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNoZW5zaHUgI2luZm9fYXJlYSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuI2hlbnNodSAjaW5mb19hcmVhIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiAzMCU7XFxufVxcbiNoZW5zaHUgI2luZm9fYXJlYSBzcGFuIHN0cm9uZyB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbiNoZW5zaHUgLmVkaXQgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuI2hlbnNodSAuZWRpdC5kb3dibGUgLnYtaW5wdXQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogOTUlO1xcbn1cXG4jaGVuc2h1IC52LWNhcmRfX3RpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbn1cXG4jaGVuc2h1IC52LWNhcmRfX3RpdGxlIC52LWljb24ge1xcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcbn1cXG4jaGVuc2h1IC5tZW51IC52LXRhYnNfX2JhciB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbiNoZW5zaHUgI2V0Yy1idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaGVuc2h1ICNldGMtYnV0dG9uIGkge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuI2hlbnNodSAjZXRjLWJ1dHRvbiBidXR0b24ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuI2hlbnNodSAuc3VibWl0IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLm1pbmkge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lZGl0IC52LWljb25bZGF0YS12LTlmZTI3ZWVjXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2ltYWdlc1tkYXRhLXYtMjgwOGEwNDldIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiNpbWFnZXMgLmZsZXhbZGF0YS12LTI4MDhhMDQ5XSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4jaW1hZ2VzIC5mbGV4IC5zcXVhcmVbZGF0YS12LTI4MDhhMDQ5XSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2ltYWdlcyAuZmxleCAuc3F1YXJlW2RhdGEtdi0yODA4YTA0OV06OmFmdGVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuI2ltYWdlcyAuZmxleCAuc3F1YXJlIC5jb250ZW50W2RhdGEtdi0yODA4YTA0OV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNpbWFnZXMgLmZsZXggLnNxdWFyZSAuY29udGVudFtkYXRhLXYtMjgwOGEwNDldOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNpbWFnZXMgLnYtZGlhbG9nIHtcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaDFbZGF0YS12LTZlYzNlNWE4XSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmJhY2tbZGF0YS12LTZlYzNlNWE4XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uZGVsLWluZm9bZGF0YS12LTZlYzNlNWE4XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdWJtaXQtYnRuW2RhdGEtdi02ZWMzZTVhOF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi02ZWMzZTVhOF0ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmUyN2VlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmUyN2VlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZlMjdlZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODA4YTA0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODA4YTA0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjgwOGEwNDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmVjM2U1YTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZlYzNlNWE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmVjM2U1YTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImhlbnNodVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uaVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2hpcFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcImNoaXAgXCIgKyBfdm0uaS5pdGVtX2NsYXNzX3ZhbC5jdXN0b20sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBvdXRsaW5lOiBcIlwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pLml0ZW1fY2xhc3NfdmFsLnZhbHVlKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJpdGVtX2NvZGVcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLml0ZW1fY29kZSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtaW5pXCIsIGF0dHJzOiB7IGlkOiBcIml0ZW1fcmV2XCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKE51bWJlcihfdm0uaXRlbV9yZXYpLm51bVRvUmV2KCkpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kZWxcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJlcnJvclwiLCBvdXRsaW5lOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbF9jaGVja19mbGcgPSAhX3ZtLmRlbF9jaGVja19mbGdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImRlbGV0ZVwiKV0pLCBfdm0uX3YoXCLliYrpmaRcXG4gICAgICBcIildLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImVycm9yXCIsIG91dGxpbmU6IFwiXCIsIGRpc2FibGVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbF9jaGVja19mbGcgPSAhX3ZtLmRlbF9jaGVja19mbGdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImRlbGV0ZVwiKV0pLCBfdm0uX3YoXCLliYrpmaRcXG4gICAgICBcIildLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmx1aWQ6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdGFic1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwic2xpZGVyLWNvbG9yXCI6IFwicHJpbWFyeVwiLCBcImZpeGVkLXRhYnNcIjogXCJcIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFiLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS50YWIgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRhYlwiLCBbX3ZtLl92KFwi5Z+65pys5oOF5aCxXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10YWJcIiwgW192bS5fdihcIuaJi+mFjeaWueazlVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGFiXCIsIFtfdm0uX3YoXCLph5HpoY1cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRhYlwiLCBbX3ZtLl92KFwi55S75YOPXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10YWItaXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5pdGVtX2RhdGFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkJhc2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV9kYXRhOiBfdm0uaXRlbV9kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX2lkOiBfdm0uaXRlbV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHVwOiBfdm0udXAsIHBhc3M6IF92bS5wYXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10YWItaXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5sb3RfZGF0YVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiT3JkZXJXYXlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbG90X2RhdGE6IF92bS5sb3RfZGF0YSwgaXRlbV9pZDogX3ZtLml0ZW1faWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHBhc3M6IF92bS5wYXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10YWItaXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiT3JkZXJQcmljZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1faWQ6IF92bS5pdGVtX2lkLCB2ZW5kb3I6IF92bS52ZW5kb3IgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgcGFzczogX3ZtLnBhc3MgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVVwbG9hZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1fY29kZTogX3ZtLml0ZW1fY29kZSwgaXRlbV9yZXY6IF92bS5pdGVtX3JldiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiNTAlXCIsIHRyYW5zaXRpb246IFwiZGlhbG9nLXRyYW5zaXRpb25cIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRlbF9jaGVja19mbGcsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxfY2hlY2tfZmxnID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZWxfY2hlY2tfZmxnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkRlbENoZWNrXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5kZWxfY2hlY2sgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbF9pdGVtKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLml0ZW1fZGF0YVxuICAgID8gX2MoXG4gICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgIHsgcmVmOiBcIml0ZW1fZGF0YVwiLCBzdGF0aWNDbGFzczogXCJlZGl0XCIsIGF0dHJzOiB7IGlkOiBcIml0ZW1fZGF0YVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uaXRlbV9kYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInB4LTRcIiwgYXR0cnM6IHsgeHM2OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pbm5lci1pY29uXCI6IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpdGVtLmVkaXQsXG4gICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGZvcm06IFwiaXRlbV9kYXRhXCIsXG4gICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5zdWJtaXRfdGV4dCkpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS52ZW5kX2xpc3RcbiAgICA/IF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZWRpdCBkb3dibGVcIiwgYXR0cnM6IHsgXCJncmlkLWxpc3QteHNcIjogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICBsYXJnZTogXCJcIixcbiAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWRkIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi6L+95YqgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnZlbmRvciwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIsIFwibXQtNVwiOiBcIlwiLCBcIm1iLTVcIjogXCJcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHhzNTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnZlbmRfbGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwiY29tX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcInZlbmRvcl9jb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLlj5blvJXlhYjlkI1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pbm5lci1pY29uXCI6IFwiZmFyIGZhLWJ1aWxkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52ZW5kb3JfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJ2ZW5kb3JfY29kZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnZlbmRvcl9jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBsLTNcIiwgYXR0cnM6IHsgeHM0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLph5HpoY1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInByaWNlX1wiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBcImZhcyBmYS1tb25leS1iaWxsLXdhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZlbmRvcl9pdGVtX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcInZlbmRvcl9pdGVtX3ByaWNlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0udmVuZG9yX2l0ZW1fcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGwtM1wiLCBhdHRyczogeyB4czI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYWRkX2RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuiqv+aVtOaXpeaVsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCLkuIDmi6zmiYvphY3mmYLjgavlhaXlipvlgKTjga7liIbjga7ml6XmlbDjgpLliqDnrpfjgZfjgb7jgZlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJhZGRfZGF0ZVwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByZXBlbmQtaW5uZXItaWNvblwiOiBcImZhcyBmYS1tb25leS1iaWxsLXdhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLm9yZGVyX2FkZF9kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcIm9yZGVyX2FkZF9kYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ub3JkZXJfYWRkX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52ZW5kb3Iuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImZhciBmYS10cmFzaC1hbHRcIildKV0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgb3V0bGluZTogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnN1Ym1pdCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnN1Ym1pdF90ZXh0KSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmxvdF9kYXRhXG4gICAgPyBfYyhcbiAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVkaXRcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJsb3RcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlZGlvLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5yZWRpbyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWRpb1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnJlZGlvVmFsdWUsIGZ1bmN0aW9uKGQsIG4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBuLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBkLCB2YWx1ZTogbiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmNoYW5nZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LWV4cGFuZC14LXRyYW5zaXRpb25cIiwgW1xuICAgICAgICAgICAgX3ZtLnJlZGlvID09PSAxXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibG90X251bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi77ys77yv77y05omL6YWN5pWwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJsb3RfbnVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvdF9udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb3RfbnVtID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb3RfbnVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWluaW11bV9zZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuacgOWwj+S/neaMgeaVsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWluaW11bV9zZXRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWluaW11bV9zZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5taW5pbXVtX3NldCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWluaW11bV9zZXRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgZm9ybTogXCJsb3RcIixcbiAgICAgICAgICAgICAgICBmbGF0OiBcIlwiLFxuICAgICAgICAgICAgICAgIGxhcmdlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5zdWJtaXRfdGV4dCkpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pbWFnZXNcbiAgICA/IF9jKFxuICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiLCBpZDogXCJpbWFnZXNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLmltYWdlcywgZnVuY3Rpb24oaW1hZ2UsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgY2xhc3M6IF92bS5jb2wgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3F1YXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhvdmVyOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52aWV3KGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaW1hZ2UuYmFzZTY0LCBcImxhenktc3JjXCI6IF92bS5sb2FkaW5nNjQgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5sZXNfY250ID4gMCAmJiBfdm0uZXRjXG4gICAgICAgICAgICA/IF92bS5fbChfdm0ubGVzX2NudCwgZnVuY3Rpb24obiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IFwibm9cIiArIGluZGV4LCBjbGFzczogX3ZtLmNvbCB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3F1YXJlXCIsIGF0dHJzOiB7IGRhcms6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYXMgZmEtdmlkZW8tc2xhc2hcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwibm8gaW1hZ2VcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImRpYWxvZy10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGFyazogXCJcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLmJpZ19pbWdfd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0uYmlnX2ltZ19oZWlnaHRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJpZ19pbWcsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLmJpZ19pbWcgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmlnX2ltZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIEZpbGVcXG4gICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiwgZGFyazogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgbGVmdDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImZhciBmYS10aW1lcy1jaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6ZaJ44GY44KLXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgZGFyazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGVsZXRlSW1nIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgbGVmdDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImZhciBmYS10cmFzaC1hbHRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YmK6ZmkXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmJpZ19pbWdfNjQgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY29udGFpbmVyXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlZGl0XCIsIGF0dHJzOiB7IFwidGV4dC14cy1jZW50ZXJcIjogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHhzMTI6IFwiXCIsIFwibWItM1wiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5pc1VwbG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnN1Ym1pdCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc3VibWl0X21lc3NhZ2UpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNlbGVjdF9pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi55S75YOP6YG45oqeXCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJzZWxlY3RfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pbm5lci1pY29uXCI6IFwiYXR0YWNoX2ZpbGVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5waWNrRmlsZSB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVwaW1hZ2UuZmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51cGltYWdlLCBcImZpbGVOYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVwaW1hZ2UuZmlsZU5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlX3BhdGhcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuS/neWtmOWFiFwiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwic2V2ZV9kaXJcIixcbiAgICAgICAgICAgICAgICAgIFwicHJlcGVuZC1pbm5lci1pY29uXCI6IFwiZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5wYXRoX2ZsZyxcbiAgICAgICAgICAgICAgICAgIGhpbnQ6XG4gICAgICAgICAgICAgICAgICAgIFwiL3B1YmxpYy9pbWcg44Gu5LiL44Gr5L+d5a2Y44GV44KM44G+44GZKC9zdG9yYWdlL2FwcC9wdWJsaWMvaW1nKVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51cGltYWdlLmZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXBpbWFnZSwgXCJmaWxlUGF0aFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1cGltYWdlLmZpbGVQYXRoXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLjg5XjgqHjgqTjg6vlkI1cIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcImZpbGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWlubmVyLWljb25cIjogXCJmYXMgZmEtc2F2ZVwiLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5uYW1lX2ZsZ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXBpbWFnZS5zZXROYW1lLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXBpbWFnZSwgXCJzZXROYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVwaW1hZ2Uuc2V0TmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvanBlZywgaW1hZ2UvanBnLCBpbWFnZS9wbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uc2VsZWN0ZWRGaWxlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS51cGltYWdlLmZpbGVVcmxcbiAgICAgICAgICAgICAgICA/IF9jKFwidi1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnVwaW1hZ2UuZmlsZVVybCxcbiAgICAgICAgICAgICAgICAgICAgICBcImFzcGVjdC1yYXRpb1wiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLml0ZW1fY2xlYXJfZmxnXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1mbGV4XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB4czEyOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJJdGVtSW1nXCIsIHsgYXR0cnM6IHsgcGF0aDogX3ZtLnVwaW1hZ2UuZmlsZVBhdGggfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNTAwcHhcIiwgaGVpZ2h0OiBcIjMwMHB4O1wiIH0sXG4gICAgICAgICAgb246IHsgaW5wdXQ6IF92bS5jbG9zZSB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnVwbWVzc2FnZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnVwbWVzc2FnZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXBtZXNzYWdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IFwicGEtMlwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImluZm9cIiwgdmFsdWU6IHRydWUsIG91dGxpbmU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIueUu+WDj+eZu+mMsuWHpueQhuOBjOWujOS6huOBl+OBvuOBl+OBn1wiKV0pXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtYWxlcnRcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJiYWNrXCIsXG4gICAgICBhdHRyczogeyB0eXBlOiBcIndhcm5pbmdcIiwgdmFsdWU6IHRydWUsIG91dGxpbmU6IFwiXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyB3cmFwOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1mbGV4XCIsIHsgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEudGl0bGUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRhdGEubWVzc2FnZSkgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVsLWluZm9cIiwgYXR0cnM6IHsgeHMxMjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YS5kYXRhX3YyLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInRpdGxlXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czY6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW1bMF0pKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY29sdW1uXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czY6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW1bMV0pKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXQtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzODogXCJcIiwgXCJvZmZzZXQteHMyXCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1Ym1pdC1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwid2FybmluZ1wiLCBvdXRsaW5lOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmsbrlrppcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hlbnNodS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM3M2Y1MDYmdi1pZj1pdGVtX2RhdGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNhcmRUaXRsZSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNoaXAgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZEaWFsb2cgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFiIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGFiSXRlbSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRhYnMgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZCdG4sVkNhcmQsVkNhcmRUaXRsZSxWQ2hpcCxWQ29udGFpbmVyLFZEaWFsb2csVkljb24sVlNwYWNlcixWVGFiLFZUYWJJdGVtLFZUYWJzfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMzczZjUwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMzczZjUwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVuc2h1LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzczZjUwNiZ2LWlmPWl0ZW1fZGF0YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMzczZjUwNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZW5zaHUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbnNodS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVuc2h1LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzczZjUwNiZ2LWlmPWl0ZW1fZGF0YSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQmFzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWZlMjdlZWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Jhc2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWZlMjdlZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5ZmUyN2VlY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZCdG4gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRm9ybSB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVlRleHRGaWVsZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWRmxleCxWRm9ybSxWTGF5b3V0LFZUZXh0RmllbGR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzlmZTI3ZWVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzlmZTI3ZWVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CYXNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZmUyN2VlYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZmUyN2VlYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L0Jhc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmUyN2VlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZmUyN2VlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWZlMjdlZWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09yZGVyUHJpY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1OGQ2Mjk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09yZGVyUHJpY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU2VsZWN0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQnRuLFZDb250YWluZXIsVkZsZXgsVkljb24sVkxheW91dCxWU2VsZWN0LFZUZXh0RmllbGR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1OGQ2Mjk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1OGQ2Mjk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNThkNjI5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNThkNjI5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L09yZGVyUHJpY2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByaWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNThkNjI5NCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3JkZXJXYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNmYTUyYzBjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3JkZXJXYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWRXhwYW5kWFRyYW5zaXRpb24gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGb3JtIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWUmFkaW8gfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZSYWRpb0dyb3VwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVGV4dEZpZWxkIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQnRuLFZFeHBhbmRYVHJhbnNpdGlvbixWRm9ybSxWUmFkaW8sVlJhZGlvR3JvdXAsVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2ZhNTJjMGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2ZhNTJjMGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZmE1MmMwYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjZmE1MmMwYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSXRlbURhdGEvSGVuc2h1L09yZGVyV2F5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJXYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyV2F5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlcldheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2ZhNTJjMGMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4MDhhMDQ5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI4MDhhMDQ5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjgwOGEwNDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSW1nIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWTGF5b3V0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWU3BhY2VyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWVG9vbGJhciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJ0bixWQ2FyZCxWRGlhbG9nLFZGbGV4LFZJY29uLFZJbWcsVkxheW91dCxWU3BhY2VyLFZUb29sYmFyfSlcblxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyODA4YTA0OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyODA4YTA0OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSXRlbUltZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjgwOGEwNDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjgwOGEwNDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0l0ZW1EYXRhL0l0ZW1JbWcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSW1nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODA4YTA0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUltZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yODA4YTA0OSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JbWcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4MDhhMDQ5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbWFnZVVwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTFhZTdiYjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW1hZ2VVcGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbWFnZVVwbG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjkxYWU3YmI4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIHZ1ZXRpZnktbG9hZGVyICovXG5pbXBvcnQgaW5zdGFsbENvbXBvbmVudHMgZnJvbSBcIiEvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL3J1bnRpbWUvaW5zdGFsbENvbXBvbmVudHMuanNcIlxuaW1wb3J0IHsgVkFsZXJ0IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2FyZCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkNvbnRhaW5lciB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkRpYWxvZyB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZJbWcgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZUZXh0RmllbGQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBbGVydCxWQnRuLFZDYXJkLFZDb250YWluZXIsVkRpYWxvZyxWRmxleCxWSW1nLFZMYXlvdXQsVlRleHRGaWVsZH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTFhZTdiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTFhZTdiYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ltYWdlVXBsb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MWFlN2JiOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MWFlN2JiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYWN0L0ltYWdlVXBsb2FkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VVcGxvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlVXBsb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZVVwbG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTFhZTdiYjgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgaW1hZ2VDb21wcmVzc2lvbiBmcm9tIFwiYnJvd3Nlci1pbWFnZS1jb21wcmVzc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIOOCouODg+ODl+ODreODvOODieOBleOCjOOBn+eUu+WDj+ODleOCoeOCpOODq+OCkuWPluW+l1xuICBhc3luYyBnZXRDb21wcmVzc0ltYWdlRmlsZUFzeW5jKGZpbGUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWF4U2l6ZU1COiAyLCAvLyDmnIDlpKfjg5XjgqHjgqTjg6vjgrXjgqTjgrpcbiAgICAgIG1heFdpZHRoT3JIZWlnaHQ6IDEyMDAgLy8g5pyA5aSn55S75YOP5bmF44KC44GX44GP44Gv6auY44GVXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgLy8g5Zyn57iu55S75YOP44Gu55Sf5oiQXG4gICAgICByZXR1cm4gYXdhaXQgaW1hZ2VDb21wcmVzc2lvbihmaWxlLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcImdldENvbXByZXNzSW1hZ2VGaWxlQXN5bmMgaXMgZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9LFxuICAvLyDjg5fjg6zjg5Pjg6Xjg7zooajnpLrnlKjjga5kYXRhdXJs44KS5Y+W5b6XXG4gIGFzeW5jIGdldERhdGFVcmxGcm9tRmlsZShmaWxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBpbWFnZUNvbXByZXNzaW9uLmdldERhdGFVcmxGcm9tRmlsZShmaWxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcImdldERhdGFVcmxGcm9tRmlsZSBpcyBlcnJvclwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmVjM2U1YTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmVjM2U1YTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2ZWMzZTVhOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiB2dWV0aWZ5LWxvYWRlciAqL1xuaW1wb3J0IGluc3RhbGxDb21wb25lbnRzIGZyb20gXCIhL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9ydW50aW1lL2luc3RhbGxDb21wb25lbnRzLmpzXCJcbmltcG9ydCB7IFZBbGVydCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkJ0biB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkZsZXggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZMYXlvdXQgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmluc3RhbGxDb21wb25lbnRzKGNvbXBvbmVudCwge1ZBbGVydCxWQnRuLFZGbGV4LFZMYXlvdXR9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZlYzNlNWE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZlYzNlNWE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmVjM2U1YTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmVjM2U1YTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2NvbS9Db21DaGVja0RpYWxvZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbUNoZWNrRGlhbG9nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZlYzNlNWE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS03LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21DaGVja0RpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZWMzZTVhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tQ2hlY2tEaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlYzNlNWE4JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpOiBudWxsLFxuICAgICAgaXRlbV9kYXRhOiBudWxsLFxuICAgICAgdmVuZG9yOiBbXSxcbiAgICB9XG4gIH0sXG4gIGFzeW5jIGNyZWF0ZWQoKSB7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRfaXRlbV9kYXRhKCkge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcIi9pdGVtcy9pdGVtaW5mby9cIiArIHRoaXMuaXRlbV9jb2RlICsgXCIvXCIgKyB0aGlzLml0ZW1fcmV2KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5pID0gcmVzcG9uc2UuZGF0YVswXTtcbiAgICAgICAgICB0aGlzLml0ZW1fZGF0YSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtYmFyY29kZVwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLpg6jmnZDjgrfjg6rjgqLjg6tcIixcbiAgICAgICAgICAgICAgbmFtZTogJ2l0ZW1faWQnLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5pdGVtX2lkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1pbmZvXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuWTgeebruOCs+ODvOODiVwiLFxuICAgICAgICAgICAgICBuYW1lOiAnaXRlbV9jb2RlJyxcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0uaXRlbV9jb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1hcnJvdy1hbHQtY2lyY2xlLXVwXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlJldlwiLFxuICAgICAgICAgICAgICBuYW1lOiAnaXRlbV9yZXYnLFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRfX2NoayhyZXNwb25zZS5kYXRhWzBdLml0ZW1fcmV2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtaW5mb1wiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLmiYvphY3jgrPjg7zjg4lcIixcbiAgICAgICAgICAgICAgbmFtZTogJ29yZGVyX2NvZGUnLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5vcmRlcl9jb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1pZC1iYWRnZVwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLlk4HlkI1cIixcbiAgICAgICAgICAgICAgbmFtZTogXCJpdGVtX25hbWVcIixcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0uaXRlbV9uYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1pZC1jYXJkXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuWTgeebruW9ouW8j1wiLFxuICAgICAgICAgICAgICBuYW1lOiBcIml0ZW1fbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IHJlc3BvbnNlLmRhdGFbMF0uaXRlbV9tb2RlbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtbWFwLW1hcmtlZFwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLoo73pgKDlhYNcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJtYWtlcl9uYW1lXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLm1ha2VyX25hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWFycm93cy1hbHQtaFwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCJSVFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcInJlYWRfdGltZVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRfX2NoayhyZXNwb25zZS5kYXRhWzBdLnJlYWRfdGltZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWNhbGN1bGF0b3JcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5Zyo5bqr5pWwXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwibGFzdF9udW1cIixcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0X19jaGsocmVzcG9uc2UuZGF0YVswXS5sYXN0X251bSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLWNhbGN1bGF0b3JcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5L2/55So5LqI57SE5pWwXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiYXBwb19udW1cIixcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0X19jaGsocmVzcG9uc2UuZGF0YVswXS5hcHBvX251bSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLW1hcC1zaWduc1wiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLvvKzvvK/vvLTmiYvphY3mlbBcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJsb3RfbnVtXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiByZXNwb25zZS5kYXRhWzBdLmxvdF9udW1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLW1hcC1zaWduc1wiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLmnIDlsI/kv53mjIHmlbBcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJtaW5pbXVtX3NldFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2UuZGF0YVswXS5taW5pbXVtX3NldFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogXCJmYXMgZmEtbWFwLXNpZ25zXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuaJi+mFjeaWueazlVwiLFxuICAgICAgICAgICAgICBuYW1lOiBcIm9yZGVyX3dheVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRfX29yZGVyd2F5KFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFbMF0ubG90X251bSxcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhWzBdLm1pbmltdW1fc2V0XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IFwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuS/neeuoeWgtOaJgFwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImxvY2F0aW9uXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmdldF9fY2hrKHJlc3BvbnNlLmRhdGFbMF0ubG9jYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVswXS52ZW5kb3IpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGFbMF0udmVuZG9yLmZvckVhY2gob2IgPT4ge1xuICAgICAgICAgICAgICB0aGlzLml0ZW1fZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpY29uOiBcImZhcyBmYS1tb25leS1iaWxsLXdhdmVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmiYvphY3ph5HpoY1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm9yZGVyX3ByaWNlc1wiLFxuICAgICAgICAgICAgICAgIGVkaXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICBcIltcIiArIG9iLnZlbmRuYW1lLmNvbV9uYW1lICsgXCJdIFwiICsgb2IudmVuZG9yX2l0ZW1fcHJpY2UgKyBcIiDCpVwiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnZlbmRvci5wdXNoKHtcbiAgICAgICAgICAgICAgICBpdGVtX2lkOiBvYi5pdGVtX2lkLFxuICAgICAgICAgICAgICAgIHZlbmRvcl9jb2RlOiBvYi52ZW5kb3JfY29kZSxcbiAgICAgICAgICAgICAgICBjb21fbmFtZTogb2IudmVuZG5hbWUuY29tX25hbWUsXG4gICAgICAgICAgICAgICAgdmVuZG9yX2l0ZW1fcHJpY2U6IG9iLnZlbmRvcl9pdGVtX3ByaWNlLFxuICAgICAgICAgICAgICAgIG9yZGVyX2FkZF9kYXRlOiBvYi5vcmRlcl9hZGRfZGF0ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDogXCIgKyBlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgfSxcbiAgICBvdXQoYXJyKSB7XG4gICAgICBhcnIuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtX2RhdGEuZmluZEluZGV4KHYgPT4gdi5uYW1lID09PSBpZCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLml0ZW1fZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldF9zZXJpYWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtX2RhdGFbXG4gICAgICAgIHRoaXMuaXRlbV9kYXRhLmZpbmRJbmRleCh2ID0+IHYubmFtZSA9PT0gXCJpdGVtX2lkXCIpXG4gICAgICBdLnZhbHVlO1xuICAgIH0sXG4gICAgc2VsZWN0ZXIoYXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtX2RhdGEuZmlsdGVyKCh2KSA9PiBhcnIuaW5jbHVkZXModi5uYW1lKSk7XG4gICAgfVxuICB9LFxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzY0OiBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFTQUJJQUFELzRRREtSWGhwWmdBQVRVMEFLZ0FBQUFnQUJ3RVNBQU1BQUFBQkFBRUFBQUVhQUFVQUFBQUJBQUFBWWdFYkFBVUFBQUFCQUFBQWFnRW9BQU1BQUFBQkFBSUFBQUV4QUFJQUFBQVJBQUFBY2dFeUFBSUFBQUFVQUFBQWhJZHBBQVFBQUFBQkFBQUFtQUFBQUFBQUFBQklBQUFBQVFBQUFFZ0FBQUFCVUdsNFpXeHRZWFJ2Y2lBekxqZ3VOQUFBTWpBeE9Ub3dOam94TkNBeE1Eb3dOam81T0FBQUE2QUJBQU1BQUFBQkFBRUFBS0FDQUFRQUFBQUJBQUFESUtBREFBUUFBQUFCQUFBRElBQUFBQUQvNFFtU2FIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSllUVkFnUTI5eVpTQTFMalF1TUNJK0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0QwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5SWdlRzF3T2tOeVpXRjBiM0pVYjI5c1BTSlFhWGhsYkcxaGRHOXlJRE11T0M0MElpQjRiWEE2VFc5a2FXWjVSR0YwWlQwaU1qQXhPUzB3TmkweE5GUXhNRG93TmpvNU9DSXZQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3L2VIQmhZMnRsZENCbGJtUTlJbmNpUHo0QS8rMEFPRkJvYjNSdmMyaHZjQ0F6TGpBQU9FSkpUUVFFQUFBQUFBQUFPRUpKVFFRbEFBQUFBQUFRMUIyTTJZOEFzZ1RwZ0FtWTdQaENmdi9BQUJFSUF5QURJQU1CSWdBQ0VRRURFUUgveEFBZkFBQUJCUUVCQVFFQkFRQUFBQUFBQUFBQUFRSURCQVVHQndnSkNndi94QUMxRUFBQ0FRTURBZ1FEQlFVRUJBQUFBWDBCQWdNQUJCRUZFaUV4UVFZVFVXRUhJbkVVTW9HUm9RZ2pRckhCRlZMUjhDUXpZbktDQ1FvV0Z4Z1pHaVVtSnlncEtqUTFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb09FaFlhSGlJbUtrcE9VbFphWG1KbWFvcU9rcGFhbnFLbXFzck8wdGJhM3VMbTZ3c1BFeGNiSHlNbkswdFBVMWRiWDJObmE0ZUxqNU9YbTUranA2dkh5OC9UMTl2ZjQrZnIveEFBZkFRQURBUUVCQVFFQkFRRUJBQUFBQUFBQUFRSURCQVVHQndnSkNndi94QUMxRVFBQ0FRSUVCQU1FQndVRUJBQUJBbmNBQVFJREVRUUZJVEVHRWtGUkIyRnhFeUl5Z1FnVVFwR2hzY0VKSXpOUzhCVmljdEVLRmlRMDRTWHhGeGdaR2lZbktDa3FOVFkzT0RrNlEwUkZSa2RJU1VwVFZGVldWMWhaV21Oa1pXWm5hR2xxYzNSMWRuZDRlWHFDZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJpNCtUbDV1Zm82ZXJ5OC9UMTl2ZjQrZnIvMndCREFBRUJBUUVCQVFJQkFRSURBZ0lDQXdRREF3TURCQVVFQkFRRUJBVUdCUVVGQlFVRkJnWUdCZ1lHQmdZSEJ3Y0hCd2NJQ0FnSUNBa0pDUWtKQ1FrSkNRbi8yd0JEQVFFQkFRSUNBZ1FDQWdRSkJnVUdDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FrSkNRa0pDUWtKQ1FuLzNRQUVBREwvMmdBTUF3RUFBaEVERVFBL0FQNWplRDFwQWZha3h4MXB3SE5Ob1lnNmNVY2RxVUh1YWI5S0xoWVhHUjlhVVpIRkE1NlVneU90TzRCN21rNkgxeFRpT09LVCtIcFNHTGtad0RSbmpOSWNBVkVXSTYwQURNRHlhaUxZR2MwcGVxNVlra1VoQ3MxVjNiUEZLekRxQlZjc2FBRVp6MnFCMnBHYjhLcXUvZW1BTy9ZMVdaOGNZNlVPNHFxN1pwQUR2NjlhcHMzSEhXbGRzZEtxUElUMTVwM0FXUitRS3B5U2RqUThuRlZIZWdCR2ZqaXFidWNZOWFjejFTa2tvWWhIazlPMVU1SHhUcEpQU3FVajl4U0FiSTVQSnFtOG1Nak5EU0RyVktSK1RUR0VqOSt3cXE3OXFScEEzTlZua1BwZ1VDRWVUbmppcWJ1RHhTdS9WYXF1L1hOQTJFalpxbzdqclE3WjRxc3pudFFDRWtjOU8xVlhiSEk3VWpQeGpyVmRwTTgwZ0VrZXEwajloU08rQmowcXM3Wk9LWWdkajFxckkvWW5wVG5jOUtxRnhRTVYyUFROVm1ibWhuNTVxdTcrdWFBUWpQbmlxN3R4elNOSnptb1dQUE5BaEdiQXg2MVhkczhDa1p2V29XSnptaXd4V1lHcTViTkk3Y1ZDemdVQUJiUFdvU3d5UlNrOGlvUzJlS1lOQXg2VkNUazQ2VWpFWTVGTUo5S1FDTjcwMDVOSGFpaGdIdFI5S0tUclJZQmU5RkZBNjBBQTl1VFJqbWw1TkhUdFFBbEoxcFNTYVRyVEFVNXBRT1BwUjArbEFIR0tRQ2Q2T0tPY1V2MW92MkJCd2V0SjcwZHFQbG9CaDZVVWNDbEhxYUFFN1VvNjhVbmZtbC9ob3VBWTdVZDhVbmFsSnoyb0FOM09hTUROSGZCNW9QV2dBemdZb3h6Um4wbzRQV2dBT2UvTkhPZmVnK3RKbWdCY0hITkdhVHBnNHBSUUF0SndLWGtjMGM0NjBBSjI1RkwwSEZKMU5MaWdBeGpudFNDbDl4U2Q4MEFIWDJGQk9jVVpPS00rcG9BTzFIRkhOSGIzb3NGZ0k0NHBlQWVlS0J4elFmem9BVHFmclM5cUI2bnZRYzl1MUFKaDduaWlrd1QxcDFJQU5KejNwT2xIYm5wVEVmL1EvbU05ZWMwZStmeG82KzFMbW1NVFBTbHorbElTQ1BhZzlLQUZBNXBNMGRlb3BlOUFYQWNjZFRTZHVlOUdlOVJzYzhacEFCUGFvUzV6bWxZODdoVURNU2M5S0JDRnM5YWdZanJTRjg5RHhVTEVEclRzTUNTYXJPM3JTdElUMXFxNzlRYUFRcnljVlVkeVBselN1dzdWVWR1RDcwQllIZmpGVkdja2NmbFRua1BTcWp1TUhORndFZVRnNHFuSStUVG5mRlVua3ptZ0Fra3FtN25yVG5mTlVYY2RhTGdEeUhuUE5VcEhwenVSVkozeUNmekZEQVI1TTFUa2s5ZXRMSkozcWpKSjJvQUpIcW16NTQ3VXJ2d2MxVVordzRvQUhmSnpWUjJ5Y2Q2SGNqbnJWWm41NG9RQXordFUzZkF5UlN1KzJxenVQV2dMaU8yZURWVm41Tkk3a25GVjNmT2MwZ3VEeVo0elZWM05EdWVsVldrNHBoWUhmdlZWbjdlbERzTnZGVm1ZOXVLUFVCR2Z0VUVqNXBHUEhGVm1lZ0FaNnJzZldsWnVNR3E3dDYwQU5kc1ZBN2Q2Vnp6OWU5UU0zSDFvQWE3K3RRc3hHYUM0TlFNM0dhR2dZTXd4N0NvU2NEaWgyN1ZFVGpqTkFDRWpwaW9pM0dlOUt4eU9LaFkrdENFS3g1cGdIOFZIRkhRMEREUGFqNjk2TTVvSE5EQU9lOUw5T2FNOGRhUVo3VUJjS09lbEdPS01rVUFnNlVIZzg5Nk9SelFSU0JNWG5ISEZKN1VkYVgzNlUwQWxMbWpHZWc1bzlxUUNESEZKU2tZcGV0TUJEbk9UUlFSZ1pvelFBWlAxcGUyS0I3MGdGQUM1OURSMCt0SFRtamcwbUFtVDA2VUdsSFQwcER4eFRTQUFhWDhUUzk4MDA4bmlnQmZlZ24wb3BjWit0QWhCMG9wRHpuTktQV2dBelFRQWNVWTdFVWZTZ0JhVHAwRkE2VUE5YUJoOWZ3cE1Vdk9hTy9KelR1QUU1N1VVYzBjWXhTQVVnMHZCNlUzcU05S004MEFHZU1rME1lYVVrMGREeHlUUWdFNjgwZlNqR0d5YVdpNFdER1RnMHZRVTBlMUwzb0FNOXhSbkZHT09LT2c0b0VIUFRwUjE3VUgxSGVqSHBRTS8vOUgrWXZrSE5Ma1o0T0JTOCtsR2NlMU1BNHh6MG94em5yU2U1UFNsN0h0UU1RWnBhYm5qbW1Gc2NVZ0JqejlLaWMwRmgrVlFNM2VnQldicnpVRE1hUm14MXF1ekdtQXJ0Z2NucDNxczdkU2VLUjNxdTdnOURRRnhKSHg5S3J1K1BwM3Bydm1xMGtuTkFnZDg1SU5WWGZIRkk3NTVGVkhmaWdZTzU1eFZWM0dPS1I1RFZSNUQySm9Cb0hrSXFtOG1SUTdtcWNrbkhXZ1FTUG1xVWtsRWo4MVRrY1VoMkZkeGs4VlJrazQ1b2R6bkdlS3FTU1U3Z3hIZlBTcWJPYVYzQnFvN25wUUlTUnUvV3Fyc090SzduclZSNU04aWdZT3dxcTdIR0tSMzdWVmtmQm9DdzUzNjFUYVFuT090SzdjOWFxczNZMENFa2ZIRlZXZmc1b2R6MHF0SkoxNzBERVpqVmRucEhiTlYzY2RhQUVkajlSVmQyNTVvYVR0VloyUDlhQVRGWmllVFZVazByTVRWZGp6UUFPM1BXcXpOU3MvZW9IUE9EUTBEQm54eFZkbkhhbGRzYzlLaFppY2lnRU5MWko5S2ljMGpPS2lZMEFJelZFemRxVm1xSW5uaWhnSVR6VFRqaWx6M3BPUHJTQmkwaHBlb3BLWVdENlVBVUdnNG9BTVVEcDBwY2pPS1RJTkNHQlBXbDU2Q2crMUZCSVp4d0RTZGFYSW83WnhRaGlDZ1lvSFhGSHYwb0VMK05KMW9IVW1nbkF4UU1VZTlKeFFjQ2ptZ0VoY25wU2ZXamdHbHoyRkFBT2VhUTRwZmNVY2RxTENFNHhSbk5PUFVnVWc2OWFCM0VwY0drRkx5ZWU1b0FVbkhJcENhRGdVbENBRHhTOStQd280L09qaWk0Q1U3QnBQZWdEMW9BTWo4S1BiMW80cGVNOGlnQk9wb296MzcwZHMwSUFKUGVqdnhTaklGRkZ3Q2dIajBveWUzYWpPT2FBRTc4MGU5SGZOTDE1b0FNNDQ3MG1UMm81Si9TZ1pITkFDamp0UjFOQjYwZlRwUUlRNC9LbHhqanJSbnRSMTRvQUIwd2FBQlJudFNZelFBdjZZb3dRYVFDbmR2U2tNLy85TCtZMHR6U0hyakdhTVo0b0lIVVZReGUrY1VuWG1nWTcwd25rNHBBd1lnRG1vR09lS2NXL3VqTlFNK09jVUNCMkIvR29HZlBGRE4zcXNXNTQvU2dZTzJLcnUrZXRLelpGVlhiSndlMUFBNzRGVm5mRkRNUWFxTS9hZ0FrWTFWZDgwTTU2MVVkc1VBd2tjamtHcWJ5WTcwcnZnMVRkeG5ILzFxQUZkemlxVXI4RVU1MjRxbEpJTWRhU1lXRWtmdlZONUtXUjhqaXFMdWVSVEFXVjZwdS9PS0pIendhcE8rYUFZU09hcFNPQjBwWGJIQTYxVWQ4OUtFQWp2eFZXU1E5K2dwWkpPT2U5VkhjOURUQ3dPeElxcEkvV2xrYzFVZHdSU3VNR2ZBelZaMkFwWGM1cXE3K25OSW00MW1QSXF1OG1PYUhidlZXUnNuam1tTklIZXFydCtBb1p4MUZWV2Ixb0JDczRxczc1b1orRC9LcXp1QU9hQUZkd0tyTXg2bWh6VmRtb0FSMkFxRm15ZmMwak42VkF6Wm9BVW51S3JNZWFjV0dhckZzZGUxQUNzM0ZRazlSUXg0d2FoM1lORmdCamdZcUZpZWxLU0NjVkU3Wm9ZSUMzclRPOUwvQUp6U2RxQUFkYU9NYzB1UHdwTzlBQjFGQXBDU1R6U2c0NG9BS09EMm9IdlJ5UlFBY1VaSFU5NkJpamdDZ0JlMUoxNW94M0hGSEdLQTlBUFhpbDZIbWs2ZEtPZXRBQ2dEcFJuTklCUysxSUE3OGMwblRwUzhrVWdvQ3djZE0wQTBjL1NsNjhDbllBSFBXazVQTkhXbEhzYUFFSFRpbE5IdlNmU2hBeGMrMUdlOUhCNjBVQUI2MG1lZUtQYWxvQVNsNzhVY2RLRGtVWEFQclIxNEZLZmFrNi9TZ0FHUlJuSE5INDBudlRBWGpITkgwNW9HZW80cGVEeWFYb0FoTkdLRG1sNTdkcUFFb0g2MHB6eG1qaWdZbnBSMVBGS2VPZ29CNlVDRTVCcE8rQlRzWXBQYzBDREpvK2xMdUpvOTZCaUVVY25qRktPZWFCUUlPbk9NVVl6U1pIWEZLUFUwV0dBOUtDTUNrem5yU2pITkFCMTZVY2tZRkhYZ1VIMnBBZi9UL21OT004MFUzbnQxcEdiOEtZeEN3NmlvbWJIUTBqdjFxRXNSU0VETmpOUU0yZmxBcEdiamlvWElGTWJHdTNQeTFYWjhjOWMwTS9HUmdDb0hrSDUwQU5rZjNxdTdjOEhwU093R1RWVjNQSW9BUjMvV3FydjY5cVV1T3Y4QWsxVWtmSjVvSGNIZk5VM2NZNDYwcnlWVGtZWW9SSU8rQm1xYnlaNDlLV1I4OFZUa2t5T3RBQ1N5QThWVGtjR2lSKytlYXB5UHhtaXd4SGtxbTc4OFVQSnp4Vk9TUVVBSkpJS3B5TWFWM3FuSStLZXdCSXd4bXFyc09hSGNkQjBxcTc5ODBoQ08rZllWV2R1OUk3bnJWVm16bkZDR0R2NlZWZGhqRks3ZHFxTy9xZUtHQTUzNXlLcE8vUE5PWnNlMVZXYWdFRHZucFZkM05OWnowNlZYZHdCbWdCSkhCNTlhcmx6MHBHZjFxcXpEUE5Gd3NPWitLck0vWE5EdG5yVlp6dE9EUmNZck4zcUJqU013d1QzcUJteDFvRUROanJVQmNFME1lYWdkdWMwQU9MZHpVRHR6bk5JellPRFVMTjY4MEFLemV2RlFsaWNFMHJIQTU0cUluSHBTQWFTUlNleDRvejJOSlZYQU04NU5IWHBSbnNhQ09lS1FCMXB3OTZhT2xHTUhpa0REa1VVRHRTRE5NQjJlTUUwZzY1bzRGRkNBRDF4NlVmclM4ZE90SmloQUdLRG1qcjFwZnIxb1FCU1o1elM4VW1NVWdGNlVnUEZIVTB1T00wN0FKVHZjVW5UcnhTZE9LQUZBQUdDYURub2FRY1VaSkdCUUZoYzhVblhpanIxTkJ5Um1nQTdVZHNIdFM5aDZVbVJRQXAvK3ZRT3RBOTZEUllRRUhxYU1jNEZBNSt0SFRrVUREanRRT2VLQVFPTzFMem5Bb0FRMGRQclI3MEhCTk5nRkhXanZnMGREelNDNFlKL0NqSGFrNDZVdVFCZ1VJQTYwdlU0cEQxNG81NkNnQmNuL0FPdFFUelNEcnhTKytLRUFuT2FCbkdhTWUxR0FEUXdEcFFNQ2pCSkZHZnpwQUtQenBPRDBvNmNVbzRvQUQwelFvelFDTVV2QnBpRysvU2dISjZVNCsvV2s3OGMwRERPUHJRZW1hT25BL09nY2Nab3VGZ1Axb3h6U0E1cGVEMXBDUC8vVS9tSllqR1RVSllZd2Z6b1lrbW9XYmozcDNHRE54bXE3TUQwcFN4NjlxZ2RzOENnQkdZRTFYZHNkNkhmQTRxczdFTG1nQWtZWXFzNzhIT0tSM0dlYXF1NEg0VXdCbjVxczhnNjBrajl5YXF5T3A0RklHSksvUHJWUjM0b2VRZDZxUEp4ejJvRU5ra0dNOTZxdTQ3OXFIa3FrOG5wUU1WNUJWTjN6U080SFdxYnlkVFNBSkpNY2RhcHUvT1RSSklTYXBPNS9FVXdDUnh0cW5JL05LNzFUa2JxMUFDU3ZWU1J6bWxkK09lMzRWVloxYnJuaWl3QTc5Z0tyTytSaWtaL1NxcnNlOUFnZDhmU3FqdjY5NlYzeFZaMzdVWEdEeUh2VlJuOWFWMnpWWjM2ak9hUWhDdzYxVlo2SFlWVmFRazg5YWJReFhmME5WbVk4ME14enpWWm55ZXRBQ00zT1BTb0diUEJvWnVQU3F6UG5yUUFyTm1xenNNVTUzSTVxQnpubjlhQUdzL3BVSlBQRkl6RURBcUZtSm84Z0VZNEdhaFk1cFdQcFVETU8xTkEwS3h6eFVUTmswaGZJSnFMZDBwV0FDZjBwcE5JZlNqbWdBNTYwSHB6MXBLZDFQTk93Q1pKNG96M29KejFvcEFKUzR4eFI3R2xQVEZBQ0Rqa1VIR2FPTzFIRkFCbm1sejI3VW1UMG82L3lvQ3dVcDRwdjFwVGpGQUM1eHlLVGc4Q2pqOEtEMDRvc0FZeU9LQmp0UlNuMU5DWUFSUmtpa3pTL1R0UUZ3Sm9QU200R09hWDZVSUxDOEhpalByUjlhRHp4UUlNNW85eUtPU2FEMG9Hd0o0eFNkOFV2dU9UUzVLMEFJQlIvS2oyRkE0NjBBSEdLTVkvejJwUjZVRElGQURSeFNqR2VhVTBnOU9sQUFlUlJ6MG9JTkxqdFEwQW5Xak5HZlRtZ0NnQVBJL25TNDllS1Q5YU0wQllPdEx4MUZIVGswaDk2QXVISU5LVDJwRFJnOWFRQzg0cEFlS0J5YVU4Y2RxWWhPUHJRVDdVdkZKMDRvQVVaL0NrUHZTMEhqbWtOQU1ab3p6aWppajJOTUFBRkdDUmlqdGcwWU9hQkJuMHBNOEh0VHVuU2tHT2hvQUR6d0tRYzlhWG52eFIvRGtVQWYvL1YvbCtjOGZTcTd1T3ZXbEpJUEZWeTMrTk5EUU0rT1JWWmlNWXBXWTRxcTduUE5BQ3UrUGFxak1menBXWWR1S3JPM3BSY0FaeFZSM3h6bWgzNHgxcXE3L2hRRitnU1BnOENxYnlEcjNwSlgvd3FvNzhlbEFDeVNkcXB1L2MwU043MVRrY0g3djVVQUpJK1JWT1dUdURTeVNZNHhWSjVBT2h6UUFqdUJWTjNQWE5LMG5QMXFsSkxtZ1BJUm40cW83K2xJNzRIMHFwSTROQWdad2FxU1BTdTVGVlhiUE5BN2c3OXpWUm13S1YzeHo2MVVhUWpJb1NBSGZ1S3Fzd0ZLekFIRlZIZklOSUxDU09DRFZaMk9LVjNHY0NxckhQQnBoWVJ5ZTlRTy9mclNTTjJGVmkrUjlhQUVaZ2V0VjJZZCtLR2Z2NjFXZCs1b0FIZkZWbmZqQm9ZMVhaelFBTTU2bnJWZDJPYVZtUEpCcXV6WU5BV0IzQjVKeFZkbXBXWUE5cWdaeGppZ0JXYkZWM1lkcUdiUFR2VVJLNXlhQUZmSGZ0VUxOblBwUVd3Yzk2aVlqR2NVQUJQZk5Nb1BKK2FrSFgwcEFCelIwR1JSN0dnMEFHRFMvNXhTZHZhbFByVEFROEhpakdLTTk2UGIxb0JJT2xGSFRyUzlUbWdBRkFITkE5YVFZeHpSWVF2VG52OUtDYzBtUm1nbWdkZzZVWnp4Ungwb0gxb0FLTTU2OFV2UFNnME1CT3ZHYVVubm1nZTlIUGVrRDBEcDlhVGlsNXBEK1ZNTEM0eDFvSEl3S0Rta0ZBQngycGNVWVA1MG50UUFkNlhyUjFIRklRS0FzSFQzcGNlZ3BPTzFLY0hpZ0Jjam9hUWlrNjhDbEpIQk5BQ2taNXBPdEhlanIrTklMaDJwZTFGSm45S1lYRUF6Uzk4MEhIcFJqTkFCbnB4UmpISU5BNDVvNkdnUW9PYU1Ecm1rSnoxcFFDYUFEdmtVbnRTNE9PbEhRNW9HSmlqK2RLU0tNWUhGQVhBYzBEbmdVQ2c5YUxDc0JINFVBbnZTVXVlOUF4TUFjbWpQTktLTy9GQVdGSFBXazZVaHlPbExudjFvc0FjVURIV2s0cGNkYUFEQkdjVWRPdEdNMHA1T0JSY1FtZTFMMXdUUWNkYVg2MElaLy9XL2x2Wi9TcTdNTTgwTTQvK3RWWm03VlF4SGZJcXM3a2RLV1YrOVZYZkFOSkFnZHVNVlVkajM3VXJ2aXFidmloQWtEdjZWVmVUSXhTU05qbXFydmdVQU5rY2V0VkpIL3hvZGdNNTVxbkk0eG1nR3drazlPOVUza3h6Ukk0SEZVbmtvc0Zna2ZKSnFuSklLSGVxTWtvSGVtMENGZHV3RlUzazdpaVIrL2FxYk9NZjFwQlllMG1lYW9zK2M1NHB6UG5nZGFxTTQ3MEFoSGt6a0dxN3ZqTkpKSnpWWm1KNG9BYXpnRDBxcTc1eUtKSkNPYXJPL2NVQmNIY1lOVldmbkZEeUNxenR6MXo3VUlBZGdldFZwSHowL0drZGdjMVZaZ2VPOUFBemVocXM3RTByTmsxV1p1dk5BQ08rS2dac2RLUm1QU29IT0tBRVp1MVFNMkRTc2VPbFZ5Mk9LR0FoYnZVTE4ycEdiUEZRTTlDQUMzclVMTmc1NzBGc0RBcUV0Mm9CaXN3SXowTlE1SjVvSjRxSW44S0FCanhUQ2NnNDVwUHJRTWRNMEFIMXBPMUtSK2xLZXZGSVFZOUtPMktUT090S1RtbU1CMDVwUGFnRE5MMndhUUNjVVo2NW96bWx4eFRRQ2M5cVhQRkpSaWdHRkdLQU81NG82Y1VYQ3d2dWU5SlFlbEwwNlVBSFU4MG5hZ2RLWHBRQW5yUzBjaWdaR1BwUXdZblBTZ1VaUFdpaE1CZmVqUHBSOWFEbnJRQ1ludFM1OUtBU2UxSHVhQXNHYzhVblFVbzU2Y1VvOUtBRzQ0cGM5K2xCem5pbDRJOUtBdUp4Mm9QRkhyelFBYUFFT2NZcGUvUEZKbmluRWNaSW9zQW5YdFFEK0ZCUGMwRTg4VUFISEhORzNuRkwrdEllTTBBSFRyUjE3MGNZelJ6UUFaNW8vblNrWW82MEFLS2FhWEdldEF6azVvQVRBbzROT3B1UWUxQUJSazl6U2orbElCM29BUFduYzlSVGVPbmFsSjlhQUVKUFEwdkhmbWc0SE5KaWdMQzBuU2lsSE9LQVljOWFVajFwQ2ZXanR6U0VGR01IanBSZ2Q2T3A0cGdIU2w5NkFlZU90SHNLQUE0NkROTFNZQnBjRHY4QW5RaG4vOWYrVjVtNHF1emNaRkk3OTZxc1FNMHhpdkp6Z1ZVZHNIamlsZHowTlUza0I0b0FKSDQ2MVRkKy9laVJ6Z21xcnZ6bWhvYkd1K0JpcXJ1RDlLSGZGVTVINzBDdjFFa1lENjFUZDg5S0pINXdPdFZIa0l6N1VBSTc1NE5VcEpQUTByeWJzODFTa2VnT29TU0R2VkozeWNFVXNqRTlhcHUvSjRvQVY1UGVxanlZNE5EdmpnVlZaOCszZWhBRE4ycW83anNhVjM5S3FQSms4VUFEU2RhcXU0NmloM3dNVlZaajJvQnNIYXFydG5tbGRzR3FyTU85QVhCM3FveDV6VG1jOTZyTzFGd1RFWnZXcXpubWd0azFXWmdLQXNLOG1lRFZabUhYT2FWMnhWVjJ6d2FBWXJQbk9hcnUrQnpRN25yVURzZWxBQ00zZW9TL1kwanNSVUJiL3dDdlFBcnVUeFVESE5LemVsUU0zclFDRlpzZEtoTERQTkRNU09LakpvQmlFNUhwVER3YU01L3JTWjQ5TTBBMkhBb1BIYWpyMW9PT0tBc0dLQ0tCUjlLQVFEZ1VmalI3aWpyMG9CQzlSU0gwOU9hTy9GSmpHUlFBdkhlaWpJb0FvQVBvS1huNlVsRkFNQlMwZjBwRFFERjVGQU5KMUhTbDloM29BT2xKMG82MHA5S0FEUE5KMnBUNlVjaWdCUHJTOWVLUVVwSjcwTUxpamppaytsSFdrb0JDblBTamtDak5BNTVOQUlRKzlBd0tYZzhVaDlLQmk1UGFqQUZGTCtGREVKbkZIVTBkRFIyK3RDR0ZISW93Y1V1UFdnUWhOR1NPcHpTOERyUm5ISW9BVGtlMmFEU2pnam5OSVQyb0FVOWFCMG95S09DTW1nQTk2VEpwYzlxVEk2MEJZT25YdlNqM3BDZjRhQ01DZ0E5cU8xTGpuM280NkdnQUdLTy9OSnozbzRvQVVIdFIyNG96UURTQU8zQXBEUWVPUlM4ZzVOTUV4T1NlYVVVdEoxcEFHT2VlYURuT0tPRHlLT085VW1JQWU5S0NNMGdHS1hyU0FYOEtUakFveG1uREdPS0JpWXp6aWdISXpTNUk1eFFCL2RvQS85RCtVeDVEVlJuOUtWM3FtOGhKNHBqU0I1RGpGVlpKS0hmdm1xY2o1T2U5QUlSM3FwSS9QRkxKSVJ6bXFNajU1NjBBTEpKNjFUa2svT2tsZmcrMVZIazYwQUxJNTVxbEpKeDFwSGt4MDQrbFZKSDdVQU5ra0lHQlZLU1RzYVdSMkl4MHFwSTVvQVJucXV6REhOTmR6Vlozb0JpTy93Q0pxcXpjbWgzeWNtcXJ0NlVoaU0rZWxWbmM5S0pHNTRxczcrbE80aHJ0NlZWZDg5YVYycXF6a25JNjBJQWQraHFzemsreG9aOGlxenNldmVnQkhmdFZabTdVck5qcFZWbjV3S0VBNW41cXE3YzBPOVYyZWdFRE9Ebk5RT2VhUmp4elVEdDNvQzRqditkUXMvcFF6ZDZoWnNuazBkQUVZZ1pxQitlbEJibW9tUEZEQWFXSU5Sa2tIQW9MWUZSazl6UUFFbkdLanpuNlV1VDJwUHBSWUJQcnhTanJTSFBlaWdMQnpSeWVCUzBoNE9LR0FVVW50bWx4eHhRQXVlTW1rN1VVZDhVd0Y0NEZKeDFwZTlCNjgxSUNaOWFNNHBSejFvNmMwN2dKejE2MHVPeDYwblNnOWNDZ0JUd2ZwUUJpazYwZERrVVdBUHdwZUtRNXhrMHVlT2FZQ0FmaFJuMW96UjI1cENGNzBIajJwUHBSdG9HTDBGSWVtS1hqcmlqb2NDZ0E5alJqamcwYzBkcUFBOGRPMUdPdEF4U2Q4MElBUFBBcFNjZEtNbWdVQUxpa1B0UVBXZ1lvWUNVdldqb00wWW9BS01Ib2FPaDRwT0FLTGdPL0drcFR3T0tPT2xBQVNjK21hVGpvT2FEeU1lbEhYaWdBSEhCSE5MeG5OQXhrNG9HQ1A2VUFHY2pGQjVwT25GQUE5ZUtBRjY4VVp6U2MwdjBvc0lEd2MwRTVISEZHT2FUQXh6U0dMUUIyRkhIYWpnOWFZSU8yQlNZSEdLWEI0cGUyUlFoQ0FZUHJSMDYwblE5S1hQTklZblVVN0FCeFRSeFM5Qnh4VEFYdGowbyt2UHZTZHFVY0hGQUFUUjE2MEhuZ1V2TkNBT25HYVVZeGc4aWoySDVVdlEwWEJpQURIclNrZHFUa2NFVXVSbjF4UU0vLzBmNU5wSk9lYXF2SVFPT2xEeURPRHhWUjN4VEFSM3huTlZIZWgzUFExVGFUc0RRTUpKT29xazhuVUUwc2o0NFBOVW5rejlLQUNSeDEvclZPU1RIRkVqa0hOVTNreUtHQWp2NlZUa2Zpa2tmM3FvNzhVQUR2ZzgxVlovd29aOGNtcWJ2NjBJQnp5WUhCcXJKSjNva2ZQZXFyU1lJOTZBR3MvUE5WWGZyZ2RhY3pqTlZYWTgwQUR5YzRIU3FyT01ZelNzOVZHZmo1dWdwQ0JuSU9Lck81QithbForUGFxalB4VFl3ZHFyRmhTdTJPdlNxcnlVQUt6MVZZa2c1cFMzcHhWZDJ4a1VBRHVNVlhZazBPMkJWZG03aWdMZzdZcUF1ZTFETjYxQ3pETk1FSVR6VUxPYUdOUWtuclNCZ3pBbW9TU2VhR2JOUmswTUJHUHJUQ2MwWjU0cEJRQWVncGZyUVBYdlNEMG9BWEk2R2tIYWpPS01rZGFBQW5JeFJ6aWwrdEhTZ0dJTVl4UWVCUjE2VWRhQUE5YUtLTUUwQUdhWE9SelNaOWFCUUFkNk1ldEtBUFdrNEhUclJjZHdIUGIzbyt0TDNPYVQyRkNFR1RuNlVEaWpvY1VHZ1F1Q09hVHIrRkw5YVBZYzBERDJGQTZacE90TDE1TkFBVCtOQTV4bWdIdlJ3UnpRQVpBNlVweWVLVHBSd2V0QUNjRHJTZ1VFWUZJUlFBVXZQZWpwMW96UUFkS1hqcFNVY2c4MENGSHZTZDgwREFHS08vTkJRVWV4cE9hZGs5S0dJQ1RuQnBPcHlhTUhPUlFBVDBvc0FweHhSblBGSU1rWUZML1drQTMzcHdQTkp3UGVqdG1tQWRmcFNqT2VCU1l4UmtFOU9sQU1YT1RTZEtYdGtpZzR4a1VBSUFPMUhiTktPT2ZTa3dUNzBBSmppbisxSjE0TkJPRGowb0FEelJqdm1nQTQ0b0l3TVVnRDYwbkE1cGNrYzBwUDQwd0c0T0tDZVByVHM1b3dEUUZ4T2xMU2RzMG82ZTlBZ0ZMeDM3Y1VZT1FhRDF6UU1PM0hGS2VuRkdNOUtYUGZyUWd1Sno5NmpxTTl4UzQ0elJ3ZWxBQUIrVkJEY2VsRkgwb3VCLy85TCtTSjN4VktSK09hVjM1eWFwdkxnODA3allQSjNGVTJrenlhSkh3ZWFwTytmd29BSkpCL0ZWS1NUak5MSklPUlZHU1RnMEFLOG1EVkdSK0tXUnlPS3F5UG1nTGlNeC9PcXJ5VVNTZHFxTzQ3VVdBVm01cW03azllYVYzNmlxcnVjVUFtRHlZR1RWUjVNSEEveitsT2tiMHFvNzRIQm91QWp2MnFzNzVHS0hidlZWM05BZ2R1d3FxNyt0S3pja25wVlpuSFNnWVBKM0pxdTdENlVqdVJ4VlozQk9DZXREOGdGWnNITlZYYm5GRE1EejZWQXpnZEtBUWpNTzFWMmIxb0xlaC9yVmR6ejE5NkFRTzFRczJCNlVqc0QwcUZtQUpKcEFJelZDemNVRW52eFVSYjhLQVFqSElKNzFHV0hRVWhKN2RLaU9EMFA0VXd1SXpIclRDZlNqUGNVbWVlYVFyaDM0b285NkRrOFU3RER2ZzBocGVweWFQWVVBR1BmTkJQY1V2Qm9JR2NldENBUVpITktPZXRJZXZOTG5GQUJqT1Blazdab1BIZWpOQVhBZTFIYWp2UysxQUIwcE04ODgwWTlLS0FEanBTajNveU9vcEIxNXBnS0JuZ0NrNDdVZCtlQlFQYmlrQ0Z6akdLUTgwREhyU25nMEF3NlpwQlNuTkdNMEFnNE5BQXppakhla0ZJQmNlcHBCVHM0NHBPcHBpRUhITkFQclMwYzQ0cGpBZ2RhUTRCNDVveVByUy9RVXJnSFFjVVVjSHJRTTBKZ0hIclIvU2tQWGlsNDY5YUFZWXh6UVIzbzU2VVlHY1VBQTZjMHZ1S1RHUHdvd2V0QUIvd0Ryb0g2VUgwRktCaW1BaDRvLzJUUVNjVXZBRklBeHhtZ0ROQjZZb3ozb0FRZGVhTWdITkxqTkowNzBOZ0hIMXBmclI5S1Qxd0tBQWRqUjBHRFNuSFR2U0ErMUZ1d0MrM2VqT2FYSUFwRDZVZ3NBSHZTWUpwYzBZSStsTUJPdnRUZ08rS2JtbE9EMW9CaGptaklwZXA5cU5wRkFCam5JRkwwcERRTVp4UllMQ2oweGpOTHgweFIwcEFNZE90TmdMM3BPL1BXbHpUeGc1QnBBTkE1ejFveWNZTkxSMyt0R2dBT0JSaWx3UHUwcW5QRkFJLy9UL2tLbGw5YXB2SU0wc2o4OFZTa2ZOTzR4SkdxbkkzZk5MSS82VlJra0dPdEFDTzNhcXNrbk9UU081QXlhcHU1NW9CQ3RKazVOVkhmanZRNysvTlZYY0dnR0R2a1pxcTdab2R1MVZXZko0NjBnWWp5ZWxWbmJCNXBHYm5tcWp2VHVJVjJ3YzFWWng2MHJ1TTFWWi9UbWhBRHYzcXE3WW9aenlPdFZuT2VUUUFNL1kxWGQvV2taODRGVm1iSHZRTzRNL0ZWMmZIU2tkamdnVlhkdUtBQXRuaXE3TnpTczJSOUtyczNHTVVBRFBtb0diUEZEc1B6cUIyelFGd1p1YzlLaFk4WXBHYW9TeHhqRkFNVXR4aW9jOTgwak1jZTlSbHNVQmNHUHJUTTl4U0hrMG4xb0FLWHZTVUE0NG9CQmpzYUI2MHZiaWtJR0tBRHRSanZRUitGSFRraWdBbytsR2VlS0tRQmpCeFI2MGNqbWw2VTdnSjBGSDErbEI1bzc4VUNGNzhHazdZbzRKelNsc2pta01ROCsxTDBvemlnSEJ4VEFUcFNrak5HZW9wRFFBdVBUbWpGSWVtRFNrY1VBSjFIdFNnOFVuMXBTZTVOQXhPbE94U2UxTHlLUWh0TDlLU2xHTTB3UVl6U1ovT2xBejFvSEhQV2dMQlJ6Mm83Y1VaOWFCQ25pa3hTbmswbU8xQXdHU2FCelFNZEtEbnJTRUE0cGVnelNBZXRMbmoxcGpZbmZpbEdhVEhhbHdDT0tiRUlQU2pISEZCNXBhUTdDY2RhQ0IxSE5IMXBjZGpRSU8zTkhPT2FUcHdLQUtRd3p3QlFQV2xOSlRRV0FBOWFQWTBIbm1sd1IrTkRDNFo1NG9VWnpTWnoxNzB1QjJvUUI3RGlqSTllbExtbWprZWdvQVVIUE5MN1UwK29wZTFBV0UrbExrZCtLT0Qyb0gwelFBRCs3bWpHT2hvOThVN0FJeFNBVGtjQ2wyNXBQYjBwVG50VFlBUjJ6UzRwUGJOTHgwb0JvQmp2UzRBNlVoeDFGS2ZlanpCQ2NVdmFqdnhTRDBIYWdRNWVlbEM1SE5BNHAyUFFZb0dIVGtVN0F4elNnWjVGS0FRYUFQLy9VL2p6a2YwcWxJNEF5S1YzeDlLcFN5K2hwZ05rZlBXcWtrbnkrcG9kK0txTys2aXd4SGY4QXZWVmR6bWtlUVk0NXFxNzl1bENBV1I4OTZxTTU3VU93NjFXZHllS0FZanlFVlZkc0ROSzc5eFZWM0pOQUNPMktxdTQ2Q2xrYzlSVlZuNzBJQVp1YzFVWnZUcFE3SG9LcnV3UGZtZ0FaeVJ4VloyNHlLR2ZQZmlxenNCOUtMaUJtNjVxczc5dTlLempuSEZWV1lqTkF4V0k2aXE3T1J5YUdiZ2lxN01PM2FnUXJOeHhWZHlPMUt6ZWxRTXc2R2dZTVJua1ZYWnUxSzVIZW9YSkl6UUFqSEJ3S2lac2RPQlNzM05RdGtjMGRRQXNPblNvK280cGUyRFNEMW9BVHZTOXNVbWU5SGVnQmVvNHBNVUQxb3dhTGdHZVBla0g1MHRBNjBBaFFlS2I3bWx4MnBRQlFGd3pTZE9hQjZnVXA5ZTlGeENuR2FhZUJpamlsSTdVREQ2MGxLY1VmU2dBNjBuRktlUlNVQllNNXBlcHhSMnBLUUlYSE5JYzU1cGFPb3BoWVE1cFFQVVVuMG96ampyUTlRRlBQRklEanBUdWdwTzlBQ2NkK2FVK3BveUJ6U1lCNEZGd1lvd0RSejJwT2h3S090Q0M0ZEtYcDBwYzVvUFQweFF3RUl5YU9SeWFQYjBwVFFGeFAxRkI5Nk05Z0tYSHJRRnhDT0tPTThVdlU0b3ptZ0VIZm1tOXFjZlEwbVBTbUlPbk5IYWpPYUIxR0tRdytsTDErdEowUEZIR0tMQUxqQit0SlJtbHh6UUFuWGlnNDlLVW5zYUR5Y1VBSlM1NzBlMUE2VUFtTDI0cER4MHBPVFNuQm9hQmgwcGM5KzlCN1lwUFNnUW4xcHh4UmtBNW9vQVQrVkhHQlM1NE5Ka2RTZndvR0dmU2w2bjJvempraWc4VUFKak5PeDZVSDlLVHJRSU1maFRqaWs5NlhyMG91TVRCQTVwZW5OS1RuclFlbEFYRXo2OVJUdWxJQ09oL1NnYzlLR0FBZWxLTUdnSHZUZ1B6b0FCa2RhY090QTVGT0hPUlFBZ0hRSHRVZ0hGTkEvaHAvYWhnZi85WCtObVNTcWNrbnZTeXlWVFovL3dCVlVNUjM5K2xWWGJnMFBKZ1pxcTdVZ0IzNTVOVkhiUEhyU3lQaXFqc0J3YUFFWmhWZG54MG9rYzROVlhibWdCSGZ1S3JNL3dDZEl6ZSthck8zY0gyb1lBNzRxcVc1b1ovUTFYWnpqQm9CaU94eGlxenVldE9jOWhWUm1QM3FBMkZkaFZVdDNGRHR4elVEdFFBTzNYUGVxN05ta2RzVkF6ZGpTQUdZZmxWZGlhY3paN1ZXTGRzNXAzQVYzUFNxN05TbHV0UXMzRkNBR09SVVRIcHhTTTFSTWNqQUg0MFdBQ2NjbW1FajhhVGNPbzYwbkdhQURyMW80bzZkS0QwcEJZT3ZhajZVY21qSDYwd0ErM2VrcGU5SEZDQmgxcFJnZDZRVWRlZlNnQmNmaFFPS1R0U2taNmMwQUp4aWdVdnZTRTBBSFdsUFBhazc4VVVBSEpPT3RMeFNBMHVEUXdEclNBSE5COUJTMElHSEJGSWM5NlhIWVVoejNvQWRuaWt6Mm96M280Sm9BUGFqSkg0VVp5T0tUMm9BVThERkptbDQ2VVlPTTBBSGFqc0tDZVBwU2dtZ0JPM0FvUHBRY2RxTWUzRklMQWM5S08xSm4wcGNkaFRBVDJGT0hOSms0eUtYUFkwQUhBb3pTZE9LQjBvQU1qdFFLUHArbEgxb0FVY1Vod1J4Uys5SFBlZ0E1SEZBTklPdEFKeFFBdjBwQm5PYVg2VW1NZGFFQWM0cGNIclNlL3BTODlhTGdIU2pxYzBjWXdLV2dRblNnQTlLQU1jNW81QnBBRzJqSTZDanRnMEFFVTJOQjBPS000RkhCb0FvQUNPMUgxbzc0bzY4aWhDRngycG93T3RPQUhlaitsQXhPdlU5YWR4MG9QMW9IcDFwMkN3b3BEelNra0FHanBTR0F3ZWxMajFwQlFSUUlVY1lOQUhOSFBRVXB5VDFvdUEwZ0hwME5Pd2MvU2x4U2dkdTlBQU1kZXRPVWMwZ3orRk96eHpRd0R2VHdNOWFNWXhpbEhYclFBQWREM3ArTzU0bzlxZmc5RFFnUC8vVy9qQ2R5QWVhcXUvUStsSXo1cXM3azlhZHhnOGc3YzFUZVR2MHB6djFQU3F6dmlpNERYa3dPS3F5U1VPNFBRNXFvN2c4MEFLNzVIUEFxcTdENjBNM2VxenVEU0VJOG1PdFZuYWd0bmtWV2R1OU5qRWQ4OWFycythSGYxNHFxN01lS0FGWi9TcThqRWlrZHVmU3E3c1RRQ2ZjUm1KcXN6ZDgwOW1QL3dDdXE3Tm5nMENFWnZYdlZjdHo2bWxkc2Y1NlZBV0o2VXhpRmo2WXFFdDcwcnRrZldvVHgwcEFJekRrZTFSczNla0pHTUExRVd6eFFBTTFSMHJFOWFaNzlxQUZIdlJrOXVLUWUxSmloZ0x4MEhOQjlhTStsQTlhQUFDajhhWEI2am1rem5yUUF0SlFmZWo4YUFzS0tTanBTa2U5RndEUHFLU2o2MFVBSFNqajhLT2xHYUJDL2hRZXRISkdLU2hnR1RTOURSanRRQWNVRERQcHhTRDBGSDBwZWM1b0VMeFRjWTROR0RtbDU2VURET0tRVXZ1S09Pb3A5QXVKd2V0TFIxem1qb2Npa0FkUHBSeFJrWW9PQlFDRGp0U1k1cFQxNW9QNTBndUdBYzBFRDYwR2ltRnc1NjlLVWptazR5TUNqcHlhQUU2VTRZL0drNEdmV2c5TWRhQUQ2MGNrODB2VDYwblRwMm9FSFRpakl5UlNVNGM5ZTFBN0NaSGFscFBjMGNVQUFIYWw2VVpOR0I5S0FBZlU4VW5YaWxBejJwTTk2TGlBZTlLZWVUUjBPYU9nOWFMZ0puUEFGS2NIZzBtQmlpaXd4YU1qcXRIRkdNakFvRUJ6OWFPaCt0SWZ4cHh5T2xBeENDZUtYdnhTVUQwb0FNY1VmN3RLY1VjR2dRWXg4cHAyT3hwRG1sSEhORmgzRStVbmdVWngxcE9TS1UvL0FGNmRndUx0SElwUnp3T0RSMnlhUWUzR0tRQzllbEpra2MwcHhtbDkrMUFCK2xHRDBOQnlSbWpyMHBnS0ZDL1QxcDNBT2NVbytsT0EzVWdFRlB4eHhUUU9hZW9vc01YQUJ6U2owOWFYbnZUaCtWQWhjWXBjRHRTOG1uZ1lHYVFILzlmK0s1M1BVMVVkODhkNldSL1NxanZUNkRCMnFzMGdQV2lSOEhCcXF6KzFBaFpHenpWTjVDT2ZTbGVUQnFxNzU1cERCbXFzejgwak54NlZWWnhUQUdZbms5YXJ1NEhBb2R6aXF6dGdjL3BRRmhXZjFxcTdjMHJ2eHh4VloyOWFBQm53T0tyc3grNk9nb2Q4VkF6OXFBQjJBNS95S2dMRThaelNNK0R4VUpiam52UUppTXg2OXhVVEVudlRTZTRxSmorZEEwRE5tb2VmenBTU2VwelVMWnhrMEF3WmllS2pMVUhweFRmNFRRQUVZbzZVdnZTY1VBQUI0bytsSm5ITk85LzBvc0FudlI5YVUrOUoweFFBdjE3MG1LTTl6UmdDZ0xBVGs4VXVEbkpwTTQ2VUErbENBVWUxQnoxOWFPTzlKMDR6UUFkT3RHTzlHUGFqdGloQUwwb0dSd2FTZ1VBQjVGSHRTNHBNaWdCZTlJQnhTbjFwT0Ixb0FNOXFYNlVsSFdpd1hGUEp5S1RweFMvNTRwVDdVSmhZVDNwTzFLUU9hQjY5QlFOb1NqcjdVdWZUdlJnZ1pvRUhIV2c5Y1VwRkp4M29BTWpwUm5GTHptbTlUMHBwZ0x4U1V2SFdqMnBCY0RrZ1lveU9vNjBZeWNkS0FNOVJRd1FER2VUU24xRkhYcFFDQWVLQUVBelJ6MnBjZ21nYzAvVUE3WjYwQWpiU2RCNjB0SUJNNU5LY1k5YVR2bnFLRHlLQUE0cFR5S1BwUjA0b1FBZWVLUFUwaDROTDA2ZDZBQWV2U2pvT2FUTkx6aWdBQXp4UzhZNHBPdkhlamlnUWRzVWQ4VWg1NmRxZDAvQ2dZbVBTak9PS0Iwd0tYanZRQWNkcVRHYVhBOWVSUVJRQWMwQWp2UzBZNDRvUVdCdWxLZXRKam4wb3lPdEFDOU9SUU9uTkFIYzB2QjRwZ0hYcHpRZnBRS0I5S1FCM3lhVVpBcGZ1bkpwUjZraW5jTGdBTzlMMDVvNDlhY0Y5S1NBQUtkeG5CcGFVZDZRQ2djVTREajhhQm5wU3Jub0JUQWNBZWxBQjYwb0hvS2tBOWFBR3FPZUtlRkgwcFJqTlA5S1lILy9RL2liZC9XcWp0UTdjR3FyTnhtbllBTGc4VldkL1UvaFNPM1dxenQ2VUFEditWVldhbk0vUE5WR2ZBb0dLekR0VlJtcFhZOXFnZDg1b0FZN1k1RlFGaitWSXpEbXE3UDEvcFFBTTNPS3JNd0hGS3pEdFZabXdPYUxnT0xuT2FybHgxSE5ER29TeEZBRFdPZXZGUXMyYUM0cUptb0JDRmdlYWhMWjRwV1BOUUZzYzBnRlk4WnpVWlA1aWw0Tk1CeFRRQm1pamlsK2xJQkJ6UndPMUtPUHdwdE1CZW5TbEhKejZVbEhyUUlRZWxLRDNwYUFlMUF3NzBtZS9lZ0UwdWVjMElBNmZoU2R1S0J6Mm9QdFFBVVVjNHpSME9LRUFVWm83VXZIV2dCRGdHamtVdWMwZDhtZ0xnYzRwQ2UzU2pnMHB5T2FBVEQzb0E3MFVZemppZ0JLUGFsOXFPaDVvQmlaQTdVdEI2ODBEMTZVQUJQRkJPZWFRNTROTFFBSG5pbDc4VW1mV2cveXBBR1JRRGlqRkp6MnBvQmNrMEQwb3lPbUtNZW5TZ0xCN1V2TklDZjhBQ2s5NkFzSFRwU2pyNjB0QUdPS0JEY1k2YzB1YzhBMHYwcE9CelF4aDF5YzB1Q2VsSjlUeFM5ZTNXZ0JlK2Fia21qcUtkbkp5S1FDY1l3T2FUUGVsK3RIUGVtQURnMGMwbU9hVTBDRFA2VUE1by9uUlFBZ3AyYzhDa3ozTkI1RkF4TW5yU24zbzVBbzZETkFnNEhRMFk3ZEtYUGVrT1IwcERRdU9hVEJvR0JTKzlPd0lUbkZPNG8rdEFBUGVrRmd6azBZd2NMUmc5NlVIOHZTbUlVY0dremdZNlVIQTk2TVpGQTJMK05CSHBTODRwTzlBQ25uaWpnZTVvQXhTakJGQUppaW45K0tiM3B5Z1l6NlVBSFFldE9DK3ZhZ0RzTzlPR00rdE1MQy9oVGdNZEtRQVlwL1A0VWdBYzA2Z0tUVHdPQWFBRlVkalNnZCt0S0JUaDlLQkNBY2lwTVo1b0E1NHFSVko2OFVBZi8vUi9pR1k1cXM3L3dBVGNVam5pcTd2UU1SNU1pcXJ1UU9LSkhPT1RWWm14VEM0TTJLck0xRHNEeFZkblBVZGFBR3UyYXJzL0dQd29aaUR6VUR0UUFqdDF6K2RRTzJCazhVanNUVmRteWNDZ0FadU1pb0diMDdVRjZnWmp5T2xBQVg1TlFGaUJpaG00OTZpTGNaOUtZV0JtenpVTEVIOGFDZXdxSWs0cFdFSXpEcDNxUGlnNDYwM09hQUR2elM0N0dtKzFMZzllbEEwZ3dLT3RKMHBlbkpvQmh6UzlmclNBOFVZb0FEeFNqanZSUjJvRUdSMnBEaWpyUm5pa01NVWZTZ1k3VXA2VXdBZ1k0cFBZVVpwYzVITklFSEdLUVVmV2ppbUNRREhlbHh6NlVaNjBBL2hRQWM5YVNsNjlhQWFBRXBjTjJwTWNVdEFBZW1hWGp0eFNjamcwRVpIdlFGZzY4MFlvcE8rYUFBNEZHT2FYcHhRT25GQUJqMW9BSnBCbmlseVIwb0FUM3AyQmlrL1NrNjBnRkdQeG96bm5OS0NUMHBEeFRBQlFmZWpCb0hQRkFCMVBQMG9wUndPYVQ2VVdCQnlSbjFwZWMwQUUwbjN1YUFGNW9PQjcwRDA5S1RQT0tRQzRGSmtaeWFYbnJRQm5OTUxpWXdNMFo1eDNvNmM5VFMvb2FRQ2REanJSd09LVWNmU2daeFRBVE9LWE5Ic2FNVUFHRG1qdmswblg4S2NDU0tHQUhqaW1ubW5IbWs2OU9LRUFZNXhTanBTZFI3VW5OSUJjWjYwdmZIOUtRRHVLTy9KcGdPL3BTRE5BR09uTktCa2RhQUZCSjZVaHdCaWxHVHg2MGU1b1FCMndhV2ozL0drNmMwQUhKTkwxNEZGTDlLQUFrVWRlbEtBUHZkNlhnVWdZblhpbmdBMGc2YzlxVUFFMDJORGg2VTREQnBBTWNDbkFEOFBlZ1Fvem1sQTdBMEt2Y1U4QWc1TkNDNG9GS09hUVZJb0FHYUVOc0FNaW5BZHFVTG5weUtjTW5rOUtMaUV4My9HcE1jNW9HYWVCanB6UUFEaW5nWVBOSUZQWCtWUEdQU2dELy9TL2h6ZHlldFZYYmlsZGpuMHhWVjM5ZTlNYUZaK01qbXFydGpyeWFWM0gzZTFWbWJHY0dnQkdQUEZWbmJIZWxaODhWVmQvV2l3eHpNU2VhcnMzR1JTTzNHY1ZBNTI4VUNFZHZUdlVMTjZkYUMzcCtkUU8vRkFYRVpzZjQxQXh6MHBYYlBJcUJqUUFwYjBxQXZuanJTbHZUbW95Yy9qUUEwbjFxUHJ6UVRpbWorVkFNTTk2WEhGSDlhUSs5QU1PdkpvN1lOSGJOQW9BTW1qdGdVRGtVdm9hR0FuYWw3QVVnb09LUUJqUElvSEJ6UndLQ0tZZ0ZIdlJuTkwxb0dIUFdrNjBIM282VUFGTG5Jb09NWnhSMm9BVDJOTG5JNU5KaWw0d0tBRkFCNkdtKzFLZmM1TkJPUlFBRVV2dFNaN1VZSVBORndFQnBjWm82ajBveDZVQllEeWVLUTlCUzk4aWs2MEFHTy9XanB5QlFNVTduT0tBRGdqRkpSMTZVb3lhQVluOHFPdldsQnlPS2JRRmdwZTFLZXZIZWpucWFRSVR2eFFjZWxBOUJTOFp6VEFUcGlqanZTL1dqanFQcFFBZ3lhRDA1cGM3dUtRakJvQVhIcFI5YU00NFBTamcwQUlSbmdVdU8xSWM5NlhucFNBQm5PS1ROQklOS2VuRk5BTHgxUFdreGtZSGVnakhTbElIYWdCcDQ2VVlQV2xIb1B6b0hTZ1BVT2M0cFBZMFlwUWU5QWhlMkRTZHMwSEE0b0F4eWFMakV5TVlwYVRyd2FkN0NnUW1DZWxHTVVjZm5TQVpvR09QRktmYWpQcDFvenViTkFCMFBQRkI5T2xMdHhSakI1b0FQcjJwZUFLVDJGS2ZlZ0E1NjB2Tk5BR0NCUng2MENIRGlrWEdQV2x4ZzVvT0NlYVF4eHdUU3FNZk1hRHgwRk9HTTVwZ0tCeGlseDF6UzRJcGR2ZWdBRlBBcE1kdlduNEo5NkxBQ2c4RC9JcCtCU1k3aW5qbk5BTUJ4VGd1ZXB6UUFDZWFmdDdrVUFLdVFPbEtBRFFBT3d6VHdBS0F1S01acC9RMGUxUEE1cEFJQjYxSW83Q2pibnBUd283MHdQLzAvNFlXWUNxclBqclRtZmptcXBiSFdtTUdlcXpIbkZEdjNQV3E3TnhRQU03WjYxWFlqa1k0b2M4MUE3RHBRQU8zT1RWZG0zYzBFazlhaGRzWjU1eFFBTTNVaXE1T1JpZ3RqcDBxSmlNZWxBRFNUVUxOamlsTFlHZXRSTWNjaWdCV2JQQnFJa1orbEpuMXB2UDUwQUxuRkpTZlNsK3RDQmdPZWxKanRTOXFBS0FESFRIZWlnZTFBeFFBZFRTNTlhUVVEbmcwQUZCNW96bWozRkFNWG5HUlNjOTZYNlVoNjBYQVh0UmdkYVBmcFNZUGFoQ0RqdFIxTkJCNjB2VTBEc0lPbWFQZWw2Y1V2UFNnQnZYbWc4OWVLWEhyUjlhQVFtY0NqMjZtanIxcGV2U2dHSDQwYzBuMDVwY0FHZ0F6NlVkNkI2R2dranJRZ0QrdEhTbDV4d0tiOUtBRndLTWVsSFhwUnlhQUFEUFdqcHpTNXgwcE1DZ0xoa2lqNXVncGNIcm1rNzBBSEo2OFV1ZTJLVEdmYWlnQTlxTWlnZGFVY2NVQWhEakdPdEdEUVFhS1FXQWNVbjFwZW94UjJ6VHNOTU01SUFvN2NjMHA0NW96eDBvRUpqdFNqSXBNSHAzcFNhQURrY0dqcWFVanNhVHAxb3VBSGtaRklPdkZMak5KUUF2SGZyUmpQUFFVWjdVblRocUJCOHRPSFdrSnozeFM4R2tNUVVvRko3Q2pHQ0tZaGVNOFVkcytsR1JTWkJCRkF3SDB6VHV2U2tBelFPS1lDbmc4MGV3bzQ3MHVUU0doQjE1cFIxeFM5cU1ab0VHUFdqZ1VnR01tbDYvalFBZDhudFM5K0tYR09LUDVHbXdBK3RPemswRWVuZW5ET2VLUUJTOFp5T0tYSE5PQUdBS0FGNmMwdjYwRDJwUU1DZ0IzUVpwd0dlOUlBTzFTWUErdERZQmpOUEE5YWFCZ2dDcE1kZ2FFRmhBTWNHbmdHbEE5YWNCemdqclFBQVU5UWMrcG9YcDZWSUFPNG9CaGpqNlU5UU9nb1VaR01kNmNCNlVBeFZIT2FrQTdIbW1nWkdUVWd5RGlnRC8xUDRVSGMxVmR2VGlsZHNjMVhZNHo3VXhpTTV4aW9IYm42VWp0amtWQXo4YzBEYUJtNCt0VjJjQVVySEhOVjJZOVRRaE1HSSt0UUZzL2pRL3ZVVE56bWtEQnlSVUI0NE5LV0dDS2hZODRGQUNsaVQ3MUVTT1Iyb0pwaHozcDNDd2NVdWFURkgwNHBBSUtVMGMwVTJBZldsOXFUOGFNZXRDQVhvZWFUNjBmcFIyb0VMZ2RLUWRLTzFGQTBGQjQ0bzY5S1hqdFJjQUEvU2c5TVVjWXBNMEFISFhyUzhEaWcrcG80NkNpd1hFSFNnWnp6UzlSeFFhRUFkK2FUdFNqa1lvL1NnQmZyU0hJNlVuUHJRT0tRaDJjZGFieFM5QnpSeVJUR0JPQmlqQUpvOUtEMTVvQVRQclFjOWFYOE9LRFFBblNsN1l4bWpxYVhuTkFDRTRBeFJrRTB1QmlrSFhpZ0JNK2xMM294emlrb0JpOFVtT09hWHJ6bWpHZmFnTGkrbWFRMGR4Z1VuZWdMRHVjODBuYWo2MHZIZnZRQWRSelNITkh2MW85aFJjQTRvSHBTZ2M4VUgwRkZ3WUhtazRIRkhQV2xPZTFGaFhBZmxTWS9TamtuRkxnNW9ZdzZIbWpIY0drTkxnbmcwaEJTSC9BUFZTNTlhVDNwanQwRjZjNHBNZHFkeGpQYWtPYUFEcDBvNzg5YUNNODlLUUVDaENGSnlNVWRCaWs5QjFwMzBvR0pnZzA3SEdPbEdPMUhQcFFBQUdsNjQ1cE8vTkxnZ2RjVUlBOXFVN2dPdEE0R1JTSGpyUUNEUHk1cGUrQlNldWFkMDdjVU1BNU5BeWMwYzlPbEdNRTBBQUdUbW5nZnBTam5nMERBb0FCanNLY2FYSE9hZGdZejBwZ0FIOFFGUEhxYVFBazg4MG9IWTBnSEJUK0lwUjBvQXhUOFlvQVVkT0tjUG1GQUE2OWFjRjZrMENGVWVuU240Sk5Kam5rMUlCUU1RQWtWSU9lRDFwRjQ1OWFlb09jMEFLUmtVOVFlMUdCVHdNOCt0QUlWVkI1cHdISEdLUUNwTWRjMGdhQUROUEM1cGNkK01VNERKcGdqLy8xZjRQbWZISStsUU13UEZET0QrRlYyWTl6VEd4V2J2VlZqamtITk9ZZ2RPMVFNMkNjbWdMQ00yVG1vQzNPRFRtYXE1WWtVREZac1ZBVHp1b0xjWXFKajY5cUdLNHBQNGsxQ2VUU25yVFQ2QVVCY1RyeFFLS0JTQmh4Mm9IU2pwd2FEVkJjRFFQYWw2MFVyZ0lLT3RISFdsQjRvc0Z4TzlMeDNGSjBwYUFFSTZDak5IU2pKb0hZTWQrbEhhajZHbEk5ZWFMaUVITkg0VWNVdWVEUUZ4TVV1UURSMW96eUJRQWc0bzY5YVh2U1UyQWU5TGlnSG5GSDE1NzBnQW5KelFEeFFRUlIzcDNBQjA1cE0wZWxIT0tRQ24vQUNhWFBacU1jMGdGQUI4dWVhTWR6UndPYU9CMDVvQVFjOWFYbjhLWHZ6U0dnUVlGR01EUHJSakhXajNOTmpEcHlPOUJBUFNqUE5ISFkwa0lVbkJGR1Ixb0p6OUtRWm9HZ0FCb3hTZ0hITko3anRRQURqa0NqQkhJbzV4UzRvWUNEbWpBNlVlbWFVODhkNkFRaDQ0cFJ4elNVdmZKb0FYb1BXa3gyNlVaSjVvSHZRQWREbWp0Z2Q2RDcwbkdNanJTQVhQT1RTQ2xQV2p0aW1BbVBXbEhBbzRIQXBSN1VnRVBTampwUzhkNlFVeENqazAzR2VLWEdPbEw5YUJoMUFJT0tPaDQ1SXBSMG9KQjRvQkFlcG80QW94NlV1UjlhTGdMMDVwTThab0o2R25FWUdLQUU2OUtNL2xRUFNseHpRSUFhVEI2VWNNYWRnQTlhUlF1RGpPS1hCSHRSamlsQzB4QzR4elRnUGFrK3RQQXhoanhRQWdCSEhlbmMwRGc1NjA4WnprMEFHT2MrdFB4Mm9IWEhyU2pOQUNqam1uTGdyZzBvVUNsQW9BZGp0U2lsVWU5UDdjRHBRQ0FMaHNacDRINVVvQlBOT3hRQVl6eWFrd2VCMG9ITlBBNG9BUUFkNmsyMEFZQU9ha0FQYm1rQWdIYjlLZXZQNWRLTWY4QTFxbEM0Rk5NQkZCRlBBM2NuclI3MUlCMHg2MEF6Ly9XL2d2ZHM5NmdZNDRwV2JqazFYWnhtbUFyTmpvYXJsaWVhQ2NuRlFsdWFCaWs4MUF4R2Y1ME1RT1BXb3M1b0JpYnZTb3lTVG1na2ppbVp3ZUtBWVp6UjFGRkhUclFBdjBwQU8vV2pyUjllTVVBSEdLTVVER2VLTVVBZ3orZEg4cU9NODBVQUhIUThVZHFXZ2NIRkFDVVlvK3RIWHAxTk5BTFFLVEF6aWxBejBwQTBBL3orTkJ4MW81UE5KMjRvdUFkdU9LWGo2MGhIZnBSeUJUQUQ2VWNkNk9LWDZjVWdFNW9IclI3MHVhQUFETkdPMUE2ODBoOUtCaThkcUI2Q2crOUdNME1RZGV0QjlxT0NhVE9LTGpzS2NrVnE2SHBiYTNyVm5veVA1VFhjOGNJWWpPM3pHQzV4N1pySjRGZGI0REgvRmRhS2Y4QXAvdHYvUnExamlKT05PVWx2WmwwWXB6U1ordFAvQlNiL2dqSjhZditDZG5nSFJmaXJlK0lMZnhwNGQxSzZheHU3dXp0SHRqWVhCRzZCWmthU1RLVEFNRmNFQU11MDRMSm44YXZyWCtoeCsyViswOThMOVIvYnppLzRKbC90UHhSVGZEcjR6ZUFyS08wa2sycWJYVzVOUTFHS1BEa2ZLMXdJb2hFNXlZN2lLRXFCdVkxL0RaKzJmOEFzb2ZFRDlpbjlvenhEK3o1OFJFTHo2Uk52czd3S1ZqdnJHWExXMTFIMStXUlB2QUU3SERJVHVVMS9NMzBjdkZ2TTg3d1VNRnhHMTlhbEJWWVNTU1ZXbEoydWtrbHpRbDdza2t2c3ZXOXo5ZzhXZUJzSmwySWxpTXB2N0ZTNUpLN2JoTks5bmU3dEphcCtxNkh2SDdYdi9CTzdYdjJTdjJiL2c3KzBWcWZpZTMxdUQ0dmFWRnFrRmxGYXRDOWlzdG5iWFlqZVJwSEVwQXVRdVFxOHJuSFBINXhjRGl2NmFQK0N6WC9BQ2pIL1lxUC9VbzJuL3BtMHV2a1g5amovZ2xCNE0rSVA3T0VuN2JYN2IzeENpK0ZQd3FrWm85T21FWG5haHFMcTdSa3d4RU5oV0tPSWxTT2FXWGF4V01JQXplL3dKNHR3cDhMd3pqaUd0ZVVxdFduSGxqZVVtcXM0d2hHRUZlVXVXSzBTYjBiZlZubDhTOERTbm5Nc0JsVVBkVUlTZDNaUlRoRnlsS1VuWks3NnZyWkg0bzhZNG82SGl2Nk52RFAvQktiL2duYisyZm8yc2FML3dBRTFmam5mNnI0NTBtMk56SG9IaTIzK3pOZHFod3hqayt5MmpoRDEzeHhUQ1BLaVRidTNENVMvd0NDZDMvQk1ydzMrMlI0bitML0FNRHZpSnF1cCtGdmliOFB0UG11Tk4wbU5JU2x4YzI3UzIwOE55SEJaZkp1dklSdGpjaVE4Z2dFL1NVL0c3SWZxbUl4ZGVVNmZzT1gya0owNXdxUVUybEdUaEpKdUxiK0pYVnI2NkhreThPc3orc1VxRk5SbjdXL0xLTW95akp4VjJsSk8xL0oyZmtmanQxNU5LUjYxOVYvc1RmczBYZjdXMzdXWGduOW0yU2FheFR4SnFRdDd5ZUpRWm9MV0ZIbnVwRlZoamVrTVRrYmhqSUdSaXZwUC9ncTcrd0Jvbi9CUFA0LzZUOE5QQm1zWFhpSHc5cjJpUWF2WTZoZHJHSGN2TExETEhtSUJEdE1ZWVkvaGRhK3N4UEhlV1VzNnBjUFZLbiswVklPcEdObnJGTnE5OXVqMDhuMlBEcGNNNHllWFR6V01mM1VaS0xmbTlkdCtxKzlINWdaUDYwdlVlNXI5VC9qSCt3UDhQZmdsL3dUTytIWDdaWGk3WHI5Zkd2eEoxS1NIVDlEQ3hDMlN4UjV6OXBZbGZNYk1VVWJjTmpNeWU5ZmxoeVBhdlE0ZDRud2VhMDZsYkJOdU1KenB0MmFYTkI4c3JkMG1tcnJSMjBPWE5zbXI0S1VLZUlWbktNWkxXK2tsZFg3TzJ0dHo5TFBoaC93VGcxLzRtZjhFN1BHbi9CUWkzOFYyOXBZK0RkUmJUMzBWclYzbG5LdmFKdldjU0JWSCtsZzRLSDdwOWVQelM1elg5UlA3S2YvQUNyVy9IREgvUXlTL3dEby9SNi9sMjZacjRUd3U0cHgyWllyTnFXTW56S2hpWlU0YUpXZ29RYVdpMTFrOVhkbjB2R2VTWWJCMGNEUER4czZsR001YXZXVGxKWDEyMFMwV2dEUGFqbk5keDhOUGgxNHkrTC9BTVF0RStGdnc4c1gxTFhmRUY1RFlXTnRIak1zODdoRVhKd0ZHVGxtSkFVWkpJQUpyK2dEeGgvd1MzLzRKbC9zWnc2YjRILzRLSWZIdlViUHgvZTJxVDNXaitFclUzQ1dKbEdWTXIvWkx4eWdCREF5SkE4aS9NaVk1cjMrTHZFYkxjbXJVOExpT2VkYW9tNDA2Y0pWSnRMZVhMRk5xSzd1eTh6ek1pNFR4ZVlRbldwY3NhY2JKeW5KUWltOWxlVFdyN0xVL25IK3RMd2VhL1puOXVML0FJSlQ2RjhFZmdKcC93QzJkK3lONDhnK0tud2h2bWppbjFCRUVWNXA4a3IrV24yaU5lQ25tRlkySkVja2NqQkhpSFUrVmY4QUJPZi9BSUp2TCsyalplTFBpMThVdkYxdjhQdmhkOFA0Vm4xM1haMFdWOXhCZnlJVVprRzd5MUpaeVR0eWdDT3pCYTVLUGl6a004bm5ubnRyVVlQbGxlTWxKVHVseU9GdWZudTB1WGx1N3Eyak42bkJHWnh4OGN0ZFA5NUpYV3E1WEcxK1pTdnk4dGszZTlqOHVoMnBhL3BVK0dmL0FBVDYvd0NDSFg3U25qMkQ0QS9zOS9IenhjUEcrbzdvZE5tMU96VVdGMU9GTGJZMWwwNnozSEFPMURjSVhQQ0ZpUlg0dS9FSDlqUDR6K0J2Mnc3MzlpSzF0VTFieG5CcmlhSGJMYkVpSzVsbUsrVEtyT0ZLeFBHNnlsbkFDSVNXd0FhejRhOFY4cXpLdlZ3dHAwYWxPSHRIR3RUbFNmczl1ZGM2VjQzMGI2UGV4V2NjRVkzQ1U0Vjd4cVFsTGxUaEpUWE4vTDdyMzdMcjB1ZkpnNEhOZm9iK3lKL3dUOTEzOXJMOW56NHpmSDdUUEUwR2lRL0IzUi83WG5zNWJacDN2bCt6WGR6NWFTTElnak9MUXJrcTMzZ2NjYy9wdDQwLzRKZ2Y4RXJmMk5wckg0Yi9BTGYzeDgxYUQ0ZzNGckZOZWFiNFV0RExEWXRNTndNakN5dlhLQVlJOHdReVNMaDFqQVlWK2hYN01mN0Z2Z2Y5bGY4QTRKNGZ0WWVPL2dqNDlzL2lQOE9QaUY0Q3VidlFOWXQxOHFjR3owN1ZVdWJlNmh5ZGtzSmxqQnp0SkpJWkVaU28vSitQZnBDNFAreTFWeVdWU0U1enBLbk9WR2FwMUU2c0ZQa2xPUExMM0hKcnJhN2p0Yys0NFk4SzhSOWQ1TXdVWlJqR2JuR000dVVHb1NjZVpSbGRlOWI1NlBjL25BL1lFLzRKL2E1KzNnM2o1TkY4VFFlSFArRUQwUnRhazgrMmE0KzBxdS85MHUyUk5oK1Q3eHoxNlYrZWZKNU5mcWovQU1Fdy93Qmdqd1QrM05KOFQwOFo2L3FHaC84QUNEZUhXMW0zK3dMRWZQa0cvd0RkeStZRGhmazdjODFwL3dEQkwvOEE0SndhVC93VU0wdjRxMmgxVzlzZGM4RjZKSGU2TmEybmtoTDI5blc0RU1FelREQ0kwa1NLU0NNQmlTYS9Sc2I0aVlMSzhYbWRmTXNYZWxoL1kzanlXOWw3UldYdkw0K2R0Ti95YmJIeVdINFV4R01vWU9uaEtIdjFmYVdmTmZuNWRmaCt6eXBXL3ZINU5jVVp6elg5REdtL3NGLzhFWWZoWnJjZndPL2FUL2FNMWVmNGlSU2kwMUc0OFBXdU5Dc0x3a0I0WHVIc2JsWkZqY2xHazg5QXBCTWdpSUtqODgvK0NsWDdBSGlmL2dubDhmSS9oZGZhc3ZpSFFkWnNsMVRSTlZSUEwrMFdqdXliWkVETXF5eHNoRGJXSUlLdU1CZ0IzOE9lTGVVWm5qNDVkUlZTRTVweWg3U25PbXFrVmE3cHVVVXBKWFQ3MmQ3V09YTnVCc2ZnOE04WFVjWlJpMHBjczR5Y0c5bEpKdTIxdlhUYy9QUHZrMEhpdjM4K0RYL0JKLzhBWmkrRC93Q3p0b1A3VFgvQlUzNG0zZnc1c2ZHVWF6NkQ0ZjBaRm0xV2UzZU5aVWtrSGtYYkJtVmxMSXNCRVFaUE5rUjIyTDc3K3o3L0FNRVMvd0JqSDlzcnh2WitMLzJSL2pQZmVLUGh0RXM4R3RyTEJIYmE3cFYzc0Vsb0pJWjRZUkpETmhrTGlGUG1YNU42N2lueitaL1NENGJ3a2F0YXJLZnNhYmFkVlVxanBPVWQ0cW9vOHJsZFdWblp2Uk52UTlYQitGdWIxM0NuQlI5cE96VUhPS25aN053dmRMcjVMVjZIOHcxSFhtdW84YjZGRDRXOGFhdjRZdFpHa2owNjl1TFZIZkc1bGhrWkFUanVRTW11WEF3Sy9hcVZWVGdweDJaK2VUZzR5Y1dLTUhuMG85elJuTkFJNE5hRTJGeWNVYmNrWXBja2pPS0J6UUlEam9hVWM5dUtRY2NkYVgrS2hqUUhhRHpTNEhlbTdSMVBlaGR4cGlIQWRhT2V0SjlLZmpqTklBOTZYSGVrSTR5YWVNZGFMREFBOUR6NzA0WUhGTDI0cFFPT3RERUpnL3hkS2ZqbmlrNSs3VCthR05BQms1cHdBR0tUaXBCam5IV2dBR2U5T0h0UUFSeUtlT2FBdUFHZUtkd09hVURGUEF6VFlDaW5ZNDRwVkFCcHkvblNZQmduMnA0NjROQUdlQlVtTzFBQ0FER0c2VkpqQXBBRGtacCszb29wZ0E1NlZMampGSUZQYXBBQm1rQWdIVE5TZ0FEUGFoYWNCeC9PZ0xnTTFKalA0VURqZzFJQjYwQWYvOWYrQ0ZteFVETUJ3YVZtUHJVTEU5S1l3TFZBemM1Rkt6WTZWRHVHN3JRQU1TTTRxSW5PZTFCT2Fia2RLQUU2ZlNqcDBvcGZyUUlUdnpTVXVlTWRxTVVBTHlLTVo5cVRISW82OGlnWXVlYWI3MHA0T0J6UjdubWhnSFRuRkthVEI2VXZlZ1ljL1NrbzRvb0VMejFGSlJSeVRRTUNNVVk3VTRlOU5wQ1REcWFCUzQ5T2FUZ1V3Rk9jVWxIYm1qSHJRQXZYbWs5NlBwUjBwQUh0UzBoSjZHbFBXbUFuVHBTbjJveitsSFBTZ0JCbnBTbk5KN1VvT0RRQUNnSG5QclJtZ2MwTUE2SG11dDhCL3dESThhTC9BTmY5di82Tld1U1BwWFErRWI2MTB6eFZwbXAzN2VYQmJYY0VzallKd2lPck1jQUVuQUhRYzFoaW90MHBKZG1hVVd1ZE45eitpSC9nNXp1Ym15L2I5OEdYbG5JME0wUGdQVDNSMEpWbFpkVjFRZ3FSeUNEeUNLOWo4WTI5dC93WEIvNEp0Ui9FUFM0MHVmMmlQZ1hiK1RxRVNBZmFOYTA3YVdMQURsMnVFUXlSZ0E0dW81RVZWV1lFL0EvL0FBWGQvYTMvQUdlLzJ6UDJ0L0RueE8vWnM4UWY4SkpvZGg0UXROTG51ZnNsM1o3THVLL3Y1M2o4dThoZ2tPSTVvMjNCU3AzWUJ5Q0I4U2ZzQWZ0bStOdjJFZjJtdEMrUFBoUHpMaXloYjdKck9ucTIxYjdUSm1YN1JBZWNiaGdTUkU4TEtpTWNnRUgrVU9GdkRyTTZuQWVWWWpDMDNTekhCeDU2YWtuRjMxNTZVMDdOUnFSOTFwMnM3UG9mdDJjOFY0T1BFdU5wVnBLZUVydmxrNHU2dHB5emphNnZCNnI1cnFmc3Yvd1daQlgvQUlKai9zVmc5UjRSdGY4QTB6YVhWbi9ndjVmWG5oejlubjlsZjRhZUVaR1R3WkQ0VWVleldNN1lwcFliV3dpamRrSEJhT0Z4dFBKSG10Nm5QTmY4RjQvMjl2Mk9mMngvaDE4S3ZEZjdLWGlOZFlIaGVmVURkMmlhZGUyQzJjTTBOc2tDQVhWdkJHUVBMWlFzUllMdDdER2VUL1ovL2I0L1lxL2F3L1l2MFA4QVlSLzRLY1M2bm9MK0J3bzhMK05kT2prdXBiZU9NR09HS1dPS0tXUWVWRVJEdDhxU09XSkYzYkpFUno4aHdWa21iNFRKc2x6L0FCR0JxZjdQV3hNcWxIbGZ0WXhyU3FLTTFCcE9UaGRPeVYzRjNpajN1SWN4d0ZmTU14eXVsaVlmdmFkRlFxY3k1RzZhaTNGeVYwdWF6MWJzbXJObjVtLzhFdjhBeEo0djhLLzhGRHZnenFYZ21TU084bDhXNlpaeWVXeFV0YTNjNjI5MnJFZnd0YnlTQmgvZEo0cjl5UGpIOGRmRHY3Si8vQnl0TjRzMHk0VzIwcnhEZGFUbyt1b01KRW45czZYYXdzemtmd3BNME4wNS92QTVyemY0RStQZitDTWYvQkwzeEJjL3REL0REeDFxL3dBZC9pVHA5dklOQXNsc1pyQzB0WHVFYVB6REpMQXNTdjVibEhrTHlzaWx0a084aXY1OFBqbjhjZkgvQU8wTDhhdkVYeDYrSVYyWmRlOFI2aEpxRThpRXFJMlkvSkhGemxVaFFMSEdNL0tpcU8xZm95eUY4WVovaXNmTERUcFlSNFdlSDVxa0hUbFVsVWtwWGpDU1V1V0NXa21sN3o5M1pzK1RlWkxJY3JvNFpWWXpycXRHcmFFbEpSVVUxckpYVjVONnBONkxVL3A3K0FuN1AxcCt4SC93VTQvYXovYVF2N1ZZOUcrRVBodlZmRVdqZ3IrN0UvaUdQN1hZUklUd1I1WG4yNEg5NFlKNE5mSkg3U2ZoM3hQKzNIL3dTVS9adCtMR2hodFU4WCtEL0UxeDhPTHc1TE96WHpoYkh6RzVKQVNHMUF6eUdtNDY1cjNiOXY3L0FJS3Uvc3QvSC84QTRKd040ZCtHK3IrYjhaZmlQWWVHdE04YTJxV1Y1QTBjZWttUzZtWTNFa0NXMGlpNHpHdmx5c3pKS0JqYUcyK0ovd0RCRVQ5dnI5a245bkQ0Y2VPZmd6KzJsclA5bGFGSnJtamVLdkQrYks4dkIvYWxoSjVqc0Jad3pNanExdGFNcFlLcDJrRTlxL0xjdnl2aVdubGI0dXhHRHFQRzRhcFJnb2Nzbk9kT2xTZEdiaXJYY1p5cTFKcTJqU1R1ZmFZckc1UlBHLzJGUnhFVmg2MEtrbks2NVl5blAya1UzZXljWXdoRjM2dXg1MS93WDMrSWVoNlQ4ZS9BbjdHUGdTYmQ0ZStDSGhTdzBhT01kQmQzRUVUeUhBNHo5bWp0UWVwREJzbjAvQmI2VjdOKzBUOFk5Yi9hRytQUGpENDUrSXR3dS9GZXIzZXBzakhQbExjU3M2UkQvWmlRcWkrZ1VWNDF6MUZmMXg0YWNMdkpjaHd1V1RkNXdpdVo5NXYzcHY1emNuOHo4TDR2enBaaG1kYkdSK0dVdmQ4b3JTSytVVWtmMUVmc3FmOEFLdGI4Y1A4QXNaSlAvUitqMS9Mc2VlbGYwd2Y4RTR2MnJmOEFnblhhZjhFdC9HZjdELzdaZnhFdlBCcy9pM3hCY1hVcTZmcDEvYzNLMm1MR1NLU09XR3h1N2NGcExZcVZiTFlCNEdRYTRML2htVC9nM0c2ZjhOR2VPUDhBd1YzZi93QXo5ZmhmQmZGMCtIc3p6aWpqc0RpWmUxeE01eGxERDFaeGNYQ0NUVW94czlZcy9TdUljaWptdUR3RlREWW1pdVNqR0xVcXNJdE5TazdOTjM2bzhlLzRONHRIOE82bi93QUZOZkRseHJtM3o3SFI5V3VMRU1BYzNQMll4bkdlaEVMeWtIMnI4N1AyNy9Fbmk3eGQrMnQ4V2RkOGR5U1BxMG5pM1dJN2dTTVdNZmsza3NTUkFuK0dKRVdOQjBDcUFPQlgyaDhWL0huN0ZQN0JmN1JQd3crUC93RHdTNCtJMnRlUGIvUkxtNXV0WVhXN2VhMVZFWHlvMXRoNWxoWWxvcnVDUzRqbDJoeUIzVTR6OXovSFhXZitDSm4vQUFVaThZRDlwUHhoOFJkWStCdmpuV1kwbjhSYVRMcDgxN2J6enhLRmVTTjRvSGhNckt1TjZTS1plSGFFU0Y4K2pMUDZ1RDRtWEZkWEIxNVliRVVGVDBwVGRTbEtuVW03VHBKZTBqR2FkMCtWNnBYMGFaeHJLNFlqSjNrY01SVFZhbFVjL2ppb1RVb3hWNHp2eXVVYldhdXRHK3FaYi80SXMzMTc0bi80SnUvdGlmRC9BTWNTTWZDVm40YmU5aDh3N280YnFiVE5SKzBTeHFlTjRXMnQyeU9jb250ajQrL1lBL1k0K05ueHcvWks4ZGZFUDRsL0dPWDRQZnM2MlY0QnIwa2p6VHdhamVKNU9WV3dqa2pXWmd3dDBETVN6U0ZFalNSZ1ZIcm43VnYvQUFVQS9ZKytBMzdGOTMvd1R4LzRKbXJxV29hTjRra0UvaWp4ZnFLU1c4K29CdG9saVNPU09LUW1aWTBqY21PS05JUVkxUmk3TU5QOWdYOXNIOWlMNGovOEU5ZkVYL0JOUDl0L1hiL3dMWjNHcU5xZWsrSUxPQ1NhUExTcGNLc2doaWxLdkhNalo4eENqeHZ0REl5ZzE4ZmpxR2YwOEptUEVPRXdzNmNjVmlhTXVYMmFuV3AwWVJqQ1ZhTkpxWDd4dGN5aTR1VWZpY2JudllhcGxrNitGeXV2WGpOMGFOUlg1M0dFcHlia3FibW12Y1NkbTAwbnRjOUUvWVdzZitDTG53bi9BR3d2aHhaL0NMVmZpQjhUZkc5MTRoc2JQU0x1OXQ3ZlQ5R3Q3dWFaWTRydDRpc04wUkVXM3FwM2drREs5Nit5dmhacG5oN1VQK0RvZnh4UHJXMzdSWjZhWnJFTUFjM0gvQ1AyVVp4bm9SQzhweU9lSytFUGdoNHEvd0NDTW4vQk9ENHY2SDhhZkJuampYZmpwNHcweS9nUzBFZW52cCttYVhISkpzdUw1aExFdm56UXdNN1FyRzhnTWdIQ0VpUk9JLzRLR2Z0aC9zL2ZEei9ncFI0Wi93Q0NpUDdDWGo4K010WTFHYURVZFhzR3RibTBndFZ0clMyc1JhbVNhS05uUzl0MWxXVlFDMGVTRGc3YStaeHZET056Zk9zVlN3a2NWS0dKd1ZhakNyWGhKSjFIS01rbXVXUHM0TkxlVVlLVGJVYnUxL1p3K2NZZkE1ZlJuWGRGU3BZaW5VbENsSk8wTE5YdmQ4OGszc3BTc3JYc2ZrLyszSjRnOFYrS1AyemZpdHJmamgzZlZaZkZ1c0xjQ1FrbEdqdkpZeEgwNFdOVkNLT0FGQUE0cjl6UCtDUFBpUHhiZC84QUJLZjlzcndwZlBJMmgyUGhxOXVyTkNUc1c2dWRIdjB1dG82QWxJTGZkajJxdjhlZFEvNElpZjhBQlJYeGMvN1RuaXY0bGF6OEUvR21yeFIzUGlQUjMwNmU4aGx1RUFXU1NObzRKSTJsWUFEZEZKKzh3SGFFT1h6N2o0Uy80S0MvOEVvL2dUK3doOGF2MklmMmNOWTFHenRiN3dycUVHbGF0cXRsZVBkZUp0YjFTeHVZSm5JaXRpdHVrZXkxaVZweGJyOHhBUUtoZHZwT091SjhYbTNET0d5VEM1VlhWZUU4UHpwMFpLTlAyZFNITTR5dHl6V2xseU4rNDNKMlNaNUhEV1RVTURuRmJNYTJOcE9uS05YbGZ0RmVmTkdWazQzdkY2M2ZOYjNySlhiUjgwLzhHOFArdi9hSC93Q3hFZjhBbk5Xei93QUc4ZXZhcDRWOEhmdE5lS05EbGFHOTAzd1pGZFc4aWtoa2xoanZuUmdSeUNHQUl4WHlwL3dSby9hNy9aNC9aU2wrTXovSDN4RC9BR0FQRm5oTjlNMHIvUkx1NiswWFI4ekVmK2l3eTdQdkQ1cE5xKzlPL3dDQ1FmN1hYN1BQN0x2Z0w0L2FMOGRQRUg5aFhYamJ3bi9abWlwOWt1N3I3VGRlVmRyNWViV0dVUjh5b04wcFJlZXZCeDBlSnZDdVk0bi9BRmtqU3cwNXFxOEh5V2hKODZpNDgvTHA3M0xyeld2YnJZeTRQenZDVVZsRG5XakZ3K3NjMTVKY3QwK1crdWwrbDkraCtKcnlQTEkwa2hMTXhKSkp5U1QxSk5mMUgvOEFCWTdTL0QvaURWZjJLclB4Z1FiSFVmRHRoQmZ5U0RkdXQzYlRSTHV6MUcxbVBQcWEvbHQ1elg3YmY4RmRQMnZ2MmZQMm5QQUg3UG1qL0FieEVkYXZQQTNoVCt6ZFpVV3QzYW0wdXhGWnFFRFhNTVFrSWFKL21pTHJ4MTVHZjF6eEJ5WEZZbmliSnFsQ0V1U1AxaFNrazJvYzFGcUxiMlYzdGUxM29qNFhoWE1LTkhKOHdoVmt1Wit5c205WldxWGRsdTlON2JJOWsvNE9XdFY4VHpmdDhhTm9HcUYwMHJUL0FBallmMmJGeUlsamt1THJ6WFJlRkJNaWxTUjFDS093QTN2K0RZL1UvRnNIN2RIaWpTZElhUTZUYytEcnVUVUVHZkx6RmVXWWdjOXQ2czdLdmZhejQ3MTBXby90dS84QUJPWC9BSUtjL0Ezd2Y0Ty80S1M2bnJYdzgrSjNncTJYVDRQRjJsUVBkeGFoRnNBTDNDeHdYRFlrY2VaSkcwUTJTWmFPVlZkMEg2Vi84RWVmSFgvQlBqNFgvdEEzZjdML0FQd1Q0L3RmeHRMcU9tWEd0ZUxQRzJ0d3ZBVGIyUmpodHJTMWphSzNaRTgrNDNFdENvN0ZwU1ZNZjgzY1ZaempNcjhNNi9DbUx5K3FxOUdrNFNseVAyTm91L3RGVitCM1h2Slg1M05wY3ZVL1c4a3kvRDQzakNubmRERlFkT2MxSkxtL2VYYXR5T0h4S3owYitIbDF1ZnhmL0Y4RC9oYlBpZ24vQUtDOTkvNlBldk9zNUJycy9pTHExbnIvQU1RZGQxM1RqdXQ3M1VibWVKdlZKSldaVCtJSXJqdW5Xdjd2eStMalFncGRsK1IvTkdLa25WazEzWWd4MS9LakZPSFhtamcvalhZWURlVFR4MXBNWjROS1FUUXhpWUpvOTZjT25GQU9LQkNZOWVhVWNubWdEMXBjY2tDZ1ljaWxBeFFBQnhUdU1mTDNvRmNGeTNXbllGS2V1S1VZem1rQWJUOWU5T0h0UzQ5S0JuMHFnSDdlZWFjTVpHS1RIRlBBengwcFdIWUFDZU90T0F6MDRwUnh5YWZqSFdnUWdVY1U0Y1U0REpwUU85TUdLQWFrQS9Pa3h4a1U0RG5ubXBBVlFUd0tlQlJnbXBCenhqSXBnSmpKcDRHS0JnVklBUU1VWEFSUlVtMzJ6UU9uU3BBS0xnR1BYdlR3Q2FRRDE0cVRvTm9vUU1jQnhUOFpwQU04VklvSGVsWUFYclR4L3NucFNqUFNuaGVPS1lILzBQNEZHYlBPYWpadURta2M4ZlNvbVBlbWhvYXg1cU1uSjVwU2NEcFREaWdCTWs4Q2pIYWc4Y0NremdVSUJmclM0NytsSjZVdlVVQWhEMG83VWNHbHpTRUptbEl3ZUtUQXpSVEdHS0FEMW83VWRxQVlkdU85T3htbTV6eFJ4MG9CQm5yUy9yUVBXak5BQm5GQndQZWt6am1nWkhXZ0FOSFdsNXpnVW5VODBYQmgvdFVjRHJTK3RHUlFBbU9NMFlGT1BGTjZjR2tBZCtLVWUxSU90S2ZhbUFuV2w5aFIxcFFlTVVYQWJTOVRSOWFYbjYwQUo3bWpwelFjOWFPZ3pRRmdOSFBhazYwdkp6UUFEbmdVQ2oyTkdTZUtBc0djOWFNOXFDTWNkS005elFBQWdHako2VUhBNlVmV2hpRHB6UU1ad085QjUvQ2w2YzBEUWg5VCtWR08vcFM1SFdrN2RjNW9RQlM4WXBPblNnSFBHS0FEclMwWS9pcE9mcFFBQUFIQm96eFFRVFM0UGFoaGNNK3RHU09hT2NZeFIzNUZGaENFNW8vV2xKbzdlbEF4S1hrR2lqT2FBRndLT2hwTTRvSElvQU0rdEwxTkE5QlNrRHJRQ1A2SGRWLzRLQS84RTZQMjkvaE40UjhLZjhGSi9EZmlmUVBIbmczVDAweUh4WjRSYUYvdGR1bU9aNDUvTXd6RWIyVXd5Z09YWkhRT1VxbnFIL0JSNzloVDlpejRBZUxmZzEvd1MrOEsrSkQ0cThjV3oyR3ArTS9GTHdwZHdXeFFvUHNvZ1k1WUJuS0FSd0tqa1NIekNBQi9QYmowcGEvR0krQk9USzFCenF2RHFYT3FEcVAyTitibStIZmw1dGVSdHh2OW14K2d2eEx6QjNxcU1GVmE1ZmFjaTlwYTF0Kzl0T2EzTmJxSFRnMG85cVRPTVlwUnhYN1FqOCtRbkdlYU9jWnBkdUJ5S0QwSE5LNEJ5VFNqM285dlNqSkhQU2krZzJnSEZHRDFORk82akovS2k0Z3hnQ2w1Nm5wUUJ4ajhLY3ZYM0ZJQUI3Q25nWjRGSmpuSnAvOEFzMDdCWUFPT2FVREpwUWFWZldnQmZsUHRTZ0E5T0JTalA4VlB4aWdBSUhCUE5QeGpHYU1EcWVsT0g1ZTlGd0FqbW40b0F6d2FmejFvQVFEbXBBQ09uZWtIT2FrSHI2MEI2aUFaNjhWSUFmeW9BNU5QQXgwNzBXQUF2TlNBVWdBSEFxUURxQlFBRGpweFR4MTUvR2dDcEFPOURBQmcwNEFad0tBTVZJQUtBSEtCM0ZPNjlLT2xTS0tMZ0FYbklxUUFmalFGd0trSFUrbEZ3RVVWSUJ6UXFnZmpVZ0dNZXRDWWovL1IvZ0taZ1Rpb2l3UC9BTmFoam52VENmU21NRGtkS1E4ZGFNbWc5S0FESGNVWTdVWTR6UjJwQUxqak5JUmlnakhJb0dmcFRBTURwUlFPbWFNbk9hRUFjNW9PS1hyeFFlYUVBaHBSNkNreDNOS0RpZ0FQdlNBY1lwUjcwbU1VQUg2Q2xKSkdjVW5YaWp0bkdLTEFBNjBkODB2SVBOQXdLQkNjOXFVbjFvN1VZT1BXZ2ZtQjQ0cE85TDE0bzdVQUdjVUgybzdkYUtBQTU2MG45YWQ3VW5YdlFNT2g0cE9jVXYwcE9SUUlCNlVvT0tPMUdlTTBBR1B3cGVTTWltbmc0cFQ2L2xRQWM5TVVIdjdVcFBZMG5Bb0FEUUtNZHFENzBBQXlLRDh0SEZIV2l3QzR4MW81NlVuMEZLZW5OSUJPaC93cDN0VGUxSHQycGdLYzBkQmtVY1VZSW9BT25IV2pCeFJ4akk0cFBvUHhvWUNpakFCNXBPblEwcHBBSWVLWHQwbzc4MGRPS2R3dUp6azBwR1JrMGNEbWdqdFFBRDJvemc4OXFPM0ZBNllwQUhYclJnSGlqL2RvNjhIclRBVDBKcGVUMG80UHZTanJ4UUFnSGFsR004RHBTOEVVbVJtZ0FCNHBRY24ycEtmazlTYUFHbko0NjVvNUFwY1lwUmdtaEEwTjQ1Rk94ejZab3gzRkhTZ1FFYzROSFRtZ0Fad2Z5cHpBZy9TZ1lkVDcwNWVsQTU1cDJQbHBDRUE3MHVPYUJ5UDBwNHlHelZNcllBTzFPQW95ZUJUd0tRZ3g2bkZPQUgvMXFBTW5BcHdBNm1nRUFHUlR3dWZwUnQvU25CZS81VUFrTGo4NmNCam1sd085T0M1RkFDODU0Rk9Ycm5GS281NTcwNVFTYUFZWXpVaXIySFNrVUdwTVo2Y0NnQlIwNXBRT3dwVlhCejNxUWc5S2FBQlVnWDA0cEF1UjcwNERGSUJ3em1ucUNlb3BSNzlxY0ZCNW9UQUZBLzhBcjFJQWNVQlIxcVFCczVGQUFGd2VLZW85S1VEbmcwOEwwSW9Dd0FEOHFlT090R004MUtCejZta0FtS2tBQU9SUUJ4eDBxUlJUQS8vUy9nQzU1NHBLTVVmU21NS1huQU9lYVQzTkZBQm50MHBhUVV1YUFDazc1b0hITkh2UUF2UE5KUzlPYVE0b0FYSDQwRGpyUm50UVJ6eFFBbUtYaWpIZnZTZHFMaUFIajZVZS9Xam1qSGFpNHdveDNwZUFLQmpHS0JDZTVvNlV1TVp6elNlMURHTDBGQk9SU1o1cGFBRG1qcjBwUHFhZHhRQWhHS1hnY1UzMnBldEZoQVJubWprODBZcEJ4MHBESGRldkZJZldsNXBNMHdBZXY2VWNacE01NHBlQnhRMkFwNE9UU2NIaWw2Y21tODBBTFJudlJSbjA0b1FBYUFNNHBjWUhOQTlSU0FPcDVwTThVZmhSbjBvQVVqclFBYUJ6U2NkYWJRQzU3R2s0NlVwRkhPYUFBNTdtaWtPQlIzOTZCQzR4MXBCenhtanR4U21nQVBUQUhGTGp1S1RBeFJqdjBvQUJTSGptbHlNWkhXazl3Y1VERjZVY2c4VWQ2VDZDaXdDNXp6UjlLWE5JVDYwQUhQWEZBL1NqbnBRQlFBWUI1OWFjTTV3VFNESFU4VXZIYWdHRkoxTkJPS2NEelRZQU1INWp6UlIxN1V0SUE2ZHFYT0JTZTRvQUZBTU9uWHRSMU5BUFhIZW5BVUlBNmRLVWUzNTBZTlBVZHFBRXgzTk82NEo1RkdDUmo5YWNCbWl3QUI2VTRESFNsR0NLY0FPcG91RndIYkp4UzRwd0h0UmppaEJjY28yVS93Q1hyU2dIdFJpZ1FZR0tmakZLb0lHUlR3QU9LQjNFWEZQQTcwb0hGT0hYcFNHS0JUbEZMdC9XbmNEdFRFR08xU1lQVThVbTNpbmdkenpRQXFnWXpVb0JwdUtsd0tBR3FDZW5hcFIwb0F6elVnSHJRd0VIdlVnQW9DZ21uS081b0FVZXRTQUNnREpxWDNOQUNLTVU5UWM5YUFEVWdXZ0F4NlZJb1BRVUFIMXhVZ0JJeFFBS0JubXBCenhRbzU1cCtPTWluWUQvMC80QWM5cUNPT0tPTzlIMXBsQUFlS09sTDE0NzBtYVFnd0tVSDlhVEhhbDdEMnBzQTc4ODBnNG9vK2xBQys0cERRVHptak9LQUQ2MGRlbEtSNlVtUFdnQXdEeUtPdlNseGswZHVhQkNkNlVlbEhVWW81QnhRTU1Ib2FUMG9QRkhIcFFBcDUvR2t3UjJwZnBSejNOQWhEajFwVGtZb09RTWV0SVRtaEREMW82MFlKeU1VN3B5RFNCaUU3dTlIVHBTamtacE81Tk1BSFRtajJOR1FhQUIyb3NBY2djMFo0NDdVWTlLS0FFL0dsQW95T3RLY21oZ0hPY1VsRkhRODBBSGZCcGUyQlNVWTQ5S0JpOUJRZW1ldElPdkZHYUJDODBmNzFKemlqSHJtZ0FKOXFVSG5tam5GSmtkcVBJTEIwOWpTOFVkT2Y4QTYxQjU2OFVCY01aNlVZNzBkdWFUSEZEWWhSNlVvNTYwbkZJT24wb0d3Tkh1YVAxb3huaWdBT2NETk93UlNEMUFvNmM5NkFBQUNnbmpuclFldEJwQWhlY2V0SjEvd3BjMGxOQUJ6bkJwMk81cE9LWGpOQ0VIUTgwbU04SGdVZTVwUjZVREY1UGFqazVwY1VlMUFDWTUrbE96eFNVWTRvUUFNZmhTNUk2MGdISkFvR2NVQUtCM0ZPQUdNVXVPNSt0TG5CNW9BVVVvR09LUHBUczBBaGNjZE9sTGdaeFFCVHh4UUFkT2xPQUlITkFUdlNnWTRvU0FVRFBXbjQ2bWdjZGFjQVNLQUFBanAycVRBenhSanVhZmcwQUlCZzFJQU1aNzBEMnB5akhCb0M0QmMvU25qUFkwQmMrOVAya2RPbEFDa0gxcVFBOTZRS0J6VWlnOUtHRnhGNDdVL0dBS08rYWtBOWFkZ3NDakJ4VWdYblA4cVFMMnFRREk0NzBnREJCelQ4ZjNxQUtsd09sRmdFQUpQRlNBQThHbDJuTk8yanJRaEFCendLa0NqcUtVQUNuakhhaTR4UXVPbFBDbWhDTVU4RDBvQUZCN2ZoVWdBQTRwUXVPdkZQQzlLTGd3QXp3QlR3dk5LT2xTRHI2VVdBLy8xUDRBZmZwUjlLT2NVZGFhR0xqRk5HS1gxNG81SW9RQzg1elNleEZHT2VLQlFBdnZTZE90SDBvempwUmZzSVU5YVROQU5HUFdrVjVDNXp6UlNjOURTaitkQklsR2UvcFM5dWFRZGVhQmgwNEZLZU9EUnpqMXBEazB3UWR1YVhyd2FTbE5BQjFvNEZHRDA3VUVldEFNRHdQcFIrZ29QNTBtT2V0QUMrNG94UWVEMXBSbWhBSm1rNzlLY2VQZWs0eFFGZ3hTcnlhUWQ2QjA5cUxnSjdqaW5jNHpTWTZVcDljOFVEWW5Ua1V2UWNVZzZVZEJReEMvbFNjOU9sQnBmcjBvQVRyeFNqR01VY0FaRkJ3ZmFpNENETkxnOVRRQjNwQm5xS0FGNmlrR2VNMEdqbk9UUUFZUFdsNDZVbWUxTHdlYUFESE9LUTB2TkJvRUJOR0tNak5CR09SUllBOTZDUGxwRDlLWEZGZ0RyUjBBbzZlOUw5VFFNYUFLWHAwNjBuTkJBb3NJWEhQV2p2NlVwejI0cE1BOUtCaWdESDFveGdBTlIwb3gxUGFnTGk0QS9wUjN4UzQvS2tKejBvWUJnRTg4MERqNjB1UjYwZldnQUdEMW83VVV1TW5qdHpRQ1lIanZSeWFYSE9LVWpIV2dCQjZDbmdVZ3pUeG5nWW91QW5HUG1wM2JyU0FZcC9TaXdBQmttbEE5VFM0NXpTN2M5NkJpaW5ZejJ4UU05RDZVOERtZ1FEcFQ4WW9VWU5PRkZ3RkhGT0EvT2tBNDRxUURQVHBRQUQycC9ha0M4VThESm9RSWNCd0tjdWNZSFNnY2ZqN1U5UlFBWXoxL0dwQUJqcFFxK3RQeGc0eFNBQU8vU3BCakhGSUIzUFdwQU9lVHpUQmlBSHFPTTFJQnpUdHVPbE9Bd2VsQ0FhQm5wVXFqdm1sQUdPYWZnanJRREZBcDZyZ2V0R09sUEF3Y0h2UUlBS2xIdlFBZWdGUFZRYUJnRjlxa3hqakZBQUpwNDYwQUtBQ2FrQzVPYVJRYWtDbk9ldEFDaGVjVThlOUNqNXM1cDRvQzRvR090U0FldENnVklvNXpRQi8vMWY0QVNLTTk2VWpOSWV0TVl2R00wY2RSUjA0RkpRQUQyb3gyelJSNzBBS2FUdlJqMU5LQm1oZ0g0aWpQRklSbWoyNjBNQmM5eFFPMUlUNjBkS0JpamtldEhiRkhIU2cwSVFwemlrR2VsSnhSOWFBUXVmV2tISDFwZW5OSGZOQUJuMHBPTzlMd1RRRHp4UUFtYVhOQTl1S1NnQXpnMHA5VHpTbjE3VTN2UUF1T2FPbEgwSE5LT09LQUU2MEhyU2RldEwyRkFCanJSN2cwdWNqTkp4bWhCY0JuOEtEaWpIT0tNZHFBRk9EelJnZDZNOS8wcEtBREhZbW5kdWFieDFGTDBGQUNjVXBQY1VtUjNwUmpwUUFudWFXbDU2NXBPaHhRREVIYjNvSngwcFJudFIwNW9BUTg4VXZCNjBkUm1nOWZTZ0FIcUR6U0RpbEdjNW9vWUFjOXhTNHBEbk9hRDB6UUFjNW9QSE5IVGlqcVBtcEFnSUFISW9INlVkZURTZ1pOTVFIa2MwZTJhVGdVNGUzYWk0Q1lKT2UxTDFvNUp5YVhyUllhWXYwb3dlZSthVG9LRGp0UUF2clFRS1ByUjFvQUFPL2VsNUE5cUIxb0h2M29BWGIyL09sQ21qQUI0NlU3QjcwQUE5QlRoanR6U0FjNVh2VHhnOGRhQVlMNzlxZjBwTVU0WjdVQXdBOUQwcDR4amJTcmpCcFIxejFvc0NENjAvQlBXajZkNmNCVEVBQkhXbmhhQlR3ckgycFdHSmdtcEZXZ0FVL3RRQ0FEbXBBTjNTa0dNVTlWeDFvQUF2WUducUIxb1VjOFZJQlFBb1hqUDVVb0dPZXRMempIU25nRTlLQmdGNHFRRHBpa1hnZlNuaGNjaW1BbzQ1NjFJRjVvWDA3MDhESnBDQURwNzFJQmtjMG9VWnlLZW96elFBS01EaXBBT1ByU1k0eWFsMmdDZ0FDZ2NDbmpQUTlhQU1jMUtCLytxZ0JBTThtbnFPOU9BeHdmcFRnS2E4d0Jjbm5GU0JlUHBSdDZWSUFlQlNCQ3FDQjdVNWM1d0tjbzlPYWVQVWQ2QXVDamlwUW9wTWR1bFNBZHZTaGlQLy9XL2dCOXpTKzFCcE9BT2FZQm5talBGSHRTKytLQjNBMEFjZEtCMHhRQjM5S0JDSGpvS09jMGd4U25yUVV3T1RSMnBldEFBeHowb0VIV2s0b3ozcHc0NjlxQUduSXBlZndvUFhJb3pnY1VJQUdUUngxby9TZ0FnMFdBVEE2bWwvV2tvNjBXQUI3VVo3VURuclMrNW9BQWFXazdkS1UrMUlBNHpTZHFYcHppazRwaURKOWFNWTRBbzlxTVpOQXhPYWR6MTdVblgyb0FIVWRxQURKUFNsSDBwT0NhT0QzeFFDRDJvTkhYaWdBOENnQXp6Um4wbzdVb1A1MFhDd1lBejcwblNsNmlqQUJ4UUFuT01EbWw5cVRyelM1N2RLTENBaWduMXBPUWFDY0hJb0FLTzMwcFQxNXBPTzlGd0Z4U2RLWC9BUFhSejFGQXc2L05Sem5JNzB1TWNVZ1BQRkFDODlCU2Q4VVk1eU9hU2dCY0RHS01ZUE5Mbk5HTzFJU0U1eFNnWUhwUmdEaWp2aW1QUVU4aWpvTTVwQmpITk8rWW1nUE1EUjM5YVFtbEp3Y2RxQUFjVXVlT2U5SU05UnpUZ0FCUUFuTktlZU1VZE9EUVFEaWtBQVlISDUwN0dDQUtQYW5BZXRNQXhpbkRHZWFUQVBUbW5qbmlpd0IzNHAzVThVQUhwVGxCRkFBTTlTS2ZqTkE5YVVkT0tBRjQ2ZjU0cC9XZ2NkNmNBUDhBNjlBQ2dmTGluRDd2RkFHVDBxVEhBb0FhQUtldU1HbEdjY1UvSE5Gd0Y2OUJtbEFBRkxqdFRzVUFLb3lLa0FKNHhTRGpnY1UvQkdlOUFDcnovS245dWFYR2FjQU0wQUFHZUtsQzBpam1uakZBV0ZBSXA2akk5YUFPbUtmajE2MHdEQTYxTGlrVmNHcFJ5T2Z6cE1CQUFhZXFqdFNnWjYwNEtEOHhvU0FWVnlQclR3dWVuU2xVYmowcVVEMDRvQVFBbXBCanZTcitsUEM0T2NVQUFIcFVnQjYwQmVPUHpxVGtkYVlDS09PYWtBcFF1ZXRTRElwTUFBL09uaGVjVXFnZE1VOVFCemlpNE1VTDBHS2NxbWxYaW40SXBBai8xLzRBZTFMMzlxT0QxcE0wd0RIYWw5NlRHRHh6UzlCUllZSEZJT2xMU0gyb0JCK2xIZWxvd0J3YVFDRWQ2UHJTbklOSEZNQkJqdlNuazBDaytsQ0FNKzFHS1VqMW8rbEZnRTl6U2tab0hCNXBDT2NVZ0ZCeHlhTUh0UndlbEdNZEtZQm5GQjlhT0tEdTcwQUE0bytsS09EaWozSEZJQkR4elIxNXBTY1VnUEh2VEFYak9LT2g5VFNkY0VVWXh5S0dnRkl6U2V2cFIyb3grTkFCeUJrMGZTanJ5eG9IVGlnQS9HalBjMGM5cVVkZXRDQVRGR2VjVXVCbjNwT1R4UUF2T09sSjdpZzQ3YzBvSFkwV0FQWEhOSU9lZXRLTWlrSm9BTzJhWEZBNlpvUG9LQkNacFR3S0R4emlrK2xBQzl1YVVVQVo2MGRPbEF4dWV3RktjZEJSelIyNlVBTDM1bzV6UjcwbU0wQWhlUjBvNFB0UmducWFkazlxQUc0eDBwY1phbE9NWXBBZjBvRUtNNHdLUHg1TklCeFM1OWUxREd3NzB2ZkdLQjZVWUhhZ0FVTFJqUEFvUHRSajNvQWNNVXVPd29BNTR4VGdQeW9ZZ0NpbmRxTnBIQnB3d2FCb0F1S2RqMW9Ic0tjQUI3MEJZUVpYZzA4RG9LQmpQTk9VRHBSY0JjSDBwMkQwcFFPTVVvb0FVREhUak5PR0JRQU9wcC9OQUFCamluZ0RvZWFBTWpBcVRHZWxIb0FtTThudlVtUHpvR2MwOGNEMW9BUWZTcEFNamlseDNwd0hQSGVpd2hlbUtmakhXZ0E5eFR4dXpuRkJWeEJtcFZIR0tRREk0cVFZRkJJQmZYOEtrQUdCam1sSFhubW5BZHpRTU52SEpxUUFFL054U3J4eFRoNzBBS3E1OXFlQlFvUEZTaGVPYUFRaXBqbXBOdU90Q2pvYWtDOXFMZ0tCazV4aW5BWXBkdlBITlNBWW9Dd0FBRE9lS2VBRDFvQVBYUFdwUUFSUmNBQTQ2MDhBZDZVTHhpbnFNRUdnQUF6VWdHQmlnRDJxUlFQNjBoQW85S2tDNXgvV2dEdFQxR0JtbU1VRGo2VklxNE5BSHJVaWo4YVFJLy9RL2dCSXBjMERJNW9OT3d3NHBPbEFwZlFDZ0E0SndhUWV0TDE0TkgwNHBBSmlsT1J6U0RwUnhUQURtanZ6UUFjWXBjRTBBR2V1YVE0b283NU5DRUxuMHBlM05OOTZPblduWUJSeFIyeFIxT0tNRHFhUXd3YVA4NXBEaWxCNzBXQkNDbFBKb3oxbzVvQVR0UzR4N1VVY0FVTUF6bWdFQ2pqdFM1NG9BVGlsN1VVZzlxQUYrbEdUUjIveHB2SDUwQ0hEMTlLTW5IWG1qak9LUWVnb0dIUHBtbHh6aWs0NmRUUzg0elFBZDhVRHBTVVpQV2dCY2UxTHoxbzc1TkoyelFJUVk5Y1V2VHBTZTFLTTlEU0dIUSt0SmpCcGVUU2ZqVHNBdVJtanRSMEhGQkdPZlNqeUFRWjdVdEhQU2crOUlBNTdVdkFPS1FIQXpTNFBTbUFkS1FqMTRwZU9sR0IzcEFMZ2Q2WEI2WnpTWTZkS1Q2MDdCY2RrZE1VcHBLVHJ4NlU5QXVMZ1orbExrZHFNL2hRTSt1S1FDbm4zb0F4d0tUUFBIV2w5NkdGZzY4QTlLZHhTZGFlTURpZ0JBUDFwK0QxSXhRQmcrdE94enpSY0F4a1l6VHNDanFNazA0RDhxQURnOFU0WW96L2RwL1UwV0FBcFBXbkFaRklPUmsxSUI2ME1BMmdqSC8xNmNCZzRvSHBpbnFDdzYwWEFBUDA3MDhESnBSOWVsT0F4anRTQUF2YXBGQnp3S0F1UHI2MUlGRk1hRXdlb3A0SFQybzI5cWNNOXFCTVVEbW5nZWxHT01WSUZHZUtBRUNrVktCMjdHa0hIUVZJbzlhTEF4QU1uL09ha0E1d2Z6cGUzQTYwOERCNTZVQUtCd0tjRkZLcTVCQXFUQUp5YUFzTlZUakZTZ2RxQUtrQXlNQ2dCQU9ldFNxUFhpaFFldFBDNDZVREZYT2FmdHBWR2FjQVFPYUJlWXVCdTRxVlFlM0pOR0JqaXBRdVRRQTFWeVRtcEFDRFNLTThBVktBdmZ0U0JnQjJxUWM4ZWxJQmsxSUIwenpURUtxa2Q2azJraWdMbnBVZ1hIU2dBQUdNMUlGeHpTS29BeFVnQXh6UmNhRkE3bm1wQjlhUURyVWdBSDlhQXVmL1IvZ0JIcWFNR2p0UitIV2dZWUovQ2x6emlreDJOSFRnMHdBWkh2UjI0bzRwZVByUUFjQWMwSHRSZzlLU2dCZm9hVFBGSGVqdFFBdWVNVW4wcFNhVEhGQWhSNjBBYzBuVEZCcERGN2NkcU9hUGVnZEtZQm5qcFNmV2w2Y1VFOFVBR0RRUFRGSmp2UzhkYUdGd1B0UUI2MFVIMU5GZ0QwUDZVVW4wcGM5RFFNWFBPS1FuMW9Qb0tYZGtjZGFCSUFhUTk4VTdyd2FiOVB6b0FLVDlLZDBwTTRGQ0VMampyUnlUeDJwRG5vT2FCbHZwUUE3QTYwbVIzbzVJNEZCempGQUNHbHh4bnJSblBUdFM0NG9HTjdZb0p4bWxKOVB6b0JOQUFCUU9UelJudFFDRCtGQWhPbzRwUWNkRFFNZHFPMzhxQmk4ZmpTY1l4Um5ubWx6ZzljVUlCTjNOS000eFJnNXdLWEI2aWdBOTZQZkZKMFBBcGV2TkFCajhlOUw5S01nZkxTbkpCN1VXQVFBam1sOXV0SURTNHdPbldqWWZrSDRVWUpHZlNsR1NLTy8wb0VJTUNwRFNBazlxY09hR0FDbmJlalVEK1ZLb3dlS1FBUC9yMDRESTRHS1hwVGdPZUtZSmdCaW5ZSGZyUXZUTlBBeFFBQVU3SFFpanNBRFR3TnRBQ0xuUFdwTm9QSGVoUjI5YWNPYUFzQ2pqQTRxUUE0d0tGR1BwVGdwQnhRQUFkNmVNVXVPT2FlQmdaNzBBS3E4NUhOS0FCd1RTZ1o0cDRGQUFGemdEcFVnSGZGQUE0QXA0QjlLQXNJQjJ6VW1NVXFnZ1lIZW5EMDY1cGpGVVo1cVJhQW9QU25iY0NrSUFCZ1ZLQnhta1VjWnFSVGdkS0xnQXFSUUJ3YVRiejdWTmdDZ0JvVWRQU3BGR1Q3aWxBNzRweWowb0M0NEx6azFJRjcwMGRmV3BWQTdVQUNuMUZTRG5GQTVQRlNBTWVsQU1GQXFWVklGSjA1RlBBN0NnRUFYQnhVb0FIWHBTQWR1bFNLdmJGRndCVjRGU2hlL1dnQUg3MktreG5wU0VBR2ZhcEFNOWFBQlRsR2FZeFF2UHJVb0dlS0F2cUtmdG9Dd0JlTTFLbzU0cEFDZWY1MUlFSW9iQS8vOUwrQUk0L0NsNEk5S2JqTkhPY1V4aTlPbEp6bmcwdU1uNlVjOU9sQUNmNXhRVDNvR00wdUQwb0VHVGlrNm5ORkx4MG9HSWV0S2VhUDlrMGMwQUhUdlNnWTZVWS9Pa3o2MENEM3pTWU9LQnpUbU5BeFByU0dsbzdVQUdjNW94UjlPS1UrdmVnRUp6MW81TkE1by9uUUZoUnpuMG83VUVqb2FUMkZOQmNVOFVkOG1nMG5iSXBBR085TGs5UFNnOWNpa0ZDQUJ5Y2lnRE5MMTYwQ2hvUWM0bzdZcGYwRklBZTlBdzdZRkllZWxLZUtNNTVwQllUamp2U2pJNU5IUHJSanVlYW9BUFdqNlVFSGdVZlNsWUFJQm8rbEJJNkg4YUJ3T2FBWVp6eFM1N1UwWUlwZWFFRERub1B6b0pHZUtCazhINjBkdWFBQWNVcFByMHBldnZTRHNQMW9HZ1BhZ2pjYVgwRktCK1hyUVNKM29KN0NqcCtOS2VUelFoaDlLWEE3VUdreDI3VUFMeDFwZXZBL3dBYVRudFNnSE5BQmpBeFRoeFNBOWlLZGpCNjgwV0gxQUE5S2Zpa0h0VGg3Zm5RSVhISDBwd0FISTYwQ25ZUGVtd0JSelRqejJ6UU9lU2FlTUNwQ3cxUU9wcVFEbjYwWXA0VWRlMU1CUXBIeTA1Unh3S1FMVW1PS0xnR09NMDhmcFNBRDZZcDRYak5BQnlPYWt4M0ZJTVl5MU94Mm9BY0J4a1U4QWYvQUY2QXVlbk5MaWhEUTdnMDhBQ2xIVEhTbkQxTkRFS3EwOER0M294eDdWSmcwRFFBRHIvT25xTzFBd09UK1ZTQlFPV0hOREVDam5OU0JlOUlCeHhUd0FSUUZoUUFUVWdHZVBlZ0xnMDhBVUFLb0hHYWtVRThpZ0xrL1NwRlgzcEFBR2FlRndCaWxRRHQycDRGTUJRQXZOU0JlYVJSam1uak9PS0FGQXA0NjRIMHBBdU9La0FIUVVBS0JnaXBBQnhta0F6VW9vQVZRS2VGR2FBT2hGU2dFY2lrSVJSamlwQjduclJ0eUtrVWNjVXhvRkF4VWdIcmlnWXp6eWFlRkhYMW9CZ293Y21wQnprbWxBSnhUd3VPTTBYQVZSVGxYUEhyVGd1YWVvelRBLy9UL2dDemdVZTRwQjY0NHBlUndLWXd5ZWdvNjBsQW9ZQy9qU2NtZzlhVS93QzFRQVk3OUtQYjFvNXp4U2ZVMEFLZU9sSEpwUGFuYzlNME1MRGNnOWVhVUFkdWxKMnBmclFOaTU5cVFlMUhHY1VEclFJT004MFVkZWFVam5OQUNkK0tQZWpHZVRTRFBhZ0JmcnpTK3hwTVpGTGcvaUtHQ0VGR1FEMG9vNHBBTDFvNG8vQ2pqSEZNQXhnVWNqclNjNW9ISFdnQU9jNHBRZWZwUVBmdFIxRkNRQjlhS1RnREZBUFUwV0VITkx3ZUJRT0tNRDg2QmgyelNHamdVcHgrRklRZER3S1Fqc2FkblB0U1lJNEZNZHc2REJvSTRvNUo0TklDUHhvRUtNZldsNm5rVW1hVUUwZ0RyelIzNG81Nm1sSFArTk1ZbzU0NzBZb0FGSjFIU2dCY1VjMGhPZVdwd0dGemlnQk1nY2prMGNtaitIak5LY2RLWUNjVXVLQ2VhVWV0SUdBR1RqRkwxb0hYam1uWUk0b0FPT3BwM0ZBSFFVb0dlQlFBb0JIVDZVL0dSU0FjWkhXbkFVQXhSbm5CcDRCeFRSeDAvR25rSEZBQU1qT0trN2UxSU9uRlBGQWhBS2VNREFGQ2pOU0FlbEF4QlR1M3ZTalBGU0RKR2U5TkFOQXlNbXBNZTJLUUw2VklBQmp2U3VBdUNCbXBCenpqbW1xQ09haytsRmdBS0JnMDhlOUFINDFKdEdhTGdJb08wWXArTWZXbkFlbFBHU0tBRUdSeDYxS0IzTklCbXBNRFBOQUFCM3FRWjdjMEJlTUUwOVZGQUFveDNxVURuRk54bjhha0F4UUFvQnhrMUp6aWpyelR4eU1DZ0FBeHhVaXIzTklCNjlLbEF4UURBTHpUMUdlUlRsVUhJUEZQQXh5S0xnQUhGUEM0NjBxcUtlQU1Zb0FVREgvMXFmdEE0b0M1cVVBRDVxUWdBQk9QNTA4TGcwQVo0OWFrQXg3MDBOQUZ4aXBNVUFZUEl6VWlqTkFYRkM4OENwRjlLVEZQQUZDUVhGQzRHUlR3TThEbWhWQjRxVlFUM29CQ0FBZTlTaGYxcEF1ZUFQeHFUSFNnR3c2MUlveFNBQVU4WlBOSUxILy8xUDRBZU0wbzRvUE5IUGFtTU1qclNVcDY4VWM5K2FMQUp4U2dIUFdnOGMwQ2dBemozTkwxNjBnSm85UFdnQTQ2VWRlbEFvNmRhTEF3QlA4QURSUVBUMXBRY1VXQVQ2OTZLTytNVUFkcVRBQlFPbWFNRTBESUdSVHVBWnoxL09sNi9UclNBREg5YVhvY1VNTENmaHhRRDY5NkQrVkxrSHZTQVRqR0tPUDhpbElPS0J3Y0NtQWg5dTlMMU9PbEI0T2FUbWl3Q2pnKzlIdCt0QndEeFNjZzBBSFNnNXpudlM5ZUtUcjBvQkI3MHVkMUJIVUNrSEpvQU9oSHJSelJ4amcwdlhtZ1Fod1A4S1grbEdNVVp3T2VLUXc3NG82OU9jVW95T2FPK0ZwZ0pqdDBGQTY4VUhrWXBlaDloUUFkOFVaUFRwUUJ4elNrZmhRaENZNHhTa0FEQm94eDlhUDYweGh6MnBSa0NqcFFPdk5GZ3VCSHBTa1k0cE9EelM5UjZVZ0U2anJTODQ1bzYrMUFCUDQwQU9BNCt0QUdPS1VacGNab0JnUFFjMDdIRkg0VTRjOFVBTDN5VFM1Qi9sUUI2ZHFrQXp4UUFtTzFPOXgycEFPYWVNbnRRQVk3MDdyMXBWR09SVGdNOFVDRjZET2FVTGc5YVhIWVU4ZXVLR093QVkvR25qSEdSUU9tUnhUZ0MyZmVob1FLUFhtcE1kNkFPYWs2Z1lvSGNNVTRBNU9QV2xISnArT2FBRGIrTlBBSk5JT2VUVW9HRHdLR0FBZXZlcEJnSEZNQ2dkOFZLQVQxb0FWUnQrOVRsNUZLRkE3VThBRDNvR0tBZTFPQXAzYjVxa0F6eUtFSVFkU2FlQmcrbEFBNlZJRjlLQUZ4M3A0R01VbiswS21BN1VXQVFERlNnWk5OeGsxSUIrbEFDZ0RxZnlxUUQwcEF1VGsxSUI2MGdGVUFqTlNLRG5BcHFqQXdLbEF4eUtiUUFCbm4zcVJSZ2ZTZ0FVLzZVZ0hLT3hxUUE1cEFNR3BRS1lDQUVZelVnRkNqSEJwNFVaNTdVSkFBWHYwcVFMUW81NXFRQWo2VWVRQzRBeFR3S0FQV3BGNDRIRkFBQXZhbmdBVW9INjA4ZTlBQzRHS2VCK0ZHQmpqMXFRTG5rMEFLQm44S2VLUUE4ZHFsMjRORFlILy8xZjRBYUI3Q2w1b09POU1ZWkhhamdVWnhTVUJZVWRhT0tOcHBNRHRRQWZXbEE1d2FPMkJTZGVlbEZ3c0w3Q2c1NmlqR2FNZGNDZ0FwUU1jR21qSUhOTzlqUXdHOUJTL1dqR2VsQkl6UWdER1RtaWxKL0NrL3JRQWNucFNuRkp3ZTlCNlVBTDlPYWFBY1U0NHhpZ1VnRXlPbEFPRDYwREdhWFBGT3dDWUk2VXZRMFVFZzlLTGdMbk5JUjZVWTdHZzhjMFdFQlByUjM5YURudjFvQnh6UUFkT2xHT2ZwU0gzcGUyS0FEMkhXa3dEUzhua1VaOUJTR0lmYW5ld3BCakZHT2FZZ09RT0tUak9LY1BhazQ2MERRblFVN0l6U0RKcGVNY2RhQUY5elFCbklvQW95TzFBQmc5ZWxMbkp4UjA0TkxrZEtBc0FPVHorVkp5ZXRMako0NjBnQUZOZ0dNci9PbDVwU01panFNVWdFUHBUdUIxRkM4MDd2elFBQTlEUzhacGNVL3Ixb0FhT0FjVThEajNvVlJUZ0IwUFNnQmNVNFlJNTVwQUNlU0tlQjBvQUY1Nm1wQjlLYW9QVVUvSE5JQXhnWUZTQmUxTkE1NjFJQjcwN2dHT2M1NXA0QjcwQ25nZDZRQ0JjWXA0R2VUU3FNL1NucU9hWUFBZTFTRGlnQW5nMDhEUFBXZ0FWY2ZqVGx4bkpvQTVQR0tlQlFnc08yOXUxUEE0eFNCUWZjQ3BBT1RRQXZQQUZPeG1nTG5tcFF2NENnTGlMaXBBQ1R6U0tCbXBRT2ZyVHVBQUUwOFpBelFCeFVnWGpBNHBXQUZBeFVnQnppZ0tCeFQ4RHFCUWdGVVlwNFhKNG9WZlNwQjcwRDh3eGs0cVRIR090Q2ppbm9EakZBa09BeG5OUEh2U0FIT0QzcVJSUUFvVWNWSUZKNjBBWjRwNEZBaFFEME5TZ0FjVWlyK2RTQUUwZ0VDODFLQm5rVUt1ZXRTQUhPYVl3Q25yVWlqUFNoUUIxNHhUMUE2R2dRaWpvUlVxcnp6UXErdFNCY0hBOWFCMkRianJVbU04VUFOamlwQm5yUUFnSEhGU2pwU0JNOWVha0MrdERDd29HZWxLRkJwUU9ha1gxb0FBTytNMUlvMjgwZ0hQMHB5ajA1Sm9BLy85YitBTHQ2VWdvK2xMejI2VXhoK0hTaWs5NlU1T0tBREZIR01DZ2NVSEdNME1BNzB1T0tPVzYwbkdNMGdEa1VtT0tkbWpweFRFSjE1UEFvQTcwdU9jOWFRNUE3RE5BeFJqT2FUQjZVZE90R1RnVVdBWHZnMERGSjE0cFI3OXFCQ1p3YU1ESEZBNjgwcEpIU2dZbWZXa3AyRDFvNjhqclFBcDlEVGVmV2w3RE5IdlNBVDJ4UzlPOUFHUnhTWjlhYllBS1g2RVVkZWFDRFNCb09QeW80b3dSeDFvSFBOTVFuR0tNZzB2VTBwR1R6UU1QdzYwM1BGQXlLWHZpZ1FIMW9BOWFPdlFVdEF4TUR0elNqQitsR09NZzBvNDVvQkNlcHBTY2MwZTFBem1nQmVBTTlxQWZXakdLRHlNbkZBQ2pJT0JSZ2ovNjlKelMrdzcwQUwwcE85QjZjZGFkN2RxTEFHTzRvQ2dVdUtVRDBvYkFNYzhVN0ErbEpnZFRUZ09sQXhjWXAyRDNwUU9lYVVjY21nUW9HYVhCSEZDNTlLa0FBUEZBQ0RCSFduZ0VkYVFMeDlhZUtZQUFPdFNBWXBCejA2MDdianRTdUFvR2VLZmpIdVJTQWNjMUx3RDlLQUVBNHA0SGJwUmpQRk94eHpRQTRkS2NBT0tNVThLYUFGV25ZOWFVWkg0MDhBOTZBRTZIbW5nZmpTaXBBS0FZZ3dPYWxYT00vcFNLUFUxSU9tQndLTEJjQjZBMUtGenowcEFCVDFIZnZSWUJSMXpucFR3TURtZ0RuUHJVbU81L0ttMkNFQTRCcVZjZEtFWHRUZ3BKcEFMdEFxVURIV2tBN0RpcFZYRkFhQ0tNY0NwQU9tN2loQjNxVUQrNmFBRUE1NHFRS2NldENxYWtDaWl3V0JRZUtlRjdDaFZ6eU9LZW85T2xJTENnSFBwVXFqdlNZSFExSUJqdFRBQUFRS2xBOWVhUUFBZlNwQU9lUHJRQXVNOWFlcTUrbEtCMnA0RkZnRUhYaXBWVWRSUUJpcEFPdzRvR0lPZWFsUVVBQURuclR3S0JBQU04MUlCMnBRQlQxSGVpNHhBQjI1cVFESGVqR09sU2JUeFNFSUFDY2lwQUtCNjFJRndQclRHR0JpbktCMXBWRzA0OXFmZ2Q2Qk0vLzEvNEF1Z282MGNVY2Q2WXd4NlV2U2crOU5vQ3c3M0ZJRDJwZWc0cE1rVU1BQW94aWozNlVaN2cwQUoxcGFPYVBwUUFVRGp0elNrMG5Jb0FEakhKcGZlamtBbWpKNmRhQUV5Y0NnKzlMZ25wU1VnRDJOR094b3o2Y1pvd0JUQVAxelM4aWo1YzBjamswQUpubklvSnljMHY2MGcrdElCVG1nWno3MG4wcGZtNjA3QXhjNHB2SFdsUGZOQTkrOUFDWXBlUWVLT3Y0MFlvQU9ldEJHQlNHbEZBQzBtUjBGR0FPS01BbkZBQjc1NjB1T2Ywb3lQclFPdk5BQ2o2VVp3UGMwR2pvTTBBSGZKTkw5YVVBZGFUa2pqcjYwQllCNi9qU2svNTYwZEJtZ2RmV2hERUh0MnBjSEhYTktEK2xGQWdHZTFBR0J6UmppbjRKNVBGQUMvV2dEQm9WYzhpcE8yS0FRZ3dlS2NLT2Fkam5Cb0FBQWVLa0gwL0NtZzVGT3dNMEFBQnp4MnA0NmMwY3JUMUI0eHhRTm9PQnhUOENsQU5LQnh4UUlVQ25nRWRhVGFWT0tlQ1RRZ0ZYazA0QTR5S01ZUEhOU1lCL2xRREVYOHFrNm5INjBtQUIwcDRHRFFBS1BVVklBUmdqdFJqMnpVZ3hRQUFkeFR4d2FGQUpBcVFERkFDQmZVMUpnaWdEUElxVVpQV2k0RFFPTTFJQUNSUmpIV3BBTWM1elFJQUtrWHJ6U0FkalV3SHJ6OWFCc2FvenhVcWowNHBNWTZWS1BVMHhEVkIvT3BRUFdrWFBTcFZUMEZJWW9HQ2ZTbmpIVVVLcDYwOEFVQUE0NHFVRHZRcTQ2MUlvN0dnQkFQYnBVZzU0elNxdnBVZ0I3R2k0QXE5aFVnWGpKb0h2VHhuT0NLTGlBTDJBcVFEdFFCenhUd080cERGQUk0NlZJQVR6U0FjNHFZVXdFQUI0TlB3TzlLRnA2Z2tab0FWUU1qTlBVRHJRQWVwcVFERkNFQ3FPOVNEME5Jb3dNMUlCUU1VS2NZRk9YcG1sQS9EdFVtT25hZ1FnQkk2L2pUd0tBcEg0MUlBQnpSMEdLRnorRlBVWi9Ha0F6elVnNjBDQURpbkFaT2M0cFFNaW5BSHVhQm4vMFA0QXdjMGc0SEZKbW5aNDlhWXhCanFLTzlBb0JKNlVXQU1ZNzBmVHZSMTVveGlnQmZwUWNIbWtwY2VsQWdQUE9hUTlSU2c1cERuR0tMRERQSFNqbk9QMW85elJtZ0F6OHRBSlBUaWpvZWYxb3gzRkFYRDZVdlNrN2RlS1hQZnQ3MEFKUzR5S0RnSEhXazlLUWc2KzFMMnhTNHBveFFNUGVqR0tYbjhUUnllbkZNQTR6Z1VuSU5IV2x3QlJjQkR4MW93TThmclM0NG81NjBYRUZCbzdjQ2dkY0RwUU93RElwUnpTY2lnY2ZOUUFmVTA0YzhpbThkcWRqdFFJTWswZEtPTWcwZHVLQmk4SHJTZXdwZnBSZzBBSEE1RkE1NVBXajBJNHBNSDhxQXNPNUFwY2V0SUQzb09lL2FnR0wxR0tYQlBXZ0tleHAxQWhSeHhqTkx0NzlhUVl4eUtkMStVVURZdEtNanJ6UW94eGpOT3hRQURvS2NQbU9CelRzWnB3NlVBS0JTNHpSN21uRHA4MUFBQm5BeGlwT1RTRDA3MUtEUXdHampnOU90U0ViamdkYVRibi9DcEFweGlnTGdPT2FjRkJwUVBhbjRPS0FFQVBBcVRCSEZBejFwNEdldEFBRjRwNjR4U3FPeC96aW41STYwQUFBcVJSM29VZC9TbmRxQVk0RE5Lb3dNbWdBamtpcFFPOUFBQjNxUlJqZ21qR0RVZ0dCbWdCRkhyVDhaNE5BQkF3YWt4Z2MwQUFCQnhVZzZaTkt1M3ZVbUtBWUwxeWFlQmpta0FKcVRIcHpRZ0Z4anJUMVhPUm1sQVBBRlNZSEdPS0FFQzl4eFUyUFNtaGMxSnpqMG9BRlhGU3F1T0QwcE5wNzk2a3djYzhacEFBNTZWSUZBSFNrQUgxcVVBZEIzb0VBSGFwTUg3dzcwRFBlcEFQU21NQXA3Y1ZJQmc4VUtwcDRISE5BQW94MTcxS0Z4UXVSejFwMk9QclJjQlFUM3FUQUk0b1ZSVWk0SW9CQUI3MUlNZmhTQWV0U0tNZHFFQWlnaXBCalBXZ0xtcFFweG1nQk1WS09PbElCNjA4RDBvQUJrMDlSejBvWDJwNEJwQUtCbnAycDQ5S0JrOWFlQjdVd0ZYdmswN0g0MEFFOUtlT255MEFrZi9SL2dDcFBwU2p0U0E0T2FZRHUzTklNWm80SHZTZHNVTkREZ2NVdUtYMXBLQXVHZU1VZERSbk5Cb0FYUEZKejJvL1dsT1JTQU9PMUowNUZIUDRVb0o3VTJJUVlvNUE5Nk9CUzhZRkF4T2Z3bzY4bnBSMDRvUHRRQWM4VXZibWdubkpvdzNXZ0FIWDZVblBlbEdSMW82MEJjQURuRkdhT1FBS0tRQnllbElPdkZPR1R6U0FaNlV4Q25uaWs1UFdrejJOTGlnWUhpZ0hIVTBuWDZVN25yUUFtRFFPVFNrNE9LUHJSY0JjK3Zha0F4NzBkRGcwN2tDZ0xDRTU5NkRrbWx4emtVY2lnQUhUNjB2dm1oY2RCUndCa1VXQmlja1VaeWVhUDVVdnRReGdLZDhvb3BmclF4QzlLY1FPbEdPYzlxY0RqaWhBSUNlb1BXbjkvV2tBNzlLZW93T2FRQUI2VS9rVWdINDA0ZmRwMkFVWlBGUENudFNESjlxZU1kUlJZQm94MzVxUURGS0Jqa1U3SHJ6UU1BS2ZqamlnRHYxcDY5TVVDRkhQQXAyTUVpZ0RIM2FldU85QUFPVG44YWt4L2U3MGk4VklvUGVrQURPY1UvSEdhTnZISXpVbUthQmlLblNwQXB6N1pwQUJtcEI3VUFLQm50L2hUd0tBT2MxSnQvQ2oxQUFLZW85S0FNZHVhZnQ1NDdVQXhRQm1uZ2NZN1VvVTkrYWtBNHpRQTFSbjNxUUQxcFFBS2tYclFBb0hYMUZQQXBNQUdwUXVjVWdBVThESE9hQUJuQTVxUVpKQXBnQ2puSXFRREFBNlVnR0tsQzVXZ0JmMHB5Z0FaTk9BOUtlQUJ4U0VLQmc1NlU1UmprVTRMem1uYzRIdlR1QXFqMXFSVk9jVWdHQ0FhbEEvS2dZaXI2MDhEUE5PQTNWSXE5alFDQlIrZnZVZ1VkeFNZT0trUlJSY0JRTzlTRHBTRDB4VW9HZS90UURHcU9lS2syMEFaR1JVZ3lPS0FFSEErbFNZNXdLVUtEMTVwNmoxcDJBVUwzcHlqSm9DOU0xSmpOSUxoeU9uWHZUd00wYmVSVC94NG9FQUhGUEhTakhmcFVnQnhRQWc0T0RUOFlHS01VOFl4VEdDanNlMVNEUFdreG5tbjQ0OWNVWEJuLy9TL2dDR1IwbzZVWTcwQVV4aG5OR08xSFFVZXhvQVBlbDZjVTBVcDlhQUROS01uaWtJd2NaNHBlblNnQk1mbFM1cHRPSXpRQW1CamlsSXBPT2xMMG91TVFIMW96UzU3MGRSOUtCQ0RPT0tEUmpqRktPS0F1TDdEdFNZeDJ5VFJTZDgwZ3VLUWM4Q2tCOUtYdmdVbU1uMXBnaGVuV2dmZXllS005eFMvaFNDNDBnNTlLVTVGR00wbEFXRG1sQXhRQlM0QjYwd0E4OGlqUGM5cVRwd2VhZG1nQkJnODB2KzlTSElibWx3UjM2VUFIRkxqcU1VbE80eGswQXhweGluQWQvMG9VZDZENkhpZ0FHYys5SEdkdUtLUGFnQTU2Q2w1UFdnY0hBcHd3UGVnQStsT0hGS01ubWxHYzV6UUFvNEhGTy9uUUJ4U2djbWdZdk5PQzV4M29BSXA1QkhXZ1FtT09PdFB4enpTRDFOUEFHTTBJQUEvV3BBT090TkdmeXArQ09SUUE0YzhucFR1S0FNOHQwcDRCNHBBQTZnVklCeHpTZHFkdDVwb0FYQXFUSE5BQjcxSUZJR0tBWW1Nak5QWGtFaWxBL1duQmZUaWdCUU04MC9GS0FLZW9IVUNpM1FBWG5HT0trd2VtS0F1T2xQNTdVQWhWQTZVNVFNODA0ZWxQQUdmV2l3Q0FaSEZTaGVNa1VnR1JuMXFUQTYwSUxDaGY0cWVCbmlqSDVWSUZOQVhFQ21wRkFwY1U5VjdldEFBb0pOU0tPOUFYTlBDaWdCd0hlbjRQM2pRQmpnVktxK3RBRGVhbEMwS00rOVM0eHgwb1lDQWRqVW1CUUJ4VHdLUWtLb0dNK3RTaFQwcG93RHhVcSs5QStnbU9Pdk5TaGFRREM4VktBRHhUQ3dnSEdLa3hRcW5OUEE0NDVwb1FBWU9EVWdYbk5DOGRxbHdLUXhOdnIycVVESXBGQjdWSUJrNEZBQjMveHA0elFNRWMwOVJpZ0FVZHU5U0x4aHV0QUFQRlNEcHhRQVk1K3RTQUh2MnBvQnhVbUNLTENGQy81NjA0cm5BcGVpNUZPeDJvR0tCeGluamtjZHFCMSt0UEg4NkFBTGtpbkFjNW9DNHB3ejA2ME1FQUZTZkxrRTBnQTV3UDFwNEdlYUdGei8wLzRBUmp0U2pGSlRoNzB4aVpPS1gwTkpubm1nOFVDRGdjMFp5TVVjZEJRQWFCZ000bzY4ZEtYcnhSeDA3VVhBUDFvUFdnVW4xb0FYdGswZ1BhbDU2Q2s2OUtBRHRuRkhPT0tkU2NrVVhCQ2RPZlNsQk9jK3RKN1V1ZjhBOWRBQmdrVURQVVV2UEpwTTlxUXJoMTZVWUk0eDBvUFdnOGtFOTZZTU9UUjcwZS9URkE5QWFRMkdPYVhIWVVncFJ3S1lDQ2w2MGRPdEx3ZUNLQUV3ZTRwMk9lRFNaSUgxcFBwK1ZBaFR4UzhqcnpTRWp2MXBlbkZDS0RJSkdhVEdLZHdEU2orOVJjQStsTjZpbHhnN3FWUWM4SE5JUURKcGFNQ25ZeFRzSVFESXA0M2ZkSFdtcU1jMDhESEFvR0x0d1JTcU9hT09ncCtCakhTZ0JCbW5BWTQ5YVVESC93QmFuVUFLbzZVNmtDKzFTQUgwb1lBQmdaRk9BSFNnREhYOWFrNmRhQVFnQXpUd01jQ2dEcFRsRklBQzRGU0RnK3RKMXFRRGpCUFNtMzNCQW9QYzFJTTBnVWdlNXArMGswQmNNZWxQNkRBNzBvRlBBQTU2MEFBSFRGU0QxcEZIT1RVbk9mU2dBQzQ2MUpqOHFRTCtWU0Qwb0M0THlPYWtDanBTQVZLQlFBQUh0VHdNOFVLT2xQVWRxZGhwQzR6VW5mQm9DZ25wVWd3RGtDa0s0S3ZicFVnSEh6VURJSE5QQW9BRjZZV3BGRkNya1lGU0tCMXhTQUZHT1I5S2tVSEZMZ1p3S2NBS29FS0IzOTZreHppZ0xqcFVnSGFwYkJnQnptcEZYdFFGN0dwQU9hQldFQTVxVUR2NlVnSGVwQjYweDZBT0trQzVOQ2pQK05TQWRUUmNRWUdLa0FKNi9wU0FIUE5TS296MW9ReFZIY1ZJRnh4aWpISXlha1VkNkFZMEQxcVlMeHhTYk1malQ4R2dCUU9La3hqa2RLQU1Vb0h0UUE5UWVhY0FPOUlCempwVWdBelFBQUFHcEFNZlNrQzhjMUowb3VBb0hQSGVsQTVwNFhqaWphTTVvUUlBS2t4MjlLUWRPbFNCY24xcGhZVUVIa1U0RFBmclFNR25nWVBOSUdoTnY1MUpqSFdreGs3ZTlPNXhSWUxnQlQvUUNnQ240R01VWEEvLzFQNEFzRDhLTzlIUTgwY2RxWXcrdEhCb0hUQW81RkNBQmcrMUhHS01jZGFPMkRRQURwU2c5aHpTZTlMMFBOSUJLTVVaQjVvL0duWUJjWnBLVTRKNW9QWE5JQUdCM29QYWt6eGlseHhucFRBT2M4MFl6MHBhVDB6UUF2R2VlS2JqdjZVSHJraWxINVpvc0FaOWFRNE5MeDFGTHo5MFVBSmduZzB1U0RrMFVnT2VjVWdRbzU1TkljL2xTKzVOSjN3YVlCemluRGlscFBZMEFHRDE5YUFjL0wzcFRnbWw3ODBBTjR6U2oxcENBZnBUZ0Qzb3VOQjE1RkdSMUZKMjVwYzBYRUdDZWFjQm41cURnOUtVakI0b0dBRlBIUFhpa0F6MXB3endhR0s0RDBGT0FOQUMvZEZQL1NnQnZXbmdkcVVEbjFwd0hITkhRQXgrTlNBZmpTRDBwNDU2YzBDR2pBcVFEbm1rVWNWSW83VURFQTlLZXE4WnBjWjU2VS9ia24rVklBeHp4VDhaNHhTS0J0eFVnSGVtQUFFZGFlb09PVFFPdVRUd0NhQUVBNXFVS1B1NG9IWGQrRlB3VzZmbFF4M0UyNXFVREJ6UW85T2dwNDNkYUdKQUZ3RHgxcVJSazBpNDdjMDhMbmlnTEFvNzFLQmpHS1FMMkZTQUgvQ2dBVURQRlBBLy9YVGdDYWVBVFFDUUQ4NmVGeno2MEFZcVJSMm9Dd2JSVWdIclNEQjZWS0ZIMG9RQU1aejJxVEhhZ0xpbmdjODBBS0J6bXBGcEFCMjdWTGlnQnFqc0ttUVpPUlNBRDhLbEMrbElCQUIycVVZNzBLT3dxUUFBVUNBRFBPYWtISHRTWXhVZ3dhWXd4NjFJb3h5UlFCbnJVZ3gzNG9BVURJNXB5Z1l5YVZSeGswOVYvU2dBVUR2VDFYODZjb0hVMUp4aW1BZ3lUeFVnSGM4MERPY1U4S0tRMEFVOVFLa0ZBSHBVb0JGRnhEUUR5VDJxUlFjVUFIdlR3TTBBQVU0eFR3T2FVWkE1cDRCNmQ2RUZ3VVlITlA2OGlnRGNPQlVtQ090QUNBQVU0REg0VW9IcFQ5dU9sQWd3YzROU0FEdlNEQTVweTVIRkF4UmdVNGRLTVpHS2NCZzVGTUFHZW1hZUtVRGppbDR4bnJTQUFNZEtkak9LVUE5S2NCa1pvRWYvMWY0QSttZTlKNzBnejFwdzlEVEFPbEozd0tENmVsTG5weFFrTzRkcUFCME5KaWptZ0FCcGM1cE9LWFBwK1ZLd0J4M3BNVW85S0NlMU1RdlRpbS9RVXA1NTcwMzJGQXgzUEdLTThjaWpwUm5QNFVnRnh4ZzBtUGVqcjBvUHBURUp4bWxBb0I5YUJnOWFCb0RSaWpvY2RxS0JDOGppazYwR2x4bmp0UU80ZC9lbHpqcDFwZWNpa3dRZUtMQUxqamQzcE1ZNW9ISFRtZ0huRkZnRkg1MGNpazZHbmU0cGdKMnpRVG5wMXBjZHFCMDQ1OTZHZ0Y1SXlhVUFZR2U5QXBldEt3Qy9TakF6anBUZ0IzcFIxelFBdU1IRktNWit0QnowSFFVNGNVd0FBRGpITlBBNG93T29wM0hXa0lYQUhXbHgzNjBBNEdSVW1PUVNhQmljZFRVZ0hRbWt4NjA4RFBUdFFBMExpcE51ZVAwcFF2ZW5LcHpRQXFnWTlhZFFGOXFjQVR4aW5ZQlIxNjA5UWZ3b1VWSXVldUtTQ3dBRWNIODZlQm50U0FESFBOU0FESE5JR0tNZE1VOERQRkNxZXRQQTlhZGdBTHpranJVZzlUeFFCdTZkS2tBSjYwQUNnOWpVaWdEbWtHUU0xS296ajE5YUdBS0FPbFBDNW93UlR3Q2VhTGdLQU9Nam1wTWQ2Qnh5S2VGUFUwQUFCNjFJcTk4VWdVbmdWTGpqUDZVQUdNaW5xdE9BeFR3RCtGREJNWEdSa1U0S0RTcUIzcDZqMUZJQUMxSW82MEtLa0E3R21JQUQzcVFBNStsQUhOU0FEb2FRQUJVZ0hyU0FBVktBZWxNWXFqT08xT3gzb0NnZTlTQmMvTlFBb1hwbW5yNjBvQnp6eDlLZnQ5TzlGZ0ZVNDVIYW5qcGswQVk0RlNCZmFnQUhYSnFUR0JRRjZZcDRCQTlxRUFLcHh4VHdNOFU0RE5QVVk0b0FBTzJhZmcrbEdPMVB3Q2FBQUE4bnJUd0NLVUtNY1U3YUNhWUM5cWVCem4rZEgwK3RTWXBDRUE3VThMZzBCYWVQV2tNTUhyajZVNERHRGlsQzhacFFNL1FVQU94MHdhVUQzcGNacHc1OXFZQUI2MDhEMXBCNkduOWNlOUFBTVl6U2hRMzFwUU1kYWV2WG1pNElBUFdsT2U5S01DZ0Q5S0FQLzliK0FJRDBOR2M5YVhHS1RJNm1nYkFISm93VDBwZlkwWXBnSjA0cGM1NG9Bd2FUdFFJWEZGSEhZMGNaeFFnRTQ3VW9PQlJpazZkS1F4Y2c5T0tEMHBDU0tYSkF3S1loYzQ3MGh6MW9GSFhtZ1lHak9PS0J4UmprZDZCQVBwU2pJSEFwQjcwWndhRU1CeWFkaWs0T09hT280b0FCZzhab1ByUzQ3WnBjSHBRRmhPK1Q5S08yS1drN1VEOGdHU0tVY25GQXBTZWNZNHB0aXNJQVIxL0NsemptZ2oyNjBaNHBBRkwwT1JTaGNkT25hbEJ6OWFBQUFkYVZjbmtmalNnYzg4VTRmU2dMQnlUenhUOXZHYVJSdUZQeHpRQURuazlxZU90SUFLVURQTkFEdnJUZ3RKaklwK0FLQVlEaW5nVWlyelR3TTBBQUFxUUFEaWtVSEh0VW4wb3NBbURpcE51VGlrQXlLa1VZNzBCNmhnOWZ5cHdYL0dqQjdWSUZCbzJBVHZpbmpHYzBvWHZuRk9IdFNCRGdLZGlsV25ya0QxcGlGVWVsUEFIV2tDY1ZLQndLQmhqSEZTQVVLdWFlTTlEUUlCalBGU0tPeHBNQ3BGQkovd0FhQmdvelVvQk5JTTlBYzFJQmloZ0NqSEdLbEF5ZWFhbzlLbEFPS0FFQTlLbEE3MEJUMXA0K2xBQUJ4bXBBT2FCeDJxVlFNVWdFQXh6bW5nZXRLUFNwVlhtZ0xpYlNUelVpcitkS0ZGUEE3Q2dRaXJuK3RTS3A3VW81UDFwNmdEaW1NRkhjVktBQ2VLRkJQTk9WZTRwZ0wvT3BGQnpnZDZBdFNnR2xjR0lNRG1wRkhHMDBJdU90T0F4OWFiQWRnSG1uZ0EwbzQrWWZTblk1cEFLT250VWdHYVVEaW5oY2M5YUFFQ2pxS2tISFdnTGpyMU5QQUlQU2dBMm52VWdIOFdLUWM1eCtOU0x4d2FBQURQU3BGSGJvQlNBZWxQQ2cvTjYwQUlvNzA5UitOTGduclRsSDhJb3VBQWMxSUJRT0RqRlBDNDZVQ0U3Vkpzd01VbU05YWVBUjk2Z0JGeGlucUtNS2VLZlFPd2c0NkNuOXNVZldsQUZBSU1BVTRBQ2dEb080cDVHUlFBblFjMDRkYVRBeFR2ZWhBZi9YL2dEUFROSjA2MHZhZ0hKd2FZdzRwY1lOTng2VUgxb0N3ZTlIVVV1UlFlNW9ZQ2RlZTFLZmJpaWtvUUM5Q00wWlBhakhIRkpRQVpCcGUxRFl6U0VjOFVNQVB0Uys5R0Qwb0o5YUFFeFR1T2xJVGpxYVFIQm9DdzRkT2xIQU5HZUtPcG9FZ3BjRHI2MGd4Z0UwN3J6UU1UNjBBSDZVdk9jMFo0NG9BUHd6UmoxcGM5aFNkQnpRQXFuSngvS2xCR01VbkFIRkdDQ0JUWUNnZmpSajlLVTgrMU9BeHpqTklCQU1VNEFtamtjR24rMUFJTURQL3dCYW5EK2ROQTdDbmpJNHBBS01Vb0hGQXBjZTlNTERnQjI0cHc2MEFESE5QK2xBQUJ6VHdQYWhRQjFwMkFldk5BQUF3RlBHS1VEbWx4UUZ4UUFPT3RQeGs1OWFVQTlhZU9sQUFCMkZQMjU2R2pIclR3RDNvQUF1ZUJUendSU0QwcVZmYWhoWVFDcEZYcm1nQTFJQm5OREFBTzQ2VTREQnpTZ0U4SGluanJuTkZ3c0tGNTVwNEhPRFFCem5yVHdEbjBvQVFBNHlSeFVvWDBwUU1pbmdZR0tBQlJVZ1U4RWRhTnZlbmdkeFFBS0NSaXBBdlhGQUdlb3A2cmtjMFdBVlFjMDhEMHB5cm5nZFBlbmdlOU5NQUFJTlM0NHhUUU1ZcVFESFNoZ0tpNE9hZU9lYVVMamdVOEtLUUFvd2VjMUlBYzRvd0NhbEM5NkJDQVk3VktBQUtRQVZKZ0RrVURGQzFJb0hha0hYZFVvQnlNZHFMZ0FGUEM1NjBCS2tWYVlBRndPTzlQQUhVVW9GU0JUbm1rQUFkaDJwNFVnWm9YNmNWSUFSd0tBQUNuZ0gwNjB1M25QZW5oUWU5QU1GR092YW5oYzBvVTkrbFBVWTYwQUFHS2VBTVlwUU9LY0J4eFFBQmFlcTQ2MEFlbFNLT1Iyb1F3QXgxcVFaN1VtTzlQeDJGQWdBN2ZwVGh4eWV0Q2pPTTA1ZjltZ0J3V25CYVRHT0R5YWtVR2hvQlBTbktLWG1uS0JuRk1CT01acVRHZUIwcEJ6ME5PSEZJQUdkdE94aWdESEZLQ01jYzBBS0tkU2NjMHZHTUdnQVhuclM5em1rQko2MEhybWdELy9RL2dDNmlsR1JTRTg5S1gyRk80N2lMN2NVdEhCTkdRQlNCZ2VEMG80NzBVdWY4S2FFQTZacHVPdnRRTW1uRTgvNDBEQStncHZiSU5LVFFNbWdMZ1QrRkljVXRGSUVCOXFDTW5GQUpOQXpUQVByU21nQWRxT00wQ0RGQjYwRHBSanQwRk5ERjY0cGNEOGFUR1FSMnBSN1VoMkFkZWFVOGNVbVRTam5qdlEwSU9BT2FUSEdhY0FPcHBQcFJZR0xqakI5S1VaQzgwZ3B3SEdLQklVZXZTbEE0eFIySXArQWFFREVIcU9wcHc0NTYwZzQ2ZEtlRlBUMXBqc0lBTTVwK0FlL3ZTOWVLZGpGSUFINlVwR2NVbzlCVDhZNzBEQWVwcHdHT2FPaHhVZ0hiSFNnUWdBL0NuZ1pHUlJqdlQ4YzQ3MEFrS0Z4MDZVOVIyUEZOQUZTWUhRVUFBVWZoVHd0R09NMDhlOUFnQTU0cVZWR2FiMDZHcEY5ZTlBeFY1NXA2anVLUURQMXFRS0NlZnpvQVVBZzRwNmp2U3F2SnhUbFhIVVVBS0IvalR3T2ZlZ1o2Q25oVGpqdFFBb1U5QlR3dnJRQnhqMHFRQ2dBQXdNMUlCelFCeGlucjYwQUtBUnhUd09tZW9vQVBRVklCa2NVREFEbm1wRngxUGVnQ3BGRkFrTHQ5ZWFkdEpHU09UUmpGU3FvSFhtbWdFQU5TN2M5Nk1aNWFwRkI0OXFUQUJrNHh5YWtYRkNnOUtrQUFPYVFDQ3BGWHVLVURHUFNwQU1IclFBZ0hBcVFMNjBxakk1cDR6MVA1VlFDQVk0eG1wUUIyNXBOdmVwUU1ENjBnQlFNNEZTQWMwQVU4QStsQUNnRUhBcVRBem52VGVDTUQ4S2tDbnBSWUJRb3FRQ2hjRHAwcDRVOVBXZ0dDMC9iZ1VnSE9CMHFSUitkQUNnWkZQWGpnYzBZQUZQeFJjUXFrRVU3SEZMZ2swOGNjVURGQXhTOGR1YUFPTUdualBVVUFLQmluam42VWdHUm1uZ2NmV2tBdlRqdlNnZWxHTTFJQUNjZGFZSVFBOWFjQm5nVURKSEZQQUo0b0JJY0FPcDdVQVV2WTRwUUQwb0FVY2pBcDJEVGFkME5OZ09ITkw3R2oycGUrUlNBUWdVdmZJb0ovVHRRQjNOQVhFK3Y1MHZwU1k0emptZ0VZb0JuLzlrPVwiXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
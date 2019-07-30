(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order_list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/order_list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order/OrderList/order_list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/locale/ja */ "./node_modules/dayjs/locale/ja.js");
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _viewList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewList */ "./resources/js/components/Order/OrderList/viewList.vue");


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


dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale("ja");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ViewList: _viewList__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      mode: "",
      user_name: "",
      order_list: [],
      view_list: [],
      cstm_list: [],
      cmpt_list: [],
      param: ""
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
              _context.next = 2;
              return this.init();

            case 2:
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
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        var link;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                link = "";
                this.param = this.$route.params.cnt_order_code;
                axios.get("/userinfo").then(function (response) {
                  if (response.data === "GUEST") {
                    _this.user_name = "GUEST";
                  } else {
                    _this.user_name = response.data.name;
                  }
                });
                _context2.t0 = this.param;
                _context2.next = _context2.t0 === "all" ? 6 : _context2.t0 === "yoyaku" ? 7 : 11;
                break;

              case 6:
                return _context2.abrupt("break", 15);

              case 7:
                link = "/db/order/list/yoyaku";
                _context2.next = 10;
                return this.getOrderData(link, "view");

              case 10:
                return _context2.abrupt("break", 15);

              case 11:
                link = "/db/order/list/one/" + this.param;
                _context2.next = 14;
                return this.getOrderData(link, "view");

              case 14:
                return _context2.abrupt("break", 15);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    review: function review(slist, clist) {
      this.view_list = this.order_list;

      if (this.cmpt_list.length != slist.length) {
        this.view_list = this.view_list.filter(function (ar) {
          return slist.indexOf(ar.cmpt.cmpt_code) != -1;
        });
      }

      if (this.cstm_list.length != clist.length) {
        this.view_list = this.view_list.filter(function (ar) {
          return ar.price.find(function (vendor) {
            return clist.indexOf(vendor.vname.com_name) != -1;
          });
        });
      }
    },
    getOrderData: function () {
      var _getOrderData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(link, mode) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                axios.get(link).then(function (res) {
                  var cmpt_list = [];
                  var cstm_list = [];
                  var ol = _this2.view_list = _this2.order_list = res.data;
                  console.log(_this2.order_list);
                  ol.forEach(function (ar, n) {
                    if (cmpt_list.indexOf(ar.cmpt.cmpt_code) === -1) {
                      cmpt_list.push(ar.cmpt.cmpt_code);
                    }

                    var tmp = ar.price;
                    tmp.forEach(function (vendor) {
                      if (cstm_list.indexOf(vendor.vname.com_name) === -1) {
                        cstm_list.push(vendor.vname.com_name);
                      }
                    });
                  });
                  _this2.cmpt_list = cmpt_list;
                  _this2.cstm_list = cstm_list;
                  _this2.mode = mode;
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getOrderData(_x, _x2) {
        return _getOrderData.apply(this, arguments);
      }

      return getOrderData;
    }(),
    order: function order() {
      var _this3 = this;

      var list = {};
      var ccode = [];
      this.order_list.forEach(function (od, n) {
        if (ccode.indexOf(od.cnt_order_code) === -1) {
          ccode.push(od.cnt_order_code);
        }

        od.price.forEach(function (cm, nn) {
          var com_id = cm.vendor_code;

          if (com_id in list === false) {
            list[com_id] = [];
          }

          var order_cd = od.item.item_code !== od.item.order_code && od.item.order_code !== "" ? od.item.order_code : od.item.item_code;
          list[com_id].push({
            com_id: com_id,
            com_name: cm.vname.com_name,
            order_model: od.listdata.cnt_model,
            shinsei_sha: od.listdata.user_yoyaku,
            shonin_sha: _this3.user_name,
            order_code: od.cnt_order_code,
            order_id: od.cnt_order_id,
            order_key: od.order_key,
            day_sitei: cm.order_day,
            item_code: order_cd,
            order_cmpt: od.cmpt.cmpt_code,
            item_model: od.item.item_model,
            item_name: od.item.item_name,
            item_rev: od.item.item_rev,
            item_rev_flg: od.item.item_rev_flg,
            order_num: od.num_order,
            tanka: cm.price,
            order_price: od.num_order * cm.price,
            answer_day: "",
            send_flg: "",
            send_day: ""
          });
        });
      });
      var csv = "com_id,com_name,order_model,shinsei_sha,shonin_sha,order_code,";
      csv = csv + "order_id,order_key,day_sitei,item_code,order_cmpt,";
      csv = csv + "item_model,item_name,item_rev,item_rev_flg,";
      csv = csv + "order_num,tanka,order_price,answer_day,send_flg,send_day\n";

      for (var _i = 0, _Object$keys = Object.keys(list); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        list[key].forEach(function (ar) {
          var line = "";

          for (var _i2 = 0, _Object$keys2 = Object.keys(ar); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            line = line + '"' + ar[k] + '",';
          }

          csv = csv + line.slice(0, line.length - 1) + "\n";
        });
      }

      var blob = new Blob([csv], {
        type: "text/csv"
      });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      var day = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format("YYYYMMDDHHmmss");
      var daynum = Number(day);
      var day16 = daynum.toString(16);
      var rndm = String(Math.floor(Math.random() * 1000)).padStart(4, 0);
      var csv_name = "TSE_ORDER_" + day16 + rndm + ".csv"; // this.order_code = this.ocode;

      link.download = csv_name;
      link.click();
      axios.post("/db/order/list/orderd/", ccode).then(function (res) {// console.log(res.data);
      });
      window.open("https://tse-order.firebaseapp.com/admin", "_blank");
      this.$router.push("/");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/viewList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order/OrderList/viewList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["order_list", "view_list", "cstm_list", "cmpt_list"],
  data: function data() {
    return {
      order_code: "",
      cstm_select: [],
      cmpt_select: [],
      headers: [{
        text: "形式/手配コード",
        value: "listdata.cnt_order_code",
        align: "center"
      }, {
        text: "構成/rev/連",
        value: "cmpt.cmpt_code",
        align: "center"
      }, {
        text: "品目/発注コード",
        value: "item.item_code",
        align: "center"
      }, {
        text: "形式/品名",
        value: "item.item_model",
        align: "center"
      }, {
        text: "手配数",
        value: "item.item_name",
        align: "center"
      }, {
        text: "手配先",
        value: "price",
        align: "center"
      }],
      pagination: {
        page: 1,
        rowsPerPage: 50
      }
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      this.cmpt_select = this.cmpt_list;
      this.cstm_select = this.cstm_list;
    },
    review: function review() {
      this.$emit("review", this.cmpt_select, this.cstm_select);
    },
    order: function order() {
      this.$emit("order");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "p[data-v-4359caf2] {\n  margin: 0;\n  padding: 0;\n}\n.vendor[data-v-4359caf2] {\n  font-size: 0.8rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.valueOf()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),

/***/ "./node_modules/dayjs/locale/ja.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/locale/ja.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,_){ true?module.exports=_(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js")):undefined}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var _={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return e.locale(_,null,!0),_});


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/order_list.vue?vue&type=template&id=5a87413e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order/OrderList/order_list.vue?vue&type=template&id=5a87413e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "mb-5", attrs: { fluid: "" } },
        [
          _vm.mode === "view"
            ? [
                _vm.mode === "view"
                  ? _c("ViewList", {
                      attrs: {
                        order_list: _vm.order_list,
                        view_list: _vm.view_list,
                        cstm_list: _vm.cstm_list,
                        cmpt_list: _vm.cmpt_list
                      },
                      on: { review: _vm.review, order: _vm.order }
                    })
                  : _vm._e()
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.mode === "order" ? void 0 : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/viewList.vue?vue&type=template&id=4359caf2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Order/OrderList/viewList.vue?vue&type=template&id=4359caf2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        { attrs: { "grid-list-xs": "" } },
        [
          _c("h1", { staticClass: "mb-4" }, [_vm._v("部材注文リスト")]),
          _vm._v(" "),
          _vm.cmpt_list
            ? [
                _c("h3", { staticClass: "mt-4" }, [_vm._v("構成リスト")]),
                _vm._v(" "),
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  _vm._l(_vm.cmpt_list, function(item, index) {
                    return _c(
                      "v-flex",
                      { key: index, attrs: { xs3: "" } },
                      [
                        _c("v-checkbox", {
                          staticClass: "mt-0",
                          attrs: { label: item, value: item, row: "" },
                          on: {
                            change: function($event) {
                              return _vm.review()
                            }
                          },
                          model: {
                            value: _vm.cmpt_select,
                            callback: function($$v) {
                              _vm.cmpt_select = $$v
                            },
                            expression: "cmpt_select"
                          }
                        })
                      ],
                      1
                    )
                  }),
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.cstm_list
            ? [
                _c("h3", [_vm._v("手配先")]),
                _vm._v(" "),
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  _vm._l(_vm.cstm_list, function(item, index) {
                    return _c(
                      "v-flex",
                      { key: index, attrs: { xs3: "" } },
                      [
                        _c("v-checkbox", {
                          staticClass: "mt-0",
                          attrs: {
                            label: item,
                            value: item,
                            row: "",
                            color: "primary"
                          },
                          on: {
                            change: function($event) {
                              return _vm.review()
                            }
                          },
                          model: {
                            value: _vm.cstm_select,
                            callback: function($$v) {
                              _vm.cstm_select = $$v
                            },
                            expression: "cstm_select"
                          }
                        })
                      ],
                      1
                    )
                  }),
                  1
                )
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1 data_table",
        attrs: {
          headers: _vm.headers,
          items: _vm.view_list,
          pagination: _vm.pagination,
          "item-key": "id",
          loading: "true"
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
                  _c("p", [_vm._v(_vm._s(props.item.listdata.cnt_model))]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(props.item.listdata.cnt_order_code))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-center" }, [
                  _c("p", [_vm._v(_vm._s(props.item.cmpt.cmpt_code))]),
                  _vm._v(" "),
                  _c("p", [
                    _c("span", { staticClass: "rev" }, [
                      _vm._v(_vm._s(props.item.cmpt.cmpt_rev.numToRev()))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "ren" }, [
                      _vm._v(_vm._s(props.item.assy_num))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-center" }, [
                  _c("p", [_vm._v(_vm._s(props.item.item.item_code))]),
                  _vm._v(" "),
                  props.item.item.item_code !== null &&
                  props.item.item.item_code !== props.item.item.order_code
                    ? _c("p", [_vm._v(_vm._s(props.item.item.order_code))])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-center" }, [
                  _c("p", [_vm._v(_vm._s(props.item.item.item_model))]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(props.item.item.item_name))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-xs-center" }, [
                  _vm._v(_vm._s(props.item.num_order))
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "text-xs-center vendor pa-0" },
                  [
                    _c(
                      "v-layout",
                      { attrs: { row: "", wrap: "" } },
                      [
                        _vm._l(props.item.price, function(item, index) {
                          return [
                            _c(
                              "v-flex",
                              { key: "t" + index, attrs: { xs4: "" } },
                              [_vm._v(_vm._s(item.vname.com_name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              { key: "v" + index, attrs: { xs4: "" } },
                              [
                                _vm._v(
                                  _vm._s(
                                    Math.round(
                                      item.price * props.item.num_order,
                                      2
                                    ).toLocaleString()
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              { key: "d" + index, attrs: { xs4: "" } },
                              [_vm._v(_vm._s(item.order_day))]
                            )
                          ]
                        })
                      ],
                      2
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-bottom-nav",
        { attrs: { fixed: "", value: "value", "active.sync": "value" } },
        [
          _c(
            "v-btn",
            { attrs: { flat: "", light: "", to: "/product_list" } },
            [
              _c("span", [_vm._v("製造頁へ")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("far fa-arrow-alt-circle-left")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { flat: "", light: "" },
              on: {
                click: function($event) {
                  return _vm.order()
                }
              }
            },
            [
              _c("span", [_vm._v("手配")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("far fa-thumbs-up")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { flat: "", light: "" } },
            [
              _c("span", [_vm._v("取消")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("fas fa-trash-alt")])
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

/***/ "./resources/js/components/Order/OrderList/order_list.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Order/OrderList/order_list.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_list_vue_vue_type_template_id_5a87413e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order_list.vue?vue&type=template&id=5a87413e&scoped=true& */ "./resources/js/components/Order/OrderList/order_list.vue?vue&type=template&id=5a87413e&scoped=true&");
/* harmony import */ var _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order_list.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/OrderList/order_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_list_vue_vue_type_template_id_5a87413e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_list_vue_vue_type_template_id_5a87413e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a87413e",
  null
  
)

/* vuetify-loader */



_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VApp"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_4__["VContainer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/OrderList/order_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/OrderList/order_list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Order/OrderList/order_list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./order_list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/order_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Order/OrderList/order_list.vue?vue&type=template&id=5a87413e&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Order/OrderList/order_list.vue?vue&type=template&id=5a87413e&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_5a87413e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./order_list.vue?vue&type=template&id=5a87413e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/order_list.vue?vue&type=template&id=5a87413e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_5a87413e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_order_list_vue_vue_type_template_id_5a87413e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Order/OrderList/viewList.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Order/OrderList/viewList.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewList_vue_vue_type_template_id_4359caf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewList.vue?vue&type=template&id=4359caf2&scoped=true& */ "./resources/js/components/Order/OrderList/viewList.vue?vue&type=template&id=4359caf2&scoped=true&");
/* harmony import */ var _viewList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewList.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/OrderList/viewList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _viewList_vue_vue_type_style_index_0_id_4359caf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true& */ "./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _viewList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viewList_vue_vue_type_template_id_4359caf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viewList_vue_vue_type_template_id_4359caf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4359caf2",
  null
  
)

/* vuetify-loader */









_home_third_www_tse_server_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBottomNav: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBottomNav"],VBtn: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCheckbox: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VCheckbox"],VContainer: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VDataTable: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VDataTable"],VFlex: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VIcon: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VLayout: vuetify_lib__WEBPACK_IMPORTED_MODULE_5__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/OrderList/viewList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/OrderList/viewList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Order/OrderList/viewList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/viewList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_style_index_0_id_4359caf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/viewList.vue?vue&type=style&index=0&id=4359caf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_style_index_0_id_4359caf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_style_index_0_id_4359caf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_style_index_0_id_4359caf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_style_index_0_id_4359caf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_style_index_0_id_4359caf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Order/OrderList/viewList.vue?vue&type=template&id=4359caf2&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Order/OrderList/viewList.vue?vue&type=template&id=4359caf2&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_template_id_4359caf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./viewList.vue?vue&type=template&id=4359caf2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Order/OrderList/viewList.vue?vue&type=template&id=4359caf2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_template_id_4359caf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_viewList_vue_vue_type_template_id_4359caf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3JkZXIvT3JkZXJMaXN0L29yZGVyX2xpc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9PcmRlci9PcmRlckxpc3Qvdmlld0xpc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL09yZGVyL09yZGVyTGlzdC92aWV3TGlzdC52dWU/NjJiMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXlqcy9sb2NhbGUvamEuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3JkZXIvT3JkZXJMaXN0L3ZpZXdMaXN0LnZ1ZT8xNzBiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL09yZGVyL09yZGVyTGlzdC9vcmRlcl9saXN0LnZ1ZT80NWM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL09yZGVyL09yZGVyTGlzdC92aWV3TGlzdC52dWU/NTVkYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9PcmRlci9PcmRlckxpc3Qvb3JkZXJfbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3JkZXIvT3JkZXJMaXN0L29yZGVyX2xpc3QudnVlP2U1NjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3JkZXIvT3JkZXJMaXN0L29yZGVyX2xpc3QudnVlPzE1ZjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3JkZXIvT3JkZXJMaXN0L3ZpZXdMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9PcmRlci9PcmRlckxpc3Qvdmlld0xpc3QudnVlPzI5MDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3JkZXIvT3JkZXJMaXN0L3ZpZXdMaXN0LnZ1ZT9lNWMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL09yZGVyL09yZGVyTGlzdC92aWV3TGlzdC52dWU/OTY4ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBO0FBQ0E7QUFDQSxjQURBO0FBRUEsbUJBRkE7QUFHQSxvQkFIQTtBQUlBLG1CQUpBO0FBS0EsbUJBTEE7QUFNQSxtQkFOQTtBQU9BO0FBUEE7QUFTQSxHQWRBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0EsV0FEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQWZBO0FBa0JBO0FBQ0EsUUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxvQkFGQSxHQUVBLEVBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsaUJBTkE7QUFKQSwrQkFXQSxVQVhBO0FBQUEsa0RBWUEsS0FaQSx3QkFjQSxRQWRBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQWVBO0FBZkE7QUFBQSx1QkFnQkEsK0JBaEJBOztBQUFBO0FBQUE7O0FBQUE7QUFtQkE7QUFuQkE7QUFBQSx1QkFvQkEsK0JBcEJBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF3QkEsVUF4QkEsa0JBd0JBLEtBeEJBLEVBd0JBLEtBeEJBLEVBd0JBO0FBQ0E7O0FBQ0E7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O0FDcERmO0FBQUE7QUFBQSx3Q0FBNlAsQ0FBZ0IsOFJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBalI7QUFBQTtBQUFBO0FBQUE7QUFBMmdCLENBQWdCLDZlQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9oQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoib3JkZXJfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtYXBwPlxuICAgIDx2LWNvbnRhaW5lciBmbHVpZCBjbGFzcz1cIm1iLTVcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibW9kZT09PSd2aWV3J1wiPlxuICAgICAgICA8Vmlld0xpc3RcbiAgICAgICAgICB2LWlmPVwibW9kZT09PSd2aWV3J1wiXG4gICAgICAgICAgOm9yZGVyX2xpc3Q9XCJvcmRlcl9saXN0XCJcbiAgICAgICAgICA6dmlld19saXN0PVwidmlld19saXN0XCJcbiAgICAgICAgICA6Y3N0bV9saXN0PVwiY3N0bV9saXN0XCJcbiAgICAgICAgICA6Y21wdF9saXN0PVwiY21wdF9saXN0XCJcbiAgICAgICAgICBAcmV2aWV3PVwicmV2aWV3XCJcbiAgICAgICAgICBAb3JkZXI9XCJvcmRlclwiXG4gICAgICAgID48L1ZpZXdMaXN0PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibW9kZT09PSdvcmRlcidcIj48L3RlbXBsYXRlPlxuICAgIDwvdi1jb250YWluZXI+XG4gIDwvdi1hcHA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IFwiZGF5anMvbG9jYWxlL2phXCI7XG5kYXlqcy5sb2NhbGUoXCJqYVwiKTtcblxuaW1wb3J0IFZpZXdMaXN0IGZyb20gXCIuL3ZpZXdMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFZpZXdMaXN0XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlOiBcIlwiLFxuICAgICAgdXNlcl9uYW1lOiBcIlwiLFxuICAgICAgb3JkZXJfbGlzdDogW10sXG4gICAgICB2aWV3X2xpc3Q6IFtdLFxuICAgICAgY3N0bV9saXN0OiBbXSxcbiAgICAgIGNtcHRfbGlzdDogW10sXG4gICAgICBwYXJhbTogXCJcIlxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQ6IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgIGxldCBsaW5rID0gXCJcIjtcbiAgICAgIHRoaXMucGFyYW0gPSB0aGlzLiRyb3V0ZS5wYXJhbXMuY250X29yZGVyX2NvZGU7XG4gICAgICBheGlvcy5nZXQoXCIvdXNlcmluZm9cIikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhID09PSBcIkdVRVNUXCIpIHtcbiAgICAgICAgICB0aGlzLnVzZXJfbmFtZSA9IFwiR1VFU1RcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVzZXJfbmFtZSA9IHJlc3BvbnNlLmRhdGEubmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzd2l0Y2ggKHRoaXMucGFyYW0pIHtcbiAgICAgICAgY2FzZSBcImFsbFwiOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwieW95YWt1XCI6XG4gICAgICAgICAgbGluayA9IFwiL2RiL29yZGVyL2xpc3QveW95YWt1XCI7XG4gICAgICAgICAgYXdhaXQgdGhpcy5nZXRPcmRlckRhdGEobGluaywgXCJ2aWV3XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGxpbmsgPSBcIi9kYi9vcmRlci9saXN0L29uZS9cIiArIHRoaXMucGFyYW07XG4gICAgICAgICAgYXdhaXQgdGhpcy5nZXRPcmRlckRhdGEobGluaywgXCJ2aWV3XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmV2aWV3KHNsaXN0LCBjbGlzdCkge1xuICAgICAgdGhpcy52aWV3X2xpc3QgPSB0aGlzLm9yZGVyX2xpc3Q7XG4gICAgICBpZiAodGhpcy5jbXB0X2xpc3QubGVuZ3RoICE9IHNsaXN0Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLnZpZXdfbGlzdCA9IHRoaXMudmlld19saXN0LmZpbHRlcihhciA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNsaXN0LmluZGV4T2YoYXIuY21wdC5jbXB0X2NvZGUpICE9IC0xO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNzdG1fbGlzdC5sZW5ndGggIT0gY2xpc3QubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMudmlld19saXN0ID0gdGhpcy52aWV3X2xpc3QuZmlsdGVyKGFyID0+IHtcbiAgICAgICAgICByZXR1cm4gYXIucHJpY2UuZmluZCh2ZW5kb3IgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXN0LmluZGV4T2YodmVuZG9yLnZuYW1lLmNvbV9uYW1lKSAhPSAtMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBnZXRPcmRlckRhdGEobGluaywgbW9kZSkge1xuICAgICAgYXhpb3MuZ2V0KGxpbmspLnRoZW4ocmVzID0+IHtcbiAgICAgICAgbGV0IGNtcHRfbGlzdCA9IFtdO1xuICAgICAgICBsZXQgY3N0bV9saXN0ID0gW107XG4gICAgICAgIGxldCBvbCA9ICh0aGlzLnZpZXdfbGlzdCA9IHRoaXMub3JkZXJfbGlzdCA9IHJlcy5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vcmRlcl9saXN0KTtcbiAgICAgICAgb2wuZm9yRWFjaCgoYXIsIG4pID0+IHtcbiAgICAgICAgICBpZiAoY21wdF9saXN0LmluZGV4T2YoYXIuY21wdC5jbXB0X2NvZGUpID09PSAtMSkge1xuICAgICAgICAgICAgY21wdF9saXN0LnB1c2goYXIuY21wdC5jbXB0X2NvZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdG1wID0gYXIucHJpY2U7XG4gICAgICAgICAgdG1wLmZvckVhY2godmVuZG9yID0+IHtcbiAgICAgICAgICAgIGlmIChjc3RtX2xpc3QuaW5kZXhPZih2ZW5kb3Iudm5hbWUuY29tX25hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICBjc3RtX2xpc3QucHVzaCh2ZW5kb3Iudm5hbWUuY29tX25hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbXB0X2xpc3QgPSBjbXB0X2xpc3Q7XG4gICAgICAgIHRoaXMuY3N0bV9saXN0ID0gY3N0bV9saXN0O1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBvcmRlcigpIHtcbiAgICAgIGxldCBsaXN0ID0ge307XG4gICAgICBsZXQgY2NvZGUgPSBbXTtcbiAgICAgIHRoaXMub3JkZXJfbGlzdC5mb3JFYWNoKChvZCwgbikgPT4ge1xuICAgICAgICBpZiAoY2NvZGUuaW5kZXhPZihvZC5jbnRfb3JkZXJfY29kZSkgPT09IC0xKSB7XG4gICAgICAgICAgY2NvZGUucHVzaChvZC5jbnRfb3JkZXJfY29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgb2QucHJpY2UuZm9yRWFjaCgoY20sIG5uKSA9PiB7XG4gICAgICAgICAgbGV0IGNvbV9pZCA9IGNtLnZlbmRvcl9jb2RlO1xuICAgICAgICAgIGlmIChjb21faWQgaW4gbGlzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxpc3RbY29tX2lkXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgb3JkZXJfY2QgPVxuICAgICAgICAgICAgb2QuaXRlbS5pdGVtX2NvZGUgIT09IG9kLml0ZW0ub3JkZXJfY29kZSAmJlxuICAgICAgICAgICAgb2QuaXRlbS5vcmRlcl9jb2RlICE9PSBcIlwiXG4gICAgICAgICAgICAgID8gb2QuaXRlbS5vcmRlcl9jb2RlXG4gICAgICAgICAgICAgIDogb2QuaXRlbS5pdGVtX2NvZGU7XG5cbiAgICAgICAgICBsaXN0W2NvbV9pZF0ucHVzaCh7XG4gICAgICAgICAgICBjb21faWQ6IGNvbV9pZCxcbiAgICAgICAgICAgIGNvbV9uYW1lOiBjbS52bmFtZS5jb21fbmFtZSxcbiAgICAgICAgICAgIG9yZGVyX21vZGVsOiBvZC5saXN0ZGF0YS5jbnRfbW9kZWwsXG4gICAgICAgICAgICBzaGluc2VpX3NoYTogb2QubGlzdGRhdGEudXNlcl95b3lha3UsXG4gICAgICAgICAgICBzaG9uaW5fc2hhOiB0aGlzLnVzZXJfbmFtZSxcbiAgICAgICAgICAgIG9yZGVyX2NvZGU6IG9kLmNudF9vcmRlcl9jb2RlLFxuICAgICAgICAgICAgb3JkZXJfaWQ6IG9kLmNudF9vcmRlcl9pZCxcbiAgICAgICAgICAgIG9yZGVyX2tleTogb2Qub3JkZXJfa2V5LFxuICAgICAgICAgICAgZGF5X3NpdGVpOiBjbS5vcmRlcl9kYXksXG4gICAgICAgICAgICBpdGVtX2NvZGU6IG9yZGVyX2NkLFxuICAgICAgICAgICAgb3JkZXJfY21wdDogb2QuY21wdC5jbXB0X2NvZGUsXG4gICAgICAgICAgICBpdGVtX21vZGVsOiBvZC5pdGVtLml0ZW1fbW9kZWwsXG4gICAgICAgICAgICBpdGVtX25hbWU6IG9kLml0ZW0uaXRlbV9uYW1lLFxuICAgICAgICAgICAgaXRlbV9yZXY6IG9kLml0ZW0uaXRlbV9yZXYsXG4gICAgICAgICAgICBpdGVtX3Jldl9mbGc6IG9kLml0ZW0uaXRlbV9yZXZfZmxnLFxuICAgICAgICAgICAgb3JkZXJfbnVtOiBvZC5udW1fb3JkZXIsXG4gICAgICAgICAgICB0YW5rYTogY20ucHJpY2UsXG4gICAgICAgICAgICBvcmRlcl9wcmljZTogb2QubnVtX29yZGVyICogY20ucHJpY2UsXG4gICAgICAgICAgICBhbnN3ZXJfZGF5OiBcIlwiLFxuICAgICAgICAgICAgc2VuZF9mbGc6IFwiXCIsXG4gICAgICAgICAgICBzZW5kX2RheTogXCJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNzdiA9XG4gICAgICAgIFwiY29tX2lkLGNvbV9uYW1lLG9yZGVyX21vZGVsLHNoaW5zZWlfc2hhLHNob25pbl9zaGEsb3JkZXJfY29kZSxcIjtcbiAgICAgIGNzdiA9IGNzdiArIFwib3JkZXJfaWQsb3JkZXJfa2V5LGRheV9zaXRlaSxpdGVtX2NvZGUsb3JkZXJfY21wdCxcIjtcbiAgICAgIGNzdiA9IGNzdiArIFwiaXRlbV9tb2RlbCxpdGVtX25hbWUsaXRlbV9yZXYsaXRlbV9yZXZfZmxnLFwiO1xuICAgICAgY3N2ID0gY3N2ICsgXCJvcmRlcl9udW0sdGFua2Esb3JkZXJfcHJpY2UsYW5zd2VyX2RheSxzZW5kX2ZsZyxzZW5kX2RheVxcblwiO1xuICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGxpc3QpKSB7XG4gICAgICAgIGxpc3Rba2V5XS5mb3JFYWNoKGFyID0+IHtcbiAgICAgICAgICBsZXQgbGluZSA9IFwiXCI7XG4gICAgICAgICAgZm9yIChsZXQgayBvZiBPYmplY3Qua2V5cyhhcikpIHtcbiAgICAgICAgICAgIGxpbmUgPSBsaW5lICsgJ1wiJyArIGFyW2tdICsgJ1wiLCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNzdiA9IGNzdiArIGxpbmUuc2xpY2UoMCwgbGluZS5sZW5ndGggLSAxKSArIFwiXFxuXCI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbY3N2XSwgeyB0eXBlOiBcInRleHQvY3N2XCIgfSk7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICBsZXQgZGF5ID0gZGF5anMoKS5mb3JtYXQoXCJZWVlZTU1EREhIbW1zc1wiKTtcbiAgICAgIGxldCBkYXludW0gPSBOdW1iZXIoZGF5KTtcbiAgICAgIGxldCBkYXkxNiA9IGRheW51bS50b1N0cmluZygxNik7XG4gICAgICBsZXQgcm5kbSA9IFN0cmluZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSkucGFkU3RhcnQoNCwgMCk7XG4gICAgICBsZXQgY3N2X25hbWUgPSBcIlRTRV9PUkRFUl9cIiArIGRheTE2ICsgcm5kbSArIFwiLmNzdlwiO1xuICAgICAgLy8gdGhpcy5vcmRlcl9jb2RlID0gdGhpcy5vY29kZTtcbiAgICAgIGxpbmsuZG93bmxvYWQgPSBjc3ZfbmFtZTtcbiAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgIGF4aW9zLnBvc3QoXCIvZGIvb3JkZXIvbGlzdC9vcmRlcmQvXCIsIGNjb2RlKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3RzZS1vcmRlci5maXJlYmFzZWFwcC5jb20vYWRtaW5cIiwgXCJfYmxhbmtcIik7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxtYWluPlxuICAgIDx2LWNvbnRhaW5lciBncmlkLWxpc3QteHM+XG4gICAgICA8aDEgY2xhc3M9XCJtYi00XCI+6YOo5p2Q5rOo5paH44Oq44K544OIPC9oMT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY21wdF9saXN0XCI+XG4gICAgICAgIDxoMyBjbGFzcz1cIm10LTRcIj7mp4vmiJDjg6rjgrnjg4g8L2gzPlxuICAgICAgICA8di1sYXlvdXQgcm93IHdyYXA+XG4gICAgICAgICAgPHYtZmxleCB4czMgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNtcHRfbGlzdFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgPHYtY2hlY2tib3hcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImNtcHRfc2VsZWN0XCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiaXRlbVwiXG4gICAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW1cIlxuICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgICAgY2xhc3M9XCJtdC0wXCJcbiAgICAgICAgICAgICAgQGNoYW5nZT1cInJldmlldygpXCJcbiAgICAgICAgICAgID48L3YtY2hlY2tib3g+XG4gICAgICAgICAgPC92LWZsZXg+XG4gICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjc3RtX2xpc3RcIj5cbiAgICAgICAgPGgzPuaJi+mFjeWFiDwvaDM+XG4gICAgICAgIDx2LWxheW91dCByb3cgd3JhcD5cbiAgICAgICAgICA8di1mbGV4IHhzMyB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY3N0bV9saXN0XCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICA8di1jaGVja2JveFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiY3N0bV9zZWxlY3RcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtXCJcbiAgICAgICAgICAgICAgOnZhbHVlPVwiaXRlbVwiXG4gICAgICAgICAgICAgIHJvd1xuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm10LTBcIlxuICAgICAgICAgICAgICBAY2hhbmdlPVwicmV2aWV3KClcIlxuICAgICAgICAgICAgPjwvdi1jaGVja2JveD5cbiAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgPC92LWxheW91dD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92LWNvbnRhaW5lcj5cbiAgICA8di1kYXRhLXRhYmxlXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgOml0ZW1zPVwidmlld19saXN0XCJcbiAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTEgZGF0YV90YWJsZVwiXG4gICAgICA6cGFnaW5hdGlvbi5zeW5jPVwicGFnaW5hdGlvblwiXG4gICAgICBpdGVtLWtleT1cImlkXCJcbiAgICAgIGxvYWRpbmc9XCJ0cnVlXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW1zPVwicHJvcHNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICA8cD57eyBwcm9wcy5pdGVtLmxpc3RkYXRhLmNudF9tb2RlbCB9fTwvcD5cbiAgICAgICAgICA8cD57eyBwcm9wcy5pdGVtLmxpc3RkYXRhLmNudF9vcmRlcl9jb2RlIH19PC9wPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxuICAgICAgICAgIDxwPnt7IHByb3BzLml0ZW0uY21wdC5jbXB0X2NvZGUgfX08L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJldlwiPnt7IHByb3BzLml0ZW0uY21wdC5jbXB0X3Jldi5udW1Ub1JldigpIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZW5cIj57eyBwcm9wcy5pdGVtLmFzc3lfbnVtIH19PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICA8cD57eyBwcm9wcy5pdGVtLml0ZW0uaXRlbV9jb2RlIH19PC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICB2LWlmPVwicHJvcHMuaXRlbS5pdGVtLml0ZW1fY29kZSAhPT0gbnVsbCAmJiBwcm9wcy5pdGVtLml0ZW0uaXRlbV9jb2RlICE9PSBwcm9wcy5pdGVtLml0ZW0ub3JkZXJfY29kZVwiXG4gICAgICAgICAgPnt7IHByb3BzLml0ZW0uaXRlbS5vcmRlcl9jb2RlIH19PC9wPlxuICAgICAgICA8L3RkPlxuXG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgPHA+e3sgcHJvcHMuaXRlbS5pdGVtLml0ZW1fbW9kZWwgfX08L3A+XG4gICAgICAgICAgPHA+e3sgcHJvcHMuaXRlbS5pdGVtLml0ZW1fbmFtZSB9fTwvcD5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLm51bV9vcmRlciB9fTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyIHZlbmRvciBwYS0wXCI+XG4gICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9wcy5pdGVtLnByaWNlXCI+XG4gICAgICAgICAgICAgIDx2LWZsZXggeHM0IDprZXk9XCIndCcgKyBpbmRleFwiPnt7IGl0ZW0udm5hbWUuY29tX25hbWUgfX08L3YtZmxleD5cbiAgICAgICAgICAgICAgPHYtZmxleFxuICAgICAgICAgICAgICAgIHhzNFxuICAgICAgICAgICAgICAgIDprZXk9XCIndicgKyBpbmRleFwiXG4gICAgICAgICAgICAgID57eyBNYXRoLnJvdW5kKGl0ZW0ucHJpY2UgKiBwcm9wcy5pdGVtLm51bV9vcmRlciwgMikudG9Mb2NhbGVTdHJpbmcoKX19PC92LWZsZXg+XG4gICAgICAgICAgICAgIDx2LWZsZXggeHM0IDprZXk9XCInZCcgKyBpbmRleFwiPnt7IGl0ZW0ub3JkZXJfZGF5IH19PC92LWZsZXg+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1kYXRhLXRhYmxlPlxuICAgIDx2LWJvdHRvbS1uYXYgZml4ZWQgdmFsdWU9XCJ2YWx1ZVwiIGFjdGl2ZS5zeW5jPVwidmFsdWVcIj5cbiAgICAgIDx2LWJ0biBmbGF0IGxpZ2h0IHRvPVwiL3Byb2R1Y3RfbGlzdFwiPlxuICAgICAgICA8c3Bhbj7oo73pgKDpoIHjgbg8L3NwYW4+XG4gICAgICAgIDx2LWljb24+ZmFyIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdDwvdi1pY29uPlxuICAgICAgPC92LWJ0bj5cbiAgICAgIDx2LWJ0biBmbGF0IGxpZ2h0IEBjbGljaz1cIm9yZGVyKClcIj5cbiAgICAgICAgPHNwYW4+5omL6YWNPC9zcGFuPlxuICAgICAgICA8di1pY29uPmZhciBmYS10aHVtYnMtdXA8L3YtaWNvbj5cbiAgICAgIDwvdi1idG4+XG4gICAgICA8di1idG4gZmxhdCBsaWdodD5cbiAgICAgICAgPHNwYW4+5Y+W5raIPC9zcGFuPlxuICAgICAgICA8di1pY29uPmZhcyBmYS10cmFzaC1hbHQ8L3YtaWNvbj5cbiAgICAgIDwvdi1idG4+XG4gICAgPC92LWJvdHRvbS1uYXY+XG4gIDwvbWFpbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJvcmRlcl9saXN0XCIsIFwidmlld19saXN0XCIsIFwiY3N0bV9saXN0XCIsIFwiY21wdF9saXN0XCJdLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3JkZXJfY29kZTogXCJcIixcbiAgICAgIGNzdG1fc2VsZWN0OiBbXSxcbiAgICAgIGNtcHRfc2VsZWN0OiBbXSxcbiAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwi5b2i5byPL+aJi+mFjeOCs+ODvOODiVwiLFxuICAgICAgICAgIHZhbHVlOiBcImxpc3RkYXRhLmNudF9vcmRlcl9jb2RlXCIsXG4gICAgICAgICAgYWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiBcIuani+aIkC9yZXYv6YCjXCIsIHZhbHVlOiBcImNtcHQuY21wdF9jb2RlXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCLlk4Hnm64v55m65rOo44Kz44O844OJXCIsIHZhbHVlOiBcIml0ZW0uaXRlbV9jb2RlXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCLlvaLlvI8v5ZOB5ZCNXCIsIHZhbHVlOiBcIml0ZW0uaXRlbV9tb2RlbFwiLCBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICB7IHRleHQ6IFwi5omL6YWN5pWwXCIsIHZhbHVlOiBcIml0ZW0uaXRlbV9uYW1lXCIsIGFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCLmiYvphY3lhYhcIiwgdmFsdWU6IFwicHJpY2VcIiwgYWxpZ246IFwiY2VudGVyXCIgfVxuICAgICAgXSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcm93c1BlclBhZ2U6IDUwXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5jbXB0X3NlbGVjdCA9IHRoaXMuY21wdF9saXN0O1xuICAgICAgdGhpcy5jc3RtX3NlbGVjdCA9IHRoaXMuY3N0bV9saXN0O1xuICAgIH0sXG4gICAgcmV2aWV3KCkge1xuICAgICAgdGhpcy4kZW1pdChcInJldmlld1wiLCB0aGlzLmNtcHRfc2VsZWN0LCB0aGlzLmNzdG1fc2VsZWN0KTtcbiAgICB9LFxuICAgIG9yZGVyKCkge1xuICAgICAgdGhpcy4kZW1pdChcIm9yZGVyXCIpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnZlbmRvciB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwicFtkYXRhLXYtNDM1OWNhZjJdIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi52ZW5kb3JbZGF0YS12LTQzNTljYWYyXSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XCIsIFwiXCJdKTtcblxuIiwiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6dC5kYXlqcz1uKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1cIm1pbGxpc2Vjb25kXCIsbj1cInNlY29uZFwiLGU9XCJtaW51dGVcIixyPVwiaG91clwiLGk9XCJkYXlcIixzPVwid2Vla1wiLHU9XCJtb250aFwiLG89XCJxdWFydGVyXCIsYT1cInllYXJcIixoPS9eKFxcZHs0fSktPyhcXGR7MSwyfSktPyhcXGR7MCwyfSlbXjAtOV0qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPy4/KFxcZHsxLDN9KT8kLyxmPS9cXFsoW15cXF1dKyldfFl7Miw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxjPWZ1bmN0aW9uKHQsbixlKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1uP3Q6XCJcIitBcnJheShuKzEtci5sZW5ndGgpLmpvaW4oZSkrdH0sZD17czpjLHo6ZnVuY3Rpb24odCl7dmFyIG49LXQudXRjT2Zmc2V0KCksZT1NYXRoLmFicyhuKSxyPU1hdGguZmxvb3IoZS82MCksaT1lJTYwO3JldHVybihuPD0wP1wiK1wiOlwiLVwiKStjKHIsMixcIjBcIikrXCI6XCIrYyhpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uKHQsbil7dmFyIGU9MTIqKG4ueWVhcigpLXQueWVhcigpKSsobi5tb250aCgpLXQubW9udGgoKSkscj10LmNsb25lKCkuYWRkKGUsdSksaT1uLXI8MCxzPXQuY2xvbmUoKS5hZGQoZSsoaT8tMToxKSx1KTtyZXR1cm4gTnVtYmVyKC0oZSsobi1yKS8oaT9yLXM6cy1yKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24oaCl7cmV0dXJue006dSx5OmEsdzpzLGQ6aSxoOnIsbTplLHM6bixtczp0LFE6b31baF18fFN0cmluZyhofHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LCQ9e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKX0sbD1cImVuXCIsbT17fTttW2xdPSQ7dmFyIHk9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiB2fSxNPWZ1bmN0aW9uKHQsbixlKXt2YXIgcjtpZighdClyZXR1cm4gbDtpZihcInN0cmluZ1wiPT10eXBlb2YgdCltW3RdJiYocj10KSxuJiYobVt0XT1uLHI9dCk7ZWxzZXt2YXIgaT10Lm5hbWU7bVtpXT10LHI9aX1yZXR1cm4gZXx8KGw9cikscn0sZz1mdW5jdGlvbih0LG4sZSl7aWYoeSh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciByPW4/XCJzdHJpbmdcIj09dHlwZW9mIG4/e2Zvcm1hdDpuLHBsOmV9Om46e307cmV0dXJuIHIuZGF0ZT10LG5ldyB2KHIpfSxEPWQ7RC5sPU0sRC5pPXksRC53PWZ1bmN0aW9uKHQsbil7cmV0dXJuIGcodCx7bG9jYWxlOm4uJEwsdXRjOm4uJHV9KX07dmFyIHY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBjKHQpe3RoaXMuJEw9dGhpcy4kTHx8TSh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBkPWMucHJvdG90eXBlO3JldHVybiBkLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIG49dC5kYXRlLGU9dC51dGM7aWYobnVsbD09PW4pcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoRC51KG4pKXJldHVybiBuZXcgRGF0ZTtpZihuIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUobik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4mJiEvWiQvaS50ZXN0KG4pKXt2YXIgcj1uLm1hdGNoKGgpO2lmKHIpcmV0dXJuIGU/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxyWzJdLTEsclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxyWzddfHwwKSk6bmV3IERhdGUoclsxXSxyWzJdLTEsclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxyWzddfHwwKX1yZXR1cm4gbmV3IERhdGUobil9KHQpLHRoaXMuaW5pdCgpfSxkLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxkLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBEfSxkLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKFwiSW52YWxpZCBEYXRlXCI9PT10aGlzLiRkLnRvU3RyaW5nKCkpfSxkLmlzU2FtZT1mdW5jdGlvbih0LG4pe3ZhciBlPWcodCk7cmV0dXJuIHRoaXMuc3RhcnRPZihuKTw9ZSYmZTw9dGhpcy5lbmRPZihuKX0sZC5pc0FmdGVyPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGcodCk8dGhpcy5zdGFydE9mKG4pfSxkLmlzQmVmb3JlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuZW5kT2Yobik8Zyh0KX0sZC4kZz1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIEQudSh0KT90aGlzW25dOnRoaXMuc2V0KGUsdCl9LGQueWVhcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJHlcIixhKX0sZC5tb250aD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJE1cIix1KX0sZC5kYXk9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRXXCIsaSl9LGQuZGF0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJERcIixcImRhdGVcIil9LGQuaG91cj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJEhcIixyKX0sZC5taW51dGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRtXCIsZSl9LGQuc2Vjb25kPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkc1wiLG4pfSxkLm1pbGxpc2Vjb25kPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLiRnKG4sXCIkbXNcIix0KX0sZC51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sZC52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxkLnN0YXJ0T2Y9ZnVuY3Rpb24odCxvKXt2YXIgaD10aGlzLGY9ISFELnUobyl8fG8sYz1ELnAodCksZD1mdW5jdGlvbih0LG4pe3ZhciBlPUQudyhoLiR1P0RhdGUuVVRDKGguJHksbix0KTpuZXcgRGF0ZShoLiR5LG4sdCksaCk7cmV0dXJuIGY/ZTplLmVuZE9mKGkpfSwkPWZ1bmN0aW9uKHQsbil7cmV0dXJuIEQudyhoLnRvRGF0ZSgpW3RdLmFwcGx5KGgudG9EYXRlKCksKGY/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShuKSksaCl9LGw9dGhpcy4kVyxtPXRoaXMuJE0seT10aGlzLiRELE09XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChjKXtjYXNlIGE6cmV0dXJuIGY/ZCgxLDApOmQoMzEsMTEpO2Nhc2UgdTpyZXR1cm4gZj9kKDEsbSk6ZCgwLG0rMSk7Y2FzZSBzOnZhciBnPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCx2PShsPGc/bCs3OmwpLWc7cmV0dXJuIGQoZj95LXY6eSsoNi12KSxtKTtjYXNlIGk6Y2FzZVwiZGF0ZVwiOnJldHVybiAkKE0rXCJIb3Vyc1wiLDApO2Nhc2UgcjpyZXR1cm4gJChNK1wiTWludXRlc1wiLDEpO2Nhc2UgZTpyZXR1cm4gJChNK1wiU2Vjb25kc1wiLDIpO2Nhc2UgbjpyZXR1cm4gJChNK1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sZC5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxkLiRzZXQ9ZnVuY3Rpb24ocyxvKXt2YXIgaCxmPUQucChzKSxjPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSxkPShoPXt9LGhbaV09YytcIkRhdGVcIixoLmRhdGU9YytcIkRhdGVcIixoW3VdPWMrXCJNb250aFwiLGhbYV09YytcIkZ1bGxZZWFyXCIsaFtyXT1jK1wiSG91cnNcIixoW2VdPWMrXCJNaW51dGVzXCIsaFtuXT1jK1wiU2Vjb25kc1wiLGhbdF09YytcIk1pbGxpc2Vjb25kc1wiLGgpW2ZdLCQ9Zj09PWk/dGhpcy4kRCsoby10aGlzLiRXKTpvO2lmKGY9PT11fHxmPT09YSl7dmFyIGw9dGhpcy5jbG9uZSgpLnNldChcImRhdGVcIiwxKTtsLiRkW2RdKCQpLGwuaW5pdCgpLHRoaXMuJGQ9bC5zZXQoXCJkYXRlXCIsTWF0aC5taW4odGhpcy4kRCxsLmRheXNJbk1vbnRoKCkpKS50b0RhdGUoKX1lbHNlIGQmJnRoaXMuJGRbZF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LGQuc2V0PWZ1bmN0aW9uKHQsbil7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsbil9LGQuZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW0QucCh0KV0oKX0sZC5hZGQ9ZnVuY3Rpb24odCxvKXt2YXIgaCxmPXRoaXM7dD1OdW1iZXIodCk7dmFyIGM9RC5wKG8pLGQ9ZnVuY3Rpb24obil7dmFyIGU9ZyhmKTtyZXR1cm4gRC53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKG4qdCkpLGYpfTtpZihjPT09dSlyZXR1cm4gdGhpcy5zZXQodSx0aGlzLiRNK3QpO2lmKGM9PT1hKXJldHVybiB0aGlzLnNldChhLHRoaXMuJHkrdCk7aWYoYz09PWkpcmV0dXJuIGQoMSk7aWYoYz09PXMpcmV0dXJuIGQoNyk7dmFyICQ9KGg9e30saFtlXT02ZTQsaFtyXT0zNmU1LGhbbl09MWUzLGgpW2NdfHwxLGw9dGhpcy52YWx1ZU9mKCkrdCokO3JldHVybiBELncobCx0aGlzKX0sZC5zdWJ0cmFjdD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmFkZCgtMSp0LG4pfSxkLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgbj10aGlzO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm5cIkludmFsaWQgRGF0ZVwiO3ZhciBlPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixyPUQueih0aGlzKSxpPXRoaXMuJGxvY2FsZSgpLHM9dGhpcy4kSCx1PXRoaXMuJG0sbz10aGlzLiRNLGE9aS53ZWVrZGF5cyxoPWkubW9udGhzLGM9ZnVuY3Rpb24odCxyLGkscyl7cmV0dXJuIHQmJih0W3JdfHx0KG4sZSkpfHxpW3JdLnN1YnN0cigwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBELnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9aS5tZXJpZGllbXx8ZnVuY3Rpb24odCxuLGUpe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gZT9yLnRvTG93ZXJDYXNlKCk6cn0sbD17WVk6U3RyaW5nKHRoaXMuJHkpLnNsaWNlKC0yKSxZWVlZOnRoaXMuJHksTTpvKzEsTU06RC5zKG8rMSwyLFwiMFwiKSxNTU06YyhpLm1vbnRoc1Nob3J0LG8saCwzKSxNTU1NOmhbb118fGgodGhpcyxlKSxEOnRoaXMuJEQsREQ6RC5zKHRoaXMuJEQsMixcIjBcIiksZDpTdHJpbmcodGhpcy4kVyksZGQ6YyhpLndlZWtkYXlzTWluLHRoaXMuJFcsYSwyKSxkZGQ6YyhpLndlZWtkYXlzU2hvcnQsdGhpcy4kVyxhLDMpLGRkZGQ6YVt0aGlzLiRXXSxIOlN0cmluZyhzKSxISDpELnMocywyLFwiMFwiKSxoOmQoMSksaGg6ZCgyKSxhOiQocyx1LCEwKSxBOiQocyx1LCExKSxtOlN0cmluZyh1KSxtbTpELnModSwyLFwiMFwiKSxzOlN0cmluZyh0aGlzLiRzKSxzczpELnModGhpcy4kcywyLFwiMFwiKSxTU1M6RC5zKHRoaXMuJG1zLDMsXCIwXCIpLFo6cn07cmV0dXJuIGUucmVwbGFjZShmLGZ1bmN0aW9uKHQsbil7cmV0dXJuIG58fGxbdF18fHIucmVwbGFjZShcIjpcIixcIlwiKX0pfSxkLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxkLmRpZmY9ZnVuY3Rpb24odCxoLGYpe3ZhciBjLGQ9RC5wKGgpLCQ9Zyh0KSxsPTZlNCooJC51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSxtPXRoaXMtJCx5PUQubSh0aGlzLCQpO3JldHVybiB5PShjPXt9LGNbYV09eS8xMixjW3VdPXksY1tvXT15LzMsY1tzXT0obS1sKS82MDQ4ZTUsY1tpXT0obS1sKS84NjRlNSxjW3JdPW0vMzZlNSxjW2VdPW0vNmU0LGNbbl09bS8xZTMsYylbZF18fG0sZj95OkQuYSh5KX0sZC5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKHUpLiREfSxkLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gbVt0aGlzLiRMXX0sZC5sb2NhbGU9ZnVuY3Rpb24odCxuKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgZT10aGlzLmNsb25lKCk7cmV0dXJuIGUuJEw9TSh0LG4sITApLGV9LGQuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gRC53KHRoaXMudG9EYXRlKCksdGhpcyl9LGQudG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMuJGQpfSxkLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvSVNPU3RyaW5nKCl9LGQudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxkLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sY30oKTtyZXR1cm4gZy5wcm90b3R5cGU9di5wcm90b3R5cGUsZy5leHRlbmQ9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdChuLHYsZyksZ30sZy5sb2NhbGU9TSxnLmlzRGF5anM9eSxnLnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIGcoMWUzKnQpfSxnLmVuPW1bbF0sZy5Mcz1tLGd9KTtcbiIsIiFmdW5jdGlvbihlLF8pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPV8ocmVxdWlyZShcImRheWpzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImRheWpzXCJdLF8pOmUuZGF5anNfbG9jYWxlX2phPV8oZS5kYXlqcyl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZT1lJiZlLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKT9lLmRlZmF1bHQ6ZTt2YXIgXz17bmFtZTpcImphXCIsd2Vla2RheXM6XCLml6Xmm5zml6Vf5pyI5puc5pelX+eBq+abnOaXpV/msLTmm5zml6Vf5pyo5puc5pelX+mHkeabnOaXpV/lnJ/mm5zml6VcIi5zcGxpdChcIl9cIiksd2Vla2RheXNTaG9ydDpcIuaXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcn1wiLnNwbGl0KFwiX1wiKSx3ZWVrZGF5c01pbjpcIuaXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcn1wiLnNwbGl0KFwiX1wiKSxtb250aHM6XCIx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciFwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKGUpe3JldHVybiBlK1wi5pelXCJ9LGZvcm1hdHM6e0xUOlwiSEg6bW1cIixMVFM6XCJISDptbTpzc1wiLEw6XCJZWVlZL01NL0REXCIsTEw6XCJZWVlZ5bm0TeaciETml6VcIixMTEw6XCJZWVlZ5bm0TeaciETml6UgSEg6bW1cIixMTExMOlwiWVlZWeW5tE3mnIhE5pelIGRkZGQgSEg6bW1cIixsOlwiWVlZWS9NTS9ERFwiLGxsOlwiWVlZWeW5tE3mnIhE5pelXCIsbGxsOlwiWVlZWeW5tE3mnIhE5pelIEhIOm1tXCIsbGxsbDpcIllZWVnlubRN5pyIROaXpShkZGQpIEhIOm1tXCJ9LG1lcmlkaWVtOmZ1bmN0aW9uKGUpe3JldHVybiBlPDEyP1wi5Y2I5YmNXCI6XCLljYjlvoxcIn0scmVsYXRpdmVUaW1lOntmdXR1cmU6XCIlc+W+jFwiLHBhc3Q6XCIlc+WJjVwiLHM6XCLmlbDnp5JcIixtOlwiMeWIhlwiLG1tOlwiJWTliIZcIixoOlwiMeaZgumWk1wiLGhoOlwiJWTmmYLplpNcIixkOlwiMeaXpVwiLGRkOlwiJWTml6VcIixNOlwiMeODtuaciFwiLE1NOlwiJWTjg7bmnIhcIix5OlwiMeW5tFwiLHl5OlwiJWTlubRcIn19O3JldHVybiBlLmxvY2FsZShfLG51bGwsITApLF99KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlld0xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDM1OWNhZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZXdMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzNTljYWYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlld0xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDM1OWNhZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWFwcFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiLCBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0ubW9kZSA9PT0gXCJ2aWV3XCJcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIF92bS5tb2RlID09PSBcInZpZXdcIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcIlZpZXdMaXN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfbGlzdDogX3ZtLm9yZGVyX2xpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3X2xpc3Q6IF92bS52aWV3X2xpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3RtX2xpc3Q6IF92bS5jc3RtX2xpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXB0X2xpc3Q6IF92bS5jbXB0X2xpc3RcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHJldmlldzogX3ZtLnJldmlldywgb3JkZXI6IF92bS5vcmRlciB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubW9kZSA9PT0gXCJvcmRlclwiID8gdm9pZCAwIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIm1haW5cIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICB7IGF0dHJzOiB7IFwiZ3JpZC1saXN0LXhzXCI6IFwiXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTRcIiB9LCBbX3ZtLl92KFwi6YOo5p2Q5rOo5paH44Oq44K544OIXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uY21wdF9saXN0XG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNFwiIH0sIFtfdm0uX3YoXCLmp4vmiJDjg6rjgrnjg4hcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jbXB0X2xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgeHMzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtdC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBpdGVtLCB2YWx1ZTogaXRlbSwgcm93OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmV2aWV3KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jbXB0X3NlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY21wdF9zZWxlY3QgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY21wdF9zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uY3N0bV9saXN0XG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCLmiYvphY3lhYhcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIHdyYXA6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jc3RtX2xpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgeHMzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtdC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJldmlldygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3N0bV9zZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNzdG1fc2VsZWN0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNzdG1fc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMSBkYXRhX3RhYmxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgaXRlbXM6IF92bS52aWV3X2xpc3QsXG4gICAgICAgICAgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb24sXG4gICAgICAgICAgXCJpdGVtLWtleVwiOiBcImlkXCIsXG4gICAgICAgICAgbG9hZGluZzogXCJ0cnVlXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInVwZGF0ZTpwYWdpbmF0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLnBhZ2luYXRpb24gPSAkZXZlbnRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ubGlzdGRhdGEuY250X21vZGVsKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5saXN0ZGF0YS5jbnRfb3JkZXJfY29kZSkpXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmNtcHQuY21wdF9jb2RlKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJyZXZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmNtcHQuY21wdF9yZXYubnVtVG9SZXYoKSkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJyZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmFzc3lfbnVtKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pdGVtLml0ZW1fY29kZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5pdGVtLml0ZW1fY29kZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbS5pdGVtLml0ZW1fY29kZSAhPT0gcHJvcHMuaXRlbS5pdGVtLm9yZGVyX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5pdGVtLm9yZGVyX2NvZGUpKV0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLml0ZW0uaXRlbV9tb2RlbCkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaXRlbS5pdGVtX25hbWUpKV0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ubnVtX29yZGVyKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlciB2ZW5kb3IgcGEtMFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgd3JhcDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHByb3BzLml0ZW0ucHJpY2UsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IFwidFwiICsgaW5kZXgsIGF0dHJzOiB7IHhzNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnZuYW1lLmNvbV9uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBcInZcIiArIGluZGV4LCBhdHRyczogeyB4czQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmljZSAqIHByb3BzLml0ZW0ubnVtX29yZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IFwiZFwiICsgaW5kZXgsIGF0dHJzOiB7IHhzNDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm9yZGVyX2RheSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWJvdHRvbS1uYXZcIixcbiAgICAgICAgeyBhdHRyczogeyBmaXhlZDogXCJcIiwgdmFsdWU6IFwidmFsdWVcIiwgXCJhY3RpdmUuc3luY1wiOiBcInZhbHVlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGZsYXQ6IFwiXCIsIGxpZ2h0OiBcIlwiLCB0bzogXCIvcHJvZHVjdF9saXN0XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuijvemAoOmggeOBuFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiZmFyIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiKV0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiwgbGlnaHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9yZGVyKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omL6YWNXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYXIgZmEtdGh1bWJzLXVwXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiLCBsaWdodDogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y+W5raIXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJmYXMgZmEtdHJhc2gtYWx0XCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL29yZGVyX2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhODc0MTNlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL29yZGVyX2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9vcmRlcl9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWE4NzQxM2VcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQXBwIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ29udGFpbmVyIH0gZnJvbSAndnVldGlmeS9saWInXG5pbnN0YWxsQ29tcG9uZW50cyhjb21wb25lbnQsIHtWQXBwLFZDb250YWluZXJ9KVxuXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdGhpcmQvd3d3L3RzZS1zZXJ2ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVhODc0MTNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVhODc0MTNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9vcmRlcl9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTg3NDEzZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YTg3NDEzZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3JkZXIvT3JkZXJMaXN0L29yZGVyX2xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlcl9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlcl9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlcl9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTg3NDEzZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdmlld0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzNTljYWYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ZpZXdMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmlld0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3ZpZXdMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzNTljYWYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDM1OWNhZjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogdnVldGlmeS1sb2FkZXIgKi9cbmltcG9ydCBpbnN0YWxsQ29tcG9uZW50cyBmcm9tIFwiIS9ob21lL3RoaXJkL3d3dy90c2Utc2VydmVyL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvcnVudGltZS9pbnN0YWxsQ29tcG9uZW50cy5qc1wiXG5pbXBvcnQgeyBWQm90dG9tTmF2IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQnRuIH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWQ2hlY2tib3ggfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZDb250YWluZXIgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZEYXRhVGFibGUgfSBmcm9tICd2dWV0aWZ5L2xpYidcbmltcG9ydCB7IFZGbGV4IH0gZnJvbSAndnVldGlmeS9saWInXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW1wb3J0IHsgVkxheW91dCB9IGZyb20gJ3Z1ZXRpZnkvbGliJ1xuaW5zdGFsbENvbXBvbmVudHMoY29tcG9uZW50LCB7VkJvdHRvbU5hdixWQnRuLFZDaGVja2JveCxWQ29udGFpbmVyLFZEYXRhVGFibGUsVkZsZXgsVkljb24sVkxheW91dH0pXG5cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS90aGlyZC93d3cvdHNlLXNlcnZlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDM1OWNhZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDM1OWNhZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3ZpZXdMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MzU5Y2FmMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MzU5Y2FmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3JkZXIvT3JkZXJMaXN0L3ZpZXdMaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlld0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZXdMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlld0xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDM1OWNhZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTctMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZXdMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzNTljYWYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWV3TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDM1OWNhZjImc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9
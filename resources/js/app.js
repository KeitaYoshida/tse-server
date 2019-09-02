/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

// window.Vue = require('vue');
import Vue from "vue";
import store from './store';

import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    secondary: colors.blue.base,
    accent: colors.amber.base
  }
});
// import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

// import VueHtmlToPaper from 'vue-html-to-paper';

// const options = {
//   name: '_blank',
//   specs: [
//     'fullscreen=yes',
//     'titlebar=yes',
//     'scrollbars=yes'
//   ],
//   styles: [
//     'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
//     'https://unpkg.com/kidlat-css/css/kidlat.css'
//   ]
// }
// Vue.use(VueHtmlToPaper, options);

// import VueHtml2Canvas from 'vue-html2canvas';

// Vue.use(VueHtml2Canvas);

// Vue-Router
import router from "./router";

Array.prototype.divide = function (n) {
  var ary = this;
  var idx = 0;
  var results = [];
  var length = ary.length;

  while (idx + n < length) {
    var result = ary.slice(idx, idx + n);
    results.push(result);
    idx = idx + n;
  }

  var rest = ary.slice(idx, length + 1);
  results.push(rest);
  return results;
};
String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
};
String.prototype.ltrim = function () {
  return this.replace(/^\s+/, "");
};
String.prototype.rtrim = function () {
  return this.replace(/\s+$/, "");
};
String.prototype.revToNum = function () {
  return this.replace("-", "").num();
};
String.prototype.num = function () {
  return Number(this);
};
String.prototype.minStr = function (num) {
  let s = this;
  if (s.length > num) {
    s = s.slice(0, num) + "…";
  }
  return s;
};
Number.prototype.numToRev = function () {
  let val = ("0000" + this).slice(-4);
  return val.slice(0, 2) + "-" + val.slice(2, 4);
};
Number.prototype.lotToText = function () {
  switch (this) {
    case -1:
      return "通常手配";
    case -2:
      return "支給品";
    default:
      return this;
  }
};
Number.prototype.comHyphen = function () {
  if (this === -1) {
    return "-";
  } else {
    return this;
  }
};


import html2pdf from "html2pdf.js";
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('make-comp', require('./components/MakeComp.vue').default);
Vue.component("tse-header", require("./components/TseHeader.vue").default);
Vue.mixin({
  methods: {
    wait(sec) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, sec * 1000);
        //setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
      });
    },
    reload(path) {
      this.$router.go({ path: path, force: true });
    },
    get__hiduke: () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      return year + "-" + month + "-" + day;
    },
    get__rev: num => {
      if (num === -1) {
        return "norev";
      } else {
        let val = ("0000" + num).slice(-4);
        return val.slice(0, 2) + "-" + val.slice(2, 4);
      }
    },
    get__chk: val => (val == -1 ? "-" : val),
    get__username: () => document.getElementById("username").innerText,
    get__workcode: function () {
      return this.get__hankaku(
        document.getElementById("kanri-no").innerText
      );
    },
    get__worktime: () => new Date(),
    get__orderway: (lot, mini) => {
      if (lot === -1) {
        return "通常手配";
      } else {
        return "LOT手配[" + lot + "個 (" + mini + " 以下で手配 )]";
      }
    },
    get__hankaku: str => {
      var hankaku = "";
      String(str)
        .split("")
        .forEach(function (s) {
          if (s == "ー" || s == "−") hankaku += "-";
          else if (s.match(/[Ａ-Ｚａ-ｚ０-９]/g) != null) {
            hankaku += String.fromCharCode(
              s.charCodeAt(0) - 0xfee0
            );
          } else {
            hankaku += s;
          }
        });
      return hankaku;
    },
    print__pdf: id => {
      let element = document.getElementById(id);
      let opt = {
        margin: 0,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          x: 0,
          y: 0,
          scrollX: 0,
          scrollY: 0
        }
      };
      let pdf = html2pdf()
        .from(element)
        .set(opt)
        .save();
    },
    rt__up_data_items(ob, item_id = false) {
      let post = {};
      ob.forEach(ar => {
        if (typeof ar.value === String) {
          if (ar.value === null) {
            ar.value = "";
          }
          post[ar.name] = ar.value.rtrim();
        } else {
          post[ar.name] = ar.value;
        }
      });
      if (item_id) {
        post["item_id"] = item_id;
      }
      return post;
    }
  }
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: "#app",
  store,
  router
});

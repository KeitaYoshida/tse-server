/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue'

import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    secondary: colors.blue.base,
    accent: colors.amber.base,
  }
});
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

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
import router from './router'

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
Vue.component('tse-header', require('./components/TseHeader.vue').default)
Vue.mixin({
  methods: {
    get__hiduke: () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      return year + '-' + month + '-' + day
    },
    get__rev: (num) => {
      if (num === -1) { return 'norev' }
      else {
        let val = ('0000' + num).slice(-4);
        return val.slice(0, 2) + '-' + val.slice(2, 4);
      }
    },
    get__chk: (val) => val == -1 ? '-' : val,
    get__username: () => document.getElementById('username').innerText,
    get__workcode: function () { return this.get__hankaku(document.getElementById('kanri-no').innerText) },
    get__worktime: () => new Date(),
    get__hankaku: (str) => {
      var hankaku = '';
      String(str).split('').forEach(function (s) {
        if (s == 'ー' || s == '−') hankaku += '-'
        else if (s.match(/[Ａ-Ｚａ-ｚ０-９]/g) != null) {
          hankaku += String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        }
        else {
          hankaku += s
        }
      });
      return hankaku;
    }
  },
})
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: '#app',
  router
});

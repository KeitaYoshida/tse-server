import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import '@fortawesome/fontawesome-free/css/all.css'

import home from '../components/HomeComponent.vue';
const item_list = () => import(/* webpackChunkName: "item_list" */ '../components/ItemList.vue');
const item_data = () => import(/* webpackChunkName: "item_data" */ '../components/ItemData.vue');
const vide_test = () => import(/* webpackChunkName: "vide_test" */ '../components/VideoTest.vue');
const equip_start_check = () => import(/* webpackChunkName: "equip_start_check" */ '../components/equipStartCheck.vue');
const est_kokuin = () => import(/* webpackChunkName: "est_kokuin" */ '../components/equipStartCheck/estKokuin.vue');
const petition_menu = () => import(/* webpackChunkName: "petition_menu" */ '../components/petition/menu.vue');

let Auth = {
  login: async function () {
    var rtval = false;
    await axios.get('http://' + location.host + "/userinfo").then(function (response) {
      if (response.data === "GUEST") {
        rtval = true;
      } else {
        rtval = false;
      }
    });
    return rtval;
  },
  logout: function () { this.loggedIn = false },
};

let router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: home,
  }, {
    path: '/item/:item_code/:item_rev',
    name: 'item_data',
    component: item_data,
  }, {
    path: '/work/equipStartCheck',
    name: 'work_equip_start_check',
    component: equip_start_check,
  }, {
    path: '/work/equipStartCheck/kokuin',
    name: 'est_kokuin',
    component: est_kokuin,
    meta: { requiresAuth: true }
  }, {
    path: '/data_table/:page_id',
    name: 'data_table',
    component: item_list,
  }, {
    path: '/petition',
    name: 'petition',
    component: petition_menu,
  }, {
    path: '/video_test',
    name: 'video_test',
    component: vide_test,
  }, {
    path: '/*',
    name: 'j-home',
    component: home,
  },],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    Auth.login().then(
      res => {
        if (res) {
          window.location.href = '/login'
        } else {
          next();
        }
      }
    )
  } else {
    next()
  }
})

export default router;


import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import "@fortawesome/fontawesome-free/css/all.css";

// import home from '../components/HomeComponent.vue';
const home = () => import(/* webpackChunkName: "home" */ "../components/HomeComponent.vue");
const item_list = () => import(/* webpackChunkName: "item_list" */ "../components/ItemList.vue");
const item_data = () => import(/* webpackChunkName: "item_data" */ "../components/ItemData.vue");
const readfile = () => import( /* webpackChunkName: "readfile" */ "../components/ReadFile/ReadFile.vue");
const equip_start_check = () => import( /* webpackChunkName: "equip_start_check" */ "../components/equipStartCheck.vue");
const est_kokuin = () => import( /* webpackChunkName: "est_kokuin" */ "../components/equipStartCheck/estKokuin.vue");
const petition_menu = () => import( /* webpackChunkName: "petition_menu" */ "../components/petition/menu.vue");
const petition_kyuka = () => import( /* webpackChunkName: "petition_kyuka" */ "../components/petition/Kyuka.vue");
const inventory = () => import( /* webpackChunkName: "inventory" */ "../components/Inventory/index.vue");
const model_mst = () => import( /* webpackChunkName: "model_mst" */ "../components/ModelMst/index.vue");
const cmpt_work_set = () => import(  /* webpackChunkName: "cmpt_work_set" */ "../components/ModelMst/WorkSet/cmpt.vue");
const recept_list = () => import( /* webpackChunkName: "recept_list" */ "../components/ReceptList/index.vue");
const product_list = () => import( /* webpackChunkName: "product_list" */ "../components/Product/index.vue");
const order = () => import( /* webpackChunkName: "order" */ "../components/Product/Tyumon/CmptOrderList.vue");
const user_info = () => import( /* webpackChunkName: "user_info" */ "../components/UserInfo/index.vue");
const order_list = () => import( /* webpackChunkName: "order_list" */ "../components/Order/OrderList/order_list.vue");
const ukeire = () => import(/* webpackChunkName: "order_list" */ "../components/Ukeire/ukeire.vue")
const tehaisaki = () => import(/* webpackChunkName: "tehaisaki" */ "../components/com/Tehaisaki.vue")
const process = () => import(/* webpackChunkName: "process" */ "../components/Process.vue");
const item_monitor = () => import(/* webpackChunkName: "item_monitor" */ "../components/com/ItemMonitorGet.vue");
const work = () => import(/* webpackChunkName: "work" */ "../components/Work/work.vue");
const iMonitor = () => import(/* webpackChunkName: "iMonitor" */ "@/components/monitor/monitor.vue");
const sumup = () => import(/* webpackChunkName: "sum_up" */ "@/components/sumup/sumup.vue");

let Auth = {
  login: async function () {
    var rtval = false;
    await axios
      .get("http://" + location.host + "/userinfo")
      .then(function (response) {
        if (response.data === "GUEST") {
          rtval = true;
        } else {
          rtval = false;
        }
      });
    return rtval;
  },
  logout: function () {
    this.loggedIn = false;
  }
};

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/item/:item_code/:item_rev",
      name: "item_data",
      component: item_data
    },
    {
      path: "/work/equipStartCheck",
      name: "work_equip_start_check",
      component: equip_start_check
    },
    {
      path: "/work/equipStartCheck/kokuin",
      name: "est_kokuin",
      component: est_kokuin,
      meta: { requiresAuth: true }
    },
    {
      path: "/data_table/:page_id/",
      name: "data_table",
      component: item_list
    },
    {
      path: "/petition",
      name: "petition",
      component: petition_menu
    },
    {
      path: "/petition/kyuka",
      name: "kyuka",
      component: petition_kyuka
    },
    {
      path: "/inventory",
      name: "inventory",
      component: inventory
    },
    {
      path: "/readfile",
      name: "readfile",
      component: readfile
    },
    {
      path: "/model_mst",
      name: "model_mst",
      component: model_mst
    },
    {
      path: "/model_mst/work_set/cmpt",
      name: "cmpt_work_set",
      component: cmpt_work_set
    },
    {
      path: "/recept_list",
      name: "recept_list",
      component: recept_list
    },
    {
      path: "/product_list",
      name: "product_list",
      component: product_list,
      meta: { requiresAuth: true }
    },
    {
      path: "/product_list/order/",
      name: "order",
      component: order,
      props: true
    },
    {
      path: "/order_list/:cnt_order_code",
      name: "order_list",
      component: order_list,
      meta: { requiresAuth: true }
    },
    {
      path: "/user_info",
      name: "user_info",
      component: user_info,
      meta: { requiresAuth: true }
    },
    {
      path: "/ukeire/:pid",
      name: "ukeire",
      component: ukeire,
      meta: { requiresAuth: true }
    },
    {
      path: "/tehaisaki",
      name: "tehaisaki",
      component: tehaisaki,
    },
    {
      path: "/process/:id",
      name: "process",
      component: process,
      meta: { requiresAuth: true },
    },
    {
      path: "/item_monitor/:work_id",
      name: "item_monitor",
      component: item_monitor,
      meta: { requiresAuth: true },
    },
    {
      path: "/work",
      name: "work",
      component: work,
      meta: { requiresAuth: true },
    },
    {
      path: "/sumup",
      name: "sumup",
      component: sumup,
      meta: { requiresAuth: true },
    },
    {
      path: "/item/monitor",
      name: "iMonitor",
      component: iMonitor,
      meta: { requiresAuth: true },
    },
    {
      path: "/*",
      name: "j-home",
      component: home
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    Auth.login().then(res => {
      if (res) {
        window.location.href = "/login";
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router;

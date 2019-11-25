import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import "@fortawesome/fontawesome-free/css/all.css";

// import home from '../components/HomeComponent.vue';
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
    routes: [{
            path: "/",
            name: "home",
            component: () => import( /* webpackChunkName: "home" */ "../components/HomeComponent.vue")
        },
        {
            path: "/item/:item_code/:item_rev",
            name: "item_data",
            component: () => import( /* webpackChunkName: "item_data" */ "../components/ItemData.vue")
        },
        {
            path: "/work/equipStartCheck",
            name: "work_equip_start_check",
            component: () => import( /* webpackChunkName: "equip_start_check" */ "../components/equipStartCheck.vue")
        },
        {
            path: "/work/equipStartCheck/kokuin",
            name: "est_kokuin",
            component: () => import( /* webpackChunkName: "est_kokuin" */ "../components/equipStartCheck/estKokuin.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/data_table/:page_id/",
            component: () => import( /* webpackChunkName: "item_list" */ "../components/ItemList.vue")
        },
        {
            path: "/petition",
            name: "petition",
            component: () => import( /* webpackChunkName: "petition_menu" */ "../components/petition/menu.vue")
        },
        {
            path: "/petition/kyuka",
            name: "kyuka",
            component: () => import( /* webpackChunkName: "petition_kyuka" */ "../components/petition/Kyuka.vue")
        },
        {
            path: "/readfile",
            name: "readfile",
            component: () => import( /* webpackChunkName: "readfile" */ "../components/ReadFile/ReadFile.vue")
        },
        {
            path: "/model_mst/:cmpt",
            name: "model_mst",
            component: () => import( /* webpackChunkName: "model_mst" */ "../components/ModelMst/index.vue")
        },
        {
            path: "/model_mst/work_set/cmpt",
            name: "cmpt_work_set",
            component: () => import( /* webpackChunkName: "cmpt_work_set" */ "../components/ModelMst/WorkSet/cmpt.vue")
        },
        {
            path: "/recept_list",
            name: "recept_list",
            component: () => import( /* webpackChunkName: "recept_list" */ "../components/ReceptList/index.vue")
        },
        {
            path: "/product_list",
            name: "product_list",
            component: () => import( /* webpackChunkName: "product_list" */ "../components/Product/index.vue"),
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/product_list/order/",
            name: "order",
            component: () => import( /* webpackChunkName: "order" */ "../components/Product/Tyumon/CmptOrderList.vue"),
            props: true
        },
        {
            path: "/order_list/:cnt_order_code",
            name: "order_list",
            component: () => import( /* webpackChunkName: "order_list" */ "../components/Order/OrderList/order_list.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/user_info",
            name: "user_info",
            component: () => import( /* webpackChunkName: "user_info" */ "../components/UserInfo/index.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/ukeire/:pid",
            name: "ukeire",
            component: () => import( /* webpackChunkName: "order_list" */ "../components/Ukeire/ukeire.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/tehaisaki",
            name: "tehaisaki",
            component: () => import( /* webpackChunkName: "tehaisaki" */ "../components/com/Tehaisaki.vue"),
        },
        {
            path: "/process/:id",
            name: "process",
            component: () => import( /* webpackChunkName: "process" */ "../components/Process.vue"),
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/item_monitor/:work_id",
            name: "item_monitor",
            component: () => import( /* webpackChunkName: "item_monitor" */ "../components/com/ItemMonitorGet.vue"),
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/work",
            name: "work",
            component: () => import( /* webpackChunkName: "work" */ "../components/Work/work.vue"),
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/sumup",
            name: "sumup",
            component: () => import( /* webpackChunkName: "sumup" */ "@/components/sumup/sumup.vue"),
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/sumup/fin",
            name: "sumup_fin",
            component: () => import( /* webpackChunkName: "sumup_fin" */ "@/components/sumup/fin.vue"),
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/sumup/history",
            name: "sumup_history",
            component: () => import( /* webpackChunkName: "sumup_history" */ "@/components/sumup/sumHistory.vue"),
            meta: {
                requiresAuth: true
            },
        }, {
            path: "/workinglist",
            name: "workinglist",
            component: () => import( /* webpackChunkName: "workinglist" */ "@/components/sumup/working.vue"),
            meta: {
                requiresAuth: true
            },
        }, {
            path: "/workingUseItem/:work_id",
            name: "workingUseItem",
            component: () => import( /* webpackChunkName: "workingUseItem" */ "@/components/sumup/workingUseItem.vue"),
            meta: {
                requiresAuth: true
            },
        }, {
            path: "/ichecker",
            name: "ichecker",
            component: () => import( /* webpackChunkName: "ichecker" */ "@/components/ichecker/ichecker.vue"),
            meta: {
                requiresAuth: true
            },
        }, {
            path: "/addlastitem",
            name: "addlastitem",
            component: () => import( /* webpackChunkName: "addlastitem" */ "@/components/addlastitem/addlastitem.vue"),
            meta: {
                requiresAuth: true
            },
        }, {
            path: "/inv/his/items/:date",
            name: "inv_history_date",
            component: () => import( /* webpackChunkName: "inv_history_date" */ "@/components/sumup/inv_history/items.vue"),
            meta: {
                requiresAuth: true
            },
        }, {
            path: "/inv/his/working/:date",
            name: "inv_history_working",
            component: () => import( /* webpackChunkName: "inv_history_working" */ "@/components/sumup/inv_history/working.vue"),
            meta: {
                requiresAuth: true
            },
        }, {
            path: "/inv/his/working/item/:date/:worklist_code",
            name: "inv_history_working_item",
            component: () => import( /* webpackChunkName: "inv_history_working_item" */ "@/components/sumup/inv_history/worklistItem.vue"),
            meta: {
                requiresAuth: true
            },
        }, {
            path: "/item/monitor",
            name: "iMonitor",
            component: () => import( /* webpackChunkName: "iMonitor" */ "@/components/monitor/monitor.vue"),
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/*",
            name: "j-home",
            component: () => import( /* webpackChunkName: "home" */ "../components/HomeComponent.vue")
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        };
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

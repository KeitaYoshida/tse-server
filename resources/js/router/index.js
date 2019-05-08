import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import example_component from '../components/ExampleComponent.vue'
import item_component from '../components/item/ItemComponent.vue'
import r_link from '../components/RouterLink.vue'

Vue.component('example-component', example_component)
Vue.component('item-component', item_component)
Vue.component('r-link', r_link)

import home from '../components/HomeComponent.vue'
import item_list from '../components/ItemList.vue'
import vide_test from '../components/VideoTest.vue'

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: home,
        meta: {
            name: 'ホーム',
            icon: 'home'
        }
    }, {
        path: '/data_table/:page_id',
        name: 'data_table',
        component: item_list,
        meta: {
            name: '部材リスト',
            icon: ''
        }
    }, {
        path: '/video_test',
        name: 'video_test',
        component: vide_test,
        meta: {
            name: '部材リスト',
            icon: ''
        }
    }, {
        path: '/admin/user',
        name: 'admin_user',
        component: item_list,
        meta: {
            name: '社員管理',
            icon: 'supervisor_account'
        }
    }, {
        path: '/*',
        name: 'j-home',
        component: home,
        meta: {
            name: 'ホーム',
            icon: 'home'
        }
    }, ]
})

import * as types from './mutation-types';

export const state = {
    message: 'hello vuex',
    user_info: {
        name: 'guest',
        id: null,
    },
    search: {
        item: null,
        model: null,
        user: null,
        modelconst: null,
        inventory: null,
    },
    works: {
        list: {
            days: null,
            process: null
        },
    },
    orders: {
        one: {
            id: null,
            code: null,
            data: null
        }
    },
    items: {
        iData: null,
        iClass: null
    },
    inventory: {
        status: null
    },
    target: {
        code: null,
        data: null,
        model: {
            id: null,
            rev: null,
            code: null,
            data: null
        },
        process: {
            base: null,
            info: null,
            serials: null,
            process: null,
            process_status: null,
            process_info: null,
            process_items: null,
        },
        component: {
            id: null,
            code: null,
            rev: null,
            data: null,
            search: {
                val: null,
                length: null,
                sync: {
                    page: 1,
                    rowsPerPage: 7,
                    sortBy: 'item_ren',
                    // descending: false,
                }
            }
        },
        product: {
            id: null,
            code: null,
            model: null,
            workdata: []
        },
        work: {
            id: null,
            name: null
        },
    }
};
export const mutations = {
    [types.MESSAGE_UPDATE](state) {
        state.message = "hello mutation";
    },
    [types.USER_INFO](state, payload) {
        if (payload === 'GUEST') return;
        state.user_info = payload;
    },
    [types.SEARCH_MODELCONST](state, payload) {
        state.search.modelconst = payload;
    },
    [types.SET_MODEL_COM](state, payload) {
        state.search.model = state.target.model.code = payload.code;
        state.target.model.id = payload.id;
        state.target.model.rev = payload.rev;
    },
    [types.SET_COMPONENT_COM](state, payload) {
        state.target.component.id = payload.id;
        state.target.component.code = payload.code;
        state.target.component.rev = payload.rev;
        state.target.component.data = payload.data;
    },
    [types.RESET_COMPONENT_COM](state) {
        state.target.component.id = null;
        state.target.component.code = null;
        state.target.component.rev = null;
        state.target.component.data = null;
    },
    [types.CMPT_SEARCH_VAL](state, payload) {
        state.target.component.search.val = payload;
    },
    [types.CMPT_SEARCH_LENGTH](state, payload) {
        state.target.component.search.length = payload;
    },
    [types.CMPT_SEARCH_PAGE_ADD](state) {
        state.target.component.search.sync.page += 1;
    },
    [types.CMPT_SEARCH_PAGE_BELOW](state) {
        state.target.component.search.sync.page -= 1;
    },
    [types.CMPT_SEARCH_SET_OBJECT](state, payload) {
        state.target.component.search = payload;
    },
    [types.WORK_ABOUT_SET](state, payload) {
        state.target.work.id = payload.id;
        state.target.work.name = payload.name;
    },
    [types.PDCT_ABOUT_SET](state, payload) {
        state.target.product.id = payload.id;
        state.target.product.model = payload.model;
        state.target.product.code = payload.code;
        state.target.product.workdata = payload.workdata;
    },
    [types.PROCESS_INIT](state, payload) {
        Object.keys(payload).forEach(key => {
            state.target.process[key] = payload[key];
        })
    },
    [types.PROCESS_SERIAL_INFO](state, payload) {
        state.target.process.process_info = payload;
    },
    [types.PROCESS_INFO](state, payload) {
        state.target.process.info = payload;
    },
    [types.PROCESS_STATUS_UPDATE](state, payload) {
        state.target.process.process_info[payload.num] = payload.upval;
    },
    [types.PROCESS_ITEMS_SET](state, payload) {
        state.target.process.process_items = payload;
        // console.log(payload);
    },
    [types.WORKS_INIT_DAY_PROCESS](state, payload) {
        state.works = payload;
    },
    [types.WORKS_EDIT_WORK_DAY](state, payload) {
        let tar = state.works.list.process.find(work => {
            return work.worklist_id === payload.id;
        });
        tar.st_day = payload.sday;
        tar.ed_day = payload.eday;
    },
    [types.ORDERS_ONE_INIT_SET](state, payload) {
        state.orders.one = payload;
    },
    [types.ITEMS_SET](state, payload) {
        state.items = Object.assign({}, state.items, payload);
    },
    [types.SEARCH_INVENTORY](state, payload) {
        state.search.inventory = payload;
    },
    [types.INVENTORY_SET](state, payload) {
        state.inventory = payload;
    }
}

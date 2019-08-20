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
    user: null
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
    state.target.product.code = payload.code;
    state.target.product.workdata = payload.workdata;
  }

}
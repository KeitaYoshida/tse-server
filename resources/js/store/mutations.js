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
    component: {
      model: null,
      rev: null,
      data: {}
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
  }
}
import * as types from './mutation-types';

export const SET_COMPONENT_COM = ({ commit }, cmpt) => {
  commit(types.SET_COMPONENT_COM, cmpt);
}
export const CMPT_SEARCH_VAL = ({ commit }, payload) => {
  commit(types.CMPT_SEARCH_VAL, payload);
}
export const CMPT_SEARCH_LENGTH = ({ commit }, payload) => {
  commit(types.CMPT_SEARCH_LENGTH, payload);
}
export const CMPT_SEARCH_PAGE_ADD = ({ commit }) => {
  commit(types.CMPT_SEARCH_PAGE_ADD);
}
export const CMPT_SEARCH_PAGE_BELOW = ({ commit }) => {
  commit(types.CMPT_SEARCH_PAGE_BELOW);
}
export const CMPT_SEARCH_RESET = ({ commit }) => {
  commit(types.CMPT_SEARCH_SET_OBJECT, {
    val: null,
    length: null,
    sync: {
      page: 1,
      rowsPerPage: 7,
      sortBy: 'item_ren',
      // descending: false,
    }
  }
  );
}
export const WORK_ABOUT_SET = ({ commit }, payload) => {
  commit(types.WORK_ABOUT_SET, payload);
}
export const WORK_ABOUT_RESET = ({ commit }) => {
  commit(types.WORK_ABOUT_SET, { id: null, name: null });
}

export const PDCT_ABOUT_SET = ({ commit }, payload) => {
  commit(types.PDCT_ABOUT_SET, payload);
}
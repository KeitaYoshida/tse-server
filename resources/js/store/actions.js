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

export const PROCESS_INIT = ({ commit }, payload) => {
  commit(types.PROCESS_INIT, payload);
}
export const PROCESS_SERIAL_INFO = ({ commit }, payload) => {
  commit(types.PROCESS_SERIAL_INFO, payload);
}
export const PROCESS_INFO = ({ commit }, payload) => {
  commit(types.PROCESS_INFO, payload);
}
export const PROCESS_STATUS_UPDATE = ({ commit }, payload) => {
  commit(types.PROCESS_STATUS_UPDATE, payload);
}
export const PROCESS_ITEMS_SET = ({ commit }, payload) => {
  commit(types.PROCESS_ITEMS_SET, payload);
}
export const WORKS_INIT_DAY_PROCESS = ({ commit }, payload) => {
  commit(types.WORKS_INIT_DAY_PROCESS, payload);
}
export const WORKS_EDIT_WORK_DAY = ({ commit }, payload) => {
  commit(types.WORKS_EDIT_WORK_DAY, payload);
}
export const SEARCH_MODELCONST = ({ commit }, payload) => {
  commit(types.SEARCH_MODELCONST, payload);
}
export const ORDERS_ONE_INIT_SET = ({ commit }, payload) => {
  commit(types.ORDERS_ONE_INIT_SET, payload);
}
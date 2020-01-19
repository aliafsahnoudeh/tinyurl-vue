import TinyUrlModel from "../../constants/tinyUrl";
const state = {
  newUrl: new TinyUrlModel("", "")
};

const getters = {
  newUrl: state => {
    return state.newUrl;
  }
};

const actions = {
  setTinyUrl({ commit }, newUrl) {
    commit(`SET_TINY_URL`, newUrl);
  }
};

const mutations = {
  SET_TINY_URL(state, newUrl) {
    state.newUrl = newUrl;
  }
};

export default {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

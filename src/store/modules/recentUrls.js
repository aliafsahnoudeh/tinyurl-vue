const state = {
  // If we don't use this, current changes on recent url on local storage wouldn't
  // be captured, vue-ls just handles other tabs's changes
  recentUrls: []
};

const getters = {
  recentUrls: state => {
    return state.recentUrls;
  }
};

const actions = {
  setRecentUrls({ commit }, recentUrls) {
    commit(`SET_RECENT_URLS`, recentUrls);
  }
};

const mutations = {
  SET_RECENT_URLS(state, urls) {
    state.recentUrls = urls;
  }
};

export default {
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};

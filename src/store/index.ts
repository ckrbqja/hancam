import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    accessToken:""
  },
  mutations: {
    setAccessToken (state, token) {
      state.accessToken = token
    }

  },
  actions: {},
  modules: {},
  getters: {},
  plugins:[createPersistedState()],
});

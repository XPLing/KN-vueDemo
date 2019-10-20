import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

function getStorage (key) {
  var data = localStorage.getItem('userInfo');
  try {
    data = data ? JSON.parse(data) : null;
  } catch (e) {
    console.error(e);
    localStorage.removeItem('userInfo');
    return null;
  }
  return data;
}

export default new Vuex.Store({
  state: {
    userInfo: getStorage('userInfo') || null
  },
  mutations: {
    signIn (state, data) {
      state.userInfo = Object.assign({}, state.userInfo, data);
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    },
    signUp (state) {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    }
  },
  getters: {
    userInfo (state) {
      return state.userInfo;
    }
  },
  actions: {},
  plugins: debug ? [createLogger()] : []
});

import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
    showContent: false,
    goodsList: [],
    size: 5,
  },
  mutations: {
    setSideList(state, list) {
      state.sideList = list;
    },
    changeShowContent(state, bool) {
      state.showContent = bool;
    },
    setGoodList(state, list) {
      state.goodsList = list;
    },
  },
  actions: {
    async setSideList({ commit }, type) {
      commit('changeShowContent', true);
      const value = await api.getsidebar(type);
      commit('setSideList', value);
      commit('changeShowContent', false);
    },
    async setGoodList({ state, commit }, options) {
    //   const value = await api.goodsList(options);
    //   console.log('value是啥', value);
    //   console.log('options是啥', options);
      const {
        type, page, sortType,
      } = options;

      const value = await api.getGoodsList(type, page, state.size, sortType);
      commit('setGoodList', [...state.goodsList, value]);
      console.log('成功拿到value的值', value);
    },
  },
  modules: {
  },
});

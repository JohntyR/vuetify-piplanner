import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: [
      {
        id: 1,
        title: 'BPayLoader',
      },
      {
        id: 2,
        title: 'NEWCAPP',
      },
    ],
  },
  mutations: {
    addFeature(state) {
      let numFeatures = state.features.length;
      let defaultFeature = {
        id: numFeatures + 1,
        title: 'placeholder',
      } 
      state.features.push(defaultFeature);
    },
  },
  actions: {
  },
  modules: {
  }
})

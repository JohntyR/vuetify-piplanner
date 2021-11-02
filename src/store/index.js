import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: [
      {
        id: 1,
        title: 'BPayLoader 1.6',
        tShirt: 50
      },
      {
        id: 2,
        title: 'NEWCAPP 2.1',
        tShirt: 100
      },
    ],
    numSprints: 5,
  },
  mutations: {
    addFeature(state) {
      let numFeatures = state.features.length;
      let defaultFeature = {
        id: numFeatures + 1,
        title: 'placeholder 1.0',
        tShirt: 50
      } 
      state.features.push(defaultFeature);
    },
    updateFeatureTitle(state, payload) {
      let feature = state.features.filter(feature => feature.id === payload.id)[0];
      feature.title = payload.title;
    },
    updateFeatureTShirt(state, payload) {
      let feature = state.features.filter(feature => feature.id === payload.id)[0];
      feature.tShirt = payload.tShirt;
    },
  },
  actions: {
  },
  modules: {
  }
})

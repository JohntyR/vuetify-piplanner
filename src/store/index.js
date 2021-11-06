import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: [
      {
        id: 1,
        title: 'BPayLoader 1.6',
        tShirt: 50,
        sprints: [
          {
            id: 1424201, //{feature num} + {sprint num to two decimal places}
            workItems: [
              { id: 12345, title: "Dev", icon: "mdi-xml", colour: "blue darken-4" }
            ],
          },
          {
            id: 102,
            workItems: [
              { id: 12346, title: "QA", icon: "mdi-bug-outline", colour: "teal darken-3" }
            ],
          },
        ]
      },
      {
        id: 2,
        title: 'NEWCAPP 2.1',
        tShirt: 100,
        sprints: [
          {
            id: 201,
            workItems: [
              { id: 1234567, title: "Dev", icon: "mdi-xml", colour: "blue darken-4" }
            ],
          },
          {
            id: 202,
            workItems: [
              { id: 1234568, title: "QA", icon: "mdi-bug-outline", colour: "teal darken-3" }
            ],
          },
        ]
      },
    ],
    numSprints: 5,
    workItems: [
      { id: 12347, title: "Dev", icon: "mdi-xml", colour: "blue darken-4" },
      { id: 12348, title: "QA", icon: "mdi-bug-outline", colour: "teal darken-3" },
      { id: 12349, title: "Dep", icon: "mdi-graph-outline", colour: "red darken-4" },
    ]
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
    updateWorkItems(state, payload) {
      state.workItems = payload
    },
    updateSprints(state, payload) {
      let feature = state.features.filter(feature => feature.id === payload.id)[0];
    },
    updateSprintWorkItems(state, sprintWorkItems, featureID, sprintID) {
      let feature = state.features.filter(feature => feature.id === featureID)[0];
      let sprint = feature.sprints.filter(sprint => sprint.id = sprintID)[0];
      sprint.workItems = sprintWorkItems
    }
  },
  actions: {
    updateFeatureSprints({ commit }, sprints) {
      commit('updateSprints', sprints)
    },
    updateSprintWorkItems({ commit }, payload) {
      console.log(payload.value, payload,featureid, payload.sprintID);
      // commit('udpateSprintWorkItems', sprintWorkItems, featureID, sprintID)
    }
  },
  getters: {
    getFeatureSprints: (state) => (featureID) => {
      let feature = state.features.filter(feature => feature.id === featureID)[0];
      return feature.sprints
    },
    getSprintWorkItems: (state) => (featureID, sprintID) => {
      let feature = state.features.filter(feature => feature.id === featureID)[0];
      let sprint = feature.sprints.filter(sprint => sprint.id === sprintID)[0];
      return sprint.workItems
    }
  },
  modules: {
  }
})

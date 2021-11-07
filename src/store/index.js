import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    features: [],
    numSprints: 5,
    sprintCapacities: [
      {ID: 91, Capacity: 15,},
      {ID: 92, Capacity: 20,},
      {ID: 93, Capacity: 19,},
      {ID: 94, Capacity: 17,},
      {ID: 95, Capacity: 22,},
    ],
    workItems: [
      { id: 12347, title: "Dev", icon: "mdi-xml", colour: "blue darken-4", estimate: null },
      { id: 12348, title: "QA", icon: "mdi-bug-outline", colour: "teal darken-3", estimate: null },
      { id: 12349, title: "Dep", icon: "mdi-graph-outline", colour: "red darken-4", estimate: null },
    ]
  },
  mutations: {
    addFeature(state) {
      let numFeatures = state.features.length;
      let defaultFeature = {
        id: numFeatures + 1,
        title: 'placeholder 1.0',
        tShirt: 50,
        sprints: []
      } 
      for (let i = 0; i < state.numSprints; i++) {
        let newSprint = {
          id: Date.now() * 10 + i,
          workItems: []
        }
        defaultFeature.sprints.push(newSprint)
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
    updateSprintWorkItems(state, payload) {
      let feature = state.features.filter(feature => feature.id === payload.featureID)[0];
      let sprint = feature.sprints.filter(sprint => sprint.id === payload.sprintID)[0];
      sprint.workItems = payload.value
    },
    deleteSprintWorkItem(state, payload) {
      let feature = state.features.filter(feature => feature.id === payload.featureID)[0];
      let sprint = feature.sprints.filter(sprint => sprint.id === payload.sprintID)[0];
      sprint.workItems = sprint.workItems.filter(workItem => workItem.id !== payload.workItemID)
    },
    updateWorkItemEstimate(state, payload) {
      let feature = state.features.filter(feature => feature.id === payload.featureID)[0];
      let sprint = feature.sprints.filter(sprint => sprint.id === payload.sprintID)[0];
      let workItem = sprint.workItems.filter(workItem => workItem.id === payload.workItemID)[0];
      workItem.estimate = payload.estimate
    }
  },
  actions: {
    updateFeatureSprints({ commit }, sprints) {
      commit('updateSprints', sprints)
    },
    updateSprintWorkItems({ commit }, payload) {
      commit('updateSprintWorkItems', payload)
    },
    deleteSprintWorkItems({ commit }, payload) {
      commit('deleteSprintWorkItem', payload)
    },
    updateWorkItemEstimate({ commit }, payload) {
      commit('updateWorkItemEstimate', payload)
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
    },
    getTemplateWorkItemIds: (state) => {
      return state.workItems.map(workItem => workItem.id)
    }
  },
  modules: {
  }
})

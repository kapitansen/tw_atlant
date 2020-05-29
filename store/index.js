import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = () => new Vuex.Store({
  state: {
    settings: {
      drawer: true,
      themeDark: true,
      projectsOn: true,
      newsOn: true
    },
    dashboard: {
      cards: [{
        _id: 1,
        title: 'Info',
        enabled: true,
        w: 300,
        h: 150,
        x: 20,
        y: 20,
        z: 2
      },
      {
        _id: 2,
        title: 'Timeline',
        enabled: true,
        w: 300,
        h: 150,
        x: 340,
        y: 20,
        z: 2
      },
      {
        _id: 3,
        title: 'History',
        enabled: true,
        w: 300,
        h: 150,
        x: 20,
        y: 190,
        z: 2
      },
      {
        _id: 4,
        title: 'Messages',
        enabled: true,
        w: 300,
        h: 150,
        x: 340,
        y: 190,
        z: 2
      },
      {
        _id: 5,
        title: 'Transactions',
        enabled: true,
        w: 300,
        h: 150,
        x: 20,
        y: 360,
        z: 2
      }]
    }
  },
  getters: {

  },
  mutations: {
    changeSettings: (state, newSettings) => {
      state.settings = newSettings
    },
    saveDashboard: (state, newDashboard) => {
      state.dashboard = newDashboard
    }
  },
  actions: {
    changeSettings ({ commit }, newSettings) {
      commit('changeSettings', newSettings)
    },
    saveDashboard ({ commit }, newDashboard) {
      commit('saveDashboard', newDashboard)
    }
  },
  strict: debug
})

export default store

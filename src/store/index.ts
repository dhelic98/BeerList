import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: []
  },
  mutations: {
    addBeers: (state, payload) => {
      state.beers.push(...payload)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getBeers: (state) => {
      return state.beers
    },
    getBeer: (state) => (id: number) => {
      return state.beers.find((el: any) => {
        return parseInt(el.id) === parseInt(id + '')
      })
    }
  },
  plugins: [createPersistedState()]
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: localStorage.getItem('darkMode') || false,
  },
  mutations: {
      TOGGLE_DARKMODE(state)
      {
          if (state.darkMode)
          {
              localStorage.removeItem('darkMode')
              state.darkMode = false
          }
          else {
              state.darkMode = true
              localStorage.setItem('darkMode', true)
          }
      }
  },
  actions: {
      toggleDarkMode({ commit }, payload)
      {
          commit('TOGGLE_DARKMODE', payload)
      }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    searchCountryValue: ''
  },
  mutations: {
    changeDarkMode (state) {
      state.darkMode = !state.darkMode;
    },

    changeSearchCountryValue (state, value) {
      state.searchCountryValue = value
    }

  },
  actions: {

  }
})

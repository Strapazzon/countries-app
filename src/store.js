import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import env from './environments'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    searchCountryValue: '',
    filterRegion: '',
    countries: Array,
    detailCountry: Object,
    bordersOfDetailCountry: Array
  },
  mutations: {
    changeDarkMode (state) {
      state.darkMode = !state.darkMode;
    },

    changeSearchCountryValue (state, value) {
      state.searchCountryValue = value
    },

    changeFilterRegion (state, value) {
      state.filterRegion = value
    },

    changeCountries (state, value) {
      state.countries = value
    },

    changeDetailCountry (state, value) {
      state.detailCountry = value
    },

    changeBordersOfDetailCountry(state,value) {
      state.bordersOfDetailCountry = value;
    }


  },
  actions: {

    fetchCountries(context, filter) {
      axios.get(`${env.URL_API}/${filter}`).then(response=>{
        context.commit('changeCountries', response.data)
      })
    },

    fetchDetailCountry(context, code) {
      axios.get(`${env.URL_API}/alpha/${code}`).then(response=>{
        context.commit('changeDetailCountry', response.data)
        context.dispatch('fetchBordersOfDetailCountry', response.data.borders)
      })
    },

    fetchBordersOfDetailCountry(context, codes) {
      if (!codes) return context.commit('changeBordersOfDetailCountry', []);

      axios.get(`${env.URL_API}/alpha?codes=${codes.toString().replace(/,/g, ';')}`).then(response=>{
        context.commit('changeBordersOfDetailCountry', response.data)
      })
    }

  }
})
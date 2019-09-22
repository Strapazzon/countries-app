
import axios from 'axios'
import env from '../environments'

export const actions = {

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
    if (!codes || !codes.length) return context.commit('changeBordersOfDetailCountry', []);
    
    axios.get(`${env.URL_API}/alpha?codes=${codes.toString().replace(/,/g, ';')}`).then(response=>{
      context.commit('changeBordersOfDetailCountry', response.data)
    })
  }

}
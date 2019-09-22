
export const mutations = {
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
}

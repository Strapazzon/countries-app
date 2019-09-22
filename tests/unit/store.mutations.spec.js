import { expect } from 'chai'
import { mutations } from '@/store/mutations'

const state = {
  darkMode: false,
  searchCountryValue: '',
  filterRegion: '',
  countries: [],
  detailCountry: {},
  bordersOfDetailCountry: []
}

describe('mutations', () => {
  it('State Mutation darkMode', () => {
    mutations.changeDarkMode(state)
    expect(state.darkMode).to.equal(true)
  })

  it('State Mutation searchCountryValue', () => {
    mutations.changeSearchCountryValue(state, 'Brasil')
    expect(state.searchCountryValue).to.equal('Brasil')
  })

  it('State Mutation filterRegion', () => {
    mutations.changeFilterRegion(state, 'Asia')
    expect(state.filterRegion).to.equal('Asia')
  })

  it('State Mutation countries', () => {
    const countries = [{"name":"Argentina","topLevelDomain":[".ar"],"alpha2Code":"AR","alpha3Code":"ARG"}]
    mutations.changeCountries(state, countries)
    expect(state.countries).to.equal(countries)
  })

  it('State Mutation detailCountry', () => {
    const country = {"name":"Argentina","topLevelDomain":[".ar"],"alpha2Code":"AR","alpha3Code":"ARG"}
    mutations.changeDetailCountry(state, country)
    expect(state.detailCountry).to.equal(country)
  })

  it('State Mutation bordersOfDetailCountry', () => {
    const countries = [{"name":"Argentina","topLevelDomain":[".ar"],"alpha2Code":"AR","alpha3Code":"ARG"}]
    mutations.changeBordersOfDetailCountry(state, countries)
    expect(state.bordersOfDetailCountry).to.equal(countries)
  })

  
})
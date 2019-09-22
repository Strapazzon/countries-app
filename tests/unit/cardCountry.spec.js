import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CardCountry from '@/components/cardCountry.vue';
import { COUNTRY } from './mocks/country';

describe('CardCountry.vue', () => {
  const wrapper = shallowMount(CardCountry, {
    propsData: {
      country: COUNTRY
    }
  })

  it('Create component', () => {
    const fieldName = wrapper.find('.name');
    expect(fieldName.text()).to.equal(COUNTRY.name)
  })

  it('InfoFields', () => {
    const infoFileds = wrapper.findAll('.infoField')
    expect(infoFileds.length).to.equal(3)
  })

  it('Emitted click', () => {
    const card = wrapper.find('.card')
    card.trigger('click')
    expect(wrapper.emitted('selected').length).to.equal(1)
  })
})


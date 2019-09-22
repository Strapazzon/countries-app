import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CustomSelect from '@/components/customSelect.vue';

const options = ['Asia', 'America', 'Oceania']; 

describe('CustomSelect.vue', () => {
  const wrapper = shallowMount(CustomSelect, {
    propsData: {
      options: options
    }
  })

  it('Open options', () => {
    const select = wrapper.find('.select-selected')
    select.trigger('click');
    expect(wrapper.find('.select-items').findAll('div').length).to.equal(4)
  })

  it('Click Option', () => {

    const elOptions = wrapper.find('.select-items').findAll('div')
    elOptions.at(3).trigger('click');
    expect(wrapper.emitted('input').length).to.equal(1)
  })
})

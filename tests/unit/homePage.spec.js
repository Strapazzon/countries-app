import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue';

describe('HomePage.vue', () => {
  it('Create component', () => {
    const wrapper = shallowMount(HomePage, {
    })
    expect(wrapper.text()).to.include('')
  })
})


import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/navBar.vue';

describe('NavBar.vue', () => {
  it('Create component', () => {
    const wrapper = shallowMount(NavBar, {
    })
    expect(wrapper.text()).to.include('Where in the wolrd?')
  })
})


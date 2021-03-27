import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Desktop from '@/components/desktop'

describe('Desktop.vue', () => {
  it('renders desktop', () => {
    const data = { active: true, frames: [] };
    const wrapper = shallowMount(Desktop, {
      props: { data: data }
    })
    
    expect(wrapper.find('.well-desktop').exists());
    expect(wrapper.findAll('.well-desktop').length).equal(1);
  })
})

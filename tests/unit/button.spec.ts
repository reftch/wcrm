import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button'

describe('Tests button component', () => {

  it('Test icon button', () => {
    const wrapper = shallowMount(Button, {
      props: {
        type: 'icon-only',
        icon: 'icon-custom'
      }
    });

    console.log(wrapper.html())  
    expect(wrapper.find('.well-btn').classes())
      .to
      .contain('well-btn-icon-only')
      .not
      .contain('well-btn-primary');

    expect(wrapper.find('.icon-custom').exists());

  });

})
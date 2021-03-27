import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Divider from '@/components/divider'

describe('Tests divider component', () => {

  it('Test vertical mode', () => {
    const wrapper = shallowMount(Divider, {
      props: {
        mode: 'vertical'
      }
    });

    expect(wrapper.find('.vertical').classes())
      .to
      .contain('vertical')
      .not
      .contain('horizontal');
  });

  it('Test horizonzal mode', () => {
    const wrapper = shallowMount(Divider, {
      props: {
        mode: 'horizontal'
      }
    });

    expect(wrapper.find('.horizontal').classes())
      .to
      .contain('horizontal')
      .not
      .contain('vertical');
  });

})
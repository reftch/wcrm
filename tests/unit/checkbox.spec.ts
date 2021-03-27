// import { expect } from 'chai'
// import { ref } from 'vue'
import { shallowMount } from '@vue/test-utils'
import Checkbox from '@/components/checkbox'

describe('Checkbox component', () => {

  it('General checkbox functionality', async () => {
		
    const wrapper = shallowMount(Checkbox, {
      // props: {
        // modelValue: checked
      // }
    });

    // wrapper
		// console.log(wrapper.html()) 
    // console.log(wrapper.props('modelValue'))
    // await (wrapper.find('input') as any).setChecked(true)
    // console.log(wrapper.find('input'))
    // checkbox.setChecked(true);
    

		// await wrapper.find('#checkbox').trigger('change')
    // expect(wrapper.find('.well-btn').classes())
    //   .to
    //   .contain('well-btn-icon-only')
    //   .not
    //   .contain('well-btn-primary');

    // expect(wrapper.find('.icon-custom').exists());

		console.log(wrapper.html())
		// console.log(checked.value)
  });

})
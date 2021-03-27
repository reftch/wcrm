import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import DesktopManagement from '@/components/desktop-management'
import Button from '@/components/button'

describe('DesktopManagement.vue', () => {
  const data = { desktops: [] };
  it('empty desktops', () => {
    const wrapper = shallowMount(DesktopManagement, {
      global: {
        stubs: {
          Button,
        }
      },
      props: { data }
    })
    
    const disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(3);
    expect(disabledButtons[0].find('icon-back').exists());
    expect(disabledButtons[1].find('icon-forward').exists());
    expect(disabledButtons[2].find('icon-trash').exists());
  })

  it('one desktop', () => {
    const data = { desktops: [ {active: true, frames: [] }] };
    const wrapper = shallowMount(DesktopManagement, {
      global: {
        stubs: {
          Button,
        }
      },
      props: { data }
    })
    
    const disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(2);
    expect(disabledButtons[0].find('icon-back').exists());
    expect(disabledButtons[1].find('icon-forward').exists());
  })

  it('two desktops, second is active', () => {
    const data = { desktops: [ {active: false, frames: []}, {active: true, frames: []}] };
    const wrapper = shallowMount(DesktopManagement, {
      global: {
        stubs: {
          Button,
        }
      },
      props: { data }
    })
    
    const disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(1);
    expect(disabledButtons[0].find('icon-forward').exists());
  })

  it('three desktops, first is active', () => {
    const data = { desktops: [ 
      {active: true, frames: []}, 
      {active: false, frames: []},
      {active: false, frames: []},
    ]};
    const wrapper = shallowMount(DesktopManagement, {
      global: {
        stubs: {
          Button,
        }
      },
      props: { data }
    })
    
    const disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(1);
    expect(disabledButtons[0].find('icon-back').exists());
  })

  it('three desktops, second is active', () => {
    const data = { desktops: [ 
      {active: false, frames: []}, 
      {active: true, frames: []},
      {active: false, frames: []},
    ]};
    const wrapper = shallowMount(DesktopManagement, {
      global: {
        stubs: {
          Button,
        }
      },
      props: { data }
    })
    
    const disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(0);
  })

  it('three desktops, management', async () => {
    const data = { desktops: [ 
      {active: true, frames: []}, 
      {active: false, frames: []},
      {active: false, frames: []},
    ]};
    const wrapper = shallowMount(DesktopManagement, {
      global: {
        stubs: {
          Button,
        }
      },
      props: { data }
    })
    
    let disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(1);
    expect(disabledButtons[0].find('icon-back').exists());

    await wrapper.find('#forward-btn').trigger('action')
    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(0);

    await wrapper.find('#forward-btn').trigger('action')
    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(1);
    expect(disabledButtons[0].find('icon-forward').exists());

    await wrapper.find('#back-btn').trigger('action')
    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(0);

    await wrapper.find('#back-btn').trigger('action')
    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(1);
    expect(disabledButtons[0].find('icon-back').exists());
  })

  it('CRUD desktops', async () => {
    const data = { desktops: []};
    const wrapper = shallowMount(DesktopManagement, {
      global: {
        stubs: {
          Button,
        }
      },
      props: { data }
    })
    
    let disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(3);
    expect(disabledButtons[0].find('icon-back').exists());
    expect(disabledButtons[1].find('icon-forward').exists());
    expect(disabledButtons[2].find('icon-trash').exists());

    // added first desktop
    await wrapper.find('#add-btn').trigger('action');

    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(2);
    expect(disabledButtons[0].find('icon-back').exists());
    expect(disabledButtons[1].find('icon-forward').exists());

    // added second desktop
    await wrapper.find('#add-btn').trigger('action');

    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(1);
    expect(disabledButtons[0].find('icon-forward').exists());

    // click back
    await wrapper.find('#back-btn').trigger('action')
    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(1);
    expect(disabledButtons[0].find('icon-back').exists());

    // remove first desktop
    await wrapper.find('#remove-btn').trigger('action')
    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(2);
    expect(disabledButtons[0].find('icon-back').exists());
    expect(disabledButtons[1].find('icon-forward').exists());

    // remove second desktop
    await wrapper.find('#remove-btn').trigger('action')
    disabledButtons = wrapper.findAll('.well-btn-disabled');
    expect(disabledButtons.length).equal(3);
    expect(disabledButtons[0].find('icon-back').exists());
    expect(disabledButtons[1].find('icon-forward').exists());
    expect(disabledButtons[2].find('icon-trash').exists());
  })

})

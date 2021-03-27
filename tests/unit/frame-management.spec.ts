import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import FrameManagement from '@/components/frame-management';
import Button from '@/components/button'
import { FrameProps } from '@/api';

describe('Frame management component', () => {

  // it('Overview test', () => {
  //   const data = { frames: [] };
  //   const wrapper = shallowMount(FrameManagement, {
  //     global: {
  //       stubs: {
  //         Button,
  //       }
  //     },
  //     props: { data }
  //   });

  //   expect(wrapper.find("#buttons-btn").exists());
  //   expect(wrapper.find("#divider-btn").exists());
  // });

  // it('Open frames', async () => {
  //   const data = { frames: [] };
  //   const wrapper = shallowMount(FrameManagement, {
  //     global: {
  //       stubs: {
  //         Button,
  //       }
  //     },
  //     props: { data }
  //   });

  //   expect(data.frames.length).equal(0);

  //   await wrapper.find('#buttons-btn').trigger('action');
  //   expect(data.frames.length).equal(1);
  //   expect((data.frames[0] as FrameProps).title).equal('Components');

  //   await wrapper.find('#divider-btn').trigger('action');
  //   expect(data.frames.length).equal(2);
  //   expect((data.frames[0] as FrameProps).title).equal('Components');
  //   expect((data.frames[1] as FrameProps).title).equal('Divider');
  // });

})
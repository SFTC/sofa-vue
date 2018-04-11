import { shallow, mount } from '@vue/test-utils';
import SofaButton from '@/button/index.js';
import sinon from 'sinon'

describe('button', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(SofaButton);
    expect(wrapper.find('.sofa-button'));
  });

  it('should show slot content', () => {
    const wrapper = mount(SofaButton, {
      slots: {
        default: ['美女']
      },
    });
    expect(wrapper.find('.sofa-button').html().indexOf('美女')).toBeGreaterThan(-1);
  });

  it('should trigger click event', () => {
    const wrapper = mount(SofaButton);
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  // it('should trigger click method', () => {
  //   const TestComponent = {
  //     template: `<sofa-button @click="clickHandler"/>`,
  //     props: ['clickHandler']
  //   };
  //   const clickHandler = sinon.stub();
  //   const wrapper = mount(TestComponent, {
  //     propsData: { clickHandler },
  //     stubs: {
  //       SofaButton
  //     }
  //   });
  //   wrapper.find(SofaButton).trigger('click');
  //   expect(clickHandler.calledOnce).toBe(true);
  // });
});

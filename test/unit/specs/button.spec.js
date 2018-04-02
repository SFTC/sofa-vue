import { shallow, mount } from '@vue/test-utils';
import Button from '@/button/index.js';

describe('button', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(Button);
    expect(wrapper.find('.sofa-button'));
  });

  it('should trigger click event', () => {
    const wrapper = mount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  })
});

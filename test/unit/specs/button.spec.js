import { shallow } from '@vue/test-utils';
import Button from '@/button/index.js';

describe('button', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(Button);
    expect(wrapper.find('.sofa-button'));
  });
});

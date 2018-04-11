import { shallow, mount } from '@vue/test-utils';
import SofaMessage from '@/message/index.js';
import sinon from 'sinon'

describe('message', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(SofaMessage);
    expect(wrapper.find('.sofa-message'));
  });
});

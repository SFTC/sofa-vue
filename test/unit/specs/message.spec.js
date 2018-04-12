import { shallow, mount } from '@vue/test-utils';
import SofaMessage from '@/message/index.js';
import SofaMessageComponents from '@/message/src/main.vue';
import sinon from 'sinon'

describe('message', () => {

  it('creat a messgae', () => {
    const wrapper = mount(SofaMessageComponents);
    expect(wrapper.find('.sofa-message'));
  });

  it('user close all message', () => {
    const closeHandler1 = sinon.stub();
    const closeHandler2 = sinon.stub();
    
    SofaMessage({
      message: '我是一个测试用例哈哈哈',
      duration: 0,
      onClose: closeHandler1,
    });
    SofaMessage({
      message: '我是另外一个测试用例呵呵呵',
      duration: 0,
      onClose: closeHandler2,
    });

    SofaMessage.closeAll();
    expect(closeHandler1.called).toBe(true);
    expect(closeHandler2.called).toBe(true);
  });
  it('user close all message', () => {
    SofaMessage.success('我是一个测试用例哈哈哈');
    SofaMessage.success({ message: '我是一个测试用例哈哈哈'});
  });
  it('user close all message', () => {
    SofaMessage();
  });
  
});

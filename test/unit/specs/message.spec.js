import { shallow, mount } from '@vue/test-utils';
import SofaMessage from '@/message/index.js';
import sinon from 'sinon'

describe('message', () => {

  it('creat a messgae', () => {
    SofaMessage('我是一个测试用例哈哈哈');
    expect(document.querySelector('.sofa-message'));
    // const wrapper = mount(SofaMessage);
    // expect(wrapper.find('.sofa-message'));
  });

  // it('create with type', () => {
  //   SofaMessage({
  //     message: '我是一个成功的测试用例哈哈哈',
  //     type: 'success',
  //   });
  //   setTimeout(() => {
  //     expect(document.querySelector('.sofa-message').classList.contains('sofa-message--success')).toBe(true);
  //   }, 100);
  // });

  // it('message custom icon', () => {
  //   SofaMessage({
  //     message: '我是icon',
  //     iconClass: 'sofa-icon-close'
  //   });
  //   setTimeout(() => {
  //     const icon = document.querySelector('.el-message i');
  //     expect(icon.classList.contains('sofa-icon-close')).toBe(true);
  //   }, 100);
  // });

  // it('html string', () => {
  //   SofaMessage({
  //     message: '<strong>危险的东西</strong>',
  //     dangerouslyUseHTMLString: true,
  //   });
  //   const message = document.querySelector('.sofa-message strong');
  //   expect(message.textContent).toBe('危险的东西');
  // });

  // it('create with style center', () => {
  //   SofaMessage({
  //     message: '我是一个居中的测试用例',
  //     center: true,
  //     duration: 0,
  //   });
  //   setTimeout(() => {
  //     expect(document.querySelector('.sofa-message').classList.contains('is-center')).toBe(true);
  //   }, 100);
  // });

  it('normal close messgae', () => {
    SofaMessage('我是一个测试用例哈哈哈,用来测试它自己消失的');
    setTimeout(() => {
      expect(document.querySelector('.sofa-message').exists()).toBe(false);
    }, 3000);
  });

  it('user close a messgae', () => {
    SofaMessage({
      message: '我是一个测试用例哈哈哈，用来测试被用户点击了消失的',
      showClose: true,
    });
    setTimeout(() => {
      document.querySelector('.sofa-message__closeBtn').click();
      setTimeout(() => {
        expect(document.querySelector('.sofa-message').exists()).toBe(false);
      }, 200);
    }, 200);
  });

  it('user close all message', () => {
    SofaMessage({
      message: '我是一个测试用例哈哈哈',
      duration: 0,
    });
    SofaMessage({
      message: '我是另外一个测试用例呵呵呵',
      duration: 0,
    });
    setTimeout(() => {
      SofaMessage.closeAll();
      setTimeout(() => {
        expect(document.querySelector('.sofa-message').exists()).toBe(false);
      }, 500);
    }, 500);
  });

  // it('reset timer', () => {
  //   SofaMessage({
  //     message: '鼠标悬浮会不会重置计数器',
  //     duration: 400,
  //   });
  //   setTimeout(() => {
  //     triggerEvent(document.querySelector('.sofa-message'), 'mouseenter');
  //     setTimeout(() => {
  //       expect(document.querySelector('.sofa-message').exists()).toBe(true);
  //     }, 700);
  //   }, 200);
  // });
});

function triggerEvent(elm, name, ...opts) {
  let eventName;
  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);
  return elm;
};
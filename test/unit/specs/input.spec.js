import { shallow, mount } from '@vue/test-utils';
import SofaInput from '@/input/index.js';
import sinon from 'sinon'

describe('input', () => {
  it('should create correctly', () => {
    const TestComponent = {
      template: `<sofa-input
        value='123456'
        placeholder='请输入内容'
      />`
    };

    const wrapper = mount(TestComponent, {
      stubs: {
        SofaInput
      }
    });

    expect(wrapper.find('.sofa-input input').element.value).toBe('123456')
    expect(wrapper.find('.sofa-input input').attributes().placeholder).toBe('请输入内容');
  });

  it('should disabled', () => {
    const wrapper = mount(SofaInput, {
      propsData: {
        disabled: true,
      }
    })
    expect(wrapper.find('.sofa-input input').attributes().disabled).toBe('disabled')
  })

  it('should clearable', () => {
    const TestComponent = {
      template: `<sofa-input
        placeholder="请输入内容"
        clearable
        value="123456"
        @clear="clearHandler"
      />`,
      props: [
        'clearHandler'
      ]
    };

    const clearHandler = sinon.stub();
    const wrapper = mount(TestComponent, {
      propsData: {
        clearHandler,
      },
      stubs: {
        SofaInput
      }
    });
    // focus to show clear button
    wrapper.find('.sofa-input input').trigger('focus');
    expect(wrapper.find('.sofa-input .sofa-icon-close').exists()).toBe(true)
    wrapper.find('.sofa-input .sofa-icon-close').trigger('click')
    expect(clearHandler.calledOnce).toBe(true)
  })

  it('should trigger event handler', () => {
    const TestComponent = {
      template: `<sofa-input
        @input="inputHandler"
        @blur="blurHandler"
        @focus="focusHandler"
        @change="changeHandler"
      />`,
      props: [
        'inputHandler',
        'blurHandler',
        'focusHandler',
        'changeHandler'
      ]
    };

    const inputHandler = sinon.stub();
    const blurHandler = sinon.stub();
    const focusHandler = sinon.stub();
    const changeHandler = sinon.stub();

    const wrapper = mount(TestComponent, {
      propsData: { 
        inputHandler, blurHandler, focusHandler, changeHandler
      },
      stubs: {
        SofaInput
      }
    });

    wrapper.find('.sofa-input input').trigger('input');
    wrapper.find('.sofa-input input').trigger('blur');
    wrapper.find('.sofa-input input').trigger('focus');
    wrapper.find('.sofa-input input').trigger('change');

    expect(inputHandler.calledOnce).toBe(true);
    expect(blurHandler.calledOnce).toBe(true);
    expect(focusHandler.calledOnce).toBe(true);
    expect(changeHandler.calledOnce).toBe(true);
  })
});

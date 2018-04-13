import { shallow, mount } from '@vue/test-utils';
import SofaCheckbox from '@/checkbox/index.js';
import sinon from 'sinon'

describe('checkbox', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(SofaCheckbox);
    expect(wrapper.find('.sofa-checkbox'));
  });
  it('should show slot content', () => {
    const wrapper = mount(SofaCheckbox, {
      slots: {
        default: '备选项'
      },
    });
    expect(wrapper.find('.sofa-checkbox').html().indexOf('备选项')).toBeGreaterThan(-1);
  });
  it('渲染正确的标记', () => {
    const wrapper = mount(SofaCheckbox);
    expect(wrapper.contains('span')).toBe(true);
    expect(wrapper.contains('input')).toBe(true);
  });
  it('should disabled', () => {
    const wrapper = mount(SofaCheckbox, {
      propsData: {
        disabled: true,
      }
    })
    expect(wrapper.find('.sofa-checkbox input').attributes().disabled).toBe('disabled')
  });
  it('should trigger focus event', () => {
    const wrapper = mount(SofaCheckbox);
    const input = wrapper.find('input');
    input.trigger('focus');
    expect(wrapper.vm.focus).toBe(true);
  });

  it('should trigger blur event', () => {
    const wrapper = mount(SofaCheckbox);
    const input = wrapper.find('input');
    input.trigger('blur');
    expect(wrapper.vm.focus).toBe(false);
  });
  it('should trigger change event', () => {
    const wrapper = mount(SofaCheckbox, {
      propsData: {
        value: '1',
      }
    });
    const input = wrapper.find('input');
    input.trigger('change');
    expect(wrapper.vm.model).toBe('1');
  });
  it('should trigger change method', (done) => {
    const TestComponent = {
      template: `<sofa-checkbox @change="changeHandler"/>`,
      props: ['changeHandler']
    };
    const changeHandler = sinon.stub();
    const wrapper = mount(TestComponent, {
      propsData: {
        changeHandler,
        value: '1',
      },
      stubs: {
        SofaCheckbox,
      }
    });
    wrapper.find('input').trigger('change');
    setTimeout(() => {
      expect(changeHandler.calledOnce).toBe(true);
      done();
    }, 1000);
  });
  it('true false label', () => {
    const TestComponent = {
      template: `<sofa-checkbox @change="clickHandler"></sofa-checkbox>`,
      props: ['clickHandler']
    };
    const clickHandler = sinon.stub();
    const wrapper = mount(TestComponent, {
      propsData: {
        clickHandler,
        trueLabel: 'a',
        falseLabel: 'b',
        checked: 'a'
      },
      stubs: {
        SofaCheckbox
      }
    });
    wrapper.find('.sofa-checkbox input').trigger('click');
    expect(wrapper.props().checked).toBe('a');
  });
  it('indeterminate', () => {
    const wrapper = mount(SofaCheckbox, {
      propsData: {
        indeterminate: true,
      }
    });
    // console.log(wrapper.props().indeterminate);
    expect(wrapper.props().indeterminate).toBe(true);
  });
  it('checked', () => {
    const wrapper = mount(SofaCheckbox, {
      propsData: {
        checked: true,
      }
    });
    expect(wrapper.props().checked).toBe(true);
  });
});

import { shallow, mount } from '@vue/test-utils';
import SofaRadio from '@/radio/index.js';
import sinon from 'sinon'

describe('radio', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(SofaRadio);
    expect(wrapper.find('.sofa-radio'));
  });

  it('should show slot content', () => {
    const wrapper = mount(SofaRadio, {
      slots: {
        default: ['单选']
      },
    });
    expect(wrapper.find('.sofa-radio').html().indexOf('单选')).toBeGreaterThan(-1);
  });

  it('check name, data, props', () => {
    const wrapper = mount(SofaRadio, {
      propsData: {
        value: '1',
        label: '1',
        disabled: true,
        name: 'test',
      }
    });
    wrapper.setData({ focus: true });
    expect(wrapper.vm.focus).toBe(true);
    expect(wrapper.name()).toBe('SofaRadio');
    expect(wrapper.props().value).toBe('1');
    expect(wrapper.props().label).toBe('1');
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().name).toBe('test');
  });

  // 测试组件渲染出来的html

  it('渲染正确的标记', () => {
    const wrapper = mount(SofaRadio);
    expect(wrapper.contains('span')).toBe(true);
    expect(wrapper.contains('input')).toBe(true);
  });

  // 模拟用户交互
  it('should trigger focus event', () => {
    const wrapper = mount(SofaRadio);
    const input = wrapper.find('input');
    input.trigger('focus');
    expect(wrapper.vm.focus).toBe(true);
  });

  it('should trigger blur event', () => {
    const wrapper = mount(SofaRadio);
    const input = wrapper.find('input');
    input.trigger('blur');
    expect(wrapper.vm.focus).toBe(false);
  });

  it('should trigger change event', () => {
    const wrapper = mount(SofaRadio, {
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
      template: `<sofa-radio @change="changeHandler"/>`,
      props: ['changeHandler']
    };
    const changeHandler = sinon.stub();
    const wrapper = mount(TestComponent, {
      propsData: {
        changeHandler,
        value: '1',
      },
      stubs: {
        SofaRadio
      }
    });
    wrapper.find('input').trigger('change');
    setTimeout(() => {
      expect(changeHandler.calledOnce).toBe(true);
      done();
    }, 1000);
  });
});

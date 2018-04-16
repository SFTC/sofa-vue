import { shallow, mount } from '@vue/test-utils';
import SofaDialog from '@/dialog/index.js';
import sinon from 'sinon'

describe('dialog', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(SofaDialog);
    expect(wrapper.find('.container'));
    expect(wrapper.find('.modal'));
  });

  it('check title, visible', () => {
    const wrapper = mount(SofaDialog, {
      propsData: {
        title: 'test',
        visible: true,
      }
    });
    expect(wrapper.props().title).toBe('test');
    expect(wrapper.props().visible).toBe(true);
  });

  // 测试组件渲染出来的html

  it('渲染正确的标记', () => {
    const wrapper = mount(SofaDialog, {
      propsData: {
        title: 'test',
        visible: true,
      }
    });
    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.contains('span')).toBe(true);
  });

  // 模拟用户交互

  it('should trigger click event', () => {
    const wrapper = mount(SofaDialog, {
      propsData: {
        title: 'test',
        visible: true,
      }
    });
    const button = wrapper.find('.close_button');
    button.trigger('click');
    expect(wrapper.vm.visible).toBe(true);
  });

  it('should trigger click event', () => {
    const wrapper = mount(SofaDialog, {
      propsData: {
        title: 'test',
        visible: true,
      }
    });
    const modal = wrapper.find('.modal');
    modal.trigger('click');
    expect(wrapper.vm.visible).toBe(true);
  });
});

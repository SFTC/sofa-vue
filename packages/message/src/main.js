import Vue from 'vue';
import Main from './main.vue';

const MessageConstructor = Vue.extend(Main);
const instances = [];
let instance;
let idIndex = 1;
let nowzIndex = 2000;

const Message = (options) => {
  if (Vue.prototype.$isServer) return;
  this.options = options || {};
  if (typeof this.options === 'string') {
    this.options = {
      message: options,
    };
  }
  const userOnClose = options.onClose;
  const id = idIndex;
  idIndex += 1;
  this.options.onClose = () => {
    Message.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options,
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = nowzIndex;
  nowzIndex += 1;
  instances.push(instance);
};

['success', 'warning', 'info', 'error'].forEach((type) => {
  Message[type] = (options) => {
    if (typeof options === 'string') {
      this.options = {
        message: options,
      };
    }
    this.options.type = type;
    return Message(options);
  };
});

Message.close = (id, userOnClose) => {
  for (let i = 0, len = instances.length; i < len; i += 1) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

Message.closeAll = () => {
  for (let i = instances.length - 1; i >= 0; i -= 1) {
    instances[i].close();
  }
};

Vue.prototype.$message = Message;
export default Message;

import Vue from 'vue';
import Main from './main.vue';

const MessageConstructor = Vue.extend(Main);
const messageInstances = [];
let messageInstance;
let idIndex = 1;
let nowzIndex = 2000;

const Message = (options) => {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  const userOnClose = options.onClose;
  const id = idIndex;
  idIndex += 1;
  options.onClose = () => {
    Message.close(id, userOnClose);
  };
  messageInstance = new MessageConstructor({
    data: options,
  });
  messageInstance.id = id;
  messageInstance.vm = messageInstance.$mount();
  document.body.appendChild(messageInstance.vm.$el);
  messageInstance.vm.visible = true;
  messageInstance.dom = messageInstance.vm.$el;
  messageInstance.dom.style.zIndex = nowzIndex;
  nowzIndex += 1;
  messageInstances.push(messageInstance);
};

['success', 'warning', 'info', 'error'].forEach((type) => {
  Message[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }
    options.type = type;
    return Message(options);
  };
});

Message.close = (id, userOnClose) => {
  for (let i = 0, len = messageInstances.length; i < len; i += 1) {
    if (id === messageInstances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(messageInstances[i]);
      }
      messageInstances.splice(i, 1);
      break;
    }
  }
};

Message.closeAll = () => {
  for (let i = messageInstances.length - 1; i >= 0; i -= 1) {
    messageInstances[i].close();
  }
};

Vue.prototype.$message = Message;
export default Message;

import SofaMessage from './src/main.js';

/* istanbul ignore next */
SofaMessage.install = (Vue) => {
  Vue.component(SofaMessage.name, SofaMessage);
};

export default SofaMessage;

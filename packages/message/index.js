import SofaMessage from './src/main';

/* istanbul ignore next */
SofaMessage.install = (Vue) => {
  Vue.component(SofaMessage.name, SofaMessage);
};

export default SofaMessage;

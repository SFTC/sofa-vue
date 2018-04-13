import SofaMessage from './src/messageMain';

/* istanbul ignore next */
SofaMessage.install = (Vue) => {
  Vue.component(SofaMessage.name, SofaMessage);
};

export default SofaMessage;

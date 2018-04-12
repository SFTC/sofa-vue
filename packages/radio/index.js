import SofaRadio from './src/main';

/* istanbul ignore next */
SofaRadio.install = (Vue) => {
  Vue.component(SofaRadio.name, SofaRadio);
};

export default SofaRadio;

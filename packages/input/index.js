import SofaInput from './src/main';

/* istanbul ignore next */
SofaInput.install = (Vue) => {
  Vue.component(SofaInput.name, SofaInput);
};

export default SofaInput;

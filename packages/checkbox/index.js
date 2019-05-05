import SofaCheckbox from './src/main';

/* istanbul ignore next */
SofaCheckbox.install = (Vue) => {
  Vue.component(SofaCheckbox.name, SofaCheckbox);
};

export default SofaCheckbox;

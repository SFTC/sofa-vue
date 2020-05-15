import SofaDialog from './src/main';

/* istanbul ignore next */
SofaDialog.install = (Vue) => {
  Vue.component(SofaDialog.name, SofaDialog);
};

export default SofaDialog;

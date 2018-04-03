import Button from './src/main';

/* istanbul ignore next */
Button.install = (Vue) => {
  Vue.component(Button.name, Button);
};

export default Button;

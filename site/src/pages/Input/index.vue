<template>
  <div>
    <comp-show-container>
      <sofa-input
        v-model="value"
        placeholder="请输入内容"
        clearable
        @input="handlerInput"
        @blur="handleBlur"
        @focus="handlerFocus"
        @change="handleChange"
        @clear="handleClear"
      >测试一下</sofa-input>
    </comp-show-container>
  </div>
</template>

<script>
import SofaInput from 'packages/input';
import CompShowContainer from '../../components/CompShowContainer';

export default {
  name: 'InputPage',
  components: {
    SofaInput,
    CompShowContainer,
  },
  data() {
    return {
      value: '123',
    };
  },
  methods: {
    handlerInput() {
      // eslint-disable-next-line
      console.log('input');
    },
    handleBlur() {
      // eslint-disable-next-line
      console.log('blur');
    },
    handlerFocus() {
      // eslint-disable-next-line
      console.log('focus');
    },
    handleChange() {
      // eslint-disable-next-line
      console.log('change');
    },
    handleClear() {
      // eslint-disable-next-line
      console.log('clear');
    }
  },
};
</script>

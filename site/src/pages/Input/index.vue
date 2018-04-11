<template>
  <div>
    <comp-show-container>
      <sofa-input 
        v-model="value"
        placeholder="请输入内容"
        @input="handlerInput"
        @blur="handleBlur"
        @focus="handlerFocus"
        @change="handleChange"
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
      console.log('input')
    },
    handleBlur() {
      console.log('blur')
    },
    handlerFocus() {
      console.log('focus')
    },
    handleChange() {
      console.log('change')
    }
  }
};
</script>

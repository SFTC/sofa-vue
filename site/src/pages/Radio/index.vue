<template>
  <div>
    <comp-show-container>
      <sofa-radio v-model="radio1" label="male">male</sofa-radio>
      <sofa-radio v-model="radio1" label="female">female</sofa-radio>
    </comp-show-container>

    <comp-show-container>
      <sofa-radio v-model="radio2" label="1" :disabled="true">male</sofa-radio>
      <sofa-radio v-model="radio2" label="2" :disabled="true">female</sofa-radio>
    </comp-show-container>
  </div>
</template>

<script>
import SofaRadio from 'packages/radio';
import CompShowContainer from '../../components/CompShowContainer';

export default {
  name: 'ButtonPage',
  components: {
    CompShowContainer,
    SofaRadio,
  },
  data() {
    return {
      radio1: 'male',
      radio2: '1',
    };
  },
};
</script>

<style lang="scss">
</style>

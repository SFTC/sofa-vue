<template>
  <div>
    <comp-show-container>
      <sofa-checkbox>可选</sofa-checkbox>
      <sofa-checkbox disabled>不可选</sofa-checkbox>
    </comp-show-container>
    <comp-show-container>
      <sofa-checkbox v-model="checked">已选</sofa-checkbox>
      <sofa-checkbox v-model="unchecked">未选</sofa-checkbox>
    </comp-show-container>
  </div>
</template>

<script>
import SofaCheckbox from 'packages/checkbox';
import CompShowContainer from '../../components/CompShowContainer';

export default {
  name: 'CheckboxPage',
  components: {
    SofaCheckbox,
    CompShowContainer,
  },
  data() {
    return {
      checked: true,
      unchecked: false,
      isIndeterminate: true,
    };
  },
};
</script>

<style lang="scss">
  .buttons {
    .sofa-checkbox {
      display: block;
      margin: 5px 0;
    }
  }
</style>

<template>
  <div>
    <!-- <comp-show-container>
      <sofa-button type="primary" size="small">测试一下</sofa-button>
    </comp-show-container>

    <comp-show-container>
      <sofa-button type="danger" size="small">测试一下</sofa-button>
    </comp-show-container> -->

    <comp-show-container>
      <div class="buttons">
        <sofa-button type="primary" size="mini">测试一下</sofa-button>
        <sofa-button type="primary" size="small">测试一下</sofa-button>
        <sofa-button type="primary" size="medium">测试一下</sofa-button>
        <sofa-button type="primary">测试一下</sofa-button>
      </div>
    </comp-show-container>
  </div>
</template>

<script>
import SofaButton from 'packages/button';
import CompShowContainer from '../../components/CompShowContainer';

export default {
  name: 'ButtonPage',
  components: {
    SofaButton,
    CompShowContainer,
  },
};
</script>

<style lang="scss">
  .buttons {
    .sofa-button {
      display: block;
      margin: 5px 0;
    }
  }
</style>

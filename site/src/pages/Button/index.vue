<template>
  <div>
    <comp-show-container>
      <sofa-button size="small">测试一下</sofa-button>
    </comp-show-container>

    <comp-show-container>
      <div class="buttons">
        <sofa-button type="danger" size="small" disabled>测试一下</sofa-button>
        <sofa-button type="danger" size="small" loading>测试一下</sofa-button>
        <sofa-button type="danger" size="small" plain>测试一下</sofa-button>
        <sofa-button type="danger" size="small" round>测试一下</sofa-button>
        <sofa-button type="danger" size="small" circle>测</sofa-button>
      </div>
    </comp-show-container>

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

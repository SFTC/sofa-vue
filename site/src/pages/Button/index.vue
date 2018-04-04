<template>
  <div>
    <comp-show-container>
      <sofa-button>测试一下</sofa-button>
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

</style>

<template>
  <div>
    <comp-show-container>
      <sofa-button size="small">打开消息提示</sofa-button>
      <sofa-message></sofa-message>
    </comp-show-container>
  </div>
</template>

<script>
import SofaButton from 'packages/button';
import SofaMessage from 'packages/message';
import CompShowContainer from '../../components/CompShowContainer';

export default {
  name: 'MessgaePage',
  components: {
    SofaButton,
    SofaMessage,
    CompShowContainer,
  },
};
</script>

<style lang="scss">
</style>

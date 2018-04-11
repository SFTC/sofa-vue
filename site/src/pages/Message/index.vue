<template>
  <div>
    <comp-show-container>
      <sofa-button size="small" @click="handleOpenMessgae">打开消息提示</sofa-button>
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
  methods: {
    handleOpenMessgae() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
      });
    },
  },
};
</script>

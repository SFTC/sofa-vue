<template>
  <div>
    <comp-show-container>
      <sofa-button size="small" type="danger" @click="handleOpenMessgae('info', '我是普通的消息')">
        打开消息提示
      </sofa-button>
      <sofa-button size="small" type="danger" @click="handleOpenMessgae('success', '我是成功的信息')">
        打开成功消息提示
      </sofa-button>
      <sofa-button size="small" type="danger" @click="handleOpenMessgae('warning', '我是警告的信息')">
        打开警告消息提示
      </sofa-button>
      <sofa-button size="small" type="danger" @click="handleOpenMessgae('error', '我是失败的信息')">
        打开错误消息提示
      </sofa-button>
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
    handleOpenMessgae(infoType, messageText) {
      this.$message({
        message: messageText,
        type: infoType,
      });
    },
  },
};
</script>

<style>
  .sofa-button {
    margin-bottom: 10px;
  }
</style>


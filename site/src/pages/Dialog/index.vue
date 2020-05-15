<template>
  <div>
    <div>
      <comp-show-container>
        <sofa-dialog title="标题" :visible="visible" @before-close="handleClose">
          <span>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
          <div slot="footer"><sofa-button type="primary" size="mini">确定</sofa-button></div>
        </sofa-dialog>
      </comp-show-container>
    </div>
    <div class="trigger" @click="handleClick">点击打开弹窗</div>
  </div>
</template>

<script>
import SofaDialog from 'packages/dialog';
import SofaButton from 'packages/button';
import CompShowContainer from '../../components/CompShowContainer';

export default {
  name: 'DialogPage',
  components: {
    SofaDialog,
    CompShowContainer,
    SofaButton,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
  },
};
</script>
<style scoped>
  .trigger {
    cursor: pointer;
  }
</style>

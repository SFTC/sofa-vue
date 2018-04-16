<template>
  <div v-if="visible" class="container" @click="closeModal">
    <div class="modal" @click="preventDefault">
      <div class="title">{{title}}</div><span @click="closeModal" class="close_button">x</span>
      <div class="content"><slot class="content"></slot></div>
      <div class="footer"><slot name="footer"></slot></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SofaDialog',

    componentName: 'SofaDialog',

    data() {
      return {
      }
    },

    props: {
      title: {
        type: String,
        default: '',
      },
      visible: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
    },

    watch: {
    },

    methods: {
      closeModal($event) {
        this.$emit('before-close');
      },
      preventDefault(e) {
        e.cancelBubble = true;
        e.stopPropagation();
      },
    },
  };
</script>
<style scoped>
  .container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    text-align: center;
  }
  .modal {
    width: 50%;
    height: 50%;
    background-color: rgb(255,255,255);
    display: inline-block;
    margin-top: 10%;
    border-radius: 5px;
    box-shadow:0px 0px 8px #222222;
    position: relative;
  }
  .title {
    text-align: left;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    padding-left: 20px;
    border-bottom: 1px solid #f0f0f0;
  }
  .close_button {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    color: #999;
  }
  .close_button:hover {
    color: #333;
  }
  .content {
    padding-top: 10px;
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 10px;
    text-align: justify;
  }
  .footer {
    position: absolute;
    bottom: 0px;
    height: 50px;
    border-top: 1px solid #f0f0f0;
    text-align: right;
    line-height: 30px;
    width: 100%;
    padding: 10px 20px 10px 20px;
    box-sizing: border-box;
  }
</style>

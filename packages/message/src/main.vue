<template>
  <transition name="sofa-message-fade">
    <div
      :class="[
        'sofa-message',
        type && !iconClass ? `sofa-message--${ type }` : '',
        center ? 'is-center' : '',
        customClass]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert"
    >
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-html="message" class="sofa-message__content"></p>
      </slot>
      <i v-if="showClose" class="sofa-message__closeBtn el-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script type="text/babel">
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      timer: null,
      center: false
    };
  },

  computed: {
    iconWrapClass() {
      const classes = ['sofa-message__icon'];
      if (this.type && !this.iconClass) {
        classes.push(`sofa-message__icon--${ this.type }`);
      }
      return classes;
    },

    typeClass() {
      return this.type && !this.iconClass
        ? `sofa-message__icon sofa-icon-${ typeMap[this.type] }`
        : '';
    }
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },

  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted() {
    this.startTimer();
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  }
};
</script>

<style>
/* .sofa-message {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%); 
  text-align: center;
  z-index: 2010;
  background-color: #8ec;
  height: 60px;
  width: 460px;
  border-radius: 20px;
} */
.sofa-message__closeBtn:focus,
.sofa-message__content:focus {
  outline-width: 0
}

.sofa-message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #edf2fc;
  -webkit-transition: opacity .3s, -webkit-transform .4s;
  transition: opacity .3s, -webkit-transform .4s;
  transition: opacity .3s, transform .4s;
  transition: opacity .3s, transform .4s, -webkit-transform .4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.sofa-message.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.sofa-message p {
  margin: 0
}

.sofa-message--info .sofa-message__content {
  color: #909399
}

.sofa-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8
}

.sofa-message--success .sofa-message__content {
  color: #67c23a
}

.sofa-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8
}

.sofa-message--warning .sofa-message__content {
  color: #e6a23c
}

.sofa-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2
}

.sofa-message--error .sofa-message__content {
  color: #f56c6c
}

.sofa-message__icon {
  margin-right: 10px
}

.sofa-message__content {
  padding: 0;
  font-size: 14px;
  line-height: 1
}

.sofa-message__closeBtn {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  color: #c0c4cc;
  font-size: 16px
}

.sofa-message__closeBtn:hover {
  color: #909399
}

.sofa-message .sofa-icon-success {
  color: #67c23a
}

.sofa-message .sofa-icon-error {
  color: #f56c6c
}

.sofa-message .sofa-icon-info {
  color: #909399
}

.sofa-message .sofa-icon-warning {
  color: #e6a23c
}

.sofa-message-fade-enter,
.sofa-message-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%)
}

</style>


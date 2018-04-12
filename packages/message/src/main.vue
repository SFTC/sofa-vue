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
      <i v-if="showClose" class="sofa-message__closeBtn sofa-icon-close" @click="close"></i>
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
  name: 'SofaMessage',
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: true,
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
        this.destroyElement();
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



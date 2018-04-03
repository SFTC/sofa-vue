<template>
  <button
    class="sofa-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'sofa-button--' + type : '',
      buttonSize ? 'sofa-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="sofa-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'SofaButton',

    inject: {
      sofaForm: {
        default: ''
      },
      sofaFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      _sofaFormItemSize(): any {
        return ((this as any).sofaFormItem || {}).sofaFormItemSize;
      },
      buttonSize(): any {
        return this.size || this._sofaFormItemSize;
      },
      buttonDisabled(): any {
        return this.disabled || ((this as any).sofaForm || {}).disabled;
      }
    },

    methods: {
      handleClick(evt: any) {
        this.$emit('click', evt);
      }
    }
  });
</script>

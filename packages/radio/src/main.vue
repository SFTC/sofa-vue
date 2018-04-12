<template>
  <label
    class="sofa-radio"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = label"
  >
    <span class="sofa-radio__input"
          :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="sofa-radio__inner"></span>
      <input
        class="sofa-radio__original"
        :value="label"
        type="radio"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="sofa-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'SofaRadio',

  inject: {
    sofaForm: {
      default: '',
    },

    sofaFormItem: {
      default: '',
    },
  },

  componentName: 'SofaRadio',

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
  },

  data() {
    return {
      focus: false,
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    isDisabled() {
      return this.disabled || (this.sofaForm || {}).disabled;
    },
    tabIndex() {
      return !this.isDisabled ? '' : -1;
    },
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.model);
      });
    },
  },
};
</script>

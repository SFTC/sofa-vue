<template>
  <label
    class="sofa-checkbox"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-checked': model === label }
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed': this.trueLabel"
    :aria-disabled="isDisabled"
    :id="id"
  >
    <span class="sofa-checkbox__input"
          :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
          aria-checked="mixed"
    >
      <span class="sofa-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="sofa-checkbox__original"
        type="checkbox"
        :name="name"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
      <input
        v-else
        class="sofa-checkbox__original"
        type="checkbox"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="sofa-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'SofaCheckbox',
  componentName: 'SofaCheckbox',
  inject: {
    sofaForm: {
      default: '',
    },
    sofaFormItem: {
      default: '',
    },
  },
  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String,
    controls: String,
  },

  data() {
    return {
      selfModel: false,
      focus: false,
    };
  },

  computed: {
    model: {
      get() {
        return (this.value !== undefined ? this.value : this.selfModel);
      },
      set(val) {
        this.$emit('input', val);
        this.selfModel = val;
      },
    },
    isDisabled() {
      return this.disabled || (this.sofaForm || {}).disabled;
    },
  },

  methods: {
    handleChange(ev) {
      let value;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
    },
  },

  created() {
    if (this.checked) {
      this.model = this.trueLabel || true;
    }
  },

  mounted() {
    if (this.indeterminate) {
      this.$el.setAttribute('aria-controls', this.controls);
    }
  },
};
</script>

<template>
  <div
    class="sofa-button"
    @click="handleClick"
  >
    very good
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sofa-button',
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>


<template>
  <div
    class="sofa-button"
    @click="handleClick"
  >
    very good
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'sofa-button',
  methods: {
    handleClick(event: any) {
      this.$emit('click', event);
    },
  },
});
</script>


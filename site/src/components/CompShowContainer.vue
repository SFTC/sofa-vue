<template>
  <div>
    <slot></slot>
    <div>
      {{ inputProps }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompShowContainer',
  computed: {
    compNode() {
      if (this.$slots && this.$slots.default) {
        return this.$slots.default[0];
      }
      return null;
    },
    inputProps() {
      console.log(this.compNode);
      if (this.compNode && this.compNode.componentOptions) {
        return this.compNode.componentOptions.propsData;
      }
      return null;
    },
  },
  methods: {
    translateVNode(node) {

    },
  },
};
</script>

<style lang="scss">

</style>

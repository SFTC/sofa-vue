<template>
  <div class="comp-container">
    <div class="comp__comp">
      <slot></slot>
    </div>
    <div class="comp__code" ref="comp-code">
      <pre><code class="html">
        {{ inputProps }}
      </code></pre>
    </div>
  </div>
</template>

<script>
const subHolder = '==';

export default {
  name: 'CompShowContainer',
  props: {
    showClass: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    compNode() {
      if (this.$slots && this.$slots.default) {
        return this.$slots.default[0];
      }
      return null;
    },
    inputProps() {
      return this.translateVNode(this.compNode).replace(subHolder, '');
    },
  },
  methods: {
    // 树形非森林
    translateVNode(node, nodeStr = '') {
      console.log(node);
      let tempNodeStr = nodeStr;
      if (node) {
        let subStr = '';
        const options = node.componentOptions;

        if (node.text) {
          subStr = node.text;
        } else {
          const tag = options ? options.tag : node.tag;
          const props = options ? options.propsData : {};
          if (this.showClass && node.data && node.data.staticClass) {
            props.class = node.data.staticClass;
          }
          let propsStr = '';
          Object.keys(props).forEach((key) => {
            propsStr = `${propsStr} ${key}="${props[key]}"`;
          });
          subStr = `<${tag}${propsStr}>\n${subHolder}\n</${tag}>`;
        }

        if (tempNodeStr.indexOf(subHolder) > -1) {
          tempNodeStr = tempNodeStr.replace(subHolder, subStr);
        } else {
          tempNodeStr += subStr;
        }

        const children = options ? options.children : node.children;
        if (children) {
          const childrenNodeStrArray = children.map(child => this.translateVNode(child));
          tempNodeStr = tempNodeStr.replace(subHolder, childrenNodeStrArray.join('\n'));
        }
      }
      return tempNodeStr;
    },
  },
};
</script>

<style lang="scss">
.comp-container {
  display: flex;
  text-align: left;
  padding: 10px;
  .comp__comp {
    width: 200px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>

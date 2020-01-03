<!--
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 09:27:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\components\basic\VolMenu.vue
 -->
<template>
  <div class="menu-list">
    <vol-item-menu :onOpenChange="onOpenChange" :onSelect="onSelect" :trees="arrayToTree()" :theme="theme"></vol-item-menu>
  </div>
</template>
<script>
import VolItemMenu from "@/components/basic/VolItemMenu.vue";

export default {
  components: {
    VolItemMenu
  },
  props: {
    options: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    onSelect: {
      type: Function,
      default: x => {
        console.log(x);
      }
    },
    onOpenChange: {
      type: Function,
      default: x => {
        console.log(x);
      }
    },
    // eslint-disable-next-line standard/object-curly-even-spacing
    theme: { type: String, default: "light" /*light,dark */ }
  },
  methods: {
    convertTree(root, source) {
      var subItems = source.filter(x => {
        return x.parentId == root.id;
      });
      if (subItems.length > 0) {
        root.children = [];
        root.children.push(...subItems);
        root.children.forEach(element => {
          this.convertTree(element, source);
        });
      }
    },
    arrayToTree() {
      // var menuData = [
      //   { id: 1, name: "iview组件", parentId: 0,icon:'ios-aperture' }
      // ];

      var basicRoot = this.options.filter(x => {
        return x.parentId == 0;
      });
      basicRoot.forEach(x => {
        return this.convertTree(x, this.options);
      });

      return basicRoot;
    }
  },
  data() {
    return {};
  }
};

</script>

<!--
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 14:11:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\extension\order\SellOrderComponents\GridBodyExtend.vue
 -->
<template>
  <div>
    <Alert type="info">
      <h5>SellOrder.js文件中的扩展SellOrder表显示body信息,你可以在此处定义需要显示的信息</h5>
    </Alert>
  </div>
</template>
<script>
export default {
  components: {
    VolBox: () => import("@/components/basic/VolBox.vue")
  },
  data() {
    return {
      model: false
    };
  },
  methods: {
    test() {
      this.$emit("parentCall", $vue => {
        // eslint-disable-next-line no-unused-vars
        let rows = $vue.$refs.table.rowData;
        //此于拿到的$vue你可以操作其中的任何对象，如:
        //props.js中的属性，this.columns/this.editFormFileds
        //或者操作其他动态扩展的组件如:$vue.$refs.gridBody/$vue.$refs.gridFooter
        //$vue.$refs.table获取表格信息
        //$vue.refresh()刷新表格等操作
        //能操作的所有对象可参照props.js与ViewGird.uve的属性
        //能操作的方法methods.js/detailMethods.js
      });
    }
  }
};
</script>

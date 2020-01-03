/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime : 2020-01-03 10:54:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\extension\system\Sys_Log.js
 */
let extension = {
    components: {//动态扩充组件或组件路径
        //表单header、content、footer对应位置扩充的组件
        gridHeader: '', //{ template: "<div>扩展组xx件</div>" },
        gridBody: '',
        gridFooter: '',
        //弹出框(修改、编辑、查看)header、content、footer对应位置扩充的组件
        modelHeader: '',
        modelBody: '',
        modelFooter: ''
    },
    buttons: [], //扩展的按钮
    methods: { //事件扩展

    }
};

export default extension;

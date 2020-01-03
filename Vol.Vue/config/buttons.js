/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 15:33:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\config\buttons.js
 */

let buttons = [{
    name: "查 询",
    value: 'Search',
    icon: 'md-search',
    class: 'dropdown',
    type: 'info',
    onClick: function () {
        this.search();
    }
}, 
// {
//     name: "重 置",
//     icon: 'md-refresh',
//     class: '',
//     type: 'success',
//     onClick: function () {
//         this.resetSearch();
//     }
// }, 
{
    name: "刷 新",
    icon: 'md-refresh',
    class: '',
    type: 'success',
    onClick: function () {
        this.refresh();
    }
},
{
    name: "新 建",
    icon: 'md-add',
    value: 'Add',
    class: '',
    type: 'error',
    onClick: function () {
        this.add();
    }
},{
    name: "编 辑",
    icon: 'md-create',
    value: 'Update',
    class: '',
    type: 'success',
    onClick: function () {
        this.edit();
    }
},  {
    name: "删 除",
    icon: 'md-close',
    class: '',
    value: 'Delete',
    type: 'error',
    onClick: function () {
        this.del();
    }
},  {
    name: "审 核",
    icon: 'md-create',
    class: '',
    value: 'Audit',
    type: 'error',
    onClick: function () {
        this.audit();
    }
},
{
    name: "导 入",
    icon: 'md-color-fill',
    class: '',
    value: 'Import',
    onClick: function () {
        this.import();
    }
}, {
    name: "导 出",
    icon: 'md-share-alt',
    class: '',
    value: 'Export',
    onClick: function () {
        this.export();
    }
}, {
    name: "数据结构",
    icon: 'ios-cog',
    class: '',
    value: '',
    onClick: function () {
        this.openViewColumns();
    }
}];

export default buttons;
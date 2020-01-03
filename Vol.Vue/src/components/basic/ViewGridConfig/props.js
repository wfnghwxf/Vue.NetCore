/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime : 2020-01-03 10:36:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\components\basic\ViewGridConfig\props.js
 */
let props = {
  columns: {//当前表的配置信息
    type: Array,
    default: () => {
      return [];
    }
  },
  detail: {//从表明细配置
    type: Object,
    default: () => {
      return {
        columns: [], //从表列
        sortName: ""//从表排序字段
      };
    }
  },
  editFormFileds: {//新建、编辑字段(key/value)
    type: Object,
    default: () => {
      return {};
    }
  },
  editFormOptions: {//新建、编辑配置信息
    type: Array,
    default: () => {
      return [];
    }
  },
  searchFormFileds: {//查询字段(key/value)
    type: Object,
    default: () => {
      return {};
    }
  },
  searchFormOptions: {//查询配置信息(key/value)
    type: Array,
    default: () => {
      return [];
    }
  },
  table: {//表的配置信息：主键、排序等
    type: Object,
    default: () => {
      return {};
    }
  },
  extend: {//表的扩展方法与组件都合并到此属性中
    type: Object,
    default: () => {
      return {};
    }
  }
};

export default props;

<!--
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 11:11:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\views\appmanager\App_ReportPrice.vue
 -->
<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/appmanager/App_ReportPrice.js此处编写
 -->
<template>
    <div>
        <view-grid :columns="columns"
                   :detail="detail"
                   :editFormFileds="editFormFileds"
                   :editFormOptions="editFormOptions"
                   :searchFormFileds="searchFormFileds"
                   :searchFormOptions="searchFormOptions"
                   :table="table"
                   :extend="extend">
        </view-grid>
    </div>
</template>

<script>
    import extend from "@/extension/appmanager/App_ReportPrice.js";
    import ViewGrid from "@/components/basic/ViewGrid.vue";
    var vueParam = {
        components: {
            ViewGrid
        },
        data() {
            return {
                table: {
                    key: 'Id',
                    footer: "Foots",
                    cnName: '新增编辑表单',
                    name: 'App_ReportPrice',
                    url: "/App_ReportPrice/",
                    sortName: "Id"
                },
                extend: extend,
                editFormFileds: {"Variety": "", "Age": "", "City": "", "Price": "", "Creator": "", "Enable": "", "CreateDate": "", "AuditDate": "", "ModifyDate": "", "Modifier": ""},
                editFormOptions: [[{"dataKey": "pz", "title": "品种", "required": true, "field": "Variety", "type": "select"},
                               {"dataKey": "age", "title": "月龄", "required": true, "field": "Age", "type": "select"},
                               {"dataKey": "city", "title": "报价城市", "required": true, "field": "City", "type": "select"}],
                              [{"title": "上报价格", "required": true, "field": "Price", "type": "decimal"},
                               {"title": "上报人", "field": "Creator", "disabled": true},
                               {"dataKey": "enable", "title": "是否启用", "field": "Enable", "disabled": true, "type": "switch"}],
                              [{"title": "上报时间", "field": "CreateDate", "disabled": true, "type": "datetime"},
                               {"title": "审核时间", "field": "AuditDate", "disabled": true},
                               {"title": "修改时间", "field": "ModifyDate", "disabled": true}],
                              [{"title": "测试", "field": "Modifier", "colSize": 12}]],
                searchFormFileds: {"Variety": "", "Age": "", "City": "", "CreateDate": "", "AuditStatus": ""},
                searchFormOptions: [[{"dataKey": "pz", "title": "品种", "field": "Variety", "type": "drop"}, {"dataKey": "age", "title": "月龄", "field": "Age", "type": "drop"}, {"dataKey": "city", "title": "报价城市", "field": "City", "type": "dropList"}], [{"title": "上报时间", "field": "CreateDate", "type": "datetime"}, {"dataKey": "audit", "title": "审核状态", "field": "AuditStatus", "type": "select"}]],
                columns: [{field: 'Id', title: '主键ID', type: 'int', width: 90, hidden: true, readonly: true, require: true, align: 'left'},
                       {field: 'Variety', title: '品种', type: 'string', bind: { key: 'pz', data: [] }, width: 90, require: true, align: 'left', sortable: true},
                       {field: 'Age', title: '月龄', type: 'string', bind: { key: 'age', data: [] }, width: 100, require: true, align: 'left'},
                       {field: 'City', title: '报价城市', type: 'string', bind: { key: 'city', data: [] }, width: 120, require: true, align: 'left'},
                       {field: 'Price', title: '上报价格', type: 'decimal', link: true, width: 90, require: true, align: 'left'},
                       {field: 'Creator', title: '上报人', type: 'string', width: 100, readonly: true, align: 'left'},
                       {field: 'CreateDate', title: '上报时间', type: 'datetime', width: 150, readonly: true, align: 'left', sortable: true},
                       {field: 'AuditStatus', title: '审核状态', type: 'int', bind: { key: 'audit', data: [] }, width: 90, align: 'left'},
                       {field: 'AuditDate', title: '审核时间', type: 'datetime', width: 110, readonly: true, align: 'left', sortable: true},
                       {field: 'AuditId', title: '审核人Id', type: 'int', width: 90, hidden: true, align: 'left'},
                       {field: 'Auditor', title: '审核人', type: 'string', width: 90, align: 'left'},
                       {field: 'Enable', title: '是否启用', type: 'byte', bind: { key: 'enable', data: [] }, width: 90, readonly: true, align: 'left'},
                       {field: 'CreateID', title: '创建人Id', type: 'int', width: 90, hidden: true, align: 'left'},
                       {field: 'ModifyID', title: '修改人ID', type: 'int', width: 90, hidden: true, align: 'left'},
                       {field: 'Modifier', title: '测试', type: 'string', width: 100, align: 'left'},
                       {field: 'ModifyDate', title: '修改时间', type: 'datetime', width: 90, readonly: true, align: 'left', sortable: true}],
                detail: {
                    cnName: "#detailCnName",
                    columns: [],
                    sortName: "",
                    key: ""
                }
            };
        }
    };
    export default vueParam;
</script>

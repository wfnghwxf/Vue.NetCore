/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 10:46:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\router\tables.js
 */
let tables = [
    {
        path: '/table1',
        name: 'table1',
        component: () => import('@/views/tables/table1.vue')
    },
    {
        path: '/table2',
        name: 'table2',
        component: () => import('@/views/tables/table2.vue')
    },
    {
        path: '/tableForms',
        name: 'tableForms',
        component: () => import('@/views/tables/tableForms.vue')
    }];

export default tables;

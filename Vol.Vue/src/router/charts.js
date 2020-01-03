/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 10:49:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\router\charts.js
 */
let charts = [
    {
        path: '/chart',
        name: 'chart',
        component: () => import('@/views/charts/chart.vue')
    },
    {
        path: '/formChart',
        name: 'formChart',
        component: () => import('@/views/charts/formChart.vue')
    }];

export default charts;

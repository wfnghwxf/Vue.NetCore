/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 10:48:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\router\formsMulti.js
 */
let formsMulti = [
    {
        path: '/multi1',
        name: 'multi1',
        component: () => import('@/views/formsMulti/multi1.vue')
    },
    {
        path: '/multi2',
        name: 'multi2',
        component: () => import('@/views/formsMulti/multi2.vue')
    },
    {
        path: '/multi3',
        name: 'multi3',
        component: () => import('@/views/formsMulti/multi3.vue')
    },
    {
        path: '/multi4',
        name: 'multi4',
        component: () => import('@/views/formsMulti/multi4.vue')
    }];

export default formsMulti;

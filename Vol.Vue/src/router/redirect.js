/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime : 2020-01-03 10:46:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\router\redirect.js
 */
let redirect = [{
    path: '/404',
    name: '404',
    component: () => import('@/views/redirect/404.vue'),
    meta: {
        anonymous: true
      }
}, {
    path: '/401',
    name: '401',
    component: () => import('@/views/redirect/401.vue')
}, {
    path: '/coding',
    name: 'coding',
    component: () => import('@/views/redirect/coding.vue')
}];

export default redirect;

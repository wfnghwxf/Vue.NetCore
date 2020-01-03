/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 10:48:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\router\h5.js
 */
let h5 = [{
  path: '/app',
  name: 'app',
  component: () => import('@/views/h5/index.vue'),
  meta: {
    anonymous: true
  },
  redirect: '/app/home',
  children: [
    {
      path: '/app/home',
      name: 'apphome',
      meta: {
        anonymous: true
      },
      component: () => import('@/views/h5/home.vue')
    },
    {
      path: '/app/topic',
      name: '/apptopic',
      meta: {
        anonymous: true
      },
      component: () => import('@/views/h5/topic.vue')
    },
    {
      path: '/app/question',
      name: '/appQuestion',
      meta: {
        anonymous: true
      },
      component: () => import('@/views/h5/question.vue')
    },
    {
      path: '/app/my',
      name: '/appMy',
      meta: {
        anonymous: true
      },
      component: () => import('@/views/h5/my.vue')
    }
  ]
}, {
  path: '/app/guide',
  name: '/appGuide',
  meta: {
    anonymous: true
  },
  component: () => import('@/views/h5/guide.vue')
}];

export default h5;

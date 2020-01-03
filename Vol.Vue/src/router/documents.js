/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime: 2020-01-03 10:49:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\src\router\documents.js
 */
let documents = [{
    path: '/document',
    name: 'document',
    component: () => import('@/views/document/document.vue'),
    redirect: '/document/guide',
    meta: {
      anonymous: true
    },
    children: [{
      path: '/document/guide',
      name: '/document/guide',
      component: () => import('@/views/document/guide.vue'),
      meta: {
        anonymous: true
      }
    }, {
      path: '/document/coder',
      name: '/document/coder',
      component: () => import('@/views/document/coder.vue'),
      meta: {
        anonymous: true
      }
    }, {
      path: '/document/vueDev',
      name: '/document/vueDev',
      component: () => import('@/views/document/vueDev.vue'),
      meta: {
        anonymous: true
      }
    }, {
      path: '/document/netCoreDev',
      name: '/document/netCoreDev',
      component: () => import('@/views/document/netCoreDev.vue'),
      meta: {
        anonymous: true
      }
    }, {
      path: '/document/issue',
      name: '/document/issue',
      component: () => import('@/views/document/issue.vue'),
      meta: {
        anonymous: true
      }
    }, {
      path: '/document/log',
      name: '/document/log',
      component: () => import('@/views/document/log.vue'),
      meta: {
        anonymous: true
      }
    }, {
      path: '/document/api',
      name: '/document/api',
      component: () => import('@/views/document/docApi/api.vue'),
      meta: {
        anonymous: true
      }
    }, {
      path: '/document/test',
      name: '/document/test',
      component: () => import('@/views/document/docApi/test.vue'),
      meta: {
        anonymous: true
      }
    }]
  }];

export default documents;

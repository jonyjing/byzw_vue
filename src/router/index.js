import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/login/index')
  },
  {
    path: '/main',
    component: () => import('@/views/main/index')
  },
  {
    path: '/shareDirSystem',
    name: 'shareDirSystem',
    redirect: '/shareDirSystem/index',
    component: () => import('@/views/shareDirSystem/layout'),
    children: [
      {
        path: 'index',
        component: () => import('@/views/shareDirSystem/index'),
        name: 'index'
      },
      {
        path: 'traffic',
        component: () => import('@/views/shareDirSystem/traffic'),
        name: 'traffic'
      },
      {
        path: 'interfaceView',
        component: () => import('@/views/shareDirSystem/interfaceView'),
        name: 'interfaceView'
      },
      {
        path: 'interfaceInfo',
        component: () => import('@/views/shareDirSystem/interfaceInfo'),
        name: 'interfaceInfo'
      },
      {
        path: 'tongji',
        component: () => import('@/views/shareDirSystem/tongji/index'),
        name: 'tongji'
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})

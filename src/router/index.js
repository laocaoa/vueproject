import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/index'
// import City from '@/pages/city'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index')//路由的按需加载 简易写法（组件也可按需加载，方法同上）
    }, {
      path: '/city',
      name: 'City',
      component: (resolve) => { require(['@/pages/city'], resolve) }//路由的按需加载lowbi写法
    }, {
      path: '/detail/:sightId',
      name: 'Detail',
      component: Detail,
      props: true
    }
  ]
})

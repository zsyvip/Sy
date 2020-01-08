import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)
//路由
const routes = [
  {//主路由
    path: '/',
    name: 'home',
    component:()=> import("../views/Home.vue"),
      children:[//子路由
      {
        path: '/common',
        name: 'common',
        component: () => import('../components/common.vue'),
      },
      {
        path: '/common1',
        name: 'common1',
        component: () => import('../components/common1.vue')
      },
      {
        path: '/common2',
        name: 'common2',
        component: () => import('../components/common2.vue'),
        // redirect:"/home/common2/huluwa1",
        children:[
            {
                path: '/huluwa1',
                name: 'huluwa1',
                user:"大力娃",
                component: () => import('../components/huluwa/huluwa1.vue'),
                children:[
                    {
                        path: '/huluwa2',
                        name: 'huluwa2',
                        user:"金刚娃",
                        component: () => import('../components/huluwa/huluwa2.vue'),
                        children:[
                            {
                                path: '/huluwa3',
                                name: 'huluwa3',
                                user:"隐身娃",
                                component: () => import('../components/huluwa/huluwa3.vue'),
                                children:[
                                    {
                                        path: '/huluwa4',
                                        name: 'huluwa4',
                                        user:"葫芦娃",
                                        component: () => import('../components/huluwa/huluwa4.vue'),
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    children:[
          {
              path: '/about1',
              name: 'about1',
              component: () => import('../views/About1.vue')
          }
      ]
  }
]

const router = new VueRouter({
  mode: 'history',//跳转方式hash或history
  //公共路径或代理路径
  base: process.env.BASE_URL,
  routes
})
//导出路由 默认导出
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'




import My from '@/views/my/My'
import Login from '@/views/my/login'

Vue.use(VueRouter)
// import Home from '@/views/Home/Index'
// import New from '@/views/Home/New'
// import Choice from '@/views/Home/Choice'
// import Types from '@/views/Types/Index'
// import Find from '@/views/Find/Index'
// import Center from '@/views/Center/Index'

// 导入经过模块化的路由
import homeRouter from './routes/home';
import typeRouter from './routes/types'
import findRouter from './routes/find'
import centerRouter from './routes/center'


Vue.use(VueRouter)
// 导入需要的组件
import Find from "@/views/Find/Index"
const routes = [

  {

    path:"/find",
    component:Find,
  }
  

    path:'/my',
    component:My
  },
  {
    path:'/login',
    component:Login
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }


    // 路由重定向
    {
        path:"/",
        redirect:"/home/choice",
    },
    // 模块化
    homeRouter,
    typeRouter,
    findRouter,
    centerRouter
    // 首页路由
    // {
    //     path:"/home",
    //     component:Home,
    //     children:[
    //         {path:"new",component:New},
    //         {path:"choice",component:Choice}
    //     ]
    // }
    // 分类模块
    // {
    //     path:"/types",
    //     component:Types,
    // },
    // 发现模块
    // {
    //     path:"/find",
    //     component:Find,
    // },
    // 我的模块
    // {
    //     path:"/center",
    //     component:Center,
    // },

//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import login from './views/Login.vue'

import CatCreate from './views/categories/CatCreate'
import CatList from './views/categories/CatList'

import ItemsCreate from './views/items/ItemsCreate'
import ItemsList from './views/items/ItemsList'

import HeroCreate from './views/heroes/HeroCreate'
import HeroesList from './views/heroes/HeroesList'

import ArticleCreate from './views/articles/ArticleCreate'
import ArticlesList from './views/articles/ArticlesList'

import AdsCreate from './views/ads/AdsCreate'
import AdsList from './views/ads/AdsList'

import AdminCreate from './views/adminUser/AdminCreate'
import AdminList from './views/adminUser/AdminList'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:login,
      meta:{isPublic: true},
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        //分类管理页
        {
          path: '/categories/CatCreate',   //新建列表页
          component: CatCreate
        },
        {
          path: '/categories/edit/:id',   //props传递id
          component: CatCreate,
          props:true
        },
        {
          path: '/categories/CatList',     //分类列表页
          component: CatList
        },

        // 物品管理页
        {
          path: '/items/ItemsCreate',   //新建物品页
          component: ItemsCreate
        },
        {
          path: '/items/edit/:id',   
          component: ItemsCreate,
          props:true
        },
        {
          path: '/items/ItemsList',     //物品列表页
          component: ItemsList
        },
        //英雄管理页
        {
          path: '/heroes/HeroCreate',   //新建物品页
          component: HeroCreate
        },
        {
          path: '/heroes/edit/:id',   
          component: HeroCreate,
          props:true
        },
        {
          path: '/heroes/HeroesList',     //物品列表页
          component: HeroesList
        },
        //文章管理页
        {
          path: '/articles/ArticleCreate',  
          component: ArticleCreate
        },
        {
          path: '/articles/edit/:id',   
          component: ArticleCreate,
          props:true
        },
        {
          path: '/articles/ArticlesList',
          component: ArticlesList
        },
        //  广告位管理页
        {
          path: '/ads/AdsCreate',  
          component: AdsCreate
        },
        {
          path: '/ads/edit/:id',   
          component: AdsCreate,
          props:true
        },
        {
          path: '/ads/AdsList',
          component: AdsList
        },
        //管理员页
        {
          path: '/adminUser/AdminCreate',  
          component: AdminCreate
        },
        {
          path: '/adminUser/edit/:id',   
          component: AdminCreate,
          props:true
        },
        {
          path: '/adminUser/AdminList',
          component: AdminList
        },
      ]
      
    },
    
  ]
})

router.beforeEach((to,from,next) => {
  if(!to.meta.isPublic&&!localStorage.token){
    return next('/login')
  }
  next()
})
export default router

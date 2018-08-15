import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewInfo from './components/news/NewInfo.vue'
// 安装路由
Vue.use(VueRouter)
var router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            // name: 'home',
            path: '/home',
            component: HomeContainer
        },
        {
            // name: 'member',
            path: '/member',
            component: MemberContainer
        },
        {
            // name: 'shopcar',
            path: '/shopcar',
            component: ShopcarContainer
        },
        {
            // name: 'search',
            path: '/search',
            component: SearchContainer
        },
        {
            path:'/home/newslist',
            component:NewsList
        },
        {
            name:'newinfo',
            path:'/home/:newId/newinfo',
            component:NewInfo
        }
    ],
})
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
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
        }
    ],
})
export default router
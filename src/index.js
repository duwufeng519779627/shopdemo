// 导入vue
import Vue from 'vue'
// 导入根组件
import App from './App.vue'

//axios不要在这里引用 在vue文件里引用即可

// 导入css文件
import './lib/mui-master/dist/css/mui.min.css'
// 使用组件
import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入路由模块
import router from './router.js'
var vm = new Vue({
    el: '#app',
    render: function (r1) {
        return r1(App)
    },
    router

})
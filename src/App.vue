<template>
 <div class="app-container">
     <mt-header fixed title="vue大案例"></mt-header>
     <router-view></router-view>
     <nav class="mui-bar mui-bar-tab">
			<router-link to="/home"class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/shopcar" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
 </div>
</template>

<script>
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
export default {
  components: {
	  HomeContainer,
	  MemberContainer,
	  SearchContainer,
	  ShopcarContainer
  }
};
</script>

<style>
.app-container {
  padding-top: 40px;
}
</style>

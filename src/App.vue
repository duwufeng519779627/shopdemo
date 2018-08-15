<template>
	<div class="app-container">
		<mt-header fixed title="vue大案例"></mt-header>
		<transition >
			<router-view></router-view>
		</transition>

		<nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email">
					<span class="mui-badge">9</span>
				</span>
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
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
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
  padding-bottom: 40px;
  	overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all .2s linear;
}
</style>

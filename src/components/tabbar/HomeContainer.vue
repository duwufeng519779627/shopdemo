<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="item.id">
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>

      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">Home</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imgList: ""
    };
  },
  components: {},
  methods: {
    getImg() {
      axios
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(res => {
          this.imgList = res.data.message;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getImg();
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    a {
      display: block;
      width: 100%;
      img {
        display: block;
        width: 100%;
        height: 220px;
      }
    }
  }
}
.app-container {
  .mui-table-view {
    background-color: white;
    width: 100%;
    li {
      width: 33.3333%;
      padding: 0;
      a {
        display: block;
        width: 100%;
      }
    }
    img {
      display: block;
      width: 50%;
      // height: 60px;
      margin: 0 auto;
    }
  }
}
</style>


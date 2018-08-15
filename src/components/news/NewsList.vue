<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="item.id">
                <router-link :to="{name:'newinfo', params: {newId: item.id}}"  class="">
                <!-- <router-link :to="'/home/newinfo/'+item.id"  class=""> -->
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间:{{item.add_time|dataFormat}}</span>&nbsp
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!-- <li class="mui-table-view-cell mui-media">
                <a href="javascript:;" class="">
                    <img class="mui-media-object mui-pull-left" src="https://avatar.kancloud.cn/12/c9fafc0e652214abee9ddfe428bc82!middle">
                    <div class="mui-media-body">
                        木屋
                        <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://avatar.kancloud.cn/12/c9fafc0e652214abee9ddfe428bc82!middle">
                    <div class="mui-media-body">
                        CBD
                        <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li> -->

        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        newsList:''
    };
  },
  components: {},
  methods: {
    getNewsList() {
      axios
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(
            (res)=>{
               this.newsList=res.data.message
            }
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
      this.getNewsList()
  },
};
</script>

<style lang="less" scoped>
.mui-table-view {
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    span {
      color: blue;
      &:nth-child(1) {
        float: left;
      }
      &:nth-child(2) {
        float: right;
      }
    }
  }
}
</style>


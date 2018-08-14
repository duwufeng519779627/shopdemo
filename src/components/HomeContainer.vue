<template>
 <div>
     <mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
 </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less" scoped>
  .mint-swipe{
    height: 200px;
    .mint-swipe-item{
      background-color: red;
    }
  }
</style>


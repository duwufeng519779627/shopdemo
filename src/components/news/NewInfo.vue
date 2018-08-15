<template>
    <div>
        <div class="newtop">
            <h6>{{newinfo.title}}</h6>
            <p><span></span><span></span></p>
        </div>
        <p v-html="newinfo.content"></p>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        newinfo:''
    };
  },
  components: {},
  methods: {
    getNewsInfo(id) {
      axios
        .get("http://www.liulongbin.top:3005/api/getnew/"+id)
        .then((res)=>{
            this.newinfo=res.data.message[0]
            console.log(this.newinfo)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
      const {newId}=this.$route.params
      console.log(newId)
      this.getNewsInfo(newId)
  },
};
</script>

<style lang="less" scoped>
    .newtop{
        border-bottom: 1px solid black;
        h6{
            color: red;
            font-weight: 800;
            line-height: 30px;
        }
    }
</style>


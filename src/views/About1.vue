<template>
  <!--  公共组件  -->
  <div class="about1">
    about1子组件
  <!-- 主页面传来的数据 -->
    {{cmsg}}

  </div>
</template>

<script>
  export default {
    name: "about1",
    data() {
      return {
        cmsg:""
      }
    },
    created() {
      //接收主页面传来的数据
      this.$bus.$off();
      this.$bus.$on("sendc",(cval)=>{
        console.log(cval);
        this.cmsg=cval;
      })
    }
  }
</script>

<style lang="less">
  .about1{
    width: 100%;
    height: auto;
  }
</style>
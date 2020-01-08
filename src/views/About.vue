<template>
  <div class="about">
    about页面
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "about",
    data() {
      return {

      }
    }
  }
</script>

<style lang="less">
  .Achild{
    width: 100%;
    height: auto;
    background:springgreen;
  }
</style>
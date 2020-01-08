<template>
  <!-- 页面组件 -->
  <div class="home">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path" router>
          <el-submenu  v-for="(item,index) in routes" :key="index" index="index-0+1">
            <template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>

            <el-menu-item  v-for="(child,index1) in item.children" :key="index1" >
              <router-link :to={path:child.path}>{{child.name}}</router-link>
            </el-menu-item>

          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
    <!-- 公共组件 -->
    <!-- 路由当前页跳转插槽 -->
        <router-view></router-view>
    <!--<Common/>-->
      </el-container>
    </el-container>


  </div>
</template>

<script>
  //引入公共组件
  // import Common from "../components/common.vue"

  //导入接口方法
  import {getlist} from "../API/apijiekou";

  export default {
    name: 'home',
    //注册组件
    // components:{//加载使用公共组件
    //   Common
    // },
    data() {
      return {
        routes:this.$router.options.routes,
        list:[],
        cmsg:"主页面销毁期发送给about1的数据"
      }
    },
    methods:{//普通函数

    },
    mounted(){//挂载中函数
      getlist().then(res=>{
        console.log(res)
        this.list=[...res];
        console.log(this.list)
      }).catch(err=>{
        console.log(err)
      })
    },
    beforeDestroy() {
      this.$bus.$emit("sendc",this.cmsg)
    }
  }
</script>
<style lang="less">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>
<template>
    <!--  公共组件  -->
    <div class="common2">
        骑个葫芦娃丢了叁
        <div>
            <!-- 第一级嵌套路由  -->
            <div v-for="(item,index) in routes" :key="index">
                <div  v-for="(child,index1) in item.children" :key="index1" >
                    <div  v-for="(hulu,hulunum) in child.children" :key="hulunum" >
                        <router-link :to={path:hulu.path}>{{hulu.user}}</router-link>
                    </div>

                </div>
            </div>
            <div style="width: 300px;height: 300px;border: 1px solid #cccccc; border-radius: 50%">
                <router-view></router-view>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "common2",
        data() {
            return{
                routes:this.$router.options.routes
            }

        }
    }
</script>

<style lang="less">

</style>
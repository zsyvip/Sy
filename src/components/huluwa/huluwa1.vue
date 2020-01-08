<template>
    <div class="huluwa1">
        我是一娃：大力娃
        <div>
            <!-- 第一级嵌套路由  -->
            <div v-for="(item,index) in routes" :key="index">
                <div  v-for="(child,index1) in item.children" :key="index1" >
                    <div  v-for="(hulu,hulunum) in child.children" :key="hulunum" >
                        <!-- 第二级嵌套路由  -->
                        <div  v-for="(hulu1,hulunum1) in hulu.children" :key="hulunum1" >
                            <router-link :to={path:hulu1.path}>{{hulu1.user}}</router-link>
                        </div>

                    </div>

                </div>
            </div>
            <div style="width: 250px;height: 250px;border: 1px solid #cccccc; border-radius: 50%">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "huluwa1",
        data(){
            return{
                routes:this.$router.options.routes
            }
        }
    }
</script>

<style lang="less">

</style>
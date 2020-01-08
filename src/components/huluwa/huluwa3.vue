<template>
    <div class="huluwa3">
        我是六娃：隐身娃
        <div>
            <!-- 第一级嵌套路由  -->
            <div v-for="(item,index) in routes" :key="index">
                <div  v-for="(child,index1) in item.children" :key="index1" >
                    <div  v-for="(hulu,hulunum) in child.children" :key="hulunum" >
                        <!-- 第二级嵌套路由  -->
                        <div  v-for="(hulu1,hulunum1) in hulu.children" :key="hulunum1" >
                            <!-- 第三级嵌套路由  -->
                            <div  v-for="(hulu2,hulunum2) in hulu1.children" :key="hulunum2" >
                                <!-- 第四级嵌套路由  -->
                                <div  v-for="(hulu3,hulunum3) in hulu2.children" :key="hulunum3" >
                                    <router-link :to={path:hulu3.path}>{{hulu3.user}}</router-link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div style="width: 150px;height: 150px;border: 1px solid #cccccc; border-radius: 50%">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "huluwa3",
        data(){
            return{
                routes:this.$router.options.routes
            }
        }
    }
</script>

<style lang="less">

</style>
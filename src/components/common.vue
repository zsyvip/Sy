<template>
    <!--  公共组件  -->
    <div class="common">
        父组件

    <!-- 父组件发送数据属性给A组件 -->
        <Achild :msg="msg"/>

    <!-- 父级接收B组件的数据 -->
        <Bchild   @send="getlist" />

        <div>父组件接收到的数据：{{bmsg}}</div>

        <Cchild :text="text1"/>
        <Cchild :text="text2"/>
        <Cchild :text="text3"/>
    </div>
</template>

<script>
    import Achild from "../components/child/Achild";
    import Bchild from "../components/child/Bchild";
    import Cchild from "../components/child/Cchild";
    export default {
        components:{
            Achild,
            Bchild,
            Cchild,
        },
        name: "common",
        data() {
            return {
                msg:"父组件发送的数据",
                bmsg:"",//接收b的数据
                //传给组件C的数据
                text1:"这是第一个",
                text2:"这是第二个",
                text3:"这是第三个",
            }
        },
        methods:{
            getlist(val){//接收B组件传输的数据
                this.bmsg=val;
                console.log(val)
             }
        },
        mounted() {//挂载中函数

        }
    }
</script>

<style lang="less">
.common{
    width: 100%;
    height: 100%;
}
</style>
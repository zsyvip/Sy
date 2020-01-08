<template>
    <!--  公共组件  -->
    <div class="Achild">
        A子组件
        <div>A组件接收到的父级数据：{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: "Achild",
        props:["msg"],//接收到的父组件属性数据
        data() {
            return {
                amsg:"A组件发送的数据",
                cmsg:"A组件发送给C页面的数据"
            }
        },
        mounted() {//挂载中函数
            //A组件发送数据给B组件
            this.$bus.$emit("senda",this.amsg);
        },
    }
</script>

<style lang="less">
    .Achild{
        width: 100%;
        height: auto;
        background:springgreen;
    }
</style>
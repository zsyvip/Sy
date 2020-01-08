<template>
    <!--  公共组件  -->
    <div class="Bchild">
        B子组件
        {{bmsg}}
        <div>接收同级A发送的数据：{{amsg}}</div>
    </div>
</template>

<script>
    export default {
        name: "Bchild",
        data() {
            return {
                bmsg:"B组件发送的数据",
                amsg:''//接收a的数据
            }
        },
        mounted() {//挂载中函数
            //B组件发送数据给父组件
            this.$emit("send",this.bmsg);
        },
        created() {//创建后函数
            //接收同级A组件发送的数据
            this.$bus.$off();
            this.$bus.$on("senda",(aval)=>{
                console.log(aval);
                this.amsg=aval;
            })
        }
    }
</script>

<style lang="less">
    .Bchild{
        width: 100%;
        height: auto;
        background: skyblue;
    }
</style>
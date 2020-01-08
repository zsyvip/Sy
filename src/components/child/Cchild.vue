<template>
    <!--  公共组件  -->
    <div class="Cchild">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "Cchild",
        props:["text"],
        data() {
            return {
            }
        },
        mounted() {//挂载中函数

        },

    }
</script>

<style lang="less">
    .Cchild{
        width: 100%;
        margin: 10px 0;
        height: 30px;
        line-height: 30px;
        background: red;
        border: 1px solid #000000;
    }
</style>
<template>
    <!--  公共组件  -->
    <div class="common1">
        公共组件1
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>管理员</span>
        </el-header>

        <el-main>
            <el-table :data="tableData">
                <el-table-column prop="date" label="日期" width="220">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="200">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column prop="" label="操作">
                    <span>删除 </span> <span> 修改</span>
                </el-table-column>
            </el-table>
        </el-main>
    </div>
</template>

<script>
    export default {
        name: "common1",
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(10).fill(item)
            }
        }
    }
</script>

<style lang="less">
.common1{
    width: 100%;
    height: 100%;
}
</style>
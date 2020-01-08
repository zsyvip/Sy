import Vue from 'vue'
import Vuex from 'vuex'
//公共数据
import * as moduleA from "./moduleA"
//全局使用
Vue.use(Vuex)

export default new Vuex.Store({
  state: {//数据仓库 管理公共数据，不能直接修改数据
  },
  mutations: {//同步执行的纯函数，可以修改state的值，不能异步操作
  },
  actions: {//通过commit提交mutations来修改state的值 达成异步操作
  },
  getters:{//计算属性，拦截数据，进行计算并返回结果 不改变原数据
  },
  modules: {//分模块
    nav:moduleA,
  }
})

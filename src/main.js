import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//唯一的入口js文件

//elementui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//配置bus事件总线
import Bus from "./router/bus"
Vue.prototype.$bus=Bus;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  //ES6 render函数更新视图 渲染视图
  render: h => h(App)
}).$mount('#app')

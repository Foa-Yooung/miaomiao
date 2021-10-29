import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios"
Vue.prototype.axios = axios;


// 过滤器
Vue.filter("setWH",(url,arg)=>{
  return url.replace("/w\.h/",arg);
});
// 滚动
import Scroller from "@/components/Scroller"
Vue.component("Scroller",Scroller);

// loading
import Loading from "@/components/Loading"
Vue.component("Loading",Loading);




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

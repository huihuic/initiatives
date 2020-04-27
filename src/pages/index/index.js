// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Index.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import '../../common/js/axiosCon'// axios拦截器
import routes from './router'
import '../../common/js/rem'
import '../../common/style/reset.css'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.axios = axios

const router = new VueRouter({
  routes,
  base: '/yctv/',
  mode: 'history',
  saveScrollPosition: true
})

// 导航守卫
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: { Index },
  template: '<Index/>'
})

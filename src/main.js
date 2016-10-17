// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Login from './components/Login'
import qrcodeLogin from './components/qrcodeLogin'
Vue.use(VueRouter)

/* eslint-disable no-new */

const routes = [
  { path: '/login', component: Login },
  { path: '/qrcodelogin', component: qrcodeLogin }
]
var router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

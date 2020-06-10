import Vue from 'vue'
import VueRouter from 'vue-router'
import Vant from 'vant'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import Component from './components/Vant.vue'
import 'vant/lib/index.less'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vant)

const routes = [
  { path: '/', component: Login },
  { path: '/hello-world', component: HelloWorld },
  { path: '/login', component: Login },
  { path: '/vant', component: Component }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

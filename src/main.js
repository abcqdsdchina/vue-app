import Vue from 'vue'
import VueRouter from 'vue-router'
import Button from 'vantx'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Button)

const routes = [
  { path: '/', component: Login },
  { path: '/hello-world', component: HelloWorld },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

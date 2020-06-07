import Vue from 'vue'
import VueRouter from 'vue-router'
import { Button } from 'vantx'
import { Card } from 'vantx'
import { Cell } from 'vantx'
import { Col, Row } from 'vantx'
import { List } from 'vantx'
import { Sidebar, SidebarItem } from 'vantx'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import Vant from './components/Vant.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Card)
Vue.use(Cell)
Vue.use(Col)
Vue.use(Row)
Vue.use(List)
Vue.use(Sidebar)
Vue.use(SidebarItem)

const routes = [
  { path: '/', component: Login },
  { path: '/hello-world', component: HelloWorld },
  { path: '/login', component: Login },
  { path: '/vant', component: Vant }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

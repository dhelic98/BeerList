import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import AllBeers from './components/AllBeers.vue'
import Beer from './components/Beer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: AllBeers
  },
  {
    path: '/beer/:beerID', component: Beer
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false


Vue.prototype.$axios = axios.create({
    baseURL: 'https://l8r.netlify.com/.netlify/functions/',
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

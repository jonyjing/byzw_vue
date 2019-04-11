import '@/styles/index.scss'
import 'animate.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Element, {
  size: 'medium'
})

Vue.config.productionTip = false

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})

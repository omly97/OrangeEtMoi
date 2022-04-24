import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from './plugins/axios'
import vuetify from './plugins/vuetify'
import moment from './plugins/moment'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  axios,
  vuetify,
  moment,
  render: h => h(App)
}).$mount('#app')

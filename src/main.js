import Vue from 'vue'
import App from './App.vue'
// import router from './router/index'
import axios from './plugins/axios'
import vuetify from './plugins/vuetify'
import moment from './plugins/moment'

Vue.config.productionTip = false

new Vue({
  // router,
  axios,
  vuetify,
  moment,
  render: h => h(App)
}).$mount('#app')

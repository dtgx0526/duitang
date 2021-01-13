import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from '@/app/http'


Vue.config.productionTip = false
Vue.prototype.$http=axios


import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: "https://2url.cc/1OwrB",
});


// import axios from '@/app/http'
Vue.config.productionTip = false
// Vue.prototype.$http = axios
let jwt = localStorage.getItem('_token')
if(jwt){
  store.commit('global/setJwt',jwt)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

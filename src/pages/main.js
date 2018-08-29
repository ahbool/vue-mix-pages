import '@/assets/style/common.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '@/common/config'
import routes from '@/router/router'
import store from '@/store'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

export default {
  init(component) {
    routes.push({
      path: location.pathname,
      component
    })

    const router = new VueRouter({
        mode: config.vueRouterMode,
        routes
    })

    new Vue({
        router,
        store,
        template: '<App/>',
        components: {App},
        created(){
          if(router.mode === 'hash' && !location.hash) {
            this.$router.push(location.pathname)
          }
        }
    }).$mount('#app')
  }
}

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import responsive from 'vue-responsive'
import x5GMaps from 'x5-gmaps'


Vue.use(responsive)
Vue.use(x5GMaps, 'AIzaSyBwsk-82icJPc2VCgKh9phGhAMaBW5soB8')

Vue.config.productionTip = false

new Vue({
  vuetify,

  data () {
    return {
      info: null
    }

  },
  router,
  render: h => h(App)
}).$mount('#app')


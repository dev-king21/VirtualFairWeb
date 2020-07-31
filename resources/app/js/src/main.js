import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import axios from './axios.js'
import acl from './acl/acl'
import router from './router'
import store from './store/store'
import i18n from './i18n/i18n'
import VueClipboard from 'vue-clipboard2'
import VueTour from 'vue-tour'
import VeeValidate from 'vee-validate'
import * as VueGoogleMaps from 'vue2-google-maps'
import { VueHammer } from 'vue2-hammer'
import VueLazyLoad from 'vue-lazyload'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import './http/requests'
import './fake-db/index.js'
import '../themeConfig.js'
import '@/firebase/firebaseConfig'
import './globalComponents.js'
import './filters/filters'

require('vue-tour/dist/vue-tour.css')
require('@assets/css/iconfont.css')

Vue.use(Vuesax)
Vue.prototype.$http = axios
Vue.use(VueClipboard)
Vue.use(VueTour)
Vue.use(VeeValidate)
Vue.use(VueLazyLoad)
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: 'AIzaSyB4DDathvvwuwlwnUu7F4Sow3oU22y5T1Y',
    libraries: 'places' // This is required if you use the Auto complete plug-in
  }
})

// Vuejs - Vue wrapper for hammerjs
Vue.use(VueHammer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  acl,
  render: h => h(App)
}).$mount('#app')
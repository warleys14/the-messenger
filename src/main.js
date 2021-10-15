import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import { MdDialog, MdButton } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdDialog)
Vue.use(MdButton)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

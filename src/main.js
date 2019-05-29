import Vue from 'vue'
import store from './store/stroe'
import Fly from 'flyio/dist/npm/wx'

import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store

let fly = new Fly
Vue.prototype.$fly = fly

const app = new Vue(App)
app.$mount()

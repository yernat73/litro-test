
require('./bootstrap');


import Vue from 'vue'
import store from './store'
import App from './components/App'
import VueTailwind from 'vue-tailwind'
import settings from "./settings"
import vSelect from 'vue-select'
import InputMask from 'vue-input-mask'
 
Vue.component('input-mask', InputMask)
Vue.component('v-select', vSelect)
Vue.use(VueTailwind, settings)

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
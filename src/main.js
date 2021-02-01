import Vue from 'vue'
import App from './App.vue'
import VueTailwind from 'vue-tailwind'
import './index.css'

import {
  TButton,
} from 'vue-tailwind/dist/components';
const settings = {

  't-button': {
    component: TButton,
    props: {
      classes: "p-1 m-3 h-32 bg-gold focus:outline-none focus:ring-2 focus:ring-moondist focus:ring-opacity-50 rounded-xl shadow-md font-extrabold text-2xl"
      // ...More settings
    }
  },
    // ...Rest of the components
}
Vue.use(VueTailwind, settings)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
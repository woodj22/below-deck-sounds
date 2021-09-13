import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
    config: { id: "G-VY11NMTK14" }
}).mount('#app')

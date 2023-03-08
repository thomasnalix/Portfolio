import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VWave from "v-wave";

AOS.init();

createApp(App).use(VWave).use(router).mount('#app')

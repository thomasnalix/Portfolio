import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VWave from "v-wave";
import {marked} from 'marked';

const markedMixin = {
    methods: {
        md: function (input) {
            return marked (input);
        },
    },
};
AOS.init();

createApp(App).use(VWave).mixin(markedMixin).use(router).mount('#app')

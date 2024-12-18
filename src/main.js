import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// PrimeVue imports
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// Others third party
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)

app.use(createPinia())
app.use(router)

// PrimeVue configuration
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
});

// Others third party
app.use(MotionPlugin)


app.mount('#app')

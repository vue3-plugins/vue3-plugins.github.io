import { createApp } from 'vue'
import VueGtag from 'vue-gtag'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Vue3Katex from 'vue3-katex'
import 'katex/dist/katex.min.css'

import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(Vue3Katex, {
  mhchem: true,
  globalOptions: {
    //... Define globally applied KaTeX options here
  },
})
app.use(VueGtag, {
  config: { 
    id: 'G-B10R9JKHCQ',
  }
})
app.mount('#app')

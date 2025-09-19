import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import './index.css'
import i18n from './i18n.js'
import { createHead } from '@unhead/vue/client'

const head = createHead()

createApp(App).use(router).use(head).use(i18n).mount('#app')

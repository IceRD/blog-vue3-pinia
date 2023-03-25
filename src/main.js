import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './vuetify'
import i18n from './i18n'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).use(vuetify).use(i18n).mount('#app')

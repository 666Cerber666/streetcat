// main.ts
import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import Vue Router
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router' // Используем расширение .ts по умолчанию

import { Cropper, CircleStencil } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Import Tailwind CSS
import './index.css' 
import './style.css'

// Assumes your root component is App.vue
// and placed in same folder as main.ts
import App from './App.vue'

// Создаем маршрутизатор
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const myApp = createApp(App)

// Используем Vue Router в приложении
myApp.use(router)

myApp.component(
  'Cropper', Cropper
)

// Используем Quasar
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')

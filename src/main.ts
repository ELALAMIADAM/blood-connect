import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import '../tailwind.css'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Import fonts
import '@fontsource/montserrat/700.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'

const vuetify = createVuetify()
const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')

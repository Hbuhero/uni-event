import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify styles
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi', // Use MDI icons
    },
  });


const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

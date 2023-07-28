import { createApp } from 'vue'; 
import App from './App.vue';
import router from './router';

const app = createApp(App); // Crea la instancia de la aplicación

app.use(router); // Utiliza Vue Router en la aplicación

app.mount('#app'); // Monta la aplicación en el elemento con el id 'app'

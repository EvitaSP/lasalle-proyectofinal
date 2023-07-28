import { createRouter, createWebHistory } from 'vue-router'; // Importar funciones específicas de Vue Router

import landingPage from "../src/pages/landingPage";
import appPage from "../src/pages/appPage.vue";

const routes = [
  { path: '/', component: landingPage },
  { path: '/app-page', component: appPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
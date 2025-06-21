import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { createPinia } from 'pinia'; // Importa createPinia
import { useAuthStore } from './services/auth';
import { useCartStore } from './services/cart';

const app = createApp(App);
const pinia = createPinia(); // Crea una instancia de Pinia

app.use(router);
app.use(pinia); // Usa Pinia

//cargamos el carrito
const cartStore = useCartStore()
cartStore.loadCartFromLocalStorage()

const authStore = useAuthStore();
authStore.initializeAuth();

app.mount("#app");

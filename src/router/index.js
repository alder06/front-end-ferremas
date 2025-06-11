import { createRouter, createWebHistory } from "vue-router";
import UserView from "../views/userView.vue";
import CompraView from "../views/compraView.vue";
import ResultadoPagoView from "../views/ResultadoPagoView.vue";
import HomeView from "../views/homeView.vue"; // Usar "HomeView" con H mayúscula es una convención
import ProductosView from "@/views/ProductosView.vue";
import LoginView from "@/views/loginView.vue";
import RegistroView from "../views/RegistroView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView // Esta será tu página de inicio principal
  },
  {
    path: "/usuarios", // <--- CAMBIO IMPORTANTE: Nueva ruta para los usuarios
    name: "Usuarios",
    component: UserView
  },
  {
    path: "/compra",
    name: "Compra",
    component: CompraView
  },
  {
    path: "/resultado-pago",
    name: "ResultadoPago",
    component: ResultadoPagoView
  },
  {
    path: "/productos", // <-- Nueva ruta para la página de productos
    name: "Productos",
    component: ProductosView
  },
  {
    path:"/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/registrar",
    name: "Registrar",
    component: RegistroView
  }
];


export default createRouter({
  history: createWebHistory(),
  routes,
});
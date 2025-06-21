// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/homeView.vue";
import UserView from "../views/userView.vue";
import CompraView from "../views/compraView.vue";
import ResultadoPagoView from "../views/ResultadoPagoView.vue";
import ProductosView from "../views/productosView.vue";
import LoginView from "../views/loginView.vue";
import RegistroView from "../views/registroView.vue";
import CarritoView from "../views/carritoView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/usuarios",
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
    path: "/productos",
    name: "Productos",
    component: ProductosView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/registrar",
    name: "Registrar",
    component: RegistroView
  },
  {
    path: "/carrito",
    name: "Carrito de compra",
    component: CarritoView
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});

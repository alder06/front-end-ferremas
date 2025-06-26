import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/homeView.vue";
import UserView from "../views/userView.vue";
import CompraView from "../views/compraView.vue";
import ResultadoPagoView from "../views/ResultadoPagoView.vue";
import ProductosView from "../views/ProductosView.vue";
import RegistroView from "../views/RegistroView.vue";
import CarritoView from "../views/carritoView.vue";
import LoginBase from "@/views/LoginBase.vue";
import LoginFuncionario from "../views/LoginFuncionario.vue";
import LoginCliente from "../views/LoginCliente.vue";
import PedidosView from "../views/PedidosView.vue";

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
    path: "/login-base",
    name: "LoginBase",
    component: LoginBase
  },
  {
    path: "/login-funcionario",
    name: "LoginFuncionario",
    component: LoginFuncionario
  },
  {
    path: "/login-cliente",
    name: "LoginCliente",
    component: LoginCliente
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
  },
  {
    path: "/pedidos",
    name: "Pedidos",
    component: PedidosView
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});

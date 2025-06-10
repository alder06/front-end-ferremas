import { createRouter, createWebHistory } from "vue-router";
import UserView from "../views/userView.vue";
import CompraView from "../views/compraView.vue";
import ResultadoPagoView from "../views/ResultadoPagoView.vue";

const routes = [
  { path: "/", name: "Usuarios", component: UserView },
  { path: "/compra", name: "Compra", component: CompraView },
  {
    path: "/resultado-pago",
    name: "ResultadoPago",
    component: ResultadoPagoView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
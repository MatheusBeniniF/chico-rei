import { createRouter, createWebHistory } from "vue-router";

import CheckoutView from "@/views/CheckoutView.vue";
import HomeView from "@/views/HomeView.vue";
import CamisetasClaras from "@/views/CamisetasClaras.vue";
import CamisetasEscuras from "@/views/CamisetasEscuras.vue";
import DesafioExtra from "@/views/DesafioExtra.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/checkout", component: CheckoutView },
  { path: "/camisetas-claras", component: CamisetasClaras },
  { path: "/camisetas-escuras", component: CamisetasEscuras },
  { path: "/desafio-14", component: DesafioExtra },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

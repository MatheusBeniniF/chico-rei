import { createRouter, createWebHistory } from "vue-router";

import CheckoutView from "@/views/CheckoutView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/checkout", component: CheckoutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

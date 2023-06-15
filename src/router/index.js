import Home from "../views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("../views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import("../views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () => import("../views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import("../views/Panama.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

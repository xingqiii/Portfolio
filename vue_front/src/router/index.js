import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/Games",
    name: "Games",
    component: () => import("@/views/Games.vue"),
  },
  {
    path: "/Projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: "/Settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

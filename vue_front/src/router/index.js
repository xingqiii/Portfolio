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
  {
    path: "/Register",
    name: "Register",
    component: () => import("@/views/Auth/Register.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/views/Auth/Login.vue"),
  },
  {
    path: "/Logout",
    name: "Logout",
    component: () => import("@/views/Auth/Logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

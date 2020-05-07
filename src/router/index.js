import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import authGuard from "./auth-guard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: 'zoom' }

  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { transition: 'zoom' }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    meta: { transition: 'zoom' }
  },
  {
    path: "/username",
    name: "Username",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Username.vue"),
    meta: { transition: 'zoom' },
    beforeEnter: authGuard

  },
  {
    path: "/chat",
    name: "Chat",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Chat.vue"),
    meta: { transition: 'zoom' },
    beforeEnter: authGuard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

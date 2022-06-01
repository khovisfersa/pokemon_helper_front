import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Pokemon from "../views/Pokemon.vue";
import Trainer from "../views/Trainer.vue";
import Area from "../views/Area.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/pokemon/generate",
    name: "pokemon",
    component: Pokemon,
  },
  {
    path: "/trainer",
    name: "trainer",
    component: Trainer,
  },
  {
    path: "/area",
    name: "area",
    component: Area,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

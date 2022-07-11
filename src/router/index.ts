import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Pokemon from "../views/Pokemon.vue";
import Trainer from "../views/Trainer.vue";
import Area from "../views/Area.vue";
import Home from "../views/Home.vue";
import SearchPokemon from "../components/pokemon/SearchPokemon.vue"
import MakeTrainer from "../components/trainer/makeTrainer.vue"
import GenerateTrainer from "../components/trainer/generateTrainer.vue"
// import SearchPokemon from "../views/pokemon/SearchPokemon.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component:Pokemon,
    children: [
      {
        path:"/pokemon/generate",
        name:"generate_pokemon",
        component: SearchPokemon
      },
      {
        path:"/pokemon/make",
        name:"make_pokemon",
        component: Pokemon
      }
    ]
  },
  {
    path: "/trainer",
    name: "trainer",
    component: Trainer,
    children: [
      {
        name: "make_trainer",
        path: "/trainer/make",
        component: MakeTrainer
      },
      {
        name: "generate_trainer",
        path: "/trainer/generate",
        component: GenerateTrainer
      }
    ]
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

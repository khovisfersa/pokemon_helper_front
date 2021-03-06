import Vue from "vue";
import createApp from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

Vue.prototype.$axios = axios;

Vue.prototype.$api = "http://localhost:5000";
// Vue.prototype.$pokeapi = "https://pokeapi.co/api/v2/pokemon/";



const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

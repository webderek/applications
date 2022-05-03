import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from "./router/index";
import "@/assets/styles.scss";
import "normalize.css";
import store from "./store/index.js"
Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})

import Vue from 'vue';
import App from './pages/mainPage.vue';
import VueRouter from 'vue-router';
import router from "@/router/index";
import "@/assets/styles.scss";
Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

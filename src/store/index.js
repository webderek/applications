import Vue from 'vue';
import Vuex from 'vuex';
import category from "@/store/modules/category";
import main from "@/store/modules/main";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {category, main},
})
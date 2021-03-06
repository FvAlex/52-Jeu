import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import { BootstrapVue } from "bootstrap-vue";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
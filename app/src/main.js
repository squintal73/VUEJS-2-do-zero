import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

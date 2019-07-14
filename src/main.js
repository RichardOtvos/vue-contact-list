import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { contactStore as store, SELECT_CONTACT } from './store';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.dispatch(SELECT_CONTACT, to.params.selectedId);
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

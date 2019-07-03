import Vue from 'vue';
import Router from 'vue-router';
import Details from './views/Details';
import New from './views/New';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/new',
      name: 'newContact',
      component: New
    },
    {
      path: '/details/:selectedId?',
      name: 'details',
      component: Details
    },
    { path: '*', redirect: { name: 'details' } }
  ]
});

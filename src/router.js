import Vue from 'vue';
import Router from 'vue-router';
import Details from './views/Details';
import NewContact from './views/NewContact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/new',
      name: 'newContact',
      component: NewContact
    },
    {
      path: '/details/:selectedId',
      name: 'details',
      component: Details,
      props: true
    },
    { path: '*', redirect: { name: 'details' } }
  ]
});

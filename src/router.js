import Vue from 'vue';
import Router from 'vue-router';
import Details from './views/Details';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'details'}
    },
    {
      path: '/details',
      redirect: {name: 'details'}
    },
    {
      path: '/details/:selectedId',
      name: 'details',
      component: Details,
      props: true
    },
    { path: '*', redirect: '/' }
  ]
});

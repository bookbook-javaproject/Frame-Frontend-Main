import Vue from 'vue';
import Router from 'vue-router';
import { FirstView, Login } from '@/components';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'first',
      path: '/first',
      component: FirstView,
    },
    {
      name : 'login',
      path : '/login',
      component : Login
    }
  ],
});

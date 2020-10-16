import Vue from 'vue';
import Router from 'vue-router';
import { FirstView } from '../components';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FirstView,
    },
  ],
});

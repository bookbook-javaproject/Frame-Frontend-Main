import Vue from 'vue';
import Router from 'vue-router';
import { FirstView , PasswordResetAuth } from '@/components';

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
      name : 'passwordResetAuth',
      path : '/passwordResetAuth',
      component : PasswordResetAuth
    }
  ],
});

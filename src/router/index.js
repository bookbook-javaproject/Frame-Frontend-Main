import Vue from 'vue';
import Router from 'vue-router';
import { FirstView, SignUp, Login, MainPage, PasswordResetAuth, WriterApply, PoembookApply,Write } from '@/components';
import {TrendingPostList, RecentPostList, NoticePostList} from '@/components/Post/index.js';

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
      path : '/password-reset',
      component : PasswordResetAuth
    },
    {
      name: 'test',
      path: '/',
      component: MainPage,
      children:[
        {
          name: 'TrendingPostList',
          path:'/trending',
          component: TrendingPostList
        },
        {
          name: 'RecentPostList',
          path:'/recent',
          component: RecentPostList
        },
        {
          name: 'NoticePostList ',
          path:'/notice',
          component: NoticePostList
        },
        {

          path:'write',
          component: Write
        }
      ]
    },
    // {
    //   name: 'recent',
    //   path: '/recent',
    //   component:'RecentView'
    
    // }
    { 
      name : 'login',
      path : '/login',
      component : Login
    },
    {
      name : 'signUp',
      path : '/sign-up',
      component : SignUp
    },
    {
      name : 'writerApply',
      path : '/writer-apply',
      component : WriterApply
    }, 
    {
      name : 'poembookApply',
      path : '/poembook-apply',
      component : PoembookApply
    }
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import { FirstView, SignUp, Login, MainPage, PasswordResetAuth, WriterApply, PoembookApply } from '@/components';
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
      path : '/passwordResetAuth',
      component : PasswordResetAuth
    },
    {
      name: 'test',
      path: '/',
      component: MainPage,
      children:[
        {
          name: 'TrendingPostList',
          path:'trending',
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
        // {
        //   path:'write',
        //   component: Write
        // }
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
      path : '/signUp',
      component : SignUp
    },
    {
      name : 'writerApply',
      path : '/writerApply',
      component : WriterApply
    }, 
    {
      name : 'poembookApply',
      path : '/poembookApply',
      component : PoembookApply
    }
  ],
});

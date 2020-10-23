import Vue from 'vue';
import Router from 'vue-router';
import { FirstView, MainPage, Login } from '@/components';
import {TrendingPostList, RecentPostList, NoticePostList} from '@/components/Post/index.js';



// import { RecentView } from '@/components';

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
    }
  ],
});

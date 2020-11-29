import Vue from 'vue';
import Router from 'vue-router';
import { FirstView, SignUp, UserPage,
  Login, MainPage, PasswordResetAuth,
   WriterApply, PoembookApply,Write,userProfile } from '@/components';
import {TrendingPostList,PICForm, RecentPostList, NoticePostList} from '@/components/Post/index.js';
import {ILoveItForm, MyWritingForm,userFollowing,userFollower} from '@/components/UserPage/index.js';

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
          path:'/',
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

          path:'/write',
          component: Write
        },
        { 
          path: '/post/:id', component: PICForm
        },
        {
          name: 'userpage',
          path: '/userpage/:username',
          component: UserPage,
          children:[
            {
              name: 'MyWriting',
              path:'/',
              component:MyWritingForm
            },
            {
              name: 'ILoveItForm',
              path: 'ILoveItForm',
              component: ILoveItForm
            },
            {
              name: 'Following',
              path:'userFollowing',
              component: userFollowing
            },
            {
              name: 'Follower',
              path:'userFollower',
              component: userFollower
            }
          ]
        },
        {
          name:'setting-user-profile',
          path:'setProfile',
          component:userProfile
  
        }
      ]
    },


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

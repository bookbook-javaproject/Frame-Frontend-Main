import Vue from 'vue';
import App from '@/App.vue';

import router from '@/router';
import store from '@/store';
import '@/assets/style/global.scss';

Vue.config.productionTip = false;

if (localStorage.getItem('isFirstTime') !== 'false') {
  router.push('first');
}

const isAccessAble = ['/login', '/sign-up', '/first', '/password-reset'];

router.beforeEach((to, _, next) => {
  if (!localStorage.getItem('accessToken')) {
    if (~isAccessAble.indexOf(to.fullPath)) {
      next();
    } else {
      alert('로그인 후 이용해 주세요.')
      router.push('/login');
    }
  } else {
    next();
  }
});


new Vue({
  router,
  store,
  render: (h) => h(App),
  
}).$mount('#app');

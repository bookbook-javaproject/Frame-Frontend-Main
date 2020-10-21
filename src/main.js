import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/assets/style/global.scss';

Vue.config.productionTip = false;

if (localStorage.getItem('isFirstTime') !== 'false') {
  router.push('first');
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

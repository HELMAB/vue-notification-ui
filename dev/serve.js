import Vue from 'vue';
import Dev from './serve.vue';
// import 'font-awesome/css/font-awesome.css'
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import VueNotificationUi from '@/entry.esm';
Vue.use(VueNotificationUi, {
  position: 'notification-top-right', // top, bottom, left, right
  duration: 36000, // default
  left: 20, // default
  bottom: 20, // default
  top: 20, // default
  right: 40 // default
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');

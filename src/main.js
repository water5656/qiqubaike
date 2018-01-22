// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import VueTouch from 'vue-touch'
import VueLazyload from 'vue-lazyload'

Vue.use(Vueaxios,axios);
Vue.use(VueTouch,{name:'v-touch'});
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '../static/123.gif',
  attempt: 1
})
Vue.config.productionTip = false

// import movie from "./views/movie";
// import music from "./views/music";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

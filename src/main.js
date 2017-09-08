import Vue from 'vue'
import App from './App'
import router from './router'

import './common/stylus/fonts.styl'

import { Swipe, SwipeItem,Navbar, TabItem,Search } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);

import VueScroller from 'vue-scroller'
Vue.use(VueScroller);



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

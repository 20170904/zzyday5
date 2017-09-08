import Vue from 'vue'
import Router from 'vue-router'

import souye from '../components/souye/souye.vue'
import maoliang from '../components/maoliang/maoliang.vue'
import temai from '../components/temai/temai.vue'
import guantou from '../components/guantou/guantou.vue'
import caopin from '../components/caopinshipin/caopin.vue'
import xinmiao from '../components/xinmiao/xinmiaoketang.vue'
import fenlei from '../components/fenlei/fenlei.vue'
import gouwuche  from '../components/gouwuche/gouwucge.vue'
import denglu  from '../components/denglu/denglu.vue'

Vue.use(Router);

export default new Router({
  linkActiveClass:"active",
  routes: [
    {path: '/', redirect:'/souye'},
    {path:'/souye',component:souye},
    {path:'/maoliang',component:maoliang},
    {path:'/temai',component:temai},
    {path:'/guantou',component:guantou},
    {path:'/caopin',component:caopin},
    {path:'/xinmiao',component:xinmiao},
    {path:'/fenlei',component:fenlei},
    {path:'/gouwuche',component:gouwuche},
    {path:'/denglu',component:denglu},

  ]
})

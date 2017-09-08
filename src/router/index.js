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
import homer from '../components/home/home.vue'
import loginCommon from '../components/loginCommon/loginCommon.vue'
import loginPhoneNumber from '../components/loginPhoneNumber/loginPhoneNumber.vue'
import  detail from '../components/detail/detail.vue'
Vue.use(Router);


export default new Router({
  linkActiveClass:"active",
  routes:  [
    {path: '/', redirect:'/detail'},
    {path:'/detail',component:detail},
    /*{path: '/', redirect:'/home/souye'},*/
    {path:'/home',component:homer, children: [
        {path:'/home/souye',component:souye},
        {path:'/home/maoliang',component:maoliang},
        {path:'/home/temai',component:temai},
        {path:'/home/guantou',component:guantou},
        {path:'/home/caopin',component:caopin},
        {path:'/home/xinmiao',component:xinmiao},
    ]},
    {path:'/fenlei',component:fenlei },
    {path:'/gouwuche',component:gouwuche},
    {path:'/denglu',  redirect:'/denglu/loginCommon',component:denglu,children: [
      {path:'/denglu/loginCommon',component:loginCommon},
      {path:'/denglu/loginPhoneNumber',component:loginPhoneNumber}] },
]
})

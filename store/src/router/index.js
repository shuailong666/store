import Vue from 'vue'
import Router from 'vue-router'
import Tou from '@/components/Tou'
import Wei from '@/components/Wei'
import Zdj from '@/components/Zdj'
import Daoh from '@/components/Daoh'
import Tuijian from '@/components/Tuijian'

Vue.use(Router)

export default new Router({
  routes: [
    // 龙
    {
      path: '/tou',
      name: 'Tou',
      component: Tou
    },{
      path: '/wei',
      name: 'Wei',
      component: Wei
    },
    {
      path: '/',
      name: 'Tou',
      components:{
        '/tou':Tou,
        '/daoh':Daoh,
        '/wei':Wei,
        default:Tuijian
      }
    },
    {
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },
    {
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },
    {
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },
    {
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },
    {
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },
   // 宽
    {
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },
    // 胜
    {
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },{
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },









  ]
})

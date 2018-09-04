import Vue from 'vue'
import Router from 'vue-router'
import Tou from '@/components/Tou'
import Wei from '@/components/Wei'
import Neirong from '@/components/Neirong'
import Zdj from '@/components/Zdj'
import Daoh from '@/components/Daoh'
import Tuijian from '@/components/Tuijian'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tou',
      name: 'Tou',
      component: Tou
    },
    {
      path: '/neirong',
      name: 'Neirong',
      component: Neirong
    },
    {
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
        default:Neirong
      }
    },
    {
      path: '/tt',
      name: 'Tuijian',
      component: Tuijian
    },
  ]
})

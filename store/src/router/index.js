import Vue from 'vue'
import Router from 'vue-router'
import Tou from '@/components/Tou'
import Wei from '@/components/Wei'
import Neirong from '@/components/Neirong'
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
        '/wei':Wei,
        default:Neirong
      }
    }
  ]
})

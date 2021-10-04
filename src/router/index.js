import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import KakaoLogin from '@/view/KakaoLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/KakaoLogin',
      name: 'KakaoLogin',
      component: KakaoLogin
    }
  ],
  mode: 'history'
})

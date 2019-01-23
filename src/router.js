import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Odd from '@/components/HelloWorldOdd'
import Even from '@/components/HelloWorldEven'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/odd',
          name: 'odd',
          component: Odd
      },
      {
        path: '/even',
          name: 'even',
          component: Even
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about"  */ './views/About.vue')
    }
  ]
})

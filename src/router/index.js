import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DemoRoot from '@/components/demo/index'
import List from '@/components/demo/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'DemoRoot',
      component: DemoRoot,
      children: [
        {
          path: 'list',
          name: 'List',
          component: List
        }
      ]
    }
  ]
})

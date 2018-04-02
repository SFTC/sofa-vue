import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Button from '../../../packages/button';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/component',
      component: Button
    }
  ]
})

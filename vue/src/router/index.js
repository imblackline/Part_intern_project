import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: () => import('../views/questionnaire'),
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/list')
      },
      {
        path: '/questions',
        name: 'question',
      },
      {
        path: '/complete',
        name: 'complete',
      }
    ]
  },
  {
    path: '/gate',
    name: 'gate',
    component: () => import('../views/gate'),
    children: [
      {
        path: '/signin',
        name: 'signin',
      },
      {
        path: '/signup',
        name: 'signup',
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

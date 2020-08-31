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
        path: 'questions',
        name: 'question',
        component: () => import('../views/questions')
      },
      {
        path: 'complete',
        name: 'complete',
        component: () => import('../views/complete')
      }
    ]
  },
  {
    path: '/gate',
    name: 'gate',
    component: () => import('../views/gate'),
    children: [
      {
        path: 'signin',
        name: 'signin',
        component: () => import('../views/signin.vue')
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('../views/signup.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

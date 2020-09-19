import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
    
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    beforeEnter: function (to, from, next) {
      if(to.fullPath === "/questionnaire" || to.fullPath === "/questionnaire/"){
        next('/questionnaire/list')
      }
      else{
        next()
      }
      // console.log("to",to)
      // console.log("from",from)
    },
    component: () => import('../views/questionnaire'),
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List')
      },
      {
        path: 'questions',
        name: 'questions',
        // beforeEnter: function (to, from, next) {
        //   if(){
        //     next('/questionnaire/list')
        //   }
        //   else{
        //     next()
        //   }
        // },
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
    beforeEnter: function (to, from, next) {
      if(to.fullPath === "/gate" || to.fullPath === "/gate/"){
        next('/gate/signin')
      }
      else{
        next()
      }
    },
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

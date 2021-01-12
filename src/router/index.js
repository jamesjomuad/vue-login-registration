import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import guest from '../middleware/guest'
import auth from '../middleware/auth'

Vue.use(VueRouter)

function page (path) {
  return () => import(`../views/${path}`).then(m => m.default || m)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => page('Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => page('Login.vue'),
    // meta: {
    //   middleware: [ guest ]
    // }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => page('Register.vue'),
    meta: {
      middleware: [ guest ]
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => page('Dashboard.vue'),
    meta: {
      title: "Dashboard",
      middleware: [ auth ]
    }
  },
  // 404
  {
    path: '*',
    component: page('errors/404.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context
  })
})

export default router

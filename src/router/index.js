import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import guest from '../middleware/guest'
import auth from '../middleware/auth'
import log from '../middleware/log'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: page('Home.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: page('Login.vue'),
    meta: {
      title: 'Login',
      middleware: [ guest, log]
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: page('Register.vue'),
    meta: {
      title: 'Register',
      middleware: [ guest ]
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: page('Dashboard.vue'),
    meta: {
      title: "Dashboard",
      middleware: [ auth ]
    }
  },
  // 404
  {
    path: '*',
    component: page('errors/404.vue'),
    meta: {
      title: "Page not found",
    }
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

  const nextMiddleware = nextFactory(context, middleware, 1);

  return middleware[0]({
    ...context,
    next: nextMiddleware
  })
})

function page (path) {
  return () => import(`../views/${path}`).then(m => m.default || m)
}

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

export default router

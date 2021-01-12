export default function guest ({ next, store }) {
  if (store.getters.isAuthenticated) {
    next({ 
      path: '/dashboard' 
    })
  } else {
    next()
  }
}

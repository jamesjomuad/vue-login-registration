export default function guest ({ next, store }) {
  if (store.getters.isAuthenticated) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

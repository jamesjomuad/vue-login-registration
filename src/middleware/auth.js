export default function auth ({ next, store }){
    if(!store.getters.isAuthenticated){
        return next({
           path: '/login'
        })
    }
   
    return next()
}
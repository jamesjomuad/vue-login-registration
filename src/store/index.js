import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    loggedIn: false,
    user: {
      isSubscribed: false,
      status: "active"
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    user(state){
      return state.user
    }
  },
  mutations: {
    AUTH_SUCCESS (state, { user }) {
      state.user = user
      state.token = user.password
      localStorage.setItem('user-token', user.password)
    },
    AUTH_FAILURE(state) {
      state.token = null
    },
    AUTH_LOGOUT(state){
      localStorage.removeItem('user-token')
      state.token = ''
    }
  },
  actions: {
    async login({commit}){
      try {
        const { data } = await axios.get('https://5ff727a0e7164b0017e1a3a0.mockapi.io/api/v1/users/1')
        commit('AUTH_SUCCESS',{ user: data })
      } catch (e) {
        console.log("AUTH_FAILURE")
        throw(e)
      }
    },
    logout: ({commit}) => {
      return new Promise((resolve) => {
        commit('AUTH_LOGOUT')
        resolve()
      })
    }
  }
})

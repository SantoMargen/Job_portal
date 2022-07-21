import Vue from 'vue'
import Vuex from 'vuex'
import instanceAxios from '../apis/instanceAxios'
import Swal from 'sweetalert2'
// import router from router

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    jobs: []
  },
  mutations: {
    FETCH_JOBS (state, payload) {
      state.jobs = payload
    },
    SET_ISLOGEDIN (state, payload) {
      state.isLogged = payload
    }
  },
  actions: {
    async handlerLogin (contex, payload) {
      try {
        const response = await instanceAxios({
          method: 'POST',
          url: '/applicant/login',
          data: payload
        })
        localStorage.setItem('access_token', response.data.access_token)
        contex.commit('SET_ISLOGEDIN', true)
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      }
    },
    async fetchJobs ({ commit }) {
      try {
        const response = await instanceAxios({
          method: 'GET',
          url: '/jobs'
        })
        const jobs = response.data
        console.log(jobs)
        commit('FETCH_JOBS', jobs)
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      }
    }
  },
  modules: {}
})

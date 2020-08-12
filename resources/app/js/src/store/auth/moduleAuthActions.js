import axios from '../../http/axios/index.js'

export default {

  login ({ commit }, payload) {
    
    return new Promise((resolve, reject) => {
      
      axios.post('/api/auth/login', JSON.parse(JSON.stringify(payload)))
        .then(response => {
          if (response.data.user) {
            localStorage.setItem('accessToken', response.data.access_token)
            commit('UPDATE_USER_INFO', response.data.user)
            commit('SET_BEARER', response.data.access_token)
            resolve(response)
          } else {
            reject({message: 'Wrong Email or Password'})
          }
        })
        .catch(error => { reject(error) })
    })
  },
  register ({commit}, payload) {
    return new Promise((resolve, reject) => {
      axios.post('/api/auth/register', JSON.parse(JSON.stringify(payload)))
        .then(response => {
          resolve(response)
        })
        .catch(error => { reject(error) })
    })
  },
  logout ({commit}) {
    return new Promise((resolve, reject) => {
      
      axios.post('/api/auth/logout')
        .then(() => {
          commit('REMOVE_BEARER')
          localStorage.removeItem('userInfo')
        })
        .catch(error => { reject(error) })
      
    })
  },
  logged ({commit}) {
    commit('SET_BEARER')
  },
  fetchAccessToken () {
    return new Promise((resolve) => {
      return axios.post('/api/auth/refresh-token', {accessToken: localStorage.getItem('accessToKen')})
        .then(response => { resolve(response) })
    })
  }
}

import axios from '../../http/axios/index.js'

export default {

  login ({ commit }, payload) {
    
    return new Promise((resolve, reject) => {
      
      axios.post('/api/admin/auth/login', JSON.parse(JSON.stringify(payload)))
        .then(response => {
          console.log(response.data)
          if (response.data.key) {
            localStorage.setItem('accessToken', response.data.access_token)
            commit('UPDATE_USER_INFO', response.data.key)
            commit('SET_BEARER', response.data.access_token)
            resolve()
          } else {
            reject({message: 'Wrong Key or Password'})
          }
        })
        .catch(() => {
          reject({message: 'Wrong Key or Password'})
        })
    })
  },
  logout ({commit}) {
    return new Promise((resolve, reject) => {
      
      axios.post('/api/admin/auth/logout')
        .then(() => {
          commit('REMOVE_BEARER')
          localStorage.removeItem('activateKey')
          resolve()
        })
        .catch(error => { reject(error) })
      
    })
  },
  logged ({commit}) {
    const key = localStorage.getItem('activateKey')
    commit('SET_ROLE', key === 'admin')
    commit('SET_BEARER')
  },
  fetchAccessToken () {
    return new Promise((resolve) => {
      return axios.post('/api/auth/refresh-token', {accessToken: localStorage.getItem('accessToKen')})
        .then(response => { resolve(response) })
    })
  }
}

import axios from '../../http/axios/index.js'

export default {

  login ({ commit }, payload) {
    
    return new Promise((resolve, reject) => {
      
      axios.post('/api/admin/auth/login', JSON.parse(JSON.stringify(payload)))
        .then(response => {
          if (response.data.key) {
            console.log('auth login res', response.data)
            const data = response.data
            localStorage.setItem('adminAccessToken', data.access_token)
            localStorage.setItem('activateKey', data.key)
            if (data.key !== 'admin') {
              localStorage.setItem('userInfo', JSON.stringify(data.user))
            }
            commit('UPDATE_USER_INFO', data)
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
          localStorage.removeItem('userInfo')
          resolve()
        })
        .catch(error => { reject(error) })
      
    })
  },
  logged ({commit}) {
    const key = localStorage.getItem('activateKey')
    const userInfoStr = localStorage.getItem('userInfo')
    let userInfo = {}
    if (userInfo) userInfo = JSON.parse(userInfoStr)
    const user = {key, userInfo}
    commit('UPDATE_USER_INFO', user)
    commit('SET_BEARER')
  },
  fetchAccessToken () {
    return new Promise((resolve) => {
      return axios.post('/api/auth/refresh-token', {accessToken: localStorage.getItem('adminAccessToken')})
        .then(response => { resolve(response) })
    })
  }
}

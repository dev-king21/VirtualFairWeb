export default {
  SET_BEARER (state) {
    state.loggedIn = true
  },

  REMOVE_BEARER (state) {
    state.loggedIn = false
    state.admin = false
  },

  UPDATE_USER_INFO (state, payload) {
    localStorage.setItem('activateKey', payload)
    state.admin = payload === 'admin'
  },

  SET_ROLE (state, payload) {
    state.admin = payload
  }
}

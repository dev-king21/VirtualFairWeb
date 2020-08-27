export default {
  SET_BEARER (state) {
    state.loggedIn = true
  },

  REMOVE_BEARER (state) {
    state.loggedIn = false
    state.admin = false
    state.super = false
  },

  UPDATE_USER_INFO (state, payload) {
    state.admin = payload.key === 'admin'
    state.super = payload.key === 'super'
    if (payload.userInfo) state.userInfo = JSON.parse(JSON.stringify(payload.userInfo))
  },

  SET_ROLE (state, payload) {
    state.admin = payload
  }
}

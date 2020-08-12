
export default {
  SET_BEARER (state) {
    state.loggedIn = true
  },

  REMOVE_BEARER (state) {
    state.loggedIn = false
  },

  UPDATE_USER_INFO (state, payload) {

    // Get Data localStorage
    //const userInfo = JSON.parse(localStorage.getItem('userInfo')) //|| state.AppActiveUser
    const userInfo = {}

    for (const property of Object.keys(payload)) {
      if (payload[property] !== null) {
        userInfo[property] = payload[property]
      }
    }
    // Store data in localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }
}

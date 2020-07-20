/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module

==========================================================================================*/


import state from './moduleUserState.js'
import mutations from './moduleUserMutations.js'
import actions from './moduleUserActions.js'
import getters from './moduleUserGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}


/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module

==========================================================================================*/


import state from './moduleCountryState.js'
import mutations from './moduleCountryMutations.js'
import actions from './moduleCountryActions.js'
import getters from './moduleCountryGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}


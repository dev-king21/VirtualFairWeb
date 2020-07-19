/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module

==========================================================================================*/


import state from './moduleDataListState.js'
import mutations from './moduleDataListMutations.js'
import actions from './moduleDataListActions.js'
import getters from './moduleDataListGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}


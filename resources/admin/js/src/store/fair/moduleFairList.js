/*=========================================================================================
  File Name: moduleDataList.js
  Description: Calendar Module

==========================================================================================*/


import state from './moduleFairListState.js'
import mutations from './moduleFairListMutations.js'
import actions from './moduleFairListActions.js'
import getters from './moduleFairListGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}


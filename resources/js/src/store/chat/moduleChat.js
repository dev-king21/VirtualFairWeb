/*=========================================================================================
  File Name: moduleChat.js
  Description: Chat Module
========================================================================================= -->
  
==========================================================================================*/


import state from './moduleChatState.js'
import mutations from './moduleChatMutations.js'
import actions from './moduleChatActions.js'
import getters from './moduleChatGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

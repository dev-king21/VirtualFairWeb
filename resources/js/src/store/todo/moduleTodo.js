/*=========================================================================================
  File Name: moduleTodo.js
  Description: Todo Module
  ----------------------------------------------------------------------------------------
  
  Author: Pixinvent
  
==========================================================================================*/


import state from './moduleTodoState.js'
import mutations from './moduleTodoMutations.js'
import actions from './moduleTodoActions.js'
import getters from './moduleTodoGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

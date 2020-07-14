/*=========================================================================================
  File Name: moduleCalendar.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  
  Author: Pixinvent
  
==========================================================================================*/


import state from './moduleCalendarState.js'
import mutations from './moduleCalendarMutations.js'
import actions from './moduleCalendarActions.js'
import getters from './moduleCalendarGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

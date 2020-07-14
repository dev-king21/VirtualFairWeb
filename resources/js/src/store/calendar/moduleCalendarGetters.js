/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  
  Author: Pixinvent
  
==========================================================================================*/


export default {
  getEvent: state => (eventId) => state.events.find((event) => event.id === eventId)
}

/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters

========================================================================================= -->
  
==========================================================================================*/


export default {
  getEvent: state => (eventId) => state.events.find((event) => event.id === eventId)
}

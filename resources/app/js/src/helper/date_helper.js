export default {
  timeFormat (timeString) {
    console.log(timeString)
    const timeArr = timeString.split(':')  
    if (timeArr.length !== 3) return timeString
    
    if (parseInt(timeArr[0]) > 12) {
      return `${parseInt(timeArr[0]) - 12}:${timeArr[1]} PM`
    } else if (parseInt(timeArr[0]) === 12) {
      return `12:${timeArr[1]} PM`  
    } else {
      return `${parseInt(timeArr[0])}:${timeArr[1]} AM`  
    }
    
  }

}


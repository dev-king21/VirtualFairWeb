const dayStrEs = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB']
const monthStrEs = ['Enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const dayStrEn = ['MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT', 'SUN']
const monthStrEn = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export default {
  
  timeFormat (timeString) {
    const timeArr = timeString.split(':')  
    if (timeArr.length < 2) return timeString
    
    let hour = parseInt(timeArr[0])
    const minute =  timeArr[1]//timeArr[1] < 10 ? `0${timeArr[1]}` : timeArr[1]
    if (hour > 12) {
      hour = (hour < 22) ? `0${hour - 12}` : (hour - 12) 
      return `${hour}:${minute} pm`
    } else if (hour === 12) {
      return `12:${minute} pm`  
    } else {
      hour = (hour < 10) ? `0${hour}` : hour 
      return `${hour}:${minute} am`  
    }
    
  },

  today () {
    const dt = new Date()
    const year = dt.getFullYear()
    const month = (dt.getMonth() < 9) ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1
    const date = (dt.getDate() < 10) ? `0${dt.getDate()}` : dt.getDate()

    return `${year}-${month}-${date}`
  },

  dateFormatWithYear (dateString) {
    const dt = new Date(dateString)
    let language = localStorage.getItem("language")
    let dayStr = dayStrEn
    let monthStr = monthStrEn
    if(language === 'es') {
      dayStr = dayStrEs
      monthStr = monthStrEs
    }

    return `${dayStr[dt.getDay()]} ${dt.getDate()} de ${monthStr[dt.getMonth()]}, ${dt.getFullYear()}` 
  },

  dateFormatWithoutYear (dateString) {
    const dt = new Date(dateString)
    
    let language = localStorage.getItem("language")
    let dayStr = dayStrEn
    let monthStr = monthStrEn
    
    if(language === 'es') {
      dayStr = dayStrEs
      monthStr = monthStrEs
    }
    return `${dt.getDate() > 9 ? dt.getDate() : `0${dt.getDate()}`} DE ${monthStr[dt.getMonth()].toUpperCase()}` 
  },

  dayStringFromDate (dateString) {
    let language = localStorage.getItem("language")
    let dayStr = dayStrEn
    let monthStr = monthStrEn
    if(language === 'es') {
      dayStr = dayStrEs
      monthStr = monthStrEs
    }
    const date = new Date(dateString)
    return dayStr[date.getDay()]
  },

  dateStringFromDate (dateString) {
    const date = new Date(dateString)
    return `${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}`
  },

  monthStringFromDate (dateString) {
    let language = localStorage.getItem("language")
    let dayStr = dayStrEn
    let monthStr = monthStrEn
    if(language === 'es') {
      dayStr = dayStrEs
      monthStr = monthStrEs
    }
    const date = new Date(dateString)
    return monthStr[date.getMonth()]
  },

  yearStringFromDate (dateString) {
    const date = new Date(dateString)
    return date.getFullYear()
  }


}


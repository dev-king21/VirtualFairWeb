// axios
import axios from 'axios'

const baseURL = ''

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization =  `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(response => response,
  error => {
    console.log(error.message)
    if (error.message.lastIndexOf('status code 401') !== -1) {
      console.log('token not exist')
      localStorage.removeItem('userInfo')
      location.href = '/app/home'
    }
  }
)


export default instance
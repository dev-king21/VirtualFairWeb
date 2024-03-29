// axios
import axios from 'axios'

const baseURL = ''

const instance = axios.create({
  baseURL
  // You can add your headers here
})

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('adminAccessToken')
  if (token) {
    config.headers.Authorization =  `Bearer ${token}`
  } 
  return config
})

instance.interceptors.response.use(response => response,
  error => {
    if (error.message.lastIndexOf('status code 401') !== -1) {
      localStorage.removeItem('activateKey')
      localStorage.removeItem('admin')
      location.href = '/admin/auth/login'
    }
  }
)

export default instance
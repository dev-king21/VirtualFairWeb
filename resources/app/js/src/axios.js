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

export default instance
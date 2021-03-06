import axios from 'axios'
// 创建axios 实例
const service = axios.create({
  baseURL:process.env.VUE_APP_URL, 
  timeout: 10000
})
service.interceptors.request.use(
  config => {
      return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
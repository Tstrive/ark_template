import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.NODE_ENV == 'production' ? `/app/${process.env.VUE_APP_BASE_URL}` : process.env.VUE_APP_BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    config.headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage['hsja_X_token_base']}`,
      frontApplication: window.hsja_activePageData
    }
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data
    if (res.code !== 0 && res.code !== '0' && res.code !== 200) {
      console.log(res.msg || res.message)
      return Promise.reject(new Error(res.msg || res.message || 'Error'))
    } else {
      return res.data
    }
  },
  (error) => {
    console.log(error.message)
    return Promise.reject(error)
  }
)

export default service

import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.interceptors.request.use(
  config => {
    // const xToken = getXToken()
    // if (xToken !== null) {
    //   config.headers['X-Token'] = xToken

    // }
    // config.headers.Authorization = localStorage.getItem('Authorization')
    if (config.method === 'post') {
      config.data = qs.stringify({
        ...config.data,
        wdClientType: '3',
        wdAppId: '3',
        wdVersionName: '3.2.1',
        _t: Date.parse(new Date()) / 1000
      })
    } else if (config.method === 'get') {
      config.params = {
        ...config.params,
        wdClientType: '3',
        wdAppId: '3',
        wdVersionName: '3.2.1',
        _t: Date.parse(new Date()) / 1000
      }
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  }
)

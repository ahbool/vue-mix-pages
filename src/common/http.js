/**
 * http配置
 */
import axios from 'axios'
import qs from 'qs'
import conf from './config'

// axios 配置
axios.defaults.timeout = 20000
axios.defaults.baseURL = conf.apiBaseURL


// http request 拦截器
axios.interceptors.request.use(config => {

    let data = config.data || config.params

    if(config.method === 'post'){
        data = getRequestData(data)
        config.data = qs.stringify(data)
    } else {
        config.params = data
    }

    return config
}, error => {
    return Promise.reject(error)
})


// http response 拦截器
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject({
        code: -9999,
        msg: '网络异常'
    })
})


// 重置请求参数
function getRequestData(data) {
    data.userId = '11-22-33-44-55'
    data.token = 'test-1111'
    data.source = 'test-2222'

    return data
}


// 检查api返回的code值
function checkCode (res) {
    if (res.code === 9999) {
        //跳转到登录页
        return
    }

    res.success = res.code === 0

    return res
}

export default {
    post (url, data) {
        return axios({
            method: 'post',
            url: url,
            data: data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            validateStatus: function (status) {
                return status === 304 || (status >= 200 && status < 300)
            }
        }).then(
            (response) => {
                return response.data
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
    get (url, data) {
        return axios({
            method: 'get',
            url: url,
            params: data,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            validateStatus: (status) => {
                return status === 304 || (status >= 200 && status < 300)
            }
        }).then(
            (response) => {
                return response.data
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
    all (axiosArray) {
        return axios.all(axiosArray)
            .then(axios.spread(function() {
                return Array.prototype.slice.apply(arguments)
            }))
    }
}

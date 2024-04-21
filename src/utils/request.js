import axios from 'axios'


const request = axios.create({
    baseURL: 'http://localhost:9090',
    timeout: 30000
})


// 请求拦截器
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';

    // config.headers['token'] = 'token'
    return config;
}, error => {
    console.error('request error:' + error)
    return Promise.reject(error)
});

// 响应拦截器

request.interceptors.response.use(
    response => {
        let res = response.data;
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    }, error => {
        console.error('response error:' + error)
        return Promise.reject(error)
    })
export default request

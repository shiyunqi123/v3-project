import axios from 'axios'
import { showToast, showFailToast } from 'vant'
import router from '@/router'


console.log('import.meta.env', import.meta.env) 
axios.defaults.baseURL = import.meta.env.MODE === 'development' ? '//backend-api-01.newbee.ltd/api/v1' : '//backend-api-01.newbee.ltd/api/v1'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token')
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 响应拦截器
axios.interceptors.response.use(res => {   
    if (typeof res.data !== 'object')   {
        showFailToast('服务器异常')
        return Promise.reject(res)
    }

    if (res.data.resultCode !== 200) { 
        if (res.data.message) showFailToast(res.data.resultMsg)
        if (res.data.resultCode == 416) {
            router.push('/login')
        }
    
    
    if (res.data.data && window.location.hash =='#/login') {
        setLocal('token', res.data.data)
        axios.defaults.headers['token'] = res.data.data
    }
    return Promise.reject(res.data)
    }
    return res.data
})

export default axios


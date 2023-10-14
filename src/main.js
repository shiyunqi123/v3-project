import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import '@/common/style/theme.css'
import {Button, Form, Field, Toast } from 'vant'

const app = createApp(App);
app.use(router);
// 注册组件
app.use(Form).use(Field).use(Toast).use(Button)
app.mount('#app');




import { createRouter, createWebHistory } from 'vue-router'

const routes = createRouter({
    history: createWebHistory(),
    routes: [  
        {
            path: '/',
            redirect: '/home',
        } ,
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')    
        },
        { 
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')       
        },
        { 
            path: '/category',
            name: 'Category',
            component: () => import('../views/Category.vue')       
        },
        { 
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')       
        }
    ]       
})  
export default routes
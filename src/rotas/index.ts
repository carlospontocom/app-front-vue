import { createWebHistory, createRouter } from 'vue-router'
import type {RouterRecordRaw} from 'vue-router'
import HomePages from '../pages/HomePages.vue';
import SobrePages from '../pages/SobrePages.vue'
import LoginPages from '../pages/LoginPages.vue'

const routes: RouterRecordRaw[]=[
    {
        path: '/',
        name: 'home',
        component: HomePages
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: SobrePages
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPages
    }
]

export const router = createRouter({
    history: createWebHistory(), routes,
})
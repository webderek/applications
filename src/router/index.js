import VueRouter from 'vue-router'
import mainPage from '@/pages/mainPage'
import Graphics from "@/pages/graphics";
export  default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            name: 'main',
            component:mainPage,
        },
        {
            path: '/graphics',
            name: 'graphics',
            component:Graphics,
        },
    ]
})
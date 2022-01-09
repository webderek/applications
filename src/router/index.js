import VueRouter from 'vue-router'
import MainPage from '../pages/mainPage'
export  default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            component:MainPage,
            props: true
        },
    ]
})
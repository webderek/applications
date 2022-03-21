import VueRouter from 'vue-router';
import mainPage from '@/pages/mainPage';
import Graphics from "@/pages/graphics";
import TodoList from '@/pages/todoList';
export  default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            name: 'main',
            component:mainPage,
        },
        {
            path: '/todo',
            name: 'todo',
            component: TodoList
        },
        {
            path: '/graphics',
            name: 'graphics',
            component:Graphics,
        },
    ]
})
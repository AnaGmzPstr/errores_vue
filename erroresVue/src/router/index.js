import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/HomeView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/desti/:id',
        name: 'desti',
        component:()=> import('../components/Desti.vue'),
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
    });
export default router;

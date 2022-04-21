import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        /**
         * Dashboard
         */
        {
            path: '/dashboard',
            alias: '/',
            name: 'dashboard',
            component: () => import('../pages/Dashboard.vue')
        },

        /**
         * About
         */
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About.vue')
        },

        /**
         * 404 Not Found
         */
        {
            path: '*',
            name: 'NotFound',
            component: () => import('../pages/About.vue')
        },
    ]
});

export default router;

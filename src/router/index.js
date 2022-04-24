import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);


const ifAuthenticated = ( to, from, next ) => {
    return store.getters['auth/isAuthenticated'] ? next() : next({ name: 'login' })
}

const ifNotAuthenticated = ( to, from, next ) => {
    return ! store.getters['auth/isAuthenticated'] ? next() : next({ name: 'dashboard' })
}


const router = new VueRouter({
    mode: 'hash',
    routes: [
        /**
         * About
         */
        {
            path: '/login',
            alias: '/',
            name: 'login',
            component: () => import('../pages/Connexion.vue'),
            beforeEnter: ifNotAuthenticated
        },

        /**
         * Dashboard
         */
        {
            path: '/my-account',
            component: () => import('../App2.vue'),
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('../pages/Welcome.vue'),
                    beforeEnter: ifAuthenticated
                },
            ]
        },

        /**
         * 404 Not Found
         */
        /* {
            path: '*',
            name: 'NotFound',
            component: () => import('../pages/About.vue')
        }, */
    ]
});

export default router;

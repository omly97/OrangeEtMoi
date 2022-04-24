import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);


const ifAuthenticated = ( to, from, next ) => {
    return store.getters['auth/isAuthenticated'] ? next() : next({ name: 'login' })
}

const ifNotAuthenticated = ( to, from, next ) => {
    return ! store.getters['auth/isAuthenticated'] ? next() : next({ name: 'MyConso' })
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
         * MyConso
         */
        {
            path: '/account',
            component: () => import('../App2.vue'),
            children: [
                {
                    path: '/my-conso',
                    name: 'MyConso',
                    component: () => import('../pages/MyConso.vue'),
                    beforeEnter: ifAuthenticated
                },
                {
                    path: '/my-historical',
                    name: 'MyHistorical',
                    component: () => import('../pages/MyHistorical.vue'),
                    beforeEnter: ifAuthenticated
                },
                {
                    path: '/my-formule',
                    name: 'MyFormule',
                    component: () => import('../pages/MyFormule.vue'),
                    beforeEnter: ifAuthenticated
                },
                {
                    path: '/my-account',
                    name: 'MyAccount',
                    component: () => import('../pages/MyAccount.vue'),
                    beforeEnter: ifAuthenticated
                },
                {
                    path: '/my-emergencies',
                    name: 'MyEmergencies',
                    component: () => import('../pages/MyEmergencies.vue'),
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

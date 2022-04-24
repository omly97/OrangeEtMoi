import Vue from 'vue';
import Vuex from 'vuex';

import moduleAuth from './modules/auth';
import moduleAccount from './modules/account';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: moduleAuth,
        account: moduleAccount,
    }
})

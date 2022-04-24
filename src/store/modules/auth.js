export default {
    namespaced: true,

    state: () => ({
        mobile: '',
        token: localStorage.getItem('auth-token') || '',
    }),

    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('auth-token', token)
        },

        setMobile(state, mobile) {
            state.mobile = mobile
        },
    },

    getters: {
        isAuthenticated(state) {
            return !! state.token
        },

        getStatus(state) {
            return state.status
        },

        getMobile(state) {
            return state.mobile
        },
    },

    actions: {
        logout (context) {
            context.commit('setToken', '');
            context.commit('setMobile', {});
            localStorage.removeItem('auth-token')
        }
    }
}

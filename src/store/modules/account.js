export default {
    namespaced: true,

    state: () => ({
        account: {},
    }),

    mutations: {
        setAccount(state, account) {
            state.account = account
        },
    },

    getters: {
        getAccount(state) {
            return state.account
        }
    },

    actions: {
        saveAccount(context , account) {
            context.commit('setAccount', account);
        },
    }
}

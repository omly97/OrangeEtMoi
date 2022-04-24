import axios from "../plugins/axios";

export default class API {

    static login(credentials) {
        return axios.post('/auth/login', credentials)
    }

    static logout() {
        return axios.post('/auth/logout')
    }

    static getAccount(mobile) {
        return axios.get(`selfcare-b2c-account-management/api/account-management/account/${mobile}`)
    }
}

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

    static getPointSargal(mobile) {
        return axios.get(`selfcare-b2c-sargal/api/sargal/v1/subscription-status/${mobile}`)
    }

    static getCreditGlobal(mobile) {
        return axios.get(`selfcare-b2c-conso/api/suivi-conso/${mobile}?code=1&code=2&code=6`)
    }

    static getFormule(mobile) {
        return axios.get(`selfcare-b2c-account-management/api/abonne/v1/customerOffer/${mobile}`)
    }

    static getSuiviConso(mobile) {
        return axios.get(`selfcare-b2c-conso/api/suivi-conso/${mobile}`)
    }

    static getSuiviConsoByDays(mobile, days) {
        return axios.get(`selfcare-b2c-conso/api/suivi-conso-by-days/${mobile}/${days}`)
    }

    static getBannieresOfFormule(codeFormule=9131) {
        return axios.get(`selfcare-b2c-conso/api/bannieres-by-formule/${codeFormule}?zone=dashboard`)
    }

}

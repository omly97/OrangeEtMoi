import Vue from 'vue';

const moment = require('moment');
const duration = require('moment-duration-format');
require('moment/locale/fr');

Vue.use(require('vue-moment'), {
    moment,
    duration
});

export default moment;

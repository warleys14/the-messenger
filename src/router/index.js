import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Days from '../views/Days.vue';

Vue.use(Router)

const routes = [
    { path: '/', component: Home },
    { path: '/days', component: Days },
]

const router = new Router({ routes })

export default router
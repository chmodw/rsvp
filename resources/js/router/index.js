import { createRouter, createWebHistory } from 'vue-router';

import Landing from '../pages/Landing.vue';
import Rsvp from '../pages/Rsvp.vue';

const routes = [
    { path: '/', name: 'landing', component: Landing },
    { path: '/rsvp', name: 'rsvp', component: Rsvp },
];

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) return { el: to.hash, behavior: 'smooth' };
        return { top: 0 };
    },
});

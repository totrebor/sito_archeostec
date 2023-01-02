import Home from './home.js'
import Facciamo from './facciamo.js'
import ChiSiamo from './chisiamo.js'
import Privacy from './privacy.js'
import NotFound from './notfound.js'


const { createApp } = Vue;


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/index.html',  redirect: { name: 'home' } },
    { path: '/facciamo', component: Facciamo },
    { path: '/chisiamo', component: ChiSiamo },
    { path: '/privacy', component: Privacy },
    /*{ path: '/:pathMatch(.*)', redirect: { name: 'home' } },*/
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
});

const app = createApp({
    data() {
        return {
        };
    },
});

app.use(router);


const mountedApp = app.mount("#app");

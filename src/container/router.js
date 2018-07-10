import VueRouter from 'vue-router';
import Home from '../pages/home/index.vue';
import Config from '../pages/config/index.vue';

var dingtalk = require('dingtalk-javascript-sdk');

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/config',
        name: 'config',
        component: Config
    }
];


dingtalk.error(function(err) {
    // s =  location.href
    modal.toast({
        message: 'Error : ' + JSON.stringify(err),
        duration: 2
    })
});

export default function Router(Vue) {
    Vue.use(VueRouter);
    const router = new VueRouter({
        routes: routes
    });
    return {
        router
    }
}
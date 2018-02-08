import Router from 'vue-router';

import home from './views/home';

const routes = [{
    path: '/',
    name: 'home',
    component: home,
    meta: {
        keepAlive: true // 是否缓存
    }
},{
    path: '*',
    name: '404',
    component: {
        template: "<div>404</div>"
    },
    meta: {
        keepAlive: false
    }
}];


export default new Router({
    mode: 'history',
    routes
});
import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import HomeView from './components/HomeView.vue';
import CategoryView from './components/CategoryView.vue';
import {fromNow, largeNumber} from './filters/index';
import Resource from 'vue-resource';

// Install the router
Vue.use(Router);

Vue.use(Resource);

//Filters
Vue.filter('fromNow', fromNow);
Vue.filter('largeNumber', largeNumber);

var router = new Router({
    history: true
});



//Register component
router.map({
    '/': {
        name: 'home',
        component: HomeView
    },
    '/category/:categoryId': {
        name: 'category',
        component: CategoryView
    }
});

//Redirect doesn't exists pages
router.redirect({
    '*': '/'
});

router.start(App, 'app');
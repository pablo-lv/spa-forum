import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import HomeView from './components/HomeView.vue';

// Install the router
Vue.use(Router);

var router = new Router({
    history: true
});

//Register component
router.map({
    '/': {
        name: 'home',
        component: HomeView
    }
});

//Redirect doesn't exists pages
router.redirect({
    '*': '/'
});

router.start(App, 'app');
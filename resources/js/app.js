/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

//  window.Vue = require('vue');
import Vue from "vue";
import Form from "vform";
import HasError from "vform";
import AlertError from "vform";
import BootstrapVue from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import VueRouter from "vue-router";
Vue.use(VueRouter);

let routes = [
    {
        path: "/dashboard",
        component: require("./components/Dashboard.vue").default,
    },
    { path: "/users", component: require("./components/Users.vue").default },
    {
        path: "/profile",
        component: require("./components/Profile.vue").default,
    },
];

const router = new VueRouter({
    mode: "history",
    routes, // short for `routes: routes`
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue")
);

const app = new Vue({
    el: "#app",
    router,
});

// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */

// require('./bootstrap');

// window.Vue = require('vue').default;
// import Form from 'vform'
// import {
//   Button,
//   HasError,
//   AlertError,
//   AlertErrors,
//   AlertSuccess
// } from 'vform/src/components/bootstrap4'

// window.Form = Form;

// Vue.component(Button.name, Button)
// Vue.component(HasError.name, HasError)
// Vue.component(AlertError.name, AlertError)
// Vue.component(AlertErrors.name, AlertErrors)
// Vue.component(AlertSuccess.name, AlertSuccess)

// import VueRouter from 'vue-router'
// Vue.use( VueRouter)

// let routes = [
//     // { path: '/dashboard', component: require('./components/Dashboard.vue') },
//     { path: '/dashboard', component: require('./components/Dashboard.vue').default },
//     { path: '/users', component: require('./components/Users.vue').default },
//     { path: '/profile', component: require('./components/Profile.vue').default }
//   ]

//   const router = new VueRouter({
//     mode: 'history',
//     routes // short for `routes: routes`
//   })

// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */

// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// const app = new Vue({
//     el: '#app',
//     router
// });

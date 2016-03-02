'use strict';

/* App Module */

var admin = angular.module('admin', ['ui.router', 'login','signup', 'home', 'xeditable', 'ui.bootstrap', 'angular-confirm', 'xeditable']);

admin.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: 'LoginController'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: "templates/signup.html",
                controller: 'SignupController'
            })
            .state('admin', {
                abstract: true,
                url: '/admin',
                templateUrl: "templates/admin.html",
            })
            .state('admin.home', {
                url: '/home',
                templateUrl: "templates/home.html",
                controller: 'HomeController'
            })


        $urlRouterProvider.otherwise('/login');
    }
]);

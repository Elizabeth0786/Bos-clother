// app.js - AngularJS app configuration
angular.module('bosClotherApp', [])
    .config(function($locationProvider) {
        // Use hashbang mode for routing
        $locationProvider.hashPrefix('');
    });
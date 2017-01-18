var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
    //example of redirecting to a new state
    $stateProvider
        .state({
            name: 'home',
            url: '/',
            redirectTo: () => {
                return 'people';
            }
        });

    //example of redirecting outside the state tree
    $stateProvider
        .state({
            name: 'google',
            url: '/google',
            onEnter: function() {
                window.location = 'http://www.google.com';
            }
        });
});
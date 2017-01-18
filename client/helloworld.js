var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
    //example of redirecting to a new state
    $stateProvider
        .state('home', {
            url: '/',
            redirectTo: () => {
                return 'hello';
            }
        });

    //example of redirecting outside the state tree
    $stateProvider
        .state('google', {
            url: '/google',
            onEnter: function() {
                window.location = 'http://www.google.com';
            }
        });
});
angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: '/views/about/about.html',
                controller: 'AboutCtrl'
            });
    });
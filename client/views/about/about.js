angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'about',
                url: '/about',
                templateUrl: '/views/about/about.html',
                controller: 'AboutCtrl'
            });
    });
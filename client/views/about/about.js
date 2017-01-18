angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'people.about',
                url: '/{personId}/about',
                templateUrl: '/views/about/about.html',
                controller: 'AboutCtrl'
            });
    });
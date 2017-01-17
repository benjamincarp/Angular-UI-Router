angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state('hello', {
                url: '/hello',
                templateUrl: '/views/hello/hello.html',
                controller: 'HelloCtrl'
            });
    });
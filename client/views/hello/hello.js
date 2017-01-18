angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'hello',
                url: '/hello',
                templateUrl: '/views/hello/hello.html',
                controller: 'HelloCtrl'
            });
    });
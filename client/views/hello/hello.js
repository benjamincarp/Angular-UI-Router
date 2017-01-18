angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'people.hello',
                url: '/{personId}/hello',
                templateUrl: '/views/hello/hello.html',
                controller: 'HelloCtrl'
            });
    });
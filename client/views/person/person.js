angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'people.person',
                url: '/{personId}',
                templateUrl: '/views/person/person.html'
            });
    });
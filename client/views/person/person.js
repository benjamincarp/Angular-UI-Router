angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state('people.person', {
                url: '/{personId}',
                templateUrl: '/views/person/person.html'
            });
    });
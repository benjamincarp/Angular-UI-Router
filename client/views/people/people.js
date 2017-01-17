angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state('people', {
                url: '/people',
                templateUrl: '/views/people/people.html'
            });
    });
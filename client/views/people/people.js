angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state('people', {
                url: '/people',
                controller: 'PersonCtrl',
                templateUrl: '/views/people/people.html'
            });
    });
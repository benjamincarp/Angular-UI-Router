angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'people',
                url: '/people',
                controller: 'PersonCtrl',
                templateUrl: '/views/people/people.html'
            });
    });
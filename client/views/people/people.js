angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'people',
                url: '/people',
                controller: 'PeopleCtrl',
                templateUrl: '/views/people/people.html'
            });
    });
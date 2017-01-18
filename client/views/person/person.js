angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'people.person',
                url: '/{personId}',
                redirectTo: 'people.about'
            });
    });
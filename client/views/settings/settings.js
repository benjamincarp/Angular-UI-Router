angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'people.hello.settings',
                url: '/settings',
                templateUrl: '/views/settings/settings.html'
            });
    });
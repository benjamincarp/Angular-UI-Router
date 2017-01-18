angular.module('helloworld')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'people.hello.contact',
                url: '/contact',
                templateUrl: '/views/contact/contact.html'
            });
    });
'use strict';

angular.module('helloworld')
    .controller('AboutCtrl', function ($scope, PeopleService, $stateParams) {
        var About = this;
        About.person = {};

        PeopleService.getPerson($stateParams.personId).then(function(person) {
            About.person = person;
        });
    });
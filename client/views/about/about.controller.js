'use strict';

angular.module('helloworld')
    .controller('AboutCtrl', function ($scope, PeopleService, $stateParams) {
        $scope.person = {};

        PeopleService.getPerson($stateParams.personId).then(function(person) {
            $scope.person = person;
        });
    });
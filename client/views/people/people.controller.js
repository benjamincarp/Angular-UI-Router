'use strict';

angular.module('helloworld')
    .controller('PeopleCtrl', function ($scope, PeopleService) {
        $scope.people = [];
        
        PeopleService.getAllPeople().then(function(folks) {
            $scope.people = folks;
        });
    });
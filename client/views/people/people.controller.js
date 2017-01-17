'use strict';

angular.module('helloworld')
    .controller('PeopleCtrl', function ($scope, PeopleService) {
        var People = this;
        People.people = [];
        
        PeopleService.getAllPeople().then(function(folks) {
            People.people = folks;
        });
    });
angular.module('helloworld')
    .controller('PersonCtrl', function ($scope, $stateParams, PeopleService) {
        var Person = this;
        Person.person = {};
        
        PeopleService.getPerson($stateParams.personId).then(function(person) {
            Person.person = person;
        });
    });
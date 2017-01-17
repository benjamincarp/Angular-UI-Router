angular.module('helloworld')
    .controller('PersonCtrl', function ($scope, PeopleService) {
        var Person = this;
        Person.person = {};
        
        PeopleService.getPerson('293').then(function(person) {
            Person.person = person;
        });
    });
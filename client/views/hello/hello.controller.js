'use strict';

angular.module('helloworld')
    .controller('HelloCtrl', function ($scope, PeopleService, $stateParams) {
        var Hello = this;
        Hello.person = {};
        Hello.isDefaultGreeting = true;
        Hello.greeting = 'Hello!';

        PeopleService.getPerson($stateParams.personId).then(function(person) {
            Hello.person = person;
            Hello.greeting = `Hello ${person.name}!`;
        });

        
        
        Hello.toggleGreeting = function() {
            Hello.isDefaultGreeting = !Hello.isDefaultGreeting;
            
            if (!Hello.person.name) {
                Hello.greeting = 'Hello!';
            }
            else{
                Hello.greeting = Hello.isDefaultGreeting ? `Hello ${Hello.person.name}!` : `What's up ${Hello.person.name}?`
            }
       }; 
    });
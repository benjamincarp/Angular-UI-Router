'use strict';

angular.module('helloworld')
    .controller('HelloCtrl', function ($scope, PeopleService, $stateParams) {
        $scope.person = {};
        $scope.isDefaultGreeting = true;
        $scope.greeting = 'Hello!';

        PeopleService.getPerson($stateParams.personId).then(function(person) {
            $scope.person = person;
            $scope.greeting = `Hello ${person.name}!`;
        });

        
        
        $scope.toggleGreeting = function() {
            $scope.isDefaultGreeting = !$scope.isDefaultGreeting;
            
            if (!$scope.person.name) {
                $scope.greeting = 'Hello!';
            }
            else{
                $scope.greeting = $scope.isDefaultGreeting ? `Hello ${$scope.person.name}!` : `What's up ${$scope.person.name}?`
            }
       }; 
    });
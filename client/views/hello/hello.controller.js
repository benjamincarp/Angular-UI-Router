'use strict';

angular.module('helloworld')
    .controller('HelloCtrl', function ($scope) {
        this.greeting = 'hello';
        this.toggleGreeting = function() {
           this.greeting = (this.greeting === 'hello') ? 'whats up' : 'hello';
       }; 
    });
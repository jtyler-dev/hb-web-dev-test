'use strict';

angular.
  module('hbApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/contactList', {
          template: '<contact-list></contact-list>'
        }).
        otherwise('/contactList');
    }
]);

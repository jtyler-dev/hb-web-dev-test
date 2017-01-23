'use strict';

angular.
  module('contactList').
  component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: [ '$http',
      function ContactListController($http) {
          var that = this;
          that.displaySpinner = true;

          $http.get('https://candidate-test.herokuapp.com/contacts').
          then(function(response) {
            that.contacts = response.data;
            that.displaySpinner = false;
          });
      }
    ]
  });

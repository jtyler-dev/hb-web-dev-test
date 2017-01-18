'use strict';

angular.
  module('contactCard').
  component('contactCard', {
    bindings: {
      contact: '<'
    },
    templateUrl: 'contact-card/contact-card.template.html',
    controller: [
      function ContactCardController() {

      }
    ]
  });

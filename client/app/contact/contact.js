(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .config(ContactConfig);

  function ContactConfig($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl',
        title: 'Contact Me'
      });
  }
})();

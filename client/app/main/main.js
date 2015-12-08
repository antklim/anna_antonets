(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .config(MainConfig);

  function MainConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        title: 'Home'
      });
  }
})();

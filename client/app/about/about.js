(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .config(AboutConfig);

  function AboutConfig($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  }
})();
(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .config(WorksConfig);

  function WorksConfig($stateProvider) {
    $stateProvider
      .state('works', {
        url: '/works',
        templateUrl: 'app/works/works.html',
        controller: 'WorksCtrl'
      });
  }
})();
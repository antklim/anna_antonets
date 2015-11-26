(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('WorksCtrl', WorksCtrl);

  WorksCtrl.$inject = ['$scope'];

  function WorksCtrl($scope) {
    $scope.message = 'Hello';
  }
})();
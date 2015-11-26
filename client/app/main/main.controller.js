(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'myName'];

  function MainCtrl($scope, myName) {
    $scope.myName = myName;
  }

})();
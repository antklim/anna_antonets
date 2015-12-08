(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$rootScope', '$state', 'myName'];

  function MainCtrl($scope, $rootScope, $state, myName) {
    $rootScope.title = $state.current.title;
    $scope.myName = myName;
  }

})();

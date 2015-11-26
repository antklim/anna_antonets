(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('FooterCtrl', FooterCtrl);

  FooterCtrl.$inject = ['$scope', 'copyRight', 'linkedin'];

  function FooterCtrl($scope, copyRight, linkedin) {
    $scope.copyRight = copyRight;
    $scope.linkedin = linkedin;
  }

})();

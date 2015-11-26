(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('BlogCtrl', BlogCtrl);

  BlogCtrl.$inject = ['$scope'];

  function BlogCtrl($scope) {
    $scope.message = 'Hello';
  }

})();
(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = ['$scope', '$http'];

  function AboutCtrl($scope, $http) {
    $scope.aboutData = [];

    $http
      .get('/api/about', {cache: true})
      .success(function(aboutData) {
        $scope.aboutData = aboutData;

        for (var i = 0; i < aboutData.length; i++) {
          $scope[ aboutData[ i ].type ] = aboutData[ i ].data;
        }
      });
  }

})();

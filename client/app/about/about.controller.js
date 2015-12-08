(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('AboutCtrl', AboutCtrl);

  AboutCtrl.$inject = ['$scope', '$http', '$rootScope', '$state'];

  function AboutCtrl($scope, $http, $rootScope, $state) {
    $rootScope.title = $state.current.title;
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

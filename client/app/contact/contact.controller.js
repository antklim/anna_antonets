(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['$scope', '$http', '$rootScope', '$state'];

  function ContactCtrl($scope, $http, $rootScope, $state) {
    $rootScope.title = $state.current.title;
    $http
      .get('/api/about')
      .success(function(aboutData) {
        for (var i = 0; i < aboutData.length; i++) {

          if (aboutData[ i ].type !== 'contact' && aboutData[ i ].type !== 'location') {
            continue;
          }

          $scope[ aboutData[ i ].type ] = aboutData[ i ].data;

          if ($scope.contact && $scope.location) {
            return;
          }
        }
      });
  }
})();

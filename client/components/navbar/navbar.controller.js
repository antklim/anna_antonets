(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['$scope', '$location', 'Auth', 'myNick'];

  function NavbarCtrl($scope, $location, Auth, myNick) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'About Me',
        'link': '/about'
      },
      // {
      //   'title': 'My Works',
      //   'link': '/works'
      // },
      // {
      //   'title': 'Blog',
      //   'link': '/blog'
      // },
      {
        'title': 'Contact Me',
        'link': '/contact'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.myNick = myNick;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }

})();
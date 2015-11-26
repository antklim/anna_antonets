(function() {
  'use strict';

  angular
    .module('resumeFrontApp')
    .config(BlogConfig);

  function BlogConfig($stateProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl'
      });
  }
})();
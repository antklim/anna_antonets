'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeFrontApp'));

  var MainCtrl;
  var scope;
  var state = { current: { title: 'Home Title' } };
  var rootScope = {};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $state: state,
      $rootScope: rootScope
    });
  }));

  it('should have myName', inject(function(myName) {
    expect(scope.myName).toEqual(myName);
  }));

  it('should attach title to rootScope', function () {
    expect(rootScope.title).toEqual('Home Title');
  });
});

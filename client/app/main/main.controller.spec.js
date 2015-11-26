'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeFrontApp'));

  var MainCtrl;
  var scope;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have myName', inject(function(myName) {
    expect(scope.myName).toEqual(myName);
  }));
});

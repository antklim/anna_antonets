'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeFrontApp'));

  var AboutCtrl;
  var scope;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/about')
      .respond([
        {
          type: 'name',
          data: 'Anna Antonets'
        },
        {
          type: 'occupation',
          data: 'Geneticist at the Laboratory of Medical Genetics, Rostov State Medical University'
        }
      ]);

    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach about data to the scope', function () {
    $httpBackend.flush();
    expect(scope.aboutData.length).toBe(2);
  });
});

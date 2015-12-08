'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeFrontApp'));

  var AboutCtrl;
  var scope;
  var state = { current: { title: 'About Me Title' } };
  var rootScope = {};
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
      $scope: scope,
      $state: state,
      $rootScope: rootScope
    });
  }));

  it('should attach about data to the scope', function () {
    $httpBackend.flush();
    expect(scope.aboutData.length).toBe(2);
  });

  it('should attach title to rootScope', function () {
    $httpBackend.flush();
    expect(rootScope.title).toEqual('About Me Title');
  });
});

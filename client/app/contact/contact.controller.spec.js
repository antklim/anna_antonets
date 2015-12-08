'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeFrontApp'));

  var ContactCtrl;
  var scope;
  var state = { current: { title: 'Contact Me Title' } };
  var rootScope = {};
  var $httpBackend;

  var contact = {
    type: 'contact',
    data: [
      {
        type: 'website',
        data: 'localhost'
      },
      {
        type: 'email',
        data: 'test@gmail.com'
      },
      {
        type: 'phone',
        data: '111222333'
      },
    ]
  };

  var location = {
    type: 'location',
    data: [
      {
        type: 'city',
        data: 'TestCity'
      },
      {
        type: 'state',
        data: 'TestState'
      },
      {
        type: 'country',
        data: 'TestCountry'
      }
    ]
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/about')
      .respond([contact, location]);

    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope,
      $state: state,
      $rootScope: rootScope
    });
  }));

  it('should attach contact data to the scope', function () {
    $httpBackend.flush();
    expect(scope.contact).toEqual(contact.data);
    expect(scope.location).toEqual(location.data);
  });

  it('should attach title to rootScope', function () {
    $httpBackend.flush();
    expect(rootScope.title).toEqual('Contact Me Title');
  });
});

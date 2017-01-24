'use strict';

describe('Controller: RootController', function () {

    beforeEach(module('prjIdvApp'));

    beforeEach(inject(function($injector) {
        _rootScope = $injector.get('$rootScope');
        _scope = _rootScope.$new();
        _locationMock = $injector.get('$location');
        _httpBackend = $injector.get('$httpBackend');
    }));

    describe('criação', function() {
       
    });
});

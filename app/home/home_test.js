'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('home controller', function() {

    it('should...', inject(function( $controller ) {
      var $scope = {};

      var homeCtrl = $controller('HomeCtrl', {$scope: $scope});
      expect(homeCtrl).toBeDefined();

      expect($scope.title).toEqual('Home Page');

    }));

  });

});
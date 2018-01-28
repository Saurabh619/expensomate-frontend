(function() {
  'use strict';

  angular.module('expensify').controller('BodyController', BodyController);

  BodyController.$inject = [
    '$scope',
    '$cookies',
    '$state',
    '$timeout',
    '$rootScope',
    '$window',
    '$controller'
  ];

  /* @ngInject */
  function BodyController($scope, $cookies, $state, $timeout, $rootScope, $window, $controller) {

    $scope.nanobarOptions = {
      classname: 'nanobar'
    };

    var nanobar = new Nanobar($scope.nanobarOptions);

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      nanobar.go(60);
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      UIkit.notification.closeAll();
      $window.scrollTo(0, 0);
      nanobar.go(100);
    });

    $scope.params = $state.params;
  }
})();

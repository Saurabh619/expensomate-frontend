(function() {
  'use strict';

  angular.module('expensify').directive('navigator', navigator);

  navigator.$inject = [
    '$http',
    '$compile',
    '$timeout',
    'Upload',
    '$log',
    'GatewayService',
    '$state'
  ];

  function navigator($http, $compile, $timeout, Upload, $log, GatewayService, $state) {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'app/main/scripts/templates/navigator.tpl.html',
      link: function(scope, elem, attrs) {
        scope.state = $state;
      }
    }
  }
})();

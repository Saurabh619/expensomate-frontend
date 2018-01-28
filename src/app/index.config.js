(function() {
  'use strict';

  angular
    .module('expensify')
    .config(config);

  config.$inject = ['$locationProvider', '$logProvider', '$qProvider'];

  /** @ngInject */
  function config($locationProvider, $logProvider, $qProvider) {

    // Remove # break from URL
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');

    // Enable log
    $logProvider.debugEnabled(true);

    var baseURL = window.location.origin + '/api';

    $qProvider.errorOnUnhandledRejections(false);
  }

})();

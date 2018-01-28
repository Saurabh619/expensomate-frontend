(function() {
  'use strict';

  angular
    .module('expensify')
    .run(runBlock)
    // .run(removeCache)
    /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }
})();

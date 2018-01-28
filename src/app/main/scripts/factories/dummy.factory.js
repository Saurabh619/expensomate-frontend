(function() {
  'use strict';

  angular.module('expensify').service('DataFactory', DataFactory);

  DataFactory.$inject = ['$http', '$timeout'];

  function DataFactory($http, $timeout) {

    var people = [
      {
        "name": "saurabh",
        "address": "address1",
        "phone": "8792609379"
      },
      {
        "name": "saurabh",
        "address": "address1",
        "phone": "8792609379"
      },
      {
        "name": "saurabh",
        "address": "address1",
        "phone": "8792609379"
      },
      {
        "name": "saurabh",
        "address": "address1",
        "phone": "8792609379"
      }
    ];

    var summary = [
      {
        "amount": "address1",
        "reason": "8792609379",
        "creationTime": "saurabh",
        "recipt": "no"
      },
      {
        "amount": "address1",
        "reason": "8792609379",
        "creationTime": "saurabh",
        "recipt": "no"
      },
      {
        "amount": "address1",
        "reason": "8792609379",
        "creationTime": "saurabh",
        "recipt": "no"
      },
      {
        "amount": "address1",
        "reason": "8792609379",
        "creationTime": "saurabh",
        "recipt": "no"
      }
    ];

    return {
      getPeople: function() {
        return people;
      },
      getSummary: function() {
        return summary;
      }
    }
  }
})();

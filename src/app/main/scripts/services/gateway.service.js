(function() {
  'use strict';

  angular.module('expensify').service('GatewayService', GatewayService);

  GatewayService.$inject = ['$log', '$q', '$http', '$cookies'];
  /** @ngInject */
  function GatewayService($log, $q, $http, $cookies) {
    return {
      addExpense: function(inputData) {
        console.log(inputData);
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/members/'+ $cookies.get('memberId') +'/expenses';
        var headers = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': $cookies.get('memberAt')
          }
        }
        $http.post(baseURL, inputData, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      },
      inviteMember: function(inputData) {
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/members/invite';
        var requestData = {
          "memberId": $cookies.get('memberId'),
          "inputData": inputData
        }
        var headers = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': $cookies.get('memberAt')
          }
        }
        $http.post(baseURL, requestData, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      },
      findMemberById: function() {
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/members/' + $cookies.get('memberId');
        var headers = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': $cookies.get('memberAt')
          }
        }
        $http.get(baseURL, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      },
      findExpensesByMemberId: function() {
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/members/' + $cookies.get('memberId') + '/expenses';
        var headers = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        $http.get(baseURL, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      },
      findMembersByGroupId: function(groupId) {
        var promise = $q.defer();
        var baseURL = window.location.origin + '/api/groups/' + groupId + '/members'; ;
        var headers = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        $http.get(baseURL, headers).then(function(result) {
          $log.debug('Created object, ', result);
          promise.resolve(result);
        }, function(result) {
          $log.debug("Failed to create object:", result);
          promise.reject(result);
        });
        return promise.promise;
      }
    }
  }
})();

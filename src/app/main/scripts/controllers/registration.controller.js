(function() {
  'use strict';

  angular
    .module('expensify')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$log', '$q', '$state', '$scope', '$http', '$cookies', 'GatewayService', '$controller'];
  /** @ngInject */
  function RegistrationController($log, $q, $state, $scope, $http, $cookies, GatewayService, $controller) {

    $controller('BodyController', {
      $scope: $scope
    });

    $scope.state = $state;
    $scope.params = $state.params;
    $scope.loginWorking = false;
    $cookies.remove('memberId');
    $cookies.remove('memberAt');
    $scope.memberAccessToken = $cookies.get('memberAt')

    $scope.load = {
      signup: false,
      signin: false
    };

    $scope.show = {
      loginErrorMessage: false,
      signupErrorMessage: false
    };

    $scope.goTo = function(goTo) {
      $state.go(goTo, {
        group: $state.params.group,
        groupId: $state.params.groupId,
        memberId: $cookies.get('memberId')
      });
    }

    var baseUrl = window.location.origin;
    $scope.funcs = {
      signup: function() {
        var promise = $q.defer();
        $scope.load.signup = true;
        var url = baseUrl + '/api/groups/' + $state.params.groupId +'/members';
        var requestData = {
          "email": $scope.input.email.toLowerCase(),
          "phone": $scope.input.phone,
          "name": $scope.input.name,
          "username": $scope.input.username,
          "password": $scope.input.password
        }

        var headers = {
          'Content-Type': 'application/json'
        }
        $http.post(url, requestData, headers).then(function(response) {
          $log.debug('Created member, ', response);
          setTimeout(function() {
            $scope.load.signup = false;
          }, 500);
          $scope.goTo('login');
          promise.resolve(response.data);
        }, function(response) {
          $log.debug("Failed to create object:", response);
          setTimeout(function() {
            $scope.load.signup = false;
            $scope.show.signupErrorMessage = true;
            $scope.$apply();
          }, 500);

          promise.reject(response.data);
        });
      },
      signin: function() {
        var promise = $q.defer();
        $scope.load.signin = true;
        var url = baseUrl + '/api/members/login';
        var requestData = {
          "username": $scope.input.username,
          "password": $scope.input.password
        }
        var headers = {
          'Content-Type': 'application/json'
        }
        $http.post(url, requestData, headers)
          .then(function(response) {
            $log.debug('Created object, ', response);
            $cookies.put('memberId', response.data.userId);
            $cookies.put('memberAt', response.data.id);
            $state.params.memberId = response.data.userId;
            setTimeout(function() {
              $scope.load.signin = false;
              $scope.goTo('main');
              promise.resolve(response.data);
              $scope.$apply();
            }, 500);
          }, function(response) {
            $log.debug("Failed to create object:", response);
            setTimeout(function() {
              $scope.load.signin = false;
              $scope.show.loginErrorMessage = true;
              $scope.$apply();
            }, 800);
          });
      }
    }
  }
})();

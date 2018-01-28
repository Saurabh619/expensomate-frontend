(function() {
  'use strict';

  angular
    .module('expensify')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('registration', {
        url: '/:group/:groupId/signup',
        views: {
          'main': {
            templateUrl: 'app/main/templates/registration/registration.html',
            controller: 'RegistrationController',
            controllerAs: 'register'
          },
          'signup@registration': {
            templateUrl: 'app/main/templates/registration/signup.tpl.html',
            controller: 'RegistrationController',
            controllerAs: 'register'
          },
          'signin@registration': {
            templateUrl: 'app/main/templates/registration/signin.tpl.html',
            controller: 'RegistrationController',
            controllerAs: 'register'
          }
        }
      })
      .state('main', {
        url: '/:group/:groupId/:memberId/main',
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })
      .state('expense', {
        url: '/:group/:groupId/:memberId/expense',
        views: {
          'main': {
            templateUrl: 'app/main/templates/expense/expense.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'addExpense@expense': {
            templateUrl: 'app/main/templates/partials/addExpense/addExpense.tpl.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })
      .state('member', {
        url: '/:group/:groupId/:memberId/member',
        views: {
          'main': {
            templateUrl: 'app/main/templates/member/member.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'inviteMember@member': {
            templateUrl: 'app/main/templates/partials/inviteMember/inviteMember.tpl.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })
      .state('group', {
        url: '/:group/:groupId/:memberId/group',
        views: {
          'main': {
            templateUrl: 'app/main/templates/group/group.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'viewGroup@group': {
            templateUrl: 'app/main/templates/partials/viewGroup/viewGroup.tpl.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })
      .state('upload', {
        url: '/:group/:groupId/:memberId/upload',
        views: {
          'main': {
            templateUrl: 'app/main/templates/upload/upload.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'uploadExpense@upload': {
            templateUrl: 'app/main/templates/partials/uploadExpense/uploadExpense.tpl.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })
      .state('summary', {
        url: '/:group/:groupId/:memberId/summary',
        views: {
          'main': {
            templateUrl: 'app/main/templates/summary/summary.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'viewSummary@summary': {
            templateUrl: 'app/main/templates/partials/viewSummary/viewSummary.tpl.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      })

      .state('login', {
        url: '/:group/:groupId/login',
        views: {
          'main': {
            templateUrl: 'app/main/templates/registration/login.html',
            controller: 'RegistrationController',
            controllerAs: 'register'
          }
        }
      })
      .state('error', {
        url: '/error',
        views: {
          'main': {
            templateUrl: 'app/main/templates/error/error.html',
            controller: 'MainController',
            controllerAs: 'main'
          }
        }
      });
    $urlRouterProvider.otherwise('/error');
  }

})();

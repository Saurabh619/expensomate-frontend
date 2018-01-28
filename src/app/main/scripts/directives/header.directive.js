(function() {
    'use strict';

    angular.module('expensify').directive('header', header);

    /* @ngInject */
    function header() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/main/scripts/templates/header.tpl.html',
            scope: {},
            link: linkFunc,
            controller: HeaderController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {}
    }

    HeaderController.$inject = ['$state', '$scope', '$cookies', '$http'];

    /* @ngInject */
    function HeaderController($state, $scope, $cookies, $http) {
        $scope.goTo = function(goTo) {
            $state.go(goTo, {
                group: $state.params.group,
                groupId: $state.params.groupId
            });
            $cookies.remove('memberId');
            $cookies.remove('memberAt');
            $cookies.remove('groupAt');
            $cookies.remove('memberCategory');
        };

        $scope.memberAccessToken = $cookies.get('memberAt');
        $scope.groupAccessToken = $cookies.get('groupAt');

    }
})();

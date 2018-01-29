angular.module('expensify').controller('MainController', MainController);

/** @ngInject */
function MainController($state, $scope, $cookies, DataFactory, GatewayService, $timeout, $http, $interval, $q, $log, $document, $window) {

    $scope.member = {};
    $scope.saving = false;
    $scope.group = $state.params.group;
    $scope.people = DataFactory.getPeople();
    $scope.summaryData = DataFactory.getSummary();

    $scope.funcs = {
      addExpense : function(){
        if ($scope.member.amount) {
          var requestObject = {
            "amount": $scope.member.amount,
            "reason": $scope.member.reason
          }
        }
        console.log(requestObject);
        GatewayService.addExpense(requestObject)
        .then(function(response){
          $log.debug(response);
        }).catch(function(error){
          console.error();
        })
      },
      splitWithMember : function(){
        if ($scope.member.amount && $scope.member.splitWith && $scope.member.splitAs) {
          var requestObject = {
            "amount": $scope.member.amount,
            "reason": $scope.member.reason,
            "split": [
              {
                "splitWith": $scope.member.splitWith,
                "splitAs": $scope.member.splitAs
              }
            ]
          }
        }
        GatewayService.addExpense(requestObject)
        .then(function(response){
          $log.debug(response);
        }).catch(function(error){
          console.error();
        })
      },
      uploadRecipt : function(){
        if ($scope.member.recipt && $scope.member.amount) {
          var requestObject = {
            "recipt": $scope.member.recipt,
            "amount": $scope.member.amount,
            "reason": $scope.member.reason
          }
        }
        GatewayService.addExpense(requestObject)
        .then(function(response){
          $log.debug(response);
        }).catch(function(error){
          console.error();
        })
      },
      inviteMember : function(){
        if ($scope.inviteeName && $scope.inviteeEmail && $scope.inviteePhone) {
          var requestObject = {
            "name": $scope.inviteeName,
            "email": $scope.inviteeEmail,
            "phone": $scope.inviteePhone
          }
        }
        GatewayService.inviteMember(requestObject)
        .then(function(response){
          $log.debug(response);
        }).catch(function(error){
          console.error();
        })
      },
      viewGroupDetails : function(){
        GatewayService.findMembersByGroupId($state.params.groupId)
        .then(function(response){
          $log.debug(response);
          $scope.members = response.data;
        }).catch(function(error){
          console.error();
        })
      },
      viewSummary : function(){
        GatewayService.findExpensesByMemberId()
        .then(function(response){
          $log.debug(response);
          $scope.summary = response.data;
        }).catch(function(error){
          console.error();
        })
      },
      printDiv : function() {
        $window.print()
      },
      exportSummaryTable : function(){
        // sorted using export excel
      }
    };

    $scope.goTo = function(goto) {
        $state.go(goto, {
            group: $state.params.group,
            groupId: $state.params.groupId,
            memberId: $state.params.memberId
        })
    }

    $scope.checkIfExist = function(obj) {
        if (angular.equals(obj, {}) == false) {
            return true;
        }
    }

    $scope.pendingTime = function(objectId) {
        if (objectId != undefined) {
            var returnDiff = '';
            var thatDay = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
            var thisDay = new Date;
            var hours = 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            var diff = (Math.abs(thatDay.getTime() - thisDay.getTime()))
            var hoursDiff = (diff / (hours));
            var daysMultiple = hoursDiff / 24;
            var daysMultipleInt = parseInt(daysMultiple);
            var daysDiff = hoursDiff - (daysMultipleInt * 24);
            returnDiff = parseInt(daysMultiple) + ' days and ' + parseInt(daysDiff) + ' hours';
            return (returnDiff)
        }
    }

}

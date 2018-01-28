(function() {
    'use strict';

    angular
        .module('expensify')
        .directive('uploadFile', uploadFile);

    uploadFile.$inject = ['$http', '$compile', '$timeout', 'Upload', '$log', 'GatewayService', '$sce'];

    function uploadFile($http, $compile, $timeout, Upload, $log, GatewayService, $sce) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                call: '&',
                doctype: "@doctype",
                prooftype: '@prooftype',
                param: '@param',
                index: '@index',
                image: '=image'
            },
            templateUrl: 'app/main/scripts/templates/upload.tpl.html',
            link: function(scope, elem, attrs) {
                scope.showfile = true;
                scope.uploadFile = function(file) {
                    scope.load = true;
                    Upload
                        .upload({
                            url: window.location.origin + '/api/files/upload',
                            data: {
                                file: file,
                                ttl: '3 years'
                            }
                        })
                        .then(function(response) {
                            $log.debug("Uploaded file: ", response);
                            scope.data.member.imageurl = response.data.file.directURL;
                            scope.load = false;
                            scope.changefile = true;
                            scope.showfile = false;
                        }, function(response) {
                            scope.load = false;
                            $log.warn(response);
                        });
                }
            }
        }
    }
})();

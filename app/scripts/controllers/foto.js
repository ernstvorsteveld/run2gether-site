define(['./module'], function (controllers, menuService, urlService) {
    'use strict';

    controllers.controller('FotoCtrl', ['$scope', '$location', '$http', 'menuService', 'urlService',
        function ($scope, $location, $http, menuService, urlService) {

            $scope.selectedMenuItem = 'foto';

            menuService.loadItems($scope);

            $scope.go = function (url) {
                urlService.go($location, url);
                $scope.select = true;
            };

        }]);
});
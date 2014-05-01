define(['./module'], function (controllers, menuService, urlService) {
    'use strict';

    controllers.controller('HomeCtrl', ['$scope', '$location', '$http', 'contentService', 'menuService', 'urlService',
        function ($scope, $location, $http, contentService, menuService, urlService) {

            $scope.selectedMenuItem = 'home';

            menuService.loadItems($scope);

            $scope.go = function (url) {
                urlService.go($location, url);
                $scope.select = true;
            };

            contentService.loadItems($scope, './scripts/services/mock/home-items.json');
        }]);
});
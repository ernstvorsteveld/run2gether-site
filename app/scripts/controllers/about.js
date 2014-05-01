define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('AboutCtrl', ['$scope', '$location', '$http', 'contentService', 'menuService', 'urlService',
        function ($scope, $location, $http, contentService, menuService, urlService) {

            $scope.selectedMenuItem = 'about';

            menuService.loadItems($scope);

            $scope.go = function (url) {
                urlService.go($location, url);
                $scope.select = true;
            };

            contentService.loadItems($scope, './scripts/services/mock/about-items.json');

        }]);
});
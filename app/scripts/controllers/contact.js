define(['./module'], function (controllers, menuService, urlService) {
    'use strict';

    controllers.controller('ContactCtrl', ['$scope', '$location', '$http', 'contentService', 'menuService', 'urlService',
        function ($scope, $location, $http, contentService, menuService, urlService) {

            $scope.selectedMenuItem = 'contact';

            menuService.loadItems($scope);

            $scope.go = function (url) {
                urlService.go($location, url);
                $scope.select = true;
            };

            contentService.loadItems($scope, './scripts/services/mock/contact-items.json');

        }]);
});
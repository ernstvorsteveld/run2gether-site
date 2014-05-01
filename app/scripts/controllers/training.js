define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('TrainingCtrl', ['$scope', '$location', '$http', 'contentService', 'menuService', 'urlService',
        function ($scope, $location, $http, contentService, menuService, urlService) {

            $scope.selectedMenuItem = 'training';

            menuService.loadItems($scope);

            $scope.go = function (url) {
                urlService.go($location, url);
                $scope.select = true;
            };

            contentService.loadItems($scope, './scripts/services/mock/training-items.json');

        }]);
});
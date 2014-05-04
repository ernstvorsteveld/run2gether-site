define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('HomeCtrl', ['$scope', '$location', '$http', 'contentService', 'menuService', 'newsService','urlService',
        function ($scope, $location, $http, contentService, menuService, newsService, urlService) {

            $scope.selectedMenuItem = 'home';

            menuService.loadItems($scope);

            $scope.go = function (url) {
                urlService.go($location, url);
                $scope.select = true;
            };

            contentService.loadItems($scope, './scripts/services/mock/home-items.json');
            newsService.loadItems($scope, './scripts/services/mock/news-items.json');

        }]);
});
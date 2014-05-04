define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('NewsCtrl', ['$scope', '$location', '$http', 'newsService', 'menuService', 'urlService',
        function ($scope, $location, $http, newsService, menuService, urlService) {

            $scope.go = function (url) {
                urlService.go($location, url);
                $scope.select = true;
            };

            newsService.loadItems($scope, './scripts/services/mock/news-items.json');

        }]);
});
define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('NewsItemCtrl', ['$scope', '$location', '$http', '$routeParams', 'newsService', 'menuService', 'urlService',
        function ($scope, $location, $http, $routeParams, newsService, menuService, urlService) {

            $scope.go = function (url) {
                urlService.go($location, url);
                $scope.select = true;
            };

            var newsId = $routeParams.newsId;
            newsService.loadItem($scope, './scripts/services/mock/news/news-' + newsId + '.json');

            menuService.loadItems($scope);

        }]);
});
define(['./module'], function (newsService) {

    'use strict';

    newsService.service('newsService', function ($http) {

        this.loadItems = function ($scope, url) {
            $http.get(url).success(
                function (data) {
                    $scope.newsItems = data;
                }
            )
        };

        this.loadItem = function($scope, url) {
            $http.get(url).success(
                function (data) {
                    $scope.newsItem = data;
                }
            )
        }

    })
});


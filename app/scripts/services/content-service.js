define(['./module'], function (contentService) {

    'use strict';

    contentService.service('contentService', function ($http) {

        this.loadItems = function ($scope, url) {
            $http.get(url).success(
                function (data) {
                    $scope.content= data;
                }
            )
        };
    });
});

define(['./module'], function (menuService) {

    'use strict';

    menuService.service('menuService', function ($http) {

        this.loadItems = function ($scope) {
            $http.get('./scripts/services/mock/menu-items.json').success(
                function (data) {
                    $scope.menuItems = data;
                }
            )
        };
    });
});




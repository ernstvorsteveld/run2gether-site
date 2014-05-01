define(['./module'], function (urlService) {

    'use strict';

    urlService.service('urlService', function () {

        this.go = function ($location, url) {
            $location.path(url);
        };

        this.goNews = function ($location, url) {
            $location.path(url);
        }
    })
});


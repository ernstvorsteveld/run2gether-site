define([
    'angular',
    'filters/index',
    'services/index',
    'directives/index',
    'controllers/index',
    'angularRoute'
], function (angular, filters, services, directives, controllers) {
    'use strict';

    return angular.module('R2GApp', [
        'ngRoute',
        'R2GApp.filters',
        'R2GApp.services',
        'R2GApp.directives',
        'R2GApp.controllers'
    ]);
});

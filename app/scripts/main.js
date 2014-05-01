require.config({
    // alias libraries paths
    paths: {
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular',
        'jquery': '../bower_components/jquery/dist/jquery',
        'bootstrap': '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap',
        'angularResource': '../bower_components/angular-resource',
        'angularCookies': '../bower_components/angular-cookies',
        'angularSanitize': '../bower_components/angular-sanitize',
        'angularRoute': '../bower_components/angular-route/angular-route',
        'angularMocks': '../bower_components/angular-mocks/angular-mocks',
        'requireLib': '../bower_components/requirejs/require'
    },
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        },
        priority: [
            'angular'
        ]
    },

    // kick start application
    deps: ['bootstrap']
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'require',
    'angular',
    './app',
    'routes'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['R2GApp']);
    });
});

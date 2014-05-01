define(['./app'], function (R2GApp) {
    'use strict';

    return R2GApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: './views/home.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        });

        $routeProvider.when('/training', {
            templateUrl: 'views/training.html',
            controller: 'TrainingCtrl'
        });

        $routeProvider.when('/lidmaatschap', {
            templateUrl: 'views/lidmaatschap.html',
            controller: 'LidmaatschapCtrl'
        });

        $routeProvider.when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        });

        $routeProvider.when('/news/:newsId', {
            templateUrl: 'views/news-item.html',
            controller: 'NewsCtrl'
        });

        $routeProvider.when('/foto', {
            templateUrl: 'views/foto.html',
            controller: 'FotoCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
});
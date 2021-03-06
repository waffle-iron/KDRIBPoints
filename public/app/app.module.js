
(function() {
    'use strict';

    var KDRPoints = function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/'
        });

        $urlRouterProvider.otherwise('/');
    };

    angular.module('KDRPoints', [
        'ui.router',
    ])
    .config(['$stateProvider', '$urlRouterProvider', KDRPoints]);
})();

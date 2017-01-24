;(function() {
    "use strict";
    angular
        .module('prjIdvApp')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/metas.html',
                    controller: 'MetasController',
                    controllerAs: 'metasCtrl',
                    reloadOnSearch: false
                })
                .otherwise({redirectTo: '/'});
        }])
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.html5Mode(true);
        }]);
}());

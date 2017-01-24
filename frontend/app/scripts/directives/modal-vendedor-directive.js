'use strict';

/**
 * @ngdoc directive
 * @name prjIdvApp.directive:modalVendedorDirective
 * @description
 * # modalVendedorDirective
 */
angular
    .module('prjIdvApp')
    .service('ModalVendedorService', ['$rootScope',  function($rootScope) {
        // sempre usar o service ao invés da diretiva/$rootScope

        this.exibe = function(opcoes) {
            $rootScope.$broadcast("evento-modal-vendedor", opcoes);
        };
    }])
    .directive('modalVendedor', ['$rootScope', '$timeout',
        function ($rootScope, $timeout) {
            var _templateUrl = 'includes/modal-vendedor.tpl.html';

            var _scope = {
              rootCtrl: '='
            };

            var _replace = true;

            var _restrict = 'A';

            var _link = function(scope, element, attrs) {
                
                scope.$on("evento-modal-vendedor", function(evento, objeto) {
                    //mostrar modal
                });
            };

            return {
                templateUrl: _templateUrl,
                scope: _scope,
                restrict: _restrict,
                replace: _replace,
                link: _link
            };
        }]);

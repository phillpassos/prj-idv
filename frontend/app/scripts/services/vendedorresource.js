'use strict';

/**
 * @ngdoc service
 * @name prjIdvApp.OfxResource
 * @description
 * # OfxResource
 * Factory in the prjIdvApp.OfxResource
 */
angular
    .module('prjIdvApp')
    .factory('OfxResource', ['$resource', 'BASE_API', function($resource, BASE_API) {
        var _url = BASE_API + ':id';
        var _params = {
            id: '@id'
        };
        var _methods = {
            obterVendedores: {
                method: 'GET',
                isArray: true
            },

            salvarVendedor: {
                method: 'POST',
                isArray: false
            },

            excluirVendedor: {
                method: 'DELETE'
            }
        };

        return $resource(_url, _params, _methods);
    }]);

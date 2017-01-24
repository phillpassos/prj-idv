'use strict';

/**
 * @ngdoc function
 * @name prjIdvApp.controller:RootcontrollerCtrl
 * @description
 * # RootcontrollerCtrl
 * Controller of the prjIdvApp
 */

angular
    .module('prjIdvApp')
    .controller('RootController', ['$rootScope', '$location',
    function($rootScope, $location) {
        var self = this;

        ;(function() {
            moment.locale('pt-br');
        }());
    }]);

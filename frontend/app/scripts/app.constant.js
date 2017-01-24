;(function() {
    "use strict";
    angular
        .module('prjIdvApp')
        .constant('BASE_API', '/prj-idv-rest-api/')
        .constant('_', _) // lodash
        .constant('moment', moment); // moment
}());

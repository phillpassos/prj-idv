"use strict";

var helper = (function() {
    var _naoDevePassarAqui = function() {
        expect(true).toBeFalsy();
    }

    var _devePassarAqui = function() {
        expect(true).toBeTruthy();
    }

    var BASE_KOOPON_API = '/koopon-rest-api/';
    var BASE_KOOPON_PASSAPORTE = 'https://passaporte2.alterdata.com.br';

    return {
        naoDevePassarAqui: _naoDevePassarAqui,
        devePassarAqui: _devePassarAqui,
        BASE_API: BASE_KOOPON_API,
        BASE_API_PASSAPORTE: BASE_KOOPON_PASSAPORTE
    };

}());

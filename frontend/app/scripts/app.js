'use strict';

/**
 * @ngdoc overview
 * @name kooponFinanceiroContadorApp
 * @description
 * # kooponFinanceiroContadorApp
 *
 * Main module of the application.
 */

angular
  .module('kooponFinanceiroEmpresaApp', [
    'ngResource',
    'ngMessages',
    'ngRoute',
    'ui.calendar',
    'ui.bootstrap',
    'emd.ng-xtorage',
    'emd.ng-redirect-to',
    'file-model',
    'n4AuthenticationInterceptor',
    'alt.koopon.mensagens-contador-empresa',
    'alt.koopon.notificacoes',
    'alt.koopon.selecao-empresa',
    'alt.exportacao-texto',
    'alt.carregando-info',
    'alt.modal-service',
    'alt.select-service',
    'alt.alerta-flutuante',
    'alt.passaporte-usuario-logado',
    'alt.passaporte-listagem-produtos',
    'alt.rotas-listener',
    'alt.rota-reload',
    'alt.botao-loading',
    'alt.date-helper',
    'alt.koopon.usuarios-assinante',
    'alt.passaporte-email-existe',
    'alt.passaporte-acessos-usuario',
    'alt.filtro-generico',
    'alt.erro-servidor-parser',
    'alt.endpoint-ping'
  ]);

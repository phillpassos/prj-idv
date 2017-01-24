'use strict';

describe('app', function() {

    var _BASE_API_KOOPON;
    var _BASE_API_PASSAPORTE;
    var _URL_LOGOUT;
    var _CodigosHttp;
    var _StatusLancamento;
    var _EnumStatusLancamento;
    var _EnumStatusLancamentoArray;
    var _TipoPessoa;
    var _EnumTipoPessoa;
    var _EnumTipoCategoria;
    var _CarregandoInfo;
    var _EventoModal;
    var _EventoCriacoes;
    var _EventoAlerta;
    var _EventoModificacoes;
    var _TipoCategoria;
    var _TokenChart;
    var _TamanhoMaximoCampos;
    var _EventoLancamento;
    var _PeriodosFiltroRelatorio;
    var _PeriodosMensaisFiltroRelatorio;
    var _IdModal;
    var _NUMERO_TENTATIVAS_REQUISICAO;
    var _DATA_PATTERN;
    var _ID_KOOPON_EMPRESA;
    var _EnumTipoBaixa;
    var _acessosEmpresa;

    beforeEach(module('kooponFinanceiroEmpresaApp'));

    beforeEach(inject(function($injector) {
        _BASE_API_KOOPON = $injector.get('BASE_API_KOOPON');
        _BASE_API_PASSAPORTE = $injector.get('BASE_API_PASSAPORTE');
        _URL_LOGOUT = $injector.get('URL_LOGOUT');
        _DATA_PATTERN = $injector.get('DATA_PATTERN');
        _NUMERO_TENTATIVAS_REQUISICAO = $injector.get('NUMERO_TENTATIVAS_REQUISICAO');
        _CodigosHttp = $injector.get('CodigosHttp');
        _StatusLancamento = $injector.get('StatusLancamento');
        _EnumStatusLancamento = $injector.get('EnumStatusLancamento');
        _EnumStatusLancamentoArray = $injector.get('EnumStatusLancamentoArray');
        _CarregandoInfo = $injector.get('CarregandoInfo');
        _EventoModal = $injector.get('EventoModal');
        _EventoCriacoes = $injector.get('EventoCriacoes');
        _EventoAlerta = $injector.get('EventoAlerta');
        _EventoModificacoes = $injector.get('EventoModificacoes');
        _TipoPessoa = $injector.get('TipoPessoa');
        _EnumTipoPessoa = $injector.get('EnumTipoPessoa');
        _EnumTipoCategoria = $injector.get('EnumTipoCategoria');
        _EnumTipoBaixa = $injector.get('EnumTipoBaixa');
        _TipoCategoria = $injector.get('TipoCategoria');
        _TamanhoMaximoCampos = $injector.get('TamanhoMaximoCampos');
        _EventoLancamento = $injector.get('EventoLancamento');
        _TokenChart = $injector.get('TokenChart');
        _IdModal = $injector.get('IdModal');
        _PeriodosFiltroRelatorio = $injector.get('PeriodosFiltroRelatorio');
        _PeriodosMensaisFiltroRelatorio = $injector.get('PeriodosMensaisFiltroRelatorio');
        _ID_KOOPON_EMPRESA = $injector.get('ID_KOOPON_EMPRESA');
        _acessosEmpresa = $injector.get('acessosEmpresa');
    }));

    describe('acessosEmpresa', function() {
      it('deve ter os valores corretos', function() {
        var _acessos = {
          RECUSAR_TAREFA: "44",
          ACEITAR_TAREFA: "45",
          LISTAR_A_RECEBER_ABERTOS: "78",
          LISTAR_A_PAGAR_ABERTOS: "79",
          AGENDAR_LANCAMENTO_A_RECEBER: "80",
          EXCLUIR_LANCAMENTO_AGENDADO_A_RECEBER: "81",
          EXCLUIR_LANCAMENTO_BAIXADO_A_RECEBER: "82",
          ATUALIZAR_LANCAMENTO_A_RECEBER: "83",
          BAIXAR_LANCAMENTO_A_RECEBER: "84",
          INCLUIR_ANEXO_LANCAMENTO_A_RECEBER: "86",
          EXCLUIR_ANEXO_LANCAMENTO_A_RECEBER: "87",
          INCLUIR_ANOTACAO_LANCAMENTO_A_RECEBER: "88",
          EXCLUIR_ANOTACAO_LANCAMENTO_A_RECEBER: "89",
          AGENDAR_LANCAMENTO_A_PAGAR: "90",
          EXCLUIR_LANCAMENTO_AGENDADO_A_PAGAR: "91",
          EXCLUIR_LANCAMENTO_BAIXADO_A_PAGAR: "92",
          ATUALIZAR_LANCAMENTO_A_PAGAR: "93",
          BAIXAR_LANCAMENTO_A_PAGAR: "94",
          INCLUIR_ANEXO_LANCAMENTO_A_PAGAR: "96",
          EXCLUIR_ANEXO_LANCAMENTO_A_PAGAR: "97",
          INCLUIR_ANOTACAO_LANCAMENTO_A_PAGAR: "98",
          EXCLUIR_ANOTACAO_LANCAMENTO_A_PAGAR: "99",
          INCLUIR_TRANSFERENCIA: "100",
          EXCLUIR_TRANFERENCIA: "101",
          LISTAR_CONTAS_CADASTRO: "102",
          INCLUIR_CONTA: "103",
          EXCLUIR_CONTA: "104",
          ALTERAR_CONTA: "105",
          LISTAR_EXTRATO_CONTA: "106",
          LISTAR_PESSOAS_CADASTRO: "107",
          INCLUIR_PESSOA: "108",
          EXCLUIR_PESSOA: "109",
          ALTERAR_PESSOA: "110",
          INCLUIR_ANEXO_PESSOA: "111",
          EXCLUIR_ANEXO_PESSOA: "112",
          INCLUIR_ANOTACAO_PESSOA: "113",
          EXCLUIR_ANOTACAO_PESSOA: "114",
          LISTAR_CENTRO_DE_CUSTO_CADASTRO: "115",
          INCLUIR_CENTRO_DE_CUSTO: "116",
          EXCLUIR_CENTRO_DE_CUSTO: "117",
          ALTERAR_CENTRO_DE_CUSTO: "118",
          LISTAR_CATEGORIA_CADASTRO: "119",
          INCLUIR_CATEGORIA: "120",
          EXCLUIR_CATEGORIA: "121",
          ALTERAR_CATEGORIA: "122",
          ACEITAR_CONVITE_CONTADOR: "153",
          DESVINCULAR_CONTADOR: "154",
          CONVIDAR_CONTADOR: "161",
          LISTAR_CONTADORES_CADASTRO: "163",
          LISTAR_USUARIOS_CADASTRO: "164",
          VISUALIZAR_DASHBOARD: "165",
          VISUALIZAR_CALENDARIO: "166",
          VISUALIZAR_CONSULTA_EXTRATO_CONSOLIDADO: "167",
          VISUALIZAR_CONSULTA_FLUXO_DE_CAIXA_DIARIO: "168",
          VISUALIZAR_CONSULTA_LANCAMENTOS: "169",
          VISUALIZAR_CONSULTA_DEMONSTRATIVO_FINANCEIRO: "170",
          DESVINCULAR_FUNCIONARIO: "171",
          LISTAR_MENSAGEM: "172",
          INCLUIR_MENSAGEM: "173",
          RESPONDER_MENSAGEM: "174",
          VISUALIZAR_INFORMACOES_PROCURACAO: "175",
          CONVIDAR_FUNCIONARIO: "176",
          DELEGAR_PERFIL_ADMINISTRADOR: "177",
          CONSULTAS: "183",
          CADASTROS: "184",
          LISTAR_CONTAS: "190",
          LISTAR_PESSOAS: "191",
          LISTAR_CATEGORIAS: "192",
          LISTAR_CENTRO_DE_CUSTO: "193",
          EXCLUIR_CONCILIACAO_BANCARIA: "426",
          INCLUIR_CONCILIACAO_BANCARIA: "427",
          ALTERAR_CONCILIACAO_BANCARIA: "428",
          LISTAR_CONCILIACAO_BANCARIA: "429"
        }

        for (var prop in _acessosEmpresa) {
          expect(_acessosEmpresa[prop]).toEqual(_acessos[prop]);
        }
      })
    })

    describe('constants', function() {
        describe('BASE_API_KOOPON', function() {
            it('deve ter o valor correto para BASE_API_KOOPON', function() {
                expect(_BASE_API_KOOPON).toEqual(helper.BASE_API);
            })
        })

        describe('ID_KOOPON_EMPRESA', function() {
          it('deve ter o valor correto', function() {
            expect(_ID_KOOPON_EMPRESA).toEqual('60f1fe1f835b14a3d20ac0f046fac668');
          })
        })

        describe('DATA_PATTERN', function() {
           it('deve ter o valor correto para a constante', function() {
              expect(_DATA_PATTERN).toEqual(/\d{2}\/\d{2}\/\d{4}/);
           });
        });

        describe('BASE_API_PASSAPORTE', function() {
            it('deve ter o valor correto para BASE_API_PASSAPORTE', function() {
                expect(_BASE_API_PASSAPORTE).toEqual(helper.BASE_API_PASSAPORTE);
            })
        })

        describe('URL_LOGOUT', function() {
            it('deve ter o valor correto para URL_LOGOUT', function() {
                expect(_URL_LOGOUT).toEqual('https://empresa-koopon.alterdata.com.br/koopon-rest-api/logout.html');
            })
        })

        describe('PeriodosFiltroRelatorio', function() {
            it('deve ter o valor correto', function() {
                expect(_PeriodosFiltroRelatorio()).toEqual([
                    {id: 0, descricao: '7 dias'},
                    {id: 1, descricao: '15 dias'},
                    {id: 2, descricao: '30 dias'},
                    {id: 3, descricao: '90 dias'},
                    {id: 4, descricao: '180 dias'},
                    {id: 5, descricao: 'Personalizado'}])
            });
        })

        describe('PeriodosMensaisFiltroRelatorio', function() {
          it('deve ter o valor correto', function() {
            expect(_PeriodosMensaisFiltroRelatorio()).toEqual([
              {id: 0, descricao: 'Primeiro trimestre'},
              {id: 1, descricao: 'Segundo trimestre'},
              {id: 2, descricao: 'Terceiro trimestre'},
              {id: 3, descricao: 'Quarto trimestre'},
              {id: 4, descricao: 'Primeiro quadrimestre'},
              {id: 5, descricao: 'Segundo quadrimestre'},
              {id: 6, descricao: 'Terceiro quadrimestre'},
              {id: 7, descricao: 'Primeiro semestre'},
              {id: 8, descricao: 'Segundo semestre'},
              {id: 9, descricao: 'Ano atual'},
              {id: 10, descricao: 'Ano passado'},
              {id: 11, descricao: 'Personalizado'}
            ])
          })
        })

        describe('CodigosHttp', function() {
            it('deve ter os valores corretos para os CodigosHttp', function() {
                expect(_CodigosHttp.USUARIO_NAO_AUTORIZADO).toBe(401);
                expect(_CodigosHttp.USUARIO_NAO_RECONHECIDO).toBe(403);
                expect(_CodigosHttp.PAYLOAD_INVALIDO).toBe(400);
                expect(_CodigosHttp.CONFLITO).toBe(409);
                expect(_CodigosHttp.RETENTAR_REQUISICAO).toBe(409);
                expect(_CodigosHttp.FALHA_SERVIDOR).toBe(500);
            })
        })

        describe('StatusLancamento', function() {
            it('deve ter os valores corretos para os status', function() {
                expect(_StatusLancamento.A_RECEBER).toEqual('a_receber');
                expect(_StatusLancamento.A_PAGAR).toEqual('a_pagar');
                expect(_StatusLancamento.EM_ABERTO).toEqual('em_aberto');
                expect(_StatusLancamento.EFETIVADO).toEqual('efetivado');
                expect(_StatusLancamento.VENCIDO).toEqual('vencido');
            })
        })

        describe('EnumTipoBaixa', function() {
            it('deve ter os valores corretos para os enum', function() {
                expect(_EnumTipoBaixa.PADRAO.enum).toEqual(0);
                expect(_EnumTipoBaixa.PADRAO.valor).toEqual("Normal");

                expect(_EnumTipoBaixa.JUROS.enum).toEqual(1);
                expect(_EnumTipoBaixa.JUROS.valor).toEqual("Juros");

                expect(_EnumTipoBaixa.MULTA.enum).toEqual(2);
                expect(_EnumTipoBaixa.MULTA.valor).toEqual("Multa");

                expect(_EnumTipoBaixa.DESCONTO.enum).toEqual(3);
                expect(_EnumTipoBaixa.DESCONTO.valor).toEqual("Desconto");
            })
        })

        describe('EnumStatusLancamento', function() {
            it('deve ter os valores corretos para os enum', function() {
                expect(_EnumStatusLancamento.PAGO.enum).toEqual(0);
                expect(_EnumStatusLancamento.PAGO.valor).toEqual('Pago');

                expect(_EnumStatusLancamento.RECEBIDO.enum).toEqual(1);
                expect(_EnumStatusLancamento.RECEBIDO.valor).toEqual('Recebido');

                expect(_EnumStatusLancamento.VENCIDO.enum).toEqual(2);
                expect(_EnumStatusLancamento.VENCIDO.valor).toEqual('Vencido');

                expect(_EnumStatusLancamento.EM_ABERTO.enum).toEqual(3);
                expect(_EnumStatusLancamento.EM_ABERTO.valor).toEqual('Em Aberto');
            })
        })

        describe('EnumStatusLancamentoArray', function() {
            it('deve ter os valores corretos para as posições do array', function() {
                expect(_EnumStatusLancamentoArray[0].enum).toEqual(_EnumStatusLancamento.PAGO.enum);
                expect(_EnumStatusLancamentoArray[0].valor).toEqual(_EnumStatusLancamento.PAGO.valor);

                expect(_EnumStatusLancamentoArray[1].enum).toEqual(_EnumStatusLancamento.RECEBIDO.enum);
                expect(_EnumStatusLancamentoArray[1].valor).toEqual(_EnumStatusLancamento.RECEBIDO.valor);

                expect(_EnumStatusLancamentoArray[2].enum).toEqual(_EnumStatusLancamento.VENCIDO.enum);
                expect(_EnumStatusLancamentoArray[2].valor).toEqual(_EnumStatusLancamento.VENCIDO.valor);

                expect(_EnumStatusLancamentoArray[3].enum).toEqual(_EnumStatusLancamento.EM_ABERTO.enum);
                expect(_EnumStatusLancamentoArray[3].valor).toEqual(_EnumStatusLancamento.EM_ABERTO.valor);
            })
        })

        describe('TipoPessoa', function() {
            it('deve ter os valores corretos para os tipos', function() {
                expect(_TipoPessoa.PESSOA).toEqual('pessoas');
                expect(_TipoPessoa.CLIENTE).toEqual('clientes');
                expect(_TipoPessoa.FUNCIONARIO).toEqual('funcionarios');
                expect(_TipoPessoa.FORNECEDOR).toEqual('fornecedores');
                expect(_TipoPessoa.SOCIO).toEqual('socios');
            })
        })

        describe('EnumTipoPessoa', function() {
            it('deve ter os valores corretos para os tipos', function() {
                expect(_EnumTipoPessoa.CLIENTE.enum).toBe(0);
                expect(_EnumTipoPessoa.CLIENTE.valor).toBe('Clientes');
                expect(_EnumTipoPessoa.CLIENTE.valorSingular).toBe('Cliente');

                expect(_EnumTipoPessoa.FUNCIONARIO.enum).toBe(1);
                expect(_EnumTipoPessoa.FUNCIONARIO.valor).toBe('Funcionários');
                expect(_EnumTipoPessoa.FUNCIONARIO.valorSingular).toBe('Funcionário');

                expect(_EnumTipoPessoa.FORNECEDOR.enum).toBe(2);
                expect(_EnumTipoPessoa.FORNECEDOR.valor).toBe('Fornecedores');
                expect(_EnumTipoPessoa.FORNECEDOR.valorSingular).toBe('Fornecedor');

                expect(_EnumTipoPessoa.SOCIO.enum).toBe(3);
                expect(_EnumTipoPessoa.SOCIO.valor).toBe('Sócios');
                expect(_EnumTipoPessoa.SOCIO.valorSingular).toBe('Sócio');
            })
        })

        describe('EnumTipoCategoria', function() {
            it('deve ter os valores corretos para os tipos', function() {
                expect(_EnumTipoCategoria.SAIDA.enum).toBe(0);
                expect(_EnumTipoCategoria.SAIDA.valor).toBe('Saída');

                expect(_EnumTipoCategoria.ENTRADA.enum).toBe(1);
                expect(_EnumTipoCategoria.ENTRADA.valor).toBe('Entrada');

                expect(_EnumTipoCategoria.TRANSFERENCIA.enum).toBe(2);
                expect(_EnumTipoCategoria.TRANSFERENCIA.valor).toBe('Transferencia');
            })
        })

        describe('TipoCategoria', function() {
            it('deve ter os valores corretos para TipoCategoria', function() {
                expect(_TipoCategoria.ENTRADA).toEqual('entrada');
                expect(_TipoCategoria.SAIDA).toEqual('saida');
                expect(_TipoCategoria.TRANSFERENCIA).toEqual('transferencia');
            })
        })

        describe('TamanhoMaximoCampos', function() {
            it('deve ter os valores corretos para as propriedades', function() {
                expect(_TamanhoMaximoCampos.geral).toBe(100);
                expect(_TamanhoMaximoCampos.data).toBe(10);
                expect(_TamanhoMaximoCampos.valor).toBe(15);
            })
        })

        describe('NUMERO_TENTATIVAS_REQUISICAO', function() {
            it('deve ter o valor correto para NUMERO_TENTATIVAS_REQUISICAO', function() {
                expect(_NUMERO_TENTATIVAS_REQUISICAO).toBe(3);
            })
        })

        describe('CarregandoInfo', function() {
            it('deve ter os valores corretos para o objeto', function() {
                expect(_CarregandoInfo.EVENTO_CARREGANDO_INFO).toEqual('carregando-info');
                expect(_CarregandoInfo.EVENTO_ESCONDER_CARREGANDO_INFO).toEqual('esconder-carregando-info');
            })
        })

        describe('EventoModal', function() {
            it('deve ter os valores corretos para o objeto', function() {
                expect(_EventoModal.EXIBE_LANCAMENTO_ESPECIFICO).toEqual('abre-modal-lancamento');
                expect(_EventoModal.EXIBE_LANCAMENTO_VAZIO).toEqual('abre-modal-lancamento-vazio');
                expect(_EventoModal.EXIBE_MODAL_GENERICO_EXCLUSAO).toEqual('abre-modal-generico-exclusao');
                expect(_EventoModal.EXIBE_MODAL_CONTA).toEqual('abre-modal-conta');
                expect(_EventoModal.EXIBE_MODAL_CATEGORIA).toEqual('abre-modal-categoria');
                expect(_EventoModal.EXIBE_MODAL_CENTRO_DE_CUSTO).toEqual('abre-modal-centro-de-custo');
                expect(_EventoModal.EXIBE_MODAL_PESSOA).toEqual('abre-modal-pessoa');
                expect(_EventoModal.EXIBE_MODAL_TRANSFERENCIA).toEqual('abre-modal-transferencia');
                expect(_EventoModal.EXIBE_MODAL_ACOES_LANCAMENTO_CALENDARIO).toEqual('abre-modal-acoes-lancamento-calendario');
            })
        })

        describe('EventoLancamento', function() {
            it('deve ter os valores corretos para as propriedades de EventoLancamento', function() {
                expect(_EventoLancamento.LANCAMENTO_AGENDADO).toEqual('lancamento:agendado');
                expect(_EventoLancamento.LANCAMENTOS_RECORRENTES_AGENDADOS).toEqual('lancamento:recorrentes_agendados');
                expect(_EventoLancamento.LANCAMENTO_EDITADO).toEqual('lancamento:editado');
                expect(_EventoLancamento.LANCAMENTO_NOVO_EFETIVADO).toEqual('lancamento:novo_efetivado');
                expect(_EventoLancamento.LANCAMENTO_NOVO_COM_BAIXA).toEqual('lancamento:novo_com_baixa');
                expect(_EventoLancamento.LANCAMENTO_AGENDADO_EFETIVADO).toEqual('lancamento:agendado_efetivado');
                expect(_EventoLancamento.LANCAMENTO_DELETADO).toEqual('lancamento:deletado');
            })
        })

        describe('IdModal', function() {
            it('deve ter o valor correto para as constantes', function() {
                expect(_IdModal.ID_MODAL_GENERICO_EXCLUSAO).toEqual('#modal-generico-exclusao');
                expect(_IdModal.ID_MODAL_PESSOA).toEqual('#modal-pessoa');
                expect(_IdModal.ID_MODAL_CATEGORIA).toEqual('#modal-categoria');
                expect(_IdModal.ID_MODAL_CENTRO_DE_CUSTO).toEqual('#modal-centro-de-custo');
                expect(_IdModal.ID_MODAL_CONTA).toEqual('#modal-conta');
                expect(_IdModal.ID_MODAL_TRANSFERENCIA).toEqual('#modal-transferencia');
                expect(_IdModal.ID_MODAL_CONVITE_CONTADOR).toEqual('#modal-convite-contador');
                expect(_IdModal.ID_MODAL_ACOES_LANCAMENTO_CALENDARIO).toEqual('#modal-acoes-lancamento-calendario');
            })
        })

        describe('EventoCriacoes', function() {
            it('deve ter o valor correto para a constante', function() {
                expect(_EventoCriacoes.CENTRO_DE_CUSTO_CRIADO).toEqual('centro-de-custo-criado');
                expect(_EventoCriacoes.CONTA_CRIADA).toEqual('conta-criada');
                expect(_EventoCriacoes.CATEGORIA_CRIADA).toEqual('categoria-criada');
                expect(_EventoCriacoes.PESSOA_CRIADA).toEqual('pessoa-criada');
            })
        })

        describe('EventoModificacoes', function() {
            it('deve ter o valor correto para a constante', function() {
                expect(_EventoModificacoes.CENTRO_DE_CUSTO_MODIFICADO).toEqual('centro-de-custo-modificado');
                expect(_EventoModificacoes.CONTA_MODIFICADA).toEqual('conta-modificada');
                expect(_EventoModificacoes.CATEGORIA_MODIFICADA).toEqual('categoria-modificada');
                expect(_EventoModificacoes.PESSOA_MODIFICADA).toEqual('pessoa-modificada');
                expect(_EventoModificacoes.TRANSFERENCIA_FEITA).toEqual('transferencia-conta-feita');
                expect(_EventoModificacoes.WIZARD_NAO_FINALIZADO).toEqual('wizard-nao-finalizado');
                expect(_EventoModificacoes.WIZARD_FINALIZADO).toEqual('wizard-finalizado');
            })
        })

        describe('EventoAlerta', function() {
            it('deve ter o valor correto para as propriedades', function() {
                expect(_EventoAlerta.EVENTO_ALERTA_FLUTUANTE).toEqual('alerta:exibe-alerta-flutuante');
                expect(_EventoAlerta.EVENTO_ESCONDER_ALERTA_FLUTUANTE).toEqual('alerta:esconde-alerta-flutuante');
            })
        })

        describe('TokenChart', function() {
            it('deve ter os valores corretos para as constantes', function() {
                expect(_TokenChart.HIGHCHARTS).toBe('highcharts');
                expect(_TokenChart.HIGHCHARTS_COLORS).toEqual([
                    '#4D7F9C',
                    '#46B19D',
                    '#EFC94C',
                    '#E3793F',
                    '#DF494A',
                    '#28B88C',
                    '#0A392A',
                    '#9F961B',
                    '#72793F'
                ]);

                expect(_TokenChart.OPCOES_DEFAULT).toEqual({
                    lang: {
                        numericSymbols: null,
                        noData: 'Nenhuma informação disponível',
                        decimalPoint: ',',
                        thousandsSep: '.'
                    },
                    noData: {
                        style: {
                            fontWeight: 'normal',
                            fontSize: '30px',
                            color: '#ccc'
                        }
                    }
                })
            })
        })
    })
});

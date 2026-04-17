 /**
 * ================================================================
 * --CASO DE TESTE: CT06 - Pedido de Transferencia
 * ================================================================
 *
 * Ambiente: Homologacao
 * Banco de Dados: Centrao_Diego
 * Versao da aplicacao: master
 *
 * ----------------------------------------------------------------
 * --REGRAS IMPORTANTES (Recomendacao do DEV) no 3
 * ----------------------------------------------------------------
 * Sempre realizar pelo menos:
 * - 1 pedido de Transferencia
 *
 * Essas validacoes sao criticas, pois alteracoes podem impactar
 * essa funcionalidade e gerar erro apenas no cliente final.
 *
 * ----------------------------------------------------------------
 * --OBJETIVO DO TESTE
 * ----------------------------------------------------------------
 * Verificar se o sistema finaliza o orcamento com a situacao:
 * - Orcamento Confirmado
 * - Apenas Orcamento
 *
 * Validar que nao ocorram erros ao:
 * - Criar pedido de Transferencia
 * - Salvar o orcamento confirmado
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Ao realizar um pedido de Transferencia:
 * - O orcamento deve ser finalizado com a situacao
 *   "Orcamento Confirmado" e de "apenas orcamento"
 * - O sistema nao deve apresentar erros no fluxo
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicavel)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================
 */

describe('Orcamentos - Geral Marcio', () => {
  beforeEach(() => {
    cy.fazerLoginModuloVendas('ORC01', 'm')
  })

  afterEach(() => {
    cy.verificarErroSistema()
    cy.DeslogarModuloVendas()
  })

  it('CT06-a - Pedido de Transferencia como Orcamento Confirmado', () => {
    cy.fazerLoginMenuTransferencia('1')
    cy.ItensTransferencia()
    cy.FilialDestino()
    cy.FinalizarOrcamentoConfirmado()
  })

  it('CT06-b - Pedido de Transferencia como Apenas Orcamento', () => {
    cy.fazerLoginMenuTransferencia('1')
    cy.ItensTransferencia()
    cy.FilialDestino()
    cy.FinalizarOrcamentoApenasOrcamento()
  })
})

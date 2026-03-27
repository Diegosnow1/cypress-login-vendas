 /**
 * ================================================================
 * --CASO DE TESTE: CT06 - Pedido de Transferência
 * ================================================================
 *
 * Ambiente: Homologação
 * Banco de Dados: Centrao_Diego
 * Versão da aplicação: master
 *
 * ----------------------------------------------------------------
 * --REGRAS IMPORTANTES (Recomendação do DEV) nº 3 
 * ----------------------------------------------------------------
 * Sempre realizar pelo menos:
 * - 1 pedido de Transferência
 *
 * Essas validações são críticas, pois alterações podem impactar
 * essa funcionalidade e gerar erro apenas no cliente final.
 *
 * ----------------------------------------------------------------
 * --OBJETIVO DO TESTE
 * ----------------------------------------------------------------
 * Verificar se o sistema finaliza o orçamento com a situação:
 * - Orçamento Confirmado
 * - Apenas Orçamento
 *
 * Validar que não ocorram erros ao:
 * - Criar pedido de Transferência
 * - Salvar o orçamento confirmado
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Ao realizar um pedido de Transferência:
 * - O orçamento deve ser finalizado com a situação
 *   "Orçamento Confirmado" e de "apenas orçamento"
 * - O sistema não deve apresentar erros no fluxo
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicável)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================
 */ 

/*  const {
  fazerLoginMenuTransferencia,
  ItensTransferencia,
  FilialDestino,
  Cliente,
  FormaPagamento,
  Endereco,
  FinalizarOrcamentoConfirmado,
  FinalizarOrcamentoApenasOrcamento,
  
} = require('../../support/help') */

  describe('Orçamentos - Geral Marcio', () => {

    beforeEach(() => {
    cy.fazerLoginModuloVendas('ORC01', 'm')
    
  })
  afterEach(() => {
    cy.verificarErroSistema()
  })
  it('CT06-a - Pedido de Transferência como Orçamento Confirmado ', () => {
    cy.fazerLoginMenuTransferencia('1')
    cy.ItensTransferencia()
    cy.FilialDestino()
    cy.FinalizarOrcamentoConfirmado()

})

  describe('Orçamentos - Geral Marcio', () => {

    beforeEach(() => {
    cy.fazerLoginModuloVendas('ORC01', 'm')
    
  })
  afterEach(() => {
    cy.verificarErroSistema()
  })
  it('CT06-b - Pedido de Transferência como Apenas Orçamento', () => {
    cy.fazerLoginMenuTransferencia('1')
    cy.ItensTransferencia()
    cy.FilialDestino()
    cy.FinalizarOrcamentoApenasOrcamento()

 
}) 
})
})

/**
 * ================================================================
 * --CASO DE TESTE: CT07 - Pedido com Mais Itens e Casas Decimais
 * ================================================================
 *
 * Ambiente: Homologação
 * Banco de Dados: Centrao_Diego
 * Versão da aplicação: master
 *
 * ----------------------------------------------------------------
 * --REGRAS IMPORTANTES (Recomendação do DEV) nº 4 
 * ----------------------------------------------------------------
 * Sempre realizar pelo menos:
 * - 1 pedido com mais itens no orçamento e  que tenha mais casas decimais
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
 * - Criar pedido com mais itens no orçamento e que tenha mais casas decimais
 * - Salvar o orçamento confirmado e apenas orçamento sem erros e com sucesso.
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Ao realizar um pedido com mais itens no orçamento e que tenha mais casas decimais:
 * - O orçamento deve ser finalizado com a situação
 *   "Orçamento Confirmado" e de "apenas orçamento"
 * - O sistema não deve apresentar erros no fluxo e salvar o orçamento com sucesso.
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicável)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================
 */ 



  describe('Orçamentos - Geral Marcio', () => {

    beforeEach(() => {
    cy.fazerLoginModuloVendas('ORC01', 'm')
    
  })
  afterEach(() => {
    cy.verificarErroSistema()
    cy.DeslogarModuloVendas()
  })
  it('CT06-a - Pedido com Mais Itens no Orçamento e que Tenha Mais Casas Decimais,  salvar como  Apenas Orçamento', () => {
    cy.fazerLoginMenuVenda('1')
    cy.Itens()
    cy.Cliente()
    cy.FormaPagamento()
    cy.Endereco()
    cy.FinalizarOrcamentoApenasOrcamento()
}) 

   describe('Orçamentos - Geral Marcio', () => {

    beforeEach(() => {
    cy.fazerLoginModuloVendas('ORC01', 'm')
    
  })
  afterEach(() => {
    cy.verificarErroSistema()
    cy.DeslogarModuloVendas()
  })
  it('CT06-b - Pedido com Mais Itens no Orçamento e que Tenha Mais Casas Decimais,  salvar como Orçamento Confirmado  ', () => {
    cy.fazerLoginMenuVenda('1')
    cy.Itens()
    cy.Cliente()
    cy.FormaPagamento()
    cy.Endereco()
    cy.FinalizarOrcamentoConfirmado()

 
}) 
})
}) 

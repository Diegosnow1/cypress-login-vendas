/**
 * ================================================================
 * --CASO DE TESTE: CT07 - Duplicar Pedido
 * ================================================================
 *
 * Ambiente: Homologação
 * Banco de Dados: Centrao_Diego
 * Versão da aplicação: master
 *
 * ----------------------------------------------------------------
 * --REGRAS IMPORTANTES (Recomendação do DEV) nº ?
 * ----------------------------------------------------------------
 * Sempre realizar pelo menos:
 * - sempre duplicar um orçamento e salvar como orçamento confirmado e apenas orçamento
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
 * - Duplicar um orçamento e salvar como orçamento confirmado e apenas orçamento
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Ao duplicar um orçamento:
 * - O orçamento deve ser finalizado com um numero de orçamento com a situação de:
 *   "Orçamento Confirmado" e de "apenas orçamento" em cada teste.
 * - O sistema não deve apresentar erros durante o processo, como exemplo apresentando o toast com a mensagem de (houve um erro desconhecido), e deve salvar o orçamento com sucesso.
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

  it('CT07-a Duplicar Orçamento e salvar como apenas orçamento', () => {
    cy.PesquisarOrcamento('1')
    cy.InformarOrcamentoDuplicar('2491130')
    cy.FinalizarOrcamentoApenasOrcamento()
  })  

  it('CT07-b Duplicar Orçamento e salvar como orçamento confirmado', () => {
    cy.PesquisarOrcamento('1')
    cy.InformarOrcamentoDuplicar('2491130')
    cy.FinalizarOrcamentoConfirmado()
  }) 

})

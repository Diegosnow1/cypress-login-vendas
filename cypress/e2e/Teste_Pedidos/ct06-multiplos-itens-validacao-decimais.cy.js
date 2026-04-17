/**
 * ================================================================
 * --CASO DE TESTE: CT07 - Pedido com Mais Itens e Casas Decimais
 * ================================================================
 *
 * Ambiente: Homologacao
 * Banco de Dados: Centrao_Diego
 * Versao da aplicacao: master
 *
 * ----------------------------------------------------------------
 * --REGRAS IMPORTANTES (Recomendacao do DEV) no 4
 * ----------------------------------------------------------------
 * Sempre realizar pelo menos:
 * - 1 pedido com mais itens no orcamento e que tenha mais casas decimais
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
 * - Criar pedido com mais itens no orcamento e que tenha mais casas decimais
 * - Salvar o orcamento confirmado e apenas orcamento sem erros e com sucesso.
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Ao realizar um pedido com mais itens no orcamento e que tenha mais casas decimais:
 * - O orcamento deve ser finalizado com a situacao
 *   "Orcamento Confirmado" e de "apenas orcamento"
 * - O sistema nao deve apresentar erros no fluxo e salvar o orcamento com sucesso.
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

  it('CT06-a - Pedido com Mais Itens no Orcamento e que Tenha Mais Casas Decimais, salvar como Apenas Orcamento', () => {
    cy.fazerLoginMenuVenda('1')
    cy.Itens()
    cy.Cliente()
    cy.FormaPagamento()
    cy.Endereco()
    cy.FinalizarOrcamentoApenasOrcamento()
  })

  it('CT06-b - Pedido com Mais Itens no Orcamento e que Tenha Mais Casas Decimais, salvar como Orcamento Confirmado', () => {
    cy.fazerLoginMenuVenda('1')
    cy.Itens()
    cy.Cliente()
    cy.FormaPagamento()
    cy.Endereco()
    cy.FinalizarOrcamentoConfirmado()
  })
})

 /**
 * ================================================================
 * --CASO DE TESTE: CT05 - Pedido Outras Saidas como Orcamento Confirmado e Apenas Orcamento
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
 * - 1 pedido de Outras Saidas
 * - 1 transferencia
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
 * - Criar pedido de Outras Saidas
 * - Salvar o orcamento
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Ao realizar um pedido de Outras Saidas:
 * - O orcamento deve ser finalizado com a situacao
 *   "Orcamento Confirmado"
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

  it('CT04-a - Pedido Outras Saidas como Orcamento Apenas Orcamento', () => {
    cy.fazerLoginMenuOutrasSaidas('1')
    cy.Itens()
    cy.Cliente()
    cy.Endereco()
    cy.FinalizarOrcamentoApenasOrcamento()
  })

  it('CT04-b - Pedido Outras Saidas como Orcamento Confirmado', () => {
    cy.fazerLoginMenuOutrasSaidas('1')
    cy.Itens()
    cy.Cliente()
    cy.Endereco()
    cy.FinalizarOrcamentoConfirmado()
  })
})

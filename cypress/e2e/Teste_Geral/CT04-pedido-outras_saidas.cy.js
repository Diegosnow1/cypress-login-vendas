 /**
 * ================================================================
 * --CASO DE TESTE: CT05 - Pedido Outras Saídas como Orçamento Confirmado e Apenas Orçamento
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
 * - 1 pedido de Outras Saídas
 * - 1 transferência
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
 * - Criar pedido de Outras Saídas
 * - Salvar o orçamento
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Ao realizar um pedido de Outras Saídas:
 * - O orçamento deve ser finalizado com a situação
 *   "Orçamento Confirmado"
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
  fazerLoginMenuOutrasSaidas,
  Itens,
  Cliente,
  FormaPagamento,
  Endereco,
  FinalizarOrcamentoConfirmado,
  FinalizarOrcamentoApenasOrcamento,
  
} = require('../../support/help') */

describe('Orçamentos - Geral Marcio', () => {
  it('CT04-a - Pedido Outras Saídas como Orçamento  Apenas Orçamento', () => {
    cy.fazerLoginMenuOutrasSaidas('ORC01', 'm')
    cy.Itens()
    cy.Cliente()
    cy.Endereco()
    cy.FinalizarOrcamentoApenasOrcamento()

 
}) 
describe('Orçamentos - Geral Marcio', () => {
  it('CT04-b - Pedido Outras Saídas como Orçamento Confirmado ', () => {
    cy.fazerLoginMenuOutrasSaidas('ORC01', 'm')
    cy.Itens()
    cy.Cliente()
    cy.Endereco()
    cy.FinalizarOrcamentoConfirmado()
}) 

}) 
}) 
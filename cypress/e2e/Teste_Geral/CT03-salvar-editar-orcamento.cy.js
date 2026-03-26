 /**
 * ================================================================
 * --CASO DE TESTE: CT03 - Editar Apenas Orçamento
 * ================================================================
 *
 * Ambiente: Homologação
 * Banco de Dados: Centrao_Diego
 * Versão da aplicação: master
 *
 * ----------------------------------------------------------------
 * --REGRAS IMPORTANTES (Recomendação do DEV) de nº 2
 * ----------------------------------------------------------------
 * -sempre criar um pedido, salvar, editar, alterar, salvar novamente e ver se as condições de pagamento permanecem inalteradas antes de inserir os produtos adicionais no momento da edição.
 *
 * ----------------------------------------------------------------
 * --OBJETIVO DO TESTE
 * ----------------------------------------------------------------
 * (CT03)Fluxo  Venda completa/salvar/editar_quant_produto/salvar novamente como (apenas orçamento) e ( orçamento confirmado) e verificar se as condições de pagamento permanecem inalteradas antes de inserir os produtos adicionais no momento da edição.
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * validaçao 1 = pedido deve manter as mesmas condições de pagamento que foram informadas no momento da criação do orçamento,antes de inserir os produtos adicionais no momento da edição .
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicável)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================*/

/* const {
  fazerLoginMenuVenda,
  Itens,
  Cliente,
  FormaPagamento,
  Endereco,
  FinalizarOrcamentoApenasOrcamento,
  EditarOrcamento,
  FinalizarOrcamentoConfirmado,
  
} = require('../../support/help') */

describe('Orçamentos - Geral Marcio', () => {
  it('CT03-a)Fluxo  Venda completa/salvar/editar_quant_produto/salvar novamente como (apenas orçamento) ', () => {
    cy.fazerLoginMenuVenda('ORC01', 'm')
    cy.Itens()
    cy.Cliente()
    cy.FormaPagamento()
    cy.Endereco()
    cy.FinalizarOrcamentoApenasOrcamento()
    cy.EditarOrcamento()
    cy.FinalizarOrcamentoApenasOrcamento() 
})  
describe('Orçamentos - Geral Marcio', () => {
   it('CT03-b)Fluxo  Venda completa/salvar/editar_quant_produto/salvar novamente como  ( orçamento confirmado) ', () => {
    cy.fazerLoginMenuVenda('ORC01', 'm')
    cy.Itens()
    cy.Cliente()
    cy.FormaPagamento()
    cy.Endereco()
    cy.FinalizarOrcamentoConfirmado()
    cy.EditarOrcamento()
    cy.FinalizarOrcamentoConfirmado() 
})  
}) 
}) 









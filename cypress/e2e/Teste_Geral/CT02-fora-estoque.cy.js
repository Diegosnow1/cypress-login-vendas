 /**
 * ================================================================
 * --CASO DE TESTE: CT02 - Pedido produto fora de estoque
 * ================================================================
 *
 * Ambiente: Homologação
 * Banco de Dados: Centrao_Diego
 * Versão da aplicação: master
 *
 * ----------------------------------------------------------------
 * --REGRAS IMPORTANTES (Recomendação do DEV) de nº 1
 * ----------------------------------------------------------------
 * quando forem homologar qualquer coisas, sempre inserir um "produto fora de estoque", "madeira" e "tinta", porque as 
    alteracoes podem afetar essa funcionalidade no sistema e se nao testar, so vai dar erro no cliente
 *
 * ----------------------------------------------------------------
 * --OBJETIVO DO TESTE
 * ----------------------------------------------------------------
 * (CT02)Fluxo  Venda completa produto fora de estoque
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * -Pedido com produto fora de estoque, o sistema deve finalizar o orçamento com a situação de (apenas orçando) e sem erros. 
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicável)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================

const {
  fazerLogin,
  ItensForaEstoque,
  Cliente,
  FormaPagamento,
  Endereco,
  FinalizarOrcamentoApenasOrcamento
} = require('../../support/help')

describe('Orçamentos - Geral Marcio', () => {
 it('CT02 Fluxo  Venda completa produto fora de estoque', () => {
    fazerLogin('ORC01', 'm')
    ItensForaEstoque()
    Cliente()
    FormaPagamento()
    Endereco()
    FinalizarOrcamentoApenasOrcamento() 


}) 
 
}) 





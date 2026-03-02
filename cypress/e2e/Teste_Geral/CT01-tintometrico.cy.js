 /**
 * ================================================================
 * --CASO DE TESTE: CT01 - Pedido Tintométrico
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
 * (CT01)Fluxo  Venda completa produto Tintométrico
 * - Salvar o orçamento
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Pedido com produto Tintométrico, o sistema deve finalizar o orçamento com a situação de (orçamento confirmado) e sem erros.
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicável)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================*/

const {
  fazerLoginMenuVenda,
  ItensTintometrico,
  Cliente,
  FormaPagamento,
  Endereco,
  FinalizarOrcamentoConfirmado
} = require('../../support/help')

describe('Orçamentos - Geral Marcio', () => {
  it('CT01 Fluxo  Venda completa produto tintometrico', () => {
    fazerLoginMenuVenda('ORC01', 'm')
    ItensTintometrico()
    Cliente()
    FormaPagamento()
    Endereco()
    FinalizarOrcamentoConfirmado()

 
}) 
}) 





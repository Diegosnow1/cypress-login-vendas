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
 * - Salvar o orçamento
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

 const {
  fazerLoginMenuTransferencia,
  ItensTransferencia,
  Cliente,
  FormaPagamento,
  Endereco,
  FinalizarOrcamentoConfirmado,
  FinalizarOrcamentoApenasOrcamento,
  
} = require('../../support/help')

describe('Orçamentos - Geral Marcio', () => {
  it('CT06 - Pedido de Transferência como Orçamento Confirmado e Apenas Orçamento', () => {
    fazerLoginMenuTransferencia('ORC01', 'm')
    //ItensTransferencia()
    //Cliente()
    //FormaPagamento()
    //Endereco()
    FinalizarOrcamentoConfirmado()
    fazerLoginMenuTransferencia('ORC01', 'm')
    ItensTransferencia()
    //Cliente()
    //Endereco()
    FinalizarOrcamentoApenasOrcamento()

 
}) 
})
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
 * -sempre criar um pedido, salvar, editar, alterar, salvar novamente
 *
 * ----------------------------------------------------------------
 * --OBJETIVO DO TESTE
 * ----------------------------------------------------------------
 * (CT03)Fluxo  Venda completa/salvar/editar_quant_produto/salvar novamente como (apenas orçamento)
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * - Ao criar, salvar o pedido e logo entrar novamente e editar, após o sistema deve finalizar o orçamento com a situação de apenas orçando e sem erros.
 *
 *
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicável)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================*/

const {
  fazerLogin,
  Itens,
  Cliente,
  FormaPagamento,
  Endereco,
  FinalizarOrcamentoApenasOrcamento,
  EditarOrcamento
} = require('../../support/help')

describe('Orçamentos - Geral Marcio', () => {
  it('CT03)Fluxo  Venda completa/salvar/editar_quant_produto/salvar novamente como (apenas orçamento) ', () => {
    fazerLogin('ORC01', 'm')
    Itens()
    Cliente()
    FormaPagamento()
    Endereco()
    FinalizarOrcamentoApenasOrcamento()
    EditarOrcamento()
    FinalizarOrcamentoApenasOrcamento() 


}) 
}) 








 /**
 * ================================================================
 * --CASO DE TESTE: CT04 - Editar Orçamento Confirmado
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
 * (CT04)Fluxo  Venda completa/salvar/editar_quant_produto/salvar novamente como  ( orçamento confirmado) 
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * - CASO DE TESTE (CT04): Ao criar, salvar o pedido e logo entrar novamente e editar, após o sistema deve finalizar o orçamento com a situação de ( orçamento confirmado)  e sem erros.
 *
 *
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicável)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================ */

const {
  fazerLogin,
  Itens,
  Cliente,
  FormaPagamento,
  Endereco,
  FinalizarOrcamentoConfirmado,
  EditarOrcamento
} = require('../../support/help')

describe('Orçamentos - Geral Marcio', () => {
  it('CT04)Fluxo  Venda completa/salvar/editar_quant_produto/salvar novamente como  ( orçamento confirmado) ', () => {
    fazerLogin('ORC01', 'm')
    Itens()
    Cliente()
    FormaPagamento()
    Endereco()
    FinalizarOrcamentoConfirmado()
    EditarOrcamento()
    FinalizarOrcamentoConfirmado() 
}) 
}) 





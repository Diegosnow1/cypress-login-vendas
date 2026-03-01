/**
 * 
 * CASO DE TESTE 1

 * Ambiente: Homologação
 * BANCO DE DADOS: Centrao_Diego
 * Versão: master

 * OBJETIVOS DO TESTES:
 * CASO DE TESTE 1º:

  ----------------------------RECOMENDAÇÕES DO DEV--------------------------
2 -sempre criar um pedido, salvar, editar, alterar, salvar novamente

  'CT01)Fluxo  Venda completa/salvar/editar_quant_produto/salvar novamente como  ( orçamento confirmado) 
  
  

 * RESULTADO ESPERADO:
 * CASO DE TESTE (CT01): Ao criar, salvar o pedido e logo entrar novamente e editar, após o sistema deve finalizar o orçamento com a situação de ( orçamento confirmado)  e sem erros.
 
/* =========================
   COMANDOS SQL  AUXILIARES

   ========================= */

describe('Orçamentos - Geral Marcio', () => {

  const esperar = () => {
    cy.get('div.highlight', { timeout: 30000 }).should('not.exist')
    cy.contains(/Carregando|Aguarde/i, { timeout: 30000 }).should('not.exist')
  }

  const fazerLogin = (usuario, senha) => {
    cy.visit('http://localhost:9999/login')
    cy.get('#Login_Usuario').type(usuario)
    cy.get('#Login_Senha').type(senha, { force: true })
    cy.get('#Login_BotaoEntrar').click()

    esperar()

    cy.get('#abrirMenuPrincipal', { timeout: 30000 }).should('be.visible').click()
    cy.get('#MenuPrincipal_OrcamentoVenda', { timeout: 30000 }).should('be.visible').click()
    cy.get('[name="data-password"]').type('1')
    cy.get('#SenhaVendedor_BotaoOk').click()

    esperar()
    cy.get('#iniciar-orcamento-botao-entrar', { timeout: 30000 }).should('be.visible')
    cy.get('#iniciar-orcamento-botao-entrar', { timeout: 30000 }).click({ force: true })
    cy.get('#orcamento_menu_cliente_react', { timeout: 30000 }).should('be.visible')

  }

  const ItensTintometrico = (page) => {
    cy.get('#orcamento_menu_itens', { timeout: 30000 }).should('be.visible').click()
    cy.get('[name="Codigo"]').type('20245')
    cy.get('#PaginaPesquisaProduto_botaoPesquisar').click()
    cy.get('#ItemPesquisaProduto_BotaoTinta_20245').should('be.visible').click()
    esperar()
    cy.contains('button', /^Pesquisar$/i, { timeout: 30000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click()
    cy.contains('#tabela-fornecedores td, #tabela-fornecedores div, #tabela-fornecedores span', /^ABSINTO$/i, { timeout: 30000 })
      .should('be.visible')
      .click()
    cy.contains('button', /^OK$/i, { timeout: 30000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click()
      
    cy.get(':nth-child(2) > #BarraFerramentasGrid_botaoOk').click()
    cy.wait(10000)

}


const ItensForaEstoque = (page) => {
    cy.get('#orcamento_menu_itens', { timeout: 30000 }).should('be.visible').click()
    cy.get('#PaginaPesquisaProduto_botaoProdutosForaDeEstoque').click()
    cy.get('[name="Codigo"]').type('T0147')
    cy.get('#ProdutosForaEstoque_BotaoPesquisar').click()
    cy.get('#ProdutoForaEstoque_BotaoSelecionarTodos2').should('be.visible').click()
    cy.get('#ProdutoForaEstoque_BotaoOk2').click()
    cy.get('input[value="0,000"]', { timeout: 30000 })
      .should('be.visible')
      .clear()
      .type('1,000', { force: true })
    cy.contains('button', /^Aplicar$/i, { timeout: 30000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click()
    cy.wait(10000)

}

const Itens = (page) => {
    cy.get('#orcamento_menu_itens', { timeout: 30000 }).should('be.visible').click()
    cy.get('[name="Codigo"]').type('01241')
    cy.get('#PaginaPesquisaProduto_botaoPesquisar').click()
       esperar()
    cy.contains('button', /^OK$/i, { timeout: 30000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click()
    cy.get('#input-Quantidade-item-Linha-1', { timeout: 30000 })
      .should('be.visible')
      .clear()
      .type('2,000', { force: true })
    cy.wait(15000)
}


  const Cliente = (page) => {
    cy.get('#orcamento_menu_cliente_react', { timeout: 30000 }).should('be.visible').click()
    cy.wait(15000)
    cy.get('[name="CpfCnpj"]').type('26.333.047/0001-60')
    cy.get('#PesquisaCliente_BarraFerramenta_BotaoPesquisar').click()
    cy.get('#PesquisarCliente_Coluna_Nome_0').should('contain.text', 'COMERCIAL PEDROSA LTDA').click()
    cy.wait(15000)
   
}

  const FormaPagamento = (page) => {
    cy.get('#orcamento_menu_formapagamento_react', { timeout: 30000 }).should('be.visible').click()
    //cy.wait(15000)
}

  const Endereco = (page) => {
    cy.get('#orcamento_menu_enderecos_react', { timeout: 30000 }).should('be.visible').click()  
    //cy.wait(10000)
}

  const responderPerguntaAjudaProfissionalSeExistir = () => {
    const seletorPergunta = '[for="FinalizarOrcamento_Inconsistencias_TabelaPergunta_Dados_InputPergunta_#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#_Nao"] > [name="#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#"]'

    cy.get('body').then(($body) => {
      if ($body.find(seletorPergunta).length) {
        cy.get(seletorPergunta).click()
      }
    })
  }

  const FinalizarOrcamentoApenasOrcamento = (page) => {
    cy.get('#orcamento_menu_finalizar', { timeout: 30000 }).should('be.visible').click()  
    
    cy.get('[name="FinalizarOrcamento_GrupoOpcaoOrcamento_ApenasOrcando"]').click()
    cy.wait(8000)
    responderPerguntaAjudaProfissionalSeExistir()
    cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento').click()
    cy.contains(/Orçamento Concluído/i, { timeout: 30000 }).should('be.visible')
    
}



  const FinalizarOrcamentoConfirmado = (page) => {
    cy.get('#orcamento_menu_finalizar', { timeout: 30000 }).should('be.visible').click()  
    cy.wait(8000)
    cy.get('[name="FinalizarOrcamento_GrupoOpcaoOrcamento_OrcamentoConfirmado"]').click()
    cy.wait(8000)
    responderPerguntaAjudaProfissionalSeExistir()
    cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento').click()
    cy.wait(8000)
    cy.contains(/Orçamento Concluído/i, { timeout: 30000 }).should('be.visible')
    
  
}


  const EditarOrcamento = (page) => {
    cy.get('#OrcamentoConcluido_LinkNumeroOrcamento', { timeout: 30000 }).should('be.visible').click()  
    cy.get('[name="SenhaVendedor"]').type('1')
    cy.get('#LoginAntigoVendedor_btnSubmit').click()
      esperar()
    //adicinar outro produto 
    cy.get('#orcamento_menu_itens', { timeout: 30000 }).should('be.visible').click()
    esperar()
    cy.get('#grid-itens__barra-ferramentas__input-referencia')
      .should('be.visible')
      .clear()
      .type('01242')
    cy.get('#grid-itens__barra-ferramenta__botao-adicionar').click()  
    cy.get('#input-Quantidade-item-Linha-1', { timeout: 30000 })
      .should('be.visible')
      .clear()
      .type('2,000', { force: true })
    cy.get('#Totalizador_QuantidadeItens', { timeout: 30000 })
      .should('be.visible')
      .should('have.value', '2')
    cy.wait(15000)
    
 
    
  
}


  

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





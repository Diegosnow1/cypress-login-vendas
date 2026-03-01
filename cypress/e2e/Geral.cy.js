describe('Orçamentos - Geral Marcio', () => {

  const esperar = () => {
    cy.get('div.highlight', { timeout: 30000 }).should('not.exist')
    cy.contains(/Carregando|Aguarde/i, { timeout: 30000 }).should('not.exist')
  }

  const fazerLogin = (usuario, senha) => {
    cy.visit('http://10.10.11.83:9999/login')
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

  const Cliente = (page) => {
    cy.get('#orcamento_menu_cliente_react', { timeout: 30000 }).should('be.visible').click()
    cy.get('[name="CpfCnpj"]').type('26.333.047/0001-60')
    cy.get('#PesquisaCliente_BarraFerramenta_BotaoPesquisar').click()
    cy.get('#PesquisarCliente_Coluna_Nome_0').should('contain.text', 'COMERCIAL PEDROSA LTDA').click()
    cy.wait(10000)
   
}

  const FormaPagamento = (page) => {
    cy.get('#orcamento_menu_formapagamento_react', { timeout: 30000 }).should('be.visible').click()
    cy.get('[name="formaDePagamento"]').select('A VISTA')
    cy.wait(10000)
    cy.get('[name="tipoDeDocumento"]').select('Dinheiro')
    cy.wait(10000)
}

  const Endereco = (page) => {
    cy.get('#orcamento_menu_enderecos_react', { timeout: 30000 }).should('be.visible').click()  
    //cy.wait(10000)
}

  const FinalizarOrcamentoApenasOrcamento = (page) => {
    cy.get('#orcamento_menu_finalizar', { timeout: 30000 }).should('be.visible').click()  
    cy.wait(8000)
    cy.get('[name="FinalizarOrcamento_GrupoOpcaoOrcamento_ApenasOrcando"]').click()
    cy.get('[for="FinalizarOrcamento_Inconsistencias_TabelaPergunta_Dados_InputPergunta_#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#_Nao"] > [name="#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#"]').click()
    cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento').click()
    cy.contains(/Orçamento Concluído/i, { timeout: 30000 }).should('be.visible')
    
}



  const FinalizarOrcamentoConfirmado = (page) => {
    cy.get('#orcamento_menu_finalizar', { timeout: 30000 }).should('be.visible').click()  
    //cy.wait(8000)
    cy.get('[name="FinalizarOrcamento_GrupoOpcaoOrcamento_OrcamentoConfirmado"]').click()
    cy.get('[for="FinalizarOrcamento_Inconsistencias_TabelaPergunta_Dados_InputPergunta_#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#_Nao"] > [name="#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#"]').click()
    cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento').click()
    cy.contains(/Orçamento Concluído/i, { timeout: 30000 }).should('be.visible')
    
  
}


  it('CT01 Fluxo  Venda completa produto tintometrico', () => {
    fazerLogin('ORC01', 'm')
    ItensTintometrico()
    Cliente()
    FormaPagamento()
    Endereco()
    FinalizarOrcamentoConfirmado()
   
})

})
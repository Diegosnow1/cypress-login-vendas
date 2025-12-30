describe('Teste de Login', () => {
  
  // it('Deve realizar login com sucesso e logo deslogar', () => {
  //   cy.visit('http://localhost:9999/login')
  //
  //   cy.get('#Login_Usuario').type('microuni')
  //   cy.get('#Login_Senha').type('m', { force: true })
  //
  //   cy.get('#Login_BotaoEntrar').click()
  //
  //   cy.contains('Bem-vindo')
  //   cy.contains('MICROUNI')
  //   cy.contains('segunda-feira')
  //   
  //   cy.get('.icone-menu').click()
  //   cy.get('#MenuPrincipal_Sair').click()
  //   
  //   
  //   
  //   
  // })

 
  
  // it('Deve realizar login inválido', () => {
  //   cy.visit('http://localhost:9999/login')
  //
  //   cy.get('#Login_Usuario').type('microuni')
  //   cy.get('#Login_Senha').type('a', { force: true })
  //
  //   cy.get('#Login_BotaoEntrar').click()
  //
  //   cy.contains('Usuário ou senha inválidos.')
  //   
  //   
  //
  //
  //   
  // })





   // it('Deve realizaruma venda', () => {
  //  cy.visit('http://localhost:9999/login')
//
  //  cy.get('#Login_Usuario').type('microuni')
  //  cy.get('#Login_Senha').type('m', { force: true })
//
  //  cy.get('#Login_BotaoEntrar').click()
//
  //  cy.contains('Bem-vindo')
  //  cy.contains('MICROUNI')
  //  cy.contains('segunda-feira')
  //  
  //  cy.get('.icone-menu').click()
  //  cy.get('#MenuPrincipal_OrcamentoVenda', { timeout: 10000 }).click()
  //  cy.get('[name="data-password"]').type('1')
  //  cy.get('#SenhaVendedor_BotaoOk',{timeout: 10000}).click()
  //  cy.get('#iniciar-orcamento-botao-entrar',{timeout: 10000}).click()
  //  cy.get('[name="Codigo"]').type('2541')
  //  cy.get('#PaginaPesquisaProduto_botaoPesquisar').click()
  //  cy.get(':nth-child(5) > #BarraFerramentasGrid_botaoOk').click()
  //  cy.get('#Select_Item_Coluna_DescricaoTipoEntrega_Linha-1',{ timeout: 10000 }).select('Expedição')
  //  cy.get('#orcamento_menu_cliente_react').click()
  //  cy.get('[name="Nome"]').type('FLAVIO DEALMO KOCH')
  //  cy.get('#PesquisaCliente_BarraFerramenta_BotaoPesquisar').click()
  //  cy.get('#PesquisarCliente_Coluna_Nome_0',{timeout: 20000}).click()
  //  cy.get('#AbasPesquisaClienteContainer_BotaoSalvar',{timeout: 20000}).click()
  //  cy.get('#orcamento_menu_formapagamento_react').click()
  //  cy.get('[name="formaDePagamento"]').select('30/60')
  //  cy.get('[name="tipoDeDocumento"]', { timeout: 10000 }).select('PIX a prazo')
  //  cy.get('#orcamento_menu_finalizar').click()
  //  cy.get('[for="FinalizarOrcamento_GrupoOpcaoOrcamento_OrcamentoConfirmado"]').click()
  //  cy.get('#FinalizarOrcamento_SenhaLiberacaoPendencia').type('1')
  //  cy.get('#FinalizarOrcamento_BotaoLiberacaoPendencia').click()
  //  cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento').click()
  //    })



    it('Deve duplicar uma venda', () => {
    cy.visit('http://localhost:9999/login')

    cy.get('#Login_Usuario').type('microuni')
    cy.get('#Login_Senha').type('m', { force: true })

    cy.get('#Login_BotaoEntrar').click()

    cy.contains('Bem-vindo')
    cy.contains('MICROUNI')
    cy.contains('segunda-feira')
    
    cy.get('.icone-menu').click()
    cy.get('#MenuPrincipal_PesquisaOrcamento', { timeout: 10000 }).click()
    cy.get('[name="data-password"]',{ timeout: 10000 }).type('1')
    cy.get('#SenhaVendedor_BotaoOk',{timeout: 20000}).click()
    cy.get('[name="NumeroPedido"]',{ timeout: 20000 }).type('7590633')
    cy.get('#PesquisaOrcamento_BotaoPesquisar',{ timeout: 20000 }).click()
    cy.get('#PesquisaOrcamento_botaoDuplicar',{ timeout: 40000 }).click()
    cy.get('#orcamento_menu_finalizar').click()
    cy.get('[for="FinalizarOrcamento_GrupoOpcaoOrcamento_OrcamentoConfirmado"]',{ timeout: 50000 }).click()
    cy.get('#FinalizarOrcamento_SenhaLiberacaoPendencia').type('1')
    cy.get('#FinalizarOrcamento_BotaoLiberacaoPendencia').click()
    cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento').click()
 


    })
})
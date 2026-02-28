describe('Orçamentos - Geral Marcio', () => {

  // ✅ helper simples (resolveu o seu problema)
  const esperar = () => {
    cy.get('div.highlight', { timeout: 30000 }).should('not.exist')
    cy.contains(/Carregando|Aguarde/i, { timeout: 30000 }).should('not.exist')
  }

  const fazerLogin = (usuario, senha) => {
    cy.visit('http://10.10.11.83:9999/login')
    cy.get('#Login_Usuario').type(usuario)
    cy.get('#Login_Senha').type(senha, { force: true })
    cy.get('#Login_BotaoEntrar').click()
    cy.get('#abrirMenuPrincipal', { timeout: 30000 }).click()
    cy.get('#MenuPrincipal_OrcamentoVenda').click()
    cy.get('[name="data-password"]').type('99998')
    cy.get('#SenhaVendedor_BotaoOk').click()
    cy.get('#iniciar-orcamento-botao-entrar').click()
    esperar()
  }



  const MenuVenda = (usuario, senha) => {
    cy.get('#abrirMenuPrincipal', { timeout: 30000 }).click()
    cy.get('#MenuPrincipal_OrcamentoVenda').click()
    cy.get('[name="data-password"]').type('99998')
    cy.get('#SenhaVendedor_BotaoOk').click()
    cy.get('#iniciar-orcamento-botao-entrar').click()
    esperar()
  }

  const adicionarProdutoTintometrico = () => {
    esperar()
    cy.get('#orcamento_menu_itens').click()
    cy.get('[name="Codigo"]').clear().type('76720')
    cy.get('#PaginaPesquisaProduto_botaoPesquisar').click()
    cy.get('#ItemPesquisaProduto_BotaoTinta_76720').click()
    cy.get('.bBds6LJZEvF1IgkE05v\\+OQ\\=\\=').click({ force: true })
    cy.contains('5938').click()
    cy.contains('OK').click()
    cy.get(':nth-child(5) > #BarraFerramentasGrid_botaoOk').click()
    esperar()
  }

  const FormaPagamento = () => {
    esperar()
    cy.get('#orcamento_menu_formapagamento_react').click('center')
    esperar()
    cy.contains('a', 'Forma de Pagamento').click('center')
    cy.contains('Forma de Pagamento', { timeout: 30000 }).should('be.visible')
  }

  it('Fluxo completo', () => {
    fazerLogin('VENDAS01', 'm')
    MenuVenda()
    adicionarProdutoTintometrico()
    FormaPagamento()
  })

})
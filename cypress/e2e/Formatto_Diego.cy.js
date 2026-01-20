

describe('Teste modulo vendas', () => {

    it('deve fazer login com sucesso', () => {
 cy.visit('http://localhost:9999/login')
 cy.get('#Login_Usuario').type('rodrigo')
 cy.get('[name="data-password"]').type('m', { force: true })
 cy.get('#Login_BotaoEntrar').click()
 cy.get('#abrirMenuPrincipal').should('be.visible').click()
 cy.get('#MenuPrincipal_OrcamentoVenda').click()
 cy.get('[name="data-password"]').type('1', { force: true })
 cy.get('#SenhaVendedor_BotaoOk').click()
 cy.get('#iniciar-orcamento-botao-entrar').should('be.visible').click()
 cy.get('[name="Nome"]').type('RODRIGO ANTONIO ROTTA')
 cy.get('#PesquisaCliente_BarraFerramenta_BotaoPesquisar', { force: true }).click()
 cy.get('#PesquisarCliente_Coluna_Nome_0').click()
// cy.get('[name="Email"]').type('rodrigo@email.com')
//cy.get('[name="Apelido"]').type('RODRIGO')
 cy.wait(5000)
 cy.get('#AbasPesquisaClienteContainer_BotaoSalvar', { force: true }).should('be.visible').click()
 cy.get('#orcamento_menu_itens').click()
 cy.get('[name="Codigo"]').type('0001')
    })

}) 
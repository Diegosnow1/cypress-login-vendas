describe('Teste modulo vendas', () => {



/*    function fazerLogin(usuario){
    cy.visit('http://localhost:9999/login')
    cy.get('#Login_Usuario').type(usuario)
    cy.get('#Login_Senha').type('m', { force: true })
    cy.get('#Login_BotaoEntrar').click()
  }

   function sairOrcamento(){
     cy.get('.icone-menu').click()
     cy.get('#MenuPrincipal_Sair').click()

  }

    it.only('Deve realizar login com sucesso e logo deslogar', () => {

      fazerLogin('microuni')
      sairOrcamento()

        
}) 
 
 
  
  
  function fazerLogin(usuario){
    cy.visit('http://localhost:9999/login')
    cy.get('#Login_Usuario').type(usuario)
    cy.get('#Login_Senha').type('m', { force: true })
    cy.get('#Login_BotaoEntrar').click()
    cy.contains('Usuário ou senha inválidos.')
     }
  
      it(' Validar  mensagem de usuario e senha de login inválidos', () => {
      fazerLogin('microuni123')
  }) 
 */



 /*  function fazerLogin(usuario){
    cy.visit('http://localhost:9999/login')
    cy.get('#Login_Usuario').type(usuario)
    cy.get('#Login_Senha').type('m', { force: true })
    cy.get('#Login_BotaoEntrar').click()
    cy.contains('Bem-vindo',{timeout: 10000})
    cy.contains('MICROUNI')
}

function fazerLoginVendedor(vendedor){
    cy.get('.icone-menu').click()
    cy.get('#MenuPrincipal_OrcamentoVenda', { timeout: 10000 }).click()
    cy.get('[name="data-password"]').type(vendedor)
    cy.get('#SenhaVendedor_BotaoOk',{timeout: 10000}).click()
    cy.get('#iniciar-orcamento-botao-entrar',{timeout: 10000}).click()
 
}

function ItensVenda(codigo){
    //cy.get('[name="Codigo"]').type(codigo)
    cy.get('#PaginaPesquisaProduto_botaoProdutosForaDeEstoque').click()
    cy.get('[name="Codigo"]').type(codigo)
    cy.get('#TabelaProdForaEstoque_Codigo_0').click()
    cy.get('#ProdutoForaEstoque_BotaoOk2').click()
    cy.get('[value="0,000"]').clear().type('1,032')
    cy.get('[class*="juPxs3HEvEXuTIp2bVqaFQ=="]').should('be.visible').and('be.enabled').click()
    cy.wait(10000)
    cy.get('#orcamento_menu_itens').click()
    cy.get('#Item_inputPrecoUnitario_td_Linha_1').clear().type('1,03')
     cy.wait(50000)

   
    //cy.get('#Select_Item_Coluna_DescricaoTipoEntrega_Linha-1',{ timeout: 10000 }).select('Expedição')
   
}

function PesquisarCliente(Nome){
    cy.get('#orcamento_menu_cliente_react').click()
    cy.get('[name="Nome"]').type('FLAVIO DEALMO KOCH')
    cy.get('#PesquisaCliente_BarraFerramenta_BotaoPesquisar').click()
    cy.get('#PesquisarCliente_Coluna_Nome_0',{timeout: 20000}).click()
    cy.get('#AbasPesquisaClienteContainer_BotaoSalvar',{timeout: 20000}).click()
   
}



function FormaPagamento(){
    cy.get('#orcamento_menu_formapagamento_react').click()
    cy.get('[name="formaDePagamento"]').select('30/60')
    cy.get('[name="tipoDeDocumento"]', { timeout: 10000 }).select('PIX a prazo')

}

function FinalizarOrcamento() {
    cy.get('#orcamento_menu_finalizar').click()
    cy.get('[name="FinalizarOrcamento_GrupoOpcaoOrcamento_ApenasOrcando"]').click()
    //cy.get('#FinalizarOrcamento_SenhaLiberacaoPendencia').type('1')
    //cy.get('#FinalizarOrcamento_BotaoLiberacaoPendencia').click()
    //cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento').click() */
//}

 //it('Deve realizar uma venda Completa com um produto fora do estoque', () => {
    
/*     
        fazerLogin('microuni')
        fazerLoginVendedor('1')
        ItensVenda('T0001')
        PesquisarCliente('FLAVIO DEALMO KOCH')
        FormaPagamento()
        FinalizarOrcamento()  
}) 
    */



const fazerLogin = (usuario) => {
  cy.visit('http://localhost:9999/login')
  cy.get('#Login_Usuario').type(usuario)
  cy.get('#Login_Senha').type('m', { force: true })
  cy.get('#Login_BotaoEntrar').click()

  }

  
const abrirPesquisaOrcamento = () => {
  cy.get('.icone-menu', { timeout: 10000 }).click()
  cy.get('#MenuPrincipal_PesquisaOrcamento', { timeout: 20000 }).click()
  cy.get('[name="data-password"]',{ timeout: 10000 }).type('1')
  cy.get('#SenhaVendedor_BotaoOk',{timeout: 20000}).click()

   } 



const duplicarVenda = (NumeroPedido) => {
  cy.get('[name="NumeroPedido"]',{ timeout: 20000 }).type(NumeroPedido)
  //cy.get('[data-testid="InputData_PesquisaOrcamento_CampoFiltro_DataInicial"]').type('01/12/2025')
  cy.get('#PesquisaOrcamento_BotaoPesquisar',{ timeout: 20000 }).click()
  cy.get('#PesquisaOrcamento_botaoDuplicar',{ timeout: 40000 }).click()

   } 
   

const finalizarVendaESair = () => {
  cy.get('#orcamento_menu_finalizar').click()
  cy.get('[for="FinalizarOrcamento_GrupoOpcaoOrcamento_OrcamentoConfirmado"]',{ timeout: 50000 }).click()
    //cy.get('#FinalizarOrcamento_SenhaLiberacaoPendencia').type('1')
    //cy.get('#FinalizarOrcamento_BotaoLiberacaoPendencia').click()
    cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento',{ timeout: 40000 }).click()
    cy.get('.icone-menu').click()
    cy.get('#MenuPrincipal_Sair',{ timeout: 40000 }).click()
 

     } 
     
     
  it('Deve duplicar uma venda filial 03', () => {
    
    for (let i = 0; i < 10; i++) {
      fazerLogin('DIEGO1')
      abrirPesquisaOrcamento()
      duplicarVenda('7590826')
      finalizarVendaESair()
    }
    

cy.get('[name="data-password"]').type
cy.get('#SenhaVendedor_BotaoOk').click()
cy.get('#SenhaVendedor_BotaoOk')
})  

})  



  




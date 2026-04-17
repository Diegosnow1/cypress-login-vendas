Cypress.Commands.add('esperar', () => {
  cy.get('div.highlight', { timeout: 30000 }).should('not.exist')
  cy.contains(/Carregando|Aguarde/i, { timeout: 30000 }).should('not.exist')
})

Cypress.Commands.add('aguardarTelaCliente', () => {
  cy.esperar()

  cy.get('body', { timeout: 30000 }).should(($body) => {
    expect($body.find('[name="CpfCnpj"]:visible').length, 'campo CpfCnpj visivel').to.be.greaterThan(0)
    expect($body.find('#PesquisaCliente_BarraFerramenta_BotaoPesquisar:visible').length, 'botao pesquisar cliente visivel').to.be.greaterThan(0)
  })
})

Cypress.Commands.add('aguardarTelaFormaPagamento', () => {
  cy.esperar()

  cy.get('#AbaFormaDePagamento_incluir', { timeout: 30000 })
    .should('be.visible')
    .and('not.be.disabled')
})

Cypress.Commands.add('fazerLoginModuloVendas', (usuario, senha) => {
  //cy.visit('http://10.10.10.197:9999/login')
  cy.visit('http://10.10.11.109:9999/login')
  //cy.visit('http://localhost:9999/login')
  cy.get('#Login_Usuario').type(usuario)
  cy.get('#Login_Senha').type(senha, { force: true })
  cy.get('#Login_BotaoEntrar').click()

  cy.esperar()

  cy.get('#abrirMenuPrincipal', { timeout: 30000 }).should('be.visible').click()

  })

Cypress.Commands.add('fazerLoginMenuVenda', (senha_Vendedor) => {
  cy.get('#MenuPrincipal_OrcamentoVenda', { timeout: 30000 }).should('be.visible').click()
  cy.get('[name="data-password"]').type(senha_Vendedor)
  cy.get('#SenhaVendedor_BotaoOk').click()

  cy.esperar()
  cy.get('#iniciar-orcamento-botao-entrar', { timeout: 30000 }).should('be.visible')
  cy.get('#iniciar-orcamento-botao-entrar', { timeout: 30000 }).click({ force: true })
  //cy.get('#orcamento_menu_cliente_react', { timeout: 30000 }).should('be.visible')
})



  Cypress.Commands.add('fazerLoginMenuOutrasSaidas', (senha_vendedor) => {
  cy.get('#MenuPrincipal_OrcamentoOutrasSaidas', { timeout: 30000 }).should('be.visible').click()
  cy.get('[name="data-password"]').type(senha_vendedor)
  cy.get('#SenhaVendedor_BotaoOk').click()

  cy.esperar()
  cy.get('#iniciar-orcamento-botao-entrar', { timeout: 30000 }).should('be.visible')
  cy.get('#iniciar-orcamento-botao-entrar', { timeout: 30000 }).click({ force: true })
  cy.get('#orcamento_menu_cliente_react', { timeout: 30000 }).should('be.visible')
})

Cypress.Commands.add('fazerLoginMenuTransferencia', (senha_vendedor) => {
  cy.get('#MenuPrincipal_OrcamentoTransferencia', { timeout: 30000 }).should('be.visible').click()
  cy.get('[name="data-password"]').type(senha_vendedor)
  cy.get('#SenhaVendedor_BotaoOk').click()

  cy.esperar()
  cy.get('#iniciar-orcamento-botao-entrar', { timeout: 30000 }).should('be.visible')
  cy.get('#iniciar-orcamento-botao-entrar', { timeout: 30000 }).click({ force: true })
  //cy.get('#orcamento_menu_cliente_react', { timeout: 30000 }).should('be.visible')
})

Cypress.Commands.add('PesquisarOrcamento', (senha_vendedor) => {
  cy.get('#MenuPrincipal_PesquisaOrcamento', { timeout: 30000 }).should('be.visible').click()
  cy.get('[name="data-password"]').type(senha_vendedor)
  cy.get('#SenhaVendedor_BotaoOk').click()

  cy.esperar()

})

Cypress.Commands.add('ItensTintometrico', () => {

  cy.intercept('POST', '/Produto/Pesquisar').as('pesquisarProduto')
  cy.intercept('POST', '/ItemOrcamento/ProdutoAdicionadoOrcamento').as('produtoAdicionado')

  cy.get('#orcamento_menu_itens', { timeout: 30000 })
    .should('be.visible')
    .click()

  cy.get('[name="Codigo"]')
    .clear()
    .type('20245')

  cy.get('#PaginaPesquisaProduto_botaoPesquisar').click()

  cy.wait('@pesquisarProduto')

  cy.get('#ItemPesquisaProduto_BotaoTinta_20245', { timeout: 10000 })
    .should('be.visible')
    .click()

  cy.esperar()

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

  // 🔥 espera backend finalizar
  cy.wait('@produtoAdicionado')

  // 🔥 pequeno delay para toast aparecer (evento assíncrono)
  cy.wait(1500)

  // 🔥 garante que não tem validação travando a tela
  cy.contains('venda mínima', { timeout: 5000 })
    .should('not.exist')

  cy.esperar()

  cy.get('#BarraFerramentasGrid_botaoOk', { timeout: 10000 })
    .should('be.visible')
    .click()

  // 🔥 pós clique ainda pode atualizar
  cy.esperar()

  // 🔥 valida que pode sair da tela com segurança
  cy.get('#input-Quantidade-item-Linha-1', { timeout: 30000 })
    .should('be.visible')

  cy.get('#orcamento_menu_cliente_react', { timeout: 20000 })
    .should('be.visible')
})


Cypress.Commands.add('ItensForaEstoque', (page) => {
  cy.get('#orcamento_menu_itens', { timeout: 30000 }).should('be.visible').click()
  cy.get('#PaginaPesquisaProduto_botaoProdutosForaDeEstoque').click()
  cy.get('[name="Codigo"]').type('T0147')
  cy.get('#ProdutosForaEstoque_BotaoPesquisar').click()
  cy.get('#TabelaProdForaEstoque_Codigo_0').should('be.visible').click()
  cy.get('#ProdutoForaEstoque_BotaoOk2').click()
  cy.get('input[value="0,000"]', { timeout: 30000 })
    .should('be.visible')
    .clear()
    .type('1,000', { force: true })
  cy.contains('button', /^Aplicar$/i, { timeout: 30000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click()
  cy.wait(8000)
})

Cypress.Commands.add('Itens', (page) => {
  cy.get('#orcamento_menu_itens', { timeout: 30000 }).should('be.visible').click()
  cy.get('[name="Codigo"]').type('21101')
  cy.get('#PaginaPesquisaProduto_botaoPesquisar').click()
  cy.esperar()
  cy.contains('button', /^OK$/i, { timeout: 30000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click()
  cy.get('#input-Quantidade-item-Linha-1', { timeout: 30000 })
    .should('be.visible')
    .clear()
    .type('2,000', { force: true })

  cy.get('#barra-ferramentas-grid-itens__botao-incluir').click()
  cy.get('[name="Codigo"]').type('24059')
  cy.get('#PaginaPesquisaProduto_botaoPesquisar').click()
  cy.esperar()
  cy.contains('button', /^OK$/i, { timeout: 30000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click()
  cy.get('#input-Quantidade-item-Linha-2', { timeout: 30000 })
    .should('be.visible')
    .clear()
    .type('3,500', { force: true })
  cy.wait(4000)
})

Cypress.Commands.add('Cliente', (page) => {
  cy.intercept('POST', '/Orcamento/AtualizarCliente').as('atualizarCliente')
  cy.intercept('POST', '/Orcamento/VerificarClienteSemAreaVenda').as('verificarClienteSemAreaVenda')

  cy.esperar()

  cy.get('#orcamento_menu_cliente_react', { timeout: 30000 })
    .should('be.visible')
    .click()

  cy.aguardarTelaCliente()

  cy.get('[name="CpfCnpj"]', { timeout: 30000 })
    .should('be.visible')
    .clear()
    .type('26.333.047/0001-60')

  cy.get('#PesquisaCliente_BarraFerramenta_BotaoPesquisar').click()
  cy.get('#PesquisarCliente_Coluna_Nome_0').should('contain.text', 'COMERCIAL PEDROSA LTDA').click()

  cy.wait('@atualizarCliente')

  cy.get('#PendenciaCliente_BotaoOk').click()
  cy.wait('@verificarClienteSemAreaVenda')
  cy.wait('@atualizarCliente')
  cy.esperar()
})


Cypress.Commands.add('FormaPagamento', (page) => {
  cy.esperar()

  cy.get('#orcamento_menu_formapagamento_react', { timeout: 30000 })
    .should('be.visible')
    .click()

  cy.aguardarTelaFormaPagamento()

  cy.get('#AbaFormaDePagamento_incluir')
    .click()
  cy.get('[name="Tipo"]', { timeout: 30000 })
    .should('be.visible')
    .select('À Vista')
  cy.get('[name="IdTipoDocumento"]', { timeout: 30000 })
    .should('be.visible')
    .select('PIX')

  cy.get('#IncluirEditarParcela_Valor', { timeout: 30000 })
    .should('be.visible')
    .clear()
    .type('10,00', { force: true })
  cy.get('#IncluirEditarParcela_BotaoAplicar', { timeout: 30000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click()
  cy.esperar()
})

Cypress.Commands.add('Endereco', (page) => {
  cy.get('#orcamento_menu_enderecos_react', { timeout: 30000 }).should('be.visible').click()
  //cy.wait(10000)
})

Cypress.Commands.add('responderPerguntaAjudaProfissionalSeExistir', () => {
  const seletorPergunta = '[for="FinalizarOrcamento_Inconsistencias_TabelaPergunta_Dados_InputPergunta_#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#_Nao"] > [name="#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#"]'

  cy.get('body').then(($body) => {
    if ($body.find(seletorPergunta).length) {
      cy.get(seletorPergunta).click()
    }
  })
})

Cypress.Commands.add('FinalizarOrcamentoApenasOrcamento', (page) => {
  cy.get('#orcamento_menu_finalizar', { timeout: 30000 })
  .should('be.visible')
  .click()

  cy.contains('Apenas Orçamento',{ timeout: 60000 })
  .should('be.visible') 
  .click()
 
  cy.get('[for="FinalizarOrcamento_Inconsistencias_TabelaPergunta_Dados_InputPergunta_#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#_Nao"] > [name="#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#"]').click()

  cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento')
  .should('be.visible')
  .and('not.be.disabled')
  .click()

  //VALIDAR SE O ORÇAMENTO FOI FINALIZADO COM SUCESSO, MENSAGEM DE ORÇAMENTO CONCLUÍDO
  cy.contains(/Orçamento Concluído/i, { timeout: 30000 })
  .should('be.visible')
})

Cypress.Commands.add('FinalizarOrcamentoConfirmado', (page) => {
  cy.get('#orcamento_menu_finalizar', { timeout: 30000 })
  .should('be.visible')
  .click()

  cy.get('[name="FinalizarOrcamento_GrupoOpcaoOrcamento_OrcamentoConfirmado"]',{ timeout: 60000 })
  .should('be.visible')
  .click()
  
  cy.get('[for="FinalizarOrcamento_Inconsistencias_TabelaPergunta_Dados_InputPergunta_#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#_Nao"] > [name="#ID_PERGUNTA_OCORREU_AJUDA_DE_PROFISSIONAL_INTERNO_EXTERNO#"]').click()
  
  cy.get('#FinalizarOrcamento_botaoEncerrarOrcamento', { timeout: 30000 })
  .should('be.visible')
  .and('not.be.disabled')
  .click()
 
  //VALIDAR SE O ORÇAMENTO FOI FINALIZADO COM SUCESSO, MENSAGEM DE ORÇAMENTO CONCLUÍDO
  cy.contains(/Orçamento Concluído/i, { timeout: 30000 })
  .should('be.visible')
})

Cypress.Commands.add('EditarOrcamento', (page) => {
  cy.get('#OrcamentoConcluido_LinkNumeroOrcamento', { timeout: 30000 }).should('be.visible').click()
  cy.get('[name="SenhaVendedor"]').type('1')
  cy.get('#LoginAntigoVendedor_btnSubmit').click()
  cy.esperar()

  //VALIDAR SE EXISTE AS DUAS LINHAS COM AS PARCELAS (DINHEIRO E PIX)
  cy.get('#orcamento_menu_formapagamento_react', { timeout: 30000 }).should('be.visible').click()
  cy.contains('td', /^Dinheiro$/i, { timeout: 30000 }).should('be.visible')
  cy.contains('td', /^PIX$/i, { timeout: 30000 }).should('be.visible')

  //adicinar outro produto
  cy.get('#orcamento_menu_itens', { timeout: 30000 }).should('be.visible').click()
  cy.esperar()
  cy.get('#grid-itens__barra-ferramentas__input-referencia')
    .should('be.visible')
    .clear()
    .type('01242')
  cy.get('#grid-itens__barra-ferramenta__botao-adicionar').click()
  cy.get('#input-Quantidade-item-Linha-1', { timeout: 30000 })
    .should('be.visible')
    .clear()
    .type('2,000', { force: true })
  //VALIDAR SE O TOTAL DE ITENS FOI ATUALIZADO PARA 3,
  cy.get('#Totalizador_QuantidadeItens', { timeout: 30000 })
    .should('be.visible')
    .should('have.value', '3')
  cy.wait(8000)
})

Cypress.Commands.add('ItensTransferencia', (page) => {
  cy.get('[name="Codigo"]').type('21101').click()
  cy.get('#PaginaPesquisaProduto_botaoPesquisarInserirContinuar').click()
  cy.get('#PaginaPesquisaProdutoContainer_Breadcrumb_BtnVoltar').click()
})

Cypress.Commands.add('FilialDestino', (page) => {
  cy.get('#orcamento_menu_destino').click()
  cy.get('[name="Destino"]').select('02-02 - CAPARAO-centrao/SOL')
  cy.get('[name="Destino"] option:selected').should('contain.text', '02-02 - CAPARAO-centrao/SOL')
  cy.get('#aplicar-destino-transferencia').click()
})


Cypress.Commands.add('InformarOrcamentoDuplicar', (numped) => {
 cy.get('[name="NumeroPedido"]').click().type(numped)
 cy.get('#PesquisaOrcamento_BotaoPesquisar').click()
 cy.get('#PesquisaOrcamento_botaoDuplicar').should('be.visible').click()
 
})

Cypress.Commands.add('verificarErroSistema', () => {
  cy.get('body').then(($body) => {
    if ($body.text().toLowerCase().includes('houve um erro desconhecido')) {
      throw new Error('🚨 ERRO DO SISTEMA DETECTADO: houve um erro desconhecido')
    }
  })
})

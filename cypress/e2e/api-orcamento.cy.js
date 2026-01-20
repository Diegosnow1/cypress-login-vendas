describe('Teste de API - Criar orçamento', () => {

  it('Deve criar orçamento com JSON informado', () => {

    cy.fixture('orcamento').then((orcamento) => {

      // 🔑 GERA IDs ÚNICOS PARA NÃO DAR CONFLITO
      const timestamp = Date.now()

      orcamento.OrigemPedido = timestamp
      orcamento.IdPedidoOrigem = timestamp.toString()

      cy.request({
        method: 'POST',
        url: 'http://localhost:9990/api/venda/orcamento/criar',
        qs: {
          token: 'sQACkUBojgTdYRq4eAS4FhMuZVVphKR2XPEM/gL1D23kwWUKqyI/OmFMj4JIy+VsLUUz+dKIuOCp3gZC3GCUpw=='
        },
        headers: {
          'Content-Type': 'application/json'
        },
        body: orcamento,

        // ⏱️ TIMEOUT MAIOR (endpoint pesado)
        timeout: 120000, // 2 minutos

        // ❗ NÃO QUEBRAR O TESTE SE DER ERRO DE NEGÓCIO
        failOnStatusCode: false

      }).then((response) => {

        // 🔎 LOG PARA ENTENDER O COMPORTAMENTO
        cy.log('STATUS: ' + response.status)
        cy.log(JSON.stringify(response.body))

        // ✅ ASSERT BÁSICO (AJUSTAMOS DEPOIS)
        expect(response.status).to.eq(200)

      })

    })

  })

})

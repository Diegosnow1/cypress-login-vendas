import './commands'  // 👈 ESSA LINHA RESOLVE SEU ERRO

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
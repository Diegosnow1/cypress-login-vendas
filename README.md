#  Cols QA — Cypress e Git
----------------------------------------------------------------------------------------------------------

##  Modelo de Ficha / Caso de Teste

<!-- /**
 * ================================================================
 * --CASO DE TESTE: CT05 - Pedido Outras Saídas
 * ================================================================
 *
 * Ambiente: Homologação
 * Banco de Dados: Centrao_Diego
 * Versão da aplicação: master
 *
 * ----------------------------------------------------------------
 * --REGRAS IMPORTANTES (Recomendação do DEV) nº 3 
 * ----------------------------------------------------------------
 * Sempre realizar pelo menos:
 * - 1 pedido de Outras Saídas
 * - 1 transferência
 *
 * Essas validações são críticas, pois alterações podem impactar
 * essa funcionalidade e gerar erro apenas no cliente final.
 *
 * ----------------------------------------------------------------
 * --OBJETIVO DO TESTE
 * ----------------------------------------------------------------
 * Verificar se o sistema finaliza o orçamento com a situação:
 * - Orçamento Confirmado
 * - Apenas Orçamento
 *
 * Validar que não ocorram erros ao:
 * - Criar pedido de Outras Saídas
 * - Salvar o orçamento
 *
 * ----------------------------------------------------------------
 * --RESULTADO ESPERADO
 * ----------------------------------------------------------------
 * Ao realizar um pedido de Outras Saídas:
 * - O orçamento deve ser finalizado com a situação
 *   "Orçamento Confirmado"
 * - O sistema não deve apresentar erros no fluxo
 *
 * ----------------------------------------------------------------
 * --COMANDOS SQL AUXILIARES (se aplicável)
 * ----------------------------------------------------------------
 * -- SQL
 *
 * ================================================================
 */ -->

----------------------------------------------------------------------------------------------------------

⬇️ Git —  / Atualizar código 

git status
git add .
git commit -m "mensagem"
git push
👉 SUBIR = sua máquina → GitHub

----------------------------------------------------------------------------------------------------------

⬇️ Git —  / Atualizar código

Projeto já existe:
git pull
Projeto do zero:
git clone https://github.com/Diegosnow1/vendas-e2e-play.git

----------------------------------------------------------------------------------------------------------

🧪 Playwright — Comandos principais
npx playwright test
npx playwright test tests/Formatto.spec.ts
npx playwright test --debug
npx playwright show-report
npx playwright codegen http://URL_DO_SISTEMA
npx playwright codegen --test-id-attribute id http://URL_DO_SISTEMA

----------------------------------------------------------------------------------------------------------

❄️ Cypress — Comandos principais
npx cypress open
npx cypress run
npx cypress run --spec "cypress/e2e/login-vendas.cy.js"


---disparar os 6 CTs do Teste_Geral em sequência com um único comando usando o padrão CT0*.cy.js, que já executa um após o outro automaticamente.--
npx cypress run --spec "cypress/e2e/Teste_Geral/CT0*.cy.js"

--- modo com interface visível (headed), mantendo os 6 CTs em sequência no mesmo comando para  acompanhar a execução na tela.--
npx cypress run --headed --browser chrome --spec "cypress/e2e/Teste_Geral/CT0*.cy.js"
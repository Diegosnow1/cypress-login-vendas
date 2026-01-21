# 📌 Colinha QA — Cypress e Git
----------------------------------------------------------------------------------------------------------

## 📋 Modelo de Ficha / Caso de Teste

```ts
/**
 * FICHA ?
 * CASO DE TESTE ?
 * Problema Detectado:
 * ?
 * Ambiente: 10.10.11.65
 * BANCO DE DADOS: ?
 * Versão: ?
 *
 * RESULTADO ESPERADO:
 * ?
 * 
 * RESULTADO OBTIDO:
 * ?
 */


----------------------------------------------------------------------------------------------------------

🧪 Template Playwright
import { selectors,test,expect } from '@playwright/test';

test('CASO DE TESTE 1', async ({ page }) => {
  await selectors.setTestIdAttribute("id");
  await page.goto('http://localhost:9999/Login');

  // await page.pause(); // ⬅️ PAUSA NO LUGAR CERTO
});

----------------------------------------------------------------------------------------------------------

🧪 Template Playwright
git status
git add .
git commit -m "mensagem"
git push
👉 SUBIR = sua máquina → GitHub

----------------------------------------------------------------------------------------------------------

⬇️ Git — Descer / Atualizar código

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
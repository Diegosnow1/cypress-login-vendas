# 🧪 Projeto de Automação de Testes – Vendas (QA)

Este projeto contém testes automatizados end-to-end utilizando Cypress, com foco em cenários reais de negócio.

Os testes cobrem funcionalidades críticas do sistema, como:

* Criação de pedidos
* Transferências
* Orçamentos
* Validações de regras de negócio

---

## 🚀 Tecnologias utilizadas

* Cypress
* JavaScript
* Git

---

## 📂 Estrutura dos testes

Os testes estão organizados por casos de teste (CTs), simulando situações reais:

* CT01 – Tintométrico
* CT02 – Fora de estoque
* CT03 – Criar pedido / editar orçamento / parcelas
* CT04 – Outras saídas
* CT05 – Transferência
* CT06 – Pedido com múltiplos itens
* CT07 – Duplicação de pedido

---

## 🧠 Modelo de Caso de Teste

Todos os testes seguem um padrão estruturado:

```js
/**
 * ================================================================
 * CASO DE TESTE: CT05 - Pedido Outras Saídas
 * ================================================================
 *
 * Ambiente: Homologação
 * Banco de Dados: Centrao_Diego
 * Versão da aplicação: master
 *
 * ---------------------------------------------------------------
 * REGRAS IMPORTANTES
 * ---------------------------------------------------------------
 * Sempre validar:
 * - Pedido de Outras Saídas
 * - Transferência
 *
 * ---------------------------------------------------------------
 * OBJETIVO
 * ---------------------------------------------------------------
 * Validar criação e finalização do orçamento
 *
 * ---------------------------------------------------------------
 * RESULTADO ESPERADO
 * ---------------------------------------------------------------
 * - Orçamento confirmado
 * - Sem erros no fluxo
 *
 * ---------------------------------------------------------------
 */
```

---

## 🔄 Git — Atualizar código

```bash
git status
git add .
git commit -m "mensagem"
git push
```

👉 SUBIR = sua máquina → GitHub

---

## ⬇️ Git — Baixar / Atualizar projeto

### Projeto já existente

```bash
git pull
```

### Clonar projeto

```bash
git clone https://github.com/Diegosnow1/vendas-e2e-play.git
```

---

## 🧪 Playwright — Comandos principais

```bash
npx playwright test
npx playwright test tests/Formatto.spec.ts
npx playwright test --debug
npx playwright show-report
npx playwright codegen http://URL_DO_SISTEMA
npx playwright codegen --test-id-attribute id http://URL_DO_SISTEMA
```

---

## ❄️ Cypress — Comandos principais

```bash
npx cypress open
npx cypress run
npx cypress run --spec "cypress/e2e/login-vendas.cy.js"
```

### ▶️ Executar todos os CTs em sequência

```bash
npx cypress run --spec "cypress/e2e/Teste_Geral/CT0*.cy.js"
```

### ▶️ Execução com interface (modo visual)

```bash
npx cypress run --headed --browser edge --spec "cypress/e2e/Teste_Pedidos/*.cy.js"
```

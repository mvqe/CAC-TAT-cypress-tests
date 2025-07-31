Automação de testes end-to-end com **Cypress** e **BDD**, baseada no curso da [Talking About Testing School](https://github.com/wlsf82/cypress-basico-v2).

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar os Testes](#como-executar-os-testes)
- [Cenários Automatizados](#cenários-automatizados)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

Este repositório demonstra automação de testes E2E utilizando Cypress com abordagem BDD. O objetivo é validar funcionalidades de uma aplicação de atendimento ao cliente, promovendo boas práticas de qualidade de software.

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (>=18.x recomendado)
- [npm](https://www.npmjs.com/) (>=9.x recomendado)
- [Microsoft Edge](https://www.microsoft.com/edge) ou outro navegador compatível
- [Visual Studio Code](https://code.visualstudio.com/) (>=1.95.0)

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/mvqe/CAC-TAT-cypress-tests.git
cd CAC-TAT-cypress-tests
npm install
```

## Como Executar os Testes

- **Modo headless (terminal):**
  ```sh
  npx cypress run
  ```
- **Modo interativo (GUI):**
  ```sh
  npx cypress open
  ```
  Selecione o arquivo de teste desejado na interface.

## Cenários Automatizados

- Submissão do formulário com sucesso
- Validação de campos obrigatórios
- Validação de e-mail inválido
- Upload de arquivo
- Navegação para Política de Privacidade
- Verificação do conteúdo da Política de Privacidade

## Estrutura do Projeto

```
cypress/
  e2e/
    CAC-TAT.cy.js
    privacy.cy.js
  fixtures/
  plugins/
  support/
src/
  index.html
  privacy.html
  script.js
  style.css
cypress.config.js
package.json
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'feat: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob licença [MIT](LICENSE).

---

> Projeto exclusivamente para fins educacionais e prática com Cypress e BDD.

Feito com 💙 por [@mvqe](https://github.com/mvqe)

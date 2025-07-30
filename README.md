
# CAC-TAT – Cypress BDD E2E Tests 🚀

Projeto de testes automatizados com **Cypress**, utilizando **BDD**, baseado no curso da **Talking About Testing School (cypress-basico-v2)**.

📌 **Pré-requisitos**

- Git  
- Node.js (v20.18.0) e npm (v10.8.2)  
- Microsoft Edge  
- Visual Studio Code (v1.95.0) ou superior  

_Recomenda-se Node.js v18.15.0 e npm 9.5.0 ou superiores._

🚀 **Instalação**

1. Clone o repositório:
```
git clone https://github.com/mvqe/CAC-TAT-cypress-tests.git
```

2. Acesse a pasta do projeto:
```
cd CAC-TAT-cypress-tests
```

3. Instale as dependências:
```
npm install
```

✅ **Cenários BDD Automatizados**

- **Submissão do formulário:** Sucesso ao preencher e enviar.
- **Validação de campos obrigatórios:** Bloqueio ao tentar enviar vazio.
- **Validação de e-mail inválido:** Mensagem de erro ao inserir formato incorreto.
- **Upload de arquivo:** Realizado com sucesso.
- **Navegação:** Verificação do link para a Política de Privacidade.
- **Verificação:** Confirmação da Política de Privacidade em nova aba.

▶️ **Como executar os testes**

- Para rodar os testes no modo headless (linha de comando):
```
npx cypress run
```

- Para rodar no modo interativo (com interface gráfica):
```
npx cypress open
```

Selecione o arquivo de testes desejado dentro da interface para executá-lo.

📄 **Estrutura do Projeto**

```
📁 cypress
 └── 📁 e2e
      └── CAC-TAT.cy.js
      └── privacy.cy.js
📄 cypress.config.js
📄 package.json
```

📌 **Observações**

- Este projeto é **exclusivamente para fins educacionais e prática** com automação de testes usando Cypress e conceitos de BDD.

💙 Feito com dedicação por [@mvqe](https://github.com/mvqe)

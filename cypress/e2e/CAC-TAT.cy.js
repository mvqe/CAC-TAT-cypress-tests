beforeEach(() => {
  cy.visit("src/index.html");
  cy.injectAxe();
});

describe("Testes CAC-TAT", () => {
  // Cenário 1: Submissão bem-sucedida do formulário
  // Dado que o usuário acessa a página principal da aplicação
  // E preenche todos os campos obrigatórios corretamente
  // E seleciona um tipo de atendimento
  // E escolhe um meio de contato preferencial
  // E preenche a descrição do problema
  // Quando clica no botão "Enviar"
  // Então o sistema deve exibir uma mensagem de sucesso
  it("Submissão bem-sucedida do formulário", () => {
    cy.fillMandatoryFieldsAndSubmit(
      "Analista",
      "QA",
      "tester@gmail.com",
      "Testando"
    );

    cy.get("span[class='success']")
      .should("contain.text", "Mensagem enviada com sucesso.")
      .and("be.visible");

    cy.checkA11y("span[class='success']");
  });
  // Cenário 2: Validação de campos obrigatórios
  // Dado que o usuário acessa a página principal da aplicação
  // Quando tenta enviar o formulário sem preencher os campos obrigatórios
  // Então o sistema deve exibir uma mensagem de para validar os campos obrigatórios
  it("Validação de campos obrigatórios (Sem preencher o nome)", () => {
    cy.fillMandatoryFieldsAndSubmit(" ", "QA", "tester@gmail.com", "Testando");

    cy.get("span[class='error']").should(
      "contain.text",
      "Valide os campos obrigatórios!"
    );

    cy.checkA11y("span[class='error']");
  });
  it("Validação de campos obrigatórios (Sem preencer o sobrenome)", () => {
    cy.fillMandatoryFieldsAndSubmit(
      "Analista",
      " ",
      "tester@gmail.com",
      "Testando"
    );

    cy.get("span[class='error']").should(
      "contain.text",
      "Valide os campos obrigatórios!"
    );

    cy.checkA11y("span[class='error']");
  });
  it("Validação de campos obrigatórios (Sem preencher o email)", () => {
    cy.fillMandatoryFieldsAndSubmit("Analista", "QA", " ", "Testando");

    cy.get("span[class='error']")
      .should("contain.text", "Valide os campos obrigatórios!")
      .and("be.visible");

    cy.checkA11y("span[class='error']");
  });
  it("Validação de campos obrigatórios (Sem preencher o campo 'Como podemos ajudar?')", () => {
    cy.fillMandatoryFieldsAndSubmit("Analista", "QA", "tester@gmail.com", " ");

    cy.get("span[class='error']").should(
      "contain.text",
      "Valide os campos obrigatórios!"
    );

    cy.checkA11y("span[class='error']");
  });
  it("Validação de campos obrigatórios (Sem preencher nenhum campo)", () => {
    cy.fillMandatoryFieldsAndSubmit(" ", " ", " ", " ");

    cy.get("span[class='error']")
      .should("contain.text", "Valide os campos obrigatórios!")
      .and("be.visible");

    cy.checkA11y("span[class='error']");
  });
  // Cenário 3: Validação de e-mail inválido
  // Dado que o usuário acessa a página principal da aplicação
  // E preenche o campo de e-mail com um formato inválido (ex: "email@invalido")
  // Quando tenta enviar o formulário
  // Então o sistema deve exibir uma mensagem de para validar os campos obrigatórios
  it("Validação de e-mail inválido", () => {
    cy.fillMandatoryFieldsAndSubmit(
      "Analista",
      "QA",
      "tester&gmail.com",
      "Testando"
    );

    cy.get("span[class='error']")
      .should("contain.text", "Valide os campos obrigatórios!")
      .and("be.visible");

    cy.checkA11y("span[class='error']");
  });
  // Cenário 4: Upload de arquivo com extensão permitida
  // Dado que o usuário acessa a página principal da aplicação
  // E anexa um arquivo com uma extensão permitida
  // Quando tenta enviar o formulário
  // Então o sistema deve exibir uma mensagem de sucesso informando que o arquivo foi enviado
  it("Upload de arquivo com extensão permitida", () => {
    cy.fillMandatoryFieldsAndSubmit(
      "Analista",
      "QA",
      "tester@gmail.com",
      "Testando"
    );

    cy.get("#file-upload")
      .should("be.visible")
      .and("not.have.value")
      .selectFile("cypress/fixtures/example.json");
    cy.get("#file-upload").should("have.prop", "files").and("not.be.empty");

    cy.get("span[class='success']")
      .should("contain.text", "Mensagem enviada com sucesso.")
      .and("be.visible");

    cy.checkA11y("span[class='success']");
  });

  // Cenário 5: Navegação para a política de privacidade
  // Dado que o usuário acessa a página principal da aplicação
  // Quando clica no link "Política de Privacidade"
  // Então o sistema deve redirecioná-lo para a página de política de privacidade
  it("Navegação para a política de privacidade", () => {
    cy.get("a").invoke("removeAttr", "target").click();
    cy.url().should("include", "privacy.html");
  });
});

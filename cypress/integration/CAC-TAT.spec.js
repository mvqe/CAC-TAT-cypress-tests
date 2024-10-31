beforeEach(function () {
  cy.visit("src/index.html");
});

describe("Central de atendimaento ao cliente", function () {
  it("Verifica o título daaplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Preenche os campos obrigatórios e envia o formulário", function () {
    cy.get("#firstName").type("Marcos");
    cy.get("#lastName").type("Marques");
    cy.get("#email").type("marcos@gmail.com");
    cy.get("#open-text-area").type("teste para o curso de cypress básico V2");
    cy.contains("button", "Enviar").should("be.visible").click();
    cy.get(".success > strong").should("be.visible");
  });

  it("Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    let longtext =
      "testing, testing, testing, testing, testing, testing, testing, testing, testing, testing, testing, testing, testing";

    cy.get("#firstName").type("Marcos");
    cy.get("#lastName").type("Marques");
    cy.get("#email").type("marcosAgmail.com");
    cy.get("#open-text-area").type(longtext, {
      delay: 0,
    });
    cy.contains("button", "Enviar").should("be.visible").click();
    cy.get(".error").should("be.visible");
  });

  it("Se um valor não-numérico for digitado, seu valor continuará vazio.", function () {
    cy.get("#phone").type("abcd").should("be.empty");
  });

  it("Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("#phone-checkbox").should("be.visible").check();
    cy.get("#firstName").type("Marcos");
    cy.get("#lastName").type("Marques");
    cy.get("#email").type("marcos@gmail.com");
    cy.get("#open-text-area").type("teste para o curso de cypress básico V2");
    cy.contains("button", "Enviar").should("be.visible").click();
    cy.get(".error").should("be.visible");
  });

  it("Preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("#phone-checkbox").should("be.visible").click();
    cy.get("#firstName")
      .type("Marcos")
      .should("have.value", "Marcos")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Marques")
      .should("have.value", "Marques")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("marcos@gmail.com")
      .should("have.value", "marcos@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("98765432")
      .should("have.value", "98765432")
      .clear()
      .should("have.value", "");
    cy.get("#open-text-area")
      .type("teste para o curso de cypress básico V2")
      .should("have.value", "teste para o curso de cypress básico V2")
      .clear()
      .should("have.value", "");
  });

  it("Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.contains("button", "Enviar").should("be.visible").click();
    cy.get(".error").should("be.visible");
  });

  it("envia o formulário com sucesso usando um comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit(
      "Marcos",
      "Marques",
      "marcos@gmail.com",
      "Teste de comando personalizado"
    );
    cy.get(".success > strong").should("be.visible");
  });

  it("Seleciona um produto (YouTube) por seu texto", function () {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });

  it("Seleciona um produto (Mentoria) por seu valor (value)", function () {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });

  it("Seleciona um produto (Blog) por seu índice", function () {
    cy.get("#product").select(1).should("have.value", "blog");
  });

  it('Marca o tipo de atendimento "Feedback"', function () {
    cy.get(":nth-child(4) > input").check().should("have.value", "feedback");
  });

  it("Marca cada tipo de atendimento", function () {
    cy.get('#support-type input[type="radio"]').each(($radio) => {
      cy.wrap($radio).check().should("be.checked");
    });
  });

  it("Marca ambos checkboxes, depois desmarca o último", function () {
    cy.get('#check input[type="checkbox"]').each(($checkbox) => {
      cy.wrap($checkbox)
        .check()
        .should("be.checked")
        .last()
        .uncheck()
        .should("not.be.checked");
    });
  });

  it("Seleciona um arquivo da pasta fixtures", function () {
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("cypress/fixtures/example.json");
    cy.get("#file-upload")
      .should("have.prop", "files")
      .then((files) => {
        expect(files[0].name).to.equal("example.json");
      });
  });

  it("Seleciona um arquivo da pasta fixtures", function () {
    cy.get("#file-upload").selectFile("cypress/fixtures/example.json", {
      action: "drag-drop",
    });
    cy.get("#file-upload")
      .should("have.prop", "files")
      .then((files) => {
        expect(files[0].name).to.equal("example.json");
      });
  });
  //TODO
  it("Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", function () {
    cy.fixture("example.json").as("exemploTXT");
    cy.get("#file-upload").selectFile("@exemploTXT");
    cy.get("#file-upload")
      .should("have.prop", "files")
      .then((files) => {
        expect(files[0].name).to.equal("example.json");
      });
  });

  it("Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", function () {
    cy.get("a").should("have.attr", "target", "_blank");
  });

  it("Acessa a página da política de privacidade removendo o target e então clicando no link", function () {
    cy.get("a").invoke("removeAttr", "target").click();
    cy.url().should("include", "privacy.html");
  });
});

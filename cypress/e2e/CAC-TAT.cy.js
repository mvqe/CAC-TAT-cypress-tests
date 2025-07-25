beforeEach(() => {
  cy.visit("src/index.html");
  cy.injectAxe();
});

describe("CAC-TAT Tests", () => {
  // Scenario 1: Successful form submission
  // Given that the user accesses the application's main page
  // And fills out all required fields correctly
  // And selects a service type
  // And chooses a preferred contact method
  // And fills out the problem description
  // When clicking the "Submit" button
  // Then the system should display a success message
  it("Successful form submission", () => {
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
  // Scenario 2: Validating required fields
  // Given that the user accesses the application's main page
  // When they try to submit the form without filling in the required fields
  // Then the system should display a message to validate the required fields
  it("Validation of mandatory fields (Without filling in the name field)", () => {
    cy.fillMandatoryFieldsAndSubmit(" ", "QA", "tester@gmail.com", "Testando");

    cy.get("span[class='error']").should(
      "contain.text",
      "Valide os campos obrigatórios!"
    );

    cy.checkA11y("span[class='error']");
  });
  it("Validation of mandatory fields (Without filling in the surname field)", () => {
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
  it("Validation of mandatory fields (Without filling in the email field)", () => {
    cy.fillMandatoryFieldsAndSubmit("Analista", "QA", " ", "Testando");

    cy.get("span[class='error']").should(
      "contain.text",
      "Valide os campos obrigatórios!"
    );

    cy.checkA11y("span[class='error']");
  });
  it("Validation of mandatory fields (Without filling in the 'How can we help?' field)", () => {
    cy.fillMandatoryFieldsAndSubmit("Analista", "QA", "tester@gmail.com", " ");

    cy.get("span[class='error']").should(
      "contain.text",
      "Valide os campos obrigatórios!"
    );

    cy.checkA11y("span[class='error']");
  });
  it("Validation of mandatory fields (Without filling in any fields)", () => {
    cy.fillMandatoryFieldsAndSubmit(" ", " ", " ", " ");

    cy.get("span[class='error']").should(
      "contain.text",
      "Valide os campos obrigatórios!"
    );

    cy.checkA11y("span[class='error']");
  });
  // Scenario 3: Invalid Email Validation
  // Given that the user accesses the application's main page
  // And fills in the email field with an invalid format (e.g., "invalid@email")
  // When attempting to submit the form
  // Then the system should display a message to validate the required fields
  it("Invalid email validation", () => {
    cy.fillMandatoryFieldsAndSubmit(
      "Analista",
      "QA",
      "tester&gmail.com",
      "Testando"
    );

    cy.get("span[class='error']").should(
      "contain.text",
      "Valide os campos obrigatórios!"
    );

    cy.checkA11y("span[class='error']");
  });
  // Scenario 4: Uploading a file with an allowed extension
  // Given that the user accesses the application's main page
  // And attaches a file with an allowed extension
  // When attempting to submit the form
  // Then the system should display a success message informing that the file was uploaded
  it("Upload file with allowed extension", () => {
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

  // Scenario 5: Navigating to the Privacy Policy
  // Given that the user accesses the application's main page
  // When they click the "Privacy Policy" link
  // Then the system should redirect them to the privacy policy page
  it("Navigation to privacy policy", () => {
    cy.get("a").invoke("removeAttr", "target").click();
    cy.url().should("include", "privacy.html");
  });
});

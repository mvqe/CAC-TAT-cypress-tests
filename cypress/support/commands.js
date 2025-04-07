Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  function (firstName, lastName, email, message) {
    cy.get("#firstName").should("be.visible").type(firstName);
    cy.get("#lastName").should("be.visible").type(lastName);
    cy.get("#email").should("be.visible").type(email);
    cy.get("#open-text-area").should("be.visible").type(message, {
      delay: 0,
    });
    cy.contains("Enviar").should("be.visible").click();
  }
);

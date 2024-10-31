Cypress.Commands.add(
    "fillMandatoryFieldsAndSubmit",
    function (firstName, lastName, email, message) {
      cy.get("#firstName").type(firstName);
      cy.get("#lastName").type(lastName);
      cy.get("#email").type(email);
      cy.get("#open-text-area").type(message, {
        delay: 0,
      });
      cy.contains("Enviar").should("be.visible").click();
    });
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import "cypress-axe";
// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

/*Cypress.Commands.add(
    "fillMandatoryFieldsAndSubmit",
    function (firstName, lastName, email, message) {
      cy.get("#firstName").type(firstName);
      cy.get("#lastName").type(lastName);
      cy.get("#email").type(email);
      cy.get("#open-text-area").type(message, {
        delay: 0,
      });
      cy.contains("Enviar").should("be.visible").click();
    });*/

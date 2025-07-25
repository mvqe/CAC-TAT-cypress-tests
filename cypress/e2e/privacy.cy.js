describe("Privacy Policy", function () {
  // Scenario 6: Privacy Policy Verification
  // Given that the user accesses the Privacy Policy page
  // Then the text should inform that data is not saved and that the application is for educational purposes only
  it("Privacy Policy validation", () => {
    cy.visit("src/privacy.html");
    cy.injectAxe();
    cy.title().should(
      "be.equal",
      "Central de Atendimento ao Cliente TAT - Política de privacidade"
    );

    cy.checkA11y("#title");

    cy.get("#white-background")
      .should("be.visible")
      .and(
        "contain.text",
        "Não salvamos dados submetidos no formulário da aplicação CAC TAT",
        "Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.",
        "No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.",
        "Talking About Testing"
      );

    cy.checkA11y("#white-background");
  });
});

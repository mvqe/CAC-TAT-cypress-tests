describe("Testa a página da política de privacidade de forma independente", function () {
    it("Verifica T´tulo, backgorund e texto específico", function () {
        cy.visit("src/privacy.html")
        cy.title().should(
          "be.equal",
          "Central de Atendimento ao Cliente TAT - Política de privacidade"
        );
        cy.get("#white-background")
          .should("be.visible")
          .should("not.be.empty")
          .contains("Talking About Testing");
      });
})
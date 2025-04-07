describe("Política de privacidade", function () {
  // Cenário 6: Verificação da política de privacidade
  // Dado que o usuário acessa a página de Política de Privacidade
  // Então o texto deve informar que os dados não são salvos e que a aplicação é apenas para fins educacionais
  it("Verificação da política de privacidade", function () {
    cy.visit("src/privacy.html");
    cy.title().should(
      "be.equal",
      "Central de Atendimento ao Cliente TAT - Política de privacidade"
    );
    cy.get("#white-background")
      .should("be.visible")
      .should(
        "contain.text",
        "Não salvamos dados submetidos no formulário da aplicação CAC TAT",
        "Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.",
        "No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.",
        "Talking About Testing"
      );
  });
});
